n.d(l, { Z: () => v }), n(388685);
var t = n(951288),
    i = n(647438),
    s = n(120356),
    a = n.n(s),
    r = n(442837),
    o = n(481060),
    d = n(22267),
    c = n(377171),
    u = n(594174),
    x = n(388032),
    p = n(801707);
let m = (e) => {
        var l;
        let { nameplate: n, isPurchased: s = !1, isSelected: m = !1, onClick: v } = e,
            h = (0, r.e7)([u.default], () => u.default.getCurrentUser()),
            [j, g] = (0, i.useState)(!1);
        return null == h
            ? null
            : (0, t.jsxs)(o.P3F, {
                  "aria-label": null != (l = n.label) ? l : x.intl.string(x.t.x5CoXV),
                  className: p.nameplateItem,
                  onClick: v,
                  onMouseEnter: () => g(!0),
                  onMouseLeave: () => g(!1),
                  children: [
                      (0, t.jsx)(d.Z, {
                          nameplate: n,
                          user: h,
                          showPlaceholderUser: !0,
                          isHighlighted: j,
                      }),
                      (0, t.jsx)("div", { className: a()(p.nameplateItemOverlay, { [p.selected]: m }) }),
                      !s &&
                          (0, t.jsx)(o.G2e, {
                              icon: () =>
                                  (0, t.jsx)(o.mBM, {
                                      size: "xxs",
                                      color: "currentColor",
                                  }),
                              color: c.Z.BACKGROUND_ACCENT,
                              className: p.iconBadge,
                          }),
                  ],
              });
    },
    v = (e) => {
        let { selected: l, onSelect: n, onOpenShop: i, available: s, purchased: d, isPerGuild: c } = e;
        return null == (0, r.e7)([u.default], () => u.default.getCurrentUser())
            ? null
            : (0, t.jsxs)(o.u2D, {
                  className: p.inventory,
                  children: [
                      (0, t.jsxs)("div", {
                          children: [
                              (0, t.jsx)(o.vwX, { children: x.intl.string(x.t["WfGV5+"]) }),
                              (0, t.jsxs)("div", {
                                  className: p.inventoryControls,
                                  children: [
                                      (0, t.jsxs)(o.P3F, {
                                          className: a()(p.inventoryControlsButton, { [p.selected]: null == l }),
                                          onClick: () => n(null),
                                          children: [
                                              (0, t.jsx)(o.t6m, {
                                                  size: "md",
                                                  color: "currentColor",
                                              }),
                                              (0, t.jsx)(o.Text, {
                                                  variant: "text-xs/normal",
                                                  children: c ? x.intl.string(x.t.CHf9iI) : x.intl.string(x.t.PoWNfX),
                                              }),
                                          ],
                                      }),
                                      (0, t.jsxs)(o.P3F, {
                                          className: p.inventoryControlsButton,
                                          onClick: i,
                                          children: [
                                              (0, t.jsx)(o.EOn, {
                                                  size: "md",
                                                  color: "currentColor",
                                              }),
                                              (0, t.jsx)(o.Text, {
                                                  variant: "text-xs/normal",
                                                  children: x.intl.string(x.t.pWG4zc),
                                              }),
                                          ],
                                      }),
                                  ],
                              }),
                              0 !== d.length
                                  ? (0, t.jsx)("div", {
                                        className: p.list,
                                        children: d.map((e) =>
                                            (0, t.jsx)(
                                                m,
                                                {
                                                    nameplate: e,
                                                    isPurchased: !0,
                                                    isSelected: (null == l ? void 0 : l.id) === e.id,
                                                    onClick: () => n(e, !0),
                                                },
                                                e.id,
                                            ),
                                        ),
                                    })
                                  : null,
                          ],
                      }),
                      0 !== s.length
                          ? (0, t.jsxs)("div", {
                                children: [
                                    (0, t.jsx)(o.vwX, { children: x.intl.string(x.t["1vbbeX"]) }),
                                    (0, t.jsx)("div", {
                                        className: p.list,
                                        children: s.map((e) =>
                                            (0, t.jsx)(
                                                m,
                                                {
                                                    nameplate: e,
                                                    isSelected: (null == l ? void 0 : l.id) === e.id,
                                                    onClick: () => n(e, !1),
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
