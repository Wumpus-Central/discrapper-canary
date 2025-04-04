n.d(t, { Z: () => g });
var r = n(200651);
n(192379);
var i = n(392711),
    o = n(481060),
    a = n(111028),
    s = n(5192),
    l = n(744584);
function c(e, t, n) {
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
function u(e) {
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
                c(e, t, n[t]);
            });
    }
    return e;
}
function d(e, t) {
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
function f(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : d(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let _ = 4,
    p = 1,
    h = 3,
    m = [
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
function g(e) {
    let { users: t, channel: n } = e,
        c = t.length > _,
        d = t.length - _ + 1,
        g = d >= 10 ? h : p;
    return (0, r.jsx)('div', {
        className: l.container,
        children: m[(0, i.clamp)(t.length - 1, 0, m.length - 1)].map((e, i) => {
            let _ = t[i];
            return null == _
                ? null
                : (0, r.jsx)(
                      'div',
                      {
                          className: l.circle,
                          style: e,
                          children:
                              c && i === g
                                  ? (0, r.jsx)('div', {
                                        className: l.overflowCount,
                                        children: (0, r.jsx)(o.Text, {
                                            variant: 'text-xxs/semibold',
                                            lineClamp: 1,
                                            children: (0, r.jsx)(a.Z, { children: d > 99 ? '>99' : '+'.concat(d) })
                                        })
                                    })
                                  : (0, r.jsx)(o.ua7, {
                                        text: s.ZP.getName(n.guild_id, n.id, _),
                                        children: (e) =>
                                            (0, r.jsx)(
                                                'img',
                                                f(u({}, e), {
                                                    className: l.avatar,
                                                    src: _.getAvatarURL(n.guild_id, (0, o.pxk)(o.EFr.SIZE_80)),
                                                    alt: ''
                                                })
                                            )
                                    })
                      },
                      _.id
                  );
        })
    });
}
