n.d(t, { A: () => l0 });
var l = n(477900),
    i = n(582128),
    r = n(503698),
    s = n.n(r),
    a = n(435558),
    o = n.n(a),
    u = n(607399),
    c = n(621466),
    d = n(855986),
    h = n(554146),
    m = n(192308),
    f = n(939249),
    p = n(315710),
    g = n(805251),
    x = n(817281),
    E = n(820284),
    y = n(761929),
    S = n(149468),
    A = n(263775),
    C = n(398616),
    I = n(200589),
    b = n(490035),
    v = n(934499),
    N = n(649529),
    j = n(750506),
    k = n(267102),
    T = n(926972),
    _ = n(327289),
    O = n(256449),
    R = n(898578),
    w = n(649852),
    M = n.n(w),
    L = n(462180),
    P = n(319060),
    D = n(289873),
    U = n(212245),
    V = n(793574),
    F = n(688810),
    W = n(850992),
    B = n(151271),
    G = n(887695),
    K = n(253932),
    H = n(287809),
    z = n(129230),
    q = n(240248),
    $ = n(196765),
    J = n(121894);
let Z = Object.freeze({ showPremiumUpsell: !1 }),
    Q = (0, $.v)((e) => Z);
function X(e) {
    (0, J.r)(() => Q.setState({ showPremiumUpsell: e }));
}
var Y = n(891090),
    ee = n(832628),
    et = n(788413),
    en = n(60587),
    el = n(27232),
    ei = n(406810),
    er = n(866665),
    es = n(797285),
    ea = n(713517),
    eo = n(724511),
    eu = n(318845),
    ec = n(941971),
    ed = n(71393),
    eh = n(378058),
    em = n(148355),
    ef = n(652215),
    ep = n(698279),
    eg = n(792996),
    ex = n(161975);
let eE = (0, q.xI)(P.A.STICKERS_CONSTANTS_STICKER_CATEGORY_LIST_PADDING),
    ey = (0, q.xI)(P.A.STICKERS_CONSTANTS_STICKER_CATEGORY_ICON_SIZE),
    eS = (0, q.xI)(P.A.STICKERS_CONSTANTS_STICKER_CATEGORY_ICON_MARGIN),
    eA = (0, q.xI)(P.A.STICKERS_CONSTANTS_STICKER_CATEGORY_UNICODE_ICON_SIZE),
    eC = (0, q.xI)(P.A.STICKERS_CONSTANTS_CATEGORY_SEPARATOR_SIZE),
    eI = (0, q.xI)(P.A.STICKERS_CONSTANTS_CATEGORY_SEPARATOR_MARGIN_VERTICAL),
    eb = [eE, eE, eE, eE],
    ev = (ey + eS) * 2 + eE,
    eN = eC + 2 * eI;
function ej(e) {
    let { ariaLabel: t, children: n, className: r, isSelected: s, onClick: a } = e,
        o = i.useRef(null),
        { isHoveringOrFocusing: u } = (0, ea.A)(o);
    return (0, l.jsxs)(f.D, {
        innerRef: o,
        "aria-label": t,
        className: r,
        onClick: a,
        children: [
            (0, l.jsx)("div", {
                className: ex.a$,
                children: (0, l.jsx)(ec.A, { hovered: u, selected: s, size: "small" }),
            }),
            n,
        ],
    });
}
let ek = (e) => {
    let { stickersListRef: t, stickersCategories: n } = e,
        r = i.useRef(null),
        [a, o] = i.useState(!0),
        u = W.bM.useStore((e) => e.activeCategoryIndex),
        {
            firstStandardStickerCategoryIndex: c,
            firstStandardStickerCategoryOffsetTop: d,
            guildCategoryCount: h,
            hasFirstPartyStickerPacks: m,
        } = i.useMemo(() => {
            let e = n.filter((e) => e.type === ee.Z2.GUILD).length,
                t = e + +(n[0]?.type === ee.Z2.RECENT) + +(n[0]?.type === ee.Z2.FAVORITE),
                l = t * (ey + eS) - eS + eN;
            return {
                firstStandardStickerCategoryIndex: t + 1,
                firstStandardStickerCategoryOffsetTop: l,
                guildCategoryCount: e,
                hasFirstPartyStickerPacks: null != n.find((e) => e.type === ee.Z2.PACK),
            };
        }, [n]);
    i.useLayoutEffect(() => {
        o(h >= 7);
    }, [h]);
    let {
            renderCategoryListItem: p,
            rowHeight: g,
            onScroll: x,
        } = (function (e) {
            let {
                    activeIndex: t,
                    stickerPickerCategories: n,
                    categoryListRef: r,
                    firstStandardStickerCategoryOffsetTop: a,
                    setShouldRenderShortcut: o,
                } = e,
                u = (0, U.p)(),
                c = (0, B.RQ)((e) => "" !== e.searchQuery),
                d = i.useCallback(
                    (e, r, a) => {
                        let o,
                            d = n[0]?.type === ee.Z2.FAVORITE,
                            h = +!!d,
                            m = n[h]?.type === ee.Z2.RECENT,
                            f = n.length;
                        if (0 === r && d) {
                            let e = !c && 0 === t;
                            return (0, l.jsx)(
                                "div",
                                {
                                    role: "listitem",
                                    "aria-setsize": f,
                                    "aria-posinset": r,
                                    children: (0, l.jsx)(ej, {
                                        ariaLabel: eg.intl.string(eg.t.y3LQCG),
                                        className: s()(ex._0, ex.dC, { [ex.k1]: e, [ex.ls]: !m }),
                                        isSelected: e,
                                        onClick: a,
                                        children: (0, l.jsx)(el.StarIcon, {
                                            size: "custom",
                                            color: "currentColor",
                                            className: ex.AB,
                                            height: eA,
                                            width: eA,
                                        }),
                                    }),
                                },
                                "favorites",
                            );
                        }
                        if (r === h && m) {
                            let e = !c && t === h;
                            return (0, l.jsx)(
                                "div",
                                {
                                    role: "listitem",
                                    "aria-setsize": f,
                                    "aria-posinset": r,
                                    children: (0, l.jsx)(ej, {
                                        ariaLabel: eg.intl.string(eg.t.RxAmVC),
                                        className: s()(ex._0, ex.dC, ex.ls, { [ex.k1]: e }),
                                        isSelected: e,
                                        onClick: a,
                                        children: (0, l.jsx)(ei.ClockIcon, {
                                            size: "custom",
                                            color: "currentColor",
                                            className: ex.AB,
                                            height: eA,
                                            width: eA,
                                        }),
                                    }),
                                },
                                "recent",
                            );
                        }
                        let p = t === r,
                            g = !c && p,
                            x = n[r],
                            E = n[r + 1],
                            y = null != E && x.type === ee.Z2.GUILD && E.type !== ee.Z2.GUILD,
                            S = x.type === ee.Z2.PACK,
                            A = "",
                            C = null;
                        if (x.type === ee.Z2.GUILD || x.type === ee.Z2.EMPTY_GUILD_UPSELL) {
                            let e = ed.A.getGuild(x.id);
                            null != e &&
                                ((o = e.id),
                                (A = e.name),
                                (C = (0, l.jsx)(eo.A, { guild: e, isSelected: p, isLocked: !0 === x.isNitroLocked })));
                        } else if (S) {
                            let e = R.A.getStickerPack(x.id);
                            null != e &&
                                ((A = e.name),
                                (C = (0, l.jsx)(em.A, {
                                    disableAnimation: !p || c,
                                    size: ey,
                                    sticker: (0, eh.Id)(e),
                                })));
                        }
                        return (0, l.jsxs)(
                            i.Fragment,
                            {
                                children: [
                                    (0, l.jsx)(er.m, {
                                        position: "right",
                                        text: A,
                                        children: (0, l.jsx)("div", {
                                            role: "listitem",
                                            "aria-setsize": f,
                                            "aria-posinset": r,
                                            children: (0, l.jsx)(ej, {
                                                ariaLabel: A,
                                                className: s()(ex._0, { [ex.ND]: S, [ex.Ms]: g && S }),
                                                isSelected: g,
                                                onClick: () => {
                                                    (x.type === ee.Z2.PACK &&
                                                        z.default.track(ef.HAw.EXPRESSION_PICKER_CATEGORY_SELECTED, {
                                                            location: u?.location,
                                                            tab: ep.kx.STICKER,
                                                            sticker_pack_id: x.id,
                                                            guild_id: o,
                                                        }),
                                                        a());
                                                },
                                                children: C,
                                            }),
                                        }),
                                    }),
                                    y ? (0, l.jsx)("hr", { className: ex.ny }, "separator") : null,
                                ],
                            },
                            x.id,
                        );
                    },
                    [t, u, c, n],
                ),
                h = i.useCallback((e, t) => (t ? ev : 0), []);
            return {
                getScrollOffsetForIndex: h,
                renderCategoryListItem: d,
                rowHeight: i.useCallback(
                    (e, t) => {
                        let l = n[t],
                            i = n[t + 1];
                        return ey + (null != i && l.type === ee.Z2.GUILD && i.type !== ee.Z2.GUILD ? eN : eS);
                    },
                    [n],
                ),
                onScroll: i.useCallback(
                    (e) => {
                        let t = r.current?.getListDimensions();
                        null == t || o(e + t.height - eC < a);
                    },
                    [a, r, o],
                ),
            };
        })({
            activeIndex: u,
            stickerPickerCategories: n,
            categoryListRef: r,
            firstStandardStickerCategoryOffsetTop: d,
            setShouldRenderShortcut: o,
        }),
        E = i.useCallback(
            (e) => {
                (e(c), r.current?.scrollTo(d));
            },
            [c, d],
        );
    return (0, l.jsx)(eu.A, {
        className: ex.jv,
        categoryListRef: r,
        expressionsListRef: t,
        store: W.bM,
        listPadding: eb,
        onScroll: x,
        renderCategoryListItem: p,
        rowCount: n.length,
        categories: n,
        categoryHeight: g,
        children: (e) =>
            m &&
            a &&
            (0, l.jsx)(f.D, {
                className: s()(ex.Fe, { [ex.Q6]: !a }),
                onClick: () => E(e),
                children: (0, l.jsx)(es.StickerIcon, { size: "md", color: "currentColor" }),
            }),
    });
};
var eT = n(534514),
    e_ = n(834730),
    eO = n(821609),
    eR = n(403581),
    ew = n(739053),
    eM = n(82498),
    eL = n(823894),
    eP = n(682901),
    eD = n(768857);
function eU() {
    (z.default.track(ef.HAw.PREMIUM_PROMOTION_OPENED, { location_section: ef.JJy.EMPTY_STICKER_PICKER_UPSELL }), X(!0));
}
function eV(e) {
    let { className: t } = e;
    (0, O.XQ)();
    let { analyticsLocations: n } = (0, F.Ay)(V.A.EMPTY_STATE),
        r = (0, d.yK)([R.A], () => eL.vX.map((e) => R.A.getStickerById(e)));
    return (
        i.useEffect(() => {
            (z.default.track(ef.HAw.PREMIUM_UPSELL_VIEWED, {
                type: eP.e.EMPTY_STICKER_PICKER_UPSELL,
                source: { section: ef.JJy.EMPTY_STICKER_PICKER_UPSELL },
                location_stack: n,
            }),
                (0, ew.sq)(ef.U7l.PREMIUM_UPSELL_VIEWED, n, () => (0, eM.uq)(eP.e.EMPTY_STICKER_PICKER_UPSELL)));
        }, [n]),
        (0, l.jsxs)("div", {
            className: s()(eD.p$, t),
            children: [
                (0, l.jsx)(eT.D, {
                    className: eD.wx,
                    variant: "heading-xl/semibold",
                    children: eg.intl.string(eg.t.HEm04J),
                }),
                (0, l.jsx)(e_.E, {
                    className: eD.VA,
                    color: "text-default",
                    variant: "body-md/normal",
                    children: eg.intl.string(eg.t.FnNud4),
                }),
                (0, l.jsx)("div", {
                    className: eD.l1,
                    children: r
                        .filter((e) => null != e)
                        .map((e) => (0, l.jsx)(em.A, { sticker: e, className: eD.yI, size: 80 }, e?.id)),
                }),
                (0, l.jsx)(eO.$, {
                    variant: "expressive",
                    icon: eR.NitroWheelIcon,
                    text: eg.intl.string(eg.t["8Sh5fg"]),
                    onClick: eU,
                }),
            ],
        })
    );
}
var eF = n(361670);
function eW(e, t, n) {
    return e.stickers.filter((e) => (0, eF.W$)(e, t, n) !== eF.Ux.SENDABLE_WITH_BOOSTED_GUILD);
}
n(30146);
var eB = n(404778),
    eG = n(537652),
    eK = n(962125),
    eH = n(286509),
    ez = n(414872),
    eq = n(448645),
    e$ = n(631576),
    eJ = n(369163),
    eZ = n(123292),
    eQ = n(631305),
    eX = n(727419),
    eY = n(931991),
    e0 = n(473145),
    e1 = n(598933),
    e2 = n(136123);
let e5 = function (e) {
    let { className: t, guildId: n, channel: r, shouldTrackUpsellViewed: a, setTrackedUpsellViewed: o } = e,
        { location: u } = (0, U.p)(),
        { analyticsLocations: c } = (0, F.Ay)(),
        h = (0, d.bG)([ed.A], () => ed.A.getGuild(n)),
        { canManageAllExpressions: m } = (0, eY.nr)(h),
        f = null != h && 0 === (0, e0.aG)(h.premiumTier) && !h.features.has(ef.GuildFeatures.MORE_STICKERS);
    return (i.useEffect(() => {
        m &&
            f &&
            a &&
            ((0, S.zV)(ef.HAw.PREMIUM_GUILD_UPSELL_VIEWED, {
                location: u,
                guild_id: h?.id,
                channel_id: r?.id,
                type: "Expression Picker Inline Sticker Upsell",
                location_stack: c,
            }),
            o(!0));
    }, [f, h, r, u, a, o, c, m]),
    null != h && m)
        ? f
            ? (0, l.jsxs)("div", {
                  className: s()(e2.UX, t),
                  onKeyDown: (e) => e.stopPropagation(),
                  children: [
                      (0, l.jsx)(eJ.BoostTier2SimpleIcon, { size: "md", color: "currentColor", className: e2.Kk }),
                      (0, l.jsx)(e_.E, {
                          color: "interactive-text-default",
                          className: e2.rf,
                          variant: "body-sm/normal",
                          children: eg.intl.format(eg.t.AXWla1, { count: (0, e0.aG)(ef.TVA.TIER_1) }),
                      }),
                      (0, l.jsx)(eZ.Q, {
                          variant: "primary",
                          text: eg.intl.string(eg.t["Gb+BJD"]),
                          onClick: function () {
                              null != h &&
                                  (0, eQ.A)({
                                      analyticsLocations: c,
                                      analyticsSourceLocation: u,
                                      guild: h,
                                      perks: (0, e1.q5)(),
                                  });
                          },
                      }),
                  ],
              })
            : (0, l.jsxs)("div", {
                  className: s()(e2.UX, t),
                  onKeyDown: (e) => e.stopPropagation(),
                  children: [
                      (0, l.jsx)(es.StickerIcon, {
                          size: "custom",
                          color: "currentColor",
                          className: e2.Kk,
                          width: 20,
                          height: 20,
                      }),
                      (0, l.jsx)(e_.E, {
                          color: "interactive-text-default",
                          className: e2.rf,
                          variant: "body-sm/normal",
                          children: eg.intl.string(eg.t.S83wgh),
                      }),
                      (0, l.jsx)(eZ.Q, {
                          variant: "primary",
                          text: eg.intl.string(eg.t.bwNjug),
                          onClick: function () {
                              ((0, B.v8)(), eX.A.open(n, ef.BEX.STICKERS, u));
                          },
                      }),
                  ],
              })
        : null;
};
var e3 = n(240864),
    e6 = n(89366),
    e8 = n(202639);
let e4 = (0, a.throttle)(
    function (e) {
        let {
                listRef: t,
                searchQuery: n,
                nitroLockedSectionStates: l,
                scrollTop: i,
                sectionHeaderHeight: r,
                sectionFooterHeight: s,
                setShowUpsell: a,
            } = e,
            { areOnlyNitroLockedSectionsVisible: o } = (0, e3.s)({
                listRef: t,
                searchQuery: n,
                nitroLockedSectionStates: l,
                scrollTop: i,
                sectionHeaderHeight: r,
                sectionFooterHeight: s,
            });
        a(o);
    },
    300,
    { leading: !1, trailing: !0 },
);
var e7 = n(307301),
    e9 = n(371680),
    te = n(683522);
let tt = (0, q.xI)(P.A.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_INSPECTOR_BAR_GRAPHIC_PRIMARY_DIMENSIONS),
    tn = (0, q.xI)(P.A.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_INSPECTOR_BAR_GRAPHIC_SECONDARY_DIMENSIONS),
    tl = i.memo(function (e) {
        let { stickersGrid: t } = e,
            n = W.bM.useStore((e) => e.inspectedExpressionPosition),
            r = i.useMemo(() => {
                let { rowIndex: e, columnIndex: l } = n,
                    i = t[e]?.[l];
                if (null == i) return null;
                switch (i.type) {
                    case ee.op.CREATE_STICKER:
                        return { guild_id: i.guild_id, name: i.name };
                    case ee.op.STICKER:
                        return i.sticker;
                    default:
                        return null;
                }
            }, [t, n]);
        if (null == r) return null;
        let { graphic: s, title: a } = (function (e) {
                let t = null,
                    n = null;
                if ((!(0, eh.FD)(e) && !(0, eh.Xw)(e)) || (0, eh.Xw)(e)) {
                    let i = ed.A.getGuild(e.guild_id);
                    null != i &&
                        ((t = eg.intl.format(eg.t.cZOkbs, { source: i.name })), (n = (0, l.jsx)(eo.A, { guild: i })));
                } else if ((0, eh.FD)(e)) {
                    let i = R.A.getStickerPack(e.pack_id);
                    null != i &&
                        ((t = eg.intl.format(eg.t.cZOkbs, { source: i.name })),
                        (n = (0, l.jsx)(em.A, { size: tn, sticker: (0, eh.Id)(i), disableAnimation: !0 })));
                }
                return { title: t, graphic: n };
            })(r),
            o =
                (0, eh.FD)(r) || (0, eh.Xw)(r)
                    ? (0, l.jsx)(em.A, { isInteracting: !0, size: tt, sticker: r, disableAnimation: !0 })
                    : (0, l.jsx)("div", {
                          className: te.P,
                          children: (0, l.jsx)(e7.PlusSmallIcon, {
                              size: "md",
                              color: "currentColor",
                              className: te.K,
                          }),
                      });
        return (0, l.jsx)(e9.A, {
            graphicPrimary: o,
            graphicSecondary: s,
            titlePrimary: r.name,
            titleSecondary: (0, eh.FD)(r) || (0, eh.Xw)(r) ? a : null,
        });
    });
var ti = n(140735),
    tr = n(194261),
    ts = n(442433),
    ta = n(304072),
    to = n(513902);
