n.d(t, {
    BT: () => d,
    N8: () => a
});
var i = n(442837);
n(467319);
var r = n(496675),
    l = n(533244),
    o = n(487419),
    s = n(981631);
function a(e) {
    let t = (0, i.e7)(
            [r.Z],
            () =>
                (function (e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.Z;
                    return t.can(s.Plq.BAN_MEMBERS, e) || t.can(s.Plq.KICK_MEMBERS, e) || t.can(s.Plq.MANAGE_GUILD, e);
                })(e, r.Z),
            [e]
        ),
        n = (0, i.e7)([o.Z], () => (null != e ? o.Z.getGuildIncident(e.id) : null), [e]);
    return !(null != n && (0, l.i9)(n)) && t;
}
function d(e) {
    return (0, i.e7)(
        [r.Z],
        () =>
            (function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.Z;
                return t.can(s.Plq.MANAGE_GUILD, e);
            })(e, r.Z),
        [e]
    );
}
