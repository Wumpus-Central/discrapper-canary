n.d(t, { default: () => S }), n(47120);
var a = n(200651),
    r = n(192379),
    l = n(120356),
    i = n.n(l),
    s = n(990547),
    c = n(399606),
    o = n(780384),
    d = n(481060),
    m = n(935369),
    x = n(367907),
    u = n(213609),
    f = n(44315),
    p = n(210887),
    _ = n(626135),
    h = n(923726),
    j = n(570849),
    g = n(853439),
    T = n(303737),
    N = n(587431),
    v = n(862239),
    C = n(847004),
    I = n(981631),
    b = n(388032),
    y = n(283331);
function O(e) {
    let { name: t, imageUrl: n, selected: r, onTap: l } = e;
    return (0, a.jsxs)(d.P3F, {
        onClick: l,
        className: y.templateCard,
        children: [
            (0, a.jsx)('img', {
                src: n,
                alt: '',
                className: y.templateCardImage
            }),
            (0, a.jsxs)('div', {
                className: y.templateNameRow,
                children: [
                    (0, a.jsx)(d.X6q, {
                        variant: 'heading-md/normal',
                        className: i()({ [y.unselectedTemplateName]: !r }),
                        children: t
                    }),
                    r &&
                        (0, a.jsx)(d.owK, {
                            size: 'md',
                            secondaryColor: (0, f.Lq)(I.Ilk.WHITE_500),
                            color: (0, f.Lq)(I.Ilk.BRAND_500)
                        })
                ]
            })
        ]
    });
}
function R(e) {
    let { loading: t, error: n, templates: r, selectedTemplateIndex: l, handleTapTemplate: i } = e,
        s = (0, c.e7)([p.Z], () => p.Z.theme);
    return t
        ? (0, a.jsx)(d.$jN, {})
        : null != n
          ? (0, a.jsx)(N.Z, { children: n.message })
          : null == r || 0 === r.length
            ? null
            : (0, a.jsx)('div', {
                  className: y.templateCardList,
                  children: r.map((e, t) =>
                      (0, a.jsx)(
                          O,
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
function E(e) {
    var t, n;
    let { guildId: l, templates: i, selectedTemplateIndex: s, priceTiers: c, showPriceReselection: o, setShowPriceReselection: d, handleCreateTierFromTemplate: m } = e,
        x = (0, T.g4)(l, c, null != i ? (null == (n = i[s]) || null == (t = n.listings[0]) ? void 0 : t.price_tier) : void 0),
        u = null != x && x.length > 0,
        f = r.useCallback(
            (e) => {
                u ? d(!0) : m(e);
            },
            [m, u, d]
        );
    return null == i || 0 === i.length
        ? null
        : o && u
          ? (0, a.jsx)(C.Z, {
                selectedTemplate: i[s],
                handleSelectTemplate: m,
                newPricesToPick: x
            })
          : (0, a.jsx)(v.Z, {
                selectedTemplate: i[s],
                handleSelectTemplate: f
            });
}
function S(e) {
    let { transitionState: t, onClose: n, guildId: l, addNewEditStateFromTemplate: i, addNewEditStateFromScratch: o, priceTiers: f } = e,
        p = (0, c.e7)([g.Z], () => g.Z.getTemplates(l)),
        [T, { loading: N, error: v }] = (0, m.Z)(j.u),
        C = r.useRef('voluntarily_exit');
    r.useEffect(() => {
        (null == p || 0 === p.length) && T(l);
    }, [T, l, p]),
        r.useEffect(() => {
            t === d.Dvm.EXITING &&
                _.default.track(
                    I.rMx.ROLE_SUBSCRIPTION_LISTING_TEMPLATE_SELECTOR_EXITED,
                    (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                a = Object.keys(n);
                            'function' == typeof Object.getOwnPropertySymbols &&
                                (a = a.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                    })
                                )),
                                a.forEach(function (t) {
                                    var a;
                                    (a = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: a,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0
                                              })
                                            : (e[t] = a);
                                });
                        }
                        return e;
                    })({ exit_reason: C.current }, (0, x.hH)(l))
                );
        }, [t, l, C]);
    let [O, S] = r.useState(0),
        [w, k] = r.useState(!1),
        B = r.useCallback(
            (e) => {
                (C.current = 'template_selected'), (0, j.l)(e, l), i(e), n();
            },
            [l, i, n]
        ),
        L = r.useCallback(() => {
            w ? k(!1) : n();
        }, [w, n]),
        P = (0, h.yi)(l);
    return (
        (0, u.Z)({
            type: s.ImpressionTypes.MODAL,
            name: s.ImpressionNames.ROLE_SUBSCRIPTION_LISTING_TEMPLATE_SELECTOR,
            properties: { guild_id: l }
        }),
        (0, a.jsxs)(d.Y0X, {
            transitionState: t,
            size: d.CgR.DYNAMIC,
            className: y.modalRoot,
            children: [
                (0, a.jsx)(d.P3F, {
                    onClick: L,
                    className: y.closeButton,
                    children: (0, a.jsx)(d.Dio, {
                        size: 'xxs',
                        color: 'currentColor'
                    })
                }),
                (0, a.jsxs)(d.hzk, {
                    className: y.modalContent,
                    children: [
                        (0, a.jsxs)('div', {
                            className: y.templatesContainer,
                            children: [
                                w &&
                                    (0, a.jsx)(d.P3F, {
                                        className: y.blackoutOverlay,
                                        onClick: () => {
                                            w && k(!1);
                                        },
                                        'aria-label': 'overlay'
                                    }),
                                (0, a.jsxs)(d.zJl, {
                                    className: y.templatesContainerBody,
                                    children: [
                                        (0, a.jsx)(d.X6q, {
                                            variant: 'heading-xl/semibold',
                                            children: b.NW.string(b.t['9QQ+i4'])
                                        }),
                                        (0, a.jsx)(d.Text, {
                                            variant: 'text-sm/normal',
                                            className: y.modalBodyText,
                                            children: b.NW.string(b.t.CvFFOj)
                                        }),
                                        P &&
                                            (0, a.jsx)(d.Text, {
                                                variant: 'text-sm/normal',
                                                className: y.creatorPortalText,
                                                children: b.NW.format(b.t.iQML2t, { creatorPortalUrl: 'https://discord.com/creator-portal/learn-from-creators?tab=lightning-lessons' })
                                            }),
                                        (0, a.jsx)('div', {
                                            className: y.templatesContentContainer,
                                            children: (0, a.jsx)(R, {
                                                loading: N,
                                                error: v,
                                                templates: p,
                                                selectedTemplateIndex: O,
                                                handleTapTemplate: (e) => {
                                                    S(e);
                                                }
                                            })
                                        })
                                    ]
                                }),
                                (0, a.jsx)(d.Text, {
                                    variant: 'text-sm/normal',
                                    children: b.NW.string(b.t.jymUTE)
                                }),
                                (0, a.jsxs)(d.zxk, {
                                    size: d.zxk.Sizes.MEDIUM,
                                    onClick: () => {
                                        (C.current = 'create_from_scratch'), o(), n();
                                    },
                                    look: d.zxk.Looks.OUTLINED,
                                    color: d.zxk.Colors.PRIMARY,
                                    className: y.createFromStratchButton,
                                    innerClassName: y.createFromStratchButtonInner,
                                    children: [
                                        (0, a.jsx)(d.vdY, {
                                            size: 'custom',
                                            color: 'currentColor',
                                            width: 14,
                                            height: 14,
                                            className: y.editIcon
                                        }),
                                        b.NW.string(b.t.a3ycUV)
                                    ]
                                })
                            ]
                        }),
                        (0, a.jsx)(E, {
                            guildId: l,
                            templates: p,
                            selectedTemplateIndex: O,
                            priceTiers: f,
                            showPriceReselection: w,
                            setShowPriceReselection: k,
                            handleCreateTierFromTemplate: B
                        })
                    ]
                })
            ]
        })
    );
}
