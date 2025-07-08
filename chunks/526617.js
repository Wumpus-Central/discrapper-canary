(n.d(t, {
    O: () => el,
    Z: () => ed
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
    W = n(474936),
    K = n(388032),
    z = n(316443);
function q(e, t, n) {
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
                q(e, t, n[t]);
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
let $ = 16,
    ee = [8, 0, 8, 0],
    et = 48,
    en = 32,
    er = 32 + I.Kn,
    ei = 16,
    ea = 150,
    eo = '3',
    es = {
        [M.bg.SEARCH]: _.Z.SOUNDBOARD_SEARCH_RESULTS_SECTION,
        [M.bg.DEFAULTS]: _.Z.SOUNDBOARD_DEFAULT_SOUNDS_SECTION,
        [M.bg.GUILD]: _.Z.SOUNDBOARD_GUILD_SOUNDS_SECTION,
        [M.bg.FAVORITES]: _.Z.SOUNDBOARD_FAVORITES_SECTION,
        [M.bg.RECENTLY_HEARD]: _.Z.SOUNDBOARD_RECENTLY_HEARD_SECTION,
        [M.bg.FREQUENTLY_USED]: _.Z.SOUNDBOARD_FREQUENTLY_USED_SECTION
    };
function el(e, t, n) {
    return (null == n && e.type === M.bg.GUILD && !t) || (e.type === M.bg.GUILD && e.guild.id !== n && !t);
}
function ec(e) {
    let { categoryInfo: t, collapsed: n, toggleCollapsed: i, index: a, isSectionNitroLocked: s, showNitroDivider: l } = e;
    function u() {
        switch (t.type) {
            case M.bg.FAVORITES:
                return (0, r.jsx)(c.r7p, {
                    size: 'xs',
                    color: 'currentColor',
                    className: z.headerIcon
                });
            case M.bg.RECENTLY_HEARD:
                return (0, r.jsx)(c.T39, {
                    size: 'custom',
                    width: 20,
                    height: 20,
                    color: 'currentColor',
                    className: z.headerIcon
                });
            case M.bg.FREQUENTLY_USED:
                return (0, r.jsx)(c.IeX, { className: z.headerIcon });
            case M.bg.GUILD:
                return (0, r.jsx)(g.Z, {
                    guild: t.guild,
                    height: $,
                    width: $
                });
            case M.bg.DEFAULTS:
                return (0, r.jsx)(c.gw7, {
                    size: 'custom',
                    width: 28,
                    height: 28,
                    color: 'currentColor',
                    className: z.headerIcon
                });
            case M.bg.SEARCH:
                return (0, r.jsx)(c._Ve, {
                    size: 'md',
                    color: 'currentColor',
                    className: z.headerIcon
                });
        }
    }
    function d() {
        switch (t.type) {
            case M.bg.FAVORITES:
                return K.intl.string(K.t.k8fFjo);
            case M.bg.RECENTLY_HEARD:
                return K.intl.string(K.t['8i/+SE']);
            case M.bg.FREQUENTLY_USED:
                return K.intl.string(K.t['+cGVV1']);
            case M.bg.GUILD:
                return t.guild.name;
            case M.bg.DEFAULTS:
                return K.intl.string(K.t.Rtvk9f);
            case M.bg.SEARCH:
                return K.intl.string(K.t.zkoeq6);
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
                className: o()(z.sectionContainer, { [z.sectionContainerNitroLocked]: s }),
                children: (0, r.jsx)(c.P3F, {
                    className: o()(z.sectionHeader, { [z.notFirstSectionHeader]: 0 !== a }),
                    onClick: i,
                    'aria-expanded': !n,
                    children: (0, r.jsxs)('div', {
                        className: z.sectionHeaderContent,
                        children: [
                            u(),
                            (0, r.jsx)(c.X6q, {
                                variant: 'eyebrow',
                                color: 'none',
                                className: z.sectionTitle,
                                children: d()
                            }),
                            (0, r.jsx)(P.Z, {
                                className: z.headerIcon,
                                direction: n ? P.Z.Directions.RIGHT : P.Z.Directions.DOWN
                            })
                        ]
                    })
                })
            })
        ]
    });
}
function eu() {
    return (0, r.jsx)(d.Z, { message: K.intl.string(K.t.bgDdND) });
}
function ed(e) {
    let { guildId: t, channel: a, containerWidth: d, onClose: g, onSelect: I, shouldValidateSelectedSound: P = !1, suppressPlaySound: q = !1, shouldShowUpsell: Q = !0, gridNotice: $, soundButtonOverlay: ed, listPadding: ef, renderHeader: e_, defaultSoundsOnly: ep = !1, inExpressionPicker: eh, analyticsSource: em } = e,
        { audioRef: eg } = i.useContext(S.Z),
        { analyticsLocations: eE } = (0, p.ZP)(),
        { analyticsLocations: eb } = (0, p.ZP)(_.Z.PREMIUM_UPSELL),
        { location: ey } = (0, f.O)(),
        eO = i.useMemo(() => J(X({}, ey), { section: Y.jXE.SOUNDBOARD_SOUND_PICKER }), [ey]),
        [ev, eI] = i.useState(null),
        eT = (0, l.e7)([C.default], () => C.default.getCurrentUser()),
        eS = (0, D.I5)(eT, W.p9.TIER_2),
        eA = (0, l.e7)([R.Z], () => {
            var e;
            return R.Z.getVoiceState(t, null != (e = null == eT ? void 0 : eT.id) ? e : Y.lds);
        }),
        eN = (null == eA ? void 0 : eA.selfDeaf) || (null == eA ? void 0 : eA.mute) || (null == eA ? void 0 : eA.suppress),
        eC = (0, b.Iu)((e) => e.searchQuery),
        eR = null != eC && '' !== eC,
        eP = (0, m.Dt)(),
        ew = L.C.useExperiment({ location: 'SoundboardSoundGrid' }),
        { categories: eD, allSounds: eL, soundCounts: ex } = (0, B.ZP)(a, {}, ep),
        [eM, ek] = i.useState([]),
        [ej, eU] = i.useState(!1),
        eG = (0, B.FS)(eD, eM, eC),
        eB = (0, b.Iu)((e) => e.isNitroLockedSectionVisible),
        eV = eG.filter((e) => e.items.length > 0),
        eF = eV.findLastIndex((e) => !!(0, D._O)(e.categoryInfo) && e.categoryInfo.isNitroLocked),
        eZ = !eS && Q && -1 !== eF,
        eH = A.T4.useSetting(),
        eY = i.useMemo(() => new Set(eH), [eH]),
        eW = null == a,
        eK = D.ZP.canUseCustomCallSounds(eT),
        ez = i.useCallback(
            (e) => {
                (eY.has(e) ? eY.delete(e) : eY.add(e), A.T4.updateSetting(Array.from(eY)));
            },
            [eY]
        ),
        eq = i.useCallback(
            (e, t, n) => {
                if (null != I && !P) return I(e, n);
                let r = (0, k.Nq)(eT, e, a, !1);
                if (null != I && P && r) I(e, n);
                else if (!q && r && (0, k.C0)(a)) {
                    var i;
                    ((0, k.GN)(e, null != (i = null == a ? void 0 : a.id) ? i : Y.lds, t),
                        eR &&
                            w.default.track(Y.rMx.SEARCH_RESULT_SELECTED, {
                                search_type: Y.aib.SOUNDBOARD,
                                channel_id: null == a ? void 0 : a.id,
                                query: eC,
                                location_stack: t
                            }));
                } else {
                    if ((0, k.Nq)(eT, e, a)) return;
                    Q && eI(e);
                }
            },
            [q, eT, a, Q, eR, eC, I, P]
        ),
        eX = i.useCallback(
            (e, t) => {
                switch (e.item.type) {
                    case M.vB.SOUND:
                        var n;
                        let r = null != (n = es[null == e ? void 0 : e.category]) ? n : null;
                        return eq(e.item.sound, null == r ? eE : [...eE, r], (null == t ? void 0 : t.shiftKey) !== !0);
                    case M.vB.ADD_SOUND:
                        return (g(), (0, H.Z)(e.item.guild.id));
                }
            },
            [eE, eq, g]
        ),
        eQ = i.useCallback(
            (e, n, i, s, l) => {
                let c = eV[i.sectionIndex],
                    u = Q && el(c.categoryInfo, eS, t) && eZ,
                    d = i.sectionIndex === eV.length - 1 && i.rowIndex === i.totalRowCount - 1;
                return (0, r.jsx)(
                    'ul',
                    J(X({}, n), {
                        className: o()(z.soundRow, {
                            [z.soundRowNitroLocked]: u,
                            [z.lastSoundRow]: d
                        }),
                        children: e.map((e, t) =>
                            (0, r.jsx)(
                                Z.Z,
                                {
                                    descriptor: e,
                                    soundButtonProps: {
                                        channel: a,
                                        interactive: eW ? eK : !eN,
                                        forceSecondaryActions: !0,
                                        analyticsLocations: eE
                                    },
                                    rowIndex: i.rowIndex,
                                    columnIndex: t,
                                    isUsingKeyboardNavigation: i.isUsingKeyboardNavigation,
                                    suppressPlaySound: q,
                                    getItemProps: s,
                                    onSelectItem: eX,
                                    onItemMouseEnter: l,
                                    buttonOverlay: ed,
                                    isNitroLocked: u,
                                    shouldShowUpsell: Q,
                                    inExpressionPicker: eh
                                },
                                t
                            )
                        )
                    }),
                    'row-'.concat(n['aria-rowindex'])
                );
            },
            [eV, Q, eS, t, q, eX, a, eW, eK, eN, eE, ed, eZ, eh]
        ),
        eJ = i.useCallback(
            (e, t) => {
                if (e <= 0 || !Q) return !1;
                let n = eV[e],
                    r = eV[e - 1],
                    i = el(n.categoryInfo, eS, t),
                    a = el(r.categoryInfo, eS, t);
                return i && !a;
            },
            [eV, Q, eS]
        ),
        e$ = i.useCallback(() => {
            let e = x.Z.getSoundById(eo);
            null != e && eI(e);
        }, []),
        e0 = i.useCallback(() => {
            let e = (0, D.Px)(W.p9.TIER_2);
            return K.intl.format(K.t['tw/SSk'], {
                nitroTierName: e,
                onClick: e$
            });
        }, [e$]),
        e1 = i.useCallback((e) => (0 === e ? ei : eJ(e, t) ? er : en), [t, eJ]),
        e2 = i.useCallback(
            (e) => {
                let t = e === eV.length - 1;
                return eZ && t ? 60 : eZ && e === eF ? 20 : 0;
            },
            [eV.length, eZ, eF]
        ),
        e3 = i.useCallback(
            (e, n) => {
                let i = ''.concat(e.key),
                    a = Q && el(e.categoryInfo, eS, t),
                    o = eJ(n, t);
                return (0, r.jsx)(
                    ec,
                    {
                        categoryInfo: e.categoryInfo,
                        toggleCollapsed: () => ez(i),
                        collapsed: eY.has(i),
                        index: n,
                        isSectionNitroLocked: a && eZ,
                        showNitroDivider: o && eZ
                    },
                    'header-'.concat(i)
                );
            },
            [eY, ez, t, eJ, Q, eS, eZ]
        ),
        e4 = i.useCallback(
            (e, t) => {
                let n = t === eV.length - 1,
                    i = t === eF;
                return eZ && n ? (0, r.jsx)('div', { className: o()(z.lastSectionFooter, { [z.nitroLocked]: i }) }) : eZ && t === eF ? (0, r.jsx)('div', { className: o()(z.smallPaddingFooter, z.nitroLocked) }) : null;
            },
            [eF, eZ, eV.length]
        ),
        e5 = i.useCallback((e) => ek((0, G.cK)(e, Array.from(eL.values()).flat(), eT, a, eE)), [a, eT, eL, eE]),
        e6 = i.useCallback(
            (e) => {
                (0, u.jW)(e, async () => {
                    let { default: e } = await n.e('56049').then(n.bind(n, 338991));
                    return (t) => (0, r.jsx)(e, X({ sourceAnalyticsLocations: eE }, t));
                });
            },
            [eE]
        ),
        e8 = i.useCallback(
            () =>
                eh
                    ? (0, r.jsx)(O.Hh, {
                          renderPopout: () => (0, r.jsx)(O.hq, {}),
                          tooltipText: K.intl.string(K.t['19lt29']),
                          position: 'top',
                          clickableClassName: o()(z.settingsClickArea, z.settingsSoundmojiClickArea),
                          children: (0, r.jsx)(c.gj8, {
                              size: 'md',
                              color: 'currentColor',
                              className: z.settingsIcon
                          })
                      })
                    : (0, r.jsx)(c.P3F, {
                          tabIndex: 0,
                          className: z.settingsClickArea,
                          onClick: e6,
                          'aria-label': K.intl.string(K.t.kbFsAA),
                          children: (0, r.jsx)(c.gj8, {
                              size: 'md',
                              color: 'currentColor',
                              className: z.settingsIcon
                          })
                      }),
            [eh, e6]
        ),
        e7 = i.useCallback(
            (e) =>
                (0, r.jsx)(V.Z, {
                    soundboardListRef: e,
                    categories: eD,
                    shouldUpsellLockedCategories: eZ,
                    listPadding: ef,
                    guildId: t,
                    inExpressionPicker: eh
                }),
            [eD, eZ, ef, t, eh]
        ),
        e9 = i.useCallback(
            () =>
                eZ
                    ? (0, r.jsx)(v.p, {
                          showUpsell: ew.alwaysStickyUpsell || (ew.moveDefaultToBottom ? eB : ej),
                          text: e0(),
                          button: K.intl.string(K.t.pj0XBA),
                          buttonAnalyticsObject: { section: Y.jXE.SOUND_PICKER_FLOATING_UPSELL }
                      })
                    : null,
            [e0, eZ, ew.alwaysStickyUpsell, ej, eB, ew.moveDefaultToBottom]
        ),
        te = i.useCallback(
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
        tt = 'https://cdn.discordapp.com/assets/premium/roadblocks/soundboard_dark.png',
        tn = i.useCallback(() => {
            var e;
            let t = x.Z.getSoundById(eo),
                n = new Audio((0, j.Z)(eo));
            (null != eg.current && eg.current.pause(), (eg.current = n), (n.currentTime = 0), (n.volume = (0, U.Z)(null != (e = null == t ? void 0 : t.volume) ? e : 1)), n.play());
        }, [eg]),
        tr = (0, l.e7)([N.Z], () => N.Z.getMediaSessionId());
    return (
        (0, h.Z)({
            type: s.ImpressionTypes.POPOUT,
            name: s.ImpressionNames.SOUNDBOARD_POPOUT,
            properties: {
                source: em,
                guild_id: t,
                media_session_id: tr,
                available_custom_sounds_count: ex.unlockedCustomSoundCount,
                unavailable_custom_sounds_count: ex.lockedCustomSoundCount,
                favorite_sounds_count: ex.favoriteSoundCount
            }
        }),
        (0, r.jsxs)(r.Fragment, {
            children: [
                null != ev
                    ? (0, r.jsx)(T.Z, {
                          containerContext: eh ? T.p.TAB_PARENT_CONTAINER : T.p.NONE,
                          image: {
                              url: tt,
                              width: 220,
                              height: 132
                          },
                          title: K.intl.string(eh ? K.t.rZEEvb : K.t.jGDYFx),
                          description: K.intl.string(eh ? K.t.ZPNG5O : K.t['grL/ho']),
                          enableSocialProof: !0,
                          analyticsLocationSection: Y.jXE.SOUNDBOARD_SOUND_PICKER_UPSELL,
                          upsellViewedTrackingData: {
                              type: W.cd.SOUND_PICKER_SOUND_CLICKED,
                              is_external: !0,
                              location: J(X({}, eO), { object: Y.qAy.SOUNDBOARD_SOUND }),
                              location_stack: eb,
                              sku_id: D.ZP.getSkuIdForPremiumType(W.p9.TIER_2)
                          },
                          onClose: () => eI(null),
                          onDisplay: tn
                      })
                    : void 0,
                (0, r.jsx)(y.Z, {
                    categories: eV,
                    collapsedCategories: eY,
                    containerWidth: d,
                    store: E.Wq,
                    onSelectItem: eX,
                    onSearchExpressions: e5,
                    hasSearchResults: eM.length > 0,
                    defaultSearchPlaceholder: K.intl.string(K.t.sKt3xc),
                    renderRow: eQ,
                    renderSectionHeader: e3,
                    renderSectionFooter: e4,
                    renderCategoryList: e7,
                    renderHeaderAccessories: e8,
                    rowHeight: et,
                    sectionHeaderHeight: e1,
                    sectionFooterHeight: e2,
                    listPadding: ee,
                    itemNodeWidth: ea,
                    gridNavigatorId: eP,
                    renderEmptySearchState: eu,
                    renderInspector: te,
                    gridNotice: $,
                    renderHeader: e_,
                    renderUpsell: e9,
                    setShowUpsell: eU
                })
            ]
        })
    );
}