let tu = function (e) {
    let { size: t } = e;
    return (0, l.jsx)("div", {
        className: to.G,
        style: { width: t, height: t },
        children: (0, l.jsx)(tr.LockIcon, { size: "xxs", color: "currentColor", className: to.I }),
    });
};
var tc = n(777371);
let td = i.memo(function (e) {
    let {
            isDisplayingIndividualStickers: t = !1,
            preferAnimation: r = !0,
            getStickerItemProps: o,
            getStickerRowProps: u,
            gutterWidth: c,
            inspectedStickerPosition: d,
            isScrolling: h,
            isUsingKeyboardNavigation: p,
            onInspect: g,
            onSelect: x,
            rowIndex: E,
            stickerClassName: y,
            stickerDescriptors: S,
            stickerPadding: A,
            stickerSize: C,
            ownedStickerPacks: I,
            enlargeOnInteraction: b = !1,
            channel: v,
            currentUser: N,
            checkSendability: j = !0,
            isSectionNitroLocked: k = !1,
        } = e,
        { location: T } = (0, U.p)(),
        _ = C + 2 * A,
        O = i.useMemo(
            () => ({
                gridColumnGap: c,
                gridTemplateColumns: `repeat(auto-fill, ${_}px)`,
                height: _,
                paddingRight: t ? void 0 : _,
            }),
            [t, c, _],
        ),
        R = i.useMemo(() => ({ width: C, height: C, padding: A }), [A, C]),
        [w, M] = (0, ta.A)(null, 300);
    return (0, l.jsx)("div", {
        className: tc.nM,
        style: O,
        ...u?.(E),
        children: S.map((e) => {
            let u = e.visibleRowIndex === d?.rowIndex && e.columnIndex === d?.columnIndex,
                c = e.type === ee.op.STICKER && b && u,
                S = (0, a.throttle)(() => {
                    h?.current === !0 || p?.current === !0 || u || g?.(e);
                }, 250),
                { ref: A, tabIndex: _, onFocus: O, ...L } = o?.(e.columnIndex, E) ?? {};
            switch (e.type) {
                case ee.op.CREATE_STICKER:
                    return (0, l.jsx)(
                        "div",
                        {
                            ...L,
                            children: (0, l.jsxs)(f.D, {
                                "aria-label": e.name,
                                className: s()(tc.wP, y, { [tc.Kj]: u }),
                                innerRef: A,
                                tabIndex: _,
                                onFocus: O ?? S,
                                onMouseMove: S,
                                onClick: function () {
                                    e.type === ee.op.CREATE_STICKER &&
                                        (z.default.track(ef.HAw.OPEN_MODAL, {
                                            type: ef.JJy.CREATE_STICKER_MODAL,
                                            location: T,
                                        }),
                                        (0, m.mM)(async () => {
                                            let { default: t } = await Promise.all([
                                                n.e(860350),
                                                n.e(142753),
                                                n.e(207998),
                                                n.e(699733),
                                                n.e(689827),
                                                n.e(268582),
                                                n.e(480436),
                                                n.e(848625),
                                                n.e(883952),
                                                n.e(66580),
                                                n.e(50342),
                                                n.e(420643),
                                                n.e(1795),
                                                n.e(429143),
                                            ]).then(n.bind(n, 445002));
                                            return (n) => (0, l.jsx)(t, { guildId: e.guild_id, ...n });
                                        }));
                                },
                                style: R,
                                children: [
                                    !b && (0, l.jsx)("div", { className: tc.fw }),
                                    (0, l.jsx)("div", {
                                        className: tc.P0,
                                        children: (0, l.jsx)(e7.PlusSmallIcon, {
                                            size: "md",
                                            color: "currentColor",
                                            className: tc.Kk,
                                        }),
                                    }),
                                    (0, l.jsx)(e_.E, {
                                        color: "interactive-text-active",
                                        variant: "body-xs/normal",
                                        children: eg.intl.string(eg.t["+nEuqr"]),
                                    }),
                                ],
                            }),
                        },
                        e.guild_id,
                    );
                case ee.op.STICKER: {
                    let a = (j ? (0, eF.W$)(e.sticker, N, v) : eF.Ux.SENDABLE) !== eF.Ux.SENDABLE && !k,
                        o = t && null != I && (0, eh.FD)(e.sticker) && !I.has(e.sticker.pack_id);
                    return (0, i.createElement)(
                        "div",
                        { ...L, key: e.sticker.id },
                        (0, l.jsxs)(f.D, {
                            className: s()(tc.yI, y, { [tc.PV]: u, [tc.TV]: w === e.sticker.id }),
                            innerRef: A,
                            tabIndex: _,
                            onFocus: O ?? S,
                            onMouseMove: S,
                            onClick: function (t) {
                                if (h?.current === !0 || p?.current === !0) return;
                                let n = t.altKey;
                                (n && e.type === ee.op.STICKER && !(0, eh.o1)(e.sticker.id) && M(e.sticker.id),
                                    x?.(e, n));
                            },
                            onContextMenu: function (e) {
                                (0, ts.L3)(e, async () => {
                                    let { default: e } = await Promise.all([n.e(904774), n.e(446132)]).then(
                                        n.bind(n, 233503),
                                    );
                                    return (t) => (0, l.jsx)(e, { ...t });
                                });
                            },
                            style: R,
                            "data-type": en.g.STICKER,
                            "data-id": e.sticker.id,
                            "data-name": e.sticker.name,
                            "data-format-type": e.sticker.format_type,
                            children: [
                                (0, l.jsx)(ti.A, { children: (0, em.h)(e.sticker) }),
                                (0, l.jsxs)("div", {
                                    "aria-hidden": !0,
                                    children: [
                                        !b && (0, l.jsx)("div", { className: tc.fw }),
                                        (0, l.jsx)(em.A, {
                                            className: s()(tc.SI, {
                                                [tc.ot]:
                                                    b && !u && null != d && -1 !== d.rowIndex && -1 !== d.columnIndex,
                                                [tc.Q$]: c,
                                                [tc.UK]: a,
                                            }),
                                            disableAnimation: !u && !r,
                                            enlargeOnInteraction: b,
                                            isInteracting: u,
                                            maskAsset: u,
                                            sticker: e.sticker,
                                            size: C,
                                        }),
                                        o ? (0, l.jsx)(tu, { size: 20 }) : null,
                                        a
                                            ? (0, l.jsx)("div", {
                                                  className: tc.MC,
                                                  children: (0, l.jsx)(tr.LockIcon, {
                                                      size: "xs",
                                                      color: "currentColor",
                                                      className: tc.hz,
                                                  }),
                                              })
                                            : null,
                                    ],
                                }),
                            ],
                        }),
                    );
                }
            }
        }),
    });
});
function th(e) {
    let { descriptor: t, currentUser: n, channel: l, onSelect: i } = e;
    switch ((0, eF.W$)(t.sticker, n, l)) {
        case eF.Ux.SENDABLE:
            i(t);
            break;
        case eF.Ux.SENDABLE_WITH_PREMIUM:
            (z.default.track(ef.HAw.PREMIUM_PROMOTION_OPENED, {
                location_section: ef.JJy.STICKER_PICKER_UPSELL,
                location_object: ef.ZSU.STICKER,
            }),
                X(!0));
        case eF.Ux.SENDABLE_WITH_BOOSTED_GUILD:
        case eF.Ux.NONSENDABLE:
    }
}
var tm = n(457231);
let tf = (0, q.xI)(P.A.STICKERS_CONSTANTS_STICKER_PICKER_BREAKPOINT_SMALL),
    tp = (0, q.xI)(P.A.STICKERS_CONSTANTS_STICKER_PICKER_BREAKPOINT_MEDIUM),
    tg = (0, q.xI)(P.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_TOP),
    tx = (0, q.xI)(P.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_TOP_SEARCH_RESULTS),
    tE = (0, q.xI)(P.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_RIGHT),
    ty = (0, q.xI)(P.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_BOTTOM),
    tS = (0, q.xI)(P.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_LEFT),
    tA = (0, q.xI)(P.A.STICKERS_CONSTANTS_STICKERS_LIST_DIVIDER_HEIGHT),
    tC = (0, q.xI)(P.A.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_LIST_SECTION_HEADING_HEIGHT),
    tI = (0, q.xI)(P.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS),
    tb = (0, q.xI)(P.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS_SMALL),
    tv = (0, q.xI)(P.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_MARGIN),
    tN = tI + 2 + tv,
    tj = tb + 2 + tv,
    tk = [tg, tE, ty, tS],
    tT = [tx, tE, ty, tS],
    t_ = (0, q.xI)(P.A.STICKERS_CONSTANTS_STICKERS_LIST_EMPTY_GUILD_UPSELL_HEIGHT),
    tO = "sticker-search-nitro",
    tR = ["laugh", "wave", "yes", "dance", "sad", "no", "hi", "bye", "cry", "ok"];
function tw(e) {
    let { onSuggestionClick: t } = e;
    return (0, l.jsx)("div", {
        className: tm.yB,
        children: tR.map((e) =>
            (0, l.jsx)(
                f.D,
                {
                    className: tm.x_,
                    onClick: () => t(e),
                    children: (0, l.jsx)(e_.E, { variant: "body-sm/normal", color: "text-default", children: e }),
                },
                e,
            ),
        ),
    });
}
function tM(e, t) {
    return null != t && 0 !== t.sendableWithPremium.length && e === +(t.sendable.length > 0);
}
function tL(e, t) {
    return null != t && 0 === e && t.sendable.length > 0 && t.sendableWithPremium.length > 0;
}
let tP = function (e) {
    let {
            collapsedStickersCategories: t,
            gridWidth: n,
            filteredStickers: r,
            getStickerItemProps: a,
            getStickerRowProps: o,
            gutterWidth: c,
            isUsingKeyboardNavigation: h,
            onSelectSticker: m,
            rowCount: f,
            rowCountBySection: p,
            stickersCategories: g,
            stickersGrid: x,
            channel: E,
            ref: y,
        } = e,
        S = i.useRef(!1),
        A = i.useRef(null),
        [C, I] = W.bM.useStore((e) => [e.activeCategoryIndex, e.inspectedExpressionPosition], L.x),
        { analyticsLocations: b } = (0, F.Ay)(V.A.STICKER_PICKER),
        v = (0, B.RQ)((e) => e.searchQuery),
        N = (0, d.bG)([R.A], () => R.A.getPremiumPacks()),
        j = (0, d.bG)([H.default], () => H.default.getCurrentUser()),
        k = eq.Ay.canUseCustomStickersEverywhere(j),
        [T, _] = i.useState(0),
        {
            renderRow: O,
            renderSection: w,
            renderSectionFooter: M,
            sectionFooterHeight: P,
            renderSectionHeader: D,
            sectionHeaderHeight: q,
        } = (function (e) {
            let {
                    collapsedStickersCategories: t,
                    gridWidth: n,
                    onSelectSticker: r,
                    getStickerItemProps: a,
                    getStickerRowProps: o,
                    gutterWidth: u,
                    inspectedStickerPosition: c,
                    isScrolling: d,
                    isUsingKeyboardNavigation: h,
                    stickersGrid: m,
                    stickersCategories: f,
                    filteredStickers: p,
                    ownedStickerPacks: g,
                    channel: x,
                    currentUser: E,
                    activeSectionIndex: y,
                } = e,
                S = (0, U.p)(),
                { handleStickerInspect: A, handleSelect: C } = (function (e) {
                    let { onSelectSticker: t, channel: n, currentUser: l } = e,
                        r = (0, U.p)(),
                        s = (0, B.RQ)((e) => e.searchQuery);
                    return {
                        handleStickerInspect: i.useCallback((e) => {
                            let { visibleRowIndex: t, columnIndex: n, gridSectionIndex: l } = e;
                            (W.bM.setActiveCategoryIndex(l),
                                W.bM.setInspectedExpressionPosition(n, t, en.t.MOUSE_EVENT),
                                e.type === ee.op.STICKER && W.bM.setSearchPlaceholder(e.sticker.name));
                        }, []),
                        handleSelect: i.useCallback(
                            (e, i) => {
                                if (e.type !== ee.op.STICKER) return;
                                let { sticker: a } = e;
                                if (null == a) return;
                                let o = {
                                    ...r.location,
                                    object: "" === s ? ef.ZSU.STICKER_PICKER_VIEW_ALL : ef.ZSU.STICKER_SEARCH_VIEW_ALL,
                                };
                                (0, eF.W$)(a, l, n) !== eF.Ux.SENDABLE
                                    ? th({ descriptor: e, currentUser: l, channel: n, onSelect: t })
                                    : i
                                      ? (0, eh.o1)(a.id)
                                          ? (0, e$.vr)(a.id)
                                          : ((0, Y.Dt)({ sticker: a, location: { ...o, object: ef.ZSU.STICKER } }),
                                            (0, e$.uK)(a.id))
                                      : t(e);
                            },
                            [r.location, s, l, n, t],
                        ),
                    };
                })({ onSelectSticker: r, channel: x, currentUser: E }),
                [I, b] = i.useState(!1),
                v = i.useCallback((e) => {
                    K.tP.updateSetting(Array.from(e));
                }, []),
                N = i.useCallback(
                    (e) => {
                        let t = m[e],
                            i = t?.[0]?.gridSectionIndex,
                            r = null != i && (tM(i, p) || (null == p && f[i]?.isNitroLocked === !0));
                        return null != t
                            ? (0, l.jsx)(
                                  td,
                                  {
                                      getStickerItemProps: a,
                                      getStickerRowProps: o,
                                      gutterWidth: u,
                                      inspectedStickerPosition: c,
                                      isScrolling: d,
                                      isUsingKeyboardNavigation: h,
                                      onInspect: A,
                                      onSelect: C,
                                      rowIndex: e,
                                      stickerClassName: tm.yI,
                                      stickerDescriptors: t,
                                      stickerSize: n > tf ? tI : tb,
                                      stickerPadding: 1,
                                      preferAnimation: n <= tp,
                                      ownedStickerPacks: g,
                                      isDisplayingIndividualStickers: !0,
                                      channel: x,
                                      currentUser: E,
                                      isSectionNitroLocked: r,
                                  },
                                  e,
                              )
                            : null;
                    },
                    [m, a, o, u, c, d, h, A, C, n, g, x, E, p, f],
                ),
                j = i.useCallback(
                    (e) => {
                        let t = f[e],
                            n = f[e + 1];
                        return t?.isNitroLocked === !0 && (null == n || !0 !== n.isNitroLocked);
                    },
                    [f],
                ),
                k = i.useCallback(
                    (e) => {
                        let t = f[e],
                            n = f[e + 1];
                        return t?.isNitroLocked !== !0 && n?.isNitroLocked === !0;
                    },
                    [f],
                ),
                T = i.useCallback(
                    (e, t) => {
                        let n = f[e],
                            i = tM(e, p),
                            r = i || (null == p && n?.isNitroLocked === !0),
                            a = i || (null == p && j(e));
                        return null == p || r
                            ? (0, l.jsx)(
                                  "div",
                                  { role: "rowgroup", className: s()({ [tm.cW]: r, [tm.fV]: a }), children: t },
                                  e,
                              )
                            : t;
                    },
                    [p, f, j],
                ),
                _ = i.useCallback(
                    function (e) {
                        let { isStickerPack: n = !0 } =
                                arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            l = new Set(t),
                            i = t.has(e);
                        (i ? l.delete(e) : l.add(e),
                            z.default.track(ef.HAw.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
                                location: S?.location,
                                tab: ep.kx.STICKER,
                                collapsed: !i,
                                sticker_pack_id: n ? e : null,
                            }),
                            v(l));
                    },
                    [S, t, v],
                ),
                O = i.useCallback(
                    (e) => {
                        let n = f[e];
                        if (null != p) {
                            let { sendable: n, sendableWithPremium: i } = p;
                            if (0 === e && n.length > 0) return null;
                            if (tM(e, p)) {
                                let n = y === e;
                                return (0, l.jsx)(
                                    eH.A,
                                    {
                                        className: s()(tm.jH, tm.M0, { [tm.RA]: !n, [tm.sp]: n }),
                                        "aria-label": eg.intl.string(eg.t.pAF6xE),
                                        icon: (0, l.jsx)(eR.NitroWheelIcon, { size: "xs", color: "currentColor" }),
                                        isCollapsed: t.has(tO),
                                        onClick: () => _(tO, { isStickerPack: !1 }),
                                        children: eg.intl.string(eg.t.pAF6xE),
                                    },
                                    "stickers-available-with-nitro-header",
                                );
                            }
                            let r = n.length > 0 && i.length > 0;
                            return (0, l.jsxs)(l.Fragment, {
                                children: [
                                    r ? (0, l.jsx)("div", { className: tm.yF, children: (0, l.jsx)(eB.c, {}) }) : null,
                                    (0, l.jsx)(
                                        eH.A,
                                        {
                                            className: tm.jH,
                                            "aria-label": eg.intl.string(eg.t.wbfJFh),
                                            children: eg.intl.string(eg.t["05Z/0l"]),
                                        },
                                        "stickers-you-might-like-header",
                                    ),
                                ],
                            });
                        }
                        let i = f[e]?.isNitroLocked === !0,
                            r = s()(tm.jH, tm.M0, { [tm.RA]: i && y !== e, [tm.sp]: i && y === e });
                        switch (n.type) {
                            case ee.Z2.FAVORITE:
                                return (0, l.jsx)(
                                    eH.A,
                                    {
                                        className: r,
                                        "aria-label": eg.intl.formatToPlainString(eg.t["7lLCjZ"], {
                                            categoryName: n.name,
                                        }),
                                        icon: (0, l.jsx)(el.StarIcon, { size: "xs", color: "currentColor" }),
                                        isCollapsed: t.has(n.id),
                                        onClick: () => _(n.id, { isStickerPack: !1 }),
                                        children: n.name,
                                    },
                                    `header-${n.id}`,
                                );
                            case ee.Z2.RECENT:
                                return (0, l.jsx)(
                                    eH.A,
                                    {
                                        className: r,
                                        "aria-label": eg.intl.formatToPlainString(eg.t["7lLCjZ"], {
                                            categoryName: n.name,
                                        }),
                                        icon: (0, l.jsx)(ei.ClockIcon, { size: "xs", color: "currentColor" }),
                                        isCollapsed: t.has(n.id),
                                        onClick: () => _(n.id, { isStickerPack: !1 }),
                                        children: n.name,
                                    },
                                    `header-${n.id}`,
                                );
                            case ee.Z2.GUILD:
                            case ee.Z2.EMPTY_GUILD_UPSELL: {
                                let e = ed.A.getGuild(n.id);
                                if (null == e) return null;
                                return (0, l.jsx)(
                                    eH.A,
                                    {
                                        className: r,
                                        "aria-label": eg.intl.formatToPlainString(eg.t["7lLCjZ"], {
                                            categoryName: e.name,
                                        }),
                                        icon: (0, l.jsx)(eo.A, { guild: e, height: 16, width: 16 }),
                                        isCollapsed: t.has(e.id),
                                        onClick: () => _(e.id),
                                        children: e.name,
                                    },
                                    `h${e.id}`,
                                );
                            }
                            case ee.Z2.PACK: {
                                let e = R.A.getStickerPack(n.id);
                                if (null == e) return null;
                                return (0, l.jsx)(
                                    eH.A,
                                    {
                                        className: r,
                                        "aria-label": eg.intl.formatToPlainString(eg.t["7lLCjZ"], {
                                            categoryName: e.name,
                                        }),
                                        icon: (0, l.jsx)(em.A, {
                                            disableAnimation: !0,
                                            size: 12,
                                            sticker: (0, eh.Id)(e),
                                        }),
                                        isCollapsed: t.has(e.id),
                                        onClick: () => _(e.id),
                                        children: e.name,
                                    },
                                    `h${e.id}`,
                                );
                            }
                        }
                    },
                    [y, t, p, f, _],
                ),
                w = i.useCallback(
                    (e) => {
                        if (null != p) {
                            let { sendable: t, sendableWithPremium: n } = p;
                            return 0 === e && t.length > 0
                                ? 0
                                : tM(e, p)
                                  ? tC + 16
                                  : tC + (t.length > 0 && n.length > 0 ? tA : 0);
                        }
                        return tC + 16 * (f[e]?.isNitroLocked === !0);
                    },
                    [p, f],
                );
            return {
                renderRow: N,
                renderSection: T,
                renderSectionHeader: O,
                sectionHeaderHeight: w,
                renderSectionFooter: i.useCallback(
                    (e) => {
                        if (null != p)
                            return tM(e, p)
                                ? (0, l.jsx)("div", { className: tm.pQ })
                                : tL(e, p)
                                  ? (0, l.jsx)(ez.A, { className: tm.$2 })
                                  : null;
                        let n = f[e],
                            i = t.has(n.id),
                            r =
                                n.type !== ee.Z2.EMPTY_GUILD_UPSELL || i
                                    ? null
                                    : (0, l.jsx)(
                                          e5,
                                          {
                                              className: tm.Ij,
                                              guildId: n.id,
                                              channel: x,
                                              shouldTrackUpsellViewed: !I,
                                              setTrackedUpsellViewed: b,
                                          },
                                          `sticker-picker-empty-guild-inline-upsell-${n.id}`,
                                      ),
                            s = null;
                        return (
                            k(e)
                                ? (s = (0, l.jsx)(ez.A, { className: tm.$2 }))
                                : j(e) && (s = (0, l.jsx)("div", { className: tm.pQ })),
                            null == r && null == s ? null : (0, l.jsxs)(l.Fragment, { children: [r, s] })
                        );
                    },
                    [f, t, p, x, I, k, j],
                ),
                sectionFooterHeight: i.useCallback(
                    (e) => {
                        if (null != p) return tM(e, p) ? 33 : 41 * !!tL(e, p);
                        let n = f[e],
                            l = t.has(n.id),
                            i = 0;
                        return (
                            n.type !== ee.Z2.EMPTY_GUILD_UPSELL || l || (i += t_),
                            k(e) ? (i += 41) : j(e) && (i += 33),
                            i
                        );
                    },
                    [p, f, t, k, j],
                ),
            };
        })({
            collapsedStickersCategories: t,
            gridWidth: n,
            stickersCategories: g,
            stickersGrid: x,
            isScrolling: S,
            isUsingKeyboardNavigation: h,
            onSelectSticker: m,
            getStickerItemProps: a,
            getStickerRowProps: o,
            gutterWidth: c,
            inspectedStickerPosition: I,
            filteredStickers: r,
            ownedStickerPacks: i.useMemo(() => new Set(N.map((e) => e.id)), [N]),
            channel: E,
            currentUser: j,
            activeSectionIndex: T,
        }),
        { onScroll: $, upsell: J } = (function (e) {
            let {
                    canUseStickersEverywhere: t,
                    listRef: n,
                    searchQuery: r,
                    categories: s,
                    sectionHeaderHeight: a,
                    sectionFooterHeight: o,
                } = e,
                { location: c } = (0, U.p)(),
                { analyticsLocations: d } = (0, F.Ay)(V.A.STICKER_PICKER),
                [h, m] = i.useState(!1),
                f = i.useMemo(() => s.map((e) => ({ isNitroLocked: !0 === e.isNitroLocked })), [s]),
                p = i.useCallback(
                    (e) => {
                        e4({
                            listRef: n,
                            searchQuery: r,
                            nitroLockedSectionStates: f,
                            scrollTop: e,
                            sectionHeaderHeight: a,
                            sectionFooterHeight: o,
                            setShowUpsell: m,
                        });
                    },
                    [n, f, r, o, a],
                ),
                g = h && "" === r;
            if (
                (i.useEffect(() => {
                    !g ||
                        t ||
                        u.Fr ||
                        (z.default.track(ef.HAw.PREMIUM_UPSELL_VIEWED, {
                            type: eP.e.STICKER_PICKER_FLOATING_UPSELL,
                            location: c,
                            location_stack: d,
                        }),
                        (0, ew.sq)(ef.U7l.PREMIUM_UPSELL_VIEWED, d, () =>
                            (0, eM.uq)(eP.e.STICKER_PICKER_FLOATING_UPSELL),
                        ));
                }, [c, d, t, g]),
                t || u.Fr)
            )
                return { onScroll: p, upsell: null };
            let x = eg.intl.format(eg.t.eontIh, {
                    nitroTierName: (0, eq.Dd)(eP.PremiumTypes.TIER_2),
                    onClick: () => {
                        (z.default.track(ef.HAw.PREMIUM_PROMOTION_OPENED, {
                            location_section: ef.JJy.STICKER_PICKER_FLOATING_UPSELL,
                        }),
                            X(!0));
                    },
                }),
                E = (0, eq.LE)((0, e6.qD)(), eP.pe.TIER_2) ?? eg.intl.string(eg.t.BmJkbd);
            return {
                onScroll: p,
                upsell: (0, l.jsx)(e8.d, {
                    showUpsell: g,
                    text: x,
                    button: E,
                    buttonAnalyticsObject: { section: ef.JJy.STICKER_PICKER_FLOATING_UPSELL },
                }),
            };
        })({
            canUseStickersEverywhere: k,
            listRef: A,
            searchQuery: v,
            categories: g,
            sectionHeaderHeight: q,
            sectionFooterHeight: P,
        });
    i.useEffect(() => {
        $(A.current?.getScrollerNode()?.scrollTop ?? 0);
    }, [$, p]);
    let Z = (0, G.Fk)({
            activeCategoryIndex: C,
            isScrolling: S,
            listRef: A,
            onActiveCategoryIndexChange: W.bM.setActiveCategoryIndex,
            scrollOffset: 20,
            searchQuery: v,
        }),
        Q = i.useCallback((e) => {
            let t = A.current?.getSectionDescriptors();
            null == t ||
                _(
                    Math.max(
                        t.findLastIndex((t) => t.offset.top <= e),
                        0,
                    ),
                );
        }, []);
    i.useLayoutEffect(() => {
        Q(A.current?.getScrollerNode()?.scrollTop ?? 0);
    }, [Q, r, p]);
    let et = i.useCallback(
        (e) => {
            (Z(e), Q(e), $(e));
        },
        [Z, $, Q],
    );
    return (
        (0, G.FV)({ searchQuery: v, activeCategoryIndex: C, listRef: A }),
        i.useImperativeHandle(
            y,
            () => ({
                scrollTo: function () {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    return A.current?.scrollTo(...t);
                },
                getRowDescriptors: () => A.current?.getRowDescriptors() ?? [],
                getSectionDescriptors: () => A.current?.getSectionDescriptors() ?? [],
                scrollToSectionTop: function () {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    return A.current?.scrollToSectionTop(...t);
                },
                scrollRowIntoView: function () {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    return A.current?.scrollRowIntoView(...t);
                },
                getScrollerNode: function () {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    return A.current?.getScrollerNode(...t);
                },
                scrollIntoViewNode: function () {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    return A.current?.scrollIntoViewNode(...t);
                },
                getListDimensions: function () {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    return A.current?.getListDimensions(...t) ?? { height: -1, totalHeight: -1 };
                },
            }),
            [],
        ),
        (0, l.jsx)(F.f5, {
            value: b,
            children: (0, l.jsxs)("div", {
                className: tm.iE,
                children: [
                    (0, l.jsxs)("div", {
                        className: tm.AD,
                        children: [
                            null != r && 0 === r.sendable.length && 0 === r.sendableWithPremium.length
                                ? (0, l.jsx)(eG.A, {
                                      message: eg.intl.string(eg.t["zc+LQd"]),
                                      className: tm.__invalid_noSearchResultsContainer,
                                      suggestions: (0, l.jsx)(tw, { onSuggestionClick: (e) => (0, B.Ri)(e, !0) }),
                                  })
                                : (0, l.jsx)(eK.A, {
                                      role: "none presentation",
                                      listPadding: null != r ? tT : tk,
                                      onScroll: et,
                                      renderRow: O,
                                      renderSection: w,
                                      renderSectionHeader: D,
                                      renderSectionFooter: M,
                                      rowCount: f,
                                      rowCountBySection: p,
                                      rowHeight: n > tf ? tN : tj,
                                      sectionHeaderHeight: q,
                                      sectionFooterHeight: P,
                                      stickyHeaders: !0,
                                      ref: A,
                                  }),
                            J,
                        ],
                    }),
                    (0, l.jsx)(tl, { stickersGrid: x }),
                ],
            }),
        })
    );
};
var tD = n(602034),
    tU = n(683438),
    tV = n(909802);
