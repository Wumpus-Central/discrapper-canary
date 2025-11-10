n.d(t, { Z: () => d }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(481060),
    a = n(509212),
    s = n(113434),
    o = n(670362),
    c = n(388032),
    u = n(793384);
let d = function (e) {
    let { onChange: t, selectedFilters: n } = e,
        d = (0, s.N8)(),
        p = i.useCallback(
            (e) => (r) => {
                let i = e.filter((e) => r.includes(e.filter));
                t([...n.filter((t) => !e.some((e) => e.filter === t.filter)), ...i]);
            },
            [n, t],
        );
    return (0, r.jsx)(o.Z, {
        renderPopout: (e, i) => {
            let { closePopout: s } = e;
            return (0, r.jsxs)("div", {
                children: [
                    d.map((e, t) => {
                        let s = e.options.map((e) => ({
                                label: (0, a.Nt)(e.filter),
                                value: e.filter,
                            })),
                            c = n.filter((t) => e.options.some((e) => e.filter === t.filter)).map((e) => e.filter);
                        return (0, r.jsxs)(
                            "div",
                            {
                                className: u.filterOptionGroup,
                                children: [
                                    (0, r.jsx)(o.g, {
                                        id: i,
                                        children: e.heading,
                                    }),
                                    (0, r.jsx)(l.cOn, {
                                        "aria-labelledby": i,
                                        options: s,
                                        selectedValues: c,
                                        onChange: p(e.options),
                                    }),
                                ],
                            },
                            t,
                        );
                    }),
                    (0, r.jsx)("div", {
                        className: u.filterOptionGroup,
                        children: (0, r.jsx)(l.Button, {
                            fullWidth: !0,
                            onClick: () => {
                                t([]), s();
                            },
                            size: "sm",
                            text: c.intl.string(c.t.VkKicb),
                            variant: "secondary",
                        }),
                    }),
                ],
            });
        },
        children: (e, t) => {
            var i, a;
            return (0, r.jsx)(
                l.Button,
                ((i = (function (e) {
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
                (a = a =
                    {
                        buttonRef: t,
                        size: "sm",
                        text: c.intl.formatToPlainString(c.t.CEfkXl, { numSelectedFilters: n.length }),
                        icon: l.gXV,
                        iconPosition: "end",
                        variant: "secondary",
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(a))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(a)).forEach(function (e) {
                          Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(a, e));
                      }),
                i),
            );
        },
    });
};
