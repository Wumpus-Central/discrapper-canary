n.d(t, {
    Nb: () => u,
    oA: () => d,
    pr: () => c,
    ze: () => s,
});
var i = n(442837),
    r = n(430824),
    l = n(496675),
    a = n(981631);
let o = function (e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.Z,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : l.Z,
        i = t.getGuild(e);
    return null != i && n.can(a.Plq.MANAGE_GUILD, i);
};
function s(e) {
    return null != e && o(e);
}
function u(e) {
    return o(e);
}
function c(e) {
    return (0, i.e7)([r.Z, l.Z], () => o(e, r.Z, l.Z), [e]);
}
function d(e) {
    return (0, i.e7)([r.Z], () => {
        let t = r.Z.getGuild(e);
        return (null == t ? void 0 : t.features.has(a.oNc.COMMUNITY)) || !1;
    }, [e]);
}
