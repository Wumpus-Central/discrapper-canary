n.d(t, { Z: () => V }), n(388685);
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
    p = n(162461),
    _ = n(564990),
    m = n(71585),
    h = n(146282),
    g = n(206583),
    E = n(981631);
function b(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let y = 4,
    O = 2 * f.Z.Millis.MINUTE,
    v = g.YN.GLOBAL_FEED,
    S = 15 * f.Z.Millis.MINUTE,
    I = new Map(),
    T = new Set(),
    C = new Map(),
    A = null,
    N = (0, r.debounce)(_.yK, 3000, { trailing: !0 });
function P() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
    return Math.random() * (e + 1) * O;
}
function R(e, t) {
    a.Z.dispatch({
        type: "CONTENT_INVENTORY_SET_FEED_STATE",
        feedId: e,
        state: t,
    });
}
function D(e) {
    if (
        T.has(e) ||
        (e === g.YN.GAME_PROFILE_FEED && (!(0, s._J)("ContentInventoryManager") || void 0 !== h.Z.getFeed(e)))
    )
        return !1;
    if (e === v) {
        if (
            !(0, p.sA)("ContentInventoryManager") ||
            (m.Z.hidden && null != h.Z.getFeed(e)) ||
            !d.Z.isFocused() ||
            !l.Z.isConnected()
        )
            return !1;
        let t = u.Z.getIdleSince();
        if (null != t && Date.now() - t > S) return !1;
    }
    return !0;
}
function w(e) {
    R(e, { loading: !1 });
    let t = I.get(e);
    void 0 !== t && (clearTimeout(t), I.delete(e));
}
function x() {
    var e;
    let t = null != (e = C.get(v)) ? e : 0;
    if ((t > 0 && t <= y) || (w(v), !D(v))) return;
    let n = h.Z.getFeed(v);
    if ((null == n ? void 0 : n.refresh_stale_inbox_after_ms) != null && null == A) return;
    let r = (null == n ? void 0 : n.expired_at) == null ? 0 : new Date(n.expired_at).getTime() - Date.now(),
        a = Math.max(0, null == A ? 0 : new Date(A).getTime() - Date.now(), r) + (t > 0 ? P() : 0);
    R(v, {
        loading: !1,
        nextFetchDate: new Date(Date.now() + a),
    }),
        I.set(
            v,
            setTimeout(
                () =>
                    L({
                        feedId: v,
                        feature: i.L.INBOX,
                    }),
                a,
            ),
        );
}
async function L(e) {
    let { feedId: t, feature: n, force: r = !1 } = e;
    if (D(t) || r)
        try {
            let e = h.Z.getFeed(t);
            T.add(t), R(t, { loading: !0 });
            let r = await (0, _.mt)({
                token: null == e ? void 0 : e.refresh_token,
                feedId: t,
                feature: n,
            });
            a.Z.dispatch({
                type: "CONTENT_INVENTORY_SET_FEED",
                feedId: t,
                feed: r,
            }),
                C.set(t, 0),
                T.delete(t),
                R(t, { loading: !1 }),
                t === v && ((A = null), x());
        } catch (o) {
            var i;
            let e = null != (i = C.get(t)) ? i : 0;
            if (e < y) {
                let i = f.Z.Millis.MINUTE * Math.pow(2, e) + P(e);
                I.set(
                    t,
                    setTimeout(
                        () =>
                            L({
                                feedId: t,
                                feature: n,
                                force: r,
                            }),
                        i,
                    ),
                ),
                    C.set(t, e + 1);
            } else
                a.Z.dispatch({
                    type: "CONTENT_INVENTORY_CLEAR_FEED",
                    feedId: t,
                });
            T.delete(t);
        }
}
function j() {
    x();
}
function M() {
    j();
}
function k() {
    w(v);
}
function U(e) {
    let { feedId: t, feature: n } = e;
    w(t),
        L({
            feedId: t,
            feature: n,
            force: !0,
        });
}
function G(e) {
    let { refreshAfterMs: t } = e,
        n = h.Z.getFeed(v);
    (null == n ? void 0 : n.refresh_stale_inbox_after_ms) != null &&
        ((A = new Date(Date.now() + (null != t ? t : n.refresh_stale_inbox_after_ms)).toUTCString()), x());
}
function Z(e) {
    var t;
    let { connectionId: n, track: r } = e;
    null != n && (null == (t = c.Z.getAccount(n, E.ABu.SPOTIFY)) ? void 0 : t.showActivity) && N(n, r);
}
function B() {
    L({
        feedId: g.YN.GLOBAL_FEED,
        feature: i.L.GAME_PROFILE,
    });
}
class F extends o.Z {
    constructor(...e) {
        super(...e),
            b(this, "actions", {
                POST_CONNECTION_OPEN: M,
                CONNECTION_CLOSED: k,
                WINDOW_FOCUS: j,
                IDLE: j,
                CONTENT_INVENTORY_TOGGLE_FEED_HIDDEN: j,
                CONTENT_INVENTORY_MANUAL_REFRESH: U,
                CONTENT_INVENTORY_INBOX_STALE: G,
                SPOTIFY_NEW_TRACK: Z,
                GAME_PROFILE_OPEN: B,
            });
    }
}
let V = new F();
