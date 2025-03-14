n.d(t, {
    default: () => j,
    f: () => E
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(442837),
    o = n(481060),
    c = n(809206),
    d = n(410030),
    u = n(100527),
    m = n(335131),
    g = n(597688),
    p = n(884697),
    h = n(709999),
    f = n(22267),
    b = n(594174),
    x = n(981631),
    N = n(388032),
    _ = n(964021);
let E = () => {
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
function j(e) {
    let { transitionState: t, onClose: n } = e;
    return (0, r.jsx)(o.Y0X, {
        transitionState: t,
        size: o.CgR.DYNAMIC,
        children: (0, r.jsx)(C, { onClose: n })
    });
}
function C(e) {
    let { onClose: t } = e,
        n = (0, l.e7)([b.default], () => b.default.getCurrentUser()),
        { available: s, purchased: a } = (0, p.yV)(),
        d = a.find((e) => {
            var t, r;
            return e.skuId === (null == n ? void 0 : null === (r = n.collectibles) || void 0 === r ? void 0 : null === (t = r.nameplate) || void 0 === t ? void 0 : t.skuId);
        }),
        [g, h] = (0, i.useState)(null != d ? d : void 0),
        [f, x] = (0, i.useState)(null != d),
        E = (0, i.useCallback)(() => {
            t(),
                (0, m.mK)({
                    analyticsLocations: [u.Z.USER_SETTINGS_NAMEPLATE_MODAL],
                    analyticsSource: u.Z.USER_SETTINGS_NAMEPLATE_MODAL,
                    initialProductSkuId: null == g ? void 0 : g.skuId
                });
        }, [t, g]);
    return (0, r.jsxs)('div', {
        className: _.content,
        children: [
            (0, r.jsxs)('div', {
                className: _.header,
                children: [
                    (0, r.jsx)(o.X6q, {
                        variant: 'heading-lg/semibold',
                        children: N.NW.string(N.t.NzNLv7)
                    }),
                    (0, r.jsx)(o.P3F, {
                        onClick: t,
                        className: _.close,
                        children: (0, r.jsx)(o.Dio, {})
                    })
                ]
            }),
            (0, r.jsxs)('div', {
                className: _.body,
                children: [
                    (0, r.jsx)(O, {
                        selected: g,
                        onSelect: (e, t) => {
                            h(e), x(null != t && t);
                        },
                        available: s,
                        purchased: a,
                        onShop: E
                    }),
                    (0, r.jsx)(S, {
                        selectedNameplate: g,
                        purchased: f
                    })
                ]
            }),
            (0, r.jsxs)('div', {
                className: _.footer,
                children: [
                    (0, r.jsx)(o.zxk, {
                        size: o.PhG.MIN,
                        look: o.iLD.BLANK,
                        onClick: t,
                        children: (0, r.jsx)(o.Text, {
                            variant: 'text-sm/medium',
                            children: N.NW.string(N.t.y1MYys)
                        })
                    }),
                    !1 === f && null != g
                        ? (0, r.jsx)(o.zxk, {
                              className: _.goToShopButton,
                              color: o.Ttl.CUSTOM,
                              onClick: E,
                              children: (0, r.jsx)(o.Text, {
                                  color: 'always-white',
                                  variant: 'text-sm/medium',
                                  children: N.NW.string(N.t.ABkyQk)
                              })
                          })
                        : (0, r.jsx)(o.zxk, {
                              disabled: void 0 === g,
                              onClick: () => {
                                  (0, c.KP)(g), t();
                              },
                              children: N.NW.string(N.t.daaiqK)
                          })
                ]
            })
        ]
    });
}
function O(e) {
    let { selected: t, onSelect: n, available: i, purchased: s, onShop: a } = e,
        c = (0, l.e7)([b.default], () => b.default.getCurrentUser());
    return null == c
        ? null
        : (0, r.jsxs)(o.u2D, {
              className: _.inventory,
              children: [
                  (0, r.jsx)(o.Text, {
                      className: _.inventoryTitle,
                      color: 'text-secondary',
                      variant: 'text-xs/semibold',
                      children: N.NW.string(N.t['6wbgS0']).toLocaleUpperCase()
                  }),
                  (0, r.jsxs)('div', {
                      className: _.inventoryControls,
                      children: [
                          (0, r.jsxs)(o.P3F, {
                              className: _.inventoryControlsButton,
                              onClick: () => n(null == c.nameplate ? void 0 : null),
                              children: [
                                  (0, r.jsx)(o.t6m, {}),
                                  (0, r.jsx)(o.Text, {
                                      variant: 'text-xs/semibold',
                                      children: N.NW.string(N.t['3i+W8/'])
                                  })
                              ]
                          }),
                          (0, r.jsxs)(o.P3F, {
                              className: _.inventoryControlsButton,
                              onClick: a,
                              children: [
                                  (0, r.jsx)(o.EOn, {}),
                                  (0, r.jsx)(o.Text, {
                                      variant: 'text-xs/semibold',
                                      children: N.NW.string(N.t.cFfWg4)
                                  })
                              ]
                          })
                      ]
                  }),
                  (0, r.jsx)(o.Text, {
                      className: _.inventoryDescriptionTitle,
                      color: 'text-secondary',
                      variant: 'text-xs/semibold',
                      children: N.NW.string(N.t.SNAtBg)
                  }),
                  (0, r.jsx)(o.Text, {
                      className: _.inventoryDescription,
                      variant: 'text-sm/normal',
                      children: N.NW.string(N.t['3gaDLS'])
                  }),
                  (0, r.jsxs)('div', {
                      className: _.list,
                      children: [
                          s.map((e) =>
                              (0, r.jsx)(
                                  v,
                                  {
                                      nameplate: e,
                                      isPurchased: !0,
                                      isSelected: (null == t ? void 0 : t.id) === e.id,
                                      onClick: () => n(e, !0)
                                  },
                                  e.id
                              )
                          ),
                          i.map((e) =>
                              (0, r.jsx)(
                                  v,
                                  {
                                      nameplate: e,
                                      isSelected: (null == t ? void 0 : t.id) === e.id,
                                      onClick: () => n(e, !1)
                                  },
                                  e.id
                              )
                          )
                      ]
                  })
              ]
          });
}
function v(e) {
    let { nameplate: t, isPurchased: n = !1, isSelected: s = !1, onClick: c } = e,
        d = (0, l.e7)([b.default], () => b.default.getCurrentUser()),
        [u, m] = (0, i.useState)(!1);
    return null == d
        ? null
        : (0, r.jsxs)(o.P3F, {
              className: a()(_.nameplateItem, { [_.selected]: s }),
              onClick: c,
              onMouseEnter: () => m(!0),
              onMouseLeave: () => m(!1),
              children: [
                  (0, r.jsx)(f.Z, {
                      nameplate: t,
                      user: d,
                      showWumpus: !0,
                      isHighlighted: u || s
                  }),
                  !n &&
                      (0, r.jsx)('div', {
                          className: _.lock,
                          children: (0, r.jsx)(o.mBM, { size: 'xs' })
                      })
              ]
          });
}
function S(e) {
    let { selectedNameplate: t, purchased: n } = e,
        i = (0, l.e7)([b.default], () => b.default.getCurrentUser()),
        s = (0, l.e7)([g.Z], () => g.Z.getProduct(null == t ? void 0 : t.skuId)),
        a = (0, d.ZP)() !== x.BRd.LIGHT;
    return null == i
        ? null
        : (0, r.jsx)('div', {
              className: _.preview,
              children:
                  n || null == t
                      ? (0, r.jsx)(T, {
                            selectedNameplate: t,
                            currentUser: i,
                            product: s,
                            isDarkTheme: a
                        })
                      : (0, r.jsx)(I, {
                            selectedNameplate: t,
                            currentUser: i,
                            isDarkTheme: a,
                            product: s
                        })
          });
}
function T(e) {
    let { selectedNameplate: t, currentUser: n, product: i, isDarkTheme: s } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)('div', {
                className: _.previewBox,
                children: [
                    (0, r.jsx)(h.d, { isDarkTheme: s }),
                    (0, r.jsx)(h.d, { isDarkTheme: s }),
                    (0, r.jsx)(f.Z, {
                        user: n,
                        nameplate: t,
                        isHighlighted: !0
                    }),
                    (0, r.jsx)(h.d, { isDarkTheme: s }),
                    (0, r.jsx)(h.d, { isDarkTheme: s })
                ]
            }),
            null != i &&
                (0, r.jsx)('div', {
                    className: _.label,
                    children: (0, r.jsx)(o.Text, {
                        variant: 'text-sm/semibold',
                        children: null == i ? void 0 : i.name
                    })
                })
        ]
    });
}
function I(e) {
    let { selectedNameplate: t, isDarkTheme: n, currentUser: i, product: s } = e;
    return (0, r.jsxs)('div', {
        className: _.upsellPreview,
        children: [
            (0, r.jsxs)('div', {
                className: _.upsellPreviewBox,
                children: [
                    (0, r.jsx)(h.d, { isDarkTheme: n }),
                    (0, r.jsx)(h.d, { isDarkTheme: n }),
                    (0, r.jsx)(f.Z, {
                        user: i,
                        nameplate: t,
                        isHighlighted: !0
                    }),
                    (0, r.jsx)(h.d, { isDarkTheme: n }),
                    (0, r.jsx)(h.d, { isDarkTheme: n })
                ]
            }),
            (0, r.jsxs)('div', {
                className: _.upsellPreviewDescription,
                children: [
                    (0, r.jsx)(o.Text, {
                        variant: 'text-sm/semibold',
                        children: null == s ? void 0 : s.name
                    }),
                    (0, r.jsx)(o.Text, {
                        variant: 'text-sm/normal',
                        children: N.NW.string(N.t.my5jxM)
                    })
                ]
            })
        ]
    });
}
