n.d(t, { default: () => w }), n(388685);
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
    E = n(74538),
    P = n(653079),
    y = n(576386),
    f = n(981631),
    N = n(474936),
    b = n(388032),
    I = n(886020);
function Z(e) {
    var t, n, c, m;
    let {
            currentUser: C,
            categories: j,
            purchases: f,
            analyticsLocations: Z,
            onClose: w,
            guildId: A,
            initialSelectedNameplate: k,
        } = e,
        T = (0, r.e7)([_.ZP], () => (null != A && null != C ? _.ZP.getMember(A, C.id) : null)),
        O =
            null != T
                ? null == (t = T.collectibles)
                    ? void 0
                    : t.nameplate
                : null == (n = C.collectibles)
                  ? void 0
                  : n.nameplate,
        { pendingNameplate: U } = (0, v.Zx)(C, A),
        [S, B] = (0, i.useState)(() => {
            var e;
            return null != k
                ? k
                : void 0 !== U
                  ? U
                  : null == O
                    ? null
                    : null !=
                        (e = (0, u.Y)(f, j).find((e) => {
                            let { skuId: t } = e;
                            return t === O.skuId;
                        }))
                      ? e
                      : null;
        }),
        L = (0, v.Ys)({
            pendingValue: S,
            userValue: null == C || null == (c = C.collectibles) ? void 0 : c.nameplate,
            guildValue: null == T || null == (m = T.collectibles) ? void 0 : m.nameplate,
            guildId: A,
        }),
        { product: R, purchase: M } = (0, p.Z)(null == S ? void 0 : S.skuId),
        D = E.ZP.canUseCollectibles(C),
        G =
            void 0 === U
                ? (null == S ? void 0 : S.skuId) === (null == O ? void 0 : O.skuId)
                : (null == S ? void 0 : S.skuId) === (null == U ? void 0 : U.skuId),
        F = (0, i.useCallback)(
            (e) => {
                w(),
                    (0, d.mK)({
                        analyticsLocations: Z,
                        analyticsSource: o.Z.EDIT_NAMEPLATE_MODAL,
                        initialProductSkuId: e,
                    });
            },
            [Z, w],
        );
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsxs)(s.xBx, {
                "data-migration-pending": !0,
                separator: !1,
                className: I.header,
                children: [
                    (0, l.jsx)(s.Heading, {
                        variant: "heading-lg/semibold",
                        children: b.intl.string(b.t.BwdeM1),
                    }),
                    (0, l.jsx)(s.olH, {
                        "data-migration-pending": !0,
                        className: I.closeButton,
                        onClick: w,
                    }),
                ],
            }),
            (0, l.jsxs)(s.hzk, {
                "data-migration-pending": !0,
                className: I.content,
                scrollbarType: "none",
                children: [
                    (0, l.jsx)(y.Z, {
                        currentUser: C,
                        selectedNameplate: S,
                        guildId: A,
                        onSelect: B,
                        onOpenShop: F,
                    }),
                    (0, l.jsx)(P.Z, {
                        user: C,
                        guildId: A,
                        nameplate: L,
                    }),
                ],
            }),
            (0, l.jsxs)(s.mzw, {
                "data-migration-pending": !0,
                className: I.modalFooter,
                children: [
                    (null != M && (!(0, u.qS)(M) || D)) || null === S
                        ? (0, l.jsx)(s.Button, {
                              variant: "primary",
                              text: b.intl.string(b.t.Jh8fJz),
                              onClick: () => {
                                  null != A ? (0, x.RH)(S) : (0, a.Rx)(S), w();
                              },
                              disabled: G,
                          })
                        : null == M && (D || !(0, u.G1)(R))
                          ? (0, l.jsx)(s.Button, {
                                variant: "primary",
                                onClick: () => F(null == R ? void 0 : R.skuId),
                                text: b.intl.string(b.t.fYfGgK),
                            })
                          : (0, l.jsx)(g.Z, {
                                subscriptionTier: N.Si.TIER_2,
                                showGradient: !D,
                                textOptions: {
                                    textOverride: E.ZP.isPremium(C)
                                        ? b.intl.string(b.t.KXLX7l)
                                        : D
                                          ? b.intl.string(b.t.mr4K7D)
                                          : b.intl.string(b.t.pj0XBN),
                                },
                            }),
                    !D && (0, u.G1)(R)
                        ? (0, l.jsx)(h.Z, {
                              product: R,
                              onClose: w,
                          })
                        : (0, l.jsx)(s.Button, {
                              variant: "secondary",
                              text: b.intl.string(b.t["ETE/oC"]),
                              onClick: w,
                          }),
                ],
            }),
        ],
    });
}
function w(e) {
    let { transitionState: t, analyticsLocations: n, onClose: a, guildId: d, initialSelectedNameplate: u } = e,
        p = (0, r.e7)([C.default], () => C.default.getCurrentUser()),
        { analyticsLocations: x } = (0, c.ZP)(n, o.Z.EDIT_NAMEPLATE_MODAL),
        { categories: h, purchases: g, isFetchingCategories: v, isFetchingPurchases: _ } = (0, m.ZP)(),
        E = v || (_ && 0 === g.size);
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
                  size: E ? s.CgR.DYNAMIC : s.CgR.MEDIUM,
                  parentComponent: "NameplateModal",
                  "data-migration-pending": !0,
                  children: E
                      ? (0, l.jsx)(s.$jN, {
                            className: I.spinner,
                            type: s.$jN.Type.SPINNING_CIRCLE,
                        })
                      : (0, l.jsx)(Z, {
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
