(n.d(t, { W: () => em, X: () => eh }), n(321073));
var l,
    r = n(477900),
    s = n(582128),
    a = n(503698),
    o = n.n(a),
    i = n(812729),
    u = n.n(i),
    c = n(741918),
    d = (((l = {}).UPDATE_ITEMS = "UPDATE_ITEMS"), (l.SET_FOCUS_PATH = "SET_FOCUS_PATH"), l);
function p(e, t) {
    return e.findIndex((e) => t === e.key);
}
function f(e) {
    return e.focusPath[e.focusPath.length - 1];
}
function m(e) {
    let t = e.items;
    for (let n = 0; n < e.focusPath.length - 1; n++) {
        if (null == t) return;
        let l = p(t, e.focusPath[n]);
        t = t[l].children;
    }
    return t;
}
function h(e, t) {
    let n = e,
        l = [];
    for (let e = 0; e < t.length && null != n; e++) {
        let r = t[e],
            s = p(n, r);
        if (s < 0 || s >= n.length) {
            let e = n[0];
            null != e && l.push(e.key);
            break;
        }
        (l.push(r), (n = n[s].children));
    }
    return l;
}
function b(e) {
    let t = f(e),
        n = m(e);
    return null == n ? -1 : p(n, t);
}
function x(e, t) {
    switch (t.type) {
        case c.X2.NAVIGATE_UP:
            let n = f(e),
                l = m(e);
            if (null == l) return e;
            let r = (p(l, n) - 1) % l.length;
            if ((r < 0 && (r = l.length - 1), null == l[r])) return e;
            let s = { ...e, focusPath: [...e.focusPath.slice(0, -1), l[r].key] };
            return { ...s, focusIndex: b(s) };
        case c.X2.NAVIGATE_DOWN:
            let a = f(e),
                o = m(e);
            if (null == o) return e;
            let i = (p(o, a) + 1) % o.length;
            if (null == o[i]) return e;
            let u = { ...e, focusPath: [...e.focusPath.slice(0, -1), o[i].key] };
            return { ...u, focusIndex: b(u) };
        case c.X2.NAVIGATE_IN:
            return (function (e) {
                let t = f(e),
                    n = m(e);
                if (null == n) return e;
                let l = n[p(n, t)],
                    r = l?.children?.[0];
                if (null == r) return e;
                let s = { ...e, focusPath: [...e.focusPath, r.key] };
                return { ...s, focusIndex: b(s) };
            })(e);
        case c.X2.NAVIGATE_OUT:
            if (e.focusPath.length <= 1) return e;
            let d = { ...e, focusPath: e.focusPath.slice(0, -1) };
            return { ...d, focusIndex: b(d) };
        case "UPDATE_ITEMS":
            return (function (e, t) {
                let { items: n } = t,
                    l = { ...e, items: n, focusPath: h(n, e.focusPath) };
                return { ...l, focusIndex: b(l) };
            })(e, t);
        case "SET_FOCUS_PATH":
            return (function (e, t) {
                let { path: n } = t,
                    l = { ...e, focusPath: h(e.items, n) };
                return { ...l, focusIndex: b(l) };
            })(e, t);
        case c.X2.SELECT_FOCUSED_ITEM:
            return e;
        default:
            throw Error(`Menu navigator was given an unhandled action ${t.type}`);
    }
}
var y = n(602034),
    g = n(508382),
    v = n(315710),
    C = n(95362),
    j = n(289873),
    N = n(955572),
    I = n(775602);
