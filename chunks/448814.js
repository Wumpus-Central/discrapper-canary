n.d(t, { w: () => v }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(924826),
    l = n(91192),
    c = n(595824),
    u = n(652728),
    d = n(715644),
    f = n(777207),
    _ = n(199197),
    p = n(653913);
function h(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function m(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                h(e, t, n[t]);
            });
    }
    return e;
}
function g(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function E(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : g(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function b(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = y(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function y(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let O = 40;
function v(e) {
    let {
            id: t,
            required: n = !1,
            disabled: a = !1,
            selectionMode: c = "single",
            items: u,
            defaultSelectedItems: h,
            selectedItems: g,
            onSelectionChange: y,
            activeDescendantIndex: v,
            shouldFocusWrap: T = !1,
            renderListItem: S,
            renderEmptyState: A,
            maxVisibleItems: C = 5,
        } = e,
        N = i.useId(),
        R = null != t ? t : N,
        [P, w] = i.useState(null != h ? h : []),
        D = null != g,
        L = D ? g : P,
        x = (0, s.ZP)({
            id: R,
            async scrollToEnd() {},
            async scrollToStart() {},
            isEnabled: !a,
            wrap: T,
            preserveFocusPosition: !0,
        }),
        M = i.useCallback(
            (e) => {
                if (!0 === n && 1 === L.length && L.includes(e)) return;
                let t = (0, _.cq)(c, L, e);
                D || w(t), null == y || y(t);
            },
            [n, L, y, D, c],
        ),
        j = i.useCallback(
            (e) =>
                (0, r.jsx)("div", {
                    className: p.listBoxItemContent,
                    children: (0, r.jsx)(f.x, {
                        variant: "text-md/medium",
                        color: "currentColor",
                        className: p.listBoxItemLabel,
                        children: e.label,
                    }),
                }),
            [],
        );
    return (0, r.jsx)(l.bG, {
        navigator: x,
        children: (0, r.jsx)(l.SJ, {
            children: (e) => {
                var { ref: t } = e,
                    n = b(e, ["ref"]);
                return (0, r.jsx)(
                    "div",
                    E(m({ ref: t }, n), {
                        role: "listbox",
                        "aria-multiselectable": "multiple" === c,
                        className: o()(p.listBox, { [p.scrollable]: u.length > C }),
                        "data-mana-component": "listbox",
                        children:
                            0 === u.length
                                ? null == A
                                    ? void 0
                                    : A()
                                : (0, r.jsx)(d._2, {
                                      style: {
                                          height: null != C ? "".concat(Math.min(u.length, C) * O, "px") : "100%",
                                      },
                                      role: void 0,
                                      rowHeight: O,
                                      sections: [u.length],
                                      sectionHeight: 0,
                                      renderSection: () => null,
                                      renderRow: (e) => {
                                          var t;
                                          let { row: n } = e,
                                              i = u[n],
                                              o = (0, _.cA)(R, n),
                                              s = 0 !== L.length && null != L.find((e) => e.id === i.id);
                                          return (0, r.jsx)(
                                              I,
                                              E(m({}, i), {
                                                  id: o,
                                                  selectionMode: c,
                                                  selected: s,
                                                  disabled: a || i.disabled,
                                                  focused: n === v,
                                                  onClick: () => {
                                                      a || i.disabled || M(i);
                                                  },
                                                  children: null != (t = null == S ? void 0 : S(i)) ? t : j(i),
                                              }),
                                              i.id,
                                          );
                                      },
                                  }),
                    }),
                );
            },
        }),
    });
}
function I(e) {
    let { children: t, id: n, selected: i, disabled: a, focused: o, selectionMode: s, onClick: d } = e,
        f = (0, l.JA)(n);
    function _() {
        return "multiple" === s
            ? (0, r.jsx)(c.X, {
                  checked: i,
                  displayOnly: !0,
              })
            : i
              ? (0, r.jsx)(u.k, {
                    color: "currentColor",
                    size: "refresh_sm",
                })
              : null;
    }
    return (0, r.jsxs)(
        "div",
        E(m({}, f), {
            id: n,
            className: p.listBoxItem,
            role: "option",
            tabIndex: f.tabIndex,
            onClick: d,
            "aria-disabled": a,
            "aria-selected": i,
            "data-focus-visible": o,
            children: [
                t,
                (0, r.jsx)("div", {
                    className: p.selectedIcon,
                    "aria-hidden": !0,
                    children: _(),
                }),
            ],
        }),
    );
}
