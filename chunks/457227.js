(n.d(t, { Z: () => d }), n(642613));
var i = n(255367);
n(73800);
var r = n(481060),
    s = n(984370),
    a = n(117791),
    l = n(664134),
    o = n(60503);
let c = (e) => Object.values(e).sort((e, t) => e.order - t.order),
    d = (e) => {
        let { navBarSections: t, activeSectionId: n } = e,
            d = c(t);
        return (0, i.jsx)(s.Z, {
            className: o.navBar,
            transparent: !0,
            children: (0, i.jsxs)('div', {
                className: o.navBarContent,
                children: [
                    (0, i.jsxs)('div', {
                        className: o.navBarSectionContentContainer,
                        children: [
                            (0, i.jsx)(r.SrA, { className: o.nitroWheelIcon }),
                            (0, i.jsx)('div', {
                                className: o.navBarSectionContent,
                                children: d.map((e) => {
                                    let t = n === e.id,
                                        s = l.C[e.id];
                                    return (0, i.jsxs)(
                                        r.P3F,
                                        {
                                            className: o.sectionClickable,
                                            onClick: e.scrollToSection,
                                            children: [
                                                (0, i.jsx)(r.Text, {
                                                    variant: 'text-sm/medium',
                                                    color: 'text-primary',
                                                    children: s
                                                }),
                                                t && (0, i.jsx)('div', { className: o.sectionUnderline })
                                            ]
                                        },
                                        s
                                    );
                                })
                            })
                        ]
                    }),
                    (0, i.jsx)(a.Z, {
                        size: 'sm',
                        variant: 'secondary'
                    })
                ]
            })
        });
    };
