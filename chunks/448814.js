n.d(t, { w: () => S }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(924826),
    l = n(91192),
    c = n(692547),
    u = n(571155),
    d = n(652728),
    f = n(715644),
    _ = n(131573),
    p = n(777207),
    h = n(194255),
    m = n(199197),
    g = n(95632);
function E(e, t, n) {
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
function b(e) {
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
                E(e, t, n[t]);
            });
    }
    return e;
}
function y(e, t) {
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
function O(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : y(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function v(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = I(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function I(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let T = c.Z.modules.select.OPTION_HEIGHT.resolve();
function S(e) {
    let t,
        {
            id: n,
            required: a = !1,
            disabled: c = !1,
            selectionMode: u = "single",
            items: d,
            defaultSelectedItems: E,
            selectedItems: y,
            onSelectionChange: I,
            activeDescendantIndex: S,
            shouldFocusWrap: C = !1,
            renderListItem: N,
            renderEmptyState: R,
            maxVisibleItems: P = 5,
            loading: w = !1,
            onBlur: D,
            onFocus: L,
        } = e,
        x = i.useId(),
        M = null != n ? n : x,
        [j, k] = i.useState(null != E ? E : []),
        U = null != y,
        G = U ? y : j,
        B = (0, s.ZP)({
            id: M,
            async scrollToEnd() {},
            async scrollToStart() {},
            isEnabled: !c,
            wrap: C,
            preserveFocusPosition: !0,
        }),
        Z = i.useCallback(
            (e) => {
                if (!0 === a && 1 === G.length && G.includes(e)) return;
                let t = (0, m.cq)(u, G, e);
                U || k(t), null == I || I(t);
            },
            [a, G, I, U, u],
        ),
        F = i.useCallback(
            (e) =>
                (0, r.jsx)("div", {
                    className: g.listBoxItemContent,
                    children: (0, r.jsx)(p.x, {
                        variant: "text-md/medium",
                        color: "currentColor",
                        className: g.listBoxItemLabel,
                        children: e.label,
                    }),
                }),
            [],
        );
    if (w)
        t = (0, r.jsx)("div", {
            className: g.loadingSpinnerWrapper,
            "aria-busy": !0,
            children: (0, r.jsx)(_.$, {
                type: _.R.PULSING_ELLIPSIS,
                className: g.loadingSpinner,
                itemClassName: g.loadingSpinnerInner,
            }),
        });
    else if (d.length > 0)
        t = (0, r.jsx)(f._2, {
            style: { height: null != P ? "".concat(Math.min(d.length, P) * T, "px") : "100%" },
            role: void 0,
            rowHeight: T,
            sections: [d.length],
            sectionHeight: 0,
            renderSection: () => null,
            renderRow: (e) => {
                var t;
                let { row: n } = e,
                    i = d[n],
                    a = (0, m.cA)(M, n),
                    o = 0 !== G.length && null != G.find((e) => e.id === i.id);
                return (0, r.jsx)(
                    A,
                    O(b({}, i), {
                        id: a,
                        selectionMode: u,
                        selected: o,
                        disabled: c || i.disabled,
                        focused: n === S,
                        onClick: () => {
                            c || i.disabled || Z(i);
                        },
                        children: null != (t = null == N ? void 0 : N(i)) ? t : F(i),
                    }),
                    i.id,
                );
            },
        });
    else {
        var V;
        t = null != (V = null == R ? void 0 : R()) ? V : (0, r.jsx)(h.z, {});
    }
    return (0, r.jsx)(l.bG, {
        navigator: B,
        children: (0, r.jsx)(l.SJ, {
            children: (e) => {
                var { ref: n } = e,
                    i = v(e, ["ref"]);
                return (0, r.jsx)(
                    "div",
                    O(
                        b(
                            {
                                onBlur: D,
                                onFocus: L,
                                "aria-busy": w,
                                ref: n,
                            },
                            i,
                        ),
                        {
                            role: "listbox",
                            "aria-multiselectable": "multiple" === u,
                            className: o()(g.listBox, { [g.scrollable]: d.length > P }),
                            "data-mana-component": "listbox",
                            children: t,
                        },
                    ),
                );
            },
        }),
    });
}
function A(e) {
    let { children: t, id: n, selected: i, disabled: a, focused: o, selectionMode: s, onClick: c } = e,
        f = (0, l.JA)(n);
    function _() {
        return "multiple" === s
            ? (0, r.jsx)(u.F, { checked: i })
            : i
              ? (0, r.jsx)(d.k, {
                    color: "currentColor",
                    size: "refresh_sm",
                })
              : null;
    }
    return (0, r.jsxs)(
        "div",
        O(b({}, f), {
            id: n,
            className: g.listBoxItem,
            role: "option",
            tabIndex: f.tabIndex,
            onClick: c,
            "aria-disabled": a,
            "aria-selected": i,
            "data-focus-visible": o,
            children: [
                t,
                (0, r.jsx)("div", {
                    className: g.selectedIcon,
                    "aria-hidden": !0,
                    children: _(),
                }),
            ],
        }),
    );
}
