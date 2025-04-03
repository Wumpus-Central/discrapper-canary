n.d(t, { Z: () => m }), n(301563);
var r = n(200651);
n(192379);
var i = n(120356),
    l = n.n(i),
    o = n(91192),
    a = n(442837),
    s = n(481060),
    c = n(129861),
    u = n(700582),
    d = n(600164),
    p = n(158776),
    h = n(51144),
    f = n(900054);
function m(e) {
    var t, n;
    let { user: i, row: m, hideDiscriminator: g, comparator: b, selected: _, checked: C, onClick: y, onMouseEnter: x, 'aria-setsize': v, 'aria-posinset': j } = e,
        O = (0, a.e7)([p.Z], () => p.Z.getStatus(i.id)),
        E = (0, o.JA)(String(i.id));
    return (0, r.jsx)(
        s.P3F,
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
        })(
            {
                id: 'user-row-'.concat(m),
                className: f.friendWrapper,
                onClick: () => {
                    null != y && y(i.id);
                },
                onMouseEnter: () => {
                    null != x && x(m);
                }
            },
            E
        )),
        (n = n =
            {
                role: 'option',
                'aria-selected': C,
                'aria-setsize': v,
                'aria-posinset': j,
                children: (0, r.jsxs)(d.Z, {
                    align: d.Z.Align.CENTER,
                    className: l()(f.friend, { [f.friendSelected]: _ }),
                    children: [
                        (0, r.jsx)(u.Z, {
                            user: i,
                            status: O,
                            className: f.avatar
                        }),
                        (0, r.jsxs)(d.Z, {
                            className: f.match,
                            align: d.Z.Align.BASELINE,
                            children: [
                                (0, r.jsx)(s.Text, {
                                    tag: 'strong',
                                    className: f.nickname,
                                    'aria-hidden': !0,
                                    variant: 'text-md/medium',
                                    children: null != b && b === i.tag ? h.ZP.getName(i) : null != b && '' !== b ? b : h.ZP.getName(i)
                                }),
                                (0, r.jsx)(c.Z, {
                                    user: i,
                                    hideDiscriminator: g,
                                    className: f.discordTag,
                                    usernameClass: f.__invalid_weightMedium,
                                    discriminatorClass: f.__invalid_weightMedium,
                                    forceUsername: !0
                                })
                            ]
                        }),
                        (0, r.jsx)(s.XZJ, {
                            displayOnly: !0,
                            size: 22,
                            value: C,
                            className: f.checkbox
                        })
                    ]
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
    );
}
