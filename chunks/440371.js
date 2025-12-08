n.d(t, { Z: () => m });
var l = n(54381);
n(473749);
var r = n(913527),
    i = n.n(r),
    a = n(481060),
    s = n(854698),
    o = n(401876),
    c = n(388032),
    u = n(647876);
function d(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            l.forEach(function (t) {
                var l;
                (l = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = l);
            });
    }
    return e;
}
function g(e, t) {
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
function m(e) {
    let {
        className: t,
        onScheduleChange: n,
        onRecurrenceChange: r,
        onTimeChange: m,
        timeSelected: x = !0,
        schedule: h,
        recurrenceRule: v,
        showEndDate: p = !1,
        requireEndDate: f = !1,
        disableStartDateTime: j = !1,
    } = e;
    if (null == h) return null;
    let b = null,
        y = h.startDate,
        O = i()(),
        E = i()().add(s.G3, "days"),
        N = i()().add(s.Ib, "days");
    null != v && (E.add(s.hn, "years"), N.add(s.hn, "years"));
    let C = (e) => {
        n(g(d({}, h), { endDate: e }));
    };
    return (
        p &&
            (b =
                null != h.endDate || f
                    ? (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsxs)("div", {
                                  className: u.doubleInput,
                                  children: [
                                      (0, l.jsx)(a.Wrb, {
                                          label: c.intl.string(c.t.CTLgZJ),
                                          required: f,
                                          value: h.endDate,
                                          onSelect: C,
                                          minDate: h.startDate,
                                          maxDate: N,
                                      }),
                                      (0, l.jsx)(a.MGJ, {
                                          label: c.intl.string(c.t.j2RuXF),
                                          required: f,
                                          value: h.endDate,
                                          onChange: C,
                                      }),
                                  ],
                              }),
                              f
                                  ? null
                                  : (0, l.jsxs)(l.Fragment, {
                                        children: [
                                            (0, l.jsx)(a.Avr, {
                                                onClick: () => {
                                                    C(void 0);
                                                },
                                                text: c.intl.string(c.t.petdfk),
                                                size: "sm",
                                            }),
                                            (0, l.jsx)(a.LZC, { size: 24 }),
                                        ],
                                    }),
                          ],
                      })
                    : (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)(a.Avr, {
                                  onClick: () => {
                                      C(i()(h.startDate).add(1, "hour"));
                                  },
                                  text: c.intl.string(c.t.ncdPcn),
                                  size: "sm",
                              }),
                              (0, l.jsx)(a.LZC, { size: 24 }),
                          ],
                      })),
        (0, l.jsxs)("div", {
            className: t,
            children: [
                (0, l.jsxs)("div", {
                    className: u.doubleInput,
                    children: [
                        (0, l.jsx)(a.Wrb, {
                            label: c.intl.string(c.t.kKOIwJ),
                            required: !0,
                            value: h.startDate,
                            onSelect: (e) => {
                                n(g(d({}, h), { startDate: e }));
                            },
                            minDate: O,
                            maxDate: E,
                            disabled: j,
                        }),
                        (0, l.jsx)(a.MGJ, {
                            label: c.intl.string(c.t["6dGmCD"]),
                            required: !0,
                            value: h.startDate,
                            onChange: (e) => {
                                e.isValid() && (null == m || m(!0), n(g(d({}, h), { startDate: e })));
                            },
                            hideValue: !x,
                            disabled: j,
                        }),
                    ],
                }),
                b,
                null != y &&
                    null != r &&
                    (0, l.jsx)(o.Z, {
                        onRecurrenceChange: r,
                        startDate: y,
                        recurrenceRule: v,
                    }),
            ],
        })
    );
}
