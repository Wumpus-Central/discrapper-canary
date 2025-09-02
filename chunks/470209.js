t.d(e, { Z: () => q });
var n = t(951288),
    r = t(647438),
    a = t(512722),
    l = t.n(a),
    i = t(866442),
    o = t(481060),
    s = t(313201),
    d = t(916001),
    c = t(981631),
    u = t(388032),
    g = t(744422);
function f(A) {
    for (var e = 1; e < arguments.length; e++) {
        var t = null != arguments[e] ? arguments[e] : {},
            n = Object.keys(t);
        "function" == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(t).filter(function (A) {
                    return Object.getOwnPropertyDescriptor(t, A).enumerable;
                }),
            )),
            n.forEach(function (e) {
                var n;
                (n = t[e]),
                    e in A
                        ? Object.defineProperty(A, e, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (A[e] = n);
            });
    }
    return A;
}
function p(A, e) {
    return (
        (e = null != e ? e : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(A, Object.getOwnPropertyDescriptors(e))
            : (function (A, e) {
                  var t = Object.keys(A);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(A);
                      t.push.apply(t, n);
                  }
                  return t;
              })(Object(e)).forEach(function (t) {
                  Object.defineProperty(A, t, Object.getOwnPropertyDescriptor(e, t));
              }),
        A
    );
}
let m = (0, s.hQ)();
function q(A) {
    let { newRoleParams: e, setNewRoleParams: t } = A,
        a = r.useRef(null),
        { name: s, color: q } = e,
        h = (A) => t((e) => (l()(null != e, "newRoleParams should be defined"), p(f({}, e), { color: A })));
    return (0, n.jsxs)("div", {
        className: g.roleInputContainer,
        children: [
            (0, n.jsx)(o.oil, {
                autoFocus: !0,
                value: s,
                onChange: (A) =>
                    t((e) => (l()(null != e, "newRoleParams should be defined"), p(f({}, e), { name: A }))),
                id: m,
                placeholder: u.intl.string(u.t.oNauur),
                maxLength: c.VKK,
            }),
            (0, n.jsxs)("div", {
                className: g.roleColorContainer,
                children: [
                    (0, n.jsx)(o.nn4, { children: u.intl.format(u.t["Vlq/pK"], { color: (0, i.Rf)(q) }) }),
                    (0, n.jsx)(o.yRy, {
                        targetElementRef: a,
                        renderPopout: (A) =>
                            (0, n.jsx)(
                                o.Z$W,
                                p(f({}, A), {
                                    value: q,
                                    onChange: h,
                                }),
                            ),
                        children: (A) =>
                            (0, n.jsx)(
                                o.hU,
                                p(f({}, A), {
                                    variant: "secondary",
                                    icon: o.ilE,
                                    buttonRef: a,
                                    "aria-label": u.intl.string(u.t.QLgdlZ),
                                }),
                            ),
                    }),
                ],
            }),
            (0, n.jsx)(d.Z, { role: e }),
        ],
    });
}