let tF = function (e) {
    let { onKeyDown: t, stickersListRef: n, channel: r, ref: s } = e,
        a = (0, O.ZO)(r),
        o = i.useRef(null),
        { searchQuery: u, isSearchSuggestion: c } = (0, B.RQ)(
            (e) => ({ searchQuery: e.searchQuery, isSearchSuggestion: e.isSearchSuggestion }),
            L.x,
        ),
        d = W.bM.useStore((e) => e.searchPlaceholder),
        [h, m] = W.bM.useStore((e) => [e.inspectedExpressionPosition, e.hasInteracted], L.x),
        f = i.useCallback(
            (e) => {
                (W.bM.setActiveCategoryIndex("" === e ? 0 : -1),
                    W.bM.setInspectedExpressionPosition(0, 0),
                    W.bM.setSearchPlaceholder(null),
                    (0, B.Ri)(e),
                    n.current?.scrollTo(0));
            },
            [n],
        ),
        p = i.useCallback(() => {
            f("");
        }, [f]);
    return (
        i.useImperativeHandle(s, () => ({ focus: () => o.current?.focus() })),
        i.useLayoutEffect(() => {
            c && o.current?.focus();
        }, [c]),
        (0, l.jsx)("div", {
            className: tV.i,
            children: (0, l.jsx)(tU.I, {
                autoFocus: a,
                disabled: !a,
                query: u,
                ref: o,
                placeholder: d ?? (a ? eg.intl.string(eg.t.dt5h1C) : eg.intl.string(eg.t["Pck/4U"])),
                onClear: p,
                onKeyDown: t,
                onChange: f,
                inputProps: {
                    "aria-haspopup": "grid",
                    "aria-controls": eL.lq,
                    "aria-expanded": !0,
                    ...(m ? { "aria-activedescendant": (0, tD.Aq)(eL.lq, h.columnIndex, h.rowIndex) } : void 0),
                },
            }),
        })
    );
};
n(321073);
var tW = n(997625),
    tB = n(95278),
    tG = n(401507);
function tK(e) {
    let { onUpsellClicked: t } = e,
        { location: n } = (0, U.p)(),
        { analyticsLocations: i } = (0, F.Ay)(V.A.STICKER_PICKER),
        r = (0, B.RQ)((e) => e.searchQuery);
    return (0, l.jsx)(tG.A, {
        title: eg.intl.string(eg.t.Eukdgl),
        description: eg.intl.string(eg.t.sMmd7s),
        analyticsLocationSection: ef.JJy.STICKER_PICKER_UPSELL,
        onClose: () => X(!1),
        onUpsellClicked: t,
        upsellViewedTrackingData: {
            type: eP.e.STICKER_PICKER_UPSELL,
            location: { ...n, object: ef.ZSU.STICKER },
            location_stack: i,
            sku_id: (0, eq.mH)(eq.Ay.getSkuIdForPremiumType(eP.PremiumTypes.TIER_2)),
            has_search_query: "" !== r,
        },
        graphic: (0, l.jsx)(tB.n, { alt: "", ariaHidden: !0 }),
        useNitroGradient: !0,
    });
}
var tH = n(970099);
let tz = (0, q.xI)(P.A.STICKERS_CONSTANTS_STICKER_PICKER_BREAKPOINT_SMALL),
    tq = (0, q.xI)(P.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_LEFT),
    t$ = (0, q.xI)(P.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_RIGHT),
    tJ = (0, q.xI)(P.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_MARGIN),
    tZ = (0, q.xI)(P.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_MARGIN_SMALL),
    tQ = (0, q.xI)(P.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS),
    tX = (0, q.xI)(P.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS_SMALL),
    tY = tQ + 2,
    t0 = tX + 2,
    t1 = M()(Y.Qz, 200),
    t2 = M()(Y.HA, 200);
function t5(e) {
    let { containerWidth: t, channel: r, onSelectSticker: s, closePopout: a, ref: o } = e,
        { location: u } = (0, U.p)(),
        { analyticsLocations: c } = (0, F.Ay)(V.A.STICKER_PICKER),
        h = i.useRef(null),
        f = i.useRef(null),
        p = i.useRef(null),
        g = Q((e) => e.showPremiumUpsell),
        [x, E] = (0, B.RQ)((e) => [e.searchQuery, e.isSearchSuggestion], L.x),
        y = i.useRef("");
    i.useImperativeHandle(o, () => ({ onPickerOpen: ec }));
    let S = (0, O.pD)(r),
        A = (0, d.bG)([H.default], () => H.default.getCurrentUser()),
        C = i.useMemo(
            () =>
                S.flatMap((e) => {
                    let t = (function (e, t, n) {
                        switch (e.type) {
                            case ee.Z2.FAVORITE:
                            case ee.Z2.RECENT: {
                                let l = eW(e, t, n);
                                return 0 === l.length ? null : { ...e, stickers: l, isNitroLocked: !1 };
                            }
                            case ee.Z2.GUILD: {
                                var l;
                                let i = eW(e, t, n);
                                if (
                                    i.length > 0 &&
                                    ((l = { ...e, stickers: i }),
                                    l.type === ee.Z2.GUILD &&
                                        0 !== l.stickers.length &&
                                        l.stickers.every((e) => (0, eF.W$)(e, t, n) === eF.Ux.SENDABLE_WITH_PREMIUM))
                                )
                                    return { ...e, stickers: i, isNitroLocked: !0 };
                                return { ...e, isNitroLocked: !1 };
                            }
                            default:
                                return { ...e, isNitroLocked: !1 };
                        }
                    })(e, A, r);
                    return null != t ? [t] : [];
                }),
            [S, r, A],
        ),
        I = 0 === C.filter((e) => e.type !== ee.Z2.EMPTY_GUILD_UPSELL).length,
        b = (0, G.oV)({
            gridWrapperRef: h,
            containerWidth: t,
            showingEmptyState: I,
            listPaddingLeft: tq,
            listScrollbarWidth: 8,
        }),
        v = K.tP.useSetting(),
        N = i.useMemo(() => new Set(v), [v]),
        j = i.useMemo(
            () =>
                (function (e, t, n) {
                    if ("" === e) return null;
                    let l = [],
                        i = [];
                    return (
                        tW.Ay.queryStickers([e], !0)
                            .map((e) => {
                                let { sticker: t } = e;
                                return t;
                            })
                            .forEach((e) => {
                                let r = (0, eF.W$)(e, t, n);
                                r === eF.Ux.SENDABLE ? l.push(e) : r === eF.Ux.SENDABLE_WITH_PREMIUM && i.push(e);
                            }),
                        { sendable: l, sendableWithPremium: i }
                    );
                })(x, A, r),
            [x, A, r],
        ),
        k = (0, O.Gc)(),
        T = (0, O.UT)(),
        _ = (0, d.cf)([R.A], () => R.A.getAllGuildStickers()),
        { sendable: w = [], sendableWithPremium: M = [] } = j ?? {},
        P = w.length + M.length,
        D = i.useCallback(
            (e) => {
                ("" === x ? (0, Y.ry)(e) : (0, Y.nQ)(e, x, P), s(e.sticker, ee.D6.STICKER_PICKER));
            },
            [s, x, P],
        ),
        q = null != b && b > tz,
        {
            rowCount: $,
            rowCountBySection: J,
            stickersGrid: Z,
            gutterWidth: el,
            columnCounts: ei,
        } = (0, O._c)({
            filteredStickers: j,
            stickersCategories: C,
            collapsedStickersCategories: N,
            collapsePremiumSearchSection: N.has(tO),
            listWidth: b,
            listPaddingRight: t$,
            stickerNodeMargin: q ? tJ : tZ,
            stickerNodeWidth: q ? tY : t0,
        }),
        {
            getItemProps: er,
            getRowProps: es,
            gridContainerProps: ea,
            handleGridContainerKeyDown: eo,
            isUsingKeyboardNavigation: eu,
        } = (function (e) {
            let {
                    columnCounts: t,
                    stickersGrid: n,
                    stickersListRef: l,
                    store: r,
                    gridNavigatorId: s,
                    setInspectedStickerPosition: a,
                    onGridItemSelect: o,
                } = e,
                u = (0, U.p)(),
                c = i.useCallback(
                    (e) => {
                        o(e, u);
                    },
                    [o, u],
                ),
                d = i.useCallback(
                    (e, t) => {
                        a(e, t, en.t.GRID_NAVIGATOR_EVENT);
                    },
                    [a],
                ),
                {
                    gridDispatch: h,
                    getItemProps: m,
                    getRowProps: f,
                    gridContainerProps: p,
                    handleGridContainerKeyDown: g,
                    isUsingKeyboardNavigation: x,
                } = (0, G.Ff)({
                    columnCounts: t,
                    gridNavigatorId: s,
                    itemGrid: n,
                    itemList: l,
                    onGridNavigatorItemSelect: c,
                    onGridNavigatorPositionChange: d,
                });
            return (
                i.useEffect(
                    () =>
                        r.subscribe(
                            (e) => e.inspectedExpressionPosition,
                            (e) => {
                                if (null == e) return;
                                let { columnIndex: t, rowIndex: n, source: l } = e;
                                l !== en.t.GRID_NAVIGATOR_EVENT && h({ type: et.n.SET_FOCUSED_POSITION, x: t, y: n });
                            },
                        ),
                    [h, r],
                ),
                {
                    getItemProps: m,
                    getRowProps: f,
                    gridContainerProps: p,
                    handleGridContainerKeyDown: g,
                    isUsingKeyboardNavigation: x,
                }
            );
        })({
            columnCounts: ei,
            stickersListRef: f,
            stickersGrid: Z,
            onGridItemSelect: i.useCallback(
                (e, t) => {
                    let { location: i } = t;
                    switch (e.type) {
                        case ee.op.CREATE_STICKER:
                            (z.default.track(ef.HAw.OPEN_MODAL, { type: ef.JJy.CREATE_STICKER_MODAL, location: u }),
                                (0, m.mM)(async () => {
                                    let { default: t } = await Promise.all([
                                        n.e(860350),
                                        n.e(142753),
                                        n.e(207998),
                                        n.e(699733),
                                        n.e(689827),
                                        n.e(268582),
                                        n.e(480436),
                                        n.e(848625),
                                        n.e(883952),
                                        n.e(66580),
                                        n.e(50342),
                                        n.e(420643),
                                        n.e(1795),
                                        n.e(429143),
                                    ]).then(n.bind(n, 445002));
                                    return (n) => (0, l.jsx)(t, { guildId: e.guild_id, ...n });
                                }));
                            break;
                        case ee.op.STICKER:
                            if (null == e.sticker) break;
                            th({ descriptor: e, currentUser: A, channel: r, onSelect: D });
                    }
                },
                [u, A, r, D],
            ),
            store: W.bM,
            setInspectedStickerPosition: W.bM.setInspectedExpressionPosition,
            gridNavigatorId: eL.lq,
        });
    function ec() {
        let e = r.getGuildId(),
            n = [];
        null !== e && (n = R.A.getStickersByGuildId(e) ?? []);
        let l = 0;
        (null != _ &&
            [..._.values()].forEach((e) => {
                l += e.length;
            }),
            (0, Y.p4)({
                containerWidth: t,
                favoriteStickers: k,
                frequentlyUsedStickers: T,
                guildStickers: n,
                stickersTotal: l,
            }));
    }
    return (
        i.useEffect(
            () => () => {
                (W.bM.resetStoreState(), X(!1));
            },
            [],
        ),
        i.useEffect(() => {
            ("" === y.current && "" !== x && (0, Y.Fg)(), (y.current = x));
        }, [x]),
        i.useEffect(() => {
            0 === P ? t1(x) : t2(x, P, E);
        }, [x, P, E]),
        i.useLayoutEffect(() => {
            p.current?.focus();
        }, []),
        (0, l.jsxs)(F.f5, {
            value: c,
            children: [
                (0, l.jsx)("div", {
                    className: tH.wx,
                    children: (0, l.jsx)(tF, { ref: p, onKeyDown: eo, stickersListRef: f, channel: r }),
                }),
                I
                    ? (0, l.jsx)(eV, { className: tH.p$ })
                    : (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)("div", {
                                  ref: h,
                                  className: tH.AD,
                                  id: eL.lq,
                                  ...ea,
                                  children:
                                      null != b
                                          ? (0, l.jsx)(tP, {
                                                ref: f,
                                                collapsedStickersCategories: N,
                                                filteredStickers: j,
                                                getStickerItemProps: er,
                                                getStickerRowProps: es,
                                                gridWidth: b,
                                                gutterWidth: el,
                                                isUsingKeyboardNavigation: eu,
                                                onSelectSticker: D,
                                                rowCount: $,
                                                rowCountBySection: J,
                                                stickersCategories: C,
                                                stickersGrid: Z,
                                                channel: r,
                                            })
                                          : null,
                              }),
                              (0, l.jsx)(ek, { stickersListRef: f, stickersCategories: C }),
                          ],
                      }),
                g && (0, l.jsx)(tK, { onUpsellClicked: a }),
            ],
        })
    );
}
let t3 = function (e) {
    let { ref: t, ...n } = e;
    return (
        (0, O.XQ)(),
        (0, l.jsx)("div", {
            className: tH.iE,
            id: eL.GX,
            "aria-labelledby": eL.LD,
            role: "tabpanel",
            children: n.isLoading ? (0, l.jsx)(D.y, { className: tH.Mz }) : (0, l.jsx)(t5, { ...n, ref: t }),
        })
    );
};
var t6 = n(964404),
    t8 = n(712687),
    t4 = n(188567),
    t7 = n(49999),
    t9 = n(732139),
    ne = n(307731),
    nt = n(818625);
