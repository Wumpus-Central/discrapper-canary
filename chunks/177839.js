n(47120);
var i = n(200651),
    r = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(399606),
    o = n(481060),
    c = n(607070),
    d = n(100527),
    u = n(906732),
    m = n(66595),
    g = n(535322),
    h = n(477734),
    p = n(626135),
    x = n(881100),
    f = n(981631),
    _ = n(388032),
    E = n(857876);
let C = (e) => (e ? _.intl.string(_.t.QX14gI) : _.intl.string(_.t.RGadQU)),
    T = (e) => {
        let { isShowingAll: t, onClick: n } = e;
        return (0, i.jsxs)(o.Clickable, {
            onClick: n,
            className: E.customButton,
            children: [
                t ? _.intl.string(_.t.maZaNz) : _.intl.string(_.t['37C26e']),
                t
                    ? (0, i.jsx)(o.ChevronSmallUpIcon, {
                          size: 'md',
                          color: 'currentColor',
                          className: E.arrow
                      })
                    : (0, i.jsx)(o.ChevronSmallDownIcon, {
                          size: 'md',
                          color: 'currentColor',
                          className: E.arrow
                      })
            ]
        });
    },
    S = (e) => {
        let { title: t, description: n, className: r, imageSource: s, imageClassName: l, titleBadge: c, isNew: h = !1, isEarlyAccess: p = !1 } = e,
            { analyticsLocations: x } = (0, u.ZP)(d.Z.PREMIUM_MARKETING_PERK_CARD);
        return (0, i.jsx)(u.Gt, {
            value: x,
            children: (0, i.jsxs)('div', {
                className: a()(E.perkCard, r),
                children: [
                    h
                        ? (0, i.jsx)(g.Z, {
                              className: E.perkCardNewBadge,
                              shouldInheritBackgroundColor: !0,
                              shouldInheritTextColor: !0
                          })
                        : null,
                    p ? (0, i.jsx)(m.Z, { className: E.perkCardEarlyAccessBadge }) : null,
                    (0, i.jsx)('img', {
                        src: s,
                        alt: '',
                        className: a()(l, E.perksCardArt)
                    }),
                    (0, i.jsxs)('div', {
                        children: [
                            (0, i.jsxs)(o.Heading, {
                                variant: 'heading-lg/extrabold',
                                className: E.perkCardHeading,
                                children: [t, ' ', c]
                            }),
                            (0, i.jsx)(o.Text, {
                                variant: 'text-sm/normal',
                                className: E.perkCardDescription,
                                children: 'function' == typeof n ? n(x) : n
                            })
                        ]
                    })
                ]
            })
        });
    };
t.Z = (e) => {
    let { className: t, isSubscriberNitroHome: n = !1 } = e,
        [s, d] = r.useState(!1),
        m = (0, x.N)({ styles: E }),
        g = (0, l.e7)([c.Z], () => c.Z.useReducedMotion),
        { analyticsLocations: _ } = (0, u.ZP)(),
        b = (0, h._f)(),
        I = [m.emoji, m.streaming, m.upload, m.customAppIcons, m.soundboard, b ? m.remix : m.videoBackground, m.superReactions, m.stickersPerkDiscoverability, m.badgeAlt];
    return (0, i.jsxs)('div', {
        className: a()(E.perksContainer, t, {
            [E.partiallyHidden]: n && !s,
            [E.subscriberNitroHome]: n,
            [E.reducedMotion]: g
        }),
        children: [
            (0, i.jsx)(o.Heading, {
                variant: 'heading-xxl/extrabold',
                className: a()(E.perksTitle),
                children: C(n)
            }),
            (0, i.jsx)('div', {
                className: a()(E.perkCardContainer, { [E.perkCardContainerExpanded]: s }),
                children: I.map((e) => null != e && (0, i.jsx)(S, { ...e }, e.title))
            }),
            n &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)('div', {
                            className: a()({
                                [E.sizeGizmo]: !s,
                                [E.sizeGizmoExpanded]: s
                            }),
                            children: (0, i.jsx)(T, {
                                onClick: () => {
                                    p.default.track(f.rMx.PREMIUM_MARKETING_PERKS_SEE_ALL_CLICKED, {
                                        location_stack: _,
                                        was_expanded: s
                                    }),
                                        d(!s);
                                },
                                isShowingAll: s
                            })
                        }),
                        (0, i.jsx)('div', { className: a()(E.cover, { [E.hidden]: s }) })
                    ]
                })
        ]
    });
};
