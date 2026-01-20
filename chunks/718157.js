n.d(t, { E: () => u }), n(953529);
var r = n(54381),
    i = n(473749),
    l = n(442837),
    a = n(481060),
    s = n(456268),
    o = n(526429),
    c = n(128449),
    d = n(388032);
function u(e) {
    let { label: t, description: n, guildId: u, guildMetadata: g, isDisabled: f, clearable: m = !0 } = e,
        b = (0, l.Wu)([o.Z], () => o.Z.getPrimaryCategories()),
        p = i.useCallback(
            (e) => {
                (0, s.TA)(u, null != e ? e : c.o3);
            },
            [u],
        ),
        h = i.useMemo(
            () =>
                b.map((e) => {
                    let { categoryId: t, name: n } = e;
                    return {
                        id: t.toString(),
                        value: t,
                        label: n,
                    };
                }),
            [b],
        );
    return 0 === b.length
        ? (0, r.jsx)(a.$jN, {})
        : (0, r.jsx)(
              a.VcW,
              {
                  selectionMode: "single",
                  value: g.primaryCategoryId === c.o3 ? null : g.primaryCategoryId,
                  label: t,
                  description: n,
                  placeholder: d.intl.string(d.t.XqMe3N),
                  options: h,
                  onSelectionChange: p,
                  disabled: f,
                  clearable: m,
              },
              h.length,
          );
}
