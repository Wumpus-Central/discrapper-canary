n.d(t, { Z: () => p });
var r = n(54381),
    i = n(481060),
    l = n(455357),
    a = n(210724),
    s = n(130653),
    o = n(388032),
    c = n(818923),
    u = n(805832),
    d = n(822338);
let p = function (e) {
    let { quest: t } = e;
    return (0, r.jsx)("div", {
        className: c.previewBackground,
        children: (0, r.jsxs)("div", {
            className: u.barCard,
            children: [
                (0, r.jsx)(i.Heading, {
                    className: u.barHeading,
                    variant: "heading-md/semibold",
                    children: o.intl.string(o.t.rjVPdM),
                }),
                (0, r.jsx)("div", {
                    className: u.fixedBarContainer,
                    children: (0, r.jsx)("div", {
                        className: u.fixedBarWrapper,
                        children: (0, r.jsx)("div", {
                            className: d.panels,
                            children: (0, r.jsx)(s.Z, {
                                children: (0, r.jsx)(l.x8, {
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
