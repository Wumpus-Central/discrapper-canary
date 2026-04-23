"use strict";
n.d(t, { A: () => ec, B: () => eo }), n(30146);
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(110259),
    l = n(311907),
    u = n(27232),
    c = n(111159),
    d = n(7689),
    _ = n(939249),
    f = n(534514),
    p = n(983851),
    h = n(442433),
    E = n(537652),
    m = n(212245),
    g = n(793574),
    A = n(688810),
    I = n(139286),
    T = n(915089),
    S = n(724511),
    y = n(850992),
    N = n(151271),
    v = n(836963),
    C = n(89366),
    O = n(105713),
    R = n(202639),
    b = n(414872),
    D = n(400669),
    L = n(421162),
    w = n(523006),
    M = n(253932),
    P = n(909536),
    x = n(383501),
    k = n(287809),
    U = n(977997),
    G = n(147925),
    F = n(954571),
    V = n(927578),
    B = n(15290),
    H = n(209932),
    j = n(807348),
    Y = n(1018),
    W = n(536432),
    K = n(102597),
    $ = n(904054),
    z = n(147472),
    q = n(918530),
    X = n(114028),
    Q = n(862933),
    Z = n(985417),
    J = n(797179),
    ee = n(652215),
    et = n(698279),
    en = n(788868),
    er = n(985018),
    ei = n(965238);
let es = 32 + b.kg - 8,
    ea = {
        [j.Cx.SEARCH]: g.A.SOUNDBOARD_SEARCH_RESULTS_SECTION,
        [j.Cx.DEFAULTS]: g.A.SOUNDBOARD_DEFAULT_SOUNDS_SECTION,
        [j.Cx.GUILD]: g.A.SOUNDBOARD_GUILD_SOUNDS_SECTION,
        [j.Cx.FAVORITES]: g.A.SOUNDBOARD_FAVORITES_SECTION,
    };
