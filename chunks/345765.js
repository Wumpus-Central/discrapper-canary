var i = r(47120);
var a = r(392711);
var o = r(126313),
    s = r(570140),
    l = r(147913),
    u = r(539746),
    c = r(38618),
    d = r(86071),
    f = r(456644),
    p = r(553795),
    h = r(517100),
    _ = r(451478),
    m = r(162461),
    g = r(564990),
    E = r(71585),
    v = r(146282),
    y = r(206583),
    b = r(981631);
function I(e, n, r) {
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
let T = 3,
    S = 5,
    A = y.YN.GLOBAL_FEED,
    C = 900000,
    N = new Map(),
    R = new Set(),
    O = new Map(),
    D = null,
    x = (0, a.debounce)(g.yK, 3000, { trailing: !0 });
function L(e, n) {
    s.Z.dispatch({
        type: 'CONTENT_INVENTORY_SET_FEED_STATE',
        feedId: e,
        state: n
    });
}
function w(e) {
    if (R.has(e) || (e === y.YN.GAME_PROFILE_FEED && (!(0, u._J)('ContentInventoryManager') || void 0 !== v.Z.getFeed(e)))) return !1;
    if (e === A) {
        if (!(0, m.sA)('ContentInventoryManager') || (E.Z.hidden && null != v.Z.getFeed(e)) || !_.Z.isFocused() || !c.Z.isConnected()) return !1;
        let n = h.Z.getIdleSince();
        if (null != n && Date.now() - n > C) return !1;
    }
    return !0;
}
function P(e) {
    L(e, { loading: !1 });
    let n = N.get(e);
    void 0 !== n && (clearTimeout(n), N.delete(e));
}
function M() {
    if ((P(A), !w(A))) return;
    let e = v.Z.getFeed(A);
    if ((null == e ? void 0 : e.refresh_stale_inbox_after_ms) != null && null == D) return;
    let n = (null == e ? void 0 : e.expired_at) == null ? 0 : new Date(e.expired_at).getTime() - Date.now(),
        r = Math.max(0, null == D ? 0 : new Date(D).getTime() - Date.now(), n);
    L(A, {
        loading: !1,
        nextFetchDate: new Date(Date.now() + r)
    }),
        N.set(
            A,
            setTimeout(
                () =>
                    k({
                        feedId: A,
                        feature: o.L.INBOX
                    }),
                r
            )
        );
}
async function k(e) {
    let { feedId: n, feature: r, force: i = !1 } = e;
    if (!!(w(n) || i))
        try {
            let e = v.Z.getFeed(n);
            R.add(n), L(n, { loading: !0 });
            let i = await (0, g.mt)({
                token: null == e ? void 0 : e.refresh_token,
                feedId: n,
                feature: r
            });
            s.Z.dispatch({
                type: 'CONTENT_INVENTORY_SET_FEED',
                feedId: n,
                feed: i
            }),
                O.set(n, 0),
                R.delete(n),
                L(n, { loading: !1 }),
                n === A && ((D = null), M());
        } catch (o) {
            var a;
            let e = null !== (a = O.get(n)) && void 0 !== a ? a : 0;
            if (e < T) {
                let a = 1000 * Math.pow(S, e);
                N.set(
                    n,
                    setTimeout(
                        () =>
                            k({
                                feedId: n,
                                feature: r,
                                force: i
                            }),
                        a
                    )
                ),
                    O.set(n, e + 1);
            } else
                s.Z.dispatch({
                    type: 'CONTENT_INVENTORY_CLEAR_FEED',
                    feedId: n
                });
            R.delete(n);
        }
}
function U() {
    M();
}
function B() {
    U();
    let { recentActivityEnabled: e } = (0, f.G)({
        location: 'ContentInventoryManager',
        autoTrackExposure: !1
    });
    e &&
        k({
            feedId: y.YN.GAME_PROFILE_FEED,
            feature: o.L.RECENT_ACTIVITY
        });
}
function G() {
    P(A);
}
function Z(e) {
    let { feedId: n, feature: r } = e;
    P(n),
        k({
            feedId: n,
            feature: r,
            force: !0
        });
}
function F(e) {
    let { refreshAfterMs: n } = e,
        r = v.Z.getFeed(A);
    if ((null == r ? void 0 : r.refresh_stale_inbox_after_ms) != null) (D = new Date(Date.now() + (null != n ? n : r.refresh_stale_inbox_after_ms)).toUTCString()), M();
}
function V(e) {
    var n;
    let { connectionId: r, track: i } = e;
    if (null != r) (null === (n = p.Z.getAccount(r, b.ABu.SPOTIFY)) || void 0 === n ? void 0 : n.showActivity) && x(r, i);
}
function j() {
    let { enabled: e } = d.Z.getCurrentConfig({ location: 'ContentInventoryManager' }, { autoTrackExposure: !1 });
    e &&
        k({
            feedId: y.YN.GAME_PROFILE_FEED,
            feature: o.L.GAME_PROFILE
        });
}
class H extends l.Z {
    constructor(...e) {
        super(...e),
            I(this, 'actions', {
                POST_CONNECTION_OPEN: B,
                CONNECTION_CLOSED: G,
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
n.Z = new H();
