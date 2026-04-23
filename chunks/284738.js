E.d(i, { R: () => e, Y: () => A });
var n = E(17928),
    S = E(71393),
    r = E(652215);
function A(t) {
    let [i] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [S.A];
    return !!i.getGuild(t)?.features.has(r.GuildFeatures.COMMUNITY);
}
function e(t) {
    return (0, n.bG)([S.A], () => A(t, [S.A]), [t]);
}
