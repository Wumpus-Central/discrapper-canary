l.d(t, { A: () => x });
var n = l(627968);
l(64700);
var a = l(989349),
    r = l.n(a),
    i = l(582306),
    s = l(335310),
    o = l(123292),
    c = l(696986),
    d = l(974930),
    u = l(280871),
    h = l(985018),
    g = l(184248);
function x(e) {
    let {
        className: t,
        onScheduleChange: l,
        onRecurrenceChange: a,
        onTimeChange: x,
        timeSelected: m = !0,
        schedule: f,
        recurrenceRule: p,
        showEndDate: v = !1,
        requireEndDate: _ = !1,
        disableStartDateTime: j = !1,
    } = e;
    if (null == f) return null;
    let A = null,
        b = f.startDate,
        y = r()(),
        w = r()().add(d.IS, "days"),
        N = r()().add(d.Xy, "days");
    null != p && (w.add(d.Ze, "years"), N.add(d.Ze, "years"));
    let C = (e) => {
        l({ ...f, endDate: e });
    };
    return (
        v &&
            (A =
                null != f.endDate || _
                    ? (0, n.jsxs)(n.Fragment, {
                          children: [
                              (0, n.jsxs)("div", {
                                  className: g.U,
                                  children: [
                                      (0, n.jsx)(i.J, {
                                          label: h.intl.string(h.t.CTLgZJ),
                                          required: _,
                                          value: f.endDate,
                                          onSelect: C,
                                          minDate: f.startDate,
                                          maxDate: N,
                                      }),
                                      (0, n.jsx)(s.c, {
                                          label: h.intl.string(h.t.j2RuXF),
                                          required: _,
                                          value: f.endDate,
                                          onChange: C,
                                      }),
                                  ],
                              }),
                              _
                                  ? null
                                  : (0, n.jsxs)(n.Fragment, {
                                        children: [
                                            (0, n.jsx)(o.Q, {
                                                onClick: () => {
                                                    C(void 0);
                                                },
                                                text: h.intl.string(h.t.petdfk),
                                                size: "sm",
                                            }),
                                            (0, n.jsx)(c.h, { size: 24 }),
                                        ],
                                    }),
                          ],
                      })
                    : (0, n.jsxs)(n.Fragment, {
                          children: [
                              (0, n.jsx)(o.Q, {
                                  onClick: () => {
                                      C(r()(f.startDate).add(1, "hour"));
                                  },
                                  text: h.intl.string(h.t.ncdPcn),
                                  size: "sm",
                              }),
                              (0, n.jsx)(c.h, { size: 24 }),
                          ],
                      })),
        (0, n.jsxs)("div", {
            className: t,
            children: [
                (0, n.jsxs)("div", {
                    className: g.U,
                    children: [
                        (0, n.jsx)(i.J, {
                            label: h.intl.string(h.t.kKOIwJ),
                            required: !0,
                            value: f.startDate,
                            onSelect: (e) => {
                                l({ ...f, startDate: e });
                            },
                            minDate: y,
                            maxDate: w,
                            disabled: j,
                        }),
                        (0, n.jsx)(s.c, {
                            label: h.intl.string(h.t["6dGmCD"]),
                            required: !0,
                            value: f.startDate,
                            onChange: (e) => {
                                e.isValid() && (x?.(!0), l({ ...f, startDate: e }));
                            },
                            hideValue: !m,
                            disabled: j,
                        }),
                    ],
                }),
                A,
                null != b && null != a && (0, n.jsx)(u.A, { onRecurrenceChange: a, startDate: b, recurrenceRule: p }),
            ],
        })
    );
}