function eo(e, t, n) {
    return (null == n && e.type === j.Cx.GUILD && !t) || (e.type === j.Cx.GUILD && e.guild.id !== n && !t);
}
function el(e) {
    let { categoryInfo: t, collapsed: n, toggleCollapsed: i, isSectionNitroLocked: s, showNitroDivider: o } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            o && (0, r.jsx)(b.Ay, { className: ei.yH }),
            (0, r.jsx)("div", {
                className: a()(ei.hd, { [ei.Jb]: s, [ei.VD]: s }),
                children: (0, r.jsx)(_.D, {
                    className: ei.bV,
                    onClick: i,
                    "aria-expanded": !n,
                    children: (0, r.jsxs)("div", {
                        className: ei.M2,
                        children: [
                            (function () {
                                switch (t.type) {
                                    case j.Cx.FAVORITES:
                                        return (0, r.jsx)(u.G, { size: "xs", color: "currentColor", className: ei.nr });
                                    case j.Cx.GUILD:
                                        return (0, r.jsx)(S.A, { guild: t.guild, height: 16, width: 16 });
                                    case j.Cx.DEFAULTS:
                                        return (0, r.jsx)(c.p, {
                                            size: "custom",
                                            width: 28,
                                            height: 28,
                                            color: "currentColor",
                                            className: ei.nr,
                                        });
                                    case j.Cx.SEARCH:
                                        return (0, r.jsx)(d.$, { size: "md", color: "currentColor", className: ei.nr });
                                }
                            })(),
                            (0, r.jsx)(f.D, {
                                variant: "text-sm/semibold",
                                color: "none",
                                className: ei.Gf,
                                children: (function () {
                                    switch (t.type) {
                                        case j.Cx.FAVORITES:
                                            return er.intl.string(er.t.k8fFjp);
                                        case j.Cx.GUILD:
                                            return t.guild.name;
                                        case j.Cx.DEFAULTS:
                                            return er.intl.string(er.t.Rtvk9X);
                                        case j.Cx.SEARCH:
                                            return er.intl.string(er.t["zkoeq/"]);
                                    }
                                })(),
                            }),
                            (0, r.jsx)(G.A, {
                                className: ei.nr,
                                direction: n ? G.A.Directions.RIGHT : G.A.Directions.DOWN,
                            }),
                        ],
                    }),
                }),
            }),
        ],
    });
}
function eu() {
    return (0, r.jsx)(E.A, { message: er.intl.string(er.t.bgDdNK) });
}
function ec(e) {
    let {
            guildId: t,
            channel: s,
            containerWidth: u,
            onClose: c,
            onSelect: d,
            shouldValidateSelectedSound: f = !1,
            suppressPlaySound: E = !1,
            shouldShowLockedSounds: S = !0,
            gridNotice: b,
            soundButtonOverlay: G,
            listPadding: ec,
            renderHeader: ed,
            defaultSoundsOnly: e_ = !1,
            inExpressionPicker: ef,
            analyticsSource: ep,
        } = e,
        { audioRef: eh } = i.useContext(w.A),
        { analyticsLocations: eE } = (0, A.Ay)(),
        { analyticsLocations: em } = (0, A.Ay)(g.A.PREMIUM_UPSELL),
        { location: eg } = (0, m.p)(),
        eA = i.useMemo(() => ({ ...eg, section: ee.JJy.SOUNDBOARD_SOUND_PICKER }), [eg]),
        [eI, eT] = i.useState(null),
        [eS, ey] = i.useState(null),
        eN = (0, l.bG)([k.default], () => k.default.getCurrentUser()),
        ev = (0, V.TW)(eN, en.PremiumTypes.TIER_2),
        eC = (0, l.bG)([U.A], () => U.A.getVoiceState(t, eN?.id ?? ee.dJq)),
        eO = eC?.selfDeaf || eC?.mute || eC?.suppress,
        eR = (0, N.RQ)((e) => e.searchQuery),
        eb = null != eR && "" !== eR,
        eD = (0, T.GV)(),
        eL = B.T.useConfig({ location: "SoundboardSoundGrid" }),
        ew = Y.h.useConfig({ location: "SoundboardSoundGrid" }),
        eM = (0, P.St)("soundboard_floating_upsell"),
        {
            categories: eP,
            availableSounds: ex,
            soundCounts: ek,
        } = (0, q.A)(s, { moveDefaultsToBottom: eL.reorderDefaultSounds }, e_),
        [eU, eG] = i.useState([]),
        eF = (0, q.I)(eP, eU, eR),
        eV = (0, N.RQ)((e) => e.isNitroLockedSectionVisible),
        eB = i.useMemo(() => eF.filter((e) => e.items.length > 0), [eF]),
        eH = i.useMemo(
            () => eB.findLastIndex((e) => !!(0, V.Em)(e.categoryInfo) && e.categoryInfo.isNitroLocked),
            [eB],
        ),
        ej = !ev && S && -1 !== eH,
        eY = !ev && S && -1 !== eH,
        eW = !ev && eL.reorderDefaultSounds && eP.length > 6,
        eK = M.b0.useSetting(),
        e$ = i.useMemo(() => new Set(eK), [eK]),
        ez = null == s,
        eq = V.Ay.canUseCustomCallSounds(eN),
        eX = i.useCallback(
            (e) => {
                e$.has(e) ? e$.delete(e) : e$.add(e), M.b0.updateSetting(Array.from(e$));
            },
            [e$],
        ),
        eQ = i.useCallback(
            (e, t, n, r) => {
                if (null != d && !f) return d(e, n);
                let i = (0, W.Ir)(eN, e, s, !1);
                if (null != d && f && i) d(e, n);
                else if (!E && i && (0, W.Au)(s))
                    (0, W.Ak)(e, s?.id ?? ee.dJq, t, r),
                        eb &&
                            F.default.track(ee.HAw.SEARCH_RESULT_SELECTED, {
                                search_type: ee.I4_.SOUNDBOARD,
                                channel_id: s?.id,
                                query: eR,
                                location_stack: t,
                            });
                else {
                    if ((0, W.Ir)(eN, e, s)) return;
                    S && eT(e);
                }
            },
            [E, eN, s, S, eb, eR, d, f],
        ),
        eZ = i.useCallback(
            (e, t) => {
                switch (e.item.type) {
                    case j.uq.SOUND:
                        let n = ea[e?.category] ?? null,
                            r = e?.item.index;
                        return eQ(e.item.sound, null == n ? eE : [...eE, n], t?.shiftKey !== !0, r);
                    case j.uq.ADD_SOUND:
                        return c(), (0, J.A)(e.item.guild.id);
                }
            },
            [eE, eQ, c],
        ),
        eJ = i.useCallback(
            (e, n, i, o, l) => {
                let u = eB[i.sectionIndex],
                    c = S && eo(u.categoryInfo, ev, t) && ej,
                    d = (t) => {
                        l(t);
                        let n = e[t];
                        ev || n?.item.type !== j.uq.SOUND || (0, W.Ir)(eN, n.item.sound, s, !1)
                            ? ey(null)
                            : ey(n.item.sound);
                    };
                return (0, r.jsx)(
                    "ul",
                    {
                        ...n,
                        onMouseLeave: () => {
                            ey(null);
                        },
                        className: a()(ei.a, { [ei.uL]: c }),
                        children: e.map((e, t) =>
                            (0, r.jsx)(
                                Z.A,
                                {
                                    descriptor: e,
                                    soundButtonProps: {
                                        channel: s,
                                        interactive: ez ? eq : !eO,
                                        forceSecondaryActions: !0,
                                        analyticsLocations: eE,
                                    },
                                    rowIndex: i.rowIndex,
                                    columnIndex: t,
                                    isUsingKeyboardNavigation: i.isUsingKeyboardNavigation,
                                    suppressPlaySound: E,
                                    getItemProps: o,
                                    onSelectItem: eZ,
                                    onItemMouseEnter: d,
                                    buttonOverlay: G,
                                    isNitroLocked: c,
                                    showLockForDisabledSound: S,
                                    inExpressionPicker: ef,
                                },
                                t,
                            ),
                        ),
                    },
                    `row-${n["aria-rowindex"]}`,
                );
            },
            [eB, S, ev, t, eN, E, eZ, s, ez, eq, eO, eE, G, ej, ef],
        ),
        e0 = i.useCallback(
            (e, t) => {
                if (e <= 0 || !S) return !1;
                let n = eB[e],
                    r = eB[e - 1],
                    i = eo(n.categoryInfo, ev, t),
                    s = eo(r.categoryInfo, ev, t);
                return i && !s;
            },
            [eB, S, ev],
        ),
        e1 = i.useCallback(() => {
            let e = H.A.getSoundById("3");
            null != e && eT(e);
        }, []),
        e2 = i.useCallback(() => {
            let e = (0, V.Dd)(en.PremiumTypes.TIER_2);
            return er.intl.format(er.t["tw/SSq"], { nitroTierName: e, onClick: e1 });
        }, [e1]),
        e3 = i.useCallback((e) => (e0(e, t) ? es : 32), [t, e0]),
        e6 = i.useCallback(
            (e) => {
                let t = e === eB.length - 1;
                return eY && t ? 70 : ej && e === eH ? 20 : 0;
            },
            [eB.length, ej, eY, eH],
        ),
        e4 = i.useCallback((e, t) => (0, r.jsx)("div", { children: t }, e), []),
        e7 = i.useCallback(
            (e, n) => {
                let i = `${e.key}`,
                    s = S && eo(e.categoryInfo, ev, t),
                    a = e0(n, t),
                    o = e$.has(i);
                return (0, r.jsx)(
                    el,
                    {
                        categoryInfo: e.categoryInfo,
                        toggleCollapsed: () => {
                            F.default.track(ee.HAw.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
                                location: { page: ee.liQ.SOUNDBOARD_POPOUT },
                                tab: et.kx.SOUNDBOARD,
                                guild_id: t ?? null,
                                collapsed: !o,
                                sticker_pack_id: null,
                                num_expressions: e.items.length,
                            }),
                                eX(i);
                        },
                        collapsed: o,
                        isSectionNitroLocked: s && ej,
                        showNitroDivider: a && ej,
                    },
                    `header-${i}`,
                );
            },
            [e$, eX, t, e0, S, ev, ej],
        ),
        e5 = i.useCallback(
            (e, t) => {
                let n = t === eB.length - 1,
                    i = t === eH;
                return eY && n
                    ? (0, r.jsx)("div", { className: a()(ei.Lk, { [ei.Ns]: i }) })
                    : ej && t === eH
                      ? (0, r.jsx)("div", { className: a()(ei.a3, { [ei.Ns]: i }) })
                      : null;
            },
            [eH, ej, eY, eB.length],
        ),
        e8 = i.useCallback((e) => eG((0, z.lG)(e, ex, eN, s, eE)), [s, eN, ex, eE]),
        e9 = i.useCallback(
            (e) => {
                (0, h.L3)(e, async () => {
                    let { default: e } = await n.e("51111").then(n.bind(n, 323002));
                    return (t) => (0, r.jsx)(e, { sourceAnalyticsLocations: eE, ...t });
                });
            },
            [eE],
        ),
        te = i.useCallback(
            () =>
                ef
                    ? (0, r.jsx)(O.Gq, {
                          renderPopout: () => (0, r.jsx)(O.qn, {}),
                          tooltipText: er.intl.string(er.t["19lt24"]),
                          position: "top",
                          clickableClassName: a()(ei.Jm, ei.Zz),
                          children: (0, r.jsx)(p.H, { size: "md", color: "currentColor", className: ei.By }),
                      })
                    : (0, r.jsx)(_.D, {
                          tabIndex: 0,
                          className: ei.Jm,
                          onClick: e9,
                          "aria-label": er.intl.string(er.t.kbFsAD),
                          children: (0, r.jsx)(p.H, { size: "md", color: "currentColor", className: ei.By }),
                      }),
            [ef, e9],
        ),
        tt = i.useCallback(
            (e) => {
                let n = eP.filter((e) => !eW || e.categoryInfo.type !== j.Cx.DEFAULTS),
                    i = eB.findIndex((e) => e.categoryInfo.type === j.Cx.DEFAULTS);
                return (0, r.jsx)(X.A, {
                    soundboardListRef: e,
                    categories: n,
                    shouldUpsellLockedCategories: ej,
                    listPadding: ec,
                    guildId: t,
                    inExpressionPicker: ef,
                    showPinnedDefaultsShortcut: eW,
                    defaultsSectionIndex: i,
                });
            },
            [eP, eB, ec, ej, t, ef, eW],
        ),
        tn = i.useCallback(() => {
            let e = (0, C.qD)();
            return (0, V.LE)(e, en.pe.TIER_2) ?? er.intl.string(er.t.pj0XBN);
        }, []),
        tr = i.useCallback(() => {
            if (eY) {
                let e = eV;
                return (
                    eL.alwaysPinned && (e = !0),
                    (0, r.jsx)(R.d, {
                        showUpsell: e,
                        text: e2(),
                        button: tn(),
                        buttonAnalyticsObject: { section: ee.JJy.SOUND_PICKER_FLOATING_UPSELL },
                        useGradientBg: ew.gradientBackground,
                        hoveredNitroLockedSound: eS,
                        subscribeButtonVariantOverride: ew.subscribeButtonVariant,
                        useLegacyButton: ew.useLegacyButton,
                        leadingAction: eM
                            ? (0, r.jsx)(D.l, {
                                  size: "sm",
                                  className: ei.ij,
                                  location: g.A.PREMIUM_WISHLIST_SOUNDBOARD_UPSELL,
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
            eY,
            eL.alwaysPinned,
            ew.gradientBackground,
            ew.subscribeButtonVariant,
            ew.useLegacyButton,
            eM,
            eV,
            eS,
        ]),
        ti = i.useCallback(
            (e) =>
                e?.item.type === j.uq.SOUND
                    ? (0, r.jsx)(Q.A, { closePicker: c, soundboardSound: e?.item.sound ?? null })
                    : null,
            [c],
        ),
        ts = i.useCallback(() => {
            let e = H.A.getSoundById("3"),
                t = new Audio((0, K.A)("3"));
            null != eh.current && eh.current.pause(),
                (eh.current = t),
                (t.currentTime = 0),
                (t.volume = (0, $.A)(e?.volume ?? 1)),
                t.play();
        }, [eh]),
        ta = (0, l.bG)([x.A], () => x.A.getMediaSessionId());
    return (
        (0, I.A)({
            type: o.ImpressionTypes.POPOUT,
            name: o.ImpressionNames.SOUNDBOARD_POPOUT,
            properties: {
                source: ep,
                guild_id: t,
                media_session_id: ta,
                available_custom_sounds_count: ek.unlockedCustomSoundCount,
                unavailable_custom_sounds_count: ek.lockedCustomSoundCount,
                favorite_sounds_count: ek.favoriteSoundCount,
            },
        }),
        (0, r.jsxs)(r.Fragment, {
            children: [
                null != eI
                    ? (0, r.jsx)(L.A, {
                          title: er.intl.string(ef ? er.t.rZEEvU : er.t.jGDYF0),
                          description: er.intl.string(ef ? er.t.ZPNG5A : er.t["grL/hg"]),
                          analyticsLocationSection: ee.JJy.SOUNDBOARD_SOUND_PICKER_UPSELL,
                          upsellViewedTrackingData: {
                              type: en.e.SOUND_PICKER_SOUND_CLICKED,
                              is_external: !0,
                              location: { ...eA, object: ee.ZSU.SOUNDBOARD_SOUND },
                              location_stack: em,
                              sku_id: V.Ay.getSkuIdForPremiumType(en.PremiumTypes.TIER_2),
                          },
                          onClose: () => eT(null),
                          onLearnMore: c,
                          onDisplay: ts,
                      })
                    : void 0,
                (0, r.jsx)(v.A, {
                    categories: eB,
                    collapsedCategories: e$,
                    containerWidth: u,
                    store: y.LW,
                    onSelectItem: eZ,
                    onSearchExpressions: e8,
                    hasSearchResults: eU.length > 0,
                    defaultSearchPlaceholder: er.intl.string(er.t.sKt3xS),
                    renderRow: eJ,
                    renderSectionHeader: e7,
                    renderSectionFooter: e5,
                    renderSection: e4,
                    renderCategoryList: tt,
                    renderHeaderAccessories: te,
                    rowHeight: 48,
                    sectionHeaderHeight: e3,
                    sectionFooterHeight: e6,
                    itemNodeWidth: 150,
                    gridNavigatorId: eD,
                    renderEmptySearchState: eu,
                    renderInspector: ti,
                    gridNotice: b,
                    renderHeader: ed,
                    renderUpsell: tr,
                }),
            ],
        })
    );
}
