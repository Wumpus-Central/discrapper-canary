A.d(t, { Z: () => v });
var n = A(54381),
    r = A(473749),
    a = A(512722),
    l = A.n(a),
    i = A(866442),
    o = A(481060),
    s = A(313201),
    d = A(916001),
    c = A(981631),
    u = A(388032),
    f = A(395051);
function g(e) {
    for (var t = 1; t < arguments.length; t++) {
        var A = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(A);
        "function" == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(A).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(A, e).enumerable;
                }),
            )),
            n.forEach(function (t) {
                var n;
                (n = A[t]),
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
}
function p(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var A = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      A.push.apply(A, n);
                  }
                  return A;
              })(Object(t)).forEach(function (A) {
                  Object.defineProperty(e, A, Object.getOwnPropertyDescriptor(t, A));
              }),
        e
    );
}
let m = (0, s.hQ)();
function v(e) {
    let { newRoleParams: t, setNewRoleParams: A } = e,
        a = r.useRef(null),
        { name: s, color: v } = t,
        h = (e) => A((t) => (l()(null != t, "newRoleParams should be defined"), p(g({}, t), { color: e })));
    return (0, n.jsxs)("div", {
        className: f.roleInputContainer,
        children: [
            (0, n.jsx)(o.oil, {
                autoFocus: !0,
                value: s,
                onChange: (e) =>
                    A((t) => (l()(null != t, "newRoleParams should be defined"), p(g({}, t), { name: e }))),
                id: m,
                placeholder: u.intl.string(u.t.oNauug),
                maxLength: c.VKK,
            }),
            (0, n.jsxs)("div", {
                className: f.roleColorContainer,
                children: [
                    (0, n.jsx)(o.nn4, { children: u.intl.format(u.t["Vlq/pH"], { color: (0, i.Rf)(v) }) }),
                    (0, n.jsx)(o.yRy, {
                        targetElementRef: a,
                        renderPopout: (e) =>
                            (0, n.jsx)(
                                o.Z$W,
                                p(g({}, e), {
                                    value: v,
                                    onChange: h,
                                }),
                            ),
                        children: (e) =>
                            (0, n.jsx)(
                                o.hU,
                                p(g({}, e), {
                                    variant: "secondary",
                                    icon: o.ilE,
                                    buttonRef: a,
                                    "aria-label": u.intl.string(u.t.QLgdlS),
                                }),
                            ),
                    }),
                ],
            }),
            (0, n.jsx)(d.Z, { role: t }),
        ],
    });
}
