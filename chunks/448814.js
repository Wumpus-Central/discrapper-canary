n.d(t, { w: () => A }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(924826),
    l = n(260866),
    c = n(91192),
    u = n(692547),
    d = n(571155),
    f = n(652728),
    _ = n(715644),
    p = n(131573),
    h = n(777207),
    m = n(194255),
    g = n(199197),
    E = n(95632);
function b(e, t, n) {
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
function y(e) {
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
                b(e, t, n[t]);
            });
    }
    return e;
}
function O(e, t) {
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
function v(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : O(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function I(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = T(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function T(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let S = u.Z.modules.select.OPTION_HEIGHT.resolve();
function A(e) {
    let t,
        {
            id: n,
            required: a = !1,
            disabled: u = !1,
            selectionMode: d = "single",
            items: f,
            defaultSelectedItems: b,
            selectedItems: O,
            onSelectionChange: T,
            activeDescendantIndex: A,
            shouldFocusWrap: R = !1,
            renderListItem: P,
            renderEmptyState: D,
            maxVisibleItems: w = 5,
            loading: L = !1,
            onBlur: x,
            onFocus: M,
            typeahead: k = !1,
        } = e,
        j = i.useId(),
        U = null != n ? n : j,
        G = i.useMemo(() => f.map((e, t) => v(y({}, e), { index: t })), [f]),
        [B, Z] = i.useState(null != b ? b : []),
        F = null != O,
        V = F ? O : B,
        H = (0, s.ZP)({
            id: U,
            async scrollToEnd() {},
            async scrollToStart() {},
            isEnabled: !u,
            wrap: R,
            preserveFocusPosition: !0,
        }),
        { activeIndex: Y, handleKeyDown: W } = N(k, G);
    i.useEffect(() => {
        if (null != Y && k) {
            let e = (0, l.jb)(U, (0, g.cA)(U, Y)),
                t = document.querySelector((0, l.P1)(e));
            null == t || t.focus();
        }
    }, [Y, G, k, U]);
    let K = i.useCallback(
            (e) => {
                if (!0 === a && 1 === V.length && V.includes(e)) return;
                let t = (0, g.cq)(d, V, e);
                F || Z(t), null == T || T(t);
            },
            [a, V, T, F, d],
        ),
        z = i.useCallback(
            (e) =>
                (0, r.jsx)("div", {
                    className: E.listBoxItemContent,
                    children: (0, r.jsx)(h.x, {
                        variant: "text-md/medium",
                        color: "currentColor",
                        className: E.listBoxItemLabel,
                        children: e.label,
                    }),
                }),
            [],
        );
    if (L)
        t = (0, r.jsx)("div", {
            className: E.loadingSpinnerWrapper,
            "aria-busy": !0,
            children: (0, r.jsx)(p.$, {
                type: p.R.PULSING_ELLIPSIS,
                className: E.loadingSpinner,
                itemClassName: E.loadingSpinnerInner,
            }),
        });
    else if (G.length > 0)
        t = (0, r.jsx)(_._2, {
            style: { height: null != w ? "".concat(Math.min(G.length, w) * S, "px") : "100%" },
            role: void 0,
            rowHeight: S,
            sections: [G.length],
            sectionHeight: 0,
            renderSection: () => null,
            renderRow: (e) => {
                var t;
                let { row: n } = e,
                    i = G[n],
                    a = (0, g.cA)(U, n),
                    o = 0 !== V.length && null != V.find((e) => e.id === i.id);
                return (0, r.jsx)(
                    C,
                    v(y({}, i), {
                        id: a,
                        selectionMode: d,
                        selected: o,
                        disabled: u || i.disabled,
                        focused: n === A,
                        onClick: () => {
                            u || i.disabled || K(i);
                        },
                        children: null != (t = null == P ? void 0 : P(i)) ? t : z(i),
                    }),
                    i.index,
                );
            },
        });
    else {
        var q;
        t = null != (q = null == D ? void 0 : D()) ? q : (0, r.jsx)(m.z, {});
    }
    return (0, r.jsx)(c.bG, {
        navigator: H,
        children: (0, r.jsx)(c.SJ, {
            children: (e) => {
                var { ref: n, onKeyDown: i } = e,
                    a = I(e, ["ref", "onKeyDown"]);
                return (0, r.jsx)(
                    "div",
                    v(
                        y(
                            {
                                onBlur: x,
                                onFocus: M,
                                "aria-busy": L,
                                ref: n,
                                onKeyDown: (e) => {
                                    null == i || i(e), W(e);
                                },
                            },
                            a,
                        ),
                        {
                            role: "listbox",
                            "aria-multiselectable": "multiple" === d,
                            className: o()(E.listBox, { [E.scrollable]: G.length > w }),
                            "data-mana-component": "listbox",
                            children: t,
                        },
                    ),
                );
            },
        }),
    });
}
function C(e) {
    let { children: t, id: n, selected: i, disabled: a, focused: o, selectionMode: s, onClick: l } = e,
        u = (0, c.JA)(n);
    function _() {
        return "multiple" === s
            ? (0, r.jsx)(d.F, { checked: i })
            : i
              ? (0, r.jsx)(f.k, {
                    color: "currentColor",
                    size: "refresh_sm",
                })
              : null;
    }
    return (0, r.jsxs)(
        "div",
        v(y({}, u), {
            id: n,
            className: E.listBoxItem,
            role: "option",
            tabIndex: u.tabIndex,
            onClick: l,
            "aria-disabled": a,
            "aria-selected": i,
            "data-focus-visible": o,
            children: [
                t,
                (0, r.jsx)("div", {
                    className: E.selectedIcon,
                    "aria-hidden": !0,
                    children: _(),
                }),
            ],
        }),
    );
}
function N(e, t) {
    let [n, r] = i.useState(""),
        a = i.useMemo(
            () =>
                e
                    ? t.map((e) =>
                          null != e.label && "function" == typeof e.label.toLowerCase ? e.label.toLowerCase() : "",
                      )
                    : [],
            [t, e],
        ),
        o = i.useCallback((e) => {
            e.metaKey || e.ctrlKey || e.altKey || e.shiftKey || e.key.length > 1 || r((t) => t + e.key);
        }, []),
        s = i.useRef(null);
    return (
        i.useEffect(
            () => (
                (s.current = setTimeout(() => {
                    r("");
                }, 750)),
                () => {
                    clearTimeout(s.current);
                }
            ),
            [n],
        ),
        {
            activeIndex: i.useMemo(() => {
                if ("" === n || !e) return null;
                let t = a.findIndex((e) => e.startsWith(n.toLowerCase()));
                return t >= 0 ? t : null;
            }, [a, n, e]),
            handleKeyDown: o,
        }
    );
}