let nn = 498 + t9.as.MEDIUM,
    nl = i.memo(function (e) {
        let { isActive: t, className: n, viewType: i, autoFocus: r = !1, "aria-controls": a, ...o } = e;
        return (0, l.jsx)(f.D, {
            role: "tab",
            autoFocus: r,
            "aria-controls": t ? a : void 0,
            ...o,
            onClick: () => {
                (S.Ay.trackWithMetadata(ef.HAw.EXPRESSION_PICKER_TAB_CLICKED, { tab: i, badged: !1 }), (0, B.U)(i));
            },
            "aria-current": t ? "page" : void 0,
            className: s()(n, nt.oi, nt.pc, { [nt.Mv]: t }),
        });
    }),
    ni = i.memo(function (e) {
        let {
                returnRef: t,
                positionTargetRef: n,
                hideGifFavorites: r,
                onSelectGIF: a,
                onSelectEmoji: f,
                onSelectSticker: w,
                onSelectSound: M,
                channel: L,
                type: P,
                position: D,
                align: U,
                positionLayerClassName: V,
                closeOnModalOuterClick: F = !1,
                parentModalKey: W,
            } = e,
            G = i.useRef(null),
            K = i.useRef(!1),
            H = i.useRef(null),
            z = i.useRef(null),
            { drawerWidth: q, handleDrawerResizeHandleMouseDown: $ } = (function (e) {
                let { positionContainerRef: t, drawerRef: n, orientation: l } = e,
                    r = (0, d.bG)([t6.Ay], () => t6.Ay.expressionPickerWidth),
                    [s, a] = i.useState(window.innerWidth),
                    [u, c] = i.useState(r ?? ep.wp.MIN),
                    h = i.useMemo(() => {
                        switch (u) {
                            case ep.wp.MIN:
                                return 498;
                            case ep.wp.MAX:
                                return null;
                            default:
                                return u;
                        }
                    }, [u]),
                    m = i.useCallback(
                        (e) => {
                            let t = e >= s ? ep.wp.MAX : e <= 498 ? ep.wp.MIN : e;
                            (null == t && null != n.current && (n.current.style.width = ""),
                                x.Ay.updatedUnsyncedSettings({ expressionPickerWidth: t }),
                                c(t));
                        },
                        [n, s],
                    ),
                    f = (0, y.A)({
                        initialElementDimension: h,
                        maxDimension: s,
                        minDimension: 498,
                        resizableDomNodeRef: n,
                        onElementResize: m,
                        orientation: l,
                    });
                return (
                    i.useEffect(() => {
                        let e = o().debounce(() => {
                            null != t.current && a(t.current.offsetWidth);
                        }, 500);
                        return (
                            window.addEventListener("resize", e),
                            () => {
                                window.removeEventListener("resize", e);
                            }
                        );
                    }, [t]),
                    i.useLayoutEffect(() => {
                        null != t.current && a(t.current.offsetWidth);
                    }, [t]),
                    {
                        drawerWidth: h,
                        handleDrawerResizeHandleMouseDown: i.useCallback(
                            (e) => {
                                (e.stopPropagation(), null != t.current && a(t.current.offsetWidth), f(e));
                            },
                            [t, f],
                        ),
                    }
                );
            })({
                positionContainerRef: G,
                drawerRef: z,
                orientation: "left" === U ? y.R.HORIZONTAL_RIGHT : y.R.HORIZONTAL_LEFT,
            }),
            J = (0, B.RQ)((e) => e.activeView),
            Z = (0, O.ZO)(L),
            { renderWindow: Q, windowDispatch: X } = i.useContext(k.Ay),
            Y = (0, d.bG)([R.A], () => !R.A.hasLoadedStickerPacks),
            ee = (0, T.t)({ location: "expression_picker" }),
            et = (0, b.H)("expression_picker");
        i.useEffect(() => {
            et && (0, v.Fp)();
        }, [et]);
        let en = (0, B.RQ)((e) => e.showEmojiPacks || null != e.showSelectedEmojiPackId),
            el = (0, d.bG)([t8.A], () => t8.A.isOpen()),
            ei = null != W,
            er = (0, m.LA)(W ?? ""),
            es = P.gifs?.allowSending && !u.Fr && null != a,
            ea = P.stickers?.allowSending && null != w,
            eo = !P.expressionPicker?.onlyEmojis && (es || ea),
            eu = P.expressionPicker?.emojiIntention ?? ne.EmojiIntention.CHAT,
            ec = et && (0, I.z)(eu),
            ed = ec && en,
            eh = eo && !ed,
            em = i.useCallback(
                (e) => {
                    if ((!ei && (0, m.ue)()) || (ei && !(er && F)) || el || e.defaultPrevented) return;
                    let { target: t } = e;
                    if ((0, c.vq)(t) && null != t.closest("." + ep.VQ)) return;
                    for (; (0, c.vq)(t);) {
                        if (
                            t === z.current ||
                            "true" === t.getAttribute("data-menu-item") ||
                            "true" === t.getAttribute("data-premium-tutorial-expression-picker-tooltip") ||
                            "true" === t.getAttribute("data-premium-tutorial-persistent-coachmark-emoji-step")
                        )
                            return;
                        t = t.parentNode;
                    }
                    ("mousedown" === e.type &&
                        (0, c.vq)(e.target) &&
                        null != z.current &&
                        e.target.contains(z.current) &&
                        e.preventDefault(),
                        (0, B.v8)());
                    let n = (0, c.BF)(e)?.activeElement;
                    (null == n || "BODY" === n.tagName) && t4._.dispatchToLastSubscribed(ef.jej.TEXTAREA_FOCUS);
                },
                [F, er, ei, el],
            ),
            ex = i.useCallback(() => {
                (0, B.v8)();
            }, []);
        (i.useLayoutEffect(() => {
            function e() {
                J === ep.kx.GIF && (0, B.v8)();
            }
            return (
                Q.addEventListener("mousedown", em),
                Q.addEventListener("contextmenu", em),
                X.subscribe(ef.jej.POPOUT_CLOSE, ex),
                t4._.subscribe(ef.jej.CLOSE_GIF_PICKER, e),
                () => {
                    (Q.removeEventListener("mousedown", em),
                        Q.removeEventListener("contextmenu", em),
                        X.unsubscribe(ef.jej.POPOUT_CLOSE, ex),
                        t4._.unsubscribe(ef.jej.CLOSE_GIF_PICKER, e));
                }
            );
        }, [J, ex, em, Q, X]),
            (0, p.tj)(G, { returnRef: t }));
        let [eE, ey] = (0, A.kn)(ee ? [h.M.SOUNDMOJI_BADGE] : []),
            [eS, eA] = i.useState(!1);
        (i.useEffect(() => {
            J === ep.kx.SOUNDBOARD && eA(!0);
        }, [J]),
            i.useEffect(
                () => () => {
                    eS && ey(t7.i.TAKE_ACTION);
                },
                [eS, ey],
            ),
            i.useEffect(() => {
                (0, B.Ri)("");
            }, []),
            i.useEffect(() => {
                ((!ei && (0, m.ue)()) || (ei && !er)) && (0, B.v8)();
            }, [er, ei]),
            i.useEffect(() => {
                null != z.current &&
                    !K.current &&
                    (J === ep.kx.EMOJI
                        ? H?.current?.onPickerOpen != null && (H?.current?.onPickerOpen(), (K.current = !0))
                        : J === ep.kx.STICKER
                          ? H?.current?.onPickerOpen == null || Y || (H?.current?.onPickerOpen(), (K.current = !0))
                          : (S.Ay.trackWithMetadata(ef.HAw.EXPRESSION_PICKER_OPENED, {
                                width: z.current.offsetWidth,
                                tab: J,
                                badged: !1,
                            }),
                            (K.current = !0)));
            }));
        let eC = i.useCallback((e, t) => M?.(e, "soundboard_picker", t), [M]),
            eI = P.soundmoji?.allowSending === !0 && null != M,
            eb = "left" === U ? "right" : "left",
            ev = null != V ? V : "left" === U ? nt.sj : nt.Jg,
            eN = es
                ? (0, l.jsx)(nl, {
                      id: t9.g9,
                      "aria-controls": t9.ni,
                      "aria-selected": J === ep.kx.GIF,
                      isActive: J === ep.kx.GIF,
                      viewType: ep.kx.GIF,
                      children: eg.intl.string(eg.t["6gUTsS"]),
                  })
                : null,
            ej = ea
                ? (0, l.jsx)(nl, {
                      id: eL.LD,
                      "aria-controls": eL.GX,
                      "aria-selected": J === ep.kx.STICKER,
                      isActive: J === ep.kx.STICKER,
                      autoFocus: !Z,
                      viewType: ep.kx.STICKER,
                      children: (0, l.jsx)("div", { className: nt.dG, children: eg.intl.string(eg.t.nf1s3u) }),
                  })
                : null,
            ek = (0, l.jsx)(nl, {
                id: t9.k1,
                "aria-controls": t9.Do,
                "aria-selected": J === ep.kx.EMOJI,
                isActive: J === ep.kx.EMOJI,
                viewType: ep.kx.EMOJI,
                children: eg.intl.string(eg.t.Xu3wE3),
            });
        return (0, l.jsx)(E.A, {
            section: ef.JJy.EXPRESSION_PICKER,
            children: (0, l.jsx)(j.nE, {
                className: s()(nt.T8, ev),
                targetRef: n,
                position: D,
                align: U,
                spacing: 8,
                autoInvert: !0,
                clickTrap: !0,
                children: (e) => {
                    let { isPositioned: t } = e;
                    return (0, l.jsx)("section", {
                        className: s()(nt.V6, { [nt.D0]: !eo }),
                        ref: G,
                        role: "dialog",
                        "aria-label": eg.intl.string(eg.t.Utlwvi),
                        children: t
                            ? (0, l.jsxs)("div", {
                                  className: nt.jP,
                                  style: { width: null == q ? void 0 : q, [U]: 0 },
                                  ref: z,
                                  children: [
                                      (0, l.jsx)("div", { className: nt.Di, onMouseDown: $, style: { [eb]: -2 } }),
                                      (0, l.jsxs)("div", {
                                          className: s()(nt.FG, { [nt.$D]: ed }),
                                          children: [
                                              eh
                                                  ? (0, l.jsx)("nav", {
                                                        className: nt.C$,
                                                        children: (0, l.jsxs)("div", {
                                                            className: nt.CT,
                                                            role: "tablist",
                                                            "aria-label": eg.intl.string(eg.t["2j4Vgd"]),
                                                            children: [
                                                                eN,
                                                                ej,
                                                                ek,
                                                                ee &&
                                                                    eI &&
                                                                    (0, l.jsx)(nl, {
                                                                        id: t9.N6,
                                                                        "aria-controls": t9.AA,
                                                                        "aria-selected": J === ep.kx.SOUNDBOARD,
                                                                        isActive: J === ep.kx.SOUNDBOARD,
                                                                        viewType: ep.kx.SOUNDBOARD,
                                                                        children: (0, l.jsxs)("div", {
                                                                            className: nt.sd,
                                                                            children: [
                                                                                eg.intl.string(eg.t.EHlAMc),
                                                                                null != eE &&
                                                                                    (0, l.jsx)(g.E, {
                                                                                        type: "new",
                                                                                        variant: "primary",
                                                                                    }),
                                                                            ],
                                                                        }),
                                                                    }),
                                                            ],
                                                        }),
                                                    })
                                                  : null,
                                              J === ep.kx.STICKER && ea
                                                  ? (0, l.jsx)(t3, {
                                                        isLoading: Y,
                                                        channel: L,
                                                        containerWidth: q,
                                                        onSelectSticker: w,
                                                        closePopout: ex,
                                                        ref: (e) => {
                                                            H.current = e;
                                                        },
                                                    })
                                                  : null,
                                              J === ep.kx.GIF && es
                                                  ? (0, l.jsx)(N.A, {
                                                        onSelectGIF: a,
                                                        hideFavorites: r,
                                                        persistSearch: !0,
                                                    })
                                                  : null,
                                              J === ep.kx.EMOJI || P.expressionPicker?.onlyEmojis === !0
                                                  ? (0, l.jsx)(C.default, {
                                                        hasTabWrapper: !0,
                                                        persistSearch: !0,
                                                        channel: L,
                                                        containerWidth: q,
                                                        emojiSize: null != q && q < nn ? t9.as.MEDIUM : t9.as.LARGE,
                                                        pickerIntention: eu,
                                                        showAddEmojiButton: null == L || null != L.guild_id,
                                                        closePopout: ex,
                                                        onSelectEmoji: f,
                                                        ref: (e) => {
                                                            H.current = e;
                                                        },
                                                        isViewingEmojiPacks: ed,
                                                        onViewEmojiPacksChange: ec ? B.ke : void 0,
                                                    })
                                                  : null,
                                              J === ep.kx.SOUNDBOARD
                                                  ? (0, l.jsx)("div", {
                                                        className: nt.z,
                                                        children: (0, l.jsx)(_.A, {
                                                            guildId: L.guild_id,
                                                            channel: L,
                                                            containerWidth: q,
                                                            onClose: ex,
                                                            onSelect: eC,
                                                            analyticsSource: "expression-picker",
                                                            renderHeader: (e) =>
                                                                (0, l.jsx)("div", { className: nt.BG, children: e }),
                                                            inExpressionPicker: !0,
                                                            shouldValidateSelectedSound: !0,
                                                        }),
                                                    })
                                                  : null,
                                          ],
                                      }),
                                  ],
                              })
                            : null,
                    });
                },
            }),
        });
    }),
    nr = (0, n(945810).mj)({
        name: "2026-11-reaction-menu-redesign",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    });
var ns = n(408278),
    na = n(677548),
    no = n(644508),
    nu = n(824832),
    nc = n(603109);
function nd(e) {
    let { channel: t, closePopout: n } = e,
        r = i.useRef(null),
        s = i.useRef(0),
        [a, o] = i.useState(!1),
        [u, c] = i.useState(!1),
        d = (0, k.Us)() === ef.BRT.OVERLAY,
        h = u || a,
        m = i.useCallback(
            async (e, l, i) => {
                (c(!0),
                    n(),
                    await (0, no.f)({
                        userImage: { data: e, file: l, image: i },
                        guildId: t?.guild_id ?? null,
                        analyticsLocation: {
                            section: ef.JJy.EXPRESSION_PICKER,
                            page: t?.guild_id != null ? ef.liQ.GUILD_CHANNEL : ef.liQ.DM_CHANNEL,
                        },
                    }),
                    (s.current += 1),
                    c(!1));
            },
            [t, n],
        );
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(er.m, {
                asContainer: !0,
                ariaHidden: !d,
                text: d ? eg.intl.string(eg.t.RMbedC) : eg.intl.string(eg.t.iMJO37),
                children: (0, l.jsx)(ns.K, {
                    icon: na.ExperimentalCreateEmojiIcon,
                    variant: "icon-only",
                    size: "sm",
                    "aria-label": eg.intl.string(eg.t.iMJO37),
                    onClick: function () {
                        (S.Ay.trackWithMetadata(ef.HAw.EXPRESSION_PICKER_ADD_EMOJI_CLICKED, {
                            guild_id: t?.guild_id ?? null,
                            channel_id: t?.id ?? null,
                            location_section: ef.JJy.EXPRESSION_PICKER,
                            location_page: t?.guild_id != null ? ef.liQ.GUILD_CHANNEL : ef.liQ.DM_CHANNEL,
                        }),
                            r.current?.activateUploadDialogue());
                    },
                    disabled: h || d,
                }),
            }),
            (0, l.jsx)("div", {
                className: nc.F,
                children: (0, l.jsx)(nu.Ay, { ref: r, onChange: m, setLoading: o, disabled: h }, s.current),
            }),
        ],
    });
}
var nh = n(305866),
    nm = n(554375),
    nf = n(964486),
    np = n(765548),
    ng = n(379848),
    nx = n(822123),
    nE = n(141862),
    ny = n(316884),
    nS = n(370968),
    nA = n(624751),
    nC = n(484333),
    nI = n(178898),
    nb = n(148361),
    nv = n(121681),
    nN = n(770335),
    nj = n(429573),
    nk = n(807300),
    nT = n(598770),
    n_ = n(451731),
    nO = n(564068),
    nR = n(450510),
    nw = n(778705),
    nM = n(474090),
    nL = n(837381),
    nP = n(460905),
    nD = n(565645),
    nU = n(775602),
    nV = n(535622),
    nF = n(113140),
    nW = n(531685),
    nB = n(260509),
    nG = n(475448);
