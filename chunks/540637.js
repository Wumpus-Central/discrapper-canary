"use strict";
n.d(t, { q: () => I });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(884362),
    l = n(602034),
    u = n(837381),
    c = n(827734),
    d = n(658675),
    _ = n(820081),
    f = n(475825),
    p = n(289873),
    h = n(834730),
    m = n(992251),
    g = n(801461),
    E = n(336389);
let A = c.A.modules.select.OPTION_HEIGHT.resolve();
function I(e) {
    let t,
        {
            id: n,
            tabIndex: a = 0,
            required: c = !1,
            disabled: d = !1,
            selectionMode: _ = "single",
            items: I,
            defaultSelectedItems: S,
            selectedItems: v,
            onSelectionChange: C,
            activeDescendantIndex: b,
            shouldFocusWrap: N = !1,
            renderListItem: R,
            renderEmptyState: O,
            maxVisibleItems: D = 5,
            loading: L = !1,
            onBlur: w,
            onFocus: x,
            typeahead: P = !1,
        } = e,
        M = i.useId(),
        k = n ?? M,
        U = i.useRef(null),
        G = i.useMemo(() => I.map((e, t) => ({ ...e, index: t })), [I]),
        [V, F] = i.useState(S ?? []),
        B = null != v,
        j = B ? v : V,
        H = (0, o.Ay)({
            id: k,
            defaultFocused: null != b ? (0, g.ZN)(k, b) : void 0,
            async scrollToEnd() {},
            async scrollToStart() {},
            isEnabled: !d,
            wrap: N,
            preserveFocusPosition: !1,
        });
    i.useEffect(() => {
        requestAnimationFrame(() => {
            null != b && U.current?.scrollToIndex({ section: 0, row: b });
        });
    }, [k, b]);
    let { activeIndex: Y, handleKeyDown: W } = y(P, G);
    i.useEffect(() => {
        if (null != Y && P) {
            let e = (0, l.t$)(k, (0, g.ZN)(k, Y)),
                t = document.querySelector((0, l.Mz)(e));
            t?.focus();
        }
    }, [Y, G, P, k]);
    let K = i.useCallback(
            (e) => {
                if (!0 === c && 1 === j.length && j.includes(e)) return;
                let t = (0, g.qH)(_, j, e);
                B || F(t), C?.(t);
            },
            [c, j, C, B, _],
        ),
        z = i.useCallback(
            (e) =>
                (0, r.jsx)("div", {
                    className: E.uN,
                    children: (0, r.jsx)(h.E, {
                        variant: "text-md/medium",
                        color: "currentColor",
                        className: E.vF,
                        children: e.label,
                    }),
                }),
            [],
        );
    return (
        (t = L
            ? (0, r.jsx)("div", {
                  className: E.vG,
                  "aria-busy": !0,
                  children: (0, r.jsx)(p.y, { type: p.t.PULSING_ELLIPSIS, className: E.S, itemClassName: E.Ci }),
              })
            : G.length > 0
              ? (0, r.jsx)(f.Ei, {
                    ref: U,
                    style: { height: null != D ? `${Math.min(G.length, D) * A}px` : "100%" },
                    role: void 0,
                    tabIndex: a,
                    rowHeight: A,
                    sections: [G.length],
                    sectionHeight: 0,
                    renderSection: () => null,
                    renderRow: (e) => {
                        let { row: t } = e,
                            n = G[t],
                            i = (0, g.ZN)(k, t),
                            s = 0 !== j.length && null != j.find((e) => e.id === n.id);
                        return (0, r.jsx)(
                            T,
                            {
                                ...n,
                                id: i,
                                tabIndex: a,
                                selectionMode: _,
                                selected: s,
                                disabled: d || n.disabled,
                                focused: t === b,
                                onClick: () => {
                                    d || n.disabled || K(n);
                                },
                                children: R?.(n) ?? z(n),
                            },
                            n.index,
                        );
                    },
                })
              : (O?.() ?? (0, r.jsx)(m.o, {}))),
        (0, r.jsx)(u.hD, {
            navigator: H,
            children: (0, r.jsx)(u.PR, {
                children: (e) => {
                    let { ref: n, onKeyDown: i, ...o } = e;
                    return (0, r.jsx)("div", {
                        onBlur: w,
                        onFocus: x,
                        "aria-busy": L,
                        ref: n,
                        onKeyDown: (e) => {
                            i?.(e), W(e);
                        },
                        ...o,
                        role: "listbox",
                        tabIndex: a,
                        "aria-multiselectable": "multiple" === _,
                        className: s()(E.cu, { [E.E1]: G.length > D }),
                        "data-mana-component": "listbox",
                        children: t,
                    });
                },
            }),
        })
    );
}
function T(e) {
    let { children: t, id: n, tabIndex: i, selected: a, disabled: s, focused: o, selectionMode: l, onClick: c } = e,
        f = (0, u.rm)(n);
    function p() {
        return "multiple" === l
            ? (0, r.jsx)(d.P, { checked: a })
            : a
              ? (0, r.jsx)(_.B, { color: "currentColor", size: "refresh_sm" })
              : null;
    }
    return (0, r.jsxs)("div", {
        ...f,
        id: n,
        className: E.Vu,
        role: "option",
        tabIndex: -1 === i ? -1 : f.tabIndex,
        onClick: c,
        "aria-disabled": s,
        "aria-selected": a,
        "data-focus-visible": o,
        children: [t, (0, r.jsx)("div", { className: E.Dt, "aria-hidden": !0, children: p() })],
    });
}
function y(e, t) {
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
        s = i.useCallback((e) => {
            e.metaKey || e.ctrlKey || e.altKey || e.shiftKey || e.key.length > 1 || r((t) => t + e.key);
        }, []),
        o = i.useRef(null);
    return (
        i.useEffect(
            () => (
                (o.current = setTimeout(() => {
                    r("");
                }, 750)),
                () => {
                    clearTimeout(o.current);
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
            handleKeyDown: s,
        }
    );
}
