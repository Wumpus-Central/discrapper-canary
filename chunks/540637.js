"use strict";
n.d(t, { l: () => N, q: () => S });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(884362),
    l = n(602034),
    u = n(837381),
    d = n(827734),
    c = n(658675),
    _ = n(820081),
    f = n(475825),
    E = n(289873),
    h = n(834730),
    p = n(992251),
    m = n(801461),
    g = n(329296);
let A = d.A.modules.select.OPTION_HEIGHT.resolve(),
    I = A + 4;
function T(e) {
    return null != e.description && "" !== e.description;
}
function S(e) {
    let t,
        {
            id: n,
            tabIndex: s = 0,
            required: d = !1,
            disabled: c = !1,
            selectionMode: _ = "single",
            items: S,
            defaultSelectedItems: O,
            selectedItems: R,
            onSelectionChange: v,
            activeDescendantIndex: C,
            shouldFocusWrap: b = !1,
            renderListItem: D,
            renderEmptyState: L,
            maxVisibleItems: w = 5,
            loading: M = !1,
            onBlur: P,
            onFocus: U,
            typeahead: k = !1,
        } = e,
        x = i.useId(),
        G = n ?? x,
        V = i.useRef(null),
        F = i.useMemo(() => S.map((e, t) => ({ ...e, index: t })), [S]),
        [B, H] = i.useState(O ?? []),
        Y = null != R,
        W = Y ? R : B,
        j = (0, o.Ay)({
            id: G,
            defaultFocused: null != C ? (0, m.ZN)(G, C) : void 0,
            async scrollToEnd() {},
            async scrollToStart() {},
            isEnabled: !c,
            wrap: b,
            preserveFocusPosition: !1,
            useVirtualFocus: -1 === s,
        });
    i.useEffect(() => {
        requestAnimationFrame(() => {
            null != C && V.current?.scrollToIndex({ section: 0, row: C });
        });
    }, [G, C]);
    let { activeIndex: K, handleKeyDown: $ } = N(k, F);
    i.useEffect(() => {
        if (null != K && k && -1 !== s) {
            let e = (0, l.t$)(G, (0, m.ZN)(G, K)),
                t = document.querySelector((0, l.Mz)(e));
            t?.focus();
        }
    }, [K, F, k, G, s]);
    let z = i.useCallback((e, t) => (T(F[t]) ? I : A), [F]),
        q = i.useCallback(
            (e) => {
                if (!0 === d && 1 === W.length && W.includes(e)) return;
                let t = (0, m.qH)(_, W, e);
                Y || H(t), v?.(t);
            },
            [d, W, v, Y, _],
        ),
        X = i.useCallback((e, t) => {
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
                  children: (0, r.jsx)(E.y, { type: E.t.PULSING_ELLIPSIS, className: g.S, itemClassName: g.Ci }),
              })
            : F.length > 0
              ? (0, r.jsx)(f.Ei, {
                    ref: V,
                    style: {
                        height: null != w ? `${F.slice(0, w).reduce((e, t) => e + (T(t) ? I : A), 0)}px` : "100%",
                    },
                    role: void 0,
                    tabIndex: s,
                    rowHeight: z,
                    sections: [F.length],
                    sectionHeight: 0,
                    renderSection: () => null,
                    renderRow: (e) => {
                        let { row: t } = e,
                            n = F[t],
                            i = (0, m.ZN)(G, t),
                            a = null == D && T(n) ? `${i}-desc` : void 0,
                            o = 0 !== W.length && null != W.find((e) => e.id === n.id);
                        return (0, r.jsx)(
                            y,
                            {
                                ...n,
                                id: i,
                                descriptionId: a,
                                tabIndex: s,
                                selectionMode: _,
                                selected: o,
                                disabled: c || n.disabled,
                                focused: t === C,
                                onClick: () => {
                                    c || n.disabled || q(n);
                                },
                                children: D?.(n, a) ?? X(n, a),
                            },
                            n.index,
                        );
                    },
                })
              : (L?.() ?? (0, r.jsx)(p.o, {}))),
        (0, r.jsx)(u.hD, {
            navigator: j,
            children: (0, r.jsx)(u.PR, {
                children: (e) => {
                    let { ref: n, onKeyDown: i, ...o } = e;
                    return (0, r.jsx)("div", {
                        onBlur: P,
                        onFocus: U,
                        "aria-busy": M,
                        ref: n,
                        onKeyDown: (e) => {
                            i?.(e), $(e);
                        },
                        ...o,
                        role: "listbox",
                        tabIndex: s,
                        "aria-multiselectable": "multiple" === _,
                        className: a()(g.cu, { [g.E1]: F.length > w }),
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
            selectionMode: d,
            onClick: f,
        } = e,
        E = (0, u.rm)(n);
    return (0, r.jsxs)("div", {
        ...E,
        id: n,
        className: g.Vu,
        role: "option",
        tabIndex: -1 === s ? -1 : E.tabIndex,
        onClick: f,
        "aria-disabled": o,
        "aria-selected": a,
        "aria-describedby": i,
        "data-focus-visible": l,
        children: [
            t,
            (0, r.jsx)("div", {
                className: g.Dt,
                "aria-hidden": !0,
                children:
                    "multiple" === d
                        ? (0, r.jsx)(c.P, { checked: a })
                        : a
                          ? (0, r.jsx)(_.B, { color: "currentColor", size: "refresh_sm" })
                          : null,
            }),
        ],
    });
}
function N(e, t) {
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
