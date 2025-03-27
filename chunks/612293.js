r.d(t, { default: () => x }), r(47120);
var n = r(200651),
    i = r(192379),
    o = r(442837),
    l = r(481060),
    a = r(809206),
    s = r(100527),
    c = r(906732),
    u = r(335131),
    d = r(884697),
    p = r(594174),
    b = r(626135),
    v = r(653079),
    f = r(576386),
    m = r(981631),
    h = r(388032),
    g = r(964021);
function x(e) {
    let { transitionState: t, analyticsLocations: r, onClose: a } = e,
        s = (0, o.e7)([p.default], () => p.default.getCurrentUser()),
        { analyticsLocations: u } = (0, c.ZP)(r),
        { available: v, purchased: f, isFetchingCategories: h, isFetchingPurchases: x } = (0, d.yV)('NameplateModal'),
        _ = h || (x && 0 === f.length);
    return (
        (0, i.useEffect)(() => {
            b.default.track(m.rMx.OPEN_MODAL, {
                type: m.jXE.NAMEPLATE_CUSTOMIZATION,
                location_stack: u
            });
        }, [u]),
        null == s
            ? null
            : (0, n.jsx)(c.Gt, {
                  value: u,
                  children: (0, n.jsx)(l.Y0X, {
                      transitionState: t,
                      size: _ ? l.CgR.DYNAMIC : l.CgR.MEDIUM,
                      children: _
                          ? (0, n.jsx)(l.$jN, {
                                className: g.spinner,
                                type: l.$jN.Type.SPINNING_CIRCLE
                            })
                          : (0, n.jsx)(y, {
                                user: s,
                                onClose: a,
                                available: v,
                                purchased: f,
                                analyticsLocations: u
                            })
                  })
              })
    );
}
function y(e) {
    let { user: t, available: r, purchased: o, analyticsLocations: c, onClose: d } = e,
        p = o.find((e) => {
            var r, n;
            return e.skuId === (null == t ? void 0 : null === (n = t.collectibles) || void 0 === n ? void 0 : null === (r = n.nameplate) || void 0 === r ? void 0 : r.skuId);
        }),
        [b, m] = (0, i.useState)(null != p ? p : void 0),
        [x, y] = (0, i.useState)(null != p),
        _ = (0, i.useCallback)(
            (e) => {
                d(),
                    (0, u.mK)({
                        analyticsLocations: c,
                        analyticsSource: s.Z.EDIT_NAMEPLATE_MODAL,
                        initialProductSkuId: e
                    });
            },
            [c, d]
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
                        onClick: d
                    })
                ]
            }),
            (0, n.jsxs)(l.hzk, {
                className: g.content,
                scrollbarType: 'none',
                children: [
                    (0, n.jsx)(f.Z, {
                        selected: b,
                        onSelect: (e, t) => {
                            m(e), y(null != t && t);
                        },
                        onOpenShop: _,
                        available: r,
                        purchased: o
                    }),
                    (0, n.jsx)(v.Z, {
                        user: t,
                        selectedNameplate: b,
                        purchased: x
                    })
                ]
            }),
            (0, n.jsxs)(l.mzw, {
                children: [
                    x || null == b
                        ? (0, n.jsx)(l.zxk, {
                              disabled: void 0 === b,
                              onClick: () => {
                                  (0, a.KP)(b), d();
                              },
                              children: h.NW.string(h.t.daaiqK)
                          })
                        : (0, n.jsx)(l.zxk, {
                              className: g.goToShopButton,
                              color: l.Ttl.CUSTOM,
                              onClick: () => _(null == b ? void 0 : b.skuId),
                              children: (0, n.jsx)(l.Text, {
                                  color: 'always-white',
                                  variant: 'text-sm/medium',
                                  children: h.NW.string(h.t.ABkyQk)
                              })
                          }),
                    (0, n.jsx)(l.zxk, {
                        look: l.zxk.Looks.LINK,
                        color: l.zxk.Colors.PRIMARY,
                        onClick: d,
                        children: h.NW.string(h.t.y1MYys)
                    })
                ]
            })
        ]
    });
}
