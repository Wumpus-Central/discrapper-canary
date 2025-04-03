n.d(t, {
    Nb: () => c,
    oA: () => u,
    pr: () => d,
    ze: () => s
});
var r = n(442837),
    a = n(430824),
    l = n(496675),
    i = n(981631);
let o = function (e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a.Z,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : l.Z,
        r = t.getGuild(e);
    return null != r && n.can(i.Plq.MANAGE_GUILD, r);
};
function s(e) {
    return null != e && o(e);
}
function c(e) {
    return o(e);
}
function d(e) {
    return (0, r.e7)([a.Z, l.Z], () => o(e, a.Z, l.Z), [e]);
}
function u(e) {
    return (0, r.e7)(
        [a.Z],
        () => {
            let t = a.Z.getGuild(e);
            return (null == t ? void 0 : t.hasFeature(i.oNc.COMMUNITY)) || !1;
        },
        [e]
    );
}
