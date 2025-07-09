(n.d(t, { default: () => w }), n(388685));
var a = n(255367),
    r = n(73800),
    l = n(120356),
    i = n.n(l),
    s = n(990547),
    c = n(399606),
    o = n(780384),
    d = n(755721),
    m = n(481060),
    x = n(935369),
    u = n(367907),
    p = n(213609),
    f = n(44315),
    _ = n(210887),
    h = n(626135),
    j = n(923726),
    g = n(570849),
    T = n(853439),
    N = n(303737),
    v = n(587431),
    C = n(862239),
    I = n(847004),
    b = n(981631),
    y = n(388032),
    O = n(283331);
function R(e) {
    let { name: t, imageUrl: n, selected: r, onTap: l } = e;
    return (0, a.jsxs)(m.P3F, {
        onClick: l,
        className: O.templateCard,
        children: [
            (0, a.jsx)('img', {
                src: n,
                alt: '',
                className: O.templateCardImage
            }),
            (0, a.jsxs)('div', {
                className: O.templateNameRow,
                children: [
                    (0, a.jsx)(m.X6q, {
                        variant: 'heading-md/normal',
                        className: i()({ [O.unselectedTemplateName]: !r }),
                        children: t
                    }),
                    r &&
                        (0, a.jsx)(m.owK, {
                            size: 'md',
                            secondaryColor: (0, f.Lq)(b.Ilk.WHITE_500),
                            color: (0, f.Lq)(b.Ilk.BRAND_500)
                        })
                ]
            })
        ]
    });
}
function E(e) {
    let { loading: t, error: n, templates: r, selectedTemplateIndex: l, handleTapTemplate: i } = e,
        s = (0, c.e7)([_.Z], () => _.Z.theme);
    return t
        ? (0, a.jsx)(m.$jN, {})
        : null != n
          ? (0, a.jsx)(v.Z, { children: n.message })
          : null == r || 0 === r.length
            ? null
            : (0, a.jsx)('div', {
                  className: O.templateCardList,
                  children: r.map((e, t) =>
                      (0, a.jsx)(
                          R,
                          {
                              imageUrl: t === l ? e.category_image : (0, o.ap)(s) ? e.unselected_light_theme_category_image : e.unselected_dark_theme_category_image,
                              name: e.category,
                              selected: t === l,
                              onTap: () => i(t)
                          },
                          t
                      )
                  )
              });
}
function S(e) {
    var t, n;
    let { guildId: l, templates: i, selectedTemplateIndex: s, priceTiers: c, showPriceReselection: o, setShowPriceReselection: d, handleCreateTierFromTemplate: m } = e,
        x = (0, N.g4)(l, c, null != i ? (null == (n = i[s]) || null == (t = n.listings[0]) ? void 0 : t.price_tier) : void 0),
        u = null != x && x.length > 0,
        p = r.useCallback(
            (e) => {
                u ? d(!0) : m(e);
            },
            [m, u, d]
        );
    return null == i || 0 === i.length
        ? null
        : o && u
          ? (0, a.jsx)(I.Z, {
                selectedTemplate: i[s],
                handleSelectTemplate: m,
                newPricesToPick: x
            })
          : (0, a.jsx)(C.Z, {
                selectedTemplate: i[s],
                handleSelectTemplate: p
            });
}
function w(e) {
    let { transitionState: t, onClose: n, guildId: l, addNewEditStateFromTemplate: i, addNewEditStateFromScratch: o, priceTiers: f } = e,
        _ = (0, c.e7)([T.Z], () => T.Z.getTemplates(l)),
        [N, { loading: v, error: C }] = (0, x.Z)(g.u),
        I = r.useRef('voluntarily_exit');
    (r.useEffect(() => {
        (null == _ || 0 === _.length) && N(l);
    }, [N, l, _]),
        r.useEffect(() => {
            t === m.Dvm.EXITING &&
                h.default.track(
                    b.rMx.ROLE_SUBSCRIPTION_LISTING_TEMPLATE_SELECTOR_EXITED,
                    (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                a = Object.keys(n);
                            ('function' == typeof Object.getOwnPropertySymbols &&
                                (a = a.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                    })
                                )),
                                a.forEach(function (t) {
                                    var a;
                                    ((a = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: a,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0
                                              })
                                            : (e[t] = a));
                                }));
                        }
                        return e;
                    })({ exit_reason: I.current }, (0, u.hH)(l))
                );
        }, [t, l, I]));
    let [R, w] = r.useState(0),
        [B, k] = r.useState(!1),
        L = r.useCallback(
            (e) => {
                ((I.current = 'template_selected'), (0, g.l)(e, l), i(e), n());
            },
            [l, i, n]
        ),
        P = r.useCallback(() => {
            B ? k(!1) : n();
        }, [B, n]),
        D = (0, j.yi)(l);
    return (
        (0, p.Z)({
            type: s.ImpressionTypes.MODAL,
            name: s.ImpressionNames.ROLE_SUBSCRIPTION_LISTING_TEMPLATE_SELECTOR,
            properties: { guild_id: l }
        }),
        (0, a.jsxs)(m.Y0X, {
            transitionState: t,
            size: m.CgR.DYNAMIC,
            className: O.modalRoot,
            parentComponent: 'GuildRoleSubscriptionsTierTemplateModal',
            children: [
                (0, a.jsx)(m.P3F, {
                    onClick: P,
                    className: O.closeButton,
                    children: (0, a.jsx)(m.Dio, {
                        size: 'xxs',
                        color: 'currentColor'
                    })
                }),
                (0, a.jsxs)(m.hzk, {
                    className: O.modalContent,
                    children: [
                        (0, a.jsxs)('div', {
                            className: O.templatesContainer,
                            children: [
                                B &&
                                    (0, a.jsx)(m.P3F, {
                                        className: O.blackoutOverlay,
                                        onClick: () => {
                                            B && k(!1);
                                        },
                                        'aria-label': 'overlay'
                                    }),
                                (0, a.jsxs)(m.zJl, {
                                    className: O.templatesContainerBody,
                                    children: [
                                        (0, a.jsx)(m.X6q, {
                                            variant: 'heading-xl/semibold',
                                            children: y.intl.string(y.t['9QQ+i4'])
                                        }),
                                        (0, a.jsx)(m.Text, {
                                            variant: 'text-sm/normal',
                                            className: O.modalBodyText,
                                            children: y.intl.string(y.t.CvFFOj)
                                        }),
                                        D &&
                                            (0, a.jsx)(m.Text, {
                                                variant: 'text-sm/normal',
                                                className: O.creatorPortalText,
                                                children: y.intl.format(y.t.iQML2t, { creatorPortalUrl: 'https://discord.com/creator-portal/learn-from-creators?tab=lightning-lessons' })
                                            }),
                                        (0, a.jsx)('div', {
                                            className: O.templatesContentContainer,
                                            children: (0, a.jsx)(E, {
                                                loading: v,
                                                error: C,
                                                templates: _,
                                                selectedTemplateIndex: R,
                                                handleTapTemplate: (e) => {
                                                    w(e);
                                                }
                                            })
                                        })
                                    ]
                                }),
                                (0, a.jsx)(m.Text, {
                                    variant: 'text-sm/normal',
                                    children: y.intl.string(y.t.jymUTE)
                                }),
                                (0, a.jsxs)(d.zx, {
                                    size: d.zx.Sizes.MEDIUM,
                                    onClick: () => {
                                        ((I.current = 'create_from_scratch'), o(), n());
                                    },
                                    look: d.zx.Looks.OUTLINED,
                                    color: d.zx.Colors.PRIMARY,
                                    className: O.createFromStratchButton,
                                    innerClassName: O.createFromStratchButtonInner,
                                    children: [
                                        (0, a.jsx)(m.vdY, {
                                            size: 'custom',
                                            color: 'currentColor',
                                            width: 14,
                                            height: 14,
                                            className: O.editIcon
                                        }),
                                        y.intl.string(y.t.a3ycUV)
                                    ]
                                })
                            ]
                        }),
                        (0, a.jsx)(S, {
                            guildId: l,
                            templates: _,
                            selectedTemplateIndex: R,
                            priceTiers: f,
                            showPriceReselection: B,
                            setShowPriceReselection: k,
                            handleCreateTierFromTemplate: L
                        })
                    ]
                })
            ]
        })
    );
}
