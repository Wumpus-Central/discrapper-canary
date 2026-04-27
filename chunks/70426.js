r.d(t, { G: () => e_ }), r(321073);
var n = r(627968),
    s = r(64700),
    o = r(696292),
    l = r(17928),
    a = r(509434),
    i = r(939249),
    c = r(926268),
    d = r(34188),
    u = r(661531),
    _ = r(770178),
    b = r(742589),
    f = r(545986);
let C = (0, r(945810).mj)({
    name: "2026-03-slayer-storefront-shop-tab",
    kind: "user",
    defaultConfig: { enabled: !1, useGameShopsDropdown: !1 },
    variations: {
        0: { enabled: !1, useGameShopsDropdown: !1 },
        1: { enabled: !0, useGameShopsDropdown: !1 },
        2: { enabled: !0, useGameShopsDropdown: !0 },
    },
});
var p = r(44724),
    m = r(975732),
    h = r(318346),
    g = r(270051),
    S = r(70926),
    E = r(287809),
    x = r(954571),
    L = r(440938),
    I = r(23161),
    A = r(503698),
    v = r.n(A),
    y = r(477782),
    T = r(550079),
    O = r(146919),
    R = r(985018);
function w(e) {
    let { shops: t, onClose: r } = e,
        s = (0, O.yB)("CollectiblesGameShopsContextMenu");
    return (0, n.jsx)("div", {
        className: v()({ [O.jP]: s }),
        children: (0, n.jsx)(T.W, {
            "data-menu-migrated": !0,
            navId: "collectibles-game-shops-menu",
            className: v()({ [O.jP]: s }),
            onClose: r,
            "aria-label": R.intl.string(R.t.FkjcWY),
            onSelect: () => {},
            children: t.map((e) =>
                (0, n.jsx)(
                    y.Dr,
                    { id: e.id, label: e.label, trailingIndicator: { type: "icon", icon: a.I }, action: e.onSelect },
                    e.id,
                ),
            ),
        }),
    });
}
var k = r(641150),
    j = r(628284),
    M = r(758836);
let P = [
        { tab: M.G2.AVATAR_DECORATIONS, labelKey: R.t.dRZYNE },
        { tab: M.G2.PROFILE_EFFECTS, labelKey: R.t["1cNjtx"] },
        { tab: M.G2.NAMEPLATES, labelKey: R.t.V68Fqz },
        { tab: M.G2.BUNDLES, labelKey: R.t.FYFpps },
        { tab: M.G2.CATALOG, labelKey: R.t.xFcotU },
    ],
    N = {
        [k.q.ALL]: M.G2.CATALOG,
        [k.q.AVATAR_DECORATION]: M.G2.AVATAR_DECORATIONS,
        [k.q.PROFILE_EFFECT]: M.G2.PROFILE_EFFECTS,
        [k.q.NAMEPLATE]: M.G2.NAMEPLATES,
        [k.q.PROFILE_FRAME]: M.G2.PROFILE_FRAMES,
        [k.q.BUNDLE]: M.G2.BUNDLES,
    };
function G(e, t) {
    if (e !== M.G2.CATALOG || 0 === t.size) return e;
    let r = t.values().next().value;
    return null == r ? e : (N[r] ?? e);
}
function F(e) {
    let { handleTransition: t, onClose: r, selectedTab: s, itemTypeFilters: o } = e,
        l = (0, O.yB)("CollectiblesIndexPageContextMenu"),
        a = G(s, o);
    return (0, n.jsx)("div", {
        className: v()({ [O.jP]: l }),
        children: (0, n.jsx)(T.W, {
            "data-menu-migrated": !0,
            navId: "collectibles-index-page-menu",
            className: v()({ [O.jP]: l }),
            onClose: r,
            "aria-label": R.intl.string(R.t.xFcotU),
            onSelect: () => {},
            children: P.map((e) => {
                let { tab: r, labelKey: s } = e,
                    o = r === a;
                return (0, n.jsx)(
                    y.Dr,
                    {
                        id: r,
                        label: R.intl.string(s),
                        icon: o ? j.y : void 0,
                        leadingAccessory: o ? { type: "icon", icon: j.y } : void 0,
                        action: () => {
                            t(r);
                        },
                    },
                    r,
                );
            }),
        }),
    });
}
var B = r(7689),
    H = r(892547),
    V = r(773669),
    D = r(652215),
    $ = r(113960);
