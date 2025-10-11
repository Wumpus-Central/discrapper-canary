n.d(t, { default: () => P }), n(388685);
var i = n(951288),
    r = n(647438),
    l = n(442837),
    a = n(481060),
    s = n(809206),
    o = n(100527),
    d = n(906732),
    c = n(335131),
    u = n(884697),
    p = n(449217),
    _ = n(223143),
    h = n(18438),
    m = n(269982),
    g = n(767714),
    f = n(150039),
    I = n(271383),
    b = n(594174),
    v = n(626135),
    S = n(74538),
    x = n(653079),
    C = n(576386),
    E = n(981631),
    y = n(474936),
    T = n(388032),
    w = n(886020);
function k(e) {
    var t, n;
    let {
            currentUser: d,
            categories: _,
            purchases: b,
            analyticsLocations: v,
            onClose: E,
            guildId: k,
            initialSelectedNameplate: P,
        } = e,
        Z = (0, l.e7)([I.ZP], () => (null != k && null != d ? I.ZP.getMember(k, d.id) : null)),
        A =
            null != Z
                ? null == Z || null == (t = Z.collectibles)
                    ? void 0
                    : t.nameplate
                : null == d || null == (n = d.collectibles)
                  ? void 0
                  : n.nameplate,
        { pendingNameplate: L } = (0, f.Zx)(d, k),
        [j, U] = (0, r.useState)(() => {
            var e;
            return null != P
                ? P
                : void 0 !== L
                  ? L
                  : null == A
                    ? null
                    : null !=
                        (e = (0, u.Y)(b, _).find((e) => {
                            let { skuId: t } = e;
                            return t === A.skuId;
                        }))
                      ? e
                      : null;
        }),
        { product: B, purchase: N } = (0, p.Z)(null == j ? void 0 : j.skuId),
        O = S.ZP.canUseCollectibles(d),
        M =
            void 0 === L
                ? (null == j ? void 0 : j.skuId) === (null == A ? void 0 : A.skuId)
                : (null == j ? void 0 : j.skuId) === (null == L ? void 0 : L.skuId),
        W = (0, r.useCallback)(
            (e) => {
                E(),
                    (0, c.mK)({
                        analyticsLocations: v,
                        analyticsSource: o.Z.EDIT_NAMEPLATE_MODAL,
                        initialProductSkuId: e,
                    });
            },
            [v, E],
        );
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(a.xBx, {
                "data-migration-pending": !0,
                separator: !1,
                className: w.header,
                children: [
                    (0, i.jsx)(a.Heading, {
                        variant: "heading-lg/semibold",
                        children: T.intl.string(T.t.BwdeMz),
                    }),
                    (0, i.jsx)(a.olH, {
                        "data-migration-pending": !0,
                        className: w.closeButton,
                        onClick: E,
                    }),
                ],
            }),
            (0, i.jsxs)(a.hzk, {
                "data-migration-pending": !0,
                className: w.content,
                scrollbarType: "none",
                children: [
                    (0, i.jsx)(C.Z, {
                        currentUser: d,
                        selectedNameplate: j,
                        guildId: k,
                        onSelect: U,
                        onOpenShop: W,
                    }),
                    (0, i.jsx)(x.Z, {
                        user: d,
                        guildId: k,
                        selectedNameplate: j,
                    }),
                ],
            }),
            (0, i.jsxs)(a.mzw, {
                "data-migration-pending": !0,
                className: w.modalFooter,
                children: [
                    (null != N && (!(0, u.qS)(N) || O)) || null === j
                        ? (0, i.jsx)(a.Button, {
                              variant: "primary",
                              text: T.intl.string(T.t.Jh8fJy),
                              onClick: () => {
                                  null != k ? (0, h.RH)(j) : (0, s.Rx)(j), E();
                              },
                              disabled: M,
                          })
                        : null == N && (O || !(0, u.G1)(B))
                          ? (0, i.jsx)(a.Button, {
                                variant: "primary",
                                onClick: () => W(null == B ? void 0 : B.skuId),
                                text: T.intl.string(T.t.fYfGgI),
                            })
                          : (0, i.jsx)(g.Z, {
                                subscriptionTier: y.Si.TIER_2,
                                showGradient: !O,
                                textOptions: {
                                    textOverride: S.ZP.isPremium(d)
                                        ? T.intl.string(T.t.KXLX7u)
                                        : O
                                          ? T.intl.string(T.t.mr4K7O)
                                          : T.intl.string(T.t.pj0XBA),
                                },
                            }),
                    !O && (0, u.G1)(B)
                        ? (0, i.jsx)(m.Z, {
                              product: B,
                              onClose: E,
                          })
                        : (0, i.jsx)(a.Button, {
                              variant: "secondary",
                              text: T.intl.string(T.t["ETE/oK"]),
                              onClick: E,
                          }),
                ],
            }),
        ],
    });
}
function P(e) {
    let { transitionState: t, analyticsLocations: n, onClose: s, guildId: c, initialSelectedNameplate: u } = e,
        p = (0, l.e7)([b.default], () => b.default.getCurrentUser()),
        { analyticsLocations: h } = (0, d.ZP)(n, o.Z.EDIT_NAMEPLATE_MODAL),
        { categories: m, purchases: g, isFetchingCategories: f, isFetchingPurchases: I } = (0, _.ZP)(),
        S = f || (I && 0 === g.size);
    return ((0, r.useEffect)(() => {
        v.default.track(E.rMx.OPEN_MODAL, {
            type: E.jXE.NAMEPLATE_CUSTOMIZATION,
            location_stack: h,
        });
    }, [h]),
    null == p)
        ? null
        : (0, i.jsx)(d.Gt, {
              value: h,
              children: (0, i.jsx)(a.Y0X, {
                  transitionState: t,
                  size: S ? a.CgR.DYNAMIC : a.CgR.MEDIUM,
                  parentComponent: "NameplateModal",
                  "data-migration-pending": !0,
                  children: S
                      ? (0, i.jsx)(a.$jN, {
                            className: w.spinner,
                            type: a.$jN.Type.SPINNING_CIRCLE,
                        })
                      : (0, i.jsx)(k, {
                            currentUser: p,
                            categories: m,
                            purchases: g,
                            analyticsLocations: h,
                            guildId: c,
                            initialSelectedNameplate: u,
                            onClose: s,
                        }),
              }),
          });
}
