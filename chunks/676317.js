n.d(t, {
    Nb: () => c,
    oA: () => d,
    pr: () => u,
    ze: () => l
});
var r = n(442837),
    i = n(430824),
    o = n(496675),
    a = n(981631);
let s = function (e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.Z,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : o.Z,
        r = t.getGuild(e);
    return null != r && n.can(a.Plq.MANAGE_GUILD, r);
};
function l(e) {
    return null != e && s(e);
}
function c(e) {
    return s(e);
}
function u(e) {
    return (0, r.e7)([i.Z, o.Z], () => s(e, i.Z, o.Z), [e]);
}
function d(e) {
    return (0, r.e7)(
        [i.Z],
        () => {
            let t = i.Z.getGuild(e);
            return (null == t ? void 0 : t.features.has(a.oNc.COMMUNITY)) || !1;
        },
        [e]
    );
}
