r.d(t, { Z: () => s });
var n = r(200651);
r(192379);
var i = r(442837),
    o = r(481060),
    l = r(857595),
    c = r(607070),
    a = r(388032);
function s() {
    let {
            saturation: e,
            useReducedMotion: t,
            roleStyle: r
        } = (0, i.cj)([c.Z], () => ({
            saturation: c.Z.saturation,
            useReducedMotion: c.Z.useReducedMotion,
            roleStyle: c.Z.roleStyle
        })),
        s = [
            {
                name: a.intl.string(a.t.YEOEi4),
                value: 'username'
            },
            {
                name: a.intl.string(a.t.mQaro6),
                value: 'dot'
            },
            {
                name: a.intl.string(a.t.Ji2EVF),
                value: 'hidden'
            }
        ];
    return [
        (0, n.jsx)(
            o.kSQ,
            {
                children: (0, n.jsx)(o.S89, {
                    id: 'reduced-motion',
                    label: a.intl.string(a.t.b3XBzs),
                    checked: t,
                    action: () => (0, l.Zt)(t ? 'no-preference' : 'reduce')
                })
            },
            'reduced-motion'
        ),
        (0, n.jsx)(
            o.kSQ,
            {
                children: (0, n.jsx)(o.II_, {
                    id: 'input',
                    label: a.intl.string(a.t['5PWWCQ']),
                    control: (t, r) => {
                        var i, c;
                        return (0, n.jsx)(
                            o._wy,
                            ((i = (function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var r = null != arguments[t] ? arguments[t] : {},
                                        n = Object.keys(r);
                                    'function' == typeof Object.getOwnPropertySymbols &&
                                        (n = n.concat(
                                            Object.getOwnPropertySymbols(r).filter(function (e) {
                                                return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                            })
                                        )),
                                        n.forEach(function (t) {
                                            var n;
                                            (n = r[t]),
                                                t in e
                                                    ? Object.defineProperty(e, t, {
                                                          value: n,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0
                                                      })
                                                    : (e[t] = n);
                                        });
                                }
                                return e;
                            })({}, t)),
                            (c = c =
                                {
                                    ref: r,
                                    value: 100 * e,
                                    onChange: (e) => (0, l.o2)(e / 100),
                                    'aria-label': a.intl.string(a.t['5PWWCQ'])
                                }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(c))
                                : (function (e, t) {
                                      var r = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var n = Object.getOwnPropertySymbols(e);
                                          r.push.apply(r, n);
                                      }
                                      return r;
                                  })(Object(c)).forEach(function (e) {
                                      Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(c, e));
                                  }),
                            i)
                        );
                    }
                })
            },
            'input'
        ),
        (0, n.jsx)(
            o.kSQ,
            {
                children: (0, n.jsx)(o.sNh, {
                    id: 'role-colors',
                    label: a.intl.string(a.t.uSOPWl),
                    children: s.map((e) => {
                        let { name: t, value: i } = e;
                        return (0, n.jsx)(
                            o.k5B,
                            {
                                id: i,
                                group: 'role-colors',
                                checked: i === r,
                                label: t,
                                action: () => (0, l.u1)(i)
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
