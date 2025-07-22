n.d(t, { Z: () => y });
var r = n(255367);
n(73800);
var i = n(392711),
    a = n(481060),
    o = n(111028),
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
                d(e, t, n[t]);
            }));
    }
    return e;
}
function f(e, t) {
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
            : f(Object(t)).forEach(function (n) {
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
                top: 23,
                left: 23,
                width: 52,
                height: 52
            }
        ],
        [
            {
                top: 13,
                left: 13,
                width: 32,
                height: 32
            },
            {
                top: 41,
                left: 41,
                width: 44,
                height: 44
            }
        ],
        [
            {
                top: 9,
                left: 14,
                width: 31,
                height: 31
            },
            {
                top: 27,
                left: 53,
                width: 34,
                height: 34
            },
            {
                top: 52,
                left: 11,
                width: 36,
                height: 36
            }
        ],
        [
            {
                top: 10,
                left: 10,
                width: 36,
                height: 36
            },
            {
                top: 10,
                left: 57,
                width: 31,
                height: 31
            },
            {
                top: 57,
                left: 10,
                width: 31,
                height: 31
            },
            {
                top: 52,
                left: 52,
                width: 36,
                height: 36
            }
        ]
    ];
function y(e) {
    let { users: t, channel: n } = e,
        { themeType: d } = (0, l.z)(),
        f = d === c.lY.MODAL_V2 ? b : E,
        y = t.length > h,
        O = t.length - h + 1,
        v = O >= 10 ? g : m;
    return (0, r.jsx)('div', {
        className: u.container,
        children: f[(0, i.clamp)(t.length - 1, 0, f.length - 1)].map((e, i) => {
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
                                        children: (0, r.jsx)(a.Text, {
                                            variant: 'text-xxs/semibold',
                                            lineClamp: 1,
                                            children: (0, r.jsx)(o.Z, { children: O > 99 ? '>99' : '+'.concat(O) })
                                        })
                                    })
                                  : (0, r.jsx)(a.ua7, {
                                        text: s.ZP.getName(n.guild_id, n.id, l),
                                        children: (e) =>
                                            (0, r.jsx)(
                                                'img',
                                                p(_({}, e), {
                                                    className: u.avatar,
                                                    src: l.getAvatarURL(n.guild_id, (0, a.pxk)(a.EFr.SIZE_80)),
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
