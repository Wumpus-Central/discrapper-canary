n.d(t, { E: () => g }), n(953529);
var r = n(54381),
    i = n(473749),
    l = n(442837),
    a = n(668339),
    s = n(481060),
    o = n(456268),
    c = n(526429),
    d = n(128449),
    u = n(388032);
function g(e) {
    let { label: t, description: n, guildId: g, guildMetadata: f, isDisabled: m, clearable: b = !0 } = e,
        p = (0, l.Wu)([c.Z], () => c.Z.getPrimaryCategories()),
        h = i.useCallback(
            (e) => {
                (0, o.TA)(g, null != e ? e : d.o3);
            },
            [g],
        ),
        x = i.useMemo(
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
    return 0 === p.length
        ? (0, r.jsx)(s.$jN, {})
        : (0, r.jsx)(
              a.d,
              {
                  value: f.primaryCategoryId === d.o3 ? null : f.primaryCategoryId,
                  label: t,
                  description: n,
                  placeholder: u.intl.string(u.t.XqMe3N),
                  options: x,
                  onChange: h,
                  isDisabled: m,
                  clearable: b,
              },
              x.length,
          );
}
