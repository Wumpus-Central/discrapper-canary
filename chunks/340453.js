n.d(t, { Z: () => u });
var r = n(200651);
n(192379);
var i = n(481060),
    s = n(518950),
    a = n(998502),
    l = n(631885),
    o = n(329242),
    c = n(514299);
let d = a.ZP.getEnableHardwareAcceleration() ? i.Xo$ : i.qEK;
function u(e) {
    var t, n;
    let { otherUser: a, status: u } = e,
        m = (0, l.j_)(a.id, u),
        {
            avatarSrc: g,
            avatarDecorationSrc: p,
            eventHandlers: h
        } = (0, s.Z)({
            user: a,
            size: i.EFr.SIZE_40,
            animateOnHover: !0
        });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(
                'div',
                ((t = (function (e) {
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
                })({}, h)),
                (n = n =
                    {
                        children: (0, r.jsx)(d, {
                            className: c.avatar,
                            src: g,
                            avatarDecoration: p,
                            size: i.EFr.SIZE_40,
                            'aria-label': a.username
                        })
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(n)).forEach(function (e) {
                          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                      }),
                t)
            ),
            (0, r.jsxs)('div', {
                className: c.userPreview,
                children: [
                    (0, r.jsx)('div', {
                        className: c.userContainerWithTimestamp,
                        children: (0, r.jsx)(o.Z, { user: a })
                    }),
                    (0, r.jsx)(i.Text, {
                        className: c.__invalid_timestamp,
                        color: 'text-muted',
                        variant: 'text-xs/normal',
                        children: m
                    })
                ]
            })
        ]
    });
}
