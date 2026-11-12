var l = n(855986),
    i = n(696451),
    r = n(927813);
let a = 14 * r.A.Millis.DAY,
    s = 8 * r.A.Millis.DAY;
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
n.d(
    t,
    {},
    {
        Ay: function (e, t) {
            return (0, l.bG)([i.Ay], () => (null != e ? u(i.Ay.getMember(e, t)?.gamingLeaderboardData) : null), [e, t]);
        },
        gj: function (e, t) {
            return (0, l.bG)(
                [i.Ay],
                () => {
                    if (null == e) return !1;
                    let n = i.Ay.getMember(e, t)?.gamingLeaderboardData;
                    return null != u(n) || null != d(n);
                },
                [e, t],
            );
        },
        iW: function (e, t) {
            return (0, l.bG)([i.Ay], () => (null != e ? d(i.Ay.getMember(e, t)?.gamingLeaderboardData) : null), [e, t]);
        },
    },
);
