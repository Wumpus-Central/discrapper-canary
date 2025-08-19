r.d(t, { default: () => C }), r(388685);
var n = r(951288),
    a = r(647438),
    i = r(442837),
    l = r(481060),
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
    g = r(981631),
    O = r(388032),
    y = r(886020);
function C(e) {
    let { transitionState: t, analyticsLocations: r, onClose: o, guildId: u, initialSelectedNameplate: p } = e,
        b = (0, i.e7)([f.default], () => f.default.getCurrentUser()),
        { analyticsLocations: h } = (0, c.ZP)(r, s.Z.EDIT_NAMEPLATE_MODAL),
        { available: m, purchased: _, isFetchingCategories: O, isFetchingPurchases: C } = (0, d.yV)(),
        P = O || (C && 0 === _.length);
    return (
        (0, a.useEffect)(() => {
            v.default.track(g.rMx.OPEN_MODAL, {
                type: g.jXE.NAMEPLATE_CUSTOMIZATION,
                location_stack: h,
            });
        }, [h]),
        null == b
            ? null
            : (0, n.jsx)(c.Gt, {
                  value: h,
                  children: (0, n.jsx)(l.Y0X, {
                      transitionState: t,
                      size: P ? l.CgR.DYNAMIC : l.CgR.MEDIUM,
                      parentComponent: "NameplateModal",
                      "data-migration-pending": !0,
                      children: P
                          ? (0, n.jsx)(l.$jN, {
                                className: y.spinner,
                                type: l.$jN.Type.SPINNING_CIRCLE,
                            })
                          : (0, n.jsx)(j, {
                                user: b,
                                onClose: o,
                                available: m,
                                purchased: _,
                                analyticsLocations: h,
                                guildId: u,
                                initialSelectedNameplate: p,
                            }),
                  }),
              })
    );
}
function j(e) {
    var t, r, c, d;
    let {
            user: f,
            available: v,
            purchased: g,
            analyticsLocations: C,
            onClose: j,
            guildId: P,
            initialSelectedNameplate: E,
        } = e,
        x = (0, i.e7)([h.ZP], () => (null != P && null != f ? h.ZP.getMember(P, f.id) : null)),
        S = null == x || null == (r = x.collectibles) || null == (t = r.nameplate) ? void 0 : t.skuId,
        w = null == f || null == (d = f.collectibles) || null == (c = d.nameplate) ? void 0 : c.skuId,
        R = null != P ? S : w,
        I = g.find((e) => e.skuId === R),
        { pendingNameplate: A } = (0, b.Zx)(f, P),
        [N, k] = (0, a.useState)(() => {
            var e;
            return void 0 !== A ? A : null != (e = null != E ? E : I) ? e : null;
        }),
        T =
            (null == N ? void 0 : N.skuId) ===
            (void 0 === A ? (null == I ? void 0 : I.skuId) : null == A ? void 0 : A.skuId),
        [D, L] = (0, a.useState)(() => null != N && g.some((e) => e.id === N.id)),
        B = (0, a.useCallback)(
            (e) => {
                j(),
                    (0, u.mK)({
                        analyticsLocations: C,
                        analyticsSource: s.Z.EDIT_NAMEPLATE_MODAL,
                        initialProductSkuId: e,
                    });
            },
            [C, j],
        );
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)(l.xBx, {
                "data-migration-pending": !0,
                separator: !1,
                className: y.header,
                children: [
                    (0, n.jsx)(l.X6q, {
                        variant: "heading-lg/semibold",
                        children: O.intl.string(O.t.BwdeMz),
                    }),
                    (0, n.jsx)(l.olH, {
                        "data-migration-pending": !0,
                        className: y.closeButton,
                        onClick: j,
                    }),
                ],
            }),
            (0, n.jsxs)(l.hzk, {
                "data-migration-pending": !0,
                className: y.content,
                scrollbarType: "none",
                children: [
                    (0, n.jsx)(_.Z, {
                        selected: N,
                        onSelect: (e, t) => {
                            k(e), L(null != t && t);
                        },
                        onOpenShop: B,
                        available: v,
                        purchased: g,
                        isPerGuild: null != P,
                    }),
                    (0, n.jsx)(m.Z, {
                        user: f,
                        guildId: P,
                        selectedNameplate: N,
                        purchased: D,
                    }),
                ],
            }),
            (0, n.jsxs)(l.mzw, {
                "data-migration-pending": !0,
                className: y.modalFooter,
                children: [
                    D || null == N
                        ? (0, n.jsx)(l.zxk, {
                              variant: "primary",
                              text: O.intl.string(O.t.Jh8fJy),
                              disabled: T,
                              onClick: () => {
                                  null != P ? (0, p.RH)(N) : (0, o.Rx)(N), j();
                              },
                          })
                        : (0, n.jsx)(l.zxk, {
                              variant: "primary",
                              onClick: () => B(null == N ? void 0 : N.skuId),
                              text: O.intl.string(O.t.fYfGgI),
                          }),
                    (0, n.jsx)(l.zxk, {
                        variant: "secondary",
                        text: O.intl.string(O.t.mDcKND),
                        onClick: j,
                    }),
                ],
            }),
        ],
    });
}
