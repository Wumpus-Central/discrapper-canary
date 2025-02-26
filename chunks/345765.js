n.d(t, { Z: () => Y }), n(47120);
var r = n(392711),
    i = n(126313),
    o = n(570140),
    a = n(147913),
    s = n(539746),
    l = n(38618),
    c = n(86071),
    u = n(32300),
    d = n(553795),
    f = n(517100),
    _ = n(451478),
    p = n(70956),
    h = n(162461),
    g = n(564990),
    m = n(71585),
    E = n(146282),
    v = n(206583),
    b = n(981631);
function y(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let O = 4,
    S = 2 * p.Z.Millis.MINUTE,
    I = v.YN.GLOBAL_FEED,
    T = 15 * p.Z.Millis.MINUTE,
    N = new Map(),
    A = new Set(),
    C = new Map(),
    R = null,
    P = (0, r.debounce)(g.yK, 3000, { trailing: !0 });
function D() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
    return Math.random() * (e + 1) * S;
}
function w(e, t) {
    o.Z.dispatch({
        type: 'CONTENT_INVENTORY_SET_FEED_STATE',
        feedId: e,
        state: t
    });
}
function L(e) {
    if (A.has(e) || (e === v.YN.GAME_PROFILE_FEED && (!(0, s._J)('ContentInventoryManager') || void 0 !== E.Z.getFeed(e)))) return !1;
    if (e === I) {
        if (!(0, h.sA)('ContentInventoryManager') || (m.Z.hidden && null != E.Z.getFeed(e)) || !_.Z.isFocused() || !l.Z.isConnected()) return !1;
        let t = f.Z.getIdleSince();
        if (null != t && Date.now() - t > T) return !1;
    }
    return !0;
}
function x(e) {
    w(e, { loading: !1 });
    let t = N.get(e);
    void 0 !== t && (clearTimeout(t), N.delete(e));
}
function M() {
    var e;
    let t = null !== (e = C.get(I)) && void 0 !== e ? e : 0;
    if ((t > 0 && t <= O) || (x(I), !L(I))) return;
    let n = E.Z.getFeed(I);
    if ((null == n ? void 0 : n.refresh_stale_inbox_after_ms) != null && null == R) return;
    let r = (null == n ? void 0 : n.expired_at) == null ? 0 : new Date(n.expired_at).getTime() - Date.now(),
        o = Math.max(0, null == R ? 0 : new Date(R).getTime() - Date.now(), r) + (t > 0 ? D() : 0);
    w(I, {
        loading: !1,
        nextFetchDate: new Date(Date.now() + o)
    }),
        N.set(
            I,
            setTimeout(
                () =>
                    k({
                        feedId: I,
                        feature: i.L.INBOX
                    }),
                o
            )
        );
}
async function k(e) {
    let { feedId: t, feature: n, force: r = !1 } = e;
    if (L(t) || r)
        try {
            let e = E.Z.getFeed(t);
            A.add(t), w(t, { loading: !0 });
            let r = await (0, g.mt)({
                token: null == e ? void 0 : e.refresh_token,
                feedId: t,
                feature: n
            });
            o.Z.dispatch({
                type: 'CONTENT_INVENTORY_SET_FEED',
                feedId: t,
                feed: r
            }),
                C.set(t, 0),
                A.delete(t),
                w(t, { loading: !1 }),
                t === I && ((R = null), M());
        } catch (a) {
            var i;
            let e = null !== (i = C.get(t)) && void 0 !== i ? i : 0;
            if (e < O) {
                let i = p.Z.Millis.MINUTE * Math.pow(2, e) + D(e);
                N.set(
                    t,
                    setTimeout(
                        () =>
                            k({
                                feedId: t,
                                feature: n,
                                force: r
                            }),
                        i
                    )
                ),
                    C.set(t, e + 1);
            } else
                o.Z.dispatch({
                    type: 'CONTENT_INVENTORY_CLEAR_FEED',
                    feedId: t
                });
            A.delete(t);
        }
}
function j() {
    M();
}
function U() {
    j();
}
function G() {
    x(I);
}
function B(e) {
    let { feedId: t, feature: n } = e;
    x(t),
        k({
            feedId: t,
            feature: n,
            force: !0
        });
}
function V(e) {
    let { refreshAfterMs: t } = e,
        n = E.Z.getFeed(I);
    (null == n ? void 0 : n.refresh_stale_inbox_after_ms) != null && ((R = new Date(Date.now() + (null != t ? t : n.refresh_stale_inbox_after_ms)).toUTCString()), M());
}
function F(e) {
    var t;
    let { connectionId: n, track: r } = e;
    null != n && (null === (t = d.Z.getAccount(n, b.ABu.SPOTIFY)) || void 0 === t ? void 0 : t.showActivity) && P(n, r);
}
function Z() {
    let { enabled: e } = h.iC.getCurrentConfig({ location: 'ContentInventoryManager' }, { autoTrackExposure: !0 });
    e &&
        k({
            feedId: v.YN.GAME_PROFILE_FEED,
            feature: i.L.GAME_PROFILE
        });
}
function H() {
    let { enabled: e } = c.Z.getCurrentConfig({ location: 'ContentInventoryManager' }, { autoTrackExposure: !0 }),
        t = (0, u.Rb)('ContentInventoryManager').allowActivityWidget;
    (e || t) &&
        k({
            feedId: v.YN.GAME_PROFILE_FEED,
            feature: i.L.OVERLAY_INVITES
        });
}
class W extends a.Z {
    constructor(...e) {
        super(...e),
            y(this, 'actions', {
                POST_CONNECTION_OPEN: U,
                CONNECTION_CLOSED: G,
                WINDOW_FOCUS: j,
                IDLE: j,
                CONTENT_INVENTORY_TOGGLE_FEED_HIDDEN: j,
                CONTENT_INVENTORY_MANUAL_REFRESH: B,
                CONTENT_INVENTORY_INBOX_STALE: V,
                SPOTIFY_NEW_TRACK: F,
                GAME_PROFILE_OPEN: Z,
                OVERLAY_READY: H
            });
    }
}
let Y = new W();
