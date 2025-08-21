r.d(t, { default: () => _ }), r(388685);
var n = r(951288),
    i = r(647438),
    a = r(442837),
    l = r(481060),
    o = r(809206),
    s = r(100527),
    c = r(906732),
    u = r(335131),
    d = r(884697),
    p = r(18438),
    v = r(150039),
    f = r(271383),
    b = r(594174),
    m = r(626135),
    g = r(653079),
    h = r(576386),
    O = r(981631),
    y = r(388032),
    j = r(886020);
function _(e) {
    let { transitionState: t, analyticsLocations: r, onClose: o, guildId: u, initialSelectedNameplate: p } = e,
        v = (0, a.e7)([b.default], () => b.default.getCurrentUser()),
        { analyticsLocations: f } = (0, c.ZP)(r, s.Z.EDIT_NAMEPLATE_MODAL),
        { available: g, purchased: h, isFetchingCategories: y, isFetchingPurchases: _ } = (0, d.yV)(),
        x = y || (_ && 0 === h.length);
    return (
        (0, i.useEffect)(() => {
            m.default.track(O.rMx.OPEN_MODAL, {
                type: O.jXE.NAMEPLATE_CUSTOMIZATION,
                location_stack: f,
            });
        }, [f]),
        null == v
            ? null
            : (0, n.jsx)(c.Gt, {
                  value: f,
                  children: (0, n.jsx)(l.Y0X, {
                      transitionState: t,
                      size: x ? l.CgR.DYNAMIC : l.CgR.MEDIUM,
                      parentComponent: "NameplateModal",
                      "data-migration-pending": !0,
                      children: x
                          ? (0, n.jsx)(l.$jN, {
                                className: j.spinner,
                                type: l.$jN.Type.SPINNING_CIRCLE,
                            })
                          : (0, n.jsx)(P, {
                                user: v,
                                onClose: o,
                                available: g,
                                purchased: h,
                                analyticsLocations: f,
                                guildId: u,
                                initialSelectedNameplate: p,
                            }),
                  }),
              })
    );
}
function P(e) {
    var t, r, c, d;
    let {
            user: b,
            available: m,
            purchased: O,
            analyticsLocations: _,
            onClose: P,
            guildId: x,
            initialSelectedNameplate: w,
        } = e,
        C = (0, a.e7)([f.ZP], () => (null != x && null != b ? f.ZP.getMember(x, b.id) : null)),
        S = null == C || null == (r = C.collectibles) || null == (t = r.nameplate) ? void 0 : t.skuId,
        I = null == b || null == (d = b.collectibles) || null == (c = d.nameplate) ? void 0 : c.skuId,
        N = null != x ? S : I,
        k = O.find((e) => e.skuId === N),
        { pendingNameplate: E } = (0, v.Zx)(b, x),
        [T, D] = (0, i.useState)(() => {
            var e;
            return void 0 !== E ? E : null != (e = null != w ? w : k) ? e : null;
        }),
        A =
            (null == T ? void 0 : T.skuId) ===
            (void 0 === E ? (null == k ? void 0 : k.skuId) : null == E ? void 0 : E.skuId),
        [Z, R] = (0, i.useState)(() => null != T && O.some((e) => e.id === T.id)),
        L = (0, i.useCallback)(
            (e) => {
                P(),
                    (0, u.mK)({
                        analyticsLocations: _,
                        analyticsSource: s.Z.EDIT_NAMEPLATE_MODAL,
                        initialProductSkuId: e,
                    });
            },
            [_, P],
        );
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)(l.xBx, {
                "data-migration-pending": !0,
                separator: !1,
                className: j.header,
                children: [
                    (0, n.jsx)(l.X6q, {
                        variant: "heading-lg/semibold",
                        children: y.intl.string(y.t.BwdeMz),
                    }),
                    (0, n.jsx)(l.olH, {
                        "data-migration-pending": !0,
                        className: j.closeButton,
                        onClick: P,
                    }),
                ],
            }),
            (0, n.jsxs)(l.hzk, {
                "data-migration-pending": !0,
                className: j.content,
                scrollbarType: "none",
                children: [
                    (0, n.jsx)(h.Z, {
                        selected: T,
                        onSelect: (e, t) => {
                            D(e), R(null != t && t);
                        },
                        onOpenShop: L,
                        available: m,
                        purchased: O,
                        isPerGuild: null != x,
                    }),
                    (0, n.jsx)(g.Z, {
                        user: b,
                        guildId: x,
                        selectedNameplate: T,
                        purchased: Z,
                    }),
                ],
            }),
            (0, n.jsxs)(l.mzw, {
                "data-migration-pending": !0,
                className: j.modalFooter,
                children: [
                    Z || null == T
                        ? (0, n.jsx)(l.zxk, {
                              variant: "primary",
                              text: y.intl.string(y.t.Jh8fJy),
                              disabled: A,
                              onClick: () => {
                                  null != x ? (0, p.RH)(T) : (0, o.Rx)(T), P();
                              },
                          })
                        : (0, n.jsx)(l.zxk, {
                              variant: "primary",
                              onClick: () => L(null == T ? void 0 : T.skuId),
                              text: y.intl.string(y.t.fYfGgI),
                          }),
                    (0, n.jsx)(l.zxk, {
                        variant: "secondary",
                        text: y.intl.string(y.t.mDcKND),
                        onClick: P,
                    }),
                ],
            }),
        ],
    });
}
