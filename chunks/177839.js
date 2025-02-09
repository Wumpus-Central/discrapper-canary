n.d(t, { Z: () => T }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    l = n(399606),
    o = n(481060),
    c = n(607070),
    d = n(100527),
    u = n(906732),
    m = n(66595),
    g = n(535322),
    _ = n(477734),
    p = n(626135),
    f = n(881100),
    h = n(981631),
    x = n(388032),
    E = n(293978);
let C = (e) => (e ? x.intl.string(x.t.QX14gI) : x.intl.string(x.t.RGadQU)),
    b = (e) => {
        let { isShowingAll: t, onClick: n } = e;
        return (0, i.jsxs)(o.P3F, {
            onClick: n,
            className: E.customButton,
            children: [
                t ? x.intl.string(x.t.maZaNz) : x.intl.string(x.t['37C26e']),
                t
                    ? (0, i.jsx)(o.u04, {
                          size: 'md',
                          color: 'currentColor',
                          className: E.arrow
                      })
                    : (0, i.jsx)(o.CJ0, {
                          size: 'md',
                          color: 'currentColor',
                          className: E.arrow
                      })
            ]
        });
    },
    v = (e) => {
        let { title: t, description: n, className: r, imageSource: a, imageClassName: l, titleBadge: c, isNew: _ = !1, isEarlyAccess: p = !1 } = e,
            { analyticsLocations: f } = (0, u.ZP)(d.Z.PREMIUM_MARKETING_PERK_CARD);
        return (0, i.jsx)(u.Gt, {
            value: f,
            children: (0, i.jsxs)('div', {
                className: s()(E.perkCard, r),
                children: [
                    _
                        ? (0, i.jsx)(g.Z, {
                              className: E.perkCardNewBadge,
                              shouldInheritBackgroundColor: !0,
                              shouldInheritTextColor: !0
                          })
                        : null,
                    p ? (0, i.jsx)(m.Z, { className: E.perkCardEarlyAccessBadge }) : null,
                    (0, i.jsx)('img', {
                        src: a,
                        alt: '',
                        className: s()(l, E.perksCardArt)
                    }),
                    (0, i.jsxs)('div', {
                        children: [
                            (0, i.jsxs)(o.X6q, {
                                variant: 'heading-lg/extrabold',
                                className: E.perkCardHeading,
                                children: [t, ' ', c]
                            }),
                            (0, i.jsx)(o.Text, {
                                variant: 'text-sm/normal',
                                className: E.perkCardDescription,
                                children: 'function' == typeof n ? n(f) : n
                            })
                        ]
                    })
                ]
            })
        });
    },
    T = (e) => {
        let { className: t, isSubscriberNitroHome: n = !1 } = e,
            [a, d] = r.useState(!1),
            m = (0, f.N)({ styles: E }),
            g = (0, l.e7)([c.Z], () => c.Z.useReducedMotion),
            { analyticsLocations: x } = (0, u.ZP)(),
            T = (0, _._f)(),
            N = [m.emoji, m.streaming, m.upload, m.customAppIcons, m.soundboard, T ? m.remix : m.videoBackground, m.superReactions, m.stickersPerkDiscoverability, m.badgeAlt];
        return (0, i.jsxs)('div', {
            className: s()(E.perksContainer, t, {
                [E.partiallyHidden]: n && !a,
                [E.subscriberNitroHome]: n,
                [E.reducedMotion]: g
            }),
            children: [
                (0, i.jsx)(o.X6q, {
                    variant: 'heading-xxl/extrabold',
                    className: s()(E.perksTitle),
                    children: C(n)
                }),
                (0, i.jsx)('div', {
                    className: s()(E.perkCardContainer, { [E.perkCardContainerExpanded]: a }),
                    children: N.map((e) => null != e && (0, i.jsx)(v, { ...e }, e.title))
                }),
                n &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)('div', {
                                className: s()({
                                    [E.sizeGizmo]: !a,
                                    [E.sizeGizmoExpanded]: a
                                }),
                                children: (0, i.jsx)(b, {
                                    onClick: () => {
                                        p.default.track(h.rMx.PREMIUM_MARKETING_PERKS_SEE_ALL_CLICKED, {
                                            location_stack: x,
                                            was_expanded: a
                                        }),
                                            d(!a);
                                    },
                                    isShowingAll: a
                                })
                            }),
                            (0, i.jsx)('div', { className: s()(E.cover, { [E.hidden]: a }) })
                        ]
                    })
            ]
        });
    };
