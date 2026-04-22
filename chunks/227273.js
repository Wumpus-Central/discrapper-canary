s.d(t, { A: () => T });
var r = s(627968),
    a = s(64700),
    i = s(503698),
    n = s.n(i),
    l = s(417597),
    o = s(534514),
    c = s(939249),
    d = s(900797),
    m = s(847374),
    u = s(834730),
    _ = s(775602),
    x = s(793574),
    p = s(688810),
    g = s(800172),
    h = s(953143),
    f = s(954571),
    C = s(52167),
    b = s(652215),
    j = s(985018),
    A = s(732302);
let N = (e) => {
        let { isShowingAll: t, onClick: s } = e;
        return (0, r.jsxs)(c.D, {
            onClick: s,
            className: A.customButton,
            children: [
                t ? j.intl.string(j.t.maZaN3) : j.intl.string(j.t["37C26f"]),
                t
                    ? (0, r.jsx)(d.t, { size: "md", color: "currentColor", className: A.arrow })
                    : (0, r.jsx)(m.a, { size: "md", color: "currentColor", className: A.arrow }),
            ],
        });
    },
    I = (e) => {
        let {
                title: t,
                description: s,
                className: a,
                imageSource: i,
                imageClassName: l,
                titleBadge: c,
                isNew: d = !1,
                isEarlyAccess: m = !1,
            } = e,
            { analyticsLocations: _ } = (0, p.Ay)(x.A.PREMIUM_MARKETING_PERK_CARD);
        return (0, r.jsx)(p.f5, {
            value: _,
            children: (0, r.jsxs)("div", {
                className: n()(A.perkCard, a),
                children: [
                    d
                        ? (0, r.jsx)(h.A, {
                              className: A.perkCardNewBadge,
                              shouldInheritBackgroundColor: !0,
                              shouldInheritTextColor: !0,
                          })
                        : null,
                    m ? (0, r.jsx)(g.A, { className: A.perkCardEarlyAccessBadge }) : null,
                    (0, r.jsx)("img", { src: i, alt: "", className: n()(l, A.perksCardArt) }),
                    (0, r.jsxs)("div", {
                        children: [
                            (0, r.jsxs)(o.D, {
                                variant: "heading-lg/extrabold",
                                className: A.perkCardHeading,
                                children: [t, " ", c],
                            }),
                            (0, r.jsx)(u.E, {
                                variant: "text-sm/normal",
                                className: A.perkCardDescription,
                                children: "function" == typeof s ? s(_) : s,
                            }),
                        ],
                    }),
                ],
            }),
        });
    },
    T = (e) => {
        let { className: t, isSubscriberNitroHome: s = !1 } = e,
            [i, c] = a.useState(!1),
            d = (0, C.d)({ styles: A }),
            m = (0, l.bG)([_.A], () => _.A.useReducedMotion),
            { analyticsLocations: u } = (0, p.Ay)(),
            x = [
                d.emoji,
                d.streaming,
                d.upload,
                d.customAppIcons,
                d.soundboard,
                d.videoBackground,
                d.superReactions,
                d.stickersPremiumPerk,
                d.badgeAlt,
            ];
        return (0, r.jsxs)("div", {
            className: n()(A.perksContainer, t, {
                [A.partiallyHidden]: s && !i,
                [A.subscriberNitroHome]: s,
                [A.reducedMotion]: m,
            }),
            children: [
                (0, r.jsx)(o.D, {
                    variant: "heading-xxl/extrabold",
                    className: A.perksTitle,
                    children: s ? j.intl.string(j.t.QX14gI) : j.intl.string(j.t.RGadQR),
                }),
                (0, r.jsx)("div", {
                    className: n()(A.perkCardContainer, { [A.perkCardContainerExpanded]: i }),
                    children: x.map((e) => null != e && (0, r.jsx)(I, { ...e }, e.title)),
                }),
                s &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)("div", {
                                className: n()({ [A.sizeGizmo]: !i, [A.sizeGizmoExpanded]: i }),
                                children: (0, r.jsx)(N, {
                                    onClick: () => {
                                        f.default.track(b.HAw.PREMIUM_MARKETING_PERKS_SEE_ALL_CLICKED, {
                                            location_stack: u,
                                            was_expanded: i,
                                        }),
                                            c(!i);
                                    },
                                    isShowingAll: i,
                                }),
                            }),
                            (0, r.jsx)("div", { className: n()(A.cover, { [A.hidden]: i }) }),
                        ],
                    }),
            ],
        });
    };
