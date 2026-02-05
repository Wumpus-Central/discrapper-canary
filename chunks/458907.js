"use strict";
n.d(t, { T: () => u });
var i = n(627968),
    s = n(64700),
    l = n(311907),
    r = n(397927),
    a = n(460760),
    o = n(997590),
    d = n(324580),
    c = n(985018);
function u(e) {
    let { label: t, description: n, guildId: u, guildMetadata: m, isDisabled: g, clearable: x = !0 } = e,
        h = (0, l.yK)([o.A], () => o.A.getPrimaryCategories()),
        _ = s.useCallback(
            (e) => {
                (0, a.GX)(u, e ?? d.ig);
            },
            [u],
        ),
        A = s.useMemo(
            () =>
                h.map((e) => {
                    let { categoryId: t, name: n } = e;
                    return { id: t.toString(), value: t, label: n };
                }),
            [h],
        );
    return 0 === h.length
        ? (0, i.jsx)(r.y$y, {})
        : (0, i.jsx)(
              r.ZiE,
              {
                  selectionMode: "single",
                  value: m.primaryCategoryId === d.ig ? null : m.primaryCategoryId,
                  label: t,
                  description: n,
                  placeholder: c.intl.string(c.t.XqMe3N),
                  options: A,
                  onSelectionChange: _,
                  disabled: g,
                  clearable: x,
              },
              A.length,
          );
}
