n.d(t, { T: () => d });
var i = n(159300),
    l = n(430824),
    r = n(496675),
    a = n(996106),
    s = n(561205),
    o = n(981631);
function d() {
    let e = (0, s.Z)();
    if (null == e) throw new a.Z({ errorCode: o.lTL.INVALID_CHANNEL }, 'Invalid channel');
    let t = l.Z.getGuild(e.getGuildId());
    if (null == t) throw new a.Z({ errorCode: o.lTL.INVALID_CHANNEL }, 'Invalid guild '.concat(e.getGuildId()));
    if (!(0, i.b)(r.Z, t, e)) throw new a.Z({ errorCode: o.lTL.INVALID_PERMISSIONS }, 'No invite permissions for '.concat(e.id));
    return {
        channel: e,
        guild: t
    };
}
