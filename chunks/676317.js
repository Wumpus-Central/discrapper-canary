n.d(t, {
    Nb: function () {
        return c;
    },
    oA: function () {
        return f;
    },
    pr: function () {
        return s;
    },
    ze: function () {
        return o;
    }
});
var r = n(442837),
    i = n(430824),
    l = n(496675),
    u = n(981631);
let a = function (e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.Z,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : l.Z,
        r = t.getGuild(e);
    return null != r && n.can(u.Plq.MANAGE_GUILD, r);
};
function o(e) {
    return null != e && a(e);
}
function c(e) {
    return a(e);
}
function s(e) {
    return (0, r.e7)([i.Z, l.Z], () => a(e, i.Z, l.Z), [e]);
}
function f(e) {
    return (0, r.e7)(
        [i.Z],
        () => {
            let t = i.Z.getGuild(e);
            return (null == t ? void 0 : t.hasFeature(u.oNc.COMMUNITY)) || !1;
        },
        [e]
    );
}
