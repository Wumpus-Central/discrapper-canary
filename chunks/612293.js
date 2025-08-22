n.d(l, { default: () => y }), n(388685);
var t = n(951288),
    i = n(647438),
    s = n(442837),
    a = n(481060),
    r = n(809206),
    o = n(100527),
    d = n(906732),
    c = n(335131),
    u = n(884697),
    x = n(18438),
    p = n(150039),
    m = n(271383),
    v = n(594174),
    h = n(626135),
    j = n(653079),
    g = n(576386),
    _ = n(981631),
    C = n(388032),
    N = n(886020);
function y(e) {
    let { transitionState: l, analyticsLocations: n, onClose: r, guildId: c, initialSelectedNameplate: x } = e,
        p = (0, s.e7)([v.default], () => v.default.getCurrentUser()),
        { analyticsLocations: m } = (0, d.ZP)(n, o.Z.EDIT_NAMEPLATE_MODAL),
        { available: j, purchased: g, isFetchingCategories: C, isFetchingPurchases: y } = (0, u.yV)(),
        I = C || (y && 0 === g.length);
    return (
        (0, i.useEffect)(() => {
            h.default.track(_.rMx.OPEN_MODAL, {
                type: _.jXE.NAMEPLATE_CUSTOMIZATION,
                location_stack: m,
            });
        }, [m]),
        null == p
            ? null
            : (0, t.jsx)(d.Gt, {
                  value: m,
                  children: (0, t.jsx)(a.Y0X, {
                      transitionState: l,
                      size: I ? a.CgR.DYNAMIC : a.CgR.MEDIUM,
                      parentComponent: "NameplateModal",
                      "data-migration-pending": !0,
                      children: I
                          ? (0, t.jsx)(a.$jN, {
                                className: N.spinner,
                                type: a.$jN.Type.SPINNING_CIRCLE,
                            })
                          : (0, t.jsx)(k, {
                                user: p,
                                onClose: r,
                                available: j,
                                purchased: g,
                                analyticsLocations: m,
                                guildId: c,
                                initialSelectedNameplate: x,
                            }),
                  }),
              })
    );
}
function k(e) {
    var l, n, d, u;
    let {
            user: v,
            available: h,
            purchased: _,
            analyticsLocations: y,
            onClose: k,
            guildId: I,
            initialSelectedNameplate: f,
        } = e,
        b = (0, s.e7)([m.ZP], () => (null != I && null != v ? m.ZP.getMember(I, v.id) : null)),
        w = null == b || null == (n = b.collectibles) || null == (l = n.nameplate) ? void 0 : l.skuId,
        B = null == v || null == (u = v.collectibles) || null == (d = u.nameplate) ? void 0 : d.skuId,
        Z = null != I ? w : B,
        E = _.find((e) => e.skuId === Z),
        { pendingNameplate: M } = (0, p.Zx)(v, I),
        [P, D] = (0, i.useState)(() => {
            var e;
            return void 0 !== M ? M : null != (e = null != f ? f : E) ? e : null;
        }),
        T =
            (null == P ? void 0 : P.skuId) ===
            (void 0 === M ? (null == E ? void 0 : E.skuId) : null == M ? void 0 : M.skuId),
        [A, O] = (0, i.useState)(() => null != P && _.some((e) => e.id === P.id)),
        S = (0, i.useCallback)(
            (e) => {
                k(),
                    (0, c.mK)({
                        analyticsLocations: y,
                        analyticsSource: o.Z.EDIT_NAMEPLATE_MODAL,
                        initialProductSkuId: e,
                    });
            },
            [y, k],
        );
    return (0, t.jsxs)(t.Fragment, {
        children: [
            (0, t.jsxs)(a.xBx, {
                "data-migration-pending": !0,
                separator: !1,
                className: N.header,
                children: [
                    (0, t.jsx)(a.X6q, {
                        variant: "heading-lg/semibold",
                        children: C.intl.string(C.t.BwdeMz),
                    }),
                    (0, t.jsx)(a.olH, {
                        "data-migration-pending": !0,
                        className: N.closeButton,
                        onClick: k,
                    }),
                ],
            }),
            (0, t.jsxs)(a.hzk, {
                "data-migration-pending": !0,
                className: N.content,
                scrollbarType: "none",
                children: [
                    (0, t.jsx)(g.Z, {
                        selected: P,
                        onSelect: (e, l) => {
                            D(e), O(null != l && l);
                        },
                        onOpenShop: S,
                        available: h,
                        purchased: _,
                        isPerGuild: null != I,
                    }),
                    (0, t.jsx)(j.Z, {
                        user: v,
                        guildId: I,
                        selectedNameplate: P,
                        purchased: A,
                    }),
                ],
            }),
            (0, t.jsxs)(a.mzw, {
                "data-migration-pending": !0,
                className: N.modalFooter,
                children: [
                    A || null == P
                        ? (0, t.jsx)(a.zxk, {
                              variant: "primary",
                              text: C.intl.string(C.t.Jh8fJy),
                              disabled: T,
                              onClick: () => {
                                  null != I ? (0, x.RH)(P) : (0, r.Rx)(P), k();
                              },
                          })
                        : (0, t.jsx)(a.zxk, {
                              variant: "primary",
                              onClick: () => S(null == P ? void 0 : P.skuId),
                              text: C.intl.string(C.t.fYfGgI),
                          }),
                    (0, t.jsx)(a.zxk, {
                        variant: "secondary",
                        text: C.intl.string(C.t.mDcKND),
                        onClick: k,
                    }),
                ],
            }),
        ],
    });
}