let k = (0, n(945810).mj)({
    name: "2025-11-mana-context-menu",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
function E(e) {
    return k.useConfig({ location: e }).enabled;
}
var A = n(477782),
    P = n(900283),
    S = n(798819);
function T() {
    let e = E("MenuSeparator");
    return (0, r.jsx)("div", {
        role: "separator",
        className: S.separator,
        style: { "--custom-menu-separator-margin": e ? "8px 0" : "8px" },
    });
}
var w = n(646514);
let R = {
        default: S.colorDefault,
        brand: S.colorBrand,
        danger: S.colorDanger,
        premium: S.colorPremium,
        "premium-gradient": S.colorPremiumGradient,
        success: S.colorSuccess,
    },
    F = -(w.A.modules.menu.BORDER_WIDTH.resolve() + w.A.modules.menu.SCROLLER_BLOCK_PADDING.resolve());
function _(e) {
    let { contents: t, label: n, className: l, color: s = "default" } = e;
    return 0 === t.length
        ? null
        : (0, r.jsxs)("div", {
              "aria-label": n,
              role: "group",
              className: l,
              children: [
                  null != n
                      ? (0, r.jsx)("div", { className: o()(S.groupLabel, S.hideInteraction, R[s]), children: n })
                      : null,
                  t,
              ],
          });
}
var M = n(939249),
    D = n(834730),
    L = n(805251),
    O = n(320448);
function U(e, t) {
    return "function" == typeof e ? e(t) : e;
}
function V(e) {
    I.Ay.keyboardModeEnabled && e.current?.scrollIntoView({ block: "nearest" });
}
var X = n(745396),
    G = n(379261);
function K(e) {
    return E("MenuLabel") ? (0, r.jsx)(G.r, { children: e.children }) : e.children;
}
var H = n(844222),
    $ = n(545442),
    W = n(935154),
    q = n(486020);
function B(e) {
    let { accessory: t, isFocused: n } = e,
        { reducedMotion: l } = s.useContext(H.C);
    switch (t.type) {
        case "icon": {
            let { type: e, icon: n, color: l = "currentColor", className: s, ...a } = t;
            return (0, r.jsx)("div", {
                className: S.iconContainerLeft,
                children: (0, r.jsx)(n, { "aria-hidden": !0, color: l, ...a, className: o()(S.icon, s) }),
            });
        }
        case "emoji": {
            let e = (function (e, t, n) {
                let { emojiId: l, src: r, animated: s = !1 } = e;
                return null != l ? q.Ay.getEmojiURL({ id: l, animated: s && (!n || t), size: 18 }) : r;
            })(t, n, l.enabled);
            return (0, r.jsx)("div", {
                className: S.iconContainerLeft,
                children: (0, r.jsx)("img", { "aria-hidden": !0, alt: "", src: e, className: S.emojiIcon }),
            });
        }
        case "image":
            return (0, r.jsx)("img", { "aria-hidden": !0, alt: "", src: t.src, className: S.imageAccessory });
        case "avatar":
            return (0, r.jsx)("img", { "aria-hidden": !0, alt: "", src: t.src, className: S.avatarAccessory });
        case "roleDot": {
            let { variant: e, color: n, colors: l } = t;
            return (0, r.jsx)("div", {
                className: S.roleDotAccessory,
                children:
                    "dot" === e
                        ? (0, r.jsx)($.W, { color: n, colors: l, background: !1, tooltip: !1 })
                        : (0, r.jsx)($.R, { color: n, colors: l ?? null }),
            });
        }
        case "status": {
            let { status: e } = t;
            return (0, r.jsx)("div", {
                className: S.statusAccessory,
                children: (0, r.jsx)(W.nW, { status: e, size: 10 }),
            });
        }
        case "guildTag":
            return (0, r.jsx)("div", { className: S.guildTagAccessory, children: t.element });
    }
}
function z(e) {
    let { indicator: t } = e,
        { type: n, icon: l, color: s = "currentColor", className: a, ...i } = t;
    return (0, r.jsx)("div", {
        className: S.iconContainer,
        children: (0, r.jsx)(l, { "aria-hidden": !0, color: s, ...i, className: o()(S.icon, a) }),
    });
}
var Q = n(869431);
function Y(e) {
    let {
            color: t = "default",
            label: n,
            void_label: l,
            icon: a,
            iconLeft: i,
            leadingAccessory: u,
            trailingIndicator: c,
            shortcut: d,
            subtext: p,
            subtextLineClamp: f,
            hasSubmenu: m,
            loading: h,
            badge: b,
            disabled: x,
            isFocused: y,
            menuItemProps: g,
            action: v,
            onClose: C,
            onFocus: N,
            className: I,
            focusedClassName: k,
            dontCloseOnActionIfHoldingShiftKey: A,
            dontCloseOnAction: T,
            iconProps: w,
        } = e,
        { onSelect: F, onInteraction: _ } = s.useContext(P.x),
        G = s.useRef(null),
        H = E("MenuItem"),
        $ = s.useCallback(
            (e) => {
                if ((_?.({ type: P.Q.DEFAULT }), null == v)) return !1;
                ((e.shiftKey && A) || T || C(),
                    e.persist(),
                    F?.(),
                    (e.nativeEvent.view ?? window).requestAnimationFrame(() => v(e)));
            },
            [v, C, F, A, T, _],
        );
    return (
        s.useEffect(() => {
            y && (V(G), N?.());
        }, [y, N]),
        (0, r.jsxs)(M.D, {
            innerRef: G,
            className: o()(S.item, S.labelContainer, Q.nM, R[t], I, { [S.disabled]: x, [S.focused]: y, [k ?? ""]: y }),
            onClick: x ? void 0 : $,
            "aria-disabled": x,
            ...g,
            "data-menu-item": "true",
            "data-marquee-active": y,
            children: [
                H || u?.type === "status"
                    ? null != u && (0, r.jsx)(B, { accessory: u, isFocused: y })
                    : (0, X.O)(i)
                      ? i
                      : null != i &&
                        (0, r.jsx)("div", {
                            className: S.iconContainerLeft,
                            children: (0, r.jsx)(i, {
                                color: "currentColor",
                                ...w,
                                className: o()(S.icon, w?.className),
                            }),
                        }),
                (0, r.jsxs)("div", {
                    className: S.label,
                    children: [
                        (0, r.jsx)(K, { children: U(l ?? n, e) }),
                        null != p &&
                            (0, r.jsx)(D.E, {
                                variant: "body-xs/normal",
                                className: o()(S.subtext, { [S.subtextLineClamp]: null != f }),
                                lineClamp: f,
                                children: p,
                            }),
                    ],
                }),
                null != d && (0, r.jsx)("div", { className: S.shortcutContainer, children: d }),
                null != b &&
                    (0, r.jsx)("div", {
                        className: S.badgeContainer,
                        children:
                            "object" == typeof b && "type" in b
                                ? (0, r.jsx)(L.E, { ...b })
                                : (0, r.jsx)(L.E, { type: b }),
                    }),
                h &&
                    (0, r.jsx)("div", {
                        className: S.iconContainer,
                        children: (0, r.jsx)(j.y, { type: j.y.Type.PULSING_ELLIPSIS }),
                    }),
                H
                    ? null != c && (0, r.jsx)(z, { indicator: c })
                    : (0, X.O)(a)
                      ? a
                      : null != a &&
                        (0, r.jsx)("div", {
                            className: S.iconContainer,
                            children: (0, r.jsx)(a, {
                                color: "currentColor",
                                ...w,
                                className: o()(S.icon, w?.className),
                            }),
                        }),
                m &&
                    (0, r.jsx)("div", {
                        className: S.iconContainer,
                        children: (0, r.jsx)(O.ChevronSmallRightIcon, {
                            size: "md",
                            color: "currentColor",
                            className: S.caret,
                        }),
                    }),
            ],
        })
    );
}
var J = n(962125);
function Z(e) {
    let { parentItem: t, isFocused: n, menuSubmenuProps: l, rows: a, rowHeight: o, onScroll: i, listClassName: u } = e,
        c = s.useRef(null),
        d = s.useRef(null),
        { isUsingKeyboardNavigation: p, focusIndex: f, ...m } = l;
    (s.useLayoutEffect(() => {
        n && c.current?.focus();
    }, [n]),
        s.useEffect(() => {
            n && f >= 0 && p && d.current?.scrollRowIntoView(f);
        }, [n, p, f]));
    let h = s.useCallback((e) => a[e], [a]);
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
                    className: S.submenuPaddingContainer,
                    children: (0, r.jsx)("div", {
                        className: S.submenu,
                        ...m,
                        ref: c,
                        children: (0, r.jsx)(J.A, {
                            ref: d,
                            className: u,
                            listPadding: [6, 0, 6, 8],
                            onScroll: i,
                            renderRow: h,
                            rowCount: a.length,
                            rowHeight: o,
                        }),
                    }),
                })
            );
        },
        children: (e) => {
            let { ref: n, props: l } = e;
            return (0, r.jsx)("div", { ref: n, ...l, children: t });
        },
    });
}
let ee = s.createContext("right-start");
function et(e) {
    let t = s.useContext(ee),
        { subMenuClassName: n, parentItem: l, isFocused: a, menuSubmenuProps: i, renderSubmenu: u } = e,
        { focusIndex: c, isUsingKeyboardNavigation: d, ...p } = i,
        f = s.useRef(null),
        m = (0, r.jsx)("div", {
            className: S.submenuPaddingContainer,
            children: (0, r.jsx)("div", {
                className: o()(S.submenu, n),
                ...p,
                ref: f,
                children: (0, r.jsx)(C.Ip, { className: o()(S.scroller, S.scrollerWithScrollbar), children: u() }),
            }),
        }),
        h = E("MenuSubmenuItem"),
        [b, x] = s.useState(!1);
    return (0, r.jsx)(g.Ow, {
        open: b || a,
        viewportPadding: 48,
        shiftPadding: 8,
        maxHeight: 360,
        onOpenChange: x,
        spacing: h ? -4 : 4,
        alignmentSpacing: F,
        placement: t,
        portal: !1,
        crossAccessFlip: !1,
        trigger: "hover",
        renderLayer: (e) => {
            let { placement: t } = e;
            return (0, r.jsx)(ee.Provider, { value: t, children: m });
        },
        children: (e) => {
            let { ref: t, props: n } = e;
            return (0, r.jsx)("div", { ref: t, ...n, children: l });
        },
    });
}
function en(e) {
    let {
            children: t,
            color: n = "default",
            isFocused: l = !1,
            disabled: a = !1,
            keepItemStyles: i = !1,
            menuItemProps: u,
            action: c,
            dontCloseOnActionIfHoldingShiftKey: d,
            dontCloseOnAction: p,
            onClose: f,
        } = e,
        m = s.useRef(null);
    s.useEffect(() => {
        l && V(m);
    }, [l]);
    let h = s.useCallback(
            (e) => {
                if (null == c) return !1;
                ((e.shiftKey && d) || p || f(), e.persist(), requestAnimationFrame(() => c(e)));
            },
            [c, f, d, p],
        ),
        b = i ? o()(S.item, R[n], { [S.focused]: l }) : S.customItem;
    return (0, r.jsx)(M.D, {
        innerRef: m,
        className: b,
        onClick: a ? void 0 : h,
        "aria-disabled": a,
        ...u,
        children: t({ color: n, disabled: a, isFocused: l }),
    });
}
var el = n(658675);
function er(e) {
    let {
            color: t = "default",
            label: n,
            void_label: l,
            checked: a,
            subtext: i,
            subtextLineClamp: u,
            leftIcon: c,
            leadingAccessory: d,
            disabled: p,
            isFocused: f,
            menuItemProps: m,
            action: h,
            className: b,
            focusedClassName: x,
        } = e,
        { onInteraction: y } = s.useContext(P.x),
        g = E("MenuCheckboxItem"),
        v = s.useRef(null);
    s.useEffect(() => {
        f && V(v);
    }, [f]);
    let C = s.useCallback(
        (e) => {
            (h(e), y?.({ type: P.Q.CHECKBOX }));
        },
        [h, y],
    );
    return (0, r.jsxs)(M.D, {
        innerRef: v,
        className: o()(S.item, S.checkboxContainer, S.labelContainer, Q.nM, R[t], b, {
            [S.disabled]: p,
            [S.focused]: f,
            [x ?? ""]: f,
        }),
        onClick: p ? void 0 : C,
        ...m,
        "aria-checked": a,
        "aria-disabled": p,
        "data-marquee-active": f,
        children: [
            g
                ? null != d && (0, r.jsx)(B, { accessory: d, isFocused: f })
                : (0, X.O)(c)
                  ? c
                  : null != c &&
                    (0, r.jsx)("div", {
                        className: S.iconContainerLeft,
                        children: (0, r.jsx)(c, { color: "currentColor", className: S.icon }),
                    }),
            (0, r.jsxs)("div", {
                className: S.label,
                children: [
                    (0, r.jsx)(K, { children: U(l ?? n, { isFocused: f, disabled: p }) }),
                    null != i &&
                        (0, r.jsx)(D.E, {
                            variant: "body-xs/normal",
                            className: o()(S.subtext, { [S.subtextLineClamp]: null != u }),
                            lineClamp: u,
                            children: i,
                        }),
                ],
            }),
            (0, r.jsx)("div", { className: S.iconContainer, children: (0, r.jsx)(el.P, { checked: a, disabled: p }) }),
        ],
    });
}
var es = n(771871);
function ea(e) {
    let {
            color: t = "default",
            label: n,
            void_label: l,
            checked: a,
            subtext: i,
            subtextLineClamp: u,
            leftIcon: c,
            leadingAccessory: d,
            disabled: p,
            isFocused: f,
            menuItemProps: m,
            action: h,
        } = e,
        { onInteraction: b } = s.useContext(P.x),
        x = E("MenuRadioItem"),
        y = s.useRef(null);
    s.useEffect(() => {
        f && V(y);
    }, [f]);
    let g = s.useCallback(
        (e) => {
            (h(e), b?.({ type: P.Q.RADIO }));
        },
        [h, b],
    );
    return (0, r.jsxs)(M.D, {
        innerRef: y,
        className: o()(S.item, S.labelContainer, Q.nM, R[t], { [S.disabled]: p, [S.focused]: f }),
        onClick: p ? void 0 : g,
        ...m,
        "aria-checked": a,
        "aria-disabled": p,
        "data-marquee-active": f,
        children: [
            x
                ? null != d && (0, r.jsx)(B, { accessory: d, isFocused: f })
                : (0, X.O)(c)
                  ? c
                  : null != c &&
                    (0, r.jsx)("div", {
                        className: S.iconContainerLeft,
                        children: (0, r.jsx)(c, { color: "currentColor", className: S.icon }),
                    }),
            (0, r.jsxs)("div", {
                className: S.label,
                children: [
                    (0, r.jsx)(K, { children: U(l ?? n, { isFocused: f, disabled: p }) }),
                    null != i &&
                        (0, r.jsx)(D.E, {
                            variant: "body-xs/normal",
                            className: o()(S.subtext, { [S.subtextLineClamp]: null != u }),
                            lineClamp: u,
                            children: i,
                        }),
                ],
            }),
            (0, r.jsx)("div", { className: S.iconContainer, children: (0, r.jsx)(es.T, { checked: a, disabled: p }) }),
        ],
    });
}
var eo = n(143129);
function ei(e) {
    let {
            color: t = "default",
            label: n,
            subtext: l,
            subtextLineClamp: a,
            checked: i,
            disabled: u = !1,
            isFocused: c,
            menuItemProps: d,
            action: p,
            className: f,
        } = e,
        { onInteraction: m } = s.useContext(P.x),
        h = s.useRef(null);
    s.useEffect(() => {
        c && V(h);
    }, [c]);
    let b = s.useCallback(() => {
        (p(!i), m?.({ type: P.Q.SWITCH }));
    }, [p, i, m]);
    return (0, r.jsxs)(M.D, {
        innerRef: h,
        className: o()(S.item, S.switchItem, R[t], f, { [S.disabled]: u, [S.focused]: c }),
        onClick: u ? void 0 : b,
        "aria-checked": i,
        "aria-disabled": u,
        ...d,
        children: [
            null != n
                ? (0, r.jsx)("div", {
                      className: S.labelContainer,
                      children: (0, r.jsxs)("div", {
                          className: S.label,
                          children: [
                              (0, r.jsx)(K, { children: n }),
                              null != l &&
                                  (0, r.jsx)(D.E, {
                                      variant: "body-xs/normal",
                                      className: o()(S.subtext, { [S.subtextLineClamp]: null != a }),
                                      lineClamp: a,
                                      children: l,
                                  }),
                          ],
                      }),
                  })
                : null,
            (0, r.jsx)("div", {
                className: S.switchContainer,
                "aria-hidden": !0,
                children: (0, r.jsx)(eo.d, { checked: i, disabled: u, displayOnly: !0 }),
            }),
        ],
    });
}
var eu = n(95477);
let ec = { position: "absolute", visibility: "hidden", pointerEvents: "none", whiteSpace: "nowrap" };
function ed(e) {
    let {
            color: t = "default",
            label: n,
            value: l,
            onChange: a,
            placeholder: i = "",
            maxLength: u,
            disabled: c = !1,
            "aria-label": d,
            isFocused: p,
            menuItemProps: f,
        } = e,
        { onInteraction: m } = s.useContext(P.x),
        h = s.useRef(null),
        b = s.useRef(null),
        x = s.useRef(null),
        [y, g] = s.useState(null);
    (s.useLayoutEffect(() => {
        if ("" === i || null == x.current || null == b.current) return void g(null);
        let e = b.current,
            t = window.getComputedStyle(e),
            n = x.current;
        ((n.style.font = t.font), (n.style.letterSpacing = t.letterSpacing));
        let l = n.getBoundingClientRect().width,
            r = parseFloat(t.paddingLeft) + parseFloat(t.paddingRight);
        g(Math.ceil(l + (Number.isNaN(r) ? 24 : r) + 2));
    }, [i]),
        s.useEffect(() => {
            p && (V(h), b.current?.focus());
        }, [p]));
    let v = s.useCallback(
        (e) => {
            (a(e), m?.({ type: P.Q.DEFAULT }));
        },
        [a, m],
    );
    return (0, r.jsxs)("div", {
        ref: h,
        className: o()(S.item, S.textInputItem, S.hideInteraction, R[t], { [S.disabled]: c }),
        "aria-disabled": c,
        ...f,
        children: [
            null != n
                ? (0, r.jsx)("div", {
                      className: S.labelContainer,
                      children: (0, r.jsx)("div", { className: S.label, children: n }),
                  })
                : null,
            (0, r.jsxs)("div", {
                className: S.textInputWrapper,
                style: null != y ? { minWidth: y } : void 0,
                children: [
                    (0, r.jsx)("span", { ref: x, "aria-hidden": !0, style: ec, children: i }),
                    (0, r.jsx)(eu.k, {
                        inputRef: b,
                        value: l,
                        onChange: v,
                        placeholder: i,
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
            color: t = "default",
            label: n,
            control: l,
            disabled: a,
            isFocused: i,
            isUsingKeyboardNavigation: u = !1,
            showDefaultFocus: c = !1,
            interactive: d = !0,
            menuItemProps: p,
            onClose: f,
        } = e,
        { onInteraction: m } = s.useContext(P.x),
        h = s.useRef(null),
        b = s.useRef(null);
    s.useLayoutEffect(() => {
        i ? (V(h), b.current?.focus()) : u && b.current?.blur?.();
    }, [i, u]);
    let x = s.useCallback(() => {
            b.current?.activate?.() && f();
        }, [f]),
        y = l(
            {
                onClose: f,
                disabled: a,
                isFocused: i,
                onInteraction: s.useCallback(
                    (e) => {
                        m?.({ type: e ?? P.Q.DEFAULT });
                    },
                    [m],
                ),
                tabIndex: p.tabIndex,
            },
            b,
        );
    return (0, r.jsxs)("div", {
        onClick: x,
        className: o()(S.item, R[t], {
            [S.disabled]: a,
            [S.focused]: c && i,
            [S.hideInteraction]: !c,
            [S.nonInteractive]: !d,
        }),
        "aria-disabled": a,
        ...p,
        children: [
            null != n
                ? (0, r.jsx)("div", {
                      className: S.labelContainer,
                      children: (0, r.jsx)("div", { className: S.label, children: n }),
                  })
                : null,
            y,
        ],
    });
}
function ef(e) {
    let {
            color: t = "default",
            disabled: n,
            isFocused: l,
            showDefaultFocus: a = !1,
            menuItemProps: i,
            children: u,
        } = e,
        c = s.useRef(null);
    return (
        s.useLayoutEffect(() => {
            if (!l) return;
            let e = c.current;
            if (null == e) return;
            V(c);
            let t = e.querySelector('[tabindex="0"]');
            t?.focus();
        }, [l]),
        (0, r.jsx)("div", {
            ref: c,
            className: o()(S.item, R[t], { [S.disabled]: n, [S.focused]: a && l, [S.hideInteraction]: !a }),
            "aria-disabled": n,
            ...i,
            children: u,
        })
    );
}
function em(e) {
    let {
            navId: t,
            variant: n = "flexible",
            hideScroller: l = !1,
            className: a,
            children: i,
            onClose: p,
            onSelect: h,
            onInteraction: b,
        } = e,
        j = (function e(t) {
            return (function e(t) {
                return null == t
                    ? []
                    : s.Children.toArray(t).flatMap((t) =>
                          null == t
                              ? []
                              : Array.isArray(t)
                                ? e(t)
                                : s.isValidElement(t) && t.type === s.Fragment
                                  ? e(t.props.children)
                                  : [t],
                      );
            })(t).reduce((t, n) => {
                if (n.type === A.bX) return (t.push({ type: "separator", navigable: !1 }), t);
                if (n.type === A.rX) {
                    let l = e(n.props.children);
                    return (
                        l.length > 0 &&
                            (t.push({ type: "groupstart", length: l.length, navigable: !1, props: n.props }),
                            t.push(...l),
                            t.push({ type: "groupend", length: l.length, navigable: !1, props: n.props })),
                        t
                    );
                }
                if (n.type === A.Dr)
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
                if (n.type === A.sL)
                    return (t.push({ type: "checkbox", key: n.props.id, navigable: !0, props: n.props }), t);
                if (n.type === A.iD)
                    return (t.push({ type: "radio", key: n.props.id, navigable: !0, props: n.props }), t);
                else if (n.type === A.fP)
                    return (t.push({ type: "switch", key: n.props.id, navigable: !0, props: n.props }), t);
                else if (n.type === A.Yn)
                    return (t.push({ type: "textinput", key: n.props.id, navigable: !0, props: n.props }), t);
                else if (n.type === A.aK)
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
        })(i),
        k = (function e(t) {
            return t.reduce(
                (t, n) => (
                    n.navigable &&
                        t.push({
                            key: n.key,
                            hasAction: "item" === n.type && null != n.props.action,
                            children: "item" === n.type && null != n.children ? e(n.children) : void 0,
                        }),
                    t
                ),
                [],
            );
        })(j),
        w = s.useRef([]);
    u()(w.current, k) || (w.current = k);
    let R = E("Menu"),
        F = j.find((e) => null != e.key)?.key,
        M = (function (e) {
            let {
                    navId: t,
                    items: n,
                    initialFocusPath: l,
                    onSelect: r,
                    enabled: a = !0,
                    closeMenu: o,
                    defaultIsUsingKeyboardNavigation: i = !1,
                } = e,
                u = s.useRef(a);
            s.useLayoutEffect(() => {
                u.current = a;
            }, [a]);
            let [p, h] = s.useReducer(x, { items: n, focusPath: l, focusIndex: -1 }),
                b = s.useMemo(() => (0, y.nF)(h, 30), [h]);
            s.useEffect(() => {
                h({ type: d.UPDATE_ITEMS, items: n });
            }, [n]);
            let { focusPath: g } = p,
                [v, C] = s.useState(!1),
                [j, N] = s.useState(i),
                [{ onItemFocusMemoizer: I, onItemMouseEnterMemoizer: k }] = s.useState(() => ({
                    onItemFocusMemoizer: new y.Lp((e) => () => {
                        (C(!0), h({ type: d.SET_FOCUS_PATH, path: e.split("--") }));
                    }),
                    onItemMouseEnterMemoizer: new y.Lp((e) => () => {
                        (N(!1), h({ type: d.SET_FOCUS_PATH, path: e.split("--") }));
                    }),
                })),
                E = s.useCallback(
                    (e) => {
                        var n, l;
                        if (!u.current) return;
                        e.key === c.D$.ESCAPE && null != o && (e.stopPropagation(), e.preventDefault(), o());
                        let s = (function (e) {
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
                        switch (s) {
                            case c.X2.NAVIGATE_UP:
                            case c.X2.NAVIGATE_DOWN:
                            case c.X2.NAVIGATE_IN:
                            case c.X2.NAVIGATE_OUT:
                                let a;
                                if (
                                    ("textarea" === (a = (n = e.target).tagName.toLowerCase()) ||
                                        ("input" === a
                                            ? ["text", "search", "email", "url", "tel", "password"].includes(n.type)
                                            : n.isContentEditable)) &&
                                    (s === c.X2.NAVIGATE_IN || s === c.X2.NAVIGATE_OUT)
                                )
                                    return;
                                (e.preventDefault(), e.stopPropagation(), N(!0), b({ type: s }));
                                return;
                            case c.X2.SELECT_FOCUSED_ITEM:
                                let i;
                                if (e.repeat || e.target.tabIndex >= 0) return;
                                (e.preventDefault(), e.stopPropagation());
                                let d = ((i = f(p)), m(p)?.find((e) => e.key === i));
                                if (d?.children != null && d.children.length > 0 && !d.hasAction) {
                                    (N(!0), b({ type: c.X2.NAVIGATE_IN }));
                                    return;
                                }
                                if ((N(!1), b({ type: s }), null != r)) return void r(g);
                                let h = e.target.ownerDocument ?? document,
                                    x = ((l = null != g ? `${(0, y.M4)(t, g.join("--"))}` : t), h.getElementById(l));
                                x?.dispatchEvent(
                                    new MouseEvent("click", {
                                        bubbles: !0,
                                        cancelable: !0,
                                        shiftKey: e.shiftKey,
                                        ctrlKey: e.ctrlKey,
                                        metaKey: e.metaKey,
                                        altKey: e.altKey,
                                        view: h.defaultView ?? window,
                                    }),
                                );
                        }
                    },
                    [b, t, g, r, o, p],
                ),
                A = s.useCallback(() => {
                    v || C(!0);
                }, [v]),
                P = s.useCallback(
                    (e) => {
                        e.target !== e.currentTarget && !e.currentTarget.contains(e.relatedTarget) && v && C(!1);
                    },
                    [v],
                ),
                S = s.useCallback(() => {
                    (h({ type: d.SET_FOCUS_PATH, path: [] }), C(!1));
                }, []),
                T = s.useCallback((e) => e.every((e, t) => g[t] === e), [g]),
                w = s.useCallback(
                    () => ({
                        role: "menu",
                        id: t,
                        tabIndex: -1,
                        onKeyDown: E,
                        onFocus: A,
                        onBlur: P,
                        onMouseLeave: S,
                        "aria-activedescendant": g.length > 0 ? (0, y.M4)(t, g.join("--")) : void 0,
                    }),
                    [t, E, A, P, S, g],
                ),
                R = s.useCallback(
                    (e) => {
                        let { path: n } = e;
                        return {
                            role: "menu",
                            tabIndex: -1,
                            "aria-activedescendant": T(n) ? (0, y.M4)(t, g.join("--")) : void 0,
                            focusIndex: p.focusIndex,
                            isUsingKeyboardNavigation: j,
                        };
                    },
                    [t, g, T, p.focusIndex, j],
                ),
                F = s.useCallback(
                    (e) => {
                        let { path: n, hasSubmenu: l = !1, navigable: r = !0, role: s = "menuitem" } = e,
                            a = n.join("--");
                        return {
                            ...(l ? { "aria-expanded": T(n), "aria-haspopup": !0 } : {}),
                            role: s,
                            id: (0, y.M4)(t, a),
                            tabIndex: -1,
                            onFocus: r ? I.get(a) : () => {},
                            onMouseEnter: r ? k.get(a) : () => {},
                        };
                    },
                    [t, T, I, k],
                );
            return s.useMemo(
                () => ({
                    dispatch: b,
                    getContainerProps: w,
                    getSubmenuProps: R,
                    getItemProps: F,
                    isFocused: T,
                    isUsingKeyboardNavigation: j,
                }),
                [b, w, R, F, T, j],
            );
        })({
            navId: t,
            items: w.current,
            initialFocusPath: I.Ay.keyboardModeEnabled && null != F ? [F] : [],
            closeMenu: p,
            defaultIsUsingKeyboardNavigation: I.Ay.keyboardModeEnabled,
        });
    s.useEffect(() => {
        M.isUsingKeyboardNavigation ? I.Ay.keyboardModeEnabled || (0, N.uS)() : I.Ay.keyboardModeEnabled && (0, N.Bm)();
    }, [M.isUsingKeyboardNavigation]);
    let D = s.useRef(null),
        L = s.useContext(g.jQ),
        O = "none" !== (L?.focus ?? "none");
    ((0, v.tj)(D, { disable: O }),
        s.useEffect(() => {
            O && D.current?.focus();
        }, [O]));
    let U = l ? C.d_ : C.Ip,
        V = s.useMemo(() => ({ onSelect: h, onInteraction: b }), [h, b]);
    return (0, r.jsx)(P.x.Provider, {
        value: V,
        children: (0, r.jsx)("div", {
            className: o()(S.menu, S[n], a),
            style: {
                "--custom-menu-viewport-padding": R ? "48px" : "16px",
                "--custom-menu-flexible-min-width": R ? "144px" : "188px",
            },
            ...M.getContainerProps(),
            ref: D,
            "aria-label": e["aria-label"],
            children: (0, r.jsxs)(U, {
                className: o()(S.scroller, { [S.scrollerWithScrollbar]: !l }),
                children: [
                    0 === j.length &&
                        (0, r.jsx)(Y, {
                            disabled: !0,
                            void_label: () => (0, r.jsx)(eb, {}),
                            menuItemProps: M.getItemProps({ path: ["empty"] }),
                            isFocused: !1,
                            onFocus: () => {},
                            onClose: p,
                        }),
                    j.length > 0 &&
                        (function e(t, n, l, s) {
                            let a = 0,
                                o = [];
                            return t.reduce((t, i, u) => {
                                let c = o.length > 0 ? o[o.length - 1] : t;
                                switch (i.type) {
                                    case "separator":
                                        (c.push((0, r.jsx)(T, {}, `separator-${u}`)), (a = 0));
                                        break;
                                    case "groupstart":
                                        (a > 0 &&
                                            i.length > 0 &&
                                            (c.push((0, r.jsx)(T, {}, `separator-${u}`)), (a = 0)),
                                            o.push([]));
                                        break;
                                    case "groupend":
                                        o.length > 0 &&
                                            t.push((0, r.jsx)(_, { contents: o.pop(), ...i.props }, `group-${u}`));
                                        break;
                                    case "item": {
                                        let {
                                                children: t,
                                                childRowHeight: o,
                                                onChildrenScroll: u,
                                                listClassName: d,
                                                subMenuClassName: p,
                                            } = i,
                                            f = null != t,
                                            m = [...l, i.key],
                                            h = n.isFocused(m),
                                            b = (0, r.jsx)(
                                                Y,
                                                {
                                                    ...i.props,
                                                    ...(null != i.label
                                                        ? { label: i.label }
                                                        : { void_label: i.void_label }),
                                                    hasSubmenu: null != t,
                                                    isFocused: h,
                                                    menuItemProps: {
                                                        ...n.getItemProps({ path: m, hasSubmenu: f }),
                                                        ...(null != t ? { "aria-haspopup": !0 } : {}),
                                                    },
                                                    onClose: s,
                                                },
                                                i.key,
                                            );
                                        (f
                                            ? null != o
                                                ? c.push(
                                                      (0, r.jsx)(
                                                          Z,
                                                          {
                                                              ...i.props,
                                                              parentItem: b,
                                                              isFocused: h,
                                                              menuSubmenuProps: n.getSubmenuProps({ path: m }),
                                                              rows: e(t, n, m, s),
                                                              rowHeight: o,
                                                              onScroll: u,
                                                              listClassName: d,
                                                          },
                                                          `${i.key}-submenu`,
                                                      ),
                                                  )
                                                : c.push(
                                                      (0, r.jsx)(
                                                          et,
                                                          {
                                                              ...i.props,
                                                              subMenuClassName: p,
                                                              parentItem: b,
                                                              isFocused: h,
                                                              menuSubmenuProps: n.getSubmenuProps({ path: m }),
                                                              renderSubmenu: () => e(t, n, m, s),
                                                          },
                                                          `${i.key}-submenu`,
                                                      ),
                                                  )
                                            : c.push(b),
                                            a++);
                                        break;
                                    }
                                    case "customitem": {
                                        let e = [...l, i.key];
                                        (c.push(
                                            (0, r.jsx)(
                                                en,
                                                {
                                                    ...i.props,
                                                    isFocused: n.isFocused(e),
                                                    menuItemProps: n.getItemProps({ path: e, navigable: i.navigable }),
                                                    onClose: s,
                                                    children: i.render,
                                                },
                                                i.key,
                                            ),
                                        ),
                                            a++);
                                        break;
                                    }
                                    case "checkbox": {
                                        let e = [...l, i.key];
                                        (c.push(
                                            (0, r.jsx)(
                                                er,
                                                {
                                                    ...i.props,
                                                    isFocused: n.isFocused(e),
                                                    menuItemProps: n.getItemProps({
                                                        path: e,
                                                        role: "menuitemcheckbox",
                                                    }),
                                                },
                                                i.key,
                                            ),
                                        ),
                                            a++);
                                        break;
                                    }
                                    case "radio": {
                                        let e = [...l, i.key];
                                        (c.push(
                                            (0, r.jsx)(
                                                ea,
                                                {
                                                    ...i.props,
                                                    isFocused: n.isFocused(e),
                                                    menuItemProps: n.getItemProps({ path: e, role: "menuitemradio" }),
                                                },
                                                i.key,
                                            ),
                                        ),
                                            a++);
                                        break;
                                    }
                                    case "switch": {
                                        let e = [...l, i.key];
                                        (c.push(
                                            (0, r.jsx)(
                                                ei,
                                                {
                                                    ...i.props,
                                                    isFocused: n.isFocused(e),
                                                    menuItemProps: n.getItemProps({
                                                        path: e,
                                                        role: "menuitemcheckbox",
                                                    }),
                                                },
                                                i.key,
                                            ),
                                        ),
                                            a++);
                                        break;
                                    }
                                    case "textinput": {
                                        let e = [...l, i.key];
                                        (c.push(
                                            (0, r.jsx)(
                                                ed,
                                                {
                                                    ...i.props,
                                                    isFocused: n.isFocused(e),
                                                    menuItemProps: n.getItemProps({ path: e }),
                                                },
                                                i.key,
                                            ),
                                        ),
                                            a++);
                                        break;
                                    }
                                    case "control": {
                                        let e = [...l, i.key];
                                        (c.push(
                                            (0, r.jsx)(
                                                ep,
                                                {
                                                    ...i.props,
                                                    isFocused: n.isFocused(e),
                                                    isUsingKeyboardNavigation: n.isUsingKeyboardNavigation,
                                                    menuItemProps: n.getItemProps({ path: e }),
                                                    onClose: s,
                                                },
                                                i.key,
                                            ),
                                        ),
                                            a++);
                                        break;
                                    }
                                    case "compositecontrol": {
                                        let e = [...l, i.key];
                                        (c.push(
                                            (0, r.jsx)(
                                                ef,
                                                {
                                                    ...i.props,
                                                    isFocused: n.isFocused(e),
                                                    menuItemProps: n.getItemProps({ path: e }),
                                                    onClose: s,
                                                    children: i.children,
                                                },
                                                i.key,
                                            ),
                                        ),
                                            a++);
                                    }
                                }
                                return t;
                            }, []);
                        })(j, M, [], p),
                ],
            }),
        }),
    });
}
function eh() {
    return (0, r.jsx)("div", { className: o()(S.menu, S.loader, S.flexible), children: (0, r.jsx)(j.y, {}) });
}
function eb() {
    let e = "\u266B (\u3064\uFF61\u25D5\u203F\u203F\u25D5\uFF61)\u3064 \u266A",
        [t, n] = s.useState(e);
    return (
        s.useEffect(() => {
            if (I.Ay.useReducedMotion) return;
            let t = setInterval(() => {
                n((t) => (t === e ? "\u266B \u2282(\uFF61\u25D5\u203F\u203F\u25D5\uFF61\u2282) \u266A" : e));
            }, 700);
            return () => clearInterval(t);
        }, []),
        (0, r.jsx)("div", { style: { width: "100%", textAlign: "center" }, children: t })
    );
}
