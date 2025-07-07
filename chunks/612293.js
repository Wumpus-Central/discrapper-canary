(n.d(t, { default: () => _ }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(442837),
    a = n(481060),
    o = n(100527),
    s = n(906732),
    c = n(335131),
    u = n(884697),
    d = n(150039),
    p = n(594174),
    v = n(626135),
    f = n(653079),
    m = n(576386),
    b = n(981631),
    h = n(388032),
    g = n(637635);
function _(e) {
    let { transitionState: t, analyticsLocations: n, onClose: c } = e,
        d = (0, l.e7)([p.default], () => p.default.getCurrentUser()),
        { analyticsLocations: f } = (0, s.ZP)(n, o.Z.EDIT_NAMEPLATE_MODAL),
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
            : (0, r.jsx)(s.Gt, {
                  value: f,
                  children: (0, r.jsx)(a.Y0X, {
                      transitionState: t,
                      size: x ? a.CgR.DYNAMIC : a.CgR.MEDIUM,
                      parentComponent: 'NameplateModal',
                      children: x
                          ? (0, r.jsx)(a.$jN, {
                                className: g.spinner,
                                type: a.$jN.Type.SPINNING_CIRCLE
                            })
                          : (0, r.jsx)(y, {
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
    let { user: t, available: n, purchased: l, analyticsLocations: s, onClose: u } = e,
        p = l.find((e) => {
            var n, r;
            return e.skuId === (null == t || null == (r = t.collectibles) || null == (n = r.nameplate) ? void 0 : n.skuId);
        }),
        { pendingNameplate: v } = (0, d._A)(),
        [b, _] = (0, i.useState)(() => (void 0 !== v ? v : null != p ? p : null)),
        [y, O] = (0, i.useState)(null != b),
        x = (0, i.useCallback)(
            (e) => {
                (u(),
                    (0, c.mK)({
                        analyticsLocations: s,
                        analyticsSource: o.Z.EDIT_NAMEPLATE_MODAL,
                        initialProductSkuId: e
                    }));
            },
            [s, u]
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(a.xBx, {
                separator: !1,
                className: g.header,
                children: [
                    (0, r.jsx)(a.X6q, {
                        variant: 'heading-lg/semibold',
                        children: h.intl.string(h.t.BwdeMz)
                    }),
                    (0, r.jsx)(a.olH, {
                        className: g.closeButton,
                        onClick: u
                    })
                ]
            }),
            (0, r.jsxs)(a.hzk, {
                className: g.content,
                scrollbarType: 'none',
                children: [
                    (0, r.jsx)(m.Z, {
                        selected: b,
                        onSelect: (e, t) => {
                            (_(e), O(null != t && t));
                        },
                        onOpenShop: x,
                        available: n,
                        purchased: l
                    }),
                    (0, r.jsx)(f.Z, {
                        user: t,
                        selectedNameplate: b,
                        purchased: y
                    })
                ]
            }),
            (0, r.jsxs)(a.mzw, {
                children: [
                    y || null == b
                        ? (0, r.jsx)(a.zxk, {
                              disabled: void 0 === b,
                              onClick: () => {
                                  ((0, d.Wh)(b), u());
                              },
                              children: h.intl.string(h.t.Jh8fJy)
                          })
                        : (0, r.jsx)(a.zxk, {
                              className: g.goToShopButton,
                              color: a.Ttl.CUSTOM,
                              onClick: () => x(null == b ? void 0 : b.skuId),
                              children: (0, r.jsx)(a.Text, {
                                  color: 'always-white',
                                  variant: 'text-sm/medium',
                                  children: h.intl.string(h.t.fYfGgI)
                              })
                          }),
                    (0, r.jsx)(a.zxk, {
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
