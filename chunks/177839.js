n.d(t, { Z: () => S }), n(47120);
var i = n(200651),
    s = n(192379),
    r = n(120356),
    l = n.n(r),
    a = n(399606),
    o = n(481060),
    c = n(607070),
    d = n(100527),
    u = n(906732),
    m = n(66595),
    g = n(535322),
    h = n(477734),
    x = n(626135),
    _ = n(881100),
    p = n(981631),
    E = n(388032),
    C = n(624427);
let f = (e) => (e ? E.intl.string(E.t.QX14gI) : E.intl.string(E.t.RGadQU)),
    T = (e) => {
        let { isShowingAll: t, onClick: n } = e;
        return (0, i.jsxs)(o.P3F, {
            onClick: n,
            className: C.customButton,
            children: [
                t ? E.intl.string(E.t.maZaNz) : E.intl.string(E.t['37C26e']),
                t
                    ? (0, i.jsx)(o.u04, {
                          size: 'md',
                          color: 'currentColor',
                          className: C.arrow
                      })
                    : (0, i.jsx)(o.CJ0, {
                          size: 'md',
                          color: 'currentColor',
                          className: C.arrow
                      })
            ]
        });
    },
    N = (e) => {
        let { title: t, description: n, className: s, imageSource: r, imageClassName: a, titleBadge: c, isNew: h = !1, isEarlyAccess: x = !1 } = e,
            { analyticsLocations: _ } = (0, u.ZP)(d.Z.PREMIUM_MARKETING_PERK_CARD);
        return (0, i.jsx)(u.Gt, {
            value: _,
            children: (0, i.jsxs)('div', {
                className: l()(C.perkCard, s),
                children: [
                    h
                        ? (0, i.jsx)(g.Z, {
                              className: C.perkCardNewBadge,
                              shouldInheritBackgroundColor: !0,
                              shouldInheritTextColor: !0
                          })
                        : null,
                    x ? (0, i.jsx)(m.Z, { className: C.perkCardEarlyAccessBadge }) : null,
                    (0, i.jsx)('img', {
                        src: r,
                        alt: '',
                        className: l()(a, C.perksCardArt)
                    }),
                    (0, i.jsxs)('div', {
                        children: [
                            (0, i.jsxs)(o.X6q, {
                                variant: 'heading-lg/extrabold',
                                className: C.perkCardHeading,
                                children: [t, ' ', c]
                            }),
                            (0, i.jsx)(o.Text, {
                                variant: 'text-sm/normal',
                                className: C.perkCardDescription,
                                children: 'function' == typeof n ? n(_) : n
                            })
                        ]
                    })
                ]
            })
        });
    },
    S = (e) => {
        let { className: t, isSubscriberNitroHome: n = !1 } = e,
            [r, d] = s.useState(!1),
            m = (0, _.N)({ styles: C }),
            g = (0, a.e7)([c.Z], () => c.Z.useReducedMotion),
            { analyticsLocations: E } = (0, u.ZP)(),
            S = (0, h._f)(),
            I = [m.emoji, m.streaming, m.upload, m.customAppIcons, m.soundboard, S ? m.remix : m.videoBackground, m.superReactions, m.stickersPerkDiscoverability, m.badgeAlt];
        return (0, i.jsxs)('div', {
            className: l()(C.perksContainer, t, {
                [C.partiallyHidden]: n && !r,
                [C.subscriberNitroHome]: n,
                [C.reducedMotion]: g
            }),
            children: [
                (0, i.jsx)(o.X6q, {
                    variant: 'heading-xxl/extrabold',
                    className: l()(C.perksTitle),
                    children: f(n)
                }),
                (0, i.jsx)('div', {
                    className: l()(C.perkCardContainer, { [C.perkCardContainerExpanded]: r }),
                    children: I.map((e) => null != e && (0, i.jsx)(N, { ...e }, e.title))
                }),
                n &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)('div', {
                                className: l()({
                                    [C.sizeGizmo]: !r,
                                    [C.sizeGizmoExpanded]: r
                                }),
                                children: (0, i.jsx)(T, {
                                    onClick: () => {
                                        x.default.track(p.rMx.PREMIUM_MARKETING_PERKS_SEE_ALL_CLICKED, {
                                            location_stack: E,
                                            was_expanded: r
                                        }),
                                            d(!r);
                                    },
                                    isShowingAll: r
                                })
                            }),
                            (0, i.jsx)('div', { className: l()(C.cover, { [C.hidden]: r }) })
                        ]
                    })
            ]
        });
    };
