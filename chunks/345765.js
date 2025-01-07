var i = r(47120);
var a = r(392711);
var s = r(126313),
    o = r(570140),
    l = r(147913),
    u = r(539746),
    c = r(38618),
    d = r(456644),
    f = r(553795),
    _ = r(517100),
    h = r(451478),
    p = r(162461),
    m = r(564990),
    g = r(71585),
    E = r(146282),
    v = r(206583),
    I = r(981631);
function T(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let b = 3,
    y = 5,
    S = v.YN.GLOBAL_FEED,
    A = 900000,
    N = new Map(),
    C = new Set(),
    R = new Map(),
    O = null,
    D = (0, a.debounce)(m.yK, 3000, { trailing: !0 });
function L(e, n) {
    o.Z.dispatch({
        type: 'CONTENT_INVENTORY_SET_FEED_STATE',
        feedId: e,
        state: n
    });
}
function x(e) {
    if (C.has(e) || (e === v.YN.GAME_PROFILE_FEED && (!(0, u._J)('ContentInventoryManager') || void 0 !== E.Z.getFeed(e)))) return !1;
    if (e === S) {
        if (!(0, p.sA)('ContentInventoryManager') || (g.Z.hidden && null != E.Z.getFeed(e)) || !h.Z.isFocused() || !c.Z.isConnected()) return !1;
        let n = _.Z.getIdleSince();
        if (null != n && Date.now() - n > A) return !1;
    }
    return !0;
}
function w(e) {
    L(e, { loading: !1 });
    let n = N.get(e);
    void 0 !== n && (clearTimeout(n), N.delete(e));
}
function P() {
    if ((w(S), !x(S))) return;
    let e = E.Z.getFeed(S);
    if ((null == e ? void 0 : e.refresh_stale_inbox_after_ms) != null && null == O) return;
    let n = (null == e ? void 0 : e.expired_at) == null ? 0 : new Date(e.expired_at).getTime() - Date.now(),
        r = Math.max(0, null == O ? 0 : new Date(O).getTime() - Date.now(), n);
    L(S, {
        loading: !1,
        nextFetchDate: new Date(Date.now() + r)
    }),
        N.set(
            S,
            setTimeout(
                () =>
                    M({
                        feedId: S,
                        feature: s.L.INBOX
                    }),
                r
            )
        );
}
async function M(e) {
    let { feedId: n, feature: r, force: i = !1 } = e;
    if (!!(x(n) || i))
        try {
            let e = E.Z.getFeed(n);
            C.add(n), L(n, { loading: !0 });
            let i = await (0, m.mt)({
                token: null == e ? void 0 : e.refresh_token,
                feedId: n,
                feature: r
            });
            o.Z.dispatch({
                type: 'CONTENT_INVENTORY_SET_FEED',
                feedId: n,
                feed: i
            }),
                R.set(n, 0),
                C.delete(n),
                L(n, { loading: !1 }),
                n === S && ((O = null), P());
        } catch (s) {
            var a;
            let e = null !== (a = R.get(n)) && void 0 !== a ? a : 0;
            if (e < b) {
                let a = 1000 * Math.pow(y, e);
                N.set(
                    n,
                    setTimeout(
                        () =>
                            M({
                                feedId: n,
                                feature: r,
                                force: i
                            }),
                        a
                    )
                ),
                    R.set(n, e + 1);
            } else
                o.Z.dispatch({
                    type: 'CONTENT_INVENTORY_CLEAR_FEED',
                    feedId: n
                });
            C.delete(n);
        }
}
function k() {
    P();
}
function U() {
    k();
    let { recentActivityEnabled: e } = (0, d.G)({
        location: 'ContentInventoryManager',
        autoTrackExposure: !1
    });
    e &&
        M({
            feedId: v.YN.GAME_PROFILE_FEED,
            feature: s.L.RECENT_ACTIVITY
        });
}
function B() {
    w(S);
}
function G(e) {
    let { feedId: n, feature: r } = e;
    w(n),
        M({
            feedId: n,
            feature: r,
            force: !0
        });
}
function Z(e) {
    let { refreshAfterMs: n } = e,
        r = E.Z.getFeed(S);
    if ((null == r ? void 0 : r.refresh_stale_inbox_after_ms) != null) (O = new Date(Date.now() + (null != n ? n : r.refresh_stale_inbox_after_ms)).toUTCString()), P();
}
function F(e) {
    var n;
    let { connectionId: r, track: i } = e;
    if (null != r) (null === (n = f.Z.getAccount(r, I.ABu.SPOTIFY)) || void 0 === n ? void 0 : n.showActivity) && D(r, i);
}
function V() {
    M({
        feedId: v.YN.GAME_PROFILE_FEED,
        feature: s.L.GAME_PROFILE
    });
}
class j extends l.Z {
    constructor(...e) {
        super(...e),
            T(this, 'actions', {
                POST_CONNECTION_OPEN: U,
                CONNECTION_CLOSED: B,
                WINDOW_FOCUS: k,
                IDLE: k,
                CONTENT_INVENTORY_TOGGLE_FEED_HIDDEN: k,
                CONTENT_INVENTORY_MANUAL_REFRESH: G,
                CONTENT_INVENTORY_INBOX_STALE: Z,
                SPOTIFY_NEW_TRACK: F,
                GAME_PROFILE_OPEN: V,
                OVERLAY_READY: V
            });
    }
}
n.Z = new j();
