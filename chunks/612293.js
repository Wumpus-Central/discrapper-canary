(r.d(t, { default: () => _ }), r(388685));
var n = r(255367),
    i = r(73800),
    l = r(442837),
    a = r(481060),
    o = r(809206),
    s = r(100527),
    c = r(906732),
    u = r(335131),
    d = r(884697),
    p = r(18438),
    v = r(150039),
    b = r(271383),
    f = r(594174),
    m = r(626135),
    h = r(653079),
    y = r(576386),
    g = r(981631),
    O = r(388032),
    j = r(637635);
function _(e) {
    let { transitionState: t, analyticsLocations: r, onClose: o, guildId: u } = e,
        p = (0, l.e7)([f.default], () => f.default.getCurrentUser()),
        { analyticsLocations: v } = (0, c.ZP)(r, s.Z.EDIT_NAMEPLATE_MODAL),
        { available: b, purchased: h, isFetchingCategories: y, isFetchingPurchases: O } = (0, d.yV)('NameplateModal'),
        _ = y || (O && 0 === h.length);
    return (
        (0, i.useEffect)(() => {
            m.default.track(g.rMx.OPEN_MODAL, {
                type: g.jXE.NAMEPLATE_CUSTOMIZATION,
                location_stack: v
            });
        }, [v]),
        null == p
            ? null
            : (0, n.jsx)(c.Gt, {
                  value: v,
                  children: (0, n.jsx)(a.Y0X, {
                      transitionState: t,
                      size: _ ? a.CgR.DYNAMIC : a.CgR.MEDIUM,
                      parentComponent: 'NameplateModal',
                      children: _
                          ? (0, n.jsx)(a.$jN, {
                                className: j.spinner,
                                type: a.$jN.Type.SPINNING_CIRCLE
                            })
                          : (0, n.jsx)(x, {
                                user: p,
                                onClose: o,
                                available: b,
                                purchased: h,
                                analyticsLocations: v,
                                guildId: u
                            })
                  })
              })
    );
}
function x(e) {
    var t, r, c, d;
    let { user: f, available: m, purchased: g, analyticsLocations: _, onClose: x, guildId: P } = e,
        w = (0, l.e7)([b.ZP], () => (null != P && null != f ? b.ZP.getMember(P, f.id) : null)),
        C = null != P ? (null == w || null == (r = w.collectibles) || null == (t = r.nameplate) ? void 0 : t.skuId) : null == f || null == (d = f.collectibles) || null == (c = d.nameplate) ? void 0 : c.skuId,
        S = g.find((e) => e.skuId === C),
        { pendingNameplate: I } = (0, v.Zx)(f, P),
        [k, N] = (0, i.useState)(() => (void 0 !== I ? I : null != S ? S : null)),
        [E, T] = (0, i.useState)(null != k),
        D = (0, i.useCallback)(
            (e) => {
                (x(),
                    (0, u.mK)({
                        analyticsLocations: _,
                        analyticsSource: s.Z.EDIT_NAMEPLATE_MODAL,
                        initialProductSkuId: e
                    }));
            },
            [_, x]
        );
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)(a.xBx, {
                separator: !1,
                className: j.header,
                children: [
                    (0, n.jsx)(a.X6q, {
                        variant: 'heading-lg/semibold',
                        children: O.intl.string(O.t.BwdeMz)
                    }),
                    (0, n.jsx)(a.olH, {
                        className: j.closeButton,
                        onClick: x
                    })
                ]
            }),
            (0, n.jsxs)(a.hzk, {
                className: j.content,
                scrollbarType: 'none',
                children: [
                    (0, n.jsx)(y.Z, {
                        selected: k,
                        onSelect: (e, t) => {
                            (N(e), T(null != t && t));
                        },
                        onOpenShop: D,
                        available: m,
                        purchased: g
                    }),
                    (0, n.jsx)(h.Z, {
                        user: f,
                        selectedNameplate: k,
                        purchased: E
                    })
                ]
            }),
            (0, n.jsxs)(a.mzw, {
                children: [
                    E || null == k
                        ? (0, n.jsx)(a.zxk, {
                              variant: 'primary',
                              text: O.intl.string(O.t.Jh8fJy),
                              disabled: void 0 === k,
                              onClick: () => {
                                  (null != P ? (0, p.RH)(k) : (0, o.Rx)(k), x());
                              }
                          })
                        : (0, n.jsx)(a.zxk, {
                              variant: 'primary',
                              onClick: () => D(null == k ? void 0 : k.skuId),
                              text: O.intl.string(O.t.fYfGgI)
                          }),
                    (0, n.jsx)(a.zxk, {
                        variant: 'secondary',
                        text: O.intl.string(O.t.mDcKND),
                        onClick: x
                    })
                ]
            })
        ]
    });
}
