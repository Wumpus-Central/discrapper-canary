"use strict";
n.d(t, { A: () => eu, B: () => es }), n(30146);
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
    h = n(688810),
    p = n(139286),
    g = n(915089),
    E = n(724511),
    A = n(850992),
    I = n(151271),
    T = n(836963),
    y = n(89366),
    S = n(105713),
    v = n(202639),
    C = n(414872),
    b = n(421162),
    N = n(523006),
    R = n(253932),
    O = n(383501),
    D = n(287809),
    L = n(977997),
    w = n(147925),
    x = n(954571),
    P = n(927578),
    M = n(209932),
    k = n(807348),
    U = n(766708),
    G = n(536432),
    F = n(102597),
    V = n(904054),
    B = n(147472),
    j = n(918530),
    H = n(114028),
    Y = n(862933),
    W = n(985417),
    K = n(797179),
    $ = n(652215),
    z = n(698279),
    q = n(788868),
    X = n(985018),
    Z = n(426889);
let Q = 16,
    J = 48,
    ee = 32,
    et = 8,
    en = 32 + C.kg - et,
    er = 150,
    ei = "3",
    ea = {
        [k.Cx.SEARCH]: f.A.SOUNDBOARD_SEARCH_RESULTS_SECTION,
        [k.Cx.DEFAULTS]: f.A.SOUNDBOARD_DEFAULT_SOUNDS_SECTION,
        [k.Cx.GUILD]: f.A.SOUNDBOARD_GUILD_SOUNDS_SECTION,
        [k.Cx.FAVORITES]: f.A.SOUNDBOARD_FAVORITES_SECTION,
        [k.Cx.RECENTLY_HEARD]: f.A.SOUNDBOARD_RECENTLY_HEARD_SECTION,
        [k.Cx.FREQUENTLY_USED]: f.A.SOUNDBOARD_FREQUENTLY_USED_SECTION,
    };
