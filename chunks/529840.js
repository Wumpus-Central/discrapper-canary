r.d(t, { Z: () => C });
var a = r(54381);
r(473749);
var i = r(120356),
    s = r.n(i),
    n = r(481060),
    l = r(518950),
    o = r(715156);
function C(e) {
    var t;
    let { user: r, checked: i, onChange: C, disabled: d } = e,
        { avatarSrc: c, eventHandlers: x } = (0, l.Z)({
            userId: null == r ? void 0 : r.id,
            size: n.EFr.SIZE_32,
        }),
        p = null != (t = r.globalName) ? t : r.username;
    return (0, a.jsxs)("div", {
        className: o.container,
        children: [
            (0, a.jsxs)("div", {
                className: o.user,
                children: [
                    (0, a.jsx)(
                        n.qEK,
                        (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var r = null != arguments[t] ? arguments[t] : {},
                                    a = Object.keys(r);
                                "function" == typeof Object.getOwnPropertySymbols &&
                                    (a = a.concat(
                                        Object.getOwnPropertySymbols(r).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                        }),
                                    )),
                                    a.forEach(function (t) {
                                        var a;
                                        (a = r[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: a,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0,
                                                  })
                                                : (e[t] = a);
                                    });
                            }
                            return e;
                        })(
                            {
                                className: s()({ [o.muted]: d }),
                                src: c,
                                "aria-label": p,
                                size: n.EFr.SIZE_32,
                            },
                            x,
                        ),
                    ),
                    (0, a.jsx)(n.Text, {
                        color: d ? "text-muted" : "text-default",
                        variant: "text-md/semibold",
                        children: p,
                    }),
                ],
            }),
            (0, a.jsx)("div", {
                className: o.checkbox,
                children: (0, a.jsx)(n.Checkbox, {
                    disabled: d,
                    checked: i,
                    onChange: (e) => C(r, e),
                    label: "",
                }),
            }),
        ],
    });
}
