var l = n(855986),
    i = n(696451),
    r = n(71393),
    a = n(927813),
    s = n(313627);
let o = 14 * a.A.Millis.DAY,
    u = 8 * a.A.Millis.DAY;
function d(e, t, n) {
    if (null == e) return !1;
    let l = Date.parse(e);
    return !isNaN(l) && n - l <= t;
}
function c(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
    return null != e && d(e.winningWeek, o, t) ? e : null;
}
function _(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
    return null != e && d(e.currentLeaderWeek, u, t) ? e : null;
}
n.d(
    t,
    {},
    {
        Ay: function (e, t) {
            return (0, l.bG)([i.Ay], () => (null != e ? c(i.Ay.getMember(e, t)?.gamingLeaderboardData) : null), [e, t]);
        },
        gj: function (e, t) {
            return (0, l.bG)(
                [i.Ay, r.A],
                () => {
                    if (null == e) return !1;
                    let n = r.A.getGuild(e);
                    if (null == n || !(0, s.W8)(n, (0, s.P5)(n))) return !1;
                    let l = i.Ay.getMember(e, t)?.gamingLeaderboardData;
                    return null != c(l) || null != _(l);
                },
                [e, t],
            );
        },
        iW: function (e, t) {
            return (0, l.bG)([i.Ay], () => (null != e ? _(i.Ay.getMember(e, t)?.gamingLeaderboardData) : null), [e, t]);
        },
    },
);
