n.d(t, {
    O: () => el,
    Z: () => ed,
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
    O = n(409700),
    v = n(53691),
    S = n(75145),
    I = n(609218),
    T = n(386965),
    C = n(695346),
    A = n(19780),
    N = n(594174),
    P = n(979651),
    R = n(259580),
    w = n(626135),
    D = n(74538),
    x = n(887766),
    L = n(763296),
    j = n(697426),
    M = n(242291),
    k = n(22382),
    U = n(747071),
    G = n(421673),
    Z = n(663215),
    F = n(835648),
    B = n(650743),
    V = n(495332),
    H = n(343747),
    Y = n(981631),
    W = n(957825),
    K = n(474936),
    z = n(388032),
    q = n(641295);
function Q(e, t, n) {
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
function X(e) {
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
                Q(e, t, n[t]);
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
    et = 48,
    en = 32,
    er = 8,
    ei = 32 + S.Kn - er,
    ea = 150,
    eo = "3",
    es = {
        [j.bg.SEARCH]: p.Z.SOUNDBOARD_SEARCH_RESULTS_SECTION,
        [j.bg.DEFAULTS]: p.Z.SOUNDBOARD_DEFAULT_SOUNDS_SECTION,
        [j.bg.GUILD]: p.Z.SOUNDBOARD_GUILD_SOUNDS_SECTION,
        [j.bg.FAVORITES]: p.Z.SOUNDBOARD_FAVORITES_SECTION,
        [j.bg.RECENTLY_HEARD]: p.Z.SOUNDBOARD_RECENTLY_HEARD_SECTION,
        [j.bg.FREQUENTLY_USED]: p.Z.SOUNDBOARD_FREQUENTLY_USED_SECTION,
    };
function el(e, t, n) {
    return (null == n && e.type === j.bg.GUILD && !t) || (e.type === j.bg.GUILD && e.guild.id !== n && !t);
}
function ec(e) {
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
                return z.intl.string(z.t.k8fFjp);
            case j.bg.RECENTLY_HEARD:
                return z.intl.string(z.t["8i/+SA"]);
            case j.bg.FREQUENTLY_USED:
                return z.intl.string(z.t["+cGVV6"]);
            case j.bg.GUILD:
                return t.guild.name;
            case j.bg.DEFAULTS:
                return z.intl.string(z.t.Rtvk9X);
            case j.bg.SEARCH:
                return z.intl.string(z.t["zkoeq/"]);
        }
    }
    return (0, r.jsxs)(r.Fragment, {
        children: [
            s &&
                (0, r.jsx)(S.ZP, {
                    colorOpacity: 0.35,
                    glowOpacity: 0.35,
                    className: q.premiumSectionDivider,
                    enableBrandRefresh: l,
                }),
            (0, r.jsx)("div", {
                className: o()(q.sectionContainer, {
                    [q.sectionContainerNitroLocked]: a,
                    [q.sectionContainerNitroLockedBackground]: a,
                    [q.brandRefresh]: l,
                }),
                children: (0, r.jsx)(c.P3F, {
                    className: q.sectionHeader,
                    onClick: i,
                    "aria-expanded": !n,
                    children: (0, r.jsxs)("div", {
                        className: q.sectionHeaderContent,
                        children: [
                            u(),
                            (0, r.jsx)(c.Heading, {
                                variant: "text-sm/semibold",
                                color: "none",
                                className: q.sectionTitle,
                                children: d(),
                            }),
                            (0, r.jsx)(R.Z, {
                                className: q.headerIcon,
                                direction: n ? R.Z.Directions.RIGHT : R.Z.Directions.DOWN,
                            }),
                        ],
                    }),
                }),
            }),
        ],
    });
}
function eu() {
    return (0, r.jsx)(d.Z, { message: z.intl.string(z.t.bgDdNK) });
}
function ed(e) {
    let {
            guildId: t,
            channel: a,
            containerWidth: d,
            onClose: g,
            onSelect: S,
            shouldValidateSelectedSound: R = !1,
            suppressPlaySound: Q = !1,
            shouldShowUpsell: J = !0,
            gridNotice: ee,
            soundButtonOverlay: er,
            listPadding: ed,
            renderHeader: ef,
            defaultSoundsOnly: ep = !1,
            inExpressionPicker: e_,
            analyticsSource: em,
            enablePickerUpsellPremiumBrandRefresh: eh,
        } = e,
        { audioRef: eg } = i.useContext(T.Z),
        { analyticsLocations: eE } = (0, _.ZP)(),
        { analyticsLocations: eb } = (0, _.ZP)(p.Z.PREMIUM_UPSELL),
        { location: ey } = (0, f.O)(),
        eO = i.useMemo(() => $(X({}, ey), { section: Y.jXE.SOUNDBOARD_SOUND_PICKER }), [ey]),
        [ev, eS] = i.useState(null),
        eI = (0, l.e7)([N.default], () => N.default.getCurrentUser()),
        eT = (0, D.I5)(eI, K.PremiumTypes.TIER_2),
        eC = (0, l.e7)([P.Z], () => {
            var e;
            return P.Z.getVoiceState(t, null != (e = null == eI ? void 0 : eI.id) ? e : Y.lds);
        }),
        eA =
            (null == eC ? void 0 : eC.selfDeaf) ||
            (null == eC ? void 0 : eC.mute) ||
            (null == eC ? void 0 : eC.suppress),
        eN = (0, b.Iu)((e) => e.searchQuery),
        eP = null != eN && "" !== eN,
        eR = (0, h.Dt)(),
        ew = x.t.useConfig({ location: "SoundboardSoundGrid" }).upsellPinningMode,
        { categories: eD, availableSounds: ex, soundCounts: eL } = (0, Z.ZP)(a, {}, ep),
        [ej, eM] = i.useState([]),
        ek = (0, Z.FS)(eD, ej, eN),
        eU = (0, b.Iu)((e) => e.isNitroLockedSectionVisible),
        [eG, eZ] = i.useState(!1),
        eF = i.useMemo(() => ek.filter((e) => e.items.length > 0), [ek]),
        eB = i.useMemo(
            () => eF.findLastIndex((e) => !!(0, D._O)(e.categoryInfo) && e.categoryInfo.isNitroLocked),
            [eF],
        ),
        eV = !eT && J && -1 !== eB,
        eH = i.useMemo(() => (eV ? [0, 0, 8, 0] : [0, 0, 0, 0]), [eV]),
        eY = C.T4.useSetting(),
        eW = i.useMemo(() => new Set(eY), [eY]),
        eK = null == a,
        ez = D.ZP.canUseCustomCallSounds(eI),
        eq = i.useCallback(
            (e) => {
                eW.has(e) ? eW.delete(e) : eW.add(e), C.T4.updateSetting(Array.from(eW));
            },
            [eW],
        ),
        eQ = i.useCallback(
            (e, t, n, r) => {
                if (null != S && !R) return S(e, n);
                let i = (0, M.Nq)(eI, e, a, !1);
                if (null != S && R && i) S(e, n);
                else if (!Q && i && (0, M.C0)(a)) {
                    var o;
                    (0, M.GN)(e, null != (o = null == a ? void 0 : a.id) ? o : Y.lds, t, r),
                        eP &&
                            w.default.track(Y.rMx.SEARCH_RESULT_SELECTED, {
                                search_type: Y.aib.SOUNDBOARD,
                                channel_id: null == a ? void 0 : a.id,
                                query: eN,
                                location_stack: t,
                            });
                } else {
                    if ((0, M.Nq)(eI, e, a)) return;
                    J && eS(e);
                }
            },
            [Q, eI, a, J, eP, eN, S, R],
        ),
        eX = i.useCallback(
            (e, t) => {
                switch (e.item.type) {
                    case j.vB.SOUND:
                        var n;
                        let r = null != (n = es[null == e ? void 0 : e.category]) ? n : null,
                            i = null == e ? void 0 : e.item.index;
                        return eQ(
                            e.item.sound,
                            null == r ? eE : [...eE, r],
                            (null == t ? void 0 : t.shiftKey) !== !0,
                            i,
                        );
                    case j.vB.ADD_SOUND:
                        return g(), (0, H.Z)(e.item.guild.id);
                }
            },
            [eE, eQ, g],
        ),
        eJ = i.useCallback(
            (e, n, i, s, l) => {
                let c = eF[i.sectionIndex],
                    u = J && el(c.categoryInfo, eT, t) && eV;
                return (0, r.jsx)(
                    "ul",
                    $(X({}, n), {
                        className: o()(q.soundRow, {
                            [q.soundRowNitroLocked]: u,
                            [q.brandRefresh]: eh,
                        }),
                        children: e.map((e, t) =>
                            (0, r.jsx)(
                                V.Z,
                                {
                                    descriptor: e,
                                    soundButtonProps: {
                                        channel: a,
                                        interactive: eK ? ez : !eA,
                                        forceSecondaryActions: !0,
                                        analyticsLocations: eE,
                                    },
                                    rowIndex: i.rowIndex,
                                    columnIndex: t,
                                    isUsingKeyboardNavigation: i.isUsingKeyboardNavigation,
                                    suppressPlaySound: Q,
                                    getItemProps: s,
                                    onSelectItem: eX,
                                    onItemMouseEnter: l,
                                    buttonOverlay: er,
                                    isNitroLocked: u,
                                    shouldShowUpsell: J,
                                    inExpressionPicker: e_,
                                },
                                t,
                            ),
                        ),
                    }),
                    "row-".concat(n["aria-rowindex"]),
                );
            },
            [eF, J, eT, t, Q, eX, a, eK, ez, eA, eE, er, eV, e_, eh],
        ),
        e$ = i.useCallback(
            (e, t) => {
                if (e <= 0 || !J) return !1;
                let n = eF[e],
                    r = eF[e - 1],
                    i = el(n.categoryInfo, eT, t),
                    a = el(r.categoryInfo, eT, t);
                return i && !a;
            },
            [eF, J, eT],
        ),
        e0 = i.useCallback(() => {
            let e = L.Z.getSoundById(eo);
            null != e && eS(e);
        }, []),
        e1 = i.useCallback(() => {
            let e = (0, D.Px)(K.PremiumTypes.TIER_2);
            return z.intl.format(z.t["tw/SSq"], {
                nitroTierName: e,
                onClick: e0,
            });
        }, [e0]),
        e3 = i.useCallback((e) => (e$(e, t) ? ei : en), [t, e$]),
        e2 = i.useCallback(
            (e) => {
                let t = e === eF.length - 1;
                return eV && t ? 50 : eV && e === eB ? 20 : 0;
            },
            [eF.length, eV, eB],
        ),
        e4 = i.useCallback((e, t) => (0, r.jsx)("div", { children: t }, e), []),
        e5 = i.useCallback(
            (e, n) => {
                let i = "".concat(e.key),
                    a = J && el(e.categoryInfo, eT, t),
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
                    ec,
                    {
                        categoryInfo: e.categoryInfo,
                        toggleCollapsed: l,
                        collapsed: s,
                        isSectionNitroLocked: a && eV,
                        showNitroDivider: o && eV,
                        enablePickerUpsellPremiumBrandRefresh: eh,
                    },
                    "header-".concat(i),
                );
            },
            [eW, eq, t, e$, J, eT, eV, eh],
        ),
        e8 = i.useCallback(
            (e, t) => {
                let n = t === eF.length - 1,
                    i = t === eB;
                return eV && n
                    ? (0, r.jsx)("div", {
                          className: o()(q.lastSectionFooter, {
                              [q.nitroLocked]: i,
                              [q.brandRefresh]: eh,
                          }),
                      })
                    : eV && t === eB
                      ? (0, r.jsx)("div", {
                            className: o()(q.smallPaddingFooter, {
                                [q.nitroLocked]: i,
                                [q.brandRefresh]: eh,
                            }),
                        })
                      : null;
            },
            [eB, eV, eF.length, eh],
        ),
        e6 = i.useCallback((e) => eM((0, G.cK)(e, ex, eI, a, eE)), [a, eI, ex, eE]),
        e7 = i.useCallback(
            (e) => {
                (0, u.jW)(e, async () => {
                    let { default: e } = await n.e("56049").then(n.bind(n, 338991));
                    return (t) => (0, r.jsx)(e, X({ sourceAnalyticsLocations: eE }, t));
                });
            },
            [eE],
        ),
        e9 = i.useCallback(
            () =>
                e_
                    ? (0, r.jsx)(O.Hh, {
                          renderPopout: () => (0, r.jsx)(O.hq, {}),
                          tooltipText: z.intl.string(z.t["19lt24"]),
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
                          onClick: e7,
                          "aria-label": z.intl.string(z.t.kbFsAD),
                          children: (0, r.jsx)(c.gj8, {
                              size: "md",
                              color: "currentColor",
                              className: q.settingsIcon,
                          }),
                      }),
            [e_, e7],
        ),
        te = i.useCallback(
            (e) =>
                (0, r.jsx)(F.Z, {
                    soundboardListRef: e,
                    categories: eD,
                    shouldUpsellLockedCategories: eV,
                    listPadding: ed,
                    guildId: t,
                    inExpressionPicker: e_,
                }),
            [eD, eV, ed, t, e_],
        ),
        tt = i.useCallback(() => {
            if (eV) {
                let e;
                switch (ew) {
                    case x.o.ALWAYS_PINNED:
                        e = !0;
                        break;
                    case x.o.PINNED_ON_SCROLL_DOWN:
                        e = eG || eU;
                        break;
                    default:
                        e = eU;
                }
                return (0, r.jsx)(v.p, {
                    showUpsell: e,
                    text: e1(),
                    button: z.intl.string(z.t.pj0XBN),
                    buttonAnalyticsObject: { section: Y.jXE.SOUND_PICKER_FLOATING_UPSELL },
                });
            }
            return null;
        }, [e1, eV, ew, eU, eG]),
        tn = i.useCallback(
            (e) => {
                var t;
                return (null == e ? void 0 : e.item.type) !== j.vB.SOUND
                    ? null
                    : (0, r.jsx)(B.Z, {
                          closePicker: g,
                          soundboardSound: null != (t = null == e ? void 0 : e.item.sound) ? t : null,
                      });
            },
            [g],
        ),
        tr = i.useCallback((e) => {
            eZ(e > 50);
        }, []),
        ti = "https://cdn.discordapp.com/assets/premium/roadblocks/soundboard_dark.png",
        ta = i.useCallback(() => {
            var e;
            let t = L.Z.getSoundById(eo),
                n = new Audio((0, k.Z)(eo));
            null != eg.current && eg.current.pause(),
                (eg.current = n),
                (n.currentTime = 0),
                (n.volume = (0, U.Z)(null != (e = null == t ? void 0 : t.volume) ? e : 1)),
                n.play();
        }, [eg]),
        to = (0, l.e7)([A.Z], () => A.Z.getMediaSessionId());
    return (
        (0, m.Z)({
            type: s.ImpressionTypes.POPOUT,
            name: s.ImpressionNames.SOUNDBOARD_POPOUT,
            properties: {
                source: em,
                guild_id: t,
                media_session_id: to,
                available_custom_sounds_count: eL.unlockedCustomSoundCount,
                unavailable_custom_sounds_count: eL.lockedCustomSoundCount,
                favorite_sounds_count: eL.favoriteSoundCount,
            },
        }),
        (0, r.jsxs)(r.Fragment, {
            children: [
                null != ev
                    ? (0, r.jsx)(I.Z, {
                          containerContext: e_ ? I.p.TAB_PARENT_CONTAINER : I.p.NONE,
                          image: {
                              url: ti,
                              width: 220,
                              height: 132,
                          },
                          title: z.intl.string(e_ ? z.t.rZEEvU : z.t.jGDYF0),
                          description: z.intl.string(e_ ? z.t.ZPNG5A : z.t["grL/hg"]),
                          enableSocialProof: !0,
                          analyticsLocationSection: Y.jXE.SOUNDBOARD_SOUND_PICKER_UPSELL,
                          upsellViewedTrackingData: {
                              type: K.cd.SOUND_PICKER_SOUND_CLICKED,
                              is_external: !0,
                              location: $(X({}, eO), { object: Y.qAy.SOUNDBOARD_SOUND }),
                              location_stack: eb,
                              sku_id: D.ZP.getSkuIdForPremiumType(K.PremiumTypes.TIER_2),
                          },
                          onClose: () => eS(null),
                          onLearnMore: g,
                          onDisplay: ta,
                      })
                    : void 0,
                (0, r.jsx)(y.Z, {
                    categories: eF,
                    collapsedCategories: eW,
                    containerWidth: d,
                    store: E.Wq,
                    onSelectItem: eX,
                    onSearchExpressions: e6,
                    hasSearchResults: ej.length > 0,
                    defaultSearchPlaceholder: z.intl.string(z.t.sKt3xS),
                    renderRow: eJ,
                    renderSectionHeader: e5,
                    renderSectionFooter: e8,
                    renderSection: e4,
                    renderCategoryList: te,
                    renderHeaderAccessories: e9,
                    rowHeight: et,
                    sectionHeaderHeight: e3,
                    sectionFooterHeight: e2,
                    listPadding: eH,
                    itemNodeWidth: ea,
                    gridNavigatorId: eR,
                    renderEmptySearchState: eu,
                    renderInspector: tn,
                    gridNotice: ee,
                    renderHeader: ef,
                    renderUpsell: tt,
                    onScroll: tr,
                }),
            ],
        })
    );
}
