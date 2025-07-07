(n.d(t, { Z: () => C }), n(388685), n(953529));
var i = n(255367),
    r = n(73800),
    s = n(120356),
    l = n.n(s),
    a = n(399606),
    o = n(481060),
    c = n(607070),
    d = n(100527),
    u = n(906732),
    m = n(66595),
    p = n(535322),
    g = n(477734),
    h = n(626135),
    f = n(881100),
    b = n(981631),
    x = n(388032),
    _ = n(969397);
let E = (e) => (e ? x.intl.string(x.t.QX14gI) : x.intl.string(x.t.RGadQU)),
    j = (e) => {
        let { isShowingAll: t, onClick: n } = e;
        return (0, i.jsxs)(o.P3F, {
            onClick: n,
            className: _.customButton,
            children: [
                t ? x.intl.string(x.t.maZaNz) : x.intl.string(x.t['37C26e']),
                t
                    ? (0, i.jsx)(o.u04, {
                          size: 'md',
                          color: 'currentColor',
                          className: _.arrow
                      })
                    : (0, i.jsx)(o.CJ0, {
                          size: 'md',
                          color: 'currentColor',
                          className: _.arrow
                      })
            ]
        });
    },
    O = (e) => {
        let { title: t, description: n, className: r, imageSource: s, imageClassName: a, titleBadge: c, isNew: g = !1, isEarlyAccess: h = !1 } = e,
            { analyticsLocations: f } = (0, u.ZP)(d.Z.PREMIUM_MARKETING_PERK_CARD);
        return (0, i.jsx)(u.Gt, {
            value: f,
            children: (0, i.jsxs)('div', {
                className: l()(_.perkCard, r),
                children: [
                    g
                        ? (0, i.jsx)(p.Z, {
                              className: _.perkCardNewBadge,
                              shouldInheritBackgroundColor: !0,
                              shouldInheritTextColor: !0
                          })
                        : null,
                    h ? (0, i.jsx)(m.Z, { className: _.perkCardEarlyAccessBadge }) : null,
                    (0, i.jsx)('img', {
                        src: s,
                        alt: '',
                        className: l()(a, _.perksCardArt)
                    }),
                    (0, i.jsxs)('div', {
                        children: [
                            (0, i.jsxs)(o.X6q, {
                                variant: 'heading-lg/extrabold',
                                className: _.perkCardHeading,
                                children: [t, ' ', c]
                            }),
                            (0, i.jsx)(o.Text, {
                                variant: 'text-sm/normal',
                                className: _.perkCardDescription,
                                children: 'function' == typeof n ? n(f) : n
                            })
                        ]
                    })
                ]
            })
        });
    },
    C = (e) => {
        let { className: t, isSubscriberNitroHome: n = !1 } = e,
            [s, d] = r.useState(!1),
            m = (0, f.N)({ styles: _ }),
            p = (0, a.e7)([c.Z], () => c.Z.useReducedMotion),
            { analyticsLocations: x } = (0, u.ZP)(),
            C = (0, g._f)(),
            S = [m.emoji, m.streaming, m.upload, m.customAppIcons, m.soundboard, C ? m.remix : m.videoBackground, m.superReactions, m.stickersPremiumPerk, m.badgeAlt];
        return (0, i.jsxs)('div', {
            className: l()(_.perksContainer, t, {
                [_.partiallyHidden]: n && !s,
                [_.subscriberNitroHome]: n,
                [_.reducedMotion]: p
            }),
            children: [
                (0, i.jsx)(o.X6q, {
                    variant: 'heading-xxl/extrabold',
                    className: _.perksTitle,
                    children: E(n)
                }),
                (0, i.jsx)('div', {
                    className: l()(_.perkCardContainer, { [_.perkCardContainerExpanded]: s }),
                    children: S.map(
                        (e) =>
                            null != e &&
                            (0, i.jsx)(
                                O,
                                (function (e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var n = null != arguments[t] ? arguments[t] : {},
                                            i = Object.keys(n);
                                        ('function' == typeof Object.getOwnPropertySymbols &&
                                            (i = i.concat(
                                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                })
                                            )),
                                            i.forEach(function (t) {
                                                var i;
                                                ((i = n[t]),
                                                    t in e
                                                        ? Object.defineProperty(e, t, {
                                                              value: i,
                                                              enumerable: !0,
                                                              configurable: !0,
                                                              writable: !0
                                                          })
                                                        : (e[t] = i));
                                            }));
                                    }
                                    return e;
                                })({}, e),
                                e.title
                            )
                    )
                }),
                n &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)('div', {
                                className: l()({
                                    [_.sizeGizmo]: !s,
                                    [_.sizeGizmoExpanded]: s
                                }),
                                children: (0, i.jsx)(j, {
                                    onClick: () => {
                                        (h.default.track(b.rMx.PREMIUM_MARKETING_PERKS_SEE_ALL_CLICKED, {
                                            location_stack: x,
                                            was_expanded: s
                                        }),
                                            d(!s));
                                    },
                                    isShowingAll: s
                                })
                            }),
                            (0, i.jsx)('div', { className: l()(_.cover, { [_.hidden]: s }) })
                        ]
                    })
            ]
        });
    };
