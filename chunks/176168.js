n.d(t, { Z: () => p });
var r = n(951288),
    i = n(481060),
    l = n(210724),
    a = n(130653),
    o = n(78826),
    s = n(388032),
    c = n(818923),
    u = n(805832),
    d = n(981028);
let p = function (e) {
    let { quest: t } = e;
    return (0, r.jsx)("div", {
        className: c.previewBackground,
        children: (0, r.jsxs)("div", {
            className: u.barCard,
            children: [
                (0, r.jsx)(i.X6q, {
                    className: u.barHeading,
                    variant: "heading-md/semibold",
                    children: s.intl.string(s.t.rjVPdH),
                }),
                (0, r.jsx)("div", {
                    className: u.fixedBarContainer,
                    children: (0, r.jsx)("div", {
                        className: u.fixedBarWrapper,
                        children: (0, r.jsx)("div", {
                            className: d.panels,
                            children: (0, r.jsx)(a.Z, {
                                children: (0, r.jsx)(o.p, {
                                    source: "preview",
                                    questId: t.id,
                                    children: (0, r.jsx)(l.P, { quest: t }),
                                }),
                            }),
                        }),
                    }),
                }),
            ],
        }),
    });
};
