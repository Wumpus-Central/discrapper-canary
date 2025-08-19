r.d(t, { Z: () => d });
var n = r(951288),
    l = r(647438),
    i = r(120356),
    a = r.n(i),
    o = r(481060),
    c = r(810473),
    s = r(388032),
    u = r(684066);
function d() {
    let e = 0 === (0, c.Z)().length,
        t = l.useCallback(() => {
            (0, o.ZDy)(
                async () => {
                    let { default: e } = await r.e("38576").then(r.bind(r, 925170));
                    return (t) =>
                        (0, n.jsx)(
                            e,
                            (function (e) {
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
                            })({}, t),
                        );
                },
                { stackingBehavior: "stack" },
            );
        }, []);
    return (0, n.jsxs)(o.P3F, {
        className: a()(u.addWidgetButton, e && u.disabled),
        onClick: e ? void 0 : t,
        "aria-disabled": e,
        children: [
            (0, n.jsx)(o.qJs, {
                size: "sm",
                color: "currentColor",
            }),
            (0, n.jsx)(o.Text, {
                variant: "text-sm/medium",
                color: e ? "text-muted" : "text-default",
                children: s.intl.string(s.t.lBG2s7),
            }),
        ],
    });
}
