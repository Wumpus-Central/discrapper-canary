n.d(t, {
    $$: () => g,
    Ay: () => E,
    qv: () => m,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(990078),
    l = n(101555),
    c = n(930901);

function u(e, t, n) {
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

function d(e) {
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
                u(e, t, n[t]);
            });
    }
    return e;
}

function f(e, t) {
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

function p(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : f(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function _(e, t) {
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
    if (((a = h(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}

function h(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
let m = i.forwardRef(function (e, t) {
    let [n, ...i] = [e, t],
        {
            label: a,
            ariaLabel: u,
            tooltipText: f,
            icon: h,
            iconProps: m,
            onClick: g,
            onTooltipShow: E,
            onTooltipHide: b,
            disabled: y,
            dangerous: O,
            separator: A,
            buttonClassName: v,
            children: S,
        } = n,
        I = _(n, [
            "label",
            "ariaLabel",
            "tooltipText",
            "icon",
            "iconProps",
            "onClick",
            "onTooltipShow",
            "onTooltipHide",
            "disabled",
            "dangerous",
            "separator",
            "buttonClassName",
            "children",
        ]),
        [T] = i;
    return (0, r.jsx)(o.m, {
        asContainer: !0,
        __unsupportedReactNodeAsText: null != f ? f : a,
        "aria-label": a,
        onTooltipShow: E,
        onTooltipHide: b,
        children: (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)(
                    l.$n,
                    p(
                        d(
                            {
                                ref: T,
                                className: s()(c.W1, v),
                                onClick: (e) => {
                                    g(e);
                                },
                                "aria-label": null != u ? u : a,
                                disabled: y,
                                dangerous: O,
                            },
                            I,
                        ),
                        {
                            children: [
                                null != h
                                    ? (0, r.jsx)(
                                          h,
                                          d(
                                              {
                                                  className: c.Kk,
                                                  color: "currentColor",
                                              },
                                              m,
                                          ),
                                      )
                                    : null,
                                null != S
                                    ? (0, r.jsx)("div", {
                                          className: s()(c.Kk, c.IO),
                                          children: S,
                                      })
                                    : null,
                            ],
                        },
                    ),
                ),
                A && (0, r.jsx)(l.wv, {}),
            ],
        }),
    });
});

function g(e) {
    let { className: t } = e;
    return (0, r.jsx)("div", {
        className: s()(c.me, t),
    });
}

function E(e) {
    let { children: t } = e,
        n = _(e, ["children"]);
    return (0, r.jsx)(l.Ay, {
        className: s()(n.className, c.oO),
        children: t,
    });
}
