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
    R = n(253932),
    O = n(383501),
    b = n(287809),
    D = n(977997),
    L = n(147925),
    w = n(954571),
    M = n(927578),
    x = n(209932),
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
    $ = n(698279),
    z = n(788868),
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
            shouldShowLockedSounds: ee = !0,
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
        eN = (0, l.bG)([b.default], () => b.default.getCurrentUser()),
        eC = (0, M.TW)(eN, z.PremiumTypes.TIER_2),
        eR = (0, l.bG)([D.A], () => D.A.getVoiceState(t, eN?.id ?? K.dJq)),
        eO = eR?.selfDeaf || eR?.mute || eR?.suppress,
        eb = (0, A.RQ)((e) => e.searchQuery),
        eD = null != eb && "" !== eb,
        eL = (0, m.GV)(),
        ew = k.rn.useConfig({ location: "SoundboardSoundGrid" }),
        {
            categories: eM,
            availableSounds: ex,
            soundCounts: eP,
        } = (0, B.A)(s, { moveDefaultsToBottom: ew.reorderDefaultSounds }, e_),
        [ek, eU] = i.useState([]),
        eG = (0, B.I)(eM, ek, eb),
        eF = (0, A.RQ)((e) => e.isNitroLockedSectionVisible),
        eV = i.useMemo(() => eG.filter((e) => e.items.length > 0), [eG]),
        eB = i.useMemo(
            () => eV.findLastIndex((e) => !!(0, M.Em)(e.categoryInfo) && e.categoryInfo.isNitroLocked),
            [eV],
        ),
        eH = !eC && ee && -1 !== eB,
        ej = !eC && ee && (ew.showUpsellWithoutLockedSounds || -1 !== eB),
        eY =
            !eC &&
            ew.reorderDefaultSounds &&
            ew.enablePinnedDefaults &&
            ew.upsellDisplayType !== k.vz.BOTTOM_BAR &&
            eM.length > 6,
        eW = R.b0.useSetting(),
        eK = i.useMemo(() => new Set(eW), [eW]),
        e$ = null == s,
        ez = M.Ay.canUseCustomCallSounds(eN),
        eq = i.useCallback(
            (e) => {
                eK.has(e) ? eK.delete(e) : eK.add(e), R.b0.updateSetting(Array.from(eK));
            },
            [eK],
        ),
        eZ = i.useCallback(
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
                                query: eb,
                                location_stack: t,
                            });
                else {
                    if ((0, U.Ir)(eN, e, s)) return;
                    ee && eS(e);
                }
            },
            [X, eN, s, ee, eD, eb, v, L],
        ),
        eX = i.useCallback(
            (e, t) => {
                switch (e.item.type) {
                    case P.uq.SOUND:
                        let n = ei[e?.category] ?? null,
                            r = e?.item.index;
                        return eZ(e.item.sound, null == n ? eE : [...eE, n], t?.shiftKey !== !0, r);
                    case P.uq.ADD_SOUND:
                        return E(), (0, W.A)(e.item.guild.id);
                }
            },
            [eE, eZ, E],
        ),
        eQ = i.useCallback(
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
                                        interactive: e$ ? ez : !eO,
                                        forceSecondaryActions: !0,
                                        analyticsLocations: eE,
                                    },
                                    rowIndex: i.rowIndex,
                                    columnIndex: t,
                                    isUsingKeyboardNavigation: i.isUsingKeyboardNavigation,
                                    suppressPlaySound: X,
                                    getItemProps: o,
                                    onSelectItem: eX,
                                    onItemMouseEnter: d,
                                    buttonOverlay: eu,
                                    isNitroLocked: c,
                                    showLockForDisabledSound: ee,
                                    inExpressionPicker: ef,
                                },
                                t,
                            ),
                        ),
                    },
                    `row-${n["aria-rowindex"]}`,
                );
            },
            [eV, ee, eC, t, X, eX, s, e$, ez, eO, eE, eu, eH, ef, eh],
        ),
        eJ = i.useCallback(
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
        e0 = i.useCallback(() => {
            let e = x.A.getSoundById(er);
            null != e && eS(e);
        }, []),
        e1 = i.useCallback(() => {
            let e = (0, M.Dd)(z.PremiumTypes.TIER_2);
            return q.intl.format(q.t["tw/SSq"], { nitroTierName: e, onClick: e0 });
        }, [e0]),
        e2 = i.useCallback((e) => (eJ(e, t) ? et : J), [t, eJ]),
        e3 = i.useCallback(
            (e) => {
                let t = e === eV.length - 1;
                if (ej && t)
                    if (ew.upsellDisplayType === k.vz.BOTTOM_BAR) return 4;
                    else return 70;
                return eH && e === eB ? 20 : 0;
            },
            [eV.length, eH, ej, eB, ew.upsellDisplayType],
        ),
        e6 = i.useCallback((e, t) => (0, r.jsx)("div", { children: t }, e), []),
        e4 = i.useCallback(
            (e, n) => {
                let i = `${e.key}`,
                    s = ee && es(e.categoryInfo, eC, t),
                    a = eJ(n, t),
                    o = eK.has(i),
                    l = () => {
                        w.default.track(K.HAw.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
                            location: { page: K.liQ.SOUNDBOARD_POPOUT },
                            tab: $.kx.SOUNDBOARD,
                            guild_id: t ?? null,
                            collapsed: !o,
                            sticker_pack_id: null,
                            num_expressions: e.items.length,
                        }),
                            eq(i);
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
            [eK, eq, t, eJ, ee, eC, eH, eh],
        ),
        e5 = i.useCallback(
            (e, t) => {
                let n = t === eV.length - 1,
                    i = t === eB;
                return ej && n && ew.upsellDisplayType !== k.vz.BOTTOM_BAR
                    ? (0, r.jsx)("div", { className: a()(Z.Lk, { [Z.Ns]: i, [Z.N4]: eh }) })
                    : eH && t === eB
                      ? (0, r.jsx)("div", { className: a()(Z.a3, { [Z.Ns]: i, [Z.N4]: eh }) })
                      : null;
            },
            [eB, eH, ej, eV.length, eh, ew.upsellDisplayType],
        ),
        e7 = i.useCallback((e) => eU((0, V.lG)(e, ex, eN, s, eE)), [s, eN, ex, eE]),
        e8 = i.useCallback(
            (e) => {
                (0, c.L3)(e, async () => {
                    let { default: e } = await n.e("51111").then(n.bind(n, 323002));
                    return (t) => (0, r.jsx)(e, { sourceAnalyticsLocations: eE, ...t });
                });
            },
            [eE],
        ),
        e9 = i.useCallback(
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
                          onClick: e8,
                          "aria-label": q.intl.string(q.t.kbFsAD),
                          children: (0, r.jsx)(u.HKD, { size: "md", color: "currentColor", className: Z.By }),
                      }),
            [ef, e8],
        ),
        te = i.useCallback(
            (e) => {
                let n = eM.filter((e) => !eY || e.categoryInfo.type !== P.Cx.DEFAULTS),
                    i = eV.findIndex((e) => e.categoryInfo.type === P.Cx.DEFAULTS);
                return (0, r.jsx)(H.A, {
                    soundboardListRef: e,
                    categories: n,
                    shouldUpsellLockedCategories: eH,
                    listPadding: ec,
                    guildId: t,
                    inExpressionPicker: ef,
                    showPinnedDefaultsShortcut: eY,
                    hasBottomBarUpsell: ew.upsellDisplayType === k.vz.BOTTOM_BAR && ej,
                    defaultsSectionIndex: i,
                });
            },
            [eM, eV, ec, eH, ej, t, ef, eY, ew.upsellDisplayType],
        ),
        tt = i.useCallback(() => {
            let e = (0, T.qD)();
            return (0, M.LE)(e, z.pe.TIER_2) ?? q.intl.string(q.t.pj0XBN);
        }, []),
        tn = i.useCallback(() => {
            if (ew.upsellDisplayType === k.vz.BOTTOM_BAR) return null;
            if (ej) {
                let e = eF;
                return (
                    ew.floatingUpsellAlwaysVisible && (e = !0),
                    (0, r.jsx)(y.d, {
                        showUpsell: e,
                        text: e1(),
                        button: tt(),
                        buttonAnalyticsObject: { section: K.JJy.SOUND_PICKER_FLOATING_UPSELL },
                        useGradientBg: ew.upsellDisplayType === k.vz.FLOATING_REDESIGNED,
                        hoveredNitroLockedSound: ey,
                        subscribeButtonVariantOverride: ew.subscribeButtonVariant,
                    })
                );
            }
            return null;
        }, [e1, tt, ej, ew.floatingUpsellAlwaysVisible, ew.upsellDisplayType, ew.subscribeButtonVariant, eF, ey]),
        tr = i.useCallback(
            (e) =>
                e?.item.type === P.uq.SOUND
                    ? (0, r.jsx)(j.A, { closePicker: E, soundboardSound: e?.item.sound ?? null })
                    : null,
            [E],
        ),
        ti = "https://cdn.discordapp.com/assets/premium/roadblocks/soundboard_dark.png",
        ts = i.useCallback(() => {
            let e = x.A.getSoundById(er),
                t = new Audio((0, G.A)(er));
            null != em.current && em.current.pause(),
                (em.current = t),
                (t.currentTime = 0),
                (t.volume = (0, F.A)(e?.volume ?? 1)),
                t.play();
        }, [em]),
        ta = (0, l.bG)([O.A], () => O.A.getMediaSessionId());
    return (
        (0, h.A)({
            type: o.ImpressionTypes.POPOUT,
            name: o.ImpressionNames.SOUNDBOARD_POPOUT,
            properties: {
                source: ep,
                guild_id: t,
                media_session_id: ta,
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
                          image: { url: ti, width: 220, height: 132 },
                          title: q.intl.string(ef ? q.t.rZEEvU : q.t.jGDYF0),
                          description: q.intl.string(ef ? q.t.ZPNG5A : q.t["grL/hg"]),
                          enableSocialProof: !0,
                          analyticsLocationSection: K.JJy.SOUNDBOARD_SOUND_PICKER_UPSELL,
                          upsellViewedTrackingData: {
                              type: z.e.SOUND_PICKER_SOUND_CLICKED,
                              is_external: !0,
                              location: { ...eI, object: K.ZSU.SOUNDBOARD_SOUND },
                              location_stack: eg,
                              sku_id: M.Ay.getSkuIdForPremiumType(z.PremiumTypes.TIER_2),
                          },
                          onClose: () => eS(null),
                          onLearnMore: E,
                          onDisplay: ts,
                      })
                    : void 0,
                (0, r.jsx)(I.A, {
                    categories: eV,
                    collapsedCategories: eK,
                    containerWidth: d,
                    store: g.LW,
                    onSelectItem: eX,
                    onSearchExpressions: e7,
                    hasSearchResults: ek.length > 0,
                    defaultSearchPlaceholder: q.intl.string(q.t.sKt3xS),
                    renderRow: eQ,
                    renderSectionHeader: e4,
                    renderSectionFooter: e5,
                    renderSection: e6,
                    renderCategoryList: te,
                    renderHeaderAccessories: e9,
                    rowHeight: Q,
                    sectionHeaderHeight: e2,
                    sectionFooterHeight: e3,
                    itemNodeWidth: en,
                    gridNavigatorId: eL,
                    renderEmptySearchState: eo,
                    renderInspector: tr,
                    gridNotice: el,
                    renderHeader: ed,
                    renderUpsell: tn,
                }),
                ew.upsellDisplayType === k.vz.BOTTOM_BAR &&
                    ej &&
                    (0, r.jsx)(y.d, {
                        showUpsell: !0,
                        text: e1(),
                        button: tt(),
                        buttonAnalyticsObject: { section: K.JJy.SOUND_PICKER_FLOATING_UPSELL },
                        useGradientBg: !0,
                        hoveredNitroLockedSound: ey,
                        position: "bottom",
                        subscribeButtonVariantOverride: ew.subscribeButtonVariant,
                    }),
            ],
        })
    );
}
