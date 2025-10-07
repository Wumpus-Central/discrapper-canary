n.d(t, { w: () => b }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(924826),
    l = n(91192),
    c = n(793030),
    u = n(483753),
    d = n(987150);
function f(e, t, n) {
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
function _(e) {
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
                f(e, t, n[t]);
            });
    }
    return e;
}
function p(e, t) {
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
function h(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : p(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function m(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = g(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function g(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let E = 40;
function b(e) {
    let {
            id: t,
            required: n = !1,
            disabled: a = !1,
            selectionMode: f = "single",
            items: p,
            defaultSelectedItems: g,
            selectedItems: b,
            onSelectionChange: O,
            activeDescendantIndex: v,
            shouldFocusWrap: I = !1,
            renderListItem: T,
            renderEmptyState: S,
            maxVisibleItems: A = 5,
        } = e,
        C = i.useId(),
        N = null != t ? t : C,
        [R, P] = i.useState(null != g ? g : []),
        w = null != b,
        D = w ? b : R,
        L = (0, s.ZP)({
            id: N,
            async scrollToEnd() {},
            async scrollToStart() {},
            isEnabled: !a,
            wrap: I,
            preserveFocusPosition: !0,
        }),
        x = i.useCallback(
            (e) => {
                if (!0 === n && 1 === D.length && D.includes(e)) return;
                let t = (0, u.cq)(f, D, e);
                w || P(t), null == O || O(t);
            },
            [n, D, O, w, f],
        ),
        M = i.useCallback(
            (e) =>
                (0, r.jsx)("div", {
                    className: d.listBoxItemContent,
                    children: (0, r.jsx)(c.xvT, {
                        variant: "text-md/medium",
                        color: "currentColor",
                        className: d.listBoxItemLabel,
                        children: e.label,
                    }),
                }),
            [],
        );
    return (0, r.jsx)(l.bG, {
        navigator: L,
        children: (0, r.jsx)(l.SJ, {
            children: (e) => {
                var { ref: t } = e,
                    n = m(e, ["ref"]);
                return (0, r.jsx)(
                    "div",
                    h(_({ ref: t }, n), {
                        role: "listbox",
                        "aria-multiselectable": "multiple" === f,
                        className: o()(d.listBox, { [d.scrollable]: p.length > A }),
                        "data-mana-component": "listbox",
                        children:
                            0 === p.length
                                ? null == S
                                    ? void 0
                                    : S()
                                : (0, r.jsx)(c._2F, {
                                      style: {
                                          height: null != A ? "".concat(Math.min(p.length, A) * E, "px") : "100%",
                                      },
                                      role: void 0,
                                      rowHeight: E,
                                      sections: [p.length],
                                      sectionHeight: 0,
                                      renderSection: () => null,
                                      renderRow: (e) => {
                                          var t;
                                          let { row: n } = e,
                                              i = p[n],
                                              o = (0, u.cA)(N, n),
                                              s = 0 !== D.length && null != D.find((e) => e.id === i.id);
                                          return (0, r.jsx)(
                                              y,
                                              h(_({}, i), {
                                                  id: o,
                                                  selectionMode: f,
                                                  selected: s,
                                                  disabled: a || i.disabled,
                                                  focused: n === v,
                                                  onClick: () => {
                                                      a || i.disabled || x(i);
                                                  },
                                                  children: null != (t = null == T ? void 0 : T(i)) ? t : M(i),
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
function y(e) {
    let { children: t, id: n, selected: i, disabled: a, focused: o, selectionMode: s, onClick: u } = e,
        f = (0, l.JA)(n);
    function p() {
        return "multiple" === s
            ? (0, r.jsx)(c.XZJ, {
                  checked: i,
                  displayOnly: !0,
              })
            : i
              ? (0, r.jsx)(c.kSu, {
                    color: "currentColor",
                    size: "refresh_sm",
                })
              : null;
    }
    return (0, r.jsxs)(
        "div",
        h(_({}, f), {
            id: n,
            className: d.listBoxItem,
            role: "option",
            tabIndex: f.tabIndex,
            onClick: u,
            "aria-disabled": a,
            "aria-selected": i,
            "data-focus-visible": o,
            children: [
                t,
                (0, r.jsx)("div", {
                    className: d.selectedIcon,
                    "aria-hidden": !0,
                    children: p(),
                }),
            ],
        }),
    );
}
