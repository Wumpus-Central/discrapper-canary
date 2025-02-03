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
    let { className: n, onScheduleChange: t, onRecurrenceChange: i, onTimeChange: u, timeSelected: _ = !0, schedule: h, recurrenceRule: m, showEndDate: x = !1, requireEndDate: g = !1, disableStartDateTime: v = !1 } = e;
    if (null == h) return null;
    let b = null,
        f = h.startDate,
        N = r()(),
        j = r()().add(s.G3, 'days'),
        C = r()().add(s.Ib, 'days');
    null != m && (j.add(s.hn, 'years'), C.add(s.hn, 'years'));
    let I = (e) => {
        t({
            ...h,
            endDate: e
        });
    };
    return (
        x &&
            (b =
                null != h.endDate || g
                    ? (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsxs)('div', {
                                  className: d.doubleInput,
                                  children: [
                                      (0, l.jsx)(a.xJW, {
                                          title: c.intl.string(c.t.CTLgZG),
                                          required: g,
                                          children: (0, l.jsx)(a.Wrb, {
                                              value: h.endDate,
                                              onSelect: I,
                                              minDate: h.startDate,
                                              maxDate: C
                                          })
                                      }),
                                      (0, l.jsx)(a.xJW, {
                                          title: c.intl.string(c.t.j2RuXF),
                                          required: g,
                                          children: (0, l.jsx)(a.MGJ, {
                                              value: h.endDate,
                                              onChange: I
                                          })
                                      })
                                  ]
                              }),
                              g
                                  ? null
                                  : (0, l.jsx)(a.zxk, {
                                        onClick: () => {
                                            I(void 0);
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
                              I(r()(h.startDate).add(1, 'hour'));
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
                                value: h.startDate,
                                onSelect: (e) => {
                                    t({
                                        ...h,
                                        startDate: e
                                    });
                                },
                                minDate: N,
                                maxDate: j,
                                disabled: v
                            })
                        }),
                        (0, l.jsx)(a.xJW, {
                            title: c.intl.string(c.t['6dGmCA']),
                            required: !0,
                            children: (0, l.jsx)(a.MGJ, {
                                value: h.startDate,
                                onChange: (e) => {
                                    e.isValid() &&
                                        (null == u || u(!0),
                                        t({
                                            ...h,
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
                null != f &&
                    null != i &&
                    (0, l.jsx)(o.Z, {
                        onRecurrenceChange: i,
                        startDate: f,
                        recurrenceRule: m
                    })
            ]
        })
    );
}
