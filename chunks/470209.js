A.d(t, { Z: () => h });
var n = A(255367),
    r = A(73800),
    a = A(512722),
    l = A.n(a),
    i = A(866442),
    o = A(481060),
    s = A(313201),
    c = A(981631),
    d = A(388032),
    u = A(143886);
function f(e) {
    for (var t = 1; t < arguments.length; t++) {
        var A = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(A);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(A).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(A, e).enumerable;
                })
            )),
            n.forEach(function (t) {
                var n;
                ((n = A[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = n));
            }));
    }
    return e;
}
function g(e, t) {
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
let p = (0, s.hQ)();
function h(e) {
    let { newRoleParams: t, setNewRoleParams: A } = e,
        a = r.useRef(null),
        { name: s, color: h } = t,
        m = (e) => A((t) => (l()(null != t, 'newRoleParams should be defined'), g(f({}, t), { color: e })));
    return (0, n.jsxs)('div', {
        className: u.roleInputContainer,
        children: [
            (0, n.jsx)(o.oil, {
                autoFocus: !0,
                value: s,
                onChange: (e) => A((t) => (l()(null != t, 'newRoleParams should be defined'), g(f({}, t), { name: e }))),
                id: p,
                placeholder: d.intl.string(d.t.oNauur),
                maxLength: c.VKK,
                inputClassName: u.input
            }),
            (0, n.jsxs)('div', {
                className: u.roleColorContainer,
                children: [
                    (0, n.jsx)(o.nn4, { children: d.intl.format(d.t['Vlq/pK'], { color: (0, i.Rf)(h) }) }),
                    (0, n.jsx)('div', {
                        className: u.roleColorPreview,
                        style: { backgroundColor: (0, i.Rf)(h) }
                    }),
                    (0, n.jsx)(o.LZC, {
                        size: 8,
                        horizontal: !0
                    }),
                    (0, n.jsx)(o.yRy, {
                        targetElementRef: a,
                        renderPopout: (e) =>
                            (0, n.jsx)(
                                o.Z$W,
                                g(f({}, e), {
                                    value: h,
                                    onChange: m
                                })
                            ),
                        children: (e) =>
                            (0, n.jsx)(
                                o.P3F,
                                g(f({}, e), {
                                    innerRef: a,
                                    tag: 'span',
                                    'aria-label': d.intl.string(d.t.QLgdlZ),
                                    className: u.dropperIconContainer,
                                    children: (0, n.jsx)(o.ilE, {
                                        size: 'xs',
                                        color: 'currentColor',
                                        className: u.dropperIcon
                                    })
                                })
                            )
                    })
                ]
            })
        ]
    });
}
