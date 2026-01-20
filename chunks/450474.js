n.d(t, { Z: () => d }), n(953529);
var r = n(54381),
    i = n(473749),
    l = n(442837),
    a = n(481060),
    s = n(456268),
    o = n(526429),
    c = n(203377);
let d = (e) => {
    let { label: t, description: n, guild: d, guildMetadata: u, disabled: g } = e,
        f = (0, l.Wu)([o.Z], () => o.Z.getAllCategories()),
        m = i.useMemo(
            () =>
                f.map((e) => {
                    let { categoryId: t, name: n } = e;
                    return {
                        id: t.toString(),
                        value: t,
                        label: n,
                    };
                }),
            [f],
        );
    return 0 === m.length
        ? (0, r.jsx)(a.$jN, {})
        : (0, r.jsx)(a.VcW, {
              selectionMode: "multiple",
              label: t,
              description: n,
              value: u.secondaryCategoryIds,
              options: m,
              onSelectionChange: (e) => {
                  let { secondaryCategoryIds: t } = u;
                  if (e.length < t.length) t.filter((t) => !e.includes(t)).forEach((e) => (0, s.K0)(d.id, e));
                  else {
                      if (t.length >= c.Pg) return;
                      e.filter((e) => !t.includes(e)).forEach((e) => (0, s.Kq)(d.id, e));
                  }
              },
              disabled: g,
          });
};
