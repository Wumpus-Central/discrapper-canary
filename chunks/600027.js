n.d(t, { T: () => c });
var r = n(159300),
    i = n(430824),
    l = n(496675),
    a = n(996106),
    o = n(561205),
    s = n(981631);
function c() {
    let e = (0, o.Z)();
    if (null == e) throw new a.Z({ errorCode: s.lTL.INVALID_CHANNEL }, 'Invalid channel');
    let t = i.Z.getGuild(e.getGuildId());
    if (null == t) throw new a.Z({ errorCode: s.lTL.INVALID_CHANNEL }, 'Invalid guild '.concat(e.getGuildId()));
    if (!(0, r.b)(l.Z, t, e)) throw new a.Z({ errorCode: s.lTL.INVALID_PERMISSIONS }, 'No invite permissions for '.concat(e.id));
    return {
        channel: e,
        guild: t
    };
}
