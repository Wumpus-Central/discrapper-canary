n.d(t, { Z: () => Y }), n(47120);
var i = n(392711),
    r = n(126313),
    a = n(570140),
    s = n(147913),
    o = n(539746),
    l = n(38618),
    u = n(86071),
    c = n(456644),
    d = n(553795),
    f = n(517100),
    _ = n(451478),
    p = n(70956),
    h = n(162461),
    m = n(564990),
    g = n(71585),
    E = n(146282),
    v = n(206583),
    y = n(981631);
function I(e, t, n) {
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
let b = 4,
    T = 2 * p.Z.Millis.MINUTE,
    S = v.YN.GLOBAL_FEED,
    A = 15 * p.Z.Millis.MINUTE,
    N = new Map(),
    C = new Set(),
    R = new Map(),
    O = null,
    D = (0, i.debounce)(m.yK, 3000, { trailing: !0 });
function x() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
    return Math.random() * (e + 1) * T;
}
function L(e, t) {
    a.Z.dispatch({
        type: 'CONTENT_INVENTORY_SET_FEED_STATE',
        feedId: e,
        state: t
    });
}
function P(e) {
    if (C.has(e) || (e === v.YN.GAME_PROFILE_FEED && (!(0, o._J)('ContentInventoryManager') || void 0 !== E.Z.getFeed(e)))) return !1;
    if (e === S) {
        if (!(0, h.sA)('ContentInventoryManager') || (g.Z.hidden && null != E.Z.getFeed(e)) || !_.Z.isFocused() || !l.Z.isConnected()) return !1;
        let t = f.Z.getIdleSince();
        if (null != t && Date.now() - t > A) return !1;
    }
    return !0;
}
function w(e) {
    L(e, { loading: !1 });
    let t = N.get(e);
    void 0 !== t && (clearTimeout(t), N.delete(e));
}
function M() {
    var e;
    let t = null !== (e = R.get(S)) && void 0 !== e ? e : 0;
    if ((t > 0 && t <= b) || (w(S), !P(S))) return;
    let n = E.Z.getFeed(S);
    if ((null == n ? void 0 : n.refresh_stale_inbox_after_ms) != null && null == O) return;
    let i = (null == n ? void 0 : n.expired_at) == null ? 0 : new Date(n.expired_at).getTime() - Date.now(),
        a = Math.max(0, null == O ? 0 : new Date(O).getTime() - Date.now(), i) + (t > 0 ? x() : 0);
    L(S, {
        loading: !1,
        nextFetchDate: new Date(Date.now() + a)
    }),
        N.set(
            S,
            setTimeout(
                () =>
                    k({
                        feedId: S,
                        feature: r.L.INBOX
                    }),
                a
            )
        );
}
async function k(e) {
    let { feedId: t, feature: n, force: i = !1 } = e;
    if (P(t) || i)
        try {
            let e = E.Z.getFeed(t);
            C.add(t), L(t, { loading: !0 });
            let i = await (0, m.mt)({
                token: null == e ? void 0 : e.refresh_token,
                feedId: t,
                feature: n
            });
            a.Z.dispatch({
                type: 'CONTENT_INVENTORY_SET_FEED',
                feedId: t,
                feed: i
            }),
                R.set(t, 0),
                C.delete(t),
                L(t, { loading: !1 }),
                t === S && ((O = null), M());
        } catch (s) {
            var r;
            let e = null !== (r = R.get(t)) && void 0 !== r ? r : 0;
            if (e < b) {
                let r = p.Z.Millis.MINUTE * Math.pow(2, e) + x(e);
                N.set(
                    t,
                    setTimeout(
                        () =>
                            k({
                                feedId: t,
                                feature: n,
                                force: i
                            }),
                        r
                    )
                ),
                    R.set(t, e + 1);
            } else
                a.Z.dispatch({
                    type: 'CONTENT_INVENTORY_CLEAR_FEED',
                    feedId: t
                });
            C.delete(t);
        }
}
function U() {
    M();
}
function G() {
    U();
    let { recentActivityEnabled: e } = (0, c.G)({
        location: 'ContentInventoryManager',
        autoTrackExposure: !1
    });
    e &&
        k({
            feedId: v.YN.GAME_PROFILE_FEED,
            feature: r.L.RECENT_ACTIVITY
        });
}
function B() {
    w(S);
}
function Z(e) {
    let { feedId: t, feature: n } = e;
    w(t),
        k({
            feedId: t,
            feature: n,
            force: !0
        });
}
function F(e) {
    let { refreshAfterMs: t } = e,
        n = E.Z.getFeed(S);
    (null == n ? void 0 : n.refresh_stale_inbox_after_ms) != null && ((O = new Date(Date.now() + (null != t ? t : n.refresh_stale_inbox_after_ms)).toUTCString()), M());
}
function V(e) {
    var t;
    let { connectionId: n, track: i } = e;
    null != n && (null === (t = d.Z.getAccount(n, y.ABu.SPOTIFY)) || void 0 === t ? void 0 : t.showActivity) && D(n, i);
}
function j() {
    let { enabled: e } = u.Z.getCurrentConfig({ location: 'ContentInventoryManager' }, { autoTrackExposure: !0 });
    e &&
        k({
            feedId: v.YN.GAME_PROFILE_FEED,
            feature: r.L.GAME_PROFILE
        });
}
class H extends s.Z {
    constructor(...e) {
        super(...e),
            I(this, 'actions', {
                POST_CONNECTION_OPEN: G,
                CONNECTION_CLOSED: B,
                WINDOW_FOCUS: U,
                IDLE: U,
                CONTENT_INVENTORY_TOGGLE_FEED_HIDDEN: U,
                CONTENT_INVENTORY_MANUAL_REFRESH: Z,
                CONTENT_INVENTORY_INBOX_STALE: F,
                SPOTIFY_NEW_TRACK: V,
                GAME_PROFILE_OPEN: j,
                OVERLAY_READY: j
            });
    }
}
let Y = new H();
