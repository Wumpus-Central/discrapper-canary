n.d(t, {
    O: () => eu,
    Z: () => e_
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(990547),
    l = n(442837),
    c = n(481060),
    u = n(239091),
    d = n(788911),
    f = n(2052),
    p = n(100527),
    _ = n(906732),
    h = n(213609),
    m = n(313201),
    g = n(880949),
    E = n(806966),
    v = n(28546),
    b = n(468954),
    y = n(409700),
    O = n(53691),
    S = n(75145),
    I = n(609218),
    T = n(386965),
    N = n(695346),
    A = n(19780),
    C = n(594174),
    R = n(979651),
    P = n(259580),
    w = n(626135),
    D = n(74538),
    x = n(763296),
    L = n(697426),
    M = n(242291),
    k = n(22382),
    j = n(747071),
    U = n(421673),
    G = n(663215),
    B = n(409673),
    Z = n(347072),
    F = n(835648),
    V = n(650743),
    H = n(343747),
    W = n(981631),
    Y = n(474936),
    K = n(388032),
    z = n(40925);
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
function Q(e) {
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
                q(e, t, n[t]);
            });
    }
    return e;
}
function X(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function J(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : X(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let $ = 16,
    ee = [8, 0, 8, 0],
    et = 48,
    en = 80,
    er = 32,
    ei = 32 + S.Kn,
    eo = 16,
    ea = 150,
    es = 100,
    el = 60,
    ec = '3';
function eu(e, t, n) {
    return (null == n && e.type === L.bg.GUILD && !t) || (e.type === L.bg.GUILD && e.guild.id !== n && !t);
}
function ed(e) {
    let { categoryInfo: t, collapsed: n, toggleCollapsed: i, index: o, isSectionNitroLocked: s, showNitroDivider: l } = e;
    function u() {
        switch (t.type) {
            case L.bg.FAVORITES:
                return (0, r.jsx)(c.r7p, {
                    size: 'xs',
                    color: 'currentColor',
                    className: z.headerIcon
                });
            case L.bg.RECENTLY_HEARD:
                return (0, r.jsx)(c.T39, {
                    size: 'custom',
                    width: 20,
                    height: 20,
                    color: 'currentColor',
                    className: z.headerIcon
                });
            case L.bg.FREQUENTLY_USED:
                return (0, r.jsx)(c.IeX, { className: z.headerIcon });
            case L.bg.GUILD:
                return (0, r.jsx)(g.Z, {
                    guild: t.guild,
                    height: $,
                    width: $
                });
            case L.bg.DEFAULTS:
                return (0, r.jsx)(c.gw7, {
                    size: 'custom',
                    width: 28,
                    height: 28,
                    color: 'currentColor',
                    className: z.headerIcon
                });
            case L.bg.SEARCH:
                return (0, r.jsx)(c._Ve, {
                    size: 'md',
                    color: 'currentColor',
                    className: z.headerIcon
                });
        }
    }
    function d() {
        switch (t.type) {
            case L.bg.FAVORITES:
                return K.NW.string(K.t.k8fFjo);
            case L.bg.RECENTLY_HEARD:
                return K.NW.string(K.t['8i/+SE']);
            case L.bg.FREQUENTLY_USED:
                return K.NW.string(K.t['+cGVV1']);
            case L.bg.GUILD:
                return t.guild.name;
            case L.bg.DEFAULTS:
                return K.NW.string(K.t.Rtvk9f);
            case L.bg.SEARCH:
                return K.NW.string(K.t.zkoeq6);
        }
    }
    return (0, r.jsxs)(r.Fragment, {
        children: [
            l &&
                (0, r.jsx)(S.ZP, {
                    colorOpacity: 0.35,
                    glowOpacity: 0.35
                }),
            (0, r.jsx)('div', {
                className: a()(z.sectionContainer, { [z.sectionContainerNitroLocked]: s }),
                children: (0, r.jsx)(c.P3F, {
                    className: a()(z.sectionHeader, { [z.notFirstSectionHeader]: 0 !== o }),
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
function ef() {
    return (0, r.jsx)(d.Z, { message: K.NW.string(K.t.bgDdND) });
}
function ep(e) {
    let { descriptors: t, soundButtonProps: n, rowIndex: o, isLastRow: s, isUsingKeyboardNavigation: l, suppressPlaySound: c, gridRowProps: u, getItemProps: d, onSelectItem: f, onItemMouseEnter: p, buttonOverlay: _, isNitroLocked: h, shouldShowUpsell: m, refreshEnabled: g, inExpressionPicker: v } = e,
        b = E.Wq.useStore((e) => e.inspectedExpressionPosition);
    return (0, r.jsx)(
        'ul',
        J(Q({}, u), {
            className: a()(z.soundRow, {
                [z.soundRowNitroLocked]: h,
                [z.lastSoundRow]: s
            }),
            children: t.map((e, t) => {
                let r = 'item-'.concat(t),
                    a = l && b.rowIndex === o && b.columnIndex === t;
                switch (e.item.type) {
                    case L.vB.SOUND:
                        return (0, i.createElement)(
                            B.ZP,
                            J(Q({}, d(t), n), {
                                key: ''.concat(r, '-').concat(e.item.sound.soundId),
                                sound: e.item.sound,
                                suppressPlaySound: c,
                                focused: a,
                                onMouseEnter: () => p(t),
                                onSelectItem: (t) => f(e, t),
                                enableSecondaryActions: !0,
                                buttonOverlay: _,
                                inNitroLockedSection: h,
                                showLockForDisabledSound: m,
                                refreshEnabled: g,
                                isSoundmoji: !0 === v
                            })
                        );
                    case L.vB.ADD_SOUND:
                        return (0, i.createElement)(
                            Z.Z,
                            J(Q({}, d(t)), {
                                key: r,
                                guild: e.item.guild,
                                focused: a,
                                onSelectItem: () => f(e),
                                refreshEnabled: g
                            })
                        );
                }
            })
        })
    );
}
function e_(e) {
    let { guildId: t, channel: o, containerWidth: d, onClose: g, onSelect: S, shouldValidateSelectedSound: P = !1, suppressPlaySound: B = !1, shouldShowUpsell: Z = !0, gridNotice: q, soundButtonOverlay: X, listPadding: $, renderHeader: e_, defaultSoundsOnly: eh = !1, inExpressionPicker: em, refreshEnabled: eg, analyticsSource: eE } = e,
        { audioRef: ev } = i.useContext(T.Z),
        { analyticsLocations: eb } = (0, _.ZP)(),
        { analyticsLocations: ey } = (0, _.ZP)(p.Z.PREMIUM_UPSELL),
        { location: eO } = (0, f.O)(),
        eS = i.useMemo(() => J(Q({}, eO), { section: W.jXE.SOUNDBOARD_SOUND_PICKER }), [eO]),
        [eI, eT] = i.useState(null),
        eN = (0, l.e7)([C.default], () => C.default.getCurrentUser()),
        eA = (0, D.I5)(eN, Y.p9.TIER_2),
        eC = (0, l.e7)([R.Z], () => {
            var e;
            return R.Z.getVoiceState(t, null !== (e = null == eN ? void 0 : eN.id) && void 0 !== e ? e : W.lds);
        }),
        eR = (null == eC ? void 0 : eC.selfDeaf) || (null == eC ? void 0 : eC.mute) || (null == eC ? void 0 : eC.suppress),
        eP = (0, v.Iu)((e) => e.searchQuery),
        ew = null != eP && '' !== eP,
        eD = (0, m.Dt)(),
        { categories: ex, soundCounts: eL } = (0, G.ZP)(o, void 0, eh),
        [eM, ek] = i.useState([]),
        [ej, eU] = i.useState(!1),
        eG = (0, G.FS)(ex, eM, eP).filter((e) => e.items.length > 0),
        eB = eG.some((e) => !!(0, D._O)(e.categoryInfo) && e.categoryInfo.isNitroLocked),
        eZ = !eA && Z && eB,
        eF = N.T4.useSetting(),
        eV = i.useMemo(() => new Set(eF), [eF]),
        eH = null == o,
        eW = D.ZP.canUseCustomCallSounds(eN),
        eY = i.useCallback(
            (e) => {
                eV.has(e) ? eV.delete(e) : eV.add(e), N.T4.updateSetting(Array.from(eV));
            },
            [eV]
        ),
        eK = i.useCallback(
            (e, t, n) => {
                if (null != S && !P) return S(e, n);
                let r = (0, M.Nq)(eN, e, o, !1);
                if (null != S && P && r) S(e, n);
                else if (!B && r && (0, M.C0)(o)) {
                    var i;
                    (0, M.GN)(e, null !== (i = null == o ? void 0 : o.id) && void 0 !== i ? i : W.lds, t),
                        ew &&
                            w.default.track(W.rMx.SEARCH_RESULT_SELECTED, {
                                search_type: W.aib.SOUNDBOARD,
                                channel_id: null == o ? void 0 : o.id,
                                query: eP,
                                location_stack: t
                            });
                } else {
                    if ((0, M.Nq)(eN, e, o)) return;
                    Z && eT(e);
                }
            },
            [B, eN, o, Z, ew, eP, S, P]
        ),
        ez = i.useCallback(
            (e, t) => {
                switch (e.item.type) {
                    case L.vB.SOUND:
                        return eK(e.item.sound, eb, (null == t ? void 0 : t.shiftKey) !== !0);
                    case L.vB.ADD_SOUND:
                        return g(), (0, H.Z)(e.item.guild.id);
                }
            },
            [eb, eK, g]
        ),
        eq = i.useCallback(
            (e, n, i, a, s) => {
                let l = eG[i.sectionIndex],
                    c = Z && eu(l.categoryInfo, eA, t),
                    u = i.sectionIndex === eG.length - 1 && i.rowIndex === i.totalRowCount - 1;
                return (0, r.jsx)(
                    ep,
                    {
                        descriptors: e,
                        rowIndex: i.rowIndex,
                        isLastRow: u,
                        isUsingKeyboardNavigation: i.isUsingKeyboardNavigation,
                        gridRowProps: n,
                        getItemProps: a,
                        onItemMouseEnter: s,
                        suppressPlaySound: B,
                        onSelectItem: ez,
                        soundButtonProps: {
                            channel: o,
                            interactive: eH ? eW : !eR,
                            forceSecondaryActions: !0,
                            analyticsLocations: eb
                        },
                        buttonOverlay: X,
                        isNitroLocked: c && eZ,
                        shouldShowUpsell: Z,
                        refreshEnabled: eg,
                        inExpressionPicker: em
                    },
                    'row-'.concat(n['aria-rowindex'])
                );
            },
            [eG, Z, eA, t, B, ez, o, eH, eW, eR, eb, X, eZ, eg, em]
        ),
        eQ = i.useCallback(
            (e, t) => {
                if (e <= 0 || !Z) return !1;
                let n = eG[e],
                    r = eG[e - 1],
                    i = eu(n.categoryInfo, eA, t),
                    o = eu(r.categoryInfo, eA, t);
                return i && !o;
            },
            [eG, Z, eA]
        ),
        eX = i.useCallback((e) => (0 === e ? eo : eQ(e, t) ? ei : er), [t, eQ]),
        eJ = i.useCallback(
            (e) => {
                let t = e === eG.length - 1;
                return eZ && t ? el : 0;
            },
            [eG, eZ]
        ),
        e$ = i.useCallback(
            (e, n) => {
                let i = ''.concat(e.key),
                    o = Z && eu(e.categoryInfo, eA, t),
                    a = eQ(n, t);
                return (0, r.jsx)(
                    ed,
                    {
                        categoryInfo: e.categoryInfo,
                        toggleCollapsed: () => eY(i),
                        collapsed: eV.has(i),
                        index: n,
                        isSectionNitroLocked: o && eZ,
                        showNitroDivider: a && eZ
                    },
                    'header-'.concat(i)
                );
            },
            [eV, eY, t, eQ, Z, eA, eZ]
        ),
        e0 = i.useCallback(
            (e, t) => {
                let n = t === eG.length - 1;
                return eZ && n ? (0, r.jsx)('div', { className: z.sectionFooter }) : null;
            },
            [eG, eZ]
        ),
        e1 = i.useCallback((e) => ek((0, U.YM)(e, ex, eN, o, eb)), [o, eN, ex, eb]),
        e2 = i.useCallback((e) => {
            (0, u.jW)(e, async () => {
                let { default: e } = await n.e('56049').then(n.bind(n, 338991));
                return (t) => (0, r.jsx)(e, Q({}, t));
            });
        }, []),
        e3 = i.useCallback(
            () =>
                em
                    ? (0, r.jsx)(y.Hh, {
                          renderPopout: () => (0, r.jsx)(y.hq, {}),
                          tooltipText: K.NW.string(K.t['19lt29']),
                          position: 'top',
                          clickableClassName: a()(z.settingsClickArea, z.settingsSoundmojiClickArea),
                          children: (0, r.jsx)(c.gj8, {
                              size: 'md',
                              color: 'currentColor',
                              className: z.settingsIcon
                          })
                      })
                    : (0, r.jsx)(c.P3F, {
                          tabIndex: 0,
                          className: z.settingsClickArea,
                          onClick: e2,
                          'aria-label': K.NW.string(K.t.kbFsAA),
                          children: (0, r.jsx)(c.gj8, {
                              size: 'md',
                              color: 'currentColor',
                              className: z.settingsIcon
                          })
                      }),
            [em, e2]
        ),
        e4 = i.useCallback(
            (e) =>
                (0, r.jsx)(F.Z, {
                    soundboardListRef: e,
                    categories: ex,
                    shouldUpsellLockedCategories: eZ,
                    listPadding: $,
                    guildId: t,
                    inExpressionPicker: em
                }),
            [ex, eZ, $, t, em]
        ),
        e6 = () => {
            let e = x.Z.getSoundById(ec);
            null != e && eT(e);
        },
        e5 = i.useCallback(() => {
            let e = (0, D.Px)(Y.p9.TIER_2);
            return K.NW.format(K.t['tw/SSk'], {
                nitroTierName: e,
                onClick: e6
            });
        }, []),
        e7 = i.useCallback(
            () =>
                eZ
                    ? (0, r.jsx)(O.p, {
                          showUpsell: ej,
                          text: e5(),
                          button: K.NW.string(K.t.pj0XBA),
                          buttonAnalyticsObject: { section: W.jXE.SOUND_PICKER_FLOATING_UPSELL }
                      })
                    : null,
            [e5, ej, eZ]
        ),
        e8 = i.useCallback(
            (e) => {
                if ((null == e ? void 0 : e.item.type) === L.vB.SOUND) {
                    var t;
                    return (0, r.jsx)(V.Z, {
                        closePicker: g,
                        soundboardSound: null !== (t = null == e ? void 0 : e.item.sound) && void 0 !== t ? t : null
                    });
                }
                return null;
            },
            [g]
        ),
        e9 = 'https://cdn.discordapp.com/assets/premium/roadblocks/soundboard_dark.png',
        te = i.useCallback(() => {
            var e;
            let t = x.Z.getSoundById(ec),
                n = new Audio((0, k.Z)(ec));
            null != ev.current && ev.current.pause(), (ev.current = n), (n.currentTime = 0), (n.volume = (0, j.Z)(null !== (e = null == t ? void 0 : t.volume) && void 0 !== e ? e : 1)), n.play();
        }, [ev]),
        tt = (0, l.e7)([A.Z], () => A.Z.getMediaSessionId());
    return (
        (0, h.Z)({
            type: s.ImpressionTypes.POPOUT,
            name: s.ImpressionNames.SOUNDBOARD_POPOUT,
            properties: {
                source: eE,
                guild_id: t,
                media_session_id: tt,
                available_custom_sounds_count: eL.unlockedCustomSoundCount,
                unavailable_custom_sounds_count: eL.lockedCustomSoundCount,
                favorite_sounds_count: eL.favoriteSoundCount
            }
        }),
        (0, r.jsxs)(r.Fragment, {
            children: [
                null != eI
                    ? (0, r.jsx)(I.Z, {
                          containerContext: em ? I.p.TAB_PARENT_CONTAINER : I.p.NONE,
                          image: {
                              url: e9,
                              width: 220,
                              height: 132
                          },
                          title: K.NW.string(em ? K.t.rZEEvb : K.t.jGDYFx),
                          description: K.NW.string(em ? K.t.ZPNG5O : K.t['grL/ho']),
                          enableSocialProof: !0,
                          analyticsLocationSection: W.jXE.SOUNDBOARD_SOUND_PICKER_UPSELL,
                          upsellViewedTrackingData: {
                              type: Y.cd.SOUND_PICKER_SOUND_CLICKED,
                              is_external: !0,
                              location: J(Q({}, eS), { object: W.qAy.SOUNDBOARD_SOUND }),
                              location_stack: ey,
                              sku_id: D.ZP.getSkuIdForPremiumType(Y.p9.TIER_2)
                          },
                          onClose: () => eT(null),
                          onDisplay: te
                      })
                    : void 0,
                (0, r.jsx)(b.Z, {
                    categories: eG,
                    collapsedCategories: eV,
                    containerWidth: d,
                    store: E.Wq,
                    onSelectItem: ez,
                    onSearchExpressions: e1,
                    hasSearchResults: eM.length > 0,
                    defaultSearchPlaceholder: K.NW.string(K.t.sKt3xc),
                    renderRow: eq,
                    renderSectionHeader: e$,
                    renderSectionFooter: e0,
                    renderCategoryList: e4,
                    renderHeaderAccessories: e3,
                    rowHeight: eg ? en : et,
                    sectionHeaderHeight: eX,
                    sectionFooterHeight: eJ,
                    listPadding: ee,
                    itemNodeWidth: eg ? es : ea,
                    gridNavigatorId: eD,
                    renderEmptySearchState: ef,
                    renderInspector: e8,
                    gridNotice: q,
                    renderHeader: e_,
                    renderUpsell: e7,
                    setShowUpsell: eU
                })
            ]
        })
    );
}
