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
    J = n(582214);
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
    let { categoryInfo: t, collapsed: n, toggleCollapsed: i, isSectionNitroLocked: s, showNitroDivider: o } = e;
    function l() {
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
    function c() {
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
            o && (0, r.jsx)(v.Ay, { className: J.yH }),
            (0, r.jsx)("div", {
                className: a()(J.hd, { [J.Jb]: s, [J.VD]: s }),
                children: (0, r.jsx)(u.DUT, {
                    className: J.bV,
                    onClick: i,
                    "aria-expanded": !n,
                    children: (0, r.jsxs)("div", {
                        className: J.M2,
                        children: [
                            l(),
                            (0, r.jsx)(u.Heading, {
                                variant: "text-sm/semibold",
                                color: "none",
                                className: J.Gf,
                                children: c(),
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
        } = e,
        { audioRef: eg } = i.useContext(R.A),
        { analyticsLocations: eA } = (0, p.Ay)(),
        { analyticsLocations: eI } = (0, p.Ay)(f.A.PREMIUM_UPSELL),
        { location: eT } = (0, _.p)(),
        eS = i.useMemo(() => ({ ...eT, section: q.JJy.SOUNDBOARD_SOUND_PICKER }), [eT]),
        [ey, ev] = i.useState(null),
        [eN, eC] = i.useState(null),
        eR = (0, l.bG)([L.default], () => L.default.getCurrentUser()),
        eO = (0, P.TW)(eR, X.PremiumTypes.TIER_2),
        eb = (0, l.bG)([w.A], () => w.A.getVoiceState(t, eR?.id ?? q.dJq)),
        eD = eb?.selfDeaf || eb?.mute || eb?.suppress,
        eL = (0, A.RQ)((e) => e.searchQuery),
        ew = null != eL && "" !== eL,
        eM = (0, m.GV)(),
        ex = k.T.useConfig({ location: "SoundboardSoundGrid" }),
        eP = F.h.useConfig({ location: "SoundboardSoundGrid" }),
        ek = (0, b.St)("soundboard_floating_upsell"),
        {
            categories: eU,
            availableSounds: eG,
            soundCounts: eF,
        } = (0, Y.A)(s, { moveDefaultsToBottom: ex.reorderDefaultSounds }, eh),
        [eV, eB] = i.useState([]),
        eH = (0, Y.I)(eU, eV, eL),
        ej = (0, A.RQ)((e) => e.isNitroLockedSectionVisible),
        eY = i.useMemo(() => eH.filter((e) => e.items.length > 0), [eH]),
        eW = i.useMemo(
            () => eY.findLastIndex((e) => !!(0, P.Em)(e.categoryInfo) && e.categoryInfo.isNitroLocked),
            [eY],
        ),
        eK = !eO && er && -1 !== eW,
        e$ = !eO && er && -1 !== eW,
        ez = !eO && ex.reorderDefaultSounds && eU.length > 6,
        eq = O.b0.useSetting(),
        eZ = i.useMemo(() => new Set(eq), [eq]),
        eX = null == s,
        eQ = P.Ay.canUseCustomCallSounds(eR),
        eJ = i.useCallback(
            (e) => {
                eZ.has(e) ? eZ.delete(e) : eZ.add(e), O.b0.updateSetting(Array.from(eZ));
            },
            [eZ],
        ),
        e0 = i.useCallback(
            (e, t, n, r) => {
                if (null != v && !M) return v(e, n);
                let i = (0, V.Ir)(eR, e, s, !1);
                if (null != v && M && i) v(e, n);
                else if (!ee && i && (0, V.Au)(s))
                    (0, V.Ak)(e, s?.id ?? q.dJq, t, r),
                        ew &&
                            x.default.track(q.HAw.SEARCH_RESULT_SELECTED, {
                                search_type: q.I4_.SOUNDBOARD,
                                channel_id: s?.id,
                                query: eL,
                                location_stack: t,
                            });
                else {
                    if ((0, V.Ir)(eR, e, s)) return;
                    er && ev(e);
                }
            },
            [ee, eR, s, er, ew, eL, v, M],
        ),
        e1 = i.useCallback(
            (e, t) => {
                switch (e.item.type) {
                    case G.uq.SOUND:
                        let n = eo[e?.category] ?? null,
                            r = e?.item.index;
                        return e0(e.item.sound, null == n ? eA : [...eA, n], t?.shiftKey !== !0, r);
                    case G.uq.ADD_SOUND:
                        return E(), (0, z.A)(e.item.guild.id);
                }
            },
            [eA, e0, E],
        ),
        e2 = i.useCallback(
            (e, n, i, o, l) => {
                let u = eY[i.sectionIndex],
                    c = er && el(u.categoryInfo, eO, t) && eK,
                    d = (t) => {
                        l(t);
                        let n = e[t];
                        eO || n?.item.type !== G.uq.SOUND || (0, V.Ir)(eR, n.item.sound, s, !1)
                            ? eC(null)
                            : eC(n.item.sound);
                    },
                    _ = () => {
                        eC(null);
                    };
                return (0, r.jsx)(
                    "ul",
                    {
                        ...n,
                        onMouseLeave: _,
                        className: a()(J.a, { [J.uL]: c }),
                        children: e.map((e, t) =>
                            (0, r.jsx)(
                                $.A,
                                {
                                    descriptor: e,
                                    soundButtonProps: {
                                        channel: s,
                                        interactive: eX ? eQ : !eD,
                                        forceSecondaryActions: !0,
                                        analyticsLocations: eA,
                                    },
                                    rowIndex: i.rowIndex,
                                    columnIndex: t,
                                    isUsingKeyboardNavigation: i.isUsingKeyboardNavigation,
                                    suppressPlaySound: ee,
                                    getItemProps: o,
                                    onSelectItem: e1,
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
            [eY, er, eO, t, eR, ee, e1, s, eX, eQ, eD, eA, e_, eK, em],
        ),
        e3 = i.useCallback(
            (e, t) => {
                if (e <= 0 || !er) return !1;
                let n = eY[e],
                    r = eY[e - 1],
                    i = el(n.categoryInfo, eO, t),
                    s = el(r.categoryInfo, eO, t);
                return i && !s;
            },
            [eY, er, eO],
        ),
        e6 = i.useCallback(() => {
            let e = U.A.getSoundById(ea);
            null != e && ev(e);
        }, []),
        e4 = i.useCallback(() => {
            let e = (0, P.Dd)(X.PremiumTypes.TIER_2);
            return Q.intl.format(Q.t["tw/SSq"], { nitroTierName: e, onClick: e6 });
        }, [e6]),
        e5 = i.useCallback((e) => (e3(e, t) ? ei : en), [t, e3]),
        e7 = i.useCallback(
            (e) => {
                let t = e === eY.length - 1;
                return e$ && t ? 70 : eK && e === eW ? 20 : 0;
            },
            [eY.length, eK, e$, eW],
        ),
        e8 = i.useCallback((e, t) => (0, r.jsx)("div", { children: t }, e), []),
        e9 = i.useCallback(
            (e, n) => {
                let i = `${e.key}`,
                    s = er && el(e.categoryInfo, eO, t),
                    a = e3(n, t),
                    o = eZ.has(i),
                    l = () => {
                        x.default.track(q.HAw.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
                            location: { page: q.liQ.SOUNDBOARD_POPOUT },
                            tab: Z.kx.SOUNDBOARD,
                            guild_id: t ?? null,
                            collapsed: !o,
                            sticker_pack_id: null,
                            num_expressions: e.items.length,
                        }),
                            eJ(i);
                    };
                return (0, r.jsx)(
                    eu,
                    {
                        categoryInfo: e.categoryInfo,
                        toggleCollapsed: l,
                        collapsed: o,
                        isSectionNitroLocked: s && eK,
                        showNitroDivider: a && eK,
                    },
                    `header-${i}`,
                );
            },
            [eZ, eJ, t, e3, er, eO, eK],
        ),
        te = i.useCallback(
            (e, t) => {
                let n = t === eY.length - 1,
                    i = t === eW;
                return e$ && n
                    ? (0, r.jsx)("div", { className: a()(J.Lk, { [J.Ns]: i }) })
                    : eK && t === eW
                      ? (0, r.jsx)("div", { className: a()(J.a3, { [J.Ns]: i }) })
                      : null;
            },
            [eW, eK, e$, eY.length],
        ),
        tt = i.useCallback((e) => eB((0, j.lG)(e, eG, eR, s, eA)), [s, eR, eG, eA]),
        tn = i.useCallback(
            (e) => {
                (0, c.L3)(e, async () => {
                    let { default: e } = await n.e("51111").then(n.bind(n, 323002));
                    return (t) => (0, r.jsx)(e, { sourceAnalyticsLocations: eA, ...t });
                });
            },
            [eA],
        ),
        tr = i.useCallback(
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
                          onClick: tn,
                          "aria-label": Q.intl.string(Q.t.kbFsAD),
                          children: (0, r.jsx)(u.HKD, { size: "md", color: "currentColor", className: J.By }),
                      }),
            [em, tn],
        ),
        ti = i.useCallback(
            (e) => {
                let n = eU.filter((e) => !ez || e.categoryInfo.type !== G.Cx.DEFAULTS),
                    i = eY.findIndex((e) => e.categoryInfo.type === G.Cx.DEFAULTS);
                return (0, r.jsx)(W.A, {
                    soundboardListRef: e,
                    categories: n,
                    shouldUpsellLockedCategories: eK,
                    listPadding: ef,
                    guildId: t,
                    inExpressionPicker: em,
                    showPinnedDefaultsShortcut: ez,
                    defaultsSectionIndex: i,
                });
            },
            [eU, eY, ef, eK, t, em, ez],
        ),
        ts = i.useCallback(() => {
            let e = (0, T.qD)();
            return (0, P.LE)(e, X.pe.TIER_2) ?? Q.intl.string(Q.t.pj0XBN);
        }, []),
        ta = i.useCallback(() => {
            if (e$) {
                let e = ej;
                return (
                    ex.alwaysPinned && (e = !0),
                    (0, r.jsx)(y.d, {
                        showUpsell: e,
                        text: e4(),
                        button: ts(),
                        buttonAnalyticsObject: { section: q.JJy.SOUND_PICKER_FLOATING_UPSELL },
                        useGradientBg: eP.gradientBackground,
                        hoveredNitroLockedSound: eN,
                        subscribeButtonVariantOverride: eP.subscribeButtonVariant,
                        useLegacyButton: eP.useLegacyButton,
                        leadingAction: ek
                            ? (0, r.jsx)(N.l, {
                                  size: "sm",
                                  className: J.ij,
                                  location: f.A.PREMIUM_WISHLIST_SOUNDBOARD_UPSELL,
                              })
                            : void 0,
                    })
                );
            }
            return null;
        }, [
            e4,
            ts,
            e$,
            ex.alwaysPinned,
            eP.gradientBackground,
            eP.subscribeButtonVariant,
            eP.useLegacyButton,
            ek,
            ej,
            eN,
        ]),
        to = i.useCallback(
            (e) =>
                e?.item.type === G.uq.SOUND
                    ? (0, r.jsx)(K.A, { closePicker: E, soundboardSound: e?.item.sound ?? null })
                    : null,
            [E],
        ),
        tl = i.useCallback(() => {
            let e = U.A.getSoundById(ea),
                t = new Audio((0, B.A)(ea));
            null != eg.current && eg.current.pause(),
                (eg.current = t),
                (t.currentTime = 0),
                (t.volume = (0, H.A)(e?.volume ?? 1)),
                t.play();
        }, [eg]),
        tu = (0, l.bG)([D.A], () => D.A.getMediaSessionId());
    return (
        (0, h.A)({
            type: o.ImpressionTypes.POPOUT,
            name: o.ImpressionNames.SOUNDBOARD_POPOUT,
            properties: {
                source: eE,
                guild_id: t,
                media_session_id: tu,
                available_custom_sounds_count: eF.unlockedCustomSoundCount,
                unavailable_custom_sounds_count: eF.lockedCustomSoundCount,
                favorite_sounds_count: eF.favoriteSoundCount,
            },
        }),
        (0, r.jsxs)(r.Fragment, {
            children: [
                null != ey
                    ? (0, r.jsx)(C.A, {
                          title: Q.intl.string(em ? Q.t.rZEEvU : Q.t.jGDYF0),
                          description: Q.intl.string(em ? Q.t.ZPNG5A : Q.t["grL/hg"]),
                          analyticsLocationSection: q.JJy.SOUNDBOARD_SOUND_PICKER_UPSELL,
                          upsellViewedTrackingData: {
                              type: X.e.SOUND_PICKER_SOUND_CLICKED,
                              is_external: !0,
                              location: { ...eS, object: q.ZSU.SOUNDBOARD_SOUND },
                              location_stack: eI,
                              sku_id: P.Ay.getSkuIdForPremiumType(X.PremiumTypes.TIER_2),
                          },
                          onClose: () => ev(null),
                          onLearnMore: E,
                          onDisplay: tl,
                      })
                    : void 0,
                (0, r.jsx)(I.A, {
                    categories: eY,
                    collapsedCategories: eZ,
                    containerWidth: d,
                    store: g.LW,
                    onSelectItem: e1,
                    onSearchExpressions: tt,
                    hasSearchResults: eV.length > 0,
                    defaultSearchPlaceholder: Q.intl.string(Q.t.sKt3xS),
                    renderRow: e2,
                    renderSectionHeader: e9,
                    renderSectionFooter: te,
                    renderSection: e8,
                    renderCategoryList: ti,
                    renderHeaderAccessories: tr,
                    rowHeight: et,
                    sectionHeaderHeight: e5,
                    sectionFooterHeight: e7,
                    itemNodeWidth: es,
                    gridNavigatorId: eM,
                    renderEmptySearchState: ec,
                    renderInspector: to,
                    gridNotice: ed,
                    renderHeader: ep,
                    renderUpsell: ta,
                }),
            ],
        })
    );
}
