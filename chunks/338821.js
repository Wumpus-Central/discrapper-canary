"use strict";
n.d(t, { A: () => el, B: () => es }), n(30146);
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(110259),
    l = n(311907),
    u = n(397927),
    c = n(442433),
    d = n(537652),
    _ = n(212245),
    f = n(793574),
    p = n(688810),
    h = n(139286),
    m = n(915089),
    E = n(724511),
    g = n(850992),
    A = n(151271),
    I = n(836963),
    T = n(89366),
    S = n(105713),
    y = n(202639),
    v = n(414872),
    N = n(421162),
    C = n(523006),
    b = n(253932),
    R = n(383501),
    O = n(287809),
    D = n(977997),
    L = n(147925),
    w = n(954571),
    x = n(927578),
    M = n(209932),
    P = n(807348),
    k = n(766708),
    U = n(536432),
    G = n(102597),
    F = n(904054),
    V = n(147472),
    B = n(918530),
    H = n(114028),
    j = n(862933),
    Y = n(985417),
    W = n(797179),
    K = n(652215),
    z = n(698279),
    $ = n(788868),
    q = n(985018),
    Z = n(426889);
let X = 16,
    Q = 48,
    J = 32,
    ee = 8,
    et = 32 + v.kg - ee,
    en = 150,
    er = "3",
    ei = {
        [P.Cx.SEARCH]: f.A.SOUNDBOARD_SEARCH_RESULTS_SECTION,
        [P.Cx.DEFAULTS]: f.A.SOUNDBOARD_DEFAULT_SOUNDS_SECTION,
        [P.Cx.GUILD]: f.A.SOUNDBOARD_GUILD_SOUNDS_SECTION,
        [P.Cx.FAVORITES]: f.A.SOUNDBOARD_FAVORITES_SECTION,
    };
