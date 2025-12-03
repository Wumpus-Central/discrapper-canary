n.d(t, { Z: () => d }), n(642613);
var r = n(54381);
n(473749);
var i = n(481060),
    a = n(984370),
    o = n(117791),
    s = n(664134),
    l = n(388032),
    c = n(648685);
let u = (e) => Object.values(e).sort((e, t) => e.order - t.order),
    d = (e) => {
        let { navBarSections: t, activeSectionId: n } = e,
            d = {
                [s.h.HOME]: l.intl.string(l.t.uGRXjS),
                [s.h.WHATS_NEW]: l.intl.string(l.t["mfcR/v"]),
                [s.h.BEST_OF_NITRO]: l.intl.string(l.t.xQKkE8),
                [s.h.PLANS]: l.intl.string(l.t.wyNMnm),
                [s.h.COMPARE]: l.intl.string(l.t.pwD7If),
            },
            f = u(t);
        return (0, r.jsx)(a.Z, {
            className: c.navBar,
            transparent: !0,
            children: (0, r.jsxs)("div", {
                className: c.navBarContent,
                children: [
                    (0, r.jsxs)("div", {
                        className: c.navBarSectionContentContainer,
                        children: [
                            (0, r.jsx)(i.SrA, {
                                className: c.nitroWheelIcon,
                                colorClass: c.nitroWheelIconColor,
                            }),
                            (0, r.jsx)("div", {
                                className: c.navBarSectionContent,
                                children: f.map((e) => {
                                    let t = n === e.id,
                                        a = d[e.id];
                                    return (0, r.jsxs)(
                                        i.P3F,
                                        {
                                            className: c.sectionClickable,
                                            onClick: e.scrollToSection,
                                            children: [
                                                (0, r.jsx)(i.Text, {
                                                    variant: "text-sm/medium",
                                                    color: "text-strong",
                                                    children: a,
                                                }),
                                                t && (0, r.jsx)("div", { className: c.sectionUnderline }),
                                            ],
                                        },
                                        a,
                                    );
                                }),
                            }),
                        ],
                    }),
                    (0, r.jsx)(o.Z, {
                        size: "sm",
                        variant: "overlay-secondary",
                    }),
                ],
            }),
        });
    };
