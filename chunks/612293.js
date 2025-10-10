n.d(t, { default: () => T }), n(388685);
var i = n(951288),
    r = n(647438),
    a = n(442837),
    l = n(481060),
    o = n(809206),
    s = n(100527),
    c = n(906732),
    d = n(335131),
    u = n(884697),
    p = n(449217),
    _ = n(223143),
    m = n(18438),
    h = n(269982),
    g = n(767714),
    b = n(150039),
    v = n(271383),
    x = n(594174),
    C = n(626135),
    f = n(74538),
    I = n(653079),
    P = n(576386),
    y = n(981631),
    w = n(474936),
    j = n(388032),
    k = n(886020);
function E(e) {
    var t, n;
    let {
            currentUser: c,
            categories: _,
            purchases: x,
            analyticsLocations: C,
            onClose: y,
            guildId: E,
            initialSelectedNameplate: T,
        } = e,
        S = (0, a.e7)([v.ZP], () => (null != E && null != c ? v.ZP.getMember(E, c.id) : null)),
        A =
            null != S
                ? null == S || null == (t = S.collectibles)
                    ? void 0
                    : t.nameplate
                : null == c || null == (n = c.collectibles)
                  ? void 0
                  : n.nameplate,
        { pendingNameplate: N } = (0, b.Zx)(c, E),
        [B, Z] = (0, r.useState)(() => {
            var e;
            return null != T
                ? T
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
        { product: O, purchase: L } = (0, p.Z)(null == B ? void 0 : B.skuId),
        U = f.ZP.canUseCollectibles(c),
        D =
            void 0 === N
                ? (null == B ? void 0 : B.skuId) === (null == A ? void 0 : A.skuId)
                : (null == B ? void 0 : B.skuId) === (null == N ? void 0 : N.skuId),
        M = (0, r.useCallback)(
            (e) => {
                y(),
                    (0, d.mK)({
                        analyticsLocations: C,
                        analyticsSource: s.Z.EDIT_NAMEPLATE_MODAL,
                        initialProductSkuId: e,
                    });
            },
            [C, y],
        );
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(l.xBx, {
                "data-migration-pending": !0,
                separator: !1,
                className: k.header,
                children: [
                    (0, i.jsx)(l.X6q, {
                        variant: "heading-lg/semibold",
                        children: j.intl.string(j.t.BwdeMz),
                    }),
                    (0, i.jsx)(l.olH, {
                        "data-migration-pending": !0,
                        className: k.closeButton,
                        onClick: y,
                    }),
                ],
            }),
            (0, i.jsxs)(l.hzk, {
                "data-migration-pending": !0,
                className: k.content,
                scrollbarType: "none",
                children: [
                    (0, i.jsx)(P.Z, {
                        currentUser: c,
                        selectedNameplate: B,
                        guildId: E,
                        onSelect: Z,
                        onOpenShop: M,
                    }),
                    (0, i.jsx)(I.Z, {
                        user: c,
                        guildId: E,
                        selectedNameplate: B,
                    }),
                ],
            }),
            (0, i.jsxs)(l.mzw, {
                "data-migration-pending": !0,
                className: k.modalFooter,
                children: [
                    (null != L && (!(0, u.qS)(L) || U)) || null === B
                        ? (0, i.jsx)(l.zxk, {
                              variant: "primary",
                              text: j.intl.string(j.t.Jh8fJy),
                              onClick: () => {
                                  null != E ? (0, m.RH)(B) : (0, o.Rx)(B), y();
                              },
                              disabled: D,
                          })
                        : null == L && (U || !(0, u.G1)(O))
                          ? (0, i.jsx)(l.zxk, {
                                variant: "primary",
                                onClick: () => M(null == O ? void 0 : O.skuId),
                                text: j.intl.string(j.t.fYfGgI),
                            })
                          : (0, i.jsx)(g.Z, {
                                subscriptionTier: w.Si.TIER_2,
                                showGradient: !U,
                                textOptions: {
                                    textOverride: f.ZP.isPremium(c)
                                        ? j.intl.string(j.t.KXLX7u)
                                        : U
                                          ? j.intl.string(j.t.mr4K7O)
                                          : j.intl.string(j.t.pj0XBA),
                                },
                            }),
                    !U && (0, u.G1)(O)
                        ? (0, i.jsx)(h.Z, {
                              product: O,
                              onClose: y,
                          })
                        : (0, i.jsx)(l.zxk, {
                              variant: "secondary",
                              text: j.intl.string(j.t["ETE/oK"]),
                              onClick: y,
                          }),
                ],
            }),
        ],
    });
}
function T(e) {
    let { transitionState: t, analyticsLocations: n, onClose: o, guildId: d, initialSelectedNameplate: u } = e,
        p = (0, a.e7)([x.default], () => x.default.getCurrentUser()),
        { analyticsLocations: m } = (0, c.ZP)(n, s.Z.EDIT_NAMEPLATE_MODAL),
        { categories: h, purchases: g, isFetchingCategories: b, isFetchingPurchases: v } = (0, _.ZP)(),
        f = b || (v && 0 === g.size);
    return ((0, r.useEffect)(() => {
        C.default.track(y.rMx.OPEN_MODAL, {
            type: y.jXE.NAMEPLATE_CUSTOMIZATION,
            location_stack: m,
        });
    }, [m]),
    null == p)
        ? null
        : (0, i.jsx)(c.Gt, {
              value: m,
              children: (0, i.jsx)(l.Y0X, {
                  transitionState: t,
                  size: f ? l.CgR.DYNAMIC : l.CgR.MEDIUM,
                  parentComponent: "NameplateModal",
                  "data-migration-pending": !0,
                  children: f
                      ? (0, i.jsx)(l.$jN, {
                            className: k.spinner,
                            type: l.$jN.Type.SPINNING_CIRCLE,
                        })
                      : (0, i.jsx)(E, {
                            currentUser: p,
                            categories: h,
                            purchases: g,
                            analyticsLocations: m,
                            guildId: d,
                            initialSelectedNameplate: u,
                            onClose: o,
                        }),
              }),
          });
}
