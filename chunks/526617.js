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
    w = n(979651),
    R = n(259580),
    P = n(626135),
    D = n(74538),
    L = n(388081),
    x = n(763296),
    k = n(697426),
    j = n(242291),
    M = n(22382),
    U = n(747071),
    G = n(421673),
    B = n(663215),
    Z = n(835648),
    F = n(650743),
    V = n(495332),
    H = n(343747),
    Y = n(981631),
    W = n(957825),
    K = n(474936),
    z = n(388032),
    q = n(316443);
function $(e, t, n) {
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
function X(e) {
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
                $(e, t, n[t]);
            }));
    }
    return e;
}
function Q(e, t) {
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
function J(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : Q(Object(t)).forEach(function (n) {
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
        [k.bg.SEARCH]: _.Z.SOUNDBOARD_SEARCH_RESULTS_SECTION,
        [k.bg.DEFAULTS]: _.Z.SOUNDBOARD_DEFAULT_SOUNDS_SECTION,
        [k.bg.GUILD]: _.Z.SOUNDBOARD_GUILD_SOUNDS_SECTION,
        [k.bg.FAVORITES]: _.Z.SOUNDBOARD_FAVORITES_SECTION,
        [k.bg.RECENTLY_HEARD]: _.Z.SOUNDBOARD_RECENTLY_HEARD_SECTION,
        [k.bg.FREQUENTLY_USED]: _.Z.SOUNDBOARD_FREQUENTLY_USED_SECTION
    };
function ec(e, t, n) {
    return (null == n && e.type === k.bg.GUILD && !t) || (e.type === k.bg.GUILD && e.guild.id !== n && !t);
}
function eu(e) {
    let { categoryInfo: t, collapsed: n, toggleCollapsed: i, index: a, isSectionNitroLocked: s, showNitroDivider: l } = e;
    function u() {
        switch (t.type) {
            case k.bg.FAVORITES:
                return (0, r.jsx)(c.r7p, {
                    size: 'xs',
                    color: 'currentColor',
                    className: q.headerIcon
                });
            case k.bg.RECENTLY_HEARD:
                return (0, r.jsx)(c.T39, {
                    size: 'custom',
                    width: 20,
                    height: 20,
                    color: 'currentColor',
                    className: q.headerIcon
                });
            case k.bg.FREQUENTLY_USED:
                return (0, r.jsx)(c.IeX, { className: q.headerIcon });
            case k.bg.GUILD:
                return (0, r.jsx)(g.Z, {
                    guild: t.guild,
                    height: ee,
                    width: ee
                });
            case k.bg.DEFAULTS:
                return (0, r.jsx)(c.gw7, {
                    size: 'custom',
                    width: 28,
                    height: 28,
                    color: 'currentColor',
                    className: q.headerIcon
                });
            case k.bg.SEARCH:
                return (0, r.jsx)(c._Ve, {
                    size: 'md',
                    color: 'currentColor',
                    className: q.headerIcon
                });
        }
    }
    function d() {
        switch (t.type) {
            case k.bg.FAVORITES:
                return z.intl.string(z.t.k8fFjo);
            case k.bg.RECENTLY_HEARD:
                return z.intl.string(z.t['8i/+SE']);
            case k.bg.FREQUENTLY_USED:
                return z.intl.string(z.t['+cGVV1']);
            case k.bg.GUILD:
                return t.guild.name;
            case k.bg.DEFAULTS:
                return z.intl.string(z.t.Rtvk9f);
            case k.bg.SEARCH:
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
                            (0, r.jsx)(R.Z, {
                                className: q.headerIcon,
                                direction: n ? R.Z.Directions.RIGHT : R.Z.Directions.DOWN
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
    let { guildId: t, channel: a, containerWidth: d, onClose: g, onSelect: I, shouldValidateSelectedSound: R = !1, suppressPlaySound: $ = !1, shouldShowUpsell: Q = !0, gridNotice: ee, soundButtonOverlay: ef, listPadding: e_, renderHeader: ep, defaultSoundsOnly: eh = !1, inExpressionPicker: em, analyticsSource: eg } = e,
        { audioRef: eE } = i.useContext(S.Z),
        { analyticsLocations: eb } = (0, p.ZP)(),
        { analyticsLocations: ey } = (0, p.ZP)(_.Z.PREMIUM_UPSELL),
        { location: eO } = (0, f.O)(),
        ev = i.useMemo(() => J(X({}, eO), { section: Y.jXE.SOUNDBOARD_SOUND_PICKER }), [eO]),
        [eI, eT] = i.useState(null),
        eS = (0, l.e7)([C.default], () => C.default.getCurrentUser()),
        eA = (0, D.I5)(eS, K.p9.TIER_2),
        eN = (0, l.e7)([w.Z], () => {
            var e;
            return w.Z.getVoiceState(t, null != (e = null == eS ? void 0 : eS.id) ? e : Y.lds);
        }),
        eC = (null == eN ? void 0 : eN.selfDeaf) || (null == eN ? void 0 : eN.mute) || (null == eN ? void 0 : eN.suppress),
        ew = (0, b.Iu)((e) => e.searchQuery),
        eR = null != ew && '' !== ew,
        eP = (0, m.Dt)(),
        eD = L.C.useExperiment({ location: 'SoundboardSoundGrid' }),
        { categories: eL, allSounds: ex, soundCounts: ek } = (0, B.ZP)(a, {}, eh),
        [ej, eM] = i.useState([]),
        eU = (0, B.FS)(eL, ej, ew),
        eG = (0, b.Iu)((e) => e.isNitroLockedSectionVisible),
        eB = eU.filter((e) => e.items.length > 0),
        eZ = eB.findLastIndex((e) => !!(0, D._O)(e.categoryInfo) && e.categoryInfo.isNitroLocked),
        eF = !eA && Q && -1 !== eZ,
        eV = A.T4.useSetting(),
        eH = i.useMemo(() => new Set(eV), [eV]),
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
                if (null != I && !R) return I(e, n);
                let r = (0, j.Nq)(eS, e, a, !1);
                if (null != I && R && r) I(e, n);
                else if (!$ && r && (0, j.C0)(a)) {
                    var i;
                    ((0, j.GN)(e, null != (i = null == a ? void 0 : a.id) ? i : Y.lds, t),
                        eR &&
                            P.default.track(Y.rMx.SEARCH_RESULT_SELECTED, {
                                search_type: Y.aib.SOUNDBOARD,
                                channel_id: null == a ? void 0 : a.id,
                                query: ew,
                                location_stack: t
                            }));
                } else {
                    if ((0, j.Nq)(eS, e, a)) return;
                    Q && eT(e);
                }
            },
            [$, eS, a, Q, eR, ew, I, R]
        ),
        eq = i.useCallback(
            (e, t) => {
                switch (e.item.type) {
                    case k.vB.SOUND:
                        var n;
                        let r = null != (n = el[null == e ? void 0 : e.category]) ? n : null;
                        return ez(e.item.sound, null == r ? eb : [...eb, r], (null == t ? void 0 : t.shiftKey) !== !0);
                    case k.vB.ADD_SOUND:
                        return (g(), (0, H.Z)(e.item.guild.id));
                }
            },
            [eb, ez, g]
        ),
        e$ = i.useCallback(
            (e, n, i, s, l) => {
                let c = eB[i.sectionIndex],
                    u = Q && ec(c.categoryInfo, eA, t) && eF,
                    d = i.sectionIndex === eB.length - 1 && i.rowIndex === i.totalRowCount - 1;
                return (0, r.jsx)(
                    'ul',
                    J(X({}, n), {
                        className: o()(q.soundRow, {
                            [q.soundRowNitroLocked]: u,
                            [q.lastSoundRow]: d
                        }),
                        children: e.map((e, t) =>
                            (0, r.jsx)(
                                V.Z,
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
                                    suppressPlaySound: $,
                                    getItemProps: s,
                                    onSelectItem: eq,
                                    onItemMouseEnter: l,
                                    buttonOverlay: ef,
                                    isNitroLocked: u,
                                    shouldShowUpsell: Q,
                                    inExpressionPicker: em
                                },
                                t
                            )
                        )
                    }),
                    'row-'.concat(n['aria-rowindex'])
                );
            },
            [eB, Q, eA, t, $, eq, a, eY, eW, eC, eb, ef, eF, em]
        ),
        eX = i.useCallback(
            (e, t) => {
                if (e <= 0 || !Q) return !1;
                let n = eB[e],
                    r = eB[e - 1],
                    i = ec(n.categoryInfo, eA, t),
                    a = ec(r.categoryInfo, eA, t);
                return i && !a;
            },
            [eB, Q, eA]
        ),
        eQ = i.useCallback(() => {
            let e = x.Z.getSoundById(es);
            null != e && eT(e);
        }, []),
        eJ = i.useCallback(() => {
            let e = (0, D.Px)(K.p9.TIER_2);
            return z.intl.format(z.t['tw/SSk'], {
                nitroTierName: e,
                onClick: eQ
            });
        }, [eQ]),
        e0 = i.useCallback((e) => (0 === e ? ea : eX(e, t) ? ei : er), [t, eX]),
        e1 = i.useCallback(
            (e) => {
                let t = e === eB.length - 1;
                return eF && t ? 60 : eF && e === eZ ? 20 : 0;
            },
            [eB.length, eF, eZ]
        ),
        e2 = i.useCallback(
            (e, n) => {
                let i = ''.concat(e.key),
                    a = Q && ec(e.categoryInfo, eA, t),
                    o = eX(n, t),
                    s = eH.has(i),
                    l = () => {
                        (P.default.track(Y.rMx.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
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
            [eH, eK, t, eX, Q, eA, eF]
        ),
        e3 = i.useCallback(
            (e, t) => {
                let n = t === eB.length - 1,
                    i = t === eZ;
                return eF && n ? (0, r.jsx)('div', { className: o()(q.lastSectionFooter, { [q.nitroLocked]: i }) }) : eF && t === eZ ? (0, r.jsx)('div', { className: o()(q.smallPaddingFooter, q.nitroLocked) }) : null;
            },
            [eZ, eF, eB.length]
        ),
        e5 = i.useCallback((e) => eM((0, G.cK)(e, Array.from(ex.values()).flat(), eS, a, eb)), [a, eS, ex, eb]),
        e4 = i.useCallback(
            (e) => {
                (0, u.jW)(e, async () => {
                    let { default: e } = await n.e('56049').then(n.bind(n, 338991));
                    return (t) => (0, r.jsx)(e, X({ sourceAnalyticsLocations: eb }, t));
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
                          onClick: e4,
                          'aria-label': z.intl.string(z.t.kbFsAA),
                          children: (0, r.jsx)(c.gj8, {
                              size: 'md',
                              color: 'currentColor',
                              className: q.settingsIcon
                          })
                      }),
            [em, e4]
        ),
        e8 = i.useCallback(
            (e) =>
                (0, r.jsx)(Z.Z, {
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
                          text: eJ(),
                          button: z.intl.string(z.t.pj0XBA),
                          buttonAnalyticsObject: { section: Y.jXE.SOUND_PICKER_FLOATING_UPSELL }
                      })
                    : null,
            [eJ, eF, eD.alwaysStickyUpsell, eG]
        ),
        e9 = i.useCallback(
            (e) => {
                var t;
                return (null == e ? void 0 : e.item.type) !== k.vB.SOUND
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
                n = new Audio((0, M.Z)(es));
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
                available_custom_sounds_count: ek.unlockedCustomSoundCount,
                unavailable_custom_sounds_count: ek.lockedCustomSoundCount,
                favorite_sounds_count: ek.favoriteSoundCount
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
                              location: J(X({}, ev), { object: Y.qAy.SOUNDBOARD_SOUND }),
                              location_stack: ey,
                              sku_id: D.ZP.getSkuIdForPremiumType(K.p9.TIER_2)
                          },
                          onClose: () => eT(null),
                          onLearnMore: g,
                          onDisplay: tt
                      })
                    : void 0,
                (0, r.jsx)(y.Z, {
                    categories: eB,
                    collapsedCategories: eH,
                    containerWidth: d,
                    store: E.Wq,
                    onSelectItem: eq,
                    onSearchExpressions: e5,
                    hasSearchResults: ej.length > 0,
                    defaultSearchPlaceholder: z.intl.string(z.t.sKt3xc),
                    renderRow: e$,
                    renderSectionHeader: e2,
                    renderSectionFooter: e3,
                    renderCategoryList: e8,
                    renderHeaderAccessories: e6,
                    rowHeight: en,
                    sectionHeaderHeight: e0,
                    sectionFooterHeight: e1,
                    listPadding: et,
                    itemNodeWidth: eo,
                    gridNavigatorId: eP,
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
