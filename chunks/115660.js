n.d(t, { g: () => u });
var a = n(627968);
n(64700);
var l = n(311907),
    i = n(397927),
    r = n(263063),
    s = n(206835),
    o = n(71393),
    c = n(985018),
    d = n(997810);
function u(e, t, n, u, m) {
    let p = (0, l.bG)([o.A], () => o.A.getGuild(e)),
        h = (0, s.A)({
            guild: p,
            analyticsLocations: t,
        }),
        f = (0, s.A)({ analyticsLocations: t });
    return (0, a.jsxs)(a.Fragment, {
        children: [
            null != p
                ? (0, a.jsx)(
                      i.Drp,
                      {
                          id: "edit-server-profile",
                          "aria-label": c.intl.string(c.t["9ESaO7"]),
                          label: () =>
                              (0, a.jsxs)("div", {
                                  className: d.A,
                                  children: [
                                      (0, a.jsx)(r.A, {
                                          guild: p,
                                          size: r.A.Sizes.SMOL,
                                          className: d.$,
                                      }),
                                      (0, a.jsxs)("div", {
                                          children: [
                                              (0, a.jsx)(i.Text, {
                                                  variant: "text-sm/medium",
                                                  children: c.intl.string(c.t["9ESaO7"]),
                                              }),
                                              (0, a.jsx)(i.Text, {
                                                  variant: "text-xs/normal",
                                                  lineClamp: 1,
                                                  style: { maxWidth: "150px" },
                                                  children: null == p ? void 0 : p.name,
                                              }),
                                          ],
                                      }),
                                  ],
                              }),
                          action: () => {
                              h(), null == m || m(), null == u || u();
                          },
                      },
                      "edit-server-profile",
                  )
                : null,
            (0, a.jsx)(
                i.Drp,
                {
                    id: "edit-main-profile",
                    "aria-label": c.intl.string(c.t.HmFaFB),
                    label: () =>
                        (0, a.jsxs)("div", {
                            className: d.A,
                            children: [
                                (0, a.jsx)(i.clX, {
                                    size: "custom",
                                    width: 18,
                                    height: 18,
                                }),
                                (0, a.jsx)(i.Text, {
                                    variant: "text-sm/medium",
                                    children: c.intl.string(c.t.HmFaFB),
                                }),
                                n ? (0, a.jsx)(i.LpS, { text: c.intl.string(c.t.y2b7CA) }) : void 0,
                            ],
                        }),
                    action: () => {
                        f(), null == m || m(), null == u || u();
                    },
                },
                "edit-main-profile",
            ),
        ],
    });
}
