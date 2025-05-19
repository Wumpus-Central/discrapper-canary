r.d(t, { Z: () => m });
var n = r(255367),
    A = r(73800),
    a = r(512722),
    l = r.n(a),
    o = r(866442),
    i = r(481060),
    s = r(313201),
    c = r(981631),
    d = r(388032),
    u = r(182097);
function g(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        'function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                })
            )),
            n.forEach(function (t) {
                var n;
                (n = r[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = n);
            });
    }
    return e;
}
function f(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, n);
                  }
                  return r;
              })(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
              }),
        e
    );
}
let p = (0, s.hQ)();
function m(e) {
    let { newRoleParams: t, setNewRoleParams: r } = e,
        a = A.useRef(null),
        { name: s, color: m } = t,
        h = (e) => r((t) => (l()(null != t, 'newRoleParams should be defined'), f(g({}, t), { color: e })));
    return (0, n.jsxs)('div', {
        className: u.roleInputContainer,
        children: [
            (0, n.jsx)(i.oil, {
                autoFocus: !0,
                value: s,
                onChange: (e) => r((t) => (l()(null != t, 'newRoleParams should be defined'), f(g({}, t), { name: e }))),
                id: p,
                placeholder: d.intl.string(d.t.oNauur),
                maxLength: c.VKK,
                inputClassName: u.input
            }),
            (0, n.jsxs)('div', {
                className: u.roleColorContainer,
                children: [
                    (0, n.jsx)(i.nn4, { children: d.intl.format(d.t['Vlq/pK'], { color: (0, o.Rf)(m) }) }),
                    (0, n.jsx)('div', {
                        className: u.roleColorPreview,
                        style: { backgroundColor: (0, o.Rf)(m) }
                    }),
                    (0, n.jsx)(i.LZC, {
                        size: 8,
                        horizontal: !0
                    }),
                    (0, n.jsx)(i.yRy, {
                        targetElementRef: a,
                        renderPopout: (e) =>
                            (0, n.jsx)(
                                i.Z$W,
                                f(g({}, e), {
                                    value: m,
                                    onChange: h
                                })
                            ),
                        children: (e) =>
                            (0, n.jsx)(
                                i.P3F,
                                f(g({}, e), {
                                    innerRef: a,
                                    tag: 'span',
                                    'aria-label': d.intl.string(d.t.QLgdlZ),
                                    className: u.dropperIconContainer,
                                    children: (0, n.jsx)(i.ilE, {
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
