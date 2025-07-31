(r.d(t, { Z: () => f }), r(388685));
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
let b = (e) => {
        var t;
        let { nameplate: r, isPurchased: l = !1, isSelected: b = !1, onClick: f } = e,
            m = (0, o.e7)([d.default], () => d.default.getCurrentUser()),
            [h, g] = (0, i.useState)(!1);
        return null == m
            ? null
            : (0, n.jsxs)(s.P3F, {
                  'aria-label': null != (t = r.label) ? t : p.intl.string(p.t.x5CoXV),
                  className: v.nameplateItem,
                  onClick: f,
                  onMouseEnter: () => g(!0),
                  onMouseLeave: () => g(!1),
                  children: [
                      (0, n.jsx)(c.Z, {
                          nameplate: r,
                          user: m,
                          showPlaceholderUser: !0,
                          isHighlighted: h
                      }),
                      (0, n.jsx)('div', { className: a()(v.nameplateItemOverlay, { [v.selected]: b }) }),
                      !l &&
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
    f = (e) => {
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
                                                b,
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
                                                b,
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
