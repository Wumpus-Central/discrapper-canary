r.d(t, { Z: () => p });
var A = r(200651);
r(192379);
var n = r(512722),
    o = r.n(n),
    a = r(866442),
    l = r(481060),
    i = r(313201),
    s = r(981631),
    c = r(388032),
    d = r(26785);
function u(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            A = Object.keys(r);
        'function' == typeof Object.getOwnPropertySymbols &&
            (A = A.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                })
            )),
            A.forEach(function (t) {
                var A;
                (A = r[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: A,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = A);
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
                      var A = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, A);
                  }
                  return r;
              })(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
              }),
        e
    );
}
let g = (0, i.hQ)();
function p(e) {
    let { newRoleParams: t, setNewRoleParams: r } = e,
        { name: n, color: i } = t,
        p = (e) => r((t) => (o()(null != t, 'newRoleParams should be defined'), f(u({}, t), { color: e })));
    return (0, A.jsxs)('div', {
        className: d.roleInputContainer,
        children: [
            (0, A.jsx)(l.oil, {
                autoFocus: !0,
                value: n,
                onChange: (e) => r((t) => (o()(null != t, 'newRoleParams should be defined'), f(u({}, t), { name: e }))),
                id: g,
                placeholder: c.NW.string(c.t.oNauur),
                maxLength: s.VKK,
                inputClassName: d.input
            }),
            (0, A.jsxs)('div', {
                className: d.roleColorContainer,
                children: [
                    (0, A.jsx)(l.nn4, { children: c.NW.format(c.t['Vlq/pK'], { color: (0, a.Rf)(i) }) }),
                    (0, A.jsx)('div', {
                        className: d.roleColorPreview,
                        style: { backgroundColor: (0, a.Rf)(i) }
                    }),
                    (0, A.jsx)(l.LZC, {
                        size: 8,
                        horizontal: !0
                    }),
                    (0, A.jsx)(l.yRy, {
                        renderPopout: (e) =>
                            (0, A.jsx)(
                                l.Z$W,
                                f(u({}, e), {
                                    value: i,
                                    onChange: p
                                })
                            ),
                        children: (e) =>
                            (0, A.jsx)(
                                l.P3F,
                                f(u({}, e), {
                                    tag: 'span',
                                    'aria-label': c.NW.string(c.t.QLgdlZ),
                                    className: d.dropperIconContainer,
                                    children: (0, A.jsx)(l.ilE, {
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