let nK = function (e) {
    let { className: t, guild: n, isSelected: i = !0, shouldAnimate: r = !0, isLocked: a = !1, size: o = 40 } = e,
        u = (0, nB.Iv)(n, o, r && i);
    return (0, l.jsxs)("div", {
        className: s()(nG.Vs, t),
        children: [
            (0, l.jsx)("div", {
                className: nG.Kk,
                children:
                    null == u
                        ? (0, l.jsx)(e_.E, {
                              variant: "body-xs/medium",
                              color: "text-default",
                              className: nG.Hj,
                              children: (0, nB.Rb)(n),
                          })
                        : (0, l.jsx)("img", { alt: n.name, src: u, className: nG.Sl }),
            }),
            a
                ? (0, l.jsx)("div", {
                      className: nG.NE,
                      children: (0, l.jsx)(tr.LockIcon, {
                          size: "custom",
                          color: "currentColor",
                          width: 10,
                          height: 10,
                          className: nG.hz,
                      }),
                  })
                : null,
        ],
    });
};
var nH = n(352412);
let nz = "expression-guild-",
    { itemIdForIndex: nq } = (0, eu.J)(nz),
    n$ = `${nz}view-emoji-packs`,
    nJ = [0, 16, -12, 16];
function nZ(e) {
    switch (e.type) {
        case t9.s.GUILD:
            return e.guild.name;
        case t9.s.PACK:
            return e.pack.name;
        case t9.s.UNICODE:
            return (0, nx.Nu)(e.id);
        default:
            return e.name;
    }
}
function nQ(e) {
    let {
            activeIndex: t,
            categoryIndex: n,
            analyticsContext: r,
            categories: a,
            category: o,
            handleCategorySelect: u,
            isWindowFocused: c,
            useReducedMotion: d,
        } = e,
        h = i.useRef(null),
        { isHoveringOrFocusing: m } = (0, ea.A)(h),
        p = (0, nL.rm)(nq(n)),
        g = t === n,
        x = !d && c,
        E = o.type === t9.s.GUILD ? o.guild : null,
        y = o.type === t9.s.PACK ? o.pack : null,
        S = o.type === t9.s.GUILD || o.type === t9.s.PACK ? null : o.id,
        A = a[n + 1],
        C = a[n - 1],
        I = null != y && null != C && C.type !== t9.s.PACK,
        b = null != y && A?.type !== t9.s.PACK,
        v = null != A && null != E && A.type !== t9.s.GUILD;
    return (0, l.jsxs)(i.Fragment, {
        children: [
            I ? (0, l.jsx)("hr", { className: nH.me }) : null,
            (0, l.jsx)(er.m, {
                text: nZ(o),
                position: "right",
                ariaHidden: !0,
                children: (0, l.jsx)("div", {
                    children: (0, l.jsxs)(f.D, {
                        innerRef: h,
                        ...p,
                        "aria-label": nZ(o),
                        className: s()(nH.Vs, { [nH._V]: null != S, [nH.z]: null != S && g }),
                        onClick: () => {
                            (null != E &&
                                z.default.track(ef.HAw.EXPRESSION_PICKER_CATEGORY_SELECTED, {
                                    location: r?.location,
                                    tab: ep.kx.EMOJI,
                                    guild_id: E.id,
                                }),
                                u(n));
                        },
                        children: [
                            (0, l.jsx)("div", {
                                className: nH.G3,
                                children: (0, l.jsx)(ec.A, { selected: g, hovered: m }),
                            }),
                            null != E
                                ? (0, l.jsx)(nK, {
                                      guild: E,
                                      isSelected: g,
                                      shouldAnimate: x,
                                      isLocked: o.type === t9.s.GUILD && o.isNitroLocked,
                                  })
                                : null,
                            null != y
                                ? (0, l.jsx)(nD.A, {
                                      alt: "",
                                      animated: !d,
                                      shouldAnimate: x,
                                      className: nH.ty,
                                      emojiId: y.representativeEmojiId,
                                  })
                                : null,
                            null != S
                                ? (0, l.jsx)(nV.A, {
                                      categoryId: S,
                                      className: nH.Yl,
                                      height: 20,
                                      width: 20,
                                      size: "custom",
                                  })
                                : null,
                        ],
                    }),
                }),
            }),
            v || b ? (0, l.jsx)("hr", { className: nH.me }) : null,
        ],
    });
}
let nX = (e) => {
    let {
            className: t,
            emojiListRef: n,
            sectionDescriptors: r,
            intention: a,
            channel: u,
            fallbackGuildId: c,
            pinnedPacks: h,
            onViewEmojiPacks: m,
            showEmojiPacksDiscovery: f,
            onDismissEmojiPacksDiscovery: p,
        } = e,
        g = W.Om.useStore((e) => e.activeCategoryIndex),
        x = (0, nC.cr)({ sectionDescriptors: r, emojiListRef: n }),
        E = (0, U.p)(),
        y = (0, nx.ss)(a, u, { guildId: u?.guild_id ?? c }),
        S = i.useMemo(() => (0, I.t)(y, h), [y, h]),
        A = i.useRef(null),
        [C, b] = i.useState(!1),
        [v, N] = i.useState(!0),
        j = (0, d.bG)([nW.A], () => nW.A.isFocused()),
        k = (0, d.bG)([nU.Ay], () => nU.Ay.useReducedMotion, []),
        T = i.useMemo(
            () =>
                o().memoize(
                    (e, t) => {
                        let n = S[t];
                        if (null != n)
                            return (0, l.jsx)(
                                nQ,
                                {
                                    activeIndex: g,
                                    analyticsContext: E,
                                    categories: S,
                                    category: n,
                                    categoryIndex: t,
                                    handleCategorySelect: x,
                                    isWindowFocused: j,
                                    useReducedMotion: k,
                                },
                                t,
                            );
                    },
                    (e, t) => t,
                ),
            [g, E, S, x, j, k],
        ),
        _ = 65 * (null != m),
        O = i.useMemo(() => {
            if (null != m)
                return function () {
                    return (0, l.jsx)(
                        nF.A,
                        { listItemId: n$, onClick: m, showDiscoveryDot: f, onDismissDiscovery: p },
                        "view-emoji-packs",
                    );
                };
        }, [m, f, p]),
        R = i.useCallback(
            (e, t) => {
                let n = S[t],
                    l = S[t - 1],
                    i = S[t + 1];
                return n.type === t9.s.PACK
                    ? 52 + (Number(null != l && l.type !== t9.s.PACK) + Number(i?.type !== t9.s.PACK)) * 25
                    : n.type === t9.s.GUILD && null != i && i.type !== t9.s.GUILD
                      ? 77
                      : 52;
            },
            [S],
        ),
        {
            nonUnicodeCategoryCount: w,
            firstUnicodeCategoryOffsetTop: M,
            rowCountBySection: L,
        } = i.useMemo(() => {
            let e = 0,
                t = 0,
                n = 0,
                l = 0;
            S.forEach((i) => {
                i.type === t9.s.GUILD || i.type === t9.s.PACK
                    ? ((t += 1), (n += 1))
                    : i.type === t9.s.UNICODE
                      ? (l += 1)
                      : ((e += 1), (t += 1));
            });
            let i = S.some((e) => e.type === t9.s.PACK) ? (S[0]?.type === t9.s.PACK ? 1 : 2) : 0,
                r = _ + 52 * t + 25 + 25 * i;
            return { nonUnicodeCategoryCount: t, firstUnicodeCategoryOffsetTop: r, rowCountBySection: [e, n, l] };
        }, [S, _]),
        [P, D] = i.useState(!0),
        V = i.useCallback(() => A.current?.getSectionDescriptors()[2]?.offset.top ?? M, [M]),
        F = i.useCallback(
            (e) => {
                let t = A.current?.getListDimensions();
                if (null == t) return;
                let n = e + t.height;
                (b(e > 0), N(n < t.totalHeight - 1), D(V() > n - 40));
            },
            [V],
        );
    i.useEffect(() => {
        let e = A.current?.getScrollerNode();
        if (null == e) return;
        let t = () => F(e.scrollTop),
            n = new ResizeObserver(t);
        return (n.observe(e), t(), () => n.disconnect());
    }, [S.length, F]);
    let B = w >= 7 && P,
        G = i.useCallback(
            (e) => {
                (e(w), A.current?.scrollTo(V()));
            },
            [V, w],
        ),
        K = i.useCallback(
            (e, t) => {
                let n = S[e];
                if (null == n) return 0;
                if (!t) return 24;
                let l = S[e + 1];
                return 20 + 40 * !!B - 25 * (n.type === t9.s.GUILD && null != l && l.type !== t9.s.GUILD);
            },
            [S, B],
        ),
        H = i.useMemo(
            () =>
                function (e, t) {
                    return (0, l.jsx)(i.Fragment, { children: t }, e);
                },
            [],
        );
    return (0, l.jsx)(eu.A, {
        categoryListRef: A,
        expressionsListRef: n,
        className: s()(t, nH.H$, { [nH.GO]: C, [nH.BN]: v, [nH.z9]: B }),
        store: W.Om,
        categories: S,
        listPadding: nJ,
        onScroll: F,
        renderCategoryListItem: T,
        renderSection: H,
        rowCount: S.length,
        categoryHeight: R,
        getScrollOffsetForIndex: K,
        rowCountBySection: L,
        navId: "emoji-picker-categories",
        itemIdPrefix: nz,
        renderListHeader: O,
        listHeaderHeight: _,
        children: (e) =>
            B
                ? (0, l.jsx)("div", {
                      className: nH.a$,
                      children: (0, l.jsx)(ns.K, {
                          icon: nP.ReactionIcon,
                          variant: "secondary",
                          size: "md",
                          "aria-label": eg.intl.string(eg.t.dT0ctw),
                          onClick: () => G(e),
                      }),
                  })
                : null,
    });
};
var nY = n(4703),
    n0 = n(672594),
    n1 = n(780042),
    n2 = n(876468);
let n5 = function (e) {
    let {
        channel: t,
        pickerIntention: n,
        emojiListRef: i,
        onKeyDown: r,
        searchBarRef: s,
        diversitySurrogate: a,
        isBurstReaction: o,
        onBurstReactionToggle: u,
        burstToggleRef: c,
        showAddEmojiButton: d = !0,
        closePopout: h,
    } = e;
    return (0, l.jsxs)("div", {
        className: n2.wx,
        children: [
            (0, l.jsx)(n0.A, {
                emojiListRef: i,
                gridNavigatorId: t9.lq,
                onKeyDown: r,
                ref: s,
                autoFocus: !0,
                defaultSearchPlaceholder: (0, nx.wT)(n, o),
            }),
            n === ne.EmojiIntention.REACTION ? (0, l.jsx)(n1.A, { checked: o, onClick: u, buttonRef: c }) : null,
            (0, l.jsx)(nY.A, { searchBarRef: s, className: n2.fx, selectedSurrogate: a }),
            n !== ne.EmojiIntention.NO_CUSTOM_EMOJI && d ? (0, l.jsx)(nd, { channel: t, closePopout: h }) : null,
        ],
    });
};
var n3 = n(462887),
    n6 = n(956396),
    n8 = n(413599),
    n4 = n(486020),
    n7 = n(690521),
    n9 = n(825860),
    le = n(175841),
    lt = n(259672);
function ln(e) {
    let { emojiSubCategory: t } = e,
        n = t === t9.tm.TOP_GUILD_EMOJI;
    return (0, l.jsxs)("div", {
        className: s()(lt.qS, n ? lt.S7 : lt.lD),
        children: [
            n
                ? (0, l.jsx)(n9.FireIcon, { size: "custom", color: "currentColor", className: lt.rF })
                : (0, l.jsx)(le.SparklesIcon, { size: "custom", color: "currentColor", className: lt.rF }),
            (0, l.jsx)(e_.E, {
                variant: "body-sm/semibold",
                color: "text-overlay-light",
                children: n ? eg.intl.string(eg.t.TR2B4T) : eg.intl.string(eg.t["1aZ4V6"]),
            }),
        ],
    });
}
let ll = function (e) {
    let {
        className: t,
        graphicPrimary: n,
        graphicSecondary: i,
        titlePrimary: r,
        titleSecondary: a,
        isFavorite: o = !1,
        emojiSubCategory: u = t9.tm.NONE,
    } = e;
    return (0, l.jsxs)("div", {
        className: s()(lt.qV, t),
        children: [
            (0, l.jsx)("div", { className: lt.FZ, "aria-hidden": !0, children: n }),
            (0, l.jsxs)("div", {
                className: lt.tC,
                children: [
                    (0, l.jsx)(e_.E, {
                        className: lt.jn,
                        variant: "body-md/medium",
                        color: "text-default",
                        children: r,
                    }),
                    null != a &&
                        (0, l.jsx)(e_.E, {
                            className: lt.Fm,
                            variant: "body-xs/medium",
                            color: "text-muted",
                            children: a,
                        }),
                ],
            }),
            o
                ? (0, l.jsx)("div", {
                      className: lt.Gy,
                      children: (0, l.jsx)(el.StarIcon, {
                          size: "custom",
                          color: "currentColor",
                          "aria-label": eg.intl.formatToPlainString(eg.t["+fdUkf"], { names: r }),
                          width: 20,
                          height: 20,
                      }),
                  })
                : null,
            u === t9.tm.NONE
                ? null != i && (0, l.jsx)("div", { className: lt.vK, "aria-hidden": !0, children: i })
                : (0, l.jsx)(ln, { emojiSubCategory: u }, u),
        ],
    });
};
var li = n(236432),
    lr = n(658231);
function ls(e) {
    return null != e && "animated" in e;
}
let la = i.memo(function (e) {
    let t,
        { className: r, emojiGrid: s, guildId: a, pickerIntention: o, channel: u } = e,
        c = W.Om.useStore((e) => e.inspectedExpressionPosition),
        h = i.useMemo(() => {
            let { rowIndex: e, columnIndex: t } = c;
            return s[e]?.[t];
        }, [s, c]);
    switch (h?.type) {
        case nC.bm.EMOJI:
            t = h?.emoji;
            break;
        case nC.bm.EXPAND_OR_COLLAPSE_EMOJIS:
            t = { type: "EXPAND_OR_COLLAPSE_EMOJI", guildId: h?.guildId, allNamesString: h?.name };
            break;
        default:
            t = null;
    }
    let m = (0, d.bG)([ed.A], () => (null !== t && t.type === nN.i.GUILD ? ed.A.getGuild(t.guildId) : null), [t]),
        f = (0, d.bG)([n6.A], () => (null !== t && t.type === nN.i.PACK ? n6.A.getPack(t.packId) : null), [t]),
        p = (0, d.bG)([nW.A], () => nW.A.isFocused()),
        g = (0, d.bG)([nU.Ay], () => nU.Ay.useReducedMotion, []),
        x = K.Sf.useSetting(),
        E = (0, nx.O7)(a, ls(t) ? t : null),
        y = (0, d.bG)([nv.Ay], () => nv.Ay.expandedSectionsByGuildIds),
        { newlyAddedEmojis: S } = (0, ny.A)(a, o),
        A = h?.type === nC.bm.EMOJI ? h.subCategory : t9.tm.NONE;
    if (
        (i.useEffect(() => {
            let e = Date.now();
            return () => {
                Date.now() - e >= 250 &&
                    ls(t) &&
                    A !== t9.tm.NONE &&
                    (A === t9.tm.NEWLY_ADDED_EMOJI &&
                        null !== t &&
                        t.type === nN.i.GUILD &&
                        (0, n_.mz)(t.guildId, S[0].id),
                    null != c.source &&
                        (0, nx.yB)({
                            emoji: t,
                            subCategory: A,
                            position: h.columnIndex + 1,
                            newlyAddedHighlight: A === t9.tm.NEWLY_ADDED_EMOJI && nT.A.isNewerThanLastSeen(a, t.id),
                        }));
            };
        }),
        null == t || null == c.source)
    )
        return null;
    let C = (function (e, t) {
            let { allowAnimatedEmoji: i, sectionsExpandedFromThreeRows: r, theme: s } = t;
            if (ls(e)) {
                let t = null != e.id ? n4.Ay.getEmojiURL({ id: e.id, animated: i && e.animated, size: 40 }) : e.url;
                return "" === t
                    ? (0, l.jsx)(e_.E, {
                          variant: "body-md/normal",
                          className: lr.J_,
                          children: "surrogates" in e ? e.surrogates : null,
                      })
                    : (0, l.jsx)("img", { alt: (0, n7.N)(e) ?? "", src: t, className: lr.Zg });
            }
            if ("EXPAND_OR_COLLAPSE_EMOJI" !== e.type) return null;
            {
                let t = n(619508),
                    i = n(404828),
                    a = n(600003),
                    o = n(318121);
                return r.has(e.guildId)
                    ? (0, l.jsx)("img", { className: lr.Kk, src: (0, n3.M)(s) ? a : o, alt: "" })
                    : (0, l.jsx)("img", { className: lr.Kk, src: (0, n3.M)(s) ? t : i, alt: "" });
            }
        })(t, { allowAnimatedEmoji: x, sectionsExpandedFromThreeRows: y, theme: n8.A.theme }),
        I = null != m ? (0, l.jsx)(nK, { guild: m, size: 32, shouldAnimate: !g && p }) : null,
        b =
            "EXPAND_OR_COLLAPSE_EMOJI" === t.type
                ? eg.intl.string(y.has(t.guildId) ? eg.t["/K2RDH"] : eg.t.NZI2Zk)
                : (0, n7.N)(t),
        v = (function (e) {
            let { inspectedEmoji: t, guild: n, pack: i } = e,
                r = ls(t);
            return null != n && r
                ? eg.intl.format(eg.t.KFW2aY, { guildName: n.name })
                : null != i && r
                  ? eg.intl.format(li.default.VEfeux, {
                        packName: (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)(eR.NitroWheelIcon, {
                                    size: "custom",
                                    width: 10,
                                    height: 10,
                                    color: "currentColor",
                                    className: lr.C5,
                                    "aria-label": eg.intl.string(li.default.leUgZw),
                                }),
                                " ",
                                i.name,
                            ],
                        }),
                    })
                  : null;
        })({ inspectedEmoji: t, channel: u, guildId: a, intention: o, guild: m, pack: f });
    return (0, l.jsx)(ll, {
        className: r,
        graphicPrimary: C,
        graphicSecondary: I,
        titlePrimary: b,
        titleSecondary: v,
        isFavorite: E,
        emojiSubCategory: A,
    });
});
var lo = n(833272),
    lu = n(646514),
    lc = n(765178),
    ld = n(331322),
    lh = n(856459),
    lm = n(526292),
    lf = n(521440),
    lp = n(847374),
    lg = n(650583),
    lx = n(628095);
let lE = i.memo(function (e) {
    let { children: t, trailing: n, className: i, icon: r, isCollapsed: a, onClick: o, "aria-label": u } = e;
    return (0, l.jsxs)("div", {
        className: s()(lx.iE, i),
        children: [
            (0, l.jsxs)(f.D, {
                onClick: o,
                onKeyDown: (e) => {
                    e.key !== lg.dh.ESCAPE && e.stopPropagation();
                },
                className: s()(lx.wx, { [lx.bG]: null != a }),
                "aria-expanded": null != a ? !a : void 0,
                "aria-label": u,
                children: [
                    null != r && (0, l.jsx)("div", { "aria-hidden": !0, className: lx.nr, children: r }),
                    (0, l.jsx)(e_.E, {
                        tag: "span",
                        variant: "body-sm/semibold",
                        color: "none",
                        lineClamp: 1,
                        className: lx.Gp,
                        children: t,
                    }),
                    null != a
                        ? (0, l.jsx)(lp.ChevronSmallDownIcon, {
                              size: "custom",
                              color: "currentColor",
                              className: s()(lx.Cj, { [lx.Tu]: a }),
                              height: 16,
                              width: 16,
                          })
                        : null,
                ],
            }),
            n,
        ],
    });
});
var ly = n(559106),
    lS = n(736653),
    lA = n(189551),
    lC = n(594061),
    lI = n(771104),
    lb = n(379350),
    lv = n(7584),
    lN = n(147421),
    lj = n(723702),
    lk = n(310774);
