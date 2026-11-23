(t.d(n, { W: () => eh, X: () => ef }), t(321073));
var s,
    l = t(477900),
    r = t(582128),
    a = t(503698),
    i = t.n(a),
    o = t(812729),
    u = t.n(o),
    c = t(741918),
    d = (((s = {}).UPDATE_ITEMS = "UPDATE_ITEMS"), (s.SET_FOCUS_PATH = "SET_FOCUS_PATH"), s);
function p(e, n) {
    return e.findIndex((e) => n === e.key);
}
function m(e) {
    return e.focusPath[e.focusPath.length - 1];
}
function h(e) {
    let n = e.items;
    for (let t = 0; t < e.focusPath.length - 1; t++) {
        if (null == n) return;
        let s = p(n, e.focusPath[t]);
        n = n[s].children;
    }
    return n;
}
function f(e, n) {
    let t = e,
        s = [];
    for (let e = 0; e < n.length && null != t; e++) {
        let l = n[e],
            r = p(t, l);
        if (r < 0 || r >= t.length) {
            let e = t[0];
            null != e && s.push(e.key);
            break;
        }
        (s.push(l), (t = t[r].children));
    }
    return s;
}
function b(e) {
    let n = m(e),
        t = h(e);
    return null == t ? -1 : p(t, n);
}
function x(e, n) {
    switch (n.type) {
        case c.X2.NAVIGATE_UP:
            let t = m(e),
                s = h(e);
            if (null == s) return e;
            let l = (p(s, t) - 1) % s.length;
            if ((l < 0 && (l = s.length - 1), null == s[l])) return e;
            let r = { ...e, focusPath: [...e.focusPath.slice(0, -1), s[l].key] };
            return { ...r, focusIndex: b(r) };
        case c.X2.NAVIGATE_DOWN:
            let a = m(e),
                i = h(e);
            if (null == i) return e;
            let o = (p(i, a) + 1) % i.length;
            if (null == i[o]) return e;
            let u = { ...e, focusPath: [...e.focusPath.slice(0, -1), i[o].key] };
            return { ...u, focusIndex: b(u) };
        case c.X2.NAVIGATE_IN:
            return (function (e) {
                let n = m(e),
                    t = h(e);
                if (null == t) return e;
                let s = t[p(t, n)],
                    l = s?.children?.[0];
                if (null == l) return e;
                let r = { ...e, focusPath: [...e.focusPath, l.key] };
                return { ...r, focusIndex: b(r) };
            })(e);
        case c.X2.NAVIGATE_OUT:
            if (e.focusPath.length <= 1) return e;
            let d = { ...e, focusPath: e.focusPath.slice(0, -1) };
            return { ...d, focusIndex: b(d) };
        case "UPDATE_ITEMS":
            return (function (e, n) {
                let { items: t } = n,
                    s = { ...e, items: t, focusPath: f(t, e.focusPath) };
                return { ...s, focusIndex: b(s) };
            })(e, n);
        case "SET_FOCUS_PATH":
            return (function (e, n) {
                let { path: t } = n,
                    s = { ...e, focusPath: f(e.items, t) };
                return { ...s, focusIndex: b(s) };
            })(e, n);
        case c.X2.SELECT_FOCUSED_ITEM:
            return e;
        default:
            throw Error(`Menu navigator was given an unhandled action ${n.type}`);
    }
}
var y = t(602034),
    g = t(508382),
    v = t(315710),
    C = t(95362),
    j = t(289873),
    I = t(955572),
    N = t(775602);
