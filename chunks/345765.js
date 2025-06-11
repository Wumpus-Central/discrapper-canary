n.d(t, { Z: () => Z }), n(388685);
var r = n(392711),
    i = n(126313),
    a = n(570140),
    o = n(147913),
    s = n(539746),
    l = n(38618),
    c = n(553795),
    u = n(517100),
    d = n(451478),
    f = n(70956),
    _ = n(162461),
    p = n(564990),
    h = n(71585),
    m = n(146282),
    g = n(206583),
    E = n(981631);
function b(e, t, n) {
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
let y = 4,
    O = 2 * f.Z.Millis.MINUTE,
    v = g.YN.GLOBAL_FEED,
    I = 15 * f.Z.Millis.MINUTE,
    T = new Map(),
    S = new Set(),
    A = new Map(),
    N = null,
    C = (0, r.debounce)(p.yK, 3000, { trailing: !0 });
function R() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
    return Math.random() * (e + 1) * O;
}
function P(e, t) {
    a.Z.dispatch({
        type: 'CONTENT_INVENTORY_SET_FEED_STATE',
        feedId: e,
        state: t
    });
}
function w(e) {
    if (S.has(e) || (e === g.YN.GAME_PROFILE_FEED && (!(0, s._J)('ContentInventoryManager') || void 0 !== m.Z.getFeed(e)))) return !1;
    if (e === v) {
        if (!(0, _.sA)('ContentInventoryManager') || (h.Z.hidden && null != m.Z.getFeed(e)) || !d.Z.isFocused() || !l.Z.isConnected()) return !1;
        let t = u.Z.getIdleSince();
        if (null != t && Date.now() - t > I) return !1;
    }
    return !0;
}
function D(e) {
    P(e, { loading: !1 });
    let t = T.get(e);
    void 0 !== t && (clearTimeout(t), T.delete(e));
}
function L() {
    var e;
    let t = null != (e = A.get(v)) ? e : 0;
    if ((t > 0 && t <= y) || (D(v), !w(v))) return;
    let n = m.Z.getFeed(v);
    if ((null == n ? void 0 : n.refresh_stale_inbox_after_ms) != null && null == N) return;
    let r = (null == n ? void 0 : n.expired_at) == null ? 0 : new Date(n.expired_at).getTime() - Date.now(),
        a = Math.max(0, null == N ? 0 : new Date(N).getTime() - Date.now(), r) + (t > 0 ? R() : 0);
    P(v, {
        loading: !1,
        nextFetchDate: new Date(Date.now() + a)
    }),
        T.set(
            v,
            setTimeout(
                () =>
                    x({
                        feedId: v,
                        feature: i.L.INBOX
                    }),
                a
            )
        );
}
async function x(e) {
    let { feedId: t, feature: n, force: r = !1 } = e;
    if (w(t) || r)
        try {
            let e = m.Z.getFeed(t);
            S.add(t), P(t, { loading: !0 });
            let r = await (0, p.mt)({
                token: null == e ? void 0 : e.refresh_token,
                feedId: t,
                feature: n
            });
            a.Z.dispatch({
                type: 'CONTENT_INVENTORY_SET_FEED',
                feedId: t,
                feed: r
            }),
                A.set(t, 0),
                S.delete(t),
                P(t, { loading: !1 }),
                t === v && ((N = null), L());
        } catch (o) {
            var i;
            let e = null != (i = A.get(t)) ? i : 0;
            if (e < y) {
                let i = f.Z.Millis.MINUTE * Math.pow(2, e) + R(e);
                T.set(
                    t,
                    setTimeout(
                        () =>
                            x({
                                feedId: t,
                                feature: n,
                                force: r
                            }),
                        i
                    )
                ),
                    A.set(t, e + 1);
            } else
                a.Z.dispatch({
                    type: 'CONTENT_INVENTORY_CLEAR_FEED',
                    feedId: t
                });
            S.delete(t);
        }
}
function k() {
    L();
}
function M() {
    k();
}
function j() {
    D(v);
}
function U(e) {
    let { feedId: t, feature: n } = e;
    D(t),
        x({
            feedId: t,
            feature: n,
            force: !0
        });
}
function G(e) {
    let { refreshAfterMs: t } = e,
        n = m.Z.getFeed(v);
    (null == n ? void 0 : n.refresh_stale_inbox_after_ms) != null && ((N = new Date(Date.now() + (null != t ? t : n.refresh_stale_inbox_after_ms)).toUTCString()), L());
}
function B(e) {
    var t;
    let { connectionId: n, track: r } = e;
    null != n && (null == (t = c.Z.getAccount(n, E.ABu.SPOTIFY)) ? void 0 : t.showActivity) && C(n, r);
}
function F() {
    let { enabled: e } = _.iC.getCurrentConfig({ location: 'ContentInventoryManager' }, { autoTrackExposure: !0 });
    e &&
        x({
            feedId: g.YN.GAME_PROFILE_FEED,
            feature: i.L.GAME_PROFILE
        });
}
class V extends o.Z {
    constructor(...e) {
        super(...e),
            b(this, 'actions', {
                POST_CONNECTION_OPEN: M,
                CONNECTION_CLOSED: j,
                WINDOW_FOCUS: k,
                IDLE: k,
                CONTENT_INVENTORY_TOGGLE_FEED_HIDDEN: k,
                CONTENT_INVENTORY_MANUAL_REFRESH: U,
                CONTENT_INVENTORY_INBOX_STALE: G,
                SPOTIFY_NEW_TRACK: B,
                GAME_PROFILE_OPEN: F
            });
    }
}
let Z = new V();
