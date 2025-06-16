n.d(t, { Z: () => y }), n(388685);
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(94171),
    l = n(532772),
    c = n(540059),
    u = n(28546),
    d = n(443603),
    f = n(957825),
    _ = n(388032),
    p = n(302195);
function h(e, t, n) {
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
function m(e) {
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
                h(e, t, n[t]);
            });
    }
    return e;
}
function g(e, t) {
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
function E(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : g(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function b(e, t) {
    let { disabled: n, type: a } = e,
        [h, g] = (0, u.Iu)((e) => [e.activeView, e.pickerId], s.X),
        b = !1,
        y = h === f.X1.STICKER,
        O = !1,
        v = i.useCallback(() => {
            (0, u.RO)(f.X1.STICKER, a);
        }, [a]),
        { Component: I, events: T, play: S } = (0, l.z)(),
        A = (0, c.Q3)('ChannelStickerPickerButton');
    return n
        ? null
        : (0, r.jsx)('div', {
              className: o()(f.CT, p.buttonContainer),
              ref: t,
              children: (0, r.jsx)(
                  d.Z,
                  E(m({ innerClassName: o()(p.button, p.stickerButton) }, T), {
                      onClick: () => {
                          v(), S();
                      },
                      isActive: y,
                      'aria-label': _.intl.string(_.t.rZpidX),
                      'aria-expanded': y,
                      'aria-haspopup': 'dialog',
                      'aria-controls': g,
                      sparkle: b,
                      notification: O ? d.j.UPDATE : null,
                      children: (0, r.jsx)(I, {
                          size: A ? 'refresh_sm' : void 0,
                          color: 'currentColor'
                      })
                  })
              )
          });
}
let y = i.memo(i.forwardRef(b));