function es(e, t, n) {
    return (null == n && e.type === k.Cx.GUILD && !t) || (e.type === k.Cx.GUILD && e.guild.id !== n && !t);
}
function eo(e) {
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
            case k.Cx.FAVORITES:
                return (0, r.jsx)(u.Gg5, { size: "xs", color: "currentColor", className: Z.nr });
            case k.Cx.RECENTLY_HEARD:
                return (0, r.jsx)(u.O4, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: "currentColor",
                    className: Z.nr,
                });
            case k.Cx.FREQUENTLY_USED:
                return (0, r.jsx)(u.Uy2, { className: Z.nr });
            case k.Cx.GUILD:
                return (0, r.jsx)(E.A, { guild: t.guild, height: Q, width: Q });
            case k.Cx.DEFAULTS:
                return (0, r.jsx)(u.pVd, {
                    size: "custom",
                    width: 28,
                    height: 28,
                    color: "currentColor",
                    className: Z.nr,
                });
            case k.Cx.SEARCH:
                return (0, r.jsx)(u.$p$, { size: "md", color: "currentColor", className: Z.nr });
        }
    }
    function d() {
        switch (t.type) {
            case k.Cx.FAVORITES:
                return X.intl.string(X.t.k8fFjp);
            case k.Cx.RECENTLY_HEARD:
                return X.intl.string(X.t["8i/+SA"]);
            case k.Cx.FREQUENTLY_USED:
                return X.intl.string(X.t["+cGVV6"]);
            case k.Cx.GUILD:
                return t.guild.name;
            case k.Cx.DEFAULTS:
                return X.intl.string(X.t.Rtvk9X);
            case k.Cx.SEARCH:
                return X.intl.string(X.t["zkoeq/"]);
        }
    }
    return (0, r.jsxs)(r.Fragment, {
        children: [
            o && (0, r.jsx)(C.Ay, { colorOpacity: 0.35, glowOpacity: 0.35, className: Z.yH, enableBrandRefresh: l }),
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
                            (0, r.jsx)(w.A, {
                                className: Z.nr,
                                direction: n ? w.A.Directions.RIGHT : w.A.Directions.DOWN,
                            }),
                        ],
                    }),
                }),
            }),
        ],
    });
}
function el() {
    return (0, r.jsx)(d.A, { message: X.intl.string(X.t.bgDdNK) });
}
function eu(e) {
    let {
            guildId: t,
            channel: a,
            containerWidth: d,
            onClose: E,
            onSelect: C,
            shouldValidateSelectedSound: w = !1,
            suppressPlaySound: Q = !1,
            shouldShowUpsell: et = !0,
            gridNotice: eu,
            soundButtonOverlay: ec,
            listPadding: ed,
            renderHeader: e_,
            defaultSoundsOnly: ef = !1,
            inExpressionPicker: eh,
            analyticsSource: ep,
            enablePickerUpsellPremiumBrandRefresh: em,
        } = e,
        { audioRef: eg } = i.useContext(N.A),
        { analyticsLocations: eE } = (0, h.Ay)(),
        { analyticsLocations: eA } = (0, h.Ay)(f.A.PREMIUM_UPSELL),
        { location: eI } = (0, _.p)(),
        eT = i.useMemo(() => ({ ...eI, section: $.JJy.SOUNDBOARD_SOUND_PICKER }), [eI]),
        [ey, eS] = i.useState(null),
        [ev, eC] = i.useState(null),
        eb = (0, l.bG)([D.default], () => D.default.getCurrentUser()),
        eN = (0, P.TW)(eb, q.PremiumTypes.TIER_2),
        eR = (0, l.bG)([L.A], () => L.A.getVoiceState(t, eb?.id ?? $.dJq)),
        eO = eR?.selfDeaf || eR?.mute || eR?.suppress,
        eD = (0, I.RQ)((e) => e.searchQuery),
        eL = null != eD && "" !== eD,
        ew = (0, g.GV)(),
        ex = U.r.useConfig({ location: "SoundboardSoundGrid" }),
        {
            categories: eP,
            availableSounds: eM,
            soundCounts: ek,
        } = (0, j.Ay)(a, { moveDefaultsToBottom: ex.enabled }, ef),
        [eU, eG] = i.useState([]),
        eF = (0, j.Ip)(eP, eU, eD),
        eV = (0, I.RQ)((e) => e.isNitroLockedSectionVisible),
        eB = i.useMemo(() => eF.filter((e) => e.items.length > 0), [eF]),
        ej = i.useMemo(
            () => eB.findLastIndex((e) => !!(0, P.Em)(e.categoryInfo) && e.categoryInfo.isNitroLocked),
            [eB],
        ),
        eH = !eN && et && -1 !== ej,
        eY = !eN && ex.enabled && !ex.bottomBar && eP.length > 6,
        eW = R.b0.useSetting(),
        eK = i.useMemo(() => new Set(eW), [eW]),
        e$ = null == a,
        ez = P.Ay.canUseCustomCallSounds(eb),
        eq = i.useCallback(
            (e) => {
                eK.has(e) ? eK.delete(e) : eK.add(e), R.b0.updateSetting(Array.from(eK));
            },
            [eK],
        ),
        eX = i.useCallback(
            (e, t, n, r) => {
                if (null != C && !w) return C(e, n);
                let i = (0, G.Ir)(eb, e, a, !1);
                if (null != C && w && i) C(e, n);
                else if (!Q && i && (0, G.Au)(a))
                    (0, G.Ak)(e, a?.id ?? $.dJq, t, r),
                        eL &&
                            x.default.track($.HAw.SEARCH_RESULT_SELECTED, {
                                search_type: $.I4_.SOUNDBOARD,
                                channel_id: a?.id,
                                query: eD,
                                location_stack: t,
                            });
                else {
                    if ((0, G.Ir)(eb, e, a)) return;
                    et && eS(e);
                }
            },
            [Q, eb, a, et, eL, eD, C, w],
        ),
        eZ = i.useCallback(
            (e, t) => {
                switch (e.item.type) {
                    case k.uq.SOUND:
                        let n = ea[e?.category] ?? null,
                            r = e?.item.index;
                        return eX(e.item.sound, null == n ? eE : [...eE, n], t?.shiftKey !== !0, r);
                    case k.uq.ADD_SOUND:
                        return E(), (0, K.A)(e.item.guild.id);
                }
            },
            [eE, eX, E],
        ),
        eQ = i.useCallback(
            (e, n, i, o, l) => {
                let u = eB[i.sectionIndex],
                    c = et && es(u.categoryInfo, eN, t) && eH,
                    d = (t) => {
                        l(t);
                        let n = e[t];
                        c && n?.item.type === k.uq.SOUND ? eC(n.item.sound) : eC(null);
                    },
                    _ = () => {
                        eC(null);
                    };
                return (0, r.jsx)(
                    "ul",
                    {
                        ...n,
                        onMouseLeave: _,
                        className: s()(Z.a, { [Z.uL]: c, [Z.N4]: em }),
                        children: e.map((e, t) =>
                            (0, r.jsx)(
                                W.A,
                                {
                                    descriptor: e,
                                    soundButtonProps: {
                                        channel: a,
                                        interactive: e$ ? ez : !eO,
                                        forceSecondaryActions: !0,
                                        analyticsLocations: eE,
                                    },
                                    rowIndex: i.rowIndex,
                                    columnIndex: t,
                                    isUsingKeyboardNavigation: i.isUsingKeyboardNavigation,
                                    suppressPlaySound: Q,
                                    getItemProps: o,
                                    onSelectItem: eZ,
                                    onItemMouseEnter: d,
                                    buttonOverlay: ec,
                                    isNitroLocked: c,
                                    shouldShowUpsell: et,
                                    inExpressionPicker: eh,
                                },
                                t,
                            ),
                        ),
                    },
                    `row-${n["aria-rowindex"]}`,
                );
            },
            [eB, et, eN, t, Q, eZ, a, e$, ez, eO, eE, ec, eH, eh, em],
        ),
        eJ = i.useCallback(
            (e, t) => {
                if (e <= 0 || !et) return !1;
                let n = eB[e],
                    r = eB[e - 1],
                    i = es(n.categoryInfo, eN, t),
                    a = es(r.categoryInfo, eN, t);
                return i && !a;
            },
            [eB, et, eN],
        ),
        e0 = i.useCallback(() => {
            let e = M.A.getSoundById(ei);
            null != e && eS(e);
        }, []),
        e1 = i.useCallback(() => {
            let e = (0, P.Dd)(q.PremiumTypes.TIER_2);
            return X.intl.format(X.t["tw/SSq"], { nitroTierName: e, onClick: e0 });
        }, [e0]),
        e2 = i.useCallback((e) => (eJ(e, t) ? en : ee), [t, eJ]),
        e3 = i.useCallback(
            (e) => {
                let t = e === eB.length - 1;
                if (eH && t)
                    if (ex.bottomBar) return 4;
                    else return 70;
                return eH && e === ej ? 20 : 0;
            },
            [eB.length, eH, ej, ex.bottomBar],
        ),
        e6 = i.useCallback((e, t) => (0, r.jsx)("div", { children: t }, e), []),
        e4 = i.useCallback(
            (e, n) => {
                let i = `${e.key}`,
                    a = et && es(e.categoryInfo, eN, t),
                    s = eJ(n, t),
                    o = eK.has(i),
                    l = () => {
                        x.default.track($.HAw.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
                            location: { page: $.liQ.SOUNDBOARD_POPOUT },
                            tab: z.kx.SOUNDBOARD,
                            guild_id: t ?? null,
                            collapsed: !o,
                            sticker_pack_id: null,
                            num_expressions: e.items.length,
                        }),
                            eq(i);
                    };
                return (0, r.jsx)(
                    eo,
                    {
                        categoryInfo: e.categoryInfo,
                        toggleCollapsed: l,
                        collapsed: o,
                        isSectionNitroLocked: a && eH,
                        showNitroDivider: s && eH,
                        enablePickerUpsellPremiumBrandRefresh: em,
                    },
                    `header-${i}`,
                );
            },
            [eK, eq, t, eJ, et, eN, eH, em],
        ),
        e5 = i.useCallback(
            (e, t) => {
                let n = t === eB.length - 1,
                    i = t === ej;
                return eH && n && !ex.bottomBar
                    ? (0, r.jsx)("div", { className: s()(Z.Lk, { [Z.Ns]: i, [Z.N4]: em }) })
                    : eH && t === ej
                      ? (0, r.jsx)("div", { className: s()(Z.a3, { [Z.Ns]: i, [Z.N4]: em }) })
                      : null;
            },
            [ej, eH, eB.length, em, ex.bottomBar],
        ),
        e7 = i.useCallback((e) => eG((0, B.lG)(e, eM, eb, a, eE)), [a, eb, eM, eE]),
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
                eh
                    ? (0, r.jsx)(S.Gq, {
                          renderPopout: () => (0, r.jsx)(S.qn, {}),
                          tooltipText: X.intl.string(X.t["19lt24"]),
                          position: "top",
                          clickableClassName: s()(Z.Jm, Z.Zz),
                          children: (0, r.jsx)(u.HKD, { size: "md", color: "currentColor", className: Z.By }),
                      })
                    : (0, r.jsx)(u.DUT, {
                          tabIndex: 0,
                          className: Z.Jm,
                          onClick: e8,
                          "aria-label": X.intl.string(X.t.kbFsAD),
                          children: (0, r.jsx)(u.HKD, { size: "md", color: "currentColor", className: Z.By }),
                      }),
            [eh, e8],
        ),
        te = i.useCallback(
            (e) => {
                let n = eP.filter((e) => !eY || e.categoryInfo.type !== k.Cx.DEFAULTS),
                    i = eB.findIndex((e) => e.categoryInfo.type === k.Cx.DEFAULTS);
                return (0, r.jsx)(H.A, {
                    soundboardListRef: e,
                    categories: n,
                    shouldUpsellLockedCategories: eH,
                    listPadding: ed,
                    guildId: t,
                    inExpressionPicker: eh,
                    showPinnedDefaultsShortcut: eY,
                    hasBottomBarUpsell: ex.bottomBar && eH,
                    defaultsSectionIndex: i,
                });
            },
            [eP, eB, ed, eH, t, eh, eY, ex.bottomBar],
        ),
        tt = i.useCallback(() => {
            let e = (0, y.qD)();
            return (0, P.LE)(e, q.pe.TIER_2) ?? X.intl.string(X.t.pj0XBN);
        }, []),
        tn = i.useCallback(() => {
            if (ex.bottomBar) return null;
            if (eH) {
                let e = eV;
                return (
                    ex.enabled && (e = !0),
                    (0, r.jsx)(v.d, {
                        showUpsell: e,
                        text: e1(),
                        button: tt(),
                        buttonAnalyticsObject: { section: $.JJy.SOUND_PICKER_FLOATING_UPSELL },
                        useGradientBg: ex.enabled,
                        hoveredNitroLockedSound: ev,
                    })
                );
            }
            return null;
        }, [e1, tt, eH, ex.enabled, ex.bottomBar, eV, ev]),
        tr = i.useCallback(
            (e) =>
                e?.item.type === k.uq.SOUND
                    ? (0, r.jsx)(Y.A, { closePicker: E, soundboardSound: e?.item.sound ?? null })
                    : null,
            [E],
        ),
        ti = "https://cdn.discordapp.com/assets/premium/roadblocks/soundboard_dark.png",
        ta = i.useCallback(() => {
            let e = M.A.getSoundById(ei),
                t = new Audio((0, F.A)(ei));
            null != eg.current && eg.current.pause(),
                (eg.current = t),
                (t.currentTime = 0),
                (t.volume = (0, V.A)(e?.volume ?? 1)),
                t.play();
        }, [eg]),
        ts = (0, l.bG)([O.A], () => O.A.getMediaSessionId());
    return (
        (0, p.A)({
            type: o.ImpressionTypes.POPOUT,
            name: o.ImpressionNames.SOUNDBOARD_POPOUT,
            properties: {
                source: ep,
                guild_id: t,
                media_session_id: ts,
                available_custom_sounds_count: ek.unlockedCustomSoundCount,
                unavailable_custom_sounds_count: ek.lockedCustomSoundCount,
                favorite_sounds_count: ek.favoriteSoundCount,
            },
        }),
        (0, r.jsxs)(r.Fragment, {
            children: [
                null != ey
                    ? (0, r.jsx)(b.A, {
                          containerContext: eh ? b.N.TAB_PARENT_CONTAINER : b.N.NONE,
                          image: { url: ti, width: 220, height: 132 },
                          title: X.intl.string(eh ? X.t.rZEEvU : X.t.jGDYF0),
                          description: X.intl.string(eh ? X.t.ZPNG5A : X.t["grL/hg"]),
                          enableSocialProof: !0,
                          analyticsLocationSection: $.JJy.SOUNDBOARD_SOUND_PICKER_UPSELL,
                          upsellViewedTrackingData: {
                              type: q.e.SOUND_PICKER_SOUND_CLICKED,
                              is_external: !0,
                              location: { ...eT, object: $.ZSU.SOUNDBOARD_SOUND },
                              location_stack: eA,
                              sku_id: P.Ay.getSkuIdForPremiumType(q.PremiumTypes.TIER_2),
                          },
                          onClose: () => eS(null),
                          onLearnMore: E,
                          onDisplay: ta,
                      })
                    : void 0,
                (0, r.jsx)(T.A, {
                    categories: eB,
                    collapsedCategories: eK,
                    containerWidth: d,
                    store: A.LW,
                    onSelectItem: eZ,
                    onSearchExpressions: e7,
                    hasSearchResults: eU.length > 0,
                    defaultSearchPlaceholder: X.intl.string(X.t.sKt3xS),
                    renderRow: eQ,
                    renderSectionHeader: e4,
                    renderSectionFooter: e5,
                    renderSection: e6,
                    renderCategoryList: te,
                    renderHeaderAccessories: e9,
                    rowHeight: J,
                    sectionHeaderHeight: e2,
                    sectionFooterHeight: e3,
                    itemNodeWidth: er,
                    gridNavigatorId: ew,
                    renderEmptySearchState: el,
                    renderInspector: tr,
                    gridNotice: eu,
                    renderHeader: e_,
                    renderUpsell: tn,
                }),
                ex.bottomBar &&
                    eH &&
                    (0, r.jsx)(v.d, {
                        showUpsell: !0,
                        text: e1(),
                        button: tt(),
                        buttonAnalyticsObject: { section: $.JJy.SOUND_PICKER_FLOATING_UPSELL },
                        useGradientBg: !0,
                        hoveredNitroLockedSound: ev,
                        position: "bottom",
                    }),
            ],
        })
    );
}
