n.d(t, { A: () => c });
var l = n(627968);
n(64700);
var i = n(311907),
    r = n(477782),
    a = n(192308),
    o = n(260509),
    d = n(71393),
    u = n(287809),
    s = n(985018);
function c(e, t) {
    let c = (0, i.bG)([u.default], () => u.default.getCurrentUser()),
        A = (0, i.bG)([d.A], () => d.A.getGuild(t));
    return null == A || null == c || e.id === A.ownerId || e.bot || !(0, o.ok)(A, c)
        ? null
        : (0, l.jsx)(r.Dr, {
              id: "transfer-ownership",
              color: "danger",
              label: s.intl.string(s.t.Z5s7PM),
              action: () =>
                  (0, a.openModalLazy)(async () => {
                      let { default: t } = await n.e("98215").then(n.bind(n, 482906));
                      return (n) => (0, l.jsx)(t, { ...n, guild: A, fromUser: c, toUser: e });
                  }),
          });
}
