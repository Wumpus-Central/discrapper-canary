t.d(A, {
    A: () => b,
});
var r = t(627968),
    n = t(64700),
    l = t(284009),
    a = t.n(l),
    i = t(317097),
    s = t(397927),
    o = t(915089),
    d = t(411342),
    c = t(652215),
    u = t(985018),
    g = t(228580);

function f(e) {
    for (var A = 1; A < arguments.length; A++) {
        var t = null != arguments[A] ? arguments[A] : {},
            r = Object.keys(t);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                }),
            )),
            r.forEach(function (A) {
                var r;
                (r = t[A]),
                    A in e
                        ? Object.defineProperty(e, A, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[A] = r);
            });
    }
    return e;
}

function p(e, A) {
    return (
        (A = null != A ? A : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(A))
            : (function (e, A) {
                  var t = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      t.push.apply(t, r);
                  }
                  return t;
              })(Object(A)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(A, t));
              }),
        e
    );
}
let m = (0, o.Ld)();

function b(e) {
    let { newRoleParams: A, setNewRoleParams: t } = e,
        l = n.useRef(null),
        { name: o, color: b } = A,
        v = (e) =>
            t(
                (A) => (
                    a()(null != A, "newRoleParams should be defined"),
                    p(f({}, A), {
                        color: e,
                    })
                ),
            );
    return (0, r.jsxs)("div", {
        className: g.CJ,
        children: [
            (0, r.jsx)(s.ksK, {
                autoFocus: !0,
                value: o,
                onChange: (e) =>
                    t(
                        (A) => (
                            a()(null != A, "newRoleParams should be defined"),
                            p(f({}, A), {
                                name: e,
                            })
                        ),
                    ),
                id: m,
                placeholder: u.intl.string(u.t.oNauug),
                maxLength: c.fHV,
            }),
            (0, r.jsxs)("div", {
                className: g.P4,
                children: [
                    (0, r.jsx)(s.AC4, {
                        children: u.intl.format(u.t["Vlq/pH"], {
                            color: (0, i.Hl)(b),
                        }),
                    }),
                    (0, r.jsx)(s.YNO, {
                        targetElementRef: l,
                        renderPopout: (e) =>
                            (0, r.jsx)(
                                s.VNw,
                                p(f({}, e), {
                                    value: b,
                                    onChange: v,
                                }),
                            ),
                        children: (e) =>
                            (0, r.jsx)(
                                s.K0,
                                p(f({}, e), {
                                    variant: "secondary",
                                    icon: s.dDg,
                                    buttonRef: l,
                                    "aria-label": u.intl.string(u.t.QLgdlS),
                                }),
                            ),
                    }),
                ],
            }),
            (0, r.jsx)(d.A, {
                role: A,
            }),
        ],
    });
}
