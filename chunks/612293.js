(r.d(t, { default: () => y }), r(388685));
var n = r(255367),
    i = r(73800),
    l = r(442837),
    o = r(481060),
    a = r(100527),
    s = r(906732),
    c = r(335131),
    u = r(884697),
    d = r(150039),
    p = r(594174),
    v = r(626135),
    b = r(653079),
    f = r(576386),
    m = r(981631),
    h = r(388032),
    g = r(637635);
function y(e) {
    let { transitionState: t, analyticsLocations: r, onClose: c } = e,
        d = (0, l.e7)([p.default], () => p.default.getCurrentUser()),
        { analyticsLocations: b } = (0, s.ZP)(r, a.Z.EDIT_NAMEPLATE_MODAL),
        { available: f, purchased: h, isFetchingCategories: y, isFetchingPurchases: _ } = (0, u.yV)('NameplateModal'),
        j = y || (_ && 0 === h.length);
    return (
        (0, i.useEffect)(() => {
            v.default.track(m.rMx.OPEN_MODAL, {
                type: m.jXE.NAMEPLATE_CUSTOMIZATION,
                location_stack: b
            });
        }, [b]),
        null == d
            ? null
            : (0, n.jsx)(s.Gt, {
                  value: b,
                  children: (0, n.jsx)(o.Y0X, {
                      transitionState: t,
                      size: j ? o.CgR.DYNAMIC : o.CgR.MEDIUM,
                      parentComponent: 'NameplateModal',
                      children: j
                          ? (0, n.jsx)(o.$jN, {
                                className: g.spinner,
                                type: o.$jN.Type.SPINNING_CIRCLE
                            })
                          : (0, n.jsx)(O, {
                                user: d,
                                onClose: c,
                                available: f,
                                purchased: h,
                                analyticsLocations: b
                            })
                  })
              })
    );
}
function O(e) {
    let { user: t, available: r, purchased: l, analyticsLocations: s, onClose: u } = e,
        p = l.find((e) => {
            var r, n;
            return e.skuId === (null == t || null == (n = t.collectibles) || null == (r = n.nameplate) ? void 0 : r.skuId);
        }),
        { pendingNameplate: v } = (0, d._A)(),
        [m, y] = (0, i.useState)(() => (void 0 !== v ? v : null != p ? p : null)),
        [O, _] = (0, i.useState)(null != m),
        j = (0, i.useCallback)(
            (e) => {
                (u(),
                    (0, c.mK)({
                        analyticsLocations: s,
                        analyticsSource: a.Z.EDIT_NAMEPLATE_MODAL,
                        initialProductSkuId: e
                    }));
            },
            [s, u]
        );
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)(o.xBx, {
                separator: !1,
                className: g.header,
                children: [
                    (0, n.jsx)(o.X6q, {
                        variant: 'heading-lg/semibold',
                        children: h.intl.string(h.t.BwdeMz)
                    }),
                    (0, n.jsx)(o.olH, {
                        className: g.closeButton,
                        onClick: u
                    })
                ]
            }),
            (0, n.jsxs)(o.hzk, {
                className: g.content,
                scrollbarType: 'none',
                children: [
                    (0, n.jsx)(f.Z, {
                        selected: m,
                        onSelect: (e, t) => {
                            (y(e), _(null != t && t));
                        },
                        onOpenShop: j,
                        available: r,
                        purchased: l
                    }),
                    (0, n.jsx)(b.Z, {
                        user: t,
                        selectedNameplate: m,
                        purchased: O
                    })
                ]
            }),
            (0, n.jsxs)(o.mzw, {
                children: [
                    O || null == m
                        ? (0, n.jsx)(o.zxk, {
                              disabled: void 0 === m,
                              onClick: () => {
                                  ((0, d.Wh)(m), u());
                              },
                              children: h.intl.string(h.t.Jh8fJy)
                          })
                        : (0, n.jsx)(o.zxk, {
                              className: g.goToShopButton,
                              color: o.Ttl.CUSTOM,
                              onClick: () => j(null == m ? void 0 : m.skuId),
                              children: (0, n.jsx)(o.Text, {
                                  color: 'always-white',
                                  variant: 'text-sm/medium',
                                  children: h.intl.string(h.t.fYfGgI)
                              })
                          }),
                    (0, n.jsx)(o.zxk, {
                        look: o.zxk.Looks.LINK,
                        color: o.zxk.Colors.PRIMARY,
                        onClick: u,
                        children: h.intl.string(h.t.mDcKND)
                    })
                ]
            })
        ]
    });
}
