n.d(t, { Z: () => u }), n(953529);
var r = n(54381),
    i = n(473749),
    l = n(442837),
    a = n(668339),
    s = n(481060),
    o = n(456268),
    c = n(526429),
    d = n(203377);
let u = (e) => {
    let { label: t, description: n, guild: u, guildMetadata: g, disabled: m } = e,
        p = (0, l.Wu)([c.Z], () => c.Z.getAllCategories()),
        f = i.useMemo(
            () =>
                p.map((e) => {
                    let { categoryId: t, name: n } = e;
                    return {
                        value: t,
                        label: n,
                    };
                }),
            [p],
        );
    return 0 === f.length
        ? (0, r.jsx)(s.$jN, {})
        : (0, r.jsx)(a.d, {
              label: t,
              description: n,
              value: g.secondaryCategoryIds,
              options: f,
              onChange: (e) => {
                  let { secondaryCategoryIds: t } = g;
                  if (e.length < t.length) t.filter((t) => !e.includes(t)).forEach((e) => (0, o.K0)(u.id, e));
                  else {
                      if (t.length >= d.Pg) return;
                      e.filter((e) => !t.includes(e)).forEach((e) => (0, o.Kq)(u.id, e));
                  }
              },
              isDisabled: m,
              multi: !0,
          });
};