function lT(e) {
    let t,
        {
            emoji: n,
            isFavorite: i,
            isLargeSize: r,
            isMediumSize: a,
            isInspected: o,
            isDisabled: u,
            showPulse: c,
            columnIndex: h,
            rowIndex: m,
            size: f,
            surrogateCodePoint: p,
            allowAnimatedEmoji: g,
            inNitroLockedSection: x,
            ref: E,
            ...y
        } = e,
        S = (0, d.bG)([ed.A], () => (n.type === nN.i.GUILD ? ed.A.getGuild(n.guildId) : void 0), [n]);
    return (0, l.jsx)(ly.vN, {
        children: (0, l.jsx)("button", {
            ...y,
            className: s()(lk._X, { [lk.lG]: r, [lk.Lh]: a, [lk.Bx]: o, [lk.TV]: c }),
            "data-type": en.g.EMOJI,
            "data-id": n.id,
            "data-name": n.name,
            "data-surrogates": "surrogates" in n ? n.surrogates : null,
            "data-animated": n.animated ? "true" : null,
            ref: E,
            children: (0, l.jsx)(lb.A, {
                "aria-label":
                    ((t = (0, n7.N)(n)),
                    (S?.name != null &&
                        (t = eg.intl.formatToPlainString(eg.t["nXv4/B"], { names: t, guildName: S.name })),
                    i)
                        ? eg.intl.formatToPlainString(eg.t["9FI9Z0"], { names: t })
                        : t),
                columnIndex: h,
                rowIndex: m,
                emoji: n,
                size: f,
                surrogateCodePoint: p,
                allowAnimatedEmoji: g,
                isLocked: u && !x,
            }),
        }),
    });
}
function l_(e) {
    let {
            descriptor: t,
            emojiItemKey: r,
            isInspected: s,
            rowIndex: a,
            channelGuildId: o,
            onInspect: u,
            onSelect: c,
            isScrolling: h,
            isUsingKeyboardNavigation: m,
            showEmojiFavoriteTooltip: f,
            surrogateCodePoint: p,
            getEmojiItemProps: g,
            isMediumSize: x,
            isLargeSize: E,
            pulseItemKey: y,
            allowAnimatedEmoji: S,
            setPulseItemKey: A,
            messageId: C,
            isBurstReaction: I,
            rowPosition: b,
            inNitroLockedSection: v,
        } = e,
        [N, j] = i.useState(""),
        k = (0, d.bG)([nU.Ay], () => nU.Ay.useReducedMotion),
        T = (0, d.bG)([nv.Ay], () => nv.Ay.getDisambiguatedEmojiContext(o), [o]),
        _ = i.useRef(null),
        { emoji: O, size: R, isDisabled: w, columnIndex: M } = t;
    function L() {
        h.current || m.current || u(t);
    }
    let { ref: P, tabIndex: D, onFocus: U, ...V } = g(M, a) ?? {},
        F =
            N !== `${M}:${a}`
                ? (0, l.jsx)(lT, {
                      ref: P,
                      emoji: O,
                      isFavorite: T.isFavoriteEmojiWithoutFetchingLatest(O),
                      isLargeSize: E,
                      isMediumSize: x,
                      isInspected: s,
                      isDisabled: w,
                      showPulse: y === r,
                      allowAnimatedEmoji: S,
                      onFocus: U ?? L,
                      onMouseMove: L,
                      onClick: (e) => {
                          if (
                              null != _.current &&
                              null != b &&
                              null != C &&
                              !e.shiftKey &&
                              null != O.name &&
                              I &&
                              !k &&
                              S
                          ) {
                              let e = null == O.id ? lv.Ay.convertNameToSurrogate(O.name) : O.name,
                                  t = _.current.getBoundingClientRect();
                              ((t.x = b.x + (M + 1) * R), j(`${M}:${a}`), (0, lN.h)(C, e, O.id, t));
                          }
                          !(function (e) {
                              if ((e.stopPropagation(), h.current || m.current)) return;
                              let n = e.altKey;
                              (n &&
                                  !nv.Ay.getDisambiguatedEmojiContext().isFavoriteEmojiWithoutFetchingLatest(O) &&
                                  A(r),
                                  (0, nR.sF)(nR._2.FAVORITE_EMOJI_TOOLTIP),
                                  c(t, { isFinalSelection: !e.shiftKey, toggleFavorite: n }));
                          })(e);
                      },
                      onContextMenu: function (e) {
                          (0, ts.L3)(e, async () => {
                              let { default: e } = await Promise.all([n.e(904774), n.e(446132)]).then(
                                  n.bind(n, 233503),
                              );
                              return (t) => (0, l.jsx)(e, { ...t, showFavoriteOnly: O.type === nN.i.PACK });
                          });
                      },
                      tabIndex: D,
                      columnIndex: M,
                      rowIndex: a,
                      size: R,
                      surrogateCodePoint: p,
                      inNitroLockedSection: v,
                  })
                : null;
    return (0, i.createElement)(
        "li",
        { ...V, key: r, ref: _ },
        f
            ? (0, l.jsx)(er.m, {
                  text: eg.intl.formatToPlainString(eg.t.glqNsf, { key: (0, lj.cX)() ? "Opt" : "Alt" }),
                  position: "top",
                  delay: 200,
                  children: F,
              })
            : F,
    );
}
let lO = (e) => {
    let {
            emojiDescriptors: t,
            emojiSize: r,
            onSelect: a,
            onInspect: o,
            surrogateCodePoint: u,
            getEmojiItemProps: c,
            getEmojiRowProps: d,
            isScrolling: h,
            isUsingKeyboardNavigation: m,
            rowIndex: f,
            allowAnimatedEmoji: p,
            showEmojiFavoriteTooltip: g,
            channelGuildId: x,
            category: E,
            messageId: y,
            isBurstReaction: S,
            inNitroLockedSection: A,
            handleScrollUpOnSectionCollapse: C,
        } = e,
        I = n(619508),
        b = n(404828),
        v = n(600003),
        N = n(318121),
        j = n(443336),
        k = n(258901),
        T = n(135974),
        _ = n(8013),
        O = (0, lS.Ay)(),
        R = W.Om.getState(),
        [w, M] = i.useState(R.inspectedExpressionPosition),
        [L, P] = (0, ta.A)(null, 300),
        D = i.useRef(null);
    (i.useEffect(
        () =>
            W.Om.subscribe(
                (e) => e.inspectedExpressionPosition,
                (e) => M(e),
            ),
        [],
    ),
        i.useEffect(() => {
            lC.bW.loadIfNecessary();
        }, []));
    let U = r === t9.as.LARGE,
        V = r === t9.as.MEDIUM;
    function F(e, t) {
        return null != w.source && w.rowIndex === e && w.columnIndex === t;
    }
    function B(e) {
        let t = `${e.rowIndex}c${e.columnIndex}`;
        switch (e.type) {
            case nC.bm.EXPAND_OR_COLLAPSE_EMOJIS: {
                let { visibleRowIndex: n, columnIndex: r } = e,
                    u = F(n, r),
                    d = e.sectionCollapsedToThreeRows
                        ? u
                            ? (0, n3.M)(O)
                                ? k
                                : _
                            : (0, n3.M)(O)
                              ? I
                              : b
                        : u
                          ? (0, n3.M)(O)
                              ? j
                              : T
                          : (0, n3.M)(O)
                            ? v
                            : N,
                    p = eg.intl.string(e.sectionCollapsedToThreeRows ? eg.t.NZI2Zk : eg.t["/K2RDH"]);
                return (function () {
                    let {
                            onMouseEnter: n,
                            onMouseLeave: r,
                            handleSelect: a,
                            icon: u,
                            ariaLabel: d,
                            shouldShowRoundHighlight: p,
                        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        { visibleRowIndex: g, columnIndex: x } = e,
                        { ref: E, tabIndex: y, onFocus: S, ...A } = c(x, f) ?? {},
                        C = F(g, x);
                    function I() {
                        h.current || m.current || o(e);
                    }
                    return (0, i.createElement)(
                        "li",
                        { ...A, key: t },
                        (0, l.jsx)(ly.vN, {
                            children: (0, l.jsx)("button", {
                                "aria-label": d,
                                ref: E,
                                className: s()(lk._X, { [lk.lG]: U, [lk.Lh]: V, [lk.Bx]: C && !p, [lk.TV]: L === t }),
                                onFocus: S ?? I,
                                onMouseOver: I,
                                onMouseEnter: n,
                                onMouseLeave: r,
                                onClick: a,
                                tabIndex: y,
                                children: u,
                            }),
                        }),
                    );
                })({
                    handleSelect: function (t) {
                        e.type !== nC.bm.EXPAND_OR_COLLAPSE_EMOJIS ||
                            (t.stopPropagation(),
                            h.current ||
                                m.current ||
                                (a(e, { isFinalSelection: !0, toggleFavorite: !1 }),
                                (0, lA.G)(e.guildId),
                                e.sectionCollapsedToThreeRows || C(),
                                z.default.track(ef.HAw.EMOJI_PICKER_THREE_ROW_COLLAPSE_TOGGLED, {
                                    collapsed: e.sectionCollapsedToThreeRows,
                                    guild_id: e.guildId,
                                })));
                    },
                    icon: (0, l.jsx)("img", { className: lk.Kk, src: d, alt: "" }),
                    ariaLabel: p,
                    shouldShowRoundHighlight: !0,
                });
            }
            case nC.bm.EMOJI: {
                let { columnIndex: n, visibleRowIndex: i } = e,
                    r = F(i, n);
                return (0, l.jsx)(
                    l_,
                    {
                        rowIndex: f,
                        descriptor: e,
                        emojiItemKey: t,
                        isInspected: r,
                        isScrolling: h,
                        isUsingKeyboardNavigation: m,
                        surrogateCodePoint: u,
                        allowAnimatedEmoji: p,
                        onSelect: a,
                        onInspect: o,
                        channelGuildId: x,
                        getEmojiItemProps: c,
                        isMediumSize: V,
                        isLargeSize: U,
                        pulseItemKey: L,
                        setPulseItemKey: P,
                        showEmojiFavoriteTooltip: g,
                        messageId: y,
                        isBurstReaction: S,
                        rowPosition: D?.current?.getBoundingClientRect(),
                        inNitroLockedSection: A,
                    },
                    t,
                );
            }
        }
    }
    function G(e) {
        return (0, l.jsx)("ul", {
            ...d(f),
            className: s()(lk.ND, { [lk.HO]: U, [lk.X$]: V }),
            ref: D,
            children: e.map(B),
        });
    }
    if (E !== t9.s.TOP_GUILD_EMOJI) return G(t);
    let K = t.filter(
            (e) =>
                e.subCategory === t9.tm.TOP_GUILD_EMOJI ||
                (e.subCategory === t9.tm.NEWLY_ADDED_EMOJI &&
                    e.emoji.type === nN.i.GUILD &&
                    !nT.A.isNewerThanLastSeen(e.emoji.guildId, e.emoji.id)),
        ),
        H = t.filter(
            (e) =>
                e.subCategory === t9.tm.NEWLY_ADDED_EMOJI &&
                e.emoji.type === nN.i.GUILD &&
                nT.A.isNewerThanLastSeen(e.emoji.guildId, e.emoji.id),
        );
    return 0 === H.length
        ? G(t)
        : (0, l.jsxs)("div", {
              className: lk.Ng,
              children: [
                  (0, l.jsx)("div", { className: s()(lk.V6, { [lk.$3]: 0 === K.length }), children: G(K) }),
                  (0, l.jsxs)("div", {
                      className: lk.bc,
                      children: [
                          (0, l.jsx)("div", {
                              className: s()(lk.eE, { [lk.eM]: 1 === H.length, [lk.Wk]: K.length > 0 }),
                              children: G(H),
                          }),
                          (0, l.jsxs)("div", {
                              className: s()(lk.lD, { [lk.EI]: U, [lk.qU]: V, [lk.Wk]: K.length > 0 }),
                              children: [
                                  (0, l.jsx)(lI.A, { foreground: lk.rI }),
                                  (0, l.jsx)(e_.E, {
                                      variant: "body-xs/semibold",
                                      color: "text-overlay-light",
                                      children: eg.intl.string(eg.t.y2b7CA),
                                  }),
                              ],
                          }),
                      ],
                  }),
              ],
          });
};
var lR = n(315584);
let lw = 0;
function lM() {
    0 !== lw && (window.cancelAnimationFrame(lw), (lw = 0));
}
let lL = lh.D + (0, q.xI)(lu.A.space.PX_10),
    lP = lL + 8,
    lD = i.memo(function (e) {
        let t,
            n,
            {
                diversitySurrogate: r,
                emojiGrid: a,
                emojiListRef: c,
                emojiSize: h,
                onEmojiSelect: m,
                onRemovePack: f,
                onViewEmojiPacks: p,
                showEmojiPacksDiscovery: g,
                onDismissEmojiPacksDiscovery: x,
                setUpsellConfigs: E,
                sectionDescriptors: y,
                rowCountBySection: S,
                collapsedSections: A,
                setCollapsedSections: C,
                getEmojiItemProps: I,
                getEmojiRowProps: v,
                rowCount: N,
                isUsingKeyboardNavigation: j,
                channelGuildId: k,
                messageId: T,
                isBurstReaction: _,
            } = e,
            O = (0, b.H)("emoji_picker_list"),
            R = (0, B.RQ)((e) => e.searchQuery),
            w = "" !== R,
            M = g && null != p,
            L = 0;
        M && (L = w ? lP : lL);
        let P = i.useCallback(
                (e) => {
                    (c.current?.scrollTo(0), x(e));
                },
                [c, x],
            ),
            D = i.useCallback(
                () =>
                    M && null != p
                        ? (0, l.jsx)(
                              "div",
                              {
                                  className: s()(lR.cn, { [lR.tY]: w }),
                                  onKeyDown: (e) => {
                                      e.key !== lg.dh.ESCAPE && e.stopPropagation();
                                  },
                                  children: (0, l.jsx)(lh.A, { onViewEmojiPacks: p, onDismiss: P }),
                              },
                              "discovery-banner",
                          )
                        : null,
                [M, w, p, P],
            ),
            q = i.useRef(!1),
            $ = W.Om.useStore((e) => e.activeCategoryIndex),
            J = K.Sf.useSetting(),
            Z = (0, d.bG)([H.default], () => H.default.getCurrentUser()),
            Q = (0, nM.ki)(Z),
            { location: X } = (0, U.p)(),
            { analyticsLocations: Y } = (0, F.Ay)(),
            [ee, et] = i.useState(!1),
            {
                listPadding: el,
                renderRow: ei,
                renderSection: er,
                renderSectionHeader: es,
                renderSectionFooter: ea,
                sectionHeaderHeight: eo,
                sectionFooterHeight: eu,
            } = (function (e) {
                let {
                        collapsedSections: t,
                        diversitySurrogate: n,
                        emojiGrid: r,
                        emojiSize: a,
                        onEmojiSelect: u,
                        onRemovePack: c,
                        searchQuery: h,
                        sectionDescriptors: m,
                        setCollapsedSections: f,
                        getEmojiItemProps: p,
                        getEmojiRowProps: g,
                        isScrolling: x,
                        isUsingKeyboardNavigation: E,
                        allowAnimatedEmoji: y,
                        channelGuildId: S,
                        messageId: A,
                        isBurstReaction: C,
                        emojiListRef: I,
                        hasListHeader: b,
                    } = e,
                    v = (0, U.p)(),
                    N = i.useMemo(() => ("" !== n ? lo.A.convert.toCodePoint(n) : ""), [n]),
                    j = i.useCallback(
                        (e) => {
                            let t = m[e],
                                n = m[e + 1];
                            return e >= m.length - 1 ? t.isNitroLocked : t.isNitroLocked && !n.isNitroLocked;
                        },
                        [m],
                    ),
                    k = i.useCallback(
                        (e) => {
                            if (e >= m.length - 1) return !1;
                            let t = m[e],
                                n = m[e + 1];
                            return !t.isNitroLocked && n.isNitroLocked;
                        },
                        [m],
                    ),
                    T = i.useCallback(
                        function (e) {
                            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                                l = new Set(t),
                                i = t.has(e);
                            (i ? l.delete(e) : l.add(e),
                                null != n &&
                                    z.default.track(ef.HAw.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
                                        location: v.location,
                                        tab: ep.kx.EMOJI,
                                        collapsed: !i,
                                        guild_id: n.id,
                                    }),
                                f(l));
                        },
                        [v, t, f],
                    ),
                    _ = i.useCallback((e) => {
                        let { columnIndex: t, visibleRowIndex: n } = e,
                            l = e.type === nC.bm.EMOJI ? (0, n7.N)(e.emoji) : e.name;
                        (lM(),
                            (lw = window.requestAnimationFrame(() => {
                                (W.Om.setInspectedExpressionPosition(t, n, en.t.MOUSE_EVENT),
                                    W.Om.setSearchPlaceholder(l),
                                    (lw = 0));
                            })));
                    }, []),
                    O = (0, d.bG)([nR.HP], () => nR.HP.hasHotspot(nR._2.FAVORITE_EMOJI_TOOLTIP), []),
                    R = i.useMemo(
                        () =>
                            o().memoize((e, t) => {
                                let n = r[e],
                                    i = m[t.sectionIndex];
                                return (0, l.jsx)(
                                    lO,
                                    {
                                        emojiDescriptors: n,
                                        emojiSize: a,
                                        surrogateCodePoint: N,
                                        onInspect: _,
                                        onSelect: u,
                                        getEmojiItemProps: p,
                                        getEmojiRowProps: g,
                                        isScrolling: x,
                                        isUsingKeyboardNavigation: E,
                                        rowIndex: e,
                                        allowAnimatedEmoji: y,
                                        showEmojiFavoriteTooltip: O,
                                        channelGuildId: S,
                                        category: i.sectionId,
                                        messageId: A,
                                        isBurstReaction: C,
                                        inNitroLockedSection: i.isNitroLocked,
                                        handleScrollUpOnSectionCollapse: function () {
                                            I.current?.scrollToSectionTop(t.sectionIndex, { animate: !0 });
                                        },
                                    },
                                    e,
                                );
                            }),
                        [r, m, a, N, _, u, p, g, x, E, y, O, S, A, C, I],
                    );
                i.useEffect(() => () => R.cache?.clear?.(), [R]);
                let w = i.useMemo(
                        () =>
                            o().memoize((e) => {
                                let n = m[e];
                                if (null == n) return;
                                let { guild: i, pack: r, categoryId: s, type: a, sectionId: o } = n;
                                if (a === t9.s.SEARCH_RESULTS) return;
                                let u = (function (e) {
                                        let { type: t, guild: n, categoryId: i } = e;
                                        return t === t9.s.PACK
                                            ? (0, l.jsx)(eR.NitroWheelIcon, {
                                                  size: "custom",
                                                  color: "currentColor",
                                                  height: 16,
                                                  width: 16,
                                              })
                                            : t === t9.s.GUILD
                                              ? null == n
                                                  ? null
                                                  : (0, l.jsx)(nK, {
                                                        guild: n,
                                                        size: 16,
                                                        shouldAnimate: !1,
                                                        className: lR.I4,
                                                    })
                                              : null == i
                                                ? null
                                                : (0, l.jsx)(nV.A, {
                                                      categoryId: i,
                                                      height: 16,
                                                      width: 16,
                                                      size: "custom",
                                                  });
                                    })(n),
                                    d = r?.name ?? i?.name;
                                null != s && (d = (0, nx.Nu)(s, i?.name));
                                let h =
                                    a === t9.s.PACK
                                        ? (0, l.jsx)("div", {
                                              className: lR.uE,
                                              children: (0, l.jsx)(eZ.Q, {
                                                  text: eg.intl.string(li.default["2zxYCx"]),
                                                  textVariant: "body-sm/medium",
                                                  variant: "secondary",
                                                  "aria-label": `${eg.intl.string(li.default["2zxYCx"])} ${r.name}`,
                                                  onKeyDown: (e) => {
                                                      e.key !== lg.dh.ESCAPE && e.stopPropagation();
                                                  },
                                                  onClick: () => c(r.id),
                                              }),
                                          })
                                        : void 0;
                                return (0, l.jsx)(
                                    lE,
                                    {
                                        className: lR.wx,
                                        icon: u,
                                        isCollapsed: t.has(o),
                                        onClick: () => T(o, i),
                                        trailing: h,
                                        children: d,
                                    },
                                    o,
                                );
                            }),
                        [m, t, T, c],
                    ),
                    M = (0, lm.k0)(),
                    L = i.useCallback(
                        (e, n) => {
                            let i = m[e],
                                r = k(e),
                                a = j(e),
                                o = i.type === t9.s.PACK && 0 === i.count;
                            return (0, l.jsx)(
                                "div",
                                {
                                    role: "rowgroup",
                                    className: s()(lR.Wy, {
                                        [lR.YD]: e === m.length - 1,
                                        [lR.jl]: t.has(i.sectionId) || o,
                                        [lR.cW]: i.isNitroLocked,
                                        [lR.T5]: r || a,
                                    }),
                                    children: n,
                                },
                                e,
                            );
                        },
                        [t, m, k, j],
                    ),
                    P = i.useCallback(
                        (e) =>
                            k(e)
                                ? M
                                    ? (0, l.jsx)(ez.a, {})
                                    : (0, l.jsx)(ez.A, {})
                                : j(e)
                                  ? (0, l.jsx)("div", { className: lR.pQ })
                                  : null,
                        [k, j, M],
                    ),
                    D = i.useCallback((e) => (k(e) ? 41 : 33 * !!j(e)), [k, j]);
                return {
                    listPadding: i.useMemo(() => ["" === h || b ? 0 : 8, 0, 72, 0], [h, b]),
                    renderRow: R,
                    renderSection: L,
                    renderSectionHeader: w,
                    renderSectionFooter: P,
                    sectionHeaderHeight: i.useCallback((e) => 40 * (m[e].type !== t9.s.SEARCH_RESULTS), [m]),
                    sectionFooterHeight: D,
                };
            })({
                collapsedSections: A,
                diversitySurrogate: r,
                emojiGrid: a,
                emojiSize: h,
                onEmojiSelect: m,
                onRemovePack: f,
                searchQuery: R,
                sectionDescriptors: y,
                setCollapsedSections: C,
                getEmojiItemProps: I,
                getEmojiRowProps: v,
                isScrolling: q,
                isUsingKeyboardNavigation: j,
                allowAnimatedEmoji: J,
                channelGuildId: k,
                messageId: T,
                isBurstReaction: _,
                emojiListRef: c,
                hasListHeader: M,
            }),
            ec = (0, G.Fk)({
                activeCategoryIndex: $,
                isScrolling: q,
                listRef: c,
                onActiveCategoryIndexChange: function (e) {
                    "" === R && W.Om.setActiveCategoryIndex(e);
                },
                scrollOffset: +!!O,
                searchQuery: R,
                disableForSearch: !1,
            });
        (0, G.FV)({ searchQuery: R, activeCategoryIndex: $, listRef: c });
        let ed = i.useCallback(
                (e) => {
                    (ec(e),
                        lU({
                            emojiListRef: c,
                            sectionDescriptors: y,
                            scrollTop: e,
                            searchQuery: R,
                            setShowUpsell: et,
                        }));
                },
                [ec, c, y, R, et],
            ),
            eh = y.length > 0;
        (i.useEffect(() => {
            ee &&
                (z.default.track(ef.HAw.PREMIUM_UPSELL_VIEWED, {
                    type: eP.e.EMOJI_PICKER_FLOATING_UPSELL,
                    location: X,
                    location_stack: Y,
                }),
                (0, ew.sq)(ef.U7l.PREMIUM_UPSELL_VIEWED, Y, () => (0, eM.uq)(eP.e.EMOJI_PICKER_FLOATING_UPSELL)));
        }, [X, Y, ee]),
            i.useEffect(() => {
                "" !== R && et(!1);
            }, [R]));
        let em = i.useRef(null);
        i.useEffect(
            () => (
                clearTimeout(em.current),
                (em.current = setTimeout(() => {
                    (eh
                        ? lc.O.announce(eg.intl.string(eg.t.uZ4F2O), "polite")
                        : lc.O.announce(eg.intl.string(eg.t.IxxiKF), "assertive"),
                        (em.current = null));
                }, 200)),
                () => {
                    clearTimeout(em.current);
                }
            ),
            [eh, R],
        );
        let ex = (0, l.jsx)(e_.E, {
            variant: "body-md/normal",
            color: "text-muted",
            children: eg.intl.string(eg.t.IxxiKF),
        });
        return (0, l.jsxs)("div", {
            className: lR.AD,
            children: [
                eh
                    ? (0, l.jsx)(eK.A, {
                          role: "none presentation",
                          className: lR.p_,
                          listPadding: el,
                          renderListHeader: M ? D : void 0,
                          listHeaderHeight: M ? L : void 0,
                          onScroll: ed,
                          renderRow: ei,
                          renderSection: er,
                          renderSectionHeader: es,
                          renderSectionFooter: ea,
                          rowCount: N,
                          rowCountBySection: S,
                          rowHeight: h + 8 + 2,
                          sectionHeaderHeight: eo,
                          sectionFooterHeight: eu,
                          stickyHeaders: !0,
                          ref: c,
                      })
                    : M
                      ? (0, l.jsxs)(ld.B, {
                            className: lR.wL,
                            direction: "vertical",
                            gap: 0,
                            children: [D(), (0, l.jsx)(eG.A, { message: ex, className: lR.XE })],
                        })
                      : (0, l.jsx)(eG.A, { message: ex, className: lR.BZ }),
                Q || u.Fr
                    ? null
                    : (0, l.jsx)(e8.d, {
                          showUpsell: ee,
                          text:
                              ((t = (0, eq.Dd)(eP.PremiumTypes.TIER_2)),
                              eg.intl.format(eg.t.gMVjeS, {
                                  nitroTierName: t,
                                  onClick: () => {
                                      E({ type: nC.a2.PREMIUM, emojiDescriptor: void 0 });
                                  },
                              })),
                          button: ((n = (0, e6.qD)()), (0, eq.LE)(n, eP.pe.TIER_2) ?? eg.intl.string(eg.t.BmJkbd)),
                          buttonAnalyticsObject: { section: ef.JJy.EMOJI_PICKER_FLOATING_UPSELL },
                          leadingAction: (0, l.jsx)(lf.l, {
                              size: "sm",
                              className: lR.ij,
                              location: V.A.PREMIUM_WISHLIST_EMOJI_UPSELL,
                          }),
                      }),
            ],
        });
    }),
    lU = o().throttle(
        function (e) {
            let { emojiListRef: t, sectionDescriptors: n, scrollTop: l, searchQuery: i, setShowUpsell: r } = e;
            r(
                (0, e3.s)({ listRef: t, searchQuery: i, nitroLockedSectionStates: n, scrollTop: l })
                    .areOnlyNitroLockedSectionsVisible,
            );
        },
        300,
        { leading: !1, trailing: !0 },
    ),
    lV = t9.as.MEDIUM;
