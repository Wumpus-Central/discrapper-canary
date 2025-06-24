n.d(t, {
    O: () => es,
    Z: () => eu
}),
    n(388685),
    n(856094),
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
    k = n(697426),
    M = n(242291),
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
    eo = '3';
function es(e, t, n) {
    return (null == n && e.type === k.bg.GUILD && !t) || (e.type === k.bg.GUILD && e.guild.id !== n && !t);
}
function el(e) {
    let { categoryInfo: t, collapsed: n, toggleCollapsed: i, index: a, isSectionNitroLocked: s, showNitroDivider: l } = e;
    function u() {
        switch (t.type) {
            case k.bg.FAVORITES:
                return (0, r.jsx)(c.r7p, {
                    size: 'xs',
                    color: 'currentColor',
                    className: z.headerIcon
                });
            case k.bg.RECENTLY_HEARD:
                return (0, r.jsx)(c.T39, {
                    size: 'custom',
                    width: 20,
                    height: 20,
                    color: 'currentColor',
                    className: z.headerIcon
                });
            case k.bg.FREQUENTLY_USED:
                return (0, r.jsx)(c.IeX, { className: z.headerIcon });
            case k.bg.GUILD:
                return (0, r.jsx)(g.Z, {
                    guild: t.guild,
                    height: $,
                    width: $
                });
            case k.bg.DEFAULTS:
                return (0, r.jsx)(c.gw7, {
                    size: 'custom',
                    width: 28,
                    height: 28,
                    color: 'currentColor',
                    className: z.headerIcon
                });
            case k.bg.SEARCH:
                return (0, r.jsx)(c._Ve, {
                    size: 'md',
                    color: 'currentColor',
                    className: z.headerIcon
                });
        }
    }
    function d() {
        switch (t.type) {
            case k.bg.FAVORITES:
                return K.intl.string(K.t.k8fFjo);
            case k.bg.RECENTLY_HEARD:
                return K.intl.string(K.t['8i/+SE']);
            case k.bg.FREQUENTLY_USED:
                return K.intl.string(K.t['+cGVV1']);
            case k.bg.GUILD:
                return t.guild.name;
            case k.bg.DEFAULTS:
                return K.intl.string(K.t.Rtvk9f);
            case k.bg.SEARCH:
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
function ec() {
    return (0, r.jsx)(d.Z, { message: K.intl.string(K.t.bgDdND) });
}
function eu(e) {
    let { guildId: t, channel: a, containerWidth: d, onClose: g, onSelect: I, shouldValidateSelectedSound: P = !1, suppressPlaySound: q = !1, shouldShowUpsell: Q = !0, gridNotice: $, soundButtonOverlay: eu, listPadding: ed, renderHeader: ef, defaultSoundsOnly: e_ = !1, inExpressionPicker: ep, analyticsSource: eh } = e,
        { audioRef: em } = i.useContext(S.Z),
        { analyticsLocations: eg } = (0, p.ZP)(),
        { analyticsLocations: eE } = (0, p.ZP)(_.Z.PREMIUM_UPSELL),
        { location: eb } = (0, f.O)(),
        ey = i.useMemo(() => J(X({}, eb), { section: Y.jXE.SOUNDBOARD_SOUND_PICKER }), [eb]),
        [eO, ev] = i.useState(null),
        eI = (0, l.e7)([C.default], () => C.default.getCurrentUser()),
        eT = (0, D.I5)(eI, W.p9.TIER_2),
        eS = (0, l.e7)([R.Z], () => {
            var e;
            return R.Z.getVoiceState(t, null != (e = null == eI ? void 0 : eI.id) ? e : Y.lds);
        }),
        eA = (null == eS ? void 0 : eS.selfDeaf) || (null == eS ? void 0 : eS.mute) || (null == eS ? void 0 : eS.suppress),
        eN = (0, b.Iu)((e) => e.searchQuery),
        eC = null != eN && '' !== eN,
        eR = (0, m.Dt)(),
        eP = L.C.useExperiment({ location: 'SoundboardSoundGrid' }),
        { categories: ew, allSounds: eD, soundCounts: eL } = (0, B.ZP)(a, {}, e_),
        [ex, ek] = i.useState([]),
        [eM, ej] = i.useState(!1),
        eU = (0, B.FS)(ew, ex, eN),
        eG = (0, b.Iu)((e) => e.isNitroLockedSectionVisible),
        eB = eU.filter((e) => e.items.length > 0),
        eV = eB.findLastIndex((e) => !!(0, D._O)(e.categoryInfo) && e.categoryInfo.isNitroLocked),
        eF = !eT && Q && -1 !== eV,
        eZ = A.T4.useSetting(),
        eH = i.useMemo(() => new Set(eZ), [eZ]),
        eY = null == a,
        eW = D.ZP.canUseCustomCallSounds(eI),
        eK = i.useCallback(
            (e) => {
                eH.has(e) ? eH.delete(e) : eH.add(e), A.T4.updateSetting(Array.from(eH));
            },
            [eH]
        ),
        ez = i.useCallback(
            (e, t, n) => {
                if (null != I && !P) return I(e, n);
                let r = (0, M.Nq)(eI, e, a, !1);
                if (null != I && P && r) I(e, n);
                else if (!q && r && (0, M.C0)(a)) {
                    var i;
                    (0, M.GN)(e, null != (i = null == a ? void 0 : a.id) ? i : Y.lds, t),
                        eC &&
                            w.default.track(Y.rMx.SEARCH_RESULT_SELECTED, {
                                search_type: Y.aib.SOUNDBOARD,
                                channel_id: null == a ? void 0 : a.id,
                                query: eN,
                                location_stack: t
                            });
                } else {
                    if ((0, M.Nq)(eI, e, a)) return;
                    Q && ev(e);
                }
            },
            [q, eI, a, Q, eC, eN, I, P]
        ),
        eq = i.useCallback(
            (e, t) => {
                switch (e.item.type) {
                    case k.vB.SOUND:
                        return ez(e.item.sound, eg, (null == t ? void 0 : t.shiftKey) !== !0);
                    case k.vB.ADD_SOUND:
                        return g(), (0, H.Z)(e.item.guild.id);
                }
            },
            [eg, ez, g]
        ),
        eX = i.useCallback(
            (e, n, i, s, l) => {
                let c = eB[i.sectionIndex],
                    u = Q && es(c.categoryInfo, eT, t) && eF,
                    d = i.sectionIndex === eB.length - 1 && i.rowIndex === i.totalRowCount - 1;
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
                                        interactive: eY ? eW : !eA,
                                        forceSecondaryActions: !0,
                                        analyticsLocations: eg
                                    },
                                    rowIndex: i.rowIndex,
                                    columnIndex: t,
                                    isUsingKeyboardNavigation: i.isUsingKeyboardNavigation,
                                    suppressPlaySound: q,
                                    getItemProps: s,
                                    onSelectItem: eq,
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
            [eB, Q, eT, t, q, eq, a, eY, eW, eA, eg, eu, eF, ep]
        ),
        eQ = i.useCallback(
            (e, t) => {
                if (e <= 0 || !Q) return !1;
                let n = eB[e],
                    r = eB[e - 1],
                    i = es(n.categoryInfo, eT, t),
                    a = es(r.categoryInfo, eT, t);
                return i && !a;
            },
            [eB, Q, eT]
        ),
        eJ = i.useCallback(() => {
            let e = x.Z.getSoundById(eo);
            null != e && ev(e);
        }, []),
        e$ = i.useCallback(() => {
            let e = (0, D.Px)(W.p9.TIER_2);
            return K.intl.format(K.t['tw/SSk'], {
                nitroTierName: e,
                onClick: eJ
            });
        }, [eJ]),
        e0 = i.useCallback((e) => (0 === e ? ei : eQ(e, t) ? er : en), [t, eQ]),
        e1 = i.useCallback(
            (e) => {
                let t = e === eB.length - 1;
                return eF && t ? 60 : eF && e === eV ? 20 : 0;
            },
            [eB.length, eF, eV]
        ),
        e2 = i.useCallback(
            (e, n) => {
                let i = ''.concat(e.key),
                    a = Q && es(e.categoryInfo, eT, t),
                    o = eQ(n, t);
                return (0, r.jsx)(
                    el,
                    {
                        categoryInfo: e.categoryInfo,
                        toggleCollapsed: () => eK(i),
                        collapsed: eH.has(i),
                        index: n,
                        isSectionNitroLocked: a && eF,
                        showNitroDivider: o && eF
                    },
                    'header-'.concat(i)
                );
            },
            [eH, eK, t, eQ, Q, eT, eF]
        ),
        e3 = i.useCallback(
            (e, t) => {
                let n = t === eB.length - 1,
                    i = t === eV;
                return eF && n ? (0, r.jsx)('div', { className: o()(z.lastSectionFooter, { [z.nitroLocked]: i }) }) : eF && t === eV ? (0, r.jsx)('div', { className: o()(z.smallPaddingFooter, z.nitroLocked) }) : null;
            },
            [eV, eF, eB.length]
        ),
        e4 = i.useCallback((e) => ek((0, G.cK)(e, Array.from(eD.values()).flat(), eI, a, eg)), [a, eI, eD, eg]),
        e5 = i.useCallback(
            (e) => {
                (0, u.jW)(e, async () => {
                    let { default: e } = await n.e('56049').then(n.bind(n, 338991));
                    return (t) => (0, r.jsx)(e, X({ sourceAnalyticsLocations: eg }, t));
                });
            },
            [eg]
        ),
        e6 = i.useCallback(
            () =>
                ep
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
                          onClick: e5,
                          'aria-label': K.intl.string(K.t.kbFsAA),
                          children: (0, r.jsx)(c.gj8, {
                              size: 'md',
                              color: 'currentColor',
                              className: z.settingsIcon
                          })
                      }),
            [ep, e5]
        ),
        e8 = i.useCallback(
            (e) =>
                (0, r.jsx)(V.Z, {
                    soundboardListRef: e,
                    categories: ew,
                    shouldUpsellLockedCategories: eF,
                    listPadding: ed,
                    guildId: t,
                    inExpressionPicker: ep
                }),
            [ew, eF, ed, t, ep]
        ),
        e7 = i.useCallback(
            () =>
                eF
                    ? (0, r.jsx)(v.p, {
                          showUpsell: eP.alwaysStickyUpsell || (eP.moveDefaultToBottom ? eG : eM),
                          text: e$(),
                          button: K.intl.string(K.t.pj0XBA),
                          buttonAnalyticsObject: { section: Y.jXE.SOUND_PICKER_FLOATING_UPSELL }
                      })
                    : null,
            [e$, eF, eP.alwaysStickyUpsell, eM, eG, eP.moveDefaultToBottom]
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
            let t = x.Z.getSoundById(eo),
                n = new Audio((0, j.Z)(eo));
            null != em.current && em.current.pause(), (em.current = n), (n.currentTime = 0), (n.volume = (0, U.Z)(null != (e = null == t ? void 0 : t.volume) ? e : 1)), n.play();
        }, [em]),
        tn = (0, l.e7)([N.Z], () => N.Z.getMediaSessionId());
    return (
        (0, h.Z)({
            type: s.ImpressionTypes.POPOUT,
            name: s.ImpressionNames.SOUNDBOARD_POPOUT,
            properties: {
                source: eh,
                guild_id: t,
                media_session_id: tn,
                available_custom_sounds_count: eL.unlockedCustomSoundCount,
                unavailable_custom_sounds_count: eL.lockedCustomSoundCount,
                favorite_sounds_count: eL.favoriteSoundCount
            }
        }),
        (0, r.jsxs)(r.Fragment, {
            children: [
                null != eO
                    ? (0, r.jsx)(T.Z, {
                          containerContext: ep ? T.p.TAB_PARENT_CONTAINER : T.p.NONE,
                          image: {
                              url: te,
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
                              location: J(X({}, ey), { object: Y.qAy.SOUNDBOARD_SOUND }),
                              location_stack: eE,
                              sku_id: D.ZP.getSkuIdForPremiumType(W.p9.TIER_2)
                          },
                          onClose: () => ev(null),
                          onDisplay: tt
                      })
                    : void 0,
                (0, r.jsx)(y.Z, {
                    categories: eB,
                    collapsedCategories: eH,
                    containerWidth: d,
                    store: E.Wq,
                    onSelectItem: eq,
                    onSearchExpressions: e4,
                    hasSearchResults: ex.length > 0,
                    defaultSearchPlaceholder: K.intl.string(K.t.sKt3xc),
                    renderRow: eX,
                    renderSectionHeader: e2,
                    renderSectionFooter: e3,
                    renderCategoryList: e8,
                    renderHeaderAccessories: e6,
                    rowHeight: et,
                    sectionHeaderHeight: e0,
                    sectionFooterHeight: e1,
                    listPadding: ee,
                    itemNodeWidth: ea,
                    gridNavigatorId: eR,
                    renderEmptySearchState: ec,
                    renderInspector: e9,
                    gridNotice: $,
                    renderHeader: ef,
                    renderUpsell: e7,
                    setShowUpsell: ej
                })
            ]
        })
    );
}
