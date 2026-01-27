n.d(t, {
    $$: () => f,
    Ay: () => m,
    qv: () => p,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(990078),
    o = n(101555),
    c = n(930901);

function u(e) {
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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}

function d(e, t) {
    if (null == e) return {};
    var n,
        r,
        i,
        l = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
        return l;
    }
    if (
        ((l = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = {},
                l = Object.getOwnPropertyNames(e);
            for (r = 0; r < l.length; r++)
                (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            return i;
        })(e, t)),
        Object.getOwnPropertySymbols)
    )
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
    return l;
}
let p = i.forwardRef(function (e, t) {
    var n, i;
    let [l, ...p] = [e, t],
        {
            label: f,
            ariaLabel: m,
            tooltipText: g,
            icon: y,
            iconProps: _,
            onClick: b,
            onTooltipShow: A,
            onTooltipHide: h,
            disabled: v,
            dangerous: O,
            separator: j,
            buttonClassName: S,
            children: I,
        } = l,
        x = d(l, [
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
        [E] = p;
    return (0, r.jsx)(s.m, {
        asContainer: !0,
        __unsupportedReactNodeAsText: null != g ? g : f,
        "aria-label": f,
        onTooltipShow: A,
        onTooltipHide: h,
        children: (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)(
                    o.$n,
                    ((n = u(
                        {
                            ref: E,
                            className: a()(c.W1, S),
                            onClick: (e) => {
                                b(e);
                            },
                            "aria-label": null != m ? m : f,
                            disabled: v,
                            dangerous: O,
                        },
                        x,
                    )),
                    (i = i =
                        {
                            children: [
                                null != y
                                    ? (0, r.jsx)(
                                          y,
                                          u(
                                              {
                                                  className: c.Kk,
                                                  color: "currentColor",
                                              },
                                              _,
                                          ),
                                      )
                                    : null,
                                null != I
                                    ? (0, r.jsx)("div", {
                                          className: a()(c.Kk, c.IO),
                                          children: I,
                                      })
                                    : null,
                            ],
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var r = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, r);
                              }
                              return n;
                          })(Object(i)).forEach(function (e) {
                              Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e));
                          }),
                    n),
                ),
                j && (0, r.jsx)(o.wv, {}),
            ],
        }),
    });
});

function f(e) {
    let { className: t } = e;
    return (0, r.jsx)("div", {
        className: a()(c.me, t),
    });
}

function m(e) {
    let { children: t } = e,
        n = d(e, ["children"]);
    return (0, r.jsx)(o.Ay, {
        className: a()(n.className, c.oO),
        children: t,
    });
}
