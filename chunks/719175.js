n.d(t, {
    A: () => d,
}),
    n(228524);
var r = n(627968),
    i = n(64700),
    l = n(311907),
    s = n(397927),
    a = n(460760),
    c = n(997590),
    o = n(927573);
let d = (e) => {
    let { label: t, description: n, guild: d, guildMetadata: u, disabled: f } = e,
        g = (0, l.yK)([c.A], () => c.A.getAllCategories()),
        b = i.useMemo(
            () =>
                g.map((e) => {
                    let { categoryId: t, name: n } = e;
                    return {
                        id: t.toString(),
                        value: t,
                        label: n,
                    };
                }),
            [g],
        );
    return 0 === b.length
        ? (0, r.jsx)(s.y$y, {})
        : (0, r.jsx)(s.ZiE, {
              selectionMode: "multiple",
              label: t,
              description: n,
              value: u.secondaryCategoryIds,
              options: b,
              onSelectionChange: (e) => {
                  let { secondaryCategoryIds: t } = u;
                  if (e.length < t.length) t.filter((t) => !e.includes(t)).forEach((e) => (0, a.Tz)(d.id, e));
                  else {
                      if (t.length >= o._4) return;
                      e.filter((e) => !t.includes(e)).forEach((e) => (0, a.nA)(d.id, e));
                  }
              },
              disabled: f,
          });
};
