n.d(t, {
    A: () => a,
});
var r = n(627968);
n(64700);
var i = n(397927),
    l = n(985018),
    s = n(87078);
let a = function (e) {
    let { hasGuildBoostSlots: t, hasAppliedGuildBoosts: a, hasBoostPerk: o, canAddBoosts: c } = e;
    return (0, r.jsxs)("div", {
        className: s.iE,
        children: [
            (0, r.jsx)("div", {
                className: s.bj,
                children: (0, r.jsx)("img", {
                    alt: "",
                    className: s.KV,
                    src: n(960954),
                }),
            }),
            (0, r.jsxs)("div", {
                className: s.D7,
                children: [
                    (0, r.jsx)(i.Heading, {
                        variant: "display-md",
                        className: s.R_,
                        children: (function (e) {
                            let {
                                hasGuildBoostSlots: t,
                                hasAppliedGuildBoosts: n,
                                hasBoostPerk: r,
                                canAddBoosts: i,
                            } = e;
                            return i
                                ? t
                                    ? r && !n
                                        ? l.intl.format(l.t.s9zQyG, {})
                                        : l.intl.format(l.t.Rb8Jhs, {})
                                    : l.intl.string(l.t["2rh0by"])
                                : l.intl.format(l.t.Rb8Jhs, {});
                        })({
                            hasGuildBoostSlots: t,
                            hasBoostPerk: o,
                            hasAppliedGuildBoosts: a,
                            canAddBoosts: c,
                        }),
                    }),
                    (0, r.jsx)("svg", {
                        viewBox: "0 0 660 210",
                        className: s.Mz,
                        children: (0, r.jsx)("path", {
                            d: "M101.3,45.5C57.5,45.9,15.9,82.2,0,99.5V210h660V53.5c-164-137-265.2,32.4-385.8,33.6  C177.7,88.1,158.1,45,101.3,45.5z",
                        }),
                    }),
                ],
            }),
        ],
    });
};
