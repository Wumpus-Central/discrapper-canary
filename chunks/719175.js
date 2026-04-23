n.d(t, { A: () => u });
var i = n(627968),
    l = n(64700),
    s = n(311907),
    r = n(289873),
    a = n(783878),
    o = n(460760),
    d = n(997590),
    c = n(927573);
let u = (e) => {
    let { label: t, description: n, guild: u, guildMetadata: m, disabled: g } = e,
        h = (0, s.yK)([d.A], () => d.A.getAllCategories()),
        x = l.useMemo(
            () =>
                h.map((e) => {
                    let { categoryId: t, name: n } = e;
                    return { id: t.toString(), value: t, label: n };
                }),
            [h],
        );
    return 0 === x.length
        ? (0, i.jsx)(r.y, {})
        : (0, i.jsx)(a.Z, {
              selectionMode: "multiple",
              label: t,
              description: n,
              value: m.secondaryCategoryIds,
              options: x,
              onSelectionChange: (e) => {
                  let { secondaryCategoryIds: t } = m;
                  if (e.length < t.length) t.filter((t) => !e.includes(t)).forEach((e) => (0, o.Tz)(u.id, e));
                  else {
                      if (t.length >= c._4) return;
                      e.filter((e) => !t.includes(e)).forEach((e) => (0, o.nA)(u.id, e));
                  }
              },
              disabled: g,
          });
};
