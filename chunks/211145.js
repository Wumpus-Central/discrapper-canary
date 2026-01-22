s.d(t, {
    A: () => d,
});
var i = s(627968);
s(64700);
var a = s(503698),
    l = s.n(a),
    r = s(397927),
    n = s(854627),
    C = s(391173);

function d(e) {
    var t;
    let { user: s, checked: a, onChange: d, disabled: o } = e,
        { avatarSrc: c, eventHandlers: x } = (0, n.A)({
            userId: null == s ? void 0 : s.id,
            size: r._3J.SIZE_32,
        }),
        p = null != (t = s.globalName) ? t : s.username;
    return (0, i.jsxs)("div", {
        className: C.kL,
        children: [
            (0, i.jsxs)("div", {
                className: C.kQ,
                children: [
                    (0, i.jsx)(
                        r.euF,
                        (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var s = null != arguments[t] ? arguments[t] : {},
                                    i = Object.keys(s);
                                "function" == typeof Object.getOwnPropertySymbols &&
                                    (i = i.concat(
                                        Object.getOwnPropertySymbols(s).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(s, e).enumerable;
                                        }),
                                    )),
                                    i.forEach(function (t) {
                                        var i;
                                        (i = s[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: i,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0,
                                                  })
                                                : (e[t] = i);
                                    });
                            }
                            return e;
                        })(
                            {
                                className: l()({
                                    [C.SU]: o,
                                }),
                                src: c,
                                "aria-label": p,
                                size: r._3J.SIZE_32,
                            },
                            x,
                        ),
                    ),
                    (0, i.jsx)(r.Text, {
                        color: o ? "text-muted" : "text-default",
                        variant: "text-md/semibold",
                        children: p,
                    }),
                ],
            }),
            (0, i.jsx)("div", {
                className: C.kv,
                children: (0, i.jsx)(r.Checkbox, {
                    disabled: o,
                    checked: a,
                    onChange: (e) => d(s, e),
                    label: "",
                }),
            }),
        ],
    });
}
