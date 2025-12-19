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
    x = n(767714),
    g = n(150039),
    h = n(271383),
    v = n(594174),
    f = n(626135),
    b = n(74538),
    j = n(653079),
    y = n(576386),
    C = n(981631),
    P = n(474936),
    E = n(388032),
    w = n(997305);
function O(e) {
    var t, n, o, p, v;
    let {
            currentUser: f,
            categories: C,
            purchases: O,
            analyticsLocations: _,
            onClose: Z,
            guildId: A,
            initialSelectedNameplate: N,
        } = e,
        I = (0, i.e7)([h.ZP], () => (null != A && null != f ? h.ZP.getMember(A, f.id) : null)),
        S =
            null != I
                ? null == (t = I.collectibles)
                    ? void 0
                    : t.nameplate
                : null == (n = f.collectibles)
                  ? void 0
                  : n.nameplate,
        { pendingNameplate: k } = (0, g.Zx)(f, A),
        [T, U] = (0, r.useState)(() => {
            var e;
            return null != N
                ? N
                : void 0 !== k
                  ? k
                  : null == S
                    ? null
                    : null !=
                        (e = (0, d.Y)(O, C).find((e) => {
                            let { skuId: t } = e;
                            return t === S.skuId;
                        }))
                      ? e
                      : null;
        }),
        B = (0, g.Ys)({
            pendingValue: T,
            userValue: null == f || null == (o = f.collectibles) ? void 0 : o.nameplate,
            guildValue: null == I || null == (p = I.collectibles) ? void 0 : p.nameplate,
            guildId: A,
        }),
        { product: D, purchase: L } = (0, u.Z)(null == T ? void 0 : T.skuId),
        R = null != L ? (0, d.qS)(L) : (0, d.G1)(D),
        M = b.ZP.canUseCollectibles(f),
        F =
            void 0 === k
                ? (null == T ? void 0 : T.skuId) === (null == S ? void 0 : S.skuId)
                : (null == T ? void 0 : T.skuId) === (null == k ? void 0 : k.skuId),
        G = (0, r.useCallback)(
            (e) => {
                Z(),
                    (0, c.mK)({
                        analyticsLocations: _,
                        analyticsSource: s.Z.EDIT_NAMEPLATE_MODAL,
                        initialProductSkuId: e,
                    });
            },
            [_, Z],
        );
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsxs)(a.xBx, {
                "data-migration-pending": !0,
                separator: !1,
                className: w.header,
                children: [
                    (0, l.jsx)(a.Heading, {
                        variant: "heading-lg/semibold",
                        children: E.intl.string(E.t.BwdeM1),
                    }),
                    (0, l.jsx)(a.olH, {
                        "data-migration-pending": !0,
                        className: w.closeButton,
                        onClick: Z,
                    }),
                ],
            }),
            (0, l.jsxs)(a.hzk, {
                "data-migration-pending": !0,
                className: w.content,
                scrollbarType: "none",
                children: [
                    (0, l.jsx)(y.Z, {
                        currentUser: f,
                        selectedNameplate: T,
                        guildId: A,
                        onSelect: U,
                        onOpenShop: G,
                    }),
                    (0, l.jsx)(j.Z, {
                        user: f,
                        guildId: A,
                        nameplate: B,
                    }),
                ],
            }),
            (0, l.jsxs)(a.mzw, {
                "data-migration-pending": !0,
                className: w.modalFooter,
                children: [
                    (null != L && (!R || M)) || null === T
                        ? (0, l.jsx)(a.Button, {
                              variant: "primary",
                              text: E.intl.string(E.t.Jh8fJz),
                              onClick: () => {
                                  (0, g.Wh)(T, A), Z();
                              },
                              disabled: F,
                          })
                        : null == L && (M || !R)
                          ? (0, l.jsx)(a.Button, {
                                variant: "primary",
                                onClick: () => G(null == D ? void 0 : D.skuId),
                                text: E.intl.string(E.t.fYfGgK),
                            })
                          : (0, l.jsx)(x.Z, {
                                subscriptionTier: P.Si.TIER_2,
                                showGradient: !M,
                                textOptions: {
                                    textOverride: b.ZP.isPremium(f)
                                        ? E.intl.string(E.t.KXLX7l)
                                        : M
                                          ? E.intl.string(E.t.mr4K7D)
                                          : E.intl.string(E.t.pj0XBN),
                                },
                            }),
                    !M && R
                        ? (0, l.jsx)(m.Z, {
                              itemType: null != (v = null == L ? void 0 : L.type) ? v : null == D ? void 0 : D.type,
                              onClose: Z,
                          })
                        : (0, l.jsx)(a.Button, {
                              variant: "secondary",
                              text: E.intl.string(E.t["ETE/oC"]),
                              onClick: Z,
                          }),
                ],
            }),
        ],
    });
}
function _(e) {
    let { transitionState: t, analyticsLocations: n, onClose: c, guildId: d, initialSelectedNameplate: u } = e,
        m = (0, i.e7)([v.default], () => v.default.getCurrentUser()),
        { analyticsLocations: x } = (0, o.ZP)(n, s.Z.EDIT_NAMEPLATE_MODAL),
        { categories: g, purchases: h, isFetchingCategories: b, isFetchingPurchases: j } = (0, p.ZP)(),
        y = b || (j && 0 === h.size);
    return ((0, r.useEffect)(() => {
        f.default.track(C.rMx.OPEN_MODAL, {
            type: C.jXE.NAMEPLATE_CUSTOMIZATION,
            location_stack: x,
        });
    }, [x]),
    null == m)
        ? null
        : (0, l.jsx)(o.Gt, {
              value: x,
              children: (0, l.jsx)(a.Y0X, {
                  transitionState: t,
                  size: y ? a.CgR.DYNAMIC : a.CgR.MEDIUM,
                  parentComponent: "NameplateModal",
                  "data-migration-pending": !0,
                  children: y
                      ? (0, l.jsx)(a.$jN, {
                            className: w.spinner,
                            type: a.$jN.Type.SPINNING_CIRCLE,
                        })
                      : (0, l.jsx)(O, {
                            currentUser: m,
                            categories: g,
                            purchases: h,
                            analyticsLocations: x,
                            guildId: d,
                            initialSelectedNameplate: u,
                            onClose: c,
                        }),
              }),
          });
}
