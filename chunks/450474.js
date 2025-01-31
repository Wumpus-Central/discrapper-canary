n.d(t, { Z: () => d });
var i = n(200651),
    r = n(192379),
    l = n(442837),
    s = n(481060),
    a = n(456268),
    o = n(526429),
    c = n(203377);
let d = (e) => {
    let { guild: t, guildMetadata: n, disabled: d } = e,
        u = (0, l.Wu)([o.Z], () => o.Z.getAllCategories()),
        m = r.useMemo(
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
        ? (0, i.jsx)(s.$jN, {})
        : (0, i.jsx)(s.VcW, {
              value: n.secondaryCategoryIds,
              options: m,
              onChange: (e) => {
                  let { secondaryCategoryIds: i } = n;
                  if (e.length < i.length) i.filter((t) => !e.includes(t)).forEach((e) => (0, a.K0)(t.id, e));
                  else {
                      if (i.length >= c.Pg) return;
                      e.filter((e) => !i.includes(e)).forEach((e) => (0, a.Kq)(t.id, e));
                  }
              },
              isDisabled: d,
              multi: !0
          });
};
