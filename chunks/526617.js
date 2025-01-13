r.d(n, {
    O: function () {
        return ec;
    },
    Z: function () {
        return eh;
    }
});
var i = r(47120);
var a = r(200651),
    s = r(192379),
    o = r(120356),
    l = r.n(o),
    u = r(990547),
    c = r(442837),
    d = r(481060),
    f = r(239091),
    _ = r(788911),
    h = r(2052),
    p = r(100527),
    m = r(906732),
    g = r(213609),
    E = r(313201),
    v = r(880949),
    I = r(806966),
    T = r(28546),
    b = r(468954),
    y = r(409700),
    S = r(53691),
    A = r(75145),
    N = r(631771),
    C = r(609218),
    R = r(695346),
    O = r(19780),
    D = r(594174),
    L = r(979651),
    x = r(259580),
    w = r(626135),
    P = r(74538),
    M = r(135869),
    k = r(763296),
    U = r(697426),
    B = r(242291),
    G = r(22382),
    F = r(747071),
    Z = r(421673),
    V = r(663215),
    j = r(409673),
    H = r(347072),
    Y = r(835648),
    W = r(650743),
    K = r(394740),
    z = r(343747),
    q = r(981631),
    Q = r(474936),
    X = r(388032),
    J = r(61368);
let $ = 16,
    ee = [8, 0, 8, 0],
    et = 48,
    en = 80,
    er = 32,
    ei = 32 + A.Kn,
    ea = 16,
    es = 150,
    eo = 100,
    el = 60,
    eu = '3';
