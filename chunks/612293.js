n.d(t, { default: () => w }), n(388685);
var l = n(951288),
    r = n(647438),
    i = n(442837),
    s = n(481060),
    a = n(100527),
    o = n(906732),
    c = n(335131),
    u = n(884697),
    d = n(449217),
    p = n(223143),
    m = n(269982),
    h = n(767714),
    g = n(150039),
    x = n(271383),
    v = n(594174),
    _ = n(626135),
    j = n(74538),
    y = n(653079),
    P = n(576386),
    b = n(981631),
    f = n(474936),
    C = n(388032),
    E = n(886020);
function O(e) {
    var t, n, o, p;
    let {
            currentUser: v,
            categories: _,
            purchases: b,
            analyticsLocations: O,
            onClose: w,
            guildId: N,
            initialSelectedNameplate: Z,
        } = e,
        I = (0, i.e7)([x.ZP], () => (null != N && null != v ? x.ZP.getMember(N, v.id) : null)),
        A =
            null != I
                ? null == (t = I.collectibles)
                    ? void 0
                    : t.nameplate
                : null == (n = v.collectibles)
                  ? void 0
                  : n.nameplate,
        { pendingNameplate: k } = (0, g.Zx)(v, N),
        [S, T] = (0, r.useState)(() => {
            var e;
            return null != Z
                ? Z
                : void 0 !== k
                  ? k
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
        U = (0, g.Ys)({
            pendingValue: S,
            userValue: null == v || null == (o = v.collectibles) ? void 0 : o.nameplate,
            guildValue: null == I || null == (p = I.collectibles) ? void 0 : p.nameplate,
            guildId: N,
        }),
        { product: B, purchase: L } = (0, d.Z)(null == S ? void 0 : S.skuId),
        M = j.ZP.canUseCollectibles(v),
        R =
            void 0 === k
                ? (null == S ? void 0 : S.skuId) === (null == A ? void 0 : A.skuId)
                : (null == S ? void 0 : S.skuId) === (null == k ? void 0 : k.skuId),
        D = (0, r.useCallback)(
            (e) => {
                w(),
                    (0, c.mK)({
                        analyticsLocations: O,
                        analyticsSource: a.Z.EDIT_NAMEPLATE_MODAL,
                        initialProductSkuId: e,
                    });
            },
            [O, w],
        );
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsxs)(s.xBx, {
                "data-migration-pending": !0,
                separator: !1,
                className: E.header,
                children: [
                    (0, l.jsx)(s.Heading, {
                        variant: "heading-lg/semibold",
                        children: C.intl.string(C.t.BwdeM1),
                    }),
                    (0, l.jsx)(s.olH, {
                        "data-migration-pending": !0,
                        className: E.closeButton,
                        onClick: w,
                    }),
                ],
            }),
            (0, l.jsxs)(s.hzk, {
                "data-migration-pending": !0,
                className: E.content,
                scrollbarType: "none",
                children: [
                    (0, l.jsx)(P.Z, {
                        currentUser: v,
                        selectedNameplate: S,
                        guildId: N,
                        onSelect: T,
                        onOpenShop: D,
                    }),
                    (0, l.jsx)(y.Z, {
                        user: v,
                        guildId: N,
                        nameplate: U,
                    }),
                ],
            }),
            (0, l.jsxs)(s.mzw, {
                "data-migration-pending": !0,
                className: E.modalFooter,
                children: [
                    (null != L && (!(0, u.qS)(L) || M)) || null === S
                        ? (0, l.jsx)(s.Button, {
                              variant: "primary",
                              text: C.intl.string(C.t.Jh8fJz),
                              onClick: () => {
                                  (0, g.Wh)(S, N), w();
                              },
                              disabled: R,
                          })
                        : null == L && (M || !(0, u.G1)(B))
                          ? (0, l.jsx)(s.Button, {
                                variant: "primary",
                                onClick: () => D(null == B ? void 0 : B.skuId),
                                text: C.intl.string(C.t.fYfGgK),
                            })
                          : (0, l.jsx)(h.Z, {
                                subscriptionTier: f.Si.TIER_2,
                                showGradient: !M,
                                textOptions: {
                                    textOverride: j.ZP.isPremium(v)
                                        ? C.intl.string(C.t.KXLX7l)
                                        : M
                                          ? C.intl.string(C.t.mr4K7D)
                                          : C.intl.string(C.t.pj0XBN),
                                },
                            }),
                    !M && (0, u.G1)(B)
                        ? (0, l.jsx)(m.Z, {
                              product: B,
                              onClose: w,
                          })
                        : (0, l.jsx)(s.Button, {
                              variant: "secondary",
                              text: C.intl.string(C.t["ETE/oC"]),
                              onClick: w,
                          }),
                ],
            }),
        ],
    });
}
function w(e) {
    let { transitionState: t, analyticsLocations: n, onClose: c, guildId: u, initialSelectedNameplate: d } = e,
        m = (0, i.e7)([v.default], () => v.default.getCurrentUser()),
        { analyticsLocations: h } = (0, o.ZP)(n, a.Z.EDIT_NAMEPLATE_MODAL),
        { categories: g, purchases: x, isFetchingCategories: j, isFetchingPurchases: y } = (0, p.ZP)(),
        P = j || (y && 0 === x.size);
    return ((0, r.useEffect)(() => {
        _.default.track(b.rMx.OPEN_MODAL, {
            type: b.jXE.NAMEPLATE_CUSTOMIZATION,
            location_stack: h,
        });
    }, [h]),
    null == m)
        ? null
        : (0, l.jsx)(o.Gt, {
              value: h,
              children: (0, l.jsx)(s.Y0X, {
                  transitionState: t,
                  size: P ? s.CgR.DYNAMIC : s.CgR.MEDIUM,
                  parentComponent: "NameplateModal",
                  "data-migration-pending": !0,
                  children: P
                      ? (0, l.jsx)(s.$jN, {
                            className: E.spinner,
                            type: s.$jN.Type.SPINNING_CIRCLE,
                        })
                      : (0, l.jsx)(O, {
                            currentUser: m,
                            categories: g,
                            purchases: x,
                            analyticsLocations: h,
                            guildId: u,
                            initialSelectedNameplate: d,
                            onClose: c,
                        }),
              }),
          });
}
