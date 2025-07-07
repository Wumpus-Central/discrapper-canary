(n.d(t, { Z: () => m }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    s = n(481060),
    c = n(22267),
    u = n(377171),
    d = n(594174),
    p = n(388032),
    v = n(908998);
let f = (e) => {
        let { nameplate: t, isPurchased: n = !1, isSelected: l = !1, onClick: p } = e,
            f = (0, o.e7)([d.default], () => d.default.getCurrentUser()),
            [m, b] = (0, i.useState)(!1);
        return null == f
            ? null
            : (0, r.jsxs)(s.P3F, {
                  className: v.nameplateItem,
                  onClick: p,
                  onMouseEnter: () => b(!0),
                  onMouseLeave: () => b(!1),
                  children: [
                      (0, r.jsx)(c.Z, {
                          nameplate: t,
                          user: f,
                          showPlaceholderUser: !0,
                          isHighlighted: m
                      }),
                      (0, r.jsx)('div', { className: a()(v.nameplateItemOverlay, { [v.selected]: l }) }),
                      !n &&
                          (0, r.jsx)(s.G2e, {
                              icon: () =>
                                  (0, r.jsx)(s.mBM, {
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
        let { selected: t, onSelect: n, onOpenShop: i, available: l, purchased: c } = e;
        return null == (0, o.e7)([d.default], () => d.default.getCurrentUser())
            ? null
            : (0, r.jsxs)(s.u2D, {
                  className: v.inventory,
                  children: [
                      (0, r.jsxs)('div', {
                          children: [
                              (0, r.jsx)(s.vwX, { children: p.intl.string(p.t['WfGV5+']) }),
                              (0, r.jsxs)('div', {
                                  className: v.inventoryControls,
                                  children: [
                                      (0, r.jsxs)(s.P3F, {
                                          className: a()(v.inventoryControlsButton, { [v.selected]: null == t }),
                                          onClick: () => n(null),
                                          children: [
                                              (0, r.jsx)(s.t6m, {
                                                  size: 'md',
                                                  color: 'currentColor'
                                              }),
                                              (0, r.jsx)(s.Text, {
                                                  variant: 'text-xs/normal',
                                                  children: p.intl.string(p.t.PoWNfX)
                                              })
                                          ]
                                      }),
                                      (0, r.jsxs)(s.P3F, {
                                          className: v.inventoryControlsButton,
                                          onClick: i,
                                          children: [
                                              (0, r.jsx)(s.EOn, {
                                                  size: 'md',
                                                  color: 'currentColor'
                                              }),
                                              (0, r.jsx)(s.Text, {
                                                  variant: 'text-xs/normal',
                                                  children: p.intl.string(p.t.pWG4zc)
                                              })
                                          ]
                                      })
                                  ]
                              }),
                              0 !== c.length
                                  ? (0, r.jsx)('div', {
                                        className: v.list,
                                        children: c.map((e) =>
                                            (0, r.jsx)(
                                                f,
                                                {
                                                    nameplate: e,
                                                    isPurchased: !0,
                                                    isSelected: (null == t ? void 0 : t.id) === e.id,
                                                    onClick: () => n(e, !0)
                                                },
                                                e.id
                                            )
                                        )
                                    })
                                  : null
                          ]
                      }),
                      0 !== l.length
                          ? (0, r.jsxs)('div', {
                                children: [
                                    (0, r.jsx)(s.vwX, { children: p.intl.string(p.t['1vbbeX']) }),
                                    (0, r.jsx)('div', {
                                        className: v.list,
                                        children: l.map((e) =>
                                            (0, r.jsx)(
                                                f,
                                                {
                                                    nameplate: e,
                                                    isSelected: (null == t ? void 0 : t.id) === e.id,
                                                    onClick: () => n(e, !1)
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