function ec(e, n, r) {
    return (null == r && e.type === U.bg.GUILD && !n) || (e.type === U.bg.GUILD && e.guild.id !== r && !n);
}
function ed(e) {
    let { categoryInfo: n, collapsed: r, toggleCollapsed: i, index: s, isSectionNitroLocked: o, showNitroDivider: u } = e;
    function c() {
        switch (n.type) {
            case U.bg.FAVORITES:
                return (0, a.jsx)(d.StarIcon, {
                    size: 'xs',
                    color: 'currentColor',
                    className: J.headerIcon
                });
            case U.bg.RECENTLY_HEARD:
                return (0, a.jsx)(d.ClockIcon, {
                    size: 'custom',
                    width: 20,
                    height: 20,
                    color: 'currentColor',
                    className: J.headerIcon
                });
            case U.bg.FREQUENTLY_USED:
                return (0, a.jsx)(d.AnalyticsIcon, { className: J.headerIcon });
            case U.bg.GUILD:
                return (0, a.jsx)(v.Z, {
                    guild: n.guild,
                    height: $,
                    width: $
                });
            case U.bg.DEFAULTS:
                return (0, a.jsx)(d.ClydeIcon, {
                    size: 'custom',
                    width: 28,
                    height: 28,
                    color: 'currentColor',
                    className: J.headerIcon
                });
            case U.bg.SEARCH:
                return (0, a.jsx)(d.MagnifyingGlassIcon, {
                    size: 'md',
                    color: 'currentColor',
                    className: J.headerIcon
                });
        }
    }
    function f() {
        switch (n.type) {
            case U.bg.FAVORITES:
                return X.intl.string(X.t.k8fFjo);
            case U.bg.RECENTLY_HEARD:
                return X.intl.string(X.t['8i/+SE']);
            case U.bg.FREQUENTLY_USED:
                return X.intl.string(X.t['+cGVV1']);
            case U.bg.GUILD:
                return n.guild.name;
            case U.bg.DEFAULTS:
                return X.intl.string(X.t.Rtvk9f);
            case U.bg.SEARCH:
                return X.intl.string(X.t.zkoeq6);
        }
    }
    return (0, a.jsxs)(a.Fragment, {
        children: [
            u &&
                (0, a.jsx)(A.ZP, {
                    colorOpacity: 0.35,
                    glowOpacity: 0.35
                }),
            (0, a.jsx)('div', {
                className: l()(J.sectionContainer, { [J.sectionContainerNitroLocked]: o }),
                children: (0, a.jsx)(d.Clickable, {
                    className: l()(J.sectionHeader, { [J.notFirstSectionHeader]: 0 !== s }),
                    onClick: i,
                    'aria-expanded': !r,
                    children: (0, a.jsxs)('div', {
                        className: J.sectionHeaderContent,
                        children: [
                            c(),
                            (0, a.jsx)(d.Heading, {
                                variant: 'eyebrow',
                                color: 'none',
                                className: J.sectionTitle,
                                children: f()
                            }),
                            (0, a.jsx)(x.Z, {
                                className: J.headerIcon,
                                direction: r ? x.Z.Directions.RIGHT : x.Z.Directions.DOWN
                            })
                        ]
                    })
                })
            })
        ]
    });
}
function ef() {
    return (0, a.jsx)(_.Z, { message: X.intl.string(X.t.bgDdND) });
}
function e_(e) {
    let { descriptors: n, soundButtonProps: r, rowIndex: i, isLastRow: o, isUsingKeyboardNavigation: u, suppressPlaySound: c, gridRowProps: d, getItemProps: f, onSelectItem: _, onItemMouseEnter: h, buttonOverlay: p, isNitroLocked: m, shouldShowUpsell: g, refreshEnabled: E, inExpressionPicker: v } = e,
        T = I.Wq.useStore((e) => e.inspectedExpressionPosition);
    return (0, a.jsx)('ul', {
        ...d,
        className: l()(J.soundRow, {
            [J.soundRowNitroLocked]: m,
            [J.lastSoundRow]: o
        }),
        children: n.map((e, n) => {
            let a = 'item-'.concat(n),
                o = u && T.rowIndex === i && T.columnIndex === n;
            switch (e.item.type) {
                case U.vB.SOUND:
                    return (0, s.createElement)(j.ZP, {
                        ...f(n),
                        ...r,
                        key: ''.concat(a, '-').concat(e.item.sound.soundId),
                        sound: e.item.sound,
                        suppressPlaySound: c,
                        focused: o,
                        onMouseEnter: () => h(n),
                        onSelectItem: () => _(e),
                        enableSecondaryActions: !0,
                        buttonOverlay: p,
                        inNitroLockedSection: m,
                        showLockForDisabledSound: g,
                        refreshEnabled: E,
                        isSoundmoji: !0 === v
                    });
                case U.vB.ADD_SOUND:
                    return (0, s.createElement)(H.Z, {
                        ...f(n),
                        key: a,
                        guild: e.item.guild,
                        focused: o,
                        onSelectItem: () => _(e),
                        refreshEnabled: E
                    });
            }
        })
    });
}
function eh(e) {
    let { guildId: n, channel: i, containerWidth: o, onClose: _, onSelect: v, shouldValidateSelectedSound: A = !1, suppressPlaySound: x = !1, shouldShowUpsell: j = !0, gridNotice: H, soundButtonOverlay: $, listPadding: eh, renderHeader: ep, defaultSoundsOnly: em = !1, inExpressionPicker: eg, refreshEnabled: eE, analyticsSource: ev } = e,
        { currentPreviewRef: eI } = s.useContext(M.Z),
        { analyticsLocations: eT } = (0, m.ZP)(),
        { analyticsLocations: eb } = (0, m.ZP)(p.Z.PREMIUM_UPSELL),
        { location: ey } = (0, h.O)(),
        eS = s.useMemo(
            () => ({
                ...ey,
                section: q.jXE.SOUNDBOARD_SOUND_PICKER
            }),
            [ey]
        ),
        [eA, eN] = s.useState(null),
        eC = (0, c.e7)([D.default], () => D.default.getCurrentUser()),
        eR = (0, P.I5)(eC, Q.p9.TIER_2),
        eO = (0, c.e7)([L.Z], () => {
            var e;
            return L.Z.getVoiceState(n, null !== (e = null == eC ? void 0 : eC.id) && void 0 !== e ? e : q.lds);
        }),
        eD = (null == eO ? void 0 : eO.selfDeaf) || (null == eO ? void 0 : eO.mute) || (null == eO ? void 0 : eO.suppress),
        eL = (0, T.Iu)((e) => e.searchQuery),
        ex = null != eL && '' !== eL,
        ew = (0, E.Dt)(),
        { categories: eP, soundCounts: eM } = (0, V.ZP)(i, void 0, em),
        [ek, eU] = s.useState([]),
        [eB, eG] = s.useState(!1),
        eF = (0, V.FS)(eP, ek, eL).filter((e) => e.items.length > 0),
        eZ = eF.some((e) => !!(0, P._O)(e.categoryInfo) && e.categoryInfo.isNitroLocked),
        eV = !eR && j && eZ,
        { enableInlineUpsell: ej, enableRoadblock: eH, enableRoadblockWithSocialProof: eY } = N.Qs.useExperiment({ location: 'Soundboard Picker' }, { autoTrackExposure: eV }),
        eW = eV && ej,
        eK = R.T4.useSetting(),
        ez = s.useMemo(() => new Set(eK), [eK]),
        eq = null == i,
        eQ = P.ZP.canUseCustomCallSounds(eC),
        eX = s.useCallback(
            (e) => {
                ez.has(e) ? ez.delete(e) : ez.add(e), R.T4.updateSetting(Array.from(ez));
            },
            [ez]
        ),
        eJ = s.useCallback(
            (e, n) => {
                if (null != v && !A) return v(e);
                let r = (0, B.Nq)(eC, e, i, !1);
                if (null != v && A && r) v(e);
                else if (!x && r) {
                    var a;
                    (0, B.GN)(e, null !== (a = null == i ? void 0 : i.id) && void 0 !== a ? a : q.lds, n),
                        ex &&
                            w.default.track(q.rMx.SEARCH_RESULT_SELECTED, {
                                search_type: q.aib.SOUNDBOARD,
                                channel_id: null == i ? void 0 : i.id,
                                query: eL,
                                location_stack: n
                            });
                } else {
                    if ((0, B.Nq)(eC, e, i)) return;
                    j && eN(e);
                }
            },
            [x, eC, i, j, ex, eL, v, A]
        ),
        e$ = s.useCallback(
            (e) => {
                switch (e.item.type) {
                    case U.vB.SOUND:
                        return eJ(e.item.sound, eT);
                    case U.vB.ADD_SOUND:
                        return _(), (0, z.Z)(e.item.guild.id);
                }
            },
            [eT, eJ, _]
        ),
        e0 = s.useCallback(
            (e, r, s, o, l) => {
                let u = eF[s.sectionIndex],
                    c = j && ec(u.categoryInfo, eR, n),
                    d = s.sectionIndex === eF.length - 1 && s.rowIndex === s.totalRowCount - 1;
                return (0, a.jsx)(
                    e_,
                    {
                        descriptors: e,
                        rowIndex: s.rowIndex,
                        isLastRow: d,
                        isUsingKeyboardNavigation: s.isUsingKeyboardNavigation,
                        gridRowProps: r,
                        getItemProps: o,
                        onItemMouseEnter: l,
                        suppressPlaySound: x,
                        onSelectItem: e$,
                        soundButtonProps: {
                            channel: i,
                            interactive: eq ? eQ : !eD,
                            forceSecondaryActions: eq || ej,
                            analyticsLocations: eT
                        },
                        buttonOverlay: $,
                        isNitroLocked: c && eW,
                        shouldShowUpsell: j,
                        refreshEnabled: eE,
                        inExpressionPicker: eg
                    },
                    'row-'.concat(r['aria-rowindex'])
                );
            },
            [eF, j, eR, n, x, e$, i, eq, eQ, eD, ej, eT, $, eW, eE, eg]
        ),
        e1 = s.useCallback(
            (e, n) => {
                if (e <= 0 || !j) return !1;
                let r = eF[e],
                    i = eF[e - 1],
                    a = ec(r.categoryInfo, eR, n),
                    s = ec(i.categoryInfo, eR, n);
                return a && !s;
            },
            [eF, j, eR]
        ),
        e2 = s.useCallback((e) => (0 === e ? ea : e1(e, n) ? ei : er), [n, e1]),
        e3 = s.useCallback(
            (e) => {
                let n = e === eF.length - 1;
                return eW && n ? el : 0;
            },
            [eF, eW]
        ),
        e4 = s.useCallback(
            (e, r) => {
                let i = ''.concat(e.key),
                    s = j && ec(e.categoryInfo, eR, n),
                    o = e1(r, n);
                return (0, a.jsx)(
                    ed,
                    {
                        categoryInfo: e.categoryInfo,
                        toggleCollapsed: () => eX(i),
                        collapsed: ez.has(i),
                        index: r,
                        isSectionNitroLocked: s && eW,
                        showNitroDivider: o && eW
                    },
                    'header-'.concat(i)
                );
            },
            [ez, eX, n, e1, j, eR, eW]
        ),
        e6 = s.useCallback(
            (e, n) => {
                let r = n === eF.length - 1;
                return eW && r ? (0, a.jsx)('div', { className: J.sectionFooter }) : null;
            },
            [eF, eW]
        ),
        e5 = s.useCallback((e) => eU((0, Z.YM)(e, eP, eC, i, eT)), [i, eC, eP, eT]),
        e7 = s.useCallback((e) => {
            (0, f.jW)(e, async () => {
                let { default: e } = await r.e('56049').then(r.bind(r, 338991));
                return (n) => (0, a.jsx)(e, { ...n });
            });
        }, []),
        e8 = s.useCallback(
            () =>
                eg
                    ? (0, a.jsx)(y.Hh, {
                          renderPopout: () => (0, a.jsx)(y.hq, {}),
                          tooltipText: X.intl.string(X.t['19lt29']),
                          position: 'top',
                          clickableClassName: l()(J.settingsClickArea, J.settingsSoundmojiClickArea),
                          children: (0, a.jsx)(d.VoiceNormalIcon, {
                              size: 'md',
                              color: 'currentColor',
                              className: J.settingsIcon
                          })
                      })
                    : (0, a.jsx)(d.Clickable, {
                          tabIndex: 0,
                          className: J.settingsClickArea,
                          onClick: e7,
                          'aria-label': X.intl.string(X.t.kbFsAA),
                          children: (0, a.jsx)(d.VoiceNormalIcon, {
                              size: 'md',
                              color: 'currentColor',
                              className: J.settingsIcon
                          })
                      }),
            [eg, e7]
        ),
        e9 = s.useCallback(
            (e) =>
                (0, a.jsx)(Y.Z, {
                    soundboardListRef: e,
                    categories: eP,
                    shouldUpsellLockedCategories: eW,
                    listPadding: eh,
                    guildId: n,
                    inExpressionPicker: eg
                }),
            [eP, eW, eh, n, eg]
        ),
        te = () => {
            let e = k.Z.getSoundById(eu);
            null != e && eN(e);
        },
        tt = s.useCallback(() => {
            let e = (0, P.Px)(Q.p9.TIER_2);
            return X.intl.format(X.t['tw/SSk'], {
                nitroTierName: e,
                onClick: te
            });
        }, []),
        tn = s.useCallback(
            () =>
                eW
                    ? (0, a.jsx)(S.p, {
                          showUpsell: eB,
                          text: tt(),
                          button: X.intl.string(X.t.pj0XBA),
                          buttonAnalyticsObject: { section: q.jXE.SOUND_PICKER_FLOATING_UPSELL }
                      })
                    : null,
            [tt, eB, eW]
        ),
        tr = s.useCallback(
            (e) => {
                if ((null == e ? void 0 : e.item.type) === U.vB.SOUND) {
                    var n;
                    return (0, a.jsx)(W.Z, {
                        closePicker: _,
                        soundboardSound: null !== (n = null == e ? void 0 : e.item.sound) && void 0 !== n ? n : null
                    });
                }
                return null;
            },
            [_]
        ),
        ti = 'https://cdn.discordapp.com/assets/premium/roadblocks/soundboard_dark.png',
        ta = s.useCallback(() => {
            var e;
            let n = k.Z.getSoundById(eu),
                r = new Audio((0, G.Z)(eu));
            null != eI.current && eI.current.pause(), (eI.current = r), (r.currentTime = 0), (r.volume = (0, F.Z)(null !== (e = null == n ? void 0 : n.volume) && void 0 !== e ? e : 1)), r.play();
        }, [eI]),
        ts = (0, c.e7)([O.Z], () => O.Z.getMediaSessionId());
    return (
        (0, g.Z)({
            type: u.ImpressionTypes.POPOUT,
            name: u.ImpressionNames.SOUNDBOARD_POPOUT,
            properties: {
                source: ev,
                guild_id: n,
                media_session_id: ts,
                available_custom_sounds_count: eM.unlockedCustomSoundCount,
                unavailable_custom_sounds_count: eM.lockedCustomSoundCount,
                favorite_sounds_count: eM.favoriteSoundCount
            }
        }),
        (0, a.jsxs)(a.Fragment, {
            children: [
                null != eA
                    ? eH
                        ? (0, a.jsx)(C.Z, {
                              containerContext: eg ? C.p.TAB_PARENT_CONTAINER : C.p.NONE,
                              image: {
                                  url: ti,
                                  width: 220,
                                  height: 132
                              },
                              title: X.intl.string(eg ? X.t.rZEEvb : X.t.jGDYFx),
                              description: X.intl.string(eg ? X.t.ZPNG5O : X.t['grL/ho']),
                              enableSocialProof: eY,
                              analyticsLocationSection: q.jXE.SOUNDBOARD_SOUND_PICKER_UPSELL,
                              upsellViewedTrackingData: {
                                  type: Q.cd.SOUND_PICKER_SOUND_CLICKED,
                                  is_external: !0,
                                  location: {
                                      ...eS,
                                      object: q.qAy.SOUNDBOARD_SOUND
                                  },
                                  location_stack: eb,
                                  sku_id: P.ZP.getSkuIdForPremiumType(Q.p9.TIER_2)
                              },
                              onClose: () => eN(null),
                              onDisplay: ta
                          })
                        : (0, a.jsx)(K.Z, {
                              onClose: () => eN(null),
                              closePopout: _,
                              sound: eA,
                              channel: i
                          })
                    : void 0,
                (0, a.jsx)(b.Z, {
                    categories: eF,
                    collapsedCategories: ez,
                    containerWidth: o,
                    store: I.Wq,
                    onSelectItem: e$,
                    onSearchExpressions: e5,
                    hasSearchResults: ek.length > 0,
                    defaultSearchPlaceholder: X.intl.string(X.t.sKt3xc),
                    renderRow: e0,
                    renderSectionHeader: e4,
                    renderSectionFooter: e6,
                    renderCategoryList: e9,
                    renderHeaderAccessories: e8,
                    rowHeight: eE ? en : et,
                    sectionHeaderHeight: e2,
                    sectionFooterHeight: e3,
                    listPadding: ee,
                    itemNodeWidth: eE ? eo : es,
                    gridNavigatorId: ew,
                    renderEmptySearchState: ef,
                    renderInspector: tr,
                    gridNotice: H,
                    renderHeader: ep,
                    renderUpsell: tn,
                    setShowUpsell: eG
                })
            ]
        })
    );
}
