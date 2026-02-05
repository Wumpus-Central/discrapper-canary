"use strict";
n.d(t, { A: () => c });
var i = n(627968),
    s = n(64700),
    l = n(311907),
    r = n(397927),
    a = n(460760),
    o = n(997590),
    d = n(927573);
let c = (e) => {
    let { label: t, description: n, guild: c, guildMetadata: u, disabled: m } = e,
        g = (0, l.yK)([o.A], () => o.A.getAllCategories()),
        x = s.useMemo(
            () =>
                g.map((e) => {
                    let { categoryId: t, name: n } = e;
                    return { id: t.toString(), value: t, label: n };
                }),
            [g],
        );
    return 0 === x.length
        ? (0, i.jsx)(r.y$y, {})
        : (0, i.jsx)(r.ZiE, {
              selectionMode: "multiple",
              label: t,
              description: n,
              value: u.secondaryCategoryIds,
              options: x,
              onSelectionChange: (e) => {
                  let { secondaryCategoryIds: t } = u;
                  if (e.length < t.length) t.filter((t) => !e.includes(t)).forEach((e) => (0, a.Tz)(c.id, e));
                  else {
                      if (t.length >= d._4) return;
                      e.filter((e) => !t.includes(e)).forEach((e) => (0, a.nA)(c.id, e));
                  }
              },
              disabled: m,
          });
};
