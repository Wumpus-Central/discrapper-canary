r.d(t, { Z: () => p });
var n = r(200651);
r(192379);
var A = r(512722),
    a = r.n(A),
    l = r(866442),
    o = r(481060),
    i = r(313201),
    s = r(981631),
    c = r(388032),
    d = r(143886);
function u(e) {
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
function g(e, t) {
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
let f = (0, i.hQ)();
function p(e) {
    let { newRoleParams: t, setNewRoleParams: r } = e,
        { name: A, color: i } = t,
        p = (e) => r((t) => (a()(null != t, 'newRoleParams should be defined'), g(u({}, t), { color: e })));
    return (0, n.jsxs)('div', {
        className: d.roleInputContainer,
        children: [
            (0, n.jsx)(o.oil, {
                autoFocus: !0,
                value: A,
                onChange: (e) => r((t) => (a()(null != t, 'newRoleParams should be defined'), g(u({}, t), { name: e }))),
                id: f,
                placeholder: c.intl.string(c.t.oNauur),
                maxLength: s.VKK,
                inputClassName: d.input
            }),
            (0, n.jsxs)('div', {
                className: d.roleColorContainer,
                children: [
                    (0, n.jsx)(o.nn4, { children: c.intl.format(c.t['Vlq/pK'], { color: (0, l.Rf)(i) }) }),
                    (0, n.jsx)('div', {
                        className: d.roleColorPreview,
                        style: { backgroundColor: (0, l.Rf)(i) }
                    }),
                    (0, n.jsx)(o.LZC, {
                        size: 8,
                        horizontal: !0
                    }),
                    (0, n.jsx)(o.yRy, {
                        renderPopout: (e) =>
                            (0, n.jsx)(
                                o.Z$W,
                                g(u({}, e), {
                                    value: i,
                                    onChange: p
                                })
                            ),
                        children: (e) =>
                            (0, n.jsx)(
                                o.P3F,
                                g(u({}, e), {
                                    tag: 'span',
                                    'aria-label': c.intl.string(c.t.QLgdlZ),
                                    className: d.dropperIconContainer,
                                    children: (0, n.jsx)(o.ilE, {
                                        size: 'xs',
                                        color: 'currentColor',
                                        className: d.dropperIcon
                                    })
                                })
                            )
                    })
                ]
            })
        ]
    });
}
