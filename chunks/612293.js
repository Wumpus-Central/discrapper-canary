(r.d(t, { default: () => O }), r(388685));
var n = r(255367),
    i = r(73800),
    l = r(442837),
    a = r(755721),
    o = r(481060),
    s = r(100527),
    c = r(906732),
    u = r(335131),
    d = r(884697),
    p = r(150039),
    v = r(594174),
    b = r(626135),
    f = r(653079),
    m = r(576386),
    h = r(981631),
    g = r(388032),
    y = r(637635);
function O(e) {
    let { transitionState: t, analyticsLocations: r, onClose: a } = e,
        u = (0, l.e7)([v.default], () => v.default.getCurrentUser()),
        { analyticsLocations: p } = (0, c.ZP)(r, s.Z.EDIT_NAMEPLATE_MODAL),
        { available: f, purchased: m, isFetchingCategories: g, isFetchingPurchases: O } = (0, d.yV)('NameplateModal'),
        _ = g || (O && 0 === m.length);
    return (
        (0, i.useEffect)(() => {
            b.default.track(h.rMx.OPEN_MODAL, {
                type: h.jXE.NAMEPLATE_CUSTOMIZATION,
                location_stack: p
            });
        }, [p]),
        null == u
            ? null
            : (0, n.jsx)(c.Gt, {
                  value: p,
                  children: (0, n.jsx)(o.Y0X, {
                      transitionState: t,
                      size: _ ? o.CgR.DYNAMIC : o.CgR.MEDIUM,
                      parentComponent: 'NameplateModal',
                      children: _
                          ? (0, n.jsx)(o.$jN, {
                                className: y.spinner,
                                type: o.$jN.Type.SPINNING_CIRCLE
                            })
                          : (0, n.jsx)(j, {
                                user: u,
                                onClose: a,
                                available: f,
                                purchased: m,
                                analyticsLocations: p
                            })
                  })
              })
    );
}
function j(e) {
    let { user: t, available: r, purchased: l, analyticsLocations: c, onClose: d } = e,
        v = l.find((e) => {
            var r, n;
            return e.skuId === (null == t || null == (n = t.collectibles) || null == (r = n.nameplate) ? void 0 : r.skuId);
        }),
        { pendingNameplate: b } = (0, p._A)(),
        [h, O] = (0, i.useState)(() => (void 0 !== b ? b : null != v ? v : null)),
        [j, _] = (0, i.useState)(null != h),
        x = (0, i.useCallback)(
            (e) => {
                (d(),
                    (0, u.mK)({
                        analyticsLocations: c,
                        analyticsSource: s.Z.EDIT_NAMEPLATE_MODAL,
                        initialProductSkuId: e
                    }));
            },
            [c, d]
        );
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)(o.xBx, {
                separator: !1,
                className: y.header,
                children: [
                    (0, n.jsx)(o.X6q, {
                        variant: 'heading-lg/semibold',
                        children: g.intl.string(g.t.BwdeMz)
                    }),
                    (0, n.jsx)(o.olH, {
                        className: y.closeButton,
                        onClick: d
                    })
                ]
            }),
            (0, n.jsxs)(o.hzk, {
                className: y.content,
                scrollbarType: 'none',
                children: [
                    (0, n.jsx)(m.Z, {
                        selected: h,
                        onSelect: (e, t) => {
                            (O(e), _(null != t && t));
                        },
                        onOpenShop: x,
                        available: r,
                        purchased: l
                    }),
                    (0, n.jsx)(f.Z, {
                        user: t,
                        selectedNameplate: h,
                        purchased: j
                    })
                ]
            }),
            (0, n.jsxs)(o.mzw, {
                children: [
                    j || null == h
                        ? (0, n.jsx)(o.zxk, {
                              variant: 'primary',
                              text: g.intl.string(g.t.Jh8fJy),
                              disabled: void 0 === h,
                              onClick: () => {
                                  ((0, p.Wh)(h), d());
                              }
                          })
                        : (0, n.jsx)(a.zx, {
                              className: y.goToShopButton,
                              color: a.Tt.CUSTOM,
                              onClick: () => x(null == h ? void 0 : h.skuId),
                              children: (0, n.jsx)(o.Text, {
                                  color: 'always-white',
                                  variant: 'text-sm/medium',
                                  children: g.intl.string(g.t.fYfGgI)
                              })
                          }),
                    (0, n.jsx)(o.zxk, {
                        variant: 'secondary',
                        text: g.intl.string(g.t.mDcKND),
                        onClick: d
                    })
                ]
            })
        ]
    });
}
