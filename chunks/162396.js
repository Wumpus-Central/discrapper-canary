r.d(t, {
    A: () => g,
});
var n = r(627968),
    l = r(64700),
    o = r(503698),
    a = r.n(o),
    c = r(397927),
    i = r(975807),
    s = r(212031),
    u = r(975571),
    f = r(809465),
    b = r(652215),
    y = r(985018),
    d = r(535790);

function p(e) {
    let { onClose: t } = e;
    return (0, n.jsx)(c.W1t, {
        navId: "settings-footer-more-menu",
        onClose: t,
        onSelect: () => {},
        "aria-label": "More options",
        children: (0, n.jsxs)(c.rXV, {
            children: [
                (0, n.jsx)(c.Drp, {
                    id: "changelog",
                    label: y.intl.string(y.t.LRmNAl),
                    action: () => (0, s.j)(!0),
                }),
                (0, n.jsx)(c.Drp, {
                    id: "acknowledgements",
                    label: y.intl.string(y.t["0nUKy3"]),
                    action: () => (0, i.A)(b.X7G.ACKNOWLEDGEMENTS),
                }),
                (0, n.jsx)(c.Drp, {
                    id: "support",
                    label: y.intl.string(y.t["Yl/Riu"]),
                    action: () => (0, i.A)(u.C),
                }),
            ],
        }),
    });
}

function g() {
    let e = l.useRef(null);
    return (0, n.jsxs)("div", {
        children: [
            (0, n.jsx)(f.A, {
                compact: !0,
            }),
            (0, n.jsxs)("div", {
                className: d.yJ,
                children: [
                    (0, n.jsx)(c.MzZ, {
                        href: b.X7G.PRIVACY,
                        children: (0, n.jsx)(c.Text, {
                            tag: "span",
                            variant: "text-xxs/normal",
                            color: "currentColor",
                            children: y.intl.string(y.t["Knf/f/"]),
                        }),
                    }),
                    (0, n.jsx)("span", {
                        className: d.xE,
                        "aria-hidden": "true",
                        children: "•",
                    }),
                    (0, n.jsx)(c.MzZ, {
                        href: b.X7G.TERMS,
                        children: (0, n.jsx)(c.Text, {
                            tag: "span",
                            variant: "text-xxs/normal",
                            color: "currentColor",
                            children: y.intl.string(y.t.uFSTGq),
                        }),
                    }),
                    (0, n.jsx)("span", {
                        className: d.xE,
                        "aria-hidden": "true",
                        children: "•",
                    }),
                    (0, n.jsx)(c.YNO, {
                        targetElementRef: e,
                        position: "top",
                        align: "center",
                        spacing: 0,
                        animation: c.YNO.Animation.NONE,
                        renderPopout: (e) => {
                            let { closePopout: t } = e;
                            return (0, n.jsx)(p, {
                                onClose: t,
                            });
                        },
                        children: (t, r) => {
                            var l, o;
                            return (0, n.jsx)(
                                c.MzZ,
                                ((l = (function (e) {
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
                                })({}, t)),
                                (o = o =
                                    {
                                        ref: e,
                                        useDefaultUnderlineStyles: !1,
                                        className: a()(d.Mj, {
                                            [d.vu]: r.isShown,
                                        }),
                                        children: (0, n.jsx)(c.Text, {
                                            tag: "span",
                                            variant: "text-xxs/normal",
                                            color: "currentColor",
                                            children: y.intl.string(y.t["UKOtz+"]),
                                        }),
                                    }),
                                Object.getOwnPropertyDescriptors
                                    ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(o))
                                    : (function (e, t) {
                                          var r = Object.keys(e);
                                          if (Object.getOwnPropertySymbols) {
                                              var n = Object.getOwnPropertySymbols(e);
                                              r.push.apply(r, n);
                                          }
                                          return r;
                                      })(Object(o)).forEach(function (e) {
                                          Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(o, e));
                                      }),
                                l),
                            );
                        },
                    }),
                ],
            }),
        ],
    });
}
