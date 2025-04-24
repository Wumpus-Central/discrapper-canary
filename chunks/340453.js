n.d(t, { Z: () => u });
var i = n(200651);
n(192379);
var r = n(481060),
    s = n(518950),
    l = n(998502),
    a = n(631885),
    o = n(329242),
    c = n(514299);
let d = l.ZP.getEnableHardwareAcceleration() ? r.Xo$ : r.qEK;
function u(e) {
    var t, n;
    let { otherUser: l, status: u } = e,
        m = (0, a.j_)(l.id, u),
        {
            avatarSrc: p,
            avatarDecorationSrc: g,
            eventHandlers: h
        } = (0, s.Z)({
            user: l,
            size: r.EFr.SIZE_40,
            animateOnHover: !0
        });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(
                'div',
                ((t = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            i = Object.keys(n);
                        'function' == typeof Object.getOwnPropertySymbols &&
                            (i = i.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                })
                            )),
                            i.forEach(function (t) {
                                var i;
                                (i = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: i,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
                                          })
                                        : (e[t] = i);
                            });
                    }
                    return e;
                })({}, h)),
                (n = n =
                    {
                        children: (0, i.jsx)(d, {
                            className: c.avatar,
                            src: p,
                            avatarDecoration: g,
                            size: r.EFr.SIZE_40,
                            'aria-label': l.username
                        })
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var i = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, i);
                          }
                          return n;
                      })(Object(n)).forEach(function (e) {
                          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                      }),
                t)
            ),
            (0, i.jsxs)('div', {
                className: c.userPreview,
                children: [
                    (0, i.jsx)('div', {
                        className: c.userContainerWithTimestamp,
                        children: (0, i.jsx)(o.Z, { user: l })
                    }),
                    (0, i.jsx)(r.Text, {
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
