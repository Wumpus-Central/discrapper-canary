t.d(l, { G3: () => k, x4: () => g });
var n = t(477900),
    a = t(582128),
    r = t(503698),
    s = t.n(r),
    i = t(887129),
    c = t(837381),
    o = t(658675),
    u = t(939249),
    d = t(297264),
    h = t(628284),
    x = t(475825),
    m = t(460890),
    p = t(683438),
    C = t(834730),
    b = t(272917);
let j = "data-listbox-item-id",
    S = Object.freeze({ STANDARD: b.wH, BRAND: b.hE });
function v(e) {
    return String(e);
}
let N = a.createContext({ activeDescendant: null, selected: new Set(), setSelected: () => null, itemToString: v });
function k(e) {
    let {
            placeholder: l,
            children: t,
            value: r,
            onChange: o,
            className: u,
            listClassName: h,
            "aria-label": S,
            multiSelect: k = !1,
            autoFocus: f = !1,
            maxVisibleItems: g = 5,
            itemToString: w = v,
            emptyStateText: T,
            emptyStateHeader: A,
            onQueryChange: E,
        } = e,
        { i18n: D } = (0, m.G9)(),
        [y, R] = a.useState(""),
        _ = a.useCallback(
            (e) => {
                R(e), E?.(e);
            },
            [E],
        ),
        [O] = a.useState(!0),
        [P, I] = a.useState(null),
        L = a.useId(),
        H = a.useRef(null);
    a.useLayoutEffect(() => {
        let e = document.querySelector(`[${j}="${P}"]`),
            l = H.current;
        null != l && null != e && l.scrollIntoViewNode({ node: e, padding: 12 });
    }, [P]);
    let q = t(y),
        G = 0 === q.length,
        F = A ?? D.AUTOCOMPLETE_NO_RESULTS_HEADER,
        U = a.useId(),
        z = a.useCallback(
            () =>
                new Promise((e) => {
                    let l = H.current;
                    if (null == l) return e();
                    l.scrollToTop({ callback: () => requestAnimationFrame(() => e()) });
                }),
            [],
        ),
        B = a.useCallback(
            () =>
                new Promise((e) => {
                    let l = H.current;
                    if (null == l) return e();
                    l.scrollToTop({ callback: () => requestAnimationFrame(() => e()) });
                }),
            [],
        ),
        V = a.useCallback((e, l) => {
            I(l);
            let t = document.querySelector(e),
                n = H.current;
            null != n && null != t && n.scrollIntoViewNode({ node: t });
        }, []),
        M = (0, i.Ay)({ id: U, isEnabled: !0, useVirtualFocus: !0, scrollToStart: z, scrollToEnd: B, setFocus: V });
    return (0, n.jsx)(c.hD, {
        navigator: M,
        children: (0, n.jsx)(c.PR, {
            children: (e) => {
                let { ref: t, onKeyDown: a, ...i } = e;
                return (0, n.jsxs)("div", {
                    ref: t,
                    role: "combobox",
                    "aria-label": S,
                    "aria-expanded": O,
                    "aria-controls": O ? L : void 0,
                    "aria-owns": L,
                    "aria-haspopup": "listbox",
                    className: s()(b.EA, u),
                    children: [
                        (0, n.jsx)("div", {
                            className: b.wx,
                            children: (0, n.jsx)(p.I, {
                                size: "sm",
                                autoFocus: f,
                                placeholder: l,
                                query: y,
                                onChange: _,
                                onKeyDown: a,
                                onBlur: () => I(null),
                                onClear: () => _(""),
                                inputProps: { "aria-multiline": !1, "aria-activedescendant": null != P ? P : void 0 },
                            }),
                        }),
                        (0, n.jsx)("div", {
                            children:
                                O &&
                                (G
                                    ? (0, n.jsxs)("div", {
                                          className: b.Ie,
                                          children: [
                                              (0, n.jsx)(d.D, { variant: "heading-md/semibold", children: F }),
                                              (0, n.jsx)(C.E, {
                                                  color: "text-muted",
                                                  variant: "text-md/normal",
                                                  children: T ?? D.AUTOCOMPLETE_NO_RESULTS_BODY,
                                              }),
                                          ],
                                      })
                                    : (0, n.jsx)(N.Provider, {
                                          value: { activeDescendant: P, selected: r, setSelected: o, itemToString: w },
                                          children: (0, n.jsx)(x.OZ, {
                                              ...i,
                                              style: { maxHeight: 46 * g },
                                              "aria-multiselectable": k,
                                              id: L,
                                              ref: H,
                                              className: s()(b.p_, b.XG, h),
                                              sections: [q.length],
                                              sectionHeight: 0,
                                              rowHeight: 40,
                                              renderRow: (e) => {
                                                  let { row: l } = e;
                                                  return q[l];
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
function g(e) {
    let { value: l, children: t, disabled: r = !1, selectedColor: i = S.STANDARD, ...o } = e,
        { activeDescendant: d, selected: h, setSelected: x, itemToString: m } = a.useContext(N),
        p = m(l),
        C = d === p,
        v = o?.selected ?? h.has(l),
        k = (0, c.rm)(p);
    return (0, n.jsx)(u.D, {
        tag: "li",
        id: p,
        onClick: () => (r ? null : x(l)),
        [j]: l,
        className: s()(b.AS, { [b.in]: C, [i]: v, [b.r9]: r }),
        ...k,
        role: "option",
        "aria-selected": v,
        "aria-disabled": r,
        children: (0, n.jsx)(f.Provider, { value: l, children: t }),
    });
}
(g.Colors = S),
    (g.Label = function (e) {
        let { children: l } = e;
        return (0, n.jsx)("span", { className: b.IR, children: l });
    }),
    (g.Icon = function (e) {
        let { children: l } = e;
        return (0, n.jsx)("span", { className: b.pp, children: l });
    }),
    (g.Checkbox = function (e) {
        let { checked: l } = e,
            { selected: t } = a.useContext(N),
            r = a.useContext(f);
        return (0, n.jsx)("span", {
            className: b.pp,
            children: (0, n.jsx)(o.P, { checked: l ?? (null != r && t.has(r)) }),
        });
    }),
    (g.Checkmark = function () {
        let { selected: e } = a.useContext(N),
            l = a.useContext(f);
        return e.has(l)
            ? (0, n.jsx)("span", {
                  className: b.pp,
                  children: (0, n.jsx)(h.y, { size: "custom", color: "currentColor", width: 20, height: 20 }),
              })
            : null;
    });
