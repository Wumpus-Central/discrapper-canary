n.d(t, { A: () => nc });
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
    S = n(761929),
    y = n(149468),
    A = n(263775),
    C = n(863576),
    b = n(200589),
    I = n(490035),
    v = n(934499),
    N = n(649529),
    T = n(750506),
    k = n(267102),
    j = n(926972),
    _ = n(327289),
    R = n(256449),
    w = n(898578),
    O = n(649852),
    M = n.n(O),
    L = n(462180),
    P = n(319060),
    D = n(289873),
    U = n(212245),
    V = n(793574),
    W = n(688810),
    B = n(850992),
    F = n(151271),
    G = n(887695),
    K = n(253932),
    H = n(287809),
    z = n(129230),
    q = n(240248),
    $ = n(196765),
    Q = n(121894);
let Z = Object.freeze({ showPremiumUpsell: !1 }),
    X = (0, $.v)((e) => Z);
function Y(e) {
    (0, Q.r)(() => X.setState({ showPremiumUpsell: e }));
}
var J = n(891090),
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
    eS = (0, q.xI)(P.A.STICKERS_CONSTANTS_STICKER_CATEGORY_ICON_SIZE),
    ey = (0, q.xI)(P.A.STICKERS_CONSTANTS_STICKER_CATEGORY_ICON_MARGIN),
    eA = (0, q.xI)(P.A.STICKERS_CONSTANTS_STICKER_CATEGORY_UNICODE_ICON_SIZE),
    eC = (0, q.xI)(P.A.STICKERS_CONSTANTS_CATEGORY_SEPARATOR_SIZE),
    eb = (0, q.xI)(P.A.STICKERS_CONSTANTS_CATEGORY_SEPARATOR_MARGIN_VERTICAL),
    eI = [eE, eE, eE, eE],
    ev = (eS + ey) * 2 + eE,
    eN = eC + 2 * eb;
