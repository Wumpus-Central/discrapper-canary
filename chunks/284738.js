u.d(e, { R: () => a, Y: () => n });
var i = u(17928),
    r = u(71393),
    s = u(652215);
function n(t) {
    let [e] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [r.A];
    return !!e.getGuild(t)?.features.has(s.GuildFeatures.COMMUNITY);
}
function a(t) {
    return (0, i.bG)([r.A], () => n(t, [r.A]), [t]);
}
