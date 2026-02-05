n.d(t, { A: () => l });
var i = n(627968);
n(64700);
var s = n(397927),
    r = n(985018),
    a = n(87078);
let l = function (e) {
    let { hasGuildBoostSlots: t, hasAppliedGuildBoosts: l, hasBoostPerk: o, canAddBoosts: c } = e;
    return (0, i.jsxs)("div", {
        className: a.iE,
        children: [
            (0, i.jsx)("div", {
                className: a.bj,
                children: (0, i.jsx)("img", { alt: "", className: a.KV, src: n(960954) }),
            }),
            (0, i.jsxs)("div", {
                className: a.D7,
                children: [
                    (0, i.jsx)(s.Heading, {
                        variant: "display-md",
                        className: a.R_,
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
                                        ? r.intl.format(r.t.s9zQyG, {})
                                        : r.intl.format(r.t.Rb8Jhs, {})
                                    : r.intl.string(r.t["2rh0by"])
                                : r.intl.format(r.t.Rb8Jhs, {});
                        })({ hasGuildBoostSlots: t, hasBoostPerk: o, hasAppliedGuildBoosts: l, canAddBoosts: c }),
                    }),
                    (0, i.jsx)("svg", {
                        viewBox: "0 0 660 210",
                        className: a.Mz,
                        children: (0, i.jsx)("path", {
                            d: "M101.3,45.5C57.5,45.9,15.9,82.2,0,99.5V210h660V53.5c-164-137-265.2,32.4-385.8,33.6  C177.7,88.1,158.1,45,101.3,45.5z",
                        }),
                    }),
                ],
            }),
        ],
    });
};
