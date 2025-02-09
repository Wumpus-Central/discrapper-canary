a.d(t, { default: () => L }), a(47120);
var n = a(200651),
    l = a(192379),
    i = a(120356),
    s = a.n(i),
    r = a(990547),
    c = a(399606),
    o = a(780384),
    d = a(481060),
    m = a(935369),
    x = a(367907),
    _ = a(213609),
    h = a(44315),
    u = a(210887),
    f = a(626135),
    p = a(923726),
    T = a(570849),
    g = a(853439),
    j = a(303737),
    N = a(587431),
    C = a(862239),
    I = a(847004),
    v = a(981631),
    R = a(388032),
    E = a(717961);
function k(e) {
    let { name: t, imageUrl: a, selected: l, onTap: i } = e;
    return (0, n.jsxs)(d.P3F, {
        onClick: i,
        className: E.templateCard,
        children: [
            (0, n.jsx)('img', {
                src: a,
                alt: '',
                className: E.templateCardImage
            }),
            (0, n.jsxs)('div', {
                className: E.templateNameRow,
                children: [
                    (0, n.jsx)(d.X6q, {
                        variant: 'heading-md/normal',
                        className: s()({ [E.unselectedTemplateName]: !l }),
                        children: t
                    }),
                    l &&
                        (0, n.jsx)(d.owK, {
                            size: 'md',
                            secondaryColor: (0, h.Lq)(v.Ilk.WHITE_500),
                            color: (0, h.Lq)(v.Ilk.BRAND_500)
                        })
                ]
            })
        ]
    });
}
function S(e) {
    let { loading: t, error: a, templates: l, selectedTemplateIndex: i, handleTapTemplate: s } = e,
        r = (0, c.e7)([u.Z], () => u.Z.theme);
    return t
        ? (0, n.jsx)(d.$jN, {})
        : null != a
          ? (0, n.jsx)(N.Z, { children: a.message })
          : null == l || 0 === l.length
            ? null
            : (0, n.jsx)('div', {
                  className: E.templateCardList,
                  children: l.map((e, t) =>
                      (0, n.jsx)(
                          k,
                          {
                              imageUrl: t === i ? e.category_image : (0, o.ap)(r) ? e.unselected_light_theme_category_image : e.unselected_dark_theme_category_image,
                              name: e.category,
                              selected: t === i,
                              onTap: () => s(t)
                          },
                          t
                      )
                  )
              });
}
function B(e) {
    var t, a;
    let { guildId: i, templates: s, selectedTemplateIndex: r, priceTiers: c, showPriceReselection: o, setShowPriceReselection: d, handleCreateTierFromTemplate: m } = e,
        x = (0, j.g4)(i, c, null != s ? (null === (a = s[r]) || void 0 === a ? void 0 : null === (t = a.listings[0]) || void 0 === t ? void 0 : t.price_tier) : void 0),
        _ = null != x && x.length > 0,
        h = l.useCallback(
            (e) => {
                _ ? d(!0) : m(e);
            },
            [m, _, d]
        );
    return null == s || 0 === s.length
        ? null
        : o && _
          ? (0, n.jsx)(I.Z, {
                selectedTemplate: s[r],
                handleSelectTemplate: m,
                newPricesToPick: x
            })
          : (0, n.jsx)(C.Z, {
                selectedTemplate: s[r],
                handleSelectTemplate: h
            });
}
function L(e) {
    let { transitionState: t, onClose: a, guildId: i, addNewEditStateFromTemplate: s, addNewEditStateFromScratch: o, priceTiers: h } = e,
        u = (0, c.e7)([g.Z], () => g.Z.getTemplates(i)),
        [j, { loading: N, error: C }] = (0, m.Z)(T.u),
        I = l.useRef('voluntarily_exit');
    l.useEffect(() => {
        (null == u || 0 === u.length) && j(i);
    }, [j, i, u]),
        l.useEffect(() => {
            t === d.Dvm.EXITING &&
                f.default.track(v.rMx.ROLE_SUBSCRIPTION_LISTING_TEMPLATE_SELECTOR_EXITED, {
                    exit_reason: I.current,
                    ...(0, x.hH)(i)
                });
        }, [t, i, I]);
    let [k, L] = l.useState(0),
        [y, w] = l.useState(!1),
        b = l.useCallback(
            (e) => {
                (I.current = 'template_selected'), (0, T.l)(e, i), s(e), a();
            },
            [i, s, a]
        ),
        U = l.useCallback(() => {
            y ? w(!1) : a();
        }, [y, a]),
        D = (0, p.yi)(i);
    return (
        (0, _.Z)({
            type: r.ImpressionTypes.MODAL,
            name: r.ImpressionNames.ROLE_SUBSCRIPTION_LISTING_TEMPLATE_SELECTOR,
            properties: { guild_id: i }
        }),
        (0, n.jsxs)(d.Y0X, {
            transitionState: t,
            size: d.CgR.DYNAMIC,
            className: E.modalRoot,
            children: [
                (0, n.jsx)(d.P3F, {
                    onClick: U,
                    className: E.closeButton,
                    children: (0, n.jsx)(d.Dio, {
                        size: 'xxs',
                        color: 'currentColor'
                    })
                }),
                (0, n.jsxs)(d.hzk, {
                    className: E.modalContent,
                    children: [
                        (0, n.jsxs)('div', {
                            className: E.templatesContainer,
                            children: [
                                y &&
                                    (0, n.jsx)(d.P3F, {
                                        className: E.blackoutOverlay,
                                        onClick: () => {
                                            y && w(!1);
                                        },
                                        'aria-label': 'overlay'
                                    }),
                                (0, n.jsxs)(d.zJl, {
                                    className: E.templatesContainerBody,
                                    children: [
                                        (0, n.jsx)(d.X6q, {
                                            variant: 'heading-xl/semibold',
                                            children: R.intl.string(R.t['9QQ+i4'])
                                        }),
                                        (0, n.jsx)(d.Text, {
                                            variant: 'text-sm/normal',
                                            className: E.modalBodyText,
                                            children: R.intl.string(R.t.CvFFOj)
                                        }),
                                        D &&
                                            (0, n.jsx)(d.Text, {
                                                variant: 'text-sm/normal',
                                                className: E.creatorPortalText,
                                                children: R.intl.format(R.t.iQML2t, { creatorPortalUrl: 'https://discord.com/creator-portal/learn-from-creators?tab=lightning-lessons' })
                                            }),
                                        (0, n.jsx)('div', {
                                            className: E.templatesContentContainer,
                                            children: (0, n.jsx)(S, {
                                                loading: N,
                                                error: C,
                                                templates: u,
                                                selectedTemplateIndex: k,
                                                handleTapTemplate: (e) => {
                                                    L(e);
                                                }
                                            })
                                        })
                                    ]
                                }),
                                (0, n.jsx)(d.Text, {
                                    variant: 'text-sm/normal',
                                    children: R.intl.string(R.t.jymUTE)
                                }),
                                (0, n.jsxs)(d.zxk, {
                                    size: d.zxk.Sizes.MEDIUM,
                                    onClick: () => {
                                        (I.current = 'create_from_scratch'), o(), a();
                                    },
                                    look: d.zxk.Looks.OUTLINED,
                                    color: d.zxk.Colors.PRIMARY,
                                    className: E.createFromStratchButton,
                                    innerClassName: E.createFromStratchButtonInner,
                                    children: [
                                        (0, n.jsx)(d.vdY, {
                                            size: 'custom',
                                            color: 'currentColor',
                                            width: 14,
                                            height: 14,
                                            className: E.editIcon
                                        }),
                                        R.intl.string(R.t.a3ycUV)
                                    ]
                                })
                            ]
                        }),
                        (0, n.jsx)(B, {
                            guildId: i,
                            templates: u,
                            selectedTemplateIndex: k,
                            priceTiers: h,
                            showPriceReselection: y,
                            setShowPriceReselection: w,
                            handleCreateTierFromTemplate: b
                        })
                    ]
                })
            ]
        })
    );
}
