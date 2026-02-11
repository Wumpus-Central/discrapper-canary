n.d(t, { A: () => r });
var i = n(627968);
n(64700);
var s = n(397927),
    a = n(985018),
    l = n(777820);
let r = function (e) {
    let { hasGuildBoostSlots: t, hasAppliedGuildBoosts: r, hasBoostPerk: o, canAddBoosts: c } = e;
    return (0, i.jsxs)("div", {
        className: l.iE,
        children: [
            (0, i.jsx)("div", {
                className: l.bj,
                children: (0, i.jsx)("img", { alt: "", className: l.KV, src: n(960954) }),
            }),
            (0, i.jsxs)("div", {
                className: l.D7,
                children: [
                    (0, i.jsx)(s.Heading, {
                        variant: "display-md",
                        className: l.R_,
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
                                        ? a.intl.format(a.t.s9zQyG, {})
                                        : a.intl.format(a.t.Rb8Jhs, {})
                                    : a.intl.string(a.t["2rh0by"])
                                : a.intl.format(a.t.Rb8Jhs, {});
                        })({ hasGuildBoostSlots: t, hasBoostPerk: o, hasAppliedGuildBoosts: r, canAddBoosts: c }),
                    }),
                    (0, i.jsx)("svg", {
                        viewBox: "0 0 660 210",
                        className: l.Mz,
                        children: (0, i.jsx)("path", {
                            d: "M101.3,45.5C57.5,45.9,15.9,82.2,0,99.5V210h660V53.5c-164-137-265.2,32.4-385.8,33.6  C177.7,88.1,158.1,45,101.3,45.5z",
                        }),
                    }),
                ],
            }),
        ],
    });
};
