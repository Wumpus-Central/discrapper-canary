n.d(t, { default: () => T });
var s = n(627968),
    r = n(64700),
    i = n(311907),
    l = n(397927),
    a = n(793574),
    o = n(688810),
    c = n(571827),
    d = n(725807),
    u = n(919395),
    m = n(84540),
    p = n(287809),
    _ = n(954571),
    x = n(927578),
    h = n(979286),
    A = n(993408),
    g = n(821701),
    I = n(841702),
    E = n(169632),
    C = n(652215),
    f = n(788868),
    y = n(985018),
    j = n(12960);
function k(e) {
    let {
            user: t,
            product: n,
            purchase: r,
            onApply: i,
            onClose: a,
            onOpenShop: o,
            disableApplyButton: u,
            canUsePremiumCollectibles: m,
            selectedProfileFrame: p,
        } = e,
        _ = null != r ? (0, A.gA)(r) : (0, A.G0)(n);
    return (0, s.jsxs)(l.jlY, {
        "data-migration-pending": !0,
        className: j.Hx,
        children: [
            (null != r && (m || !_)) || null === p
                ? (0, s.jsx)(l.Button, { variant: "primary", text: y.intl.string(y.t.Jh8fJz), onClick: i, disabled: u })
                : null == r && (m || !_)
                  ? (0, s.jsx)(l.Button, {
                        variant: "primary",
                        text: y.intl.string(y.t.fYfGgK),
                        onClick: () => o(p?.skuId),
                    })
                  : (0, s.jsx)(d.A, {
                        subscriptionTier: f.pe.TIER_2,
                        showGradient: !m,
                        textOptions: {
                            textOverride: x.Ay.isPremium(t)
                                ? y.intl.string(y.t.KXLX7l)
                                : m
                                  ? y.intl.string(y.t.mr4K7D)
                                  : y.intl.string(y.t.pj0XBN),
                        },
                    }),
            !m && _
                ? (0, s.jsx)(c.A, { itemType: r?.type ?? n?.type, onClose: a })
                : (0, s.jsx)(l.Button, { variant: "secondary", text: y.intl.string(y.t["ETE/oC"]), onClick: a }),
        ],
    });
}
function P(e) {
    let { user: t, guild: n, categories: i, purchases: o, currentSavedFrame: c, analyticsLocations: d, onClose: p } = e,
        { pendingProfileFrame: _ } = (0, u.Tu)(n?.id),
        I = r.useMemo(() => (0, A.MG)(o, i), [i, o]),
        [C, f] = r.useState(() => (void 0 !== _ ? _ : (c ?? null))),
        P = r.useMemo(
            () =>
                I.find((e) => {
                    let { skuId: t } = e;
                    return t === C?.skuId;
                }) ?? null,
            [C, I],
        ),
        { product: T, purchase: R } = (0, g.A)(P?.skuId),
        O = r.useRef(null),
        N = x.Ay.canUseCollectibles(t),
        v = void 0 === _ ? C?.skuId === c?.skuId : C?.skuId === _?.skuId,
        M = r.useCallback(
            (e) => {
                f(e);
            },
            [f],
        ),
        L = r.useCallback(
            (e) => {
                p(),
                    (0, h.Cz)({
                        analyticsLocations: d,
                        analyticsSource: a.A.EDIT_PROFILE_FRAME_MODAL,
                        initialProductSkuId: e,
                    });
            },
            [d, p],
        );
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsxs)(l.rQ0, {
                "data-migration-pending": !0,
                separator: !1,
                className: j.Hc,
                children: [
                    (0, s.jsx)(l.Heading, { variant: "heading-lg/semibold", children: y.intl.string(y.t["oTSa/q"]) }),
                    (0, s.jsx)(l.s_y, { "data-migration-pending": !0, className: j.iT, onClick: p }),
                ],
            }),
            (0, s.jsx)(l.$mQ, {
                "data-migration-pending": !0,
                className: j.jE,
                children: (0, s.jsx)(E.A, {
                    user: t,
                    guild: n,
                    pendingProfileFrame: C,
                    selectedProfileFrameRef: O,
                    onSelect: M,
                    onOpenShop: L,
                }),
            }),
            (0, s.jsx)(k, {
                user: t,
                onApply: () => {
                    (0, m.p)({ guildId: n?.id, profileFrame: C ?? null }), p();
                },
                onClose: p,
                onOpenShop: L,
                product: T,
                purchase: R,
                canUsePremiumCollectibles: N,
                selectedProfileFrame: C,
                disableApplyButton: v,
            }),
        ],
    });
}
function T(e) {
    let { transitionState: t, analyticsLocations: n, guild: c, onClose: d } = e,
        { isFetching: m, categories: x, purchases: h } = (0, I.Ay)(),
        A = (0, i.bG)([p.default], () => p.default.getCurrentUser()),
        { analyticsLocations: g } = (0, o.Ay)(n, a.A.EDIT_PROFILE_FRAME_MODAL),
        E = (0, u.Xf)({ user: A, guildId: c?.id });
    return (
        r.useEffect(() => {
            _.default.track(C.HAw.OPEN_MODAL, { type: C.JJy.PROFILE_FRAME_CUSTOMIZATION, location_stack: g });
        }, [g]),
        (0, s.jsx)(o.f5, {
            value: g,
            children: (0, s.jsx)(l.EOs, {
                transitionState: t,
                className: j.yl,
                size: m ? l.rIJ.DYNAMIC : l.rIJ.MEDIUM,
                parentComponent: "ProfileFrameModal",
                "data-migration-pending": !0,
                children: m
                    ? (0, s.jsx)(l.y$y, { className: j.u1, type: l.y$y.Type.SPINNING_CIRCLE })
                    : (0, s.jsx)(P, {
                          user: A,
                          guild: c,
                          categories: x,
                          purchases: h,
                          currentSavedFrame: E,
                          onClose: d,
                          analyticsLocations: g,
                      }),
            }),
        })
    );
}
