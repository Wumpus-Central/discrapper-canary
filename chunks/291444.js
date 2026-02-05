"use strict";
n.d(t, { A: () => M });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(311907),
    o = n(554146),
    d = n(421380),
    c = n(397927),
    u = n(83257),
    m = n(826673),
    g = n(532197),
    x = n(203982),
    h = n(555337),
    _ = n(155008),
    A = n(418448),
    p = n(527678),
    f = n(923121),
    j = n(199940),
    N = n(107795),
    E = n(655943),
    b = n(287479),
    T = n(400812),
    C = n(72533),
    I = n(729984),
    v = n(193477),
    S = n(692453),
    y = n(307209),
    R = n(360827),
    O = n(307879),
    G = n(652215),
    L = n(985018),
    D = n(361870);
function M() {
    let e = (0, a.bG)([h.A], () => h.A.getGuildId());
    return null == e ? null : (0, i.jsx)(k, { guildId: e });
}
function k(e) {
    let t,
        { guildId: n } = e,
        l = (0, a.bG)([b.A], () => b.A.getCurrentPage()),
        h = (0, a.bG)([b.A], () => {
            let e = (0, T.ql)(l);
            return null != e && !b.A.isEducationUpsellDismissed(e);
        }),
        E = (0, C.A)(n),
        M = !E && h;
    switch (
        (s.useEffect(() => {
            (0, m.Dr)(o.M.COMMUNITY_ONBOARDING_NEW_BADGE);
        }, []),
        l)
    ) {
        case T.Hy.LANDING:
            t = E ? (0, i.jsx)(y.A, { completed: !0, guildId: n }) : (0, i.jsx)(O.A, {});
            break;
        case T.Hy.SAFETY_CHECK:
            t = (0, i.jsx)(_.A, {});
            break;
        case T.Hy.DEFAULT_CHANNELS:
            t = (0, i.jsx)(I.A, { saveOnClose: !E });
            break;
        case T.Hy.CUSTOMIZATION_QUESTIONS:
            t = (0, i.jsx)(R.Ay, { saveOnClose: !E });
            break;
        case T.Hy.HOME_SETTINGS:
            t = (0, i.jsx)(v.A, { saveOnClose: !E });
            break;
        case T.Hy.CONNECTIONS:
            t = (0, i.jsx)(S.A, { saveOnClose: !E });
            break;
        case T.Hy.REVIEW:
            t = (0, i.jsx)(y.A, { completed: E, guildId: n });
    }
    return (0, i.jsxs)("div", {
        className: r()(D.Jp, { [D.Q3]: M }),
        children: [
            !E && l !== T.Hy.LANDING && (0, i.jsx)(U, { setOnboardingStep: p.e_, page: l, homeSettingsEnabled: !0 }),
            E &&
                l !== T.Hy.LANDING &&
                (0, i.jsx)("div", {
                    children: (0, i.jsxs)(d.$n, {
                        innerClassName: D.Gv,
                        look: d.$n.Looks.BLANK,
                        size: d.$n.Sizes.MIN,
                        onClick: () => {
                            if (b.A.hasChanges() && !b.A.canCloseEarly()) {
                                x._.dispatch(G.jej.SHAKE_APP, { duration: 300, intensity: u.n3 }),
                                    x._.dispatch(G.jej.EMPHASIZE_NOTICE);
                                return;
                            }
                            (0, N.P3)(), (0, A.nx)(), (0, j.sk)(), (0, f.p2)(), (0, p.e_)(T.Hy.LANDING);
                        },
                        children: [
                            (0, i.jsx)(g.A, { className: D.UE, direction: g.A.Directions.LEFT }),
                            (0, i.jsx)(c.Text, {
                                variant: "text-sm/semibold",
                                color: "interactive-text-default",
                                children: L.intl.string(L.t["13/7kX"]),
                            }),
                        ],
                    }),
                }),
            (0, i.jsx)("div", { children: t }),
        ],
    });
}
function U(e) {
    let { page: t, setOnboardingStep: n, homeSettingsEnabled: s } = e,
        l = (0, a.bG)([b.A], () => b.A.hasErrors()),
        o = (e) => {
            if (!l) return () => n(e);
        },
        d = (0, a.bG)([E.A], () => E.A.advancedMode);
    return (0, i.jsxs)("div", {
        className: D.L$,
        children: [
            (0, i.jsxs)(c.DUT, {
                className: r()(D.G9, D.zp),
                onClick: o(T.Hy.SAFETY_CHECK),
                children: [
                    (0, i.jsx)("div", { className: r()(D.hr, { [D.Ou]: t === T.Hy.SAFETY_CHECK }) }),
                    (0, i.jsx)(c.Text, {
                        color: t === T.Hy.SAFETY_CHECK ? "text-brand" : "text-muted",
                        variant: "text-xs/medium",
                        children: L.intl.format(L.t.Me5Mma, { stepNumber: 1 }),
                    }),
                ],
            }),
            (0, i.jsxs)(c.DUT, {
                className: r()(D.G9, D.zp),
                onClick: o(T.Hy.DEFAULT_CHANNELS),
                children: [
                    (0, i.jsx)("div", { className: r()(D.hr, { [D.Ou]: t === T.Hy.DEFAULT_CHANNELS }) }),
                    (0, i.jsx)(c.Text, {
                        color: t === T.Hy.DEFAULT_CHANNELS ? "text-brand" : "text-muted",
                        variant: "text-xs/medium",
                        children: d
                            ? L.intl.formatToPlainString(L.t["8mGhOy"], { stepNumber: 2 })
                            : L.intl.formatToPlainString(L.t.vxpuTd, { stepNumber: 2 }),
                    }),
                ],
            }),
            (0, i.jsxs)(c.DUT, {
                className: r()(D.G9, D.zp),
                onClick: o(T.Hy.CUSTOMIZATION_QUESTIONS),
                children: [
                    (0, i.jsx)("div", { className: r()(D.hr, { [D.Ou]: t === T.Hy.CUSTOMIZATION_QUESTIONS }) }),
                    (0, i.jsx)(c.Text, {
                        color: t === T.Hy.CUSTOMIZATION_QUESTIONS ? "text-brand" : "text-muted",
                        variant: "text-xs/medium",
                        children: d
                            ? L.intl.formatToPlainString(L.t.vb6J5g, { stepNumber: 3 })
                            : L.intl.formatToPlainString(L.t.ZpdQqK, { stepNumber: 3 }),
                    }),
                ],
            }),
            s &&
                (0, i.jsxs)(c.DUT, {
                    className: r()(D.G9, D.zp),
                    onClick: o(T.Hy.HOME_SETTINGS),
                    children: [
                        (0, i.jsx)("div", { className: r()(D.hr, { [D.Ou]: t === T.Hy.HOME_SETTINGS }) }),
                        (0, i.jsx)(c.Text, {
                            color: t === T.Hy.HOME_SETTINGS ? "text-brand" : "text-muted",
                            variant: "text-xs/medium",
                            children: L.intl.format(L.t.KVOukh, { stepNumber: 4 }),
                        }),
                    ],
                }),
            (0, i.jsxs)("div", {
                className: D.G9,
                children: [
                    (0, i.jsx)("div", { className: r()(D.hr, { [D.Ou]: t === T.Hy.REVIEW }) }),
                    (0, i.jsx)(c.Text, {
                        color: t === T.Hy.REVIEW ? "text-brand" : "text-muted",
                        variant: "text-xs/medium",
                        children: L.intl.format(L.t.oVzkiA, { stepNumber: 3 + +!!s + 1 }),
                    }),
                ],
            }),
        ],
    });
}
