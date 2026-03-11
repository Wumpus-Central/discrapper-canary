"use strict";
n.d(t, { A: () => eu, B: () => ea }), n(30146);
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
    x = n(15290),
    P = n(209932),
    k = n(807348),
    U = n(1018),
    G = n(536432),
    F = n(102597),
    V = n(904054),
    B = n(147472),
    H = n(918530),
    j = n(114028),
    Y = n(862933),
    W = n(985417),
    K = n(797179),
    $ = n(652215),
    z = n(698279),
    q = n(788868),
    Z = n(985018),
    X = n(426889);
let Q = 16,
    J = 48,
    ee = 32,
    et = 8,
    en = 32 + v.kg - et,
    er = 150,
    ei = "3",
    es = {
        [k.Cx.SEARCH]: f.A.SOUNDBOARD_SEARCH_RESULTS_SECTION,
        [k.Cx.DEFAULTS]: f.A.SOUNDBOARD_DEFAULT_SOUNDS_SECTION,
        [k.Cx.GUILD]: f.A.SOUNDBOARD_GUILD_SOUNDS_SECTION,
        [k.Cx.FAVORITES]: f.A.SOUNDBOARD_FAVORITES_SECTION,
    };
function ea(e, t, n) {
    return (null == n && e.type === k.Cx.GUILD && !t) || (e.type === k.Cx.GUILD && e.guild.id !== n && !t);
}
function eo(e) {
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
            case k.Cx.FAVORITES:
                return (0, r.jsx)(u.Gg5, { size: "xs", color: "currentColor", className: X.nr });
            case k.Cx.GUILD:
                return (0, r.jsx)(E.A, { guild: t.guild, height: Q, width: Q });
            case k.Cx.DEFAULTS:
                return (0, r.jsx)(u.pVd, {
                    size: "custom",
                    width: 28,
                    height: 28,
                    color: "currentColor",
                    className: X.nr,
                });
            case k.Cx.SEARCH:
                return (0, r.jsx)(u.$p$, { size: "md", color: "currentColor", className: X.nr });
        }
    }
    function d() {
        switch (t.type) {
            case k.Cx.FAVORITES:
                return Z.intl.string(Z.t.k8fFjp);
            case k.Cx.GUILD:
                return t.guild.name;
            case k.Cx.DEFAULTS:
                return Z.intl.string(Z.t.Rtvk9X);
            case k.Cx.SEARCH:
                return Z.intl.string(Z.t["zkoeq/"]);
        }
    }
    return (0, r.jsxs)(r.Fragment, {
        children: [
            o && (0, r.jsx)(v.Ay, { colorOpacity: 0.35, glowOpacity: 0.35, className: X.yH, enableBrandRefresh: l }),
            (0, r.jsx)("div", {
                className: a()(X.hd, { [X.Jb]: s, [X.VD]: s, [X.N4]: l }),
                children: (0, r.jsx)(u.DUT, {
                    className: X.bV,
                    onClick: i,
                    "aria-expanded": !n,
                    children: (0, r.jsxs)("div", {
                        className: X.M2,
                        children: [
                            c(),
                            (0, r.jsx)(u.Heading, {
                                variant: "text-sm/semibold",
                                color: "none",
                                className: X.Gf,
                                children: d(),
                            }),
                            (0, r.jsx)(L.A, {
                                className: X.nr,
                                direction: n ? L.A.Directions.RIGHT : L.A.Directions.DOWN,
                            }),
                        ],
                    }),
                }),
            }),
        ],
    });
}
function el() {
    return (0, r.jsx)(d.A, { message: Z.intl.string(Z.t.bgDdNK) });
}
function eu(e) {
    let {
            guildId: t,
            channel: s,
            containerWidth: d,
            onClose: E,
            onSelect: v,
            shouldValidateSelectedSound: L = !1,
            suppressPlaySound: Q = !1,
            shouldShowLockedSounds: et = !0,
            gridNotice: eu,
            soundButtonOverlay: ec,
            listPadding: ed,
            renderHeader: e_,
            defaultSoundsOnly: ef = !1,
            inExpressionPicker: ep,
            analyticsSource: eh,
            enablePickerUpsellPremiumBrandRefresh: em,
        } = e,
        { audioRef: eE } = i.useContext(C.A),
        { analyticsLocations: eg } = (0, p.Ay)(),
        { analyticsLocations: eA } = (0, p.Ay)(f.A.PREMIUM_UPSELL),
        { location: eI } = (0, _.p)(),
        eT = i.useMemo(() => ({ ...eI, section: $.JJy.SOUNDBOARD_SOUND_PICKER }), [eI]),
        [eS, ey] = i.useState(null),
        [ev, eN] = i.useState(null),
        eC = (0, l.bG)([b.default], () => b.default.getCurrentUser()),
        eR = (0, M.TW)(eC, q.PremiumTypes.TIER_2),
        eO = (0, l.bG)([D.A], () => D.A.getVoiceState(t, eC?.id ?? $.dJq)),
        eb = eO?.selfDeaf || eO?.mute || eO?.suppress,
        eD = (0, A.RQ)((e) => e.searchQuery),
        eL = null != eD && "" !== eD,
        ew = (0, m.GV)(),
        eM = x.T.useConfig({ location: "SoundboardSoundGrid" }),
        ex = U.h.useConfig({ location: "SoundboardSoundGrid" }),
        {
            categories: eP,
            availableSounds: ek,
            soundCounts: eU,
        } = (0, H.A)(s, { moveDefaultsToBottom: eM.reorderDefaultSounds }, ef),
        [eG, eF] = i.useState([]),
        eV = (0, H.I)(eP, eG, eD),
        eB = (0, A.RQ)((e) => e.isNitroLockedSectionVisible),
        eH = i.useMemo(() => eV.filter((e) => e.items.length > 0), [eV]),
        ej = i.useMemo(
            () => eH.findLastIndex((e) => !!(0, M.Em)(e.categoryInfo) && e.categoryInfo.isNitroLocked),
            [eH],
        ),
        eY = !eR && et && -1 !== ej,
        eW = !eR && et && -1 !== ej,
        eK = !eR && eM.reorderDefaultSounds && eP.length > 6,
        e$ = R.b0.useSetting(),
        ez = i.useMemo(() => new Set(e$), [e$]),
        eq = null == s,
        eZ = M.Ay.canUseCustomCallSounds(eC),
        eX = i.useCallback(
            (e) => {
                ez.has(e) ? ez.delete(e) : ez.add(e), R.b0.updateSetting(Array.from(ez));
            },
            [ez],
        ),
        eQ = i.useCallback(
            (e, t, n, r) => {
                if (null != v && !L) return v(e, n);
                let i = (0, G.Ir)(eC, e, s, !1);
                if (null != v && L && i) v(e, n);
                else if (!Q && i && (0, G.Au)(s))
                    (0, G.Ak)(e, s?.id ?? $.dJq, t, r),
                        eL &&
                            w.default.track($.HAw.SEARCH_RESULT_SELECTED, {
                                search_type: $.I4_.SOUNDBOARD,
                                channel_id: s?.id,
                                query: eD,
                                location_stack: t,
                            });
                else {
                    if ((0, G.Ir)(eC, e, s)) return;
                    et && ey(e);
                }
            },
            [Q, eC, s, et, eL, eD, v, L],
        ),
        eJ = i.useCallback(
            (e, t) => {
                switch (e.item.type) {
                    case k.uq.SOUND:
                        let n = es[e?.category] ?? null,
                            r = e?.item.index;
                        return eQ(e.item.sound, null == n ? eg : [...eg, n], t?.shiftKey !== !0, r);
                    case k.uq.ADD_SOUND:
                        return E(), (0, K.A)(e.item.guild.id);
                }
            },
            [eg, eQ, E],
        ),
        e0 = i.useCallback(
            (e, n, i, o, l) => {
                let u = eH[i.sectionIndex],
                    c = et && ea(u.categoryInfo, eR, t) && eY,
                    d = (t) => {
                        l(t);
                        let n = e[t];
                        c && n?.item.type === k.uq.SOUND ? eN(n.item.sound) : eN(null);
                    },
                    _ = () => {
                        eN(null);
                    };
                return (0, r.jsx)(
                    "ul",
                    {
                        ...n,
                        onMouseLeave: _,
                        className: a()(X.a, { [X.uL]: c, [X.N4]: em }),
                        children: e.map((e, t) =>
                            (0, r.jsx)(
                                W.A,
                                {
                                    descriptor: e,
                                    soundButtonProps: {
                                        channel: s,
                                        interactive: eq ? eZ : !eb,
                                        forceSecondaryActions: !0,
                                        analyticsLocations: eg,
                                    },
                                    rowIndex: i.rowIndex,
                                    columnIndex: t,
                                    isUsingKeyboardNavigation: i.isUsingKeyboardNavigation,
                                    suppressPlaySound: Q,
                                    getItemProps: o,
                                    onSelectItem: eJ,
                                    onItemMouseEnter: d,
                                    buttonOverlay: ec,
                                    isNitroLocked: c,
                                    showLockForDisabledSound: et,
                                    inExpressionPicker: ep,
                                },
                                t,
                            ),
                        ),
                    },
                    `row-${n["aria-rowindex"]}`,
                );
            },
            [eH, et, eR, t, Q, eJ, s, eq, eZ, eb, eg, ec, eY, ep, em],
        ),
        e1 = i.useCallback(
            (e, t) => {
                if (e <= 0 || !et) return !1;
                let n = eH[e],
                    r = eH[e - 1],
                    i = ea(n.categoryInfo, eR, t),
                    s = ea(r.categoryInfo, eR, t);
                return i && !s;
            },
            [eH, et, eR],
        ),
        e2 = i.useCallback(() => {
            let e = P.A.getSoundById(ei);
            null != e && ey(e);
        }, []),
        e3 = i.useCallback(() => {
            let e = (0, M.Dd)(q.PremiumTypes.TIER_2);
            return Z.intl.format(Z.t["tw/SSq"], { nitroTierName: e, onClick: e2 });
        }, [e2]),
        e6 = i.useCallback((e) => (e1(e, t) ? en : ee), [t, e1]),
        e4 = i.useCallback(
            (e) => {
                let t = e === eH.length - 1;
                return eW && t ? 70 : eY && e === ej ? 20 : 0;
            },
            [eH.length, eY, eW, ej],
        ),
        e5 = i.useCallback((e, t) => (0, r.jsx)("div", { children: t }, e), []),
        e7 = i.useCallback(
            (e, n) => {
                let i = `${e.key}`,
                    s = et && ea(e.categoryInfo, eR, t),
                    a = e1(n, t),
                    o = ez.has(i),
                    l = () => {
                        w.default.track($.HAw.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
                            location: { page: $.liQ.SOUNDBOARD_POPOUT },
                            tab: z.kx.SOUNDBOARD,
                            guild_id: t ?? null,
                            collapsed: !o,
                            sticker_pack_id: null,
                            num_expressions: e.items.length,
                        }),
                            eX(i);
                    };
                return (0, r.jsx)(
                    eo,
                    {
                        categoryInfo: e.categoryInfo,
                        toggleCollapsed: l,
                        collapsed: o,
                        isSectionNitroLocked: s && eY,
                        showNitroDivider: a && eY,
                        enablePickerUpsellPremiumBrandRefresh: em,
                    },
                    `header-${i}`,
                );
            },
            [ez, eX, t, e1, et, eR, eY, em],
        ),
        e8 = i.useCallback(
            (e, t) => {
                let n = t === eH.length - 1,
                    i = t === ej;
                return eW && n
                    ? (0, r.jsx)("div", { className: a()(X.Lk, { [X.Ns]: i, [X.N4]: em }) })
                    : eY && t === ej
                      ? (0, r.jsx)("div", { className: a()(X.a3, { [X.Ns]: i, [X.N4]: em }) })
                      : null;
            },
            [ej, eY, eW, eH.length, em],
        ),
        e9 = i.useCallback((e) => eF((0, B.lG)(e, ek, eC, s, eg)), [s, eC, ek, eg]),
        te = i.useCallback(
            (e) => {
                (0, c.L3)(e, async () => {
                    let { default: e } = await n.e("51111").then(n.bind(n, 323002));
                    return (t) => (0, r.jsx)(e, { sourceAnalyticsLocations: eg, ...t });
                });
            },
            [eg],
        ),
        tt = i.useCallback(
            () =>
                ep
                    ? (0, r.jsx)(S.Gq, {
                          renderPopout: () => (0, r.jsx)(S.qn, {}),
                          tooltipText: Z.intl.string(Z.t["19lt24"]),
                          position: "top",
                          clickableClassName: a()(X.Jm, X.Zz),
                          children: (0, r.jsx)(u.HKD, { size: "md", color: "currentColor", className: X.By }),
                      })
                    : (0, r.jsx)(u.DUT, {
                          tabIndex: 0,
                          className: X.Jm,
                          onClick: te,
                          "aria-label": Z.intl.string(Z.t.kbFsAD),
                          children: (0, r.jsx)(u.HKD, { size: "md", color: "currentColor", className: X.By }),
                      }),
            [ep, te],
        ),
        tn = i.useCallback(
            (e) => {
                let n = eP.filter((e) => !eK || e.categoryInfo.type !== k.Cx.DEFAULTS),
                    i = eH.findIndex((e) => e.categoryInfo.type === k.Cx.DEFAULTS);
                return (0, r.jsx)(j.A, {
                    soundboardListRef: e,
                    categories: n,
                    shouldUpsellLockedCategories: eY,
                    listPadding: ed,
                    guildId: t,
                    inExpressionPicker: ep,
                    showPinnedDefaultsShortcut: eK,
                    defaultsSectionIndex: i,
                });
            },
            [eP, eH, ed, eY, t, ep, eK],
        ),
        tr = i.useCallback(() => {
            let e = (0, T.qD)();
            return (0, M.LE)(e, q.pe.TIER_2) ?? Z.intl.string(Z.t.pj0XBN);
        }, []),
        ti = i.useCallback(() => {
            if (eW) {
                let e = eB;
                return (
                    eM.alwaysPinned && (e = !0),
                    (0, r.jsx)(y.d, {
                        showUpsell: e,
                        text: e3(),
                        button: tr(),
                        buttonAnalyticsObject: { section: $.JJy.SOUND_PICKER_FLOATING_UPSELL },
                        useGradientBg: ex.gradientBackground,
                        hoveredNitroLockedSound: ev,
                        subscribeButtonVariantOverride: ex.subscribeButtonVariant,
                    })
                );
            }
            return null;
        }, [e3, tr, eW, eM.alwaysPinned, ex.gradientBackground, ex.subscribeButtonVariant, eB, ev]),
        ts = i.useCallback(
            (e) =>
                e?.item.type === k.uq.SOUND
                    ? (0, r.jsx)(Y.A, { closePicker: E, soundboardSound: e?.item.sound ?? null })
                    : null,
            [E],
        ),
        ta = i.useCallback(() => {
            let e = P.A.getSoundById(ei),
                t = new Audio((0, F.A)(ei));
            null != eE.current && eE.current.pause(),
                (eE.current = t),
                (t.currentTime = 0),
                (t.volume = (0, V.A)(e?.volume ?? 1)),
                t.play();
        }, [eE]),
        to = (0, l.bG)([O.A], () => O.A.getMediaSessionId());
    return (
        (0, h.A)({
            type: o.ImpressionTypes.POPOUT,
            name: o.ImpressionNames.SOUNDBOARD_POPOUT,
            properties: {
                source: eh,
                guild_id: t,
                media_session_id: to,
                available_custom_sounds_count: eU.unlockedCustomSoundCount,
                unavailable_custom_sounds_count: eU.lockedCustomSoundCount,
                favorite_sounds_count: eU.favoriteSoundCount,
            },
        }),
        (0, r.jsxs)(r.Fragment, {
            children: [
                null != eS
                    ? (0, r.jsx)(N.A, {
                          title: Z.intl.string(ep ? Z.t.rZEEvU : Z.t.jGDYF0),
                          description: Z.intl.string(ep ? Z.t.ZPNG5A : Z.t["grL/hg"]),
                          analyticsLocationSection: $.JJy.SOUNDBOARD_SOUND_PICKER_UPSELL,
                          upsellViewedTrackingData: {
                              type: q.e.SOUND_PICKER_SOUND_CLICKED,
                              is_external: !0,
                              location: { ...eT, object: $.ZSU.SOUNDBOARD_SOUND },
                              location_stack: eA,
                              sku_id: M.Ay.getSkuIdForPremiumType(q.PremiumTypes.TIER_2),
                          },
                          onClose: () => ey(null),
                          onLearnMore: E,
                          onDisplay: ta,
                      })
                    : void 0,
                (0, r.jsx)(I.A, {
                    categories: eH,
                    collapsedCategories: ez,
                    containerWidth: d,
                    store: g.LW,
                    onSelectItem: eJ,
                    onSearchExpressions: e9,
                    hasSearchResults: eG.length > 0,
                    defaultSearchPlaceholder: Z.intl.string(Z.t.sKt3xS),
                    renderRow: e0,
                    renderSectionHeader: e7,
                    renderSectionFooter: e8,
                    renderSection: e5,
                    renderCategoryList: tn,
                    renderHeaderAccessories: tt,
                    rowHeight: J,
                    sectionHeaderHeight: e6,
                    sectionFooterHeight: e4,
                    itemNodeWidth: er,
                    gridNavigatorId: ew,
                    renderEmptySearchState: el,
                    renderInspector: ts,
                    gridNotice: eu,
                    renderHeader: e_,
                    renderUpsell: ti,
                }),
            ],
        })
    );
}