function lF(e) {
    return e.stopPropagation();
}
function lW() {
    lM();
    let { inspectedExpressionPosition: e } = W.Om.getState();
    null != e.source &&
        (W.Om.setInspectedExpressionPosition(e.columnIndex, e.rowIndex), W.Om.setSearchPlaceholder(null));
}
function lB(e) {
    (0, c.vq)(e.target, Element) && null == e.target.closest('[role="row"]') && lW();
}
function lG(e, t) {
    W.Om.setInspectedExpressionPosition(e, t, en.t.GRID_NAVIGATOR_EVENT);
}
let lK = M()(nx.bo, 200),
    lH = M()(nx.Wi, 200),
    lz = { section: void 0, openPopoutType: void 0, popoutLocation: void 0 },
    lq = [h.M.DEFAULT_EMOJIS_PACKS_DISCOVERY_DOT],
    l$ = [],
    lJ = i.memo(function (e) {
        let t,
            n,
            {
                pickerIntention: r,
                channel: a,
                closePopout: o,
                hasTabWrapper: u = !1,
                onSelectEmoji: c,
                containerWidth: m,
                persistSearch: f,
                analyticsOverride: p = lz,
                messageId: g,
                showAddEmojiButton: x,
                ref: y,
                isViewingEmojiPacks: C,
                onViewEmojiPacksChange: N,
            } = e,
            [j, k] = i.useState(null),
            T = i.useRef(""),
            _ = (0, B.RQ)((e) => e.searchQuery),
            O = i.useRef(null),
            R = i.useRef(null),
            w = i.useRef(null),
            M = (0, b.H)("emoji_picker") && (0, I.z)(r);
        i.useEffect(() => {
            M && (0, v.Fp)();
        }, [M]);
        let [L, P] = i.useState(!1),
            D = M && (C ?? L),
            q = N ?? P,
            $ = i.useCallback(() => q(!0), [q]),
            [J, Z] = (0, A.kn)(M && !D ? lq : l$),
            Q = J === h.M.DEFAULT_EMOJIS_PACKS_DISCOVERY_DOT,
            X = i.useCallback(
                (e) => {
                    (e === t7.i.USER_DISMISS && w.current?.focus(), Z(e));
                },
                [Z],
            ),
            Y = i.useCallback((e) => {
                (w.current?.focus(), (0, v.M5)(e));
            }, []),
            ee = (0, nk.A)(M),
            el = a?.getGuildId() ?? null,
            [ei, er] = i.useState(!1),
            es = i.useRef(null),
            ea = H.default.getCurrentUser(),
            eo = (0, nM.ki)(ea),
            eu = ei && eo,
            { location: ec } = (0, U.p)(),
            { page: ed, section: eh, object: em, openPopoutType: ep, popoutLocation: eg } = p,
            ex = i.useMemo(() => ({ ...ec, section: eh ?? ef.JJy.EMOJI_PICKER_POPOUT }), [ec, eh]),
            { analyticsLocations: eE } = (0, F.Ay)(V.A.EMOJI_PICKER),
            { diversitySurrogate: ey } = (0, d.cf)([nv.Ay], () => ({ diversitySurrogate: nv.Ay.diversitySurrogate })),
            eS = (0, nx.sL)(_, a, r),
            eA = null == eS ? 0 : eS.locked.length + eS.unlocked.length,
            eC = K.iM.useSetting(),
            eI = i.useMemo(() => new Set(eC), [eC]),
            eb = i.useCallback((e) => {
                K.iM.updateSetting(Array.from(e));
            }, []),
            ev = (0, G.oV)({
                gridWrapperRef: O,
                containerWidth: m,
                showingEmptyState: D,
                listPaddingLeft: 14,
                listScrollbarWidth: 8,
            }),
            {
                rowCountBySection: eN,
                sectionDescriptors: ej,
                emojiGrid: ek,
                columnCounts: eT,
            } = (0, nC.wu)({
                gridWidth: ev,
                fallbackGuildId: el,
                channel: a,
                pickerIntention: r,
                emojiSearchResults: eS,
                collapsedSections: eI,
                emojiPaddingHorizontal: 5,
                emojiSpriteSize: lV,
                pinnedPacks: ee,
                showOnlyUnicode: !1,
            }),
            { newlyAddedEmojis: e_ } = (0, ny.A)(el, r);
        (0, nE.y)({ intention: r, isBurstReaction: ei, analyticsObject: em });
        let eO = i.useCallback(() => {
            let e = e_.length > 0 ? e_[0].id : null;
            ((0, n_.uV)(el, e), (0, nE.A)({ intention: r, isBurstReaction: ei, analyticsObject: em }));
        }, [e_, el, r, ei, em]);
        i.useImperativeHandle(y, () => ({ onPickerOpen: eO }), [eO]);
        let eR = i.useCallback(() => {
                (o(),
                    (0, nw.A)({
                        subscriptionTier: eP.pe.TIER_2,
                        analyticsLocations: [...eE, V.A.EMOJI_PACKS],
                        analyticsObject: { ...ex, object: ef.ZSU.EMOJI },
                    }));
            }, [ex, eE, o]),
            ew = (0, nC.Mq)({
                pickerIntention: r,
                selectedChannel: a,
                fallbackGuildId: el,
                closePopout: o,
                onSelectEmoji: c,
                setUpsellConfigs: (e) => {
                    e?.type === nC.a2.PREMIUM && e.emojiDescriptor?.emoji?.type === nN.i.PACK ? eR() : k(e);
                },
                emojiSelectAnalytics: (e, t) => {
                    "" !== _
                        ? (0, nx.Wf)({
                              emoji: e.emoji,
                              location: { ...ex, object: ef.ZSU.EMOJI },
                              searchQuery: _,
                              isLocked: null != t,
                              intention: r,
                              messageId: g,
                          })
                        : (0, nx._7)({
                              emoji: e.emoji,
                              location: { ...ex, object: em ?? ef.ZSU.EMOJI, ...(null != ed && { page: ed }) },
                              pickerIntention: r,
                              category: e.category,
                              subCategory: e.subCategory,
                              position: e.columnIndex + 1,
                              newlyAddedHighlight:
                                  e.subCategory === t9.tm.NEWLY_ADDED_EMOJI && nT.A.isNewerThanLastSeen(el, e.emoji.id),
                              isBurstReaction: ei,
                              messageId: g,
                              lockedReason: t,
                              visibleRowIndex: e.visibleRowIndex,
                          });
                },
                trackEmojiFavorited: (e) => {
                    (0, nx.C5)({ emoji: e.emoji, location: { ...ex, object: ef.ZSU.EMOJI } });
                },
            }),
            eM = i.useCallback(() => {
                o();
            }, [o]),
            {
                getItemProps: eL,
                getRowProps: eD,
                gridContainerProps: eU,
                handleGridContainerKeyDown: eV,
                isUsingKeyboardNavigation: eF,
            } = (function (e) {
                let {
                        analyticsLocation: t,
                        pickerIntention: n,
                        columnCounts: l,
                        onSelectEmoji: r,
                        onSelectPackEmoji: s,
                        emojiGrid: a,
                        emojiList: o,
                        channelGuildId: u,
                        isBurstReaction: c,
                    } = e,
                    h = (0, d.bG)([nv.Ay], () => nv.Ay.getDisambiguatedEmojiContext(u), [u]),
                    m = i.useCallback(
                        (e, l) => {
                            if (e.type === nC.bm.EMOJI) {
                                if (e.emoji.type === nN.i.PACK)
                                    return void s(e, {
                                        isFinalSelection: !l.shiftKey,
                                        toggleFavorite: l.altKey,
                                        isBurst: c,
                                    });
                                if (null != e.emoji && l.altKey)
                                    return void (h.isFavoriteEmojiWithoutFetchingLatest(e.emoji)
                                        ? (0, nm.Sw)(e.emoji)
                                        : ((0, nx.C5)({ emoji: e.emoji, location: { ...t, object: ef.ZSU.EMOJI } }),
                                          (0, nm.V4)(e.emoji)));
                                let i = {
                                    page: null != u ? ef.liQ.GUILD_CHANNEL : ef.liQ.DM_CHANNEL,
                                    section: ef.JJy.EMOJI_PICKER_POPOUT,
                                    object: ef.ZSU.EMOJI,
                                };
                                (c &&
                                    (i = {
                                        page: null != u ? ef.liQ.GUILD_CHANNEL : ef.liQ.DM_CHANNEL,
                                        section: ef.JJy.EMOJI_PICKER_POPOUT,
                                        object: ef.ZSU.EMOJI,
                                    }),
                                    (0, nx._7)({
                                        emoji: e.emoji,
                                        location: i,
                                        pickerIntention: n,
                                        category: e.category,
                                        subCategory: e.subCategory,
                                        newlyAddedHighlight:
                                            e.subCategory === t9.tm.NEWLY_ADDED_EMOJI &&
                                            nT.A.isNewerThanLastSeen(u, e.emoji.id),
                                    }),
                                    r({ emoji: e.emoji, willClose: !l.shiftKey, isBurst: c }));
                            }
                        },
                        [r, s, u, n, h, t, c],
                    ),
                    {
                        gridDispatch: f,
                        getItemProps: p,
                        getRowProps: g,
                        gridContainerProps: x,
                        handleGridContainerKeyDown: E,
                        isUsingKeyboardNavigation: y,
                    } = (0, G.Ff)({
                        columnCounts: l,
                        gridNavigatorId: t9.lq,
                        itemGrid: a,
                        itemList: o,
                        onGridNavigatorItemSelect: m,
                        onGridNavigatorPositionChange: lG,
                    });
                return (
                    i.useEffect(
                        () =>
                            W.Om.subscribe(
                                (e) => e.inspectedExpressionPosition,
                                (e) => {
                                    if (null == e) return;
                                    let { columnIndex: t, rowIndex: n, source: l } = e;
                                    l !== en.t.GRID_NAVIGATOR_EVENT &&
                                        f({ type: et.n.SET_FOCUSED_POSITION, x: t, y: n });
                                },
                            ),
                        [f],
                    ),
                    {
                        getItemProps: p,
                        getRowProps: g,
                        gridContainerProps: x,
                        handleGridContainerKeyDown: E,
                        isUsingKeyboardNavigation: y,
                    }
                );
            })({
                pickerIntention: r,
                analyticsLocation: ex,
                columnCounts: eT,
                onSelectEmoji: c,
                onSelectPackEmoji: ew,
                emojiGrid: ek,
                emojiList: R,
                channelGuildId: el,
                isBurstReaction: eu,
            });
        (((e, t) => {
            let [n, l] = i.useState(null);
            (i.useEffect(() => {
                null != n && (t.current?.scrollToSectionTop(n), l(null));
            }, [t, n]),
                i.useEffect(() => {
                    l(W.Om.getState().activeCategoryIndex);
                }, [e]));
        })(m, R),
            i.useLayoutEffect(() => {
                w.current?.focus();
            }, [m, ey, w]),
            (t = i.useRef(D)),
            i.useEffect(() => {
                (t.current && !D && w.current?.focus(), (t.current = D));
            }, [D, w]),
            i.useEffect(() => {
                f || (0, B.Ri)("");
            }, [f]),
            i.useEffect(
                () => (
                    z.default.track(ef.HAw.OPEN_POPOUT, {
                        type: ep ?? "Emoji Picker",
                        guild_id: el,
                        location: eg,
                        ...(0, S.dI)(a),
                    }),
                    () => {
                        (lK.cancel(), lH.cancel());
                    }
                ),
                [ep, el, eg, a],
            ),
            (0, nf.Ay)(() => ((0, nx.V$)({ intention: r, location: ex }), (T.current = _), W.Om.resetStoreState)),
            i.useEffect(() => () => (0, nR.sF)(nR._2.FAVORITE_EMOJI_TOOLTIP), []),
            i.useLayoutEffect(() => {
                let { columnIndex: e, rowIndex: t } = W.Om.getState().inspectedExpressionPosition;
                ek[t]?.[e] == null && 0 !== e && W.Om.setInspectedExpressionPosition(0, 0);
            }, [ek]),
            i.useEffect(() => {
                if (("" === T.current && "" !== _ && (0, nx.EG)(ex, r), "" !== _ && T.current !== _)) {
                    let e = W.Om.getAnalyticsId();
                    0 === eA
                        ? lK({ location: ex, searchQuery: _, intention: r, loadId: e })
                        : lH({
                              totalResults: eA,
                              numEmojiLocked: eS?.locked.length ?? 0,
                              location: ex,
                              searchQuery: _,
                              intention: r,
                              loadId: e,
                          });
                }
                T.current = _;
            }, [_, ex, eA, eS, r]));
        let eW = u ? "div" : nh.l;
        function eB(e, t) {
            ew(e, { ...t, isBurst: eu });
        }
        j?.type === nC.a2.PREMIUM
            ? (n = (0, l.jsx)(nb.default, {
                  onUpsellClicked: eM,
                  emojiDescriptor: j.emojiDescriptor,
                  pickerIntention: r,
                  analyticsLocation: ex,
                  onClose: () => k(null),
                  channel: a,
              }))
            : j?.type === nC.a2.ROLE_SUBSCRIPTION &&
              (n = (0, l.jsx)(nO.A, { onClose: () => k(null), guildId: j.guildId, emojiId: j.emojiId }));
        let eG = (0, np.A)((e, t, n) => {
                eB(
                    {
                        type: nC.bm.EMOJI,
                        emoji: e,
                        isDisabled: !e.available,
                        size: lV,
                        rowIndex: 0,
                        columnIndex: t,
                        visibleRowIndex: 0,
                        category: t9.s.PACK,
                        subCategory: t9.tm.NONE,
                    },
                    n,
                );
            }),
            eK = (0, l.jsx)(n5, {
                channel: a,
                pickerIntention: r,
                emojiListRef: R,
                onKeyDown: (e) => eV?.(e),
                searchBarRef: w,
                diversitySurrogate: ey,
                isBurstReaction: ei,
                onBurstReactionToggle: function () {
                    (er(!ei), w.current?.focus());
                },
                burstToggleRef: es,
                showAddEmojiButton: x,
                closePopout: o,
            }),
            eH = [];
        nv.Ay.hasFavoriteEmojis(el) || eH.push(h.M.EMOJI_PICKER_FAVORITE_EMOJIS_TIP);
        let ez = (0, l.jsxs)(i.Fragment, {
                children: [
                    u ? eK : null,
                    (0, l.jsxs)("div", {
                        className: n2.uK,
                        ref: O,
                        children: [
                            (0, l.jsxs)("div", {
                                children: [
                                    (0, l.jsx)(nI.A, { channel: a, closePopout: o }),
                                    (0, l.jsx)(ng.Ay, {
                                        contentTypes: eH,
                                        children: (e) => {
                                            let { visibleContent: t, markAsDismissed: n } = e;
                                            if (t === h.M.EMOJI_PICKER_FAVORITE_EMOJIS_TIP)
                                                return (0, l.jsx)(nA.A, { markAsDismissed: () => n(t7.i.UNKNOWN) });
                                        },
                                    }),
                                ],
                            }),
                            (0, l.jsx)("div", {
                                className: n2.Iy,
                                id: t9.lq,
                                ...eU,
                                children:
                                    null != ev
                                        ? (0, l.jsx)(lD, {
                                              collapsedSections: eI,
                                              diversitySurrogate: ey,
                                              emojiGrid: ek,
                                              emojiListRef: R,
                                              emojiSize: lV,
                                              getEmojiItemProps: eL,
                                              getEmojiRowProps: eD,
                                              gridWidth: ev,
                                              isUsingKeyboardNavigation: eF,
                                              onEmojiSelect: eB,
                                              onRemovePack: Y,
                                              onViewEmojiPacks: M ? $ : void 0,
                                              showEmojiPacksDiscovery: Q,
                                              onDismissEmojiPacksDiscovery: X,
                                              setUpsellConfigs: k,
                                              rowCount: ek.length,
                                              rowCountBySection: eN,
                                              sectionDescriptors: ej,
                                              setCollapsedSections: eb,
                                              channelGuildId: el,
                                              messageId: g,
                                              isBurstReaction: eu,
                                          })
                                        : null,
                            }),
                        ],
                    }),
                    (0, l.jsx)(la, { emojiGrid: ek, className: n2.qV, guildId: el, pickerIntention: r, channel: a }),
                    n,
                    r === ne.EmojiIntention.REACTION
                        ? (0, l.jsx)(nS.A, { targetElementRef: es, shouldShow: ei && !eo, onDismiss: () => er(!1) })
                        : null,
                ],
            }),
            eq = (0, l.jsx)(E.A, {
                ...ex,
                children: (0, l.jsxs)(eW, {
                    id: t9.Do,
                    "aria-labelledby": u && !D ? t9.k1 : void 0,
                    role: u && !D ? "tabpanel" : void 0,
                    className: s()(n2.iE, { [n2.r6]: u, [n2.cB]: eu }),
                    children: [
                        u || D ? null : eK,
                        (0, l.jsx)("div", {
                            className: s()(n2.Fb, { [n2.eW]: D && !u }),
                            onScroll: lF,
                            onMouseLeave: lW,
                            onMouseMove: lB,
                            children: D ? (0, l.jsx)(nj.A, { onBack: () => q?.(!1), onSelectEmoji: eG }) : ez,
                        }),
                        D
                            ? null
                            : (0, l.jsx)(nX, {
                                  className: n2.jv,
                                  emojiListRef: R,
                                  sectionDescriptors: ej,
                                  intention: r,
                                  channel: a,
                                  fallbackGuildId: el,
                                  pinnedPacks: ee,
                                  onViewEmojiPacks: M ? $ : void 0,
                                  showEmojiPacksDiscovery: Q,
                                  onDismissEmojiPacksDiscovery: Z,
                              }),
                    ],
                }),
            });
        return (0, l.jsx)(F.f5, { value: eE, children: eq });
    });
