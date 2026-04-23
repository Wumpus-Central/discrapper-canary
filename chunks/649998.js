"use strict";
n.d(t, { q: () => S, l: () => C });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(887129),
    l = n(602034),
    d = n(837381),
    _ = n(661531),
    u = n(658675),
    c = n(820081),
    E = n(475825),
    h = n(289873),
    m = n(834730),
    f = n(992251);
function g() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "listbox",
        t = arguments.length > 1 ? arguments[1] : void 0;
    return `${e}-option-${t}`;
}
n(321073);
var p = n(329296);
let A = _.A.modules.select.OPTION_HEIGHT.resolve(),
    I = A + 4;
function T(e) {
    return null != e.description && "" !== e.description;
}
function S(e) {
    let t,
        {
            id: n,
            tabIndex: s = 0,
            required: _ = !1,
            disabled: u = !1,
            selectionMode: c = "single",
            items: S,
            defaultSelectedItems: R,
            selectedItems: O,
            onSelectionChange: y,
            activeDescendantIndex: v,
            shouldFocusWrap: D = !1,
            renderListItem: L,
            renderEmptyState: b,
            maxVisibleItems: w = 5,
            loading: P = !1,
            onBlur: k,
            onFocus: M,
            typeahead: U = !1,
        } = e,
        x = r.useId(),
        G = n ?? x,
        V = r.useRef(null),
        F = r.useMemo(() => S.map((e, t) => ({ ...e, index: t })), [S]),
        [B, H] = r.useState(R ?? []),
        j = null != O,
        W = j ? O : B,
        Y = (0, o.Ay)({
            id: G,
            defaultFocused: null != v ? g(G, v) : void 0,
            async scrollToEnd() {},
            async scrollToStart() {},
            isEnabled: !u,
            wrap: D,
            preserveFocusPosition: !1,
            useVirtualFocus: -1 === s,
        });
    r.useEffect(() => {
        requestAnimationFrame(() => {
            null != v && V.current?.scrollToIndex({ section: 0, row: v });
        });
    }, [G, v]);
    let { activeIndex: K, handleKeyDown: z } = C(U, F);
    r.useEffect(() => {
        if (null != K && U && -1 !== s) {
            let e = (0, l.t$)(G, g(G, K)),
                t = document.querySelector((0, l.Mz)(e));
            t?.focus();
        }
    }, [K, F, U, G, s]);
    let $ = r.useCallback((e, t) => (T(F[t]) ? I : A), [F]),
        q = r.useCallback(
            (e) => {
                let t;
                if (!0 === _ && 1 === W.length && W.includes(e)) return;
                let n =
                    ((t = [...W]),
                    "multiple" === c
                        ? null != W.find((t) => t.id === e.id)
                            ? (t = W.filter((t) => t.id !== e.id))
                            : t.push(e)
                        : (t = [e]),
                    t);
                j || H(n), y?.(n);
            },
            [_, W, y, j, c],
        ),
        X = r.useCallback((e, t) => {
            let { label: n, description: r } = e,
                s = T(e);
            return (0, i.jsxs)("div", {
                className: p.uN,
                "data-has-description": s || void 0,
                children: [
                    (0, i.jsx)(m.E, { variant: "text-md/medium", color: "currentColor", className: p.vF, children: n }),
                    s &&
                        (0, i.jsx)(m.E, {
                            id: t,
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            lineClamp: 1,
                            className: p.vL,
                            children: r,
                        }),
                ],
            });
        }, []);
    return (
        (t = P
            ? (0, i.jsx)("div", {
                  className: p.vG,
                  "aria-busy": !0,
                  children: (0, i.jsx)(h.y, { type: h.t.PULSING_ELLIPSIS, className: p.S, itemClassName: p.Ci }),
              })
            : F.length > 0
              ? (0, i.jsx)(E.Ei, {
                    ref: V,
                    style: {
                        height: null != w ? `${F.slice(0, w).reduce((e, t) => e + (T(t) ? I : A), 0)}px` : "100%",
                    },
                    role: void 0,
                    tabIndex: s,
                    rowHeight: $,
                    sections: [F.length],
                    sectionHeight: 0,
                    renderSection: () => null,
                    renderRow: (e) => {
                        let { row: t } = e,
                            n = F[t],
                            r = g(G, t),
                            a = null == L && T(n) ? `${r}-desc` : void 0,
                            o = 0 !== W.length && null != W.find((e) => e.id === n.id);
                        return (0, i.jsx)(
                            N,
                            {
                                ...n,
                                id: r,
                                descriptionId: a,
                                tabIndex: s,
                                selectionMode: c,
                                selected: o,
                                disabled: u || n.disabled,
                                focused: t === v,
                                onClick: () => {
                                    u || n.disabled || q(n);
                                },
                                children: L?.(n, a) ?? X(n, a),
                            },
                            n.index,
                        );
                    },
                })
              : (b?.() ?? (0, i.jsx)(f.o, {}))),
        (0, i.jsx)(d.hD, {
            navigator: Y,
            children: (0, i.jsx)(d.PR, {
                children: (e) => {
                    let { ref: n, onKeyDown: r, ...o } = e;
                    return (0, i.jsx)("div", {
                        onBlur: k,
                        onFocus: M,
                        "aria-busy": P,
                        ref: n,
                        onKeyDown: (e) => {
                            r?.(e), z(e);
                        },
                        ...o,
                        role: "listbox",
                        tabIndex: s,
                        "aria-multiselectable": "multiple" === c,
                        className: a()(p.cu, { [p.E1]: F.length > w }),
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
            selectionMode: _,
            onClick: E,
        } = e,
        h = (0, d.rm)(n);
    return (0, i.jsxs)("div", {
        ...h,
        id: n,
        className: p.Vu,
        role: "option",
        tabIndex: -1 === s ? -1 : h.tabIndex,
        onClick: E,
        "aria-disabled": o,
        "aria-selected": a,
        "aria-describedby": r,
        "data-focus-visible": l,
        children: [
            t,
            (0, i.jsx)("div", {
                className: p.Dt,
                "aria-hidden": !0,
                children:
                    "multiple" === _
                        ? (0, i.jsx)(u.P, { checked: a })
                        : a
                          ? (0, i.jsx)(c.B, { color: "currentColor", size: "refresh_sm" })
                          : null,
            }),
        ],
    });
}
function C(e, t) {
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
