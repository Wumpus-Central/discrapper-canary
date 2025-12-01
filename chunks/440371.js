n.d(t, { Z: () => m });
var r = n(54381);
n(473749);
var l = n(913527),
    i = n.n(l),
    a = n(481060),
    s = n(854698),
    o = n(401876),
    c = n(388032),
    u = n(647876);
function d(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
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
function m(e) {
    let {
        className: t,
        onScheduleChange: n,
        onRecurrenceChange: l,
        onTimeChange: m,
        timeSelected: x = !0,
        schedule: h,
        recurrenceRule: v,
        showEndDate: p = !1,
        requireEndDate: j = !1,
        disableStartDateTime: f = !1,
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
                null != h.endDate || j
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsxs)("div", {
                                  className: u.doubleInput,
                                  children: [
                                      (0, r.jsx)(a.Wrb, {
                                          label: c.intl.string(c.t.CTLgZJ),
                                          required: j,
                                          value: h.endDate,
                                          onSelect: C,
                                          minDate: h.startDate,
                                          maxDate: N,
                                      }),
                                      (0, r.jsx)(a.MGJ, {
                                          label: c.intl.string(c.t.j2RuXF),
                                          required: j,
                                          value: h.endDate,
                                          onChange: C,
                                      }),
                                  ],
                              }),
                              j
                                  ? null
                                  : (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (0, r.jsx)(a.Avr, {
                                                onClick: () => {
                                                    C(void 0);
                                                },
                                                text: c.intl.string(c.t.petdfk),
                                                size: "sm",
                                            }),
                                            (0, r.jsx)(a.LZC, { size: 24 }),
                                        ],
                                    }),
                          ],
                      })
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(a.Avr, {
                                  onClick: () => {
                                      C(i()(h.startDate).add(1, "hour"));
                                  },
                                  text: c.intl.string(c.t.ncdPcn),
                                  size: "sm",
                              }),
                              (0, r.jsx)(a.LZC, { size: 24 }),
                          ],
                      })),
        (0, r.jsxs)("div", {
            className: t,
            children: [
                (0, r.jsxs)("div", {
                    className: u.doubleInput,
                    children: [
                        (0, r.jsx)(a.Wrb, {
                            label: c.intl.string(c.t.kKOIwJ),
                            required: !0,
                            value: h.startDate,
                            onSelect: (e) => {
                                n(g(d({}, h), { startDate: e }));
                            },
                            minDate: O,
                            maxDate: E,
                            disabled: f,
                        }),
                        (0, r.jsx)(a.MGJ, {
                            label: c.intl.string(c.t["6dGmCD"]),
                            required: !0,
                            value: h.startDate,
                            onChange: (e) => {
                                e.isValid() && (null == m || m(!0), n(g(d({}, h), { startDate: e })));
                            },
                            hideValue: !x,
                            disabled: f,
                        }),
                    ],
                }),
                b,
                null != y &&
                    null != l &&
                    (0, r.jsx)(o.Z, {
                        onRecurrenceChange: l,
                        startDate: y,
                        recurrenceRule: v,
                    }),
            ],
        })
    );
}
