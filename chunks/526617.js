n.d(t, {
    O: () => ec,
    Z: () => ef
}),
    n(388685),
    n(472816),
    n(794429);
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
    S = n(609218),
    T = n(386965),
    A = n(695346),
    N = n(19780),
    C = n(594174),
    R = n(979651),
    P = n(259580),
    w = n(626135),
    D = n(74538),
    L = n(763296),
    x = n(697426),
    M = n(242291),
    k = n(22382),
    j = n(747071),
    U = n(421673),
    G = n(663215),
    B = n(835648),
    V = n(650743),
    F = n(495332),
    Z = n(343747),
    H = n(981631),
    Y = n(474936),
    W = n(388032),
    K = n(316443);
function z(e, t, n) {
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
function q(e) {
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
                z(e, t, n[t]);
            });
    }
    return e;
}
function Q(e, t) {
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
function X(e, t) {
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
let J = 16,
    $ = [8, 0, 8, 0],
    ee = 48,
    et = 80,
    en = 32,
    er = 32 + I.Kn,
    ei = 16,
    eo = 150,
    ea = 100,
    es = 60,
    el = '3';
function ec(e, t, n) {
    return (null == n && e.type === x.bg.GUILD && !t) || (e.type === x.bg.GUILD && e.guild.id !== n && !t);
}
function eu(e) {
    let { categoryInfo: t, collapsed: n, toggleCollapsed: i, index: o, isSectionNitroLocked: s, showNitroDivider: l } = e;
    function u() {
        switch (t.type) {
            case x.bg.FAVORITES:
                return (0, r.jsx)(c.r7p, {
                    size: 'xs',
                    color: 'currentColor',
                    className: K.headerIcon
                });
            case x.bg.RECENTLY_HEARD:
                return (0, r.jsx)(c.T39, {
                    size: 'custom',
                    width: 20,
                    height: 20,
                    color: 'currentColor',
                    className: K.headerIcon
                });
            case x.bg.FREQUENTLY_USED:
                return (0, r.jsx)(c.IeX, { className: K.headerIcon });
            case x.bg.GUILD:
                return (0, r.jsx)(g.Z, {
                    guild: t.guild,
                    height: J,
                    width: J
                });
            case x.bg.DEFAULTS:
                return (0, r.jsx)(c.gw7, {
                    size: 'custom',
                    width: 28,
                    height: 28,
                    color: 'currentColor',
                    className: K.headerIcon
                });
            case x.bg.SEARCH:
                return (0, r.jsx)(c._Ve, {
                    size: 'md',
                    color: 'currentColor',
                    className: K.headerIcon
                });
        }
    }
    function d() {
        switch (t.type) {
            case x.bg.FAVORITES:
                return W.intl.string(W.t.k8fFjo);
            case x.bg.RECENTLY_HEARD:
                return W.intl.string(W.t['8i/+SE']);
            case x.bg.FREQUENTLY_USED:
                return W.intl.string(W.t['+cGVV1']);
            case x.bg.GUILD:
                return t.guild.name;
            case x.bg.DEFAULTS:
                return W.intl.string(W.t.Rtvk9f);
            case x.bg.SEARCH:
                return W.intl.string(W.t.zkoeq6);
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
                className: a()(K.sectionContainer, { [K.sectionContainerNitroLocked]: s }),
                children: (0, r.jsx)(c.P3F, {
                    className: a()(K.sectionHeader, { [K.notFirstSectionHeader]: 0 !== o }),
                    onClick: i,
                    'aria-expanded': !n,
                    children: (0, r.jsxs)('div', {
                        className: K.sectionHeaderContent,
                        children: [
                            u(),
                            (0, r.jsx)(c.X6q, {
                                variant: 'eyebrow',
                                color: 'none',
                                className: K.sectionTitle,
                                children: d()
                            }),
                            (0, r.jsx)(P.Z, {
                                className: K.headerIcon,
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
    return (0, r.jsx)(d.Z, { message: W.intl.string(W.t.bgDdND) });
}
function ef(e) {
    let { guildId: t, channel: o, containerWidth: d, onClose: g, onSelect: I, shouldValidateSelectedSound: P = !1, suppressPlaySound: z = !1, shouldShowUpsell: Q = !0, gridNotice: J, soundButtonOverlay: ef, listPadding: e_, renderHeader: ep, defaultSoundsOnly: eh = !1, inExpressionPicker: em, refreshEnabled: eg, analyticsSource: eE } = e,
        { audioRef: eb } = i.useContext(T.Z),
        { analyticsLocations: ey } = (0, p.ZP)(),
        { analyticsLocations: eO } = (0, p.ZP)(_.Z.PREMIUM_UPSELL),
        { location: ev } = (0, f.O)(),
        eI = i.useMemo(() => X(q({}, ev), { section: H.jXE.SOUNDBOARD_SOUND_PICKER }), [ev]),
        [eS, eT] = i.useState(null),
        eA = (0, l.e7)([C.default], () => C.default.getCurrentUser()),
        eN = (0, D.I5)(eA, Y.p9.TIER_2),
        eC = (0, l.e7)([R.Z], () => {
            var e;
            return R.Z.getVoiceState(t, null != (e = null == eA ? void 0 : eA.id) ? e : H.lds);
        }),
        eR = (null == eC ? void 0 : eC.selfDeaf) || (null == eC ? void 0 : eC.mute) || (null == eC ? void 0 : eC.suppress),
        eP = (0, b.Iu)((e) => e.searchQuery),
        ew = null != eP && '' !== eP,
        eD = (0, m.Dt)(),
        eL = (0, l.Wu)([L.Z], () => L.Z.getShownAllGuildIds()),
        { categories: ex, allSounds: eM, soundCounts: ek } = (0, G.ZP)(o, { shownAllGuildIds: eL }, eh),
        [ej, eU] = i.useState([]),
        [eG, eB] = i.useState(!1),
        eV = (0, G.FS)(ex, ej, eP).filter((e) => e.items.length > 0),
        eF = eV.some((e) => !!(0, D._O)(e.categoryInfo) && e.categoryInfo.isNitroLocked),
        eZ = !eN && Q && eF,
        eH = A.T4.useSetting(),
        eY = i.useMemo(() => new Set(eH), [eH]),
        eW = null == o,
        eK = D.ZP.canUseCustomCallSounds(eA),
        ez = i.useCallback(
            (e) => {
                eY.has(e) ? eY.delete(e) : eY.add(e), A.T4.updateSetting(Array.from(eY));
            },
            [eY]
        ),
        eq = i.useCallback(
            (e, t, n) => {
                if (null != I && !P) return I(e, n);
                let r = (0, M.Nq)(eA, e, o, !1);
                if (null != I && P && r) I(e, n);
                else if (!z && r && (0, M.C0)(o)) {
                    var i;
                    (0, M.GN)(e, null != (i = null == o ? void 0 : o.id) ? i : H.lds, t),
                        ew &&
                            w.default.track(H.rMx.SEARCH_RESULT_SELECTED, {
                                search_type: H.aib.SOUNDBOARD,
                                channel_id: null == o ? void 0 : o.id,
                                query: eP,
                                location_stack: t
                            });
                } else {
                    if ((0, M.Nq)(eA, e, o)) return;
                    Q && eT(e);
                }
            },
            [z, eA, o, Q, ew, eP, I, P]
        ),
        eQ = i.useCallback(
            (e, t) => {
                switch (e.item.type) {
                    case x.vB.SOUND:
                        return eq(e.item.sound, ey, (null == t ? void 0 : t.shiftKey) !== !0);
                    case x.vB.ADD_SOUND:
                        return g(), (0, Z.Z)(e.item.guild.id);
                }
            },
            [ey, eq, g]
        ),
        eX = i.useCallback(
            (e, n, i, s, l) => {
                let c = eV[i.sectionIndex],
                    u = Q && ec(c.categoryInfo, eN, t) && eZ,
                    d = i.sectionIndex === eV.length - 1 && i.rowIndex === i.totalRowCount - 1;
                return (0, r.jsx)(
                    'ul',
                    X(q({}, n), {
                        className: a()(K.soundRow, {
                            [K.soundRowNitroLocked]: u,
                            [K.lastSoundRow]: d
                        }),
                        children: e.map((e, t) =>
                            (0, r.jsx)(
                                F.Z,
                                {
                                    descriptor: e,
                                    soundButtonProps: {
                                        channel: o,
                                        interactive: eW ? eK : !eR,
                                        forceSecondaryActions: !0,
                                        analyticsLocations: ey
                                    },
                                    rowIndex: i.rowIndex,
                                    columnIndex: t,
                                    isUsingKeyboardNavigation: i.isUsingKeyboardNavigation,
                                    suppressPlaySound: z,
                                    getItemProps: s,
                                    onSelectItem: eQ,
                                    onItemMouseEnter: l,
                                    buttonOverlay: ef,
                                    isNitroLocked: u,
                                    shouldShowUpsell: Q,
                                    refreshEnabled: eg,
                                    inExpressionPicker: em
                                },
                                t
                            )
                        )
                    }),
                    'row-'.concat(n['aria-rowindex'])
                );
            },
            [eV, Q, eN, t, z, eQ, o, eW, eK, eR, ey, ef, eZ, eg, em]
        ),
        eJ = i.useCallback(
            (e, t) => {
                if (e <= 0 || !Q) return !1;
                let n = eV[e],
                    r = eV[e - 1],
                    i = ec(n.categoryInfo, eN, t),
                    o = ec(r.categoryInfo, eN, t);
                return i && !o;
            },
            [eV, Q, eN]
        ),
        e$ = i.useCallback((e) => (0 === e ? ei : eJ(e, t) ? er : en), [t, eJ]),
        e0 = i.useCallback(
            (e) => {
                let t = e === eV.length - 1;
                return eZ && t ? es : 0;
            },
            [eV, eZ]
        ),
        e1 = i.useCallback(
            (e, n) => {
                let i = ''.concat(e.key),
                    o = Q && ec(e.categoryInfo, eN, t),
                    a = eJ(n, t);
                return (0, r.jsx)(
                    eu,
                    {
                        categoryInfo: e.categoryInfo,
                        toggleCollapsed: () => ez(i),
                        collapsed: eY.has(i),
                        index: n,
                        isSectionNitroLocked: o && eZ,
                        showNitroDivider: a && eZ
                    },
                    'header-'.concat(i)
                );
            },
            [eY, ez, t, eJ, Q, eN, eZ]
        ),
        e2 = i.useCallback(
            (e, t) => {
                let n = t === eV.length - 1;
                return eZ && n ? (0, r.jsx)('div', { className: K.sectionFooter }) : null;
            },
            [eV, eZ]
        ),
        e3 = i.useCallback((e) => eU((0, U.cK)(e, Array.from(eM.values()).flat(), eA, o, ey)), [o, eA, eM, ey]),
        e4 = i.useCallback(
            (e) => {
                (0, u.jW)(e, async () => {
                    let { default: e } = await n.e('56049').then(n.bind(n, 338991));
                    return (t) => (0, r.jsx)(e, q({ sourceAnalyticsLocations: ey }, t));
                });
            },
            [ey]
        ),
        e5 = i.useCallback(
            () =>
                em
                    ? (0, r.jsx)(O.Hh, {
                          renderPopout: () => (0, r.jsx)(O.hq, {}),
                          tooltipText: W.intl.string(W.t['19lt29']),
                          position: 'top',
                          clickableClassName: a()(K.settingsClickArea, K.settingsSoundmojiClickArea),
                          children: (0, r.jsx)(c.gj8, {
                              size: 'md',
                              color: 'currentColor',
                              className: K.settingsIcon
                          })
                      })
                    : (0, r.jsx)(c.P3F, {
                          tabIndex: 0,
                          className: K.settingsClickArea,
                          onClick: e4,
                          'aria-label': W.intl.string(W.t.kbFsAA),
                          children: (0, r.jsx)(c.gj8, {
                              size: 'md',
                              color: 'currentColor',
                              className: K.settingsIcon
                          })
                      }),
            [em, e4]
        ),
        e6 = i.useCallback(
            (e) =>
                (0, r.jsx)(B.Z, {
                    soundboardListRef: e,
                    categories: ex,
                    shouldUpsellLockedCategories: eZ,
                    listPadding: e_,
                    guildId: t,
                    inExpressionPicker: em
                }),
            [ex, eZ, e_, t, em]
        ),
        e8 = () => {
            let e = L.Z.getSoundById(el);
            null != e && eT(e);
        },
        e7 = i.useCallback(() => {
            let e = (0, D.Px)(Y.p9.TIER_2);
            return W.intl.format(W.t['tw/SSk'], {
                nitroTierName: e,
                onClick: e8
            });
        }, []),
        e9 = i.useCallback(
            () =>
                eZ
                    ? (0, r.jsx)(v.p, {
                          showUpsell: eG,
                          text: e7(),
                          button: W.intl.string(W.t.pj0XBA),
                          buttonAnalyticsObject: { section: H.jXE.SOUND_PICKER_FLOATING_UPSELL }
                      })
                    : null,
            [e7, eG, eZ]
        ),
        te = i.useCallback(
            (e) => {
                var t;
                return (null == e ? void 0 : e.item.type) !== x.vB.SOUND
                    ? null
                    : (0, r.jsx)(V.Z, {
                          closePicker: g,
                          soundboardSound: null != (t = null == e ? void 0 : e.item.sound) ? t : null
                      });
            },
            [g]
        ),
        tt = 'https://cdn.discordapp.com/assets/premium/roadblocks/soundboard_dark.png',
        tn = i.useCallback(() => {
            var e;
            let t = L.Z.getSoundById(el),
                n = new Audio((0, k.Z)(el));
            null != eb.current && eb.current.pause(), (eb.current = n), (n.currentTime = 0), (n.volume = (0, j.Z)(null != (e = null == t ? void 0 : t.volume) ? e : 1)), n.play();
        }, [eb]),
        tr = (0, l.e7)([N.Z], () => N.Z.getMediaSessionId());
    return (
        (0, h.Z)({
            type: s.ImpressionTypes.POPOUT,
            name: s.ImpressionNames.SOUNDBOARD_POPOUT,
            properties: {
                source: eE,
                guild_id: t,
                media_session_id: tr,
                available_custom_sounds_count: ek.unlockedCustomSoundCount,
                unavailable_custom_sounds_count: ek.lockedCustomSoundCount,
                favorite_sounds_count: ek.favoriteSoundCount
            }
        }),
        (0, r.jsxs)(r.Fragment, {
            children: [
                null != eS
                    ? (0, r.jsx)(S.Z, {
                          containerContext: em ? S.p.TAB_PARENT_CONTAINER : S.p.NONE,
                          image: {
                              url: tt,
                              width: 220,
                              height: 132
                          },
                          title: W.intl.string(em ? W.t.rZEEvb : W.t.jGDYFx),
                          description: W.intl.string(em ? W.t.ZPNG5O : W.t['grL/ho']),
                          enableSocialProof: !0,
                          analyticsLocationSection: H.jXE.SOUNDBOARD_SOUND_PICKER_UPSELL,
                          upsellViewedTrackingData: {
                              type: Y.cd.SOUND_PICKER_SOUND_CLICKED,
                              is_external: !0,
                              location: X(q({}, eI), { object: H.qAy.SOUNDBOARD_SOUND }),
                              location_stack: eO,
                              sku_id: D.ZP.getSkuIdForPremiumType(Y.p9.TIER_2)
                          },
                          onClose: () => eT(null),
                          onDisplay: tn
                      })
                    : void 0,
                (0, r.jsx)(y.Z, {
                    categories: eV,
                    collapsedCategories: eY,
                    containerWidth: d,
                    store: E.Wq,
                    onSelectItem: eQ,
                    onSearchExpressions: e3,
                    hasSearchResults: ej.length > 0,
                    defaultSearchPlaceholder: W.intl.string(W.t.sKt3xc),
                    renderRow: eX,
                    renderSectionHeader: e1,
                    renderSectionFooter: e2,
                    renderCategoryList: e6,
                    renderHeaderAccessories: e5,
                    rowHeight: eg ? et : ee,
                    sectionHeaderHeight: e$,
                    sectionFooterHeight: e0,
                    listPadding: $,
                    itemNodeWidth: eg ? ea : eo,
                    gridNavigatorId: eD,
                    renderEmptySearchState: ed,
                    renderInspector: te,
                    gridNotice: J,
                    renderHeader: ep,
                    renderUpsell: e9,
                    setShowUpsell: eB
                })
            ]
        })
    );
}
