n.d(t, { Z: () => u });
var r = n(255367),
    i = n(73800),
    l = n(442837),
    s = n(481060),
    a = n(456268),
    o = n(526429),
    c = n(203377);
let u = (e) => {
    let { guild: t, guildMetadata: n, disabled: u } = e,
        d = (0, l.Wu)([o.Z], () => o.Z.getAllCategories()),
        m = i.useMemo(
            () =>
                d.map((e) => {
                    let { categoryId: t, name: n } = e;
                    return {
                        value: t,
                        label: n
                    };
                }),
            [d]
        );
    return 0 === m.length
        ? (0, r.jsx)(s.$jN, {})
        : (0, r.jsx)(s.VcW, {
              value: n.secondaryCategoryIds,
              options: m,
              onChange: (e) => {
                  let { secondaryCategoryIds: r } = n;
                  if (e.length < r.length) r.filter((t) => !e.includes(t)).forEach((e) => (0, a.K0)(t.id, e));
                  else {
                      if (r.length >= c.Pg) return;
                      e.filter((e) => !r.includes(e)).forEach((e) => (0, a.Kq)(t.id, e));
                  }
              },
              isDisabled: u,
              multi: !0
          });
};
