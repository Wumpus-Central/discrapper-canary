"use strict";
n.d(t, { A: () => el, B: () => ea }), n(30146);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
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
    g = n(724511),
    E = n(850992),
    A = n(151271),
    I = n(836963),
    T = n(89366),
    y = n(105713),
    S = n(202639),
    v = n(414872),
    C = n(421162),
    b = n(523006),
    N = n(253932),
    R = n(383501),
    O = n(287809),
    D = n(977997),
    L = n(147925),
    w = n(954571),
    x = n(927578),
    P = n(209932),
    M = n(807348),
    k = n(766708),
    U = n(536432),
    G = n(102597),
    V = n(904054),
    F = n(147472),
    B = n(918530),
    j = n(114028),
    H = n(862933),
    Y = n(985417),
    W = n(797179),
    K = n(652215),
    z = n(698279),
    $ = n(788868),
    q = n(985018),
    Z = n(426889);
let Q = 16,
    X = 48,
    J = 32,
    ee = 8,
    et = 32 + v.kg - ee,
    en = 150,
    er = "3",
    ei = {
        [M.Cx.SEARCH]: f.A.SOUNDBOARD_SEARCH_RESULTS_SECTION,
        [M.Cx.DEFAULTS]: f.A.SOUNDBOARD_DEFAULT_SOUNDS_SECTION,
        [M.Cx.GUILD]: f.A.SOUNDBOARD_GUILD_SOUNDS_SECTION,
        [M.Cx.FAVORITES]: f.A.SOUNDBOARD_FAVORITES_SECTION,
        [M.Cx.RECENTLY_HEARD]: f.A.SOUNDBOARD_RECENTLY_HEARD_SECTION,
        [M.Cx.FREQUENTLY_USED]: f.A.SOUNDBOARD_FREQUENTLY_USED_SECTION,
    };
