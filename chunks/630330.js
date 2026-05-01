r.d(t, { G: () => eh }), r(321073);
var l = r(627968),
    s = r(64700),
    n = r(696292),
    a = r(17928),
    o = r(509434),
    i = r(939249),
    c = r(926268),
    u = r(34188),
    d = r(661531),
    b = r(770178),
    p = r(742589),
    m = r(545986);
let S = (0, r(945810).mj)({
    name: "2026-03-slayer-storefront-shop-tab",
    kind: "user",
    defaultConfig: { enabled: !1, useGameShopsDropdown: !1 },
    variations: {
        0: { enabled: !1, useGameShopsDropdown: !1 },
        1: { enabled: !0, useGameShopsDropdown: !1 },
        2: { enabled: !0, useGameShopsDropdown: !0 },
    },
});
var h = r(44724),
    E = r(975732),
    f = r(318346),
    C = r(270051),
    g = r(70926),
    A = r(287809),
    y = r(954571),
    T = r(440938),
    O = r(23161),
    _ = r(503698),
    x = r.n(_),
    I = r(477782),
    L = r(550079),
    R = r(146919),
    v = r(985018);
function j(e) {
    let { shops: t, onClose: r } = e,
        s = (0, R.yB)("CollectiblesGameShopsContextMenu");
    return (0, l.jsx)("div", {
        className: x()({ [R.jP]: s }),
        children: (0, l.jsx)(L.W, {
            "data-menu-migrated": !0,
            navId: "collectibles-game-shops-menu",
            className: x()({ [R.jP]: s }),
            onClose: r,
            "aria-label": v.intl.string(v.t.FkjcWY),
            onSelect: () => {},
            children: t.map((e) =>
                (0, l.jsx)(
                    I.Dr,
                    { id: e.id, label: e.label, trailingIndicator: { type: "icon", icon: o.I }, action: e.onSelect },
                    e.id,
                ),
            ),
        }),
    });
}
var G = r(641150),
    k = r(628284),
    N = r(758836);
let F = [
        { tab: N.G2.AVATAR_DECORATIONS, labelKey: v.t.dRZYNE },
        { tab: N.G2.PROFILE_EFFECTS, labelKey: v.t["1cNjtx"] },
        { tab: N.G2.NAMEPLATES, labelKey: v.t.V68Fqz },
        { tab: N.G2.BUNDLES, labelKey: v.t.FYFpps },
        { tab: N.G2.CATALOG, labelKey: v.t.xFcotU },
    ],
    P = {
        [G.q.ALL]: N.G2.CATALOG,
        [G.q.AVATAR_DECORATION]: N.G2.AVATAR_DECORATIONS,
        [G.q.PROFILE_EFFECT]: N.G2.PROFILE_EFFECTS,
        [G.q.NAMEPLATE]: N.G2.NAMEPLATES,
        [G.q.PROFILE_FRAME]: N.G2.PROFILE_FRAMES,
        [G.q.BUNDLE]: N.G2.BUNDLES,
    };
