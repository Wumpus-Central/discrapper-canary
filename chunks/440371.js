l.d(n, { Z: () => u });
var t = l(200651);
l(192379);
var i = l(913527),
    a = l.n(i),
    r = l(481060),
    s = l(854698),
    o = l(401876),
    d = l(388032),
    c = l(379265);
function u(e) {
    let { className: n, onScheduleChange: l, onRecurrenceChange: i, onTimeChange: u, timeSelected: x = !0, schedule: m, recurrenceRule: h, showEndDate: v = !1, requireEndDate: g = !1, disableStartDateTime: j = !1 } = e;
    if (null == m) return null;
    let N = null,
        f = m.startDate,
        p = a()(),
        E = a()().add(s.G3, 'days'),
        C = a()().add(s.Ib, 'days');
    null != h && (E.add(s.hn, 'years'), C.add(s.hn, 'years'));
    let I = (e) => {
        l({
            ...m,
            endDate: e
        });
    };
    return (
        v &&
            (N =
                null != m.endDate || g
                    ? (0, t.jsxs)(t.Fragment, {
                          children: [
                              (0, t.jsxs)('div', {
                                  className: c.doubleInput,
                                  children: [
                                      (0, t.jsx)(r.xJW, {
                                          title: d.intl.string(d.t.CTLgZG),
                                          required: g,
                                          children: (0, t.jsx)(r.Wrb, {
                                              value: m.endDate,
                                              onSelect: I,
                                              minDate: m.startDate,
                                              maxDate: C
                                          })
                                      }),
                                      (0, t.jsx)(r.xJW, {
                                          title: d.intl.string(d.t.j2RuXF),
                                          required: g,
                                          children: (0, t.jsx)(r.MGJ, {
                                              value: m.endDate,
                                              onChange: I
                                          })
                                      })
                                  ]
                              }),
                              g
                                  ? null
                                  : (0, t.jsx)(r.zxk, {
                                        onClick: () => {
                                            I(void 0);
                                        },
                                        look: r.zxk.Looks.BLANK,
                                        size: r.zxk.Sizes.MIN,
                                        children: (0, t.jsxs)('div', {
                                            className: c.link,
                                            children: [
                                                (0, t.jsx)(r.k$p, {
                                                    size: 'custom',
                                                    color: 'currentColor',
                                                    width: 17,
                                                    height: 17,
                                                    className: c.removeIcon
                                                }),
                                                (0, t.jsx)(r.Text, {
                                                    variant: 'text-sm/normal',
                                                    children: d.intl.string(d.t.petdfn)
                                                })
                                            ]
                                        })
                                    })
                          ]
                      })
                    : (0, t.jsx)(r.zxk, {
                          look: r.zxk.Looks.BLANK,
                          size: r.zxk.Sizes.MIN,
                          onClick: () => {
                              I(a()(m.startDate).add(1, 'hour'));
                          },
                          children: (0, t.jsxs)('div', {
                              className: c.link,
                              children: [
                                  (0, t.jsx)(r.oFk, {
                                      size: 'custom',
                                      color: 'currentColor',
                                      width: 20,
                                      height: 20,
                                      className: c.addIcon
                                  }),
                                  (0, t.jsx)(r.Text, {
                                      variant: 'text-sm/normal',
                                      children: d.intl.string(d.t.ncdPcn)
                                  })
                              ]
                          })
                      })),
        (0, t.jsxs)('div', {
            className: n,
            children: [
                (0, t.jsxs)('div', {
                    className: c.doubleInput,
                    children: [
                        (0, t.jsx)(r.xJW, {
                            title: d.intl.string(d.t.kKOIwM),
                            required: !0,
                            children: (0, t.jsx)(r.Wrb, {
                                value: m.startDate,
                                onSelect: (e) => {
                                    l({
                                        ...m,
                                        startDate: e
                                    });
                                },
                                minDate: p,
                                maxDate: E,
                                disabled: j
                            })
                        }),
                        (0, t.jsx)(r.xJW, {
                            title: d.intl.string(d.t['6dGmCA']),
                            required: !0,
                            children: (0, t.jsx)(r.MGJ, {
                                value: m.startDate,
                                onChange: (e) => {
                                    e.isValid() &&
                                        (null == u || u(!0),
                                        l({
                                            ...m,
                                            startDate: e
                                        }));
                                },
                                hideValue: !x,
                                disabled: j
                            })
                        })
                    ]
                }),
                N,
                null != f &&
                    null != i &&
                    (0, t.jsx)(o.Z, {
                        onRecurrenceChange: i,
                        startDate: f,
                        recurrenceRule: h
                    })
            ]
        })
    );
}
