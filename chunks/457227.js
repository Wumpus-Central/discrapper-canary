(n.d(t, { Z: () => m }), n(642613));
var i = n(255367);
n(73800);
var r = n(120356),
    s = n.n(r),
    a = n(481060),
    l = n(984370),
    o = n(117791),
    c = n(664134),
    d = n(60503);
let u = (e) => Object.values(e).sort((e, t) => e.order - t.order),
    m = (e) => {
        let { navBarSections: t, activeSectionId: n } = e,
            r = u(t);
        return (0, i.jsx)(l.Z, {
            className: d.navBar,
            transparent: !0,
            children: (0, i.jsxs)('div', {
                className: d.navBarContent,
                children: [
                    (0, i.jsxs)('div', {
                        className: d.navBarSectionContentContainer,
                        children: [
                            (0, i.jsx)(a.SrA, { className: d.nitroWheelIcon }),
                            (0, i.jsx)('div', {
                                className: d.navBarSectionContent,
                                children: r.map((e) => {
                                    let t = n === e.id,
                                        r = c.C[e.id];
                                    return (0, i.jsxs)(
                                        a.P3F,
                                        {
                                            className: d.sectionClickable,
                                            onClick: e.scrollToSection,
                                            children: [
                                                (0, i.jsx)(a.Text, {
                                                    variant: 'text-sm/medium',
                                                    color: 'text-primary',
                                                    children: r
                                                }),
                                                t && (0, i.jsx)('div', { className: s()(d.sectionUnderline, d.fadeIn) })
                                            ]
                                        },
                                        r
                                    );
                                })
                            })
                        ]
                    }),
                    (0, i.jsx)(o.Z, {
                        size: 'sm',
                        variant: 'secondary'
                    })
                ]
            })
        });
    };
