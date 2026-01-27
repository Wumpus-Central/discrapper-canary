n.d(t, {
    A: () => d,
});
var r = n(627968),
    i = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(990078),
    o = n(397927),
    c = n(854627),
    u = n(429974);

function d(e) {
    var t;
    let { user: n, checked: l, onChange: d, disabled: p, tooltipConfig: m } = e,
        f = i.useRef(null),
        { avatarSrc: g, eventHandlers: h } = (0, c.A)({
            userId: null == n ? void 0 : n.id,
            size: o._3J.SIZE_32,
        }),
        _ = null != (t = n.globalName) ? t : n.username;
    return (0, r.jsx)(s.m, {
        text: (null == m ? void 0 : m.isActive(n, p)) ? m.text(n) : null,
        position: "top",
        anchorRef: f,
        asContainer: !0,
        children: (0, r.jsxs)("div", {
            className: u.kL,
            children: [
                (0, r.jsx)("div", {
                    className: u.dj,
                    children: (0, r.jsx)(
                        o.euF,
                        (function (e) {
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
                        })(
                            {
                                className: a()({
                                    [u.SU]: p,
                                }),
                                src: g,
                                "aria-label": _,
                                size: o._3J.SIZE_32,
                            },
                            h,
                        ),
                    ),
                }),
                (0, r.jsxs)("div", {
                    className: u.QV,
                    children: [
                        (0, r.jsx)(o.Text, {
                            className: u.nT,
                            color: p ? "text-muted" : "text-default",
                            variant: "text-md/semibold",
                            children: _,
                        }),
                        (0, r.jsx)(o.Text, {
                            className: u.nT,
                            color: p ? "text-muted" : "text-subtle",
                            variant: "text-xs/normal",
                            children: n.username,
                        }),
                    ],
                }),
                (0, r.jsx)("div", {
                    ref: f,
                    className: u.kv,
                    children: (0, r.jsx)(o.Checkbox, {
                        disabled: p,
                        checked: l,
                        onChange: (e) => d(n, e),
                        label: "",
                    }),
                }),
            ],
        }),
    });
}