function M(e, t) {
    if (e !== N.G2.CATALOG || 0 === t.size) return e;
    let r = t.values().next().value;
    return null == r ? e : (P[r] ?? e);
}
function $(e) {
    let { handleTransition: t, onClose: r, selectedTab: s, itemTypeFilters: n } = e,
        a = (0, R.yB)("CollectiblesIndexPageContextMenu"),
        o = M(s, n);
    return (0, l.jsx)("div", {
        className: x()({ [R.jP]: a }),
        children: (0, l.jsx)(L.W, {
            "data-menu-migrated": !0,
            navId: "collectibles-index-page-menu",
            className: x()({ [R.jP]: a }),
            onClose: r,
            "aria-label": v.intl.string(v.t.xFcotU),
            onSelect: () => {},
            children: F.map((e) => {
                let { tab: r, labelKey: s } = e,
                    n = r === o;
                return (0, l.jsx)(
                    I.Dr,
                    {
                        id: r,
                        label: v.intl.string(s),
                        icon: n ? k.y : void 0,
                        leadingAccessory: n ? { type: "icon", icon: k.y } : void 0,
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
var D = r(7689),
    w = r(892547),
    B = r(773669),
    H = r(652215),
    q = r(113960);
function U(e) {
    let { handleTransition: t, selectedTab: r, isNarrow: n, hasText: o } = e,
        { searchQuery: c, onSetSearchQuery: u } = (0, O.v)(),
        [b, p] = s.useState(""),
        m = (0, T.uM)(),
        S = (0, a.bG)([B.default], () => B.default.locale),
        h = s.useRef(null),
        [E, f] = s.useState(!1);
    s.useEffect(() => {
        let e = setTimeout(() => {
            u(b);
        }, 250);
        return () => clearTimeout(e);
    }, [b, u]),
        s.useEffect(() => {
            p(c);
        }, [c]),
        s.useEffect(() => {
            f(n && o);
        }, [n, o]);
    let C = s.useCallback(
            (e) => {
                "Enter" === e.key && u(b);
            },
            [b, u],
        ),
        g = s.useCallback(
            (e) => {
                y.default.track(H.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: m?.sessionId,
                    page_section: m?.pageSection,
                    page_category: m?.pageCategory,
                    page_index: m?.pageIndex,
                    page_size: m?.pageSize,
                    cta_name: e,
                    page_type: r,
                });
            },
            [r, m],
        ),
        A = s.useCallback(() => {
            r !== N.G2.CATALOG && t(N.G2.CATALOG), g(N.uY.SEARCH_ICON), f(!0), setTimeout(() => h.current?.focus());
        }, [r, t, g]),
        _ = s.useCallback(() => {
            r !== N.G2.CATALOG && t(N.G2.CATALOG), g(N.uY.SEARCH_BAR);
        }, [r, t, g]),
        I = s.useCallback(() => {
            p(""), u(""), g(N.uY.SEARCH_BAR_CLEAR), n && f(!1);
        }, [u, g, n]),
        L = s.useCallback(() => {
            n && "" === b && f(!1);
        }, [n, b]),
        R = n && !E,
        j = (0, l.jsx)(i.D, {
            className: q.qc,
            onClick: A,
            children: (0, l.jsx)(D.$, { size: "sm", color: d.A.colors.INTERACTIVE_ICON_DEFAULT }),
        }),
        G = (0, l.jsx)(w.I, {
            size: "sm",
            ref: h,
            onKeyDown: C,
            query: b,
            onChange: p,
            onClear: I,
            onBlur: L,
            placeholder: "en-US" === S ? v.intl.string(v.t.arz34K) : v.intl.string(v.t["hIt/Nm"]),
        }),
        k = { "--custom-search-bar-width": `${N.rr}px`, "--custom-search-bar-icon-width": `${N.Dy}px` };
    return R
        ? (0, l.jsx)("div", { style: k, children: j })
        : (0, l.jsx)("div", {
              className: x()(q.ON, { [q.Nz]: E }),
              style: k,
              children: (0, l.jsx)(i.D, { ignoreKeyPress: !0, onClick: _, children: G }),
          });
}
var z = r(3666),
    V = r(834730),
    K = r(777666),
    Y = r(761508),
    W = r(922016),
    Q = r(900797),
    J = r(847374),
    X = r(955572),
    Z = r(775602),
    ee = r(421773);
function et(e) {
    let { tabs: t, selectedTab: r, onTabSelect: s, onClose: n, showOrbRentalNewBadge: a } = e;
    return (0, l.jsx)(L.W, {
        "data-menu-migrated-auto": !0,
        navId: "collectibles-shop-tabs-overflow-menu",
        "aria-label": v.intl.string(v.t["UKOtz+"]),
        hideScroller: !0,
        onClose: n,
        onSelect: n,
        children: (0, l.jsx)(
            I.rX,
            {
                children: t.map((e) => {
                    let { tab: t, label: o, renderOverflowContent: i } = e;
                    if (null != i) {
                        let e = t === r;
                        return (0, l.jsx)(
                            I.Dr,
                            {
                                id: t,
                                label: o,
                                icon: e ? k.y : void 0,
                                leadingAccessory: e ? { type: "icon", icon: k.y } : void 0,
                                hasSubmenu: !0,
                                children: i({ onClose: n }),
                            },
                            t,
                        );
                    }
                    let c = t === N.G2.ORBS && a;
                    return (0, l.jsx)(
                        I.Dr,
                        {
                            id: t,
                            label: o,
                            icon: t === r ? k.y : void 0,
                            leadingAccessory: t === r ? { type: "icon", icon: k.y } : void 0,
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
function el(e) {
    let { label: t, icon: r, showNewBadge: s } = e;
    return (0, l.jsxs)(V.E, {
        variant: "text-md/medium",
        color: "none",
        children: [
            null != r
                ? (0, l.jsxs)("span", {
                      className: er.nt,
                      children: [t, (0, l.jsx)(r, { size: "xs", color: "currentColor" })],
                  })
                : t,
            s && (0, l.jsx)(K.Lp, { text: v.intl.string(v.t.y2b7CA), className: er.Ad }),
        ],
    });
}
function es(e) {
    let {
        tab: t,
        label: r,
        selected: s,
        handleTransition: n,
        renderSubmenu: a,
        submenuOnly: o,
        showNewBadge: i,
        icon: c,
    } = e;
    return null != a
        ? (0, l.jsx)(en, { tab: t, label: r, selected: s, handleTransition: n, renderSubmenu: a, submenuOnly: o })
        : (0, l.jsx)(Y.V.Item, {
              id: t,
              look: "brand",
              disableItemStyles: !0,
              selectedItem: s ? t : void 0,
              onClick: () => n(t),
              className: er.Mf,
              "aria-label": r,
              children: (0, l.jsx)(el, { label: r, icon: c, showNewBadge: i }),
          });
}
function en(e) {
    let { tab: t, label: r, selected: n, handleTransition: a, renderSubmenu: o, submenuOnly: i } = e,
        c = s.useRef(null),
        u = s.useRef(!1),
        { isHovered: d, setIsHovered: b, onMouseEnter: p, onMouseLeave: m, cancelTimers: S } = (0, ee.A)(100, 100),
        h = s.useCallback(() => {
            (u.current = Z.A.keyboardModeEnabled), p();
        }, [p]),
        E = s.useCallback(() => {
            S(), b(!0), (u.current = Z.A.keyboardModeEnabled), i || a(t);
        }, [S, b, i, a, t]);
    return (0, l.jsx)(W.Y, {
        targetElementRef: c,
        shouldShow: d,
        position: "bottom",
        align: "left",
        onRequestOpen: () => {
            S(), b(!0), (u.current = Z.A.keyboardModeEnabled);
        },
        onRequestClose: () => {
            u.current && !Z.A.keyboardModeEnabled && (0, X.uS)(),
                b(!1),
                requestAnimationFrame(() => c.current?.focus());
        },
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, l.jsx)("div", { onMouseEnter: p, onMouseLeave: m, children: o({ onClose: t }) });
        },
        children: (e, s) => {
            let { isShown: a } = s,
                o = a ? Q.t : J.a;
            return (0, l.jsx)(Y.V.Item, {
                ...e,
                id: t,
                look: "brand",
                disableItemStyles: !0,
                selectedItem: n ? t : void 0,
                onClick: E,
                clickableRef: (e) => {
                    null != e && null != e.ref && (c.current = e.ref);
                },
                className: er.Mf,
                "aria-label": r,
                children: (0, l.jsx)("div", {
                    "aria-hidden": "true",
                    className: er.Lj,
                    onMouseEnter: h,
                    onMouseLeave: m,
                    children: (0, l.jsx)(V.E, {
                        variant: "text-md/medium",
                        color: "none",
                        children: (0, l.jsxs)("span", {
                            className: er.hP,
                            children: [r, (0, l.jsx)(o, { size: "sm", color: "currentColor" })],
                        }),
                    }),
                }),
            });
        },
    });
}
function ea(e) {
    let { onTabSelect: t, tabs: r, selectedTab: n, selected: a } = e,
        o = s.useRef(null),
        i = s.useRef(!1),
        { isHovered: c, setIsHovered: u, onMouseEnter: d, onMouseLeave: b, cancelTimers: p } = (0, ee.A)(100, 100),
        m = s.useCallback(() => {
            (i.current = Z.A.keyboardModeEnabled), d();
        }, [d]),
        S = s.useCallback(() => {
            p(), u(!0), (i.current = Z.A.keyboardModeEnabled);
        }, [p, u]);
    return (0, l.jsx)(W.Y, {
        targetElementRef: o,
        shouldShow: c,
        position: "bottom",
        align: "left",
        onRequestOpen: () => {
            p(), u(!0), (i.current = Z.A.keyboardModeEnabled);
        },
        onRequestClose: () => {
            i.current && !Z.A.keyboardModeEnabled && (0, X.uS)(),
                u(!1),
                requestAnimationFrame(() => o.current?.focus());
        },
        renderPopout: (e) => {
            let { closePopout: s } = e;
            return (0, l.jsx)("div", {
                onMouseEnter: d,
                onMouseLeave: b,
                children: (0, l.jsx)(et, { selectedTab: n, onClose: s, tabs: r, onTabSelect: t }),
            });
        },
        children: (e, t) => {
            let { isShown: r } = t,
                s = r ? Q.t : J.a;
            return (0, l.jsx)(Y.V.Item, {
                ...e,
                id: "more",
                look: "brand",
                disableItemStyles: !0,
                selectedItem: a ? "more" : void 0,
                onClick: S,
                clickableRef: (e) => {
                    null != e && null != e.ref && (o.current = e.ref);
                },
                className: x()(er.Mf, er.OS),
                "aria-label": v.intl.string(v.t["UKOtz+"]),
                children: (0, l.jsx)("div", {
                    "aria-hidden": "true",
                    className: er.Lj,
                    onMouseEnter: m,
                    onMouseLeave: b,
                    children: (0, l.jsx)(V.E, {
                        variant: "text-md/medium",
                        color: "none",
                        children: (0, l.jsxs)("span", {
                            className: er.hP,
                            children: [v.intl.string(v.t["UKOtz+"]), (0, l.jsx)(s, { size: "xs" })],
                        }),
                    }),
                }),
            });
        },
    });
}
function eo(e, t, r) {
    return e === r || (null != t.renderSubmenu && (0, N.dF)(r) && e === N.G2.CATALOG);
}
function ei(e) {
    let { className: t, selectedTab: r, tabs: n, onTabSelect: a } = e,
        [o, i] = s.useState(0),
        c = s.useRef(o),
        {
            lastVisibleIndex: u,
            onItemLayout: d,
            overflowItemsRef: p,
        } = (0, z.Wv)({ items: n, itemGapPx: 32, maxLines: 1, containerWidth: o }),
        m = s.useMemo(() => n.slice(0, u + 1), [u, n]),
        S = s.useMemo(() => n.slice(u + 1), [u, n]),
        h = s.useRef(null),
        E = s.useCallback((e) => {
            let t = e.contentRect.width;
            null != t && c.current !== t && (i(t), (c.current = t));
        }, []);
    (0, b.g)(h, E);
    let f = 0 !== o,
        C = S.some((e) => eo(e.tab, e, r));
    return (0, l.jsxs)("div", {
        className: x()(er.kL, t),
        ref: h,
        children: [
            (0, l.jsxs)("div", {
                className: er.Kk,
                "aria-hidden": "true",
                children: [
                    n.map((e, t) =>
                        (0, l.jsx)(
                            z.Ae,
                            {
                                index: t,
                                onItemLayout: d,
                                children: (0, l.jsx)(es, {
                                    tab: e.tab,
                                    label: e.label,
                                    selected: eo(e.tab, e, r),
                                    handleTransition: a,
                                    renderSubmenu: e.renderSubmenu,
                                    submenuOnly: e.submenuOnly,
                                    icon: e.icon,
                                }),
                            },
                            e.tab,
                        ),
                    ),
                    (0, l.jsx)("div", {
                        ref: p,
                        children: (0, l.jsx)(ea, { tabs: S, onTabSelect: a, selectedTab: r, selected: C }),
                    }),
                ],
            }),
            f &&
                (0, l.jsxs)(Y.V, {
                    type: "top",
                    look: "brand",
                    selectedItem: r,
                    onItemSelect: a,
                    className: er.vR,
                    children: [
                        m.map((e) =>
                            (0, l.jsx)(
                                es,
                                {
                                    tab: e.tab,
                                    label: e.label,
                                    selected: eo(e.tab, e, r),
                                    handleTransition: a,
                                    renderSubmenu: e.renderSubmenu,
                                    submenuOnly: e.submenuOnly,
                                    icon: e.icon,
                                },
                                e.tab,
                            ),
                        ),
                        0 !== S.length
                            ? (0, l.jsx)(ea, { tabs: S, onTabSelect: a, selectedTab: r, selected: C })
                            : null,
                    ],
                }),
        ],
    });
}
var ec = r(627363),
    eu = r(587895),
    ed = r(733391),
    eb = r(832163);
r(801416);
var ep = r(188275),
    em = r(518477),
    eS = r(773743);
function eh(e) {
    let { selectedTab: t, handleTransition: r } = e,
        _ = (0, a.bG)([A.default], () => A.default.getCurrentUser()),
        { enabled: x } = (0, C.Z)({ location: "collectibles_shop_header_bar" }),
        L = (function (e) {
            let { location: t } = e,
                { enabled: r, useGameShopsDropdown: l } = S.useConfig({ location: t });
            return r && !l;
        })({ location: "collectibles_shop_header_bar" }),
        R = (function (e) {
            let { location: t } = e,
                { enabled: r, useGameShopsDropdown: l } = S.useConfig({ location: t });
            return r && l;
        })({ location: "collectibles_shop_header_bar" }),
        G = (0, T.uM)(),
        { searchQuery: P, itemTypeFilters: D } = (0, O.v)(),
        w = s.useRef(null),
        [B, q] = s.useState(!1);
    (0, b.g)(
        w,
        s.useCallback((e) => {
            q(e.contentRect.width < 800);
        }, []),
    );
    let z = s.useCallback(() => {
            y.default.track(H.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                collectibles_shop_session_id: G?.sessionId,
                page_type: N.G2.RIVALS,
                page_category: G?.pageCategory,
                page_section: G?.pageSection,
                tile_type: "SOCIAL_LAYER_STOREFRONT_SHOP_TAB",
                cta_name: "go_to_game_shop",
            }),
                (0, h.default)({ guildId: ep.Kf }).catch(() => {});
        }, [G]),
        V = (function (e) {
            let { enabled: t } = e,
                r = (0, T.uM)(),
                l = (0, a.yK)(
                    [eb.A],
                    () =>
                        t
                            ? (eb.A.getConfig()?.storefronts ?? []).filter((e) => e.collectiblesShopNavigationEnabled)
                            : [],
                    [t],
                );
            s.useEffect(() => {
                t && (0, ed.Xw)();
            }, [t]),
                s.useEffect(() => {
                    l.length > 0 &&
                        ec.Ay.fetchApplications(
                            l.map((e) => e.applicationId),
                            !1,
                        );
                }, [l]);
            let n = s.useCallback(
                (e) => {
                    y.default.track(H.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: r?.sessionId,
                        page_type: N.G2.GAME_SHOPS,
                        page_category: r?.pageCategory,
                        page_section: r?.pageSection,
                        tile_type: "SOCIAL_LAYER_STOREFRONT_SHOP_TAB",
                        cta_name: "go_to_game_shop",
                    }),
                        (0, h.default)({ guildId: e }).catch(() => {});
                },
                [r],
            );
            return (0, a.bG)(
                [eu.A],
                () =>
                    l.flatMap((e) => {
                        let t = eu.A.getApplication(e.applicationId)?.name;
                        return null == t ? [] : [{ id: e.guildId, label: t, onSelect: () => n(e.guildId) }];
                    }),
                [l, n],
            );
        })({ enabled: R }),
        K = V.length > 0,
        Y = s.useMemo(() => {
            let e = [
                { tab: N.G2.HOME, label: v.intl.string(v.t["xNiB/O"]) },
                {
                    tab: N.G2.CATALOG,
                    label: v.intl.string(v.t.Ah5sJo),
                    renderSubmenu: (e) => {
                        let { onClose: s } = e;
                        return (0, l.jsx)($, { handleTransition: r, onClose: s, selectedTab: t, itemTypeFilters: D });
                    },
                    renderOverflowContent: (e) => {
                        let { onClose: s } = e;
                        return (function (e) {
                            let { selectedTab: t, itemTypeFilters: r, onTabSelect: s, onClose: n } = e,
                                a = M(t, r);
                            return F.map((e) => {
                                let { tab: t, labelKey: r } = e,
                                    o = t === a;
                                return (0, l.jsx)(
                                    I.Dr,
                                    {
                                        id: t,
                                        label: v.intl.string(r),
                                        icon: o ? k.y : void 0,
                                        leadingAccessory: o ? { type: "icon", icon: k.y } : void 0,
                                        action: () => {
                                            s(t), n();
                                        },
                                    },
                                    t,
                                );
                            });
                        })({ selectedTab: t, itemTypeFilters: D, onTabSelect: r, onClose: s });
                    },
                },
            ];
            return (
                x && e.push({ tab: N.G2.ORBS, label: v.intl.string(v.t.EBYkzk) }),
                L
                    ? e.push({ tab: N.G2.RIVALS, label: v.intl.string(v.t["kq/75v"]), icon: o.I })
                    : K &&
                      e.push({
                          tab: N.G2.GAME_SHOPS,
                          label: v.intl.string(v.t.FkjcWY),
                          submenuOnly: !0,
                          renderSubmenu: (e) => {
                              let { onClose: t } = e;
                              return (0, l.jsx)(j, { shops: V, onClose: t });
                          },
                          renderOverflowContent: (e) => {
                              let { onClose: t } = e;
                              return (function (e) {
                                  let { shops: t, onClose: r } = e;
                                  return t.map((e) =>
                                      (0, l.jsx)(
                                          I.Dr,
                                          {
                                              id: e.id,
                                              label: e.label,
                                              trailingIndicator: { type: "icon", icon: o.I },
                                              action: () => {
                                                  e.onSelect(), r();
                                              },
                                          },
                                          e.id,
                                      ),
                                  );
                              })({ shops: V, onClose: t });
                          },
                      }),
                e
            );
        }, [x, L, K, r, V, t, D]),
        W = t === N.G2.ORBS ? H.liQ.SHOP_ORBS_TAB : H.liQ.COLLECTIBLES_SHOP,
        Q = s.useCallback(() => {
            (0, f.Y)({ pageType: W, sectionType: H.JJy.ORBS_BALANCE_MENU, ctaObject: H.ZSU.CTA_TO_QUEST_HOME }),
                (0, m.navigateToQuestHome)({ fromContent: n.u.ORBS_BALANCE_MENU });
        }, [W]),
        J = s.useCallback(() => {
            _?.id != null && (0, E.openUserProfileModal)({ userId: _.id, tabSection: em.RP.WISHLIST });
        }, [_?.id]),
        X = s.useCallback(
            (e) => {
                e === N.G2.RIVALS ? z() : r(e);
            },
            [r, z],
        );
    return (0, l.jsx)("div", {
        ref: w,
        children: (0, l.jsxs)(p.A, {
            disableDoubleClick: !0,
            className: eS.jr,
            toolbar: (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)(U, { handleTransition: r, selectedTab: t, isNarrow: B, hasText: "" !== P }),
                    (0, l.jsx)(i.D, {
                        className: eS.ij,
                        onClick: J,
                        "aria-label": v.intl.string(v.t["7lZ31J"]),
                        children: (0, l.jsx)(c.C, { size: "xs", color: "currentColor" }),
                    }),
                    x &&
                        (0, l.jsx)(g.SS, {
                            analyticsPage: W,
                            cardAlignment: g.SS.CardAlignment.END,
                            ctaText: v.intl.string(v.t.VC4Mq0),
                            ctaOnClick: Q,
                        }),
                ],
            }),
            hideSearch: !0,
            children: [
                (0, l.jsx)(i.D, {
                    className: eS.sU,
                    onClick: () => r(N.G2.HOME),
                    "aria-label": v.intl.string(v.t["5upuqx"]),
                    children: (0, l.jsx)(u.U, { size: "md", color: d.A.colors.TEXT_DEFAULT }),
                }),
                (0, l.jsx)(ei, { tabs: Y, selectedTab: t, onTabSelect: X }),
            ],
        }),
    });
}
