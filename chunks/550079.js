"use strict";
n.d(t, { W: () => eu, X: () => ec }), n(321073);
var i,
    r = n(627968),
    s = n(64700),
    a = n(503698),
    o = n.n(a),
    l = n(812729),
    _ = n.n(l),
    d = n(741918),
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
        case d.X2.NAVIGATE_UP:
            let n = E(e),
                i = h(e);
            if (null == i) return e;
            let r = (c(i, n) - 1) % i.length;
            if ((r < 0 && (r = i.length - 1), null == i[r])) return e;
            let s = { ...e, focusPath: [...e.focusPath.slice(0, -1), i[r].key] };
            return { ...s, focusIndex: f(s) };
        case d.X2.NAVIGATE_DOWN:
            let a = E(e),
                o = h(e);
            if (null == o) return e;
            let l = (c(o, a) + 1) % o.length;
            if (null == o[l]) return e;
            let _ = { ...e, focusPath: [...e.focusPath.slice(0, -1), o[l].key] };
            return { ..._, focusIndex: f(_) };
        case d.X2.NAVIGATE_IN:
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
        case d.X2.NAVIGATE_OUT:
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
        case d.X2.SELECT_FOCUSED_ITEM:
            return e;
        default:
            throw Error(`Menu navigator was given an unhandled action ${t.type}`);
    }
}
var A = n(602034),
    I = n(508382),
    p = n(315710),
    T = n(364522),
    S = n(289873),
    N = n(955572),
    O = n(775602),
    R = n(298063),
    C = n(477782),
    y = n(900283),
    D = n(32271);
function L() {
    let e = (0, R.Y)("MenuSeparator");
    return (0, r.jsx)("div", {
        role: "separator",
        className: D.separator,
        style: { "--custom-menu-separator-margin": e ? "8px 0" : "8px" },
    });
}
let v = {
    default: D.colorDefault,
    brand: D.colorBrand,
    danger: D.colorDanger,
    premium: D.colorPremium,
    "premium-gradient": D.colorPremiumGradient,
    success: D.colorSuccess,
};
function w(e) {
    let { contents: t, label: n, className: i, color: s = "default" } = e;
    return 0 === t.length
        ? null
        : (0, r.jsxs)("div", {
              "aria-label": n,
              role: "group",
              className: i,
              children: [
                  null != n
                      ? (0, r.jsx)("div", { className: o()(D.groupLabel, D.hideInteraction, v[s]), children: n })
                      : null,
                  t,
              ],
          });
}
var P = n(939249),
    b = n(834730),
    k = n(508770),
    U = n(320448);
function M(e, t) {
    return "function" == typeof e ? e(t) : e;
}
function G(e) {
    O.A.keyboardModeEnabled && e.current?.scrollIntoView({ block: "nearest" });
}
var x = n(745396);
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
              className: D.marqueeContainer,
              "data-overflow": null != n ? "" : void 0,
              children: (0, r.jsx)("span", {
                  ref: t,
                  className: D.marqueeText,
                  style: null != n ? { "--custom-marquee-overflow": `${n}px` } : void 0,
                  children: e.children,
              }),
          })
        : e.children;
}
var F = n(844222),
    B = n(545442),
    H = n(133171),
    Y = n(486020);
