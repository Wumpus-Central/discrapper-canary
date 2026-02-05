n.d(t, { A: () => u });
var l = n(627968);
n(64700);
var i = n(989349),
    s = n.n(i),
    a = n(397927),
    r = n(974930),
    d = n(280871),
    c = n(985018),
    o = n(659621);
function u(e) {
    let {
        className: t,
        onScheduleChange: n,
        onRecurrenceChange: i,
        onTimeChange: u,
        timeSelected: x = !0,
        schedule: h,
        recurrenceRule: m,
        showEndDate: g = !1,
        requireEndDate: v = !1,
        disableStartDateTime: j = !1,
    } = e;
    if (null == h) return null;
    let A = null,
        N = h.startDate,
        f = s()(),
        E = s()().add(r.IS, "days"),
        p = s()().add(r.Xy, "days");
    null != m && (E.add(r.Ze, "years"), p.add(r.Ze, "years"));
    let C = (e) => {
        n({ ...h, endDate: e });
    };
    return (
        g &&
            (A =
                null != h.endDate || v
                    ? (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsxs)("div", {
                                  className: o.U,
                                  children: [
                                      (0, l.jsx)(a.J3s, {
                                          label: c.intl.string(c.t.CTLgZJ),
                                          required: v,
                                          value: h.endDate,
                                          onSelect: C,
                                          minDate: h.startDate,
                                          maxDate: p,
                                      }),
                                      (0, l.jsx)(a.czz, {
                                          label: c.intl.string(c.t.j2RuXF),
                                          required: v,
                                          value: h.endDate,
                                          onChange: C,
                                      }),
                                  ],
                              }),
                              v
                                  ? null
                                  : (0, l.jsxs)(l.Fragment, {
                                        children: [
                                            (0, l.jsx)(a.QWc, {
                                                onClick: () => {
                                                    C(void 0);
                                                },
                                                text: c.intl.string(c.t.petdfk),
                                                size: "sm",
                                            }),
                                            (0, l.jsx)(a.hKd, { size: 24 }),
                                        ],
                                    }),
                          ],
                      })
                    : (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)(a.QWc, {
                                  onClick: () => {
                                      C(s()(h.startDate).add(1, "hour"));
                                  },
                                  text: c.intl.string(c.t.ncdPcn),
                                  size: "sm",
                              }),
                              (0, l.jsx)(a.hKd, { size: 24 }),
                          ],
                      })),
        (0, l.jsxs)("div", {
            className: t,
            children: [
                (0, l.jsxs)("div", {
                    className: o.U,
                    children: [
                        (0, l.jsx)(a.J3s, {
                            label: c.intl.string(c.t.kKOIwJ),
                            required: !0,
                            value: h.startDate,
                            onSelect: (e) => {
                                n({ ...h, startDate: e });
                            },
                            minDate: f,
                            maxDate: E,
                            disabled: j,
                        }),
                        (0, l.jsx)(a.czz, {
                            label: c.intl.string(c.t["6dGmCD"]),
                            required: !0,
                            value: h.startDate,
                            onChange: (e) => {
                                e.isValid() && (u?.(!0), n({ ...h, startDate: e }));
                            },
                            hideValue: !x,
                            disabled: j,
                        }),
                    ],
                }),
                A,
                null != N && null != i && (0, l.jsx)(d.A, { onRecurrenceChange: i, startDate: N, recurrenceRule: m }),
            ],
        })
    );
}
