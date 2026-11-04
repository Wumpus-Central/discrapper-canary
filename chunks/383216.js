t.d(n, { A: () => m });
var l = t(477900),
    a = t(582128),
    s = t(536637),
    i = t.n(s),
    r = t(582306),
    d = t(201895),
    u = t(123292),
    c = t(696986),
    o = t(974930),
    x = t(691885),
    h = t(792996);
function g(e) {
    let { startDate: n, recurrenceRule: t, onRecurrenceChange: s } = e,
        i = a.useMemo(() => (0, o.z7)(n, t), [t, n]),
        r = (0, o.Xx)(n);
    return (0, l.jsx)(x.l, {
        label: h.intl.string(h.t["59TVxL"]),
        required: !0,
        placeholder: "gaming",
        options: r,
        onSelectionChange: s,
        value: i,
        selectionMode: "single",
        fullWidth: !0,
    });
}
var j = t(836175);
function m(e) {
    let {
        className: n,
        onScheduleChange: t,
        onRecurrenceChange: a,
        onTimeChange: s,
        timeSelected: o = !0,
        schedule: x,
        recurrenceRule: m,
        showEndDate: D = !1,
        requireEndDate: v = !1,
        disableStartDateTime: f = !1,
    } = e;
    if (null == x) return null;
    let p = null,
        C = x.startDate,
        b = i()(),
        k = i()().add(365, "days"),
        q = i()().add(366, "days");
    function z(e) {
        t({ ...x, endDate: e });
    }
    return (
        null != m && (k.add(4, "years"), q.add(4, "years")),
        D &&
            (p =
                null != x.endDate || v
                    ? (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsxs)("div", {
                                  className: j.U,
                                  children: [
                                      (0, l.jsx)(r.J, {
                                          label: h.intl.string(h.t.CTLgZJ),
                                          required: v,
                                          value: x.endDate,
                                          onSelect: z,
                                          minDate: x.startDate,
                                          maxDate: q,
                                      }),
                                      (0, l.jsx)(d.c, {
                                          label: h.intl.string(h.t.j2RuXF),
                                          required: v,
                                          value: x.endDate,
                                          onChange: z,
                                      }),
                                  ],
                              }),
                              v
                                  ? null
                                  : (0, l.jsxs)(l.Fragment, {
                                        children: [
                                            (0, l.jsx)(u.Q, {
                                                onClick: function () {
                                                    z(void 0);
                                                },
                                                text: h.intl.string(h.t.petdfk),
                                                size: "sm",
                                            }),
                                            (0, l.jsx)(c.h, { size: 24 }),
                                        ],
                                    }),
                          ],
                      })
                    : (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)(u.Q, {
                                  onClick: function () {
                                      z(i()(x.startDate).add(1, "hour"));
                                  },
                                  text: h.intl.string(h.t.ncdPcn),
                                  size: "sm",
                              }),
                              (0, l.jsx)(c.h, { size: 24 }),
                          ],
                      })),
        (0, l.jsxs)("div", {
            className: n,
            children: [
                (0, l.jsxs)("div", {
                    className: j.U,
                    children: [
                        (0, l.jsx)(r.J, {
                            label: h.intl.string(h.t.kKOIwJ),
                            required: !0,
                            value: x.startDate,
                            onSelect: function (e) {
                                t({ ...x, startDate: e });
                            },
                            minDate: b,
                            maxDate: k,
                            disabled: f,
                        }),
                        (0, l.jsx)(d.c, {
                            label: h.intl.string(h.t["6dGmCD"]),
                            required: !0,
                            value: x.startDate,
                            onChange: function (e) {
                                e.isValid() && (s?.(!0), t({ ...x, startDate: e }));
                            },
                            hideValue: !o,
                            disabled: f,
                        }),
                    ],
                }),
                p,
                null != C && null != a && (0, l.jsx)(g, { onRecurrenceChange: a, startDate: C, recurrenceRule: m }),
            ],
        })
    );
}
