n.d(t, { Z: () => O }), n(388685), n(953529);
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
    _ = n(388032),
    x = n(969397);
let E = (e) => (e ? _.intl.string(_.t.QX14gI) : _.intl.string(_.t.RGadQU)),
    j = (e) => {
        let { isShowingAll: t, onClick: n } = e;
        return (0, i.jsxs)(o.P3F, {
            onClick: n,
            className: x.customButton,
            children: [
                t ? _.intl.string(_.t.maZaNz) : _.intl.string(_.t['37C26e']),
                t
                    ? (0, i.jsx)(o.u04, {
                          size: 'md',
                          color: 'currentColor',
                          className: x.arrow
                      })
                    : (0, i.jsx)(o.CJ0, {
                          size: 'md',
                          color: 'currentColor',
                          className: x.arrow
                      })
            ]
        });
    },
    C = (e) => {
        let { title: t, description: n, className: r, imageSource: s, imageClassName: a, titleBadge: c, isNew: g = !1, isEarlyAccess: h = !1 } = e,
            { analyticsLocations: f } = (0, u.ZP)(d.Z.PREMIUM_MARKETING_PERK_CARD);
        return (0, i.jsx)(u.Gt, {
            value: f,
            children: (0, i.jsxs)('div', {
                className: l()(x.perkCard, r),
                children: [
                    g
                        ? (0, i.jsx)(p.Z, {
                              className: x.perkCardNewBadge,
                              shouldInheritBackgroundColor: !0,
                              shouldInheritTextColor: !0
                          })
                        : null,
                    h ? (0, i.jsx)(m.Z, { className: x.perkCardEarlyAccessBadge }) : null,
                    (0, i.jsx)('img', {
                        src: s,
                        alt: '',
                        className: l()(a, x.perksCardArt)
                    }),
                    (0, i.jsxs)('div', {
                        children: [
                            (0, i.jsxs)(o.X6q, {
                                variant: 'heading-lg/extrabold',
                                className: x.perkCardHeading,
                                children: [t, ' ', c]
                            }),
                            (0, i.jsx)(o.Text, {
                                variant: 'text-sm/normal',
                                className: x.perkCardDescription,
                                children: 'function' == typeof n ? n(f) : n
                            })
                        ]
                    })
                ]
            })
        });
    },
    O = (e) => {
        let { className: t, isSubscriberNitroHome: n = !1 } = e,
            [s, d] = r.useState(!1),
            m = (0, f.N)({ styles: x }),
            p = (0, a.e7)([c.Z], () => c.Z.useReducedMotion),
            { analyticsLocations: _ } = (0, u.ZP)(),
            O = (0, g._f)(),
            S = [m.emoji, m.streaming, m.upload, m.customAppIcons, m.soundboard, O ? m.remix : m.videoBackground, m.superReactions, m.stickersPerkDiscoverability, m.badgeAlt];
        return (0, i.jsxs)('div', {
            className: l()(x.perksContainer, t, {
                [x.partiallyHidden]: n && !s,
                [x.subscriberNitroHome]: n,
                [x.reducedMotion]: p
            }),
            children: [
                (0, i.jsx)(o.X6q, {
                    variant: 'heading-xxl/extrabold',
                    className: x.perksTitle,
                    children: E(n)
                }),
                (0, i.jsx)('div', {
                    className: l()(x.perkCardContainer, { [x.perkCardContainerExpanded]: s }),
                    children: S.map(
                        (e) =>
                            null != e &&
                            (0, i.jsx)(
                                C,
                                (function (e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var n = null != arguments[t] ? arguments[t] : {},
                                            i = Object.keys(n);
                                        'function' == typeof Object.getOwnPropertySymbols &&
                                            (i = i.concat(
                                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                })
                                            )),
                                            i.forEach(function (t) {
                                                var i;
                                                (i = n[t]),
                                                    t in e
                                                        ? Object.defineProperty(e, t, {
                                                              value: i,
                                                              enumerable: !0,
                                                              configurable: !0,
                                                              writable: !0
                                                          })
                                                        : (e[t] = i);
                                            });
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
                                    [x.sizeGizmo]: !s,
                                    [x.sizeGizmoExpanded]: s
                                }),
                                children: (0, i.jsx)(j, {
                                    onClick: () => {
                                        h.default.track(b.rMx.PREMIUM_MARKETING_PERKS_SEE_ALL_CLICKED, {
                                            location_stack: _,
                                            was_expanded: s
                                        }),
                                            d(!s);
                                    },
                                    isShowingAll: s
                                })
                            }),
                            (0, i.jsx)('div', { className: l()(x.cover, { [x.hidden]: s }) })
                        ]
                    })
            ]
        });
    };