function eT(e) {
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
        u = B.bM.useStore((e) => e.activeCategoryIndex),
        {
            firstStandardStickerCategoryIndex: c,
            firstStandardStickerCategoryOffsetTop: d,
            guildCategoryCount: h,
            hasFirstPartyStickerPacks: m,
        } = i.useMemo(() => {
            let e = n.filter((e) => e.type === ee.Z2.GUILD).length,
                t = e + +(n[0]?.type === ee.Z2.RECENT) + +(n[0]?.type === ee.Z2.FAVORITE),
                l = t * (eS + ey) - ey + eN;
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
                c = (0, F.RQ)((e) => "" !== e.searchQuery),
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
                                    children: (0, l.jsx)(eT, {
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
                                    children: (0, l.jsx)(eT, {
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
                            S = null != E && x.type === ee.Z2.GUILD && E.type !== ee.Z2.GUILD,
                            y = x.type === ee.Z2.PACK,
                            A = "",
                            C = null;
                        if (x.type === ee.Z2.GUILD || x.type === ee.Z2.EMPTY_GUILD_UPSELL) {
                            let e = ed.A.getGuild(x.id);
                            null != e &&
                                ((o = e.id),
                                (A = e.name),
                                (C = (0, l.jsx)(eo.A, { guild: e, isSelected: p, isLocked: !0 === x.isNitroLocked })));
                        } else if (y) {
                            let e = w.A.getStickerPack(x.id);
                            null != e &&
                                ((A = e.name),
                                (C = (0, l.jsx)(em.A, {
                                    disableAnimation: !p || c,
                                    size: eS,
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
                                            children: (0, l.jsx)(eT, {
                                                ariaLabel: A,
                                                className: s()(ex._0, { [ex.ND]: y, [ex.Ms]: g && y }),
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
                                    S ? (0, l.jsx)("hr", { className: ex.ny }, "separator") : null,
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
                        return eS + (null != i && l.type === ee.Z2.GUILD && i.type !== ee.Z2.GUILD ? eN : ey);
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
        store: B.bM,
        listPadding: eI,
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
var ej = n(534514),
    e_ = n(834730),
    eR = n(821609),
    ew = n(403581),
    eO = n(739053),
    eM = n(82498),
    eL = n(823894),
    eP = n(682901),
    eD = n(768857);
function eU() {
    (z.default.track(ef.HAw.PREMIUM_PROMOTION_OPENED, { location_section: ef.JJy.EMPTY_STICKER_PICKER_UPSELL }), Y(!0));
}
function eV(e) {
    let { className: t } = e;
    (0, R.XQ)();
    let { analyticsLocations: n } = (0, W.Ay)(V.A.EMPTY_STATE),
        r = (0, d.yK)([w.A], () => eL.vX.map((e) => w.A.getStickerById(e)));
    return (
        i.useEffect(() => {
            (z.default.track(ef.HAw.PREMIUM_UPSELL_VIEWED, {
                type: eP.e.EMPTY_STICKER_PICKER_UPSELL,
                source: { section: ef.JJy.EMPTY_STICKER_PICKER_UPSELL },
                location_stack: n,
            }),
                (0, eO.sq)(ef.U7l.PREMIUM_UPSELL_VIEWED, n, () => (0, eM.uq)(eP.e.EMPTY_STICKER_PICKER_UPSELL)));
        }, [n]),
        (0, l.jsxs)("div", {
            className: s()(eD.p$, t),
            children: [
                (0, l.jsx)(ej.D, {
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
                (0, l.jsx)(eR.$, {
                    variant: "expressive",
                    icon: ew.NitroWheelIcon,
                    text: eg.intl.string(eg.t["8Sh5fg"]),
                    onClick: eU,
                }),
            ],
        })
    );
}
var eW = n(361670);
function eB(e, t, n) {
    return e.stickers.filter((e) => (0, eW.W$)(e, t, n) !== eW.Ux.SENDABLE_WITH_BOOSTED_GUILD);
}
n(30146);
var eF = n(404778),
    eG = n(537652),
    eK = n(962125),
    eH = n(286509),
    ez = n(414872),
    eq = n(448645),
    e$ = n(631576),
    eQ = n(369163),
    eZ = n(123292),
    eX = n(631305),
    eY = n(727419),
    eJ = n(931991),
    e0 = n(473145),
    e1 = n(598933),
    e2 = n(136123);
let e5 = function (e) {
    let { className: t, guildId: n, channel: r, shouldTrackUpsellViewed: a, setTrackedUpsellViewed: o } = e,
        { location: u } = (0, U.p)(),
        { analyticsLocations: c } = (0, W.Ay)(),
        h = (0, d.bG)([ed.A], () => ed.A.getGuild(n)),
        { canManageAllExpressions: m } = (0, eJ.nr)(h),
        f = null != h && 0 === (0, e0.aG)(h.premiumTier) && !h.features.has(ef.GuildFeatures.MORE_STICKERS);
    return (i.useEffect(() => {
        m &&
            f &&
            a &&
            ((0, y.zV)(ef.HAw.PREMIUM_GUILD_UPSELL_VIEWED, {
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
                      (0, l.jsx)(eQ.BoostTier2SimpleIcon, { size: "md", color: "currentColor", className: e2.Kk }),
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
                                  (0, eX.A)({
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
                              ((0, F.v8)(), eY.A.open(n, ef.BEX.STICKERS, u));
                          },
                      }),
                  ],
              })
        : null;
};
var e3 = n(240864),
    e6 = n(89366),
    e8 = n(202639);
let e9 = (0, a.throttle)(
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
var e4 = n(307301),
    e7 = n(371680),
    te = n(683522);
let tt = (0, q.xI)(P.A.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_INSPECTOR_BAR_GRAPHIC_PRIMARY_DIMENSIONS),
    tn = (0, q.xI)(P.A.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_INSPECTOR_BAR_GRAPHIC_SECONDARY_DIMENSIONS),
    tl = i.memo(function (e) {
        let { stickersGrid: t } = e,
            n = B.bM.useStore((e) => e.inspectedExpressionPosition),
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
                    let i = w.A.getStickerPack(e.pack_id);
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
                          children: (0, l.jsx)(e4.PlusSmallIcon, {
                              size: "md",
                              color: "currentColor",
                              className: te.K,
                          }),
                      });
        return (0, l.jsx)(e7.A, {
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
            stickerClassName: S,
            stickerDescriptors: y,
            stickerPadding: A,
            stickerSize: C,
            ownedStickerPacks: b,
            enlargeOnInteraction: I = !1,
            channel: v,
            currentUser: N,
            checkSendability: T = !0,
            isSectionNitroLocked: k = !1,
        } = e,
        { location: j } = (0, U.p)(),
        _ = C + 2 * A,
        R = i.useMemo(
            () => ({
                gridColumnGap: c,
                gridTemplateColumns: `repeat(auto-fill, ${_}px)`,
                height: _,
                paddingRight: t ? void 0 : _,
            }),
            [t, c, _],
        ),
        w = i.useMemo(() => ({ width: C, height: C, padding: A }), [A, C]),
        [O, M] = (0, ta.A)(null, 300);
    return (0, l.jsx)("div", {
        className: tc.nM,
        style: R,
        ...u?.(E),
        children: y.map((e) => {
            let u = e.visibleRowIndex === d?.rowIndex && e.columnIndex === d?.columnIndex,
                c = e.type === ee.op.STICKER && I && u,
                y = (0, a.throttle)(() => {
                    h?.current === !0 || p?.current === !0 || u || g?.(e);
                }, 250),
                { ref: A, tabIndex: _, onFocus: R, ...L } = o?.(e.columnIndex, E) ?? {};
            switch (e.type) {
                case ee.op.CREATE_STICKER:
                    return (0, l.jsx)(
                        "div",
                        {
                            ...L,
                            children: (0, l.jsxs)(f.D, {
                                "aria-label": e.name,
                                className: s()(tc.wP, S, { [tc.Kj]: u }),
                                innerRef: A,
                                tabIndex: _,
                                onFocus: R ?? y,
                                onMouseMove: y,
                                onClick: function () {
                                    e.type === ee.op.CREATE_STICKER &&
                                        (z.default.track(ef.HAw.OPEN_MODAL, {
                                            type: ef.JJy.CREATE_STICKER_MODAL,
                                            location: j,
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
                                style: w,
                                children: [
                                    !I && (0, l.jsx)("div", { className: tc.fw }),
                                    (0, l.jsx)("div", {
                                        className: tc.P0,
                                        children: (0, l.jsx)(e4.PlusSmallIcon, {
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
                    let a = (T ? (0, eW.W$)(e.sticker, N, v) : eW.Ux.SENDABLE) !== eW.Ux.SENDABLE && !k,
                        o = t && null != b && (0, eh.FD)(e.sticker) && !b.has(e.sticker.pack_id);
                    return (0, i.createElement)(
                        "div",
                        { ...L, key: e.sticker.id },
                        (0, l.jsxs)(f.D, {
                            className: s()(tc.yI, S, { [tc.PV]: u, [tc.TV]: O === e.sticker.id }),
                            innerRef: A,
                            tabIndex: _,
                            onFocus: R ?? y,
                            onMouseMove: y,
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
                            style: w,
                            "data-type": en.g.STICKER,
                            "data-id": e.sticker.id,
                            "data-name": e.sticker.name,
                            "data-format-type": e.sticker.format_type,
                            children: [
                                (0, l.jsx)(ti.A, { children: (0, em.h)(e.sticker) }),
                                (0, l.jsxs)("div", {
                                    "aria-hidden": !0,
                                    children: [
                                        !I && (0, l.jsx)("div", { className: tc.fw }),
                                        (0, l.jsx)(em.A, {
                                            className: s()(tc.SI, {
                                                [tc.ot]:
                                                    I && !u && null != d && -1 !== d.rowIndex && -1 !== d.columnIndex,
                                                [tc.Q$]: c,
                                                [tc.UK]: a,
                                            }),
                                            disableAnimation: !u && !r,
                                            enlargeOnInteraction: I,
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
    switch ((0, eW.W$)(t.sticker, n, l)) {
        case eW.Ux.SENDABLE:
            i(t);
            break;
        case eW.Ux.SENDABLE_WITH_PREMIUM:
            (z.default.track(ef.HAw.PREMIUM_PROMOTION_OPENED, {
                location_section: ef.JJy.STICKER_PICKER_UPSELL,
                location_object: ef.ZSU.STICKER,
            }),
                Y(!0));
        case eW.Ux.SENDABLE_WITH_BOOSTED_GUILD:
        case eW.Ux.NONSENDABLE:
    }
}
var tm = n(457231);
let tf = (0, q.xI)(P.A.STICKERS_CONSTANTS_STICKER_PICKER_BREAKPOINT_SMALL),
    tp = (0, q.xI)(P.A.STICKERS_CONSTANTS_STICKER_PICKER_BREAKPOINT_MEDIUM),
    tg = (0, q.xI)(P.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_TOP),
    tx = (0, q.xI)(P.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_TOP_SEARCH_RESULTS),
    tE = (0, q.xI)(P.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_RIGHT),
    tS = (0, q.xI)(P.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_BOTTOM),
    ty = (0, q.xI)(P.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_LEFT),
    tA = (0, q.xI)(P.A.STICKERS_CONSTANTS_STICKERS_LIST_DIVIDER_HEIGHT),
    tC = (0, q.xI)(P.A.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_LIST_SECTION_HEADING_HEIGHT),
    tb = (0, q.xI)(P.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS),
    tI = (0, q.xI)(P.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS_SMALL),
    tv = (0, q.xI)(P.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_MARGIN),
    tN = tb + 2 + tv,
    tT = tI + 2 + tv,
    tk = [tg, tE, tS, ty],
    tj = [tx, tE, tS, ty],
    t_ = (0, q.xI)(P.A.STICKERS_CONSTANTS_STICKERS_LIST_EMPTY_GUILD_UPSELL_HEIGHT),
    tR = "sticker-search-nitro",
    tw = ["laugh", "wave", "yes", "dance", "sad", "no", "hi", "bye", "cry", "ok"];
function tO(e) {
    let { onSuggestionClick: t } = e;
    return (0, l.jsx)("div", {
        className: tm.yB,
        children: tw.map((e) =>
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
            ref: S,
        } = e,
        y = i.useRef(!1),
        A = i.useRef(null),
        [C, b] = B.bM.useStore((e) => [e.activeCategoryIndex, e.inspectedExpressionPosition], L.x),
        { analyticsLocations: I } = (0, W.Ay)(V.A.STICKER_PICKER),
        v = (0, F.RQ)((e) => e.searchQuery),
        N = (0, d.bG)([w.A], () => w.A.getPremiumPacks()),
        T = (0, d.bG)([H.default], () => H.default.getCurrentUser()),
        k = eq.Ay.canUseCustomStickersEverywhere(T),
        [j, _] = i.useState(0),
        {
            renderRow: R,
            renderSection: O,
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
                    activeSectionIndex: S,
                } = e,
                y = (0, U.p)(),
                { handleStickerInspect: A, handleSelect: C } = (function (e) {
                    let { onSelectSticker: t, channel: n, currentUser: l } = e,
                        r = (0, U.p)(),
                        s = (0, F.RQ)((e) => e.searchQuery);
                    return {
                        handleStickerInspect: i.useCallback((e) => {
                            let { visibleRowIndex: t, columnIndex: n, gridSectionIndex: l } = e;
                            (B.bM.setActiveCategoryIndex(l),
                                B.bM.setInspectedExpressionPosition(n, t, en.t.MOUSE_EVENT),
                                e.type === ee.op.STICKER && B.bM.setSearchPlaceholder(e.sticker.name));
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
                                (0, eW.W$)(a, l, n) !== eW.Ux.SENDABLE
                                    ? th({ descriptor: e, currentUser: l, channel: n, onSelect: t })
                                    : i
                                      ? (0, eh.o1)(a.id)
                                          ? (0, e$.vr)(a.id)
                                          : ((0, J.Dt)({ sticker: a, location: { ...o, object: ef.ZSU.STICKER } }),
                                            (0, e$.uK)(a.id))
                                      : t(e);
                            },
                            [r.location, s, l, n, t],
                        ),
                    };
                })({ onSelectSticker: r, channel: x, currentUser: E }),
                [b, I] = i.useState(!1),
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
                                      stickerSize: n > tf ? tb : tI,
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
                T = i.useCallback(
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
                j = i.useCallback(
                    (e, t) => {
                        let n = f[e],
                            i = tM(e, p),
                            r = i || (null == p && n?.isNitroLocked === !0),
                            a = i || (null == p && T(e));
                        return null == p || r
                            ? (0, l.jsx)(
                                  "div",
                                  { role: "rowgroup", className: s()({ [tm.cW]: r, [tm.fV]: a }), children: t },
                                  e,
                              )
                            : t;
                    },
                    [p, f, T],
                ),
                _ = i.useCallback(
                    function (e) {
                        let { isStickerPack: n = !0 } =
                                arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            l = new Set(t),
                            i = t.has(e);
                        (i ? l.delete(e) : l.add(e),
                            z.default.track(ef.HAw.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
                                location: y?.location,
                                tab: ep.kx.STICKER,
                                collapsed: !i,
                                sticker_pack_id: n ? e : null,
                            }),
                            v(l));
                    },
                    [y, t, v],
                ),
                R = i.useCallback(
                    (e) => {
                        let n = f[e];
                        if (null != p) {
                            let { sendable: n, sendableWithPremium: i } = p;
                            if (0 === e && n.length > 0) return null;
                            if (tM(e, p)) {
                                let n = S === e;
                                return (0, l.jsx)(
                                    eH.A,
                                    {
                                        className: s()(tm.jH, tm.M0, { [tm.RA]: !n, [tm.sp]: n }),
                                        "aria-label": eg.intl.string(eg.t.pAF6xE),
                                        icon: (0, l.jsx)(ew.NitroWheelIcon, { size: "xs", color: "currentColor" }),
                                        isCollapsed: t.has(tR),
                                        onClick: () => _(tR, { isStickerPack: !1 }),
                                        children: eg.intl.string(eg.t.pAF6xE),
                                    },
                                    "stickers-available-with-nitro-header",
                                );
                            }
                            let r = n.length > 0 && i.length > 0;
                            return (0, l.jsxs)(l.Fragment, {
                                children: [
                                    r ? (0, l.jsx)("div", { className: tm.yF, children: (0, l.jsx)(eF.c, {}) }) : null,
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
                            r = s()(tm.jH, tm.M0, { [tm.RA]: i && S !== e, [tm.sp]: i && S === e });
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
                                let e = w.A.getStickerPack(n.id);
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
                    [S, t, p, f, _],
                ),
                O = i.useCallback(
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
                renderSection: j,
                renderSectionHeader: R,
                sectionHeaderHeight: O,
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
                                              shouldTrackUpsellViewed: !b,
                                              setTrackedUpsellViewed: I,
                                          },
                                          `sticker-picker-empty-guild-inline-upsell-${n.id}`,
                                      ),
                            s = null;
                        return (
                            k(e)
                                ? (s = (0, l.jsx)(ez.A, { className: tm.$2 }))
                                : T(e) && (s = (0, l.jsx)("div", { className: tm.pQ })),
                            null == r && null == s ? null : (0, l.jsxs)(l.Fragment, { children: [r, s] })
                        );
                    },
                    [f, t, p, x, b, k, T],
                ),
                sectionFooterHeight: i.useCallback(
                    (e) => {
                        if (null != p) return tM(e, p) ? 33 : 41 * !!tL(e, p);
                        let n = f[e],
                            l = t.has(n.id),
                            i = 0;
                        return (
                            n.type !== ee.Z2.EMPTY_GUILD_UPSELL || l || (i += t_),
                            k(e) ? (i += 41) : T(e) && (i += 33),
                            i
                        );
                    },
                    [p, f, t, k, T],
                ),
            };
        })({
            collapsedStickersCategories: t,
            gridWidth: n,
            stickersCategories: g,
            stickersGrid: x,
            isScrolling: y,
            isUsingKeyboardNavigation: h,
            onSelectSticker: m,
            getStickerItemProps: a,
            getStickerRowProps: o,
            gutterWidth: c,
            inspectedStickerPosition: b,
            filteredStickers: r,
            ownedStickerPacks: i.useMemo(() => new Set(N.map((e) => e.id)), [N]),
            channel: E,
            currentUser: T,
            activeSectionIndex: j,
        }),
        { onScroll: $, upsell: Q } = (function (e) {
            let {
                    canUseStickersEverywhere: t,
                    listRef: n,
                    searchQuery: r,
                    categories: s,
                    sectionHeaderHeight: a,
                    sectionFooterHeight: o,
                } = e,
                { location: c } = (0, U.p)(),
                { analyticsLocations: d } = (0, W.Ay)(V.A.STICKER_PICKER),
                [h, m] = i.useState(!1),
                f = i.useMemo(() => s.map((e) => ({ isNitroLocked: !0 === e.isNitroLocked })), [s]),
                p = i.useCallback(
                    (e) => {
                        e9({
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
                        (0, eO.sq)(ef.U7l.PREMIUM_UPSELL_VIEWED, d, () =>
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
                            Y(!0));
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
            isScrolling: y,
            listRef: A,
            onActiveCategoryIndexChange: B.bM.setActiveCategoryIndex,
            scrollOffset: 20,
            searchQuery: v,
        }),
        X = i.useCallback((e) => {
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
        X(A.current?.getScrollerNode()?.scrollTop ?? 0);
    }, [X, r, p]);
    let et = i.useCallback(
        (e) => {
            (Z(e), X(e), $(e));
        },
        [Z, $, X],
    );
    return (
        (0, G.FV)({ searchQuery: v, activeCategoryIndex: C, listRef: A }),
        i.useImperativeHandle(
            S,
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
        (0, l.jsx)(W.f5, {
            value: I,
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
                                      suggestions: (0, l.jsx)(tO, { onSuggestionClick: (e) => (0, F.Ri)(e, !0) }),
                                  })
                                : (0, l.jsx)(eK.A, {
                                      role: "none presentation",
                                      listPadding: null != r ? tj : tk,
                                      onScroll: et,
                                      renderRow: R,
                                      renderSection: O,
                                      renderSectionHeader: D,
                                      renderSectionFooter: M,
                                      rowCount: f,
                                      rowCountBySection: p,
                                      rowHeight: n > tf ? tN : tT,
                                      sectionHeaderHeight: q,
                                      sectionFooterHeight: P,
                                      stickyHeaders: !0,
                                      ref: A,
                                  }),
                            Q,
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
let tW = function (e) {
    let { onKeyDown: t, stickersListRef: n, channel: r, ref: s } = e,
        a = (0, R.ZO)(r),
        o = i.useRef(null),
        { searchQuery: u, isSearchSuggestion: c } = (0, F.RQ)(
            (e) => ({ searchQuery: e.searchQuery, isSearchSuggestion: e.isSearchSuggestion }),
            L.x,
        ),
        d = B.bM.useStore((e) => e.searchPlaceholder),
        [h, m] = B.bM.useStore((e) => [e.inspectedExpressionPosition, e.hasInteracted], L.x),
        f = i.useCallback(
            (e) => {
                (B.bM.setActiveCategoryIndex("" === e ? 0 : -1),
                    B.bM.setInspectedExpressionPosition(0, 0),
                    B.bM.setSearchPlaceholder(null),
                    (0, F.Ri)(e),
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
var tB = n(997625),
    tF = n(95278),
    tG = n(401507);
function tK(e) {
    let { onUpsellClicked: t } = e,
        { location: n } = (0, U.p)(),
        { analyticsLocations: i } = (0, W.Ay)(V.A.STICKER_PICKER),
        r = (0, F.RQ)((e) => e.searchQuery);
    return (0, l.jsx)(tG.A, {
        title: eg.intl.string(eg.t.Eukdgl),
        description: eg.intl.string(eg.t.sMmd7s),
        analyticsLocationSection: ef.JJy.STICKER_PICKER_UPSELL,
        onClose: () => Y(!1),
        onUpsellClicked: t,
        upsellViewedTrackingData: {
            type: eP.e.STICKER_PICKER_UPSELL,
            location: { ...n, object: ef.ZSU.STICKER },
            location_stack: i,
            sku_id: (0, eq.mH)(eq.Ay.getSkuIdForPremiumType(eP.PremiumTypes.TIER_2)),
            has_search_query: "" !== r,
        },
        graphic: (0, l.jsx)(tF.n, { alt: "", ariaHidden: !0 }),
        useNitroGradient: !0,
    });
}
var tH = n(970099);
let tz = (0, q.xI)(P.A.STICKERS_CONSTANTS_STICKER_PICKER_BREAKPOINT_SMALL),
    tq = (0, q.xI)(P.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_LEFT),
    t$ = (0, q.xI)(P.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_RIGHT),
    tQ = (0, q.xI)(P.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_MARGIN),
    tZ = (0, q.xI)(P.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_MARGIN_SMALL),
    tX = (0, q.xI)(P.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS),
    tY = (0, q.xI)(P.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS_SMALL),
    tJ = tX + 2,
    t0 = tY + 2,
    t1 = M()(J.Qz, 200),
    t2 = M()(J.HA, 200);
function t5(e) {
    let { containerWidth: t, channel: r, onSelectSticker: s, closePopout: a, ref: o } = e,
        { location: u } = (0, U.p)(),
        { analyticsLocations: c } = (0, W.Ay)(V.A.STICKER_PICKER),
        h = i.useRef(null),
        f = i.useRef(null),
        p = i.useRef(null),
        g = X((e) => e.showPremiumUpsell),
        [x, E] = (0, F.RQ)((e) => [e.searchQuery, e.isSearchSuggestion], L.x),
        S = i.useRef("");
    i.useImperativeHandle(o, () => ({ onPickerOpen: ec }));
    let y = (0, R.pD)(r),
        A = (0, d.bG)([H.default], () => H.default.getCurrentUser()),
        C = i.useMemo(
            () =>
                y.flatMap((e) => {
                    let t = (function (e, t, n) {
                        switch (e.type) {
                            case ee.Z2.FAVORITE:
                            case ee.Z2.RECENT: {
                                let l = eB(e, t, n);
                                return 0 === l.length ? null : { ...e, stickers: l, isNitroLocked: !1 };
                            }
                            case ee.Z2.GUILD: {
                                var l;
                                let i = eB(e, t, n);
                                if (
                                    i.length > 0 &&
                                    ((l = { ...e, stickers: i }),
                                    l.type === ee.Z2.GUILD &&
                                        0 !== l.stickers.length &&
                                        l.stickers.every((e) => (0, eW.W$)(e, t, n) === eW.Ux.SENDABLE_WITH_PREMIUM))
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
            [y, r, A],
        ),
        b = 0 === C.filter((e) => e.type !== ee.Z2.EMPTY_GUILD_UPSELL).length,
        I = (0, G.oV)({
            gridWrapperRef: h,
            containerWidth: t,
            showingEmptyState: b,
            listPaddingLeft: tq,
            listScrollbarWidth: 8,
        }),
        v = K.tP.useSetting(),
        N = i.useMemo(() => new Set(v), [v]),
        T = i.useMemo(
            () =>
                (function (e, t, n) {
                    if ("" === e) return null;
                    let l = [],
                        i = [];
                    return (
                        tB.Ay.queryStickers([e], !0)
                            .map((e) => {
                                let { sticker: t } = e;
                                return t;
                            })
                            .forEach((e) => {
                                let r = (0, eW.W$)(e, t, n);
                                r === eW.Ux.SENDABLE ? l.push(e) : r === eW.Ux.SENDABLE_WITH_PREMIUM && i.push(e);
                            }),
                        { sendable: l, sendableWithPremium: i }
                    );
                })(x, A, r),
            [x, A, r],
        ),
        k = (0, R.Gc)(),
        j = (0, R.UT)(),
        _ = (0, d.cf)([w.A], () => w.A.getAllGuildStickers()),
        { sendable: O = [], sendableWithPremium: M = [] } = T ?? {},
        P = O.length + M.length,
        D = i.useCallback(
            (e) => {
                ("" === x ? (0, J.ry)(e) : (0, J.nQ)(e, x, P), s(e.sticker, ee.D6.STICKER_PICKER));
            },
            [s, x, P],
        ),
        q = null != I && I > tz,
        {
            rowCount: $,
            rowCountBySection: Q,
            stickersGrid: Z,
            gutterWidth: el,
            columnCounts: ei,
        } = (0, R._c)({
            filteredStickers: T,
            stickersCategories: C,
            collapsedStickersCategories: N,
            collapsePremiumSearchSection: N.has(tR),
            listWidth: I,
            listPaddingRight: t$,
            stickerNodeMargin: q ? tQ : tZ,
            stickerNodeWidth: q ? tJ : t0,
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
            store: B.bM,
            setInspectedStickerPosition: B.bM.setInspectedExpressionPosition,
            gridNavigatorId: eL.lq,
        });
    function ec() {
        let e = r.getGuildId(),
            n = [];
        null !== e && (n = w.A.getStickersByGuildId(e) ?? []);
        let l = 0;
        (null != _ &&
            [..._.values()].forEach((e) => {
                l += e.length;
            }),
            (0, J.p4)({
                containerWidth: t,
                favoriteStickers: k,
                frequentlyUsedStickers: j,
                guildStickers: n,
                stickersTotal: l,
            }));
    }
    return (
        i.useEffect(
            () => () => {
                (B.bM.resetStoreState(), Y(!1));
            },
            [],
        ),
        i.useEffect(() => {
            ("" === S.current && "" !== x && (0, J.Fg)(), (S.current = x));
        }, [x]),
        i.useEffect(() => {
            0 === P ? t1(x) : t2(x, P, E);
        }, [x, P, E]),
        i.useLayoutEffect(() => {
            p.current?.focus();
        }, []),
        (0, l.jsxs)(W.f5, {
            value: c,
            children: [
                (0, l.jsx)("div", {
                    className: tH.wx,
                    children: (0, l.jsx)(tW, { ref: p, onKeyDown: eo, stickersListRef: f, channel: r }),
                }),
                b
                    ? (0, l.jsx)(eV, { className: tH.p$ })
                    : (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)("div", {
                                  ref: h,
                                  className: tH.AD,
                                  id: eL.lq,
                                  ...ea,
                                  children:
                                      null != I
                                          ? (0, l.jsx)(tP, {
                                                ref: f,
                                                collapsedStickersCategories: N,
                                                filteredStickers: T,
                                                getStickerItemProps: er,
                                                getStickerRowProps: es,
                                                gridWidth: I,
                                                gutterWidth: el,
                                                isUsingKeyboardNavigation: eu,
                                                onSelectSticker: D,
                                                rowCount: $,
                                                rowCountBySection: Q,
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
        (0, R.XQ)(),
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
    t9 = n(188567),
    t4 = n(49999),
    t7 = n(732139),
    ne = n(307731),
    nt = n(818625);
let nn = 498 + t7.as.MEDIUM,
    nl = i.memo(function (e) {
        let { isActive: t, className: n, viewType: i, autoFocus: r = !1, "aria-controls": a, ...o } = e;
        return (0, l.jsx)(f.D, {
            role: "tab",
            autoFocus: r,
            "aria-controls": t ? a : void 0,
            ...o,
            onClick: () => {
                (y.Ay.trackWithMetadata(ef.HAw.EXPRESSION_PICKER_TAB_CLICKED, { tab: i, badged: !1 }), (0, F.U)(i));
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
                onSelectSticker: O,
                onSelectSound: M,
                channel: L,
                type: P,
                position: D,
                align: U,
                positionLayerClassName: V,
                closeOnModalOuterClick: W = !1,
                parentModalKey: B,
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
                    f = (0, S.A)({
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
                orientation: "left" === U ? S.R.HORIZONTAL_RIGHT : S.R.HORIZONTAL_LEFT,
            }),
            Q = (0, F.RQ)((e) => e.activeView),
            Z = (0, R.ZO)(L),
            { renderWindow: X, windowDispatch: Y } = i.useContext(k.Ay),
            J = (0, d.bG)([w.A], () => !w.A.hasLoadedStickerPacks),
            ee = (0, j.t)({ location: "expression_picker" }),
            et = (0, I.H)("expression_picker");
        i.useEffect(() => {
            et && (0, v.Fp)();
        }, [et]);
        let en = (0, F.RQ)((e) => e.showEmojiPacks || null != e.showSelectedEmojiPackId),
            el = (0, d.bG)([t8.A], () => t8.A.isOpen()),
            ei = null != B,
            er = (0, m.LA)(B ?? ""),
            es = P.gifs?.allowSending && !u.Fr && null != a,
            ea = P.stickers?.allowSending && null != O,
            eo = !P.expressionPicker?.onlyEmojis && (es || ea),
            eu = P.expressionPicker?.emojiIntention ?? ne.EmojiIntention.CHAT,
            ec = et && (0, b.z)(eu),
            ed = ec && en,
            eh = eo && !ed,
            em = i.useCallback(
                (e) => {
                    if ((!ei && (0, m.ue)()) || (ei && !(er && W)) || el || e.defaultPrevented) return;
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
                        (0, F.v8)());
                    let n = (0, c.BF)(e)?.activeElement;
                    (null == n || "BODY" === n.tagName) && t9._.dispatchToLastSubscribed(ef.jej.TEXTAREA_FOCUS);
                },
                [W, er, ei, el],
            ),
            ex = i.useCallback(() => {
                (0, F.v8)();
            }, []);
        (i.useLayoutEffect(() => {
            function e() {
                Q === ep.kx.GIF && (0, F.v8)();
            }
            return (
                X.addEventListener("mousedown", em),
                X.addEventListener("contextmenu", em),
                Y.subscribe(ef.jej.POPOUT_CLOSE, ex),
                t9._.subscribe(ef.jej.CLOSE_GIF_PICKER, e),
                () => {
                    (X.removeEventListener("mousedown", em),
                        X.removeEventListener("contextmenu", em),
                        Y.unsubscribe(ef.jej.POPOUT_CLOSE, ex),
                        t9._.unsubscribe(ef.jej.CLOSE_GIF_PICKER, e));
                }
            );
        }, [Q, ex, em, X, Y]),
            (0, p.tj)(G, { returnRef: t }));
        let [eE, eS] = (0, A.kn)(ee ? [h.M.SOUNDMOJI_BADGE] : []),
            [ey, eA] = i.useState(!1);
        (i.useEffect(() => {
            Q === ep.kx.SOUNDBOARD && eA(!0);
        }, [Q]),
            i.useEffect(
                () => () => {
                    ey && eS(t4.i.TAKE_ACTION);
                },
                [ey, eS],
            ),
            i.useEffect(() => {
                (0, F.Ri)("");
            }, []),
            i.useEffect(() => {
                ((!ei && (0, m.ue)()) || (ei && !er)) && (0, F.v8)();
            }, [er, ei]),
            i.useEffect(() => {
                null != z.current &&
                    !K.current &&
                    (Q === ep.kx.EMOJI
                        ? H?.current?.onPickerOpen != null && (H?.current?.onPickerOpen(), (K.current = !0))
                        : Q === ep.kx.STICKER
                          ? H?.current?.onPickerOpen == null || J || (H?.current?.onPickerOpen(), (K.current = !0))
                          : (y.Ay.trackWithMetadata(ef.HAw.EXPRESSION_PICKER_OPENED, {
                                width: z.current.offsetWidth,
                                tab: Q,
                                badged: !1,
                            }),
                            (K.current = !0)));
            }));
        let eC = i.useCallback((e, t) => M?.(e, "soundboard_picker", t), [M]),
            eb = P.soundmoji?.allowSending === !0 && null != M,
            eI = "left" === U ? "right" : "left",
            ev = null != V ? V : "left" === U ? nt.sj : nt.Jg,
            eN = es
                ? (0, l.jsx)(nl, {
                      id: t7.g9,
                      "aria-controls": t7.ni,
                      "aria-selected": Q === ep.kx.GIF,
                      isActive: Q === ep.kx.GIF,
                      viewType: ep.kx.GIF,
                      children: eg.intl.string(eg.t["6gUTsS"]),
                  })
                : null,
            eT = ea
                ? (0, l.jsx)(nl, {
                      id: eL.LD,
                      "aria-controls": eL.GX,
                      "aria-selected": Q === ep.kx.STICKER,
                      isActive: Q === ep.kx.STICKER,
                      autoFocus: !Z,
                      viewType: ep.kx.STICKER,
                      children: (0, l.jsx)("div", { className: nt.dG, children: eg.intl.string(eg.t.nf1s3u) }),
                  })
                : null,
            ek = (0, l.jsx)(nl, {
                id: t7.k1,
                "aria-controls": t7.Do,
                "aria-selected": Q === ep.kx.EMOJI,
                isActive: Q === ep.kx.EMOJI,
                viewType: ep.kx.EMOJI,
                children: eg.intl.string(eg.t.Xu3wE3),
            });
        return (0, l.jsx)(E.A, {
            section: ef.JJy.EXPRESSION_PICKER,
            children: (0, l.jsx)(T.nE, {
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
                                      (0, l.jsx)("div", { className: nt.Di, onMouseDown: $, style: { [eI]: -2 } }),
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
                                                                eT,
                                                                ek,
                                                                ee &&
                                                                    eb &&
                                                                    (0, l.jsx)(nl, {
                                                                        id: t7.N6,
                                                                        "aria-controls": t7.AA,
                                                                        "aria-selected": Q === ep.kx.SOUNDBOARD,
                                                                        isActive: Q === ep.kx.SOUNDBOARD,
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
                                              Q === ep.kx.STICKER && ea
                                                  ? (0, l.jsx)(t3, {
                                                        isLoading: J,
                                                        channel: L,
                                                        containerWidth: q,
                                                        onSelectSticker: O,
                                                        closePopout: ex,
                                                        ref: (e) => {
                                                            H.current = e;
                                                        },
                                                    })
                                                  : null,
                                              Q === ep.kx.GIF && es
                                                  ? (0, l.jsx)(N.A, {
                                                        onSelectGIF: a,
                                                        hideFavorites: r,
                                                        persistSearch: !0,
                                                    })
                                                  : null,
                                              Q === ep.kx.EMOJI || P.expressionPicker?.onlyEmojis === !0
                                                  ? (0, l.jsx)(C.default, {
                                                        hasTabWrapper: !0,
                                                        persistSearch: !0,
                                                        channel: L,
                                                        containerWidth: q,
                                                        emojiSize: null != q && q < nn ? t7.as.MEDIUM : t7.as.LARGE,
                                                        pickerIntention: eu,
                                                        showAddEmojiButton: null == L || null != L.guild_id,
                                                        closePopout: ex,
                                                        onSelectEmoji: f,
                                                        ref: (e) => {
                                                            H.current = e;
                                                        },
                                                        isViewingEmojiPacks: ed,
                                                        onViewEmojiPacksChange: ec ? F.ke : void 0,
                                                    })
                                                  : null,
                                              Q === ep.kx.SOUNDBOARD
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
var ns = n(223705);
let na = 498 + t7.as.MEDIUM,
    no = i.memo(function (e) {
        let { isActive: t, className: n, viewType: i, autoFocus: r = !1, "aria-controls": a, ...o } = e;
        return (0, l.jsx)(f.D, {
            role: "tab",
            autoFocus: r,
            "aria-controls": t ? a : void 0,
            ...o,
            onClick: () => {
                (y.Ay.trackWithMetadata(ef.HAw.EXPRESSION_PICKER_TAB_CLICKED, { tab: i, badged: !1 }), (0, F.U)(i));
            },
            "aria-current": t ? "page" : void 0,
            className: s()(n, ns.oi, ns.pc, { [ns.Mv]: t }),
        });
    }),
    nu = i.memo(function (e) {
        let {
                returnRef: t,
                positionTargetRef: n,
                hideGifFavorites: r,
                onSelectGIF: a,
                onSelectEmoji: f,
                onSelectSticker: O,
                onSelectSound: M,
                channel: L,
                type: P,
                position: D,
                align: U,
                positionLayerClassName: V,
                closeOnModalOuterClick: W = !1,
                parentModalKey: B,
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
                    f = (0, S.A)({
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
                orientation: "left" === U ? S.R.HORIZONTAL_RIGHT : S.R.HORIZONTAL_LEFT,
            }),
            Q = (0, F.RQ)((e) => e.activeView),
            Z = (0, R.ZO)(L),
            { renderWindow: X, windowDispatch: Y } = i.useContext(k.Ay),
            J = (0, d.bG)([w.A], () => !w.A.hasLoadedStickerPacks),
            ee = (0, j.t)({ location: "expression_picker" }),
            et = (0, I.H)("expression_picker");
        i.useEffect(() => {
            et && (0, v.Fp)();
        }, [et]);
        let en = (0, F.RQ)((e) => e.showEmojiPacks || null != e.showSelectedEmojiPackId),
            el = (0, d.bG)([t8.A], () => t8.A.isOpen()),
            ei = null != B,
            er = (0, m.LA)(B ?? ""),
            es = P.gifs?.allowSending && !u.Fr && null != a,
            ea = P.stickers?.allowSending && null != O,
            eo = !P.expressionPicker?.onlyEmojis && (es || ea),
            eu = P.expressionPicker?.emojiIntention ?? ne.EmojiIntention.CHAT,
            ec = et && (0, b.z)(eu),
            ed = ec && en,
            eh = eo && !ed,
            em = i.useCallback(
                (e) => {
                    if ((!ei && (0, m.ue)()) || (ei && !(er && W)) || el || e.defaultPrevented) return;
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
                        (0, F.v8)());
                    let n = (0, c.BF)(e)?.activeElement;
                    (null == n || "BODY" === n.tagName) && t9._.dispatchToLastSubscribed(ef.jej.TEXTAREA_FOCUS);
                },
                [W, er, ei, el],
            ),
            ex = i.useCallback(() => {
                (0, F.v8)();
            }, []);
        (i.useLayoutEffect(() => {
            function e() {
                Q === ep.kx.GIF && (0, F.v8)();
            }
            return (
                X.addEventListener("mousedown", em),
                X.addEventListener("contextmenu", em),
                Y.subscribe(ef.jej.POPOUT_CLOSE, ex),
                t9._.subscribe(ef.jej.CLOSE_GIF_PICKER, e),
                () => {
                    (X.removeEventListener("mousedown", em),
                        X.removeEventListener("contextmenu", em),
                        Y.unsubscribe(ef.jej.POPOUT_CLOSE, ex),
                        t9._.unsubscribe(ef.jej.CLOSE_GIF_PICKER, e));
                }
            );
        }, [Q, ex, em, X, Y]),
            (0, p.tj)(G, { returnRef: t }));
        let [eE, eS] = (0, A.kn)(ee ? [h.M.SOUNDMOJI_BADGE] : []),
            [ey, eA] = i.useState(!1);
        (i.useEffect(() => {
            Q === ep.kx.SOUNDBOARD && eA(!0);
        }, [Q]),
            i.useEffect(
                () => () => {
                    ey && eS(t4.i.TAKE_ACTION);
                },
                [ey, eS],
            ),
            i.useEffect(() => {
                (0, F.Ri)("");
            }, []),
            i.useEffect(() => {
                ((!ei && (0, m.ue)()) || (ei && !er)) && (0, F.v8)();
            }, [er, ei]),
            i.useEffect(() => {
                null != z.current &&
                    !K.current &&
                    (Q === ep.kx.EMOJI
                        ? H?.current?.onPickerOpen != null && (H?.current?.onPickerOpen(), (K.current = !0))
                        : Q === ep.kx.STICKER
                          ? H?.current?.onPickerOpen == null || J || (H?.current?.onPickerOpen(), (K.current = !0))
                          : (y.Ay.trackWithMetadata(ef.HAw.EXPRESSION_PICKER_OPENED, {
                                width: z.current.offsetWidth,
                                tab: Q,
                                badged: !1,
                            }),
                            (K.current = !0)));
            }));
        let eC = i.useCallback((e, t) => M?.(e, "soundboard_picker", t), [M]),
            eb = P.soundmoji?.allowSending === !0 && null != M,
            eI = "left" === U ? "right" : "left",
            ev = null != V ? V : "left" === U ? ns.sj : ns.Jg,
            eN = es
                ? (0, l.jsx)(no, {
                      id: t7.g9,
                      "aria-controls": t7.ni,
                      "aria-selected": Q === ep.kx.GIF,
                      isActive: Q === ep.kx.GIF,
                      viewType: ep.kx.GIF,
                      children: eg.intl.string(eg.t["6gUTsS"]),
                  })
                : null,
            eT = ea
                ? (0, l.jsx)(no, {
                      id: eL.LD,
                      "aria-controls": eL.GX,
                      "aria-selected": Q === ep.kx.STICKER,
                      isActive: Q === ep.kx.STICKER,
                      autoFocus: !Z,
                      viewType: ep.kx.STICKER,
                      children: (0, l.jsx)("div", { className: ns.dG, children: eg.intl.string(eg.t.nf1s3u) }),
                  })
                : null,
            ek = (0, l.jsx)(no, {
                id: t7.k1,
                "aria-controls": t7.Do,
                "aria-selected": Q === ep.kx.EMOJI,
                isActive: Q === ep.kx.EMOJI,
                viewType: ep.kx.EMOJI,
                children: eg.intl.string(eg.t.Xu3wE3),
            });
        return (0, l.jsx)(E.A, {
            section: ef.JJy.EXPRESSION_PICKER,
            children: (0, l.jsx)(T.nE, {
                className: s()(ns.T8, ev),
                targetRef: n,
                position: D,
                align: U,
                spacing: 8,
                autoInvert: !0,
                clickTrap: !0,
                children: (e) => {
                    let { isPositioned: t } = e;
                    return (0, l.jsx)("section", {
                        className: s()(ns.V6, { [ns.D0]: !eo }),
                        ref: G,
                        role: "dialog",
                        "aria-label": eg.intl.string(eg.t.Utlwvi),
                        children: t
                            ? (0, l.jsxs)("div", {
                                  className: ns.jP,
                                  style: { width: null == q ? void 0 : q, [U]: 0 },
                                  ref: z,
                                  children: [
                                      (0, l.jsx)("div", { className: ns.Di, onMouseDown: $, style: { [eI]: -2 } }),
                                      (0, l.jsxs)("div", {
                                          className: s()(ns.FG, { [ns.$D]: ed }),
                                          children: [
                                              eh
                                                  ? (0, l.jsx)("nav", {
                                                        className: ns.C$,
                                                        children: (0, l.jsxs)("div", {
                                                            className: ns.CT,
                                                            role: "tablist",
                                                            "aria-label": eg.intl.string(eg.t["2j4Vgd"]),
                                                            children: [
                                                                eN,
                                                                eT,
                                                                ek,
                                                                ee &&
                                                                    eb &&
                                                                    (0, l.jsx)(no, {
                                                                        id: t7.N6,
                                                                        "aria-controls": t7.AA,
                                                                        "aria-selected": Q === ep.kx.SOUNDBOARD,
                                                                        isActive: Q === ep.kx.SOUNDBOARD,
                                                                        viewType: ep.kx.SOUNDBOARD,
                                                                        children: (0, l.jsxs)("div", {
                                                                            className: ns.sd,
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
                                              Q === ep.kx.STICKER && ea
                                                  ? (0, l.jsx)(t3, {
                                                        isLoading: J,
                                                        channel: L,
                                                        containerWidth: q,
                                                        onSelectSticker: O,
                                                        closePopout: ex,
                                                        ref: (e) => {
                                                            H.current = e;
                                                        },
                                                    })
                                                  : null,
                                              Q === ep.kx.GIF && es
                                                  ? (0, l.jsx)(N.A, {
                                                        onSelectGIF: a,
                                                        hideFavorites: r,
                                                        persistSearch: !0,
                                                    })
                                                  : null,
                                              Q === ep.kx.EMOJI || P.expressionPicker?.onlyEmojis === !0
                                                  ? (0, l.jsx)(C.default, {
                                                        hasTabWrapper: !0,
                                                        persistSearch: !0,
                                                        channel: L,
                                                        containerWidth: q,
                                                        emojiSize: null != q && q < na ? t7.as.MEDIUM : t7.as.LARGE,
                                                        pickerIntention: eu,
                                                        showAddEmojiButton: null == L || null != L.guild_id,
                                                        closePopout: ex,
                                                        onSelectEmoji: f,
                                                        ref: (e) => {
                                                            H.current = e;
                                                        },
                                                        isViewingEmojiPacks: ed,
                                                        onViewEmojiPacksChange: ec ? F.ke : void 0,
                                                    })
                                                  : null,
                                              Q === ep.kx.SOUNDBOARD
                                                  ? (0, l.jsx)("div", {
                                                        className: ns.z,
                                                        children: (0, l.jsx)(_.A, {
                                                            guildId: L.guild_id,
                                                            channel: L,
                                                            containerWidth: q,
                                                            onClose: ex,
                                                            onSelect: eC,
                                                            analyticsSource: "expression-picker",
                                                            renderHeader: (e) =>
                                                                (0, l.jsx)("div", { className: ns.BG, children: e }),
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
    });
function nc(e) {
    return nr.useConfig({ location: "expression_picker" }).enabled
        ? (0, l.jsx)(nu, { ...e })
        : (0, l.jsx)(ni, { ...e });
}
