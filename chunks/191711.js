n.d(t, {
    Ay: () => b,
    Hb: () => m,
    kR: () => h,
});
var l,
    a = n(627968),
    r = n(64700),
    i = n(503698),
    s = n.n(i),
    c = n(397927),
    o = n(773669),
    d = n(272159);

function u(e, t) {
    if (null == e) return {};
    var n,
        l,
        a,
        r = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (a = 0, n = Reflect.ownKeys(e); a < n.length; a++)
            (l = n[a]), !(t.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(e, l) && (r[l] = e[l]);
        return r;
    }
    if (
        ((r = (function (e, t) {
            if (null == e) return {};
            var n,
                l,
                a = {},
                r = Object.getOwnPropertyNames(e);
            for (l = 0; l < r.length; l++)
                (n = r[l]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]);
            return a;
        })(e, t)),
        Object.getOwnPropertySymbols)
    )
        for (a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
            (l = n[a]), !(t.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(e, l) && (r[l] = e[l]);
    return r;
}

function p(e) {
    let { items: t, onClose: n, onSelect: l, selected: r } = e,
        i = u(e, ["items", "onClose", "onSelect", "selected"]);
    return (0, a.jsx)(c.W1t, {
        className: d.MK,
        navId: "global-discovery-search-filter-options",
        "aria-label": i["aria-label"],
        hideScroller: !0,
        onClose: n,
        onSelect: n,
        children: (0, a.jsx)(
            c.rXV,
            {
                children: t.map((e) => {
                    let { id: t, label: n } = e;
                    return (0, a.jsx)(
                        c.Drp,
                        {
                            id: t,
                            label: n,
                            icon: t === r ? c.yr3 : void 0,
                            action: () => l(t),
                        },
                        t,
                    );
                }),
            },
            "overflow-tabs",
        ),
    });
}

function h(e) {
    let { count: t, name: n } = e,
        l = t.toLocaleString(o.default.locale);
    return (0, a.jsxs)("div", {
        className: d.Jm,
        children: [
            (0, a.jsx)(c.Text, {
                variant: "text-sm/medium",
                color: "text-strong",
                children: n,
            }),
            (0, a.jsx)(c.Text, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: l,
            }),
        ],
    });
}
var m = (((l = {}).FILLED = "FILLED"), (l.TRANSPARENT = "TRANSPARENT"), l);

function b(e) {
    let { items: t, title: n, onSelect: l, selected: i, variant: o = "TRANSPARENT" } = e,
        h = u(e, ["items", "title", "onSelect", "selected", "variant"]),
        m = r.useRef(null),
        b = r.useMemo(
            () =>
                (function (e) {
                    switch (e) {
                        case "FILLED":
                            return d.PC;
                        case "TRANSPARENT":
                            return;
                    }
                })(o),
            [o],
        );
    return (0, a.jsx)(c.YNO, {
        targetElementRef: m,
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, a.jsx)(p, {
                selected: i,
                onClose: n,
                items: t,
                onSelect: l,
                "aria-label": h["aria-label"],
            });
        },
        position: "bottom",
        align: "left",
        children: (e, t) => {
            var l, r;
            let { isShown: i } = t;
            return (0, a.jsxs)(
                "div",
                ((l = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            l = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols &&
                            (l = l.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                }),
                            )),
                            l.forEach(function (t) {
                                var l;
                                (l = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: l,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0,
                                          })
                                        : (e[t] = l);
                            });
                    }
                    return e;
                })({}, e)),
                (r = r =
                    {
                        ref: m,
                        className: s()(d.pb, b),
                        children: [
                            (0, a.jsx)(c.Text, {
                                variant: "text-sm/medium",
                                color: "interactive-text-default",
                                children: n,
                            }),
                            i
                                ? (0, a.jsx)(c.tN5, {
                                      size: "xs",
                                      color: c.LU0.colors.INTERACTIVE_TEXT_DEFAULT,
                                  })
                                : (0, a.jsx)(c.abt, {
                                      size: "xs",
                                      color: c.LU0.colors.INTERACTIVE_TEXT_DEFAULT,
                                  }),
                        ],
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(r))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var l = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, l);
                          }
                          return n;
                      })(Object(r)).forEach(function (e) {
                          Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(r, e));
                      }),
                l),
            );
        },
    });
}
