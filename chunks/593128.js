n.d(t, { Z: () => O }), n(47120);
var i = n(200651),
    r = n(192379),
    l = n(642128),
    s = n(442837),
    a = n(215569),
    o = n(481060),
    c = n(224706),
    d = n(425493),
    u = n(852860),
    m = n(493544),
    h = n(585483),
    g = n(931240),
    x = n(970606),
    p = n(389134),
    _ = n(35313),
    C = n(94963),
    f = n(745628),
    v = n(950279),
    N = n(796918),
    j = n(513532),
    I = n(741595),
    E = n(974842),
    b = n(359380),
    T = n(308083),
    S = n(981631),
    R = n(231338),
    Z = n(388032),
    y = n(972382);
let A = (e) => [
        {
            section: m.ID.HEADER,
            label: Z.intl.string(Z.t['7r0U+/'])
        },
        {
            section: T.Wy.GAMES,
            label: Z.intl.string(Z.t['6umL+/']),
            hasError: (null == e ? void 0 : e.gameApplicationIds) != null
        },
        {
            section: T.Wy.PLAYSTYLE,
            label: Z.intl.string(Z.t.SWXqQE),
            hasError: (null == e ? void 0 : e.playstyle) != null
        },
        { section: m.ID.DIVIDER },
        {
            section: m.ID.HEADER,
            label: Z.intl.string(Z.t['eNC+OT'])
        },
        {
            section: T.Wy.UTILITY_TRAITS,
            label: Z.intl.string(Z.t.oBixMj)
        },
        {
            section: T.Wy.INTERESTS,
            label: Z.intl.string(Z.t.WqEH5O),
            hasError: (null == e ? void 0 : e.interests) != null
        },
        {
            section: T.Wy.DESCRIPTION,
            label: Z.intl.string(Z.t.SnIjAQ),
            hasError: (null == e ? void 0 : e.description) != null || (null == e ? void 0 : e.wildcardDescriptors) != null
        },
        { section: m.ID.DIVIDER },
        {
            section: m.ID.HEADER,
            label: Z.intl.string(Z.t.qEgjwM)
        },
        {
            section: T.Wy.CUSTOMIZE_TAG_BADGE,
            label: Z.intl.string(Z.t.MuFv4e),
            hasError: (null == e ? void 0 : e.tag) != null || (null == e ? void 0 : e.badgeKind) != null || (null == e ? void 0 : e.badgePrimaryColor) != null || (null == e ? void 0 : e.badgeSecondaryColor) != null
        },
        {
            section: T.Wy.CUSTOMIZE_BANNER,
            label: Z.intl.string(Z.t['/A+uVF']),
            hasError: (null == e ? void 0 : e.banner) != null || (null == e ? void 0 : e.brandPrimaryColor) != null || (null == e ? void 0 : e.brandSecondaryColor) != null
        },
        { section: m.ID.DIVIDER },
        {
            section: T.Wy.MEMBER_APPLICATION,
            label: Z.intl.string(Z.t.aOQWKi),
            hasError: (null == e ? void 0 : e.verificationForm) != null
        },
        { section: m.ID.DIVIDER },
        {
            section: m.ID.CUSTOM,
            label: Z.intl.string(Z.t.vc5h39),
            element: L
        }
    ],
    L = (e) => {
        let { guildId: t, onClose: l, dirty: s } = e,
            [a, c] = r.useState(!1),
            d = async () => {
                c(!0);
                try {
                    await (0, g.nr)(t), l();
                } catch (e) {
                    throw (c(!1), e);
                }
            };
        return (0, i.jsxs)(o.njP.Item, {
            selectedItem: !1,
            className: y.deleteItem,
            'aria-label': Z.intl.string(Z.t.vc5h39),
            onClick: () => {
                if (s) {
                    h.S.dispatch(S.CkL.EMPHASIZE_NOTICE);
                    return;
                }
                (0, o.ZDy)(async () => {
                    let { ConfirmModal: e } = await Promise.resolve().then(n.bind(n, 481060));
                    return (t) =>
                        (0, i.jsx)(e, {
                            ...t,
                            header: Z.intl.string(Z.t.EXskgI),
                            confirmText: Z.intl.string(Z.t['cY+Ooa']),
                            cancelText: Z.intl.string(Z.t['ETE/oK']),
                            loading: a,
                            onConfirm: d,
                            children: (0, i.jsx)(o.Text, {
                                variant: 'text-md/normal',
                                children: Z.intl.string(Z.t.OsRkMz)
                            })
                        });
                });
            },
            children: [
                (0, i.jsx)(o.XHJ, {
                    size: 'xs',
                    color: 'currentColor',
                    className: y.statusDanger
                }),
                (0, i.jsx)(o.Text, {
                    variant: 'text-md/medium',
                    color: 'status-danger',
                    children: Z.intl.string(Z.t.vc5h39)
                })
            ]
        });
    },
    D = (e) => {
        let { isErrorVisible: t } = e,
            n = (0, o.dQu)(o.TVs.colors.HEADER_PRIMARY, R.BR.DARK),
            r = (0, o.dQu)(o.TVs.colors.TEXT_MUTED, R.BR.DARK);
        return t
            ? (0, i.jsxs)('div', {
                  className: y.tooltipContents,
                  children: [
                      (0, i.jsx)(o.aNP, {
                          size: 'xs',
                          color: 'currentColor',
                          className: y.errorIconTooltip
                      }),
                      (0, i.jsxs)('div', {
                          children: [
                              (0, i.jsx)(o.Text, {
                                  variant: 'text-sm/medium',
                                  style: { color: n.hex() },
                                  children: Z.intl.string(Z.t.M6w76e)
                              }),
                              (0, i.jsx)(o.Text, {
                                  variant: 'text-xs/normal',
                                  style: { color: r.hex() },
                                  children: Z.intl.string(Z.t.pNtCgo)
                              })
                          ]
                      })
                  ]
              })
            : null;
    },
    O = (e) => {
        let { guildId: t, onClose: n } = e,
            [R, L] = r.useState(T.Wy.GAMES),
            {
                initialSettings: O,
                settings: k,
                errors: P,
                submitting: w,
                dirty: M
            } = (0, s.cj)([p.Z], () => {
                var e;
                let t = p.Z.getState();
                return {
                    initialSettings: t.initialSettings,
                    settings: t.settings,
                    errors: null !== (e = t.errors) && void 0 !== e ? e : {},
                    submitting: t.submitting,
                    dirty: t.dirty
                };
            }),
            U = r.useCallback(
                (e) => {
                    M ? h.S.dispatch(S.CkL.EMPHASIZE_NOTICE) : L(e);
                },
                [M]
            ),
            G = (0, _.f)(),
            B = r.useCallback(
                (e) => {
                    'Escape' === e.key && (e.stopPropagation(), n());
                },
                [n]
            );
        r.useEffect(() => {
            (0, x.GO)(t, (0, x.Qh)(R));
        }, [t, R]),
            r.useEffect(
                () => (
                    window.addEventListener('keydown', B),
                    () => {
                        window.removeEventListener('keydown', B);
                    }
                ),
                [B]
            ),
            r.useEffect(() => {
                c.Z.getDetectableGames();
            }, []),
            r.useEffect(() => {
                (0, g.aH)(t);
            }, [t]);
        let F = r.useCallback((e) => (0, g.mf)(t, { gameApplicationIds: e }), [t]),
            z = r.useCallback((e) => (0, g.mf)(t, { playstyle: e }), [t]),
            H = r.useCallback((e) => (0, g.mf)(t, { interests: e }), [t]),
            V = r.useCallback((e) => (0, g.mf)(t, e), [t]),
            W = r.useCallback(() => {
                M ? h.S.dispatch(S.CkL.EMPHASIZE_NOTICE) : n();
            }, [M, n]),
            Y = async () => {
                await (0, g.Ii)(t, k), (0, x.Af)(t);
            },
            K = r.useMemo(() => null != P && Object.values(P).some((e) => null != e), [P]);
        if (null == k) return null;
        let q = A(P);
        return (0, i.jsxs)(l.animated.div, {
            style: G,
            className: y.modal,
            children: [
                (0, i.jsx)(o.ua7, {
                    color: o.ua7.Colors.GREY,
                    tooltipClassName: y.tooltip,
                    text: (0, i.jsx)(D, { isErrorVisible: K }),
                    position: 'left',
                    'aria-label': null != K ? Z.intl.string(Z.t.M6w76e) : void 0,
                    shouldShow: K,
                    forceOpen: K,
                    children: (e) =>
                        (0, i.jsx)(d.Z, {
                            ...e,
                            className: y.closeButton,
                            closeAction: W,
                            keybind: 'ESC'
                        })
                }),
                (0, i.jsxs)('div', {
                    className: y.modalContents,
                    children: [
                        (0, i.jsx)('div', {
                            className: y.sidebarWrapper,
                            children: (0, i.jsx)(o.njP, {
                                className: y.sidebar,
                                selectedItem: R,
                                onItemSelect: U,
                                orientation: 'vertical',
                                children: q.map((e, r) => {
                                    switch (e.section) {
                                        case m.ID.HEADER:
                                            return (0, i.jsx)(o.njP.Header, { children: e.label }, 'header-'.concat(r));
                                        case m.ID.DIVIDER:
                                            return (0, i.jsx)(o.njP.Separator, {}, 'divider-'.concat(r));
                                        case m.ID.CUSTOM:
                                            let l = e.element;
                                            return (0, i.jsx)(
                                                l,
                                                {
                                                    dirty: M,
                                                    guildId: t,
                                                    onClose: n
                                                },
                                                e.label
                                            );
                                        default:
                                            return (0, i.jsx)(
                                                o.njP.Item,
                                                {
                                                    className: y.settingsTab,
                                                    'aria-label': e.label,
                                                    id: e.section,
                                                    children: (0, i.jsxs)(i.Fragment, {
                                                        children: [
                                                            e.label,
                                                            e.hasError &&
                                                                (0, i.jsx)(o.ua7, {
                                                                    color: o.ua7.Colors.GREY,
                                                                    position: 'right',
                                                                    text: Z.intl.string(Z.t.M6w76e),
                                                                    children: (e) =>
                                                                        (0, i.jsx)(o.aNP, {
                                                                            size: 'xs',
                                                                            color: 'currentColor',
                                                                            ...e,
                                                                            className: y.errorIcon
                                                                        })
                                                                })
                                                        ]
                                                    })
                                                },
                                                e.section
                                            );
                                    }
                                })
                            })
                        }),
                        (0, i.jsxs)('div', {
                            className: y.mainContent,
                            children: [
                                (0, i.jsx)(o.zJl, {
                                    children: (() => {
                                        switch (R) {
                                            case T.Wy.GAMES:
                                                var e;
                                                return (0, i.jsx)(v.Z, {
                                                    title: Z.intl.string(Z.t.t6Mbq6),
                                                    description: Z.intl.string(Z.t.E7Ymwc),
                                                    onUpdateGames: F,
                                                    gameApplicationIds: null !== (e = k.gameApplicationIds) && void 0 !== e ? e : new Set(),
                                                    error: P.gameApplicationIds,
                                                    guildId: t,
                                                    includeSuggestedGames: !0
                                                });
                                            case T.Wy.PLAYSTYLE:
                                                return (0, i.jsx)(I.Z, {
                                                    title: Z.intl.string(Z.t.W0h7pa),
                                                    description: Z.intl.string(Z.t.JHYekZ),
                                                    onUpdatePlaystyle: z,
                                                    playstyle: k.playstyle,
                                                    error: P.playstyle
                                                });
                                            case T.Wy.UTILITY_TRAITS:
                                                return (0, i.jsx)(b.Z, {
                                                    guildId: t,
                                                    title: Z.intl.string(Z.t.G4tP09),
                                                    description: Z.intl.string(Z.t['6Eos19']),
                                                    onUpdateTraits: H,
                                                    progress: k
                                                });
                                            case T.Wy.INTERESTS:
                                                return (0, i.jsx)(N.Z, {
                                                    guildId: t,
                                                    handleUpdate: V,
                                                    progress: k,
                                                    error: P.interests
                                                });
                                            case T.Wy.DESCRIPTION:
                                                return (0, i.jsx)(f.Z, {
                                                    guildId: t,
                                                    handleUpdate: V,
                                                    progress: k,
                                                    errors: P
                                                });
                                            case T.Wy.CUSTOMIZE_TAG_BADGE:
                                                return (0, i.jsx)(E.Z, {
                                                    handleUpdate: V,
                                                    tag: k.tag,
                                                    error: P.tag,
                                                    badge: k.badgeKind,
                                                    primaryColor: k.badgePrimaryColor,
                                                    secondaryColor: k.badgeSecondaryColor,
                                                    furthestStep: T.Wy.CUSTOMIZE_TAG_BADGE,
                                                    inSettings: !0
                                                });
                                            case T.Wy.MEMBER_APPLICATION:
                                                return (0, i.jsx)(j.Z, {
                                                    guildId: t,
                                                    inSettings: !0,
                                                    error: P.verificationForm
                                                });
                                            case T.Wy.CUSTOMIZE_BANNER:
                                                return (0, i.jsx)(C.Z, {
                                                    guildId: t,
                                                    handleUpdate: V,
                                                    progress: k
                                                });
                                            default:
                                                return null;
                                        }
                                    })()
                                }),
                                (0, i.jsx)(a.W, {
                                    component: 'div',
                                    children:
                                        M &&
                                        (0, i.jsx)(o.oXn, {
                                            className: y.noticeRegion,
                                            children: (0, i.jsx)(u.Z, {
                                                onSave: Y,
                                                submitting: w,
                                                onReset: () => {
                                                    (0, g.mf)(t, O);
                                                },
                                                errorMessage: Object.values(P).find((e) => null != e)
                                            })
                                        })
                                })
                            ]
                        })
                    ]
                })
            ]
        });
    };
