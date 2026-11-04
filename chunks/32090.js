n.d(t, { Ay: () => c, gj: () => _, iW: () => f });
var l = n(17928),
    r = n(696451),
    i = n(927813);
let a = 14 * i.A.Millis.DAY,
    s = 8 * i.A.Millis.DAY;
function o(e, t, n) {
    if (null == e) return !1;
    let l = Date.parse(e);
    return !isNaN(l) && n - l <= t;
}
function u(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
    return null != e && o(e.winningWeek, a, t) ? e : null;
}
function d(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
    return null != e && o(e.currentLeaderWeek, s, t) ? e : null;
}
function c(e, t) {
    return (0, l.bG)([r.Ay], () => (null != e ? u(r.Ay.getMember(e, t)?.gamingLeaderboardData) : null), [e, t]);
}
function f(e, t) {
    return (0, l.bG)([r.Ay], () => (null != e ? d(r.Ay.getMember(e, t)?.gamingLeaderboardData) : null), [e, t]);
}
function _(e, t) {
    return (0, l.bG)(
        [r.Ay],
        () => {
            if (null == e) return !1;
            let n = r.Ay.getMember(e, t)?.gamingLeaderboardData;
            return null != u(n) || null != d(n);
        },
        [e, t],
    );
}
