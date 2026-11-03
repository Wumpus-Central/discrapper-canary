n.d(t, { Ay: () => d, gj: () => m, iW: () => f });
var l = n(17928),
    r = n(696451),
    a = n(927813);
let i = 14 * a.A.Millis.DAY,
    s = 8 * a.A.Millis.DAY;
function u(e, t, n) {
    if (null == e) return !1;
    let l = Date.parse(e);
    return !isNaN(l) && n - l <= t;
}
function o(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
    return null != e && u(e.winningWeek, i, t) ? e : null;
}
function c(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
    return null != e && u(e.currentLeaderWeek, s, t) ? e : null;
}
function d(e, t) {
    return (0, l.bG)([r.Ay], () => (null != e ? o(r.Ay.getMember(e, t)?.gamingLeaderboardData) : null), [e, t]);
}
function f(e, t) {
    return (0, l.bG)([r.Ay], () => (null != e ? c(r.Ay.getMember(e, t)?.gamingLeaderboardData) : null), [e, t]);
}
function m(e, t) {
    return (0, l.bG)(
        [r.Ay],
        () => {
            if (null == e) return !1;
            let n = r.Ay.getMember(e, t)?.gamingLeaderboardData;
            return null != o(n) || null != c(n);
        },
        [e, t],
    );
}