let k = (0, t(945810).mj)({
    name: "2025-11-mana-context-menu",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
function E(e) {
    return k.useConfig({ location: e }).enabled;
}
var P = t(477782),
    A = t(900283),
    T = t(798819);
function S() {
    let e = E("MenuSeparator");
    return (0, l.jsx)("div", {
        role: "separator",
        className: T.separator,
        style: { "--custom-menu-separator-margin": e ? "8px 0" : "8px" },
    });
}
var w = t(646514);
let _ = {
        default: T.colorDefault,
        brand: T.colorBrand,
        danger: T.colorDanger,
        premium: T.colorPremium,
        "premium-gradient": T.colorPremiumGradient,
        success: T.colorSuccess,
    },
    F = -(w.A.modules.menu.BORDER_WIDTH.resolve() + w.A.modules.menu.SCROLLER_BLOCK_PADDING.resolve());
function M(e) {
    let { contents: n, label: t, className: s, color: r = "default" } = e;
    return 0 === n.length
        ? null
        : (0, l.jsxs)("div", {
              "aria-label": t,
              role: "group",
              className: s,
              children: [
                  null != t
                      ? (0, l.jsx)("div", { className: i()(T.groupLabel, T.hideInteraction, _[r]), children: t })
                      : null,
                  n,
              ],
          });
}
var R = t(939249),
    D = t(834730),
    L = t(805251),
    U = t(320448);
function O(e, n) {
    return "function" == typeof e ? e(n) : e;
}
function X(e) {
    N.Ay.keyboardModeEnabled && e.current?.scrollIntoView({ block: "nearest" });
}
var K = t(745396),
    V = t(379261);
function G(e) {
    return E("MenuLabel") ? (0, l.jsx)(V.r, { children: e.children }) : e.children;
}
var H = t(844222),
    $ = t(545442),
    W = t(935154),
    B = t(486020);
function Q(e) {
    let { accessory: n, isFocused: t } = e,
        { reducedMotion: s } = r.useContext(H.C);
    switch (n.type) {
        case "icon": {
            let { type: e, icon: t, color: s = "currentColor", className: r, ...a } = n;
            return (0, l.jsx)("div", {
                className: T.iconContainerLeft,
                children: (0, l.jsx)(t, { "aria-hidden": !0, color: s, ...a, className: i()(T.icon, r) }),
            });
        }
        case "emoji": {
            let e = (function (e, n, t) {
                let { emojiId: s, src: l, animated: r = !1 } = e;
                return null != s ? B.Ay.getEmojiURL({ id: s, animated: r && (!t || n), size: 18 }) : l;
            })(n, t, s.enabled);
            return (0, l.jsx)("div", {
                className: T.iconContainerLeft,
                children: (0, l.jsx)("img", { "aria-hidden": !0, alt: "", src: e, className: T.emojiIcon }),
            });
        }
        case "image":
            return (0, l.jsx)("img", { "aria-hidden": !0, alt: "", src: n.src, className: T.imageAccessory });
        case "avatar":
            return (0, l.jsx)("img", { "aria-hidden": !0, alt: "", src: n.src, className: T.avatarAccessory });
        case "roleDot": {
            let { variant: e, color: t, colors: s } = n;
            return (0, l.jsx)("div", {
                className: T.roleDotAccessory,
                children:
                    "dot" === e
                        ? (0, l.jsx)($.W, { color: t, colors: s, background: !1, tooltip: !1 })
                        : (0, l.jsx)($.R, { color: t, colors: s ?? null }),
            });
        }
        case "status": {
            let { status: e } = n;
            return (0, l.jsx)("div", {
                className: T.statusAccessory,
                children: (0, l.jsx)(W.nW, { status: e, size: 10 }),
            });
        }
        case "guildTag":
            return (0, l.jsx)("div", { className: T.guildTagAccessory, children: n.element });
    }
}
function q(e) {
    let { indicator: n } = e,
        { type: t, icon: s, color: r = "currentColor", className: a, ...o } = n;
    return (0, l.jsx)("div", {
        className: T.iconContainer,
        children: (0, l.jsx)(s, { "aria-hidden": !0, color: r, ...o, className: i()(T.icon, a) }),
    });
}
var z = t(869431);
function Y(e) {
    let {
            color: n = "default",
            label: t,
            void_label: s,
            icon: a,
            iconLeft: o,
            leadingAccessory: u,
            trailingIndicator: c,
            shortcut: d,
            subtext: p,
            subtextLineClamp: m,
            hasSubmenu: h,
            loading: f,
            badge: b,
            disabled: x,
            isFocused: y,
            menuItemProps: g,
            action: v,
            onClose: C,
            onFocus: I,
            className: N,
            focusedClassName: k,
            dontCloseOnActionIfHoldingShiftKey: P,
            dontCloseOnAction: S,
            iconProps: w,
        } = e,
        { onSelect: F, onInteraction: M } = r.useContext(A.x),
        V = r.useRef(null),
        H = E("MenuItem"),
        $ = r.useCallback(
            (e) => {
                if ((M?.({ type: A.Q.DEFAULT }), null == v)) return !1;
                ((e.shiftKey && P) || S || C(),
                    e.persist(),
                    F?.(),
                    (e.nativeEvent.view ?? window).requestAnimationFrame(() => v(e)));
            },
            [v, C, F, P, S, M],
        );
    return (
        r.useEffect(() => {
            y && (X(V), I?.());
        }, [y, I]),
        (0, l.jsxs)(R.D, {
            innerRef: V,
            className: i()(T.item, T.labelContainer, z.nM, _[n], N, { [T.disabled]: x, [T.focused]: y, [k ?? ""]: y }),
            onClick: x ? void 0 : $,
            "aria-disabled": x,
            ...g,
            "data-menu-item": "true",
            "data-marquee-active": y,
            children: [
                H || u?.type === "status"
                    ? null != u && (0, l.jsx)(Q, { accessory: u, isFocused: y })
                    : (0, K.O)(o)
                      ? o
                      : null != o &&
                        (0, l.jsx)("div", {
                            className: T.iconContainerLeft,
                            children: (0, l.jsx)(o, {
                                color: "currentColor",
                                ...w,
                                className: i()(T.icon, w?.className),
                            }),
                        }),
                (0, l.jsxs)("div", {
                    className: T.label,
                    children: [
                        (0, l.jsx)(G, { children: O(s ?? t, e) }),
                        null != p &&
                            (0, l.jsx)(D.E, {
                                variant: "body-xs/normal",
                                className: i()(T.subtext, { [T.subtextLineClamp]: null != m }),
                                lineClamp: m,
                                children: p,
                            }),
                    ],
                }),
                null != d && (0, l.jsx)("div", { className: T.shortcutContainer, children: d }),
                null != b &&
                    (0, l.jsx)("div", {
                        className: T.badgeContainer,
                        children:
                            "object" == typeof b && "type" in b
                                ? (0, l.jsx)(L.E, { ...b })
                                : (0, l.jsx)(L.E, { type: b }),
                    }),
                f &&
                    (0, l.jsx)("div", {
                        className: T.iconContainer,
                        children: (0, l.jsx)(j.y, { type: j.y.Type.PULSING_ELLIPSIS }),
                    }),
                H
                    ? null != c && (0, l.jsx)(q, { indicator: c })
                    : (0, K.O)(a)
                      ? a
                      : null != a &&
                        (0, l.jsx)("div", {
                            className: T.iconContainer,
                            children: (0, l.jsx)(a, {
                                color: "currentColor",
                                ...w,
                                className: i()(T.icon, w?.className),
                            }),
                        }),
                h &&
                    (0, l.jsx)("div", {
                        className: T.iconContainer,
                        children: (0, l.jsx)(U.ChevronSmallRightIcon, {
                            size: "md",
                            color: "currentColor",
                            className: T.caret,
                        }),
                    }),
            ],
        })
    );
}
var J = t(962125);
function Z(e) {
    let { parentItem: n, isFocused: t, menuSubmenuProps: s, rows: a, rowHeight: i, onScroll: o, listClassName: u } = e,
        c = r.useRef(null),
        d = r.useRef(null),
        { isUsingKeyboardNavigation: p, focusIndex: m, ...h } = s;
    (r.useLayoutEffect(() => {
        t && c.current?.focus();
    }, [t]),
        r.useEffect(() => {
            t && m >= 0 && p && d.current?.scrollRowIntoView(m);
        }, [t, p, m]));
    let f = r.useCallback((e) => a[e], [a]);
    return (0, l.jsx)(g.Ow, {
        spacing: 4,
        placement: "right-start",
        autoFlip: !0,
        portal: !1,
        viewportPadding: 48,
        shiftPadding: 8,
        maxHeight: 360,
        renderLayer: function () {
            return (
                a.length > 0 &&
                (0, l.jsx)("div", {
                    className: T.submenuPaddingContainer,
                    children: (0, l.jsx)("div", {
                        className: T.submenu,
                        ...h,
                        ref: c,
                        children: (0, l.jsx)(J.A, {
                            ref: d,
                            className: u,
                            listPadding: [6, 0, 6, 8],
                            onScroll: o,
                            renderRow: f,
                            rowCount: a.length,
                            rowHeight: i,
                        }),
                    }),
                })
            );
        },
        children: (e) => {
            let { ref: t, props: s } = e;
            return (0, l.jsx)("div", { ref: t, ...s, children: n });
        },
    });
}
let ee = r.createContext("right-start");
function en(e) {
    let n = r.useContext(ee),
        { subMenuClassName: t, parentItem: s, isFocused: a, menuSubmenuProps: o, renderSubmenu: u } = e,
        { focusIndex: c, isUsingKeyboardNavigation: d, ...p } = o,
        m = r.useRef(null),
        h = (0, l.jsx)("div", {
            className: T.submenuPaddingContainer,
            children: (0, l.jsx)("div", {
                className: i()(T.submenu, t),
                ...p,
                ref: m,
                children: (0, l.jsx)(C.Ip, { className: i()(T.scroller, T.scrollerWithScrollbar), children: u() }),
            }),
        }),
        f = E("MenuSubmenuItem"),
        [b, x] = r.useState(!1);
    return (0, l.jsx)(g.Ow, {
        open: b || a,
        viewportPadding: 48,
        shiftPadding: 8,
        maxHeight: 360,
        onOpenChange: x,
        spacing: f ? -4 : 4,
        alignmentSpacing: F,
        placement: n,
        portal: !1,
        crossAccessFlip: !1,
        trigger: "hover",
        renderLayer: (e) => {
            let { placement: n } = e;
            return (0, l.jsx)(ee.Provider, { value: n, children: h });
        },
        children: (e) => {
            let { ref: n, props: t } = e;
            return (0, l.jsx)("div", { ref: n, ...t, children: s });
        },
    });
}
function et(e) {
    let {
            children: n,
            color: t = "default",
            isFocused: s = !1,
            disabled: a = !1,
            keepItemStyles: o = !1,
            menuItemProps: u,
            action: c,
            dontCloseOnActionIfHoldingShiftKey: d,
            dontCloseOnAction: p,
            onClose: m,
        } = e,
        h = r.useRef(null);
    r.useEffect(() => {
        s && X(h);
    }, [s]);
    let f = r.useCallback(
            (e) => {
                if (null == c) return !1;
                ((e.shiftKey && d) || p || m(), e.persist(), requestAnimationFrame(() => c(e)));
            },
            [c, m, d, p],
        ),
        b = o ? i()(T.item, _[t], { [T.focused]: s }) : T.customItem;
    return (0, l.jsx)(R.D, {
        innerRef: h,
        className: b,
        onClick: a ? void 0 : f,
        "aria-disabled": a,
        ...u,
        children: n({ color: t, disabled: a, isFocused: s }),
    });
}
var es = t(658675);
function el(e) {
    let {
            color: n = "default",
            label: t,
            void_label: s,
            checked: a,
            subtext: o,
            subtextLineClamp: u,
            leftIcon: c,
            leadingAccessory: d,
            disabled: p,
            isFocused: m,
            menuItemProps: h,
            action: f,
            className: b,
            focusedClassName: x,
        } = e,
        { onInteraction: y } = r.useContext(A.x),
        g = E("MenuCheckboxItem"),
        v = r.useRef(null);
    r.useEffect(() => {
        m && X(v);
    }, [m]);
    let C = r.useCallback(
        (e) => {
            (f(e), y?.({ type: A.Q.CHECKBOX }));
        },
        [f, y],
    );
    return (0, l.jsxs)(R.D, {
        innerRef: v,
        className: i()(T.item, T.checkboxContainer, T.labelContainer, z.nM, _[n], b, {
            [T.disabled]: p,
            [T.focused]: m,
            [x ?? ""]: m,
        }),
        onClick: p ? void 0 : C,
        ...h,
        "aria-checked": a,
        "aria-disabled": p,
        "data-marquee-active": m,
        children: [
            g
                ? null != d && (0, l.jsx)(Q, { accessory: d, isFocused: m })
                : (0, K.O)(c)
                  ? c
                  : null != c &&
                    (0, l.jsx)("div", {
                        className: T.iconContainerLeft,
                        children: (0, l.jsx)(c, { color: "currentColor", className: T.icon }),
                    }),
            (0, l.jsxs)("div", {
                className: T.label,
                children: [
                    (0, l.jsx)(G, { children: O(s ?? t, { isFocused: m, disabled: p }) }),
                    null != o &&
                        (0, l.jsx)(D.E, {
                            variant: "body-xs/normal",
                            className: i()(T.subtext, { [T.subtextLineClamp]: null != u }),
                            lineClamp: u,
                            children: o,
                        }),
                ],
            }),
            (0, l.jsx)("div", { className: T.iconContainer, children: (0, l.jsx)(es.P, { checked: a, disabled: p }) }),
        ],
    });
}
var er = t(771871);
function ea(e) {
    let {
            color: n = "default",
            label: t,
            void_label: s,
            checked: a,
            subtext: o,
            subtextLineClamp: u,
            leftIcon: c,
            leadingAccessory: d,
            disabled: p,
            isFocused: m,
            menuItemProps: h,
            action: f,
        } = e,
        { onInteraction: b } = r.useContext(A.x),
        x = E("MenuRadioItem"),
        y = r.useRef(null);
    r.useEffect(() => {
        m && X(y);
    }, [m]);
    let g = r.useCallback(
        (e) => {
            (f(e), b?.({ type: A.Q.RADIO }));
        },
        [f, b],
    );
    return (0, l.jsxs)(R.D, {
        innerRef: y,
        className: i()(T.item, T.labelContainer, z.nM, _[n], { [T.disabled]: p, [T.focused]: m }),
        onClick: p ? void 0 : g,
        ...h,
        "aria-checked": a,
        "aria-disabled": p,
        "data-marquee-active": m,
        children: [
            x
                ? null != d && (0, l.jsx)(Q, { accessory: d, isFocused: m })
                : (0, K.O)(c)
                  ? c
                  : null != c &&
                    (0, l.jsx)("div", {
                        className: T.iconContainerLeft,
                        children: (0, l.jsx)(c, { color: "currentColor", className: T.icon }),
                    }),
            (0, l.jsxs)("div", {
                className: T.label,
                children: [
                    (0, l.jsx)(G, { children: O(s ?? t, { isFocused: m, disabled: p }) }),
                    null != o &&
                        (0, l.jsx)(D.E, {
                            variant: "body-xs/normal",
                            className: i()(T.subtext, { [T.subtextLineClamp]: null != u }),
                            lineClamp: u,
                            children: o,
                        }),
                ],
            }),
            (0, l.jsx)("div", { className: T.iconContainer, children: (0, l.jsx)(er.T, { checked: a, disabled: p }) }),
        ],
    });
}
var ei = t(143129);
function eo(e) {
    let {
            color: n = "default",
            label: t,
            subtext: s,
            subtextLineClamp: a,
            checked: o,
            disabled: u = !1,
            isFocused: c,
            menuItemProps: d,
            action: p,
            className: m,
        } = e,
        { onInteraction: h } = r.useContext(A.x),
        f = r.useRef(null);
    r.useEffect(() => {
        c && X(f);
    }, [c]);
    let b = r.useCallback(() => {
        (p(!o), h?.({ type: A.Q.SWITCH }));
    }, [p, o, h]);
    return (0, l.jsxs)(R.D, {
        innerRef: f,
        className: i()(T.item, T.switchItem, _[n], m, { [T.disabled]: u, [T.focused]: c }),
        onClick: u ? void 0 : b,
        "aria-checked": o,
        "aria-disabled": u,
        ...d,
        children: [
            null != t
                ? (0, l.jsx)("div", {
                      className: T.labelContainer,
                      children: (0, l.jsxs)("div", {
                          className: T.label,
                          children: [
                              (0, l.jsx)(G, { children: t }),
                              null != s &&
                                  (0, l.jsx)(D.E, {
                                      variant: "body-xs/normal",
                                      className: i()(T.subtext, { [T.subtextLineClamp]: null != a }),
                                      lineClamp: a,
                                      children: s,
                                  }),
                          ],
                      }),
                  })
                : null,
            (0, l.jsx)("div", {
                className: T.switchContainer,
                "aria-hidden": !0,
                children: (0, l.jsx)(ei.d, { checked: o, disabled: u, displayOnly: !0 }),
            }),
        ],
    });
}
var eu = t(95477);
let ec = { position: "absolute", visibility: "hidden", pointerEvents: "none", whiteSpace: "nowrap" };
function ed(e) {
    let {
            color: n = "default",
            label: t,
            value: s,
            onChange: a,
            placeholder: o = "",
            maxLength: u,
            disabled: c = !1,
            "aria-label": d,
            isFocused: p,
            menuItemProps: m,
        } = e,
        { onInteraction: h } = r.useContext(A.x),
        f = r.useRef(null),
        b = r.useRef(null),
        x = r.useRef(null),
        [y, g] = r.useState(null);
    (r.useLayoutEffect(() => {
        if ("" === o || null == x.current || null == b.current) return void g(null);
        let e = b.current,
            n = window.getComputedStyle(e),
            t = x.current;
        ((t.style.font = n.font), (t.style.letterSpacing = n.letterSpacing));
        let s = t.getBoundingClientRect().width,
            l = parseFloat(n.paddingLeft) + parseFloat(n.paddingRight);
        g(Math.ceil(s + (Number.isNaN(l) ? 24 : l) + 2));
    }, [o]),
        r.useEffect(() => {
            p && (X(f), b.current?.focus());
        }, [p]));
    let v = r.useCallback(
        (e) => {
            (a(e), h?.({ type: A.Q.DEFAULT }));
        },
        [a, h],
    );
    return (0, l.jsxs)("div", {
        ref: f,
        className: i()(T.item, T.textInputItem, T.hideInteraction, _[n], { [T.disabled]: c }),
        "aria-disabled": c,
        ...m,
        children: [
            null != t
                ? (0, l.jsx)("div", {
                      className: T.labelContainer,
                      children: (0, l.jsx)("div", { className: T.label, children: t }),
                  })
                : null,
            (0, l.jsxs)("div", {
                className: T.textInputWrapper,
                style: null != y ? { minWidth: y } : void 0,
                children: [
                    (0, l.jsx)("span", { ref: x, "aria-hidden": !0, style: ec, children: o }),
                    (0, l.jsx)(eu.k, {
                        inputRef: b,
                        value: s,
                        onChange: v,
                        placeholder: o,
                        maxLength: u,
                        disabled: c,
                        "aria-label": d,
                    }),
                ],
            }),
        ],
    });
}
function ep(e) {
    let {
            color: n = "default",
            label: t,
            control: s,
            disabled: a,
            isFocused: o,
            isUsingKeyboardNavigation: u = !1,
            showDefaultFocus: c = !1,
            interactive: d = !0,
            menuItemProps: p,
            onClose: m,
        } = e,
        { onInteraction: h } = r.useContext(A.x),
        f = r.useRef(null),
        b = r.useRef(null);
    r.useLayoutEffect(() => {
        o ? (X(f), b.current?.focus()) : u && b.current?.blur?.();
    }, [o, u]);
    let x = r.useCallback(() => {
            b.current?.activate?.() && m();
        }, [m]),
        y = s(
            {
                onClose: m,
                disabled: a,
                isFocused: o,
                onInteraction: r.useCallback(
                    (e) => {
                        h?.({ type: e ?? A.Q.DEFAULT });
                    },
                    [h],
                ),
                tabIndex: p.tabIndex,
            },
            b,
        );
    return (0, l.jsxs)("div", {
        onClick: x,
        className: i()(T.item, _[n], {
            [T.disabled]: a,
            [T.focused]: c && o,
            [T.hideInteraction]: !c,
            [T.nonInteractive]: !d,
        }),
        "aria-disabled": a,
        ...p,
        children: [
            null != t
                ? (0, l.jsx)("div", {
                      className: T.labelContainer,
                      children: (0, l.jsx)("div", { className: T.label, children: t }),
                  })
                : null,
            y,
        ],
    });
}
function em(e) {
    let {
            color: n = "default",
            disabled: t,
            isFocused: s,
            showDefaultFocus: a = !1,
            menuItemProps: o,
            children: u,
        } = e,
        c = r.useRef(null);
    return (
        r.useLayoutEffect(() => {
            if (!s) return;
            let e = c.current;
            if (null == e) return;
            X(c);
            let n = e.querySelector('[tabindex="0"]');
            n?.focus();
        }, [s]),
        (0, l.jsx)("div", {
            ref: c,
            className: i()(T.item, _[n], { [T.disabled]: t, [T.focused]: a && s, [T.hideInteraction]: !a }),
            "aria-disabled": t,
            ...o,
            children: u,
        })
    );
}
function eh(e) {
    let {
            navId: n,
            variant: t = "flexible",
            hideScroller: s = !1,
            className: a,
            children: o,
            onClose: p,
            onSelect: f,
            onInteraction: b,
        } = e,
        j = (function e(n) {
            return (function e(n) {
                return null == n
                    ? []
                    : r.Children.toArray(n).flatMap((n) =>
                          null == n
                              ? []
                              : Array.isArray(n)
                                ? e(n)
                                : r.isValidElement(n) && n.type === r.Fragment
                                  ? e(n.props.children)
                                  : [n],
                      );
            })(n).reduce((n, t) => {
                if (t.type === P.bX) return (n.push({ type: "separator", navigable: !1 }), n);
                if (t.type === P.rX) {
                    let s = e(t.props.children);
                    return (
                        s.length > 0 &&
                            (n.push({ type: "groupstart", length: s.length, navigable: !1, props: t.props }),
                            n.push(...s),
                            n.push({ type: "groupend", length: s.length, navigable: !1, props: t.props })),
                        n
                    );
                }
                if (t.type === P.Dr)
                    return (
                        n.push(
                            null != t.props.render
                                ? {
                                      type: "customitem",
                                      key: t.props.id,
                                      navigable: null == t.props.navigable || t.props.navigable,
                                      render: t.props.render,
                                      props: t.props,
                                  }
                                : {
                                      type: "item",
                                      key: t.props.id,
                                      navigable: !0,
                                      label: t.props.label,
                                      void_label: t.props.void_label,
                                      children: t.props.children ? e(t.props.children) : void 0,
                                      onChildrenScroll: t.props.onChildrenScroll,
                                      props: t.props,
                                      childRowHeight: t.props.childRowHeight,
                                      listClassName: t.props.listClassName,
                                      subMenuClassName: t.props.subMenuClassName,
                                  },
                        ),
                        n
                    );
                if (t.type === P.sL)
                    return (n.push({ type: "checkbox", key: t.props.id, navigable: !0, props: t.props }), n);
                if (t.type === P.iD)
                    return (n.push({ type: "radio", key: t.props.id, navigable: !0, props: t.props }), n);
                else if (t.type === P.fP)
                    return (n.push({ type: "switch", key: t.props.id, navigable: !0, props: t.props }), n);
                else if (t.type === P.Yn)
                    return (n.push({ type: "textinput", key: t.props.id, navigable: !0, props: t.props }), n);
                else if (t.type === P.aK)
                    return (
                        n.push(
                            null != t.props.control
                                ? { type: "control", key: t.props.id, navigable: !0, props: t.props }
                                : {
                                      type: "compositecontrol",
                                      key: t.props.id,
                                      navigable: !1 !== t.props.interactive,
                                      children: t.props.children,
                                      props: t.props,
                                  },
                        ),
                        n
                    );
                throw Error(
                    `Menu API only allows Items and groups of Items as children. Received ${t?.type ?? t ?? typeof t} (${typeof t}) instead`,
                );
            }, []);
        })(o),
        k = (function e(n) {
            return n.reduce(
                (n, t) => (
                    t.navigable &&
                        n.push({
                            key: t.key,
                            hasAction: "item" === t.type && null != t.props.action,
                            children: "item" === t.type && null != t.children ? e(t.children) : void 0,
                        }),
                    n
                ),
                [],
            );
        })(j),
        w = r.useRef([]);
    u()(w.current, k) || (w.current = k);
    let _ = E("Menu"),
        F = j.find((e) => null != e.key)?.key,
        R = (function (e) {
            let {
                    navId: n,
                    items: t,
                    initialFocusPath: s,
                    onSelect: l,
                    enabled: a = !0,
                    closeMenu: i,
                    defaultIsUsingKeyboardNavigation: o = !1,
                } = e,
                u = r.useRef(a);
            r.useLayoutEffect(() => {
                u.current = a;
            }, [a]);
            let [p, f] = r.useReducer(x, { items: t, focusPath: s, focusIndex: -1 }),
                b = r.useMemo(() => (0, y.nF)(f, 30), [f]);
            r.useEffect(() => {
                f({ type: d.UPDATE_ITEMS, items: t });
            }, [t]);
            let { focusPath: g } = p,
                [v, C] = r.useState(!1),
                [j, I] = r.useState(o),
                [{ onItemFocusMemoizer: N, onItemMouseEnterMemoizer: k }] = r.useState(() => ({
                    onItemFocusMemoizer: new y.Lp((e) => () => {
                        (C(!0), f({ type: d.SET_FOCUS_PATH, path: e.split("--") }));
                    }),
                    onItemMouseEnterMemoizer: new y.Lp((e) => () => {
                        (I(!1), f({ type: d.SET_FOCUS_PATH, path: e.split("--") }));
                    }),
                })),
                E = r.useCallback(
                    (e) => {
                        var t, s;
                        if (!u.current) return;
                        e.key === c.D$.ESCAPE && null != i && (e.stopPropagation(), e.preventDefault(), i());
                        let r = (function (e) {
                            switch (e.key) {
                                case c.D$.ENTER:
                                case c.D$.SPACE:
                                    return c.X2.SELECT_FOCUSED_ITEM;
                                case c.D$.UP:
                                    return c.X2.NAVIGATE_UP;
                                case c.D$.DOWN:
                                    return c.X2.NAVIGATE_DOWN;
                                case c.D$.RIGHT:
                                    return c.X2.NAVIGATE_IN;
                                case c.D$.LEFT:
                                    return c.X2.NAVIGATE_OUT;
                            }
                        })(e);
                        switch (r) {
                            case c.X2.NAVIGATE_UP:
                            case c.X2.NAVIGATE_DOWN:
                            case c.X2.NAVIGATE_IN:
                            case c.X2.NAVIGATE_OUT:
                                let a;
                                if (
                                    ("textarea" === (a = (t = e.target).tagName.toLowerCase()) ||
                                        ("input" === a
                                            ? ["text", "search", "email", "url", "tel", "password"].includes(t.type)
                                            : t.isContentEditable)) &&
                                    (r === c.X2.NAVIGATE_IN || r === c.X2.NAVIGATE_OUT)
                                )
                                    return;
                                (e.preventDefault(), e.stopPropagation(), I(!0), b({ type: r }));
                                return;
                            case c.X2.SELECT_FOCUSED_ITEM:
                                let o;
                                if (e.repeat || e.target.tabIndex >= 0) return;
                                (e.preventDefault(), e.stopPropagation());
                                let d = ((o = m(p)), h(p)?.find((e) => e.key === o));
                                if (d?.children != null && d.children.length > 0 && !d.hasAction) {
                                    (I(!0), b({ type: c.X2.NAVIGATE_IN }));
                                    return;
                                }
                                if ((I(!1), b({ type: r }), null != l)) return void l(g);
                                let f = e.target.ownerDocument ?? document,
                                    x = ((s = null != g ? `${(0, y.M4)(n, g.join("--"))}` : n), f.getElementById(s));
                                x?.dispatchEvent(
                                    new MouseEvent("click", {
                                        bubbles: !0,
                                        cancelable: !0,
                                        shiftKey: e.shiftKey,
                                        ctrlKey: e.ctrlKey,
                                        metaKey: e.metaKey,
                                        altKey: e.altKey,
                                        view: f.defaultView ?? window,
                                    }),
                                );
                        }
                    },
                    [b, n, g, l, i, p],
                ),
                P = r.useCallback(() => {
                    v || C(!0);
                }, [v]),
                A = r.useCallback(
                    (e) => {
                        e.target !== e.currentTarget && !e.currentTarget.contains(e.relatedTarget) && v && C(!1);
                    },
                    [v],
                ),
                T = r.useCallback(() => {
                    (f({ type: d.SET_FOCUS_PATH, path: [] }), C(!1));
                }, []),
                S = r.useCallback((e) => e.every((e, n) => g[n] === e), [g]),
                w = r.useCallback(
                    () => ({
                        role: "menu",
                        id: n,
                        tabIndex: -1,
                        onKeyDown: E,
                        onFocus: P,
                        onBlur: A,
                        onMouseLeave: T,
                        "aria-activedescendant": g.length > 0 ? (0, y.M4)(n, g.join("--")) : void 0,
                    }),
                    [n, E, P, A, T, g],
                ),
                _ = r.useCallback(
                    (e) => {
                        let { path: t } = e;
                        return {
                            role: "menu",
                            tabIndex: -1,
                            "aria-activedescendant": S(t) ? (0, y.M4)(n, g.join("--")) : void 0,
                            focusIndex: p.focusIndex,
                            isUsingKeyboardNavigation: j,
                        };
                    },
                    [n, g, S, p.focusIndex, j],
                ),
                F = r.useCallback(
                    (e) => {
                        let { path: t, hasSubmenu: s = !1, navigable: l = !0, role: r = "menuitem" } = e,
                            a = t.join("--");
                        return {
                            ...(s ? { "aria-expanded": S(t), "aria-haspopup": !0 } : {}),
                            role: r,
                            id: (0, y.M4)(n, a),
                            tabIndex: -1,
                            onFocus: l ? N.get(a) : () => {},
                            onMouseEnter: l ? k.get(a) : () => {},
                        };
                    },
                    [n, S, N, k],
                );
            return r.useMemo(
                () => ({
                    dispatch: b,
                    getContainerProps: w,
                    getSubmenuProps: _,
                    getItemProps: F,
                    isFocused: S,
                    isUsingKeyboardNavigation: j,
                }),
                [b, w, _, F, S, j],
            );
        })({
            navId: n,
            items: w.current,
            initialFocusPath: N.Ay.keyboardModeEnabled && null != F ? [F] : [],
            closeMenu: p,
            defaultIsUsingKeyboardNavigation: N.Ay.keyboardModeEnabled,
        });
    r.useEffect(() => {
        R.isUsingKeyboardNavigation ? N.Ay.keyboardModeEnabled || (0, I.uS)() : N.Ay.keyboardModeEnabled && (0, I.Bm)();
    }, [R.isUsingKeyboardNavigation]);
    let D = r.useRef(null),
        L = r.useContext(g.jQ),
        U = "none" !== (L?.focus ?? "none");
    ((0, v.tj)(D, { disable: U }),
        r.useEffect(() => {
            U && D.current?.focus();
        }, [U]));
    let O = s ? C.d_ : C.Ip,
        X = r.useMemo(() => ({ onSelect: f, onInteraction: b }), [f, b]);
    return (0, l.jsx)(A.x.Provider, {
        value: X,
        children: (0, l.jsx)("div", {
            className: i()(T.menu, T[t], a),
            style: {
                "--custom-menu-viewport-padding": _ ? "48px" : "16px",
                "--custom-menu-flexible-min-width": _ ? "144px" : "188px",
            },
            ...R.getContainerProps(),
            ref: D,
            "aria-label": e["aria-label"],
            children: (0, l.jsxs)(O, {
                className: i()(T.scroller, { [T.scrollerWithScrollbar]: !s }),
                children: [
                    0 === j.length &&
                        (0, l.jsx)(Y, {
                            disabled: !0,
                            void_label: () => (0, l.jsx)(eb, {}),
                            menuItemProps: R.getItemProps({ path: ["empty"] }),
                            isFocused: !1,
                            onFocus: () => {},
                            onClose: p,
                        }),
                    j.length > 0 &&
                        (function e(n, t, s, r) {
                            let a = 0,
                                i = [];
                            return n.reduce((n, o, u) => {
                                let c = i.length > 0 ? i[i.length - 1] : n;
                                switch (o.type) {
                                    case "separator":
                                        (c.push((0, l.jsx)(S, {}, `separator-${u}`)), (a = 0));
                                        break;
                                    case "groupstart":
                                        (a > 0 &&
                                            o.length > 0 &&
                                            (c.push((0, l.jsx)(S, {}, `separator-${u}`)), (a = 0)),
                                            i.push([]));
                                        break;
                                    case "groupend":
                                        i.length > 0 &&
                                            n.push((0, l.jsx)(M, { contents: i.pop(), ...o.props }, `group-${u}`));
                                        break;
                                    case "item": {
                                        let {
                                                children: n,
                                                childRowHeight: i,
                                                onChildrenScroll: u,
                                                listClassName: d,
                                                subMenuClassName: p,
                                            } = o,
                                            m = null != n,
                                            h = [...s, o.key],
                                            f = t.isFocused(h),
                                            b = (0, l.jsx)(
                                                Y,
                                                {
                                                    ...o.props,
                                                    ...(null != o.label
                                                        ? { label: o.label }
                                                        : { void_label: o.void_label }),
                                                    hasSubmenu: null != n,
                                                    isFocused: f,
                                                    menuItemProps: {
                                                        ...t.getItemProps({ path: h, hasSubmenu: m }),
                                                        ...(null != n ? { "aria-haspopup": !0 } : {}),
                                                    },
                                                    onClose: r,
                                                },
                                                o.key,
                                            );
                                        (m
                                            ? null != i
                                                ? c.push(
                                                      (0, l.jsx)(
                                                          Z,
                                                          {
                                                              ...o.props,
                                                              parentItem: b,
                                                              isFocused: f,
                                                              menuSubmenuProps: t.getSubmenuProps({ path: h }),
                                                              rows: e(n, t, h, r),
                                                              rowHeight: i,
                                                              onScroll: u,
                                                              listClassName: d,
                                                          },
                                                          `${o.key}-submenu`,
                                                      ),
                                                  )
                                                : c.push(
                                                      (0, l.jsx)(
                                                          en,
                                                          {
                                                              ...o.props,
                                                              subMenuClassName: p,
                                                              parentItem: b,
                                                              isFocused: f,
                                                              menuSubmenuProps: t.getSubmenuProps({ path: h }),
                                                              renderSubmenu: () => e(n, t, h, r),
                                                          },
                                                          `${o.key}-submenu`,
                                                      ),
                                                  )
                                            : c.push(b),
                                            a++);
                                        break;
                                    }
                                    case "customitem": {
                                        let e = [...s, o.key];
                                        (c.push(
                                            (0, l.jsx)(
                                                et,
                                                {
                                                    ...o.props,
                                                    isFocused: t.isFocused(e),
                                                    menuItemProps: t.getItemProps({ path: e, navigable: o.navigable }),
                                                    onClose: r,
                                                    children: o.render,
                                                },
                                                o.key,
                                            ),
                                        ),
                                            a++);
                                        break;
                                    }
                                    case "checkbox": {
                                        let e = [...s, o.key];
                                        (c.push(
                                            (0, l.jsx)(
                                                el,
                                                {
                                                    ...o.props,
                                                    isFocused: t.isFocused(e),
                                                    menuItemProps: t.getItemProps({
                                                        path: e,
                                                        role: "menuitemcheckbox",
                                                    }),
                                                },
                                                o.key,
                                            ),
                                        ),
                                            a++);
                                        break;
                                    }
                                    case "radio": {
                                        let e = [...s, o.key];
                                        (c.push(
                                            (0, l.jsx)(
                                                ea,
                                                {
                                                    ...o.props,
                                                    isFocused: t.isFocused(e),
                                                    menuItemProps: t.getItemProps({ path: e, role: "menuitemradio" }),
                                                },
                                                o.key,
                                            ),
                                        ),
                                            a++);
                                        break;
                                    }
                                    case "switch": {
                                        let e = [...s, o.key];
                                        (c.push(
                                            (0, l.jsx)(
                                                eo,
                                                {
                                                    ...o.props,
                                                    isFocused: t.isFocused(e),
                                                    menuItemProps: t.getItemProps({
                                                        path: e,
                                                        role: "menuitemcheckbox",
                                                    }),
                                                },
                                                o.key,
                                            ),
                                        ),
                                            a++);
                                        break;
                                    }
                                    case "textinput": {
                                        let e = [...s, o.key];
                                        (c.push(
                                            (0, l.jsx)(
                                                ed,
                                                {
                                                    ...o.props,
                                                    isFocused: t.isFocused(e),
                                                    menuItemProps: t.getItemProps({ path: e }),
                                                },
                                                o.key,
                                            ),
                                        ),
                                            a++);
                                        break;
                                    }
                                    case "control": {
                                        let e = [...s, o.key];
                                        (c.push(
                                            (0, l.jsx)(
                                                ep,
                                                {
                                                    ...o.props,
                                                    isFocused: t.isFocused(e),
                                                    isUsingKeyboardNavigation: t.isUsingKeyboardNavigation,
                                                    menuItemProps: t.getItemProps({ path: e }),
                                                    onClose: r,
                                                },
                                                o.key,
                                            ),
                                        ),
                                            a++);
                                        break;
                                    }
                                    case "compositecontrol": {
                                        let e = [...s, o.key];
                                        (c.push(
                                            (0, l.jsx)(
                                                em,
                                                {
                                                    ...o.props,
                                                    isFocused: t.isFocused(e),
                                                    menuItemProps: t.getItemProps({ path: e }),
                                                    onClose: r,
                                                    children: o.children,
                                                },
                                                o.key,
                                            ),
                                        ),
                                            a++);
                                    }
                                }
                                return n;
                            }, []);
                        })(j, R, [], p),
                ],
            }),
        }),
    });
}
function ef() {
    return (0, l.jsx)("div", { className: i()(T.menu, T.loader, T.flexible), children: (0, l.jsx)(j.y, {}) });
}
function eb() {
    let e = "\u266B (\u3064\uFF61\u25D5\u203F\u203F\u25D5\uFF61)\u3064 \u266A",
        [n, t] = r.useState(e);
    return (
        r.useEffect(() => {
            if (N.Ay.useReducedMotion) return;
            let n = setInterval(() => {
                t((n) => (n === e ? "\u266B \u2282(\uFF61\u25D5\u203F\u203F\u25D5\uFF61\u2282) \u266A" : e));
            }, 700);
            return () => clearInterval(n);
        }, []),
        (0, l.jsx)("div", { style: { width: "100%", textAlign: "center" }, children: n })
    );
}
