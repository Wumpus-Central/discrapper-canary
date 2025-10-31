n.d(t, {
    O: () => es,
    Z: () => eu,
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
    M = n(697426),
    k = n(242291),
    j = n(22382),
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
    et = 48,
    en = 32,
    er = 32 + I.Kn,
    ei = 150,
    ea = "3",
    eo = {
        [M.bg.SEARCH]: _.Z.SOUNDBOARD_SEARCH_RESULTS_SECTION,
        [M.bg.DEFAULTS]: _.Z.SOUNDBOARD_DEFAULT_SOUNDS_SECTION,
        [M.bg.GUILD]: _.Z.SOUNDBOARD_GUILD_SOUNDS_SECTION,
        [M.bg.FAVORITES]: _.Z.SOUNDBOARD_FAVORITES_SECTION,
        [M.bg.RECENTLY_HEARD]: _.Z.SOUNDBOARD_RECENTLY_HEARD_SECTION,
        [M.bg.FREQUENTLY_USED]: _.Z.SOUNDBOARD_FREQUENTLY_USED_SECTION,
    };
function es(e, t, n) {
    return (null == n && e.type === M.bg.GUILD && !t) || (e.type === M.bg.GUILD && e.guild.id !== n && !t);
}
function el(e) {
    let { categoryInfo: t, collapsed: n, toggleCollapsed: i, isSectionNitroLocked: a, showNitroDivider: s } = e;
    function l() {
        switch (t.type) {
            case M.bg.FAVORITES:
                return (0, r.jsx)(c.r7p, {
                    size: "xs",
                    color: "currentColor",
                    className: q.headerIcon,
                });
            case M.bg.RECENTLY_HEARD:
                return (0, r.jsx)(c.T39, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: "currentColor",
                    className: q.headerIcon,
                });
            case M.bg.FREQUENTLY_USED:
                return (0, r.jsx)(c.IeX, { className: q.headerIcon });
            case M.bg.GUILD:
                return (0, r.jsx)(g.Z, {
                    guild: t.guild,
                    height: ee,
                    width: ee,
                });
            case M.bg.DEFAULTS:
                return (0, r.jsx)(c.gw7, {
                    size: "custom",
                    width: 28,
                    height: 28,
                    color: "currentColor",
                    className: q.headerIcon,
                });
            case M.bg.SEARCH:
                return (0, r.jsx)(c._Ve, {
                    size: "md",
                    color: "currentColor",
                    className: q.headerIcon,
                });
        }
    }
    function u() {
        switch (t.type) {
            case M.bg.FAVORITES:
                return z.intl.string(z.t.k8fFjp);
            case M.bg.RECENTLY_HEARD:
                return z.intl.string(z.t["8i/+SA"]);
            case M.bg.FREQUENTLY_USED:
                return z.intl.string(z.t["+cGVV6"]);
            case M.bg.GUILD:
                return t.guild.name;
            case M.bg.DEFAULTS:
                return z.intl.string(z.t.Rtvk9X);
            case M.bg.SEARCH:
                return z.intl.string(z.t["zkoeq/"]);
        }
    }
    return (0, r.jsxs)(r.Fragment, {
        children: [
            s &&
                (0, r.jsx)(I.ZP, {
                    colorOpacity: 0.35,
                    glowOpacity: 0.35,
                    className: q.premiumSectionDivider,
                }),
            (0, r.jsx)("div", {
                className: o()(q.sectionContainer, { [q.sectionContainerNitroLocked]: a }),
                children: (0, r.jsx)(c.P3F, {
                    className: q.sectionHeader,
                    onClick: i,
                    "aria-expanded": !n,
                    children: (0, r.jsxs)("div", {
                        className: q.sectionHeaderContent,
                        children: [
                            l(),
                            (0, r.jsx)(c.Heading, {
                                variant: "text-sm/semibold",
                                color: "none",
                                className: q.sectionTitle,
                                children: u(),
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
function ec() {
    return (0, r.jsx)(d.Z, { message: z.intl.string(z.t.bgDdNK) });
}
function eu(e) {
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
            soundButtonOverlay: eu,
            listPadding: ed,
            renderHeader: ef,
            defaultSoundsOnly: e_ = !1,
            inExpressionPicker: ep,
            analyticsSource: eh,
        } = e,
        { audioRef: em } = i.useContext(S.Z),
        { analyticsLocations: eg } = (0, p.ZP)(),
        { analyticsLocations: eE } = (0, p.ZP)(_.Z.PREMIUM_UPSELL),
        { location: eb } = (0, f.O)(),
        ey = i.useMemo(() => $(Q({}, eb), { section: Y.jXE.SOUNDBOARD_SOUND_PICKER }), [eb]),
        [eO, ev] = i.useState(null),
        eI = (0, l.e7)([N.default], () => N.default.getCurrentUser()),
        eT = (0, D.I5)(eI, K.PremiumTypes.TIER_2),
        eS = (0, l.e7)([R.Z], () => {
            var e;
            return R.Z.getVoiceState(t, null != (e = null == eI ? void 0 : eI.id) ? e : Y.lds);
        }),
        eA =
            (null == eS ? void 0 : eS.selfDeaf) ||
            (null == eS ? void 0 : eS.mute) ||
            (null == eS ? void 0 : eS.suppress),
        eC = (0, b.Iu)((e) => e.searchQuery),
        eN = null != eC && "" !== eC,
        eR = (0, m.Dt)(),
        eP = x.t.useConfig({ location: "SoundboardSoundGrid" }).upsellPinningMode,
        { categories: ew, allSounds: eD, soundCounts: ex } = (0, B.ZP)(a, {}, e_),
        [eL, eM] = i.useState([]),
        ek = (0, B.FS)(ew, eL, eC),
        ej = (0, b.Iu)((e) => e.isNitroLockedSectionVisible),
        [eU, eG] = i.useState(!1),
        eB = i.useMemo(() => ek.filter((e) => e.items.length > 0), [ek]),
        eZ = i.useMemo(
            () => eB.findLastIndex((e) => !!(0, D._O)(e.categoryInfo) && e.categoryInfo.isNitroLocked),
            [eB],
        ),
        eF = !eT && J && -1 !== eZ,
        eV = i.useMemo(() => (eF ? [0, 0, 8, 0] : [0, 0, 0, 0]), [eF]),
        eH = A.T4.useSetting(),
        eY = i.useMemo(() => new Set(eH), [eH]),
        eW = null == a,
        eK = D.ZP.canUseCustomCallSounds(eI),
        ez = i.useCallback(
            (e) => {
                eY.has(e) ? eY.delete(e) : eY.add(e), A.T4.updateSetting(Array.from(eY));
            },
            [eY],
        ),
        eq = i.useCallback(
            (e, t, n) => {
                if (null != I && !P) return I(e, n);
                let r = (0, k.Nq)(eI, e, a, !1);
                if (null != I && P && r) I(e, n);
                else if (!X && r && (0, k.C0)(a)) {
                    var i;
                    (0, k.GN)(e, null != (i = null == a ? void 0 : a.id) ? i : Y.lds, t),
                        eN &&
                            w.default.track(Y.rMx.SEARCH_RESULT_SELECTED, {
                                search_type: Y.aib.SOUNDBOARD,
                                channel_id: null == a ? void 0 : a.id,
                                query: eC,
                                location_stack: t,
                            });
                } else {
                    if ((0, k.Nq)(eI, e, a)) return;
                    J && ev(e);
                }
            },
            [X, eI, a, J, eN, eC, I, P],
        ),
        eX = i.useCallback(
            (e, t) => {
                switch (e.item.type) {
                    case M.vB.SOUND:
                        var n;
                        let r = null != (n = eo[null == e ? void 0 : e.category]) ? n : null;
                        return eq(e.item.sound, null == r ? eg : [...eg, r], (null == t ? void 0 : t.shiftKey) !== !0);
                    case M.vB.ADD_SOUND:
                        return g(), (0, H.Z)(e.item.guild.id);
                }
            },
            [eg, eq, g],
        ),
        eQ = i.useCallback(
            (e, n, i, s, l) => {
                let c = eB[i.sectionIndex],
                    u = J && es(c.categoryInfo, eT, t) && eF;
                return (0, r.jsx)(
                    "ul",
                    $(Q({}, n), {
                        className: o()(q.soundRow, { [q.soundRowNitroLocked]: u }),
                        children: e.map((e, t) =>
                            (0, r.jsx)(
                                V.Z,
                                {
                                    descriptor: e,
                                    soundButtonProps: {
                                        channel: a,
                                        interactive: eW ? eK : !eA,
                                        forceSecondaryActions: !0,
                                        analyticsLocations: eg,
                                    },
                                    rowIndex: i.rowIndex,
                                    columnIndex: t,
                                    isUsingKeyboardNavigation: i.isUsingKeyboardNavigation,
                                    suppressPlaySound: X,
                                    getItemProps: s,
                                    onSelectItem: eX,
                                    onItemMouseEnter: l,
                                    buttonOverlay: eu,
                                    isNitroLocked: u,
                                    shouldShowUpsell: J,
                                    inExpressionPicker: ep,
                                },
                                t,
                            ),
                        ),
                    }),
                    "row-".concat(n["aria-rowindex"]),
                );
            },
            [eB, J, eT, t, X, eX, a, eW, eK, eA, eg, eu, eF, ep],
        ),
        eJ = i.useCallback(
            (e, t) => {
                if (e <= 0 || !J) return !1;
                let n = eB[e],
                    r = eB[e - 1],
                    i = es(n.categoryInfo, eT, t),
                    a = es(r.categoryInfo, eT, t);
                return i && !a;
            },
            [eB, J, eT],
        ),
        e$ = i.useCallback(() => {
            let e = L.Z.getSoundById(ea);
            null != e && ev(e);
        }, []),
        e0 = i.useCallback(() => {
            let e = (0, D.Px)(K.PremiumTypes.TIER_2);
            return z.intl.format(z.t["tw/SSq"], {
                nitroTierName: e,
                onClick: e$,
            });
        }, [e$]),
        e1 = i.useCallback((e) => (eJ(e, t) ? er : en), [t, eJ]),
        e3 = i.useCallback(
            (e) => {
                let t = e === eB.length - 1;
                return eF && t ? 50 : eF && e === eZ ? 20 : 0;
            },
            [eB.length, eF, eZ],
        ),
        e2 = i.useCallback((e, t) => (0, r.jsx)("div", { children: t }, e), []),
        e4 = i.useCallback(
            (e, n) => {
                let i = "".concat(e.key),
                    a = J && es(e.categoryInfo, eT, t),
                    o = eJ(n, t),
                    s = eY.has(i),
                    l = () => {
                        w.default.track(Y.rMx.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
                            location: { page: Y.ZY5.SOUNDBOARD_POPOUT },
                            tab: W.X1.SOUNDBOARD,
                            guild_id: null != t ? t : null,
                            collapsed: !s,
                            sticker_pack_id: null,
                            num_expressions: e.items.length,
                        }),
                            ez(i);
                    };
                return (0, r.jsx)(
                    el,
                    {
                        categoryInfo: e.categoryInfo,
                        toggleCollapsed: l,
                        collapsed: s,
                        isSectionNitroLocked: a && eF,
                        showNitroDivider: o && eF,
                    },
                    "header-".concat(i),
                );
            },
            [eY, ez, t, eJ, J, eT, eF],
        ),
        e8 = i.useCallback(
            (e, t) => {
                let n = t === eB.length - 1,
                    i = t === eZ;
                return eF && n
                    ? (0, r.jsx)("div", { className: o()(q.lastSectionFooter, { [q.nitroLocked]: i }) })
                    : eF && t === eZ
                      ? (0, r.jsx)("div", { className: o()(q.smallPaddingFooter, q.nitroLocked) })
                      : null;
            },
            [eZ, eF, eB.length],
        ),
        e5 = i.useCallback((e) => eM((0, G.cK)(e, Array.from(eD.values()).flat(), eI, a, eg)), [a, eI, eD, eg]),
        e6 = i.useCallback(
            (e) => {
                (0, u.jW)(e, async () => {
                    let { default: e } = await n.e("56049").then(n.bind(n, 338991));
                    return (t) => (0, r.jsx)(e, Q({ sourceAnalyticsLocations: eg }, t));
                });
            },
            [eg],
        ),
        e7 = i.useCallback(
            () =>
                ep
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
                          onClick: e6,
                          "aria-label": z.intl.string(z.t.kbFsAD),
                          children: (0, r.jsx)(c.gj8, {
                              size: "md",
                              color: "currentColor",
                              className: q.settingsIcon,
                          }),
                      }),
            [ep, e6],
        ),
        e9 = i.useCallback(
            (e) =>
                (0, r.jsx)(Z.Z, {
                    soundboardListRef: e,
                    categories: ew,
                    shouldUpsellLockedCategories: eF,
                    listPadding: ed,
                    guildId: t,
                    inExpressionPicker: ep,
                }),
            [ew, eF, ed, t, ep],
        ),
        te = i.useCallback(() => {
            if (eF) {
                let e;
                switch (eP) {
                    case x.o.ALWAYS_PINNED:
                        e = !0;
                        break;
                    case x.o.PINNED_ON_SCROLL_DOWN:
                        e = eU || ej;
                        break;
                    default:
                        e = ej;
                }
                return (0, r.jsx)(v.p, {
                    showUpsell: e,
                    text: e0(),
                    button: z.intl.string(z.t.pj0XBN),
                    buttonAnalyticsObject: { section: Y.jXE.SOUND_PICKER_FLOATING_UPSELL },
                });
            }
            return null;
        }, [e0, eF, eP, ej, eU]),
        tt = i.useCallback(
            (e) => {
                var t;
                return (null == e ? void 0 : e.item.type) !== M.vB.SOUND
                    ? null
                    : (0, r.jsx)(F.Z, {
                          closePicker: g,
                          soundboardSound: null != (t = null == e ? void 0 : e.item.sound) ? t : null,
                      });
            },
            [g],
        ),
        tn = i.useCallback((e) => {
            eG(e > 50);
        }, []),
        tr = "https://cdn.discordapp.com/assets/premium/roadblocks/soundboard_dark.png",
        ti = i.useCallback(() => {
            var e;
            let t = L.Z.getSoundById(ea),
                n = new Audio((0, j.Z)(ea));
            null != em.current && em.current.pause(),
                (em.current = n),
                (n.currentTime = 0),
                (n.volume = (0, U.Z)(null != (e = null == t ? void 0 : t.volume) ? e : 1)),
                n.play();
        }, [em]),
        ta = (0, l.e7)([C.Z], () => C.Z.getMediaSessionId());
    return (
        (0, h.Z)({
            type: s.ImpressionTypes.POPOUT,
            name: s.ImpressionNames.SOUNDBOARD_POPOUT,
            properties: {
                source: eh,
                guild_id: t,
                media_session_id: ta,
                available_custom_sounds_count: ex.unlockedCustomSoundCount,
                unavailable_custom_sounds_count: ex.lockedCustomSoundCount,
                favorite_sounds_count: ex.favoriteSoundCount,
            },
        }),
        (0, r.jsxs)(r.Fragment, {
            children: [
                null != eO
                    ? (0, r.jsx)(T.Z, {
                          containerContext: ep ? T.p.TAB_PARENT_CONTAINER : T.p.NONE,
                          image: {
                              url: tr,
                              width: 220,
                              height: 132,
                          },
                          title: z.intl.string(ep ? z.t.rZEEvU : z.t.jGDYF0),
                          description: z.intl.string(ep ? z.t.ZPNG5A : z.t["grL/hg"]),
                          enableSocialProof: !0,
                          analyticsLocationSection: Y.jXE.SOUNDBOARD_SOUND_PICKER_UPSELL,
                          upsellViewedTrackingData: {
                              type: K.cd.SOUND_PICKER_SOUND_CLICKED,
                              is_external: !0,
                              location: $(Q({}, ey), { object: Y.qAy.SOUNDBOARD_SOUND }),
                              location_stack: eE,
                              sku_id: D.ZP.getSkuIdForPremiumType(K.PremiumTypes.TIER_2),
                          },
                          onClose: () => ev(null),
                          onLearnMore: g,
                          onDisplay: ti,
                      })
                    : void 0,
                (0, r.jsx)(y.Z, {
                    categories: eB,
                    collapsedCategories: eY,
                    containerWidth: d,
                    store: E.Wq,
                    onSelectItem: eX,
                    onSearchExpressions: e5,
                    hasSearchResults: eL.length > 0,
                    defaultSearchPlaceholder: z.intl.string(z.t.sKt3xS),
                    renderRow: eQ,
                    renderSectionHeader: e4,
                    renderSectionFooter: e8,
                    renderSection: e2,
                    renderCategoryList: e9,
                    renderHeaderAccessories: e7,
                    rowHeight: et,
                    sectionHeaderHeight: e1,
                    sectionFooterHeight: e3,
                    listPadding: eV,
                    itemNodeWidth: ei,
                    gridNavigatorId: eR,
                    renderEmptySearchState: ec,
                    renderInspector: tt,
                    gridNotice: ee,
                    renderHeader: ef,
                    renderUpsell: te,
                    onScroll: tn,
                }),
            ],
        })
    );
}
