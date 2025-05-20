r.d(t, { Z: () => j });
var n = r(255367);
r(73800);
var l = r(913527),
    s = r.n(l),
    i = r(481060),
    c = r(854698),
    a = r(401876),
    o = r(388032),
    d = r(622601);
function u(e) {
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
}
function x(e, t) {
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
function j(e) {
    let { className: t, onScheduleChange: r, onRecurrenceChange: l, onTimeChange: j, timeSelected: h = !0, schedule: m, recurrenceRule: b, showEndDate: g = !1, requireEndDate: p = !1, disableStartDateTime: f = !1 } = e;
    if (null == m) return null;
    let v = null,
        O = m.startDate,
        y = s()(),
        k = s()().add(c.G3, 'days'),
        P = s()().add(c.Ib, 'days');
    null != b && (k.add(c.hn, 'years'), P.add(c.hn, 'years'));
    let Z = (e) => {
        r(x(u({}, m), { endDate: e }));
    };
    return (
        g &&
            (v =
                null != m.endDate || p
                    ? (0, n.jsxs)(n.Fragment, {
                          children: [
                              (0, n.jsxs)('div', {
                                  className: d.doubleInput,
                                  children: [
                                      (0, n.jsx)(i.xJW, {
                                          title: o.intl.string(o.t.CTLgZG),
                                          required: p,
                                          children: (0, n.jsx)(i.Wrb, {
                                              value: m.endDate,
                                              onSelect: Z,
                                              minDate: m.startDate,
                                              maxDate: P
                                          })
                                      }),
                                      (0, n.jsx)(i.xJW, {
                                          title: o.intl.string(o.t.j2RuXF),
                                          required: p,
                                          children: (0, n.jsx)(i.MGJ, {
                                              value: m.endDate,
                                              onChange: Z
                                          })
                                      })
                                  ]
                              }),
                              p
                                  ? null
                                  : (0, n.jsx)(i.zxk, {
                                        onClick: () => {
                                            Z(void 0);
                                        },
                                        look: i.zxk.Looks.BLANK,
                                        size: i.zxk.Sizes.MIN,
                                        children: (0, n.jsxs)('div', {
                                            className: d.link,
                                            children: [
                                                (0, n.jsx)(i.k$p, {
                                                    size: 'custom',
                                                    color: 'currentColor',
                                                    width: 17,
                                                    height: 17,
                                                    className: d.removeIcon
                                                }),
                                                (0, n.jsx)(i.Text, {
                                                    variant: 'text-sm/normal',
                                                    children: o.intl.string(o.t.petdfn)
                                                })
                                            ]
                                        })
                                    })
                          ]
                      })
                    : (0, n.jsx)(i.zxk, {
                          look: i.zxk.Looks.BLANK,
                          size: i.zxk.Sizes.MIN,
                          onClick: () => {
                              Z(s()(m.startDate).add(1, 'hour'));
                          },
                          children: (0, n.jsxs)('div', {
                              className: d.link,
                              children: [
                                  (0, n.jsx)(i.oFk, {
                                      size: 'custom',
                                      color: 'currentColor',
                                      width: 20,
                                      height: 20,
                                      className: d.addIcon
                                  }),
                                  (0, n.jsx)(i.Text, {
                                      variant: 'text-sm/normal',
                                      children: o.intl.string(o.t.ncdPcn)
                                  })
                              ]
                          })
                      })),
        (0, n.jsxs)('div', {
            className: t,
            children: [
                (0, n.jsxs)('div', {
                    className: d.doubleInput,
                    children: [
                        (0, n.jsx)(i.xJW, {
                            title: o.intl.string(o.t.kKOIwM),
                            required: !0,
                            children: (0, n.jsx)(i.Wrb, {
                                value: m.startDate,
                                onSelect: (e) => {
                                    r(x(u({}, m), { startDate: e }));
                                },
                                minDate: y,
                                maxDate: k,
                                disabled: f
                            })
                        }),
                        (0, n.jsx)(i.xJW, {
                            title: o.intl.string(o.t['6dGmCA']),
                            required: !0,
                            children: (0, n.jsx)(i.MGJ, {
                                value: m.startDate,
                                onChange: (e) => {
                                    e.isValid() && (null == j || j(!0), r(x(u({}, m), { startDate: e })));
                                },
                                hideValue: !h,
                                disabled: f
                            })
                        })
                    ]
                }),
                v,
                null != O &&
                    null != l &&
                    (0, n.jsx)(a.Z, {
                        onRecurrenceChange: l,
                        startDate: O,
                        recurrenceRule: b
                    })
            ]
        })
    );
}
