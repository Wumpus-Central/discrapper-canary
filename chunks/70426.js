r.d(t, { G: () => ei }), r(321073);
var n = r(627968),
    s = r(64700),
    l = r(696292),
    a = r(17928),
    o = r(509434),
    i = r(939249),
    c = r(926268),
    d = r(34188),
    u = r(661531),
    _ = r(770178),
    b = r(742589),
    p = r(545986);
let m = (0, r(945810).mj)({
    name: "2026-03-slayer-storefront-shop-tab",
    kind: "user",
    defaultConfig: { enabled: !1, useGameShopsDropdown: !1 },
    variations: {
        0: { enabled: !1, useGameShopsDropdown: !1 },
        1: { enabled: !0, useGameShopsDropdown: !1 },
        2: { enabled: !0, useGameShopsDropdown: !0 },
    },
});
var f = r(44724),
    C = r(975732),
    g = r(318346),
    h = r(270051),
    S = r(70926),
    E = r(287809),
    A = r(954571),
    x = r(440938),
    y = r(23161),
    I = r(503698),
    T = r.n(I),
    v = r(477782),
    O = r(550079),
    L = r(146919),
    R = r(985018);
function w(e) {
    let { shops: t, onClose: r } = e,
        s = (0, L.yB)("CollectiblesGameShopsContextMenu");
    return (0, n.jsx)("div", {
        className: T()({ [L.jP]: s }),
        children: (0, n.jsx)(O.W, {
            "data-menu-migrated": !0,
            navId: "collectibles-game-shops-menu",
            className: T()({ [L.jP]: s }),
            onClose: r,
            "aria-label": R.intl.string(R.t.FkjcWY),
            onSelect: () => {},
            children: t.map((e) =>
                (0, n.jsx)(
                    v.Dr,
                    { id: e.id, label: e.label, trailingIndicator: { type: "icon", icon: o.I }, action: e.onSelect },
                    e.id,
                ),
            ),
        }),
    });
}
var k = r(641150),
    j = r(628284),
    G = r(758836);
let N = [
        { tab: G.G2.AVATAR_DECORATIONS, labelKey: R.t.dRZYNE },
        { tab: G.G2.PROFILE_EFFECTS, labelKey: R.t["1cNjtx"] },
        { tab: G.G2.NAMEPLATES, labelKey: R.t.V68Fqz },
        { tab: G.G2.BUNDLES, labelKey: R.t.FYFpps },
        { tab: G.G2.CATALOG, labelKey: R.t.xFcotU },
    ],
    P = {
        [k.q.ALL]: G.G2.CATALOG,
        [k.q.AVATAR_DECORATION]: G.G2.AVATAR_DECORATIONS,
        [k.q.PROFILE_EFFECT]: G.G2.PROFILE_EFFECTS,
        [k.q.NAMEPLATE]: G.G2.NAMEPLATES,
        [k.q.BUNDLE]: G.G2.BUNDLES,
    };
function F(e) {
    let { handleTransition: t, onClose: r } = e,
        l = (0, L.yB)("CollectiblesIndexPageContextMenu"),
        a = s.useMemo(
            () => [
                { label: R.intl.string(R.t.dRZYNE), value: G.G2.AVATAR_DECORATIONS },
                { label: R.intl.string(R.t["1cNjtx"]), value: G.G2.PROFILE_EFFECTS },
                { label: R.intl.string(R.t.V68Fqz), value: G.G2.NAMEPLATES },
                { label: R.intl.string(R.t.FYFpps), value: G.G2.BUNDLES },
                { label: R.intl.string(R.t.xFcotU), value: G.G2.CATALOG },
            ],
            [],
        );
    return (0, n.jsx)("div", {
        className: T()({ [L.jP]: l }),
        children: (0, n.jsx)(O.W, {
            "data-menu-migrated": !0,
            navId: "collectibles-index-page-menu",
            className: T()({ [L.jP]: l }),
            onClose: r,
            "aria-label": R.intl.string(R.t.xFcotU),
            onSelect: () => {},
            children: a.map((e) =>
                (0, n.jsx)(
                    v.Dr,
                    {
                        id: e.value,
                        label: e.label,
                        action: () => {
                            t(e.value);
                        },
                    },
                    e.value,
                ),
            ),
        }),
    });
}
var M = r(7689),
    B = r(892547),
    D = r(773669),
    $ = r(652215),
    H = r(113960);
