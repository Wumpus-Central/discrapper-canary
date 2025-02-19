n.d(t, { Z: () => p });
var r = n(200651);
n(192379);
var i = n(442837),
    l = n(481060),
    o = n(607070),
    a = n(43267),
    s = n(933557),
    c = n(266076),
    u = n(518950),
    d = n(967128);
function p(e) {
    var t, n, p;
    let { channel: h, children: f, user: m } = e,
        g = (0, i.e7)([o.Z], () => o.Z.useReducedMotion),
        b = null !== (t = (0, s.ZP)(h)) && void 0 !== t ? t : '',
        {
            avatarDecorationSrc: _,
            eventHandlers: C,
            isAnimating: v
        } = (0, u.Z)({
            user: m,
            size: l.EFr.SIZE_80,
            animateOnHover: !0
        });
    return (0, r.jsxs)(
        d.ZP,
        ((n = (function (e) {
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
                        var r;
                        (r = n[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: r,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (e[t] = r);
                    });
            }
            return e;
        })({ channelId: h.id }, C)),
        (p = p =
            {
                children: [
                    (() => {
                        let e = !g && v;
                        return h.isMultiUserDM()
                            ? (0, r.jsx)(c.Z, {
                                  channel: h,
                                  size: l.EFr.SIZE_80,
                                  experimentLocation: 'empty_messages',
                                  animated: e,
                                  'aria-label': b
                              })
                            : (0, r.jsx)(l.qEK, {
                                  'aria-label': b,
                                  size: l.EFr.SIZE_80,
                                  src: (0, a.x)(h, 80, e),
                                  avatarDecoration: _
                              });
                    })(),
                    (0, r.jsx)(d.Ot, { children: b }),
                    (0, r.jsx)(d.jz, { children: f })
                ]
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(p))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(p)).forEach(function (e) {
                  Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(p, e));
              }),
        n)
    );
}
