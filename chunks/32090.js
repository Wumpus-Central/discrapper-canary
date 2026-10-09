l.d(n, { Ay: () => c, gj: () => f, iW: () => A });
var t = l(17928),
    a = l(696451),
    r = l(927813);
let i = 14 * r.A.Millis.DAY,
    o = 8 * r.A.Millis.DAY;
function s(e, n, l) {
    if (null == e) return !1;
    let t = Date.parse(e);
    return !isNaN(t) && l - t <= n;
}
function u(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
    return null != e && s(e.winningWeek, i, n) ? e : null;
}
function d(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
    return null != e && s(e.currentLeaderWeek, o, n) ? e : null;
}
function c(e, n) {
    return (0, t.bG)([a.Ay], () => (null != e ? u(a.Ay.getMember(e, n)?.gamingLeaderboardData) : null), [e, n]);
}
function A(e, n) {
    return (0, t.bG)([a.Ay], () => (null != e ? d(a.Ay.getMember(e, n)?.gamingLeaderboardData) : null), [e, n]);
}
function f(e, n) {
    return (0, t.bG)(
        [a.Ay],
        () => {
            if (null == e) return !1;
            let l = a.Ay.getMember(e, n)?.gamingLeaderboardData;
            return null != u(l) || null != d(l);
        },
        [e, n],
    );
}
