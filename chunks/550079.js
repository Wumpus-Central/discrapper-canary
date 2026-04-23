"use strict";
n.d(t, { W: () => eu, X: () => ec }), n(321073);
var i,
    r = n(627968),
    s = n(64700),
    a = n(503698),
    o = n.n(a),
    l = n(812729),
    d = n.n(l),
    _ = n(741918),
    u = (((i = {}).UPDATE_ITEMS = "UPDATE_ITEMS"), (i.SET_FOCUS_PATH = "SET_FOCUS_PATH"), i);
function c(e, t) {
    return e.findIndex((e) => t === e.key);
}
function E(e) {
    return e.focusPath[e.focusPath.length - 1];
}
function h(e) {
    let t = e.items;
    for (let n = 0; n < e.focusPath.length - 1; n++) {
        if (null == t) return;
        let i = c(t, e.focusPath[n]);
        t = t[i].children;
    }
    return t;
}
function m(e, t) {
    let n = e,
        i = [];
    for (let e = 0; e < t.length && null != n; e++) {
        let r = t[e],
            s = c(n, r);
        if (s < 0 || s >= n.length) {
            let e = n[0];
            null != e && i.push(e.key);
            break;
        }
        i.push(r), (n = n[s].children);
    }
    return i;
}
function f(e) {
    let t = E(e),
        n = h(e);
    return null == n ? -1 : c(n, t);
}
function g(e, t) {
    switch (t.type) {
        case _.X2.NAVIGATE_UP:
            let n = E(e),
                i = h(e);
            if (null == i) return e;
            let r = (c(i, n) - 1) % i.length;
            if ((r < 0 && (r = i.length - 1), null == i[r])) return e;
            let s = { ...e, focusPath: [...e.focusPath.slice(0, -1), i[r].key] };
            return { ...s, focusIndex: f(s) };
        case _.X2.NAVIGATE_DOWN:
            let a = E(e),
                o = h(e);
            if (null == o) return e;
            let l = (c(o, a) + 1) % o.length;
            if (null == o[l]) return e;
            let d = { ...e, focusPath: [...e.focusPath.slice(0, -1), o[l].key] };
            return { ...d, focusIndex: f(d) };
        case _.X2.NAVIGATE_IN:
            return (function (e) {
                let t = E(e),
                    n = h(e);
                if (null == n) return e;
                let i = n[c(n, t)],
                    r = i?.children?.[0];
                if (null == r) return e;
                let s = { ...e, focusPath: [...e.focusPath, r.key] };
                return { ...s, focusIndex: f(s) };
            })(e);
        case _.X2.NAVIGATE_OUT:
            if (e.focusPath.length <= 1) return e;
            let u = { ...e, focusPath: e.focusPath.slice(0, -1) };
            return { ...u, focusIndex: f(u) };
        case "UPDATE_ITEMS":
            return (function (e, t) {
                let { items: n } = t,
                    i = { ...e, items: n, focusPath: m(n, e.focusPath) };
                return { ...i, focusIndex: f(i) };
            })(e, t);
        case "SET_FOCUS_PATH":
            return (function (e, t) {
                let { path: n } = t,
                    i = { ...e, focusPath: m(e.items, n) };
                return { ...i, focusIndex: f(i) };
            })(e, t);
        case _.X2.SELECT_FOCUSED_ITEM:
            return e;
        default:
            throw Error(`Menu navigator was given an unhandled action ${t.type}`);
    }
}
var p = n(602034),
    A = n(508382),
    I = n(315710),
    T = n(364522),
    S = n(289873),
    N = n(955572),
    C = n(775602),
    R = n(298063),
    O = n(477782),
    y = n(900283),
    v = n(32271);
function D() {
    let e = (0, R.Y)("MenuSeparator");
    return (0, r.jsx)("div", {
        role: "separator",
        className: v.separator,
        style: { "--custom-menu-separator-margin": e ? "8px 0" : "8px" },
    });
}
let L = {
    default: v.colorDefault,
    brand: v.colorBrand,
    danger: v.colorDanger,
    premium: v.colorPremium,
    "premium-gradient": v.colorPremiumGradient,
    success: v.colorSuccess,
};
function b(e) {
    let { contents: t, label: n, className: i, color: s = "default" } = e;
    return 0 === t.length
        ? null
        : (0, r.jsxs)("div", {
              "aria-label": n,
              role: "group",
              className: i,
              children: [
                  null != n
                      ? (0, r.jsx)("div", { className: o()(v.groupLabel, v.hideInteraction, L[s]), children: n })
                      : null,
                  t,
              ],
          });
}
var w = n(939249),
    P = n(834730),
    k = n(508770),
    M = n(320448);
function U(e, t) {
    return "function" == typeof e ? e(t) : e;
}
function x(e) {
    C.A.keyboardModeEnabled && e.current?.scrollIntoView({ block: "nearest" });
}
var G = n(745396);
function V(e) {
    let t = s.useRef(null),
        [n, i] = s.useState(null),
        a = (0, R.Y)("MenuLabel");
    return (s.useLayoutEffect(() => {
        if (a && null != t.current) {
            let { scrollWidth: e, clientWidth: n } = t.current;
            e > n ? i(e - n) : i(null);
        }
    }, [a, e.children]),
    a)
        ? (0, r.jsx)("div", {
              className: v.marqueeContainer,
              "data-overflow": null != n ? "" : void 0,
              children: (0, r.jsx)("span", {
                  ref: t,
                  className: v.marqueeText,
                  style: null != n ? { "--custom-marquee-overflow": `${n}px` } : void 0,
                  children: e.children,
              }),
          })
        : e.children;
}
var F = n(844222),
    B = n(545442),
    H = n(133171),
    j = n(486020);
