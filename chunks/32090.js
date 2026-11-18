var i = n(855986),
    r = n(696451),
    a = n(71393),
    l = n(927813),
    d = n(313627);
let s = 14 * l.A.Millis.DAY,
    u = 8 * l.A.Millis.DAY;
function o(e, t, n) {
    if (null == e) return !1;
    let i = Date.parse(e);
    return !isNaN(i) && n - i <= t;
}
function c(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
    return null != e && o(e.winningWeek, s, t) ? e : null;
}
function _(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
    return null != e && o(e.currentLeaderWeek, u, t) ? e : null;
}
n.d(
    t,
    {},
    {
        Ay: function (e, t) {
            return (0, i.bG)([r.Ay], () => (null != e ? c(r.Ay.getMember(e, t)?.gamingLeaderboardData) : null), [e, t]);
        },
        gj: function (e, t) {
            return (0, i.bG)(
                [r.Ay, a.A],
                () => {
                    if (null == e) return !1;
                    let n = a.A.getGuild(e);
                    if (null == n || !(0, d.W8)(n, (0, d.P5)(n))) return !1;
                    let i = r.Ay.getMember(e, t)?.gamingLeaderboardData;
                    return null != c(i) || null != _(i);
                },
                [e, t],
            );
        },
        iW: function (e, t) {
            return (0, i.bG)([r.Ay], () => (null != e ? _(r.Ay.getMember(e, t)?.gamingLeaderboardData) : null), [e, t]);
        },
    },
);
