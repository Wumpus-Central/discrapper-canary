"use strict";
n.d(t, { q: () => S });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
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
    E = n(801461),
    g = n(336389);
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
            defaultSelectedItems: N,
            selectedItems: C,
            onSelectionChange: R,
            activeDescendantIndex: O,
            shouldFocusWrap: b = !1,
            renderListItem: D,
            renderEmptyState: L,
            maxVisibleItems: w = 5,
            loading: M = !1,
            onBlur: x,
            onFocus: P,
            typeahead: k = !1,
        } = e,
        U = i.useId(),
        G = n ?? U,
        F = i.useRef(null),
        V = i.useMemo(() => S.map((e, t) => ({ ...e, index: t })), [S]),
        [B, H] = i.useState(N ?? []),
        j = null != C,
        Y = j ? C : B,
        W = (0, o.Ay)({
            id: G,
            defaultFocused: null != O ? (0, E.ZN)(G, O) : void 0,
            async scrollToEnd() {},
            async scrollToStart() {},
            isEnabled: !d,
            wrap: b,
            preserveFocusPosition: !1,
        });
    i.useEffect(() => {
        requestAnimationFrame(() => {
            null != O && F.current?.scrollToIndex({ section: 0, row: O });
        });
    }, [G, O]);
    let { activeIndex: K, handleKeyDown: $ } = v(k, V);
    i.useEffect(() => {
        if (null != K && k) {
            let e = (0, l.t$)(G, (0, E.ZN)(G, K)),
                t = document.querySelector((0, l.Mz)(e));
            t?.focus();
        }
    }, [K, V, k, G]);
    let z = i.useCallback((e, t) => (T(V[t]) ? I : A), [V]),
        q = i.useCallback(
            (e) => {
                if (!0 === c && 1 === Y.length && Y.includes(e)) return;
                let t = (0, E.qH)(_, Y, e);
                j || H(t), R?.(t);
            },
            [c, Y, R, j, _],
        ),
        Z = i.useCallback((e, t) => {
            let { label: n, description: i } = e,
                s = T(e);
            return (0, r.jsxs)("div", {
                className: g.uN,
                "data-has-description": s || void 0,
                children: [
                    (0, r.jsx)(h.E, { variant: "text-md/medium", color: "currentColor", className: g.vF, children: n }),
                    s &&
                        (0, r.jsx)(h.E, {
                            id: t,
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            lineClamp: 1,
                            className: g.vL,
                            children: i,
                        }),
                ],
            });
        }, []);
    return (
        (t = M
            ? (0, r.jsx)("div", {
                  className: g.vG,
                  "aria-busy": !0,
                  children: (0, r.jsx)(p.y, { type: p.t.PULSING_ELLIPSIS, className: g.S, itemClassName: g.Ci }),
              })
            : V.length > 0
              ? (0, r.jsx)(f.Ei, {
                    ref: F,
                    style: {
                        height: null != w ? `${V.slice(0, w).reduce((e, t) => e + (T(t) ? I : A), 0)}px` : "100%",
                    },
                    role: void 0,
                    tabIndex: s,
                    rowHeight: z,
                    sections: [V.length],
                    sectionHeight: 0,
                    renderSection: () => null,
                    renderRow: (e) => {
                        let { row: t } = e,
                            n = V[t],
                            i = (0, E.ZN)(G, t),
                            a = null == D && T(n) ? `${i}-desc` : void 0,
                            o = 0 !== Y.length && null != Y.find((e) => e.id === n.id);
                        return (0, r.jsx)(
                            y,
                            {
                                ...n,
                                id: i,
                                descriptionId: a,
                                tabIndex: s,
                                selectionMode: _,
                                selected: o,
                                disabled: d || n.disabled,
                                focused: t === O,
                                onClick: () => {
                                    d || n.disabled || q(n);
                                },
                                children: D?.(n, a) ?? Z(n, a),
                            },
                            n.index,
                        );
                    },
                })
              : (L?.() ?? (0, r.jsx)(m.o, {}))),
        (0, r.jsx)(u.hD, {
            navigator: W,
            children: (0, r.jsx)(u.PR, {
                children: (e) => {
                    let { ref: n, onKeyDown: i, ...o } = e;
                    return (0, r.jsx)("div", {
                        onBlur: x,
                        onFocus: P,
                        "aria-busy": M,
                        ref: n,
                        onKeyDown: (e) => {
                            i?.(e), $(e);
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
function y(e) {
    let {
            children: t,
            id: n,
            descriptionId: i,
            tabIndex: s,
            selected: a,
            disabled: o,
            focused: l,
            selectionMode: c,
            onClick: f,
        } = e,
        p = (0, u.rm)(n);
    function h() {
        return "multiple" === c
            ? (0, r.jsx)(d.P, { checked: a })
            : a
              ? (0, r.jsx)(_.B, { color: "currentColor", size: "refresh_sm" })
              : null;
    }
    return (0, r.jsxs)("div", {
        ...p,
        id: n,
        className: g.Vu,
        role: "option",
        tabIndex: -1 === s ? -1 : p.tabIndex,
        onClick: f,
        "aria-disabled": o,
        "aria-selected": a,
        "aria-describedby": i,
        "data-focus-visible": l,
        children: [t, (0, r.jsx)("div", { className: g.Dt, "aria-hidden": !0, children: h() })],
    });
}
function v(e, t) {
    let [n, r] = i.useState(""),
        s = i.useMemo(
            () =>
                e
                    ? t.map((e) =>
                          null != e.label && "function" == typeof e.label.toLowerCase ? e.label.toLowerCase() : "",
                      )
                    : [],
            [t, e],
        ),
        a = i.useCallback((e) => {
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
                let t = s.findIndex((e) => e.startsWith(n.toLowerCase()));
                return t >= 0 ? t : null;
            }, [s, n, e]),
            handleKeyDown: a,
        }
    );
}
