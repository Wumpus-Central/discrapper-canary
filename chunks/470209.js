n.d(t, { Z: () => m });
var r = n(255367),
    A = n(73800),
    a = n(512722),
    l = n.n(a),
    o = n(866442),
    i = n(481060),
    s = n(313201),
    c = n(981631),
    d = n(388032),
    u = n(143886);
function g(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
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
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let p = (0, s.hQ)();
function m(e) {
    let { newRoleParams: t, setNewRoleParams: n } = e,
        a = A.useRef(null),
        { name: s, color: m } = t,
        h = (e) => n((t) => (l()(null != t, 'newRoleParams should be defined'), f(g({}, t), { color: e })));
    return (0, r.jsxs)('div', {
        className: u.roleInputContainer,
        children: [
            (0, r.jsx)(i.oil, {
                autoFocus: !0,
                value: s,
                onChange: (e) => n((t) => (l()(null != t, 'newRoleParams should be defined'), f(g({}, t), { name: e }))),
                id: p,
                placeholder: d.intl.string(d.t.oNauur),
                maxLength: c.VKK,
                inputClassName: u.input
            }),
            (0, r.jsxs)('div', {
                className: u.roleColorContainer,
                children: [
                    (0, r.jsx)(i.nn4, { children: d.intl.format(d.t['Vlq/pK'], { color: (0, o.Rf)(m) }) }),
                    (0, r.jsx)('div', {
                        className: u.roleColorPreview,
                        style: { backgroundColor: (0, o.Rf)(m) }
                    }),
                    (0, r.jsx)(i.LZC, {
                        size: 8,
                        horizontal: !0
                    }),
                    (0, r.jsx)(i.yRy, {
                        targetElementRef: a,
                        renderPopout: (e) =>
                            (0, r.jsx)(
                                i.Z$W,
                                f(g({}, e), {
                                    value: m,
                                    onChange: h
                                })
                            ),
                        children: (e) =>
                            (0, r.jsx)(
                                i.P3F,
                                f(g({}, e), {
                                    innerRef: a,
                                    tag: 'span',
                                    'aria-label': d.intl.string(d.t.QLgdlZ),
                                    className: u.dropperIconContainer,
                                    children: (0, r.jsx)(i.ilE, {
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
