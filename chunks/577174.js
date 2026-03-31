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
    m = n(736455),
    g = n(876587),
    _ = n(985018),
    A = n(69894);
let x = (e) => {
    let { navBarSections: t, activeSectionId: n } = e,
        x = {
            [m.k.HOME]: _.intl.string(_.t.uGRXjS),
            [m.k.WHATS_NEW]: _.intl.string(_.t["mfcR/v"]),
            [m.k.BEST_OF_NITRO]: _.intl.string(_.t.xQKkE8),
            [m.k.PLANS]: _.intl.string(_.t.wyNMnm),
            [m.k.COMPARE]: _.intl.string(_.t.pwD7If),
        },
        h = (0, l.bG)([d.default], () => d.default.getCurrentUser()),
        p = (0, o.Gh)("premium_marketing_nav_bar") && null != h,
        T = s.useRef(null),
        f = Object.values(t).sort((e, t) => e.order - t.order);
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
                                children: f.map((e) => {
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
            p && (0, i.jsx)(g.O, { targetElementRef: T }),
        ],
    });
};
