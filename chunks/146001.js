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
    A = n(954571),
    h = n(927578),
    x = n(979286),
    _ = n(993408),
    g = n(821701),
    I = n(841702),
    E = n(169632),
    C = n(652215),
    f = n(788868),
    y = n(985018),
    j = n(12960);
function P(e) {
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
        A = null != r ? (0, _.gA)(r) : (0, _.G0)(n);
    return (0, s.jsx)(s.Fragment, {
        children: (0, s.jsxs)(l.jlY, {
            "data-migration-pending": !0,
            className: j.Hx,
            children: [
                (null != r && (m || !A)) || null === p
                    ? (0, s.jsx)(l.Button, {
                          variant: "primary",
                          text: y.intl.string(y.t.Jh8fJz),
                          onClick: i,
                          disabled: u,
                      })
                    : null == r && (m || !A)
                      ? (0, s.jsx)(l.Button, {
                            variant: "primary",
                            text: y.intl.string(y.t.fYfGgK),
                            onClick: () => o(p?.skuId),
                        })
                      : (0, s.jsx)(d.A, {
                            subscriptionTier: f.pe.TIER_2,
                            showGradient: !m,
                            textOptions: {
                                textOverride: h.Ay.isPremium(t)
                                    ? y.intl.string(y.t.KXLX7l)
                                    : m
                                      ? y.intl.string(y.t.mr4K7D)
                                      : y.intl.string(y.t.pj0XBN),
                            },
                        }),
                !m && A
                    ? (0, s.jsx)(c.A, { itemType: r?.type ?? n?.type, onClose: a })
                    : (0, s.jsx)(l.Button, { variant: "secondary", text: y.intl.string(y.t["ETE/oC"]), onClick: a }),
            ],
        }),
    });
}
function k(e) {
    let {
            user: t,
            guild: n,
            categories: i,
            purchases: o,
            currentSavedFrame: c,
            analyticsLocations: d,
            initialSelectedProfileFrame: p,
            onClose: A,
        } = e,
        { pendingProfileFrame: I } = (0, u.Tu)(n?.id),
        C = r.useMemo(() => (0, _.MG)(o, i), [i, o]),
        [f, k] = r.useState(() => (null != p ? p : void 0 !== I ? I : (c ?? null))),
        T = r.useMemo(
            () =>
                C.find((e) => {
                    let { skuId: t } = e;
                    return t === f?.skuId;
                }) ?? null,
            [f, C],
        ),
        { product: R, purchase: O } = (0, g.A)(T?.skuId),
        v = r.useRef(null),
        N = h.Ay.canUseCollectibles(t),
        M = void 0 === I ? f?.skuId === c?.skuId : f?.skuId === I?.skuId,
        S = r.useCallback(
            (e) => {
                k(e);
            },
            [k],
        ),
        L = r.useCallback(
            (e) => {
                A(),
                    (0, x.Cz)({
                        analyticsLocations: d,
                        analyticsSource: a.A.EDIT_PROFILE_FRAME_MODAL,
                        initialProductSkuId: e,
                    });
            },
            [d, A],
        );
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsxs)(l.rQ0, {
                "data-migration-pending": !0,
                separator: !1,
                className: j.Hc,
                children: [
                    (0, s.jsx)(l.Heading, { variant: "heading-lg/semibold", children: y.intl.string(y.t["oTSa/q"]) }),
                    (0, s.jsx)(l.s_y, { "data-migration-pending": !0, className: j.iT, onClick: A }),
                ],
            }),
            (0, s.jsx)(l.$mQ, {
                "data-migration-pending": !0,
                className: j.jE,
                children: (0, s.jsx)(E.A, {
                    user: t,
                    guild: n,
                    pendingProfileFrame: f,
                    selectedProfileFrameRef: v,
                    onSelect: S,
                    onOpenShop: L,
                }),
            }),
            (0, s.jsx)(P, {
                user: t,
                onApply: () => {
                    (0, m.p)({ guildId: n?.id, profileFrame: f ?? null }), A();
                },
                onClose: A,
                onOpenShop: L,
                product: R,
                purchase: O,
                canUsePremiumCollectibles: N,
                selectedProfileFrame: f,
                disableApplyButton: M,
            }),
        ],
    });
}
function T(e) {
    let { transitionState: t, analyticsLocations: n, guild: c, onClose: d, initialSelectedProfileFrame: m } = e,
        { isFetching: h, categories: x, purchases: _ } = (0, I.Ay)(),
        g = (0, i.bG)([p.default], () => p.default.getCurrentUser()),
        { analyticsLocations: E } = (0, o.Ay)(n, a.A.EDIT_PROFILE_FRAME_MODAL),
        f = (0, u.Xf)({ user: g, guildId: c?.id });
    return (
        r.useEffect(() => {
            A.default.track(C.HAw.OPEN_MODAL, { type: C.JJy.PROFILE_FRAME_CUSTOMIZATION, location_stack: E });
        }, [E]),
        (0, s.jsx)(o.f5, {
            value: E,
            children: (0, s.jsx)(l.EOs, {
                transitionState: t,
                className: j.yl,
                size: h ? l.rIJ.DYNAMIC : l.rIJ.MEDIUM,
                parentComponent: "ProfileFrameModal",
                "data-migration-pending": !0,
                children: h
                    ? (0, s.jsx)(l.y$y, { className: j.u1, type: l.y$y.Type.SPINNING_CIRCLE })
                    : (0, s.jsx)(k, {
                          user: g,
                          guild: c,
                          categories: x,
                          purchases: _,
                          currentSavedFrame: f,
                          onClose: d,
                          analyticsLocations: E,
                          initialSelectedProfileFrame: m,
                      }),
            }),
        })
    );
}
