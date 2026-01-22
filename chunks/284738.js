n.d(i, {
    R: () => l,
    Y: () => s,
}),
    n(896048);
var e = n(311907),
    r = n(71393),
    E = n(652215);

function s(t) {
    var i;
    let [n] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [r.A];
    return !!(null == (i = n.getGuild(t)) ? void 0 : i.features.has(E.GuildFeatures.COMMUNITY));
}

function l(t) {
    return (0, e.bG)([r.A], () => s(t, [r.A]), [t]);
}
