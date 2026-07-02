"use strict";
n.d(t, { l: () => y, q: () => N });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(887129),
    l = n(602034),
    u = n(837381),
    d = n(661531),
    c = n(658675),
    _ = n(820081),
    h = n(475825),
    f = n(289873),
    E = n(834730),
    p = n(992251),
    m = n(801461),
    g = n(883632),
    A = n(329296);
let I = d.A.modules.select.OPTION_HEIGHT.resolve(),
    T = I + 4;
function S(e) {
    return null != e.description && "" !== e.description;
}
function N(e) {
    let t,
        {
            id: n,
            tabIndex: s = 0,
            required: d = !1,
            disabled: c = !1,
            selectionMode: _ = "single",
            items: g,
            defaultSelectedItems: N,
            selectedItems: v,
            onSelectionChange: R,
            activeDescendantIndex: O,
            shouldFocusWrap: b = !1,
            renderListItem: L,
            renderEmptyState: D,
            maxVisibleItems: P = 5,
            loading: w = !1,
            onBlur: M,
            onFocus: x,
            typeahead: U = !1,
        } = e,
        k = r.useId(),
        G = n ?? k,
        V = r.useRef(null),
        F = r.useMemo(() => g.map((e, t) => ({ ...e, index: t })), [g]),
        [B, j] = r.useState(N ?? []),
        H = null != v,
        W = H ? v : B,
        Y = (0, o.Ay)({
            id: G,
            defaultFocused: null != O ? (0, m.ZN)(G, O) : void 0,
            async scrollToEnd() {},
            async scrollToStart() {},
            isEnabled: !c,
            wrap: b,
            preserveFocusPosition: !1,
            useVirtualFocus: -1 === s,
        });
    r.useEffect(() => {
        requestAnimationFrame(() => {
            null != O && V.current?.scrollToIndex({ section: 0, row: O });
        });
    }, [G, O]);
    let { activeIndex: K, handleKeyDown: $ } = y(U, F);
    r.useEffect(() => {
        if (null != K && U && -1 !== s) {
            let e = (0, l.t$)(G, (0, m.ZN)(G, K)),
                t = document.querySelector((0, l.Mz)(e));
            t?.focus();
        }
    }, [K, F, U, G, s]);
    let z = r.useCallback((e, t) => (S(F[t]) ? T : I), [F]),
        q = r.useCallback(
            (e) => {
                if (!0 === d && 1 === W.length && W.includes(e)) return;
                let t = (0, m.qH)(_, W, e);
                H || j(t), R?.(t);
            },
            [d, W, R, H, _],
        ),
        Z = r.useCallback((e, t) => {
            let { label: n, description: r } = e,
                s = S(e);
            return (0, i.jsxs)("div", {
                className: A.uN,
                "data-has-description": s || void 0,
                children: [
                    (0, i.jsx)(E.E, { variant: "text-md/medium", color: "currentColor", className: A.vF, children: n }),
                    s &&
                        (0, i.jsx)(E.E, {
                            id: t,
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            lineClamp: 1,
                            className: A.vL,
                            children: r,
                        }),
                ],
            });
        }, []);
    return (
        (t = w
            ? (0, i.jsx)("div", {
                  className: A.vG,
                  "aria-busy": !0,
                  children: (0, i.jsx)(f.y, { type: f.t.PULSING_ELLIPSIS, className: A.S, itemClassName: A.Ci }),
              })
            : F.length > 0
              ? (0, i.jsx)(h.Ei, {
                    ref: V,
                    style: {
                        height: null != P ? `${F.slice(0, P).reduce((e, t) => e + (S(t) ? T : I), 0)}px` : "100%",
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
                            r = (0, m.ZN)(G, t),
                            a = null == L && S(n) ? `${r}-desc` : void 0,
                            o = 0 !== W.length && null != W.find((e) => e.id === n.id);
                        return (0, i.jsx)(
                            C,
                            {
                                ...n,
                                id: r,
                                descriptionId: a,
                                tabIndex: s,
                                selectionMode: _,
                                selected: o,
                                disabled: c || n.disabled,
                                focused: t === O,
                                onClick: () => {
                                    c || n.disabled || q(n);
                                },
                                children: L?.(n, a) ?? Z(n, a),
                            },
                            n.index,
                        );
                    },
                })
              : (D?.() ?? (0, i.jsx)(p.o, {}))),
        (0, i.jsx)(u.hD, {
            navigator: Y,
            children: (0, i.jsx)(u.PR, {
                children: (e) => {
                    let { ref: n, onKeyDown: r, ...o } = e;
                    return (0, i.jsx)("div", {
                        onBlur: M,
                        onFocus: x,
                        "aria-busy": w,
                        ref: n,
                        onKeyDown: (e) => {
                            r?.(e), $(e);
                        },
                        ...o,
                        role: "listbox",
                        tabIndex: s,
                        "aria-multiselectable": "multiple" === _,
                        className: a()(A.cu, { [A.E1]: F.length > P }),
                        "data-mana-component": "listbox",
                        children: t,
                    });
                },
            }),
        })
    );
}
function C(e) {
    let {
            children: t,
            id: n,
            descriptionId: r,
            tabIndex: s,
            selected: o,
            disabled: l,
            focused: d,
            selectionMode: h,
            onClick: f,
        } = e,
        E = (0, u.rm)(n);
    return (0, i.jsxs)("div", {
        ...E,
        id: n,
        className: a()(A.Vu, g.nM),
        role: "option",
        tabIndex: -1 === s ? -1 : E.tabIndex,
        onClick: f,
        "aria-disabled": l,
        "aria-selected": o,
        "aria-describedby": r,
        "data-focus-visible": d,
        "data-marquee-active": d,
        children: [
            t,
            (0, i.jsx)("div", {
                className: A.Dt,
                "aria-hidden": !0,
                children:
                    "multiple" === h
                        ? (0, i.jsx)(c.P, { checked: o })
                        : o
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
