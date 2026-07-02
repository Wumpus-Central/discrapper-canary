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
            groups: N = [],
            defaultSelectedItems: v,
            selectedItems: R,
            onSelectionChange: O,
            activeDescendantIndex: b,
            shouldFocusWrap: L = !1,
            renderListItem: D,
            renderEmptyState: P,
            maxVisibleItems: w = 5,
            loading: M = !1,
            onBlur: x,
            onFocus: U,
            typeahead: k = !1,
        } = e,
        G = r.useId(),
        V = n ?? G,
        F = r.useRef(null),
        B = r.useMemo(() => g.map((e, t) => ({ ...e, index: t })), [g]),
        [j, H] = r.useState(v ?? []),
        W = null != R,
        Y = W ? R : j,
        K = (0, o.Ay)({
            id: V,
            defaultFocused: null != b ? (0, m.ZN)(V, b) : void 0,
            async scrollToEnd() {},
            async scrollToStart() {},
            isEnabled: !c,
            wrap: L,
            preserveFocusPosition: !1,
            useVirtualFocus: -1 === s,
        });
    r.useEffect(() => {
        requestAnimationFrame(() => {
            if (null != b) {
                let [e, t] = (0, m.LE)(N, b);
                F.current?.scrollToIndex({ section: e, row: t });
            }
        });
    }, [V, b, N]);
    let { activeIndex: $, handleKeyDown: z } = y(k, B);
    r.useEffect(() => {
        if (null != $ && k && -1 !== s) {
            let e = (0, l.t$)(V, (0, m.ZN)(V, $)),
                t = document.querySelector((0, l.Mz)(e));
            t?.focus();
        }
    }, [$, B, k, V, s]);
    let q = r.useCallback((e, t) => (S(B[(0, m.rp)(N, e, t)]) ? T : I), [B, N]),
        Z = r.useCallback(
            (e) => {
                if (!0 === d && 1 === Y.length && Y.includes(e)) return;
                let t = (0, m.qH)(_, Y, e);
                W || H(t), O?.(t);
            },
            [d, Y, O, W, _],
        ),
        X = r.useCallback((e, t) => {
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
    if (M)
        t = (0, i.jsx)("div", {
            className: A.vG,
            "aria-busy": !0,
            children: (0, i.jsx)(f.y, { type: f.t.PULSING_ELLIPSIS, className: A.S, itemClassName: A.Ci }),
        });
    else if (B.length > 0) {
        let e = N.length > 0;
        t = (0, i.jsx)(h.Ei, {
            ref: F,
            style: {
                height:
                    null != w
                        ? `${
                              B.slice(0, w).reduce((e, t) => e + (S(t) ? T : I), 0) +
                              26 *
                                  (function (e, t) {
                                      let n = 0,
                                          i = 0;
                                      for (let r of e) i < t && n++, (i += r.count);
                                      return n;
                                  })(N, w)
                          }px`
                        : "100%",
            },
            role: void 0,
            tabIndex: s,
            rowHeight: q,
            sections: e ? N.map((e) => e.count) : [B.length],
            sectionHeight: 26 * !!e,
            renderSection: e
                ? (e) => {
                      let { section: t } = e;
                      return (0, i.jsx)(
                          E.E,
                          {
                              "aria-hidden": !0,
                              variant: "text-sm/semibold",
                              color: "text-muted",
                              className: A.SG,
                              children: N[t].label,
                          },
                          `section-${t}`,
                      );
                  }
                : () => null,
            wrapSection: e
                ? (e, t) =>
                      (0, i.jsx)("div", { role: "group", "aria-label": N[e].label, children: t }, `section-group-${e}`)
                : void 0,
            renderRow: (e) => {
                let { rowIndex: t } = e,
                    n = B[t],
                    r = (0, m.ZN)(V, t),
                    a = null == D && S(n) ? `${r}-desc` : void 0,
                    o = 0 !== Y.length && null != Y.find((e) => e.id === n.id);
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
                        focused: t === b,
                        onClick: () => {
                            c || n.disabled || Z(n);
                        },
                        children: D?.(n, a) ?? X(n, a),
                    },
                    n.index,
                );
            },
        });
    } else t = P?.() ?? (0, i.jsx)(p.o, {});
    return (0, i.jsx)(u.hD, {
        navigator: K,
        children: (0, i.jsx)(u.PR, {
            children: (e) => {
                let { ref: n, onKeyDown: r, ...o } = e;
                return (0, i.jsx)("div", {
                    onBlur: x,
                    onFocus: U,
                    "aria-busy": M,
                    ref: n,
                    onKeyDown: (e) => {
                        r?.(e), z(e);
                    },
                    ...o,
                    role: "listbox",
                    tabIndex: s,
                    "aria-multiselectable": "multiple" === _,
                    className: a()(A.cu, { [A.E1]: B.length > w }),
                    "data-mana-component": "listbox",
                    children: t,
                });
            },
        }),
    });
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
