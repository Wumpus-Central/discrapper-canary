var i = n(855986),
    r = n(696451),
    a = n(71393),
    l = n(927813),
    s = n(313627);
let d = 14 * l.A.Millis.DAY,
    u = 8 * l.A.Millis.DAY;
function c(e, t, n) {
    if (null == e) return !1;
    let i = Date.parse(e);
    return !isNaN(i) && n - i <= t;
}
function o(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
    return null != e && c(e.winningWeek, d, t) ? e : null;
}
function _(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
    return null != e && c(e.currentLeaderWeek, u, t) ? e : null;
}
n.d(
    t,
    {},
    {
        Ay: function (e, t) {
            return (0, i.bG)([r.Ay], () => (null != e ? o(r.Ay.getMember(e, t)?.gamingLeaderboardData) : null), [e, t]);
        },
        gj: function (e, t) {
            return (0, i.bG)(
                [r.Ay, a.A],
                () => {
                    if (null == e) return !1;
                    let n = a.A.getGuild(e);
                    if (null == n || !(0, s.W8)(n, (0, s.P5)(n))) return !1;
                    let i = r.Ay.getMember(e, t)?.gamingLeaderboardData;
                    return null != o(i) || null != _(i);
                },
                [e, t],
            );
        },
        iW: function (e, t) {
            return (0, i.bG)([r.Ay], () => (null != e ? _(r.Ay.getMember(e, t)?.gamingLeaderboardData) : null), [e, t]);
        },
    },
);
