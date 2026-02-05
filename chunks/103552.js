"use strict";
n.d(t, { G3: () => E, x4: () => I });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(884362),
    l = n(837381),
    u = n(892547),
    c = n(397927),
    d = n(985018),
    _ = n(414834);
let f = "data-listbox-item-id",
    p = 40,
    h = Object.freeze({ STANDARD: _.wH, BRAND: _.hE });
function m(e) {
    return String(e);
}
let g = i.createContext({ activeDescendant: null, selected: new Set(), setSelected: () => null, itemToString: m });
function E(e) {
    let {
            placeholder: t,
            children: n,
            value: a,
            onChange: h,
            className: E,
            listClassName: A,
            "aria-label": I,
            multiSelect: T = !1,
            autoFocus: y = !1,
            maxVisibleItems: S = 5,
            itemToString: v = m,
            emptyStateText: C,
            emptyStateHeader: b,
            onQueryChange: N,
        } = e,
        [R, O] = i.useState(""),
        D = i.useCallback(
            (e) => {
                O(e), N?.(e);
            },
            [N],
        ),
        [L] = i.useState(!0),
        [w, x] = i.useState(null),
        P = i.useId(),
        M = i.useRef(null);
    i.useLayoutEffect(() => {
        let e = document.querySelector(`[${f}="${w}"]`),
            t = M.current;
        null != t && null != e && t.scrollIntoViewNode({ node: e, padding: 12 });
    }, [w]);
    let k = n(R),
        U = 0 === k.length,
        G = b ?? d.intl.string(d.t["4o4z3e"]),
        V = i.useId(),
        F = i.useCallback(
            () =>
                new Promise((e) => {
                    let t = M.current;
                    if (null == t) return e();
                    t.scrollToTop({ callback: () => requestAnimationFrame(() => e()) });
                }),
            [],
        ),
        B = i.useCallback(
            () =>
                new Promise((e) => {
                    let t = M.current;
                    if (null == t) return e();
                    t.scrollToTop({ callback: () => requestAnimationFrame(() => e()) });
                }),
            [],
        ),
        j = i.useCallback((e, t) => {
            x(t);
            let n = document.querySelector(e),
                r = M.current;
            null != r && null != n && r.scrollIntoViewNode({ node: n });
        }, []),
        H = (0, o.Ay)({ id: V, isEnabled: !0, useVirtualFocus: !0, scrollToStart: F, scrollToEnd: B, setFocus: j });
    return (0, r.jsx)(l.hD, {
        navigator: H,
        children: (0, r.jsx)(l.PR, {
            children: (e) => {
                let { ref: n, onKeyDown: i, ...o } = e;
                return (0, r.jsxs)("div", {
                    ref: n,
                    role: "combobox",
                    "aria-label": I,
                    "aria-expanded": L,
                    "aria-controls": L ? P : void 0,
                    "aria-owns": P,
                    "aria-haspopup": "listbox",
                    className: s()(_.EA, E),
                    children: [
                        (0, r.jsx)("div", {
                            className: _.wx,
                            children: (0, r.jsx)(u.I, {
                                size: "sm",
                                autoFocus: y,
                                placeholder: t,
                                query: R,
                                onChange: D,
                                onKeyDown: i,
                                onBlur: () => x(null),
                                onClear: () => D(""),
                                inputProps: { "aria-multiline": !1, "aria-activedescendant": null != w ? w : void 0 },
                            }),
                        }),
                        (0, r.jsx)("div", {
                            children:
                                L &&
                                (U
                                    ? (0, r.jsxs)("div", {
                                          className: _.Ie,
                                          children: [
                                              (0, r.jsx)(c.Heading, { variant: "heading-md/semibold", children: G }),
                                              (0, r.jsx)(c.Text, {
                                                  color: "text-muted",
                                                  variant: "text-md/normal",
                                                  children: C ?? d.intl.string(d.t.QwSXv8),
                                              }),
                                          ],
                                      })
                                    : (0, r.jsx)(g.Provider, {
                                          value: { activeDescendant: w, selected: a, setSelected: h, itemToString: v },
                                          children: (0, r.jsx)(c.OZj, {
                                              ...o,
                                              style: { maxHeight: S * (p + 6) },
                                              "aria-multiselectable": T,
                                              id: P,
                                              ref: M,
                                              className: s()(_.p_, _.XG, A),
                                              sections: [k.length],
                                              sectionHeight: 0,
                                              rowHeight: p,
                                              renderRow: (e) => {
                                                  let { row: t } = e;
                                                  return k[t];
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
let A = i.createContext(null);
function I(e) {
    let { value: t, children: n, disabled: a = !1, selectedColor: o = h.STANDARD, ...u } = e,
        { activeDescendant: d, selected: p, setSelected: m, itemToString: E } = i.useContext(g),
        I = E(t),
        T = d === I,
        y = u?.selected ?? p.has(t),
        S = (0, l.rm)(I);
    return (0, r.jsx)(c.DUT, {
        tag: "li",
        id: I,
        onClick: () => (a ? null : m(t)),
        [f]: t,
        className: s()(_.AS, { [_.in]: T, [o]: y, [_.r9]: a }),
        ...S,
        role: "option",
        "aria-selected": y,
        "aria-disabled": a,
        children: (0, r.jsx)(A.Provider, { value: t, children: n }),
    });
}
(I.Colors = h),
    (I.Label = function (e) {
        let { children: t } = e;
        return (0, r.jsx)("span", { className: _.IR, children: t });
    }),
    (I.Icon = function (e) {
        let { children: t } = e;
        return (0, r.jsx)("span", { className: _.pp, children: t });
    }),
    (I.Checkbox = function (e) {
        let { checked: t } = e,
            { selected: n } = i.useContext(g),
            a = i.useContext(A);
        return (0, r.jsx)("span", {
            className: _.pp,
            children: (0, r.jsx)(c.P7L, { checked: t ?? (null != a && n.has(a)) }),
        });
    }),
    (I.Checkmark = function () {
        let { selected: e } = i.useContext(g),
            t = i.useContext(A);
        return e.has(t)
            ? (0, r.jsx)("span", {
                  className: _.pp,
                  children: (0, r.jsx)(c.yr3, { size: "custom", color: "currentColor", width: 20, height: 20 }),
              })
            : null;
    });
