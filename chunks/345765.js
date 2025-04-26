n.d(t, { Z: () => Y }), n(388685);
var r = n(392711),
    i = n(126313),
    a = n(570140),
    o = n(147913),
    s = n(539746),
    l = n(38618),
    c = n(86071),
    u = n(553795),
    d = n(517100),
    f = n(451478),
    _ = n(70956),
    p = n(162461),
    h = n(564990),
    m = n(71585),
    g = n(146282),
    E = n(206583),
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
let v = 4,
    O = 2 * _.Z.Millis.MINUTE,
    I = E.YN.GLOBAL_FEED,
    S = 15 * _.Z.Millis.MINUTE,
    T = new Map(),
    A = new Set(),
    N = new Map(),
    C = null,
    R = (0, r.debounce)(h.yK, 3000, { trailing: !0 });
function P() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
    return Math.random() * (e + 1) * O;
}
function w(e, t) {
    a.Z.dispatch({
        type: 'CONTENT_INVENTORY_SET_FEED_STATE',
        feedId: e,
        state: t
    });
}
function D(e) {
    if (A.has(e) || (e === E.YN.GAME_PROFILE_FEED && (!(0, s._J)('ContentInventoryManager') || void 0 !== g.Z.getFeed(e)))) return !1;
    if (e === I) {
        if (!(0, p.sA)('ContentInventoryManager') || (m.Z.hidden && null != g.Z.getFeed(e)) || !f.Z.isFocused() || !l.Z.isConnected()) return !1;
        let t = d.Z.getIdleSince();
        if (null != t && Date.now() - t > S) return !1;
    }
    return !0;
}
function L(e) {
    w(e, { loading: !1 });
    let t = T.get(e);
    void 0 !== t && (clearTimeout(t), T.delete(e));
}
function x() {
    var e;
    let t = null != (e = N.get(I)) ? e : 0;
    if ((t > 0 && t <= v) || (L(I), !D(I))) return;
    let n = g.Z.getFeed(I);
    if ((null == n ? void 0 : n.refresh_stale_inbox_after_ms) != null && null == C) return;
    let r = (null == n ? void 0 : n.expired_at) == null ? 0 : new Date(n.expired_at).getTime() - Date.now(),
        a = Math.max(0, null == C ? 0 : new Date(C).getTime() - Date.now(), r) + (t > 0 ? P() : 0);
    w(I, {
        loading: !1,
        nextFetchDate: new Date(Date.now() + a)
    }),
        T.set(
            I,
            setTimeout(
                () =>
                    M({
                        feedId: I,
                        feature: i.L.INBOX
                    }),
                a
            )
        );
}
async function M(e) {
    let { feedId: t, feature: n, force: r = !1 } = e;
    if (D(t) || r)
        try {
            let e = g.Z.getFeed(t);
            A.add(t), w(t, { loading: !0 });
            let r = await (0, h.mt)({
                token: null == e ? void 0 : e.refresh_token,
                feedId: t,
                feature: n
            });
            a.Z.dispatch({
                type: 'CONTENT_INVENTORY_SET_FEED',
                feedId: t,
                feed: r
            }),
                N.set(t, 0),
                A.delete(t),
                w(t, { loading: !1 }),
                t === I && ((C = null), x());
        } catch (o) {
            var i;
            let e = null != (i = N.get(t)) ? i : 0;
            if (e < v) {
                let i = _.Z.Millis.MINUTE * Math.pow(2, e) + P(e);
                T.set(
                    t,
                    setTimeout(
                        () =>
                            M({
                                feedId: t,
                                feature: n,
                                force: r
                            }),
                        i
                    )
                ),
                    N.set(t, e + 1);
            } else
                a.Z.dispatch({
                    type: 'CONTENT_INVENTORY_CLEAR_FEED',
                    feedId: t
                });
            A.delete(t);
        }
}
function k() {
    x();
}
function j() {
    (0, p.E2)('ContentInventoryManager'), k();
}
function U() {
    L(I);
}
function G(e) {
    let { feedId: t, feature: n } = e;
    L(t),
        M({
            feedId: t,
            feature: n,
            force: !0
        });
}
function B(e) {
    let { refreshAfterMs: t } = e,
        n = g.Z.getFeed(I);
    (null == n ? void 0 : n.refresh_stale_inbox_after_ms) != null && ((C = new Date(Date.now() + (null != t ? t : n.refresh_stale_inbox_after_ms)).toUTCString()), x());
}
function V(e) {
    var t;
    let { connectionId: n, track: r } = e;
    null != n && (null == (t = u.Z.getAccount(n, b.ABu.SPOTIFY)) ? void 0 : t.showActivity) && R(n, r);
}
function F() {
    let { enabled: e } = p.iC.getCurrentConfig({ location: 'ContentInventoryManager' }, { autoTrackExposure: !0 });
    e &&
        M({
            feedId: E.YN.GAME_PROFILE_FEED,
            feature: i.L.GAME_PROFILE
        });
}
function Z() {
    let { enabled: e } = c.Z.getCurrentConfig({ location: 'ContentInventoryManager' }, { autoTrackExposure: !0 });
    e &&
        M({
            feedId: E.YN.GAME_PROFILE_FEED,
            feature: i.L.OVERLAY_INVITES
        });
}
class H extends o.Z {
    constructor(...e) {
        super(...e),
            y(this, 'actions', {
                POST_CONNECTION_OPEN: j,
                CONNECTION_CLOSED: U,
                WINDOW_FOCUS: k,
                IDLE: k,
                CONTENT_INVENTORY_TOGGLE_FEED_HIDDEN: k,
                CONTENT_INVENTORY_MANUAL_REFRESH: G,
                CONTENT_INVENTORY_INBOX_STALE: B,
                SPOTIFY_NEW_TRACK: V,
                GAME_PROFILE_OPEN: F,
                OVERLAY_READY: Z
            });
    }
}
let Y = new H();