function W(e) {
    let { accessory: t, isFocused: n } = e,
        { reducedMotion: i } = s.useContext(F.C);
    switch (t.type) {
        case "icon": {
            let { type: e, icon: n, color: i = "currentColor", className: s, ...a } = t;
            return (0, r.jsx)("div", {
                className: D.iconContainerLeft,
                children: (0, r.jsx)(n, { "aria-hidden": !0, color: i, ...a, className: o()(D.icon, s) }),
            });
        }
        case "emoji": {
            let e = (function (e, t, n) {
                let { emojiId: i, src: r, animated: s = !1 } = e;
                return null != i ? Y.Ay.getEmojiURL({ id: i, animated: s && (!n || t), size: 18 }) : r;
            })(t, n, i.enabled);
            return (0, r.jsx)("div", {
                className: D.iconContainerLeft,
                children: (0, r.jsx)("img", { "aria-hidden": !0, alt: "", src: e, className: D.icon }),
            });
        }
        case "image":
            return (0, r.jsx)("img", { "aria-hidden": !0, alt: "", src: t.src, className: D.imageAccessory });
        case "avatar":
            return (0, r.jsx)("img", { "aria-hidden": !0, alt: "", src: t.src, className: D.avatarAccessory });
        case "roleDot": {
            let { variant: e, color: n, colors: i } = t;
            return (0, r.jsx)("div", {
                className: D.roleDotAccessory,
                children:
                    "dot" === e
                        ? (0, r.jsx)(B.W, { color: n, colors: i, background: !1, tooltip: !1 })
                        : (0, r.jsx)(B.R, { color: n, colors: i ?? null }),
            });
        }
        case "status": {
            let { status: e } = t;
            return (0, r.jsx)("div", {
                className: D.statusAccessory,
                children: (0, r.jsx)(H.nW, { status: e, size: 10, color: n ? "currentColor" : void 0 }),
            });
        }
        case "guildTag":
            return (0, r.jsx)("div", { className: D.guildTagAccessory, children: t.element });
    }
}
function K(e) {
    let { indicator: t } = e,
        { type: n, icon: i, color: s = "currentColor", className: a, ...l } = t;
    return (0, r.jsx)("div", {
        className: D.iconContainer,
        children: (0, r.jsx)(i, { "aria-hidden": !0, color: s, ...l, className: o()(D.icon, a) }),
    });
}
function j(e) {
    let {
            color: t = "default",
            label: n,
            void_label: i,
            icon: a,
            iconLeft: l,
            leadingAccessory: _,
            trailingIndicator: d,
            shortcut: u,
            subtext: c,
            subtextLineClamp: E,
            hasSubmenu: h,
            loading: m,
            badge: f,
            disabled: g,
            isFocused: A,
            menuItemProps: I,
            action: p,
            onClose: T,
            onFocus: N,
            className: O,
            focusedClassName: C,
            dontCloseOnActionIfHoldingShiftKey: L,
            dontCloseOnAction: w,
            iconProps: F,
        } = e,
        { onSelect: B, onInteraction: H } = s.useContext(y.x),
        Y = s.useRef(null),
        j = (0, R.Y)("MenuItem"),
        $ = s.useCallback(
            (e) => {
                if ((H?.({ type: y.Q.DEFAULT }), null == p)) return !1;
                (e.shiftKey && L) || w || T(),
                    e.persist(),
                    B?.(),
                    (e.nativeEvent.view ?? window).requestAnimationFrame(() => p(e));
            },
            [p, T, B, L, w, H],
        );
    return (
        s.useEffect(() => {
            A && (G(Y), N?.());
        }, [A, N]),
        (0, r.jsxs)(P.D, {
            innerRef: Y,
            className: o()(D.item, D.labelContainer, v[t], O, { [D.disabled]: g, [D.focused]: A, [C ?? ""]: A }),
            onClick: g ? void 0 : $,
            "aria-disabled": g,
            ...I,
            "data-menu-item": "true",
            children: [
                j || _?.type === "status"
                    ? null != _ && (0, r.jsx)(W, { accessory: _, isFocused: A })
                    : (0, x.O)(l)
                      ? l
                      : null != l &&
                        (0, r.jsx)("div", {
                            className: D.iconContainerLeft,
                            children: (0, r.jsx)(l, {
                                color: "currentColor",
                                ...F,
                                className: o()(D.icon, F?.className),
                            }),
                        }),
                (0, r.jsxs)("div", {
                    className: D.label,
                    children: [
                        (0, r.jsx)(V, { children: M(i ?? n, e) }),
                        null != c &&
                            (0, r.jsx)(b.E, {
                                variant: "text-xs/normal",
                                className: o()(D.subtext, { [D.subtextLineClamp]: null != E }),
                                lineClamp: E,
                                children: c,
                            }),
                    ],
                }),
                null != u && (0, r.jsx)("div", { className: D.shortcutContainer, children: u }),
                null != f && (0, r.jsx)("div", { className: D.badgeContainer, children: (0, r.jsx)(k.E, { type: f }) }),
                m &&
                    (0, r.jsx)("div", {
                        className: D.iconContainer,
                        children: (0, r.jsx)(S.y, { type: S.y.Type.PULSING_ELLIPSIS }),
                    }),
                j
                    ? null != d && (0, r.jsx)(K, { indicator: d })
                    : (0, x.O)(a)
                      ? a
                      : null != a &&
                        (0, r.jsx)("div", {
                            className: D.iconContainer,
                            children: (0, r.jsx)(a, {
                                color: "currentColor",
                                ...F,
                                className: o()(D.icon, F?.className),
                            }),
                        }),
                h &&
                    (0, r.jsx)("div", {
                        className: D.iconContainer,
                        children: (0, r.jsx)(U._, { size: "md", color: "currentColor", className: D.caret }),
                    }),
            ],
        })
    );
}
var $ = n(502939),
    z = n(623646),
    q = n(962125);
