n.d(t, { B: () => d });
var r = n(255367);
n(73800);
var i = n(755721),
    l = n(481060),
    o = n(313201),
    s = n(192635),
    c = n(388032),
    a = n(818235);
function u(e) {
    let { transitionState: t, Icon: n, title: u, body: d, onClose: f } = e,
        p = (0, o.Dt)();
    return (0, r.jsxs)(l.Y0X, {
        className: a.container,
        transitionState: t,
        "aria-labelledby": p,
        parentComponent: "ActionCompletedSuccessModal",
        children: [
            (0, r.jsxs)(l.hzk, {
                children: [
                    (0, r.jsx)(s.Z, { Icon: n }),
                    (0, r.jsx)(l.LZC, { size: 24 }),
                    (0, r.jsx)(l.X6q, {
                        id: p,
                        className: a.__invalid_title,
                        variant: "heading-xl/semibold",
                        children: u,
                    }),
                    (0, r.jsx)(l.LZC, { size: 8 }),
                    (0, r.jsx)(l.Text, {
                        className: a.body,
                        variant: "text-sm/normal",
                        children: d,
                    }),
                ],
            }),
            (0, r.jsx)(l.LZC, { size: 24 }),
            (0, r.jsx)(i.zx, {
                size: i.zx.Sizes.MEDIUM,
                grow: !1,
                onClick: f,
                children: c.intl.string(c.t["NX+WJC"]),
            }),
        ],
    });
}
function d(e) {
    (0, l.h7j)((t) =>
        (0, r.jsx)(
            u,
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
            })({}, t, e),
        ),
    );
}
