n.d(t, { A: () => A });
var i = n(627968),
    s = n(64700),
    l = n(311907),
    r = n(397927),
    a = n(793574),
    o = n(742589),
    d = n(909536),
    c = n(287809),
    u = n(65470),
    m = n(400669),
    g = n(736455),
    _ = n(876587),
    x = n(985018),
    h = n(503255);
let A = (e) => {
    let { navBarSections: t, activeSectionId: n, isAnimationComplete: A } = e,
        p = {
            [g.k.HOME]: x.intl.string(x.t.uGRXjS),
            [g.k.WHATS_NEW]: x.intl.string(x.t["mfcR/v"]),
            [g.k.BEST_OF_NITRO]: x.intl.string(x.t.xQKkE8),
            [g.k.PLANS]: x.intl.string(x.t.wyNMnm),
            [g.k.COMPARE]: x.intl.string(x.t.pwD7If),
        },
        T = (0, l.bG)([c.default], () => c.default.getCurrentUser()),
        f = (0, d.Gh)("premium_marketing_nav_bar") && null != T,
        S = s.useRef(null),
        E = Object.values(t).sort((e, t) => e.order - t.order);
    return (0, i.jsxs)(o.A, {
        className: h.TQ,
        transparent: !0,
        children: [
            (0, i.jsxs)("div", {
                className: h.Wc,
                children: [
                    (0, i.jsxs)("div", {
                        className: h.wG,
                        children: [
                            (0, i.jsx)(r.tvc, { className: h.nE, colorClass: h.oG }),
                            (0, i.jsx)("div", {
                                className: h.zc,
                                children: E.map((e) => {
                                    let t = n === e.id,
                                        s = p[e.id];
                                    return (0, i.jsxs)(
                                        r.DUT,
                                        {
                                            className: h.S0,
                                            onClick: e.scrollToSection,
                                            children: [
                                                (0, i.jsx)(r.Text, {
                                                    variant: "text-sm/medium",
                                                    color: "text-strong",
                                                    children: s,
                                                }),
                                                t && (0, i.jsx)("div", { className: h.W0 }),
                                            ],
                                        },
                                        s,
                                    );
                                }),
                            }),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: h.MQ,
                        children: [
                            f && (0, i.jsx)(m.l, { ref: S, size: "sm", location: a.A.PREMIUM_WISHLIST_MARKETING_PAGE }),
                            (0, i.jsx)(u.A, { size: "sm", variant: "overlay-secondary" }),
                        ],
                    }),
                ],
            }),
            f && A && (0, i.jsx)(_.O, { targetElementRef: S }),
        ],
    });
};
