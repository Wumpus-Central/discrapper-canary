n.d(t, { Z: () => h });
var l = n(255367);
n(73800);
var r = n(913527),
    i = n.n(r),
    s = n(481060),
    a = n(854698),
    c = n(401876),
    o = n(388032),
    d = n(622601);
function u(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            l.forEach(function (t) {
                var l;
                (l = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = l);
            });
    }
    return e;
}
function x(e, t) {
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
function h(e) {
    let { className: t, onScheduleChange: n, onRecurrenceChange: r, onTimeChange: h, timeSelected: g = !0, schedule: m, recurrenceRule: f, showEndDate: j = !1, requireEndDate: p = !1, disableStartDateTime: b = !1 } = e;
    if (null == m) return null;
    let _ = null,
        v = m.startDate,
        k = i()(),
        D = i()().add(a.G3, 'days'),
        O = i()().add(a.Ib, 'days');
    null != f && (D.add(a.hn, 'years'), O.add(a.hn, 'years'));
    let y = (e) => {
        n(x(u({}, m), { endDate: e }));
    };
    return (
        j &&
            (_ =
                null != m.endDate || p
                    ? (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsxs)('div', {
                                  className: d.doubleInput,
                                  children: [
                                      (0, l.jsx)(s.xJW, {
                                          title: o.intl.string(o.t.CTLgZG),
                                          required: p,
                                          children: (0, l.jsx)(s.Wrb, {
                                              value: m.endDate,
                                              onSelect: y,
                                              minDate: m.startDate,
                                              maxDate: O
                                          })
                                      }),
                                      (0, l.jsx)(s.xJW, {
                                          title: o.intl.string(o.t.j2RuXF),
                                          required: p,
                                          children: (0, l.jsx)(s.MGJ, {
                                              value: m.endDate,
                                              onChange: y
                                          })
                                      })
                                  ]
                              }),
                              p
                                  ? null
                                  : (0, l.jsx)(s.zxk, {
                                        onClick: () => {
                                            y(void 0);
                                        },
                                        look: s.zxk.Looks.BLANK,
                                        size: s.zxk.Sizes.MIN,
                                        children: (0, l.jsxs)('div', {
                                            className: d.link,
                                            children: [
                                                (0, l.jsx)(s.k$p, {
                                                    size: 'custom',
                                                    color: 'currentColor',
                                                    width: 17,
                                                    height: 17,
                                                    className: d.removeIcon
                                                }),
                                                (0, l.jsx)(s.Text, {
                                                    variant: 'text-sm/normal',
                                                    children: o.intl.string(o.t.petdfn)
                                                })
                                            ]
                                        })
                                    })
                          ]
                      })
                    : (0, l.jsx)(s.zxk, {
                          look: s.zxk.Looks.BLANK,
                          size: s.zxk.Sizes.MIN,
                          onClick: () => {
                              y(i()(m.startDate).add(1, 'hour'));
                          },
                          children: (0, l.jsxs)('div', {
                              className: d.link,
                              children: [
                                  (0, l.jsx)(s.oFk, {
                                      size: 'custom',
                                      color: 'currentColor',
                                      width: 20,
                                      height: 20,
                                      className: d.addIcon
                                  }),
                                  (0, l.jsx)(s.Text, {
                                      variant: 'text-sm/normal',
                                      children: o.intl.string(o.t.ncdPcn)
                                  })
                              ]
                          })
                      })),
        (0, l.jsxs)('div', {
            className: t,
            children: [
                (0, l.jsxs)('div', {
                    className: d.doubleInput,
                    children: [
                        (0, l.jsx)(s.xJW, {
                            title: o.intl.string(o.t.kKOIwM),
                            required: !0,
                            children: (0, l.jsx)(s.Wrb, {
                                value: m.startDate,
                                onSelect: (e) => {
                                    n(x(u({}, m), { startDate: e }));
                                },
                                minDate: k,
                                maxDate: D,
                                disabled: b
                            })
                        }),
                        (0, l.jsx)(s.xJW, {
                            title: o.intl.string(o.t['6dGmCA']),
                            required: !0,
                            children: (0, l.jsx)(s.MGJ, {
                                value: m.startDate,
                                onChange: (e) => {
                                    e.isValid() && (null == h || h(!0), n(x(u({}, m), { startDate: e })));
                                },
                                hideValue: !g,
                                disabled: b
                            })
                        })
                    ]
                }),
                _,
                null != v &&
                    null != r &&
                    (0, l.jsx)(c.Z, {
                        onRecurrenceChange: r,
                        startDate: v,
                        recurrenceRule: f
                    })
            ]
        })
    );
}
