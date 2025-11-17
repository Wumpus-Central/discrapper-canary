n.d(t, { Z: () => c }), n(388685), n(35282);
var r = n(54381);
n(473749);
var i = n(592125),
    a = n(430824),
    o = n(496675),
    s = n(983436),
    l = n(981631);
function c(e) {
    let { code: t, message: n } = e,
        [c, u] = t.split("/"),
        d = i.Z.getChannel(u),
        f = a.Z.getGuild(c);
    return null != d && d.isGuildVocal() && null != f && o.Z.can(l.Plq.VIEW_CHANNEL, d) && o.Z.can(l.Plq.CONNECT, d)
        ? (0, r.jsx)(s.Z, {
              guild: f,
              channel: d,
              message: n,
          })
        : null;
}
