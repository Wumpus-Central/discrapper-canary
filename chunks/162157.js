n.d(t, {
    BT: () => c,
    N8: () => o
});
var r = n(442837);
n(467319);
var l = n(496675),
    i = n(533244),
    a = n(487419),
    s = n(981631);
function o(e) {
    let t = (0, r.e7)(
            [l.Z],
            () =>
                (function (e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.Z;
                    return t.can(s.Plq.BAN_MEMBERS, e) || t.can(s.Plq.KICK_MEMBERS, e) || t.can(s.Plq.MANAGE_GUILD, e);
                })(e, l.Z),
            [e]
        ),
        n = (0, r.e7)([a.Z], () => (null != e ? a.Z.getGuildIncident(e.id) : null), [e]);
    return !(null != n && (0, i.i9)(n)) && t;
}
function c(e) {
    return (0, r.e7)(
        [l.Z],
        () =>
            (function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.Z;
                return t.can(s.Plq.MANAGE_GUILD, e);
            })(e, l.Z),
        [e]
    );
}
