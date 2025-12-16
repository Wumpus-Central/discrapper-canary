n.d(t, { default: () => _ }), n(388685);
var l = n(54381),
    r = n(473749),
    i = n(442837),
    a = n(481060),
    s = n(100527),
    o = n(906732),
    c = n(335131),
    d = n(884697),
    u = n(449217),
    p = n(223143),
    m = n(269982),
    g = n(767714),
    h = n(150039),
    x = n(271383),
    v = n(594174),
    b = n(626135),
    f = n(74538),
    j = n(653079),
    y = n(576386),
    P = n(981631),
    C = n(474936),
    E = n(388032),
    O = n(997305);
function w(e) {
    var t, n, o, p;
    let {
            currentUser: v,
            categories: b,
            purchases: P,
            analyticsLocations: w,
            onClose: _,
            guildId: Z,
            initialSelectedNameplate: N,
        } = e,
        I = (0, i.e7)([x.ZP], () => (null != Z && null != v ? x.ZP.getMember(Z, v.id) : null)),
        A =
            null != I
                ? null == (t = I.collectibles)
                    ? void 0
                    : t.nameplate
                : null == (n = v.collectibles)
                  ? void 0
                  : n.nameplate,
        { pendingNameplate: k } = (0, h.Zx)(v, Z),
        [S, T] = (0, r.useState)(() => {
            var e;
            return null != N
                ? N
                : void 0 !== k
                  ? k
                  : null == A
                    ? null
                    : null !=
                        (e = (0, d.Y)(P, b).find((e) => {
                            let { skuId: t } = e;
                            return t === A.skuId;
                        }))
                      ? e
                      : null;
        }),
        U = (0, h.Ys)({
            pendingValue: S,
            userValue: null == v || null == (o = v.collectibles) ? void 0 : o.nameplate,
            guildValue: null == I || null == (p = I.collectibles) ? void 0 : p.nameplate,
            guildId: Z,
        }),
        { product: B, purchase: L } = (0, u.Z)(null == S ? void 0 : S.skuId),
        R = null != L ? (0, d.qS)(L) : (0, d.G1)(B),
        M = f.ZP.canUseCollectibles(v),
        D =
            void 0 === k
                ? (null == S ? void 0 : S.skuId) === (null == A ? void 0 : A.skuId)
                : (null == S ? void 0 : S.skuId) === (null == k ? void 0 : k.skuId),
        F = (0, r.useCallback)(
            (e) => {
                _(),
                    (0, c.mK)({
                        analyticsLocations: w,
                        analyticsSource: s.Z.EDIT_NAMEPLATE_MODAL,
                        initialProductSkuId: e,
                    });
            },
            [w, _],
        );
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsxs)(a.xBx, {
                "data-migration-pending": !0,
                separator: !1,
                className: O.header,
                children: [
                    (0, l.jsx)(a.Heading, {
                        variant: "heading-lg/semibold",
                        children: E.intl.string(E.t.BwdeM1),
                    }),
                    (0, l.jsx)(a.olH, {
                        "data-migration-pending": !0,
                        className: O.closeButton,
                        onClick: _,
                    }),
                ],
            }),
            (0, l.jsxs)(a.hzk, {
                "data-migration-pending": !0,
                className: O.content,
                scrollbarType: "none",
                children: [
                    (0, l.jsx)(y.Z, {
                        currentUser: v,
                        selectedNameplate: S,
                        guildId: Z,
                        onSelect: T,
                        onOpenShop: F,
                    }),
                    (0, l.jsx)(j.Z, {
                        user: v,
                        guildId: Z,
                        nameplate: U,
                    }),
                ],
            }),
            (0, l.jsxs)(a.mzw, {
                "data-migration-pending": !0,
                className: O.modalFooter,
                children: [
                    (null != L && (!R || M)) || null === S
                        ? (0, l.jsx)(a.Button, {
                              variant: "primary",
                              text: E.intl.string(E.t.Jh8fJz),
                              onClick: () => {
                                  (0, h.Wh)(S, Z), _();
                              },
                              disabled: D,
                          })
                        : null == L && (M || !R)
                          ? (0, l.jsx)(a.Button, {
                                variant: "primary",
                                onClick: () => F(null == B ? void 0 : B.skuId),
                                text: E.intl.string(E.t.fYfGgK),
                            })
                          : (0, l.jsx)(g.Z, {
                                subscriptionTier: C.Si.TIER_2,
                                showGradient: !M,
                                textOptions: {
                                    textOverride: f.ZP.isPremium(v)
                                        ? E.intl.string(E.t.KXLX7l)
                                        : M
                                          ? E.intl.string(E.t.mr4K7D)
                                          : E.intl.string(E.t.pj0XBN),
                                },
                            }),
                    !M && R
                        ? (0, l.jsx)(m.Z, {
                              product: null != L ? L : B,
                              onClose: _,
                          })
                        : (0, l.jsx)(a.Button, {
                              variant: "secondary",
                              text: E.intl.string(E.t["ETE/oC"]),
                              onClick: _,
                          }),
                ],
            }),
        ],
    });
}
function _(e) {
    let { transitionState: t, analyticsLocations: n, onClose: c, guildId: d, initialSelectedNameplate: u } = e,
        m = (0, i.e7)([v.default], () => v.default.getCurrentUser()),
        { analyticsLocations: g } = (0, o.ZP)(n, s.Z.EDIT_NAMEPLATE_MODAL),
        { categories: h, purchases: x, isFetchingCategories: f, isFetchingPurchases: j } = (0, p.ZP)(),
        y = f || (j && 0 === x.size);
    return ((0, r.useEffect)(() => {
        b.default.track(P.rMx.OPEN_MODAL, {
            type: P.jXE.NAMEPLATE_CUSTOMIZATION,
            location_stack: g,
        });
    }, [g]),
    null == m)
        ? null
        : (0, l.jsx)(o.Gt, {
              value: g,
              children: (0, l.jsx)(a.Y0X, {
                  transitionState: t,
                  size: y ? a.CgR.DYNAMIC : a.CgR.MEDIUM,
                  parentComponent: "NameplateModal",
                  "data-migration-pending": !0,
                  children: y
                      ? (0, l.jsx)(a.$jN, {
                            className: O.spinner,
                            type: a.$jN.Type.SPINNING_CIRCLE,
                        })
                      : (0, l.jsx)(w, {
                            currentUser: m,
                            categories: h,
                            purchases: x,
                            analyticsLocations: g,
                            guildId: d,
                            initialSelectedNameplate: u,
                            onClose: c,
                        }),
              }),
          });
}
