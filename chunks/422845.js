n.d(t, { A: () => x });
var l = n(627968);
n(64700);
var r = n(989349),
    i = n.n(r),
    s = n(397927),
    a = n(974930),
    o = n(280871),
    c = n(985018),
    u = n(659621);
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
function x(e) {
    let {
        className: t,
        onScheduleChange: n,
        onRecurrenceChange: r,
        onTimeChange: x,
        timeSelected: m = !0,
        schedule: h,
        recurrenceRule: j,
        showEndDate: v = !1,
        requireEndDate: p = !1,
        disableStartDateTime: f = !1,
    } = e;
    if (null == h) return null;
    let b = null,
        y = h.startDate,
        O = i()(),
        A = i()().add(a.IS, "days"),
        N = i()().add(a.Xy, "days");
    null != j && (A.add(a.Ze, "years"), N.add(a.Ze, "years"));
    let E = (e) => {
        n(g(d({}, h), { endDate: e }));
    };
    return (
        v &&
            (b =
                null != h.endDate || p
                    ? (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsxs)("div", {
                                  className: u.U,
                                  children: [
                                      (0, l.jsx)(s.J3s, {
                                          label: c.intl.string(c.t.CTLgZJ),
                                          required: p,
                                          value: h.endDate,
                                          onSelect: E,
                                          minDate: h.startDate,
                                          maxDate: N,
                                      }),
                                      (0, l.jsx)(s.czz, {
                                          label: c.intl.string(c.t.j2RuXF),
                                          required: p,
                                          value: h.endDate,
                                          onChange: E,
                                      }),
                                  ],
                              }),
                              p
                                  ? null
                                  : (0, l.jsxs)(l.Fragment, {
                                        children: [
                                            (0, l.jsx)(s.QWc, {
                                                onClick: () => {
                                                    E(void 0);
                                                },
                                                text: c.intl.string(c.t.petdfk),
                                                size: "sm",
                                            }),
                                            (0, l.jsx)(s.hKd, { size: 24 }),
                                        ],
                                    }),
                          ],
                      })
                    : (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)(s.QWc, {
                                  onClick: () => {
                                      E(i()(h.startDate).add(1, "hour"));
                                  },
                                  text: c.intl.string(c.t.ncdPcn),
                                  size: "sm",
                              }),
                              (0, l.jsx)(s.hKd, { size: 24 }),
                          ],
                      })),
        (0, l.jsxs)("div", {
            className: t,
            children: [
                (0, l.jsxs)("div", {
                    className: u.U,
                    children: [
                        (0, l.jsx)(s.J3s, {
                            label: c.intl.string(c.t.kKOIwJ),
                            required: !0,
                            value: h.startDate,
                            onSelect: (e) => {
                                n(g(d({}, h), { startDate: e }));
                            },
                            minDate: O,
                            maxDate: A,
                            disabled: f,
                        }),
                        (0, l.jsx)(s.czz, {
                            label: c.intl.string(c.t["6dGmCD"]),
                            required: !0,
                            value: h.startDate,
                            onChange: (e) => {
                                e.isValid() && (null == x || x(!0), n(g(d({}, h), { startDate: e })));
                            },
                            hideValue: !m,
                            disabled: f,
                        }),
                    ],
                }),
                b,
                null != y &&
                    null != r &&
                    (0, l.jsx)(o.A, {
                        onRecurrenceChange: r,
                        startDate: y,
                        recurrenceRule: j,
                    }),
            ],
        })
    );
}
