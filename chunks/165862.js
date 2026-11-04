(t.d(n, { W: () => eh, X: () => ef }), t(321073));
var s,
    r = t(477900),
    l = t(582128),
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
        let r = n[e],
            l = p(t, r);
        if (l < 0 || l >= t.length) {
            let e = t[0];
            null != e && s.push(e.key);
            break;
        }
        (s.push(r), (t = t[l].children));
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
            let r = (p(s, t) - 1) % s.length;
            if ((r < 0 && (r = s.length - 1), null == s[r])) return e;
            let l = { ...e, focusPath: [...e.focusPath.slice(0, -1), s[r].key] };
            return { ...l, focusIndex: b(l) };
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
                    r = s?.children?.[0];
                if (null == r) return e;
                let l = { ...e, focusPath: [...e.focusPath, r.key] };
                return { ...l, focusIndex: b(l) };
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
    N = t(955572),
    I = t(775602);
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
    return (0, r.jsx)("div", {
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
    let { contents: n, label: t, className: s, color: l = "default" } = e;
    return 0 === n.length
        ? null
        : (0, r.jsxs)("div", {
              "aria-label": t,
              role: "group",
              className: s,
              children: [
                  null != t
                      ? (0, r.jsx)("div", { className: i()(T.groupLabel, T.hideInteraction, _[l]), children: t })
                      : null,
                  n,
              ],
          });
}
var D = t(939249),
    R = t(834730),
    L = t(805251),
    U = t(320448);
function O(e, n) {
    return "function" == typeof e ? e(n) : e;
}
function X(e) {
    I.Ay.keyboardModeEnabled && e.current?.scrollIntoView({ block: "nearest" });
}
var K = t(745396),
    V = t(379261);
function G(e) {
    return E("MenuLabel") ? (0, r.jsx)(V.r, { children: e.children }) : e.children;
}
var H = t(844222),
    $ = t(545442),
    W = t(935154),
    B = t(486020);
function Q(e) {
    let { accessory: n, isFocused: t } = e,
        { reducedMotion: s } = l.useContext(H.C);
    switch (n.type) {
        case "icon": {
            let { type: e, icon: t, color: s = "currentColor", className: l, ...a } = n;
            return (0, r.jsx)("div", {
                className: T.iconContainerLeft,
                children: (0, r.jsx)(t, { "aria-hidden": !0, color: s, ...a, className: i()(T.icon, l) }),
            });
        }
        case "emoji": {
            let e = (function (e, n, t) {
                let { emojiId: s, src: r, animated: l = !1 } = e;
                return null != s ? B.Ay.getEmojiURL({ id: s, animated: l && (!t || n), size: 18 }) : r;
            })(n, t, s.enabled);
            return (0, r.jsx)("div", {
                className: T.iconContainerLeft,
                children: (0, r.jsx)("img", { "aria-hidden": !0, alt: "", src: e, className: T.emojiIcon }),
            });
        }
        case "image":
            return (0, r.jsx)("img", { "aria-hidden": !0, alt: "", src: n.src, className: T.imageAccessory });
        case "avatar":
            return (0, r.jsx)("img", { "aria-hidden": !0, alt: "", src: n.src, className: T.avatarAccessory });
        case "roleDot": {
            let { variant: e, color: t, colors: s } = n;
            return (0, r.jsx)("div", {
                className: T.roleDotAccessory,
                children:
                    "dot" === e
                        ? (0, r.jsx)($.W, { color: t, colors: s, background: !1, tooltip: !1 })
                        : (0, r.jsx)($.R, { color: t, colors: s ?? null }),
            });
        }
        case "status": {
            let { status: e } = n;
            return (0, r.jsx)("div", {
                className: T.statusAccessory,
                children: (0, r.jsx)(W.nW, { status: e, size: 10 }),
            });
        }
        case "guildTag":
            return (0, r.jsx)("div", { className: T.guildTagAccessory, children: n.element });
    }
}
function q(e) {
    let { indicator: n } = e,
        { type: t, icon: s, color: l = "currentColor", className: a, ...o } = n;
    return (0, r.jsx)("div", {
        className: T.iconContainer,
        children: (0, r.jsx)(s, { "aria-hidden": !0, color: l, ...o, className: i()(T.icon, a) }),
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
            onFocus: N,
            className: I,
            focusedClassName: k,
            dontCloseOnActionIfHoldingShiftKey: P,
            dontCloseOnAction: S,
            iconProps: w,
        } = e,
        { onSelect: F, onInteraction: M } = l.useContext(A.x),
        V = l.useRef(null),
        H = E("MenuItem"),
        $ = l.useCallback(
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
        l.useEffect(() => {
            y && (X(V), N?.());
        }, [y, N]),
        (0, r.jsxs)(D.D, {
            innerRef: V,
            className: i()(T.item, T.labelContainer, z.nM, _[n], I, { [T.disabled]: x, [T.focused]: y, [k ?? ""]: y }),
            onClick: x ? void 0 : $,
            "aria-disabled": x,
            ...g,
            "data-menu-item": "true",
            "data-marquee-active": y,
            children: [
                H || u?.type === "status"
                    ? null != u && (0, r.jsx)(Q, { accessory: u, isFocused: y })
                    : (0, K.O)(o)
                      ? o
                      : null != o &&
                        (0, r.jsx)("div", {
                            className: T.iconContainerLeft,
                            children: (0, r.jsx)(o, {
                                color: "currentColor",
                                ...w,
                                className: i()(T.icon, w?.className),
                            }),
                        }),
                (0, r.jsxs)("div", {
                    className: T.label,
                    children: [
                        (0, r.jsx)(G, { children: O(s ?? t, e) }),
                        null != p &&
                            (0, r.jsx)(R.E, {
                                variant: "body-xs/normal",
                                className: i()(T.subtext, { [T.subtextLineClamp]: null != m }),
                                lineClamp: m,
                                children: p,
                            }),
                    ],
                }),
                null != d && (0, r.jsx)("div", { className: T.shortcutContainer, children: d }),
                null != b &&
                    (0, r.jsx)("div", {
                        className: T.badgeContainer,
                        children:
                            "object" == typeof b && "type" in b
                                ? (0, r.jsx)(L.E, { ...b })
                                : (0, r.jsx)(L.E, { type: b }),
                    }),
                f &&
                    (0, r.jsx)("div", {
                        className: T.iconContainer,
                        children: (0, r.jsx)(j.y, { type: j.y.Type.PULSING_ELLIPSIS }),
                    }),
                H
                    ? null != c && (0, r.jsx)(q, { indicator: c })
                    : (0, K.O)(a)
                      ? a
                      : null != a &&
                        (0, r.jsx)("div", {
                            className: T.iconContainer,
                            children: (0, r.jsx)(a, {
                                color: "currentColor",
                                ...w,
                                className: i()(T.icon, w?.className),
                            }),
                        }),
                h &&
                    (0, r.jsx)("div", {
                        className: T.iconContainer,
                        children: (0, r.jsx)(U._, { size: "md", color: "currentColor", className: T.caret }),
                    }),
            ],
        })
    );
}
var J = t(962125);
function Z(e) {
    let { parentItem: n, isFocused: t, menuSubmenuProps: s, rows: a, rowHeight: i, onScroll: o, listClassName: u } = e,
        c = l.useRef(null),
        d = l.useRef(null),
        { isUsingKeyboardNavigation: p, focusIndex: m, ...h } = s;
    (l.useLayoutEffect(() => {
        t && c.current?.focus();
    }, [t]),
        l.useEffect(() => {
            t && m >= 0 && p && d.current?.scrollRowIntoView(m);
        }, [t, p, m]));
    let f = l.useCallback((e) => a[e], [a]);
    return (0, r.jsx)(g.Ow, {
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
                (0, r.jsx)("div", {
                    className: T.submenuPaddingContainer,
                    children: (0, r.jsx)("div", {
                        className: T.submenu,
                        ...h,
                        ref: c,
                        children: (0, r.jsx)(J.A, {
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
            return (0, r.jsx)("div", { ref: t, ...s, children: n });
        },
    });
}
let ee = l.createContext("right-start");
function en(e) {
    let n = l.useContext(ee),
        { subMenuClassName: t, parentItem: s, isFocused: a, menuSubmenuProps: o, renderSubmenu: u } = e,
        { focusIndex: c, isUsingKeyboardNavigation: d, ...p } = o,
        m = l.useRef(null),
        h = (0, r.jsx)("div", {
            className: T.submenuPaddingContainer,
            children: (0, r.jsx)("div", {
                className: i()(T.submenu, t),
                ...p,
                ref: m,
                children: (0, r.jsx)(C.Ip, { className: i()(T.scroller, T.scrollerWithScrollbar), children: u() }),
            }),
        }),
        f = E("MenuSubmenuItem"),
        [b, x] = l.useState(!1);
    return (0, r.jsx)(g.Ow, {
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
            return (0, r.jsx)(ee.Provider, { value: n, children: h });
        },
        children: (e) => {
            let { ref: n, props: t } = e;
            return (0, r.jsx)("div", { ref: n, ...t, children: s });
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
        h = l.useRef(null);
    l.useEffect(() => {
        s && X(h);
    }, [s]);
    let f = l.useCallback(
            (e) => {
                if (null == c) return !1;
                ((e.shiftKey && d) || p || m(), e.persist(), requestAnimationFrame(() => c(e)));
            },
            [c, m, d, p],
        ),
        b = o ? i()(T.item, _[t], { [T.focused]: s }) : T.customItem;
    return (0, r.jsx)(D.D, {
        innerRef: h,
        className: b,
        onClick: a ? void 0 : f,
        "aria-disabled": a,
        ...u,
        children: n({ color: t, disabled: a, isFocused: s }),
    });
}
var es = t(658675);
function er(e) {
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
        { onInteraction: y } = l.useContext(A.x),
        g = E("MenuCheckboxItem"),
        v = l.useRef(null);
    l.useEffect(() => {
        m && X(v);
    }, [m]);
    let C = l.useCallback(
        (e) => {
            (f(e), y?.({ type: A.Q.CHECKBOX }));
        },
        [f, y],
    );
    return (0, r.jsxs)(D.D, {
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
                ? null != d && (0, r.jsx)(Q, { accessory: d, isFocused: m })
                : (0, K.O)(c)
                  ? c
                  : null != c &&
                    (0, r.jsx)("div", {
                        className: T.iconContainerLeft,
                        children: (0, r.jsx)(c, { color: "currentColor", className: T.icon }),
                    }),
            (0, r.jsxs)("div", {
                className: T.label,
                children: [
                    (0, r.jsx)(G, { children: O(s ?? t, { isFocused: m, disabled: p }) }),
                    null != o &&
                        (0, r.jsx)(R.E, {
                            variant: "body-xs/normal",
                            className: i()(T.subtext, { [T.subtextLineClamp]: null != u }),
                            lineClamp: u,
                            children: o,
                        }),
                ],
            }),
            (0, r.jsx)("div", { className: T.iconContainer, children: (0, r.jsx)(es.P, { checked: a, disabled: p }) }),
        ],
    });
}
var el = t(771871);
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
        { onInteraction: b } = l.useContext(A.x),
        x = E("MenuRadioItem"),
        y = l.useRef(null);
    l.useEffect(() => {
        m && X(y);
    }, [m]);
    let g = l.useCallback(
        (e) => {
            (f(e), b?.({ type: A.Q.RADIO }));
        },
        [f, b],
    );
    return (0, r.jsxs)(D.D, {
        innerRef: y,
        className: i()(T.item, T.labelContainer, z.nM, _[n], { [T.disabled]: p, [T.focused]: m }),
        onClick: p ? void 0 : g,
        ...h,
        "aria-checked": a,
        "aria-disabled": p,
        "data-marquee-active": m,
        children: [
            x
                ? null != d && (0, r.jsx)(Q, { accessory: d, isFocused: m })
                : (0, K.O)(c)
                  ? c
                  : null != c &&
                    (0, r.jsx)("div", {
                        className: T.iconContainerLeft,
                        children: (0, r.jsx)(c, { color: "currentColor", className: T.icon }),
                    }),
            (0, r.jsxs)("div", {
                className: T.label,
                children: [
                    (0, r.jsx)(G, { children: O(s ?? t, { isFocused: m, disabled: p }) }),
                    null != o &&
                        (0, r.jsx)(R.E, {
                            variant: "body-xs/normal",
                            className: i()(T.subtext, { [T.subtextLineClamp]: null != u }),
                            lineClamp: u,
                            children: o,
                        }),
                ],
            }),
            (0, r.jsx)("div", { className: T.iconContainer, children: (0, r.jsx)(el.T, { checked: a, disabled: p }) }),
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
        { onInteraction: h } = l.useContext(A.x),
        f = l.useRef(null);
    l.useEffect(() => {
        c && X(f);
    }, [c]);
    let b = l.useCallback(() => {
        (p(!o), h?.({ type: A.Q.SWITCH }));
    }, [p, o, h]);
    return (0, r.jsxs)(D.D, {
        innerRef: f,
        className: i()(T.item, T.switchItem, _[n], m, { [T.disabled]: u, [T.focused]: c }),
        onClick: u ? void 0 : b,
        "aria-checked": o,
        "aria-disabled": u,
        ...d,
        children: [
            null != t
                ? (0, r.jsx)("div", {
                      className: T.labelContainer,
                      children: (0, r.jsxs)("div", {
                          className: T.label,
                          children: [
                              (0, r.jsx)(G, { children: t }),
                              null != s &&
                                  (0, r.jsx)(R.E, {
                                      variant: "body-xs/normal",
                                      className: i()(T.subtext, { [T.subtextLineClamp]: null != a }),
                                      lineClamp: a,
                                      children: s,
                                  }),
                          ],
                      }),
                  })
                : null,
            (0, r.jsx)("div", {
                className: T.switchContainer,
                "aria-hidden": !0,
                children: (0, r.jsx)(ei.d, { checked: o, disabled: u, displayOnly: !0 }),
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
        { onInteraction: h } = l.useContext(A.x),
        f = l.useRef(null),
        b = l.useRef(null),
        x = l.useRef(null),
        [y, g] = l.useState(null);
    (l.useLayoutEffect(() => {
        if ("" === o || null == x.current || null == b.current) return void g(null);
        let e = b.current,
            n = window.getComputedStyle(e),
            t = x.current;
        ((t.style.font = n.font), (t.style.letterSpacing = n.letterSpacing));
        let s = t.getBoundingClientRect().width,
            r = parseFloat(n.paddingLeft) + parseFloat(n.paddingRight);
        g(Math.ceil(s + (Number.isNaN(r) ? 24 : r) + 2));
    }, [o]),
        l.useEffect(() => {
            p && (X(f), b.current?.focus());
        }, [p]));
    let v = l.useCallback(
        (e) => {
            (a(e), h?.({ type: A.Q.DEFAULT }));
        },
        [a, h],
    );
    return (0, r.jsxs)("div", {
        ref: f,
        className: i()(T.item, T.textInputItem, T.hideInteraction, _[n], { [T.disabled]: c }),
        "aria-disabled": c,
        ...m,
        children: [
            null != t
                ? (0, r.jsx)("div", {
                      className: T.labelContainer,
                      children: (0, r.jsx)("div", { className: T.label, children: t }),
                  })
                : null,
            (0, r.jsxs)("div", {
                className: T.textInputWrapper,
                style: null != y ? { minWidth: y } : void 0,
                children: [
                    (0, r.jsx)("span", { ref: x, "aria-hidden": !0, style: ec, children: o }),
                    (0, r.jsx)(eu.k, {
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
        { onInteraction: h } = l.useContext(A.x),
        f = l.useRef(null),
        b = l.useRef(null);
    l.useLayoutEffect(() => {
        o ? (X(f), b.current?.focus()) : u && b.current?.blur?.();
    }, [o, u]);
    let x = l.useCallback(() => {
            b.current?.activate?.() && m();
        }, [m]),
        y = s(
            {
                onClose: m,
                disabled: a,
                isFocused: o,
                onInteraction: l.useCallback(
                    (e) => {
                        h?.({ type: e ?? A.Q.DEFAULT });
                    },
                    [h],
                ),
                tabIndex: p.tabIndex,
            },
            b,
        );
    return (0, r.jsxs)("div", {
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
                ? (0, r.jsx)("div", {
                      className: T.labelContainer,
                      children: (0, r.jsx)("div", { className: T.label, children: t }),
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
        c = l.useRef(null);
    return (
        l.useLayoutEffect(() => {
            if (!s) return;
            let e = c.current;
            if (null == e) return;
            X(c);
            let n = e.querySelector('[tabindex="0"]');
            n?.focus();
        }, [s]),
        (0, r.jsx)("div", {
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
            onSelect: m,
            onInteraction: h,
        } = e,
        f = (function e(n) {
            return (function e(n) {
                return null == n
                    ? []
                    : l.Children.toArray(n).flatMap((n) =>
                          null == n
                              ? []
                              : Array.isArray(n)
                                ? e(n)
                                : l.isValidElement(n) && n.type === l.Fragment
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
        b = (function e(n) {
            return n.reduce(
                (n, t) => (
                    t.navigable &&
                        n.push({
                            key: t.key,
                            children: "item" === t.type && null != t.children ? e(t.children) : void 0,
                        }),
                    n
                ),
                [],
            );
        })(f),
        j = l.useRef([]);
    u()(j.current, b) || (j.current = b);
    let k = E("Menu"),
        w = f.find((e) => null != e.key)?.key,
        _ = (function (e) {
            let {
                    navId: n,
                    items: t,
                    initialFocusPath: s,
                    onSelect: r,
                    enabled: a = !0,
                    closeMenu: i,
                    defaultIsUsingKeyboardNavigation: o = !1,
                } = e,
                u = l.useRef(a);
            l.useLayoutEffect(() => {
                u.current = a;
            }, [a]);
            let [p, m] = l.useReducer(x, { items: t, focusPath: s, focusIndex: -1 }),
                h = l.useMemo(() => (0, y.nF)(m, 30), [m]);
            l.useEffect(() => {
                m({ type: d.UPDATE_ITEMS, items: t });
            }, [t]);
            let { focusPath: f } = p,
                [b, g] = l.useState(!1),
                [v, C] = l.useState(o),
                [{ onItemFocusMemoizer: j, onItemMouseEnterMemoizer: N }] = l.useState(() => ({
                    onItemFocusMemoizer: new y.Lp((e) => () => {
                        (g(!0), m({ type: d.SET_FOCUS_PATH, path: e.split("--") }));
                    }),
                    onItemMouseEnterMemoizer: new y.Lp((e) => () => {
                        (C(!1), m({ type: d.SET_FOCUS_PATH, path: e.split("--") }));
                    }),
                })),
                I = l.useCallback(
                    (e) => {
                        var t, s;
                        if (!u.current) return;
                        e.key === c.D$.ESCAPE && null != i && (e.stopPropagation(), e.preventDefault(), i());
                        let l = (function (e) {
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
                        switch (l) {
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
                                    (l === c.X2.NAVIGATE_IN || l === c.X2.NAVIGATE_OUT)
                                )
                                    return;
                                (e.preventDefault(), e.stopPropagation(), C(!0), h({ type: l }));
                                return;
                            case c.X2.SELECT_FOCUSED_ITEM:
                                if (e.repeat || e.target.tabIndex >= 0) return;
                                if ((e.preventDefault(), e.stopPropagation(), C(!1), h({ type: l }), null != r))
                                    return void r(f);
                                let o = e.target.ownerDocument ?? document,
                                    d = ((s = null != f ? `${(0, y.M4)(n, f.join("--"))}` : n), o.getElementById(s));
                                d?.dispatchEvent(
                                    new MouseEvent("click", {
                                        bubbles: !0,
                                        cancelable: !0,
                                        shiftKey: e.shiftKey,
                                        ctrlKey: e.ctrlKey,
                                        metaKey: e.metaKey,
                                        altKey: e.altKey,
                                        view: o.defaultView ?? window,
                                    }),
                                );
                        }
                    },
                    [h, n, f, r, i],
                ),
                k = l.useCallback(() => {
                    b || g(!0);
                }, [b]),
                E = l.useCallback(
                    (e) => {
                        e.target !== e.currentTarget && !e.currentTarget.contains(e.relatedTarget) && b && g(!1);
                    },
                    [b],
                ),
                P = l.useCallback(() => {
                    (m({ type: d.SET_FOCUS_PATH, path: [] }), g(!1));
                }, []),
                A = l.useCallback((e) => e.every((e, n) => f[n] === e), [f]),
                T = l.useCallback(
                    () => ({
                        role: "menu",
                        id: n,
                        tabIndex: -1,
                        onKeyDown: I,
                        onFocus: k,
                        onBlur: E,
                        onMouseLeave: P,
                        "aria-activedescendant": f.length > 0 ? (0, y.M4)(n, f.join("--")) : void 0,
                    }),
                    [n, I, k, E, P, f],
                ),
                S = l.useCallback(
                    (e) => {
                        let { path: t } = e;
                        return {
                            role: "menu",
                            tabIndex: -1,
                            "aria-activedescendant": A(t) ? (0, y.M4)(n, f.join("--")) : void 0,
                            focusIndex: p.focusIndex,
                            isUsingKeyboardNavigation: v,
                        };
                    },
                    [n, f, A, p.focusIndex, v],
                ),
                w = l.useCallback(
                    (e) => {
                        let { path: t, hasSubmenu: s = !1, navigable: r = !0, role: l = "menuitem" } = e,
                            a = t.join("--");
                        return {
                            ...(s ? { "aria-expanded": A(t), "aria-haspopup": !0 } : {}),
                            role: l,
                            id: (0, y.M4)(n, a),
                            tabIndex: -1,
                            onFocus: r ? j.get(a) : () => {},
                            onMouseEnter: r ? N.get(a) : () => {},
                        };
                    },
                    [n, A, j, N],
                );
            return l.useMemo(
                () => ({
                    dispatch: h,
                    getContainerProps: T,
                    getSubmenuProps: S,
                    getItemProps: w,
                    isFocused: A,
                    isUsingKeyboardNavigation: v,
                }),
                [h, T, S, w, A, v],
            );
        })({
            navId: n,
            items: j.current,
            initialFocusPath: I.Ay.keyboardModeEnabled && null != w ? [w] : [],
            closeMenu: p,
            defaultIsUsingKeyboardNavigation: I.Ay.keyboardModeEnabled,
        });
    l.useEffect(() => {
        _.isUsingKeyboardNavigation ? I.Ay.keyboardModeEnabled || (0, N.uS)() : I.Ay.keyboardModeEnabled && (0, N.Bm)();
    }, [_.isUsingKeyboardNavigation]);
    let F = l.useRef(null),
        D = l.useContext(g.jQ),
        R = "none" !== (D?.focus ?? "none");
    ((0, v.tj)(F, { disable: R }),
        l.useEffect(() => {
            R && F.current?.focus();
        }, [R]));
    let L = s ? C.d_ : C.Ip,
        U = l.useMemo(() => ({ onSelect: m, onInteraction: h }), [m, h]);
    return (0, r.jsx)(A.x.Provider, {
        value: U,
        children: (0, r.jsx)("div", {
            className: i()(T.menu, T[t], a),
            style: {
                "--custom-menu-viewport-padding": k ? "48px" : "16px",
                "--custom-menu-flexible-min-width": k ? "144px" : "188px",
            },
            ..._.getContainerProps(),
            ref: F,
            "aria-label": e["aria-label"],
            children: (0, r.jsxs)(L, {
                className: i()(T.scroller, { [T.scrollerWithScrollbar]: !s }),
                children: [
                    0 === f.length &&
                        (0, r.jsx)(Y, {
                            disabled: !0,
                            void_label: () => (0, r.jsx)(eb, {}),
                            menuItemProps: _.getItemProps({ path: ["empty"] }),
                            isFocused: !1,
                            onFocus: () => {},
                            onClose: p,
                        }),
                    f.length > 0 &&
                        (function e(n, t, s, l) {
                            let a = 0,
                                i = [];
                            return n.reduce((n, o, u) => {
                                let c = i.length > 0 ? i[i.length - 1] : n;
                                switch (o.type) {
                                    case "separator":
                                        (c.push((0, r.jsx)(S, {}, `separator-${u}`)), (a = 0));
                                        break;
                                    case "groupstart":
                                        (a > 0 &&
                                            o.length > 0 &&
                                            (c.push((0, r.jsx)(S, {}, `separator-${u}`)), (a = 0)),
                                            i.push([]));
                                        break;
                                    case "groupend":
                                        i.length > 0 &&
                                            n.push((0, r.jsx)(M, { contents: i.pop(), ...o.props }, `group-${u}`));
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
                                            b = (0, r.jsx)(
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
                                                    onClose: l,
                                                },
                                                o.key,
                                            );
                                        (m
                                            ? null != i
                                                ? c.push(
                                                      (0, r.jsx)(
                                                          Z,
                                                          {
                                                              ...o.props,
                                                              parentItem: b,
                                                              isFocused: f,
                                                              menuSubmenuProps: t.getSubmenuProps({ path: h }),
                                                              rows: e(n, t, h, l),
                                                              rowHeight: i,
                                                              onScroll: u,
                                                              listClassName: d,
                                                          },
                                                          `${o.key}-submenu`,
                                                      ),
                                                  )
                                                : c.push(
                                                      (0, r.jsx)(
                                                          en,
                                                          {
                                                              ...o.props,
                                                              subMenuClassName: p,
                                                              parentItem: b,
                                                              isFocused: f,
                                                              menuSubmenuProps: t.getSubmenuProps({ path: h }),
                                                              renderSubmenu: () => e(n, t, h, l),
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
                                            (0, r.jsx)(
                                                et,
                                                {
                                                    ...o.props,
                                                    isFocused: t.isFocused(e),
                                                    menuItemProps: t.getItemProps({ path: e, navigable: o.navigable }),
                                                    onClose: l,
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
                                            (0, r.jsx)(
                                                er,
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
                                            (0, r.jsx)(
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
                                            (0, r.jsx)(
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
                                            (0, r.jsx)(
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
                                            (0, r.jsx)(
                                                ep,
                                                {
                                                    ...o.props,
                                                    isFocused: t.isFocused(e),
                                                    isUsingKeyboardNavigation: t.isUsingKeyboardNavigation,
                                                    menuItemProps: t.getItemProps({ path: e }),
                                                    onClose: l,
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
                                            (0, r.jsx)(
                                                em,
                                                {
                                                    ...o.props,
                                                    isFocused: t.isFocused(e),
                                                    menuItemProps: t.getItemProps({ path: e }),
                                                    onClose: l,
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
                        })(f, _, [], p),
                ],
            }),
        }),
    });
}
function ef() {
    return (0, r.jsx)("div", { className: i()(T.menu, T.loader, T.flexible), children: (0, r.jsx)(j.y, {}) });
}
function eb() {
    let e = "\u266B (\u3064\uFF61\u25D5\u203F\u203F\u25D5\uFF61)\u3064 \u266A",
        [n, t] = l.useState(e);
    return (
        l.useEffect(() => {
            if (I.Ay.useReducedMotion) return;
            let n = setInterval(() => {
                t((n) => (n === e ? "\u266B \u2282(\uFF61\u25D5\u203F\u203F\u25D5\uFF61\u2282) \u266A" : e));
            }, 700);
            return () => clearInterval(n);
        }, []),
        (0, r.jsx)("div", { style: { width: "100%", textAlign: "center" }, children: n })
    );
}
