n.d(t, {
    BT: () => c,
    N8: () => s
});
var i = n(442837);
n(467319);
var r = n(496675),
    l = n(533244),
    o = n(487419),
    a = n(981631);
function s(e) {
    let t = (0, i.e7)(
            [r.Z],
            () =>
                (function (e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.Z;
                    return t.can(a.Plq.BAN_MEMBERS, e) || t.can(a.Plq.KICK_MEMBERS, e) || t.can(a.Plq.MANAGE_GUILD, e);
                })(e, r.Z),
            [e]
        ),
        n = (0, i.e7)([o.Z], () => (null != e ? o.Z.getGuildIncident(e.id) : null), [e]);
    return !(null != n && (0, l.i9)(n)) && t;
}
function c(e) {
    return (0, i.e7)(
        [r.Z],
        () =>
            (function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.Z;
                return t.can(a.Plq.MANAGE_GUILD, e);
            })(e, r.Z),
        [e]
    );
}