function W(e) {
    let { accessory: t, isFocused: n } = e,
        { reducedMotion: i } = s.useContext(F.C);
    switch (t.type) {
        case "icon": {
            let { type: e, icon: n, color: i = "currentColor", className: s, ...a } = t;
            return (0, r.jsx)("div", {
                className: v.iconContainerLeft,
                children: (0, r.jsx)(n, { "aria-hidden": !0, color: i, ...a, className: o()(v.icon, s) }),
            });
        }
        case "emoji": {
            let e = (function (e, t, n) {
                let { emojiId: i, src: r, animated: s = !1 } = e;
                return null != i ? j.Ay.getEmojiURL({ id: i, animated: s && (!n || t), size: 18 }) : r;
            })(t, n, i.enabled);
            return (0, r.jsx)("div", {
                className: v.iconContainerLeft,
                children: (0, r.jsx)("img", { "aria-hidden": !0, alt: "", src: e, className: v.icon }),
            });
        }
        case "image":
            return (0, r.jsx)("img", { "aria-hidden": !0, alt: "", src: t.src, className: v.imageAccessory });
        case "avatar":
            return (0, r.jsx)("img", { "aria-hidden": !0, alt: "", src: t.src, className: v.avatarAccessory });
        case "roleDot": {
            let { variant: e, color: n, colors: i } = t;
            return (0, r.jsx)("div", {
                className: v.roleDotAccessory,
                children:
                    "dot" === e
                        ? (0, r.jsx)(B.W, { color: n, colors: i, background: !1, tooltip: !1 })
                        : (0, r.jsx)(B.R, { color: n, colors: i ?? null }),
            });
        }
        case "status": {
            let { status: e } = t;
            return (0, r.jsx)("div", {
                className: v.statusAccessory,
                children: (0, r.jsx)(H.nW, { status: e, size: 10, color: n ? "currentColor" : void 0 }),
            });
        }
        case "guildTag":
            return (0, r.jsx)("div", { className: v.guildTagAccessory, children: t.element });
    }
}
function Y(e) {
    let { indicator: t } = e,
        { type: n, icon: i, color: s = "currentColor", className: a, ...l } = t;
    return (0, r.jsx)("div", {
        className: v.iconContainer,
        children: (0, r.jsx)(i, { "aria-hidden": !0, color: s, ...l, className: o()(v.icon, a) }),
    });
}
function K(e) {
    let {
            color: t = "default",
            label: n,
            void_label: i,
            icon: a,
            iconLeft: l,
            leadingAccessory: d,
            trailingIndicator: _,
            shortcut: u,
            subtext: c,
            subtextLineClamp: E,
            hasSubmenu: h,
            loading: m,
            badge: f,
            disabled: g,
            isFocused: p,
            menuItemProps: A,
            action: I,
            onClose: T,
            onFocus: N,
            className: C,
            focusedClassName: O,
            dontCloseOnActionIfHoldingShiftKey: D,
            dontCloseOnAction: b,
            iconProps: F,
        } = e,
        { onSelect: B, onInteraction: H } = s.useContext(y.x),
        j = s.useRef(null),
        K = (0, R.Y)("MenuItem"),
        z = s.useCallback(
            (e) => {
                if ((H?.({ type: y.Q.DEFAULT }), null == I)) return !1;
                (e.shiftKey && D) || b || T(),
                    e.persist(),
                    B?.(),
                    (e.nativeEvent.view ?? window).requestAnimationFrame(() => I(e));
            },
            [I, T, B, D, b, H],
        );
    return (
        s.useEffect(() => {
            p && (x(j), N?.());
        }, [p, N]),
        (0, r.jsxs)(w.D, {
            innerRef: j,
            className: o()(v.item, v.labelContainer, L[t], C, { [v.disabled]: g, [v.focused]: p, [O ?? ""]: p }),
            onClick: g ? void 0 : z,
            "aria-disabled": g,
            ...A,
            "data-menu-item": "true",
            children: [
                K || d?.type === "status"
                    ? null != d && (0, r.jsx)(W, { accessory: d, isFocused: p })
                    : (0, G.O)(l)
                      ? l
                      : null != l &&
                        (0, r.jsx)("div", {
                            className: v.iconContainerLeft,
                            children: (0, r.jsx)(l, {
                                color: "currentColor",
                                ...F,
                                className: o()(v.icon, F?.className),
                            }),
                        }),
                (0, r.jsxs)("div", {
                    className: v.label,
                    children: [
                        (0, r.jsx)(V, { children: U(i ?? n, e) }),
                        null != c &&
                            (0, r.jsx)(P.E, {
                                variant: "text-xs/normal",
                                className: o()(v.subtext, { [v.subtextLineClamp]: null != E }),
                                lineClamp: E,
                                children: c,
                            }),
                    ],
                }),
                null != u && (0, r.jsx)("div", { className: v.shortcutContainer, children: u }),
                null != f && (0, r.jsx)("div", { className: v.badgeContainer, children: (0, r.jsx)(k.E, { type: f }) }),
                m &&
                    (0, r.jsx)("div", {
                        className: v.iconContainer,
                        children: (0, r.jsx)(S.y, { type: S.y.Type.PULSING_ELLIPSIS }),
                    }),
                K
                    ? null != _ && (0, r.jsx)(Y, { indicator: _ })
                    : (0, G.O)(a)
                      ? a
                      : null != a &&
                        (0, r.jsx)("div", {
                            className: v.iconContainer,
                            children: (0, r.jsx)(a, {
                                color: "currentColor",
                                ...F,
                                className: o()(v.icon, F?.className),
                            }),
                        }),
                h &&
                    (0, r.jsx)("div", {
                        className: v.iconContainer,
                        children: (0, r.jsx)(M._, { size: "md", color: "currentColor", className: v.caret }),
                    }),
            ],
        })
    );
}
var z = n(502939),
    $ = n(623646),
    q = n(962125);
