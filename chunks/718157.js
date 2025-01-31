n.d(t, { E: () => u });
var i = n(200651),
    r = n(192379),
    l = n(442837),
    s = n(481060),
    a = n(456268),
    o = n(526429),
    c = n(128449),
    d = n(388032);
function u(e) {
    let { guildId: t, guildMetadata: n, isDisabled: u, clearable: m = !0 } = e,
        h = (0, l.Wu)([o.Z], () => o.Z.getPrimaryCategories()),
        g = r.useCallback(
            (e) => {
                (0, a.TA)(t, null != e ? e : c.o3);
            },
            [t]
        ),
        x = r.useMemo(
            () =>
                h.map((e) => {
                    let { categoryId: t, name: n } = e;
                    return {
                        value: t,
                        label: n
                    };
                }),
            [h]
        );
    return 0 === h.length
        ? (0, i.jsx)(s.$jN, {})
        : (0, i.jsx)(
              s.VcW,
              {
                  value: n.primaryCategoryId === c.o3 ? null : n.primaryCategoryId,
                  placeholder: d.intl.string(d.t.XqMe3N),
                  options: x,
                  onChange: g,
                  isDisabled: u,
                  clearable: m
              },
              x.length
          );
}
