n.d(t, { Z: () => k }), n(266796), n(47120);
var r = n(200651),
    i = n(192379),
    s = n(642128),
    a = n(442837),
    l = n(215569),
    o = n(481060),
    c = n(224706),
    d = n(425493),
    u = n(852860),
    m = n(493544),
    g = n(585483),
    p = n(931240),
    h = n(970606),
    f = n(389134),
    b = n(35313),
    x = n(94963),
    j = n(745628),
    N = n(950279),
    _ = n(796918),
    v = n(513532),
    C = n(741595),
    O = n(974842),
    y = n(359380),
    I = n(308083),
    E = n(981631),
    S = n(231338),
    T = n(388032),
    P = n(35511);
function w(e) {
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
}
function R(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let Z = (e) => [
        {
            section: m.ID.HEADER,
            label: T.NW.string(T.t['7r0U+/'])
        },
        {
            section: I.Wy.GAMES,
            label: T.NW.string(T.t['6umL+/']),
            hasError: (null == e ? void 0 : e.gameApplicationIds) != null
        },
        {
            section: I.Wy.PLAYSTYLE,
            label: T.NW.string(T.t.SWXqQE),
            hasError: (null == e ? void 0 : e.playstyle) != null
        },
        { section: m.ID.DIVIDER },
        {
            section: m.ID.HEADER,
            label: T.NW.string(T.t['eNC+OT'])
        },
        {
            section: I.Wy.UTILITY_TRAITS,
            label: T.NW.string(T.t.oBixMj)
        },
        {
            section: I.Wy.INTERESTS,
            label: T.NW.string(T.t.WqEH5O),
            hasError: (null == e ? void 0 : e.interests) != null
        },
        {
            section: I.Wy.DESCRIPTION,
            label: T.NW.string(T.t.SnIjAQ),
            hasError: (null == e ? void 0 : e.description) != null || (null == e ? void 0 : e.wildcardDescriptors) != null
        },
        { section: m.ID.DIVIDER },
        {
            section: m.ID.HEADER,
            label: T.NW.string(T.t.qEgjwM)
        },
        {
            section: I.Wy.CUSTOMIZE_TAG_BADGE,
            label: T.NW.string(T.t.MuFv4e),
            hasError: (null == e ? void 0 : e.tag) != null || (null == e ? void 0 : e.badgeKind) != null || (null == e ? void 0 : e.badgePrimaryColor) != null || (null == e ? void 0 : e.badgeSecondaryColor) != null
        },
        {
            section: I.Wy.CUSTOMIZE_BANNER,
            label: T.NW.string(T.t['/A+uVF']),
            hasError: (null == e ? void 0 : e.banner) != null || (null == e ? void 0 : e.brandPrimaryColor) != null || (null == e ? void 0 : e.brandSecondaryColor) != null
        },
        { section: m.ID.DIVIDER },
        {
            section: I.Wy.MEMBER_APPLICATION,
            label: T.NW.string(T.t.aOQWKi),
            hasError: (null == e ? void 0 : e.verificationForm) != null
        },
        { section: m.ID.DIVIDER },
        {
            section: m.ID.CUSTOM,
            label: T.NW.string(T.t.vc5h39),
            element: D
        }
    ],
    D = (e) => {
        let { guildId: t, onClose: s, dirty: a } = e,
            [l, c] = i.useState(!1),
            d = async () => {
                c(!0);
                try {
                    await (0, p.nr)(t), s();
                } catch (e) {
                    throw (c(!1), e);
                }
            };
        return (0, r.jsxs)(o.njP.Item, {
            selectedItem: !1,
            className: P.deleteItem,
            'aria-label': T.NW.string(T.t.vc5h39),
            onClick: () => {
                if (a) return void g.S.dispatch(E.CkL.EMPHASIZE_NOTICE);
                (0, o.ZDy)(async () => {
                    let { ConfirmModal: e } = await Promise.resolve().then(n.bind(n, 481060));
                    return (t) =>
                        (0, r.jsx)(
                            e,
                            R(w({}, t), {
                                header: T.NW.string(T.t.EXskgI),
                                confirmText: T.NW.string(T.t['cY+Ooa']),
                                cancelText: T.NW.string(T.t['ETE/oK']),
                                loading: l,
                                onConfirm: d,
                                children: (0, r.jsx)(o.Text, {
                                    variant: 'text-md/normal',
                                    children: T.NW.string(T.t.OsRkMz)
                                })
                            })
                        );
                });
            },
            children: [
                (0, r.jsx)(o.XHJ, {
                    size: 'xs',
                    color: 'currentColor',
                    className: P.statusDanger
                }),
                (0, r.jsx)(o.Text, {
                    variant: 'text-md/medium',
                    color: 'status-danger',
                    children: T.NW.string(T.t.vc5h39)
                })
            ]
        });
    },
    A = (e) => {
        let { isErrorVisible: t } = e,
            n = (0, o.dQu)(o.TVs.colors.HEADER_PRIMARY, S.BR.DARK),
            i = (0, o.dQu)(o.TVs.colors.TEXT_MUTED, S.BR.DARK);
        return t
            ? (0, r.jsxs)('div', {
                  className: P.tooltipContents,
                  children: [
                      (0, r.jsx)(o.aNP, {
                          size: 'xs',
                          color: 'currentColor',
                          className: P.errorIconTooltip
                      }),
                      (0, r.jsxs)('div', {
                          children: [
                              (0, r.jsx)(o.Text, {
                                  variant: 'text-sm/medium',
                                  style: { color: n.hex() },
                                  children: T.NW.string(T.t.M6w76e)
                              }),
                              (0, r.jsx)(o.Text, {
                                  variant: 'text-xs/normal',
                                  style: { color: i.hex() },
                                  children: T.NW.string(T.t.pNtCgo)
                              })
                          ]
                      })
                  ]
              })
            : null;
    },
    k = (e) => {
        let { guildId: t, onClose: n } = e,
            [S, D] = i.useState(I.Wy.GAMES),
            {
                initialSettings: k,
                settings: W,
                errors: L,
                submitting: M,
                dirty: G
            } = (0, a.cj)([f.Z], () => {
                var e;
                let t = f.Z.getState();
                return {
                    initialSettings: t.initialSettings,
                    settings: t.settings,
                    errors: null != (e = t.errors) ? e : {},
                    submitting: t.submitting,
                    dirty: t.dirty
                };
            }),
            U = i.useCallback(
                (e) => {
                    G ? g.S.dispatch(E.CkL.EMPHASIZE_NOTICE) : D(e);
                },
                [G]
            ),
            B = (0, b.f)(),
            F = i.useCallback(
                (e) => {
                    'Escape' === e.key && (e.stopPropagation(), n());
                },
                [n]
            );
        i.useEffect(() => {
            (0, h.GO)(t, (0, h.Qh)(S));
        }, [t, S]),
            i.useEffect(
                () => (
                    window.addEventListener('keydown', F),
                    () => {
                        window.removeEventListener('keydown', F);
                    }
                ),
                [F]
            ),
            i.useEffect(() => {
                c.Z.getDetectableGames();
            }, []),
            i.useEffect(() => {
                (0, p.aH)(t);
            }, [t]);
        let z = i.useCallback((e) => (0, p.mf)(t, { gameApplicationIds: e }), [t]),
            H = i.useCallback((e) => (0, p.mf)(t, { playstyle: e }), [t]),
            V = i.useCallback((e) => (0, p.mf)(t, { interests: e }), [t]),
            Y = i.useCallback((e) => (0, p.mf)(t, e), [t]),
            K = i.useCallback(() => {
                G ? g.S.dispatch(E.CkL.EMPHASIZE_NOTICE) : n();
            }, [G, n]),
            q = async () => {
                await (0, p.Ii)(t, W), (0, h.Af)(t);
            },
            X = i.useMemo(() => null != L && Object.values(L).some((e) => null != e), [L]);
        if (null == W) return null;
        let Q = Z(L);
        return (0, r.jsxs)(s.animated.div, {
            style: B,
            className: P.modal,
            children: [
                (0, r.jsx)(o.ua7, {
                    color: o.ua7.Colors.GREY,
                    tooltipClassName: P.tooltip,
                    text: (0, r.jsx)(A, { isErrorVisible: X }),
                    position: 'left',
                    'aria-label': null != X ? T.NW.string(T.t.M6w76e) : void 0,
                    shouldShow: X,
                    forceOpen: X,
                    children: (e) =>
                        (0, r.jsx)(
                            d.Z,
                            R(w({}, e), {
                                className: P.closeButton,
                                closeAction: K,
                                keybind: 'ESC'
                            })
                        )
                }),
                (0, r.jsxs)('div', {
                    className: P.modalContents,
                    children: [
                        (0, r.jsx)('div', {
                            className: P.sidebarWrapper,
                            children: (0, r.jsx)(o.njP, {
                                className: P.sidebar,
                                selectedItem: S,
                                onItemSelect: U,
                                orientation: 'vertical',
                                children: Q.map((e, i) => {
                                    switch (e.section) {
                                        case m.ID.HEADER:
                                            return (0, r.jsx)(o.njP.Header, { children: e.label }, 'header-'.concat(i));
                                        case m.ID.DIVIDER:
                                            return (0, r.jsx)(o.njP.Separator, {}, 'divider-'.concat(i));
                                        case m.ID.CUSTOM:
                                            let s = e.element;
                                            return (0, r.jsx)(
                                                s,
                                                {
                                                    dirty: G,
                                                    guildId: t,
                                                    onClose: n
                                                },
                                                e.label
                                            );
                                        default:
                                            return (0, r.jsx)(
                                                o.njP.Item,
                                                {
                                                    className: P.settingsTab,
                                                    'aria-label': e.label,
                                                    id: e.section,
                                                    children: (0, r.jsxs)(r.Fragment, {
                                                        children: [
                                                            e.label,
                                                            e.hasError &&
                                                                (0, r.jsx)(o.ua7, {
                                                                    color: o.ua7.Colors.GREY,
                                                                    position: 'right',
                                                                    text: T.NW.string(T.t.M6w76e),
                                                                    children: (e) =>
                                                                        (0, r.jsx)(
                                                                            o.aNP,
                                                                            R(
                                                                                w(
                                                                                    {
                                                                                        size: 'xs',
                                                                                        color: 'currentColor'
                                                                                    },
                                                                                    e
                                                                                ),
                                                                                { className: P.errorIcon }
                                                                            )
                                                                        )
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
                        (0, r.jsxs)('div', {
                            className: P.mainContent,
                            children: [
                                (0, r.jsx)(o.zJl, {
                                    children: (() => {
                                        switch (S) {
                                            case I.Wy.GAMES:
                                                var e;
                                                return (0, r.jsx)(N.Z, {
                                                    title: T.NW.string(T.t.t6Mbq6),
                                                    description: T.NW.string(T.t.E7Ymwc),
                                                    onUpdateGames: z,
                                                    gameApplicationIds: null != (e = W.gameApplicationIds) ? e : new Set(),
                                                    error: L.gameApplicationIds,
                                                    guildId: t,
                                                    includeSuggestedGames: !0
                                                });
                                            case I.Wy.PLAYSTYLE:
                                                return (0, r.jsx)(C.Z, {
                                                    title: T.NW.string(T.t.W0h7pa),
                                                    description: T.NW.string(T.t.JHYekZ),
                                                    onUpdatePlaystyle: H,
                                                    playstyle: W.playstyle,
                                                    error: L.playstyle
                                                });
                                            case I.Wy.UTILITY_TRAITS:
                                                return (0, r.jsx)(y.Z, {
                                                    guildId: t,
                                                    title: T.NW.string(T.t.G4tP09),
                                                    description: T.NW.string(T.t['6Eos19']),
                                                    onUpdateTraits: V,
                                                    progress: W
                                                });
                                            case I.Wy.INTERESTS:
                                                return (0, r.jsx)(_.Z, {
                                                    guildId: t,
                                                    handleUpdate: Y,
                                                    progress: W,
                                                    error: L.interests
                                                });
                                            case I.Wy.DESCRIPTION:
                                                return (0, r.jsx)(j.Z, {
                                                    guildId: t,
                                                    handleUpdate: Y,
                                                    progress: W,
                                                    errors: L
                                                });
                                            case I.Wy.CUSTOMIZE_TAG_BADGE:
                                                return (0, r.jsx)(O.Z, {
                                                    handleUpdate: Y,
                                                    tag: W.tag,
                                                    error: L.tag,
                                                    badge: W.badgeKind,
                                                    primaryColor: W.badgePrimaryColor,
                                                    secondaryColor: W.badgeSecondaryColor,
                                                    furthestStep: I.Wy.CUSTOMIZE_TAG_BADGE,
                                                    inSettings: !0
                                                });
                                            case I.Wy.MEMBER_APPLICATION:
                                                return (0, r.jsx)(v.Z, {
                                                    guildId: t,
                                                    inSettings: !0,
                                                    error: L.verificationForm
                                                });
                                            case I.Wy.CUSTOMIZE_BANNER:
                                                return (0, r.jsx)(x.Z, {
                                                    guildId: t,
                                                    handleUpdate: Y,
                                                    progress: W
                                                });
                                            default:
                                                return null;
                                        }
                                    })()
                                }),
                                (0, r.jsx)(l.W, {
                                    component: 'div',
                                    children:
                                        G &&
                                        (0, r.jsx)(o.oXn, {
                                            className: P.noticeRegion,
                                            children: (0, r.jsx)(u.Z, {
                                                onSave: q,
                                                submitting: M,
                                                onReset: () => {
                                                    (0, p.mf)(t, k);
                                                },
                                                errorMessage: Object.values(L).find((e) => null != e)
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
