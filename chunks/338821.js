n.d(t, {
    A: () => ef,
    B: () => ec,
}),
    n(896048),
    n(30146);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    o = n.n(a),
    s = n(110259),
    l = n(311907),
    c = n(397927),
    u = n(442433),
    d = n(537652),
    f = n(212245),
    p = n(793574),
    _ = n(688810),
    h = n(139286),
    m = n(915089),
    g = n(724511),
    E = n(850992),
    y = n(151271),
    b = n(836963),
    O = n(89366),
    v = n(105713),
    A = n(202639),
    I = n(414872),
    S = n(421162),
    T = n(523006),
    C = n(253932),
    N = n(383501),
    w = n(287809),
    R = n(977997),
    P = n(147925),
    D = n(954571),
    L = n(927578),
    x = n(209932),
    M = n(807348),
    j = n(766708),
    k = n(536432),
    U = n(102597),
    G = n(904054),
    F = n(147472),
    V = n(918530),
    B = n(114028),
    H = n(862933),
    Y = n(985417),
    W = n(797179),
    K = n(652215),
    z = n(698279),
    q = n(788868),
    Z = n(985018),
    Q = n(426889);

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
    ea = 32 + I.kg - ei,
    eo = 150,
    es = "3",
    el = {
        [M.Cx.SEARCH]: p.A.SOUNDBOARD_SEARCH_RESULTS_SECTION,
        [M.Cx.DEFAULTS]: p.A.SOUNDBOARD_DEFAULT_SOUNDS_SECTION,
        [M.Cx.GUILD]: p.A.SOUNDBOARD_GUILD_SOUNDS_SECTION,
        [M.Cx.FAVORITES]: p.A.SOUNDBOARD_FAVORITES_SECTION,
        [M.Cx.RECENTLY_HEARD]: p.A.SOUNDBOARD_RECENTLY_HEARD_SECTION,
        [M.Cx.FREQUENTLY_USED]: p.A.SOUNDBOARD_FREQUENTLY_USED_SECTION,
    };

function ec(e, t, n) {
    return (null == n && e.type === M.Cx.GUILD && !t) || (e.type === M.Cx.GUILD && e.guild.id !== n && !t);
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
            case M.Cx.FAVORITES:
                return (0, r.jsx)(c.Gg5, {
                    size: "xs",
                    color: "currentColor",
                    className: Q.nr,
                });
            case M.Cx.RECENTLY_HEARD:
                return (0, r.jsx)(c.O4, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: "currentColor",
                    className: Q.nr,
                });
            case M.Cx.FREQUENTLY_USED:
                return (0, r.jsx)(c.Uy2, {
                    className: Q.nr,
                });
            case M.Cx.GUILD:
                return (0, r.jsx)(g.A, {
                    guild: t.guild,
                    height: et,
                    width: et,
                });
            case M.Cx.DEFAULTS:
                return (0, r.jsx)(c.pVd, {
                    size: "custom",
                    width: 28,
                    height: 28,
                    color: "currentColor",
                    className: Q.nr,
                });
            case M.Cx.SEARCH:
                return (0, r.jsx)(c.$p$, {
                    size: "md",
                    color: "currentColor",
                    className: Q.nr,
                });
        }
    }

    function d() {
        switch (t.type) {
            case M.Cx.FAVORITES:
                return Z.intl.string(Z.t.k8fFjp);
            case M.Cx.RECENTLY_HEARD:
                return Z.intl.string(Z.t["8i/+SA"]);
            case M.Cx.FREQUENTLY_USED:
                return Z.intl.string(Z.t["+cGVV6"]);
            case M.Cx.GUILD:
                return t.guild.name;
            case M.Cx.DEFAULTS:
                return Z.intl.string(Z.t.Rtvk9X);
            case M.Cx.SEARCH:
                return Z.intl.string(Z.t["zkoeq/"]);
        }
    }
    return (0, r.jsxs)(r.Fragment, {
        children: [
            s &&
                (0, r.jsx)(I.Ay, {
                    colorOpacity: 0.35,
                    glowOpacity: 0.35,
                    className: Q.yH,
                    enableBrandRefresh: l,
                }),
            (0, r.jsx)("div", {
                className: o()(Q.hd, {
                    [Q.Jb]: a,
                    [Q.VD]: a,
                    [Q.N4]: l,
                }),
                children: (0, r.jsx)(c.DUT, {
                    className: Q.bV,
                    onClick: i,
                    "aria-expanded": !n,
                    children: (0, r.jsxs)("div", {
                        className: Q.M2,
                        children: [
                            u(),
                            (0, r.jsx)(c.Heading, {
                                variant: "text-sm/semibold",
                                color: "none",
                                className: Q.Gf,
                                children: d(),
                            }),
                            (0, r.jsx)(P.A, {
                                className: Q.nr,
                                direction: n ? P.A.Directions.RIGHT : P.A.Directions.DOWN,
                            }),
                        ],
                    }),
                }),
            }),
        ],
    });
}

