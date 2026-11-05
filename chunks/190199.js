var n = t(477900),
    a = t(582128),
    r = t(503698),
    s = t.n(r),
    i = t(116903),
    c = t(837381),
    o = t(658675),
    u = t(939249),
    d = t(534514),
    h = t(628284),
    x = t(475825),
    m = t(116711),
    p = t(683438),
    C = t(834730),
    b = t(272917);
let j = "data-listbox-item-id",
    S = Object.freeze({ STANDARD: b.wH, BRAND: b.hE });
function v(e) {
    return String(e);
}
let k = a.createContext({ activeDescendant: null, selected: new Set(), setSelected: () => null, itemToString: v }),
    N = a.createContext(null);
function f(e) {
    let { value: l, children: t, disabled: r = !1, selectedColor: i = S.STANDARD, ...o } = e,
        { activeDescendant: d, selected: h, setSelected: x, itemToString: m } = a.useContext(k),
        p = m(l),
        C = d === p,
        v = o?.selected ?? h.has(l),
        f = (0, c.rm)(p);
    return (0, n.jsx)(u.D, {
        tag: "li",
        id: p,
        onClick: () => (r ? null : x(l)),
        [j]: l,
        className: s()(b.AS, { [b.in]: C, [i]: v, [b.r9]: r }),
        ...f,
        role: "option",
        "aria-selected": v,
        "aria-disabled": r,
        children: (0, n.jsx)(N.Provider, { value: l, children: t }),
    });
}
((f.Colors = S),
    (f.Label = function (e) {
        let { children: l } = e;
        return (0, n.jsx)("span", { className: b.IR, children: l });
    }),
    (f.Icon = function (e) {
        let { children: l } = e;
        return (0, n.jsx)("span", { className: b.pp, children: l });
    }),
    (f.Checkbox = function (e) {
        let { checked: l } = e,
            { selected: t } = a.useContext(k),
            r = a.useContext(N);
        return (0, n.jsx)("span", {
            className: b.pp,
            children: (0, n.jsx)(o.P, { checked: l ?? (null != r && t.has(r)) }),
        });
    }),
    (f.Checkmark = function () {
        let { selected: e } = a.useContext(k),
            l = a.useContext(N);
        return e.has(l)
            ? (0, n.jsx)("span", {
                  className: b.pp,
                  children: (0, n.jsx)(h.CircleCheckIcon, {
                      size: "custom",
                      color: "currentColor",
                      width: 20,
                      height: 20,
                  }),
              })
            : null;
    }),
    t.d(
        l,
        {},
        {
            G3: function (e) {
                let {
                        placeholder: l,
                        children: t,
                        value: r,
                        onChange: o,
                        className: u,
                        listClassName: h,
                        "aria-label": S,
                        multiSelect: N = !1,
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
                            (R(e), E?.(e));
                        },
                        [E],
                    ),
                    [I] = a.useState(!0),
                    [O, P] = a.useState(null),
                    L = a.useId(),
                    H = a.useRef(null);
                a.useLayoutEffect(() => {
                    let e = document.querySelector(`[${j}="${O}"]`),
                        l = H.current;
                    null != l && null != e && l.scrollIntoViewNode({ node: e, padding: 12 });
                }, [O]);
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
                        P(l);
                        let t = document.querySelector(e),
                            n = H.current;
                        null != n && null != t && n.scrollIntoViewNode({ node: t });
                    }, []),
                    M = (0, i.Ay)({
                        id: U,
                        isEnabled: !0,
                        useVirtualFocus: !0,
                        scrollToStart: z,
                        scrollToEnd: B,
                        setFocus: V,
                    });
                return (0, n.jsx)(c.hD, {
                    navigator: M,
                    children: (0, n.jsx)(c.PR, {
                        children: (e) => {
                            let { ref: t, onKeyDown: a, ...i } = e;
                            return (0, n.jsxs)("div", {
                                ref: t,
                                role: "combobox",
                                "aria-label": S,
                                "aria-expanded": I,
                                "aria-controls": I ? L : void 0,
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
                                            onBlur: () => P(null),
                                            onClear: () => _(""),
                                            inputProps: {
                                                "aria-multiline": !1,
                                                "aria-activedescendant": null != O ? O : void 0,
                                            },
                                        }),
                                    }),
                                    (0, n.jsx)("div", {
                                        children:
                                            I &&
                                            (G
                                                ? (0, n.jsxs)("div", {
                                                      className: b.Ie,
                                                      children: [
                                                          (0, n.jsx)(d.D, {
                                                              variant: "heading-sm/semibold",
                                                              children: F,
                                                          }),
                                                          (0, n.jsx)(C.E, {
                                                              color: "text-muted",
                                                              variant: "body-md/normal",
                                                              children: T ?? D.AUTOCOMPLETE_NO_RESULTS_BODY,
                                                          }),
                                                      ],
                                                  })
                                                : (0, n.jsx)(k.Provider, {
                                                      value: {
                                                          activeDescendant: O,
                                                          selected: r,
                                                          setSelected: o,
                                                          itemToString: w,
                                                      },
                                                      children: (0, n.jsx)(x.OZ, {
                                                          ...i,
                                                          style: { maxHeight: 46 * g },
                                                          "aria-multiselectable": N,
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
            },
            x4: f,
        },
    ));
