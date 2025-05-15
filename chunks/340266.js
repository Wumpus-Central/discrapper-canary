n.d(t, { Z: () => y });
var r = n(255367);
n(73800);
var i = n(392711),
    o = n(481060),
    a = n(111028),
    s = n(5192),
    l = n(652853),
    c = n(228168),
    u = n(744584);
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
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                d(e, t, n[t]);
            });
    }
    return e;
}
function _(e, t) {
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
let h = 4,
    m = 1,
    g = 3,
    E = [
        [
            {
                top: 15,
                left: 15,
                width: 28,
                height: 28
            }
        ],
        [
            {
                top: 7,
                left: 7,
                width: 20,
                height: 20
            },
            {
                top: 25,
                left: 25,
                width: 26,
                height: 26
            }
        ],
        [
            {
                top: 5,
                left: 10,
                width: 18,
                height: 18
            },
            {
                top: 15,
                left: 31,
                width: 22,
                height: 22
            },
            {
                top: 29,
                left: 5,
                width: 24,
                height: 24
            }
        ],
        [
            {
                top: 5,
                left: 5,
                width: 22,
                height: 22
            },
            {
                top: 7,
                left: 33,
                width: 18,
                height: 18
            },
            {
                top: 33,
                left: 7,
                width: 18,
                height: 18
            },
            {
                top: 31,
                left: 31,
                width: 22,
                height: 22
            }
        ]
    ],
    b = [
        [
            {
                top: 15,
                left: 15,
                width: 28,
                height: 28
            }
        ],
        [
            {
                top: 7,
                left: 7,
                width: 20,
                height: 20
            },
            {
                top: 25,
                left: 25,
                width: 26,
                height: 26
            }
        ],
        [
            {
                top: 5,
                left: 10,
                width: 18,
                height: 18
            },
            {
                top: 15,
                left: 31,
                width: 22,
                height: 22
            },
            {
                top: 29,
                left: 5,
                width: 24,
                height: 24
            }
        ],
        [
            {
                top: 5,
                left: 5,
                width: 22,
                height: 22
            },
            {
                top: 7,
                left: 33,
                width: 18,
                height: 18
            },
            {
                top: 33,
                left: 7,
                width: 18,
                height: 18
            },
            {
                top: 31,
                left: 31,
                width: 22,
                height: 22
            }
        ]
    ];
function y(e) {
    let { users: t, channel: n } = e,
        { themeType: d } = (0, l.z)(),
        _ = d === c.lY.MODAL_V2 ? b : E,
        y = t.length > h,
        O = t.length - h + 1,
        v = O >= 10 ? g : m;
    return (0, r.jsx)('div', {
        className: u.container,
        children: _[(0, i.clamp)(t.length - 1, 0, _.length - 1)].map((e, i) => {
            let l = t[i];
            return null == l
                ? null
                : (0, r.jsx)(
                      'div',
                      {
                          className: u.circle,
                          style: e,
                          children:
                              y && i === v
                                  ? (0, r.jsx)('div', {
                                        className: u.overflowCount,
                                        children: (0, r.jsx)(o.Text, {
                                            variant: 'text-xxs/semibold',
                                            lineClamp: 1,
                                            children: (0, r.jsx)(a.Z, { children: O > 99 ? '>99' : '+'.concat(O) })
                                        })
                                    })
                                  : (0, r.jsx)(o.ua7, {
                                        text: s.ZP.getName(n.guild_id, n.id, l),
                                        children: (e) =>
                                            (0, r.jsx)(
                                                'img',
                                                p(f({}, e), {
                                                    className: u.avatar,
                                                    src: l.getAvatarURL(n.guild_id, (0, o.pxk)(o.EFr.SIZE_80)),
                                                    alt: ''
                                                })
                                            )
                                    })
                      },
                      l.id
                  );
        })
    });
}
