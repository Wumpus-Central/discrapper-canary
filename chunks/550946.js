n.d(t, { A: () => c, t: () => o });
var i = n(311907),
    l = n(696451),
    s = n(71393),
    a = n(652215);
function r(e, t, n, i) {
    return n.getGuild(e)?.features.has(a.GuildFeatures.CONFERENCE) !== !0 && i.isGuestOrLurker(e, t);
}
function o(e, t) {
    return r(e, t, s.A, l.Ay);
}
function c(e, t) {
    return (0, i.bG)([s.A, l.Ay], () => r(e, t, s.A, l.Ay), [e, t]);
}
