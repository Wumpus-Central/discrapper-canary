n.d(t, { w: () => E }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(924826),
    l = n(91192),
    c = n(793030),
    u = n(483753),
    d = n(261076);
function f(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function _(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                f(e, t, n[t]);
            });
    }
    return e;
}
function p(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function h(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : p(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function m(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = g(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function g(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function E(e) {
    let {
            id: t,
            required: n = !1,
            disabled: a = !1,
            selectionMode: o = "single",
            items: f,
            defaultSelectedItems: p,
            selectedItems: g,
            onSelectionChange: E,
            activeDescendantIndex: y,
            shouldFocusWrap: O = !1,
            renderListItem: v,
            renderEmptyState: I,
        } = e,
        T = i.useId(),
        S = null != t ? t : T,
        [A, C] = i.useState(null != p ? p : new Set()),
        N = null != g,
        R = N ? g : A,
        P = (0, s.ZP)({
            id: S,
            async scrollToEnd() {},
            async scrollToStart() {},
            isEnabled: !a,
            wrap: O,
            preserveFocusPosition: !0,
        }),
        w = i.useCallback(
            (e) => {
                if (!0 === n && 1 === R.size && R.has(e)) return;
                let t = (0, u.xj)(o, R, e);
                N || C(t), null == E || E(t);
            },
            [n, R, E, N, o],
        ),
        D = i.useCallback(
            (e) =>
                (0, r.jsx)("div", {
                    className: d.listBoxItemContent,
                    children: (0, r.jsx)(c.xvT, {
                        variant: "text-md/medium",
                        color: "currentColor",
                        className: d.listBoxItemLabel,
                        children: e.label,
                    }),
                }),
            [],
        ),
        L = i.useMemo(
            () =>
                f.map((e, t) => {
                    var n, i;
                    let s = (0, u.cA)(S, t);
                    return (0, r.jsx)(
                        b,
                        h(_({}, e), {
                            id: s,
                            selectionMode: o,
                            selected: null != (n = null == R ? void 0 : R.has(e)) && n,
                            disabled: a || e.disabled,
                            focused: t === y,
                            onClick: () => {
                                a || e.disabled || w(e);
                            },
                            children: null != (i = null == v ? void 0 : v(e)) ? i : D(e),
                        }),
                        e.id,
                    );
                }),
            [S, f, o, R, v, D, a, w, y],
        );
    return (0, r.jsx)(l.bG, {
        navigator: P,
        children: (0, r.jsx)(l.SJ, {
            children: (e) => {
                var { ref: t } = e,
                    n = m(e, ["ref"]);
                return (0, r.jsx)(
                    "div",
                    h(_({ ref: t }, n), {
                        role: "listbox",
                        "aria-multiselectable": "multiple" === o,
                        className: d.listBox,
                        children: (0, r.jsxs)("div", {
                            className: d.listBoxInner,
                            children: [L, 0 === L.length && (null == I ? void 0 : I())],
                        }),
                    }),
                );
            },
        }),
    });
}
function b(e) {
    let { children: t, id: n, selected: i, disabled: a, focused: s, selectionMode: u, onClick: f } = e,
        p = (0, l.JA)(n);
    function m() {
        return "multiple" === u
            ? (0, r.jsx)(c.XZJ, {
                  checked: i,
                  displayOnly: !0,
              })
            : (0, r.jsx)(c.kSu, {
                  color: "currentColor",
                  size: "refresh_sm",
                  className: o()({ [d.hiddenCheckIcon]: !i }),
              });
    }
    return (0, r.jsxs)(
        "div",
        h(_({}, p), {
            id: n,
            className: d.listBoxItem,
            role: "option",
            tabIndex: p.tabIndex,
            onClick: f,
            "aria-disabled": a,
            "aria-selected": i,
            "data-focus-visible": s,
            children: [
                t,
                (0, r.jsx)("div", {
                    className: d.selectedIcon,
                    "aria-hidden": !0,
                    children: m(),
                }),
            ],
        }),
    );
}
