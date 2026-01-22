n.d(t, {
    A: () => d,
}),
    n(638769);
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(742589),
    s = n(65470),
    o = n(716442),
    l = n(985018),
    c = n(547629);
let u = (e) => Object.values(e).sort((e, t) => e.order - t.order),
    d = (e) => {
        let { navBarSections: t, activeSectionId: n } = e,
            d = {
                [o.k.HOME]: l.intl.string(l.t.uGRXjS),
                [o.k.WHATS_NEW]: l.intl.string(l.t["mfcR/v"]),
                [o.k.BEST_OF_NITRO]: l.intl.string(l.t.xQKkE8),
                [o.k.PLANS]: l.intl.string(l.t.wyNMnm),
                [o.k.COMPARE]: l.intl.string(l.t.pwD7If),
            },
            f = u(t);
        return (0, r.jsx)(a.A, {
            className: c.TQ,
            transparent: !0,
            children: (0, r.jsxs)("div", {
                className: c.Wc,
                children: [
                    (0, r.jsxs)("div", {
                        className: c.wG,
                        children: [
                            (0, r.jsx)(i.tvc, {
                                className: c.nE,
                                colorClass: c.oG,
                            }),
                            (0, r.jsx)("div", {
                                className: c.zc,
                                children: f.map((e) => {
                                    let t = n === e.id,
                                        a = d[e.id];
                                    return (0, r.jsxs)(
                                        i.DUT,
                                        {
                                            className: c.S0,
                                            onClick: e.scrollToSection,
                                            children: [
                                                (0, r.jsx)(i.Text, {
                                                    variant: "text-sm/medium",
                                                    color: "text-strong",
                                                    children: a,
                                                }),
                                                t &&
                                                    (0, r.jsx)("div", {
                                                        className: c.W0,
                                                    }),
                                            ],
                                        },
                                        a,
                                    );
                                }),
                            }),
                        ],
                    }),
                    (0, r.jsx)(s.A, {
                        size: "sm",
                        variant: "overlay-secondary",
                    }),
                ],
            }),
        });
    };