function q(e) {
    let { handleTransition: t, selectedTab: r, isNarrow: o, hasText: a } = e,
        { searchQuery: c, onSetSearchQuery: d } = (0, I.v)(),
        [_, b] = s.useState(""),
        f = (0, L.uM)(),
        C = (0, l.bG)([V.default], () => V.default.locale),
        p = s.useRef(null),
        [m, h] = s.useState(!1);
    s.useEffect(() => {
        let e = setTimeout(() => {
            d(_);
        }, 250);
        return () => clearTimeout(e);
    }, [_, d]),
        s.useEffect(() => {
            b(c);
        }, [c]),
        s.useEffect(() => {
            h(o && a);
        }, [o, a]);
    let g = s.useCallback(
            (e) => {
                "Enter" === e.key && d(_);
            },
            [_, d],
        ),
        S = s.useCallback(
            (e) => {
                x.default.track(D.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: f?.sessionId,
                    page_section: f?.pageSection,
                    page_category: f?.pageCategory,
                    page_index: f?.pageIndex,
                    page_size: f?.pageSize,
                    cta_name: e,
                    page_type: r,
                });
            },
            [r, f],
        ),
        E = s.useCallback(() => {
            r !== M.G2.CATALOG && t(M.G2.CATALOG), S(M.uY.SEARCH_ICON), h(!0), setTimeout(() => p.current?.focus());
        }, [r, t, S]),
        A = s.useCallback(() => {
            r !== M.G2.CATALOG && t(M.G2.CATALOG), S(M.uY.SEARCH_BAR);
        }, [r, t, S]),
        y = s.useCallback(() => {
            b(""), d(""), S(M.uY.SEARCH_BAR_CLEAR), o && h(!1);
        }, [d, S, o]),
        T = s.useCallback(() => {
            o && "" === _ && h(!1);
        }, [o, _]),
        O = o && !m,
        w = (0, n.jsx)(i.D, {
            className: $.qc,
            onClick: E,
            children: (0, n.jsx)(B.$, { size: "sm", color: u.A.colors.INTERACTIVE_ICON_DEFAULT }),
        }),
        k = (0, n.jsx)(H.I, {
            size: "sm",
            ref: p,
            onKeyDown: g,
            query: _,
            onChange: b,
            onClear: y,
            onBlur: T,
            placeholder: "en-US" === C ? R.intl.string(R.t.arz34K) : R.intl.string(R.t["hIt/Nm"]),
        }),
        j = { "--custom-search-bar-width": `${M.rr}px`, "--custom-search-bar-icon-width": `${M.Dy}px` };
    return O
        ? (0, n.jsx)("div", { style: j, children: w })
        : (0, n.jsx)("div", {
              className: v()($.ON, { [$.Nz]: m }),
              style: j,
              children: (0, n.jsx)(i.D, { ignoreKeyPress: !0, onClick: A, children: k }),
          });
}
var U = r(3666),
    z = r(834730),
    W = r(777666),
    K = r(761508),
    Y = r(922016),
    Z = r(900797),
    Q = r(847374),
    J = r(955572),
    X = r(775602),
    ee = r(421773);
