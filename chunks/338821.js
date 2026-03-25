"use strict";
n.d(t, { A: () => ed, B: () => el }), n(30146);
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
    N = n(400669),
    C = n(421162),
    R = n(523006),
    O = n(253932),
    b = n(909536),
    D = n(383501),
    L = n(287809),
    w = n(977997),
    M = n(147925),
    x = n(954571),
    P = n(927578),
    k = n(15290),
    U = n(209932),
    G = n(807348),
    F = n(1018),
    V = n(536432),
    B = n(102597),
    H = n(904054),
    j = n(147472),
    Y = n(918530),
    W = n(114028),
    K = n(862933),
    $ = n(985417),
    z = n(797179),
    q = n(652215),
    Z = n(698279),
    X = n(788868),
    Q = n(985018),
    J = n(426889);
let ee = 16,
    et = 48,
    en = 32,
    er = 8,
    ei = 32 + v.kg - er,
    es = 150,
    ea = "3",
    eo = {
        [G.Cx.SEARCH]: f.A.SOUNDBOARD_SEARCH_RESULTS_SECTION,
        [G.Cx.DEFAULTS]: f.A.SOUNDBOARD_DEFAULT_SOUNDS_SECTION,
        [G.Cx.GUILD]: f.A.SOUNDBOARD_GUILD_SOUNDS_SECTION,
        [G.Cx.FAVORITES]: f.A.SOUNDBOARD_FAVORITES_SECTION,
    };