function X(e) {
    let { parentItem: t, isFocused: n, menuSubmenuProps: i, rows: a, rowHeight: o, onScroll: l, listClassName: _ } = e,
        d = s.useRef(null),
        u = s.useRef(null),
        c = s.useRef(null),
        E = s.useRef(null),
        { isUsingKeyboardNavigation: h, focusIndex: m, ...f } = i;
    s.useLayoutEffect(() => {
        n && (G(d), c.current?.focus());
    }, [n]),
        s.useEffect(() => {
            n && m >= 0 && h && E.current?.scrollRowIntoView(m);
        }, [n, h, m]);
    let g = s.useCallback((e) => a[e], [a]),
        A = (0, $.D)("MenuSubmenuListItem"),
        p = () =>
            a.length > 0 &&
            (0, r.jsx)("div", {
                className: D.submenuPaddingContainer,
                children: (0, r.jsx)("div", {
                    className: D.submenu,
                    ...f,
                    ref: c,
                    children: (0, r.jsx)(q.A, {
                        ref: E,
                        className: _,
                        listPadding: [6, 0, 6, 8],
                        onScroll: l,
                        renderRow: g,
                        rowCount: a.length,
                        rowHeight: o,
                    }),
                }),
            });
    if (A)
        return (0, r.jsx)(I.Ow, {
            spacing: 4,
            placement: "right-start",
            autoFlip: !0,
            portal: !1,
            viewportPadding: 48,
            maxHeight: 360,
            renderLayer: p,
            children: (e) => {
                let { ref: n, props: i } = e;
                return (0, r.jsx)("div", { ref: n, ...i, children: t });
            },
        });
    let T = (0, r.jsx)(z.Q, {
        targetRef: u,
        autoInvert: !0,
        nudgeAlignIntoViewport: !0,
        fixed: !0,
        spacing: 4,
        position: "right",
        align: "top",
        className: D.submenuLayer,
        children: p,
    });
    return (0, r.jsxs)("div", { ref: d, children: [(0, r.jsx)("div", { ref: u }), t, n ? T : null] });
}
let Q = s.createContext("right-start");
function J(e) {
    let t = s.useContext(Q),
        { subMenuClassName: n, parentItem: i, isFocused: a, menuSubmenuProps: l, renderSubmenu: _ } = e,
        { focusIndex: d, isUsingKeyboardNavigation: u, ...c } = l,
        E = s.useRef(null),
        h = s.useRef(null),
        m = s.useRef(null),
        [f, g] = s.useState(!1);
    s.useLayoutEffect(() => {
        g(!0);
    }, []),
        s.useLayoutEffect(() => {
            a && G(E);
        }, [a]);
    let A = (0, r.jsx)("div", {
            className: D.submenuPaddingContainer,
            children: (0, r.jsx)("div", {
                className: o()(D.submenu, n),
                ...c,
                ref: m,
                children: (0, r.jsx)(T.Ip, { className: D.scroller, children: _() }),
            }),
        }),
        p = (0, $.D)("MenuSubmenuItem"),
        S = (0, R.Y)("MenuSubmenuItem"),
        [N, O] = s.useState(!1);
    if (p)
        return (0, r.jsx)(I.Ow, {
            open: N || a,
            viewportPadding: 48,
            maxHeight: 360,
            onOpenChange: O,
            spacing: S ? -4 : 4,
            placement: t,
            portal: !1,
            crossAccessFlip: !1,
            trigger: "hover",
            renderLayer: (e) => {
                let { placement: t } = e;
                return (0, r.jsx)(Q.Provider, { value: t, children: A });
            },
            children: (e) => {
                let { ref: t, props: n } = e;
                return (0, r.jsx)("div", { ref: t, ...n, children: i });
            },
        });
    let C = (0, r.jsx)(z.Q, {
        targetRef: h,
        autoInvert: !0,
        nudgeAlignIntoViewport: !0,
        fixed: !0,
        spacing: 4,
        position: "right",
        align: "top",
        className: D.submenuLayer,
        children: () => A,
    });
    return (0, r.jsxs)("div", { ref: E, children: [(0, r.jsx)("div", { ref: h }), i, a && f ? C : null] });
}
function Z(e) {
    let {
            children: t,
            color: n = "default",
            isFocused: i = !1,
            disabled: a = !1,
            keepItemStyles: l = !1,
            menuItemProps: _,
            action: d,
            dontCloseOnActionIfHoldingShiftKey: u,
            dontCloseOnAction: c,
            onClose: E,
        } = e,
        h = s.useRef(null);
    s.useEffect(() => {
        i && G(h);
    }, [i]);
    let m = s.useCallback(
            (e) => {
                if (null == d) return !1;
                (e.shiftKey && u) || c || E(), e.persist(), requestAnimationFrame(() => d(e));
            },
            [d, E, u, c],
        ),
        f = l ? o()(D.item, v[n], { [D.focused]: i }) : D.customItem;
    return (0, r.jsx)(P.D, {
        innerRef: h,
        className: f,
        onClick: a ? void 0 : m,
        "aria-disabled": a,
        ..._,
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
            subtextLineClamp: _,
            leftIcon: d,
            leadingAccessory: u,
            disabled: c,
            isFocused: E,
            menuItemProps: h,
            action: m,
            className: f,
            focusedClassName: g,
        } = e,
        { onInteraction: A } = s.useContext(y.x),
        I = (0, R.Y)("MenuCheckboxItem"),
        p = s.useRef(null);
    s.useEffect(() => {
        E && G(p);
    }, [E]);
    let T = s.useCallback(
        (e) => {
            m(e), A?.({ type: y.Q.CHECKBOX });
        },
        [m, A],
    );
    return (0, r.jsxs)(P.D, {
        innerRef: p,
        className: o()(D.item, D.checkboxContainer, D.labelContainer, v[t], f, {
            [D.disabled]: c,
            [D.focused]: E,
            [g ?? ""]: E,
        }),
        onClick: c ? void 0 : T,
        ...h,
        "aria-checked": a,
        "aria-disabled": c,
        children: [
            I
                ? null != u && (0, r.jsx)(W, { accessory: u, isFocused: E })
                : (0, x.O)(d)
                  ? d
                  : null != d &&
                    (0, r.jsx)("div", {
                        className: D.iconContainerLeft,
                        children: (0, r.jsx)(d, { color: "currentColor", className: D.icon }),
                    }),
            (0, r.jsxs)("div", {
                className: D.label,
                children: [
                    (0, r.jsx)(V, { children: M(i ?? n, { isFocused: E, disabled: c }) }),
                    null != l &&
                        (0, r.jsx)(b.E, {
                            variant: "text-xs/normal",
                            className: o()(D.subtext, { [D.subtextLineClamp]: null != _ }),
                            lineClamp: _,
                            children: l,
                        }),
                ],
            }),
            (0, r.jsx)("div", {
                className: D.iconContainer,
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
            subtextLineClamp: _,
            leftIcon: d,
            leadingAccessory: u,
            disabled: c,
            isFocused: E,
            menuItemProps: h,
            action: m,
        } = e,
        { onInteraction: f } = s.useContext(y.x),
        g = (0, R.Y)("MenuRadioItem"),
        A = s.useRef(null);
    s.useEffect(() => {
        E && G(A);
    }, [E]);
    let I = s.useCallback(
        (e) => {
            m(e), f?.({ type: y.Q.RADIO });
        },
        [m, f],
    );
    return (0, r.jsxs)(P.D, {
        innerRef: A,
        className: o()(D.item, D.labelContainer, v[t], { [D.disabled]: c, [D.focused]: E }),
        onClick: c ? void 0 : I,
        ...h,
        "aria-checked": a,
        "aria-disabled": c,
        children: [
            g
                ? null != u && (0, r.jsx)(W, { accessory: u, isFocused: E })
                : (0, x.O)(d)
                  ? d
                  : null != d &&
                    (0, r.jsx)("div", {
                        className: D.iconContainerLeft,
                        children: (0, r.jsx)(d, { color: "currentColor", className: D.icon }),
                    }),
            (0, r.jsxs)("div", {
                className: D.label,
                children: [
                    (0, r.jsx)(V, { children: M(i ?? n, { isFocused: E, disabled: c }) }),
                    null != l &&
                        (0, r.jsx)(b.E, {
                            variant: "text-xs/normal",
                            className: o()(D.subtext, { [D.subtextLineClamp]: null != _ }),
                            lineClamp: _,
                            children: l,
                        }),
                ],
            }),
            (0, r.jsx)("div", {
                className: D.iconContainer,
                children: (0, r.jsx)(en.T, { checked: a, disabled: c, radioItemIconClassName: D.radioIcon }),
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
            disabled: _ = !1,
            isFocused: d,
            menuItemProps: u,
            action: c,
            className: E,
        } = e,
        { onInteraction: h } = s.useContext(y.x),
        m = s.useRef(null),
        f = s.useId();
    s.useEffect(() => {
        d && G(m);
    }, [d]);
    let g = s.useCallback(
        (e) => {
            c(e), h?.({ type: y.Q.SWITCH });
        },
        [c, h],
    );
    return (0, r.jsxs)("div", {
        ref: m,
        className: o()(D.item, D.switchItem, D.hideInteraction, v[t], E, { [D.disabled]: _ }),
        "aria-checked": l,
        "aria-disabled": _,
        ...u,
        children: [
            null != n
                ? (0, r.jsx)("div", {
                      className: D.labelContainer,
                      children: (0, r.jsxs)("div", {
                          className: D.label,
                          children: [
                              (0, r.jsx)("label", { htmlFor: f, children: n }),
                              null != i &&
                                  (0, r.jsx)(b.E, {
                                      variant: "text-xs/normal",
                                      className: o()(D.subtext, { [D.subtextLineClamp]: null != a }),
                                      lineClamp: a,
                                      children: i,
                                  }),
                          ],
                      }),
                  })
                : null,
            (0, r.jsx)("div", {
                className: D.switchContainer,
                children: (0, r.jsx)(er.d, { id: f, checked: l, onChange: g, disabled: _ }),
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
            maxLength: _,
            disabled: d = !1,
            "aria-label": u,
            isFocused: c,
            menuItemProps: E,
        } = e,
        { onInteraction: h } = s.useContext(y.x),
        m = s.useRef(null),
        f = s.useRef(null),
        g = s.useRef(null),
        [A, I] = s.useState(null);
    s.useLayoutEffect(() => {
        if ("" === l || null == g.current || null == f.current) return void I(null);
        let e = f.current,
            t = window.getComputedStyle(e),
            n = g.current;
        (n.style.font = t.font), (n.style.letterSpacing = t.letterSpacing);
        let i = n.getBoundingClientRect().width,
            r = parseFloat(t.paddingLeft) + parseFloat(t.paddingRight);
        I(Math.ceil(i + (Number.isNaN(r) ? 24 : r) + 2));
    }, [l]),
        s.useEffect(() => {
            c && (G(m), f.current?.focus());
        }, [c]);
    let p = s.useCallback(
        (e) => {
            a(e), h?.({ type: y.Q.DEFAULT });
        },
        [a, h],
    );
    return (0, r.jsxs)("div", {
        ref: m,
        className: o()(D.item, D.textInputItem, D.hideInteraction, v[t], { [D.disabled]: d }),
        "aria-disabled": d,
        ...E,
        children: [
            null != n
                ? (0, r.jsx)("div", {
                      className: D.labelContainer,
                      children: (0, r.jsx)("div", { className: D.label, children: n }),
                  })
                : null,
            (0, r.jsxs)("div", {
                className: D.textInputWrapper,
                style: null != A ? { minWidth: A } : void 0,
                children: [
                    (0, r.jsx)("span", { ref: g, "aria-hidden": !0, style: eo, children: l }),
                    (0, r.jsx)(ea.k, {
                        inputRef: f,
                        value: i,
                        onChange: p,
                        placeholder: l,
                        maxLength: _,
                        disabled: d,
                        "aria-label": u,
                    }),
                ],
            }),
        ],
    });
}
function e_(e) {
    let {
            color: t = "default",
            label: n,
            control: i,
            disabled: a,
            isFocused: l,
            showDefaultFocus: _ = !1,
            interactive: d = !0,
            menuItemProps: u,
            onClose: c,
        } = e,
        { onInteraction: E } = s.useContext(y.x),
        h = s.useRef(null),
        m = s.useRef(null);
    s.useLayoutEffect(() => {
        l ? (G(h), m.current?.focus()) : m.current?.blur?.();
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
        className: o()(D.item, v[t], {
            [D.disabled]: a,
            [D.focused]: _ && l,
            [D.hideInteraction]: !_,
            [D.nonInteractive]: !d,
        }),
        "aria-disabled": a,
        ...u,
        children: [
            null != n
                ? (0, r.jsx)("div", {
                      className: D.labelContainer,
                      children: (0, r.jsx)("div", { className: D.label, children: n }),
                  })
                : null,
            g,
        ],
    });
}
function ed(e) {
    let {
            color: t = "default",
            disabled: n,
            isFocused: i,
            showDefaultFocus: a = !1,
            menuItemProps: l,
            children: _,
        } = e,
        d = s.useRef(null);
    return (
        s.useLayoutEffect(() => {
            if (!i) return;
            let e = d.current;
            if (null == e) return;
            G(d);
            let t = e.querySelector('[tabindex="0"]');
            t?.focus();
        }, [i]),
        (0, r.jsx)("div", {
            ref: d,
            className: o()(D.item, v[t], { [D.disabled]: n, [D.focused]: a && i, [D.hideInteraction]: !a }),
            "aria-disabled": n,
            ...l,
            children: _,
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
                if (n.type === C.bX) return t.push({ type: "separator", navigable: !1 }), t;
                if (n.type === C.rX) {
                    let i = e(n.props.children);
                    return (
                        i.length > 0 &&
                            (t.push({ type: "groupstart", length: i.length, navigable: !1, props: n.props }),
                            t.push(...i),
                            t.push({ type: "groupend", length: i.length, navigable: !1, props: n.props })),
                        t
                    );
                }
                if (n.type === C.Dr)
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
                if (n.type === C.sL)
                    return t.push({ type: "checkbox", key: n.props.id, navigable: !0, props: n.props }), t;
                if (n.type === C.iD)
                    return t.push({ type: "radio", key: n.props.id, navigable: !0, props: n.props }), t;
                else if (n.type === C.fP)
                    return t.push({ type: "switch", key: n.props.id, navigable: !0, props: n.props }), t;
                else if (n.type === C.Yn)
                    return t.push({ type: "textinput", key: n.props.id, navigable: !0, props: n.props }), t;
                else if (n.type === C.aK)
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
    _()(S.current, f) || (S.current = f);
    let v = (0, R.Y)("Menu"),
        P = m.find((e) => null != e.key)?.key,
        b = (function (e) {
            let {
                    navId: t,
                    items: n,
                    initialFocusPath: i,
                    onSelect: r,
                    enabled: a = !0,
                    closeMenu: o,
                    defaultIsUsingKeyboardNavigation: l = !1,
                } = e,
                _ = s.useRef(a);
            s.useLayoutEffect(() => {
                _.current = a;
            }, [a]);
            let [c, E] = s.useReducer(g, { items: n, focusPath: i, focusIndex: -1 }),
                h = s.useMemo(() => (0, A.nF)(E, 30), [E]);
            s.useEffect(() => {
                E({ type: u.UPDATE_ITEMS, items: n });
            }, [n]);
            let { focusPath: m } = c,
                [f, I] = s.useState(!1),
                [p, T] = s.useState(l),
                [{ onItemFocusMemoizer: S, onItemMouseEnterMemoizer: N }] = s.useState(() => ({
                    onItemFocusMemoizer: new A.Lp((e) => () => {
                        I(!0), E({ type: u.SET_FOCUS_PATH, path: e.split("--") });
                    }),
                    onItemMouseEnterMemoizer: new A.Lp((e) => () => {
                        T(!1), E({ type: u.SET_FOCUS_PATH, path: e.split("--") });
                    }),
                })),
                O = s.useCallback(
                    (e) => {
                        var n, i, s;
                        if (!_.current) return;
                        e.key === d.D$.ESCAPE && null != o && (e.stopPropagation(), e.preventDefault(), o());
                        let a = (function (e) {
                            switch (e.key) {
                                case d.D$.ENTER:
                                case d.D$.SPACE:
                                    return d.X2.SELECT_FOCUSED_ITEM;
                                case d.D$.UP:
                                    return d.X2.NAVIGATE_UP;
                                case d.D$.DOWN:
                                    return d.X2.NAVIGATE_DOWN;
                                case d.D$.RIGHT:
                                    return d.X2.NAVIGATE_IN;
                                case d.D$.LEFT:
                                    return d.X2.NAVIGATE_OUT;
                            }
                        })(e);
                        switch (a) {
                            case d.X2.NAVIGATE_UP:
                            case d.X2.NAVIGATE_DOWN:
                            case d.X2.NAVIGATE_IN:
                            case d.X2.NAVIGATE_OUT:
                                let l;
                                if (
                                    ("textarea" === (l = (n = e.target).tagName.toLowerCase()) ||
                                        ("input" === l
                                            ? ["text", "search", "email", "url", "tel", "password"].includes(n.type)
                                            : n.isContentEditable)) &&
                                    (a === d.X2.NAVIGATE_IN || a === d.X2.NAVIGATE_OUT)
                                )
                                    return;
                                e.preventDefault(), e.stopPropagation(), T(!0), h({ type: a });
                                return;
                            case d.X2.SELECT_FOCUSED_ITEM:
                                if (e.repeat || e.target.tabIndex >= 0) return;
                                if ((e.preventDefault(), e.stopPropagation(), T(!1), h({ type: a }), null != r))
                                    return void r(m);
                                let u =
                                    ((i = e.target.ownerDocument ?? document),
                                    (s = null != m ? `${(0, A.M4)(t, m.join("--"))}` : t),
                                    i.getElementById(s));
                                u?.click();
                        }
                    },
                    [h, t, m, r, o],
                ),
                R = s.useCallback(() => {
                    f || I(!0);
                }, [f]),
                C = s.useCallback(
                    (e) => {
                        e.target !== e.currentTarget && !e.currentTarget.contains(e.relatedTarget) && f && I(!1);
                    },
                    [f],
                ),
                y = s.useCallback(() => {
                    E({ type: u.SET_FOCUS_PATH, path: [] }), I(!1);
                }, []),
                D = s.useCallback((e) => e.every((e, t) => m[t] === e), [m]),
                L = s.useCallback(
                    () => ({
                        role: "menu",
                        id: t,
                        tabIndex: -1,
                        onKeyDown: O,
                        onFocus: R,
                        onBlur: C,
                        onMouseLeave: y,
                        "aria-activedescendant": m.length > 0 ? (0, A.M4)(t, m.join("--")) : void 0,
                    }),
                    [t, O, R, C, y, m],
                ),
                v = s.useCallback(
                    (e) => {
                        let { path: n } = e;
                        return {
                            role: "menu",
                            tabIndex: -1,
                            "aria-activedescendant": D(n) ? (0, A.M4)(t, m.join("--")) : void 0,
                            focusIndex: c.focusIndex,
                            isUsingKeyboardNavigation: p,
                        };
                    },
                    [t, m, D, c.focusIndex, p],
                ),
                w = s.useCallback(
                    (e) => {
                        let { path: n, hasSubmenu: i = !1, navigable: r = !0, role: s = "menuitem" } = e,
                            a = n.join("--");
                        return {
                            ...(i ? { "aria-expanded": D(n), "aria-haspopup": !0 } : {}),
                            role: s,
                            id: (0, A.M4)(t, a),
                            tabIndex: -1,
                            onFocus: r ? S.get(a) : () => {},
                            onMouseEnter: r ? N.get(a) : () => {},
                        };
                    },
                    [t, D, S, N],
                );
            return s.useMemo(
                () => ({
                    dispatch: h,
                    getContainerProps: L,
                    getSubmenuProps: v,
                    getItemProps: w,
                    isFocused: D,
                    isUsingKeyboardNavigation: p,
                }),
                [h, L, v, w, D, p],
            );
        })({
            navId: t,
            items: S.current,
            initialFocusPath: O.A.keyboardModeEnabled && null != P ? [P] : [],
            closeMenu: c,
            defaultIsUsingKeyboardNavigation: O.A.keyboardModeEnabled,
        });
    s.useEffect(() => {
        b.isUsingKeyboardNavigation ? O.A.keyboardModeEnabled || (0, N.uS)() : O.A.keyboardModeEnabled && (0, N.Bm)();
    }, [b.isUsingKeyboardNavigation]);
    let k = s.useRef(null),
        U = s.useContext(I.jQ),
        M = "none" !== (U?.focus ?? "none");
    (0, p.t)(k, { disable: M }),
        s.useEffect(() => {
            M && k.current?.focus();
        }, [M]);
    let G = i ? T.d_ : T.Ip,
        x = s.useMemo(() => ({ onSelect: E, onInteraction: h }), [E, h]);
    return (0, r.jsx)(y.x.Provider, {
        value: x,
        children: (0, r.jsx)("div", {
            className: o()(D.menu, D[n], a),
            style: {
                "--custom-menu-viewport-padding": v ? "48px" : "16px",
                "--custom-menu-flexible-min-width": v ? "144px" : "188px",
            },
            ...b.getContainerProps(),
            ref: k,
            "aria-label": e["aria-label"],
            children: (0, r.jsxs)(G, {
                className: D.scroller,
                children: [
                    0 === m.length &&
                        (0, r.jsx)(j, {
                            disabled: !0,
                            void_label: () => (0, r.jsx)(eE, {}),
                            menuItemProps: b.getItemProps({ path: ["empty"] }),
                            isFocused: !1,
                            onFocus: () => {},
                            onClose: c,
                        }),
                    m.length > 0 &&
                        (function e(t, n, i, s) {
                            let a = 0,
                                o = [];
                            return t.reduce((t, l, _) => {
                                let d = o.length > 0 ? o[o.length - 1] : t;
                                switch (l.type) {
                                    case "separator":
                                        d.push((0, r.jsx)(L, {}, `separator-${_}`)), (a = 0);
                                        break;
                                    case "groupstart":
                                        a > 0 && l.length > 0 && (d.push((0, r.jsx)(L, {}, `separator-${_}`)), (a = 0)),
                                            o.push([]);
                                        break;
                                    case "groupend":
                                        o.length > 0 &&
                                            t.push((0, r.jsx)(w, { contents: o.pop(), ...l.props }, `group-${_}`));
                                        break;
                                    case "item": {
                                        let {
                                                children: t,
                                                childRowHeight: o,
                                                onChildrenScroll: _,
                                                listClassName: u,
                                                subMenuClassName: c,
                                            } = l,
                                            E = null != t,
                                            h = [...i, l.key],
                                            m = n.isFocused(h),
                                            f = (0, r.jsx)(
                                                j,
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
                                                ? d.push(
                                                      (0, r.jsx)(
                                                          X,
                                                          {
                                                              ...l.props,
                                                              parentItem: f,
                                                              isFocused: m,
                                                              menuSubmenuProps: n.getSubmenuProps({ path: h }),
                                                              rows: e(t, n, h, s),
                                                              rowHeight: o,
                                                              onScroll: _,
                                                              listClassName: u,
                                                          },
                                                          `${l.key}-submenu`,
                                                      ),
                                                  )
                                                : d.push(
                                                      (0, r.jsx)(
                                                          J,
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
                                            : d.push(f),
                                            a++;
                                        break;
                                    }
                                    case "customitem": {
                                        let e = [...i, l.key];
                                        d.push(
                                            (0, r.jsx)(
                                                Z,
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
                                        d.push(
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
                                        d.push(
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
                                        d.push(
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
                                        d.push(
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
                                        d.push(
                                            (0, r.jsx)(
                                                e_,
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
                                        d.push(
                                            (0, r.jsx)(
                                                ed,
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
                        })(m, b, [], c),
                ],
            }),
        }),
    });
}
function ec() {
    return (0, r.jsx)("div", { className: o()(D.menu, D.loader, D.flexible), children: (0, r.jsx)(S.y, {}) });
}
function eE() {
    let e = "♫ (つ｡◕‿‿◕｡)つ ♪",
        [t, n] = s.useState(e);
    return (
        s.useEffect(() => {
            if (O.A.useReducedMotion) return;
            let t = setInterval(() => {
                n((t) => (t === e ? "♫ ⊂(｡◕‿‿◕｡⊂) ♪" : e));
            }, 700);
            return () => clearInterval(t);
        }, []),
        (0, r.jsx)("div", { style: { width: "100%", textAlign: "center" }, children: t })
    );
}