function et(e) {
    let { tabs: t, selectedTab: r, onTabSelect: s, onClose: o, showOrbRentalNewBadge: l } = e;
    return (0, n.jsx)(T.W, {
        "data-menu-migrated-auto": !0,
        navId: "collectibles-shop-tabs-overflow-menu",
        "aria-label": R.intl.string(R.t["UKOtz+"]),
        hideScroller: !0,
        onClose: o,
        onSelect: o,
        children: (0, n.jsx)(
            y.rX,
            {
                children: t.map((e) => {
                    let { tab: t, label: a, renderOverflowContent: i } = e;
                    if (null != i) {
                        let e = t === r;
                        return (0, n.jsx)(
                            y.Dr,
                            {
                                id: t,
                                label: a,
                                icon: e ? j.y : void 0,
                                leadingAccessory: e ? { type: "icon", icon: j.y } : void 0,
                                hasSubmenu: !0,
                                children: i({ onClose: o }),
                            },
                            t,
                        );
                    }
                    let c = t === M.G2.ORBS && l;
                    return (0, n.jsx)(
                        y.Dr,
                        {
                            id: t,
                            label: a,
                            icon: t === r ? j.y : void 0,
                            leadingAccessory: t === r ? { type: "icon", icon: j.y } : void 0,
                            badge: c ? "new" : void 0,
                            action: () => s(t),
                        },
                        t,
                    );
                }),
            },
            "overflow-tabs",
        ),
    });
}
var er = r(584512);
function en(e) {
    let { label: t, icon: r, showNewBadge: s } = e;
    return (0, n.jsxs)(z.E, {
        variant: "text-md/medium",
        color: "none",
        children: [
            null != r
                ? (0, n.jsxs)("span", {
                      className: er.nt,
                      children: [t, (0, n.jsx)(r, { size: "xs", color: "currentColor" })],
                  })
                : t,
            s && (0, n.jsx)(W.Lp, { text: R.intl.string(R.t.y2b7CA), className: er.Ad }),
        ],
    });
}
function es(e) {
    let {
        tab: t,
        label: r,
        selected: s,
        handleTransition: o,
        renderSubmenu: l,
        submenuOnly: a,
        showNewBadge: i,
        icon: c,
    } = e;
    return null != l
        ? (0, n.jsx)(eo, { tab: t, label: r, selected: s, handleTransition: o, renderSubmenu: l, submenuOnly: a })
        : (0, n.jsx)(K.V.Item, {
              id: t,
              look: "brand",
              disableItemStyles: !0,
              selectedItem: s ? t : void 0,
              onClick: () => o(t),
              className: er.Mf,
              "aria-label": r,
              children: (0, n.jsx)(en, { label: r, icon: c, showNewBadge: i }),
          });
}
function eo(e) {
    let { tab: t, label: r, selected: o, handleTransition: l, renderSubmenu: a, submenuOnly: i } = e,
        c = s.useRef(null),
        d = s.useRef(!1),
        { isHovered: u, setIsHovered: _, onMouseEnter: b, onMouseLeave: f, cancelTimers: C } = (0, ee.A)(100, 100),
        p = s.useCallback(() => {
            (d.current = X.A.keyboardModeEnabled), b();
        }, [b]),
        m = s.useCallback(() => {
            C(), _(!0), (d.current = X.A.keyboardModeEnabled), i || l(t);
        }, [C, _, i, l, t]);
    return (0, n.jsx)(Y.Y, {
        targetElementRef: c,
        shouldShow: u,
        position: "bottom",
        align: "left",
        onRequestOpen: () => {
            C(), _(!0), (d.current = X.A.keyboardModeEnabled);
        },
        onRequestClose: () => {
            d.current && !X.A.keyboardModeEnabled && (0, J.uS)(),
                _(!1),
                requestAnimationFrame(() => c.current?.focus());
        },
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, n.jsx)("div", { onMouseEnter: b, onMouseLeave: f, children: a({ onClose: t }) });
        },
        children: (e, s) => {
            let { isShown: l } = s,
                a = l ? Z.t : Q.a;
            return (0, n.jsx)(K.V.Item, {
                ...e,
                id: t,
                look: "brand",
                disableItemStyles: !0,
                selectedItem: o ? t : void 0,
                onClick: m,
                clickableRef: (e) => {
                    null != e && null != e.ref && (c.current = e.ref);
                },
                className: er.Mf,
                "aria-label": r,
                children: (0, n.jsx)("div", {
                    "aria-hidden": "true",
                    className: er.Lj,
                    onMouseEnter: p,
                    onMouseLeave: f,
                    children: (0, n.jsx)(z.E, {
                        variant: "text-md/medium",
                        color: "none",
                        children: (0, n.jsxs)("span", {
                            className: er.hP,
                            children: [r, (0, n.jsx)(a, { size: "sm", color: "currentColor" })],
                        }),
                    }),
                }),
            });
        },
    });
}
function el(e) {
    let { onTabSelect: t, tabs: r, selectedTab: o, selected: l } = e,
        a = s.useRef(null),
        i = s.useRef(!1),
        { isHovered: c, setIsHovered: d, onMouseEnter: u, onMouseLeave: _, cancelTimers: b } = (0, ee.A)(100, 100),
        f = s.useCallback(() => {
            (i.current = X.A.keyboardModeEnabled), u();
        }, [u]),
        C = s.useCallback(() => {
            b(), d(!0), (i.current = X.A.keyboardModeEnabled);
        }, [b, d]);
    return (0, n.jsx)(Y.Y, {
        targetElementRef: a,
        shouldShow: c,
        position: "bottom",
        align: "left",
        onRequestOpen: () => {
            b(), d(!0), (i.current = X.A.keyboardModeEnabled);
        },
        onRequestClose: () => {
            i.current && !X.A.keyboardModeEnabled && (0, J.uS)(),
                d(!1),
                requestAnimationFrame(() => a.current?.focus());
        },
        renderPopout: (e) => {
            let { closePopout: s } = e;
            return (0, n.jsx)("div", {
                onMouseEnter: u,
                onMouseLeave: _,
                children: (0, n.jsx)(et, { selectedTab: o, onClose: s, tabs: r, onTabSelect: t }),
            });
        },
        children: (e, t) => {
            let { isShown: r } = t,
                s = r ? Z.t : Q.a;
            return (0, n.jsx)(K.V.Item, {
                ...e,
                id: "more",
                look: "brand",
                disableItemStyles: !0,
                selectedItem: l ? "more" : void 0,
                onClick: C,
                clickableRef: (e) => {
                    null != e && null != e.ref && (a.current = e.ref);
                },
                className: v()(er.Mf, er.OS),
                "aria-label": R.intl.string(R.t["UKOtz+"]),
                children: (0, n.jsx)("div", {
                    "aria-hidden": "true",
                    className: er.Lj,
                    onMouseEnter: f,
                    onMouseLeave: _,
                    children: (0, n.jsx)(z.E, {
                        variant: "text-md/medium",
                        color: "none",
                        children: (0, n.jsxs)("span", {
                            className: er.hP,
                            children: [R.intl.string(R.t["UKOtz+"]), (0, n.jsx)(s, { size: "xs" })],
                        }),
                    }),
                }),
            });
        },
    });
}
function ea(e, t, r) {
    return e === r || (null != t.renderSubmenu && (0, M.dF)(r) && e === M.G2.CATALOG);
}
function ei(e) {
    let { className: t, selectedTab: r, tabs: o, onTabSelect: l } = e,
        [a, i] = s.useState(0),
        c = s.useRef(a),
        {
            lastVisibleIndex: d,
            onItemLayout: u,
            overflowItemsRef: b,
        } = (0, U.Wv)({ items: o, itemGapPx: 32, maxLines: 1, containerWidth: a }),
        f = s.useMemo(() => o.slice(0, d + 1), [d, o]),
        C = s.useMemo(() => o.slice(d + 1), [d, o]),
        p = s.useRef(null),
        m = s.useCallback((e) => {
            let t = e.contentRect.width;
            null != t && c.current !== t && (i(t), (c.current = t));
        }, []);
    (0, _.g)(p, m);
    let h = 0 !== a,
        g = C.some((e) => ea(e.tab, e, r));
    return (0, n.jsxs)("div", {
        className: v()(er.kL, t),
        ref: p,
        children: [
            (0, n.jsxs)("div", {
                className: er.Kk,
                "aria-hidden": "true",
                children: [
                    o.map((e, t) =>
                        (0, n.jsx)(
                            U.Ae,
                            {
                                index: t,
                                onItemLayout: u,
                                children: (0, n.jsx)(es, {
                                    tab: e.tab,
                                    label: e.label,
                                    selected: ea(e.tab, e, r),
                                    handleTransition: l,
                                    renderSubmenu: e.renderSubmenu,
                                    submenuOnly: e.submenuOnly,
                                    icon: e.icon,
                                }),
                            },
                            e.tab,
                        ),
                    ),
                    (0, n.jsx)("div", {
                        ref: b,
                        children: (0, n.jsx)(el, { tabs: C, onTabSelect: l, selectedTab: r, selected: g }),
                    }),
                ],
            }),
            h &&
                (0, n.jsxs)(K.V, {
                    type: "top",
                    look: "brand",
                    selectedItem: r,
                    onItemSelect: l,
                    className: er.vR,
                    children: [
                        f.map((e) =>
                            (0, n.jsx)(
                                es,
                                {
                                    tab: e.tab,
                                    label: e.label,
                                    selected: ea(e.tab, e, r),
                                    handleTransition: l,
                                    renderSubmenu: e.renderSubmenu,
                                    submenuOnly: e.submenuOnly,
                                    icon: e.icon,
                                },
                                e.tab,
                            ),
                        ),
                        0 !== C.length
                            ? (0, n.jsx)(el, { tabs: C, onTabSelect: l, selectedTab: r, selected: g })
                            : null,
                    ],
                }),
        ],
    });
}
r(801416);
var ec = r(188275),
    ed = r(518477),
    eu = r(773743);
