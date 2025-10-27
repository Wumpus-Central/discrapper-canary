n.d(t, { default: () => k }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(442837),
    l = n(481060),
    s = n(809206),
    o = n(100527),
    c = n(906732),
    d = n(335131),
    u = n(884697),
    p = n(449217),
    _ = n(223143),
    m = n(18438),
    h = n(269982),
    b = n(767714),
    g = n(150039),
    v = n(271383),
    x = n(594174),
    f = n(626135),
    C = n(74538),
    I = n(653079),
    y = n(576386),
    P = n(981631),
    j = n(474936),
    w = n(388032),
    O = n(886020);
function S(e) {
    var t, n;
    let {
            currentUser: c,
            categories: _,
            purchases: x,
            analyticsLocations: f,
            onClose: P,
            guildId: S,
            initialSelectedNameplate: k,
        } = e,
        E = (0, a.e7)([v.ZP], () => (null != S && null != c ? v.ZP.getMember(S, c.id) : null)),
        A =
            null != E
                ? null == E || null == (t = E.collectibles)
                    ? void 0
                    : t.nameplate
                : null == c || null == (n = c.collectibles)
                  ? void 0
                  : n.nameplate,
        { pendingNameplate: N } = (0, g.Zx)(c, S),
        [B, Z] = (0, i.useState)(() => {
            var e;
            return null != k
                ? k
                : void 0 !== N
                  ? N
                  : null == A
                    ? null
                    : null !=
                        (e = (0, u.Y)(x, _).find((e) => {
                            let { skuId: t } = e;
                            return t === A.skuId;
                        }))
                      ? e
                      : null;
        }),
        { product: T, purchase: L } = (0, p.Z)(null == B ? void 0 : B.skuId),
        U = C.ZP.canUseCollectibles(c),
        D =
            void 0 === N
                ? (null == B ? void 0 : B.skuId) === (null == A ? void 0 : A.skuId)
                : (null == B ? void 0 : B.skuId) === (null == N ? void 0 : N.skuId),
        M = (0, i.useCallback)(
            (e) => {
                P(),
                    (0, d.mK)({
                        analyticsLocations: f,
                        analyticsSource: o.Z.EDIT_NAMEPLATE_MODAL,
                        initialProductSkuId: e,
                    });
            },
            [f, P],
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(l.xBx, {
                "data-migration-pending": !0,
                separator: !1,
                className: O.header,
                children: [
                    (0, r.jsx)(l.Heading, {
                        variant: "heading-lg/semibold",
                        children: w.intl.string(w.t.BwdeM1),
                    }),
                    (0, r.jsx)(l.olH, {
                        "data-migration-pending": !0,
                        className: O.closeButton,
                        onClick: P,
                    }),
                ],
            }),
            (0, r.jsxs)(l.hzk, {
                "data-migration-pending": !0,
                className: O.content,
                scrollbarType: "none",
                children: [
                    (0, r.jsx)(y.Z, {
                        currentUser: c,
                        selectedNameplate: B,
                        guildId: S,
                        onSelect: Z,
                        onOpenShop: M,
                    }),
                    (0, r.jsx)(I.Z, {
                        user: c,
                        guildId: S,
                        selectedNameplate: B,
                    }),
                ],
            }),
            (0, r.jsxs)(l.mzw, {
                "data-migration-pending": !0,
                className: O.modalFooter,
                children: [
                    (null != L && (!(0, u.qS)(L) || U)) || null === B
                        ? (0, r.jsx)(l.Button, {
                              variant: "primary",
                              text: w.intl.string(w.t.Jh8fJz),
                              onClick: () => {
                                  null != S ? (0, m.RH)(B) : (0, s.Rx)(B), P();
                              },
                              disabled: D,
                          })
                        : null == L && (U || !(0, u.G1)(T))
                          ? (0, r.jsx)(l.Button, {
                                variant: "primary",
                                onClick: () => M(null == T ? void 0 : T.skuId),
                                text: w.intl.string(w.t.fYfGgK),
                            })
                          : (0, r.jsx)(b.Z, {
                                subscriptionTier: j.Si.TIER_2,
                                showGradient: !U,
                                textOptions: {
                                    textOverride: C.ZP.isPremium(c)
                                        ? w.intl.string(w.t.KXLX7l)
                                        : U
                                          ? w.intl.string(w.t.mr4K7D)
                                          : w.intl.string(w.t.pj0XBN),
                                },
                            }),
                    !U && (0, u.G1)(T)
                        ? (0, r.jsx)(h.Z, {
                              product: T,
                              onClose: P,
                          })
                        : (0, r.jsx)(l.Button, {
                              variant: "secondary",
                              text: w.intl.string(w.t["ETE/oC"]),
                              onClick: P,
                          }),
                ],
            }),
        ],
    });
}
function k(e) {
    let { transitionState: t, analyticsLocations: n, onClose: s, guildId: d, initialSelectedNameplate: u } = e,
        p = (0, a.e7)([x.default], () => x.default.getCurrentUser()),
        { analyticsLocations: m } = (0, c.ZP)(n, o.Z.EDIT_NAMEPLATE_MODAL),
        { categories: h, purchases: b, isFetchingCategories: g, isFetchingPurchases: v } = (0, _.ZP)(),
        C = g || (v && 0 === b.size);
    return ((0, i.useEffect)(() => {
        f.default.track(P.rMx.OPEN_MODAL, {
            type: P.jXE.NAMEPLATE_CUSTOMIZATION,
            location_stack: m,
        });
    }, [m]),
    null == p)
        ? null
        : (0, r.jsx)(c.Gt, {
              value: m,
              children: (0, r.jsx)(l.Y0X, {
                  transitionState: t,
                  size: C ? l.CgR.DYNAMIC : l.CgR.MEDIUM,
                  parentComponent: "NameplateModal",
                  "data-migration-pending": !0,
                  children: C
                      ? (0, r.jsx)(l.$jN, {
                            className: O.spinner,
                            type: l.$jN.Type.SPINNING_CIRCLE,
                        })
                      : (0, r.jsx)(S, {
                            currentUser: p,
                            categories: h,
                            purchases: b,
                            analyticsLocations: m,
                            guildId: d,
                            initialSelectedNameplate: u,
                            onClose: s,
                        }),
              }),
          });
}
