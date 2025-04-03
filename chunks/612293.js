r.d(t, { default: () => x }), r(47120);
var n = r(200651),
    i = r(192379),
    o = r(442837),
    l = r(481060),
    a = r(100527),
    s = r(906732),
    c = r(335131),
    u = r(884697),
    d = r(150039),
    p = r(594174),
    b = r(626135),
    v = r(653079),
    f = r(576386),
    m = r(981631),
    h = r(388032),
    g = r(637635);
function x(e) {
    let { transitionState: t, analyticsLocations: r, onClose: c } = e,
        d = (0, o.e7)([p.default], () => p.default.getCurrentUser()),
        { analyticsLocations: v } = (0, s.ZP)(r, a.Z.EDIT_NAMEPLATE_MODAL),
        { available: f, purchased: h, isFetchingCategories: x, isFetchingPurchases: _ } = (0, u.yV)('NameplateModal'),
        O = x || (_ && 0 === h.length);
    return (
        (0, i.useEffect)(() => {
            b.default.track(m.rMx.OPEN_MODAL, {
                type: m.jXE.NAMEPLATE_CUSTOMIZATION,
                location_stack: v
            });
        }, [v]),
        null == d
            ? null
            : (0, n.jsx)(s.Gt, {
                  value: v,
                  children: (0, n.jsx)(l.Y0X, {
                      transitionState: t,
                      size: O ? l.CgR.DYNAMIC : l.CgR.MEDIUM,
                      children: O
                          ? (0, n.jsx)(l.$jN, {
                                className: g.spinner,
                                type: l.$jN.Type.SPINNING_CIRCLE
                            })
                          : (0, n.jsx)(y, {
                                user: d,
                                onClose: c,
                                available: f,
                                purchased: h,
                                analyticsLocations: v
                            })
                  })
              })
    );
}
function y(e) {
    let { user: t, available: r, purchased: o, analyticsLocations: s, onClose: u } = e,
        p = o.find((e) => {
            var r, n;
            return e.skuId === (null == t || null == (n = t.collectibles) || null == (r = n.nameplate) ? void 0 : r.skuId);
        }),
        { pendingNameplate: b } = (0, d._A)(),
        [m, x] = (0, i.useState)(() => (void 0 !== b ? b : null != p ? p : null)),
        [y, _] = (0, i.useState)(null != m),
        O = (0, i.useCallback)(
            (e) => {
                u(),
                    (0, c.mK)({
                        analyticsLocations: s,
                        analyticsSource: a.Z.EDIT_NAMEPLATE_MODAL,
                        initialProductSkuId: e
                    });
            },
            [s, u]
        );
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)(l.xBx, {
                separator: !1,
                className: g.header,
                children: [
                    (0, n.jsx)(l.X6q, {
                        variant: 'heading-lg/semibold',
                        children: h.NW.string(h.t.NzNLv7)
                    }),
                    (0, n.jsx)(l.olH, {
                        className: g.closeButton,
                        onClick: u
                    })
                ]
            }),
            (0, n.jsxs)(l.hzk, {
                className: g.content,
                scrollbarType: 'none',
                children: [
                    (0, n.jsx)(f.Z, {
                        selected: m,
                        onSelect: (e, t) => {
                            x(e), _(null != t && t);
                        },
                        onOpenShop: O,
                        available: r,
                        purchased: o
                    }),
                    (0, n.jsx)(v.Z, {
                        user: t,
                        selectedNameplate: m,
                        purchased: y
                    })
                ]
            }),
            (0, n.jsxs)(l.mzw, {
                children: [
                    y || null == m
                        ? (0, n.jsx)(l.zxk, {
                              disabled: void 0 === m,
                              onClick: () => {
                                  (0, d.Wh)(m), u();
                              },
                              children: h.NW.string(h.t.daaiqK)
                          })
                        : (0, n.jsx)(l.zxk, {
                              className: g.goToShopButton,
                              color: l.Ttl.CUSTOM,
                              onClick: () => O(null == m ? void 0 : m.skuId),
                              children: (0, n.jsx)(l.Text, {
                                  color: 'always-white',
                                  variant: 'text-sm/medium',
                                  children: h.NW.string(h.t.ABkyQk)
                              })
                          }),
                    (0, n.jsx)(l.zxk, {
                        look: l.zxk.Looks.LINK,
                        color: l.zxk.Colors.PRIMARY,
                        onClick: u,
                        children: h.NW.string(h.t.y1MYys)
                    })
                ]
            })
        ]
    });
}
