n.d(t, {
    Nb: () => c,
    oA: () => u,
    pr: () => d,
    ze: () => s
});
var a = n(442837),
    l = n(430824),
    r = n(496675),
    i = n(981631);
let o = function (e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.Z,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : r.Z,
        a = t.getGuild(e);
    return null != a && n.can(i.Plq.MANAGE_GUILD, a);
};
function s(e) {
    return null != e && o(e);
}
function c(e) {
    return o(e);
}
function d(e) {
    return (0, a.e7)([l.Z, r.Z], () => o(e, l.Z, r.Z), [e]);
}
function u(e) {
    return (0, a.e7)(
        [l.Z],
        () => {
            let t = l.Z.getGuild(e);
            return (null == t ? void 0 : t.hasFeature(i.oNc.COMMUNITY)) || !1;
        },
        [e]
    );
}
