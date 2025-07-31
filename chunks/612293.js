(r.d(t, { default: () => C }), r(388685));
var n = r(255367),
    a = r(73800),
    l = r(442837),
    i = r(481060),
    o = r(809206),
    s = r(100527),
    c = r(906732),
    u = r(335131),
    d = r(884697),
    p = r(18438),
    b = r(150039),
    h = r(271383),
    f = r(594174),
    v = r(626135),
    m = r(653079),
    _ = r(576386),
    O = r(981631),
    y = r(388032),
    g = r(637635);
function C(e) {
    let { transitionState: t, analyticsLocations: r, onClose: o, guildId: u, initialSelectedNameplate: p } = e,
        b = (0, l.e7)([f.default], () => f.default.getCurrentUser()),
        { analyticsLocations: h } = (0, c.ZP)(r, s.Z.EDIT_NAMEPLATE_MODAL),
        { available: m, purchased: _, isFetchingCategories: y, isFetchingPurchases: C } = (0, d.yV)('NameplateModal'),
        P = y || (C && 0 === _.length);
    return (
        (0, a.useEffect)(() => {
            v.default.track(O.rMx.OPEN_MODAL, {
                type: O.jXE.NAMEPLATE_CUSTOMIZATION,
                location_stack: h
            });
        }, [h]),
        null == b
            ? null
            : (0, n.jsx)(c.Gt, {
                  value: h,
                  children: (0, n.jsx)(i.Y0X, {
                      transitionState: t,
                      size: P ? i.CgR.DYNAMIC : i.CgR.MEDIUM,
                      parentComponent: 'NameplateModal',
                      children: P
                          ? (0, n.jsx)(i.$jN, {
                                className: g.spinner,
                                type: i.$jN.Type.SPINNING_CIRCLE
                            })
                          : (0, n.jsx)(j, {
                                user: b,
                                onClose: o,
                                available: m,
                                purchased: _,
                                analyticsLocations: h,
                                guildId: u,
                                initialSelectedNameplate: p
                            })
                  })
              })
    );
}
function j(e) {
    var t, r, c, d;
    let { user: f, available: v, purchased: O, analyticsLocations: C, onClose: j, guildId: P, initialSelectedNameplate: E } = e,
        x = (0, l.e7)([h.ZP], () => (null != P && null != f ? h.ZP.getMember(P, f.id) : null)),
        S = null != P ? (null == x || null == (r = x.collectibles) || null == (t = r.nameplate) ? void 0 : t.skuId) : null == f || null == (d = f.collectibles) || null == (c = d.nameplate) ? void 0 : c.skuId,
        w = O.find((e) => e.skuId === S),
        { pendingNameplate: R } = (0, b.Zx)(f, P),
        [I, A] = (0, a.useState)(() => {
            var e;
            return void 0 !== R ? R : null != (e = null != E ? E : w) ? e : null;
        }),
        [N, k] = (0, a.useState)(() => null != I && O.some((e) => e.id === I.id)),
        T = (0, a.useCallback)(
            (e) => {
                (j(),
                    (0, u.mK)({
                        analyticsLocations: C,
                        analyticsSource: s.Z.EDIT_NAMEPLATE_MODAL,
                        initialProductSkuId: e
                    }));
            },
            [C, j]
        );
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)(i.xBx, {
                separator: !1,
                className: g.header,
                children: [
                    (0, n.jsx)(i.X6q, {
                        variant: 'heading-lg/semibold',
                        children: y.intl.string(y.t.BwdeMz)
                    }),
                    (0, n.jsx)(i.olH, {
                        className: g.closeButton,
                        onClick: j
                    })
                ]
            }),
            (0, n.jsxs)(i.hzk, {
                className: g.content,
                scrollbarType: 'none',
                children: [
                    (0, n.jsx)(_.Z, {
                        selected: I,
                        onSelect: (e, t) => {
                            (A(e), k(null != t && t));
                        },
                        onOpenShop: T,
                        available: v,
                        purchased: O
                    }),
                    (0, n.jsx)(m.Z, {
                        user: f,
                        selectedNameplate: I,
                        purchased: N
                    })
                ]
            }),
            (0, n.jsxs)(i.mzw, {
                children: [
                    N || null == I
                        ? (0, n.jsx)(i.zxk, {
                              variant: 'primary',
                              text: y.intl.string(y.t.Jh8fJy),
                              disabled: void 0 === I,
                              onClick: () => {
                                  (null != P ? (0, p.RH)(I) : (0, o.Rx)(I), j());
                              }
                          })
                        : (0, n.jsx)(i.zxk, {
                              variant: 'primary',
                              onClick: () => T(null == I ? void 0 : I.skuId),
                              text: y.intl.string(y.t.fYfGgI)
                          }),
                    (0, n.jsx)(i.zxk, {
                        variant: 'secondary',
                        text: y.intl.string(y.t.mDcKND),
                        onClick: j
                    })
                ]
            })
        ]
    });
}
