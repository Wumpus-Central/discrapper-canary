(n.d(t, { Z: () => u }), n(642613));
var i = n(255367);
n(73800);
var r = n(120356),
    s = n.n(r),
    l = n(481060),
    a = n(984370),
    o = n(664134),
    c = n(60503);
let d = (e) => Object.values(e).sort((e, t) => e.order - t.order),
    u = (e) => {
        let { navBarSections: t, activeSectionId: n } = e,
            r = d(t);
        return (0, i.jsxs)(a.Z, {
            className: c.navBar,
            children: [
                (0, i.jsx)(l.SrA, { className: c.nitroWheelIcon }),
                (0, i.jsx)('div', {
                    className: c.navBarContent,
                    children: r.map((e) => {
                        let t = n === e.id,
                            r = o.C[e.id];
                        return (0, i.jsxs)(
                            l.P3F,
                            {
                                className: c.sectionClickable,
                                onClick: e.scrollToSection,
                                children: [
                                    (0, i.jsx)(l.Text, {
                                        variant: 'text-sm/medium',
                                        color: 'text-primary',
                                        children: r
                                    }),
                                    t && (0, i.jsx)('div', { className: s()(c.sectionUnderline, c.fadeIn) })
                                ]
                            },
                            r
                        );
                    })
                })
            ]
        });
    };
