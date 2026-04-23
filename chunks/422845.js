l.d(t, { A: () => m });
var n = l(627968);
l(64700);
var i = l(989349),
    s = l.n(i),
    a = l(582306),
    r = l(335310),
    d = l(123292),
    o = l(696986),
    c = l(974930),
    u = l(280871),
    x = l(985018),
    h = l(184248);
function m(e) {
    let {
        className: t,
        onScheduleChange: l,
        onRecurrenceChange: i,
        onTimeChange: m,
        timeSelected: g = !0,
        schedule: v,
        recurrenceRule: j,
        showEndDate: A = !1,
        requireEndDate: E = !1,
        disableStartDateTime: p = !1,
    } = e;
    if (null == v) return null;
    let f = null,
        N = v.startDate,
        C = s()(),
        y = s()().add(c.IS, "days"),
        b = s()().add(c.Xy, "days");
    null != j && (y.add(c.Ze, "years"), b.add(c.Ze, "years"));
    let S = (e) => {
        l({ ...v, endDate: e });
    };
    return (
        A &&
            (f =
                null != v.endDate || E
                    ? (0, n.jsxs)(n.Fragment, {
                          children: [
                              (0, n.jsxs)("div", {
                                  className: h.U,
                                  children: [
                                      (0, n.jsx)(a.J, {
                                          label: x.intl.string(x.t.CTLgZJ),
                                          required: E,
                                          value: v.endDate,
                                          onSelect: S,
                                          minDate: v.startDate,
                                          maxDate: b,
                                      }),
                                      (0, n.jsx)(r.c, {
                                          label: x.intl.string(x.t.j2RuXF),
                                          required: E,
                                          value: v.endDate,
                                          onChange: S,
                                      }),
                                  ],
                              }),
                              E
                                  ? null
                                  : (0, n.jsxs)(n.Fragment, {
                                        children: [
                                            (0, n.jsx)(d.Q, {
                                                onClick: () => {
                                                    S(void 0);
                                                },
                                                text: x.intl.string(x.t.petdfk),
                                                size: "sm",
                                            }),
                                            (0, n.jsx)(o.h, { size: 24 }),
                                        ],
                                    }),
                          ],
                      })
                    : (0, n.jsxs)(n.Fragment, {
                          children: [
                              (0, n.jsx)(d.Q, {
                                  onClick: () => {
                                      S(s()(v.startDate).add(1, "hour"));
                                  },
                                  text: x.intl.string(x.t.ncdPcn),
                                  size: "sm",
                              }),
                              (0, n.jsx)(o.h, { size: 24 }),
                          ],
                      })),
        (0, n.jsxs)("div", {
            className: t,
            children: [
                (0, n.jsxs)("div", {
                    className: h.U,
                    children: [
                        (0, n.jsx)(a.J, {
                            label: x.intl.string(x.t.kKOIwJ),
                            required: !0,
                            value: v.startDate,
                            onSelect: (e) => {
                                l({ ...v, startDate: e });
                            },
                            minDate: C,
                            maxDate: y,
                            disabled: p,
                        }),
                        (0, n.jsx)(r.c, {
                            label: x.intl.string(x.t["6dGmCD"]),
                            required: !0,
                            value: v.startDate,
                            onChange: (e) => {
                                e.isValid() && (m?.(!0), l({ ...v, startDate: e }));
                            },
                            hideValue: !g,
                            disabled: p,
                        }),
                    ],
                }),
                f,
                null != N && null != i && (0, n.jsx)(u.A, { onRecurrenceChange: i, startDate: N, recurrenceRule: j }),
            ],
        })
    );
}
