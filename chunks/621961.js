n.d(t, {
    C6: () => l,
    GY: () => s,
    Kq: () => i,
});
var r = n(981631),
    a = n(486324);
function l(e, t) {
    let { isGIF: n } = t;
    if (e === a.pC.GUILD_BANNER) return n ? r.GuildFeatures.ANIMATED_BANNER : r.GuildFeatures.BANNER;
}
function i(e) {
    return e === a.pC.AVATAR || e === a.pC.BANNER;
}
function s(e) {
    return e === a.pC.BANNER;
}