function ed() {
    return (0, r.jsx)(d.A, {
        message: Z.intl.string(Z.t.bgDdNK),
    });
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
            shouldShowUpsell: $ = !0,
            gridNotice: et,
            soundButtonOverlay: ei,
            listPadding: ef,
            renderHeader: ep,
            defaultSoundsOnly: e_ = !1,
            inExpressionPicker: eh,
            analyticsSource: em,
            enablePickerUpsellPremiumBrandRefresh: eg,
        } = e,
        { audioRef: eE } = i.useContext(T.A),
        { analyticsLocations: ey } = (0, _.Ay)(),
        { analyticsLocations: eb } = (0, _.Ay)(p.A.PREMIUM_UPSELL),
        { location: eO } = (0, f.p)(),
        ev = i.useMemo(
            () =>
                ee(J({}, eO), {
                    section: K.JJy.SOUNDBOARD_SOUND_PICKER,
                }),
            [eO],
        ),
        [eA, eI] = i.useState(null),
        [eS, eT] = i.useState(null),
        eC = (0, l.bG)([w.default], () => w.default.getCurrentUser()),
        eN = (0, L.TW)(eC, q.PremiumTypes.TIER_2),
        ew = (0, l.bG)([R.A], () => {
            var e;
            return R.A.getVoiceState(t, null != (e = null == eC ? void 0 : eC.id) ? e : K.dJq);
        }),
        eR =
            (null == ew ? void 0 : ew.selfDeaf) ||
            (null == ew ? void 0 : ew.mute) ||
            (null == ew ? void 0 : ew.suppress),
        eP = (0, y.RQ)((e) => e.searchQuery),
        eD = null != eP && "" !== eP,
        eL = (0, m.GV)(),
        ex = j.r.useConfig({
            location: "SoundboardSoundGrid",
        }),
        {
            categories: eM,
            availableSounds: ej,
            soundCounts: ek,
        } = (0, V.Ay)(
            a,
            {
                moveDefaultsToBottom: ex.enabled,
            },
            e_,
        ),
        [eU, eG] = i.useState([]),
        eF = (0, V.Ip)(eM, eU, eP),
        eV = (0, y.RQ)((e) => e.isNitroLockedSectionVisible),
        eB = i.useMemo(() => eF.filter((e) => e.items.length > 0), [eF]),
        eH = i.useMemo(
            () => eB.findLastIndex((e) => !!(0, L.Em)(e.categoryInfo) && e.categoryInfo.isNitroLocked),
            [eB],
        ),
        eY = !eN && $ && -1 !== eH,
        eW = !eN && ex.enabled && !ex.bottomBar && eM.length > 6,
        eK = C.b0.useSetting(),
        ez = i.useMemo(() => new Set(eK), [eK]),
        eq = null == a,
        eZ = L.Ay.canUseCustomCallSounds(eC),
        eQ = i.useCallback(
            (e) => {
                ez.has(e) ? ez.delete(e) : ez.add(e), C.b0.updateSetting(Array.from(ez));
            },
            [ez],
        ),
        eX = i.useCallback(
            (e, t, n, r) => {
                if (null != I && !P) return I(e, n);
                let i = (0, k.Ir)(eC, e, a, !1);
                if (null != I && P && i) I(e, n);
                else if (!X && i && (0, k.Au)(a)) {
                    var o;
                    (0, k.Ak)(e, null != (o = null == a ? void 0 : a.id) ? o : K.dJq, t, r),
                        eD &&
                            D.default.track(K.HAw.SEARCH_RESULT_SELECTED, {
                                search_type: K.I4_.SOUNDBOARD,
                                channel_id: null == a ? void 0 : a.id,
                                query: eP,
                                location_stack: t,
                            });
                } else {
                    if ((0, k.Ir)(eC, e, a)) return;
                    $ && eI(e);
                }
            },
            [X, eC, a, $, eD, eP, I, P],
        ),
        eJ = i.useCallback(
            (e, t) => {
                switch (e.item.type) {
                    case M.uq.SOUND:
                        var n;
                        let r = null != (n = el[null == e ? void 0 : e.category]) ? n : null,
                            i = null == e ? void 0 : e.item.index;
                        return eX(
                            e.item.sound,
                            null == r ? ey : [...ey, r],
                            (null == t ? void 0 : t.shiftKey) !== !0,
                            i,
                        );
                    case M.uq.ADD_SOUND:
                        return g(), (0, W.A)(e.item.guild.id);
                }
            },
            [ey, eX, g],
        ),
        e$ = i.useCallback(
            (e, n, i, s, l) => {
                let c = eB[i.sectionIndex],
                    u = $ && ec(c.categoryInfo, eN, t) && eY,
                    d = (t) => {
                        l(t);
                        let n = e[t];
                        u && (null == n ? void 0 : n.item.type) === M.uq.SOUND ? eT(n.item.sound) : eT(null);
                    },
                    f = () => {
                        eT(null);
                    };
                return (0, r.jsx)(
                    "ul",
                    ee(J({}, n), {
                        onMouseLeave: f,
                        className: o()(Q.a, {
                            [Q.uL]: u,
                            [Q.N4]: eg,
                        }),
                        children: e.map((e, t) =>
                            (0, r.jsx)(
                                Y.A,
                                {
                                    descriptor: e,
                                    soundButtonProps: {
                                        channel: a,
                                        interactive: eq ? eZ : !eR,
                                        forceSecondaryActions: !0,
                                        analyticsLocations: ey,
                                    },
                                    rowIndex: i.rowIndex,
                                    columnIndex: t,
                                    isUsingKeyboardNavigation: i.isUsingKeyboardNavigation,
                                    suppressPlaySound: X,
                                    getItemProps: s,
                                    onSelectItem: eJ,
                                    onItemMouseEnter: d,
                                    buttonOverlay: ei,
                                    isNitroLocked: u,
                                    shouldShowUpsell: $,
                                    inExpressionPicker: eh,
                                },
                                t,
                            ),
                        ),
                    }),
                    "row-".concat(n["aria-rowindex"]),
                );
            },
            [eB, $, eN, t, X, eJ, a, eq, eZ, eR, ey, ei, eY, eh, eg],
        ),
        e0 = i.useCallback(
            (e, t) => {
                if (e <= 0 || !$) return !1;
                let n = eB[e],
                    r = eB[e - 1],
                    i = ec(n.categoryInfo, eN, t),
                    a = ec(r.categoryInfo, eN, t);
                return i && !a;
            },
            [eB, $, eN],
        ),
        e1 = i.useCallback(() => {
            let e = x.A.getSoundById(es);
            null != e && eI(e);
        }, []),
        e2 = i.useCallback(() => {
            let e = (0, L.Dd)(q.PremiumTypes.TIER_2);
            return Z.intl.format(Z.t["tw/SSq"], {
                nitroTierName: e,
                onClick: e1,
            });
        }, [e1]),
        e3 = i.useCallback((e) => (e0(e, t) ? ea : er), [t, e0]),
        e6 = i.useCallback(
            (e) => {
                let t = e === eB.length - 1;
                if (eY && t)
                    if (ex.bottomBar) return 4;
                    else return 70;
                return eY && e === eH ? 20 : 0;
            },
            [eB.length, eY, eH, ex.bottomBar],
        ),
        e4 = i.useCallback(
            (e, t) =>
                (0, r.jsx)(
                    "div",
                    {
                        children: t,
                    },
                    e,
                ),
            [],
        ),
        e5 = i.useCallback(
            (e, n) => {
                let i = "".concat(e.key),
                    a = $ && ec(e.categoryInfo, eN, t),
                    o = e0(n, t),
                    s = ez.has(i),
                    l = () => {
                        D.default.track(K.HAw.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
                            location: {
                                page: K.liQ.SOUNDBOARD_POPOUT,
                            },
                            tab: z.kx.SOUNDBOARD,
                            guild_id: null != t ? t : null,
                            collapsed: !s,
                            sticker_pack_id: null,
                            num_expressions: e.items.length,
                        }),
                            eQ(i);
                    };
                return (0, r.jsx)(
                    eu,
                    {
                        categoryInfo: e.categoryInfo,
                        toggleCollapsed: l,
                        collapsed: s,
                        isSectionNitroLocked: a && eY,
                        showNitroDivider: o && eY,
                        enablePickerUpsellPremiumBrandRefresh: eg,
                    },
                    "header-".concat(i),
                );
            },
            [ez, eQ, t, e0, $, eN, eY, eg],
        ),
        e7 = i.useCallback(
            (e, t) => {
                let n = t === eB.length - 1,
                    i = t === eH;
                return eY && n && !ex.bottomBar
                    ? (0, r.jsx)("div", {
                          className: o()(Q.Lk, {
                              [Q.Ns]: i,
                              [Q.N4]: eg,
                          }),
                      })
                    : eY && t === eH
                      ? (0, r.jsx)("div", {
                            className: o()(Q.a3, {
                                [Q.Ns]: i,
                                [Q.N4]: eg,
                            }),
                        })
                      : null;
            },
            [eH, eY, eB.length, eg, ex.bottomBar],
        ),
        e8 = i.useCallback((e) => eG((0, F.lG)(e, ej, eC, a, ey)), [a, eC, ej, ey]),
        e9 = i.useCallback(
            (e) => {
                (0, u.L3)(e, async () => {
                    let { default: e } = await n.e("51111").then(n.bind(n, 323002));
                    return (t) =>
                        (0, r.jsx)(
                            e,
                            J(
                                {
                                    sourceAnalyticsLocations: ey,
                                },
                                t,
                            ),
                        );
                });
            },
            [ey],
        ),
        te = i.useCallback(
            () =>
                eh
                    ? (0, r.jsx)(v.Gq, {
                          renderPopout: () => (0, r.jsx)(v.qn, {}),
                          tooltipText: Z.intl.string(Z.t["19lt24"]),
                          position: "top",
                          clickableClassName: o()(Q.Jm, Q.Zz),
                          children: (0, r.jsx)(c.HKD, {
                              size: "md",
                              color: "currentColor",
                              className: Q.By,
                          }),
                      })
                    : (0, r.jsx)(c.DUT, {
                          tabIndex: 0,
                          className: Q.Jm,
                          onClick: e9,
                          "aria-label": Z.intl.string(Z.t.kbFsAD),
                          children: (0, r.jsx)(c.HKD, {
                              size: "md",
                              color: "currentColor",
                              className: Q.By,
                          }),
                      }),
            [eh, e9],
        ),
        tt = i.useCallback(
            (e) => {
                let n = eM.filter((e) => !eW || e.categoryInfo.type !== M.Cx.DEFAULTS),
                    i = eB.findIndex((e) => e.categoryInfo.type === M.Cx.DEFAULTS);
                return (0, r.jsx)(B.A, {
                    soundboardListRef: e,
                    categories: n,
                    shouldUpsellLockedCategories: eY,
                    listPadding: ef,
                    guildId: t,
                    inExpressionPicker: eh,
                    showPinnedDefaultsShortcut: eW,
                    hasBottomBarUpsell: ex.bottomBar && eY,
                    defaultsSectionIndex: i,
                });
            },
            [eM, eB, ef, eY, t, eh, eW, ex.bottomBar],
        ),
        tn = i.useCallback(() => {
            var e;
            let t = (0, O.qD)();
            return null != (e = (0, L.LE)(t, q.pe.TIER_2)) ? e : Z.intl.string(Z.t.pj0XBN);
        }, []),
        tr = i.useCallback(() => {
            if (ex.bottomBar) return null;
            if (eY) {
                let e = eV;
                return (
                    ex.enabled && (e = !0),
                    (0, r.jsx)(A.d, {
                        showUpsell: e,
                        text: e2(),
                        button: tn(),
                        buttonAnalyticsObject: {
                            section: K.JJy.SOUND_PICKER_FLOATING_UPSELL,
                        },
                        hoveredNitroLockedSound: eS,
                    })
                );
            }
            return null;
        }, [e2, tn, eY, ex.enabled, ex.bottomBar, eV, eS]),
        ti = i.useCallback(
            (e) => {
                var t;
                return (null == e ? void 0 : e.item.type) !== M.uq.SOUND
                    ? null
                    : (0, r.jsx)(H.A, {
                          closePicker: g,
                          soundboardSound: null != (t = null == e ? void 0 : e.item.sound) ? t : null,
                      });
            },
            [g],
        ),
        ta = "https://cdn.discordapp.com/assets/premium/roadblocks/soundboard_dark.png",
        to = i.useCallback(() => {
            var e;
            let t = x.A.getSoundById(es),
                n = new Audio((0, U.A)(es));
            null != eE.current && eE.current.pause(),
                (eE.current = n),
                (n.currentTime = 0),
                (n.volume = (0, G.A)(null != (e = null == t ? void 0 : t.volume) ? e : 1)),
                n.play();
        }, [eE]),
        ts = (0, l.bG)([N.A], () => N.A.getMediaSessionId());
    return (
        (0, h.A)({
            type: s.ImpressionTypes.POPOUT,
            name: s.ImpressionNames.SOUNDBOARD_POPOUT,
            properties: {
                source: em,
                guild_id: t,
                media_session_id: ts,
                available_custom_sounds_count: ek.unlockedCustomSoundCount,
                unavailable_custom_sounds_count: ek.lockedCustomSoundCount,
                favorite_sounds_count: ek.favoriteSoundCount,
            },
        }),
        (0, r.jsxs)(r.Fragment, {
            children: [
                null != eA
                    ? (0, r.jsx)(S.A, {
                          containerContext: eh ? S.N.TAB_PARENT_CONTAINER : S.N.NONE,
                          image: {
                              url: ta,
                              width: 220,
                              height: 132,
                          },
                          title: Z.intl.string(eh ? Z.t.rZEEvU : Z.t.jGDYF0),
                          description: Z.intl.string(eh ? Z.t.ZPNG5A : Z.t["grL/hg"]),
                          enableSocialProof: !0,
                          analyticsLocationSection: K.JJy.SOUNDBOARD_SOUND_PICKER_UPSELL,
                          upsellViewedTrackingData: {
                              type: q.e.SOUND_PICKER_SOUND_CLICKED,
                              is_external: !0,
                              location: ee(J({}, ev), {
                                  object: K.ZSU.SOUNDBOARD_SOUND,
                              }),
                              location_stack: eb,
                              sku_id: L.Ay.getSkuIdForPremiumType(q.PremiumTypes.TIER_2),
                          },
                          onClose: () => eI(null),
                          onLearnMore: g,
                          onDisplay: to,
                      })
                    : void 0,
                (0, r.jsx)(b.A, {
                    categories: eB,
                    collapsedCategories: ez,
                    containerWidth: d,
                    store: E.LW,
                    onSelectItem: eJ,
                    onSearchExpressions: e8,
                    hasSearchResults: eU.length > 0,
                    defaultSearchPlaceholder: Z.intl.string(Z.t.sKt3xS),
                    renderRow: e$,
                    renderSectionHeader: e5,
                    renderSectionFooter: e7,
                    renderSection: e4,
                    renderCategoryList: tt,
                    renderHeaderAccessories: te,
                    rowHeight: en,
                    sectionHeaderHeight: e3,
                    sectionFooterHeight: e6,
                    itemNodeWidth: eo,
                    gridNavigatorId: eL,
                    renderEmptySearchState: ed,
                    renderInspector: ti,
                    gridNotice: et,
                    renderHeader: ep,
                    renderUpsell: tr,
                }),
                ex.bottomBar &&
                    eY &&
                    (0, r.jsx)(A.d, {
                        showUpsell: !0,
                        text: e2(),
                        button: tn(),
                        buttonAnalyticsObject: {
                            section: K.JJy.SOUND_PICKER_FLOATING_UPSELL,
                        },
                        hoveredNitroLockedSound: eS,
                        position: "bottom",
                    }),
            ],
        })
    );
}
