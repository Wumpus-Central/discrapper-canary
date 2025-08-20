r.d(t, { Z: () => b }), r(388685);
var n = r(951288),
    i = r(647438),
    a = r(120356),
    l = r.n(a),
    o = r(442837),
    s = r(481060),
    c = r(22267),
    u = r(377171),
    d = r(594174),
    p = r(388032),
    v = r(24391);
let f = (e) => {
        var t;
        let { nameplate: r, isPurchased: a = !1, isSelected: f = !1, onClick: b } = e,
            m = (0, o.e7)([d.default], () => d.default.getCurrentUser()),
            [g, h] = (0, i.useState)(!1);
        return null == m
            ? null
            : (0, n.jsxs)(s.P3F, {
                  "aria-label": null != (t = r.label) ? t : p.intl.string(p.t.x5CoXV),
                  className: v.nameplateItem,
                  onClick: b,
                  onMouseEnter: () => h(!0),
                  onMouseLeave: () => h(!1),
                  children: [
                      (0, n.jsx)(c.Z, {
                          nameplate: r,
                          user: m,
                          showPlaceholderUser: !0,
                          isHighlighted: g,
                      }),
                      (0, n.jsx)("div", { className: l()(v.nameplateItemOverlay, { [v.selected]: f }) }),
                      !a &&
                          (0, n.jsx)(s.G2e, {
                              icon: () =>
                                  (0, n.jsx)(s.mBM, {
                                      size: "xxs",
                                      color: "currentColor",
                                  }),
                              color: u.Z.BACKGROUND_ACCENT,
                              className: v.iconBadge,
                          }),
                  ],
              });
    },
    b = (e) => {
        let { selected: t, onSelect: r, onOpenShop: i, available: a, purchased: c, isPerGuild: u } = e;
        return null == (0, o.e7)([d.default], () => d.default.getCurrentUser())
            ? null
            : (0, n.jsxs)(s.u2D, {
                  className: v.inventory,
                  children: [
                      (0, n.jsxs)("div", {
                          children: [
                              (0, n.jsx)(s.vwX, { children: p.intl.string(p.t["WfGV5+"]) }),
                              (0, n.jsxs)("div", {
                                  className: v.inventoryControls,
                                  children: [
                                      (0, n.jsxs)(s.P3F, {
                                          className: l()(v.inventoryControlsButton, { [v.selected]: null == t }),
                                          onClick: () => r(null),
                                          children: [
                                              (0, n.jsx)(s.t6m, {
                                                  size: "md",
                                                  color: "currentColor",
                                              }),
                                              (0, n.jsx)(s.Text, {
                                                  variant: "text-xs/normal",
                                                  children: u ? p.intl.string(p.t.CHf9iI) : p.intl.string(p.t.PoWNfX),
                                              }),
                                          ],
                                      }),
                                      (0, n.jsxs)(s.P3F, {
                                          className: v.inventoryControlsButton,
                                          onClick: i,
                                          children: [
                                              (0, n.jsx)(s.EOn, {
                                                  size: "md",
                                                  color: "currentColor",
                                              }),
                                              (0, n.jsx)(s.Text, {
                                                  variant: "text-xs/normal",
                                                  children: p.intl.string(p.t.pWG4zc),
                                              }),
                                          ],
                                      }),
                                  ],
                              }),
                              0 !== c.length
                                  ? (0, n.jsx)("div", {
                                        className: v.list,
                                        children: c.map((e) =>
                                            (0, n.jsx)(
                                                f,
                                                {
                                                    nameplate: e,
                                                    isPurchased: !0,
                                                    isSelected: (null == t ? void 0 : t.id) === e.id,
                                                    onClick: () => r(e, !0),
                                                },
                                                e.id,
                                            ),
                                        ),
                                    })
                                  : null,
                          ],
                      }),
                      0 !== a.length
                          ? (0, n.jsxs)("div", {
                                children: [
                                    (0, n.jsx)(s.vwX, { children: p.intl.string(p.t["1vbbeX"]) }),
                                    (0, n.jsx)("div", {
                                        className: v.list,
                                        children: a.map((e) =>
                                            (0, n.jsx)(
                                                f,
                                                {
                                                    nameplate: e,
                                                    isSelected: (null == t ? void 0 : t.id) === e.id,
                                                    onClick: () => r(e, !1),
                                                },
                                                e.id,
                                            ),
                                        ),
                                    }),
                                ],
                            })
                          : null,
                  ],
              });
    };
