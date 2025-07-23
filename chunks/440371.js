n.d(t, { Z: () => g });
var r = n(255367);
n(73800);
var l = n(913527),
    i = n.n(l),
    a = n(755721),
    s = n(481060),
    d = n(854698),
    c = n(401876),
    o = n(388032),
    u = n(622601);
function x(e) {
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
}
function h(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function g(e) {
    let { className: t, onScheduleChange: n, onRecurrenceChange: l, onTimeChange: g, timeSelected: m = !0, schedule: j, recurrenceRule: p, showEndDate: f = !1, requireEndDate: b = !1, disableStartDateTime: v = !1 } = e;
    if (null == j) return null;
    let _ = null,
        D = j.startDate,
        O = i()(),
        y = i()().add(d.G3, 'days'),
        S = i()().add(d.Ib, 'days');
    null != p && (y.add(d.hn, 'years'), S.add(d.hn, 'years'));
    let k = (e) => {
        n(h(x({}, j), { endDate: e }));
    };
    return (
        f &&
            (_ =
                null != j.endDate || b
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsxs)('div', {
                                  className: u.doubleInput,
                                  children: [
                                      (0, r.jsx)(s.xJW, {
                                          title: o.intl.string(o.t.CTLgZG),
                                          required: b,
                                          children: (0, r.jsx)(s.Wrb, {
                                              value: j.endDate,
                                              onSelect: k,
                                              minDate: j.startDate,
                                              maxDate: S
                                          })
                                      }),
                                      (0, r.jsx)(s.xJW, {
                                          title: o.intl.string(o.t.j2RuXF),
                                          required: b,
                                          children: (0, r.jsx)(s.MGJ, {
                                              value: j.endDate,
                                              onChange: k
                                          })
                                      })
                                  ]
                              }),
                              b
                                  ? null
                                  : (0, r.jsx)(a.zx, {
                                        onClick: () => {
                                            k(void 0);
                                        },
                                        look: a.zx.Looks.BLANK,
                                        size: a.zx.Sizes.MIN,
                                        children: (0, r.jsxs)('div', {
                                            className: u.link,
                                            children: [
                                                (0, r.jsx)(s.k$p, {
                                                    size: 'custom',
                                                    color: 'currentColor',
                                                    width: 17,
                                                    height: 17,
                                                    className: u.removeIcon
                                                }),
                                                (0, r.jsx)(s.Text, {
                                                    variant: 'text-sm/normal',
                                                    children: o.intl.string(o.t.petdfn)
                                                })
                                            ]
                                        })
                                    })
                          ]
                      })
                    : (0, r.jsx)(a.zx, {
                          look: a.zx.Looks.BLANK,
                          size: a.zx.Sizes.MIN,
                          onClick: () => {
                              k(i()(j.startDate).add(1, 'hour'));
                          },
                          children: (0, r.jsxs)('div', {
                              className: u.link,
                              children: [
                                  (0, r.jsx)(s.oFk, {
                                      size: 'custom',
                                      color: 'currentColor',
                                      width: 20,
                                      height: 20,
                                      className: u.addIcon
                                  }),
                                  (0, r.jsx)(s.Text, {
                                      variant: 'text-sm/normal',
                                      children: o.intl.string(o.t.ncdPcn)
                                  })
                              ]
                          })
                      })),
        (0, r.jsxs)('div', {
            className: t,
            children: [
                (0, r.jsxs)('div', {
                    className: u.doubleInput,
                    children: [
                        (0, r.jsx)(s.xJW, {
                            title: o.intl.string(o.t.kKOIwM),
                            required: !0,
                            children: (0, r.jsx)(s.Wrb, {
                                value: j.startDate,
                                onSelect: (e) => {
                                    n(h(x({}, j), { startDate: e }));
                                },
                                minDate: O,
                                maxDate: y,
                                disabled: v
                            })
                        }),
                        (0, r.jsx)(s.xJW, {
                            title: o.intl.string(o.t['6dGmCA']),
                            required: !0,
                            children: (0, r.jsx)(s.MGJ, {
                                value: j.startDate,
                                onChange: (e) => {
                                    e.isValid() && (null == g || g(!0), n(h(x({}, j), { startDate: e })));
                                },
                                hideValue: !m,
                                disabled: v
                            })
                        })
                    ]
                }),
                _,
                null != D &&
                    null != l &&
                    (0, r.jsx)(c.Z, {
                        onRecurrenceChange: l,
                        startDate: D,
                        recurrenceRule: p
                    })
            ]
        })
    );
}
