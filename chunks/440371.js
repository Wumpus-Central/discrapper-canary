r.d(t, { Z: () => m });
var n = r(255367);
r(73800);
var l = r(913527),
    s = r.n(l),
    i = r(755721),
    c = r(481060),
    a = r(854698),
    o = r(401876),
    d = r(388032),
    u = r(622601);
function x(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                })
            )),
            n.forEach(function (t) {
                var n;
                ((n = r[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = n));
            }));
    }
    return e;
}
function j(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, n);
                  }
                  return r;
              })(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
              }),
        e
    );
}
function m(e) {
    let { className: t, onScheduleChange: r, onRecurrenceChange: l, onTimeChange: m, timeSelected: h = !0, schedule: b, recurrenceRule: g, showEndDate: p = !1, requireEndDate: v = !1, disableStartDateTime: f = !1 } = e;
    if (null == b) return null;
    let y = null,
        O = b.startDate,
        P = s()(),
        k = s()().add(a.G3, 'days'),
        N = s()().add(a.Ib, 'days');
    null != g && (k.add(a.hn, 'years'), N.add(a.hn, 'years'));
    let w = (e) => {
        r(j(x({}, b), { endDate: e }));
    };
    return (
        p &&
            (y =
                null != b.endDate || v
                    ? (0, n.jsxs)(n.Fragment, {
                          children: [
                              (0, n.jsxs)('div', {
                                  className: u.doubleInput,
                                  children: [
                                      (0, n.jsx)(c.xJW, {
                                          title: d.intl.string(d.t.CTLgZG),
                                          required: v,
                                          children: (0, n.jsx)(c.Wrb, {
                                              value: b.endDate,
                                              onSelect: w,
                                              minDate: b.startDate,
                                              maxDate: N
                                          })
                                      }),
                                      (0, n.jsx)(c.xJW, {
                                          title: d.intl.string(d.t.j2RuXF),
                                          required: v,
                                          children: (0, n.jsx)(c.MGJ, {
                                              value: b.endDate,
                                              onChange: w
                                          })
                                      })
                                  ]
                              }),
                              v
                                  ? null
                                  : (0, n.jsx)(i.zx, {
                                        onClick: () => {
                                            w(void 0);
                                        },
                                        look: i.zx.Looks.BLANK,
                                        size: i.zx.Sizes.MIN,
                                        children: (0, n.jsxs)('div', {
                                            className: u.link,
                                            children: [
                                                (0, n.jsx)(c.k$p, {
                                                    size: 'custom',
                                                    color: 'currentColor',
                                                    width: 17,
                                                    height: 17,
                                                    className: u.removeIcon
                                                }),
                                                (0, n.jsx)(c.Text, {
                                                    variant: 'text-sm/normal',
                                                    children: d.intl.string(d.t.petdfn)
                                                })
                                            ]
                                        })
                                    })
                          ]
                      })
                    : (0, n.jsx)(i.zx, {
                          look: i.zx.Looks.BLANK,
                          size: i.zx.Sizes.MIN,
                          onClick: () => {
                              w(s()(b.startDate).add(1, 'hour'));
                          },
                          children: (0, n.jsxs)('div', {
                              className: u.link,
                              children: [
                                  (0, n.jsx)(c.oFk, {
                                      size: 'custom',
                                      color: 'currentColor',
                                      width: 20,
                                      height: 20,
                                      className: u.addIcon
                                  }),
                                  (0, n.jsx)(c.Text, {
                                      variant: 'text-sm/normal',
                                      children: d.intl.string(d.t.ncdPcn)
                                  })
                              ]
                          })
                      })),
        (0, n.jsxs)('div', {
            className: t,
            children: [
                (0, n.jsxs)('div', {
                    className: u.doubleInput,
                    children: [
                        (0, n.jsx)(c.xJW, {
                            title: d.intl.string(d.t.kKOIwM),
                            required: !0,
                            children: (0, n.jsx)(c.Wrb, {
                                value: b.startDate,
                                onSelect: (e) => {
                                    r(j(x({}, b), { startDate: e }));
                                },
                                minDate: P,
                                maxDate: k,
                                disabled: f
                            })
                        }),
                        (0, n.jsx)(c.xJW, {
                            title: d.intl.string(d.t['6dGmCA']),
                            required: !0,
                            children: (0, n.jsx)(c.MGJ, {
                                value: b.startDate,
                                onChange: (e) => {
                                    e.isValid() && (null == m || m(!0), r(j(x({}, b), { startDate: e })));
                                },
                                hideValue: !h,
                                disabled: f
                            })
                        })
                    ]
                }),
                y,
                null != O &&
                    null != l &&
                    (0, n.jsx)(o.Z, {
                        onRecurrenceChange: l,
                        startDate: O,
                        recurrenceRule: g
                    })
            ]
        })
    );
}
