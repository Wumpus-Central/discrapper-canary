r.d(t, { default: () => C }), r(388685);
var n = r(255367),
    a = r(73800),
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
    y = r(213866);
function C(e) {
    let { transitionState: t, analyticsLocations: r, onClose: o, guildId: u, initialSelectedNameplate: p } = e,
        b = (0, i.e7)([f.default], () => f.default.getCurrentUser()),
        { analyticsLocations: h } = (0, c.ZP)(r, s.Z.EDIT_NAMEPLATE_MODAL),
        { available: m, purchased: _, isFetchingCategories: O, isFetchingPurchases: C } = (0, d.yV)("NameplateModal"),
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
        S =
            null != P
                ? null == x || null == (r = x.collectibles) || null == (t = r.nameplate)
                    ? void 0
                    : t.skuId
                : null == f || null == (d = f.collectibles) || null == (c = d.nameplate)
                  ? void 0
                  : c.skuId,
        w = g.find((e) => e.skuId === S),
        { pendingNameplate: R } = (0, b.Zx)(f, P),
        [I, A] = (0, a.useState)(() => {
            var e;
            return void 0 !== R ? R : null != (e = null != E ? E : w) ? e : null;
        }),
        N =
            (null == I ? void 0 : I.skuId) ===
            (void 0 === R ? (null == w ? void 0 : w.skuId) : null == R ? void 0 : R.skuId),
        [k, T] = (0, a.useState)(() => null != I && g.some((e) => e.id === I.id)),
        D = (0, a.useCallback)(
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
                        selected: I,
                        onSelect: (e, t) => {
                            A(e), T(null != t && t);
                        },
                        onOpenShop: D,
                        available: v,
                        purchased: g,
                    }),
                    (0, n.jsx)(m.Z, {
                        user: f,
                        guildId: P,
                        selectedNameplate: I,
                        purchased: k,
                    }),
                ],
            }),
            (0, n.jsxs)(l.mzw, {
                "data-migration-pending": !0,
                className: y.modalFooter,
                children: [
                    k || null == I
                        ? (0, n.jsx)(l.zxk, {
                              variant: "primary",
                              text: O.intl.string(O.t.Jh8fJy),
                              disabled: N,
                              onClick: () => {
                                  null != P ? (0, p.RH)(I) : (0, o.Rx)(I), j();
                              },
                          })
                        : (0, n.jsx)(l.zxk, {
                              variant: "primary",
                              onClick: () => D(null == I ? void 0 : I.skuId),
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
