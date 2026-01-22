n.d(t, {
    G3: () => S,
    x4: () => T,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(884362),
    l = n(837381),
    c = n(892547),
    u = n(397927),
    d = n(985018),
    f = n(414834);

function p(e, t, n) {
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
                p(e, t, n[t]);
            });
    }
    return e;
}

function h(e, t) {
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

function m(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : h(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function g(e, t) {
    if (null == e) return {};
    var n,
        r,
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = E(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}

function E(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
let b = "data-listbox-item-id",
    y = 40,
    O = Object.freeze({
        STANDARD: f.wH,
        BRAND: f.hE,
    });

function A(e) {
    return String(e);
}
let v = i.createContext({
    activeDescendant: null,
    selected: new Set(),
    setSelected: () => null,
    itemToString: A,
});

function S(e) {
    let {
            placeholder: t,
            children: n,
            value: a,
            onChange: p,
            className: h,
            listClassName: E,
            "aria-label": O,
            multiSelect: S = !1,
            autoFocus: I = !1,
            maxVisibleItems: T = 5,
            itemToString: C = A,
            emptyStateText: N,
            emptyStateHeader: R,
            onQueryChange: w,
        } = e,
        [P, D] = i.useState(""),
        x = i.useCallback(
            (e) => {
                D(e), null == w || w(e);
            },
            [w],
        ),
        [L] = i.useState(!0),
        [j, M] = i.useState(null),
        k = i.useId(),
        U = i.useRef(null);
    i.useLayoutEffect(() => {
        let e = document.querySelector("[".concat(b, '="').concat(j, '"]')),
            t = U.current;
        null != t &&
            null != e &&
            t.scrollIntoViewNode({
                node: e,
                padding: 12,
            });
    }, [j]);
    let G = n(P),
        V = 0 === G.length,
        F = null != R ? R : d.intl.string(d.t["4o4z3e"]),
        B = i.useId(),
        H = i.useCallback(
            () =>
                new Promise((e) => {
                    let t = U.current;
                    if (null == t) return e();
                    t.scrollToTop({
                        callback: () => requestAnimationFrame(() => e()),
                    });
                }),
            [],
        ),
        Y = i.useCallback(
            () =>
                new Promise((e) => {
                    let t = U.current;
                    if (null == t) return e();
                    t.scrollToTop({
                        callback: () => requestAnimationFrame(() => e()),
                    });
                }),
            [],
        ),
        W = i.useCallback((e, t) => {
            M(t);
            let n = document.querySelector(e),
                r = U.current;
            null != r &&
                null != n &&
                r.scrollIntoViewNode({
                    node: n,
                });
        }, []),
        K = (0, o.Ay)({
            id: B,
            isEnabled: !0,
            useVirtualFocus: !0,
            scrollToStart: H,
            scrollToEnd: Y,
            setFocus: W,
        });
    return (0, r.jsx)(l.hD, {
        navigator: K,
        children: (0, r.jsx)(l.PR, {
            children: (e) => {
                let { ref: n, onKeyDown: i } = e,
                    o = g(e, ["ref", "onKeyDown"]);
                return (0, r.jsxs)("div", {
                    ref: n,
                    role: "combobox",
                    "aria-label": O,
                    "aria-expanded": L,
                    "aria-controls": L ? k : void 0,
                    "aria-owns": k,
                    "aria-haspopup": "listbox",
                    className: s()(f.EA, h),
                    children: [
                        (0, r.jsx)("div", {
                            className: f.wx,
                            children: (0, r.jsx)(c.I, {
                                size: "sm",
                                autoFocus: I,
                                placeholder: t,
                                query: P,
                                onChange: x,
                                onKeyDown: i,
                                onBlur: () => M(null),
                                onClear: () => x(""),
                                inputProps: {
                                    "aria-multiline": !1,
                                    "aria-activedescendant": null != j ? j : void 0,
                                },
                            }),
                        }),
                        (0, r.jsx)("div", {
                            children:
                                L &&
                                (V
                                    ? (0, r.jsxs)("div", {
                                          className: f.Ie,
                                          children: [
                                              (0, r.jsx)(u.Heading, {
                                                  variant: "heading-md/semibold",
                                                  children: F,
                                              }),
                                              (0, r.jsx)(u.Text, {
                                                  color: "text-muted",
                                                  variant: "text-md/normal",
                                                  children: null != N ? N : d.intl.string(d.t.QwSXv8),
                                              }),
                                          ],
                                      })
                                    : (0, r.jsx)(v.Provider, {
                                          value: {
                                              activeDescendant: j,
                                              selected: a,
                                              setSelected: p,
                                              itemToString: C,
                                          },
                                          children: (0, r.jsx)(
                                              u.OZj,
                                              m(_({}, o), {
                                                  style: {
                                                      maxHeight: T * (y + 6),
                                                  },
                                                  "aria-multiselectable": S,
                                                  id: k,
                                                  ref: U,
                                                  className: s()(f.p_, f.XG, E),
                                                  sections: [G.length],
                                                  sectionHeight: 0,
                                                  rowHeight: y,
                                                  renderRow: (e) => {
                                                      let { row: t } = e;
                                                      return G[t];
                                                  },
                                                  renderSection: () => null,
                                              }),
                                          ),
                                      })),
                        }),
                    ],
                });
            },
        }),
    });
}
let I = i.createContext(null);

function T(e) {
    var t;
    let { value: n, children: a, disabled: o = !1, selectedColor: c = O.STANDARD } = e,
        d = g(e, ["value", "children", "disabled", "selectedColor"]),
        { activeDescendant: p, selected: h, setSelected: E, itemToString: y } = i.useContext(v),
        A = y(n),
        S = p === A,
        T = null != (t = null == d ? void 0 : d.selected) ? t : h.has(n),
        C = (0, l.rm)(A);
    return (0, r.jsx)(
        u.DUT,
        m(
            _(
                {
                    tag: "li",
                    id: A,
                    onClick: () => (o ? null : E(n)),
                    [b]: n,
                    className: s()(f.AS, {
                        [f.in]: S,
                        [c]: T,
                        [f.r9]: o,
                    }),
                },
                C,
            ),
            {
                role: "option",
                "aria-selected": T,
                "aria-disabled": o,
                children: (0, r.jsx)(I.Provider, {
                    value: n,
                    children: a,
                }),
            },
        ),
    );
}
(T.Colors = O),
    (T.Label = function (e) {
        let { children: t } = e;
        return (0, r.jsx)("span", {
            className: f.IR,
            children: t,
        });
    }),
    (T.Icon = function (e) {
        let { children: t } = e;
        return (0, r.jsx)("span", {
            className: f.pp,
            children: t,
        });
    }),
    (T.Checkbox = function (e) {
        let { checked: t } = e,
            { selected: n } = i.useContext(v),
            a = i.useContext(I);
        return (0, r.jsx)("span", {
            className: f.pp,
            children: (0, r.jsx)(u.P7L, {
                checked: null != t ? t : null != a && n.has(a),
            }),
        });
    }),
    (T.Checkmark = function () {
        let { selected: e } = i.useContext(v),
            t = i.useContext(I);
        return e.has(t)
            ? (0, r.jsx)("span", {
                  className: f.pp,
                  children: (0, r.jsx)(u.yr3, {
                      size: "custom",
                      color: "currentColor",
                      width: 20,
                      height: 20,
                  }),
              })
            : null;
    });
