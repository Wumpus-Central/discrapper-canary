n.d(t, { A: () => d, t: () => o });
var i = n(17928),
    l = n(696451),
    a = n(71393),
    s = n(652215);
function r(e, t, n, i) {
    return n.getGuild(e)?.features.has(s.GuildFeatures.CONFERENCE) !== !0 && i.isGuestOrLurker(e, t);
}
function o(e, t) {
    return r(e, t, a.A, l.Ay);
}
function d(e, t) {
    return (0, i.bG)([a.A, l.Ay], () => r(e, t, a.A, l.Ay), [e, t]);
}
