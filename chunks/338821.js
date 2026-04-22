"use strict";
n.d(t, { A: () => eu, B: () => ea }), n(30146);
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(110259),
    o = n(311907),
    c = n(27232),
    u = n(111159),
    d = n(7689),
    h = n(939249),
    m = n(534514),
    p = n(983851),
    f = n(442433),
    g = n(537652),
    _ = n(212245),
    x = n(793574),
    A = n(688810),
    C = n(139286),
    E = n(915089),
    I = n(724511),
    v = n(850992),
    y = n(151271),
    S = n(836963),
    b = n(89366),
    N = n(105713),
    T = n(202639),
    j = n(414872),
    R = n(400669),
    w = n(421162),
    L = n(523006),
    M = n(253932),
    k = n(909536),
    O = n(383501),
    P = n(287809),
    D = n(977997),
    U = n(147925),
    V = n(954571),
    G = n(927578),
    F = n(15290),
    B = n(209932),
    H = n(807348),
    W = n(1018),
    K = n(536432),
    z = n(102597),
    Z = n(904054),
    q = n(147472),
    Y = n(918530),
    J = n(114028),
    $ = n(862933),
    X = n(985417),
    Q = n(797179),
    ee = n(652215),
    et = n(698279),
    en = n(788868),
    ei = n(985018),
    el = n(965238);
let es = 32 + j.kg - 8,
    er = {
        [H.Cx.SEARCH]: x.A.SOUNDBOARD_SEARCH_RESULTS_SECTION,
        [H.Cx.DEFAULTS]: x.A.SOUNDBOARD_DEFAULT_SOUNDS_SECTION,
        [H.Cx.GUILD]: x.A.SOUNDBOARD_GUILD_SOUNDS_SECTION,
        [H.Cx.FAVORITES]: x.A.SOUNDBOARD_FAVORITES_SECTION,
    };
