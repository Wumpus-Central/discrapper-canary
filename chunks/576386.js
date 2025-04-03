r.d(t, { Z: () => v }), r(47120);
var n = r(200651),
    i = r(192379),
    o = r(120356),
    l = r.n(o),
    a = r(442837),
    s = r(481060),
    c = r(22267),
    u = r(594174),
    d = r(388032),
    p = r(908998);
let b = (e) => {
        let { nameplate: t, isPurchased: r = !1, isSelected: o = !1, onClick: d } = e,
            b = (0, a.e7)([u.default], () => u.default.getCurrentUser()),
            [v, f] = (0, i.useState)(!1);
        return null == b
            ? null
            : (0, n.jsxs)(s.P3F, {
                  className: p.nameplateItem,
                  onClick: d,
                  onMouseEnter: () => f(!0),
                  onMouseLeave: () => f(!1),
                  children: [
                      (0, n.jsx)(c.Z, {
                          nameplate: t,
                          user: b,
                          showWumpus: !0,
                          isHighlighted: v
                      }),
                      (0, n.jsx)('div', { className: l()(p.nameplateItemOverlay, { [p.selected]: o }) }),
                      !r &&
                          (0, n.jsx)('div', {
                              className: p.lock,
                              children: (0, n.jsx)(s.mBM, { size: 'xs' })
                          })
                  ]
              });
    },
    v = (e) => {
        let { selected: t, onSelect: r, onOpenShop: i, available: o, purchased: c } = e;
        return null == (0, a.e7)([u.default], () => u.default.getCurrentUser())
            ? null
            : (0, n.jsxs)(s.u2D, {
                  className: p.inventory,
                  children: [
                      (0, n.jsxs)('div', {
                          children: [
                              (0, n.jsx)(s.Text, {
                                  className: p.inventoryTitle,
                                  color: 'text-secondary',
                                  variant: 'text-xs/semibold',
                                  children: d.NW.string(d.t['6wbgS0']).toLocaleUpperCase()
                              }),
                              (0, n.jsxs)('div', {
                                  className: p.inventoryControls,
                                  children: [
                                      (0, n.jsxs)(s.P3F, {
                                          className: l()(p.inventoryControlsButton, { [p.selected]: null == t }),
                                          onClick: () => r(null),
                                          children: [
                                              (0, n.jsx)(s.t6m, {}),
                                              (0, n.jsx)(s.Text, {
                                                  variant: 'text-xs/semibold',
                                                  children: d.NW.string(d.t['3i+W8/'])
                                              })
                                          ]
                                      }),
                                      (0, n.jsxs)(s.P3F, {
                                          className: p.inventoryControlsButton,
                                          onClick: i,
                                          children: [
                                              (0, n.jsx)(s.EOn, {}),
                                              (0, n.jsx)(s.Text, {
                                                  variant: 'text-xs/semibold',
                                                  children: d.NW.string(d.t.cFfWg4)
                                              })
                                          ]
                                      })
                                  ]
                              }),
                              0 !== c.length
                                  ? (0, n.jsx)('div', {
                                        className: p.list,
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
                      0 !== o.length
                          ? (0, n.jsxs)('div', {
                                children: [
                                    (0, n.jsx)(s.Text, {
                                        className: p.inventoryDescriptionTitle,
                                        color: 'text-secondary',
                                        variant: 'text-xs/semibold',
                                        children: d.NW.string(d.t.SNAtBg).toLocaleUpperCase()
                                    }),
                                    (0, n.jsx)(s.Text, {
                                        className: p.inventoryDescription,
                                        variant: 'text-sm/normal',
                                        color: 'text-secondary',
                                        children: d.NW.string(d.t['3gaDLS'])
                                    }),
                                    (0, n.jsx)('div', {
                                        className: p.list,
                                        children: o.map((e) =>
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