function es(e, t, n) {
    return (null == n && e.type === P.Cx.GUILD && !t) || (e.type === P.Cx.GUILD && e.guild.id !== n && !t);
}
function ea(e) {
    let {
        categoryInfo: t,
        collapsed: n,
        toggleCollapsed: i,
        isSectionNitroLocked: s,
        showNitroDivider: o,
        enablePickerUpsellPremiumBrandRefresh: l,
    } = e;
    function c() {
        switch (t.type) {
            case P.Cx.FAVORITES:
                return (0, r.jsx)(u.Gg5, { size: "xs", color: "currentColor", className: Z.nr });
            case P.Cx.GUILD:
                return (0, r.jsx)(E.A, { guild: t.guild, height: X, width: X });
            case P.Cx.DEFAULTS:
                return (0, r.jsx)(u.pVd, {
                    size: "custom",
                    width: 28,
                    height: 28,
                    color: "currentColor",
                    className: Z.nr,
                });
            case P.Cx.SEARCH:
                return (0, r.jsx)(u.$p$, { size: "md", color: "currentColor", className: Z.nr });
        }
    }
    function d() {
        switch (t.type) {
            case P.Cx.FAVORITES:
                return q.intl.string(q.t.k8fFjp);
            case P.Cx.GUILD:
                return t.guild.name;
            case P.Cx.DEFAULTS:
                return q.intl.string(q.t.Rtvk9X);
            case P.Cx.SEARCH:
                return q.intl.string(q.t["zkoeq/"]);
        }
    }
    return (0, r.jsxs)(r.Fragment, {
        children: [
            o && (0, r.jsx)(v.Ay, { colorOpacity: 0.35, glowOpacity: 0.35, className: Z.yH, enableBrandRefresh: l }),
            (0, r.jsx)("div", {
                className: a()(Z.hd, { [Z.Jb]: s, [Z.VD]: s, [Z.N4]: l }),
                children: (0, r.jsx)(u.DUT, {
                    className: Z.bV,
                    onClick: i,
                    "aria-expanded": !n,
                    children: (0, r.jsxs)("div", {
                        className: Z.M2,
                        children: [
                            c(),
                            (0, r.jsx)(u.Heading, {
                                variant: "text-sm/semibold",
                                color: "none",
                                className: Z.Gf,
                                children: d(),
                            }),
                            (0, r.jsx)(L.A, {
                                className: Z.nr,
                                direction: n ? L.A.Directions.RIGHT : L.A.Directions.DOWN,
                            }),
                        ],
                    }),
                }),
            }),
        ],
    });
}
function eo() {
    return (0, r.jsx)(d.A, { message: q.intl.string(q.t.bgDdNK) });
}
function el(e) {
    let {
            guildId: t,
            channel: s,
            containerWidth: d,
            onClose: E,
            onSelect: v,
            shouldValidateSelectedSound: L = !1,
            suppressPlaySound: X = !1,
            shouldShowUpsell: ee = !0,
            gridNotice: el,
            soundButtonOverlay: eu,
            listPadding: ec,
            renderHeader: ed,
            defaultSoundsOnly: e_ = !1,
            inExpressionPicker: ef,
            analyticsSource: ep,
            enablePickerUpsellPremiumBrandRefresh: eh,
        } = e,
        { audioRef: em } = i.useContext(C.A),
        { analyticsLocations: eE } = (0, p.Ay)(),
        { analyticsLocations: eg } = (0, p.Ay)(f.A.PREMIUM_UPSELL),
        { location: eA } = (0, _.p)(),
        eI = i.useMemo(() => ({ ...eA, section: K.JJy.SOUNDBOARD_SOUND_PICKER }), [eA]),
        [eT, eS] = i.useState(null),
        [ey, ev] = i.useState(null),
        eN = (0, l.bG)([O.default], () => O.default.getCurrentUser()),
        eC = (0, x.TW)(eN, $.PremiumTypes.TIER_2),
        eb = (0, l.bG)([D.A], () => D.A.getVoiceState(t, eN?.id ?? K.dJq)),
        eR = eb?.selfDeaf || eb?.mute || eb?.suppress,
        eO = (0, A.RQ)((e) => e.searchQuery),
        eD = null != eO && "" !== eO,
        eL = (0, m.GV)(),
        ew = k.r.useConfig({ location: "SoundboardSoundGrid" }),
        {
            categories: ex,
            availableSounds: eM,
            soundCounts: eP,
        } = (0, B.A)(s, { moveDefaultsToBottom: ew.enabled }, e_),
        [ek, eU] = i.useState([]),
        eG = (0, B.I)(ex, ek, eO),
        eF = (0, A.RQ)((e) => e.isNitroLockedSectionVisible),
        eV = i.useMemo(() => eG.filter((e) => e.items.length > 0), [eG]),
        eB = i.useMemo(
            () => eV.findLastIndex((e) => !!(0, x.Em)(e.categoryInfo) && e.categoryInfo.isNitroLocked),
            [eV],
        ),
        eH = !eC && ee && -1 !== eB,
        ej = !eC && ew.enabled && !ew.bottomBar && ex.length > 6,
        eY = b.b0.useSetting(),
        eW = i.useMemo(() => new Set(eY), [eY]),
        eK = null == s,
        ez = x.Ay.canUseCustomCallSounds(eN),
        e$ = i.useCallback(
            (e) => {
                eW.has(e) ? eW.delete(e) : eW.add(e), b.b0.updateSetting(Array.from(eW));
            },
            [eW],
        ),
        eq = i.useCallback(
            (e, t, n, r) => {
                if (null != v && !L) return v(e, n);
                let i = (0, U.Ir)(eN, e, s, !1);
                if (null != v && L && i) v(e, n);
                else if (!X && i && (0, U.Au)(s))
                    (0, U.Ak)(e, s?.id ?? K.dJq, t, r),
                        eD &&
                            w.default.track(K.HAw.SEARCH_RESULT_SELECTED, {
                                search_type: K.I4_.SOUNDBOARD,
                                channel_id: s?.id,
                                query: eO,
                                location_stack: t,
                            });
                else {
                    if ((0, U.Ir)(eN, e, s)) return;
                    ee && eS(e);
                }
            },
            [X, eN, s, ee, eD, eO, v, L],
        ),
        eZ = i.useCallback(
            (e, t) => {
                switch (e.item.type) {
                    case P.uq.SOUND:
                        let n = ei[e?.category] ?? null,
                            r = e?.item.index;
                        return eq(e.item.sound, null == n ? eE : [...eE, n], t?.shiftKey !== !0, r);
                    case P.uq.ADD_SOUND:
                        return E(), (0, W.A)(e.item.guild.id);
                }
            },
            [eE, eq, E],
        ),
        eX = i.useCallback(
            (e, n, i, o, l) => {
                let u = eV[i.sectionIndex],
                    c = ee && es(u.categoryInfo, eC, t) && eH,
                    d = (t) => {
                        l(t);
                        let n = e[t];
                        c && n?.item.type === P.uq.SOUND ? ev(n.item.sound) : ev(null);
                    },
                    _ = () => {
                        ev(null);
                    };
                return (0, r.jsx)(
                    "ul",
                    {
                        ...n,
                        onMouseLeave: _,
                        className: a()(Z.a, { [Z.uL]: c, [Z.N4]: eh }),
                        children: e.map((e, t) =>
                            (0, r.jsx)(
                                Y.A,
                                {
                                    descriptor: e,
                                    soundButtonProps: {
                                        channel: s,
                                        interactive: eK ? ez : !eR,
                                        forceSecondaryActions: !0,
                                        analyticsLocations: eE,
                                    },
                                    rowIndex: i.rowIndex,
                                    columnIndex: t,
                                    isUsingKeyboardNavigation: i.isUsingKeyboardNavigation,
                                    suppressPlaySound: X,
                                    getItemProps: o,
                                    onSelectItem: eZ,
                                    onItemMouseEnter: d,
                                    buttonOverlay: eu,
                                    isNitroLocked: c,
                                    shouldShowUpsell: ee,
                                    inExpressionPicker: ef,
                                },
                                t,
                            ),
                        ),
                    },
                    `row-${n["aria-rowindex"]}`,
                );
            },
            [eV, ee, eC, t, X, eZ, s, eK, ez, eR, eE, eu, eH, ef, eh],
        ),
        eQ = i.useCallback(
            (e, t) => {
                if (e <= 0 || !ee) return !1;
                let n = eV[e],
                    r = eV[e - 1],
                    i = es(n.categoryInfo, eC, t),
                    s = es(r.categoryInfo, eC, t);
                return i && !s;
            },
            [eV, ee, eC],
        ),
        eJ = i.useCallback(() => {
            let e = M.A.getSoundById(er);
            null != e && eS(e);
        }, []),
        e0 = i.useCallback(() => {
            let e = (0, x.Dd)($.PremiumTypes.TIER_2);
            return q.intl.format(q.t["tw/SSq"], { nitroTierName: e, onClick: eJ });
        }, [eJ]),
        e1 = i.useCallback((e) => (eQ(e, t) ? et : J), [t, eQ]),
        e2 = i.useCallback(
            (e) => {
                let t = e === eV.length - 1;
                if (eH && t)
                    if (ew.bottomBar) return 4;
                    else return 70;
                return eH && e === eB ? 20 : 0;
            },
            [eV.length, eH, eB, ew.bottomBar],
        ),
        e3 = i.useCallback((e, t) => (0, r.jsx)("div", { children: t }, e), []),
        e6 = i.useCallback(
            (e, n) => {
                let i = `${e.key}`,
                    s = ee && es(e.categoryInfo, eC, t),
                    a = eQ(n, t),
                    o = eW.has(i),
                    l = () => {
                        w.default.track(K.HAw.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
                            location: { page: K.liQ.SOUNDBOARD_POPOUT },
                            tab: z.kx.SOUNDBOARD,
                            guild_id: t ?? null,
                            collapsed: !o,
                            sticker_pack_id: null,
                            num_expressions: e.items.length,
                        }),
                            e$(i);
                    };
                return (0, r.jsx)(
                    ea,
                    {
                        categoryInfo: e.categoryInfo,
                        toggleCollapsed: l,
                        collapsed: o,
                        isSectionNitroLocked: s && eH,
                        showNitroDivider: a && eH,
                        enablePickerUpsellPremiumBrandRefresh: eh,
                    },
                    `header-${i}`,
                );
            },
            [eW, e$, t, eQ, ee, eC, eH, eh],
        ),
        e4 = i.useCallback(
            (e, t) => {
                let n = t === eV.length - 1,
                    i = t === eB;
                return eH && n && !ew.bottomBar
                    ? (0, r.jsx)("div", { className: a()(Z.Lk, { [Z.Ns]: i, [Z.N4]: eh }) })
                    : eH && t === eB
                      ? (0, r.jsx)("div", { className: a()(Z.a3, { [Z.Ns]: i, [Z.N4]: eh }) })
                      : null;
            },
            [eB, eH, eV.length, eh, ew.bottomBar],
        ),
        e5 = i.useCallback((e) => eU((0, V.lG)(e, eM, eN, s, eE)), [s, eN, eM, eE]),
        e7 = i.useCallback(
            (e) => {
                (0, c.L3)(e, async () => {
                    let { default: e } = await n.e("51111").then(n.bind(n, 323002));
                    return (t) => (0, r.jsx)(e, { sourceAnalyticsLocations: eE, ...t });
                });
            },
            [eE],
        ),
        e8 = i.useCallback(
            () =>
                ef
                    ? (0, r.jsx)(S.Gq, {
                          renderPopout: () => (0, r.jsx)(S.qn, {}),
                          tooltipText: q.intl.string(q.t["19lt24"]),
                          position: "top",
                          clickableClassName: a()(Z.Jm, Z.Zz),
                          children: (0, r.jsx)(u.HKD, { size: "md", color: "currentColor", className: Z.By }),
                      })
                    : (0, r.jsx)(u.DUT, {
                          tabIndex: 0,
                          className: Z.Jm,
                          onClick: e7,
                          "aria-label": q.intl.string(q.t.kbFsAD),
                          children: (0, r.jsx)(u.HKD, { size: "md", color: "currentColor", className: Z.By }),
                      }),
            [ef, e7],
        ),
        e9 = i.useCallback(
            (e) => {
                let n = ex.filter((e) => !ej || e.categoryInfo.type !== P.Cx.DEFAULTS),
                    i = eV.findIndex((e) => e.categoryInfo.type === P.Cx.DEFAULTS);
                return (0, r.jsx)(H.A, {
                    soundboardListRef: e,
                    categories: n,
                    shouldUpsellLockedCategories: eH,
                    listPadding: ec,
                    guildId: t,
                    inExpressionPicker: ef,
                    showPinnedDefaultsShortcut: ej,
                    hasBottomBarUpsell: ew.bottomBar && eH,
                    defaultsSectionIndex: i,
                });
            },
            [ex, eV, ec, eH, t, ef, ej, ew.bottomBar],
        ),
        te = i.useCallback(() => {
            let e = (0, T.qD)();
            return (0, x.LE)(e, $.pe.TIER_2) ?? q.intl.string(q.t.pj0XBN);
        }, []),
        tt = i.useCallback(() => {
            if (ew.bottomBar) return null;
            if (eH) {
                let e = eF;
                return (
                    ew.enabled && (e = !0),
                    (0, r.jsx)(y.d, {
                        showUpsell: e,
                        text: e0(),
                        button: te(),
                        buttonAnalyticsObject: { section: K.JJy.SOUND_PICKER_FLOATING_UPSELL },
                        useGradientBg: ew.enabled,
                        hoveredNitroLockedSound: ey,
                    })
                );
            }
            return null;
        }, [e0, te, eH, ew.enabled, ew.bottomBar, eF, ey]),
        tn = i.useCallback(
            (e) =>
                e?.item.type === P.uq.SOUND
                    ? (0, r.jsx)(j.A, { closePicker: E, soundboardSound: e?.item.sound ?? null })
                    : null,
            [E],
        ),
        tr = "https://cdn.discordapp.com/assets/premium/roadblocks/soundboard_dark.png",
        ti = i.useCallback(() => {
            let e = M.A.getSoundById(er),
                t = new Audio((0, G.A)(er));
            null != em.current && em.current.pause(),
                (em.current = t),
                (t.currentTime = 0),
                (t.volume = (0, F.A)(e?.volume ?? 1)),
                t.play();
        }, [em]),
        ts = (0, l.bG)([R.A], () => R.A.getMediaSessionId());
    return (
        (0, h.A)({
            type: o.ImpressionTypes.POPOUT,
            name: o.ImpressionNames.SOUNDBOARD_POPOUT,
            properties: {
                source: ep,
                guild_id: t,
                media_session_id: ts,
                available_custom_sounds_count: eP.unlockedCustomSoundCount,
                unavailable_custom_sounds_count: eP.lockedCustomSoundCount,
                favorite_sounds_count: eP.favoriteSoundCount,
            },
        }),
        (0, r.jsxs)(r.Fragment, {
            children: [
                null != eT
                    ? (0, r.jsx)(N.A, {
                          containerContext: ef ? N.N.TAB_PARENT_CONTAINER : N.N.NONE,
                          image: { url: tr, width: 220, height: 132 },
                          title: q.intl.string(ef ? q.t.rZEEvU : q.t.jGDYF0),
                          description: q.intl.string(ef ? q.t.ZPNG5A : q.t["grL/hg"]),
                          enableSocialProof: !0,
                          analyticsLocationSection: K.JJy.SOUNDBOARD_SOUND_PICKER_UPSELL,
                          upsellViewedTrackingData: {
                              type: $.e.SOUND_PICKER_SOUND_CLICKED,
                              is_external: !0,
                              location: { ...eI, object: K.ZSU.SOUNDBOARD_SOUND },
                              location_stack: eg,
                              sku_id: x.Ay.getSkuIdForPremiumType($.PremiumTypes.TIER_2),
                          },
                          onClose: () => eS(null),
                          onLearnMore: E,
                          onDisplay: ti,
                      })
                    : void 0,
                (0, r.jsx)(I.A, {
                    categories: eV,
                    collapsedCategories: eW,
                    containerWidth: d,
                    store: g.LW,
                    onSelectItem: eZ,
                    onSearchExpressions: e5,
                    hasSearchResults: ek.length > 0,
                    defaultSearchPlaceholder: q.intl.string(q.t.sKt3xS),
                    renderRow: eX,
                    renderSectionHeader: e6,
                    renderSectionFooter: e4,
                    renderSection: e3,
                    renderCategoryList: e9,
                    renderHeaderAccessories: e8,
                    rowHeight: Q,
                    sectionHeaderHeight: e1,
                    sectionFooterHeight: e2,
                    itemNodeWidth: en,
                    gridNavigatorId: eL,
                    renderEmptySearchState: eo,
                    renderInspector: tn,
                    gridNotice: el,
                    renderHeader: ed,
                    renderUpsell: tt,
                }),
                ew.bottomBar &&
                    eH &&
                    (0, r.jsx)(y.d, {
                        showUpsell: !0,
                        text: e0(),
                        button: te(),
                        buttonAnalyticsObject: { section: K.JJy.SOUND_PICKER_FLOATING_UPSELL },
                        useGradientBg: !0,
                        hoveredNitroLockedSound: ey,
                        position: "bottom",
                    }),
            ],
        })
    );
}