function ea(e, t, n) {
    return (null == n && e.type === H.Cx.GUILD && !t) || (e.type === H.Cx.GUILD && e.guild.id !== n && !t);
}
function eo(e) {
    let { categoryInfo: t, collapsed: n, toggleCollapsed: l, isSectionNitroLocked: s, showNitroDivider: a } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            a && (0, i.jsx)(j.Ay, { className: el.yH }),
            (0, i.jsx)("div", {
                className: r()(el.hd, { [el.Jb]: s, [el.VD]: s }),
                children: (0, i.jsx)(h.D, {
                    className: el.bV,
                    onClick: l,
                    "aria-expanded": !n,
                    children: (0, i.jsxs)("div", {
                        className: el.M2,
                        children: [
                            (function () {
                                switch (t.type) {
                                    case H.Cx.FAVORITES:
                                        return (0, i.jsx)(c.G, { size: "xs", color: "currentColor", className: el.nr });
                                    case H.Cx.GUILD:
                                        return (0, i.jsx)(I.A, { guild: t.guild, height: 16, width: 16 });
                                    case H.Cx.DEFAULTS:
                                        return (0, i.jsx)(u.p, {
                                            size: "custom",
                                            width: 28,
                                            height: 28,
                                            color: "currentColor",
                                            className: el.nr,
                                        });
                                    case H.Cx.SEARCH:
                                        return (0, i.jsx)(d.$, { size: "md", color: "currentColor", className: el.nr });
                                }
                            })(),
                            (0, i.jsx)(m.D, {
                                variant: "text-sm/semibold",
                                color: "none",
                                className: el.Gf,
                                children: (function () {
                                    switch (t.type) {
                                        case H.Cx.FAVORITES:
                                            return ei.intl.string(ei.t.k8fFjp);
                                        case H.Cx.GUILD:
                                            return t.guild.name;
                                        case H.Cx.DEFAULTS:
                                            return ei.intl.string(ei.t.Rtvk9X);
                                        case H.Cx.SEARCH:
                                            return ei.intl.string(ei.t["zkoeq/"]);
                                    }
                                })(),
                            }),
                            (0, i.jsx)(U.A, {
                                className: el.nr,
                                direction: n ? U.A.Directions.RIGHT : U.A.Directions.DOWN,
                            }),
                        ],
                    }),
                }),
            }),
        ],
    });
}
function ec() {
    return (0, i.jsx)(g.A, { message: ei.intl.string(ei.t.bgDdNK) });
}
function eu(e) {
    let {
            guildId: t,
            channel: s,
            containerWidth: c,
            onClose: u,
            onSelect: d,
            shouldValidateSelectedSound: m = !1,
            suppressPlaySound: g = !1,
            shouldShowLockedSounds: I = !0,
            gridNotice: j,
            soundButtonOverlay: U,
            listPadding: eu,
            renderHeader: ed,
            defaultSoundsOnly: eh = !1,
            inExpressionPicker: em,
            analyticsSource: ep,
        } = e,
        { audioRef: ef } = l.useContext(L.A),
        { analyticsLocations: eg } = (0, A.Ay)(),
        { analyticsLocations: e_ } = (0, A.Ay)(x.A.PREMIUM_UPSELL),
        { location: ex } = (0, _.p)(),
        eA = l.useMemo(() => ({ ...ex, section: ee.JJy.SOUNDBOARD_SOUND_PICKER }), [ex]),
        [eC, eE] = l.useState(null),
        [eI, ev] = l.useState(null),
        ey = (0, o.bG)([P.default], () => P.default.getCurrentUser()),
        eS = (0, G.TW)(ey, en.PremiumTypes.TIER_2),
        eb = (0, o.bG)([D.A], () => D.A.getVoiceState(t, ey?.id ?? ee.dJq)),
        eN = eb?.selfDeaf || eb?.mute || eb?.suppress,
        eT = (0, y.RQ)((e) => e.searchQuery),
        ej = null != eT && "" !== eT,
        eR = (0, E.GV)(),
        ew = F.T.useConfig({ location: "SoundboardSoundGrid" }),
        eL = W.h.useConfig({ location: "SoundboardSoundGrid" }),
        eM = (0, k.St)("soundboard_floating_upsell"),
        {
            categories: ek,
            availableSounds: eO,
            soundCounts: eP,
        } = (0, Y.A)(s, { moveDefaultsToBottom: ew.reorderDefaultSounds }, eh),
        [eD, eU] = l.useState([]),
        eV = (0, Y.I)(ek, eD, eT),
        eG = (0, y.RQ)((e) => e.isNitroLockedSectionVisible),
        eF = l.useMemo(() => eV.filter((e) => e.items.length > 0), [eV]),
        eB = l.useMemo(
            () => eF.findLastIndex((e) => !!(0, G.Em)(e.categoryInfo) && e.categoryInfo.isNitroLocked),
            [eF],
        ),
        eH = !eS && I && -1 !== eB,
        eW = !eS && I && -1 !== eB,
        eK = !eS && ew.reorderDefaultSounds && ek.length > 6,
        ez = M.b0.useSetting(),
        eZ = l.useMemo(() => new Set(ez), [ez]),
        eq = null == s,
        eY = G.Ay.canUseCustomCallSounds(ey),
        eJ = l.useCallback(
            (e) => {
                eZ.has(e) ? eZ.delete(e) : eZ.add(e), M.b0.updateSetting(Array.from(eZ));
            },
            [eZ],
        ),
        e$ = l.useCallback(
            (e, t, n, i) => {
                if (null != d && !m) return d(e, n);
                let l = (0, K.Ir)(ey, e, s, !1);
                if (null != d && m && l) d(e, n);
                else if (!g && l && (0, K.Au)(s))
                    (0, K.Ak)(e, s?.id ?? ee.dJq, t, i),
                        ej &&
                            V.default.track(ee.HAw.SEARCH_RESULT_SELECTED, {
                                search_type: ee.I4_.SOUNDBOARD,
                                channel_id: s?.id,
                                query: eT,
                                location_stack: t,
                            });
                else {
                    if ((0, K.Ir)(ey, e, s)) return;
                    I && eE(e);
                }
            },
            [g, ey, s, I, ej, eT, d, m],
        ),
        eX = l.useCallback(
            (e, t) => {
                switch (e.item.type) {
                    case H.uq.SOUND:
                        let n = er[e?.category] ?? null,
                            i = e?.item.index;
                        return e$(e.item.sound, null == n ? eg : [...eg, n], t?.shiftKey !== !0, i);
                    case H.uq.ADD_SOUND:
                        return u(), (0, Q.A)(e.item.guild.id);
                }
            },
            [eg, e$, u],
        ),
        eQ = l.useCallback(
            (e, n, l, a, o) => {
                let c = eF[l.sectionIndex],
                    u = I && ea(c.categoryInfo, eS, t) && eH,
                    d = (t) => {
                        o(t);
                        let n = e[t];
                        eS || n?.item.type !== H.uq.SOUND || (0, K.Ir)(ey, n.item.sound, s, !1)
                            ? ev(null)
                            : ev(n.item.sound);
                    };
                return (0, i.jsx)(
                    "ul",
                    {
                        ...n,
                        onMouseLeave: () => {
                            ev(null);
                        },
                        className: r()(el.a, { [el.uL]: u }),
                        children: e.map((e, t) =>
                            (0, i.jsx)(
                                X.A,
                                {
                                    descriptor: e,
                                    soundButtonProps: {
                                        channel: s,
                                        interactive: eq ? eY : !eN,
                                        forceSecondaryActions: !0,
                                        analyticsLocations: eg,
                                    },
                                    rowIndex: l.rowIndex,
                                    columnIndex: t,
                                    isUsingKeyboardNavigation: l.isUsingKeyboardNavigation,
                                    suppressPlaySound: g,
                                    getItemProps: a,
                                    onSelectItem: eX,
                                    onItemMouseEnter: d,
                                    buttonOverlay: U,
                                    isNitroLocked: u,
                                    showLockForDisabledSound: I,
                                    inExpressionPicker: em,
                                },
                                t,
                            ),
                        ),
                    },
                    `row-${n["aria-rowindex"]}`,
                );
            },
            [eF, I, eS, t, ey, g, eX, s, eq, eY, eN, eg, U, eH, em],
        ),
        e0 = l.useCallback(
            (e, t) => {
                if (e <= 0 || !I) return !1;
                let n = eF[e],
                    i = eF[e - 1],
                    l = ea(n.categoryInfo, eS, t),
                    s = ea(i.categoryInfo, eS, t);
                return l && !s;
            },
            [eF, I, eS],
        ),
        e1 = l.useCallback(() => {
            let e = B.A.getSoundById("3");
            null != e && eE(e);
        }, []),
        e2 = l.useCallback(() => {
            let e = (0, G.Dd)(en.PremiumTypes.TIER_2);
            return ei.intl.format(ei.t["tw/SSq"], { nitroTierName: e, onClick: e1 });
        }, [e1]),
        e3 = l.useCallback((e) => (e0(e, t) ? es : 32), [t, e0]),
        e6 = l.useCallback(
            (e) => {
                let t = e === eF.length - 1;
                return eW && t ? 70 : eH && e === eB ? 20 : 0;
            },
            [eF.length, eH, eW, eB],
        ),
        e7 = l.useCallback((e, t) => (0, i.jsx)("div", { children: t }, e), []),
        e4 = l.useCallback(
            (e, n) => {
                let l = `${e.key}`,
                    s = I && ea(e.categoryInfo, eS, t),
                    r = e0(n, t),
                    a = eZ.has(l);
                return (0, i.jsx)(
                    eo,
                    {
                        categoryInfo: e.categoryInfo,
                        toggleCollapsed: () => {
                            V.default.track(ee.HAw.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
                                location: { page: ee.liQ.SOUNDBOARD_POPOUT },
                                tab: et.kx.SOUNDBOARD,
                                guild_id: t ?? null,
                                collapsed: !a,
                                sticker_pack_id: null,
                                num_expressions: e.items.length,
                            }),
                                eJ(l);
                        },
                        collapsed: a,
                        isSectionNitroLocked: s && eH,
                        showNitroDivider: r && eH,
                    },
                    `header-${l}`,
                );
            },
            [eZ, eJ, t, e0, I, eS, eH],
        ),
        e8 = l.useCallback(
            (e, t) => {
                let n = t === eF.length - 1,
                    l = t === eB;
                return eW && n
                    ? (0, i.jsx)("div", { className: r()(el.Lk, { [el.Ns]: l }) })
                    : eH && t === eB
                      ? (0, i.jsx)("div", { className: r()(el.a3, { [el.Ns]: l }) })
                      : null;
            },
            [eB, eH, eW, eF.length],
        ),
        e5 = l.useCallback((e) => eU((0, q.lG)(e, eO, ey, s, eg)), [s, ey, eO, eg]),
        e9 = l.useCallback(
            (e) => {
                (0, f.L3)(e, async () => {
                    let { default: e } = await n.e("51111").then(n.bind(n, 323002));
                    return (t) => (0, i.jsx)(e, { sourceAnalyticsLocations: eg, ...t });
                });
            },
            [eg],
        ),
        te = l.useCallback(
            () =>
                em
                    ? (0, i.jsx)(N.Gq, {
                          renderPopout: () => (0, i.jsx)(N.qn, {}),
                          tooltipText: ei.intl.string(ei.t["19lt24"]),
                          position: "top",
                          clickableClassName: r()(el.Jm, el.Zz),
                          children: (0, i.jsx)(p.H, { size: "md", color: "currentColor", className: el.By }),
                      })
                    : (0, i.jsx)(h.D, {
                          tabIndex: 0,
                          className: el.Jm,
                          onClick: e9,
                          "aria-label": ei.intl.string(ei.t.kbFsAD),
                          children: (0, i.jsx)(p.H, { size: "md", color: "currentColor", className: el.By }),
                      }),
            [em, e9],
        ),
        tt = l.useCallback(
            (e) => {
                let n = ek.filter((e) => !eK || e.categoryInfo.type !== H.Cx.DEFAULTS),
                    l = eF.findIndex((e) => e.categoryInfo.type === H.Cx.DEFAULTS);
                return (0, i.jsx)(J.A, {
                    soundboardListRef: e,
                    categories: n,
                    shouldUpsellLockedCategories: eH,
                    listPadding: eu,
                    guildId: t,
                    inExpressionPicker: em,
                    showPinnedDefaultsShortcut: eK,
                    defaultsSectionIndex: l,
                });
            },
            [ek, eF, eu, eH, t, em, eK],
        ),
        tn = l.useCallback(() => {
            let e = (0, b.qD)();
            return (0, G.LE)(e, en.pe.TIER_2) ?? ei.intl.string(ei.t.pj0XBN);
        }, []),
        ti = l.useCallback(() => {
            if (eW) {
                let e = eG;
                return (
                    ew.alwaysPinned && (e = !0),
                    (0, i.jsx)(T.d, {
                        showUpsell: e,
                        text: e2(),
                        button: tn(),
                        buttonAnalyticsObject: { section: ee.JJy.SOUND_PICKER_FLOATING_UPSELL },
                        useGradientBg: eL.gradientBackground,
                        hoveredNitroLockedSound: eI,
                        subscribeButtonVariantOverride: eL.subscribeButtonVariant,
                        useLegacyButton: eL.useLegacyButton,
                        leadingAction: eM
                            ? (0, i.jsx)(R.l, {
                                  size: "sm",
                                  className: el.ij,
                                  location: x.A.PREMIUM_WISHLIST_SOUNDBOARD_UPSELL,
                                  forceDarkTheme: !0,
                              })
                            : void 0,
                    })
                );
            }
            return null;
        }, [
            e2,
            tn,
            eW,
            ew.alwaysPinned,
            eL.gradientBackground,
            eL.subscribeButtonVariant,
            eL.useLegacyButton,
            eM,
            eG,
            eI,
        ]),
        tl = l.useCallback(
            (e) =>
                e?.item.type === H.uq.SOUND
                    ? (0, i.jsx)($.A, { closePicker: u, soundboardSound: e?.item.sound ?? null })
                    : null,
            [u],
        ),
        ts = l.useCallback(() => {
            let e = B.A.getSoundById("3"),
                t = new Audio((0, z.A)("3"));
            null != ef.current && ef.current.pause(),
                (ef.current = t),
                (t.currentTime = 0),
                (t.volume = (0, Z.A)(e?.volume ?? 1)),
                t.play();
        }, [ef]),
        tr = (0, o.bG)([O.A], () => O.A.getMediaSessionId());
    return (
        (0, C.A)({
            type: a.ImpressionTypes.POPOUT,
            name: a.ImpressionNames.SOUNDBOARD_POPOUT,
            properties: {
                source: ep,
                guild_id: t,
                media_session_id: tr,
                available_custom_sounds_count: eP.unlockedCustomSoundCount,
                unavailable_custom_sounds_count: eP.lockedCustomSoundCount,
                favorite_sounds_count: eP.favoriteSoundCount,
            },
        }),
        (0, i.jsxs)(i.Fragment, {
            children: [
                null != eC
                    ? (0, i.jsx)(w.A, {
                          title: ei.intl.string(em ? ei.t.rZEEvU : ei.t.jGDYF0),
                          description: ei.intl.string(em ? ei.t.ZPNG5A : ei.t["grL/hg"]),
                          analyticsLocationSection: ee.JJy.SOUNDBOARD_SOUND_PICKER_UPSELL,
                          upsellViewedTrackingData: {
                              type: en.e.SOUND_PICKER_SOUND_CLICKED,
                              is_external: !0,
                              location: { ...eA, object: ee.ZSU.SOUNDBOARD_SOUND },
                              location_stack: e_,
                              sku_id: G.Ay.getSkuIdForPremiumType(en.PremiumTypes.TIER_2),
                          },
                          onClose: () => eE(null),
                          onLearnMore: u,
                          onDisplay: ts,
                      })
                    : void 0,
                (0, i.jsx)(S.A, {
                    categories: eF,
                    collapsedCategories: eZ,
                    containerWidth: c,
                    store: v.LW,
                    onSelectItem: eX,
                    onSearchExpressions: e5,
                    hasSearchResults: eD.length > 0,
                    defaultSearchPlaceholder: ei.intl.string(ei.t.sKt3xS),
                    renderRow: eQ,
                    renderSectionHeader: e4,
                    renderSectionFooter: e8,
                    renderSection: e7,
                    renderCategoryList: tt,
                    renderHeaderAccessories: te,
                    rowHeight: 48,
                    sectionHeaderHeight: e3,
                    sectionFooterHeight: e6,
                    itemNodeWidth: 150,
                    gridNavigatorId: eR,
                    renderEmptySearchState: ec,
                    renderInspector: tl,
                    gridNotice: j,
                    renderHeader: ed,
                    renderUpsell: ti,
                }),
            ],
        })
    );
}
