n.d(t, {
    BT: () => c,
    N8: () => s,
});
var i = n(442837);
n(467319);
var r = n(496675),
    l = n(533244),
    a = n(487419),
    o = n(981631);
function s(e) {
    let t = (0, i.e7)(
            [r.Z],
            () =>
                (function (e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.Z;
                    return t.can(o.Plq.BAN_MEMBERS, e) || t.can(o.Plq.KICK_MEMBERS, e) || t.can(o.Plq.MANAGE_GUILD, e);
                })(e, r.Z),
            [e],
        ),
        n = (0, i.e7)([a.Z], () => (null != e ? a.Z.getGuildIncident(e.id) : null), [e]);
    return !(null != n && (0, l.i9)(n)) && t;
}
function c(e) {
    return (0, i.e7)(
        [r.Z],
        () =>
            (function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.Z;
                return t.can(o.Plq.MANAGE_GUILD, e);
            })(e, r.Z),
        [e],
    );
}
