n.d(t, { Z: () => c }), n(47120);
var i = n(200651);
n(192379);
var l = n(592125),
    a = n(430824),
    r = n(496675),
    s = n(983436),
    o = n(981631);
function c(e) {
    let { code: t, messageData: n } = e,
        [c, d] = t.split('/'),
        u = l.Z.getChannel(d),
        m = a.Z.getGuild(c);
    return null != u && u.isGuildVocal() && null != m && r.Z.can(o.Plq.VIEW_CHANNEL, u) && r.Z.can(o.Plq.CONNECT, u)
        ? (0, i.jsx)(s.Z, {
              guild: m,
              channel: u,
              messageData: n
          })
        : null;
}
