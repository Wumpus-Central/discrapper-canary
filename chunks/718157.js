n.d(t, { E: () => d });
var r = n(200651),
    i = n(192379),
    l = n(442837),
    s = n(481060),
    a = n(456268),
    o = n(526429),
    c = n(128449),
    u = n(388032);
function d(e) {
    let { guildId: t, guildMetadata: n, isDisabled: d, clearable: m = !0 } = e,
        g = (0, l.Wu)([o.Z], () => o.Z.getPrimaryCategories()),
        p = i.useCallback(
            (e) => {
                (0, a.TA)(t, null != e ? e : c.o3);
            },
            [t]
        ),
        h = i.useMemo(
            () =>
                g.map((e) => {
                    let { categoryId: t, name: n } = e;
                    return {
                        value: t,
                        label: n
                    };
                }),
            [g]
        );
    return 0 === g.length
        ? (0, r.jsx)(s.$jN, {})
        : (0, r.jsx)(
              s.VcW,
              {
                  value: n.primaryCategoryId === c.o3 ? null : n.primaryCategoryId,
                  placeholder: u.intl.string(u.t.XqMe3N),
                  options: h,
                  onChange: p,
                  isDisabled: d,
                  clearable: m
              },
              h.length
          );
}
