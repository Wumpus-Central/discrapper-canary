r.d(t, { Z: () => d });
var a = r(54381);
r(473749);
var i = r(120356),
    s = r.n(i),
    n = r(755721),
    l = r(481060),
    o = r(518950),
    C = r(313369);
function d(e) {
    var t;
    let { user: r, checked: i, onChange: d, disabled: c } = e,
        { avatarSrc: x, eventHandlers: p } = (0, o.Z)({
            userId: null == r ? void 0 : r.id,
            size: l.EFr.SIZE_32,
        }),
        h = null != (t = r.globalName) ? t : r.username;
    return (0, a.jsxs)("div", {
        className: C.container,
        children: [
            (0, a.jsxs)("div", {
                className: C.user,
                children: [
                    (0, a.jsx)(
                        l.qEK,
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
                                className: s()({ [C.muted]: c }),
                                src: x,
                                "aria-label": h,
                                size: l.EFr.SIZE_32,
                            },
                            p,
                        ),
                    ),
                    (0, a.jsx)(l.Text, {
                        color: c ? "text-muted" : "text-default",
                        variant: "text-md/semibold",
                        children: h,
                    }),
                ],
            }),
            (0, a.jsx)("div", {
                className: C.checkbox,
                children: (0, a.jsx)(n.$q, {
                    disabled: c,
                    value: i,
                    onChange: (e, t) => d(r, t),
                }),
            }),
        ],
    });
}