function e_(e) {
    let { selectedTab: t, handleTransition: r } = e,
        A = (0, l.bG)([E.default], () => E.default.getCurrentUser()),
        { enabled: v } = (0, g.Z)({ location: "collectibles_shop_header_bar" }),
        T = (function (e) {
            let { location: t } = e,
                { enabled: r, useGameShopsDropdown: n } = C.useConfig({ location: t });
            return r && !n;
        })({ location: "collectibles_shop_header_bar" }),
        O = (function (e) {
            let { location: t } = e,
                { enabled: r, useGameShopsDropdown: n } = C.useConfig({ location: t });
            return r && n;
        })({ location: "collectibles_shop_header_bar" }),
        k = (0, L.uM)(),
        { searchQuery: N, itemTypeFilters: B } = (0, I.v)(),
        H = s.useRef(null),
        [V, $] = s.useState(!1);
    (0, _.g)(
        H,
        s.useCallback((e) => {
            $(e.contentRect.width < 800);
        }, []),
    );
    let U = s.useCallback(() => {
            x.default.track(D.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                collectibles_shop_session_id: k?.sessionId,
                page_type: M.G2.RIVALS,
                page_category: k?.pageCategory,
                page_section: k?.pageSection,
                tile_type: "SOCIAL_LAYER_STOREFRONT_SHOP_TAB",
                cta_name: "go_to_game_shop",
            }),
                (0, p.default)({ guildId: ec.Kf }).catch(() => {});
        }, [k]),
        z = s.useMemo(() => {
            if (!O) return [];
            let e = [];
            return e.push({ id: M.G2.RIVALS, label: R.intl.string(R.t["kq/75v"]), onSelect: U }), e;
        }, [O, U]),
        W = z.length > 0,
        K = s.useMemo(() => {
            let e = [
                { tab: M.G2.HOME, label: R.intl.string(R.t["xNiB/O"]) },
                {
                    tab: M.G2.CATALOG,
                    label: R.intl.string(R.t.Ah5sJo),
                    renderSubmenu: (e) => {
                        let { onClose: s } = e;
                        return (0, n.jsx)(F, { handleTransition: r, onClose: s, selectedTab: t, itemTypeFilters: B });
                    },
                    renderOverflowContent: (e) => {
                        let { onClose: s } = e;
                        return (function (e) {
                            let { selectedTab: t, itemTypeFilters: r, onTabSelect: s, onClose: o } = e,
                                l = G(t, r);
                            return P.map((e) => {
                                let { tab: t, labelKey: r } = e,
                                    a = t === l;
                                return (0, n.jsx)(
                                    y.Dr,
                                    {
                                        id: t,
                                        label: R.intl.string(r),
                                        icon: a ? j.y : void 0,
                                        leadingAccessory: a ? { type: "icon", icon: j.y } : void 0,
                                        action: () => {
                                            s(t), o();
                                        },
                                    },
                                    t,
                                );
                            });
                        })({ selectedTab: t, itemTypeFilters: B, onTabSelect: r, onClose: s });
                    },
                },
            ];
            return (
                v && e.push({ tab: M.G2.ORBS, label: R.intl.string(R.t.EBYkzk) }),
                T
                    ? e.push({ tab: M.G2.RIVALS, label: R.intl.string(R.t["kq/75v"]), icon: a.I })
                    : W &&
                      e.push({
                          tab: M.G2.GAME_SHOPS,
                          label: R.intl.string(R.t.FkjcWY),
                          submenuOnly: !0,
                          renderSubmenu: (e) => {
                              let { onClose: t } = e;
                              return (0, n.jsx)(w, { shops: z, onClose: t });
                          },
                          renderOverflowContent: (e) => {
                              let { onClose: t } = e;
                              return (function (e) {
                                  let { shops: t, onClose: r } = e;
                                  return t.map((e) =>
                                      (0, n.jsx)(
                                          y.Dr,
                                          {
                                              id: e.id,
                                              label: e.label,
                                              trailingIndicator: { type: "icon", icon: a.I },
                                              action: () => {
                                                  e.onSelect(), r();
                                              },
                                          },
                                          e.id,
                                      ),
                                  );
                              })({ shops: z, onClose: t });
                          },
                      }),
                e
            );
        }, [v, T, W, r, z, t, B]),
        Y = t === M.G2.ORBS ? D.liQ.SHOP_ORBS_TAB : D.liQ.COLLECTIBLES_SHOP,
        Z = s.useCallback(() => {
            (0, h.Y)({ pageType: Y, sectionType: D.JJy.ORBS_BALANCE_MENU, ctaObject: D.ZSU.CTA_TO_QUEST_HOME }),
                (0, f.navigateToQuestHome)({ fromContent: o.u.ORBS_BALANCE_MENU });
        }, [Y]),
        Q = s.useCallback(() => {
            A?.id != null && (0, m.openUserProfileModal)({ userId: A.id, tabSection: ed.RP.WISHLIST });
        }, [A?.id]),
        J = s.useCallback(
            (e) => {
                e === M.G2.RIVALS ? U() : r(e);
            },
            [r, U],
        );
    return (0, n.jsx)("div", {
        ref: H,
        children: (0, n.jsxs)(b.A, {
            disableDoubleClick: !0,
            className: eu.jr,
            toolbar: (0, n.jsxs)(n.Fragment, {
                children: [
                    (0, n.jsx)(q, { handleTransition: r, selectedTab: t, isNarrow: V, hasText: "" !== N }),
                    (0, n.jsx)(i.D, {
                        className: eu.ij,
                        onClick: Q,
                        "aria-label": R.intl.string(R.t["7lZ31J"]),
                        children: (0, n.jsx)(c.C, { size: "xs", color: "currentColor" }),
                    }),
                    v &&
                        (0, n.jsx)(S.SS, {
                            analyticsPage: Y,
                            cardAlignment: S.SS.CardAlignment.END,
                            ctaText: R.intl.string(R.t.VC4Mq0),
                            ctaOnClick: Z,
                        }),
                ],
            }),
            hideSearch: !0,
            children: [
                (0, n.jsx)(i.D, {
                    className: eu.sU,
                    onClick: () => r(M.G2.HOME),
                    "aria-label": R.intl.string(R.t["5upuqx"]),
                    children: (0, n.jsx)(d.U, { size: "md", color: u.A.colors.TEXT_DEFAULT }),
                }),
                (0, n.jsx)(ei, { tabs: K, selectedTab: t, onTabSelect: J }),
            ],
        }),
    });
}
