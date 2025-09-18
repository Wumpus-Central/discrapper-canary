n.d(t, { Z: () => d });
var r = n(951288),
    i = n(481060),
    a = n(210724),
    o = n(130653),
    s = n(78826),
    l = n(818923),
    c = n(805832),
    u = n(981028);
let d = function (e) {
    let { quest: t } = e;
    return (0, r.jsx)("div", {
        className: l.previewBackground,
        children: (0, r.jsxs)("div", {
            className: c.barCard,
            children: [
                (0, r.jsx)(i.X6q, {
                    className: c.barHeading,
                    variant: "heading-md/semibold",
                    children: "Quest Bar",
                }),
                (0, r.jsx)("div", {
                    className: c.fixedBarContainer,
                    children: (0, r.jsx)("div", {
                        className: c.fixedBarWrapper,
                        children: (0, r.jsx)("div", {
                            className: u.panels,
                            children: (0, r.jsx)(o.Z, {
                                children: (0, r.jsx)(s.p, {
                                    source: "preview",
                                    questId: t.id,
                                    children: (0, r.jsx)(a.P, { quest: t }),
                                }),
                            }),
                        }),
                    }),
                }),
            ],
        }),
    });
};
