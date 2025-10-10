n.d(t, { Z: () => p });
var r = n(951288);
n(647438);
var l = n(913527),
    i = n.n(l),
    a = n(481060),
    u = n(954313),
    s = n(401876),
    d = n(388032),
    c = n(647876);
function o(e) {
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
function p(e) {
    let {
        className: t,
        onScheduleChange: n,
        onRecurrenceChange: l,
        onTimeChange: p,
        timeSelected: b = !0,
        schedule: x,
        recurrenceRule: h,
        showEndDate: f = !1,
        requireEndDate: j = !1,
        disableStartDateTime: v = !1,
    } = e;
    if (null == x) return null;
    let m = null,
        D = x.startDate,
        O = i()(),
        y = i()().add(u.G3, "days"),
        _ = i()().add(u.Ib, "days");
    null != h && (y.add(u.hn, "years"), _.add(u.hn, "years"));
    let S = (e) => {
        n(g(o({}, x), { endDate: e }));
    };
    return (
        f &&
            (m =
                null != x.endDate || j
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsxs)("div", {
                                  className: c.doubleInput,
                                  children: [
                                      (0, r.jsx)(a.Wrb, {
                                          label: d.intl.string(d.t.CTLgZG),
                                          required: j,
                                          value: x.endDate,
                                          onSelect: S,
                                          minDate: x.startDate,
                                          maxDate: _,
                                      }),
                                      (0, r.jsx)(a.MGJ, {
                                          label: d.intl.string(d.t.j2RuXF),
                                          required: j,
                                          value: x.endDate,
                                          onChange: S,
                                      }),
                                  ],
                              }),
                              j
                                  ? null
                                  : (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (0, r.jsx)(a.Avr, {
                                                onClick: () => {
                                                    S(void 0);
                                                },
                                                text: d.intl.string(d.t.petdfn),
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
                                      S(i()(x.startDate).add(1, "hour"));
                                  },
                                  text: d.intl.string(d.t.ncdPcn),
                                  size: "sm",
                              }),
                              (0, r.jsx)(a.LZC, { size: 24 }),
                          ],
                      })),
        (0, r.jsxs)("div", {
            className: t,
            children: [
                (0, r.jsxs)("div", {
                    className: c.doubleInput,
                    children: [
                        (0, r.jsx)(a.Wrb, {
                            label: d.intl.string(d.t.kKOIwM),
                            required: !0,
                            value: x.startDate,
                            onSelect: (e) => {
                                n(g(o({}, x), { startDate: e }));
                            },
                            minDate: O,
                            maxDate: y,
                            disabled: v,
                        }),
                        (0, r.jsx)(a.MGJ, {
                            label: d.intl.string(d.t["6dGmCA"]),
                            required: !0,
                            value: x.startDate,
                            onChange: (e) => {
                                e.isValid() && (null == p || p(!0), n(g(o({}, x), { startDate: e })));
                            },
                            hideValue: !b,
                            disabled: v,
                        }),
                    ],
                }),
                m,
                null != D &&
                    null != l &&
                    (0, r.jsx)(s.Z, {
                        onRecurrenceChange: l,
                        startDate: D,
                        recurrenceRule: h,
                    }),
            ],
        })
    );
}