function V(e) {
    let { handleTransition: t, selectedTab: r, isNarrow: l, hasText: o } = e,
        { searchQuery: c, onSetSearchQuery: d } = (0, y.v)(),
        [_, b] = s.useState(""),
        p = (0, x.uM)(),
        m = (0, a.bG)([D.default], () => D.default.locale),
        f = s.useRef(null),
        [C, g] = s.useState(!1);
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
            g(l && o);
        }, [l, o]);
    let h = s.useCallback(
            (e) => {
                "Enter" === e.key && d(_);
            },
            [_, d],
        ),
        S = s.useCallback(
            (e) => {
                A.default.track($.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: p?.sessionId,
                    page_section: p?.pageSection,
                    page_category: p?.pageCategory,
                    page_index: p?.pageIndex,
                    page_size: p?.pageSize,
                    cta_name: e,
                    page_type: r,
                });
            },
            [r, p],
        ),
        E = s.useCallback(() => {
            r !== G.G2.CATALOG && t(G.G2.CATALOG), S(G.uY.SEARCH_ICON), g(!0), setTimeout(() => f.current?.focus());
        }, [r, t, S]),
        I = s.useCallback(() => {
            r !== G.G2.CATALOG && t(G.G2.CATALOG), S(G.uY.SEARCH_BAR);
        }, [r, t, S]),
        v = s.useCallback(() => {
            b(""), d(""), S(G.uY.SEARCH_BAR_CLEAR), l && g(!1);
        }, [d, S, l]),
        O = s.useCallback(() => {
            l && "" === _ && g(!1);
        }, [l, _]),
        L = l && !C,
        w = (0, n.jsx)(i.D, {
            className: H.qc,
            onClick: E,
            children: (0, n.jsx)(M.$, { size: "sm", color: u.A.colors.INTERACTIVE_ICON_DEFAULT }),
        }),
        k = (0, n.jsx)(B.I, {
            size: "sm",
            ref: f,
            onKeyDown: h,
            query: _,
            onChange: b,
            onClear: v,
            onBlur: O,
            placeholder: "en-US" === m ? R.intl.string(R.t.arz34K) : R.intl.string(R.t["hIt/Nm"]),
        }),
        j = { "--custom-search-bar-width": `${G.rr}px`, "--custom-search-bar-icon-width": `${G.Dy}px` };
    return L
        ? (0, n.jsx)("div", { style: j, children: w })
        : (0, n.jsx)("div", {
              className: T()(H.ON, { [H.Nz]: C }),
              style: j,
              children: (0, n.jsx)(i.D, { ignoreKeyPress: !0, onClick: I, children: k }),
          });
}
var q = r(3666),
    U = r(777666),
    z = r(922016),
    K = r(900797),
    Y = r(847374),
    W = r(955572),
    Q = r(775602),
    Z = r(421773);
