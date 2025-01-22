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
    o = r(192379),
    s = r(120356),
    l = r.n(s),
    u = r(990547),
    c = r(442837),
    d = r(481060),
    f = r(239091),
    p = r(788911),
    h = r(2052),
    _ = r(100527),
    m = r(906732),
    g = r(213609),
    E = r(313201),
    v = r(880949),
    y = r(806966),
    b = r(28546),
    I = r(468954),
    T = r(409700),
    S = r(53691),
    A = r(75145),
    C = r(631771),
    N = r(609218),
    R = r(695346),
    O = r(19780),
    D = r(594174),
    x = r(979651),
    L = r(259580),
    w = r(626135),
    P = r(74538),
    M = r(135869),
    k = r(763296),
    U = r(697426),
    B = r(242291),
    G = r(22382),
    Z = r(747071),
    F = r(421673),
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
    eo = 150,
    es = 100,
    el = 60,
    eu = '3';
function ec(e, n, r) {
    return (null == r && e.type === U.bg.GUILD && !n) || (e.type === U.bg.GUILD && e.guild.id !== r && !n);
}
function ed(e) {
    let { categoryInfo: n, collapsed: r, toggleCollapsed: i, index: o, isSectionNitroLocked: s, showNitroDivider: u } = e;
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
                className: l()(J.sectionContainer, { [J.sectionContainerNitroLocked]: s }),
                children: (0, a.jsx)(d.Clickable, {
                    className: l()(J.sectionHeader, { [J.notFirstSectionHeader]: 0 !== o }),
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
                            (0, a.jsx)(L.Z, {
                                className: J.headerIcon,
                                direction: r ? L.Z.Directions.RIGHT : L.Z.Directions.DOWN
                            })
                        ]
                    })
                })
            })
        ]
    });
}
function ef() {
    return (0, a.jsx)(p.Z, { message: X.intl.string(X.t.bgDdND) });
}
function ep(e) {
    let { descriptors: n, soundButtonProps: r, rowIndex: i, isLastRow: s, isUsingKeyboardNavigation: u, suppressPlaySound: c, gridRowProps: d, getItemProps: f, onSelectItem: p, onItemMouseEnter: h, buttonOverlay: _, isNitroLocked: m, shouldShowUpsell: g, refreshEnabled: E, inExpressionPicker: v } = e,
        b = y.Wq.useStore((e) => e.inspectedExpressionPosition);
    return (0, a.jsx)('ul', {
        ...d,
        className: l()(J.soundRow, {
            [J.soundRowNitroLocked]: m,
            [J.lastSoundRow]: s
        }),
        children: n.map((e, n) => {
            let a = 'item-'.concat(n),
                s = u && b.rowIndex === i && b.columnIndex === n;
            switch (e.item.type) {
                case U.vB.SOUND:
                    return (0, o.createElement)(j.ZP, {
                        ...f(n),
                        ...r,
                        key: ''.concat(a, '-').concat(e.item.sound.soundId),
                        sound: e.item.sound,
                        suppressPlaySound: c,
                        focused: s,
                        onMouseEnter: () => h(n),
                        onSelectItem: () => p(e),
                        enableSecondaryActions: !0,
                        buttonOverlay: _,
                        inNitroLockedSection: m,
                        showLockForDisabledSound: g,
                        refreshEnabled: E,
                        isSoundmoji: !0 === v
                    });
                case U.vB.ADD_SOUND:
                    return (0, o.createElement)(H.Z, {
                        ...f(n),
                        key: a,
                        guild: e.item.guild,
                        focused: s,
                        onSelectItem: () => p(e),
                        refreshEnabled: E
                    });
            }
        })
    });
}
function eh(e) {
    let { guildId: n, channel: i, containerWidth: s, onClose: p, onSelect: v, shouldValidateSelectedSound: A = !1, suppressPlaySound: L = !1, shouldShowUpsell: j = !0, gridNotice: H, soundButtonOverlay: $, listPadding: eh, renderHeader: e_, defaultSoundsOnly: em = !1, inExpressionPicker: eg, refreshEnabled: eE, analyticsSource: ev } = e,
        { currentPreviewRef: ey } = o.useContext(M.Z),
        { analyticsLocations: eb } = (0, m.ZP)(),
        { analyticsLocations: eI } = (0, m.ZP)(_.Z.PREMIUM_UPSELL),
        { location: eT } = (0, h.O)(),
        eS = o.useMemo(
            () => ({
                ...eT,
                section: q.jXE.SOUNDBOARD_SOUND_PICKER
            }),
            [eT]
        ),
        [eA, eC] = o.useState(null),
        eN = (0, c.e7)([D.default], () => D.default.getCurrentUser()),
        eR = (0, P.I5)(eN, Q.p9.TIER_2),
        eO = (0, c.e7)([x.Z], () => {
            var e;
            return x.Z.getVoiceState(n, null !== (e = null == eN ? void 0 : eN.id) && void 0 !== e ? e : q.lds);
        }),
        eD = (null == eO ? void 0 : eO.selfDeaf) || (null == eO ? void 0 : eO.mute) || (null == eO ? void 0 : eO.suppress),
        ex = (0, b.Iu)((e) => e.searchQuery),
        eL = null != ex && '' !== ex,
        ew = (0, E.Dt)(),
        { categories: eP, soundCounts: eM } = (0, V.ZP)(i, void 0, em),
        [ek, eU] = o.useState([]),
        [eB, eG] = o.useState(!1),
        eZ = (0, V.FS)(eP, ek, ex).filter((e) => e.items.length > 0),
        eF = eZ.some((e) => !!(0, P._O)(e.categoryInfo) && e.categoryInfo.isNitroLocked),
        eV = !eR && j && eF,
        { enableInlineUpsell: ej, enableRoadblock: eH, enableRoadblockWithSocialProof: eY } = C.Qs.useExperiment({ location: 'Soundboard Picker' }, { autoTrackExposure: eV }),
        eW = eV && ej,
        eK = R.T4.useSetting(),
        ez = o.useMemo(() => new Set(eK), [eK]),
        eq = null == i,
        eQ = P.ZP.canUseCustomCallSounds(eN),
        eX = o.useCallback(
            (e) => {
                ez.has(e) ? ez.delete(e) : ez.add(e), R.T4.updateSetting(Array.from(ez));
            },
            [ez]
        ),
        eJ = o.useCallback(
            (e, n) => {
                if (null != v && !A) return v(e);
                let r = (0, B.Nq)(eN, e, i, !1);
                if (null != v && A && r) v(e);
                else if (!L && r && (0, B.C0)(i)) {
                    var a;
                    (0, B.GN)(e, null !== (a = null == i ? void 0 : i.id) && void 0 !== a ? a : q.lds, n),
                        eL &&
                            w.default.track(q.rMx.SEARCH_RESULT_SELECTED, {
                                search_type: q.aib.SOUNDBOARD,
                                channel_id: null == i ? void 0 : i.id,
                                query: ex,
                                location_stack: n
                            });
                } else {
                    if ((0, B.Nq)(eN, e, i)) return;
                    j && eC(e);
                }
            },
            [L, eN, i, j, eL, ex, v, A]
        ),
        e$ = o.useCallback(
            (e) => {
                switch (e.item.type) {
                    case U.vB.SOUND:
                        return eJ(e.item.sound, eb);
                    case U.vB.ADD_SOUND:
                        return p(), (0, z.Z)(e.item.guild.id);
                }
            },
            [eb, eJ, p]
        ),
        e0 = o.useCallback(
            (e, r, o, s, l) => {
                let u = eZ[o.sectionIndex],
                    c = j && ec(u.categoryInfo, eR, n),
                    d = o.sectionIndex === eZ.length - 1 && o.rowIndex === o.totalRowCount - 1;
                return (0, a.jsx)(
                    ep,
                    {
                        descriptors: e,
                        rowIndex: o.rowIndex,
                        isLastRow: d,
                        isUsingKeyboardNavigation: o.isUsingKeyboardNavigation,
                        gridRowProps: r,
                        getItemProps: s,
                        onItemMouseEnter: l,
                        suppressPlaySound: L,
                        onSelectItem: e$,
                        soundButtonProps: {
                            channel: i,
                            interactive: eq ? eQ : !eD,
                            forceSecondaryActions: eq || ej,
                            analyticsLocations: eb
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
            [eZ, j, eR, n, L, e$, i, eq, eQ, eD, ej, eb, $, eW, eE, eg]
        ),
        e1 = o.useCallback(
            (e, n) => {
                if (e <= 0 || !j) return !1;
                let r = eZ[e],
                    i = eZ[e - 1],
                    a = ec(r.categoryInfo, eR, n),
                    o = ec(i.categoryInfo, eR, n);
                return a && !o;
            },
            [eZ, j, eR]
        ),
        e2 = o.useCallback((e) => (0 === e ? ea : e1(e, n) ? ei : er), [n, e1]),
        e3 = o.useCallback(
            (e) => {
                let n = e === eZ.length - 1;
                return eW && n ? el : 0;
            },
            [eZ, eW]
        ),
        e4 = o.useCallback(
            (e, r) => {
                let i = ''.concat(e.key),
                    o = j && ec(e.categoryInfo, eR, n),
                    s = e1(r, n);
                return (0, a.jsx)(
                    ed,
                    {
                        categoryInfo: e.categoryInfo,
                        toggleCollapsed: () => eX(i),
                        collapsed: ez.has(i),
                        index: r,
                        isSectionNitroLocked: o && eW,
                        showNitroDivider: s && eW
                    },
                    'header-'.concat(i)
                );
            },
            [ez, eX, n, e1, j, eR, eW]
        ),
        e6 = o.useCallback(
            (e, n) => {
                let r = n === eZ.length - 1;
                return eW && r ? (0, a.jsx)('div', { className: J.sectionFooter }) : null;
            },
            [eZ, eW]
        ),
        e5 = o.useCallback((e) => eU((0, F.YM)(e, eP, eN, i, eb)), [i, eN, eP, eb]),
        e7 = o.useCallback((e) => {
            (0, f.jW)(e, async () => {
                let { default: e } = await r.e('56049').then(r.bind(r, 338991));
                return (n) => (0, a.jsx)(e, { ...n });
            });
        }, []),
        e8 = o.useCallback(
            () =>
                eg
                    ? (0, a.jsx)(T.Hh, {
                          renderPopout: () => (0, a.jsx)(T.hq, {}),
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
        e9 = o.useCallback(
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
            null != e && eC(e);
        },
        tt = o.useCallback(() => {
            let e = (0, P.Px)(Q.p9.TIER_2);
            return X.intl.format(X.t['tw/SSk'], {
                nitroTierName: e,
                onClick: te
            });
        }, []),
        tn = o.useCallback(
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
        tr = o.useCallback(
            (e) => {
                if ((null == e ? void 0 : e.item.type) === U.vB.SOUND) {
                    var n;
                    return (0, a.jsx)(W.Z, {
                        closePicker: p,
                        soundboardSound: null !== (n = null == e ? void 0 : e.item.sound) && void 0 !== n ? n : null
                    });
                }
                return null;
            },
            [p]
        ),
        ti = 'https://cdn.discordapp.com/assets/premium/roadblocks/soundboard_dark.png',
        ta = o.useCallback(() => {
            var e;
            let n = k.Z.getSoundById(eu),
                r = new Audio((0, G.Z)(eu));
            null != ey.current && ey.current.pause(), (ey.current = r), (r.currentTime = 0), (r.volume = (0, Z.Z)(null !== (e = null == n ? void 0 : n.volume) && void 0 !== e ? e : 1)), r.play();
        }, [ey]),
        to = (0, c.e7)([O.Z], () => O.Z.getMediaSessionId());
    return (
        (0, g.Z)({
            type: u.ImpressionTypes.POPOUT,
            name: u.ImpressionNames.SOUNDBOARD_POPOUT,
            properties: {
                source: ev,
                guild_id: n,
                media_session_id: to,
                available_custom_sounds_count: eM.unlockedCustomSoundCount,
                unavailable_custom_sounds_count: eM.lockedCustomSoundCount,
                favorite_sounds_count: eM.favoriteSoundCount
            }
        }),
        (0, a.jsxs)(a.Fragment, {
            children: [
                null != eA
                    ? eH
                        ? (0, a.jsx)(N.Z, {
                              containerContext: eg ? N.p.TAB_PARENT_CONTAINER : N.p.NONE,
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
                                  location_stack: eI,
                                  sku_id: P.ZP.getSkuIdForPremiumType(Q.p9.TIER_2)
                              },
                              onClose: () => eC(null),
                              onDisplay: ta
                          })
                        : (0, a.jsx)(K.Z, {
                              onClose: () => eC(null),
                              closePopout: p,
                              sound: eA,
                              channel: i
                          })
                    : void 0,
                (0, a.jsx)(I.Z, {
                    categories: eZ,
                    collapsedCategories: ez,
                    containerWidth: s,
                    store: y.Wq,
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
                    itemNodeWidth: eE ? es : eo,
                    gridNavigatorId: ew,
                    renderEmptySearchState: ef,
                    renderInspector: tr,
                    gridNotice: H,
                    renderHeader: e_,
                    renderUpsell: tn,
                    setShowUpsell: eG
                })
            ]
        })
    );
}
