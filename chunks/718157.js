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
    let { label: t, description: n, guildId: g, guildMetadata: m, isDisabled: p, clearable: f = !0 } = e,
        h = (0, l.Wu)([c.Z], () => c.Z.getPrimaryCategories()),
        b = i.useCallback(
            (e) => {
                (0, o.TA)(g, null != e ? e : d.o3);
            },
            [g],
        ),
        x = i.useMemo(
            () =>
                h.map((e) => {
                    let { categoryId: t, name: n } = e;
                    return {
                        value: t,
                        label: n,
                    };
                }),
            [h],
        );
    return 0 === h.length
        ? (0, r.jsx)(s.$jN, {})
        : (0, r.jsx)(
              a.d,
              {
                  value: m.primaryCategoryId === d.o3 ? null : m.primaryCategoryId,
                  label: t,
                  description: n,
                  placeholder: u.intl.string(u.t.XqMe3N),
                  options: x,
                  onChange: b,
                  isDisabled: p,
                  clearable: f,
              },
              x.length,
          );
}
