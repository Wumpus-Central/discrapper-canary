i.d(n, { A: () => c });
var l = i(627968);
i(64700);
var a = i(311907),
    e = i(397927),
    r = i(430452),
    d = i(985018);
function c(t) {
    return (0, a.bG)([r.Ay], () => r.Ay.hasContext(t.id), [t.id])
        ? (0, l.jsx)(e.Drp, {
              id: "ingame-voice",
              label: d.intl.string(d.t["pOul5/"]),
              action: () =>
                  (0, e.mMO)(async () => {
                      let { default: n } = await i.e("96531").then(i.bind(i, 880510));
                      return (i) => (0, l.jsx)(n, { ...i, mediaEngineContext: t.id, subtitle: t.name });
                  }),
          })
        : null;
}
