n.d(t, {
    O: () => ec,
    Z: () => ef
}),
    n(47120),
    n(86693),
    n(536091);
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
    v = n(409700),
    O = n(53691),
    I = n(75145),
    S = n(609218),
    T = n(386965),
    N = n(695346),
    A = n(19780),
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
    F = n(650743),
    V = n(495332),
    Z = n(343747),
    H = n(981631),
    W = n(474936),
    Y = n(388032),
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
                return Y.NW.string(Y.t.k8fFjo);
            case x.bg.RECENTLY_HEARD:
                return Y.NW.string(Y.t['8i/+SE']);
            case x.bg.FREQUENTLY_USED:
                return Y.NW.string(Y.t['+cGVV1']);
            case x.bg.GUILD:
                return t.guild.name;
            case x.bg.DEFAULTS:
                return Y.NW.string(Y.t.Rtvk9f);
            case x.bg.SEARCH:
                return Y.NW.string(Y.t.zkoeq6);
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
    return (0, r.jsx)(d.Z, { message: Y.NW.string(Y.t.bgDdND) });
}
function ef(e) {
    let { guildId: t, channel: o, containerWidth: d, onClose: g, onSelect: I, shouldValidateSelectedSound: P = !1, suppressPlaySound: z = !1, shouldShowUpsell: Q = !0, gridNotice: J, soundButtonOverlay: ef, listPadding: e_, renderHeader: ep, defaultSoundsOnly: eh = !1, inExpressionPicker: em, refreshEnabled: eg, analyticsSource: eE } = e,
        { audioRef: eb } = i.useContext(T.Z),
        { analyticsLocations: ey } = (0, p.ZP)(),
        { analyticsLocations: ev } = (0, p.ZP)(_.Z.PREMIUM_UPSELL),
        { location: eO } = (0, f.O)(),
        eI = i.useMemo(() => X(q({}, eO), { section: H.jXE.SOUNDBOARD_SOUND_PICKER }), [eO]),
        [eS, eT] = i.useState(null),
        eN = (0, l.e7)([C.default], () => C.default.getCurrentUser()),
        eA = (0, D.I5)(eN, W.p9.TIER_2),
        eC = (0, l.e7)([R.Z], () => {
            var e;
            return R.Z.getVoiceState(t, null != (e = null == eN ? void 0 : eN.id) ? e : H.lds);
        }),
        eR = (null == eC ? void 0 : eC.selfDeaf) || (null == eC ? void 0 : eC.mute) || (null == eC ? void 0 : eC.suppress),
        eP = (0, b.Iu)((e) => e.searchQuery),
        ew = null != eP && '' !== eP,
        eD = (0, m.Dt)(),
        eL = (0, l.Wu)([L.Z], () => L.Z.getShownAllGuildIds()),
        { categories: ex, allSounds: eM, soundCounts: ek } = (0, G.ZP)(o, { shownAllGuildIds: eL }, eh),
        [ej, eU] = i.useState([]),
        [eG, eB] = i.useState(!1),
        eF = (0, G.FS)(ex, ej, eP).filter((e) => e.items.length > 0),
        eV = eF.some((e) => !!(0, D._O)(e.categoryInfo) && e.categoryInfo.isNitroLocked),
        eZ = !eA && Q && eV,
        eH = N.T4.useSetting(),
        eW = i.useMemo(() => new Set(eH), [eH]),
        eY = null == o,
        eK = D.ZP.canUseCustomCallSounds(eN),
        ez = i.useCallback(
            (e) => {
                eW.has(e) ? eW.delete(e) : eW.add(e), N.T4.updateSetting(Array.from(eW));
            },
            [eW]
        ),
        eq = i.useCallback(
            (e, t, n) => {
                if (null != I && !P) return I(e, n);
                let r = (0, M.Nq)(eN, e, o, !1);
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
                    if ((0, M.Nq)(eN, e, o)) return;
                    Q && eT(e);
                }
            },
            [z, eN, o, Q, ew, eP, I, P]
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
                let c = eF[i.sectionIndex],
                    u = Q && ec(c.categoryInfo, eA, t) && eZ,
                    d = i.sectionIndex === eF.length - 1 && i.rowIndex === i.totalRowCount - 1;
                return (0, r.jsx)(
                    'ul',
                    X(q({}, n), {
                        className: a()(K.soundRow, {
                            [K.soundRowNitroLocked]: u,
                            [K.lastSoundRow]: d
                        }),
                        children: e.map((e, t) =>
                            (0, r.jsx)(
                                V.Z,
                                {
                                    descriptor: e,
                                    soundButtonProps: {
                                        channel: o,
                                        interactive: eY ? eK : !eR,
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
            [eF, Q, eA, t, z, eQ, o, eY, eK, eR, ey, ef, eZ, eg, em]
        ),
        eJ = i.useCallback(
            (e, t) => {
                if (e <= 0 || !Q) return !1;
                let n = eF[e],
                    r = eF[e - 1],
                    i = ec(n.categoryInfo, eA, t),
                    o = ec(r.categoryInfo, eA, t);
                return i && !o;
            },
            [eF, Q, eA]
        ),
        e$ = i.useCallback((e) => (0 === e ? ei : eJ(e, t) ? er : en), [t, eJ]),
        e0 = i.useCallback(
            (e) => {
                let t = e === eF.length - 1;
                return eZ && t ? es : 0;
            },
            [eF, eZ]
        ),
        e1 = i.useCallback(
            (e, n) => {
                let i = ''.concat(e.key),
                    o = Q && ec(e.categoryInfo, eA, t),
                    a = eJ(n, t);
                return (0, r.jsx)(
                    eu,
                    {
                        categoryInfo: e.categoryInfo,
                        toggleCollapsed: () => ez(i),
                        collapsed: eW.has(i),
                        index: n,
                        isSectionNitroLocked: o && eZ,
                        showNitroDivider: a && eZ
                    },
                    'header-'.concat(i)
                );
            },
            [eW, ez, t, eJ, Q, eA, eZ]
        ),
        e2 = i.useCallback(
            (e, t) => {
                let n = t === eF.length - 1;
                return eZ && n ? (0, r.jsx)('div', { className: K.sectionFooter }) : null;
            },
            [eF, eZ]
        ),
        e3 = i.useCallback((e) => eU((0, U.cK)(e, Array.from(eM.values()).flat(), eN, o, ey)), [o, eN, eM, ey]),
        e4 = i.useCallback(
            (e) => {
                (0, u.jW)(e, async () => {
                    let { default: e } = await n.e('56049').then(n.bind(n, 338991));
                    return (t) => (0, r.jsx)(e, q({ sourceAnalyticsLocations: ey }, t));
                });
            },
            [ey]
        ),
        e6 = i.useCallback(
            () =>
                em
                    ? (0, r.jsx)(v.Hh, {
                          renderPopout: () => (0, r.jsx)(v.hq, {}),
                          tooltipText: Y.NW.string(Y.t['19lt29']),
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
                          'aria-label': Y.NW.string(Y.t.kbFsAA),
                          children: (0, r.jsx)(c.gj8, {
                              size: 'md',
                              color: 'currentColor',
                              className: K.settingsIcon
                          })
                      }),
            [em, e4]
        ),
        e5 = i.useCallback(
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
        e7 = () => {
            let e = L.Z.getSoundById(el);
            null != e && eT(e);
        },
        e8 = i.useCallback(() => {
            let e = (0, D.Px)(W.p9.TIER_2);
            return Y.NW.format(Y.t['tw/SSk'], {
                nitroTierName: e,
                onClick: e7
            });
        }, []),
        e9 = i.useCallback(
            () =>
                eZ
                    ? (0, r.jsx)(O.p, {
                          showUpsell: eG,
                          text: e8(),
                          button: Y.NW.string(Y.t.pj0XBA),
                          buttonAnalyticsObject: { section: H.jXE.SOUND_PICKER_FLOATING_UPSELL }
                      })
                    : null,
            [e8, eG, eZ]
        ),
        te = i.useCallback(
            (e) => {
                var t;
                return (null == e ? void 0 : e.item.type) !== x.vB.SOUND
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
            let t = L.Z.getSoundById(el),
                n = new Audio((0, k.Z)(el));
            null != eb.current && eb.current.pause(), (eb.current = n), (n.currentTime = 0), (n.volume = (0, j.Z)(null != (e = null == t ? void 0 : t.volume) ? e : 1)), n.play();
        }, [eb]),
        tr = (0, l.e7)([A.ZP], () => A.ZP.getMediaSessionId());
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
                          title: Y.NW.string(em ? Y.t.rZEEvb : Y.t.jGDYFx),
                          description: Y.NW.string(em ? Y.t.ZPNG5O : Y.t['grL/ho']),
                          enableSocialProof: !0,
                          analyticsLocationSection: H.jXE.SOUNDBOARD_SOUND_PICKER_UPSELL,
                          upsellViewedTrackingData: {
                              type: W.cd.SOUND_PICKER_SOUND_CLICKED,
                              is_external: !0,
                              location: X(q({}, eI), { object: H.qAy.SOUNDBOARD_SOUND }),
                              location_stack: ev,
                              sku_id: D.ZP.getSkuIdForPremiumType(W.p9.TIER_2)
                          },
                          onClose: () => eT(null),
                          onDisplay: tn
                      })
                    : void 0,
                (0, r.jsx)(y.Z, {
                    categories: eF,
                    collapsedCategories: eW,
                    containerWidth: d,
                    store: E.Wq,
                    onSelectItem: eQ,
                    onSearchExpressions: e3,
                    hasSearchResults: ej.length > 0,
                    defaultSearchPlaceholder: Y.NW.string(Y.t.sKt3xc),
                    renderRow: eX,
                    renderSectionHeader: e1,
                    renderSectionFooter: e2,
                    renderCategoryList: e5,
                    renderHeaderAccessories: e6,
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
