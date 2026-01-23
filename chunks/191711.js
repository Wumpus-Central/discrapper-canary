n.d(t, {
    Ay: () => g,
    Hb: () => m,
    kR: () => h,
});
var r,
    l = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(397927),
    c = n(773669),
    d = n(272159);

function u(e, t) {
    if (null == e) return {};
    var n,
        r,
        l,
        i = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++)
            (r = n[l]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
        return i;
    }
    if (
        ((i = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                l = {},
                i = Object.getOwnPropertyNames(e);
            for (r = 0; r < i.length; r++)
                (n = i[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
            return l;
        })(e, t)),
        Object.getOwnPropertySymbols)
    )
        for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++)
            (r = n[l]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
    return i;
}

function p(e) {
    let { items: t, onClose: n, onSelect: r, selected: i } = e,
        a = u(e, ["items", "onClose", "onSelect", "selected"]);
    return (0, l.jsx)(o.W1t, {
        "data-menu-mixed": !0,
        className: d.MK,
        navId: "global-discovery-search-filter-options",
        "aria-label": a["aria-label"],
        hideScroller: !0,
        onClose: n,
        onSelect: n,
        children: (0, l.jsx)(
            o.rXV,
            {
                children: t.map((e) => {
                    let { id: t, label: n } = e;
                    return (0, l.jsx)(
                        o.Drp,
                        {
                            id: t,
                            void_label: n,
                            icon: t === i ? o.yr3 : void 0,
                            action: () => r(t),
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
        r = t.toLocaleString(c.default.locale);
    return (0, l.jsxs)("div", {
        className: d.Jm,
        children: [
            (0, l.jsx)(o.Text, {
                variant: "text-sm/medium",
                color: "text-strong",
                children: n,
            }),
            (0, l.jsx)(o.Text, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: r,
            }),
        ],
    });
}
var m = (((r = {}).FILLED = "FILLED"), (r.TRANSPARENT = "TRANSPARENT"), r);

function g(e) {
    let { items: t, title: n, onSelect: r, selected: a, variant: c = "TRANSPARENT" } = e,
        h = u(e, ["items", "title", "onSelect", "selected", "variant"]),
        m = i.useRef(null),
        g = i.useMemo(
            () =>
                (function (e) {
                    switch (e) {
                        case "FILLED":
                            return d.PC;
                        case "TRANSPARENT":
                            return;
                    }
                })(c),
            [c],
        );
    return (0, l.jsx)(o.YNO, {
        targetElementRef: m,
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, l.jsx)(p, {
                selected: a,
                onClose: n,
                items: t,
                onSelect: r,
                "aria-label": h["aria-label"],
            });
        },
        position: "bottom",
        align: "left",
        children: (e, t) => {
            var r, i;
            let { isShown: a } = t;
            return (0, l.jsxs)(
                "div",
                ((r = (function (e) {
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
                })({}, e)),
                (i = i =
                    {
                        ref: m,
                        className: s()(d.pb, g),
                        children: [
                            (0, l.jsx)(o.Text, {
                                variant: "text-sm/medium",
                                color: "interactive-text-default",
                                children: n,
                            }),
                            a
                                ? (0, l.jsx)(o.tN5, {
                                      size: "xs",
                                      color: o.LU0.colors.INTERACTIVE_TEXT_DEFAULT,
                                  })
                                : (0, l.jsx)(o.abt, {
                                      size: "xs",
                                      color: o.LU0.colors.INTERACTIVE_TEXT_DEFAULT,
                                  }),
                        ],
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(i))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(i)).forEach(function (e) {
                          Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(i, e));
                      }),
                r),
            );
        },
    });
}
