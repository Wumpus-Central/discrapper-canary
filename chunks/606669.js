n.d(t, { Z: () => s });
var r = n(255367);
n(73800);
var i = n(442837),
    l = n(481060),
    a = n(857595),
    o = n(607070),
    c = n(388032);
function s() {
    let {
            saturation: e,
            useReducedMotion: t,
            roleStyle: n
        } = (0, i.cj)([o.Z], () => ({
            saturation: o.Z.saturation,
            useReducedMotion: o.Z.useReducedMotion,
            roleStyle: o.Z.roleStyle
        })),
        s = [
            {
                name: c.intl.string(c.t.YEOEi4),
                value: 'username'
            },
            {
                name: c.intl.string(c.t.mQaro6),
                value: 'dot'
            },
            {
                name: c.intl.string(c.t.Ji2EVF),
                value: 'hidden'
            }
        ];
    return [
        (0, r.jsx)(
            l.kSQ,
            {
                children: (0, r.jsx)(l.S89, {
                    id: 'reduced-motion',
                    label: c.intl.string(c.t.b3XBzs),
                    checked: t,
                    action: () => (0, a.Zt)(t ? 'no-preference' : 'reduce')
                })
            },
            'reduced-motion'
        ),
        (0, r.jsx)(
            l.kSQ,
            {
                children: (0, r.jsx)(l.II_, {
                    id: 'input',
                    label: c.intl.string(c.t['5PWWCQ']),
                    control: (t, n) => {
                        var i, o;
                        return (0, r.jsx)(
                            l._wy,
                            ((i = (function (e) {
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
                                            var r;
                                            ((r = n[t]),
                                                t in e
                                                    ? Object.defineProperty(e, t, {
                                                          value: r,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0
                                                      })
                                                    : (e[t] = r));
                                        }));
                                }
                                return e;
                            })({}, t)),
                            (o = o =
                                {
                                    ref: n,
                                    value: 100 * e,
                                    onChange: (e) => (0, a.o2)(e / 100),
                                    'aria-label': c.intl.string(c.t['5PWWCQ'])
                                }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(o))
                                : (function (e, t) {
                                      var n = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var r = Object.getOwnPropertySymbols(e);
                                          n.push.apply(n, r);
                                      }
                                      return n;
                                  })(Object(o)).forEach(function (e) {
                                      Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(o, e));
                                  }),
                            i)
                        );
                    }
                })
            },
            'input'
        ),
        (0, r.jsx)(
            l.kSQ,
            {
                children: (0, r.jsx)(l.sNh, {
                    id: 'role-colors',
                    label: c.intl.string(c.t.uSOPWl),
                    children: s.map((e) => {
                        let { name: t, value: i } = e;
                        return (0, r.jsx)(
                            l.k5B,
                            {
                                id: i,
                                group: 'role-colors',
                                checked: i === n,
                                label: t,
                                action: () => (0, a.u1)(i)
                            },
                            i
                        );
                    })
                })
            },
            'role-colors'
        )
    ];
}
