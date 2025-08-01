n.d(t, { Z: () => g });
var l = n(255367);
n(73800);
var r = n(913527),
    i = n.n(r),
    a = n(755721),
    s = n(481060),
    d = n(854698),
    c = n(401876),
    u = n(388032),
    o = n(622601);
function x(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            l.forEach(function (t) {
                var l;
                ((l = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = l));
            }));
    }
    return e;
}
function h(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var l = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, l);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function g(e) {
    let { className: t, onScheduleChange: n, onRecurrenceChange: r, onTimeChange: g, timeSelected: p = !0, schedule: j, recurrenceRule: m, showEndDate: v = !1, requireEndDate: b = !1, disableStartDateTime: f = !1 } = e;
    if (null == j) return null;
    let _ = null,
        D = j.startDate,
        O = i()(),
        y = i()().add(d.G3, 'days'),
        S = i()().add(d.Ib, 'days');
    null != m && (y.add(d.hn, 'years'), S.add(d.hn, 'years'));
    let k = (e) => {
        n(h(x({}, j), { endDate: e }));
    };
    return (
        v &&
            (_ =
                null != j.endDate || b
                    ? (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsxs)('div', {
                                  className: o.doubleInput,
                                  children: [
                                      (0, l.jsx)(s.xJW, {
                                          title: u.intl.string(u.t.CTLgZG),
                                          required: b,
                                          children: (0, l.jsx)(s.Wrb, {
                                              value: j.endDate,
                                              onSelect: k,
                                              minDate: j.startDate,
                                              maxDate: S
                                          })
                                      }),
                                      (0, l.jsx)(s.xJW, {
                                          title: u.intl.string(u.t.j2RuXF),
                                          required: b,
                                          children: (0, l.jsx)(s.MGJ, {
                                              value: j.endDate,
                                              onChange: k
                                          })
                                      })
                                  ]
                              }),
                              b
                                  ? null
                                  : (0, l.jsx)(a.zx, {
                                        onClick: () => {
                                            k(void 0);
                                        },
                                        look: a.zx.Looks.BLANK,
                                        size: a.zx.Sizes.MIN,
                                        children: (0, l.jsxs)('div', {
                                            className: o.link,
                                            children: [
                                                (0, l.jsx)(s.k$p, {
                                                    size: 'custom',
                                                    color: 'currentColor',
                                                    width: 17,
                                                    height: 17,
                                                    className: o.removeIcon
                                                }),
                                                (0, l.jsx)(s.Text, {
                                                    variant: 'text-sm/normal',
                                                    children: u.intl.string(u.t.petdfn)
                                                })
                                            ]
                                        })
                                    })
                          ]
                      })
                    : (0, l.jsx)(a.zx, {
                          look: a.zx.Looks.BLANK,
                          size: a.zx.Sizes.MIN,
                          onClick: () => {
                              k(i()(j.startDate).add(1, 'hour'));
                          },
                          children: (0, l.jsxs)('div', {
                              className: o.link,
                              children: [
                                  (0, l.jsx)(s.oFk, {
                                      size: 'custom',
                                      color: 'currentColor',
                                      width: 20,
                                      height: 20,
                                      className: o.addIcon
                                  }),
                                  (0, l.jsx)(s.Text, {
                                      variant: 'text-sm/normal',
                                      children: u.intl.string(u.t.ncdPcn)
                                  })
                              ]
                          })
                      })),
        (0, l.jsxs)('div', {
            className: t,
            children: [
                (0, l.jsxs)('div', {
                    className: o.doubleInput,
                    children: [
                        (0, l.jsx)(s.xJW, {
                            title: u.intl.string(u.t.kKOIwM),
                            required: !0,
                            children: (0, l.jsx)(s.Wrb, {
                                value: j.startDate,
                                onSelect: (e) => {
                                    n(h(x({}, j), { startDate: e }));
                                },
                                minDate: O,
                                maxDate: y,
                                disabled: f
                            })
                        }),
                        (0, l.jsx)(s.xJW, {
                            title: u.intl.string(u.t['6dGmCA']),
                            required: !0,
                            children: (0, l.jsx)(s.MGJ, {
                                value: j.startDate,
                                onChange: (e) => {
                                    e.isValid() && (null == g || g(!0), n(h(x({}, j), { startDate: e })));
                                },
                                hideValue: !p,
                                disabled: f
                            })
                        })
                    ]
                }),
                _,
                null != D &&
                    null != r &&
                    (0, l.jsx)(c.Z, {
                        onRecurrenceChange: r,
                        startDate: D,
                        recurrenceRule: m
                    })
            ]
        })
    );
}
