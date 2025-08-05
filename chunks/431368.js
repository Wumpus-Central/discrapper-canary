(n.d(t, { Z: () => h }), n(388685));
var r = n(255367);
n(73800);
var i = n(442837),
    a = n(481060),
    o = n(740492),
    s = n(984014),
    l = n(295510),
    c = n(394059),
    u = n(388032);
function d(e, t, n) {
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
function f(e) {
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
                d(e, t, n[t]);
            }));
    }
    return e;
}
function _(e, t) {
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
function p(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : _(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function h(e, t) {
    let [n, d, _] = (0, s.Z)(e, t),
        h = (0, i.e7)([o.ZP], () => o.ZP.disableHideSelfStreamAndVideoConfirmationAlert),
        m = () => {
            if (h || d) return _(!d);
            (0, a.h7j)((e) =>
                (0, r.jsx)(
                    l.Z,
                    p(f({}, e), {
                        type: c.K.STREAM,
                        onConfirm: () => _(!d)
                    })
                )
            );
        };
    return n
        ? (0, r.jsx)(a.S89, {
              id: 'self-stream-hide',
              label: u.intl.string(u.t.aol7iY),
              checked: !d,
              action: m
          })
        : null;
}
