a.d(t, {
    Nb: () => c,
    oA: () => u,
    pr: () => d,
    ze: () => o
});
var n = a(442837),
    r = a(430824),
    l = a(496675),
    i = a(981631);
let s = function (e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.Z,
        a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : l.Z,
        n = t.getGuild(e);
    return null != n && a.can(i.Plq.MANAGE_GUILD, n);
};
function o(e) {
    return null != e && s(e);
}
function c(e) {
    return s(e);
}
function d(e) {
    return (0, n.e7)([r.Z, l.Z], () => s(e, r.Z, l.Z), [e]);
}
function u(e) {
    return (0, n.e7)(
        [r.Z],
        () => {
            let t = r.Z.getGuild(e);
            return (null == t ? void 0 : t.features.has(i.oNc.COMMUNITY)) || !1;
        },
        [e]
    );
}
