n.d(t, { v: () => p });
var r = n(255367),
    i = n(120356),
    a = n.n(i),
    o = n(481060),
    s = n(140106),
    l = n(388032),
    c = n(639041);
function u(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function d(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                u(e, t, n[t]);
            }));
    }
    return e;
}
function f(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function _(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : f(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function p(e) {
    let { channel: t, children: n, className: i, editable: u, location: f } = e;
    return u
        ? (0, r.jsx)(o.ua7, {
              position: 'bottom',
              text: l.intl.string(l.t['0qPSMT']),
              children: (e) =>
                  (0, r.jsxs)(
                      o.P3F,
                      _(d({}, e), {
                          className: a()(c.editableGdmIcon, i),
                          onClick: () => (0, s.P5)(t.id, f),
                          children: [
                              n,
                              (0, r.jsx)('div', {
                                  className: c.editableGdmIconIndicator,
                                  children: (0, r.jsx)(o.vdY, {
                                      size: 'xs',
                                      color: 'currentColor'
                                  })
                              })
                          ]
                      })
                  )
          })
        : (0, r.jsx)('div', {
              className: i,
              children: n
          });
}
