n.d(t, { A: () => h });
var i = n(627968),
    s = n(64700),
    l = n(311907),
    a = n(397927),
    r = n(793574),
    o = n(742589),
    d = n(909536),
    c = n(287809),
    u = n(65470),
    m = n(400669),
    g = n(736455),
    _ = n(876587),
    x = n(985018),
    A = n(69894);
let h = (e) => {
    let { navBarSections: t, activeSectionId: n } = e,
        h = {
            [g.k.HOME]: x.intl.string(x.t.uGRXjS),
            [g.k.WHATS_NEW]: x.intl.string(x.t["mfcR/v"]),
            [g.k.BEST_OF_NITRO]: x.intl.string(x.t.xQKkE8),
            [g.k.PLANS]: x.intl.string(x.t.wyNMnm),
            [g.k.COMPARE]: x.intl.string(x.t.pwD7If),
        },
        p = (0, l.bG)([c.default], () => c.default.getCurrentUser()),
        T = (0, d.Gh)("premium_marketing_nav_bar") && null != p,
        f = s.useRef(null),
        S = Object.values(t).sort((e, t) => e.order - t.order);
    return (0, i.jsxs)(o.A, {
        className: A.TQ,
        transparent: !0,
        children: [
            (0, i.jsxs)("div", {
                className: A.Wc,
                children: [
                    (0, i.jsxs)("div", {
                        className: A.wG,
                        children: [
                            (0, i.jsx)(a.tvc, { className: A.nE, colorClass: A.oG }),
                            (0, i.jsx)("div", {
                                className: A.zc,
                                children: S.map((e) => {
                                    let t = n === e.id,
                                        s = h[e.id];
                                    return (0, i.jsxs)(
                                        a.DUT,
                                        {
                                            className: A.S0,
                                            onClick: e.scrollToSection,
                                            children: [
                                                (0, i.jsx)(a.Text, {
                                                    variant: "text-sm/medium",
                                                    color: "text-strong",
                                                    children: s,
                                                }),
                                                t && (0, i.jsx)("div", { className: A.W0 }),
                                            ],
                                        },
                                        s,
                                    );
                                }),
                            }),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: A.MQ,
                        children: [
                            T && (0, i.jsx)(m.l, { ref: f, size: "sm", location: r.A.PREMIUM_WISHLIST_MARKETING_PAGE }),
                            (0, i.jsx)(u.A, { size: "sm", variant: "overlay-secondary" }),
                        ],
                    }),
                ],
            }),
            T && (0, i.jsx)(_.O, { targetElementRef: f }),
        ],
    });
};
