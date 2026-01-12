n.d(t, {
    O: () => ec,
    Z: () => ef,
}),
    n(388685),
    n(856094);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(990547),
    l = n(442837),
    c = n(481060),
    u = n(239091),
    d = n(788911),
    f = n(2052),
    p = n(100527),
    _ = n(906732),
    m = n(213609),
    h = n(313201),
    g = n(880949),
    E = n(806966),
    b = n(28546),
    y = n(468954),
    O = n(775412),
    v = n(409700),
    S = n(53691),
    I = n(75145),
    T = n(609218),
    C = n(386965),
    A = n(695346),
    N = n(19780),
    P = n(594174),
    R = n(979651),
    w = n(259580),
    D = n(626135),
    x = n(74538),
    L = n(763296),
    j = n(697426),
    M = n(9551),
    k = n(242291),
    U = n(22382),
    G = n(747071),
    Z = n(421673),
    F = n(663215),
    B = n(835648),
    V = n(650743),
    H = n(495332),
    Y = n(343747),
    W = n(981631),
    K = n(957825),
    z = n(474936),
    q = n(388032),
    Q = n(641295);
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
function J(e) {
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
function $(e, t) {
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
function ee(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : $(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let et = 16,
    en = 48,
    er = 32,
    ei = 8,
    ea = 32 + I.Kn - ei,
    eo = 150,
    es = "3",
    el = {
        [j.bg.SEARCH]: p.Z.SOUNDBOARD_SEARCH_RESULTS_SECTION,
        [j.bg.DEFAULTS]: p.Z.SOUNDBOARD_DEFAULT_SOUNDS_SECTION,
        [j.bg.GUILD]: p.Z.SOUNDBOARD_GUILD_SOUNDS_SECTION,
        [j.bg.FAVORITES]: p.Z.SOUNDBOARD_FAVORITES_SECTION,
        [j.bg.RECENTLY_HEARD]: p.Z.SOUNDBOARD_RECENTLY_HEARD_SECTION,
        [j.bg.FREQUENTLY_USED]: p.Z.SOUNDBOARD_FREQUENTLY_USED_SECTION,
    };
function ec(e, t, n) {
    return (null == n && e.type === j.bg.GUILD && !t) || (e.type === j.bg.GUILD && e.guild.id !== n && !t);
}
function eu(e) {
    let {
        categoryInfo: t,
        collapsed: n,
        toggleCollapsed: i,
        isSectionNitroLocked: a,
        showNitroDivider: s,
        enablePickerUpsellPremiumBrandRefresh: l,
    } = e;
    function u() {
        switch (t.type) {
            case j.bg.FAVORITES:
                return (0, r.jsx)(c.r7p, {
                    size: "xs",
                    color: "currentColor",
                    className: Q.headerIcon,
                });
            case j.bg.RECENTLY_HEARD:
                return (0, r.jsx)(c.T39, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: "currentColor",
                    className: Q.headerIcon,
                });
            case j.bg.FREQUENTLY_USED:
                return (0, r.jsx)(c.IeX, { className: Q.headerIcon });
            case j.bg.GUILD:
                return (0, r.jsx)(g.Z, {
                    guild: t.guild,
                    height: et,
                    width: et,
                });
            case j.bg.DEFAULTS:
                return (0, r.jsx)(c.gw7, {
                    size: "custom",
                    width: 28,
                    height: 28,
                    color: "currentColor",
                    className: Q.headerIcon,
                });
            case j.bg.SEARCH:
                return (0, r.jsx)(c._Ve, {
                    size: "md",
                    color: "currentColor",
                    className: Q.headerIcon,
                });
        }
    }
    function d() {
        switch (t.type) {
            case j.bg.FAVORITES:
                return q.intl.string(q.t.k8fFjp);
            case j.bg.RECENTLY_HEARD:
                return q.intl.string(q.t["8i/+SA"]);
            case j.bg.FREQUENTLY_USED:
                return q.intl.string(q.t["+cGVV6"]);
            case j.bg.GUILD:
                return t.guild.name;
            case j.bg.DEFAULTS:
                return q.intl.string(q.t.Rtvk9X);
            case j.bg.SEARCH:
                return q.intl.string(q.t["zkoeq/"]);
        }
    }
    return (0, r.jsxs)(r.Fragment, {
        children: [
            s &&
                (0, r.jsx)(I.ZP, {
                    colorOpacity: 0.35,
                    glowOpacity: 0.35,
                    className: Q.premiumSectionDivider,
                    enableBrandRefresh: l,
                }),
            (0, r.jsx)("div", {
                className: o()(Q.sectionContainer, {
                    [Q.sectionContainerNitroLocked]: a,
                    [Q.sectionContainerNitroLockedBackground]: a,
                    [Q.brandRefresh]: l,
                }),
                children: (0, r.jsx)(c.P3F, {
                    className: Q.sectionHeader,
                    onClick: i,
                    "aria-expanded": !n,
                    children: (0, r.jsxs)("div", {
                        className: Q.sectionHeaderContent,
                        children: [
                            u(),
                            (0, r.jsx)(c.Heading, {
                                variant: "text-sm/semibold",
                                color: "none",
                                className: Q.sectionTitle,
                                children: d(),
                            }),
                            (0, r.jsx)(w.Z, {
                                className: Q.headerIcon,
                                direction: n ? w.Z.Directions.RIGHT : w.Z.Directions.DOWN,
                            }),
                        ],
                    }),
                }),
            }),
        ],
    });
}
function ed() {
    return (0, r.jsx)(d.Z, { message: q.intl.string(q.t.bgDdNK) });
}
function ef(e) {
    let {
            guildId: t,
            channel: a,
            containerWidth: d,
            onClose: g,
            onSelect: I,
            shouldValidateSelectedSound: w = !1,
            suppressPlaySound: X = !1,
            shouldShowUpsell: $ = !0,
            gridNotice: et,
            soundButtonOverlay: ei,
            listPadding: ef,
            renderHeader: ep,
            defaultSoundsOnly: e_ = !1,
            inExpressionPicker: em,
            analyticsSource: eh,
            enablePickerUpsellPremiumBrandRefresh: eg,
        } = e,
        { audioRef: eE } = i.useContext(C.Z),
        { analyticsLocations: eb } = (0, _.ZP)(),
        { analyticsLocations: ey } = (0, _.ZP)(p.Z.PREMIUM_UPSELL),
        { location: eO } = (0, f.O)(),
        ev = i.useMemo(() => ee(J({}, eO), { section: W.jXE.SOUNDBOARD_SOUND_PICKER }), [eO]),
        [eS, eI] = i.useState(null),
        eT = (0, l.e7)([P.default], () => P.default.getCurrentUser()),
        eC = (0, x.I5)(eT, z.PremiumTypes.TIER_2),
        eA = (0, l.e7)([R.Z], () => {
            var e;
            return R.Z.getVoiceState(t, null != (e = null == eT ? void 0 : eT.id) ? e : W.lds);
        }),
        eN =
            (null == eA ? void 0 : eA.selfDeaf) ||
            (null == eA ? void 0 : eA.mute) ||
            (null == eA ? void 0 : eA.suppress),
        eP = (0, b.Iu)((e) => e.searchQuery),
        eR = null != eP && "" !== eP,
        ew = (0, h.Dt)(),
        eD = M.V.useConfig({ location: "SoundboardSoundGrid" }),
        {
            categories: ex,
            availableSounds: eL,
            soundCounts: ej,
        } = (0, F.ZP)(a, { moveDefaultsToBottom: eD.enabled }, e_),
        [eM, ek] = i.useState([]),
        eU = (0, F.FS)(ex, eM, eP),
        eG = (0, b.Iu)((e) => e.isNitroLockedSectionVisible),
        eZ = i.useMemo(() => eU.filter((e) => e.items.length > 0), [eU]),
        eF = i.useMemo(
            () => eZ.findLastIndex((e) => !!(0, x._O)(e.categoryInfo) && e.categoryInfo.isNitroLocked),
            [eZ],
        ),
        eB = !eC && $ && -1 !== eF,
        eV = !eC && eD.enabled && !eD.bottomBar && ex.length > 6,
        eH = A.T4.useSetting(),
        eY = i.useMemo(() => new Set(eH), [eH]),
        eW = null == a,
        eK = x.ZP.canUseCustomCallSounds(eT),
        ez = i.useCallback(
            (e) => {
                eY.has(e) ? eY.delete(e) : eY.add(e), A.T4.updateSetting(Array.from(eY));
            },
            [eY],
        ),
        eq = i.useCallback(
            (e, t, n, r) => {
                if (null != I && !w) return I(e, n);
                let i = (0, k.Nq)(eT, e, a, !1);
                if (null != I && w && i) I(e, n);
                else if (!X && i && (0, k.C0)(a)) {
                    var o;
                    (0, k.GN)(e, null != (o = null == a ? void 0 : a.id) ? o : W.lds, t, r),
                        eR &&
                            D.default.track(W.rMx.SEARCH_RESULT_SELECTED, {
                                search_type: W.aib.SOUNDBOARD,
                                channel_id: null == a ? void 0 : a.id,
                                query: eP,
                                location_stack: t,
                            });
                } else {
                    if ((0, k.Nq)(eT, e, a)) return;
                    $ && eI(e);
                }
            },
            [X, eT, a, $, eR, eP, I, w],
        ),
        eQ = i.useCallback(
            (e, t) => {
                switch (e.item.type) {
                    case j.vB.SOUND:
                        var n;
                        let r = null != (n = el[null == e ? void 0 : e.category]) ? n : null,
                            i = null == e ? void 0 : e.item.index;
                        return eq(
                            e.item.sound,
                            null == r ? eb : [...eb, r],
                            (null == t ? void 0 : t.shiftKey) !== !0,
                            i,
                        );
                    case j.vB.ADD_SOUND:
                        return g(), (0, Y.Z)(e.item.guild.id);
                }
            },
            [eb, eq, g],
        ),
        eX = i.useCallback(
            (e, n, i, s, l) => {
                let c = eZ[i.sectionIndex],
                    u = $ && ec(c.categoryInfo, eC, t) && eB;
                return (0, r.jsx)(
                    "ul",
                    ee(J({}, n), {
                        className: o()(Q.soundRow, {
                            [Q.soundRowNitroLocked]: u,
                            [Q.brandRefresh]: eg,
                        }),
                        children: e.map((e, t) =>
                            (0, r.jsx)(
                                H.Z,
                                {
                                    descriptor: e,
                                    soundButtonProps: {
                                        channel: a,
                                        interactive: eW ? eK : !eN,
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
                                    buttonOverlay: ei,
                                    isNitroLocked: u,
                                    shouldShowUpsell: $,
                                    inExpressionPicker: em,
                                },
                                t,
                            ),
                        ),
                    }),
                    "row-".concat(n["aria-rowindex"]),
                );
            },
            [eZ, $, eC, t, X, eQ, a, eW, eK, eN, eb, ei, eB, em, eg],
        ),
        eJ = i.useCallback(
            (e, t) => {
                if (e <= 0 || !$) return !1;
                let n = eZ[e],
                    r = eZ[e - 1],
                    i = ec(n.categoryInfo, eC, t),
                    a = ec(r.categoryInfo, eC, t);
                return i && !a;
            },
            [eZ, $, eC],
        ),
        e$ = i.useCallback(() => {
            let e = L.Z.getSoundById(es);
            null != e && eI(e);
        }, []),
        e0 = i.useCallback(() => {
            let e = (0, x.Px)(z.PremiumTypes.TIER_2);
            return q.intl.format(q.t["tw/SSq"], {
                nitroTierName: e,
                onClick: e$,
            });
        }, [e$]),
        e1 = i.useCallback((e) => (eJ(e, t) ? ea : er), [t, eJ]),
        e3 = i.useCallback(
            (e) => {
                let t = e === eZ.length - 1;
                return eB && t ? 70 : eB && e === eF ? 20 : 0;
            },
            [eZ.length, eB, eF],
        ),
        e2 = i.useCallback((e, t) => (0, r.jsx)("div", { children: t }, e), []),
        e4 = i.useCallback(
            (e, n) => {
                let i = "".concat(e.key),
                    a = $ && ec(e.categoryInfo, eC, t),
                    o = eJ(n, t),
                    s = eY.has(i),
                    l = () => {
                        D.default.track(W.rMx.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
                            location: { page: W.ZY5.SOUNDBOARD_POPOUT },
                            tab: K.X1.SOUNDBOARD,
                            guild_id: null != t ? t : null,
                            collapsed: !s,
                            sticker_pack_id: null,
                            num_expressions: e.items.length,
                        }),
                            ez(i);
                    };
                return (0, r.jsx)(
                    eu,
                    {
                        categoryInfo: e.categoryInfo,
                        toggleCollapsed: l,
                        collapsed: s,
                        isSectionNitroLocked: a && eB,
                        showNitroDivider: o && eB,
                        enablePickerUpsellPremiumBrandRefresh: eg,
                    },
                    "header-".concat(i),
                );
            },
            [eY, ez, t, eJ, $, eC, eB, eg],
        ),
        e5 = i.useCallback(
            (e, t) => {
                let n = t === eZ.length - 1,
                    i = t === eF;
                return eB && n
                    ? (0, r.jsx)("div", {
                          className: o()(Q.lastSectionFooter, {
                              [Q.nitroLocked]: i,
                              [Q.brandRefresh]: eg,
                          }),
                      })
                    : eB && t === eF
                      ? (0, r.jsx)("div", {
                            className: o()(Q.smallPaddingFooter, {
                                [Q.nitroLocked]: i,
                                [Q.brandRefresh]: eg,
                            }),
                        })
                      : null;
            },
            [eF, eB, eZ.length, eg],
        ),
        e8 = i.useCallback((e) => ek((0, Z.cK)(e, eL, eT, a, eb)), [a, eT, eL, eb]),
        e6 = i.useCallback(
            (e) => {
                (0, u.jW)(e, async () => {
                    let { default: e } = await n.e("56049").then(n.bind(n, 338991));
                    return (t) => (0, r.jsx)(e, J({ sourceAnalyticsLocations: eb }, t));
                });
            },
            [eb],
        ),
        e7 = i.useCallback(
            () =>
                em
                    ? (0, r.jsx)(v.Hh, {
                          renderPopout: () => (0, r.jsx)(v.hq, {}),
                          tooltipText: q.intl.string(q.t["19lt24"]),
                          position: "top",
                          clickableClassName: o()(Q.settingsClickArea, Q.settingsSoundmojiClickArea),
                          children: (0, r.jsx)(c.gj8, {
                              size: "md",
                              color: "currentColor",
                              className: Q.settingsIcon,
                          }),
                      })
                    : (0, r.jsx)(c.P3F, {
                          tabIndex: 0,
                          className: Q.settingsClickArea,
                          onClick: e6,
                          "aria-label": q.intl.string(q.t.kbFsAD),
                          children: (0, r.jsx)(c.gj8, {
                              size: "md",
                              color: "currentColor",
                              className: Q.settingsIcon,
                          }),
                      }),
            [em, e6],
        ),
        e9 = i.useCallback(
            (e) => {
                let n = ex.filter((e) => !eV || e.categoryInfo.type !== j.bg.DEFAULTS);
                return (0, r.jsx)(B.Z, {
                    soundboardListRef: e,
                    categories: n,
                    shouldUpsellLockedCategories: eB,
                    listPadding: ef,
                    guildId: t,
                    inExpressionPicker: em,
                    showPinnedDefaultsShortcut: eV,
                });
            },
            [ex, eB, ef, t, em, eV],
        ),
        te = i.useCallback(() => {
            var e;
            let t = (0, O.J0)();
            return null != (e = (0, x.fr)(t, z.Si.TIER_2)) ? e : q.intl.string(q.t.pj0XBN);
        }, []),
        tt = i.useCallback(() => {
            if (eB) {
                let e = eG;
                return (
                    eD.enabled && (e = !0),
                    (0, r.jsx)(S.p, {
                        showUpsell: e,
                        text: e0(),
                        button: te(),
                        buttonAnalyticsObject: { section: W.jXE.SOUND_PICKER_FLOATING_UPSELL },
                    })
                );
            }
            return null;
        }, [e0, te, eB, eD.enabled, eG]),
        tn = i.useCallback(
            (e) => {
                var t;
                return (null == e ? void 0 : e.item.type) !== j.vB.SOUND
                    ? null
                    : (0, r.jsx)(V.Z, {
                          closePicker: g,
                          soundboardSound: null != (t = null == e ? void 0 : e.item.sound) ? t : null,
                      });
            },
            [g],
        ),
        tr = "https://cdn.discordapp.com/assets/premium/roadblocks/soundboard_dark.png",
        ti = i.useCallback(() => {
            var e;
            let t = L.Z.getSoundById(es),
                n = new Audio((0, U.Z)(es));
            null != eE.current && eE.current.pause(),
                (eE.current = n),
                (n.currentTime = 0),
                (n.volume = (0, G.Z)(null != (e = null == t ? void 0 : t.volume) ? e : 1)),
                n.play();
        }, [eE]),
        ta = (0, l.e7)([N.Z], () => N.Z.getMediaSessionId());
    return (
        (0, m.Z)({
            type: s.ImpressionTypes.POPOUT,
            name: s.ImpressionNames.SOUNDBOARD_POPOUT,
            properties: {
                source: eh,
                guild_id: t,
                media_session_id: ta,
                available_custom_sounds_count: ej.unlockedCustomSoundCount,
                unavailable_custom_sounds_count: ej.lockedCustomSoundCount,
                favorite_sounds_count: ej.favoriteSoundCount,
            },
        }),
        (0, r.jsxs)(r.Fragment, {
            children: [
                null != eS
                    ? (0, r.jsx)(T.Z, {
                          containerContext: em ? T.p.TAB_PARENT_CONTAINER : T.p.NONE,
                          image: {
                              url: tr,
                              width: 220,
                              height: 132,
                          },
                          title: q.intl.string(em ? q.t.rZEEvU : q.t.jGDYF0),
                          description: q.intl.string(em ? q.t.ZPNG5A : q.t["grL/hg"]),
                          enableSocialProof: !0,
                          analyticsLocationSection: W.jXE.SOUNDBOARD_SOUND_PICKER_UPSELL,
                          upsellViewedTrackingData: {
                              type: z.cd.SOUND_PICKER_SOUND_CLICKED,
                              is_external: !0,
                              location: ee(J({}, ev), { object: W.qAy.SOUNDBOARD_SOUND }),
                              location_stack: ey,
                              sku_id: x.ZP.getSkuIdForPremiumType(z.PremiumTypes.TIER_2),
                          },
                          onClose: () => eI(null),
                          onLearnMore: g,
                          onDisplay: ti,
                      })
                    : void 0,
                (0, r.jsx)(y.Z, {
                    categories: eZ,
                    collapsedCategories: eY,
                    containerWidth: d,
                    store: E.Wq,
                    onSelectItem: eQ,
                    onSearchExpressions: e8,
                    hasSearchResults: eM.length > 0,
                    defaultSearchPlaceholder: q.intl.string(q.t.sKt3xS),
                    renderRow: eX,
                    renderSectionHeader: e4,
                    renderSectionFooter: e5,
                    renderSection: e2,
                    renderCategoryList: e9,
                    renderHeaderAccessories: e7,
                    rowHeight: en,
                    sectionHeaderHeight: e1,
                    sectionFooterHeight: e3,
                    itemNodeWidth: eo,
                    gridNavigatorId: ew,
                    renderEmptySearchState: ed,
                    renderInspector: tn,
                    gridNotice: et,
                    renderHeader: ep,
                    renderUpsell: tt,
                }),
            ],
        })
    );
}
