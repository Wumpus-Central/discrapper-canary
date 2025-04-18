n.d(t, { Z: () => u });
var r = n(200651);
n(192379);
var i = n(481060),
    a = n(141675);
function o(e, t, n) {
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
function s(e) {
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
                o(e, t, n[t]);
            });
    }
    return e;
}
function l(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function c(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : l(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function u(e) {
    let { onClick: t, Icon: n, 'aria-label': o } = e,
        l = (0, i.dQu)(i.TVs.colors.CONTENT_INVENTORY_OVERLAY_TEXT_PRIMARY),
        u = (0, r.jsx)(n, {
            color: l.hex(),
            size: 'custom',
            width: 16,
            height: 16
        });
    return null == t
        ? (0, r.jsx)('div', {
              className: a.container,
              'aria-label': o,
              children: u
          })
        : (0, r.jsx)(i.ua7, {
              text: o,
              children: (e) =>
                  (0, r.jsx)(
                      i.P3F,
                      c(s({ className: a.container }, e), {
                          onClick: t,
                          children: u
                      })
                  )
          });
}
