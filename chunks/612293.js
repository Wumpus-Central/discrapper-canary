r.d(t, { default: () => _ }), r(388685);
var n = r(255367),
    i = r(73800),
    l = r(442837),
    a = r(481060),
    o = r(100527),
    s = r(906732),
    c = r(335131),
    u = r(884697),
    d = r(150039),
    p = r(594174),
    v = r(626135),
    f = r(653079),
    m = r(576386),
    b = r(981631),
    h = r(388032),
    g = r(637635);
function _(e) {
    let { transitionState: t, analyticsLocations: r, onClose: c } = e,
        d = (0, l.e7)([p.default], () => p.default.getCurrentUser()),
        { analyticsLocations: f } = (0, s.ZP)(r, o.Z.EDIT_NAMEPLATE_MODAL),
        { available: m, purchased: h, isFetchingCategories: _, isFetchingPurchases: O } = (0, u.yV)('NameplateModal'),
        x = _ || (O && 0 === h.length);
    return (
        (0, i.useEffect)(() => {
            v.default.track(b.rMx.OPEN_MODAL, {
                type: b.jXE.NAMEPLATE_CUSTOMIZATION,
                location_stack: f
            });
        }, [f]),
        null == d
            ? null
            : (0, n.jsx)(s.Gt, {
                  value: f,
                  children: (0, n.jsx)(a.Y0X, {
                      transitionState: t,
                      size: x ? a.CgR.DYNAMIC : a.CgR.MEDIUM,
                      parentComponent: 'NameplateModal',
                      children: x
                          ? (0, n.jsx)(a.$jN, {
                                className: g.spinner,
                                type: a.$jN.Type.SPINNING_CIRCLE
                            })
                          : (0, n.jsx)(y, {
                                user: d,
                                onClose: c,
                                available: m,
                                purchased: h,
                                analyticsLocations: f
                            })
                  })
              })
    );
}
function y(e) {
    let { user: t, available: r, purchased: l, analyticsLocations: s, onClose: u } = e,
        p = l.find((e) => {
            var r, n;
            return e.skuId === (null == t || null == (n = t.collectibles) || null == (r = n.nameplate) ? void 0 : r.skuId);
        }),
        { pendingNameplate: v } = (0, d._A)(),
        [b, _] = (0, i.useState)(() => (void 0 !== v ? v : null != p ? p : null)),
        [y, O] = (0, i.useState)(null != b),
        x = (0, i.useCallback)(
            (e) => {
                u(),
                    (0, c.mK)({
                        analyticsLocations: s,
                        analyticsSource: o.Z.EDIT_NAMEPLATE_MODAL,
                        initialProductSkuId: e
                    });
            },
            [s, u]
        );
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)(a.xBx, {
                separator: !1,
                className: g.header,
                children: [
                    (0, n.jsx)(a.X6q, {
                        variant: 'heading-lg/semibold',
                        children: h.intl.string(h.t.BwdeMz)
                    }),
                    (0, n.jsx)(a.olH, {
                        className: g.closeButton,
                        onClick: u
                    })
                ]
            }),
            (0, n.jsxs)(a.hzk, {
                className: g.content,
                scrollbarType: 'none',
                children: [
                    (0, n.jsx)(m.Z, {
                        selected: b,
                        onSelect: (e, t) => {
                            _(e), O(null != t && t);
                        },
                        onOpenShop: x,
                        available: r,
                        purchased: l
                    }),
                    (0, n.jsx)(f.Z, {
                        user: t,
                        selectedNameplate: b,
                        purchased: y
                    })
                ]
            }),
            (0, n.jsxs)(a.mzw, {
                children: [
                    y || null == b
                        ? (0, n.jsx)(a.zxk, {
                              disabled: void 0 === b,
                              onClick: () => {
                                  (0, d.Wh)(b), u();
                              },
                              children: h.intl.string(h.t.Jh8fJy)
                          })
                        : (0, n.jsx)(a.zxk, {
                              className: g.goToShopButton,
                              color: a.Ttl.CUSTOM,
                              onClick: () => x(null == b ? void 0 : b.skuId),
                              children: (0, n.jsx)(a.Text, {
                                  color: 'always-white',
                                  variant: 'text-sm/medium',
                                  children: h.intl.string(h.t.fYfGgI)
                              })
                          }),
                    (0, n.jsx)(a.zxk, {
                        look: a.zxk.Looks.LINK,
                        color: a.zxk.Colors.PRIMARY,
                        onClick: u,
                        children: h.intl.string(h.t.mDcKND)
                    })
                ]
            })
        ]
    });
}
