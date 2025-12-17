n.d(t, { Z: () => p });
var r = n(54381),
    i = n(481060),
    l = n(455357),
    a = n(210724),
    o = n(130653),
    s = n(388032),
    c = n(683103),
    u = n(279770),
    d = n(566888);
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
                    children: s.intl.string(s.t.rjVPdM),
                }),
                (0, r.jsx)("div", {
                    className: u.fixedBarContainer,
                    children: (0, r.jsx)("div", {
                        className: u.fixedBarWrapper,
                        children: (0, r.jsx)("div", {
                            className: d.panels,
                            children: (0, r.jsx)(o.Z, {
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
