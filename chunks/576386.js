r.d(t, { Z: () => v }), r(388685);
var n = r(255367),
    i = r(73800),
    o = r(120356),
    l = r.n(o),
    a = r(442837),
    s = r(481060),
    c = r(22267),
    u = r(377171),
    d = r(594174),
    p = r(388032),
    b = r(908998);
let f = (e) => {
        let { nameplate: t, isPurchased: r = !1, isSelected: o = !1, onClick: p } = e,
            f = (0, a.e7)([d.default], () => d.default.getCurrentUser()),
            [v, m] = (0, i.useState)(!1);
        return null == f
            ? null
            : (0, n.jsxs)(s.P3F, {
                  className: b.nameplateItem,
                  onClick: p,
                  onMouseEnter: () => m(!0),
                  onMouseLeave: () => m(!1),
                  children: [
                      (0, n.jsx)(c.Z, {
                          nameplate: t,
                          user: f,
                          showWumpus: !0,
                          isHighlighted: v
                      }),
                      (0, n.jsx)('div', { className: l()(b.nameplateItemOverlay, { [b.selected]: o }) }),
                      !r &&
                          (0, n.jsx)(s.G2e, {
                              icon: () =>
                                  (0, n.jsx)(s.mBM, {
                                      size: 'xxs',
                                      color: 'currentColor'
                                  }),
                              color: u.Z.BACKGROUND_ACCENT,
                              className: b.iconBadge
                          })
                  ]
              });
    },
    v = (e) => {
        let { selected: t, onSelect: r, onOpenShop: i, available: o, purchased: c } = e;
        return null == (0, a.e7)([d.default], () => d.default.getCurrentUser())
            ? null
            : (0, n.jsxs)(s.u2D, {
                  className: b.inventory,
                  children: [
                      (0, n.jsxs)('div', {
                          children: [
                              (0, n.jsx)(s.vwX, { children: p.intl.string(p.t['WfGV5+']) }),
                              (0, n.jsxs)('div', {
                                  className: b.inventoryControls,
                                  children: [
                                      (0, n.jsxs)(s.P3F, {
                                          className: l()(b.inventoryControlsButton, { [b.selected]: null == t }),
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
                                          className: b.inventoryControlsButton,
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
                                        className: b.list,
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
                      0 !== o.length
                          ? (0, n.jsxs)('div', {
                                children: [
                                    (0, n.jsx)(s.vwX, { children: p.intl.string(p.t['1vbbeX']) }),
                                    (0, n.jsx)('div', {
                                        className: b.list,
                                        children: o.map((e) =>
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
