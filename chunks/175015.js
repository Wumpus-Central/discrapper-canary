n.d(t, { K: () => u });
var a = n(54381);
n(473749);
var l = n(442837),
    r = n(481060),
    i = n(565138),
    s = n(300284),
    o = n(430824),
    c = n(388032),
    d = n(544909);
function u(e, t, n, u, m) {
    let p = (0, l.e7)([o.Z], () => o.Z.getGuild(e)),
        h = (0, s.Z)({
            guild: p,
            analyticsLocations: t,
        }),
        x = (0, s.Z)({ analyticsLocations: t });
    return (0, a.jsxs)(a.Fragment, {
        children: [
            null != p
                ? (0, a.jsx)(
                      r.sNh,
                      {
                          id: "edit-server-profile",
                          "aria-label": c.intl.string(c.t["9ESaO7"]),
                          label: () =>
                              (0, a.jsxs)("div", {
                                  className: d.item,
                                  children: [
                                      (0, a.jsx)(i.Z, {
                                          guild: p,
                                          size: i.Z.Sizes.SMOL,
                                          className: d.guildIcon,
                                      }),
                                      (0, a.jsxs)("div", {
                                          children: [
                                              (0, a.jsx)(r.Text, {
                                                  variant: "text-sm/medium",
                                                  children: c.intl.string(c.t["9ESaO7"]),
                                              }),
                                              (0, a.jsx)(r.Text, {
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
                r.sNh,
                {
                    id: "edit-main-profile",
                    "aria-label": c.intl.string(c.t.HmFaFB),
                    label: () =>
                        (0, a.jsxs)("div", {
                            className: d.item,
                            children: [
                                (0, a.jsx)(r.kYE, {
                                    size: "custom",
                                    width: 18,
                                    height: 18,
                                }),
                                (0, a.jsx)(r.Text, {
                                    variant: "text-sm/medium",
                                    children: c.intl.string(c.t.HmFaFB),
                                }),
                                n ? (0, a.jsx)(r.IGR, { text: c.intl.string(c.t.y2b7CA) }) : void 0,
                            ],
                        }),
                    action: () => {
                        x(), null == m || m(), null == u || u();
                    },
                },
                "edit-main-profile",
            ),
        ],
    });
}
