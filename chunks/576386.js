(r.d(t, { Z: () => f }), r(388685));
var n = r(255367),
    a = r(73800),
    l = r(120356),
    i = r.n(l),
    o = r(442837),
    s = r(481060),
    c = r(22267),
    u = r(377171),
    d = r(594174),
    p = r(388032),
    b = r(908998);
let h = (e) => {
        var t;
        let { nameplate: r, isPurchased: l = !1, isSelected: h = !1, onClick: f } = e,
            v = (0, o.e7)([d.default], () => d.default.getCurrentUser()),
            [m, _] = (0, a.useState)(!1);
        return null == v
            ? null
            : (0, n.jsxs)(s.P3F, {
                  'aria-label': null != (t = r.label) ? t : p.intl.string(p.t.x5CoXV),
                  className: b.nameplateItem,
                  onClick: f,
                  onMouseEnter: () => _(!0),
                  onMouseLeave: () => _(!1),
                  children: [
                      (0, n.jsx)(c.Z, {
                          nameplate: r,
                          user: v,
                          showPlaceholderUser: !0,
                          isHighlighted: m
                      }),
                      (0, n.jsx)('div', { className: i()(b.nameplateItemOverlay, { [b.selected]: h }) }),
                      !l &&
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
    f = (e) => {
        let { selected: t, onSelect: r, onOpenShop: a, available: l, purchased: c } = e;
        return null == (0, o.e7)([d.default], () => d.default.getCurrentUser())
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
                                          className: i()(b.inventoryControlsButton, { [b.selected]: null == t }),
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
                                          onClick: a,
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
                                                h,
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
                                        className: b.list,
                                        children: l.map((e) =>
                                            (0, n.jsx)(
                                                h,
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
