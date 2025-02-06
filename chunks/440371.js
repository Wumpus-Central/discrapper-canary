t.d(n, { Z: () => u });
var l = t(200651);
t(192379);
var i = t(913527),
    a = t.n(i),
    r = t(481060),
    s = t(854698),
    o = t(401876),
    c = t(388032),
    d = t(297229);
function u(e) {
    let { className: n, onScheduleChange: t, onRecurrenceChange: i, onTimeChange: u, timeSelected: m = !0, schedule: _, recurrenceRule: x, showEndDate: h = !1, requireEndDate: g = !1, disableStartDateTime: v = !1 } = e;
    if (null == _) return null;
    let b = null,
        j = _.startDate,
        N = a()(),
        f = a()().add(s.G3, 'days'),
        I = a()().add(s.Ib, 'days');
    null != x && (f.add(s.hn, 'years'), I.add(s.hn, 'years'));
    let C = (e) => {
        t({
            ..._,
            endDate: e
        });
    };
    return (
        h &&
            (b =
                null != _.endDate || g
                    ? (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsxs)('div', {
                                  className: d.doubleInput,
                                  children: [
                                      (0, l.jsx)(r.xJW, {
                                          title: c.intl.string(c.t.CTLgZG),
                                          required: g,
                                          children: (0, l.jsx)(r.Wrb, {
                                              value: _.endDate,
                                              onSelect: C,
                                              minDate: _.startDate,
                                              maxDate: I
                                          })
                                      }),
                                      (0, l.jsx)(r.xJW, {
                                          title: c.intl.string(c.t.j2RuXF),
                                          required: g,
                                          children: (0, l.jsx)(r.MGJ, {
                                              value: _.endDate,
                                              onChange: C
                                          })
                                      })
                                  ]
                              }),
                              g
                                  ? null
                                  : (0, l.jsx)(r.zxk, {
                                        onClick: () => {
                                            C(void 0);
                                        },
                                        look: r.zxk.Looks.BLANK,
                                        size: r.zxk.Sizes.MIN,
                                        children: (0, l.jsxs)('div', {
                                            className: d.link,
                                            children: [
                                                (0, l.jsx)(r.k$p, {
                                                    size: 'custom',
                                                    color: 'currentColor',
                                                    width: 17,
                                                    height: 17,
                                                    className: d.removeIcon
                                                }),
                                                (0, l.jsx)(r.Text, {
                                                    variant: 'text-sm/normal',
                                                    children: c.intl.string(c.t.petdfn)
                                                })
                                            ]
                                        })
                                    })
                          ]
                      })
                    : (0, l.jsx)(r.zxk, {
                          look: r.zxk.Looks.BLANK,
                          size: r.zxk.Sizes.MIN,
                          onClick: () => {
                              C(a()(_.startDate).add(1, 'hour'));
                          },
                          children: (0, l.jsxs)('div', {
                              className: d.link,
                              children: [
                                  (0, l.jsx)(r.oFk, {
                                      size: 'custom',
                                      color: 'currentColor',
                                      width: 20,
                                      height: 20,
                                      className: d.addIcon
                                  }),
                                  (0, l.jsx)(r.Text, {
                                      variant: 'text-sm/normal',
                                      children: c.intl.string(c.t.ncdPcn)
                                  })
                              ]
                          })
                      })),
        (0, l.jsxs)('div', {
            className: n,
            children: [
                (0, l.jsxs)('div', {
                    className: d.doubleInput,
                    children: [
                        (0, l.jsx)(r.xJW, {
                            title: c.intl.string(c.t.kKOIwM),
                            required: !0,
                            children: (0, l.jsx)(r.Wrb, {
                                value: _.startDate,
                                onSelect: (e) => {
                                    t({
                                        ..._,
                                        startDate: e
                                    });
                                },
                                minDate: N,
                                maxDate: f,
                                disabled: v
                            })
                        }),
                        (0, l.jsx)(r.xJW, {
                            title: c.intl.string(c.t['6dGmCA']),
                            required: !0,
                            children: (0, l.jsx)(r.MGJ, {
                                value: _.startDate,
                                onChange: (e) => {
                                    e.isValid() &&
                                        (null == u || u(!0),
                                        t({
                                            ..._,
                                            startDate: e
                                        }));
                                },
                                hideValue: !m,
                                disabled: v
                            })
                        })
                    ]
                }),
                b,
                null != j &&
                    null != i &&
                    (0, l.jsx)(o.Z, {
                        onRecurrenceChange: i,
                        startDate: j,
                        recurrenceRule: x
                    })
            ]
        })
    );
}
