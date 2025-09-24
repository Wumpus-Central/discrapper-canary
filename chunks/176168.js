n.d(t, { Z: () => f });
var r = n(951288),
    i = n(481060),
    a = n(210724),
    o = n(130653),
    s = n(78826),
    l = n(388032),
    c = n(818923),
    u = n(805832),
    d = n(981028);
let f = function (e) {
    let { quest: t } = e;
    return (0, r.jsx)("div", {
        className: c.previewBackground,
        children: (0, r.jsxs)("div", {
            className: u.barCard,
            children: [
                (0, r.jsx)(i.X6q, {
                    className: u.barHeading,
                    variant: "heading-md/semibold",
                    children: l.intl.string(l.t.dCHFNT),
                }),
                (0, r.jsx)("div", {
                    className: u.fixedBarContainer,
                    children: (0, r.jsx)("div", {
                        className: u.fixedBarWrapper,
                        children: (0, r.jsx)("div", {
                            className: d.panels,
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
