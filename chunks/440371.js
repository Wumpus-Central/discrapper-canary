n.d(t, { Z: () => g });
var r = n(951288);
n(647438);
var l = n(913527),
    i = n.n(l),
    a = n(481060),
    s = n(954313),
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
function x(e, t) {
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
    let {
        className: t,
        onScheduleChange: n,
        onRecurrenceChange: l,
        onTimeChange: g,
        timeSelected: m = !0,
        schedule: v,
        recurrenceRule: h,
        showEndDate: j = !1,
        requireEndDate: p = !1,
        disableStartDateTime: f = !1,
    } = e;
    if (null == v) return null;
    let b = null,
        y = v.startDate,
        O = i()(),
        E = i()().add(s.G3, "days"),
        C = i()().add(s.Ib, "days");
    null != h && (E.add(s.hn, "years"), C.add(s.hn, "years"));
    let N = (e) => {
        n(x(d({}, v), { endDate: e }));
    };
    return (
        j &&
            (b =
                null != v.endDate || p
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsxs)("div", {
                                  className: u.doubleInput,
                                  children: [
                                      (0, r.jsx)(a.Wrb, {
                                          label: c.intl.string(c.t.CTLgZG),
                                          required: p,
                                          value: v.endDate,
                                          onSelect: N,
                                          minDate: v.startDate,
                                          maxDate: C,
                                      }),
                                      (0, r.jsx)(a.MGJ, {
                                          label: c.intl.string(c.t.j2RuXF),
                                          required: p,
                                          value: v.endDate,
                                          onChange: N,
                                      }),
                                  ],
                              }),
                              p
                                  ? null
                                  : (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (0, r.jsx)(a.Avr, {
                                                onClick: () => {
                                                    N(void 0);
                                                },
                                                text: c.intl.string(c.t.petdfn),
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
                                      N(i()(v.startDate).add(1, "hour"));
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
                            label: c.intl.string(c.t.kKOIwM),
                            required: !0,
                            value: v.startDate,
                            onSelect: (e) => {
                                n(x(d({}, v), { startDate: e }));
                            },
                            minDate: O,
                            maxDate: E,
                            disabled: f,
                        }),
                        (0, r.jsx)(a.MGJ, {
                            label: c.intl.string(c.t["6dGmCA"]),
                            required: !0,
                            value: v.startDate,
                            onChange: (e) => {
                                e.isValid() && (null == g || g(!0), n(x(d({}, v), { startDate: e })));
                            },
                            hideValue: !m,
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
                        recurrenceRule: h,
                    }),
            ],
        })
    );
}
