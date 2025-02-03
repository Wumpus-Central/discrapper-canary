n.d(t, { Z: () => j }), n(47120);
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
    p = n(162461),
    h = n(564990),
    m = n(71585),
    g = n(146282),
    E = n(206583),
    v = n(981631);
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
let I = 3,
    b = 5,
    T = E.YN.GLOBAL_FEED,
    S = 900000,
    A = new Map(),
    N = new Set(),
    C = new Map(),
    R = null,
    O = (0, i.debounce)(h.yK, 3000, { trailing: !0 });
function D(e, t) {
    a.Z.dispatch({
        type: 'CONTENT_INVENTORY_SET_FEED_STATE',
        feedId: e,
        state: t
    });
}
function x(e) {
    if (N.has(e) || (e === E.YN.GAME_PROFILE_FEED && (!(0, o._J)('ContentInventoryManager') || void 0 !== g.Z.getFeed(e)))) return !1;
    if (e === T) {
        if (!(0, p.sA)('ContentInventoryManager') || (m.Z.hidden && null != g.Z.getFeed(e)) || !_.Z.isFocused() || !l.Z.isConnected()) return !1;
        let t = f.Z.getIdleSince();
        if (null != t && Date.now() - t > S) return !1;
    }
    return !0;
}
function L(e) {
    D(e, { loading: !1 });
    let t = A.get(e);
    void 0 !== t && (clearTimeout(t), A.delete(e));
}
function P() {
    if ((L(T), !x(T))) return;
    let e = g.Z.getFeed(T);
    if ((null == e ? void 0 : e.refresh_stale_inbox_after_ms) != null && null == R) return;
    let t = (null == e ? void 0 : e.expired_at) == null ? 0 : new Date(e.expired_at).getTime() - Date.now(),
        n = Math.max(0, null == R ? 0 : new Date(R).getTime() - Date.now(), t);
    D(T, {
        loading: !1,
        nextFetchDate: new Date(Date.now() + n)
    }),
        A.set(
            T,
            setTimeout(
                () =>
                    w({
                        feedId: T,
                        feature: r.L.INBOX
                    }),
                n
            )
        );
}
async function w(e) {
    let { feedId: t, feature: n, force: i = !1 } = e;
    if (x(t) || i)
        try {
            let e = g.Z.getFeed(t);
            N.add(t), D(t, { loading: !0 });
            let i = await (0, h.mt)({
                token: null == e ? void 0 : e.refresh_token,
                feedId: t,
                feature: n
            });
            a.Z.dispatch({
                type: 'CONTENT_INVENTORY_SET_FEED',
                feedId: t,
                feed: i
            }),
                C.set(t, 0),
                N.delete(t),
                D(t, { loading: !1 }),
                t === T && ((R = null), P());
        } catch (s) {
            var r;
            let e = null !== (r = C.get(t)) && void 0 !== r ? r : 0;
            if (e < I) {
                let r = 1000 * Math.pow(b, e);
                A.set(
                    t,
                    setTimeout(
                        () =>
                            w({
                                feedId: t,
                                feature: n,
                                force: i
                            }),
                        r
                    )
                ),
                    C.set(t, e + 1);
            } else
                a.Z.dispatch({
                    type: 'CONTENT_INVENTORY_CLEAR_FEED',
                    feedId: t
                });
            N.delete(t);
        }
}
function M() {
    P();
}
function k() {
    M();
    let { recentActivityEnabled: e } = (0, c.G)({
        location: 'ContentInventoryManager',
        autoTrackExposure: !1
    });
    e &&
        w({
            feedId: E.YN.GAME_PROFILE_FEED,
            feature: r.L.RECENT_ACTIVITY
        });
}
function U() {
    L(T);
}
function G(e) {
    let { feedId: t, feature: n } = e;
    L(t),
        w({
            feedId: t,
            feature: n,
            force: !0
        });
}
function B(e) {
    let { refreshAfterMs: t } = e,
        n = g.Z.getFeed(T);
    (null == n ? void 0 : n.refresh_stale_inbox_after_ms) != null && ((R = new Date(Date.now() + (null != t ? t : n.refresh_stale_inbox_after_ms)).toUTCString()), P());
}
function Z(e) {
    var t;
    let { connectionId: n, track: i } = e;
    null != n && (null === (t = d.Z.getAccount(n, v.ABu.SPOTIFY)) || void 0 === t ? void 0 : t.showActivity) && O(n, i);
}
function F() {
    let { enabled: e } = u.Z.getCurrentConfig({ location: 'ContentInventoryManager' }, { autoTrackExposure: !0 });
    e &&
        w({
            feedId: E.YN.GAME_PROFILE_FEED,
            feature: r.L.GAME_PROFILE
        });
}
class V extends s.Z {
    constructor(...e) {
        super(...e),
            y(this, 'actions', {
                POST_CONNECTION_OPEN: k,
                CONNECTION_CLOSED: U,
                WINDOW_FOCUS: M,
                IDLE: M,
                CONTENT_INVENTORY_TOGGLE_FEED_HIDDEN: M,
                CONTENT_INVENTORY_MANUAL_REFRESH: G,
                CONTENT_INVENTORY_INBOX_STALE: B,
                SPOTIFY_NEW_TRACK: Z,
                GAME_PROFILE_OPEN: F,
                OVERLAY_READY: F
            });
    }
}
let j = new V();
