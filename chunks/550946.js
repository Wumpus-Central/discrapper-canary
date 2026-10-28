t.d(n, { A: () => f, t: () => c });
var u = t(17928),
    l = t(696451),
    r = t(71393),
    s = t(652215);
function i(e, n, t, u) {
    return t.getGuild(e)?.features.has(s.GuildFeatures.CONFERENCE) !== !0 && u.isGuestOrLurker(e, n);
}
function c(e, n) {
    return i(e, n, r.A, l.Ay);
}
function f(e, n) {
    return (0, u.bG)([r.A, l.Ay], () => i(e, n, r.A, l.Ay), [e, n]);
}
