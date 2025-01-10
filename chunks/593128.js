n(47120);
var i = n(200651),
    r = n(192379),
    l = n(666912),
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
    f = n(35313),
    C = n(94963),
    v = n(745628),
    I = n(950279),
    N = n(796918),
    _ = n(513532),
    T = n(741595),
    j = n(974842),
    b = n(359380),
    E = n(308083),
    S = n(981631),
    R = n(231338),
    y = n(388032),
    A = n(131800);
let Z = (e) => [
        {
            section: m.ID.HEADER,
            label: y.intl.string(y.t['7r0U+/'])
        },
        {
            section: E.Wy.GAMES,
            label: y.intl.string(y.t['6umL+/']),
            hasError: (null == e ? void 0 : e.gameApplicationIds) != null
        },
        {
            section: E.Wy.PLAYSTYLE,
            label: y.intl.string(y.t.SWXqQE),
            hasError: (null == e ? void 0 : e.playstyle) != null
        },
        { section: m.ID.DIVIDER },
        {
            section: m.ID.HEADER,
            label: y.intl.string(y.t['eNC+OT'])
        },
        {
            section: E.Wy.UTILITY_TRAITS,
            label: y.intl.string(y.t.oBixMj)
        },
        {
            section: E.Wy.INTERESTS,
            label: y.intl.string(y.t.WqEH5O),
            hasError: (null == e ? void 0 : e.interests) != null
        },
        {
            section: E.Wy.DESCRIPTION,
            label: y.intl.string(y.t.SnIjAQ),
            hasError: (null == e ? void 0 : e.description) != null || (null == e ? void 0 : e.wildcardDescriptors) != null
        },
        { section: m.ID.DIVIDER },
        {
            section: m.ID.HEADER,
            label: y.intl.string(y.t.qEgjwM)
        },
        {
            section: E.Wy.CUSTOMIZE_TAG_BADGE,
            label: y.intl.string(y.t.MuFv4e),
            hasError: (null == e ? void 0 : e.tag) != null || (null == e ? void 0 : e.badgeKind) != null || (null == e ? void 0 : e.badgePrimaryColor) != null || (null == e ? void 0 : e.badgeSecondaryColor) != null
        },
        {
            section: E.Wy.CUSTOMIZE_BANNER,
            label: y.intl.string(y.t['/A+uVF']),
            hasError: (null == e ? void 0 : e.banner) != null || (null == e ? void 0 : e.brandPrimaryColor) != null || (null == e ? void 0 : e.brandSecondaryColor) != null
        },
        { section: m.ID.DIVIDER },
        {
            section: E.Wy.MEMBER_APPLICATION,
            label: y.intl.string(y.t.aOQWKi),
            hasError: (null == e ? void 0 : e.verificationForm) != null
        },
        { section: m.ID.DIVIDER },
        {
            section: m.ID.CUSTOM,
            label: y.intl.string(y.t.vc5h39),
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
        return (0, i.jsxs)(o.TabBar.Item, {
            selectedItem: !1,
            className: A.deleteItem,
            'aria-label': y.intl.string(y.t.vc5h39),
            onClick: () => {
                if (s) {
                    h.S.dispatch(S.CkL.EMPHASIZE_NOTICE);
                    return;
                }
                (0, o.openModalLazy)(async () => {
                    let { ConfirmModal: e } = await Promise.resolve().then(n.bind(n, 481060));
                    return (t) =>
                        (0, i.jsx)(e, {
                            ...t,
                            header: y.intl.string(y.t.EXskgI),
                            confirmText: y.intl.string(y.t['cY+Ooa']),
                            cancelText: y.intl.string(y.t['ETE/oK']),
                            loading: a,
                            onConfirm: d,
                            children: (0, i.jsx)(o.Text, {
                                variant: 'text-md/normal',
                                children: y.intl.string(y.t.OsRkMz)
                            })
                        });
                });
            },
            children: [
                (0, i.jsx)(o.TrashIcon, {
                    size: 'xs',
                    color: 'currentColor',
                    className: A.statusDanger
                }),
                (0, i.jsx)(o.Text, {
                    variant: 'text-md/medium',
                    color: 'status-danger',
                    children: y.intl.string(y.t.vc5h39)
                })
            ]
        });
    },
    D = (e) => {
        let { isErrorVisible: t } = e,
            n = (0, o.useToken)(o.tokens.colors.HEADER_PRIMARY, R.BR.DARK),
            r = (0, o.useToken)(o.tokens.colors.TEXT_MUTED, R.BR.DARK);
        return t
            ? (0, i.jsxs)('div', {
                  className: A.tooltipContents,
                  children: [
                      (0, i.jsx)(o.WarningIcon, {
                          size: 'xs',
                          color: 'currentColor',
                          className: A.errorIconTooltip
                      }),
                      (0, i.jsxs)('div', {
                          children: [
                              (0, i.jsx)(o.Text, {
                                  variant: 'text-sm/medium',
                                  style: { color: n.hex() },
                                  children: y.intl.string(y.t.M6w76e)
                              }),
                              (0, i.jsx)(o.Text, {
                                  variant: 'text-xs/normal',
                                  style: { color: r.hex() },
                                  children: y.intl.string(y.t.pNtCgo)
                              })
                          ]
                      })
                  ]
              })
            : null;
    };
t.Z = (e) => {
    let { guildId: t, onClose: n } = e,
        [R, L] = r.useState(E.Wy.GAMES),
        {
            initialSettings: O,
            settings: M,
            errors: P,
            submitting: k,
            dirty: w
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
        B = r.useCallback(
            (e) => {
                w ? h.S.dispatch(S.CkL.EMPHASIZE_NOTICE) : L(e);
            },
            [w]
        ),
        U = (0, f.f)(),
        G = r.useCallback(
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
                window.addEventListener('keydown', G),
                () => {
                    window.removeEventListener('keydown', G);
                }
            ),
            [G]
        ),
        r.useEffect(() => {
            c.Z.getDetectableGames();
        }, []),
        r.useEffect(() => {
            (0, g.aH)(t);
        }, [t]);
    let F = r.useCallback((e) => (0, g.mf)(t, { gameApplicationIds: e }), [t]),
        H = r.useCallback((e) => (0, g.mf)(t, { playstyle: e }), [t]),
        z = r.useCallback((e) => (0, g.mf)(t, { interests: e }), [t]),
        V = r.useCallback((e) => (0, g.mf)(t, e), [t]),
        W = r.useCallback(() => {
            w ? h.S.dispatch(S.CkL.EMPHASIZE_NOTICE) : n();
        }, [w, n]),
        Y = async () => {
            await (0, g.Ii)(t, M), (0, x.Af)(t);
        },
        K = r.useMemo(() => null != P && Object.values(P).some((e) => null != e), [P]);
    if (null == M) return null;
    let q = Z(P);
    return (0, i.jsxs)(l.animated.div, {
        style: U,
        className: A.modal,
        children: [
            (0, i.jsx)(o.Tooltip, {
                color: o.Tooltip.Colors.GREY,
                tooltipClassName: A.tooltip,
                text: (0, i.jsx)(D, { isErrorVisible: K }),
                position: 'left',
                'aria-label': null != K ? y.intl.string(y.t.M6w76e) : void 0,
                shouldShow: K,
                forceOpen: K,
                children: (e) =>
                    (0, i.jsx)(d.Z, {
                        ...e,
                        className: A.closeButton,
                        closeAction: W,
                        keybind: 'ESC'
                    })
            }),
            (0, i.jsxs)('div', {
                className: A.modalContents,
                children: [
                    (0, i.jsx)('div', {
                        className: A.sidebarWrapper,
                        children: (0, i.jsx)(o.TabBar, {
                            className: A.sidebar,
                            selectedItem: R,
                            onItemSelect: B,
                            orientation: 'vertical',
                            children: q.map((e, r) => {
                                switch (e.section) {
                                    case m.ID.HEADER:
                                        return (0, i.jsx)(o.TabBar.Header, { children: e.label }, 'header-'.concat(r));
                                    case m.ID.DIVIDER:
                                        return (0, i.jsx)(o.TabBar.Separator, {}, 'divider-'.concat(r));
                                    case m.ID.CUSTOM:
                                        let l = e.element;
                                        return (0, i.jsx)(
                                            l,
                                            {
                                                dirty: w,
                                                guildId: t,
                                                onClose: n
                                            },
                                            e.label
                                        );
                                    default:
                                        return (0, i.jsx)(
                                            o.TabBar.Item,
                                            {
                                                className: A.settingsTab,
                                                'aria-label': e.label,
                                                id: e.section,
                                                children: (0, i.jsxs)(i.Fragment, {
                                                    children: [
                                                        e.label,
                                                        e.hasError &&
                                                            (0, i.jsx)(o.Tooltip, {
                                                                color: o.Tooltip.Colors.GREY,
                                                                position: 'right',
                                                                text: y.intl.string(y.t.M6w76e),
                                                                children: (e) =>
                                                                    (0, i.jsx)(o.WarningIcon, {
                                                                        size: 'xs',
                                                                        color: 'currentColor',
                                                                        ...e,
                                                                        className: A.errorIcon
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
                        className: A.mainContent,
                        children: [
                            (0, i.jsx)(o.ScrollerThin, {
                                children: (() => {
                                    switch (R) {
                                        case E.Wy.GAMES:
                                            var e;
                                            return (0, i.jsx)(I.Z, {
                                                title: y.intl.string(y.t.t6Mbq6),
                                                description: y.intl.string(y.t.E7Ymwc),
                                                onUpdateGames: F,
                                                gameApplicationIds: null !== (e = M.gameApplicationIds) && void 0 !== e ? e : new Set(),
                                                error: P.gameApplicationIds,
                                                guildId: t,
                                                includeSuggestedGames: !0
                                            });
                                        case E.Wy.PLAYSTYLE:
                                            return (0, i.jsx)(T.Z, {
                                                title: y.intl.string(y.t.W0h7pa),
                                                description: y.intl.string(y.t.JHYekZ),
                                                onUpdatePlaystyle: H,
                                                playstyle: M.playstyle,
                                                error: P.playstyle
                                            });
                                        case E.Wy.UTILITY_TRAITS:
                                            return (0, i.jsx)(b.Z, {
                                                guildId: t,
                                                title: y.intl.string(y.t.G4tP09),
                                                description: y.intl.string(y.t['6Eos19']),
                                                onUpdateTraits: z,
                                                progress: M
                                            });
                                        case E.Wy.INTERESTS:
                                            return (0, i.jsx)(N.Z, {
                                                guildId: t,
                                                handleUpdate: V,
                                                progress: M,
                                                error: P.interests
                                            });
                                        case E.Wy.DESCRIPTION:
                                            return (0, i.jsx)(v.Z, {
                                                guildId: t,
                                                handleUpdate: V,
                                                progress: M,
                                                errors: P
                                            });
                                        case E.Wy.CUSTOMIZE_TAG_BADGE:
                                            return (0, i.jsx)(j.Z, {
                                                handleUpdate: V,
                                                tag: M.tag,
                                                error: P.tag,
                                                badge: M.badgeKind,
                                                primaryColor: M.badgePrimaryColor,
                                                secondaryColor: M.badgeSecondaryColor,
                                                furthestStep: E.Wy.CUSTOMIZE_TAG_BADGE,
                                                inSettings: !0
                                            });
                                        case E.Wy.MEMBER_APPLICATION:
                                            return (0, i.jsx)(_.Z, {
                                                guildId: t,
                                                inSettings: !0,
                                                error: P.verificationForm
                                            });
                                        case E.Wy.CUSTOMIZE_BANNER:
                                            return (0, i.jsx)(C.Z, {
                                                guildId: t,
                                                handleUpdate: V,
                                                progress: M
                                            });
                                        default:
                                            return null;
                                    }
                                })()
                            }),
                            (0, i.jsx)(a.W, {
                                component: 'div',
                                children:
                                    w &&
                                    (0, i.jsx)(o.SlideIn, {
                                        className: A.noticeRegion,
                                        children: (0, i.jsx)(u.Z, {
                                            onSave: Y,
                                            submitting: k,
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
