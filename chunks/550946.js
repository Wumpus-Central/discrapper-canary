t.d(n, { A: () => a, t: () => i });
var u = t(17928),
    r = t(696451),
    l = t(71393),
    s = t(652215);
function c(e, n, t, u) {
    return t.getGuild(e)?.features.has(s.GuildFeatures.CONFERENCE) !== !0 && u.isGuestOrLurker(e, n);
}
function i(e, n) {
    return c(e, n, l.A, r.Ay);
}
function a(e, n) {
    return (0, u.bG)([l.A, r.Ay], () => c(e, n, l.A, r.Ay), [e, n]);
}
