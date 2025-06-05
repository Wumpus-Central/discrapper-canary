n.d(t, {
    O: () => es,
    Z: () => eu
}),
    n(388685),
    n(472816),
    n(794429);
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
    S = n(609218),
    T = n(386965),
    A = n(695346),
    N = n(19780),
    C = n(594174),
    P = n(979651),
    R = n(259580),
    w = n(626135),
    D = n(74538),
    L = n(763296),
    x = n(697426),
    k = n(242291),
    M = n(22382),
    j = n(747071),
    U = n(421673),
    G = n(663215),
    B = n(835648),
    F = n(650743),
    V = n(495332),
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
    et = 32,
    en = 32 + I.Kn,
    er = 16,
    ei = 150,
    ea = 60,
    eo = '3';
function es(e, t, n) {
    return (null == n && e.type === x.bg.GUILD && !t) || (e.type === x.bg.GUILD && e.guild.id !== n && !t);
}
function el(e) {
    let { categoryInfo: t, collapsed: n, toggleCollapsed: i, index: a, isSectionNitroLocked: s, showNitroDivider: l } = e;
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
                className: o()(K.sectionContainer, { [K.sectionContainerNitroLocked]: s }),
                children: (0, r.jsx)(c.P3F, {
                    className: o()(K.sectionHeader, { [K.notFirstSectionHeader]: 0 !== a }),
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
                            (0, r.jsx)(R.Z, {
                                className: K.headerIcon,
                                direction: n ? R.Z.Directions.RIGHT : R.Z.Directions.DOWN
                            })
                        ]
                    })
                })
            })
        ]
    });
}
function ec() {
    return (0, r.jsx)(d.Z, { message: W.intl.string(W.t.bgDdND) });
}
function eu(e) {
    let { guildId: t, channel: a, containerWidth: d, onClose: g, onSelect: I, shouldValidateSelectedSound: R = !1, suppressPlaySound: z = !1, shouldShowUpsell: Q = !0, gridNotice: J, soundButtonOverlay: eu, listPadding: ed, renderHeader: ef, defaultSoundsOnly: e_ = !1, inExpressionPicker: ep, analyticsSource: eh } = e,
        { audioRef: em } = i.useContext(T.Z),
        { analyticsLocations: eg } = (0, p.ZP)(),
        { analyticsLocations: eE } = (0, p.ZP)(_.Z.PREMIUM_UPSELL),
        { location: eb } = (0, f.O)(),
        ey = i.useMemo(() => X(q({}, eb), { section: H.jXE.SOUNDBOARD_SOUND_PICKER }), [eb]),
        [eO, ev] = i.useState(null),
        eI = (0, l.e7)([C.default], () => C.default.getCurrentUser()),
        eS = (0, D.I5)(eI, Y.p9.TIER_2),
        eT = (0, l.e7)([P.Z], () => {
            var e;
            return P.Z.getVoiceState(t, null != (e = null == eI ? void 0 : eI.id) ? e : H.lds);
        }),
        eA = (null == eT ? void 0 : eT.selfDeaf) || (null == eT ? void 0 : eT.mute) || (null == eT ? void 0 : eT.suppress),
        eN = (0, b.Iu)((e) => e.searchQuery),
        eC = null != eN && '' !== eN,
        eP = (0, m.Dt)(),
        { categories: eR, allSounds: ew, soundCounts: eD } = (0, G.ZP)(a, {}, e_),
        [eL, ex] = i.useState([]),
        [ek, eM] = i.useState(!1),
        ej = (0, G.FS)(eR, eL, eN).filter((e) => e.items.length > 0),
        eU = ej.some((e) => !!(0, D._O)(e.categoryInfo) && e.categoryInfo.isNitroLocked),
        eG = !eS && Q && eU,
        eB = A.T4.useSetting(),
        eF = i.useMemo(() => new Set(eB), [eB]),
        eV = null == a,
        eZ = D.ZP.canUseCustomCallSounds(eI),
        eH = i.useCallback(
            (e) => {
                eF.has(e) ? eF.delete(e) : eF.add(e), A.T4.updateSetting(Array.from(eF));
            },
            [eF]
        ),
        eY = i.useCallback(
            (e, t, n) => {
                if (null != I && !R) return I(e, n);
                let r = (0, k.Nq)(eI, e, a, !1);
                if (null != I && R && r) I(e, n);
                else if (!z && r && (0, k.C0)(a)) {
                    var i;
                    (0, k.GN)(e, null != (i = null == a ? void 0 : a.id) ? i : H.lds, t),
                        eC &&
                            w.default.track(H.rMx.SEARCH_RESULT_SELECTED, {
                                search_type: H.aib.SOUNDBOARD,
                                channel_id: null == a ? void 0 : a.id,
                                query: eN,
                                location_stack: t
                            });
                } else {
                    if ((0, k.Nq)(eI, e, a)) return;
                    Q && ev(e);
                }
            },
            [z, eI, a, Q, eC, eN, I, R]
        ),
        eW = i.useCallback(
            (e, t) => {
                switch (e.item.type) {
                    case x.vB.SOUND:
                        return eY(e.item.sound, eg, (null == t ? void 0 : t.shiftKey) !== !0);
                    case x.vB.ADD_SOUND:
                        return g(), (0, Z.Z)(e.item.guild.id);
                }
            },
            [eg, eY, g]
        ),
        eK = i.useCallback(
            (e, n, i, s, l) => {
                let c = ej[i.sectionIndex],
                    u = Q && es(c.categoryInfo, eS, t) && eG,
                    d = i.sectionIndex === ej.length - 1 && i.rowIndex === i.totalRowCount - 1;
                return (0, r.jsx)(
                    'ul',
                    X(q({}, n), {
                        className: o()(K.soundRow, {
                            [K.soundRowNitroLocked]: u,
                            [K.lastSoundRow]: d
                        }),
                        children: e.map((e, t) =>
                            (0, r.jsx)(
                                V.Z,
                                {
                                    descriptor: e,
                                    soundButtonProps: {
                                        channel: a,
                                        interactive: eV ? eZ : !eA,
                                        forceSecondaryActions: !0,
                                        analyticsLocations: eg
                                    },
                                    rowIndex: i.rowIndex,
                                    columnIndex: t,
                                    isUsingKeyboardNavigation: i.isUsingKeyboardNavigation,
                                    suppressPlaySound: z,
                                    getItemProps: s,
                                    onSelectItem: eW,
                                    onItemMouseEnter: l,
                                    buttonOverlay: eu,
                                    isNitroLocked: u,
                                    shouldShowUpsell: Q,
                                    inExpressionPicker: ep
                                },
                                t
                            )
                        )
                    }),
                    'row-'.concat(n['aria-rowindex'])
                );
            },
            [ej, Q, eS, t, z, eW, a, eV, eZ, eA, eg, eu, eG, ep]
        ),
        ez = i.useCallback(
            (e, t) => {
                if (e <= 0 || !Q) return !1;
                let n = ej[e],
                    r = ej[e - 1],
                    i = es(n.categoryInfo, eS, t),
                    a = es(r.categoryInfo, eS, t);
                return i && !a;
            },
            [ej, Q, eS]
        ),
        eq = i.useCallback((e) => (0 === e ? er : ez(e, t) ? en : et), [t, ez]),
        eQ = i.useCallback(
            (e) => {
                let t = e === ej.length - 1;
                return eG && t ? ea : 0;
            },
            [ej, eG]
        ),
        eX = i.useCallback(
            (e, n) => {
                let i = ''.concat(e.key),
                    a = Q && es(e.categoryInfo, eS, t),
                    o = ez(n, t);
                return (0, r.jsx)(
                    el,
                    {
                        categoryInfo: e.categoryInfo,
                        toggleCollapsed: () => eH(i),
                        collapsed: eF.has(i),
                        index: n,
                        isSectionNitroLocked: a && eG,
                        showNitroDivider: o && eG
                    },
                    'header-'.concat(i)
                );
            },
            [eF, eH, t, ez, Q, eS, eG]
        ),
        eJ = i.useCallback(
            (e, t) => {
                let n = t === ej.length - 1;
                return eG && n ? (0, r.jsx)('div', { className: K.sectionFooter }) : null;
            },
            [ej, eG]
        ),
        e$ = i.useCallback((e) => ex((0, U.cK)(e, Array.from(ew.values()).flat(), eI, a, eg)), [a, eI, ew, eg]),
        e0 = i.useCallback(
            (e) => {
                (0, u.jW)(e, async () => {
                    let { default: e } = await n.e('56049').then(n.bind(n, 338991));
                    return (t) => (0, r.jsx)(e, q({ sourceAnalyticsLocations: eg }, t));
                });
            },
            [eg]
        ),
        e1 = i.useCallback(
            () =>
                ep
                    ? (0, r.jsx)(O.Hh, {
                          renderPopout: () => (0, r.jsx)(O.hq, {}),
                          tooltipText: W.intl.string(W.t['19lt29']),
                          position: 'top',
                          clickableClassName: o()(K.settingsClickArea, K.settingsSoundmojiClickArea),
                          children: (0, r.jsx)(c.gj8, {
                              size: 'md',
                              color: 'currentColor',
                              className: K.settingsIcon
                          })
                      })
                    : (0, r.jsx)(c.P3F, {
                          tabIndex: 0,
                          className: K.settingsClickArea,
                          onClick: e0,
                          'aria-label': W.intl.string(W.t.kbFsAA),
                          children: (0, r.jsx)(c.gj8, {
                              size: 'md',
                              color: 'currentColor',
                              className: K.settingsIcon
                          })
                      }),
            [ep, e0]
        ),
        e2 = i.useCallback(
            (e) =>
                (0, r.jsx)(B.Z, {
                    soundboardListRef: e,
                    categories: eR,
                    shouldUpsellLockedCategories: eG,
                    listPadding: ed,
                    guildId: t,
                    inExpressionPicker: ep
                }),
            [eR, eG, ed, t, ep]
        ),
        e3 = () => {
            let e = L.Z.getSoundById(eo);
            null != e && ev(e);
        },
        e4 = i.useCallback(() => {
            let e = (0, D.Px)(Y.p9.TIER_2);
            return W.intl.format(W.t['tw/SSk'], {
                nitroTierName: e,
                onClick: e3
            });
        }, []),
        e5 = i.useCallback(
            () =>
                eG
                    ? (0, r.jsx)(v.p, {
                          showUpsell: ek,
                          text: e4(),
                          button: W.intl.string(W.t.pj0XBA),
                          buttonAnalyticsObject: { section: H.jXE.SOUND_PICKER_FLOATING_UPSELL }
                      })
                    : null,
            [e4, ek, eG]
        ),
        e6 = i.useCallback(
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
        e8 = 'https://cdn.discordapp.com/assets/premium/roadblocks/soundboard_dark.png',
        e7 = i.useCallback(() => {
            var e;
            let t = L.Z.getSoundById(eo),
                n = new Audio((0, M.Z)(eo));
            null != em.current && em.current.pause(), (em.current = n), (n.currentTime = 0), (n.volume = (0, j.Z)(null != (e = null == t ? void 0 : t.volume) ? e : 1)), n.play();
        }, [em]),
        e9 = (0, l.e7)([N.Z], () => N.Z.getMediaSessionId());
    return (
        (0, h.Z)({
            type: s.ImpressionTypes.POPOUT,
            name: s.ImpressionNames.SOUNDBOARD_POPOUT,
            properties: {
                source: eh,
                guild_id: t,
                media_session_id: e9,
                available_custom_sounds_count: eD.unlockedCustomSoundCount,
                unavailable_custom_sounds_count: eD.lockedCustomSoundCount,
                favorite_sounds_count: eD.favoriteSoundCount
            }
        }),
        (0, r.jsxs)(r.Fragment, {
            children: [
                null != eO
                    ? (0, r.jsx)(S.Z, {
                          containerContext: ep ? S.p.TAB_PARENT_CONTAINER : S.p.NONE,
                          image: {
                              url: e8,
                              width: 220,
                              height: 132
                          },
                          title: W.intl.string(ep ? W.t.rZEEvb : W.t.jGDYFx),
                          description: W.intl.string(ep ? W.t.ZPNG5O : W.t['grL/ho']),
                          enableSocialProof: !0,
                          analyticsLocationSection: H.jXE.SOUNDBOARD_SOUND_PICKER_UPSELL,
                          upsellViewedTrackingData: {
                              type: Y.cd.SOUND_PICKER_SOUND_CLICKED,
                              is_external: !0,
                              location: X(q({}, ey), { object: H.qAy.SOUNDBOARD_SOUND }),
                              location_stack: eE,
                              sku_id: D.ZP.getSkuIdForPremiumType(Y.p9.TIER_2)
                          },
                          onClose: () => ev(null),
                          onDisplay: e7
                      })
                    : void 0,
                (0, r.jsx)(y.Z, {
                    categories: ej,
                    collapsedCategories: eF,
                    containerWidth: d,
                    store: E.Wq,
                    onSelectItem: eW,
                    onSearchExpressions: e$,
                    hasSearchResults: eL.length > 0,
                    defaultSearchPlaceholder: W.intl.string(W.t.sKt3xc),
                    renderRow: eK,
                    renderSectionHeader: eX,
                    renderSectionFooter: eJ,
                    renderCategoryList: e2,
                    renderHeaderAccessories: e1,
                    rowHeight: ee,
                    sectionHeaderHeight: eq,
                    sectionFooterHeight: eQ,
                    listPadding: $,
                    itemNodeWidth: ei,
                    gridNavigatorId: eP,
                    renderEmptySearchState: ec,
                    renderInspector: e6,
                    gridNotice: J,
                    renderHeader: ef,
                    renderUpsell: e5,
                    setShowUpsell: eM
                })
            ]
        })
    );
}
