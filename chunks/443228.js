n.d(t, {
    A: () => c,
}),
    n(896048),
    n(747238);
var r = n(627968);
n(64700);
var i = n(734057),
    a = n(71393),
    s = n(576705),
    o = n(483660),
    l = n(652215);

function c(e) {
    let { code: t, message: n } = e,
        [c, u] = t.split("/"),
        d = i.A.getChannel(u),
        f = a.A.getGuild(c);
    return null != d && d.isGuildVocal() && null != f && s.A.can(l.xBc.VIEW_CHANNEL, d) && s.A.can(l.xBc.CONNECT, d)
        ? (0, r.jsx)(o.A, {
              guild: f,
              channel: d,
              message: n,
          })
        : null;
}
