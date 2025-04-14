n.d(t, { E: () => u });
var r = n(200651),
    i = n(192379),
    s = n(442837),
    l = n(481060),
    a = n(456268),
    o = n(526429),
    c = n(128449),
    d = n(388032);
function u(e) {
    let { guildId: t, guildMetadata: n, isDisabled: u, clearable: m = !0 } = e,
        g = (0, s.Wu)([o.Z], () => o.Z.getPrimaryCategories()),
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
        ? (0, r.jsx)(l.$jN, {})
        : (0, r.jsx)(
              l.VcW,
              {
                  value: n.primaryCategoryId === c.o3 ? null : n.primaryCategoryId,
                  placeholder: d.NW.string(d.t.XqMe3N),
                  options: h,
                  onChange: p,
                  isDisabled: u,
                  clearable: m
              },
              h.length
          );
}
