n.d(t, {
    BT: () => d,
    N8: () => o
});
var i = n(442837);
n(467319);
var l = n(496675),
    a = n(533244),
    r = n(487419),
    s = n(981631);
function o(e) {
    let t = (0, i.e7)(
            [l.Z],
            () =>
                (function (e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.Z;
                    return t.can(s.Plq.BAN_MEMBERS, e) || t.can(s.Plq.KICK_MEMBERS, e) || t.can(s.Plq.MANAGE_GUILD, e);
                })(e, l.Z),
            [e]
        ),
        n = (0, i.e7)([r.Z], () => (null != e ? r.Z.getGuildIncident(e.id) : null), [e]);
    return !(null != n && (0, a.i9)(n)) && t;
}
function d(e) {
    return (0, i.e7)(
        [l.Z],
        () =>
            (function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.Z;
                return t.can(s.Plq.MANAGE_GUILD, e);
            })(e, l.Z),
        [e]
    );
}
