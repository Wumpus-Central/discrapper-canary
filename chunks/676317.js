n.d(t, {
    Nb: function () {
        return c;
    },
    oA: function () {
        return u;
    },
    pr: function () {
        return d;
    },
    ze: function () {
        return s;
    }
});
var a = n(442837),
    r = n(430824),
    l = n(496675),
    i = n(981631);
let o = function (e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.Z,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : l.Z,
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
    return (0, a.e7)([r.Z, l.Z], () => o(e, r.Z, l.Z), [e]);
}
function u(e) {
    return (0, a.e7)(
        [r.Z],
        () => {
            let t = r.Z.getGuild(e);
            return (null == t ? void 0 : t.hasFeature(i.oNc.COMMUNITY)) || !1;
        },
        [e]
    );
}
