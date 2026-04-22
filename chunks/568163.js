i.d(t, { A: () => A });
var l = i(627968);
i(64700);
var a = i(311907),
    e = i(477782),
    r = i(192308),
    d = i(430452),
    c = i(985018);
function A(n) {
    return (0, a.bG)([d.Ay], () => d.Ay.hasContext(n.id), [n.id])
        ? (0, l.jsx)(e.Dr, {
              id: "ingame-voice",
              label: c.intl.string(c.t["pOul5/"]),
              action: () =>
                  (0, r.openModalLazy)(async () => {
                      let { default: t } = await i.e("18912").then(i.bind(i, 880510));
                      return (i) => (0, l.jsx)(t, { ...i, mediaEngineContext: n.id, subtitle: n.name });
                  }),
          })
        : null;
}
