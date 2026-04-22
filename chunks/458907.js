n.d(t, { T: () => m });
var i = n(627968),
    l = n(64700),
    s = n(311907),
    r = n(289873),
    a = n(783878),
    o = n(460760),
    d = n(997590),
    c = n(324580),
    u = n(985018);
function m(e) {
    let { label: t, description: n, guildId: m, guildMetadata: g, isDisabled: h, clearable: x = !0 } = e,
        _ = (0, s.yK)([d.A], () => d.A.getPrimaryCategories()),
        p = l.useCallback(
            (e) => {
                (0, o.GX)(m, e ?? c.ig);
            },
            [m],
        ),
        A = l.useMemo(
            () =>
                _.map((e) => {
                    let { categoryId: t, name: n } = e;
                    return { id: t.toString(), value: t, label: n };
                }),
            [_],
        );
    return 0 === _.length
        ? (0, i.jsx)(r.y, {})
        : (0, i.jsx)(
              a.Z,
              {
                  selectionMode: "single",
                  value: g.primaryCategoryId === c.ig ? null : g.primaryCategoryId,
                  label: t,
                  description: n,
                  placeholder: u.intl.string(u.t.XqMe3N),
                  options: A,
                  onSelectionChange: p,
                  disabled: h,
                  clearable: x,
              },
              A.length,
          );
}
