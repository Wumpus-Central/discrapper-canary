n.d(t, { A: () => a });
var i = n(627968);
n(64700);
var s = n(397927),
    l = n(985018),
    r = n(87078);
let a = function (e) {
    let { hasGuildBoostSlots: t, hasAppliedGuildBoosts: a, hasBoostPerk: o, canAddBoosts: d } = e;
    return (0, i.jsxs)("div", {
        className: r.iE,
        children: [
            (0, i.jsx)("div", {
                className: r.bj,
                children: (0, i.jsx)("img", { alt: "", className: r.KV, src: n(960954) }),
            }),
            (0, i.jsxs)("div", {
                className: r.D7,
                children: [
                    (0, i.jsx)(s.Heading, {
                        variant: "display-md",
                        className: r.R_,
                        children: (function (e) {
                            let {
                                hasGuildBoostSlots: t,
                                hasAppliedGuildBoosts: n,
                                hasBoostPerk: i,
                                canAddBoosts: s,
                            } = e;
                            return s
                                ? t
                                    ? i && !n
                                        ? l.intl.format(l.t.s9zQyG, {})
                                        : l.intl.format(l.t.Rb8Jhs, {})
                                    : l.intl.string(l.t["2rh0by"])
                                : l.intl.format(l.t.Rb8Jhs, {});
                        })({ hasGuildBoostSlots: t, hasBoostPerk: o, hasAppliedGuildBoosts: a, canAddBoosts: d }),
                    }),
                    (0, i.jsx)("svg", {
                        viewBox: "0 0 660 210",
                        className: r.Mz,
                        children: (0, i.jsx)("path", {
                            d: "M101.3,45.5C57.5,45.9,15.9,82.2,0,99.5V210h660V53.5c-164-137-265.2,32.4-385.8,33.6  C177.7,88.1,158.1,45,101.3,45.5z",
                        }),
                    }),
                ],
            }),
        ],
    });
};
