n.r(t),
    n.d(t, {
        default: function () {
            return L;
        }
    }),
    n(47120);
var a = n(200651),
    l = n(192379),
    i = n(120356),
    r = n.n(i),
    s = n(990547),
    c = n(399606),
    o = n(780384),
    d = n(481060),
    m = n(935369),
    x = n(367907),
    u = n(213609),
    h = n(44315),
    _ = n(210887),
    p = n(626135),
    T = n(923726),
    g = n(570849),
    I = n(853439),
    C = n(303737),
    j = n(587431),
    N = n(862239),
    f = n(847004),
    v = n(981631),
    b = n(388032),
    R = n(729070);
function S(e) {
    let { name: t, imageUrl: n, selected: l, onTap: i } = e;
    return (0, a.jsxs)(d.Clickable, {
        onClick: i,
        className: R.templateCard,
        children: [
            (0, a.jsx)('img', {
                src: n,
                alt: '',
                className: R.templateCardImage
            }),
            (0, a.jsxs)('div', {
                className: R.templateNameRow,
                children: [
                    (0, a.jsx)(d.Heading, {
                        variant: 'heading-md/normal',
                        className: r()({ [R.unselectedTemplateName]: !l }),
                        children: t
                    }),
                    l &&
                        (0, a.jsx)(d.CircleCheckIcon, {
                            size: 'md',
                            secondaryColor: (0, h.Lq)(v.Ilk.WHITE_500),
                            color: (0, h.Lq)(v.Ilk.BRAND_500)
                        })
                ]
            })
        ]
    });
}
function B(e) {
    let { loading: t, error: n, templates: l, selectedTemplateIndex: i, handleTapTemplate: r } = e,
        s = (0, c.e7)([_.Z], () => _.Z.theme);
    return t
        ? (0, a.jsx)(d.Spinner, {})
        : null != n
          ? (0, a.jsx)(j.Z, { children: n.message })
          : null == l || 0 === l.length
            ? null
            : (0, a.jsx)('div', {
                  className: R.templateCardList,
                  children: l.map((e, t) =>
                      (0, a.jsx)(
                          S,
                          {
                              imageUrl: t === i ? e.category_image : (0, o.ap)(s) ? e.unselected_light_theme_category_image : e.unselected_dark_theme_category_image,
                              name: e.category,
                              selected: t === i,
                              onTap: () => r(t)
                          },
                          t
                      )
                  )
              });
}
function E(e) {
    var t, n;
    let { guildId: i, templates: r, selectedTemplateIndex: s, priceTiers: c, showPriceReselection: o, setShowPriceReselection: d, handleCreateTierFromTemplate: m } = e,
        x = (0, C.g4)(i, c, null != r ? (null === (n = r[s]) || void 0 === n ? void 0 : null === (t = n.listings[0]) || void 0 === t ? void 0 : t.price_tier) : void 0),
        u = null != x && x.length > 0,
        h = l.useCallback(
            (e) => {
                u ? d(!0) : m(e);
            },
            [m, u, d]
        );
    return null == r || 0 === r.length
        ? null
        : o && u
          ? (0, a.jsx)(f.Z, {
                selectedTemplate: r[s],
                handleSelectTemplate: m,
                newPricesToPick: x
            })
          : (0, a.jsx)(N.Z, {
                selectedTemplate: r[s],
                handleSelectTemplate: h
            });
}
function L(e) {
    let { transitionState: t, onClose: n, guildId: i, addNewEditStateFromTemplate: r, addNewEditStateFromScratch: o, priceTiers: h } = e,
        _ = (0, c.e7)([I.Z], () => I.Z.getTemplates(i)),
        [C, { loading: j, error: N }] = (0, m.Z)(g.u),
        f = l.useRef('voluntarily_exit');
    l.useEffect(() => {
        (null == _ || 0 === _.length) && C(i);
    }, [C, i, _]),
        l.useEffect(() => {
            t === d.ModalTransitionState.EXITING &&
                p.default.track(v.rMx.ROLE_SUBSCRIPTION_LISTING_TEMPLATE_SELECTOR_EXITED, {
                    exit_reason: f.current,
                    ...(0, x.hH)(i)
                });
        }, [t, i, f]);
    let [S, L] = l.useState(0),
        [k, y] = l.useState(!1),
        w = l.useCallback(
            (e) => {
                (f.current = 'template_selected'), (0, g.l)(e, i), r(e), n();
            },
            [i, r, n]
        ),
        U = l.useCallback(() => {
            k ? y(!1) : n();
        }, [k, n]),
        D = (0, T.yi)(i);
    return (
        (0, u.Z)({
            type: s.ImpressionTypes.MODAL,
            name: s.ImpressionNames.ROLE_SUBSCRIPTION_LISTING_TEMPLATE_SELECTOR,
            properties: { guild_id: i }
        }),
        (0, a.jsxs)(d.ModalRoot, {
            transitionState: t,
            size: d.ModalSize.DYNAMIC,
            className: R.modalRoot,
            children: [
                (0, a.jsx)(d.Clickable, {
                    onClick: U,
                    className: R.closeButton,
                    children: (0, a.jsx)(d.XSmallIcon, {
                        size: 'xxs',
                        color: 'currentColor'
                    })
                }),
                (0, a.jsxs)(d.ModalContent, {
                    className: R.modalContent,
                    children: [
                        (0, a.jsxs)('div', {
                            className: R.templatesContainer,
                            children: [
                                k &&
                                    (0, a.jsx)(d.Clickable, {
                                        className: R.blackoutOverlay,
                                        onClick: () => {
                                            k && y(!1);
                                        },
                                        'aria-label': 'overlay'
                                    }),
                                (0, a.jsxs)(d.ScrollerThin, {
                                    className: R.templatesContainerBody,
                                    children: [
                                        (0, a.jsx)(d.Heading, {
                                            variant: 'heading-xl/semibold',
                                            children: b.intl.string(b.t['9QQ+i4'])
                                        }),
                                        (0, a.jsx)(d.Text, {
                                            variant: 'text-sm/normal',
                                            className: R.modalBodyText,
                                            children: b.intl.string(b.t.CvFFOj)
                                        }),
                                        D &&
                                            (0, a.jsx)(d.Text, {
                                                variant: 'text-sm/normal',
                                                className: R.creatorPortalText,
                                                children: b.intl.format(b.t.iQML2t, { creatorPortalUrl: 'https://discord.com/creator-portal/learn-from-creators?tab=lightning-lessons' })
                                            }),
                                        (0, a.jsx)('div', {
                                            className: R.templatesContentContainer,
                                            children: (0, a.jsx)(B, {
                                                loading: j,
                                                error: N,
                                                templates: _,
                                                selectedTemplateIndex: S,
                                                handleTapTemplate: (e) => {
                                                    L(e);
                                                }
                                            })
                                        })
                                    ]
                                }),
                                (0, a.jsx)(d.Text, {
                                    variant: 'text-sm/normal',
                                    children: b.intl.string(b.t.jymUTE)
                                }),
                                (0, a.jsxs)(d.Button, {
                                    size: d.Button.Sizes.MEDIUM,
                                    onClick: () => {
                                        (f.current = 'create_from_scratch'), o(), n();
                                    },
                                    look: d.Button.Looks.OUTLINED,
                                    color: d.Button.Colors.PRIMARY,
                                    className: R.createFromStratchButton,
                                    innerClassName: R.createFromStratchButtonInner,
                                    children: [
                                        (0, a.jsx)(d.PencilIcon, {
                                            size: 'custom',
                                            color: 'currentColor',
                                            width: 14,
                                            height: 14,
                                            className: R.editIcon
                                        }),
                                        b.intl.string(b.t.a3ycUV)
                                    ]
                                })
                            ]
                        }),
                        (0, a.jsx)(E, {
                            guildId: i,
                            templates: _,
                            selectedTemplateIndex: S,
                            priceTiers: h,
                            showPriceReselection: k,
                            setShowPriceReselection: y,
                            handleCreateTierFromTemplate: w
                        })
                    ]
                })
            ]
        })
    );
}
