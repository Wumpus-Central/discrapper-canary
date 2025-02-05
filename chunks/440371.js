t.d(n, { Z: () => u });
var l = t(200651);
t(192379);
var i = t(913527),
    r = t.n(i),
    a = t(481060),
    s = t(854698),
    o = t(401876),
    c = t(388032),
    d = t(297229);
function u(e) {
    let { className: n, onScheduleChange: t, onRecurrenceChange: i, onTimeChange: u, timeSelected: _ = !0, schedule: m, recurrenceRule: h, showEndDate: x = !1, requireEndDate: g = !1, disableStartDateTime: v = !1 } = e;
    if (null == m) return null;
    let b = null,
        N = m.startDate,
        j = r()(),
        C = r()().add(s.G3, 'days'),
        I = r()().add(s.Ib, 'days');
    null != h && (C.add(s.hn, 'years'), I.add(s.hn, 'years'));
    let f = (e) => {
        t({
            ...m,
            endDate: e
        });
    };
    return (
        x &&
            (b =
                null != m.endDate || g
                    ? (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsxs)('div', {
                                  className: d.doubleInput,
                                  children: [
                                      (0, l.jsx)(a.xJW, {
                                          title: c.intl.string(c.t.CTLgZG),
                                          required: g,
                                          children: (0, l.jsx)(a.Wrb, {
                                              value: m.endDate,
                                              onSelect: f,
                                              minDate: m.startDate,
                                              maxDate: I
                                          })
                                      }),
                                      (0, l.jsx)(a.xJW, {
                                          title: c.intl.string(c.t.j2RuXF),
                                          required: g,
                                          children: (0, l.jsx)(a.MGJ, {
                                              value: m.endDate,
                                              onChange: f
                                          })
                                      })
                                  ]
                              }),
                              g
                                  ? null
                                  : (0, l.jsx)(a.zxk, {
                                        onClick: () => {
                                            f(void 0);
                                        },
                                        look: a.zxk.Looks.BLANK,
                                        size: a.zxk.Sizes.MIN,
                                        children: (0, l.jsxs)('div', {
                                            className: d.link,
                                            children: [
                                                (0, l.jsx)(a.k$p, {
                                                    size: 'custom',
                                                    color: 'currentColor',
                                                    width: 17,
                                                    height: 17,
                                                    className: d.removeIcon
                                                }),
                                                (0, l.jsx)(a.Text, {
                                                    variant: 'text-sm/normal',
                                                    children: c.intl.string(c.t.petdfn)
                                                })
                                            ]
                                        })
                                    })
                          ]
                      })
                    : (0, l.jsx)(a.zxk, {
                          look: a.zxk.Looks.BLANK,
                          size: a.zxk.Sizes.MIN,
                          onClick: () => {
                              f(r()(m.startDate).add(1, 'hour'));
                          },
                          children: (0, l.jsxs)('div', {
                              className: d.link,
                              children: [
                                  (0, l.jsx)(a.oFk, {
                                      size: 'custom',
                                      color: 'currentColor',
                                      width: 20,
                                      height: 20,
                                      className: d.addIcon
                                  }),
                                  (0, l.jsx)(a.Text, {
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
                        (0, l.jsx)(a.xJW, {
                            title: c.intl.string(c.t.kKOIwM),
                            required: !0,
                            children: (0, l.jsx)(a.Wrb, {
                                value: m.startDate,
                                onSelect: (e) => {
                                    t({
                                        ...m,
                                        startDate: e
                                    });
                                },
                                minDate: j,
                                maxDate: C,
                                disabled: v
                            })
                        }),
                        (0, l.jsx)(a.xJW, {
                            title: c.intl.string(c.t['6dGmCA']),
                            required: !0,
                            children: (0, l.jsx)(a.MGJ, {
                                value: m.startDate,
                                onChange: (e) => {
                                    e.isValid() &&
                                        (null == u || u(!0),
                                        t({
                                            ...m,
                                            startDate: e
                                        }));
                                },
                                hideValue: !_,
                                disabled: v
                            })
                        })
                    ]
                }),
                b,
                null != N &&
                    null != i &&
                    (0, l.jsx)(o.Z, {
                        onRecurrenceChange: i,
                        startDate: N,
                        recurrenceRule: h
                    })
            ]
        })
    );
}
