n.d(t, {
    Z: function () {
        return c;
    }
}),
    n(47120);
var i = n(200651);
n(192379);
var r = n(592125),
    l = n(430824),
    a = n(496675),
    o = n(983436),
    s = n(981631);
function c(e) {
    let { code: t, messageData: n } = e,
        [c, d] = t.split('/'),
        u = r.Z.getChannel(d),
        m = l.Z.getGuild(c);
    return null != u && u.isGuildVocal() && null != m && a.Z.can(s.Plq.VIEW_CHANNEL, u) && a.Z.can(s.Plq.CONNECT, u)
        ? (0, i.jsx)(o.Z, {
              guild: m,
              channel: u,
              messageData: n
          })
        : null;
}