function ea(e, t, n) {
    return (null == n && e.type === M.Cx.GUILD && !t) || (e.type === M.Cx.GUILD && e.guild.id !== n && !t);
}
function es(e) {
    let {
        categoryInfo: t,
        collapsed: n,
        toggleCollapsed: i,
        isSectionNitroLocked: a,
        showNitroDivider: o,
        enablePickerUpsellPremiumBrandRefresh: l,
    } = e;
    function c() {
        switch (t.type) {
            case M.Cx.FAVORITES:
                return (0, r.jsx)(u.Gg5, { size: "xs", color: "currentColor", className: Z.nr });
            case M.Cx.RECENTLY_HEARD:
                return (0, r.jsx)(u.O4, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: "currentColor",
                    className: Z.nr,
                });
            case M.Cx.FREQUENTLY_USED:
                return (0, r.jsx)(u.Uy2, { className: Z.nr });
            case M.Cx.GUILD:
                return (0, r.jsx)(g.A, { guild: t.guild, height: Q, width: Q });
            case M.Cx.DEFAULTS:
                return (0, r.jsx)(u.pVd, {
                    size: "custom",
                    width: 28,
                    height: 28,
                    color: "currentColor",
                    className: Z.nr,
                });
            case M.Cx.SEARCH:
                return (0, r.jsx)(u.$p$, { size: "md", color: "currentColor", className: Z.nr });
        }
    }
    function d() {
        switch (t.type) {
            case M.Cx.FAVORITES:
                return q.intl.string(q.t.k8fFjp);
            case M.Cx.RECENTLY_HEARD:
                return q.intl.string(q.t["8i/+SA"]);
            case M.Cx.FREQUENTLY_USED:
                return q.intl.string(q.t["+cGVV6"]);
            case M.Cx.GUILD:
                return t.guild.name;
            case M.Cx.DEFAULTS:
                return q.intl.string(q.t.Rtvk9X);
            case M.Cx.SEARCH:
                return q.intl.string(q.t["zkoeq/"]);
        }
    }
    return (0, r.jsxs)(r.Fragment, {
        children: [
            o && (0, r.jsx)(v.Ay, { colorOpacity: 0.35, glowOpacity: 0.35, className: Z.yH, enableBrandRefresh: l }),
            (0, r.jsx)("div", {
                className: s()(Z.hd, { [Z.Jb]: a, [Z.VD]: a, [Z.N4]: l }),
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
            channel: a,
            containerWidth: d,
            onClose: g,
            onSelect: v,
            shouldValidateSelectedSound: L = !1,
            suppressPlaySound: Q = !1,
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
        { audioRef: em } = i.useContext(b.A),
        { analyticsLocations: eg } = (0, p.Ay)(),
        { analyticsLocations: eE } = (0, p.Ay)(f.A.PREMIUM_UPSELL),
        { location: eA } = (0, _.p)(),
        eI = i.useMemo(() => ({ ...eA, section: K.JJy.SOUNDBOARD_SOUND_PICKER }), [eA]),
        [eT, ey] = i.useState(null),
        [eS, ev] = i.useState(null),
        eC = (0, l.bG)([O.default], () => O.default.getCurrentUser()),
        eb = (0, x.TW)(eC, $.PremiumTypes.TIER_2),
        eN = (0, l.bG)([D.A], () => D.A.getVoiceState(t, eC?.id ?? K.dJq)),
        eR = eN?.selfDeaf || eN?.mute || eN?.suppress,
        eO = (0, A.RQ)((e) => e.searchQuery),
        eD = null != eO && "" !== eO,
        eL = (0, m.GV)(),
        ew = k.r.useConfig({ location: "SoundboardSoundGrid" }),
        {
            categories: ex,
            availableSounds: eP,
            soundCounts: eM,
        } = (0, B.Ay)(a, { moveDefaultsToBottom: ew.enabled }, e_),
        [ek, eU] = i.useState([]),
        eG = (0, B.Ip)(ex, ek, eO),
        eV = (0, A.RQ)((e) => e.isNitroLockedSectionVisible),
        eF = i.useMemo(() => eG.filter((e) => e.items.length > 0), [eG]),
        eB = i.useMemo(
            () => eF.findLastIndex((e) => !!(0, x.Em)(e.categoryInfo) && e.categoryInfo.isNitroLocked),
            [eF],
        ),
        ej = !eb && ee && -1 !== eB,
        eH = !eb && ew.enabled && !ew.bottomBar && ex.length > 6,
        eY = N.b0.useSetting(),
        eW = i.useMemo(() => new Set(eY), [eY]),
        eK = null == a,
        ez = x.Ay.canUseCustomCallSounds(eC),
        e$ = i.useCallback(
            (e) => {
                eW.has(e) ? eW.delete(e) : eW.add(e), N.b0.updateSetting(Array.from(eW));
            },
            [eW],
        ),
        eq = i.useCallback(
            (e, t, n, r) => {
                if (null != v && !L) return v(e, n);
                let i = (0, U.Ir)(eC, e, a, !1);
                if (null != v && L && i) v(e, n);
                else if (!Q && i && (0, U.Au)(a))
                    (0, U.Ak)(e, a?.id ?? K.dJq, t, r),
                        eD &&
                            w.default.track(K.HAw.SEARCH_RESULT_SELECTED, {
                                search_type: K.I4_.SOUNDBOARD,
                                channel_id: a?.id,
                                query: eO,
                                location_stack: t,
                            });
                else {
                    if ((0, U.Ir)(eC, e, a)) return;
                    ee && ey(e);
                }
            },
            [Q, eC, a, ee, eD, eO, v, L],
        ),
        eZ = i.useCallback(
            (e, t) => {
                switch (e.item.type) {
                    case M.uq.SOUND:
                        let n = ei[e?.category] ?? null,
                            r = e?.item.index;
                        return eq(e.item.sound, null == n ? eg : [...eg, n], t?.shiftKey !== !0, r);
                    case M.uq.ADD_SOUND:
                        return g(), (0, W.A)(e.item.guild.id);
                }
            },
            [eg, eq, g],
        ),
        eQ = i.useCallback(
            (e, n, i, o, l) => {
                let u = eF[i.sectionIndex],
                    c = ee && ea(u.categoryInfo, eb, t) && ej,
                    d = (t) => {
                        l(t);
                        let n = e[t];
                        c && n?.item.type === M.uq.SOUND ? ev(n.item.sound) : ev(null);
                    },
                    _ = () => {
                        ev(null);
                    };
                return (0, r.jsx)(
                    "ul",
                    {
                        ...n,
                        onMouseLeave: _,
                        className: s()(Z.a, { [Z.uL]: c, [Z.N4]: eh }),
                        children: e.map((e, t) =>
                            (0, r.jsx)(
                                Y.A,
                                {
                                    descriptor: e,
                                    soundButtonProps: {
                                        channel: a,
                                        interactive: eK ? ez : !eR,
                                        forceSecondaryActions: !0,
                                        analyticsLocations: eg,
                                    },
                                    rowIndex: i.rowIndex,
                                    columnIndex: t,
                                    isUsingKeyboardNavigation: i.isUsingKeyboardNavigation,
                                    suppressPlaySound: Q,
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
            [eF, ee, eb, t, Q, eZ, a, eK, ez, eR, eg, eu, ej, ef, eh],
        ),
        eX = i.useCallback(
            (e, t) => {
                if (e <= 0 || !ee) return !1;
                let n = eF[e],
                    r = eF[e - 1],
                    i = ea(n.categoryInfo, eb, t),
                    a = ea(r.categoryInfo, eb, t);
                return i && !a;
            },
            [eF, ee, eb],
        ),
        eJ = i.useCallback(() => {
            let e = P.A.getSoundById(er);
            null != e && ey(e);
        }, []),
        e0 = i.useCallback(() => {
            let e = (0, x.Dd)($.PremiumTypes.TIER_2);
            return q.intl.format(q.t["tw/SSq"], { nitroTierName: e, onClick: eJ });
        }, [eJ]),
        e1 = i.useCallback((e) => (eX(e, t) ? et : J), [t, eX]),
        e2 = i.useCallback(
            (e) => {
                let t = e === eF.length - 1;
                if (ej && t)
                    if (ew.bottomBar) return 4;
                    else return 70;
                return ej && e === eB ? 20 : 0;
            },
            [eF.length, ej, eB, ew.bottomBar],
        ),
        e3 = i.useCallback((e, t) => (0, r.jsx)("div", { children: t }, e), []),
        e6 = i.useCallback(
            (e, n) => {
                let i = `${e.key}`,
                    a = ee && ea(e.categoryInfo, eb, t),
                    s = eX(n, t),
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
                    es,
                    {
                        categoryInfo: e.categoryInfo,
                        toggleCollapsed: l,
                        collapsed: o,
                        isSectionNitroLocked: a && ej,
                        showNitroDivider: s && ej,
                        enablePickerUpsellPremiumBrandRefresh: eh,
                    },
                    `header-${i}`,
                );
            },
            [eW, e$, t, eX, ee, eb, ej, eh],
        ),
        e4 = i.useCallback(
            (e, t) => {
                let n = t === eF.length - 1,
                    i = t === eB;
                return ej && n && !ew.bottomBar
                    ? (0, r.jsx)("div", { className: s()(Z.Lk, { [Z.Ns]: i, [Z.N4]: eh }) })
                    : ej && t === eB
                      ? (0, r.jsx)("div", { className: s()(Z.a3, { [Z.Ns]: i, [Z.N4]: eh }) })
                      : null;
            },
            [eB, ej, eF.length, eh, ew.bottomBar],
        ),
        e5 = i.useCallback((e) => eU((0, F.lG)(e, eP, eC, a, eg)), [a, eC, eP, eg]),
        e7 = i.useCallback(
            (e) => {
                (0, c.L3)(e, async () => {
                    let { default: e } = await n.e("51111").then(n.bind(n, 323002));
                    return (t) => (0, r.jsx)(e, { sourceAnalyticsLocations: eg, ...t });
                });
            },
            [eg],
        ),
        e8 = i.useCallback(
            () =>
                ef
                    ? (0, r.jsx)(y.Gq, {
                          renderPopout: () => (0, r.jsx)(y.qn, {}),
                          tooltipText: q.intl.string(q.t["19lt24"]),
                          position: "top",
                          clickableClassName: s()(Z.Jm, Z.Zz),
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
                let n = ex.filter((e) => !eH || e.categoryInfo.type !== M.Cx.DEFAULTS),
                    i = eF.findIndex((e) => e.categoryInfo.type === M.Cx.DEFAULTS);
                return (0, r.jsx)(j.A, {
                    soundboardListRef: e,
                    categories: n,
                    shouldUpsellLockedCategories: ej,
                    listPadding: ec,
                    guildId: t,
                    inExpressionPicker: ef,
                    showPinnedDefaultsShortcut: eH,
                    hasBottomBarUpsell: ew.bottomBar && ej,
                    defaultsSectionIndex: i,
                });
            },
            [ex, eF, ec, ej, t, ef, eH, ew.bottomBar],
        ),
        te = i.useCallback(() => {
            let e = (0, T.qD)();
            return (0, x.LE)(e, $.pe.TIER_2) ?? q.intl.string(q.t.pj0XBN);
        }, []),
        tt = i.useCallback(() => {
            if (ew.bottomBar) return null;
            if (ej) {
                let e = eV;
                return (
                    ew.enabled && (e = !0),
                    (0, r.jsx)(S.d, {
                        showUpsell: e,
                        text: e0(),
                        button: te(),
                        buttonAnalyticsObject: { section: K.JJy.SOUND_PICKER_FLOATING_UPSELL },
                        useGradientBg: ew.enabled,
                        hoveredNitroLockedSound: eS,
                    })
                );
            }
            return null;
        }, [e0, te, ej, ew.enabled, ew.bottomBar, eV, eS]),
        tn = i.useCallback(
            (e) =>
                e?.item.type === M.uq.SOUND
                    ? (0, r.jsx)(H.A, { closePicker: g, soundboardSound: e?.item.sound ?? null })
                    : null,
            [g],
        ),
        tr = "https://cdn.discordapp.com/assets/premium/roadblocks/soundboard_dark.png",
        ti = i.useCallback(() => {
            let e = P.A.getSoundById(er),
                t = new Audio((0, G.A)(er));
            null != em.current && em.current.pause(),
                (em.current = t),
                (t.currentTime = 0),
                (t.volume = (0, V.A)(e?.volume ?? 1)),
                t.play();
        }, [em]),
        ta = (0, l.bG)([R.A], () => R.A.getMediaSessionId());
    return (
        (0, h.A)({
            type: o.ImpressionTypes.POPOUT,
            name: o.ImpressionNames.SOUNDBOARD_POPOUT,
            properties: {
                source: ep,
                guild_id: t,
                media_session_id: ta,
                available_custom_sounds_count: eM.unlockedCustomSoundCount,
                unavailable_custom_sounds_count: eM.lockedCustomSoundCount,
                favorite_sounds_count: eM.favoriteSoundCount,
            },
        }),
        (0, r.jsxs)(r.Fragment, {
            children: [
                null != eT
                    ? (0, r.jsx)(C.A, {
                          containerContext: ef ? C.N.TAB_PARENT_CONTAINER : C.N.NONE,
                          image: { url: tr, width: 220, height: 132 },
                          title: q.intl.string(ef ? q.t.rZEEvU : q.t.jGDYF0),
                          description: q.intl.string(ef ? q.t.ZPNG5A : q.t["grL/hg"]),
                          enableSocialProof: !0,
                          analyticsLocationSection: K.JJy.SOUNDBOARD_SOUND_PICKER_UPSELL,
                          upsellViewedTrackingData: {
                              type: $.e.SOUND_PICKER_SOUND_CLICKED,
                              is_external: !0,
                              location: { ...eI, object: K.ZSU.SOUNDBOARD_SOUND },
                              location_stack: eE,
                              sku_id: x.Ay.getSkuIdForPremiumType($.PremiumTypes.TIER_2),
                          },
                          onClose: () => ey(null),
                          onLearnMore: g,
                          onDisplay: ti,
                      })
                    : void 0,
                (0, r.jsx)(I.A, {
                    categories: eF,
                    collapsedCategories: eW,
                    containerWidth: d,
                    store: E.LW,
                    onSelectItem: eZ,
                    onSearchExpressions: e5,
                    hasSearchResults: ek.length > 0,
                    defaultSearchPlaceholder: q.intl.string(q.t.sKt3xS),
                    renderRow: eQ,
                    renderSectionHeader: e6,
                    renderSectionFooter: e4,
                    renderSection: e3,
                    renderCategoryList: e9,
                    renderHeaderAccessories: e8,
                    rowHeight: X,
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
                    ej &&
                    (0, r.jsx)(S.d, {
                        showUpsell: !0,
                        text: e0(),
                        button: te(),
                        buttonAnalyticsObject: { section: K.JJy.SOUND_PICKER_FLOATING_UPSELL },
                        useGradientBg: !0,
                        hoveredNitroLockedSound: eS,
                        position: "bottom",
                    }),
            ],
        })
    );
}
