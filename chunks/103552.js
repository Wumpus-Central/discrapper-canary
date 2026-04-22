"use strict";
n.d(t, { G3: () => C, x4: () => N });
var l = n(627968),
    a = n(64700),
    s = n(503698),
    i = n.n(s),
    r = n(884362),
    o = n(837381),
    d = n(892547),
    c = n(534514),
    u = n(834730),
    m = n(475825),
    h = n(939249),
    g = n(658675),
    x = n(628284),
    f = n(985018),
    _ = n(506115);
let p = "data-listbox-item-id",
    j = Object.freeze({ STANDARD: _.wH, BRAND: _.hE });
function b(e) {
    return String(e);
}
let v = a.createContext({ activeDescendant: null, selected: new Set(), setSelected: () => null, itemToString: b });
function C(e) {
    let {
            placeholder: t,
            children: n,
            value: s,
            onChange: h,
            className: g,
            listClassName: x,
            "aria-label": j,
            multiSelect: C = !1,
            autoFocus: A = !1,
            maxVisibleItems: N = 5,
            itemToString: S = b,
            emptyStateText: E,
            emptyStateHeader: T,
            onQueryChange: y,
        } = e,
        [I, w] = a.useState(""),
        R = a.useCallback(
            (e) => {
                w(e), y?.(e);
            },
            [y],
        ),
        [k] = a.useState(!0),
        [M, L] = a.useState(null),
        D = a.useId(),
        P = a.useRef(null);
    a.useLayoutEffect(() => {
        let e = document.querySelector(`[${p}="${M}"]`),
            t = P.current;
        null != t && null != e && t.scrollIntoViewNode({ node: e, padding: 12 });
    }, [M]);
    let O = n(I),
        F = 0 === O.length,
        U = T ?? f.intl.string(f.t["4o4z3e"]),
        z = a.useId(),
        G = a.useCallback(
            () =>
                new Promise((e) => {
                    let t = P.current;
                    if (null == t) return e();
                    t.scrollToTop({ callback: () => requestAnimationFrame(() => e()) });
                }),
            [],
        ),
        B = a.useCallback(
            () =>
                new Promise((e) => {
                    let t = P.current;
                    if (null == t) return e();
                    t.scrollToTop({ callback: () => requestAnimationFrame(() => e()) });
                }),
            [],
        ),
        H = a.useCallback((e, t) => {
            L(t);
            let n = document.querySelector(e),
                l = P.current;
            null != l && null != n && l.scrollIntoViewNode({ node: n });
        }, []),
        V = (0, r.Ay)({ id: z, isEnabled: !0, useVirtualFocus: !0, scrollToStart: G, scrollToEnd: B, setFocus: H });
    return (0, l.jsx)(o.hD, {
        navigator: V,
        children: (0, l.jsx)(o.PR, {
            children: (e) => {
                let { ref: n, onKeyDown: a, ...r } = e;
                return (0, l.jsxs)("div", {
                    ref: n,
                    role: "combobox",
                    "aria-label": j,
                    "aria-expanded": k,
                    "aria-controls": k ? D : void 0,
                    "aria-owns": D,
                    "aria-haspopup": "listbox",
                    className: i()(_.EA, g),
                    children: [
                        (0, l.jsx)("div", {
                            className: _.wx,
                            children: (0, l.jsx)(d.I, {
                                size: "sm",
                                autoFocus: A,
                                placeholder: t,
                                query: I,
                                onChange: R,
                                onKeyDown: a,
                                onBlur: () => L(null),
                                onClear: () => R(""),
                                inputProps: { "aria-multiline": !1, "aria-activedescendant": null != M ? M : void 0 },
                            }),
                        }),
                        (0, l.jsx)("div", {
                            children:
                                k &&
                                (F
                                    ? (0, l.jsxs)("div", {
                                          className: _.Ie,
                                          children: [
                                              (0, l.jsx)(c.D, { variant: "heading-md/semibold", children: U }),
                                              (0, l.jsx)(u.E, {
                                                  color: "text-muted",
                                                  variant: "text-md/normal",
                                                  children: E ?? f.intl.string(f.t.QwSXv8),
                                              }),
                                          ],
                                      })
                                    : (0, l.jsx)(v.Provider, {
                                          value: { activeDescendant: M, selected: s, setSelected: h, itemToString: S },
                                          children: (0, l.jsx)(m.OZ, {
                                              ...r,
                                              style: { maxHeight: 46 * N },
                                              "aria-multiselectable": C,
                                              id: D,
                                              ref: P,
                                              className: i()(_.p_, _.XG, x),
                                              sections: [O.length],
                                              sectionHeight: 0,
                                              rowHeight: 40,
                                              renderRow: (e) => {
                                                  let { row: t } = e;
                                                  return O[t];
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
let A = a.createContext(null);
function N(e) {
    let { value: t, children: n, disabled: s = !1, selectedColor: r = j.STANDARD, ...d } = e,
        { activeDescendant: c, selected: u, setSelected: m, itemToString: g } = a.useContext(v),
        x = g(t),
        f = c === x,
        b = d?.selected ?? u.has(t),
        C = (0, o.rm)(x);
    return (0, l.jsx)(h.D, {
        tag: "li",
        id: x,
        onClick: () => (s ? null : m(t)),
        [p]: t,
        className: i()(_.AS, { [_.in]: f, [r]: b, [_.r9]: s }),
        ...C,
        role: "option",
        "aria-selected": b,
        "aria-disabled": s,
        children: (0, l.jsx)(A.Provider, { value: t, children: n }),
    });
}
(N.Colors = j),
    (N.Label = function (e) {
        let { children: t } = e;
        return (0, l.jsx)("span", { className: _.IR, children: t });
    }),
    (N.Icon = function (e) {
        let { children: t } = e;
        return (0, l.jsx)("span", { className: _.pp, children: t });
    }),
    (N.Checkbox = function (e) {
        let { checked: t } = e,
            { selected: n } = a.useContext(v),
            s = a.useContext(A);
        return (0, l.jsx)("span", {
            className: _.pp,
            children: (0, l.jsx)(g.P, { checked: t ?? (null != s && n.has(s)) }),
        });
    }),
    (N.Checkmark = function () {
        let { selected: e } = a.useContext(v),
            t = a.useContext(A);
        return e.has(t)
            ? (0, l.jsx)("span", {
                  className: _.pp,
                  children: (0, l.jsx)(x.y, { size: "custom", color: "currentColor", width: 20, height: 20 }),
              })
            : null;
    });
