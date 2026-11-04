var u = t(855986),
    l = t(696451),
    r = t(71393),
    s = t(652215);
function i(e, n, t, u) {
    return t.getGuild(e)?.features.has(s.GuildFeatures.CONFERENCE) !== !0 && u.isGuestOrLurker(e, n);
}
t.d(
    n,
    {},
    {
        A: function (e, n) {
            return (0, u.bG)([r.A, l.Ay], () => i(e, n, r.A, l.Ay), [e, n]);
        },
        t: function (e, n) {
            return i(e, n, r.A, l.Ay);
        },
    },
);
