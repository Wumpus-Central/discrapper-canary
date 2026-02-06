n.d(t, { A: () => d });
var i = n(627968);
n(64700);
var s = n(397927),
    a = n(742589),
    l = n(65470),
    r = n(736455),
    o = n(985018),
    c = n(731176);
let d = (e) => {
    let { navBarSections: t, activeSectionId: n } = e,
        d = {
            [r.k.HOME]: o.intl.string(o.t.uGRXjS),
            [r.k.WHATS_NEW]: o.intl.string(o.t["mfcR/v"]),
            [r.k.BEST_OF_NITRO]: o.intl.string(o.t.xQKkE8),
            [r.k.PLANS]: o.intl.string(o.t.wyNMnm),
            [r.k.COMPARE]: o.intl.string(o.t.pwD7If),
        },
        u = Object.values(t).sort((e, t) => e.order - t.order);
    return (0, i.jsx)(a.A, {
        className: c.TQ,
        transparent: !0,
        children: (0, i.jsxs)("div", {
            className: c.Wc,
            children: [
                (0, i.jsxs)("div", {
                    className: c.wG,
                    children: [
                        (0, i.jsx)(s.tvc, { className: c.nE, colorClass: c.oG }),
                        (0, i.jsx)("div", {
                            className: c.zc,
                            children: u.map((e) => {
                                let t = n === e.id,
                                    a = d[e.id];
                                return (0, i.jsxs)(
                                    s.DUT,
                                    {
                                        className: c.S0,
                                        onClick: e.scrollToSection,
                                        children: [
                                            (0, i.jsx)(s.Text, {
                                                variant: "text-sm/medium",
                                                color: "text-strong",
                                                children: a,
                                            }),
                                            t && (0, i.jsx)("div", { className: c.W0 }),
                                        ],
                                    },
                                    a,
                                );
                            }),
                        }),
                    ],
                }),
                (0, i.jsx)(l.A, { size: "sm", variant: "overlay-secondary" }),
            ],
        }),
    });
};
