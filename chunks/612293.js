n.d(t, {
    default: () => _,
    f: () => b
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(442837),
    o = n(481060),
    c = n(809206),
    d = n(100527),
    u = n(335131),
    m = n(597688),
    g = n(884697),
    p = n(709999),
    h = n(22267),
    f = n(594174),
    x = n(388032),
    N = n(964021);
let b = () => {
    (0, o.ZDy)(async () => {
        let { default: e } = await Promise.resolve().then(n.bind(n, 612293));
        return (t) =>
            (0, r.jsx)(
                e,
                (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        'function' == typeof Object.getOwnPropertySymbols &&
                            (r = r.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                })
                            )),
                            r.forEach(function (t) {
                                var r;
                                (r = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: r,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
                                          })
                                        : (e[t] = r);
                            });
                    }
                    return e;
                })({}, t)
            );
    });
};
function _(e) {
    let { transitionState: t, onClose: n } = e;
    return (0, r.jsx)(o.Y0X, {
        transitionState: t,
        size: o.CgR.DYNAMIC,
        children: (0, r.jsx)(E, { onClose: n })
    });
}
function E(e) {
    let { onClose: t } = e,
        n = (0, l.e7)([f.default], () => f.default.getCurrentUser()),
        { available: s, purchased: a } = (0, g.yV)(),
        m = a.find((e) => {
            var t, r;
            return e.skuId === (null == n ? void 0 : null === (r = n.collectibles) || void 0 === r ? void 0 : null === (t = r.nameplate) || void 0 === t ? void 0 : t.skuId);
        }),
        [p, h] = (0, i.useState)(null != m ? m : void 0),
        [b, _] = (0, i.useState)(null != m),
        E = (0, i.useCallback)(() => {
            t(),
                (0, u.mK)({
                    analyticsLocations: [d.Z.USER_SETTINGS_NAMEPLATE_MODAL],
                    analyticsSource: d.Z.USER_SETTINGS_NAMEPLATE_MODAL,
                    initialProductSkuId: null == p ? void 0 : p.skuId
                });
        }, [t, p]);
    return (0, r.jsxs)('div', {
        className: N.content,
        children: [
            (0, r.jsxs)('div', {
                className: N.header,
                children: [
                    (0, r.jsx)(o.X6q, {
                        variant: 'heading-lg/semibold',
                        children: x.NW.string(x.t.NzNLv7)
                    }),
                    (0, r.jsx)(o.P3F, {
                        onClick: t,
                        className: N.close,
                        children: (0, r.jsx)(o.Dio, {})
                    })
                ]
            }),
            (0, r.jsxs)('div', {
                className: N.body,
                children: [
                    (0, r.jsx)(j, {
                        selected: p,
                        onSelect: (e, t) => {
                            h(e), _(null != t && t);
                        },
                        available: s,
                        purchased: a,
                        onShop: E
                    }),
                    (0, r.jsx)(O, {
                        selectedNameplate: p,
                        purchased: b
                    })
                ]
            }),
            (0, r.jsxs)('div', {
                className: N.footer,
                children: [
                    (0, r.jsx)(o.zxk, {
                        size: o.PhG.MIN,
                        look: o.iLD.BLANK,
                        onClick: t,
                        children: (0, r.jsx)(o.Text, {
                            variant: 'text-sm/medium',
                            children: x.NW.string(x.t.y1MYys)
                        })
                    }),
                    !1 === b && null != p
                        ? (0, r.jsx)(o.zxk, {
                              className: N.goToShopButton,
                              color: o.Ttl.CUSTOM,
                              onClick: E,
                              children: (0, r.jsx)(o.Text, {
                                  color: 'always-white',
                                  variant: 'text-sm/medium',
                                  children: x.NW.string(x.t.ABkyQk)
                              })
                          })
                        : (0, r.jsx)(o.zxk, {
                              disabled: void 0 === p,
                              onClick: () => {
                                  (0, c.KP)(p), t();
                              },
                              children: x.NW.string(x.t.daaiqK)
                          })
                ]
            })
        ]
    });
}
function j(e) {
    let { selected: t, onSelect: n, available: i, purchased: s, onShop: a } = e,
        c = (0, l.e7)([f.default], () => f.default.getCurrentUser());
    return null == c
        ? null
        : (0, r.jsxs)(o.u2D, {
              className: N.inventory,
              children: [
                  (0, r.jsxs)('div', {
                      children: [
                          (0, r.jsx)(o.Text, {
                              className: N.inventoryTitle,
                              color: 'text-secondary',
                              variant: 'text-xs/semibold',
                              children: x.NW.string(x.t.JEimX1).toLocaleUpperCase()
                          }),
                          (0, r.jsxs)('div', {
                              className: N.inventoryControls,
                              children: [
                                  (0, r.jsxs)(o.P3F, {
                                      className: N.inventoryControlsButton,
                                      onClick: () => n(null == c.nameplate ? void 0 : null),
                                      children: [
                                          (0, r.jsx)(o.t6m, {}),
                                          (0, r.jsx)(o.Text, {
                                              variant: 'text-xs/semibold',
                                              children: x.NW.string(x.t['3i+W8/'])
                                          })
                                      ]
                                  }),
                                  (0, r.jsxs)(o.P3F, {
                                      className: N.inventoryControlsButton,
                                      onClick: a,
                                      children: [
                                          (0, r.jsx)(o.EOn, {}),
                                          (0, r.jsx)(o.Text, {
                                              variant: 'text-xs/semibold',
                                              children: x.NW.string(x.t.cFfWg4)
                                          })
                                      ]
                                  })
                              ]
                          }),
                          0 !== s.length
                              ? (0, r.jsx)('div', {
                                    className: N.list,
                                    children: s.map((e) =>
                                        (0, r.jsx)(
                                            C,
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
                  0 !== i.length
                      ? (0, r.jsxs)('div', {
                            children: [
                                (0, r.jsx)(o.Text, {
                                    className: N.inventoryDescriptionTitle,
                                    color: 'text-secondary',
                                    variant: 'text-xs/semibold',
                                    children: x.NW.string(x.t.SNAtBg).toLocaleUpperCase()
                                }),
                                (0, r.jsx)(o.Text, {
                                    className: N.inventoryDescription,
                                    variant: 'text-sm/normal',
                                    color: 'text-secondary',
                                    children: x.NW.string(x.t['3gaDLS'])
                                }),
                                (0, r.jsx)('div', {
                                    className: N.list,
                                    children: i.map((e) =>
                                        (0, r.jsx)(
                                            C,
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
}
function C(e) {
    let { nameplate: t, isPurchased: n = !1, isSelected: s = !1, onClick: c } = e,
        d = (0, l.e7)([f.default], () => f.default.getCurrentUser()),
        [u, m] = (0, i.useState)(!1);
    return null == d
        ? null
        : (0, r.jsxs)(o.P3F, {
              className: a()(N.nameplateItem, { [N.selected]: s }),
              onClick: c,
              onMouseEnter: () => m(!0),
              onMouseLeave: () => m(!1),
              children: [
                  (0, r.jsx)(h.Z, {
                      nameplate: t,
                      user: d,
                      showWumpus: !0,
                      isHighlighted: u || s
                  }),
                  !n &&
                      (0, r.jsx)('div', {
                          className: N.lock,
                          children: (0, r.jsx)(o.mBM, { size: 'xs' })
                      })
              ]
          });
}
function O(e) {
    let { selectedNameplate: t, purchased: n } = e,
        i = (0, l.e7)([f.default], () => f.default.getCurrentUser()),
        s = (0, l.e7)([m.Z], () => m.Z.getProduct(null == t ? void 0 : t.skuId));
    return null == i
        ? null
        : (0, r.jsxs)('div', {
              className: a()(N.previewBorder, { [N.upsell]: !n }),
              children: [
                  (0, r.jsx)('div', {
                      className: N.previewBox,
                      children: (0, r.jsxs)('div', {
                          className: N.previewContents,
                          children: [
                              (0, r.jsx)(p.d, {
                                  width: 124,
                                  opacity: 0.9
                              }),
                              (0, r.jsx)(p.d, {
                                  width: 124,
                                  opacity: 0.9
                              }),
                              (0, r.jsx)(h.Z, {
                                  user: i,
                                  nameplate: t,
                                  isHighlighted: !0
                              }),
                              (0, r.jsx)(p.d, {
                                  width: 124,
                                  opacity: 0.9
                              }),
                              (0, r.jsx)(p.d, {
                                  width: 124,
                                  opacity: 0.9
                              })
                          ]
                      })
                  }),
                  (0, r.jsxs)('div', {
                      className: N.previewDescription,
                      children: [
                          (0, r.jsx)(o.Text, {
                              variant: 'text-sm/semibold',
                              children: null == s ? void 0 : s.name
                          }),
                          n
                              ? null
                              : (0, r.jsx)(o.Text, {
                                    variant: 'text-sm/normal',
                                    children: x.NW.string(x.t.my5jxM)
                                })
                      ]
                  })
              ]
          });
}
