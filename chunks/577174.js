n.d(t, { A: () => A });
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
    x = n(320519);
let A = (e) => {
    let { navBarSections: t, activeSectionId: n } = e,
        A = {
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
        className: x.TQ,
        transparent: !0,
        children: [
            (0, i.jsxs)("div", {
                className: x.Wc,
                children: [
                    (0, i.jsxs)("div", {
                        className: x.wG,
                        children: [
                            (0, i.jsx)(a.tvc, { className: x.nE, colorClass: x.oG }),
                            (0, i.jsx)("div", {
                                className: x.zc,
                                children: f.map((e) => {
                                    let t = n === e.id,
                                        s = A[e.id];
                                    return (0, i.jsxs)(
                                        a.DUT,
                                        {
                                            className: x.S0,
                                            onClick: e.scrollToSection,
                                            children: [
                                                (0, i.jsx)(a.Text, {
                                                    variant: "text-sm/medium",
                                                    color: "text-strong",
                                                    children: s,
                                                }),
                                                t && (0, i.jsx)("div", { className: x.W0 }),
                                            ],
                                        },
                                        s,
                                    );
                                }),
                            }),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: x.MQ,
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
