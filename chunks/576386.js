(r.d(t, { Z: () => m }), r(388685));
var n = r(255367),
    i = r(73800),
    l = r(120356),
    a = r.n(l),
    o = r(442837),
    s = r(481060),
    c = r(22267),
    u = r(377171),
    d = r(594174),
    p = r(388032),
    v = r(908998);
let f = (e) => {
        let { nameplate: t, isPurchased: r = !1, isSelected: l = !1, onClick: p } = e,
            f = (0, o.e7)([d.default], () => d.default.getCurrentUser()),
            [m, b] = (0, i.useState)(!1);
        return null == f
            ? null
            : (0, n.jsxs)(s.P3F, {
                  className: v.nameplateItem,
                  onClick: p,
                  onMouseEnter: () => b(!0),
                  onMouseLeave: () => b(!1),
                  children: [
                      (0, n.jsx)(c.Z, {
                          nameplate: t,
                          user: f,
                          showPlaceholderUser: !0,
                          isHighlighted: m
                      }),
                      (0, n.jsx)('div', { className: a()(v.nameplateItemOverlay, { [v.selected]: l }) }),
                      !r &&
                          (0, n.jsx)(s.G2e, {
                              icon: () =>
                                  (0, n.jsx)(s.mBM, {
                                      size: 'xxs',
                                      color: 'currentColor'
                                  }),
                              color: u.Z.BACKGROUND_ACCENT,
                              className: v.iconBadge
                          })
                  ]
              });
    },
    m = (e) => {
        let { selected: t, onSelect: r, onOpenShop: i, available: l, purchased: c } = e;
        return null == (0, o.e7)([d.default], () => d.default.getCurrentUser())
            ? null
            : (0, n.jsxs)(s.u2D, {
                  className: v.inventory,
                  children: [
                      (0, n.jsxs)('div', {
                          children: [
                              (0, n.jsx)(s.vwX, { children: p.intl.string(p.t['WfGV5+']) }),
                              (0, n.jsxs)('div', {
                                  className: v.inventoryControls,
                                  children: [
                                      (0, n.jsxs)(s.P3F, {
                                          className: a()(v.inventoryControlsButton, { [v.selected]: null == t }),
                                          onClick: () => r(null),
                                          children: [
                                              (0, n.jsx)(s.t6m, {
                                                  size: 'md',
                                                  color: 'currentColor'
                                              }),
                                              (0, n.jsx)(s.Text, {
                                                  variant: 'text-xs/normal',
                                                  children: p.intl.string(p.t.PoWNfX)
                                              })
                                          ]
                                      }),
                                      (0, n.jsxs)(s.P3F, {
                                          className: v.inventoryControlsButton,
                                          onClick: i,
                                          children: [
                                              (0, n.jsx)(s.EOn, {
                                                  size: 'md',
                                                  color: 'currentColor'
                                              }),
                                              (0, n.jsx)(s.Text, {
                                                  variant: 'text-xs/normal',
                                                  children: p.intl.string(p.t.pWG4zc)
                                              })
                                          ]
                                      })
                                  ]
                              }),
                              0 !== c.length
                                  ? (0, n.jsx)('div', {
                                        className: v.list,
                                        children: c.map((e) =>
                                            (0, n.jsx)(
                                                f,
                                                {
                                                    nameplate: e,
                                                    isPurchased: !0,
                                                    isSelected: (null == t ? void 0 : t.id) === e.id,
                                                    onClick: () => r(e, !0)
                                                },
                                                e.id
                                            )
                                        )
                                    })
                                  : null
                          ]
                      }),
                      0 !== l.length
                          ? (0, n.jsxs)('div', {
                                children: [
                                    (0, n.jsx)(s.vwX, { children: p.intl.string(p.t['1vbbeX']) }),
                                    (0, n.jsx)('div', {
                                        className: v.list,
                                        children: l.map((e) =>
                                            (0, n.jsx)(
                                                f,
                                                {
                                                    nameplate: e,
                                                    isSelected: (null == t ? void 0 : t.id) === e.id,
                                                    onClick: () => r(e, !1)
                                                },
                                                e.id
                                            )
                                        )
                                    })
                                ]
                            })
                          : null
                  ]
              });
    };
