n.d(t, { Z: () => c }), n(388685), n(35282);
var r = n(951288);
n(647438);
var i = n(592125),
    l = n(430824),
    o = n(496675),
    a = n(983436),
    s = n(981631);
function c(e) {
    let { code: t, message: n } = e,
        [c, u] = t.split("/"),
        d = i.Z.getChannel(u),
        p = l.Z.getGuild(c);
    return null != d && d.isGuildVocal() && null != p && o.Z.can(s.Plq.VIEW_CHANNEL, d) && o.Z.can(s.Plq.CONNECT, d)
        ? (0, r.jsx)(a.Z, {
              guild: p,
              channel: d,
              message: n,
          })
        : null;
}
