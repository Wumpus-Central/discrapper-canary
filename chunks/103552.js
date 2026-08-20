t.d(l, { G3: () => k, x4: () => N });
var n = t(477900),
    a = t(582128),
    r = t(503698),
    s = t.n(r),
    i = t(887129),
    c = t(837381),
    o = t(297264),
    u = t(834730),
    d = t(475825),
    h = t(939249),
    x = t(658675),
    m = t(628284),
    p = t(892547),
    C = t(375708),
    b = t(958072);
let j = "data-listbox-item-id",
    v = Object.freeze({ STANDARD: b.wH, BRAND: b.hE });
function S(e) {
    return String(e);
}
let g = a.createContext({ activeDescendant: null, selected: new Set(), setSelected: () => null, itemToString: S });
function k(e) {
    let {
            placeholder: l,
            children: t,
            value: r,
            onChange: h,
            className: x,
            listClassName: m,
            "aria-label": v,
            multiSelect: k = !1,
            autoFocus: f = !1,
            maxVisibleItems: N = 5,
            itemToString: w = S,
            emptyStateText: y,
            emptyStateHeader: A,
            onQueryChange: D,
        } = e,
        [I, T] = a.useState(""),
        P = a.useCallback(
            (e) => {
                T(e), D?.(e);
            },
            [D],
        ),
        [R] = a.useState(!0),
        [q, E] = a.useState(null),
        H = a.useId(),
        z = a.useRef(null);
    a.useLayoutEffect(() => {
        let e = document.querySelector(`[${j}="${q}"]`),
            l = z.current;
        null != l && null != e && l.scrollIntoViewNode({ node: e, padding: 12 });
    }, [q]);
    let F = t(I),
        G = 0 === F.length,
        _ = A ?? C.intl.string(C.t["4o4z3e"]),
        L = a.useId(),
        V = a.useCallback(
            () =>
                new Promise((e) => {
                    let l = z.current;
                    if (null == l) return e();
                    l.scrollToTop({ callback: () => requestAnimationFrame(() => e()) });
                }),
            [],
        ),
        X = a.useCallback(
            () =>
                new Promise((e) => {
                    let l = z.current;
                    if (null == l) return e();
                    l.scrollToTop({ callback: () => requestAnimationFrame(() => e()) });
                }),
            [],
        ),
        B = a.useCallback((e, l) => {
            E(l);
            let t = document.querySelector(e),
                n = z.current;
            null != n && null != t && n.scrollIntoViewNode({ node: t });
        }, []),
        O = (0, i.Ay)({ id: L, isEnabled: !0, useVirtualFocus: !0, scrollToStart: V, scrollToEnd: X, setFocus: B });
    return (0, n.jsx)(c.hD, {
        navigator: O,
        children: (0, n.jsx)(c.PR, {
            children: (e) => {
                let { ref: t, onKeyDown: a, ...i } = e;
                return (0, n.jsxs)("div", {
                    ref: t,
                    role: "combobox",
                    "aria-label": v,
                    "aria-expanded": R,
                    "aria-controls": R ? H : void 0,
                    "aria-owns": H,
                    "aria-haspopup": "listbox",
                    className: s()(b.EA, x),
                    children: [
                        (0, n.jsx)("div", {
                            className: b.wx,
                            children: (0, n.jsx)(p.I, {
                                size: "sm",
                                autoFocus: f,
                                placeholder: l,
                                query: I,
                                onChange: P,
                                onKeyDown: a,
                                onBlur: () => E(null),
                                onClear: () => P(""),
                                inputProps: { "aria-multiline": !1, "aria-activedescendant": null != q ? q : void 0 },
                            }),
                        }),
                        (0, n.jsx)("div", {
                            children:
                                R &&
                                (G
                                    ? (0, n.jsxs)("div", {
                                          className: b.Ie,
                                          children: [
                                              (0, n.jsx)(o.D, { variant: "heading-md/semibold", children: _ }),
                                              (0, n.jsx)(u.E, {
                                                  color: "text-muted",
                                                  variant: "text-md/normal",
                                                  children: y ?? C.intl.string(C.t.QwSXv8),
                                              }),
                                          ],
                                      })
                                    : (0, n.jsx)(g.Provider, {
                                          value: { activeDescendant: q, selected: r, setSelected: h, itemToString: w },
                                          children: (0, n.jsx)(d.OZ, {
                                              ...i,
                                              style: { maxHeight: 46 * N },
                                              "aria-multiselectable": k,
                                              id: H,
                                              ref: z,
                                              className: s()(b.p_, b.XG, m),
                                              sections: [F.length],
                                              sectionHeight: 0,
                                              rowHeight: 40,
                                              renderRow: (e) => {
                                                  let { row: l } = e;
                                                  return F[l];
                                              },
                                              renderSection: () => null,
                                          }),
                                      })),
                        }),
                    ],
                });
            },
        }),
    });
}
let f = a.createContext(null);
function N(e) {
    let { value: l, children: t, disabled: r = !1, selectedColor: i = v.STANDARD, ...o } = e,
        { activeDescendant: u, selected: d, setSelected: x, itemToString: m } = a.useContext(g),
        p = m(l),
        C = u === p,
        S = o?.selected ?? d.has(l),
        k = (0, c.rm)(p);
    return (0, n.jsx)(h.D, {
        tag: "li",
        id: p,
        onClick: () => (r ? null : x(l)),
        [j]: l,
        className: s()(b.AS, { [b.in]: C, [i]: S, [b.r9]: r }),
        ...k,
        role: "option",
        "aria-selected": S,
        "aria-disabled": r,
        children: (0, n.jsx)(f.Provider, { value: l, children: t }),
    });
}
(N.Colors = v),
    (N.Label = function (e) {
        let { children: l } = e;
        return (0, n.jsx)("span", { className: b.IR, children: l });
    }),
    (N.Icon = function (e) {
        let { children: l } = e;
        return (0, n.jsx)("span", { className: b.pp, children: l });
    }),
    (N.Checkbox = function (e) {
        let { checked: l } = e,
            { selected: t } = a.useContext(g),
            r = a.useContext(f);
        return (0, n.jsx)("span", {
            className: b.pp,
            children: (0, n.jsx)(x.P, { checked: l ?? (null != r && t.has(r)) }),
        });
    }),
    (N.Checkmark = function () {
        let { selected: e } = a.useContext(g),
            l = a.useContext(f);
        return e.has(l)
            ? (0, n.jsx)("span", {
                  className: b.pp,
                  children: (0, n.jsx)(m.y, { size: "custom", color: "currentColor", width: 20, height: 20 }),
              })
            : null;
    });
