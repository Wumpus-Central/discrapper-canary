(n.d(t, { Z: () => m }), n(388685));
var r = n(255367);
n(73800);
var i = n(442837),
    a = n(481060),
    o = n(740492),
    s = n(27584),
    l = n(295510),
    c = n(394059),
    u = n(65154),
    d = n(388032);
function f(e, t, n) {
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
function _(e) {
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
                f(e, t, n[t]);
            }));
    }
    return e;
}
function p(e, t) {
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
function h(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : p(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function m(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u.Yn.DEFAULT,
        [n, f, p] = (0, s.Z)(e, t),
        m = (0, i.e7)([o.ZP], () => o.ZP.disableHideSelfStreamAndVideoConfirmationAlert),
        g = () => {
            if (m || f) return p(!f);
            (0, a.h7j)((e) =>
                (0, r.jsx)(
                    l.Z,
                    h(_({}, e), {
                        type: c.K.VIDEO,
                        onConfirm: () => p(!f)
                    })
                )
            );
        };
    return n
        ? (0, r.jsx)(a.S89, {
              id: 'self-video-hide',
              label: d.intl.string(d.t.MH8ESU),
              checked: !f,
              action: g
          })
        : null;
}
