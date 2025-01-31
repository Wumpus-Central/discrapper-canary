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
    let { className: n, onScheduleChange: t, onRecurrenceChange: i, onTimeChange: u, timeSelected: _ = !0, schedule: h, recurrenceRule: x, showEndDate: m = !1, requireEndDate: g = !1, disableStartDateTime: b = !1 } = e;
    if (null == h) return null;
    let v = null,
        N = h.startDate,
        j = a()(),
        I = a()().add(s.G3, 'days'),
        p = a()().add(s.Ib, 'days');
    null != x && (I.add(s.hn, 'years'), p.add(s.hn, 'years'));
    let C = (e) => {
        t({
            ...h,
            endDate: e
        });
    };
    return (
        m &&
            (v =
                null != h.endDate || g
                    ? (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsxs)('div', {
                                  className: d.doubleInput,
                                  children: [
                                      (0, l.jsx)(r.xJW, {
                                          title: c.intl.string(c.t.CTLgZG),
                                          required: g,
                                          children: (0, l.jsx)(r.Wrb, {
                                              value: h.endDate,
                                              onSelect: C,
                                              minDate: h.startDate,
                                              maxDate: p
                                          })
                                      }),
                                      (0, l.jsx)(r.xJW, {
                                          title: c.intl.string(c.t.j2RuXF),
                                          required: g,
                                          children: (0, l.jsx)(r.MGJ, {
                                              value: h.endDate,
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
                              C(a()(h.startDate).add(1, 'hour'));
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
                                value: h.startDate,
                                onSelect: (e) => {
                                    t({
                                        ...h,
                                        startDate: e
                                    });
                                },
                                minDate: j,
                                maxDate: I,
                                disabled: b
                            })
                        }),
                        (0, l.jsx)(r.xJW, {
                            title: c.intl.string(c.t['6dGmCA']),
                            required: !0,
                            children: (0, l.jsx)(r.MGJ, {
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
                                disabled: b
                            })
                        })
                    ]
                }),
                v,
                null != N &&
                    null != i &&
                    (0, l.jsx)(o.Z, {
                        onRecurrenceChange: i,
                        startDate: N,
                        recurrenceRule: x
                    })
            ]
        })
    );
}
