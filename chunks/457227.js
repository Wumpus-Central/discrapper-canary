(n.d(t, { Z: () => u }), n(642613));
var i = n(255367);
n(73800);
var r = n(481060),
    s = n(984370),
    a = n(117791),
    l = n(664134),
    o = n(388032),
    c = n(60503);
let d = (e) => Object.values(e).sort((e, t) => e.order - t.order),
    u = (e) => {
        let { navBarSections: t, activeSectionId: n } = e,
            u = {
                [l.h.HOME]: o.intl.string(o.t.uGRXjY),
                [l.h.WHATS_NEW]: o.intl.string(o.t['mfcR/v']),
                [l.h.BEST_OF_NITRO]: o.intl.string(o.t.xQKkEx),
                [l.h.PLANS]: o.intl.string(o.t.wyNMnp),
                [l.h.COMPARE]: o.intl.string(o.t.pwD7IS)
            },
            m = d(t);
        return (0, i.jsx)(s.Z, {
            className: c.navBar,
            transparent: !0,
            children: (0, i.jsxs)('div', {
                className: c.navBarContent,
                children: [
                    (0, i.jsxs)('div', {
                        className: c.navBarSectionContentContainer,
                        children: [
                            (0, i.jsx)(r.SrA, {
                                className: c.nitroWheelIcon,
                                colorClass: c.nitroWheelIconColor
                            }),
                            (0, i.jsx)('div', {
                                className: c.navBarSectionContent,
                                children: m.map((e) => {
                                    let t = n === e.id,
                                        s = u[e.id];
                                    return (0, i.jsxs)(
                                        r.P3F,
                                        {
                                            className: c.sectionClickable,
                                            onClick: e.scrollToSection,
                                            children: [
                                                (0, i.jsx)(r.Text, {
                                                    variant: 'text-sm/medium',
                                                    color: 'text-primary',
                                                    children: s
                                                }),
                                                t && (0, i.jsx)('div', { className: c.sectionUnderline })
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
                        variant: 'overlay-secondary'
                    })
                ]
            })
        });
    };
