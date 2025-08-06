n.d(t, { Z: () => h });
var r = n(255367),
    i = n(73800),
    o = n(120356),
    a = n.n(o),
    s = n(481060),
    l = n(826298),
    c = n(881046);
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
    var t;
    let { className: n, channel: i, section: o } = e,
        u = null != o ? (0, l.ky)(o) : null,
        f =
            null != u
                ? (0, r.jsx)(s.ua7, {
                      text: null != (t = null == o ? void 0 : o.name) ? t : '',
                      position: 'top',
                      children: (e) =>
                          (0, r.jsx)(
                              u,
                              _(d({}, e), {
                                  channel: i,
                                  section: o,
                                  width: 24,
                                  height: 24
                              })
                          )
                  })
                : null;
    return (0, r.jsx)('div', {
        className: a()(n, c.wrapper),
        children: (0, r.jsx)('div', {
            className: c.icon,
            children: f
        })
    });
}
let h = i.memo(p);
