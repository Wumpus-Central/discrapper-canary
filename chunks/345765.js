n.d(t, { Z: () => z }), n(47120);
var i = n(392711),
    r = n(126313),
    a = n(570140),
    s = n(147913),
    o = n(539746),
    l = n(38618),
    u = n(86071),
    c = n(32300),
    d = n(456644),
    f = n(553795),
    _ = n(517100),
    p = n(451478),
    h = n(70956),
    m = n(162461),
    g = n(564990),
    E = n(71585),
    v = n(146282),
    y = n(206583),
    I = n(981631);
function T(e, t, n) {
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
    S = 2 * h.Z.Millis.MINUTE,
    A = y.YN.GLOBAL_FEED,
    N = 15 * h.Z.Millis.MINUTE,
    C = new Map(),
    R = new Set(),
    O = new Map(),
    D = null,
    L = (0, i.debounce)(g.yK, 3000, { trailing: !0 });
function x() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
    return Math.random() * (e + 1) * S;
}
function P(e, t) {
    a.Z.dispatch({
        type: 'CONTENT_INVENTORY_SET_FEED_STATE',
        feedId: e,
        state: t
    });
}
function w(e) {
    if (R.has(e) || (e === y.YN.GAME_PROFILE_FEED && (!(0, o._J)('ContentInventoryManager') || void 0 !== v.Z.getFeed(e)))) return !1;
    if (e === A) {
        if (!(0, m.sA)('ContentInventoryManager') || (E.Z.hidden && null != v.Z.getFeed(e)) || !p.Z.isFocused() || !l.Z.isConnected()) return !1;
        let t = _.Z.getIdleSince();
        if (null != t && Date.now() - t > N) return !1;
    }
    return !0;
}
function M(e) {
    P(e, { loading: !1 });
    let t = C.get(e);
    void 0 !== t && (clearTimeout(t), C.delete(e));
}
function k() {
    var e;
    let t = null !== (e = O.get(A)) && void 0 !== e ? e : 0;
    if ((t > 0 && t <= b) || (M(A), !w(A))) return;
    let n = v.Z.getFeed(A);
    if ((null == n ? void 0 : n.refresh_stale_inbox_after_ms) != null && null == D) return;
    let i = (null == n ? void 0 : n.expired_at) == null ? 0 : new Date(n.expired_at).getTime() - Date.now(),
        a = Math.max(0, null == D ? 0 : new Date(D).getTime() - Date.now(), i) + (t > 0 ? x() : 0);
    P(A, {
        loading: !1,
        nextFetchDate: new Date(Date.now() + a)
    }),
        C.set(
            A,
            setTimeout(
                () =>
                    U({
                        feedId: A,
                        feature: r.L.INBOX
                    }),
                a
            )
        );
}
async function U(e) {
    let { feedId: t, feature: n, force: i = !1 } = e;
    if (w(t) || i)
        try {
            let e = v.Z.getFeed(t);
            R.add(t), P(t, { loading: !0 });
            let i = await (0, g.mt)({
                token: null == e ? void 0 : e.refresh_token,
                feedId: t,
                feature: n
            });
            a.Z.dispatch({
                type: 'CONTENT_INVENTORY_SET_FEED',
                feedId: t,
                feed: i
            }),
                O.set(t, 0),
                R.delete(t),
                P(t, { loading: !1 }),
                t === A && ((D = null), k());
        } catch (s) {
            var r;
            let e = null !== (r = O.get(t)) && void 0 !== r ? r : 0;
            if (e < b) {
                let r = h.Z.Millis.MINUTE * Math.pow(2, e) + x(e);
                C.set(
                    t,
                    setTimeout(
                        () =>
                            U({
                                feedId: t,
                                feature: n,
                                force: i
                            }),
                        r
                    )
                ),
                    O.set(t, e + 1);
            } else
                a.Z.dispatch({
                    type: 'CONTENT_INVENTORY_CLEAR_FEED',
                    feedId: t
                });
            R.delete(t);
        }
}
function G() {
    k();
}
function B() {
    G();
    let { recentActivityEnabled: e } = (0, d.G)({
        location: 'ContentInventoryManager',
        autoTrackExposure: !1
    });
    e &&
        U({
            feedId: y.YN.GAME_PROFILE_FEED,
            feature: r.L.RECENT_ACTIVITY
        });
}
function Z() {
    M(A);
}
function F(e) {
    let { feedId: t, feature: n } = e;
    M(t),
        U({
            feedId: t,
            feature: n,
            force: !0
        });
}
function V(e) {
    let { refreshAfterMs: t } = e,
        n = v.Z.getFeed(A);
    (null == n ? void 0 : n.refresh_stale_inbox_after_ms) != null && ((D = new Date(Date.now() + (null != t ? t : n.refresh_stale_inbox_after_ms)).toUTCString()), k());
}
function j(e) {
    var t;
    let { connectionId: n, track: i } = e;
    null != n && (null === (t = f.Z.getAccount(n, I.ABu.SPOTIFY)) || void 0 === t ? void 0 : t.showActivity) && L(n, i);
}
function H() {
    let { enabled: e } = m.iC.getCurrentConfig({ location: 'ContentInventoryManager' }, { autoTrackExposure: !1 });
    e &&
        U({
            feedId: y.YN.GAME_PROFILE_FEED,
            feature: r.L.GAME_PROFILE
        });
}
function Y() {
    let { enabled: e } = u.Z.getCurrentConfig({ location: 'ContentInventoryManager' }, { autoTrackExposure: !0 });
    e &&
        U({
            feedId: y.YN.GAME_PROFILE_FEED,
            feature: r.L.OVERLAY_INVITES
        });
}
function W(e) {
    let { locked: t } = e,
        n = (0, c.Rb)('ContentInventoryManager').allowActivityWidget;
    !t &&
        n &&
        U({
            feedId: y.YN.GAME_PROFILE_FEED,
            feature: r.L.OVERLAY_INVITES
        });
}
class K extends s.Z {
    constructor(...e) {
        super(...e),
            T(this, 'actions', {
                POST_CONNECTION_OPEN: B,
                CONNECTION_CLOSED: Z,
                WINDOW_FOCUS: G,
                IDLE: G,
                CONTENT_INVENTORY_TOGGLE_FEED_HIDDEN: G,
                CONTENT_INVENTORY_MANUAL_REFRESH: F,
                CONTENT_INVENTORY_INBOX_STALE: V,
                SPOTIFY_NEW_TRACK: j,
                GAME_PROFILE_OPEN: H,
                OVERLAY_SET_INPUT_LOCKED: W,
                OVERLAY_READY: Y
            });
    }
}
let z = new K();
