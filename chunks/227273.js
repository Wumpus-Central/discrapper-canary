n.d(t, { A: () => T });
var i = n(627968),
    s = n(64700),
    r = n(503698),
    a = n.n(r),
    l = n(417597),
    o = n(397927),
    c = n(775602),
    d = n(793574),
    u = n(688810),
    _ = n(800172),
    m = n(953143),
    A = n(954571),
    g = n(52167),
    E = n(652215),
    h = n(985018),
    p = n(657989);
let C = (e) => {
        let { isShowingAll: t, onClick: n } = e;
        return (0, i.jsxs)(o.DUT, {
            onClick: n,
            className: p.customButton,
            children: [
                t ? h.intl.string(h.t.maZaN3) : h.intl.string(h.t["37C26f"]),
                t
                    ? (0, i.jsx)(o.tN5, { size: "md", color: "currentColor", className: p.arrow })
                    : (0, i.jsx)(o.abt, { size: "md", color: "currentColor", className: p.arrow }),
            ],
        });
    },
    x = (e) => {
        let {
                title: t,
                description: n,
                className: s,
                imageSource: r,
                imageClassName: l,
                titleBadge: c,
                isNew: A = !1,
                isEarlyAccess: g = !1,
            } = e,
            { analyticsLocations: E } = (0, u.Ay)(d.A.PREMIUM_MARKETING_PERK_CARD);
        return (0, i.jsx)(u.f5, {
            value: E,
            children: (0, i.jsxs)("div", {
                className: a()(p.perkCard, s),
                children: [
                    A
                        ? (0, i.jsx)(m.A, {
                              className: p.perkCardNewBadge,
                              shouldInheritBackgroundColor: !0,
                              shouldInheritTextColor: !0,
                          })
                        : null,
                    g ? (0, i.jsx)(_.A, { className: p.perkCardEarlyAccessBadge }) : null,
                    (0, i.jsx)("img", { src: r, alt: "", className: a()(l, p.perksCardArt) }),
                    (0, i.jsxs)("div", {
                        children: [
                            (0, i.jsxs)(o.Heading, {
                                variant: "heading-lg/extrabold",
                                className: p.perkCardHeading,
                                children: [t, " ", c],
                            }),
                            (0, i.jsx)(o.Text, {
                                variant: "text-sm/normal",
                                className: p.perkCardDescription,
                                children: "function" == typeof n ? n(E) : n,
                            }),
                        ],
                    }),
                ],
            }),
        });
    },
    T = (e) => {
        let { className: t, isSubscriberNitroHome: n = !1 } = e,
            [r, d] = s.useState(!1),
            _ = (0, g.d)({ styles: p }),
            m = (0, l.bG)([c.A], () => c.A.useReducedMotion),
            { analyticsLocations: T } = (0, u.Ay)(),
            I = [
                _.emoji,
                _.streaming,
                _.upload,
                _.customAppIcons,
                _.soundboard,
                _.videoBackground,
                _.superReactions,
                _.stickersPremiumPerk,
                _.badgeAlt,
            ];
        return (0, i.jsxs)("div", {
            className: a()(p.perksContainer, t, {
                [p.partiallyHidden]: n && !r,
                [p.subscriberNitroHome]: n,
                [p.reducedMotion]: m,
            }),
            children: [
                (0, i.jsx)(o.Heading, {
                    variant: "heading-xxl/extrabold",
                    className: p.perksTitle,
                    children: n ? h.intl.string(h.t.QX14gI) : h.intl.string(h.t.RGadQR),
                }),
                (0, i.jsx)("div", {
                    className: a()(p.perkCardContainer, { [p.perkCardContainerExpanded]: r }),
                    children: I.map((e) => null != e && (0, i.jsx)(x, { ...e }, e.title)),
                }),
                n &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)("div", {
                                className: a()({ [p.sizeGizmo]: !r, [p.sizeGizmoExpanded]: r }),
                                children: (0, i.jsx)(C, {
                                    onClick: () => {
                                        A.default.track(E.HAw.PREMIUM_MARKETING_PERKS_SEE_ALL_CLICKED, {
                                            location_stack: T,
                                            was_expanded: r,
                                        }),
                                            d(!r);
                                    },
                                    isShowingAll: r,
                                }),
                            }),
                            (0, i.jsx)("div", { className: a()(p.cover, { [p.hidden]: r }) }),
                        ],
                    }),
            ],
        });
    };
