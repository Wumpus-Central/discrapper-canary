s.d(t, { A: () => C });
var r = s(627968),
    a = s(64700),
    i = s(311907),
    n = s(403581),
    l = s(939249),
    o = s(834730),
    c = s(793574),
    d = s(742589),
    m = s(909536),
    u = s(287809),
    _ = s(65470),
    x = s(400669),
    p = s(736455),
    g = s(876587),
    h = s(985018),
    f = s(503255);
let C = (e) => {
    let { navBarSections: t, activeSectionId: s, isAnimationComplete: C } = e,
        b = {
            [p.k.HOME]: h.intl.string(h.t.uGRXjS),
            [p.k.WHATS_NEW]: h.intl.string(h.t["mfcR/v"]),
            [p.k.BEST_OF_NITRO]: h.intl.string(h.t.xQKkE8),
            [p.k.PLANS]: h.intl.string(h.t.wyNMnm),
            [p.k.COMPARE]: h.intl.string(h.t.pwD7If),
        },
        j = (0, i.bG)([u.default], () => u.default.getCurrentUser()),
        A = (0, m.Gh)("premium_marketing_nav_bar") && null != j,
        N = a.useRef(null),
        I = Object.values(t).sort((e, t) => e.order - t.order);
    return (0, r.jsxs)(d.A, {
        className: f.TQ,
        transparent: !0,
        children: [
            (0, r.jsxs)("div", {
                className: f.Wc,
                children: [
                    (0, r.jsxs)("div", {
                        className: f.wG,
                        children: [
                            (0, r.jsx)(n.t, { className: f.nE, colorClass: f.oG }),
                            (0, r.jsx)("div", {
                                className: f.zc,
                                children: I.map((e) => {
                                    let t = s === e.id,
                                        a = b[e.id];
                                    return (0, r.jsxs)(
                                        l.D,
                                        {
                                            className: f.S0,
                                            onClick: e.scrollToSection,
                                            children: [
                                                (0, r.jsx)(o.E, {
                                                    variant: "text-sm/medium",
                                                    color: "text-strong",
                                                    children: a,
                                                }),
                                                t && (0, r.jsx)("div", { className: f.W0 }),
                                            ],
                                        },
                                        a,
                                    );
                                }),
                            }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: f.MQ,
                        children: [
                            A && (0, r.jsx)(x.l, { ref: N, size: "sm", location: c.A.PREMIUM_WISHLIST_MARKETING_PAGE }),
                            (0, r.jsx)(_.A, { size: "sm", variant: "overlay-secondary" }),
                        ],
                    }),
                ],
            }),
            A && C && (0, r.jsx)(g.O, { targetElementRef: N }),
        ],
    });
};
