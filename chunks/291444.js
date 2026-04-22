n.d(t, { A: () => k });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(311907),
    o = n(554146),
    d = n(862482),
    c = n(834730),
    u = n(939249),
    m = n(83257),
    g = n(826673),
    h = n(532197),
    x = n(203982),
    _ = n(555337),
    p = n(155008),
    A = n(418448),
    E = n(527678),
    f = n(923121),
    j = n(199940),
    N = n(107795),
    I = n(655943),
    C = n(287479),
    b = n(400812),
    v = n(72533),
    S = n(729984),
    T = n(193477),
    y = n(692453),
    R = n(307209),
    L = n(360827),
    D = n(307879),
    O = n(652215),
    G = n(985018),
    M = n(332795);
function k() {
    let e = (0, a.bG)([_.A], () => _.A.getGuildId());
    return null == e ? null : (0, i.jsx)(U, { guildId: e });
}
function U(e) {
    let t,
        { guildId: n } = e,
        s = (0, a.bG)([C.A], () => C.A.getCurrentPage()),
        u = (0, a.bG)([C.A], () => {
            let e = (0, b.ql)(s);
            return null != e && !C.A.isEducationUpsellDismissed(e);
        }),
        _ = (0, v.A)(n),
        I = !_ && u;
    switch (
        (l.useEffect(() => {
            (0, g.Dr)(o.M.COMMUNITY_ONBOARDING_NEW_BADGE);
        }, []),
        s)
    ) {
        case b.Hy.LANDING:
            t = _ ? (0, i.jsx)(R.A, { completed: !0, guildId: n }) : (0, i.jsx)(D.A, {});
            break;
        case b.Hy.SAFETY_CHECK:
            t = (0, i.jsx)(p.A, {});
            break;
        case b.Hy.DEFAULT_CHANNELS:
            t = (0, i.jsx)(S.A, { saveOnClose: !_ });
            break;
        case b.Hy.CUSTOMIZATION_QUESTIONS:
            t = (0, i.jsx)(L.Ay, { saveOnClose: !_ });
            break;
        case b.Hy.HOME_SETTINGS:
            t = (0, i.jsx)(T.A, { saveOnClose: !_ });
            break;
        case b.Hy.CONNECTIONS:
            t = (0, i.jsx)(y.A, { saveOnClose: !_ });
            break;
        case b.Hy.REVIEW:
            t = (0, i.jsx)(R.A, { completed: _, guildId: n });
    }
    return (0, i.jsxs)("div", {
        className: r()(M.Jp, { [M.Q3]: I }),
        children: [
            !_ && s !== b.Hy.LANDING && (0, i.jsx)(w, { setOnboardingStep: E.e_, page: s, homeSettingsEnabled: !0 }),
            _ &&
                s !== b.Hy.LANDING &&
                (0, i.jsx)("div", {
                    children: (0, i.jsxs)(d.$n, {
                        innerClassName: M.Gv,
                        look: d.$n.Looks.BLANK,
                        size: d.$n.Sizes.MIN,
                        onClick: () => {
                            if (C.A.hasChanges() && !C.A.canCloseEarly()) {
                                x._.dispatch(O.jej.SHAKE_APP, { duration: 300, intensity: m.n3 }),
                                    x._.dispatch(O.jej.EMPHASIZE_NOTICE);
                                return;
                            }
                            (0, N.P3)(), (0, A.nx)(), (0, j.sk)(), (0, f.p2)(), (0, E.e_)(b.Hy.LANDING);
                        },
                        children: [
                            (0, i.jsx)(h.A, { className: M.UE, direction: h.A.Directions.LEFT }),
                            (0, i.jsx)(c.E, {
                                variant: "text-sm/semibold",
                                color: "interactive-text-default",
                                children: G.intl.string(G.t["13/7kX"]),
                            }),
                        ],
                    }),
                }),
            (0, i.jsx)("div", { children: t }),
        ],
    });
}
function w(e) {
    let { page: t, setOnboardingStep: n, homeSettingsEnabled: l } = e,
        s = (0, a.bG)([C.A], () => C.A.hasErrors()),
        o = (e) => {
            if (!s) return () => n(e);
        },
        d = (0, a.bG)([I.A], () => I.A.advancedMode);
    return (0, i.jsxs)("div", {
        className: M.L$,
        children: [
            (0, i.jsxs)(u.D, {
                className: r()(M.G9, M.zp),
                onClick: o(b.Hy.SAFETY_CHECK),
                children: [
                    (0, i.jsx)("div", { className: r()(M.hr, { [M.Ou]: t === b.Hy.SAFETY_CHECK }) }),
                    (0, i.jsx)(c.E, {
                        color: t === b.Hy.SAFETY_CHECK ? "text-brand" : "text-muted",
                        variant: "text-xs/medium",
                        children: G.intl.format(G.t.Me5Mma, { stepNumber: 1 }),
                    }),
                ],
            }),
            (0, i.jsxs)(u.D, {
                className: r()(M.G9, M.zp),
                onClick: o(b.Hy.DEFAULT_CHANNELS),
                children: [
                    (0, i.jsx)("div", { className: r()(M.hr, { [M.Ou]: t === b.Hy.DEFAULT_CHANNELS }) }),
                    (0, i.jsx)(c.E, {
                        color: t === b.Hy.DEFAULT_CHANNELS ? "text-brand" : "text-muted",
                        variant: "text-xs/medium",
                        children: d
                            ? G.intl.formatToPlainString(G.t["8mGhOy"], { stepNumber: 2 })
                            : G.intl.formatToPlainString(G.t.vxpuTd, { stepNumber: 2 }),
                    }),
                ],
            }),
            (0, i.jsxs)(u.D, {
                className: r()(M.G9, M.zp),
                onClick: o(b.Hy.CUSTOMIZATION_QUESTIONS),
                children: [
                    (0, i.jsx)("div", { className: r()(M.hr, { [M.Ou]: t === b.Hy.CUSTOMIZATION_QUESTIONS }) }),
                    (0, i.jsx)(c.E, {
                        color: t === b.Hy.CUSTOMIZATION_QUESTIONS ? "text-brand" : "text-muted",
                        variant: "text-xs/medium",
                        children: d
                            ? G.intl.formatToPlainString(G.t.vb6J5g, { stepNumber: 3 })
                            : G.intl.formatToPlainString(G.t.ZpdQqK, { stepNumber: 3 }),
                    }),
                ],
            }),
            l &&
                (0, i.jsxs)(u.D, {
                    className: r()(M.G9, M.zp),
                    onClick: o(b.Hy.HOME_SETTINGS),
                    children: [
                        (0, i.jsx)("div", { className: r()(M.hr, { [M.Ou]: t === b.Hy.HOME_SETTINGS }) }),
                        (0, i.jsx)(c.E, {
                            color: t === b.Hy.HOME_SETTINGS ? "text-brand" : "text-muted",
                            variant: "text-xs/medium",
                            children: G.intl.format(G.t.KVOukh, { stepNumber: 4 }),
                        }),
                    ],
                }),
            (0, i.jsxs)("div", {
                className: M.G9,
                children: [
                    (0, i.jsx)("div", { className: r()(M.hr, { [M.Ou]: t === b.Hy.REVIEW }) }),
                    (0, i.jsx)(c.E, {
                        color: t === b.Hy.REVIEW ? "text-brand" : "text-muted",
                        variant: "text-xs/medium",
                        children: G.intl.format(G.t.oVzkiA, { stepNumber: 3 + +!!l + 1 }),
                    }),
                ],
            }),
        ],
    });
}
