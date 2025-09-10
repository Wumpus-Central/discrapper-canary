n.d(t, { default: () => A }), n(388685);
var l = n(951288),
    i = n(647438),
    r = n(442837),
    s = n(481060),
    a = n(809206),
    o = n(100527),
    c = n(906732),
    d = n(335131),
    u = n(884697),
    p = n(449217),
    m = n(223143),
    x = n(18438),
    h = n(269982),
    g = n(767714),
    v = n(150039),
    _ = n(271383),
    C = n(594174),
    j = n(626135),
    y = n(74538),
    P = n(653079),
    E = n(576386),
    f = n(981631),
    N = n(474936),
    Z = n(388032),
    I = n(886020);
function b(e) {
    var t, n;
    let {
            currentUser: c,
            categories: m,
            purchases: C,
            analyticsLocations: j,
            onClose: f,
            guildId: b,
            initialSelectedNameplate: A,
        } = e,
        w = (0, r.e7)([_.ZP], () => (null != b && null != c ? _.ZP.getMember(b, c.id) : null)),
        k =
            null != w
                ? null == w || null == (t = w.collectibles)
                    ? void 0
                    : t.nameplate
                : null == c || null == (n = c.collectibles)
                  ? void 0
                  : n.nameplate,
        { pendingNameplate: T } = (0, v.Zx)(c, b),
        [O, U] = (0, i.useState)(() => {
            var e;
            return null != A
                ? A
                : void 0 !== T
                  ? T
                  : null == k
                    ? null
                    : null !=
                        (e = (0, u.Y)(C, m).find((e) => {
                            let { skuId: t } = e;
                            return t === k.skuId;
                        }))
                      ? e
                      : null;
        }),
        { product: S, purchase: L } = (0, p.Z)(null == O ? void 0 : O.skuId),
        M = y.ZP.canUseCollectibles(c),
        B =
            void 0 === T
                ? (null == O ? void 0 : O.skuId) === (null == k ? void 0 : k.skuId)
                : (null == O ? void 0 : O.skuId) === (null == T ? void 0 : T.skuId),
        R = (0, i.useCallback)(
            (e) => {
                f(),
                    (0, d.mK)({
                        analyticsLocations: j,
                        analyticsSource: o.Z.EDIT_NAMEPLATE_MODAL,
                        initialProductSkuId: e,
                    });
            },
            [j, f],
        );
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsxs)(s.xBx, {
                "data-migration-pending": !0,
                separator: !1,
                className: I.header,
                children: [
                    (0, l.jsx)(s.X6q, {
                        variant: "heading-lg/semibold",
                        children: Z.intl.string(Z.t.BwdeMz),
                    }),
                    (0, l.jsx)(s.olH, {
                        "data-migration-pending": !0,
                        className: I.closeButton,
                        onClick: f,
                    }),
                ],
            }),
            (0, l.jsxs)(s.hzk, {
                "data-migration-pending": !0,
                className: I.content,
                scrollbarType: "none",
                children: [
                    (0, l.jsx)(E.Z, {
                        currentUser: c,
                        selectedNameplate: O,
                        guildId: b,
                        onSelect: U,
                        onOpenShop: R,
                    }),
                    (0, l.jsx)(P.Z, {
                        user: c,
                        guildId: b,
                        selectedNameplate: O,
                    }),
                ],
            }),
            (0, l.jsxs)(s.mzw, {
                "data-migration-pending": !0,
                className: I.modalFooter,
                children: [
                    (null != L && (!(0, u.qS)(L) || M)) || null === O
                        ? (0, l.jsx)(s.zxk, {
                              variant: "primary",
                              text: Z.intl.string(Z.t.Jh8fJy),
                              onClick: () => {
                                  null != b ? (0, x.RH)(O) : (0, a.Rx)(O), f();
                              },
                              disabled: B,
                          })
                        : null == L && (M || !(0, u.G1)(S))
                          ? (0, l.jsx)(s.zxk, {
                                variant: "primary",
                                onClick: () => R(null == S ? void 0 : S.skuId),
                                text: Z.intl.string(Z.t.fYfGgI),
                            })
                          : (0, l.jsx)(g.Z, {
                                subscriptionTier: N.Si.TIER_2,
                                showGradient: !M,
                                textOptions: {
                                    textOverride: y.ZP.isPremium(c)
                                        ? Z.intl.string(Z.t.KXLX7u)
                                        : M
                                          ? Z.intl.string(Z.t.mr4K7O)
                                          : Z.intl.string(Z.t.pj0XBA),
                                },
                            }),
                    !M && (0, u.G1)(S)
                        ? (0, l.jsx)(h.Z, {
                              product: S,
                              onClose: f,
                          })
                        : (0, l.jsx)(s.zxk, {
                              variant: "secondary",
                              text: Z.intl.string(Z.t["ETE/oK"]),
                              onClick: f,
                          }),
                ],
            }),
        ],
    });
}
function A(e) {
    let { transitionState: t, analyticsLocations: n, onClose: a, guildId: d, initialSelectedNameplate: u } = e,
        p = (0, r.e7)([C.default], () => C.default.getCurrentUser()),
        { analyticsLocations: x } = (0, c.ZP)(n, o.Z.EDIT_NAMEPLATE_MODAL),
        { categories: h, purchases: g, isFetchingCategories: v, isFetchingPurchases: _ } = (0, m.ZP)(),
        y = v || (_ && 0 === g.size);
    return ((0, i.useEffect)(() => {
        j.default.track(f.rMx.OPEN_MODAL, {
            type: f.jXE.NAMEPLATE_CUSTOMIZATION,
            location_stack: x,
        });
    }, [x]),
    null == p)
        ? null
        : (0, l.jsx)(c.Gt, {
              value: x,
              children: (0, l.jsx)(s.Y0X, {
                  transitionState: t,
                  size: y ? s.CgR.DYNAMIC : s.CgR.MEDIUM,
                  parentComponent: "NameplateModal",
                  "data-migration-pending": !0,
                  children: y
                      ? (0, l.jsx)(s.$jN, {
                            className: I.spinner,
                            type: s.$jN.Type.SPINNING_CIRCLE,
                        })
                      : (0, l.jsx)(b, {
                            currentUser: p,
                            categories: h,
                            purchases: g,
                            analyticsLocations: x,
                            guildId: d,
                            initialSelectedNameplate: u,
                            onClose: a,
                        }),
              }),
          });
}
