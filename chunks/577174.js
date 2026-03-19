n.d(t, { A: () => x });
var i = n(627968),
    s = n(64700),
    l = n(311907),
    a = n(397927),
    r = n(742589),
    o = n(909536),
    d = n(287809),
    c = n(65470),
    u = n(400669),
    _ = n(736455),
    m = n(876587),
    g = n(985018),
    A = n(798294);
let x = (e) => {
    let { navBarSections: t, activeSectionId: n } = e,
        x = {
            [_.k.HOME]: g.intl.string(g.t.uGRXjS),
            [_.k.WHATS_NEW]: g.intl.string(g.t["mfcR/v"]),
            [_.k.BEST_OF_NITRO]: g.intl.string(g.t.xQKkE8),
            [_.k.PLANS]: g.intl.string(g.t.wyNMnm),
            [_.k.COMPARE]: g.intl.string(g.t.pwD7If),
        },
        h = (0, l.bG)([d.default], () => d.default.getCurrentUser()),
        p = (0, o.Gh)("premium_marketing_nav_bar") && null != h,
        T = s.useRef(null),
        E = Object.values(t).sort((e, t) => e.order - t.order);
    return (0, i.jsxs)(r.A, {
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
                                children: E.map((e) => {
                                    let t = n === e.id,
                                        s = x[e.id];
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
                            p && (0, i.jsx)(u.l, { ref: T, size: "sm" }),
                            (0, i.jsx)(c.A, { size: "sm", variant: "overlay-secondary" }),
                        ],
                    }),
                ],
            }),
            p && (0, i.jsx)(m.O, { targetElementRef: T }),
        ],
    });
};
