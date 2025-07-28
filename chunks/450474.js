n.d(t, { Z: () => d });
var r = n(255367),
    i = n(73800),
    l = n(442837),
    a = n(481060),
    s = n(456268),
    o = n(526429),
    c = n(203377);
let d = (e) => {
    let { guild: t, guildMetadata: n, disabled: d } = e,
        u = (0, l.Wu)([o.Z], () => o.Z.getAllCategories()),
        m = i.useMemo(
            () =>
                u.map((e) => {
                    let { categoryId: t, name: n } = e;
                    return {
                        value: t,
                        label: n
                    };
                }),
            [u]
        );
    return 0 === m.length
        ? (0, r.jsx)(a.$jN, {})
        : (0, r.jsx)(a.VcW, {
              value: n.secondaryCategoryIds,
              options: m,
              onChange: (e) => {
                  let { secondaryCategoryIds: r } = n;
                  if (e.length < r.length) r.filter((t) => !e.includes(t)).forEach((e) => (0, s.K0)(t.id, e));
                  else {
                      if (r.length >= c.Pg) return;
                      e.filter((e) => !r.includes(e)).forEach((e) => (0, s.Kq)(t.id, e));
                  }
              },
              isDisabled: d,
              multi: !0
          });
};
