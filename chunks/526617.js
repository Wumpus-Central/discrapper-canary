n.d(t, {
    O: () => ec,
    Z: () => ef,
}),
    n(388685),
    n(856094),
    n(472816),
    n(794429);
var r = n(951288),
    i = n(647438),
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
    C = n(19780),
    N = n(594174),
    R = n(979651),
    P = n(259580),
    w = n(626135),
    D = n(74538),
    x = n(887766),
    L = n(763296),
    j = n(697426),
    k = n(242291),
    M = n(22382),
    U = n(747071),
    G = n(421673),
    B = n(663215),
    Z = n(835648),
    F = n(650743),
    V = n(495332),
    H = n(343747),
    Y = n(981631),
    W = n(957825),
    K = n(474936),
    z = n(388032),
    q = n(412553);
function X(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function Q(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                X(e, t, n[t]);
            });
    }
    return e;
}
function J(e, t) {
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
function $(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : J(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let ee = 16,
    et = [8, 0, 8, 0],
    en = 48,
    er = 32,
    ei = 32 + I.Kn,
    ea = 16,
    eo = 150,
    es = "3",
    el = {
        [j.bg.SEARCH]: _.Z.SOUNDBOARD_SEARCH_RESULTS_SECTION,
        [j.bg.DEFAULTS]: _.Z.SOUNDBOARD_DEFAULT_SOUNDS_SECTION,
        [j.bg.GUILD]: _.Z.SOUNDBOARD_GUILD_SOUNDS_SECTION,
        [j.bg.FAVORITES]: _.Z.SOUNDBOARD_FAVORITES_SECTION,
        [j.bg.RECENTLY_HEARD]: _.Z.SOUNDBOARD_RECENTLY_HEARD_SECTION,
        [j.bg.FREQUENTLY_USED]: _.Z.SOUNDBOARD_FREQUENTLY_USED_SECTION,
    };
function ec(e, t, n) {
    return (null == n && e.type === j.bg.GUILD && !t) || (e.type === j.bg.GUILD && e.guild.id !== n && !t);
}
function eu(e) {
    let {
        categoryInfo: t,
        collapsed: n,
        toggleCollapsed: i,
        index: a,
        isSectionNitroLocked: s,
        showNitroDivider: l,
    } = e;
    function u() {
        switch (t.type) {
            case j.bg.FAVORITES:
                return (0, r.jsx)(c.r7p, {
                    size: "xs",
                    color: "currentColor",
                    className: q.headerIcon,
                });
            case j.bg.RECENTLY_HEARD:
                return (0, r.jsx)(c.T39, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: "currentColor",
                    className: q.headerIcon,
                });
            case j.bg.FREQUENTLY_USED:
                return (0, r.jsx)(c.IeX, { className: q.headerIcon });
            case j.bg.GUILD:
                return (0, r.jsx)(g.Z, {
                    guild: t.guild,
                    height: ee,
                    width: ee,
                });
            case j.bg.DEFAULTS:
                return (0, r.jsx)(c.gw7, {
                    size: "custom",
                    width: 28,
                    height: 28,
                    color: "currentColor",
                    className: q.headerIcon,
                });
            case j.bg.SEARCH:
                return (0, r.jsx)(c._Ve, {
                    size: "md",
                    color: "currentColor",
                    className: q.headerIcon,
                });
        }
    }
    function d() {
        switch (t.type) {
            case j.bg.FAVORITES:
                return z.intl.string(z.t.k8fFjo);
            case j.bg.RECENTLY_HEARD:
                return z.intl.string(z.t["8i/+SE"]);
            case j.bg.FREQUENTLY_USED:
                return z.intl.string(z.t["+cGVV1"]);
            case j.bg.GUILD:
                return t.guild.name;
            case j.bg.DEFAULTS:
                return z.intl.string(z.t.Rtvk9f);
            case j.bg.SEARCH:
                return z.intl.string(z.t.zkoeq6);
        }
    }
    return (0, r.jsxs)(r.Fragment, {
        children: [
            l &&
                (0, r.jsx)(I.ZP, {
                    colorOpacity: 0.35,
                    glowOpacity: 0.35,
                }),
            (0, r.jsx)("div", {
                className: o()(q.sectionContainer, { [q.sectionContainerNitroLocked]: s }),
                children: (0, r.jsx)(c.P3F, {
                    className: o()(q.sectionHeader, { [q.notFirstSectionHeader]: 0 !== a }),
                    onClick: i,
                    "aria-expanded": !n,
                    children: (0, r.jsxs)("div", {
                        className: q.sectionHeaderContent,
                        children: [
                            u(),
                            (0, r.jsx)(c.X6q, {
                                variant: "text-sm/semibold",
                                color: "none",
                                className: q.sectionTitle,
                                children: d(),
                            }),
                            (0, r.jsx)(P.Z, {
                                className: q.headerIcon,
                                direction: n ? P.Z.Directions.RIGHT : P.Z.Directions.DOWN,
                            }),
                        ],
                    }),
                }),
            }),
        ],
    });
}
function ed() {
    return (0, r.jsx)(d.Z, { message: z.intl.string(z.t.bgDdND) });
}
function ef(e) {
    let {
            guildId: t,
            channel: a,
            containerWidth: d,
            onClose: g,
            onSelect: I,
            shouldValidateSelectedSound: P = !1,
            suppressPlaySound: X = !1,
            shouldShowUpsell: J = !0,
            gridNotice: ee,
            soundButtonOverlay: ef,
            listPadding: e_,
            renderHeader: ep,
            defaultSoundsOnly: eh = !1,
            inExpressionPicker: em,
            analyticsSource: eg,
        } = e,
        { audioRef: eE } = i.useContext(S.Z),
        { analyticsLocations: eb } = (0, p.ZP)(),
        { analyticsLocations: ey } = (0, p.ZP)(_.Z.PREMIUM_UPSELL),
        { location: eO } = (0, f.O)(),
        ev = i.useMemo(() => $(Q({}, eO), { section: Y.jXE.SOUNDBOARD_SOUND_PICKER }), [eO]),
        [eI, eT] = i.useState(null),
        eS = (0, l.e7)([N.default], () => N.default.getCurrentUser()),
        eA = (0, D.I5)(eS, K.p9.TIER_2),
        eC = (0, l.e7)([R.Z], () => {
            var e;
            return R.Z.getVoiceState(t, null != (e = null == eS ? void 0 : eS.id) ? e : Y.lds);
        }),
        eN =
            (null == eC ? void 0 : eC.selfDeaf) ||
            (null == eC ? void 0 : eC.mute) ||
            (null == eC ? void 0 : eC.suppress),
        eR = (0, b.Iu)((e) => e.searchQuery),
        eP = null != eR && "" !== eR,
        ew = (0, m.Dt)(),
        eD = x.t.useConfig({ location: "SoundboardSoundGrid" }).upsellPinningMode,
        { categories: ex, allSounds: eL, soundCounts: ej } = (0, B.ZP)(a, {}, eh),
        [ek, eM] = i.useState([]),
        eU = (0, B.FS)(ex, ek, eR),
        eG = (0, b.Iu)((e) => e.isNitroLockedSectionVisible),
        [eB, eZ] = i.useState(!1),
        eF = i.useMemo(() => eU.filter((e) => e.items.length > 0), [eU]),
        eV = i.useMemo(
            () => eF.findLastIndex((e) => !!(0, D._O)(e.categoryInfo) && e.categoryInfo.isNitroLocked),
            [eF],
        ),
        eH = !eA && J && -1 !== eV,
        eY = A.T4.useSetting(),
        eW = i.useMemo(() => new Set(eY), [eY]),
        eK = null == a,
        ez = D.ZP.canUseCustomCallSounds(eS),
        eq = i.useCallback(
            (e) => {
                eW.has(e) ? eW.delete(e) : eW.add(e), A.T4.updateSetting(Array.from(eW));
            },
            [eW],
        ),
        eX = i.useCallback(
            (e, t, n) => {
                if (null != I && !P) return I(e, n);
                let r = (0, k.Nq)(eS, e, a, !1);
                if (null != I && P && r) I(e, n);
                else if (!X && r && (0, k.C0)(a)) {
                    var i;
                    (0, k.GN)(e, null != (i = null == a ? void 0 : a.id) ? i : Y.lds, t),
                        eP &&
                            w.default.track(Y.rMx.SEARCH_RESULT_SELECTED, {
                                search_type: Y.aib.SOUNDBOARD,
                                channel_id: null == a ? void 0 : a.id,
                                query: eR,
                                location_stack: t,
                            });
                } else {
                    if ((0, k.Nq)(eS, e, a)) return;
                    J && eT(e);
                }
            },
            [X, eS, a, J, eP, eR, I, P],
        ),
        eQ = i.useCallback(
            (e, t) => {
                switch (e.item.type) {
                    case j.vB.SOUND:
                        var n;
                        let r = null != (n = el[null == e ? void 0 : e.category]) ? n : null;
                        return eX(e.item.sound, null == r ? eb : [...eb, r], (null == t ? void 0 : t.shiftKey) !== !0);
                    case j.vB.ADD_SOUND:
                        return g(), (0, H.Z)(e.item.guild.id);
                }
            },
            [eb, eX, g],
        ),
        eJ = i.useCallback(
            (e, n, i, s, l) => {
                let c = eF[i.sectionIndex],
                    u = J && ec(c.categoryInfo, eA, t) && eH,
                    d = i.sectionIndex === eF.length - 1 && i.rowIndex === i.totalRowCount - 1;
                return (0, r.jsx)(
                    "ul",
                    $(Q({}, n), {
                        className: o()(q.soundRow, {
                            [q.soundRowNitroLocked]: u,
                            [q.lastSoundRow]: d,
                        }),
                        children: e.map((e, t) =>
                            (0, r.jsx)(
                                V.Z,
                                {
                                    descriptor: e,
                                    soundButtonProps: {
                                        channel: a,
                                        interactive: eK ? ez : !eN,
                                        forceSecondaryActions: !0,
                                        analyticsLocations: eb,
                                    },
                                    rowIndex: i.rowIndex,
                                    columnIndex: t,
                                    isUsingKeyboardNavigation: i.isUsingKeyboardNavigation,
                                    suppressPlaySound: X,
                                    getItemProps: s,
                                    onSelectItem: eQ,
                                    onItemMouseEnter: l,
                                    buttonOverlay: ef,
                                    isNitroLocked: u,
                                    shouldShowUpsell: J,
                                    inExpressionPicker: em,
                                },
                                t,
                            ),
                        ),
                    }),
                    "row-".concat(n["aria-rowindex"]),
                );
            },
            [eF, J, eA, t, X, eQ, a, eK, ez, eN, eb, ef, eH, em],
        ),
        e$ = i.useCallback(
            (e, t) => {
                if (e <= 0 || !J) return !1;
                let n = eF[e],
                    r = eF[e - 1],
                    i = ec(n.categoryInfo, eA, t),
                    a = ec(r.categoryInfo, eA, t);
                return i && !a;
            },
            [eF, J, eA],
        ),
        e0 = i.useCallback(() => {
            let e = L.Z.getSoundById(es);
            null != e && eT(e);
        }, []),
        e1 = i.useCallback(() => {
            let e = (0, D.Px)(K.p9.TIER_2);
            return z.intl.format(z.t["tw/SSk"], {
                nitroTierName: e,
                onClick: e0,
            });
        }, [e0]),
        e2 = i.useCallback((e) => (0 === e ? ea : e$(e, t) ? ei : er), [t, e$]),
        e3 = i.useCallback(
            (e) => {
                let t = e === eF.length - 1;
                return eH && t ? 60 : eH && e === eV ? 20 : 0;
            },
            [eF.length, eH, eV],
        ),
        e4 = i.useCallback(
            (e, n) => {
                let i = "".concat(e.key),
                    a = J && ec(e.categoryInfo, eA, t),
                    o = e$(n, t),
                    s = eW.has(i),
                    l = () => {
                        w.default.track(Y.rMx.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
                            location: { page: Y.ZY5.SOUNDBOARD_POPOUT },
                            tab: W.X1.SOUNDBOARD,
                            guild_id: null != t ? t : null,
                            collapsed: !s,
                            sticker_pack_id: null,
                            num_expressions: e.items.length,
                        }),
                            eq(i);
                    };
                return (0, r.jsx)(
                    eu,
                    {
                        categoryInfo: e.categoryInfo,
                        toggleCollapsed: l,
                        collapsed: s,
                        index: n,
                        isSectionNitroLocked: a && eH,
                        showNitroDivider: o && eH,
                    },
                    "header-".concat(i),
                );
            },
            [eW, eq, t, e$, J, eA, eH],
        ),
        e8 = i.useCallback(
            (e, t) => {
                let n = t === eF.length - 1,
                    i = t === eV;
                return eH && n
                    ? (0, r.jsx)("div", { className: o()(q.lastSectionFooter, { [q.nitroLocked]: i }) })
                    : eH && t === eV
                      ? (0, r.jsx)("div", { className: o()(q.smallPaddingFooter, q.nitroLocked) })
                      : null;
            },
            [eV, eH, eF.length],
        ),
        e6 = i.useCallback((e) => eM((0, G.cK)(e, Array.from(eL.values()).flat(), eS, a, eb)), [a, eS, eL, eb]),
        e5 = i.useCallback(
            (e) => {
                (0, u.jW)(e, async () => {
                    let { default: e } = await n.e("56049").then(n.bind(n, 338991));
                    return (t) => (0, r.jsx)(e, Q({ sourceAnalyticsLocations: eb }, t));
                });
            },
            [eb],
        ),
        e7 = i.useCallback(
            () =>
                em
                    ? (0, r.jsx)(O.Hh, {
                          renderPopout: () => (0, r.jsx)(O.hq, {}),
                          tooltipText: z.intl.string(z.t["19lt29"]),
                          position: "top",
                          clickableClassName: o()(q.settingsClickArea, q.settingsSoundmojiClickArea),
                          children: (0, r.jsx)(c.gj8, {
                              size: "md",
                              color: "currentColor",
                              className: q.settingsIcon,
                          }),
                      })
                    : (0, r.jsx)(c.P3F, {
                          tabIndex: 0,
                          className: q.settingsClickArea,
                          onClick: e5,
                          "aria-label": z.intl.string(z.t.kbFsAA),
                          children: (0, r.jsx)(c.gj8, {
                              size: "md",
                              color: "currentColor",
                              className: q.settingsIcon,
                          }),
                      }),
            [em, e5],
        ),
        e9 = i.useCallback(
            (e) =>
                (0, r.jsx)(Z.Z, {
                    soundboardListRef: e,
                    categories: ex,
                    shouldUpsellLockedCategories: eH,
                    listPadding: e_,
                    guildId: t,
                    inExpressionPicker: em,
                }),
            [ex, eH, e_, t, em],
        ),
        te = i.useCallback(() => {
            if (eH) {
                let e;
                switch (eD) {
                    case x.o.ALWAYS_PINNED:
                        e = !0;
                        break;
                    case x.o.PINNED_ON_SCROLL_DOWN:
                        e = eB || eG;
                        break;
                    default:
                        e = eG;
                }
                return (0, r.jsx)(v.p, {
                    showUpsell: e,
                    text: e1(),
                    button: z.intl.string(z.t.pj0XBA),
                    buttonAnalyticsObject: { section: Y.jXE.SOUND_PICKER_FLOATING_UPSELL },
                });
            }
            return null;
        }, [e1, eH, eD, eG, eB]),
        tt = i.useCallback(
            (e) => {
                var t;
                return (null == e ? void 0 : e.item.type) !== j.vB.SOUND
                    ? null
                    : (0, r.jsx)(F.Z, {
                          closePicker: g,
                          soundboardSound: null != (t = null == e ? void 0 : e.item.sound) ? t : null,
                      });
            },
            [g],
        ),
        tn = i.useCallback((e) => {
            eZ(e > 50);
        }, []),
        tr = "https://cdn.discordapp.com/assets/premium/roadblocks/soundboard_dark.png",
        ti = i.useCallback(() => {
            var e;
            let t = L.Z.getSoundById(es),
                n = new Audio((0, M.Z)(es));
            null != eE.current && eE.current.pause(),
                (eE.current = n),
                (n.currentTime = 0),
                (n.volume = (0, U.Z)(null != (e = null == t ? void 0 : t.volume) ? e : 1)),
                n.play();
        }, [eE]),
        ta = (0, l.e7)([C.Z], () => C.Z.getMediaSessionId());
    return (
        (0, h.Z)({
            type: s.ImpressionTypes.POPOUT,
            name: s.ImpressionNames.SOUNDBOARD_POPOUT,
            properties: {
                source: eg,
                guild_id: t,
                media_session_id: ta,
                available_custom_sounds_count: ej.unlockedCustomSoundCount,
                unavailable_custom_sounds_count: ej.lockedCustomSoundCount,
                favorite_sounds_count: ej.favoriteSoundCount,
            },
        }),
        (0, r.jsxs)(r.Fragment, {
            children: [
                null != eI
                    ? (0, r.jsx)(T.Z, {
                          containerContext: em ? T.p.TAB_PARENT_CONTAINER : T.p.NONE,
                          image: {
                              url: tr,
                              width: 220,
                              height: 132,
                          },
                          title: z.intl.string(em ? z.t.rZEEvb : z.t.jGDYFx),
                          description: z.intl.string(em ? z.t.ZPNG5O : z.t["grL/ho"]),
                          enableSocialProof: !0,
                          analyticsLocationSection: Y.jXE.SOUNDBOARD_SOUND_PICKER_UPSELL,
                          upsellViewedTrackingData: {
                              type: K.cd.SOUND_PICKER_SOUND_CLICKED,
                              is_external: !0,
                              location: $(Q({}, ev), { object: Y.qAy.SOUNDBOARD_SOUND }),
                              location_stack: ey,
                              sku_id: D.ZP.getSkuIdForPremiumType(K.p9.TIER_2),
                          },
                          onClose: () => eT(null),
                          onLearnMore: g,
                          onDisplay: ti,
                      })
                    : void 0,
                (0, r.jsx)(y.Z, {
                    categories: eF,
                    collapsedCategories: eW,
                    containerWidth: d,
                    store: E.Wq,
                    onSelectItem: eQ,
                    onSearchExpressions: e6,
                    hasSearchResults: ek.length > 0,
                    defaultSearchPlaceholder: z.intl.string(z.t.sKt3xc),
                    renderRow: eJ,
                    renderSectionHeader: e4,
                    renderSectionFooter: e8,
                    renderCategoryList: e9,
                    renderHeaderAccessories: e7,
                    rowHeight: en,
                    sectionHeaderHeight: e2,
                    sectionFooterHeight: e3,
                    listPadding: et,
                    itemNodeWidth: eo,
                    gridNavigatorId: ew,
                    renderEmptySearchState: ed,
                    renderInspector: tt,
                    gridNotice: ee,
                    renderHeader: ep,
                    renderUpsell: te,
                    onScroll: tn,
                }),
            ],
        })
    );
}
