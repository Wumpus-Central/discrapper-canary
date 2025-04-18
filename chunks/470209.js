r.d(t, { Z: () => p });
var n = r(200651);
r(192379);
var A = r(512722),
    a = r.n(A),
    o = r(866442),
    l = r(481060),
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
            (0, n.jsx)(l.oil, {
                autoFocus: !0,
                value: A,
                onChange: (e) => r((t) => (a()(null != t, 'newRoleParams should be defined'), g(u({}, t), { name: e }))),
                id: f,
                placeholder: c.NW.string(c.t.oNauur),
                maxLength: s.VKK,
                inputClassName: d.input
            }),
            (0, n.jsxs)('div', {
                className: d.roleColorContainer,
                children: [
                    (0, n.jsx)(l.nn4, { children: c.NW.format(c.t['Vlq/pK'], { color: (0, o.Rf)(i) }) }),
                    (0, n.jsx)('div', {
                        className: d.roleColorPreview,
                        style: { backgroundColor: (0, o.Rf)(i) }
                    }),
                    (0, n.jsx)(l.LZC, {
                        size: 8,
                        horizontal: !0
                    }),
                    (0, n.jsx)(l.yRy, {
                        renderPopout: (e) =>
                            (0, n.jsx)(
                                l.Z$W,
                                g(u({}, e), {
                                    value: i,
                                    onChange: p
                                })
                            ),
                        children: (e) =>
                            (0, n.jsx)(
                                l.P3F,
                                g(u({}, e), {
                                    tag: 'span',
                                    'aria-label': c.NW.string(c.t.QLgdlZ),
                                    className: d.dropperIconContainer,
                                    children: (0, n.jsx)(l.ilE, {
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
