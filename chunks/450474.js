n.d(t, { Z: () => d });
var r = n(200651),
    i = n(192379),
    s = n(442837),
    a = n(481060),
    l = n(456268),
    o = n(526429),
    c = n(203377);
let d = (e) => {
    let { guild: t, guildMetadata: n, disabled: d } = e,
        u = (0, s.Wu)([o.Z], () => o.Z.getAllCategories()),
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
                  if (e.length < r.length) r.filter((t) => !e.includes(t)).forEach((e) => (0, l.K0)(t.id, e));
                  else {
                      if (r.length >= c.Pg) return;
                      e.filter((e) => !r.includes(e)).forEach((e) => (0, l.Kq)(t.id, e));
                  }
              },
              isDisabled: d,
              multi: !0
          });
};
