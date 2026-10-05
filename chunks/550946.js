t.d(n, { A: () => a, t: () => i });
var u = t(17928),
    l = t(696451),
    r = t(71393),
    s = t(652215);
function c(e, n, t, u) {
    return t.getGuild(e)?.features.has(s.GuildFeatures.CONFERENCE) !== !0 && u.isGuestOrLurker(e, n);
}
function i(e, n) {
    return c(e, n, r.A, l.Ay);
}
function a(e, n) {
    return (0, u.bG)([r.A, l.Ay], () => c(e, n, r.A, l.Ay), [e, n]);
}
