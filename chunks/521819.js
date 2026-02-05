n.d(t, { A: () => s });
var l = n(627968);
n(64700);
var i = n(311907),
    a = n(397927),
    r = n(260509),
    d = n(71393),
    o = n(287809),
    u = n(985018);
function s(e, t) {
    let s = (0, i.bG)([o.default], () => o.default.getCurrentUser()),
        c = (0, i.bG)([d.A], () => d.A.getGuild(t));
    return null == c || null == s || e.id === c.ownerId || e.bot || !(0, r.ok)(c, s)
        ? null
        : (0, l.jsx)(a.Drp, {
              id: "transfer-ownership",
              color: "danger",
              label: u.intl.string(u.t.Z5s7PM),
              action: () =>
                  (0, a.mMO)(async () => {
                      let { default: t } = await n.e("98215").then(n.bind(n, 482906));
                      return (n) => (0, l.jsx)(t, { ...n, guild: c, fromUser: s, toUser: e });
                  }),
          });
}
