"use strict";
n.d(t, { l: () => y, q: () => S });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(887129),
    l = n(602034),
    u = n(837381),
    c = n(661531),
    d = n(658675),
    _ = n(820081),
    f = n(475825),
    h = n(289873),
    p = n(834730),
    E = n(992251),
    m = n(801461),
    g = n(329296);
let A = c.A.modules.select.OPTION_HEIGHT.resolve(),
    I = A + 4;
function T(e) {
    return null != e.description && "" !== e.description;
}
function S(e) {
    let t,
        {
            id: n,
            tabIndex: s = 0,
            required: c = !1,
            disabled: d = !1,
            selectionMode: _ = "single",
            items: S,
            defaultSelectedItems: C,
            selectedItems: v,
            onSelectionChange: O,
            activeDescendantIndex: R,
            shouldFocusWrap: b = !1,
            renderListItem: D,
            renderEmptyState: L,
            maxVisibleItems: w = 5,
            loading: M = !1,
            onBlur: P,
            onFocus: x,
            typeahead: U = !1,
        } = e,
        k = r.useId(),
        G = n ?? k,
        F = r.useRef(null),
        V = r.useMemo(() => S.map((e, t) => ({ ...e, index: t })), [S]),
        [B, H] = r.useState(C ?? []),
        j = null != v,
        Y = j ? v : B,
        W = (0, o.Ay)({
            id: G,
            defaultFocused: null != R ? (0, m.ZN)(G, R) : void 0,
            async scrollToEnd() {},
            async scrollToStart() {},
            isEnabled: !d,
            wrap: b,
            preserveFocusPosition: !1,
            useVirtualFocus: -1 === s,
        });
    r.useEffect(() => {
        requestAnimationFrame(() => {
            null != R && F.current?.scrollToIndex({ section: 0, row: R });
        });
    }, [G, R]);
    let { activeIndex: K, handleKeyDown: z } = y(U, V);
    r.useEffect(() => {
        if (null != K && U && -1 !== s) {
            let e = (0, l.t$)(G, (0, m.ZN)(G, K)),
                t = document.querySelector((0, l.Mz)(e));
            t?.focus();
        }
    }, [K, V, U, G, s]);
    let $ = r.useCallback((e, t) => (T(V[t]) ? I : A), [V]),
        q = r.useCallback(
            (e) => {
                if (!0 === c && 1 === Y.length && Y.includes(e)) return;
                let t = (0, m.qH)(_, Y, e);
                j || H(t), O?.(t);
            },
            [c, Y, O, j, _],
        ),
        Z = r.useCallback((e, t) => {
            let { label: n, description: r } = e,
                s = T(e);
            return (0, i.jsxs)("div", {
                className: g.uN,
                "data-has-description": s || void 0,
                children: [
                    (0, i.jsx)(p.E, { variant: "text-md/medium", color: "currentColor", className: g.vF, children: n }),
                    s &&
                        (0, i.jsx)(p.E, {
                            id: t,
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            lineClamp: 1,
                            className: g.vL,
                            children: r,
                        }),
                ],
            });
        }, []);
    return (
        (t = M
            ? (0, i.jsx)("div", {
                  className: g.vG,
                  "aria-busy": !0,
                  children: (0, i.jsx)(h.y, { type: h.t.PULSING_ELLIPSIS, className: g.S, itemClassName: g.Ci }),
              })
            : V.length > 0
              ? (0, i.jsx)(f.Ei, {
                    ref: F,
                    style: {
                        height: null != w ? `${V.slice(0, w).reduce((e, t) => e + (T(t) ? I : A), 0)}px` : "100%",
                    },
                    role: void 0,
                    tabIndex: s,
                    rowHeight: $,
                    sections: [V.length],
                    sectionHeight: 0,
                    renderSection: () => null,
                    renderRow: (e) => {
                        let { row: t } = e,
                            n = V[t],
                            r = (0, m.ZN)(G, t),
                            a = null == D && T(n) ? `${r}-desc` : void 0,
                            o = 0 !== Y.length && null != Y.find((e) => e.id === n.id);
                        return (0, i.jsx)(
                            N,
                            {
                                ...n,
                                id: r,
                                descriptionId: a,
                                tabIndex: s,
                                selectionMode: _,
                                selected: o,
                                disabled: d || n.disabled,
                                focused: t === R,
                                onClick: () => {
                                    d || n.disabled || q(n);
                                },
                                children: D?.(n, a) ?? Z(n, a),
                            },
                            n.index,
                        );
                    },
                })
              : (L?.() ?? (0, i.jsx)(E.o, {}))),
        (0, i.jsx)(u.hD, {
            navigator: W,
            children: (0, i.jsx)(u.PR, {
                children: (e) => {
                    let { ref: n, onKeyDown: r, ...o } = e;
                    return (0, i.jsx)("div", {
                        onBlur: P,
                        onFocus: x,
                        "aria-busy": M,
                        ref: n,
                        onKeyDown: (e) => {
                            r?.(e), z(e);
                        },
                        ...o,
                        role: "listbox",
                        tabIndex: s,
                        "aria-multiselectable": "multiple" === _,
                        className: a()(g.cu, { [g.E1]: V.length > w }),
                        "data-mana-component": "listbox",
                        children: t,
                    });
                },
            }),
        })
    );
}
function N(e) {
    let {
            children: t,
            id: n,
            descriptionId: r,
            tabIndex: s,
            selected: a,
            disabled: o,
            focused: l,
            selectionMode: c,
            onClick: f,
        } = e,
        h = (0, u.rm)(n);
    return (0, i.jsxs)("div", {
        ...h,
        id: n,
        className: g.Vu,
        role: "option",
        tabIndex: -1 === s ? -1 : h.tabIndex,
        onClick: f,
        "aria-disabled": o,
        "aria-selected": a,
        "aria-describedby": r,
        "data-focus-visible": l,
        children: [
            t,
            (0, i.jsx)("div", {
                className: g.Dt,
                "aria-hidden": !0,
                children:
                    "multiple" === c
                        ? (0, i.jsx)(d.P, { checked: a })
                        : a
                          ? (0, i.jsx)(_.B, { color: "currentColor", size: "refresh_sm" })
                          : null,
            }),
        ],
    });
}
function y(e, t) {
    let [n, i] = r.useState(""),
        s = r.useMemo(
            () =>
                e
                    ? t.map((e) =>
                          null != e.label && "function" == typeof e.label.toLowerCase ? e.label.toLowerCase() : "",
                      )
                    : [],
            [t, e],
        ),
        a = r.useCallback((e) => {
            e.metaKey || e.ctrlKey || e.altKey || e.shiftKey || e.key.length > 1 || i((t) => t + e.key);
        }, []),
        o = r.useRef(null);
    return (
        r.useEffect(
            () => (
                (o.current = setTimeout(() => {
                    i("");
                }, 750)),
                () => {
                    clearTimeout(o.current);
                }
            ),
            [n],
        ),
        {
            activeIndex: r.useMemo(() => {
                if ("" === n || !e) return null;
                let t = s.findIndex((e) => e.startsWith(n.toLowerCase()));
                return t >= 0 ? t : null;
            }, [s, n, e]),
            handleKeyDown: a,
        }
    );
}