var lZ = n(968088),
    lQ = n(223705);
let lX = i.memo(function (e) {
        let { isActive: t, viewType: n, autoFocus: i = !1, "aria-controls": r, children: a, ...o } = e;
        return (0, l.jsx)(f.D, {
            role: "tab",
            autoFocus: i,
            "aria-controls": t ? r : void 0,
            ...o,
            onClick: () => {
                (S.Ay.trackWithMetadata(ef.HAw.EXPRESSION_PICKER_TAB_CLICKED, { tab: n, badged: !1 }), (0, B.U)(n));
            },
            "aria-current": t ? "page" : void 0,
            className: s()(lQ.Mf, { [lQ.yR]: t }),
            children: (0, l.jsx)(e_.E, {
                variant: t ? "body-md/semibold" : "body-md/medium",
                color: "none",
                className: lQ.Gn,
                children: a,
            }),
        });
    }),
    lY = i.memo(function (e) {
        let {
                returnRef: t,
                positionTargetRef: n,
                hideGifFavorites: r,
                onSelectGIF: a,
                onSelectEmoji: f,
                onSelectSticker: C,
                onSelectSound: w,
                channel: M,
                type: L,
                position: P,
                align: D,
                positionLayerClassName: U,
                closeOnModalOuterClick: V = !1,
                parentModalKey: F,
            } = e,
            W = i.useRef(null),
            G = i.useRef(!1),
            K = i.useRef(null),
            H = i.useRef(null),
            { renderWindow: z, windowDispatch: q } = i.useContext(k.Ay),
            { height: $, handleResizeHandleMouseDown: J } = (function (e) {
                let { containerRef: t, positionTargetRef: n, renderWindow: l } = e,
                    r = (0, d.bG)([t6.Ay], () => t6.Ay.expressionPickerHeight) ?? 600,
                    [s, a] = i.useState(l.innerHeight - 16),
                    u = i.useCallback(() => {
                        let e = n.current;
                        null == e || a(Math.max(0, e.getBoundingClientRect().top - 8 - 16));
                    }, [n]);
                (i.useLayoutEffect(u, [u]),
                    i.useEffect(() => {
                        let e = o().debounce(u, 250);
                        return (
                            l.addEventListener("resize", e),
                            () => {
                                (l.removeEventListener("resize", e), e.cancel());
                            }
                        );
                    }, [u, l]));
                let c = Math.min(480, s),
                    h = o().clamp(r, c, s),
                    m = i.useCallback(
                        (e) => {
                            e !== h && x.Ay.updatedUnsyncedSettings({ expressionPickerHeight: e });
                        },
                        [h],
                    ),
                    f = (0, y.A)({
                        initialElementDimension: r,
                        maxDimension: s,
                        minDimension: c,
                        resizableDomNodeRef: t,
                        onElementResizeEnd: m,
                        orientation: y.R.VERTICAL_TOP,
                    });
                return {
                    height: h,
                    handleResizeHandleMouseDown: i.useCallback(
                        (e) => {
                            (u(), f(e));
                        },
                        [u, f],
                    ),
                };
            })({ containerRef: W, positionTargetRef: n, renderWindow: z }),
            Z = (0, B.RQ)((e) => e.activeView),
            Q = (0, O.ZO)(M),
            X = (0, d.bG)([R.A], () => !R.A.hasLoadedStickerPacks),
            Y = (0, T.t)({ location: "expression_picker" }),
            ee = (0, b.H)("expression_picker");
        i.useEffect(() => {
            ee && (0, v.Fp)();
        }, [ee]);
        let et = (0, B.RQ)((e) => e.showEmojiPacks || null != e.showSelectedEmojiPackId),
            en = (0, d.bG)([t8.A], () => t8.A.isOpen()),
            el = null != F,
            ei = (0, m.LA)(F ?? ""),
            er = L.gifs?.allowSending && !u.Fr && null != a,
            es = L.stickers?.allowSending && null != C,
            ea = !L.expressionPicker?.onlyEmojis && (er || es),
            eo = L.expressionPicker?.emojiIntention ?? ne.EmojiIntention.CHAT,
            eu = ee && (0, I.z)(eo),
            ec = eu && et,
            ed = ea && !ec,
            eh = null != M.guild_id && eo !== ne.EmojiIntention.NO_CUSTOM_EMOJI,
            em = i.useCallback(
                (e) => {
                    if ((!el && (0, m.ue)()) || (el && !(ei && V)) || en || e.defaultPrevented) return;
                    let { target: t } = e;
                    if ((0, c.vq)(t) && null != t.closest("." + ep.VQ)) return;
                    for (; (0, c.vq)(t);) {
                        if (
                            t === H.current ||
                            "true" === t.getAttribute("data-menu-item") ||
                            "true" === t.getAttribute("data-premium-tutorial-expression-picker-tooltip") ||
                            "true" === t.getAttribute("data-premium-tutorial-persistent-coachmark-emoji-step")
                        )
                            return;
                        t = t.parentNode;
                    }
                    ("mousedown" === e.type &&
                        (0, c.vq)(e.target) &&
                        null != H.current &&
                        e.target.contains(H.current) &&
                        e.preventDefault(),
                        (0, B.v8)());
                    let n = (0, c.BF)(e)?.activeElement;
                    (null == n || "BODY" === n.tagName) && t4._.dispatchToLastSubscribed(ef.jej.TEXTAREA_FOCUS);
                },
                [V, ei, el, en],
            ),
            ex = i.useCallback(() => {
                (0, B.v8)();
            }, []);
        (i.useLayoutEffect(() => {
            function e() {
                Z === ep.kx.GIF && (0, B.v8)();
            }
            return (
                z.addEventListener("mousedown", em),
                z.addEventListener("contextmenu", em),
                q.subscribe(ef.jej.POPOUT_CLOSE, ex),
                t4._.subscribe(ef.jej.CLOSE_GIF_PICKER, e),
                () => {
                    (z.removeEventListener("mousedown", em),
                        z.removeEventListener("contextmenu", em),
                        q.unsubscribe(ef.jej.POPOUT_CLOSE, ex),
                        t4._.unsubscribe(ef.jej.CLOSE_GIF_PICKER, e));
                }
            );
        }, [Z, ex, em, z, q]),
            (0, p.tj)(W, { returnRef: t }));
        let [eE, ey] = (0, A.kn)(Y ? [h.M.SOUNDMOJI_BADGE] : []),
            [eS, eA] = i.useState(!1);
        (i.useEffect(() => {
            Z === ep.kx.SOUNDBOARD && eA(!0);
        }, [Z]),
            i.useEffect(
                () => () => {
                    eS && ey(t7.i.TAKE_ACTION);
                },
                [eS, ey],
            ),
            i.useEffect(() => {
                (0, B.Ri)("");
            }, []),
            i.useEffect(() => {
                ((!el && (0, m.ue)()) || (el && !ei)) && (0, B.v8)();
            }, [ei, el]),
            i.useEffect(() => {
                null != H.current &&
                    !G.current &&
                    (Z === ep.kx.EMOJI
                        ? K?.current?.onPickerOpen != null && (K?.current?.onPickerOpen(), (G.current = !0))
                        : Z === ep.kx.STICKER
                          ? K?.current?.onPickerOpen == null || X || (K?.current?.onPickerOpen(), (G.current = !0))
                          : (S.Ay.trackWithMetadata(ef.HAw.EXPRESSION_PICKER_OPENED, {
                                width: H.current.offsetWidth,
                                tab: Z,
                                badged: !1,
                            }),
                            (G.current = !0)));
            }));
        let eC = i.useCallback((e, t) => w?.(e, "soundboard_picker", t), [w]),
            eI = L.soundmoji?.allowSending === !0 && null != w,
            eb = null != U ? U : "left" === D ? lQ.sj : lQ.Jg,
            ev = er
                ? (0, l.jsx)(lX, {
                      id: t9.g9,
                      "aria-controls": t9.ni,
                      "aria-selected": Z === ep.kx.GIF,
                      isActive: Z === ep.kx.GIF,
                      viewType: ep.kx.GIF,
                      children: eg.intl.string(eg.t["6gUTsS"]),
                  })
                : null,
            eN = es
                ? (0, l.jsx)(lX, {
                      id: eL.LD,
                      "aria-controls": eL.GX,
                      "aria-selected": Z === ep.kx.STICKER,
                      isActive: Z === ep.kx.STICKER,
                      autoFocus: !Q,
                      viewType: ep.kx.STICKER,
                      children: eg.intl.string(eg.t.nf1s3u),
                  })
                : null,
            ej = (0, l.jsx)(lX, {
                id: t9.k1,
                "aria-controls": t9.Do,
                "aria-selected": Z === ep.kx.EMOJI,
                isActive: Z === ep.kx.EMOJI,
                viewType: ep.kx.EMOJI,
                children: eg.intl.string(eg.t.Xu3wE3),
            });
        return (0, l.jsx)(E.A, {
            section: ef.JJy.EXPRESSION_PICKER,
            children: (0, l.jsx)(j.nE, {
                className: s()(lQ.T8, eb),
                targetRef: n,
                position: P,
                align: D,
                spacing: 8,
                autoInvert: !0,
                clickTrap: !0,
                children: (e) => {
                    let { isPositioned: t } = e;
                    return (0, l.jsx)("section", {
                        className: s()(lQ.V6, { [lQ.D0]: !ea, [lQ.zw]: "left" === D }),
                        ref: W,
                        style: { height: $ },
                        role: "dialog",
                        "aria-label": eg.intl.string(eg.t.Utlwvi),
                        children: t
                            ? (0, l.jsx)("div", {
                                  className: lQ.jP,
                                  style: { [D]: 0 },
                                  ref: H,
                                  children: (0, l.jsxs)("div", {
                                      className: s()(lQ.FG, { [lQ.$D]: ec }),
                                      children: [
                                          (0, l.jsx)("div", {
                                              className: lQ.iT,
                                              onMouseDown: J,
                                              children: (0, l.jsx)("div", { className: lQ.Di, "aria-hidden": !0 }),
                                          }),
                                          ed
                                              ? (0, l.jsxs)("nav", {
                                                    className: lQ.C$,
                                                    children: [
                                                        (0, l.jsxs)("div", {
                                                            className: lQ.CT,
                                                            role: "tablist",
                                                            "aria-label": eg.intl.string(eg.t["2j4Vgd"]),
                                                            children: [
                                                                ej,
                                                                eN,
                                                                ev,
                                                                Y &&
                                                                    eI &&
                                                                    (0, l.jsx)(lX, {
                                                                        id: t9.N6,
                                                                        "aria-controls": t9.AA,
                                                                        "aria-selected": Z === ep.kx.SOUNDBOARD,
                                                                        isActive: Z === ep.kx.SOUNDBOARD,
                                                                        viewType: ep.kx.SOUNDBOARD,
                                                                        children: (0, l.jsxs)("div", {
                                                                            className: lQ.sd,
                                                                            children: [
                                                                                eg.intl.string(lZ.default.BYt55g),
                                                                                null != eE &&
                                                                                    (0, l.jsx)(g.E, {
                                                                                        type: "new",
                                                                                        variant: "primary",
                                                                                    }),
                                                                            ],
                                                                        }),
                                                                    }),
                                                            ],
                                                        }),
                                                        eh
                                                            ? (0, l.jsx)("div", {
                                                                  className: lQ.hE,
                                                                  children: (0, l.jsx)(nd, {
                                                                      channel: M,
                                                                      closePopout: ex,
                                                                  }),
                                                              })
                                                            : null,
                                                    ],
                                                })
                                              : null,
                                          Z === ep.kx.STICKER && es
                                              ? (0, l.jsx)(t3, {
                                                    isLoading: X,
                                                    channel: M,
                                                    containerWidth: 544,
                                                    onSelectSticker: C,
                                                    closePopout: ex,
                                                    ref: (e) => {
                                                        K.current = e;
                                                    },
                                                })
                                              : null,
                                          Z === ep.kx.GIF && er
                                              ? (0, l.jsx)(N.A, { onSelectGIF: a, hideFavorites: r, persistSearch: !0 })
                                              : null,
                                          Z === ep.kx.EMOJI || L.expressionPicker?.onlyEmojis === !0
                                              ? (0, l.jsx)(lJ, {
                                                    hasTabWrapper: !0,
                                                    persistSearch: !0,
                                                    channel: M,
                                                    containerWidth: 544,
                                                    pickerIntention: eo,
                                                    showAddEmojiButton: !ed && eh,
                                                    closePopout: ex,
                                                    onSelectEmoji: f,
                                                    ref: (e) => {
                                                        K.current = e;
                                                    },
                                                    isViewingEmojiPacks: ec,
                                                    onViewEmojiPacksChange: eu ? B.ke : void 0,
                                                })
                                              : null,
                                          Z === ep.kx.SOUNDBOARD
                                              ? (0, l.jsx)("div", {
                                                    className: lQ.z,
                                                    children: (0, l.jsx)(_.A, {
                                                        guildId: M.guild_id,
                                                        channel: M,
                                                        containerWidth: 544,
                                                        onClose: ex,
                                                        onSelect: eC,
                                                        analyticsSource: "expression-picker",
                                                        renderHeader: (e) =>
                                                            (0, l.jsx)("div", { className: lQ.BG, children: e }),
                                                        inExpressionPicker: !0,
                                                        shouldValidateSelectedSound: !0,
                                                    }),
                                                })
                                              : null,
                                      ],
                                  }),
                              })
                            : null,
                    });
                },
            }),
        });
    });
function l0(e) {
    return nr.useConfig({ location: "expression_picker" }).enabled
        ? (0, l.jsx)(lY, { ...e })
        : (0, l.jsx)(ni, { ...e });
}
