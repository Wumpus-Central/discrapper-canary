n.d(t, { Z: () => O }), n(47120), n(266796);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(399606),
    o = n(481060),
    c = n(607070),
    d = n(100527),
    u = n(906732),
    m = n(66595),
    g = n(535322),
    p = n(477734),
    h = n(626135),
    f = n(881100),
    b = n(981631),
    N = n(388032),
    x = n(969397);
let _ = (e) => (e ? N.NW.string(N.t.QX14gI) : N.NW.string(N.t.RGadQU)),
    E = (e) => {
        let { isShowingAll: t, onClick: n } = e;
        return (0, r.jsxs)(o.P3F, {
            onClick: n,
            className: x.customButton,
            children: [
                t ? N.NW.string(N.t.maZaNz) : N.NW.string(N.t['37C26e']),
                t
                    ? (0, r.jsx)(o.u04, {
                          size: 'md',
                          color: 'currentColor',
                          className: x.arrow
                      })
                    : (0, r.jsx)(o.CJ0, {
                          size: 'md',
                          color: 'currentColor',
                          className: x.arrow
                      })
            ]
        });
    },
    j = (e) => {
        let { title: t, description: n, className: i, imageSource: s, imageClassName: l, titleBadge: c, isNew: p = !1, isEarlyAccess: h = !1 } = e,
            { analyticsLocations: f } = (0, u.ZP)(d.Z.PREMIUM_MARKETING_PERK_CARD);
        return (0, r.jsx)(u.Gt, {
            value: f,
            children: (0, r.jsxs)('div', {
                className: a()(x.perkCard, i),
                children: [
                    p
                        ? (0, r.jsx)(g.Z, {
                              className: x.perkCardNewBadge,
                              shouldInheritBackgroundColor: !0,
                              shouldInheritTextColor: !0
                          })
                        : null,
                    h ? (0, r.jsx)(m.Z, { className: x.perkCardEarlyAccessBadge }) : null,
                    (0, r.jsx)('img', {
                        src: s,
                        alt: '',
                        className: a()(l, x.perksCardArt)
                    }),
                    (0, r.jsxs)('div', {
                        children: [
                            (0, r.jsxs)(o.X6q, {
                                variant: 'heading-lg/extrabold',
                                className: x.perkCardHeading,
                                children: [t, ' ', c]
                            }),
                            (0, r.jsx)(o.Text, {
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
            [s, d] = i.useState(!1),
            m = (0, f.N)({ styles: x }),
            g = (0, l.e7)([c.Z], () => c.Z.useReducedMotion),
            { analyticsLocations: N } = (0, u.ZP)(),
            O = (0, p._f)(),
            C = [m.emoji, m.streaming, m.upload, m.customAppIcons, m.soundboard, O ? m.remix : m.videoBackground, m.superReactions, m.stickersPerkDiscoverability, m.badgeAlt];
        return (0, r.jsxs)('div', {
            className: a()(x.perksContainer, t, {
                [x.partiallyHidden]: n && !s,
                [x.subscriberNitroHome]: n,
                [x.reducedMotion]: g
            }),
            children: [
                (0, r.jsx)(o.X6q, {
                    variant: 'heading-xxl/extrabold',
                    className: x.perksTitle,
                    children: _(n)
                }),
                (0, r.jsx)('div', {
                    className: a()(x.perkCardContainer, { [x.perkCardContainerExpanded]: s }),
                    children: C.map(
                        (e) =>
                            null != e &&
                            (0, r.jsx)(
                                j,
                                (function (e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var n = null != arguments[t] ? arguments[t] : {},
                                            r = Object.keys(n);
                                        'function' == typeof Object.getOwnPropertySymbols &&
                                            (r = r.concat(
                                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                })
                                            )),
                                            r.forEach(function (t) {
                                                var r;
                                                (r = n[t]),
                                                    t in e
                                                        ? Object.defineProperty(e, t, {
                                                              value: r,
                                                              enumerable: !0,
                                                              configurable: !0,
                                                              writable: !0
                                                          })
                                                        : (e[t] = r);
                                            });
                                    }
                                    return e;
                                })({}, e),
                                e.title
                            )
                    )
                }),
                n &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)('div', {
                                className: a()({
                                    [x.sizeGizmo]: !s,
                                    [x.sizeGizmoExpanded]: s
                                }),
                                children: (0, r.jsx)(E, {
                                    onClick: () => {
                                        h.default.track(b.rMx.PREMIUM_MARKETING_PERKS_SEE_ALL_CLICKED, {
                                            location_stack: N,
                                            was_expanded: s
                                        }),
                                            d(!s);
                                    },
                                    isShowingAll: s
                                })
                            }),
                            (0, r.jsx)('div', { className: a()(x.cover, { [x.hidden]: s }) })
                        ]
                    })
            ]
        });
    };
