"use strict";
n.d(t, { l: () => R, q: () => C });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(887129),
    o = n(602034),
    d = n(837381),
    c = n(661531),
    u = n(658675),
    _ = n(820081),
    E = n(475825),
    A = n(289873),
    h = n(834730),
    I = n(992251),
    f = n(801461),
    p = n(883632),
    T = n(329296);
let m = c.A.modules.select.OPTION_HEIGHT.resolve(),
    g = m + 4,
    S = [];
function N(e) {
    return null != e.description && "" !== e.description;
}
function C(e) {
    let t,
        {
            id: n,
            tabIndex: a = 0,
            required: c = !1,
            disabled: u = !1,
            selectionMode: _ = "single",
            items: p,
            groups: C = S,
            defaultSelectedItems: L,
            selectedItems: D,
            onSelectionChange: y,
            activeDescendantIndex: v,
            shouldFocusWrap: b = !1,
            renderListItem: M,
            renderEmptyState: P,
            maxVisibleItems: U = 5,
            loading: w = !1,
            onBlur: G,
            onFocus: x,
            typeahead: k = !1,
        } = e,
        F = r.useId(),
        V = n ?? F,
        B = r.useRef(null),
        H = r.useMemo(() => p.map((e, t) => ({ ...e, index: t })), [p]),
        [j, W] = r.useState(L ?? []),
        Y = null != D,
        K = Y ? D : j,
        $ = (0, l.Ay)({
            id: V,
            defaultFocused: null != v ? (0, f.ZN)(V, v) : void 0,
            async scrollToEnd() {},
            async scrollToStart() {},
            isEnabled: !u,
            wrap: b,
            preserveFocusPosition: !1,
            useVirtualFocus: -1 === a,
        }),
        z = r.useRef(C);
    r.useLayoutEffect(() => {
        z.current = C;
    }, [C]),
        r.useEffect(() => {
            requestAnimationFrame(() => {
                if (null != v) {
                    let [e, t] = (0, f.LE)(z.current, v);
                    B.current?.scrollToIndex({ section: e, row: t });
                }
            });
        }, [V, v]);
    let { activeIndex: q, handleKeyDown: Z } = R(k, H);
    r.useEffect(() => {
        if (null != q && k && -1 !== a) {
            let e = (0, o.t$)(V, (0, f.ZN)(V, q)),
                t = document.querySelector((0, o.Mz)(e));
            t?.focus();
        }
    }, [q, H, k, V, a]);
    let X = r.useCallback((e, t) => (N(H[(0, f.rp)(C, e, t)]) ? g : m), [H, C]),
        Q = r.useCallback(
            (e) => {
                if (!0 === c && 1 === K.length && K.includes(e)) return;
                let t = (0, f.qH)(_, K, e);
                Y || W(t), y?.(t);
            },
            [c, K, y, Y, _],
        ),
        J = r.useCallback((e, t) => {
            let { label: n, description: r } = e,
                a = N(e);
            return (0, i.jsxs)("div", {
                className: T.uN,
                "data-has-description": a || void 0,
                children: [
                    (0, i.jsx)(h.E, { variant: "text-md/medium", color: "currentColor", className: T.vF, children: n }),
                    a &&
                        (0, i.jsx)(h.E, {
                            id: t,
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            lineClamp: 1,
                            className: T.vL,
                            children: r,
                        }),
                ],
            });
        }, []);
    if (w)
        t = (0, i.jsx)("div", {
            className: T.vG,
            "aria-busy": !0,
            children: (0, i.jsx)(A.y, { type: A.t.PULSING_ELLIPSIS, className: T.S, itemClassName: T.Ci }),
        });
    else if (H.length > 0) {
        let e = C.length > 0;
        t = (0, i.jsx)(E.Ei, {
            ref: B,
            style: {
                height:
                    null != U
                        ? `${
                              H.slice(0, U).reduce((e, t) => e + (N(t) ? g : m), 0) +
                              26 *
                                  (function (e, t) {
                                      let n = 0,
                                          i = 0;
                                      for (let r of e) i < t && n++, (i += r.count);
                                      return n;
                                  })(C, U)
                          }px`
                        : "100%",
            },
            role: void 0,
            tabIndex: a,
            rowHeight: X,
            sections: e ? C.map((e) => e.count) : [H.length],
            sectionHeight: 26 * !!e,
            renderSection: e
                ? (e) => {
                      let { section: t } = e;
                      return (0, i.jsx)(
                          h.E,
                          {
                              "aria-hidden": !0,
                              variant: "text-sm/semibold",
                              color: "text-muted",
                              className: T.SG,
                              children: C[t].label,
                          },
                          `section-${t}`,
                      );
                  }
                : () => null,
            wrapSection: e
                ? (e, t) =>
                      (0, i.jsx)("div", { role: "group", "aria-label": C[e].label, children: t }, `section-group-${e}`)
                : void 0,
            renderRow: (e) => {
                let { rowIndex: t } = e,
                    n = H[t],
                    r = (0, f.ZN)(V, t),
                    s = null == M && N(n) ? `${r}-desc` : void 0,
                    l = 0 !== K.length && null != K.find((e) => e.id === n.id);
                return (0, i.jsx)(
                    O,
                    {
                        ...n,
                        id: r,
                        descriptionId: s,
                        tabIndex: a,
                        selectionMode: _,
                        selected: l,
                        disabled: u || n.disabled,
                        focused: t === v,
                        onClick: () => {
                            u || n.disabled || Q(n);
                        },
                        children: M?.(n, s) ?? J(n, s),
                    },
                    n.index,
                );
            },
        });
    } else t = P?.() ?? (0, i.jsx)(I.o, {});
    return (0, i.jsx)(d.hD, {
        navigator: $,
        children: (0, i.jsx)(d.PR, {
            children: (e) => {
                let { ref: n, onKeyDown: r, ...l } = e;
                return (0, i.jsx)("div", {
                    onBlur: G,
                    onFocus: x,
                    "aria-busy": w,
                    ref: n,
                    onKeyDown: (e) => {
                        r?.(e), Z(e);
                    },
                    ...l,
                    role: "listbox",
                    tabIndex: a,
                    "aria-multiselectable": "multiple" === _,
                    className: s()(T.cu, { [T.E1]: H.length > U }),
                    "data-mana-component": "listbox",
                    children: t,
                });
            },
        }),
    });
}
function O(e) {
    let {
            children: t,
            id: n,
            descriptionId: r,
            tabIndex: a,
            selected: l,
            disabled: o,
            focused: c,
            selectionMode: E,
            onClick: A,
        } = e,
        h = (0, d.rm)(n);
    return (0, i.jsxs)("div", {
        ...h,
        id: n,
        className: s()(T.Vu, p.nM),
        role: "option",
        tabIndex: -1 === a ? -1 : h.tabIndex,
        onClick: A,
        "aria-disabled": o,
        "aria-selected": l,
        "aria-describedby": r,
        "data-focus-visible": c,
        "data-marquee-active": c,
        children: [
            t,
            (0, i.jsx)("div", {
                className: T.Dt,
                "aria-hidden": !0,
                children:
                    "multiple" === E
                        ? (0, i.jsx)(u.P, { checked: l })
                        : l
                          ? (0, i.jsx)(_.B, { color: "currentColor", size: "refresh_sm" })
                          : null,
            }),
        ],
    });
}
function R(e, t) {
    let [n, i] = r.useState(""),
        a = r.useMemo(
            () =>
                e
                    ? t.map((e) =>
                          null != e.label && "function" == typeof e.label.toLowerCase ? e.label.toLowerCase() : "",
                      )
                    : [],
            [t, e],
        ),
        s = r.useCallback((e) => {
            e.metaKey || e.ctrlKey || e.altKey || e.shiftKey || e.key.length > 1 || i((t) => t + e.key);
        }, []),
        l = r.useRef(null);
    return (
        r.useEffect(
            () => (
                (l.current = setTimeout(() => {
                    i("");
                }, 750)),
                () => {
                    clearTimeout(l.current);
                }
            ),
            [n],
        ),
        {
            activeIndex: r.useMemo(() => {
                if ("" === n || !e) return null;
                let t = a.findIndex((e) => e.startsWith(n.toLowerCase()));
                return t >= 0 ? t : null;
            }, [a, n, e]),
            handleKeyDown: s,
        }
    );
}