function X(e) {
    let { parentItem: t, isFocused: n, menuSubmenuProps: i, rows: a, rowHeight: o, onScroll: l, listClassName: d } = e,
        _ = s.useRef(null),
        u = s.useRef(null),
        c = s.useRef(null),
        E = s.useRef(null),
        { isUsingKeyboardNavigation: h, focusIndex: m, ...f } = i;
    s.useLayoutEffect(() => {
        n && (x(_), c.current?.focus());
    }, [n]),
        s.useEffect(() => {
            n && m >= 0 && h && E.current?.scrollRowIntoView(m);
        }, [n, h, m]);
    let g = s.useCallback((e) => a[e], [a]),
        p = (0, z.D)("MenuSubmenuListItem"),
        I = () =>
            a.length > 0 &&
            (0, r.jsx)("div", {
                className: v.submenuPaddingContainer,
                children: (0, r.jsx)("div", {
                    className: v.submenu,
                    ...f,
                    ref: c,
                    children: (0, r.jsx)(q.A, {
                        ref: E,
                        className: d,
                        listPadding: [6, 0, 6, 8],
                        onScroll: l,
                        renderRow: g,
                        rowCount: a.length,
                        rowHeight: o,
                    }),
                }),
            });
    if (p)
        return (0, r.jsx)(A.Ow, {
            spacing: 4,
            placement: "right-start",
            autoFlip: !0,
            portal: !1,
            viewportPadding: 48,
            maxHeight: 360,
            renderLayer: I,
            children: (e) => {
                let { ref: n, props: i } = e;
                return (0, r.jsx)("div", { ref: n, ...i, children: t });
            },
        });
    let T = (0, r.jsx)($.Q, {
        targetRef: u,
        autoInvert: !0,
        nudgeAlignIntoViewport: !0,
        fixed: !0,
        spacing: 4,
        position: "right",
        align: "top",
        className: v.submenuLayer,
        children: I,
    });
    return (0, r.jsxs)("div", { ref: _, children: [(0, r.jsx)("div", { ref: u }), t, n ? T : null] });
}
let Z = s.createContext("right-start");
function Q(e) {
    let t = s.useContext(Z),
        { subMenuClassName: n, parentItem: i, isFocused: a, menuSubmenuProps: l, renderSubmenu: d } = e,
        { focusIndex: _, isUsingKeyboardNavigation: u, ...c } = l,
        E = s.useRef(null),
        h = s.useRef(null),
        m = s.useRef(null),
        [f, g] = s.useState(!1);
    s.useLayoutEffect(() => {
        g(!0);
    }, []),
        s.useLayoutEffect(() => {
            a && x(E);
        }, [a]);
    let p = (0, r.jsx)("div", {
            className: v.submenuPaddingContainer,
            children: (0, r.jsx)("div", {
                className: o()(v.submenu, n),
                ...c,
                ref: m,
                children: (0, r.jsx)(T.Ip, { className: v.scroller, children: d() }),
            }),
        }),
        I = (0, z.D)("MenuSubmenuItem"),
        S = (0, R.Y)("MenuSubmenuItem"),
        [N, C] = s.useState(!1);
    if (I)
        return (0, r.jsx)(A.Ow, {
            open: N || a,
            viewportPadding: 48,
            maxHeight: 360,
            onOpenChange: C,
            spacing: S ? -4 : 4,
            placement: t,
            portal: !1,
            crossAccessFlip: !1,
            trigger: "hover",
            renderLayer: (e) => {
                let { placement: t } = e;
                return (0, r.jsx)(Z.Provider, { value: t, children: p });
            },
            children: (e) => {
                let { ref: t, props: n } = e;
                return (0, r.jsx)("div", { ref: t, ...n, children: i });
            },
        });
    let O = (0, r.jsx)($.Q, {
        targetRef: h,
        autoInvert: !0,
        nudgeAlignIntoViewport: !0,
        fixed: !0,
        spacing: 4,
        position: "right",
        align: "top",
        className: v.submenuLayer,
        children: () => p,
    });
    return (0, r.jsxs)("div", { ref: E, children: [(0, r.jsx)("div", { ref: h }), i, a && f ? O : null] });
}
function J(e) {
    let {
            children: t,
            color: n = "default",
            isFocused: i = !1,
            disabled: a = !1,
            keepItemStyles: l = !1,
            menuItemProps: d,
            action: _,
            dontCloseOnActionIfHoldingShiftKey: u,
            dontCloseOnAction: c,
            onClose: E,
        } = e,
        h = s.useRef(null);
    s.useEffect(() => {
        i && x(h);
    }, [i]);
    let m = s.useCallback(
            (e) => {
                if (null == _) return !1;
                (e.shiftKey && u) || c || E(), e.persist(), requestAnimationFrame(() => _(e));
            },
            [_, E, u, c],
        ),
        f = l ? o()(v.item, L[n], { [v.focused]: i }) : v.customItem;
    return (0, r.jsx)(w.D, {
        innerRef: h,
        className: f,
        onClick: a ? void 0 : m,
        "aria-disabled": a,
        ...d,
        children: t({ color: n, disabled: a, isFocused: i }),
    });
}
var ee = n(658675);
function et(e) {
    let {
            color: t = "default",
            label: n,
            void_label: i,
            checked: a,
            subtext: l,
            subtextLineClamp: d,
            leftIcon: _,
            leadingAccessory: u,
            disabled: c,
            isFocused: E,
            menuItemProps: h,
            action: m,
            className: f,
            focusedClassName: g,
        } = e,
        { onInteraction: p } = s.useContext(y.x),
        A = (0, R.Y)("MenuCheckboxItem"),
        I = s.useRef(null);
    s.useEffect(() => {
        E && x(I);
    }, [E]);
    let T = s.useCallback(
        (e) => {
            m(e), p?.({ type: y.Q.CHECKBOX });
        },
        [m, p],
    );
    return (0, r.jsxs)(w.D, {
        innerRef: I,
        className: o()(v.item, v.checkboxContainer, v.labelContainer, L[t], f, {
            [v.disabled]: c,
            [v.focused]: E,
            [g ?? ""]: E,
        }),
        onClick: c ? void 0 : T,
        ...h,
        "aria-checked": a,
        "aria-disabled": c,
        children: [
            A
                ? null != u && (0, r.jsx)(W, { accessory: u, isFocused: E })
                : (0, G.O)(_)
                  ? _
                  : null != _ &&
                    (0, r.jsx)("div", {
                        className: v.iconContainerLeft,
                        children: (0, r.jsx)(_, { color: "currentColor", className: v.icon }),
                    }),
            (0, r.jsxs)("div", {
                className: v.label,
                children: [
                    (0, r.jsx)(V, { children: U(i ?? n, { isFocused: E, disabled: c }) }),
                    null != l &&
                        (0, r.jsx)(P.E, {
                            variant: "text-xs/normal",
                            className: o()(v.subtext, { [v.subtextLineClamp]: null != d }),
                            lineClamp: d,
                            children: l,
                        }),
                ],
            }),
            (0, r.jsx)("div", {
                className: v.iconContainer,
                children: (0, r.jsx)(ee.P, { checked: a, disabled: c, size: 20 }),
            }),
        ],
    });
}
var en = n(144228);
function ei(e) {
    let {
            color: t = "default",
            label: n,
            void_label: i,
            checked: a,
            subtext: l,
            subtextLineClamp: d,
            leftIcon: _,
            leadingAccessory: u,
            disabled: c,
            isFocused: E,
            menuItemProps: h,
            action: m,
        } = e,
        { onInteraction: f } = s.useContext(y.x),
        g = (0, R.Y)("MenuRadioItem"),
        p = s.useRef(null);
    s.useEffect(() => {
        E && x(p);
    }, [E]);
    let A = s.useCallback(
        (e) => {
            m(e), f?.({ type: y.Q.RADIO });
        },
        [m, f],
    );
    return (0, r.jsxs)(w.D, {
        innerRef: p,
        className: o()(v.item, v.labelContainer, L[t], { [v.disabled]: c, [v.focused]: E }),
        onClick: c ? void 0 : A,
        ...h,
        "aria-checked": a,
        "aria-disabled": c,
        children: [
            g
                ? null != u && (0, r.jsx)(W, { accessory: u, isFocused: E })
                : (0, G.O)(_)
                  ? _
                  : null != _ &&
                    (0, r.jsx)("div", {
                        className: v.iconContainerLeft,
                        children: (0, r.jsx)(_, { color: "currentColor", className: v.icon }),
                    }),
            (0, r.jsxs)("div", {
                className: v.label,
                children: [
                    (0, r.jsx)(V, { children: U(i ?? n, { isFocused: E, disabled: c }) }),
                    null != l &&
                        (0, r.jsx)(P.E, {
                            variant: "text-xs/normal",
                            className: o()(v.subtext, { [v.subtextLineClamp]: null != d }),
                            lineClamp: d,
                            children: l,
                        }),
                ],
            }),
            (0, r.jsx)("div", {
                className: v.iconContainer,
                children: (0, r.jsx)(en.T, { checked: a, disabled: c, radioItemIconClassName: v.radioIcon }),
            }),
        ],
    });
}
var er = n(243721);
function es(e) {
    let {
            color: t = "default",
            label: n,
            subtext: i,
            subtextLineClamp: a,
            checked: l,
            disabled: d = !1,
            isFocused: _,
            menuItemProps: u,
            action: c,
            className: E,
        } = e,
        { onInteraction: h } = s.useContext(y.x),
        m = s.useRef(null),
        f = s.useId();
    s.useEffect(() => {
        _ && x(m);
    }, [_]);
    let g = s.useCallback(
        (e) => {
            c(e), h?.({ type: y.Q.SWITCH });
        },
        [c, h],
    );
    return (0, r.jsxs)("div", {
        ref: m,
        className: o()(v.item, v.switchItem, v.hideInteraction, L[t], E, { [v.disabled]: d }),
        "aria-checked": l,
        "aria-disabled": d,
        ...u,
        children: [
            null != n
                ? (0, r.jsx)("div", {
                      className: v.labelContainer,
                      children: (0, r.jsxs)("div", {
                          className: v.label,
                          children: [
                              (0, r.jsx)("label", { htmlFor: f, children: n }),
                              null != i &&
                                  (0, r.jsx)(P.E, {
                                      variant: "text-xs/normal",
                                      className: o()(v.subtext, { [v.subtextLineClamp]: null != a }),
                                      lineClamp: a,
                                      children: i,
                                  }),
                          ],
                      }),
                  })
                : null,
            (0, r.jsx)("div", {
                className: v.switchContainer,
                children: (0, r.jsx)(er.d, { id: f, checked: l, onChange: g, disabled: d }),
            }),
        ],
    });
}
var ea = n(292666);
let eo = { position: "absolute", visibility: "hidden", pointerEvents: "none", whiteSpace: "nowrap" };
function el(e) {
    let {
            color: t = "default",
            label: n,
            value: i,
            onChange: a,
            placeholder: l = "",
            maxLength: d,
            disabled: _ = !1,
            "aria-label": u,
            isFocused: c,
            menuItemProps: E,
        } = e,
        { onInteraction: h } = s.useContext(y.x),
        m = s.useRef(null),
        f = s.useRef(null),
        g = s.useRef(null),
        [p, A] = s.useState(null);
    s.useLayoutEffect(() => {
        if ("" === l || null == g.current || null == f.current) return void A(null);
        let e = f.current,
            t = window.getComputedStyle(e),
            n = g.current;
        (n.style.font = t.font), (n.style.letterSpacing = t.letterSpacing);
        let i = n.getBoundingClientRect().width,
            r = parseFloat(t.paddingLeft) + parseFloat(t.paddingRight);
        A(Math.ceil(i + (Number.isNaN(r) ? 24 : r) + 2));
    }, [l]),
        s.useEffect(() => {
            c && (x(m), f.current?.focus());
        }, [c]);
    let I = s.useCallback(
        (e) => {
            a(e), h?.({ type: y.Q.DEFAULT });
        },
        [a, h],
    );
    return (0, r.jsxs)("div", {
        ref: m,
        className: o()(v.item, v.textInputItem, v.hideInteraction, L[t], { [v.disabled]: _ }),
        "aria-disabled": _,
        ...E,
        children: [
            null != n
                ? (0, r.jsx)("div", {
                      className: v.labelContainer,
                      children: (0, r.jsx)("div", { className: v.label, children: n }),
                  })
                : null,
            (0, r.jsxs)("div", {
                className: v.textInputWrapper,
                style: null != p ? { minWidth: p } : void 0,
                children: [
                    (0, r.jsx)("span", { ref: g, "aria-hidden": !0, style: eo, children: l }),
                    (0, r.jsx)(ea.k, {
                        inputRef: f,
                        value: i,
                        onChange: I,
                        placeholder: l,
                        maxLength: d,
                        disabled: _,
                        "aria-label": u,
                    }),
                ],
            }),
        ],
    });
}
function ed(e) {
    let {
            color: t = "default",
            label: n,
            control: i,
            disabled: a,
            isFocused: l,
            showDefaultFocus: d = !1,
            interactive: _ = !0,
            menuItemProps: u,
            onClose: c,
        } = e,
        { onInteraction: E } = s.useContext(y.x),
        h = s.useRef(null),
        m = s.useRef(null);
    s.useLayoutEffect(() => {
        l ? (x(h), m.current?.focus()) : m.current?.blur?.();
    }, [l]);
    let f = s.useCallback(() => {
            m.current?.activate?.() && c();
        }, [c]),
        g = i(
            {
                onClose: c,
                disabled: a,
                isFocused: l,
                onInteraction: s.useCallback(
                    (e) => {
                        E?.({ type: e ?? y.Q.DEFAULT });
                    },
                    [E],
                ),
            },
            m,
        );
    return (0, r.jsxs)("div", {
        onClick: f,
        className: o()(v.item, L[t], {
            [v.disabled]: a,
            [v.focused]: d && l,
            [v.hideInteraction]: !d,
            [v.nonInteractive]: !_,
        }),
        "aria-disabled": a,
        ...u,
        children: [
            null != n
                ? (0, r.jsx)("div", {
                      className: v.labelContainer,
                      children: (0, r.jsx)("div", { className: v.label, children: n }),
                  })
                : null,
            g,
        ],
    });
}
function e_(e) {
    let {
            color: t = "default",
            disabled: n,
            isFocused: i,
            showDefaultFocus: a = !1,
            menuItemProps: l,
            children: d,
        } = e,
        _ = s.useRef(null);
    return (
        s.useLayoutEffect(() => {
            if (!i) return;
            let e = _.current;
            if (null == e) return;
            x(_);
            let t = e.querySelector('[tabindex="0"]');
            t?.focus();
        }, [i]),
        (0, r.jsx)("div", {
            ref: _,
            className: o()(v.item, L[t], { [v.disabled]: n, [v.focused]: a && i, [v.hideInteraction]: !a }),
            "aria-disabled": n,
            ...l,
            children: d,
        })
    );
}
function eu(e) {
    let {
            navId: t,
            variant: n = "flexible",
            hideScroller: i = !1,
            className: a,
            children: l,
            onClose: c,
            onSelect: E,
            onInteraction: h,
        } = e,
        m = (function e(t) {
            return (function e(t) {
                return null == t
                    ? []
                    : s.Children.toArray(t).flatMap((t) =>
                          null == t
                              ? []
                              : Array.isArray(t)
                                ? e(t)
                                : t.type === s.Fragment
                                  ? (e(t.props.children) ?? [])
                                  : [t],
                      );
            })(t).reduce((t, n) => {
                if (n.type === O.bX) return t.push({ type: "separator", navigable: !1 }), t;
                if (n.type === O.rX) {
                    let i = e(n.props.children);
                    return (
                        i.length > 0 &&
                            (t.push({ type: "groupstart", length: i.length, navigable: !1, props: n.props }),
                            t.push(...i),
                            t.push({ type: "groupend", length: i.length, navigable: !1, props: n.props })),
                        t
                    );
                }
                if (n.type === O.Dr)
                    return (
                        t.push(
                            null != n.props.render
                                ? {
                                      type: "customitem",
                                      key: n.props.id,
                                      navigable: null == n.props.navigable || n.props.navigable,
                                      render: n.props.render,
                                      props: n.props,
                                  }
                                : {
                                      type: "item",
                                      key: n.props.id,
                                      navigable: !0,
                                      label: n.props.label,
                                      void_label: n.props.void_label,
                                      children: n.props.children ? e(n.props.children) : void 0,
                                      onChildrenScroll: n.props.onChildrenScroll,
                                      props: n.props,
                                      childRowHeight: n.props.childRowHeight,
                                      listClassName: n.props.listClassName,
                                      subMenuClassName: n.props.subMenuClassName,
                                  },
                        ),
                        t
                    );
                if (n.type === O.sL)
                    return t.push({ type: "checkbox", key: n.props.id, navigable: !0, props: n.props }), t;
                if (n.type === O.iD)
                    return t.push({ type: "radio", key: n.props.id, navigable: !0, props: n.props }), t;
                else if (n.type === O.fP)
                    return t.push({ type: "switch", key: n.props.id, navigable: !0, props: n.props }), t;
                else if (n.type === O.Yn)
                    return t.push({ type: "textinput", key: n.props.id, navigable: !0, props: n.props }), t;
                else if (n.type === O.aK)
                    return (
                        t.push(
                            null != n.props.control
                                ? { type: "control", key: n.props.id, navigable: !0, props: n.props }
                                : {
                                      type: "compositecontrol",
                                      key: n.props.id,
                                      navigable: !1 !== n.props.interactive,
                                      children: n.props.children,
                                      props: n.props,
                                  },
                        ),
                        t
                    );
                throw Error(
                    `Menu API only allows Items and groups of Items as children. Received ${n?.type ?? n ?? typeof n} (${typeof n}) instead`,
                );
            }, []);
        })(l),
        f = (function e(t) {
            return t.reduce(
                (t, n) => (
                    n.navigable &&
                        t.push({
                            key: n.key,
                            children: "item" === n.type && null != n.children ? e(n.children) : void 0,
                        }),
                    t
                ),
                [],
            );
        })(m),
        S = s.useRef([]);
    d()(S.current, f) || (S.current = f);
    let L = (0, R.Y)("Menu"),
        w = m.find((e) => null != e.key)?.key,
        P = (function (e) {
            let {
                    navId: t,
                    items: n,
                    initialFocusPath: i,
                    onSelect: r,
                    enabled: a = !0,
                    closeMenu: o,
                    defaultIsUsingKeyboardNavigation: l = !1,
                } = e,
                d = s.useRef(a);
            s.useLayoutEffect(() => {
                d.current = a;
            }, [a]);
            let [c, E] = s.useReducer(g, { items: n, focusPath: i, focusIndex: -1 }),
                h = s.useMemo(() => (0, p.nF)(E, 30), [E]);
            s.useEffect(() => {
                E({ type: u.UPDATE_ITEMS, items: n });
            }, [n]);
            let { focusPath: m } = c,
                [f, A] = s.useState(!1),
                [I, T] = s.useState(l),
                [{ onItemFocusMemoizer: S, onItemMouseEnterMemoizer: N }] = s.useState(() => ({
                    onItemFocusMemoizer: new p.Lp((e) => () => {
                        A(!0), E({ type: u.SET_FOCUS_PATH, path: e.split("--") });
                    }),
                    onItemMouseEnterMemoizer: new p.Lp((e) => () => {
                        T(!1), E({ type: u.SET_FOCUS_PATH, path: e.split("--") });
                    }),
                })),
                C = s.useCallback(
                    (e) => {
                        var n, i, s;
                        if (!d.current) return;
                        e.key === _.D$.ESCAPE && null != o && (e.stopPropagation(), e.preventDefault(), o());
                        let a = (function (e) {
                            switch (e.key) {
                                case _.D$.ENTER:
                                case _.D$.SPACE:
                                    return _.X2.SELECT_FOCUSED_ITEM;
                                case _.D$.UP:
                                    return _.X2.NAVIGATE_UP;
                                case _.D$.DOWN:
                                    return _.X2.NAVIGATE_DOWN;
                                case _.D$.RIGHT:
                                    return _.X2.NAVIGATE_IN;
                                case _.D$.LEFT:
                                    return _.X2.NAVIGATE_OUT;
                            }
                        })(e);
                        switch (a) {
                            case _.X2.NAVIGATE_UP:
                            case _.X2.NAVIGATE_DOWN:
                            case _.X2.NAVIGATE_IN:
                            case _.X2.NAVIGATE_OUT:
                                let l;
                                if (
                                    ("textarea" === (l = (n = e.target).tagName.toLowerCase()) ||
                                        ("input" === l
                                            ? ["text", "search", "email", "url", "tel", "password"].includes(n.type)
                                            : n.isContentEditable)) &&
                                    (a === _.X2.NAVIGATE_IN || a === _.X2.NAVIGATE_OUT)
                                )
                                    return;
                                e.preventDefault(), e.stopPropagation(), T(!0), h({ type: a });
                                return;
                            case _.X2.SELECT_FOCUSED_ITEM:
                                if (e.repeat || e.target.tabIndex >= 0) return;
                                if ((e.preventDefault(), e.stopPropagation(), T(!1), h({ type: a }), null != r))
                                    return void r(m);
                                let u =
                                    ((i = e.target.ownerDocument ?? document),
                                    (s = null != m ? `${(0, p.M4)(t, m.join("--"))}` : t),
                                    i.getElementById(s));
                                u?.click();
                        }
                    },
                    [h, t, m, r, o],
                ),
                R = s.useCallback(() => {
                    f || A(!0);
                }, [f]),
                O = s.useCallback(
                    (e) => {
                        e.target !== e.currentTarget && !e.currentTarget.contains(e.relatedTarget) && f && A(!1);
                    },
                    [f],
                ),
                y = s.useCallback(() => {
                    E({ type: u.SET_FOCUS_PATH, path: [] }), A(!1);
                }, []),
                v = s.useCallback((e) => e.every((e, t) => m[t] === e), [m]),
                D = s.useCallback(
                    () => ({
                        role: "menu",
                        id: t,
                        tabIndex: -1,
                        onKeyDown: C,
                        onFocus: R,
                        onBlur: O,
                        onMouseLeave: y,
                        "aria-activedescendant": m.length > 0 ? (0, p.M4)(t, m.join("--")) : void 0,
                    }),
                    [t, C, R, O, y, m],
                ),
                L = s.useCallback(
                    (e) => {
                        let { path: n } = e;
                        return {
                            role: "menu",
                            tabIndex: -1,
                            "aria-activedescendant": v(n) ? (0, p.M4)(t, m.join("--")) : void 0,
                            focusIndex: c.focusIndex,
                            isUsingKeyboardNavigation: I,
                        };
                    },
                    [t, m, v, c.focusIndex, I],
                ),
                b = s.useCallback(
                    (e) => {
                        let { path: n, hasSubmenu: i = !1, navigable: r = !0, role: s = "menuitem" } = e,
                            a = n.join("--");
                        return {
                            ...(i ? { "aria-expanded": v(n), "aria-haspopup": !0 } : {}),
                            role: s,
                            id: (0, p.M4)(t, a),
                            tabIndex: -1,
                            onFocus: r ? S.get(a) : () => {},
                            onMouseEnter: r ? N.get(a) : () => {},
                        };
                    },
                    [t, v, S, N],
                );
            return s.useMemo(
                () => ({
                    dispatch: h,
                    getContainerProps: D,
                    getSubmenuProps: L,
                    getItemProps: b,
                    isFocused: v,
                    isUsingKeyboardNavigation: I,
                }),
                [h, D, L, b, v, I],
            );
        })({
            navId: t,
            items: S.current,
            initialFocusPath: C.A.keyboardModeEnabled && null != w ? [w] : [],
            closeMenu: c,
            defaultIsUsingKeyboardNavigation: C.A.keyboardModeEnabled,
        });
    s.useEffect(() => {
        P.isUsingKeyboardNavigation ? C.A.keyboardModeEnabled || (0, N.uS)() : C.A.keyboardModeEnabled && (0, N.Bm)();
    }, [P.isUsingKeyboardNavigation]);
    let k = s.useRef(null),
        M = s.useContext(A.jQ),
        U = "none" !== (M?.focus ?? "none");
    (0, I.t)(k, { disable: U }),
        s.useEffect(() => {
            U && k.current?.focus();
        }, [U]);
    let x = i ? T.d_ : T.Ip,
        G = s.useMemo(() => ({ onSelect: E, onInteraction: h }), [E, h]);
    return (0, r.jsx)(y.x.Provider, {
        value: G,
        children: (0, r.jsx)("div", {
            className: o()(v.menu, v[n], a),
            style: {
                "--custom-menu-viewport-padding": L ? "48px" : "16px",
                "--custom-menu-flexible-min-width": L ? "144px" : "188px",
            },
            ...P.getContainerProps(),
            ref: k,
            "aria-label": e["aria-label"],
            children: (0, r.jsxs)(x, {
                className: v.scroller,
                children: [
                    0 === m.length &&
                        (0, r.jsx)(K, {
                            disabled: !0,
                            void_label: () => (0, r.jsx)(eE, {}),
                            menuItemProps: P.getItemProps({ path: ["empty"] }),
                            isFocused: !1,
                            onFocus: () => {},
                            onClose: c,
                        }),
                    m.length > 0 &&
                        (function e(t, n, i, s) {
                            let a = 0,
                                o = [];
                            return t.reduce((t, l, d) => {
                                let _ = o.length > 0 ? o[o.length - 1] : t;
                                switch (l.type) {
                                    case "separator":
                                        _.push((0, r.jsx)(D, {}, `separator-${d}`)), (a = 0);
                                        break;
                                    case "groupstart":
                                        a > 0 && l.length > 0 && (_.push((0, r.jsx)(D, {}, `separator-${d}`)), (a = 0)),
                                            o.push([]);
                                        break;
                                    case "groupend":
                                        o.length > 0 &&
                                            t.push((0, r.jsx)(b, { contents: o.pop(), ...l.props }, `group-${d}`));
                                        break;
                                    case "item": {
                                        let {
                                                children: t,
                                                childRowHeight: o,
                                                onChildrenScroll: d,
                                                listClassName: u,
                                                subMenuClassName: c,
                                            } = l,
                                            E = null != t,
                                            h = [...i, l.key],
                                            m = n.isFocused(h),
                                            f = (0, r.jsx)(
                                                K,
                                                {
                                                    ...l.props,
                                                    ...(null != l.label
                                                        ? { label: l.label }
                                                        : { void_label: l.void_label }),
                                                    hasSubmenu: null != t,
                                                    isFocused: m,
                                                    menuItemProps: {
                                                        ...n.getItemProps({ path: h, hasSubmenu: E }),
                                                        ...(null != t ? { "aria-haspopup": !0 } : {}),
                                                    },
                                                    onClose: s,
                                                },
                                                l.key,
                                            );
                                        E
                                            ? null != o
                                                ? _.push(
                                                      (0, r.jsx)(
                                                          X,
                                                          {
                                                              ...l.props,
                                                              parentItem: f,
                                                              isFocused: m,
                                                              menuSubmenuProps: n.getSubmenuProps({ path: h }),
                                                              rows: e(t, n, h, s),
                                                              rowHeight: o,
                                                              onScroll: d,
                                                              listClassName: u,
                                                          },
                                                          `${l.key}-submenu`,
                                                      ),
                                                  )
                                                : _.push(
                                                      (0, r.jsx)(
                                                          Q,
                                                          {
                                                              ...l.props,
                                                              subMenuClassName: c,
                                                              parentItem: f,
                                                              isFocused: m,
                                                              menuSubmenuProps: n.getSubmenuProps({ path: h }),
                                                              renderSubmenu: () => e(t, n, h, s),
                                                          },
                                                          `${l.key}-submenu`,
                                                      ),
                                                  )
                                            : _.push(f),
                                            a++;
                                        break;
                                    }
                                    case "customitem": {
                                        let e = [...i, l.key];
                                        _.push(
                                            (0, r.jsx)(
                                                J,
                                                {
                                                    ...l.props,
                                                    isFocused: n.isFocused(e),
                                                    menuItemProps: n.getItemProps({ path: e, navigable: l.navigable }),
                                                    onClose: s,
                                                    children: l.render,
                                                },
                                                l.key,
                                            ),
                                        ),
                                            a++;
                                        break;
                                    }
                                    case "checkbox": {
                                        let e = [...i, l.key];
                                        _.push(
                                            (0, r.jsx)(
                                                et,
                                                {
                                                    ...l.props,
                                                    isFocused: n.isFocused(e),
                                                    menuItemProps: n.getItemProps({
                                                        path: e,
                                                        role: "menuitemcheckbox",
                                                    }),
                                                },
                                                l.key,
                                            ),
                                        ),
                                            a++;
                                        break;
                                    }
                                    case "radio": {
                                        let e = [...i, l.key];
                                        _.push(
                                            (0, r.jsx)(
                                                ei,
                                                {
                                                    ...l.props,
                                                    isFocused: n.isFocused(e),
                                                    menuItemProps: n.getItemProps({ path: e, role: "menuitemradio" }),
                                                },
                                                l.key,
                                            ),
                                        ),
                                            a++;
                                        break;
                                    }
                                    case "switch": {
                                        let e = [...i, l.key];
                                        _.push(
                                            (0, r.jsx)(
                                                es,
                                                {
                                                    ...l.props,
                                                    isFocused: n.isFocused(e),
                                                    menuItemProps: n.getItemProps({
                                                        path: e,
                                                        role: "menuitemcheckbox",
                                                    }),
                                                },
                                                l.key,
                                            ),
                                        ),
                                            a++;
                                        break;
                                    }
                                    case "textinput": {
                                        let e = [...i, l.key];
                                        _.push(
                                            (0, r.jsx)(
                                                el,
                                                {
                                                    ...l.props,
                                                    isFocused: n.isFocused(e),
                                                    menuItemProps: n.getItemProps({ path: e }),
                                                },
                                                l.key,
                                            ),
                                        ),
                                            a++;
                                        break;
                                    }
                                    case "control": {
                                        let e = [...i, l.key];
                                        _.push(
                                            (0, r.jsx)(
                                                ed,
                                                {
                                                    ...l.props,
                                                    isFocused: n.isFocused(e),
                                                    menuItemProps: n.getItemProps({ path: e }),
                                                    onClose: s,
                                                },
                                                l.key,
                                            ),
                                        ),
                                            a++;
                                        break;
                                    }
                                    case "compositecontrol": {
                                        let e = [...i, l.key];
                                        _.push(
                                            (0, r.jsx)(
                                                e_,
                                                {
                                                    ...l.props,
                                                    isFocused: n.isFocused(e),
                                                    menuItemProps: n.getItemProps({ path: e }),
                                                    onClose: s,
                                                    children: l.children,
                                                },
                                                l.key,
                                            ),
                                        ),
                                            a++;
                                    }
                                }
                                return t;
                            }, []);
                        })(m, P, [], c),
                ],
            }),
        }),
    });
}
function ec() {
    return (0, r.jsx)("div", { className: o()(v.menu, v.loader, v.flexible), children: (0, r.jsx)(S.y, {}) });
}
function eE() {
    let e = "♫ (つ｡◕‿‿◕｡)つ ♪",
        [t, n] = s.useState(e);
    return (
        s.useEffect(() => {
            if (C.A.useReducedMotion) return;
            let t = setInterval(() => {
                n((t) => (t === e ? "♫ ⊂(｡◕‿‿◕｡⊂) ♪" : e));
            }, 700);
            return () => clearInterval(t);
        }, []),
        (0, r.jsx)("div", { style: { width: "100%", textAlign: "center" }, children: t })
    );
}
