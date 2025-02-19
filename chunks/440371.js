r.d(t, { Z: () => j });
var n = r(200651);
r(192379);
var s = r(913527),
    l = r.n(s),
    i = r(481060),
    c = r(854698),
    o = r(401876),
    a = r(388032),
    d = r(732488);
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
    let { className: t, onScheduleChange: r, onRecurrenceChange: s, onTimeChange: j, timeSelected: m = !0, schedule: h, recurrenceRule: b, showEndDate: g = !1, requireEndDate: p = !1, disableStartDateTime: f = !1 } = e;
    if (null == h) return null;
    let v = null,
        N = h.startDate,
        y = l()(),
        O = l()().add(c.G3, 'days'),
        k = l()().add(c.Ib, 'days');
    null != b && (O.add(c.hn, 'years'), k.add(c.hn, 'years'));
    let P = (e) => {
        r(x(u({}, h), { endDate: e }));
    };
    return (
        g &&
            (v =
                null != h.endDate || p
                    ? (0, n.jsxs)(n.Fragment, {
                          children: [
                              (0, n.jsxs)('div', {
                                  className: d.doubleInput,
                                  children: [
                                      (0, n.jsx)(i.xJW, {
                                          title: a.NW.string(a.t.CTLgZG),
                                          required: p,
                                          children: (0, n.jsx)(i.Wrb, {
                                              value: h.endDate,
                                              onSelect: P,
                                              minDate: h.startDate,
                                              maxDate: k
                                          })
                                      }),
                                      (0, n.jsx)(i.xJW, {
                                          title: a.NW.string(a.t.j2RuXF),
                                          required: p,
                                          children: (0, n.jsx)(i.MGJ, {
                                              value: h.endDate,
                                              onChange: P
                                          })
                                      })
                                  ]
                              }),
                              p
                                  ? null
                                  : (0, n.jsx)(i.zxk, {
                                        onClick: () => {
                                            P(void 0);
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
                                                    children: a.NW.string(a.t.petdfn)
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
                              P(l()(h.startDate).add(1, 'hour'));
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
                                      children: a.NW.string(a.t.ncdPcn)
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
                            title: a.NW.string(a.t.kKOIwM),
                            required: !0,
                            children: (0, n.jsx)(i.Wrb, {
                                value: h.startDate,
                                onSelect: (e) => {
                                    r(x(u({}, h), { startDate: e }));
                                },
                                minDate: y,
                                maxDate: O,
                                disabled: f
                            })
                        }),
                        (0, n.jsx)(i.xJW, {
                            title: a.NW.string(a.t['6dGmCA']),
                            required: !0,
                            children: (0, n.jsx)(i.MGJ, {
                                value: h.startDate,
                                onChange: (e) => {
                                    e.isValid() && (null == j || j(!0), r(x(u({}, h), { startDate: e })));
                                },
                                hideValue: !m,
                                disabled: f
                            })
                        })
                    ]
                }),
                v,
                null != N &&
                    null != s &&
                    (0, n.jsx)(o.Z, {
                        onRecurrenceChange: s,
                        startDate: N,
                        recurrenceRule: b
                    })
            ]
        })
    );
}
