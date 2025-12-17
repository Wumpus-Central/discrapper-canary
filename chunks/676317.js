n.d(t, {
    Nb: () => s,
    oA: () => f,
    pr: () => d,
    ze: () => c,
});
var r = n(442837),
    i = n(430824),
    a = n(496675),
    o = n(981631);
let l = function (e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.Z,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : a.Z,
        r = t.getGuild(e);
    return null != r && n.can(o.Plq.MANAGE_GUILD, r);
};
function c(e) {
    return null != e && l(e);
}
function s(e) {
    return l(e);
}
function d(e) {
    return (0, r.e7)([i.Z, a.Z], () => l(e, i.Z, a.Z), [e]);
}
function f(e) {
    return (0, r.e7)([i.Z], () => {
        let t = i.Z.getGuild(e);
        return (null == t ? void 0 : t.features.has(o.GuildFeatures.COMMUNITY)) || !1;
    }, [e]);
}
