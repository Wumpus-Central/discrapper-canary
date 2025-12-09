n.d(t, {
    Nb: () => d,
    oA: () => u,
    pr: () => c,
    ze: () => s,
});
var r = n(442837),
    i = n(430824),
    a = n(496675),
    l = n(981631);
let o = function (e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.Z,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : a.Z,
        r = t.getGuild(e);
    return null != r && n.can(l.Plq.MANAGE_GUILD, r);
};
function s(e) {
    return null != e && o(e);
}
function d(e) {
    return o(e);
}
function c(e) {
    return (0, r.e7)([i.Z, a.Z], () => o(e, i.Z, a.Z), [e]);
}
function u(e) {
    return (0, r.e7)([i.Z], () => {
        let t = i.Z.getGuild(e);
        return (null == t ? void 0 : t.features.has(l.GuildFeatures.COMMUNITY)) || !1;
    }, [e]);
}