function J(e) {
    let { tabs: t, selectedTab: r, onTabSelect: s, onClose: l, showOrbRentalNewBadge: a } = e;
    return (0, n.jsx)(O.W, {
        "data-menu-migrated-auto": !0,
        navId: "collectibles-shop-tabs-overflow-menu",
        "aria-label": R.intl.string(R.t["UKOtz+"]),
        hideScroller: !0,
        onClose: l,
        onSelect: l,
        children: (0, n.jsx)(
            v.rX,
            {
                children: t.map((e) => {
                    let { tab: t, label: o, renderOverflowContent: i } = e;
                    if (null != i) {
                        let e = t === r;
                        return (0, n.jsx)(
                            v.Dr,
                            {
                                id: t,
                                label: o,
                                icon: e ? j.y : void 0,
                                leadingAccessory: e ? { type: "icon", icon: j.y } : void 0,
                                hasSubmenu: !0,
                                children: i({ onClose: l }),
                            },
                            t,
                        );
                    }
                    let c = t === G.G2.ORBS && a;
                    return (0, n.jsx)(
                        v.Dr,
                        {
                            id: t,
                            label: o,
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
var X = r(584512);
function ee(e) {
    let {
        tab: t,
        label: r,
        selected: s,
        handleTransition: l,
        renderSubmenu: a,
        submenuOnly: o,
        showNewBadge: i,
        icon: c,
    } = e;
    return null != a
        ? (0, n.jsx)(et, { tab: t, label: r, selected: s, handleTransition: l, renderSubmenu: a, submenuOnly: o })
        : (0, n.jsxs)(b.A.Title, {
              onClick: () => l(t),
              wrapperClassName: X.Vn,
              className: T()(X.Mf, { [X.wH]: s }),
              children: [
                  null != c
                      ? (0, n.jsxs)("span", {
                            className: X.nt,
                            children: [r, (0, n.jsx)(c, { size: "xs", color: "currentColor" })],
                        })
                      : r,
                  i && (0, n.jsx)(U.Lp, { text: R.intl.string(R.t.y2b7CA), className: X.Ad }),
              ],
          });
}
function et(e) {
    let { tab: t, label: r, selected: l, handleTransition: a, renderSubmenu: o, submenuOnly: i } = e,
        c = s.useRef(null),
        d = s.useRef(!1),
        { isHovered: u, setIsHovered: _, onMouseEnter: p, onMouseLeave: m, cancelTimers: f } = (0, Z.A)(100, 100),
        C = (e) => {
            ("Enter" === e.key || " " === e.key) &&
                (e.preventDefault(), f(), _(!0), (d.current = Q.A.keyboardModeEnabled));
        },
        g = s.useCallback(() => {
            (d.current = Q.A.keyboardModeEnabled), p();
        }, [p]);
    return (0, n.jsx)("div", {
        className: X.iV,
        onMouseEnter: g,
        onMouseLeave: m,
        children: (0, n.jsx)(z.Y, {
            targetElementRef: c,
            shouldShow: u,
            position: "bottom",
            align: "left",
            onRequestOpen: () => {
                f(), _(!0), (d.current = Q.A.keyboardModeEnabled);
            },
            onRequestClose: () => {
                d.current && !Q.A.keyboardModeEnabled && (0, W.uS)(), _(!1), c.current?.focus();
            },
            renderPopout: (e) => {
                let { closePopout: t } = e;
                return (0, n.jsx)("div", { onMouseEnter: p, onMouseLeave: m, children: o({ onClose: t }) });
            },
            children: (e, s) => {
                let { isShown: o } = s,
                    d = o ? K.t : Y.a;
                return (0, n.jsx)(b.A.Title, {
                    ...e,
                    ref: c,
                    onClick: i ? void 0 : () => a(t),
                    onKeyDown: C,
                    wrapperClassName: X.Vn,
                    className: T()(X.Mf, { [X.wH]: l }),
                    children: (0, n.jsxs)("span", {
                        className: X.hP,
                        children: [r, (0, n.jsx)(d, { size: "sm", color: "currentColor" })],
                    }),
                });
            },
        }),
    });
}
function er(e) {
    let { onTabSelect: t, tabs: r, selectedTab: l, selected: a } = e,
        o = s.useRef(null),
        i = s.useRef(!1),
        { isHovered: c, setIsHovered: d, onMouseEnter: u, onMouseLeave: _, cancelTimers: p } = (0, Z.A)(100, 100),
        m = (e) => {
            ("Enter" === e.key || " " === e.key) &&
                (e.preventDefault(), p(), d(!0), (i.current = Q.A.keyboardModeEnabled));
        },
        f = s.useCallback(() => {
            (i.current = Q.A.keyboardModeEnabled), u();
        }, [u]);
    return (0, n.jsx)("div", {
        className: X.iV,
        onMouseEnter: f,
        onMouseLeave: _,
        children: (0, n.jsx)(z.Y, {
            targetElementRef: o,
            shouldShow: c,
            position: "bottom",
            align: "left",
            onRequestOpen: () => {
                p(), d(!0), (i.current = Q.A.keyboardModeEnabled);
            },
            onRequestClose: () => {
                i.current && !Q.A.keyboardModeEnabled && (0, W.uS)(), d(!1), o.current?.focus();
            },
            renderPopout: (e) => {
                let { closePopout: s } = e;
                return (0, n.jsx)("div", {
                    onMouseEnter: u,
                    onMouseLeave: _,
                    children: (0, n.jsx)(J, { selectedTab: l, onClose: s, tabs: r, onTabSelect: t }),
                });
            },
            children: (e, t) => {
                let { isShown: r } = t,
                    s = r ? K.t : Y.a;
                return (0, n.jsx)(b.A.Title, {
                    ...e,
                    ref: o,
                    onKeyDown: m,
                    wrapperClassName: X.Vn,
                    className: T()(X.Mf, X.OS, { [X.wH]: a }),
                    "aria-label": R.intl.string(R.t["UKOtz+"]),
                    children: (0, n.jsxs)("span", {
                        className: X.hP,
                        children: [R.intl.string(R.t["UKOtz+"]), (0, n.jsx)(s, { size: "xs" })],
                    }),
                });
            },
        }),
    });
}
function en(e, t, r) {
    return e === r || (null != t.renderSubmenu && (0, G.dF)(r) && e === G.G2.CATALOG);
}
function es(e) {
    let { className: t, selectedTab: r, tabs: l, onTabSelect: a } = e,
        [o, i] = s.useState(0),
        c = s.useRef(o),
        {
            lastVisibleIndex: d,
            onItemLayout: u,
            overflowItemsRef: b,
        } = (0, q.Wv)({ items: l, itemGapPx: 24, maxLines: 1, containerWidth: o }),
        p = s.useMemo(() => l.slice(0, d + 1), [d, l]),
        m = s.useMemo(() => l.slice(d + 1), [d, l]),
        f = s.useRef(null),
        C = s.useCallback((e) => {
            let t = e.contentRect.width;
            null != t && c.current !== t && (i(t), (c.current = t));
        }, []);
    (0, _.g)(f, C);
    let g = 0 !== o,
        h = m.some((e) => en(e.tab, e, r));
    return (0, n.jsxs)("div", {
        className: T()(X.kL, t),
        ref: f,
        children: [
            (0, n.jsxs)("div", {
                className: X.Kk,
                children: [
                    l.map((e, t) =>
                        (0, n.jsx)(
                            q.Ae,
                            {
                                index: t,
                                onItemLayout: u,
                                children: (0, n.jsx)(ee, {
                                    tab: e.tab,
                                    label: e.label,
                                    selected: en(e.tab, e, r),
                                    handleTransition: a,
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
                        children: (0, n.jsx)(er, { tabs: m, onTabSelect: a, selectedTab: r, selected: h }),
                    }),
                ],
            }),
            g &&
                (0, n.jsxs)("div", {
                    className: X.vR,
                    children: [
                        p.map((e) =>
                            (0, n.jsx)(
                                ee,
                                {
                                    tab: e.tab,
                                    label: e.label,
                                    selected: en(e.tab, e, r),
                                    handleTransition: a,
                                    renderSubmenu: e.renderSubmenu,
                                    submenuOnly: e.submenuOnly,
                                    icon: e.icon,
                                },
                                e.tab,
                            ),
                        ),
                        0 !== m.length
                            ? (0, n.jsx)(er, { tabs: m, onTabSelect: a, selectedTab: r, selected: h })
                            : null,
                    ],
                }),
        ],
    });
}
r(801416);
var el = r(188275),
    ea = r(518477),
    eo = r(773743);
function ei(e) {
    let { selectedTab: t, handleTransition: r } = e,
        I = (0, a.bG)([E.default], () => E.default.getCurrentUser()),
        { enabled: T } = (0, h.Z)({ location: "collectibles_shop_header_bar" }),
        O = (function (e) {
            let { location: t } = e,
                { enabled: r, useGameShopsDropdown: n } = m.useConfig({ location: t });
            return r && !n;
        })({ location: "collectibles_shop_header_bar" }),
        L = (function (e) {
            let { location: t } = e,
                { enabled: r, useGameShopsDropdown: n } = m.useConfig({ location: t });
            return r && n;
        })({ location: "collectibles_shop_header_bar" }),
        k = (0, x.uM)(),
        { searchQuery: M, itemTypeFilters: B } = (0, y.v)(),
        D = s.useRef(null),
        [H, q] = s.useState(!1);
    (0, _.g)(
        D,
        s.useCallback((e) => {
            q(e.contentRect.width < 800);
        }, []),
    );
    let U = s.useCallback(() => {
            A.default.track($.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                collectibles_shop_session_id: k?.sessionId,
                page_type: G.G2.RIVALS,
                page_category: k?.pageCategory,
                page_section: k?.pageSection,
                tile_type: "SOCIAL_LAYER_STOREFRONT_SHOP_TAB",
                cta_name: "go_to_game_shop",
            }),
                (0, f.default)({ guildId: el.Kf }).catch(() => {});
        }, [k]),
        z = s.useMemo(() => {
            if (!L) return [];
            let e = [];
            return e.push({ id: G.G2.RIVALS, label: R.intl.string(R.t["kq/75v"]), onSelect: U }), e;
        }, [L, U]),
        K = z.length > 0,
        Y = s.useMemo(() => {
            let e = [
                { tab: G.G2.HOME, label: R.intl.string(R.t["xNiB/O"]) },
                {
                    tab: G.G2.CATALOG,
                    label: R.intl.string(R.t.Ah5sJo),
                    renderSubmenu: (e) => {
                        let { onClose: t } = e;
                        return (0, n.jsx)(F, { handleTransition: r, onClose: t });
                    },
                    renderOverflowContent: (e) => {
                        let { onClose: s } = e;
                        return (function (e) {
                            let { selectedTab: t, itemTypeFilters: r, onTabSelect: s, onClose: l } = e,
                                a = t;
                            if (t === G.G2.CATALOG && r.size > 0) {
                                let e = P[Array.from(r)[0]];
                                null != e && (a = e);
                            }
                            return N.map((e) => {
                                let { tab: t, labelKey: r } = e,
                                    o = t === a;
                                return (0, n.jsx)(
                                    v.Dr,
                                    {
                                        id: t,
                                        label: R.intl.string(r),
                                        icon: o ? j.y : void 0,
                                        leadingAccessory: o ? { type: "icon", icon: j.y } : void 0,
                                        action: () => {
                                            s(t), l();
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
                T && e.push({ tab: G.G2.ORBS, label: R.intl.string(R.t.EBYkzk) }),
                O
                    ? e.push({ tab: G.G2.RIVALS, label: R.intl.string(R.t["kq/75v"]), icon: o.I })
                    : K &&
                      e.push({
                          tab: G.G2.GAME_SHOPS,
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
                                          v.Dr,
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
                              })({ shops: z, onClose: t });
                          },
                      }),
                e
            );
        }, [T, O, K, r, z, t, B]),
        W = t === G.G2.ORBS ? $.liQ.SHOP_ORBS_TAB : $.liQ.COLLECTIBLES_SHOP,
        Q = s.useCallback(() => {
            (0, g.Y)({ pageType: W, sectionType: $.JJy.ORBS_BALANCE_MENU, ctaObject: $.ZSU.CTA_TO_QUEST_HOME }),
                (0, p.navigateToQuestHome)({ fromContent: l.u.ORBS_BALANCE_MENU });
        }, [W]),
        Z = s.useCallback(() => {
            I?.id != null && (0, C.openUserProfileModal)({ userId: I.id, tabSection: ea.RP.WISHLIST });
        }, [I?.id]),
        J = s.useCallback(
            (e) => {
                e === G.G2.RIVALS ? U() : r(e);
            },
            [r, U],
        );
    return (0, n.jsx)("div", {
        ref: D,
        children: (0, n.jsxs)(b.A, {
            disableDoubleClick: !0,
            className: eo.jr,
            toolbar: (0, n.jsxs)(n.Fragment, {
                children: [
                    (0, n.jsx)(V, { handleTransition: r, selectedTab: t, isNarrow: H, hasText: "" !== M }),
                    (0, n.jsx)(i.D, {
                        className: eo.ij,
                        onClick: Z,
                        "aria-label": R.intl.string(R.t["7lZ31J"]),
                        children: (0, n.jsx)(c.C, { size: "xs", color: "currentColor" }),
                    }),
                    T &&
                        (0, n.jsx)(S.SS, {
                            analyticsPage: W,
                            cardAlignment: S.SS.CardAlignment.END,
                            ctaText: R.intl.string(R.t.VC4Mq0),
                            ctaOnClick: Q,
                        }),
                ],
            }),
            hideSearch: !0,
            children: [
                (0, n.jsx)(i.D, {
                    className: eo.sU,
                    onClick: () => r(G.G2.HOME),
                    "aria-label": R.intl.string(R.t["5upuqx"]),
                    children: (0, n.jsx)(d.U, { size: "md", color: u.A.colors.TEXT_DEFAULT }),
                }),
                (0, n.jsx)(es, { tabs: Y, selectedTab: t, onTabSelect: J }),
            ],
        }),
    });
}
