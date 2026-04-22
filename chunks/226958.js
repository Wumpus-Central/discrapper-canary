n.d(e, { A: () => y });
var l = n(627968);
n(64700);
var t = n(735438),
    a = n.n(t),
    d = n(311907),
    r = n(192308),
    s = n(477782),
    o = n(534890),
    c = n(970278),
    u = n(406704),
    g = n(985018);
function y(i) {
    let e = (0, u.H_)(i),
        t = (0, d.bG)([c.A], () => !a().isEmpty(c.A.getThreadsForGuild(i.id)));
    return e && t
        ? (0, l.jsx)(s.Dr, {
              id: "active-threads",
              label: g.intl.string(g.t.TM6err),
              icon: o.o,
              leadingAccessory: { type: "icon", icon: o.o },
              action: () => {
                  (0, r.openModalLazy)(async () => {
                      let { default: e } = await n.e("92596").then(n.bind(n, 400954));
                      return (n) => (0, l.jsx)(e, { guildId: i.id, ...n });
                  });
              },
          })
        : null;
}
