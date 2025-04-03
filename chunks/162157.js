n.d(t, {
    BT: () => c,
    N8: () => a
});
var r = n(442837);
n(467319);
var i = n(496675),
    o = n(533244),
    l = n(487419),
    s = n(981631);
function a(e) {
    let t = (0, r.e7)(
            [i.Z],
            () =>
                (function (e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.Z;
                    return t.can(s.Plq.BAN_MEMBERS, e) || t.can(s.Plq.KICK_MEMBERS, e) || t.can(s.Plq.MANAGE_GUILD, e);
                })(e, i.Z),
            [e]
        ),
        n = (0, r.e7)([l.Z], () => (null != e ? l.Z.getGuildIncident(e.id) : null), [e]);
    return !(null != n && (0, o.i9)(n)) && t;
}
function c(e) {
    return (0, r.e7)(
        [i.Z],
        () =>
            (function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.Z;
                return t.can(s.Plq.MANAGE_GUILD, e);
            })(e, i.Z),
        [e]
    );
}
