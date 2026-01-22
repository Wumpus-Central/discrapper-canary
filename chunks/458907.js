n.d(t, {
    T: () => u,
}),
    n(228524);
var r = n(627968),
    i = n(64700),
    l = n(311907),
    s = n(397927),
    a = n(460760),
    c = n(997590),
    o = n(324580),
    d = n(985018);

function u(e) {
    let { label: t, description: n, guildId: u, guildMetadata: f, isDisabled: g, clearable: b = !0 } = e,
        m = (0, l.yK)([c.A], () => c.A.getPrimaryCategories()),
        p = i.useCallback(
            (e) => {
                (0, a.GX)(u, null != e ? e : o.ig);
            },
            [u],
        ),
        x = i.useMemo(
            () =>
                m.map((e) => {
                    let { categoryId: t, name: n } = e;
                    return {
                        id: t.toString(),
                        value: t,
                        label: n,
                    };
                }),
            [m],
        );
    return 0 === m.length
        ? (0, r.jsx)(s.y$y, {})
        : (0, r.jsx)(
              s.ZiE,
              {
                  selectionMode: "single",
                  value: f.primaryCategoryId === o.ig ? null : f.primaryCategoryId,
                  label: t,
                  description: n,
                  placeholder: d.intl.string(d.t.XqMe3N),
                  options: x,
                  onSelectionChange: p,
                  disabled: g,
                  clearable: b,
              },
              x.length,
          );
}
