r.d(t, { A: () => p });
var n = r(627968),
    i = r(64700),
    o = r(732955),
    l = r(397927),
    s = r(558060),
    c = r(284683),
    a = r(985018),
    d = r(425377);
function u(e) {
    let { closePopout: t, sortOptionContext: r } = e,
        { sortOption: o, setSortOption: s, onReset: u } = r,
        p = i.useMemo(
            () =>
                c.aq.map((e) =>
                    (0, n.jsx)(
                        l.iDA,
                        {
                            id: "".concat(e),
                            group: "sort-by",
                            label: (0, c.Ac)(e),
                            action: () => s(e),
                            checked: o === e,
                        },
                        e,
                    ),
                ),
            [s, o],
        );
    return (0, n.jsx)("div", {
        children: (0, n.jsxs)(l.W1t, {
            navId: "sort-and-view",
            "aria-label": a.intl.string(a.t["4jfWTK"]),
            hideScroller: !0,
            onClose: t,
            onSelect: t,
            children: [
                (0, n.jsx)(l.rXV, {
                    label: a.intl.string(a.t.mBvLev),
                    children: p,
                }),
                (0, n.jsx)(l.rXV, {
                    children: (0, n.jsx)(l.Drp, {
                        id: "reset-all",
                        className: d.Z,
                        label: (0, n.jsx)(l.Text, {
                            variant: "text-sm/medium",
                            color: "none",
                            children: a.intl.string(a.t["3b//lO"]),
                        }),
                        action: u,
                    }),
                }),
            ],
        }),
    });
}
function p() {
    let e = (0, s.R)(),
        t = (0, c.Ac)(e.sortOption),
        r = i.useRef(null);
    return (0, n.jsx)(l.YNO, {
        targetElementRef: r,
        renderPopout: (t) => {
            let { closePopout: r } = t;
            return (0, n.jsx)(u, {
                closePopout: r,
                sortOptionContext: e,
            });
        },
        position: "bottom",
        align: "left",
        children: (e) => {
            var i, s;
            return (0, n.jsx)(
                o.$nd,
                ((i = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols &&
                            (n = n.concat(
                                Object.getOwnPropertySymbols(r).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                }),
                            )),
                            n.forEach(function (t) {
                                var n;
                                (n = r[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: n,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0,
                                          })
                                        : (e[t] = n);
                            });
                    }
                    return e;
                })({}, e)),
                (s = s =
                    {
                        text: t,
                        icon: l.JNJ,
                        variant: "secondary",
                        buttonRef: r,
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(s))
                    : (function (e, t) {
                          var r = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var n = Object.getOwnPropertySymbols(e);
                              r.push.apply(r, n);
                          }
                          return r;
                      })(Object(s)).forEach(function (e) {
                          Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(s, e));
                      }),
                i),
            );
        },
    });
}
