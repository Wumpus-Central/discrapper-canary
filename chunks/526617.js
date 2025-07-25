(n.d(t, {
    O: () => ec,
    Z: () => ef
}),
    n(388685),
    n(856094),
    n(472816),
    n(794429));
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(990547),
    l = n(442837),
    c = n(481060),
    u = n(239091),
    d = n(788911),
    f = n(2052),
    _ = n(100527),
    p = n(906732),
    h = n(213609),
    m = n(313201),
    g = n(880949),
    E = n(806966),
    b = n(28546),
    y = n(468954),
    O = n(409700),
    v = n(53691),
    I = n(75145),
    T = n(609218),
    S = n(386965),
    A = n(695346),
    N = n(19780),
    C = n(594174),
    R = n(979651),
    P = n(259580),
    w = n(626135),
    D = n(74538),
    L = n(388081),
    x = n(763296),
    M = n(697426),
    k = n(242291),
    j = n(22382),
    U = n(747071),
    G = n(421673),
    B = n(663215),
    V = n(835648),
    F = n(650743),
    Z = n(495332),
    H = n(343747),
    Y = n(981631),
    W = n(957825),
    K = n(474936),
    z = n(388032),
    q = n(316443);
function X(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function Q(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                X(e, t, n[t]);
            }));
    }
    return e;
}
function J(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function $(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : J(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let ee = 16,
    et = [8, 0, 8, 0],
    en = 48,
    er = 32,
    ei = 32 + I.Kn,
    ea = 16,
    eo = 150,
    es = '3',
    el = {
        [M.bg.SEARCH]: _.Z.SOUNDBOARD_SEARCH_RESULTS_SECTION,
        [M.bg.DEFAULTS]: _.Z.SOUNDBOARD_DEFAULT_SOUNDS_SECTION,
        [M.bg.GUILD]: _.Z.SOUNDBOARD_GUILD_SOUNDS_SECTION,
        [M.bg.FAVORITES]: _.Z.SOUNDBOARD_FAVORITES_SECTION,
        [M.bg.RECENTLY_HEARD]: _.Z.SOUNDBOARD_RECENTLY_HEARD_SECTION,
        [M.bg.FREQUENTLY_USED]: _.Z.SOUNDBOARD_FREQUENTLY_USED_SECTION
    };
function ec(e, t, n) {
    return (null == n && e.type === M.bg.GUILD && !t) || (e.type === M.bg.GUILD && e.guild.id !== n && !t);
}
function eu(e) {
    let { categoryInfo: t, collapsed: n, toggleCollapsed: i, index: a, isSectionNitroLocked: s, showNitroDivider: l } = e;
    function u() {
        switch (t.type) {
            case M.bg.FAVORITES:
                return (0, r.jsx)(c.r7p, {
                    size: 'xs',
                    color: 'currentColor',
                    className: q.headerIcon
                });
            case M.bg.RECENTLY_HEARD:
                return (0, r.jsx)(c.T39, {
                    size: 'custom',
                    width: 20,
                    height: 20,
                    color: 'currentColor',
                    className: q.headerIcon
                });
            case M.bg.FREQUENTLY_USED:
                return (0, r.jsx)(c.IeX, { className: q.headerIcon });
            case M.bg.GUILD:
                return (0, r.jsx)(g.Z, {
                    guild: t.guild,
                    height: ee,
                    width: ee
                });
            case M.bg.DEFAULTS:
                return (0, r.jsx)(c.gw7, {
                    size: 'custom',
                    width: 28,
                    height: 28,
                    color: 'currentColor',
                    className: q.headerIcon
                });
            case M.bg.SEARCH:
                return (0, r.jsx)(c._Ve, {
                    size: 'md',
                    color: 'currentColor',
                    className: q.headerIcon
                });
        }
    }
    function d() {
        switch (t.type) {
            case M.bg.FAVORITES:
                return z.intl.string(z.t.k8fFjo);
            case M.bg.RECENTLY_HEARD:
                return z.intl.string(z.t['8i/+SE']);
            case M.bg.FREQUENTLY_USED:
                return z.intl.string(z.t['+cGVV1']);
            case M.bg.GUILD:
                return t.guild.name;
            case M.bg.DEFAULTS:
                return z.intl.string(z.t.Rtvk9f);
            case M.bg.SEARCH:
                return z.intl.string(z.t.zkoeq6);
        }
    }
    return (0, r.jsxs)(r.Fragment, {
        children: [
            l &&
                (0, r.jsx)(I.ZP, {
                    colorOpacity: 0.35,
                    glowOpacity: 0.35
                }),
            (0, r.jsx)('div', {
                className: o()(q.sectionContainer, { [q.sectionContainerNitroLocked]: s }),
                children: (0, r.jsx)(c.P3F, {
                    className: o()(q.sectionHeader, { [q.notFirstSectionHeader]: 0 !== a }),
                    onClick: i,
                    'aria-expanded': !n,
                    children: (0, r.jsxs)('div', {
                        className: q.sectionHeaderContent,
                        children: [
                            u(),
                            (0, r.jsx)(c.X6q, {
                                variant: 'text-sm/semibold',
                                color: 'none',
                                className: q.sectionTitle,
                                children: d()
                            }),
                            (0, r.jsx)(P.Z, {
                                className: q.headerIcon,
                                direction: n ? P.Z.Directions.RIGHT : P.Z.Directions.DOWN
                            })
                        ]
                    })
                })
            })
        ]
    });
}
function ed() {
    return (0, r.jsx)(d.Z, { message: z.intl.string(z.t.bgDdND) });
}
function ef(e) {
    let { guildId: t, channel: a, containerWidth: d, onClose: g, onSelect: I, shouldValidateSelectedSound: P = !1, suppressPlaySound: X = !1, shouldShowUpsell: J = !0, gridNotice: ee, soundButtonOverlay: ef, listPadding: e_, renderHeader: ep, defaultSoundsOnly: eh = !1, inExpressionPicker: em, analyticsSource: eg } = e,
        { audioRef: eE } = i.useContext(S.Z),
        { analyticsLocations: eb } = (0, p.ZP)(),
        { analyticsLocations: ey } = (0, p.ZP)(_.Z.PREMIUM_UPSELL),
        { location: eO } = (0, f.O)(),
        ev = i.useMemo(() => $(Q({}, eO), { section: Y.jXE.SOUNDBOARD_SOUND_PICKER }), [eO]),
        [eI, eT] = i.useState(null),
        eS = (0, l.e7)([C.default], () => C.default.getCurrentUser()),
        eA = (0, D.I5)(eS, K.p9.TIER_2),
        eN = (0, l.e7)([R.Z], () => {
            var e;
            return R.Z.getVoiceState(t, null != (e = null == eS ? void 0 : eS.id) ? e : Y.lds);
        }),
        eC = (null == eN ? void 0 : eN.selfDeaf) || (null == eN ? void 0 : eN.mute) || (null == eN ? void 0 : eN.suppress),
        eR = (0, b.Iu)((e) => e.searchQuery),
        eP = null != eR && '' !== eR,
        ew = (0, m.Dt)(),
        eD = L.C.useExperiment({ location: 'SoundboardSoundGrid' }),
        { categories: eL, allSounds: ex, soundCounts: eM } = (0, B.ZP)(a, {}, eh),
        [ek, ej] = i.useState([]),
        eU = (0, B.FS)(eL, ek, eR),
        eG = (0, b.Iu)((e) => e.isNitroLockedSectionVisible),
        eB = eU.filter((e) => e.items.length > 0),
        eV = eB.findLastIndex((e) => !!(0, D._O)(e.categoryInfo) && e.categoryInfo.isNitroLocked),
        eF = !eA && J && -1 !== eV,
        eZ = A.T4.useSetting(),
        eH = i.useMemo(() => new Set(eZ), [eZ]),
        eY = null == a,
        eW = D.ZP.canUseCustomCallSounds(eS),
        eK = i.useCallback(
            (e) => {
                (eH.has(e) ? eH.delete(e) : eH.add(e), A.T4.updateSetting(Array.from(eH)));
            },
            [eH]
        ),
        ez = i.useCallback(
            (e, t, n) => {
                if (null != I && !P) return I(e, n);
                let r = (0, k.Nq)(eS, e, a, !1);
                if (null != I && P && r) I(e, n);
                else if (!X && r && (0, k.C0)(a)) {
                    var i;
                    ((0, k.GN)(e, null != (i = null == a ? void 0 : a.id) ? i : Y.lds, t),
                        eP &&
                            w.default.track(Y.rMx.SEARCH_RESULT_SELECTED, {
                                search_type: Y.aib.SOUNDBOARD,
                                channel_id: null == a ? void 0 : a.id,
                                query: eR,
                                location_stack: t
                            }));
                } else {
                    if ((0, k.Nq)(eS, e, a)) return;
                    J && eT(e);
                }
            },
            [X, eS, a, J, eP, eR, I, P]
        ),
        eq = i.useCallback(
            (e, t) => {
                switch (e.item.type) {
                    case M.vB.SOUND:
                        var n;
                        let r = null != (n = el[null == e ? void 0 : e.category]) ? n : null;
                        return ez(e.item.sound, null == r ? eb : [...eb, r], (null == t ? void 0 : t.shiftKey) !== !0);
                    case M.vB.ADD_SOUND:
                        return (g(), (0, H.Z)(e.item.guild.id));
                }
            },
            [eb, ez, g]
        ),
        eX = i.useCallback(
            (e, n, i, s, l) => {
                let c = eB[i.sectionIndex],
                    u = J && ec(c.categoryInfo, eA, t) && eF,
                    d = i.sectionIndex === eB.length - 1 && i.rowIndex === i.totalRowCount - 1;
                return (0, r.jsx)(
                    'ul',
                    $(Q({}, n), {
                        className: o()(q.soundRow, {
                            [q.soundRowNitroLocked]: u,
                            [q.lastSoundRow]: d
                        }),
                        children: e.map((e, t) =>
                            (0, r.jsx)(
                                Z.Z,
                                {
                                    descriptor: e,
                                    soundButtonProps: {
                                        channel: a,
                                        interactive: eY ? eW : !eC,
                                        forceSecondaryActions: !0,
                                        analyticsLocations: eb
                                    },
                                    rowIndex: i.rowIndex,
                                    columnIndex: t,
                                    isUsingKeyboardNavigation: i.isUsingKeyboardNavigation,
                                    suppressPlaySound: X,
                                    getItemProps: s,
                                    onSelectItem: eq,
                                    onItemMouseEnter: l,
                                    buttonOverlay: ef,
                                    isNitroLocked: u,
                                    shouldShowUpsell: J,
                                    inExpressionPicker: em
                                },
                                t
                            )
                        )
                    }),
                    'row-'.concat(n['aria-rowindex'])
                );
            },
            [eB, J, eA, t, X, eq, a, eY, eW, eC, eb, ef, eF, em]
        ),
        eQ = i.useCallback(
            (e, t) => {
                if (e <= 0 || !J) return !1;
                let n = eB[e],
                    r = eB[e - 1],
                    i = ec(n.categoryInfo, eA, t),
                    a = ec(r.categoryInfo, eA, t);
                return i && !a;
            },
            [eB, J, eA]
        ),
        eJ = i.useCallback(() => {
            let e = x.Z.getSoundById(es);
            null != e && eT(e);
        }, []),
        e$ = i.useCallback(() => {
            let e = (0, D.Px)(K.p9.TIER_2);
            return z.intl.format(z.t['tw/SSk'], {
                nitroTierName: e,
                onClick: eJ
            });
        }, [eJ]),
        e0 = i.useCallback((e) => (0 === e ? ea : eQ(e, t) ? ei : er), [t, eQ]),
        e1 = i.useCallback(
            (e) => {
                let t = e === eB.length - 1;
                return eF && t ? 60 : eF && e === eV ? 20 : 0;
            },
            [eB.length, eF, eV]
        ),
        e2 = i.useCallback(
            (e, n) => {
                let i = ''.concat(e.key),
                    a = J && ec(e.categoryInfo, eA, t),
                    o = eQ(n, t),
                    s = eH.has(i),
                    l = () => {
                        (w.default.track(Y.rMx.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
                            location: { page: Y.ZY5.SOUNDBOARD_POPOUT },
                            tab: W.X1.SOUNDBOARD,
                            guild_id: null != t ? t : null,
                            collapsed: !s,
                            sticker_pack_id: null,
                            num_expressions: e.items.length
                        }),
                            eK(i));
                    };
                return (0, r.jsx)(
                    eu,
                    {
                        categoryInfo: e.categoryInfo,
                        toggleCollapsed: l,
                        collapsed: s,
                        index: n,
                        isSectionNitroLocked: a && eF,
                        showNitroDivider: o && eF
                    },
                    'header-'.concat(i)
                );
            },
            [eH, eK, t, eQ, J, eA, eF]
        ),
        e3 = i.useCallback(
            (e, t) => {
                let n = t === eB.length - 1,
                    i = t === eV;
                return eF && n ? (0, r.jsx)('div', { className: o()(q.lastSectionFooter, { [q.nitroLocked]: i }) }) : eF && t === eV ? (0, r.jsx)('div', { className: o()(q.smallPaddingFooter, q.nitroLocked) }) : null;
            },
            [eV, eF, eB.length]
        ),
        e4 = i.useCallback((e) => ej((0, G.cK)(e, Array.from(ex.values()).flat(), eS, a, eb)), [a, eS, ex, eb]),
        e5 = i.useCallback(
            (e) => {
                (0, u.jW)(e, async () => {
                    let { default: e } = await n.e('56049').then(n.bind(n, 338991));
                    return (t) => (0, r.jsx)(e, Q({ sourceAnalyticsLocations: eb }, t));
                });
            },
            [eb]
        ),
        e6 = i.useCallback(
            () =>
                em
                    ? (0, r.jsx)(O.Hh, {
                          renderPopout: () => (0, r.jsx)(O.hq, {}),
                          tooltipText: z.intl.string(z.t['19lt29']),
                          position: 'top',
                          clickableClassName: o()(q.settingsClickArea, q.settingsSoundmojiClickArea),
                          children: (0, r.jsx)(c.gj8, {
                              size: 'md',
                              color: 'currentColor',
                              className: q.settingsIcon
                          })
                      })
                    : (0, r.jsx)(c.P3F, {
                          tabIndex: 0,
                          className: q.settingsClickArea,
                          onClick: e5,
                          'aria-label': z.intl.string(z.t.kbFsAA),
                          children: (0, r.jsx)(c.gj8, {
                              size: 'md',
                              color: 'currentColor',
                              className: q.settingsIcon
                          })
                      }),
            [em, e5]
        ),
        e8 = i.useCallback(
            (e) =>
                (0, r.jsx)(V.Z, {
                    soundboardListRef: e,
                    categories: eL,
                    shouldUpsellLockedCategories: eF,
                    listPadding: e_,
                    guildId: t,
                    inExpressionPicker: em
                }),
            [eL, eF, e_, t, em]
        ),
        e7 = i.useCallback(
            () =>
                eF
                    ? (0, r.jsx)(v.p, {
                          showUpsell: eD.alwaysStickyUpsell || eG,
                          text: e$(),
                          button: z.intl.string(z.t.pj0XBA),
                          buttonAnalyticsObject: { section: Y.jXE.SOUND_PICKER_FLOATING_UPSELL }
                      })
                    : null,
            [e$, eF, eD.alwaysStickyUpsell, eG]
        ),
        e9 = i.useCallback(
            (e) => {
                var t;
                return (null == e ? void 0 : e.item.type) !== M.vB.SOUND
                    ? null
                    : (0, r.jsx)(F.Z, {
                          closePicker: g,
                          soundboardSound: null != (t = null == e ? void 0 : e.item.sound) ? t : null
                      });
            },
            [g]
        ),
        te = 'https://cdn.discordapp.com/assets/premium/roadblocks/soundboard_dark.png',
        tt = i.useCallback(() => {
            var e;
            let t = x.Z.getSoundById(es),
                n = new Audio((0, j.Z)(es));
            (null != eE.current && eE.current.pause(), (eE.current = n), (n.currentTime = 0), (n.volume = (0, U.Z)(null != (e = null == t ? void 0 : t.volume) ? e : 1)), n.play());
        }, [eE]),
        tn = (0, l.e7)([N.Z], () => N.Z.getMediaSessionId());
    return (
        (0, h.Z)({
            type: s.ImpressionTypes.POPOUT,
            name: s.ImpressionNames.SOUNDBOARD_POPOUT,
            properties: {
                source: eg,
                guild_id: t,
                media_session_id: tn,
                available_custom_sounds_count: eM.unlockedCustomSoundCount,
                unavailable_custom_sounds_count: eM.lockedCustomSoundCount,
                favorite_sounds_count: eM.favoriteSoundCount
            }
        }),
        (0, r.jsxs)(r.Fragment, {
            children: [
                null != eI
                    ? (0, r.jsx)(T.Z, {
                          containerContext: em ? T.p.TAB_PARENT_CONTAINER : T.p.NONE,
                          image: {
                              url: te,
                              width: 220,
                              height: 132
                          },
                          title: z.intl.string(em ? z.t.rZEEvb : z.t.jGDYFx),
                          description: z.intl.string(em ? z.t.ZPNG5O : z.t['grL/ho']),
                          enableSocialProof: !0,
                          analyticsLocationSection: Y.jXE.SOUNDBOARD_SOUND_PICKER_UPSELL,
                          upsellViewedTrackingData: {
                              type: K.cd.SOUND_PICKER_SOUND_CLICKED,
                              is_external: !0,
                              location: $(Q({}, ev), { object: Y.qAy.SOUNDBOARD_SOUND }),
                              location_stack: ey,
                              sku_id: D.ZP.getSkuIdForPremiumType(K.p9.TIER_2)
                          },
                          onClose: () => eT(null),
                          onDisplay: tt
                      })
                    : void 0,
                (0, r.jsx)(y.Z, {
                    categories: eB,
                    collapsedCategories: eH,
                    containerWidth: d,
                    store: E.Wq,
                    onSelectItem: eq,
                    onSearchExpressions: e4,
                    hasSearchResults: ek.length > 0,
                    defaultSearchPlaceholder: z.intl.string(z.t.sKt3xc),
                    renderRow: eX,
                    renderSectionHeader: e2,
                    renderSectionFooter: e3,
                    renderCategoryList: e8,
                    renderHeaderAccessories: e6,
                    rowHeight: en,
                    sectionHeaderHeight: e0,
                    sectionFooterHeight: e1,
                    listPadding: et,
                    itemNodeWidth: eo,
                    gridNavigatorId: ew,
                    renderEmptySearchState: ed,
                    renderInspector: e9,
                    gridNotice: ee,
                    renderHeader: ep,
                    renderUpsell: e7
                })
            ]
        })
    );
}
