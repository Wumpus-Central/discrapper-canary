(n.d(t, { Z: () => b }), n(388685));
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(94171),
    l = n(532772),
    c = n(28546),
    u = n(443603),
    d = n(957825),
    _ = n(388032),
    f = n(302195);
function p(e, t, n) {
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
function h(e) {
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
                p(e, t, n[t]);
            }));
    }
    return e;
}
function m(e, t) {
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
function g(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : m(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function E(e, t) {
    let { disabled: n, type: a } = e,
        [p, m] = (0, c.Iu)((e) => [e.activeView, e.pickerId], s.X),
        E = !1,
        b = p === d.X1.STICKER,
        y = !1,
        O = i.useCallback(() => {
            (0, c.RO)(d.X1.STICKER, a);
        }, [a]),
        { Component: v, events: I, play: T } = (0, l.z)();
    return n
        ? null
        : (0, r.jsx)('div', {
              className: o()(d.CT, f.buttonContainer),
              ref: t,
              children: (0, r.jsx)(
                  u.Z,
                  g(h({ innerClassName: o()(f.button, f.stickerButton) }, I), {
                      onClick: () => {
                          (O(), T());
                      },
                      isActive: b,
                      'aria-label': _.intl.string(_.t.rZpidX),
                      'aria-expanded': b,
                      'aria-haspopup': 'dialog',
                      'aria-controls': m,
                      sparkle: E,
                      notification: y ? u.j.UPDATE : null,
                      children: (0, r.jsx)(v, {
                          size: 'refresh_sm',
                          color: 'currentColor'
                      })
                  })
              )
          });
}
let b = i.memo(i.forwardRef(E));
