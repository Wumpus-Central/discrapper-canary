n.d(t, {
    O: () => es,
    Z: () => ec
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
    S = n(609218),
    A = n(386965),
    N = n(695346),
    C = n(19780),
    R = n(594174),
    O = n(979651),
    D = n(259580),
    L = n(626135),
    x = n(74538),
    P = n(763296),
    w = n(697426),
    M = n(242291),
    k = n(22382),
    U = n(747071),
    G = n(421673),
    B = n(663215),
    Z = n(409673),
    F = n(347072),
    V = n(835648),
    j = n(650743),
    H = n(343747),
    Y = n(981631),
    W = n(474936),
    K = n(388032),
    z = n(871218);
let q = 16,
    Q = [8, 0, 8, 0],
    X = 48,
    J = 80,
    $ = 32,
    ee = 32 + b.Kn,
    et = 16,
    en = 150,
    ei = 100,
    er = 60,
    ea = '3';
function es(e, t, n) {
    return (null == n && e.type === w.bg.GUILD && !t) || (e.type === w.bg.GUILD && e.guild.id !== n && !t);
}
function eo(e) {
    let { categoryInfo: t, collapsed: n, toggleCollapsed: r, index: a, isSectionNitroLocked: o, showNitroDivider: l } = e;
    function c() {
        switch (t.type) {
            case w.bg.FAVORITES:
                return (0, i.jsx)(u.r7p, {
                    size: 'xs',
                    color: 'currentColor',
                    className: z.headerIcon
                });
            case w.bg.RECENTLY_HEARD:
                return (0, i.jsx)(u.T39, {
                    size: 'custom',
                    width: 20,
                    height: 20,
                    color: 'currentColor',
                    className: z.headerIcon
                });
            case w.bg.FREQUENTLY_USED:
                return (0, i.jsx)(u.IeX, { className: z.headerIcon });
            case w.bg.GUILD:
                return (0, i.jsx)(g.Z, {
                    guild: t.guild,
                    height: q,
                    width: q
                });
            case w.bg.DEFAULTS:
                return (0, i.jsx)(u.gw7, {
                    size: 'custom',
                    width: 28,
                    height: 28,
                    color: 'currentColor',
                    className: z.headerIcon
                });
            case w.bg.SEARCH:
                return (0, i.jsx)(u._Ve, {
                    size: 'md',
                    color: 'currentColor',
                    className: z.headerIcon
                });
        }
    }
    function d() {
        switch (t.type) {
            case w.bg.FAVORITES:
                return K.intl.string(K.t.k8fFjo);
            case w.bg.RECENTLY_HEARD:
                return K.intl.string(K.t['8i/+SE']);
            case w.bg.FREQUENTLY_USED:
                return K.intl.string(K.t['+cGVV1']);
            case w.bg.GUILD:
                return t.guild.name;
            case w.bg.DEFAULTS:
                return K.intl.string(K.t.Rtvk9f);
            case w.bg.SEARCH:
                return K.intl.string(K.t.zkoeq6);
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
                className: s()(z.sectionContainer, { [z.sectionContainerNitroLocked]: o }),
                children: (0, i.jsx)(u.P3F, {
                    className: s()(z.sectionHeader, { [z.notFirstSectionHeader]: 0 !== a }),
                    onClick: r,
                    'aria-expanded': !n,
                    children: (0, i.jsxs)('div', {
                        className: z.sectionHeaderContent,
                        children: [
                            c(),
                            (0, i.jsx)(u.X6q, {
                                variant: 'eyebrow',
                                color: 'none',
                                className: z.sectionTitle,
                                children: d()
                            }),
                            (0, i.jsx)(D.Z, {
                                className: z.headerIcon,
                                direction: n ? D.Z.Directions.RIGHT : D.Z.Directions.DOWN
                            })
                        ]
                    })
                })
            })
        ]
    });
}
function el() {
    return (0, i.jsx)(d.Z, { message: K.intl.string(K.t.bgDdND) });
}
function eu(e) {
    let { descriptors: t, soundButtonProps: n, rowIndex: a, isLastRow: o, isUsingKeyboardNavigation: l, suppressPlaySound: u, gridRowProps: c, getItemProps: d, onSelectItem: f, onItemMouseEnter: _, buttonOverlay: p, isNitroLocked: h, shouldShowUpsell: m, refreshEnabled: g, inExpressionPicker: v } = e,
        y = E.Wq.useStore((e) => e.inspectedExpressionPosition);
    return (0, i.jsx)('ul', {
        ...c,
        className: s()(z.soundRow, {
            [z.soundRowNitroLocked]: h,
            [z.lastSoundRow]: o
        }),
        children: t.map((e, t) => {
            let i = 'item-'.concat(t),
                s = l && y.rowIndex === a && y.columnIndex === t;
            switch (e.item.type) {
                case w.vB.SOUND:
                    return (0, r.createElement)(Z.ZP, {
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
                case w.vB.ADD_SOUND:
                    return (0, r.createElement)(F.Z, {
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
function ec(e) {
    let { guildId: t, channel: a, containerWidth: d, onClose: g, onSelect: b, shouldValidateSelectedSound: D = !1, suppressPlaySound: Z = !1, shouldShowUpsell: F = !0, gridNotice: q, soundButtonOverlay: ec, listPadding: ed, renderHeader: ef, defaultSoundsOnly: e_ = !1, inExpressionPicker: ep, refreshEnabled: eh, analyticsSource: em } = e,
        { audioRef: eg } = r.useContext(A.Z),
        { analyticsLocations: eE } = (0, p.ZP)(),
        { analyticsLocations: ev } = (0, p.ZP)(_.Z.PREMIUM_UPSELL),
        { location: ey } = (0, f.O)(),
        eI = r.useMemo(
            () => ({
                ...ey,
                section: Y.jXE.SOUNDBOARD_SOUND_PICKER
            }),
            [ey]
        ),
        [eT, eb] = r.useState(null),
        eS = (0, l.e7)([R.default], () => R.default.getCurrentUser()),
        eA = (0, x.I5)(eS, W.p9.TIER_2),
        eN = (0, l.e7)([O.Z], () => {
            var e;
            return O.Z.getVoiceState(t, null !== (e = null == eS ? void 0 : eS.id) && void 0 !== e ? e : Y.lds);
        }),
        eC = (null == eN ? void 0 : eN.selfDeaf) || (null == eN ? void 0 : eN.mute) || (null == eN ? void 0 : eN.suppress),
        eR = (0, v.Iu)((e) => e.searchQuery),
        eO = null != eR && '' !== eR,
        eD = (0, m.Dt)(),
        { categories: eL, soundCounts: ex } = (0, B.ZP)(a, void 0, e_),
        [eP, ew] = r.useState([]),
        [eM, ek] = r.useState(!1),
        eU = (0, B.FS)(eL, eP, eR).filter((e) => e.items.length > 0),
        eG = eU.some((e) => !!(0, x._O)(e.categoryInfo) && e.categoryInfo.isNitroLocked),
        eB = !eA && F && eG,
        eZ = N.T4.useSetting(),
        eF = r.useMemo(() => new Set(eZ), [eZ]),
        eV = null == a,
        ej = x.ZP.canUseCustomCallSounds(eS),
        eH = r.useCallback(
            (e) => {
                eF.has(e) ? eF.delete(e) : eF.add(e), N.T4.updateSetting(Array.from(eF));
            },
            [eF]
        ),
        eY = r.useCallback(
            (e, t, n) => {
                if (null != b && !D) return b(e, n);
                let i = (0, M.Nq)(eS, e, a, !1);
                if (null != b && D && i) b(e, n);
                else if (!Z && i && (0, M.C0)(a)) {
                    var r;
                    (0, M.GN)(e, null !== (r = null == a ? void 0 : a.id) && void 0 !== r ? r : Y.lds, t),
                        eO &&
                            L.default.track(Y.rMx.SEARCH_RESULT_SELECTED, {
                                search_type: Y.aib.SOUNDBOARD,
                                channel_id: null == a ? void 0 : a.id,
                                query: eR,
                                location_stack: t
                            });
                } else {
                    if ((0, M.Nq)(eS, e, a)) return;
                    F && eb(e);
                }
            },
            [Z, eS, a, F, eO, eR, b, D]
        ),
        eW = r.useCallback(
            (e, t) => {
                switch (e.item.type) {
                    case w.vB.SOUND:
                        return eY(e.item.sound, eE, (null == t ? void 0 : t.shiftKey) !== !0);
                    case w.vB.ADD_SOUND:
                        return g(), (0, H.Z)(e.item.guild.id);
                }
            },
            [eE, eY, g]
        ),
        eK = r.useCallback(
            (e, n, r, s, o) => {
                let l = eU[r.sectionIndex],
                    u = F && es(l.categoryInfo, eA, t),
                    c = r.sectionIndex === eU.length - 1 && r.rowIndex === r.totalRowCount - 1;
                return (0, i.jsx)(
                    eu,
                    {
                        descriptors: e,
                        rowIndex: r.rowIndex,
                        isLastRow: c,
                        isUsingKeyboardNavigation: r.isUsingKeyboardNavigation,
                        gridRowProps: n,
                        getItemProps: s,
                        onItemMouseEnter: o,
                        suppressPlaySound: Z,
                        onSelectItem: eW,
                        soundButtonProps: {
                            channel: a,
                            interactive: eV ? ej : !eC,
                            forceSecondaryActions: !0,
                            analyticsLocations: eE
                        },
                        buttonOverlay: ec,
                        isNitroLocked: u && eB,
                        shouldShowUpsell: F,
                        refreshEnabled: eh,
                        inExpressionPicker: ep
                    },
                    'row-'.concat(n['aria-rowindex'])
                );
            },
            [eU, F, eA, t, Z, eW, a, eV, ej, eC, eE, ec, eB, eh, ep]
        ),
        ez = r.useCallback(
            (e, t) => {
                if (e <= 0 || !F) return !1;
                let n = eU[e],
                    i = eU[e - 1],
                    r = es(n.categoryInfo, eA, t),
                    a = es(i.categoryInfo, eA, t);
                return r && !a;
            },
            [eU, F, eA]
        ),
        eq = r.useCallback((e) => (0 === e ? et : ez(e, t) ? ee : $), [t, ez]),
        eQ = r.useCallback(
            (e) => {
                let t = e === eU.length - 1;
                return eB && t ? er : 0;
            },
            [eU, eB]
        ),
        eX = r.useCallback(
            (e, n) => {
                let r = ''.concat(e.key),
                    a = F && es(e.categoryInfo, eA, t),
                    s = ez(n, t);
                return (0, i.jsx)(
                    eo,
                    {
                        categoryInfo: e.categoryInfo,
                        toggleCollapsed: () => eH(r),
                        collapsed: eF.has(r),
                        index: n,
                        isSectionNitroLocked: a && eB,
                        showNitroDivider: s && eB
                    },
                    'header-'.concat(r)
                );
            },
            [eF, eH, t, ez, F, eA, eB]
        ),
        eJ = r.useCallback(
            (e, t) => {
                let n = t === eU.length - 1;
                return eB && n ? (0, i.jsx)('div', { className: z.sectionFooter }) : null;
            },
            [eU, eB]
        ),
        e$ = r.useCallback((e) => ew((0, G.YM)(e, eL, eS, a, eE)), [a, eS, eL, eE]),
        e0 = r.useCallback((e) => {
            (0, c.jW)(e, async () => {
                let { default: e } = await n.e('56049').then(n.bind(n, 338991));
                return (t) => (0, i.jsx)(e, { ...t });
            });
        }, []),
        e1 = r.useCallback(
            () =>
                ep
                    ? (0, i.jsx)(I.Hh, {
                          renderPopout: () => (0, i.jsx)(I.hq, {}),
                          tooltipText: K.intl.string(K.t['19lt29']),
                          position: 'top',
                          clickableClassName: s()(z.settingsClickArea, z.settingsSoundmojiClickArea),
                          children: (0, i.jsx)(u.gj8, {
                              size: 'md',
                              color: 'currentColor',
                              className: z.settingsIcon
                          })
                      })
                    : (0, i.jsx)(u.P3F, {
                          tabIndex: 0,
                          className: z.settingsClickArea,
                          onClick: e0,
                          'aria-label': K.intl.string(K.t.kbFsAA),
                          children: (0, i.jsx)(u.gj8, {
                              size: 'md',
                              color: 'currentColor',
                              className: z.settingsIcon
                          })
                      }),
            [ep, e0]
        ),
        e2 = r.useCallback(
            (e) =>
                (0, i.jsx)(V.Z, {
                    soundboardListRef: e,
                    categories: eL,
                    shouldUpsellLockedCategories: eB,
                    listPadding: ed,
                    guildId: t,
                    inExpressionPicker: ep
                }),
            [eL, eB, ed, t, ep]
        ),
        e3 = () => {
            let e = P.Z.getSoundById(ea);
            null != e && eb(e);
        },
        e4 = r.useCallback(() => {
            let e = (0, x.Px)(W.p9.TIER_2);
            return K.intl.format(K.t['tw/SSk'], {
                nitroTierName: e,
                onClick: e3
            });
        }, []),
        e6 = r.useCallback(
            () =>
                eB
                    ? (0, i.jsx)(T.p, {
                          showUpsell: eM,
                          text: e4(),
                          button: K.intl.string(K.t.pj0XBA),
                          buttonAnalyticsObject: { section: Y.jXE.SOUND_PICKER_FLOATING_UPSELL }
                      })
                    : null,
            [e4, eM, eB]
        ),
        e5 = r.useCallback(
            (e) => {
                if ((null == e ? void 0 : e.item.type) === w.vB.SOUND) {
                    var t;
                    return (0, i.jsx)(j.Z, {
                        closePicker: g,
                        soundboardSound: null !== (t = null == e ? void 0 : e.item.sound) && void 0 !== t ? t : null
                    });
                }
                return null;
            },
            [g]
        ),
        e7 = 'https://cdn.discordapp.com/assets/premium/roadblocks/soundboard_dark.png',
        e8 = r.useCallback(() => {
            var e;
            let t = P.Z.getSoundById(ea),
                n = new Audio((0, k.Z)(ea));
            null != eg.current && eg.current.pause(), (eg.current = n), (n.currentTime = 0), (n.volume = (0, U.Z)(null !== (e = null == t ? void 0 : t.volume) && void 0 !== e ? e : 1)), n.play();
        }, [eg]),
        e9 = (0, l.e7)([C.Z], () => C.Z.getMediaSessionId());
    return (
        (0, h.Z)({
            type: o.ImpressionTypes.POPOUT,
            name: o.ImpressionNames.SOUNDBOARD_POPOUT,
            properties: {
                source: em,
                guild_id: t,
                media_session_id: e9,
                available_custom_sounds_count: ex.unlockedCustomSoundCount,
                unavailable_custom_sounds_count: ex.lockedCustomSoundCount,
                favorite_sounds_count: ex.favoriteSoundCount
            }
        }),
        (0, i.jsxs)(i.Fragment, {
            children: [
                null != eT
                    ? (0, i.jsx)(S.Z, {
                          containerContext: ep ? S.p.TAB_PARENT_CONTAINER : S.p.NONE,
                          image: {
                              url: e7,
                              width: 220,
                              height: 132
                          },
                          title: K.intl.string(ep ? K.t.rZEEvb : K.t.jGDYFx),
                          description: K.intl.string(ep ? K.t.ZPNG5O : K.t['grL/ho']),
                          enableSocialProof: !0,
                          analyticsLocationSection: Y.jXE.SOUNDBOARD_SOUND_PICKER_UPSELL,
                          upsellViewedTrackingData: {
                              type: W.cd.SOUND_PICKER_SOUND_CLICKED,
                              is_external: !0,
                              location: {
                                  ...eI,
                                  object: Y.qAy.SOUNDBOARD_SOUND
                              },
                              location_stack: ev,
                              sku_id: x.ZP.getSkuIdForPremiumType(W.p9.TIER_2)
                          },
                          onClose: () => eb(null),
                          onDisplay: e8
                      })
                    : void 0,
                (0, i.jsx)(y.Z, {
                    categories: eU,
                    collapsedCategories: eF,
                    containerWidth: d,
                    store: E.Wq,
                    onSelectItem: eW,
                    onSearchExpressions: e$,
                    hasSearchResults: eP.length > 0,
                    defaultSearchPlaceholder: K.intl.string(K.t.sKt3xc),
                    renderRow: eK,
                    renderSectionHeader: eX,
                    renderSectionFooter: eJ,
                    renderCategoryList: e2,
                    renderHeaderAccessories: e1,
                    rowHeight: eh ? J : X,
                    sectionHeaderHeight: eq,
                    sectionFooterHeight: eQ,
                    listPadding: Q,
                    itemNodeWidth: eh ? ei : en,
                    gridNavigatorId: eD,
                    renderEmptySearchState: el,
                    renderInspector: e5,
                    gridNotice: q,
                    renderHeader: ef,
                    renderUpsell: e6,
                    setShowUpsell: ek
                })
            ]
        })
    );
}
