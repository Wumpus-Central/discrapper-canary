n.d(t, { Z: () => c }), n(388685), n(35282);
var r = n(200651);
n(192379);
var i = n(592125),
    l = n(430824),
    a = n(496675),
    o = n(983436),
    s = n(981631);
function c(e) {
    let { code: t, messageData: n } = e,
        [c, u] = t.split('/'),
        d = i.Z.getChannel(u),
        p = l.Z.getGuild(c);
    return null != d && d.isGuildVocal() && null != p && a.Z.can(s.Plq.VIEW_CHANNEL, d) && a.Z.can(s.Plq.CONNECT, d)
        ? (0, r.jsx)(o.Z, {
              guild: p,
              channel: d,
              messageData: n
          })
        : null;
}
