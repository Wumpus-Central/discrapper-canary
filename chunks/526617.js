n.d(t, {
    O: () => el,
    Z: () => ef
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(990547),
    l = n(442837),
    u = n(481060),
    c = n(239091),
    d = n(788911),
    f = n(2052),
    _ = n(100527),
    p = n(906732),
    h = n(213609),
    m = n(313201),
    g = n(880949),
    E = n(806966),
    v = n(28546),
    y = n(468954),
    I = n(409700),
    T = n(53691),
    b = n(75145),
    S = n(631771),
    A = n(609218),
    N = n(695346),
    C = n(19780),
    R = n(594174),
    O = n(979651),
    D = n(259580),
    L = n(626135),
    x = n(74538),
    P = n(135869),
    w = n(763296),
    M = n(697426),
    k = n(242291),
    U = n(22382),
    G = n(747071),
    B = n(421673),
    Z = n(663215),
    F = n(409673),
    V = n(347072),
    j = n(835648),
    H = n(650743),
    Y = n(394740),
    W = n(343747),
    K = n(981631),
    z = n(474936),
    q = n(388032),
    Q = n(871218);
let X = 16,
    J = [8, 0, 8, 0],
    $ = 48,
    ee = 80,
    et = 32,
    en = 32 + b.Kn,
    ei = 16,
    er = 150,
    ea = 100,
    es = 60,
    eo = '3';
function el(e, t, n) {
    return (null == n && e.type === M.bg.GUILD && !t) || (e.type === M.bg.GUILD && e.guild.id !== n && !t);
}
function eu(e) {
    let { categoryInfo: t, collapsed: n, toggleCollapsed: r, index: a, isSectionNitroLocked: o, showNitroDivider: l } = e;
    function c() {
        switch (t.type) {
            case M.bg.FAVORITES:
                return (0, i.jsx)(u.r7p, {
                    size: 'xs',
                    color: 'currentColor',
                    className: Q.headerIcon
                });
            case M.bg.RECENTLY_HEARD:
                return (0, i.jsx)(u.T39, {
                    size: 'custom',
                    width: 20,
                    height: 20,
                    color: 'currentColor',
                    className: Q.headerIcon
                });
            case M.bg.FREQUENTLY_USED:
                return (0, i.jsx)(u.IeX, { className: Q.headerIcon });
            case M.bg.GUILD:
                return (0, i.jsx)(g.Z, {
                    guild: t.guild,
                    height: X,
                    width: X
                });
            case M.bg.DEFAULTS:
                return (0, i.jsx)(u.gw7, {
                    size: 'custom',
                    width: 28,
                    height: 28,
                    color: 'currentColor',
                    className: Q.headerIcon
                });
            case M.bg.SEARCH:
                return (0, i.jsx)(u._Ve, {
                    size: 'md',
                    color: 'currentColor',
                    className: Q.headerIcon
                });
        }
    }
    function d() {
        switch (t.type) {
            case M.bg.FAVORITES:
                return q.intl.string(q.t.k8fFjo);
            case M.bg.RECENTLY_HEARD:
                return q.intl.string(q.t['8i/+SE']);
            case M.bg.FREQUENTLY_USED:
                return q.intl.string(q.t['+cGVV1']);
            case M.bg.GUILD:
                return t.guild.name;
            case M.bg.DEFAULTS:
                return q.intl.string(q.t.Rtvk9f);
            case M.bg.SEARCH:
                return q.intl.string(q.t.zkoeq6);
        }
    }
    return (0, i.jsxs)(i.Fragment, {
        children: [
            l &&
                (0, i.jsx)(b.ZP, {
                    colorOpacity: 0.35,
                    glowOpacity: 0.35
                }),
            (0, i.jsx)('div', {
                className: s()(Q.sectionContainer, { [Q.sectionContainerNitroLocked]: o }),
                children: (0, i.jsx)(u.P3F, {
                    className: s()(Q.sectionHeader, { [Q.notFirstSectionHeader]: 0 !== a }),
                    onClick: r,
                    'aria-expanded': !n,
                    children: (0, i.jsxs)('div', {
                        className: Q.sectionHeaderContent,
                        children: [
                            c(),
                            (0, i.jsx)(u.X6q, {
                                variant: 'eyebrow',
                                color: 'none',
                                className: Q.sectionTitle,
                                children: d()
                            }),
                            (0, i.jsx)(D.Z, {
                                className: Q.headerIcon,
                                direction: n ? D.Z.Directions.RIGHT : D.Z.Directions.DOWN
                            })
                        ]
                    })
                })
            })
        ]
    });
}
function ec() {
    return (0, i.jsx)(d.Z, { message: q.intl.string(q.t.bgDdND) });
}
function ed(e) {
    let { descriptors: t, soundButtonProps: n, rowIndex: a, isLastRow: o, isUsingKeyboardNavigation: l, suppressPlaySound: u, gridRowProps: c, getItemProps: d, onSelectItem: f, onItemMouseEnter: _, buttonOverlay: p, isNitroLocked: h, shouldShowUpsell: m, refreshEnabled: g, inExpressionPicker: v } = e,
        y = E.Wq.useStore((e) => e.inspectedExpressionPosition);
    return (0, i.jsx)('ul', {
        ...c,
        className: s()(Q.soundRow, {
            [Q.soundRowNitroLocked]: h,
            [Q.lastSoundRow]: o
        }),
        children: t.map((e, t) => {
            let i = 'item-'.concat(t),
                s = l && y.rowIndex === a && y.columnIndex === t;
            switch (e.item.type) {
                case M.vB.SOUND:
                    return (0, r.createElement)(F.ZP, {
                        ...d(t),
                        ...n,
                        key: ''.concat(i, '-').concat(e.item.sound.soundId),
                        sound: e.item.sound,
                        suppressPlaySound: u,
                        focused: s,
                        onMouseEnter: () => _(t),
                        onSelectItem: (t) => f(e, t),
                        enableSecondaryActions: !0,
                        buttonOverlay: p,
                        inNitroLockedSection: h,
                        showLockForDisabledSound: m,
                        refreshEnabled: g,
                        isSoundmoji: !0 === v
                    });
                case M.vB.ADD_SOUND:
                    return (0, r.createElement)(V.Z, {
                        ...d(t),
                        key: i,
                        guild: e.item.guild,
                        focused: s,
                        onSelectItem: () => f(e),
                        refreshEnabled: g
                    });
            }
        })
    });
}
function ef(e) {
    let { guildId: t, channel: a, containerWidth: d, onClose: g, onSelect: b, shouldValidateSelectedSound: D = !1, suppressPlaySound: F = !1, shouldShowUpsell: V = !0, gridNotice: X, soundButtonOverlay: ef, listPadding: e_, renderHeader: ep, defaultSoundsOnly: eh = !1, inExpressionPicker: em, refreshEnabled: eg, analyticsSource: eE } = e,
        { currentPreviewRef: ev } = r.useContext(P.Z),
        { analyticsLocations: ey } = (0, p.ZP)(),
        { analyticsLocations: eI } = (0, p.ZP)(_.Z.PREMIUM_UPSELL),
        { location: eT } = (0, f.O)(),
        eb = r.useMemo(
            () => ({
                ...eT,
                section: K.jXE.SOUNDBOARD_SOUND_PICKER
            }),
            [eT]
        ),
        [eS, eA] = r.useState(null),
        eN = (0, l.e7)([R.default], () => R.default.getCurrentUser()),
        eC = (0, x.I5)(eN, z.p9.TIER_2),
        eR = (0, l.e7)([O.Z], () => {
            var e;
            return O.Z.getVoiceState(t, null !== (e = null == eN ? void 0 : eN.id) && void 0 !== e ? e : K.lds);
        }),
        eO = (null == eR ? void 0 : eR.selfDeaf) || (null == eR ? void 0 : eR.mute) || (null == eR ? void 0 : eR.suppress),
        eD = (0, v.Iu)((e) => e.searchQuery),
        eL = null != eD && '' !== eD,
        ex = (0, m.Dt)(),
        { categories: eP, soundCounts: ew } = (0, Z.ZP)(a, void 0, eh),
        [eM, ek] = r.useState([]),
        [eU, eG] = r.useState(!1),
        eB = (0, Z.FS)(eP, eM, eD).filter((e) => e.items.length > 0),
        eZ = eB.some((e) => !!(0, x._O)(e.categoryInfo) && e.categoryInfo.isNitroLocked),
        eF = !eC && V && eZ,
        { enableInlineUpsell: eV, enableRoadblock: ej, enableRoadblockWithSocialProof: eH } = S.Qs.useExperiment({ location: 'Soundboard Picker' }, { autoTrackExposure: eF }),
        eY = eF && eV,
        eW = N.T4.useSetting(),
        eK = r.useMemo(() => new Set(eW), [eW]),
        ez = null == a,
        eq = x.ZP.canUseCustomCallSounds(eN),
        eQ = r.useCallback(
            (e) => {
                eK.has(e) ? eK.delete(e) : eK.add(e), N.T4.updateSetting(Array.from(eK));
            },
            [eK]
        ),
        eX = r.useCallback(
            (e, t, n) => {
                if (null != b && !D) return b(e, n);
                let i = (0, k.Nq)(eN, e, a, !1);
                if (null != b && D && i) b(e, n);
                else if (!F && i && (0, k.C0)(a)) {
                    var r;
                    (0, k.GN)(e, null !== (r = null == a ? void 0 : a.id) && void 0 !== r ? r : K.lds, t),
                        eL &&
                            L.default.track(K.rMx.SEARCH_RESULT_SELECTED, {
                                search_type: K.aib.SOUNDBOARD,
                                channel_id: null == a ? void 0 : a.id,
                                query: eD,
                                location_stack: t
                            });
                } else {
                    if ((0, k.Nq)(eN, e, a)) return;
                    V && eA(e);
                }
            },
            [F, eN, a, V, eL, eD, b, D]
        ),
        eJ = r.useCallback(
            (e, t) => {
                switch (e.item.type) {
                    case M.vB.SOUND:
                        return eX(e.item.sound, ey, (null == t ? void 0 : t.shiftKey) !== !0);
                    case M.vB.ADD_SOUND:
                        return g(), (0, W.Z)(e.item.guild.id);
                }
            },
            [ey, eX, g]
        ),
        e$ = r.useCallback(
            (e, n, r, s, o) => {
                let l = eB[r.sectionIndex],
                    u = V && el(l.categoryInfo, eC, t),
                    c = r.sectionIndex === eB.length - 1 && r.rowIndex === r.totalRowCount - 1;
                return (0, i.jsx)(
                    ed,
                    {
                        descriptors: e,
                        rowIndex: r.rowIndex,
                        isLastRow: c,
                        isUsingKeyboardNavigation: r.isUsingKeyboardNavigation,
                        gridRowProps: n,
                        getItemProps: s,
                        onItemMouseEnter: o,
                        suppressPlaySound: F,
                        onSelectItem: eJ,
                        soundButtonProps: {
                            channel: a,
                            interactive: ez ? eq : !eO,
                            forceSecondaryActions: ez || eV,
                            analyticsLocations: ey
                        },
                        buttonOverlay: ef,
                        isNitroLocked: u && eY,
                        shouldShowUpsell: V,
                        refreshEnabled: eg,
                        inExpressionPicker: em
                    },
                    'row-'.concat(n['aria-rowindex'])
                );
            },
            [eB, V, eC, t, F, eJ, a, ez, eq, eO, eV, ey, ef, eY, eg, em]
        ),
        e0 = r.useCallback(
            (e, t) => {
                if (e <= 0 || !V) return !1;
                let n = eB[e],
                    i = eB[e - 1],
                    r = el(n.categoryInfo, eC, t),
                    a = el(i.categoryInfo, eC, t);
                return r && !a;
            },
            [eB, V, eC]
        ),
        e1 = r.useCallback((e) => (0 === e ? ei : e0(e, t) ? en : et), [t, e0]),
        e2 = r.useCallback(
            (e) => {
                let t = e === eB.length - 1;
                return eY && t ? es : 0;
            },
            [eB, eY]
        ),
        e3 = r.useCallback(
            (e, n) => {
                let r = ''.concat(e.key),
                    a = V && el(e.categoryInfo, eC, t),
                    s = e0(n, t);
                return (0, i.jsx)(
                    eu,
                    {
                        categoryInfo: e.categoryInfo,
                        toggleCollapsed: () => eQ(r),
                        collapsed: eK.has(r),
                        index: n,
                        isSectionNitroLocked: a && eY,
                        showNitroDivider: s && eY
                    },
                    'header-'.concat(r)
                );
            },
            [eK, eQ, t, e0, V, eC, eY]
        ),
        e4 = r.useCallback(
            (e, t) => {
                let n = t === eB.length - 1;
                return eY && n ? (0, i.jsx)('div', { className: Q.sectionFooter }) : null;
            },
            [eB, eY]
        ),
        e6 = r.useCallback((e) => ek((0, B.YM)(e, eP, eN, a, ey)), [a, eN, eP, ey]),
        e5 = r.useCallback((e) => {
            (0, c.jW)(e, async () => {
                let { default: e } = await n.e('56049').then(n.bind(n, 338991));
                return (t) => (0, i.jsx)(e, { ...t });
            });
        }, []),
        e7 = r.useCallback(
            () =>
                em
                    ? (0, i.jsx)(I.Hh, {
                          renderPopout: () => (0, i.jsx)(I.hq, {}),
                          tooltipText: q.intl.string(q.t['19lt29']),
                          position: 'top',
                          clickableClassName: s()(Q.settingsClickArea, Q.settingsSoundmojiClickArea),
                          children: (0, i.jsx)(u.gj8, {
                              size: 'md',
                              color: 'currentColor',
                              className: Q.settingsIcon
                          })
                      })
                    : (0, i.jsx)(u.P3F, {
                          tabIndex: 0,
                          className: Q.settingsClickArea,
                          onClick: e5,
                          'aria-label': q.intl.string(q.t.kbFsAA),
                          children: (0, i.jsx)(u.gj8, {
                              size: 'md',
                              color: 'currentColor',
                              className: Q.settingsIcon
                          })
                      }),
            [em, e5]
        ),
        e8 = r.useCallback(
            (e) =>
                (0, i.jsx)(j.Z, {
                    soundboardListRef: e,
                    categories: eP,
                    shouldUpsellLockedCategories: eY,
                    listPadding: e_,
                    guildId: t,
                    inExpressionPicker: em
                }),
            [eP, eY, e_, t, em]
        ),
        e9 = () => {
            let e = w.Z.getSoundById(eo);
            null != e && eA(e);
        },
        te = r.useCallback(() => {
            let e = (0, x.Px)(z.p9.TIER_2);
            return q.intl.format(q.t['tw/SSk'], {
                nitroTierName: e,
                onClick: e9
            });
        }, []),
        tt = r.useCallback(
            () =>
                eY
                    ? (0, i.jsx)(T.p, {
                          showUpsell: eU,
                          text: te(),
                          button: q.intl.string(q.t.pj0XBA),
                          buttonAnalyticsObject: { section: K.jXE.SOUND_PICKER_FLOATING_UPSELL }
                      })
                    : null,
            [te, eU, eY]
        ),
        tn = r.useCallback(
            (e) => {
                if ((null == e ? void 0 : e.item.type) === M.vB.SOUND) {
                    var t;
                    return (0, i.jsx)(H.Z, {
                        closePicker: g,
                        soundboardSound: null !== (t = null == e ? void 0 : e.item.sound) && void 0 !== t ? t : null
                    });
                }
                return null;
            },
            [g]
        ),
        ti = 'https://cdn.discordapp.com/assets/premium/roadblocks/soundboard_dark.png',
        tr = r.useCallback(() => {
            var e;
            let t = w.Z.getSoundById(eo),
                n = new Audio((0, U.Z)(eo));
            null != ev.current && ev.current.pause(), (ev.current = n), (n.currentTime = 0), (n.volume = (0, G.Z)(null !== (e = null == t ? void 0 : t.volume) && void 0 !== e ? e : 1)), n.play();
        }, [ev]),
        ta = (0, l.e7)([C.Z], () => C.Z.getMediaSessionId());
    return (
        (0, h.Z)({
            type: o.ImpressionTypes.POPOUT,
            name: o.ImpressionNames.SOUNDBOARD_POPOUT,
            properties: {
                source: eE,
                guild_id: t,
                media_session_id: ta,
                available_custom_sounds_count: ew.unlockedCustomSoundCount,
                unavailable_custom_sounds_count: ew.lockedCustomSoundCount,
                favorite_sounds_count: ew.favoriteSoundCount
            }
        }),
        (0, i.jsxs)(i.Fragment, {
            children: [
                null != eS
                    ? ej
                        ? (0, i.jsx)(A.Z, {
                              containerContext: em ? A.p.TAB_PARENT_CONTAINER : A.p.NONE,
                              image: {
                                  url: ti,
                                  width: 220,
                                  height: 132
                              },
                              title: q.intl.string(em ? q.t.rZEEvb : q.t.jGDYFx),
                              description: q.intl.string(em ? q.t.ZPNG5O : q.t['grL/ho']),
                              enableSocialProof: eH,
                              analyticsLocationSection: K.jXE.SOUNDBOARD_SOUND_PICKER_UPSELL,
                              upsellViewedTrackingData: {
                                  type: z.cd.SOUND_PICKER_SOUND_CLICKED,
                                  is_external: !0,
                                  location: {
                                      ...eb,
                                      object: K.qAy.SOUNDBOARD_SOUND
                                  },
                                  location_stack: eI,
                                  sku_id: x.ZP.getSkuIdForPremiumType(z.p9.TIER_2)
                              },
                              onClose: () => eA(null),
                              onDisplay: tr
                          })
                        : (0, i.jsx)(Y.Z, {
                              onClose: () => eA(null),
                              closePopout: g,
                              sound: eS,
                              channel: a
                          })
                    : void 0,
                (0, i.jsx)(y.Z, {
                    categories: eB,
                    collapsedCategories: eK,
                    containerWidth: d,
                    store: E.Wq,
                    onSelectItem: eJ,
                    onSearchExpressions: e6,
                    hasSearchResults: eM.length > 0,
                    defaultSearchPlaceholder: q.intl.string(q.t.sKt3xc),
                    renderRow: e$,
                    renderSectionHeader: e3,
                    renderSectionFooter: e4,
                    renderCategoryList: e8,
                    renderHeaderAccessories: e7,
                    rowHeight: eg ? ee : $,
                    sectionHeaderHeight: e1,
                    sectionFooterHeight: e2,
                    listPadding: J,
                    itemNodeWidth: eg ? ea : er,
                    gridNavigatorId: ex,
                    renderEmptySearchState: ec,
                    renderInspector: tn,
                    gridNotice: X,
                    renderHeader: ep,
                    renderUpsell: tt,
                    setShowUpsell: eG
                })
            ]
        })
    );
}
