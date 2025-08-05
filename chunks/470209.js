A.d(t, { Z: () => h });
var n = A(255367),
    r = A(73800),
    l = A(512722),
    a = A.n(l),
    o = A(866442),
    i = A(755721),
    s = A(481060),
    d = A(313201),
    c = A(981631),
    u = A(388032),
    f = A(143886);
function g(e) {
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
let m = (0, d.hQ)();
function h(e) {
    let { newRoleParams: t, setNewRoleParams: A } = e,
        l = r.useRef(null),
        { name: d, color: h } = t,
        C = (e) => A((t) => (a()(null != t, 'newRoleParams should be defined'), p(g({}, t), { color: e })));
    return (0, n.jsxs)('div', {
        className: f.roleInputContainer,
        children: [
            (0, n.jsx)(i.Is, {
                autoFocus: !0,
                value: d,
                onChange: (e) => A((t) => (a()(null != t, 'newRoleParams should be defined'), p(g({}, t), { name: e }))),
                id: m,
                placeholder: u.intl.string(u.t.oNauur),
                maxLength: c.VKK,
                inputClassName: f.input
            }),
            (0, n.jsxs)('div', {
                className: f.roleColorContainer,
                children: [
                    (0, n.jsx)(s.nn4, { children: u.intl.format(u.t['Vlq/pK'], { color: (0, o.Rf)(h) }) }),
                    (0, n.jsx)('div', {
                        className: f.roleColorPreview,
                        style: { backgroundColor: (0, o.Rf)(h) }
                    }),
                    (0, n.jsx)(s.LZC, {
                        size: 8,
                        horizontal: !0
                    }),
                    (0, n.jsx)(s.yRy, {
                        targetElementRef: l,
                        renderPopout: (e) =>
                            (0, n.jsx)(
                                s.Z$W,
                                p(g({}, e), {
                                    value: h,
                                    onChange: C
                                })
                            ),
                        children: (e) =>
                            (0, n.jsx)(
                                s.P3F,
                                p(g({}, e), {
                                    innerRef: l,
                                    tag: 'span',
                                    'aria-label': u.intl.string(u.t.QLgdlZ),
                                    className: f.dropperIconContainer,
                                    children: (0, n.jsx)(s.ilE, {
                                        size: 'xs',
                                        color: 'currentColor',
                                        className: f.dropperIcon
                                    })
                                })
                            )
                    })
                ]
            })
        ]
    });
}