function el(e, t, n) {
    return (null == n && e.type === G.Cx.GUILD && !t) || (e.type === G.Cx.GUILD && e.guild.id !== n && !t);
}
function eu(e) {
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
            case G.Cx.FAVORITES:
                return (0, r.jsx)(u.Gg5, { size: "xs", color: "currentColor", className: J.nr });
            case G.Cx.GUILD:
                return (0, r.jsx)(E.A, { guild: t.guild, height: ee, width: ee });
            case G.Cx.DEFAULTS:
                return (0, r.jsx)(u.pVd, {
                    size: "custom",
                    width: 28,
                    height: 28,
                    color: "currentColor",
                    className: J.nr,
                });
            case G.Cx.SEARCH:
                return (0, r.jsx)(u.$p$, { size: "md", color: "currentColor", className: J.nr });
        }
    }
    function d() {
        switch (t.type) {
            case G.Cx.FAVORITES:
                return Q.intl.string(Q.t.k8fFjp);
            case G.Cx.GUILD:
                return t.guild.name;
            case G.Cx.DEFAULTS:
                return Q.intl.string(Q.t.Rtvk9X);
            case G.Cx.SEARCH:
                return Q.intl.string(Q.t["zkoeq/"]);
        }
    }
    return (0, r.jsxs)(r.Fragment, {
        children: [
            o && (0, r.jsx)(v.Ay, { colorOpacity: 0.35, glowOpacity: 0.35, className: J.yH, enableBrandRefresh: l }),
            (0, r.jsx)("div", {
                className: a()(J.hd, { [J.Jb]: s, [J.VD]: s, [J.N4]: l }),
                children: (0, r.jsx)(u.DUT, {
                    className: J.bV,
                    onClick: i,
                    "aria-expanded": !n,
                    children: (0, r.jsxs)("div", {
                        className: J.M2,
                        children: [
                            c(),
                            (0, r.jsx)(u.Heading, {
                                variant: "text-sm/semibold",
                                color: "none",
                                className: J.Gf,
                                children: d(),
                            }),
                            (0, r.jsx)(M.A, {
                                className: J.nr,
                                direction: n ? M.A.Directions.RIGHT : M.A.Directions.DOWN,
                            }),
                        ],
                    }),
                }),
            }),
        ],
    });
}
function ec() {
    return (0, r.jsx)(d.A, { message: Q.intl.string(Q.t.bgDdNK) });
}
function ed(e) {
    let {
            guildId: t,
            channel: s,
            containerWidth: d,
            onClose: E,
            onSelect: v,
            shouldValidateSelectedSound: M = !1,
            suppressPlaySound: ee = !1,
            shouldShowLockedSounds: er = !0,
            gridNotice: ed,
            soundButtonOverlay: e_,
            listPadding: ef,
            renderHeader: ep,
            defaultSoundsOnly: eh = !1,
            inExpressionPicker: em,
            analyticsSource: eE,
            enablePickerUpsellPremiumBrandRefresh: eg,
        } = e,
        { audioRef: eA } = i.useContext(R.A),
        { analyticsLocations: eI } = (0, p.Ay)(),
        { analyticsLocations: eT } = (0, p.Ay)(f.A.PREMIUM_UPSELL),
        { location: eS } = (0, _.p)(),
        ey = i.useMemo(() => ({ ...eS, section: q.JJy.SOUNDBOARD_SOUND_PICKER }), [eS]),
        [ev, eN] = i.useState(null),
        [eC, eR] = i.useState(null),
        eO = (0, l.bG)([L.default], () => L.default.getCurrentUser()),
        eb = (0, P.TW)(eO, X.PremiumTypes.TIER_2),
        eD = (0, l.bG)([w.A], () => w.A.getVoiceState(t, eO?.id ?? q.dJq)),
        eL = eD?.selfDeaf || eD?.mute || eD?.suppress,
        ew = (0, A.RQ)((e) => e.searchQuery),
        eM = null != ew && "" !== ew,
        ex = (0, m.GV)(),
        eP = k.T.useConfig({ location: "SoundboardSoundGrid" }),
        ek = F.h.useConfig({ location: "SoundboardSoundGrid" }),
        eU = (0, b.St)("soundboard_floating_upsell"),
        {
            categories: eG,
            availableSounds: eF,
            soundCounts: eV,
        } = (0, Y.A)(s, { moveDefaultsToBottom: eP.reorderDefaultSounds }, eh),
        [eB, eH] = i.useState([]),
        ej = (0, Y.I)(eG, eB, ew),
        eY = (0, A.RQ)((e) => e.isNitroLockedSectionVisible),
        eW = i.useMemo(() => ej.filter((e) => e.items.length > 0), [ej]),
        eK = i.useMemo(
            () => eW.findLastIndex((e) => !!(0, P.Em)(e.categoryInfo) && e.categoryInfo.isNitroLocked),
            [eW],
        ),
        e$ = !eb && er && -1 !== eK,
        ez = !eb && er && -1 !== eK,
        eq = !eb && eP.reorderDefaultSounds && eG.length > 6,
        eZ = O.b0.useSetting(),
        eX = i.useMemo(() => new Set(eZ), [eZ]),
        eQ = null == s,
        eJ = P.Ay.canUseCustomCallSounds(eO),
        e0 = i.useCallback(
            (e) => {
                eX.has(e) ? eX.delete(e) : eX.add(e), O.b0.updateSetting(Array.from(eX));
            },
            [eX],
        ),
        e1 = i.useCallback(
            (e, t, n, r) => {
                if (null != v && !M) return v(e, n);
                let i = (0, V.Ir)(eO, e, s, !1);
                if (null != v && M && i) v(e, n);
                else if (!ee && i && (0, V.Au)(s))
                    (0, V.Ak)(e, s?.id ?? q.dJq, t, r),
                        eM &&
                            x.default.track(q.HAw.SEARCH_RESULT_SELECTED, {
                                search_type: q.I4_.SOUNDBOARD,
                                channel_id: s?.id,
                                query: ew,
                                location_stack: t,
                            });
                else {
                    if ((0, V.Ir)(eO, e, s)) return;
                    er && eN(e);
                }
            },
            [ee, eO, s, er, eM, ew, v, M],
        ),
        e2 = i.useCallback(
            (e, t) => {
                switch (e.item.type) {
                    case G.uq.SOUND:
                        let n = eo[e?.category] ?? null,
                            r = e?.item.index;
                        return e1(e.item.sound, null == n ? eI : [...eI, n], t?.shiftKey !== !0, r);
                    case G.uq.ADD_SOUND:
                        return E(), (0, z.A)(e.item.guild.id);
                }
            },
            [eI, e1, E],
        ),
        e3 = i.useCallback(
            (e, n, i, o, l) => {
                let u = eW[i.sectionIndex],
                    c = er && el(u.categoryInfo, eb, t) && e$,
                    d = (t) => {
                        l(t);
                        let n = e[t];
                        c && n?.item.type === G.uq.SOUND ? eR(n.item.sound) : eR(null);
                    },
                    _ = () => {
                        eR(null);
                    };
                return (0, r.jsx)(
                    "ul",
                    {
                        ...n,
                        onMouseLeave: _,
                        className: a()(J.a, { [J.uL]: c, [J.N4]: eg }),
                        children: e.map((e, t) =>
                            (0, r.jsx)(
                                $.A,
                                {
                                    descriptor: e,
                                    soundButtonProps: {
                                        channel: s,
                                        interactive: eQ ? eJ : !eL,
                                        forceSecondaryActions: !0,
                                        analyticsLocations: eI,
                                    },
                                    rowIndex: i.rowIndex,
                                    columnIndex: t,
                                    isUsingKeyboardNavigation: i.isUsingKeyboardNavigation,
                                    suppressPlaySound: ee,
                                    getItemProps: o,
                                    onSelectItem: e2,
                                    onItemMouseEnter: d,
                                    buttonOverlay: e_,
                                    isNitroLocked: c,
                                    showLockForDisabledSound: er,
                                    inExpressionPicker: em,
                                },
                                t,
                            ),
                        ),
                    },
                    `row-${n["aria-rowindex"]}`,
                );
            },
            [eW, er, eb, t, ee, e2, s, eQ, eJ, eL, eI, e_, e$, em, eg],
        ),
        e6 = i.useCallback(
            (e, t) => {
                if (e <= 0 || !er) return !1;
                let n = eW[e],
                    r = eW[e - 1],
                    i = el(n.categoryInfo, eb, t),
                    s = el(r.categoryInfo, eb, t);
                return i && !s;
            },
            [eW, er, eb],
        ),
        e4 = i.useCallback(() => {
            let e = U.A.getSoundById(ea);
            null != e && eN(e);
        }, []),
        e5 = i.useCallback(() => {
            let e = (0, P.Dd)(X.PremiumTypes.TIER_2);
            return Q.intl.format(Q.t["tw/SSq"], { nitroTierName: e, onClick: e4 });
        }, [e4]),
        e7 = i.useCallback((e) => (e6(e, t) ? ei : en), [t, e6]),
        e8 = i.useCallback(
            (e) => {
                let t = e === eW.length - 1;
                return ez && t ? 70 : e$ && e === eK ? 20 : 0;
            },
            [eW.length, e$, ez, eK],
        ),
        e9 = i.useCallback((e, t) => (0, r.jsx)("div", { children: t }, e), []),
        te = i.useCallback(
            (e, n) => {
                let i = `${e.key}`,
                    s = er && el(e.categoryInfo, eb, t),
                    a = e6(n, t),
                    o = eX.has(i),
                    l = () => {
                        x.default.track(q.HAw.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
                            location: { page: q.liQ.SOUNDBOARD_POPOUT },
                            tab: Z.kx.SOUNDBOARD,
                            guild_id: t ?? null,
                            collapsed: !o,
                            sticker_pack_id: null,
                            num_expressions: e.items.length,
                        }),
                            e0(i);
                    };
                return (0, r.jsx)(
                    eu,
                    {
                        categoryInfo: e.categoryInfo,
                        toggleCollapsed: l,
                        collapsed: o,
                        isSectionNitroLocked: s && e$,
                        showNitroDivider: a && e$,
                        enablePickerUpsellPremiumBrandRefresh: eg,
                    },
                    `header-${i}`,
                );
            },
            [eX, e0, t, e6, er, eb, e$, eg],
        ),
        tt = i.useCallback(
            (e, t) => {
                let n = t === eW.length - 1,
                    i = t === eK;
                return ez && n
                    ? (0, r.jsx)("div", { className: a()(J.Lk, { [J.Ns]: i, [J.N4]: eg }) })
                    : e$ && t === eK
                      ? (0, r.jsx)("div", { className: a()(J.a3, { [J.Ns]: i, [J.N4]: eg }) })
                      : null;
            },
            [eK, e$, ez, eW.length, eg],
        ),
        tn = i.useCallback((e) => eH((0, j.lG)(e, eF, eO, s, eI)), [s, eO, eF, eI]),
        tr = i.useCallback(
            (e) => {
                (0, c.L3)(e, async () => {
                    let { default: e } = await n.e("51111").then(n.bind(n, 323002));
                    return (t) => (0, r.jsx)(e, { sourceAnalyticsLocations: eI, ...t });
                });
            },
            [eI],
        ),
        ti = i.useCallback(
            () =>
                em
                    ? (0, r.jsx)(S.Gq, {
                          renderPopout: () => (0, r.jsx)(S.qn, {}),
                          tooltipText: Q.intl.string(Q.t["19lt24"]),
                          position: "top",
                          clickableClassName: a()(J.Jm, J.Zz),
                          children: (0, r.jsx)(u.HKD, { size: "md", color: "currentColor", className: J.By }),
                      })
                    : (0, r.jsx)(u.DUT, {
                          tabIndex: 0,
                          className: J.Jm,
                          onClick: tr,
                          "aria-label": Q.intl.string(Q.t.kbFsAD),
                          children: (0, r.jsx)(u.HKD, { size: "md", color: "currentColor", className: J.By }),
                      }),
            [em, tr],
        ),
        ts = i.useCallback(
            (e) => {
                let n = eG.filter((e) => !eq || e.categoryInfo.type !== G.Cx.DEFAULTS),
                    i = eW.findIndex((e) => e.categoryInfo.type === G.Cx.DEFAULTS);
                return (0, r.jsx)(W.A, {
                    soundboardListRef: e,
                    categories: n,
                    shouldUpsellLockedCategories: e$,
                    listPadding: ef,
                    guildId: t,
                    inExpressionPicker: em,
                    showPinnedDefaultsShortcut: eq,
                    defaultsSectionIndex: i,
                });
            },
            [eG, eW, ef, e$, t, em, eq],
        ),
        ta = i.useCallback(() => {
            let e = (0, T.qD)();
            return (0, P.LE)(e, X.pe.TIER_2) ?? Q.intl.string(Q.t.pj0XBN);
        }, []),
        to = i.useCallback(() => {
            if (ez) {
                let e = eY;
                return (
                    eP.alwaysPinned && (e = !0),
                    (0, r.jsx)(y.d, {
                        showUpsell: e,
                        text: e5(),
                        button: ta(),
                        buttonAnalyticsObject: { section: q.JJy.SOUND_PICKER_FLOATING_UPSELL },
                        useGradientBg: ek.gradientBackground,
                        hoveredNitroLockedSound: eC,
                        subscribeButtonVariantOverride: ek.subscribeButtonVariant,
                        leadingAction: eU ? (0, r.jsx)(N.l, { size: "sm", className: J.ij }) : void 0,
                    })
                );
            }
            return null;
        }, [e5, ta, ez, eP.alwaysPinned, ek.gradientBackground, ek.subscribeButtonVariant, eU, eY, eC]),
        tl = i.useCallback(
            (e) =>
                e?.item.type === G.uq.SOUND
                    ? (0, r.jsx)(K.A, { closePicker: E, soundboardSound: e?.item.sound ?? null })
                    : null,
            [E],
        ),
        tu = i.useCallback(() => {
            let e = U.A.getSoundById(ea),
                t = new Audio((0, B.A)(ea));
            null != eA.current && eA.current.pause(),
                (eA.current = t),
                (t.currentTime = 0),
                (t.volume = (0, H.A)(e?.volume ?? 1)),
                t.play();
        }, [eA]),
        tc = (0, l.bG)([D.A], () => D.A.getMediaSessionId());
    return (
        (0, h.A)({
            type: o.ImpressionTypes.POPOUT,
            name: o.ImpressionNames.SOUNDBOARD_POPOUT,
            properties: {
                source: eE,
                guild_id: t,
                media_session_id: tc,
                available_custom_sounds_count: eV.unlockedCustomSoundCount,
                unavailable_custom_sounds_count: eV.lockedCustomSoundCount,
                favorite_sounds_count: eV.favoriteSoundCount,
            },
        }),
        (0, r.jsxs)(r.Fragment, {
            children: [
                null != ev
                    ? (0, r.jsx)(C.A, {
                          title: Q.intl.string(em ? Q.t.rZEEvU : Q.t.jGDYF0),
                          description: Q.intl.string(em ? Q.t.ZPNG5A : Q.t["grL/hg"]),
                          analyticsLocationSection: q.JJy.SOUNDBOARD_SOUND_PICKER_UPSELL,
                          upsellViewedTrackingData: {
                              type: X.e.SOUND_PICKER_SOUND_CLICKED,
                              is_external: !0,
                              location: { ...ey, object: q.ZSU.SOUNDBOARD_SOUND },
                              location_stack: eT,
                              sku_id: P.Ay.getSkuIdForPremiumType(X.PremiumTypes.TIER_2),
                          },
                          onClose: () => eN(null),
                          onLearnMore: E,
                          onDisplay: tu,
                      })
                    : void 0,
                (0, r.jsx)(I.A, {
                    categories: eW,
                    collapsedCategories: eX,
                    containerWidth: d,
                    store: g.LW,
                    onSelectItem: e2,
                    onSearchExpressions: tn,
                    hasSearchResults: eB.length > 0,
                    defaultSearchPlaceholder: Q.intl.string(Q.t.sKt3xS),
                    renderRow: e3,
                    renderSectionHeader: te,
                    renderSectionFooter: tt,
                    renderSection: e9,
                    renderCategoryList: ts,
                    renderHeaderAccessories: ti,
                    rowHeight: et,
                    sectionHeaderHeight: e7,
                    sectionFooterHeight: e8,
                    itemNodeWidth: es,
                    gridNavigatorId: ex,
                    renderEmptySearchState: ec,
                    renderInspector: tl,
                    gridNotice: ed,
                    renderHeader: ep,
                    renderUpsell: to,
                }),
            ],
        })
    );
}
