n.d(i, { R: () => l, Y: () => s });
var e = n(311907),
    r = n(71393),
    E = n(652215);
function s(t) {
    let [i] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [r.A];
    return !!i.getGuild(t)?.features.has(E.GuildFeatures.COMMUNITY);
}
function l(t) {
    return (0, e.bG)([r.A], () => s(t, [r.A]), [t]);
}
