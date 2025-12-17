n.d(t, { default: () => _ }), n(388685);
var l = n(54381),
    r = n(473749),
    i = n(442837),
    a = n(481060),
    s = n(100527),
    o = n(906732),
    c = n(335131),
    u = n(884697),
    d = n(449217),
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
    var t, n, o, p;
    let {
            currentUser: v,
            categories: f,
            purchases: C,
            analyticsLocations: O,
            onClose: _,
            guildId: Z,
            initialSelectedNameplate: A,
        } = e,
        N = (0, i.e7)([h.ZP], () => (null != Z && null != v ? h.ZP.getMember(Z, v.id) : null)),
        I =
            null != N
                ? null == (t = N.collectibles)
                    ? void 0
                    : t.nameplate
                : null == (n = v.collectibles)
                  ? void 0
                  : n.nameplate,
        { pendingNameplate: S } = (0, g.Zx)(v, Z),
        [k, T] = (0, r.useState)(() => {
            var e;
            return null != A
                ? A
                : void 0 !== S
                  ? S
                  : null == I
                    ? null
                    : null !=
                        (e = (0, u.Y)(C, f).find((e) => {
                            let { skuId: t } = e;
                            return t === I.skuId;
                        }))
                      ? e
                      : null;
        }),
        U = (0, g.Ys)({
            pendingValue: k,
            userValue: null == v || null == (o = v.collectibles) ? void 0 : o.nameplate,
            guildValue: null == N || null == (p = N.collectibles) ? void 0 : p.nameplate,
            guildId: Z,
        }),
        { product: B, purchase: D } = (0, d.Z)(null == k ? void 0 : k.skuId),
        L = null != D ? (0, u.qS)(D) : (0, u.G1)(B),
        R = b.ZP.canUseCollectibles(v),
        M =
            void 0 === S
                ? (null == k ? void 0 : k.skuId) === (null == I ? void 0 : I.skuId)
                : (null == k ? void 0 : k.skuId) === (null == S ? void 0 : S.skuId),
        F = (0, r.useCallback)(
            (e) => {
                _(),
                    (0, c.mK)({
                        analyticsLocations: O,
                        analyticsSource: s.Z.EDIT_NAMEPLATE_MODAL,
                        initialProductSkuId: e,
                    });
            },
            [O, _],
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
                        onClick: _,
                    }),
                ],
            }),
            (0, l.jsxs)(a.hzk, {
                "data-migration-pending": !0,
                className: w.content,
                scrollbarType: "none",
                children: [
                    (0, l.jsx)(y.Z, {
                        currentUser: v,
                        selectedNameplate: k,
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
                className: w.modalFooter,
                children: [
                    (null != D && (!L || R)) || null === k
                        ? (0, l.jsx)(a.Button, {
                              variant: "primary",
                              text: E.intl.string(E.t.Jh8fJz),
                              onClick: () => {
                                  (0, g.Wh)(k, Z), _();
                              },
                              disabled: M,
                          })
                        : null == D && (R || !L)
                          ? (0, l.jsx)(a.Button, {
                                variant: "primary",
                                onClick: () => F(null == B ? void 0 : B.skuId),
                                text: E.intl.string(E.t.fYfGgK),
                            })
                          : (0, l.jsx)(x.Z, {
                                subscriptionTier: P.Si.TIER_2,
                                showGradient: !R,
                                textOptions: {
                                    textOverride: b.ZP.isPremium(v)
                                        ? E.intl.string(E.t.KXLX7l)
                                        : R
                                          ? E.intl.string(E.t.mr4K7D)
                                          : E.intl.string(E.t.pj0XBN),
                                },
                            }),
                    !R && L
                        ? (0, l.jsx)(m.Z, {
                              product: null != D ? D : B,
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
    let { transitionState: t, analyticsLocations: n, onClose: c, guildId: u, initialSelectedNameplate: d } = e,
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
                            guildId: u,
                            initialSelectedNameplate: d,
                            onClose: c,
                        }),
              }),
          });
}
