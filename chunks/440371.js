t.d(n, { Z: () => u });
var l = t(200651);
t(192379);
var i = t(913527),
    r = t.n(i),
    s = t(481060),
    a = t(854698),
    o = t(401876),
    d = t(388032),
    c = t(67720);
function u(e) {
    let { className: n, onScheduleChange: t, onRecurrenceChange: i, onTimeChange: u, timeSelected: x = !0, schedule: h, recurrenceRule: m, showEndDate: v = !1, requireEndDate: g = !1, disableStartDateTime: j = !1 } = e;
    if (null == h) return null;
    let N = null,
        p = h.startDate,
        f = r()(),
        C = r()().add(a.G3, 'days'),
        E = r()().add(a.Ib, 'days');
    null != m && (C.add(a.hn, 'years'), E.add(a.hn, 'years'));
    let I = (e) => {
        t({
            ...h,
            endDate: e
        });
    };
    return (
        v &&
            (N =
                null != h.endDate || g
                    ? (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsxs)('div', {
                                  className: c.doubleInput,
                                  children: [
                                      (0, l.jsx)(s.xJW, {
                                          title: d.intl.string(d.t.CTLgZG),
                                          required: g,
                                          children: (0, l.jsx)(s.Wrb, {
                                              value: h.endDate,
                                              onSelect: I,
                                              minDate: h.startDate,
                                              maxDate: E
                                          })
                                      }),
                                      (0, l.jsx)(s.xJW, {
                                          title: d.intl.string(d.t.j2RuXF),
                                          required: g,
                                          children: (0, l.jsx)(s.MGJ, {
                                              value: h.endDate,
                                              onChange: I
                                          })
                                      })
                                  ]
                              }),
                              g
                                  ? null
                                  : (0, l.jsx)(s.zxk, {
                                        onClick: () => {
                                            I(void 0);
                                        },
                                        look: s.zxk.Looks.BLANK,
                                        size: s.zxk.Sizes.MIN,
                                        children: (0, l.jsxs)('div', {
                                            className: c.link,
                                            children: [
                                                (0, l.jsx)(s.k$p, {
                                                    size: 'custom',
                                                    color: 'currentColor',
                                                    width: 17,
                                                    height: 17,
                                                    className: c.removeIcon
                                                }),
                                                (0, l.jsx)(s.Text, {
                                                    variant: 'text-sm/normal',
                                                    children: d.intl.string(d.t.petdfn)
                                                })
                                            ]
                                        })
                                    })
                          ]
                      })
                    : (0, l.jsx)(s.zxk, {
                          look: s.zxk.Looks.BLANK,
                          size: s.zxk.Sizes.MIN,
                          onClick: () => {
                              I(r()(h.startDate).add(1, 'hour'));
                          },
                          children: (0, l.jsxs)('div', {
                              className: c.link,
                              children: [
                                  (0, l.jsx)(s.oFk, {
                                      size: 'custom',
                                      color: 'currentColor',
                                      width: 20,
                                      height: 20,
                                      className: c.addIcon
                                  }),
                                  (0, l.jsx)(s.Text, {
                                      variant: 'text-sm/normal',
                                      children: d.intl.string(d.t.ncdPcn)
                                  })
                              ]
                          })
                      })),
        (0, l.jsxs)('div', {
            className: n,
            children: [
                (0, l.jsxs)('div', {
                    className: c.doubleInput,
                    children: [
                        (0, l.jsx)(s.xJW, {
                            title: d.intl.string(d.t.kKOIwM),
                            required: !0,
                            children: (0, l.jsx)(s.Wrb, {
                                value: h.startDate,
                                onSelect: (e) => {
                                    t({
                                        ...h,
                                        startDate: e
                                    });
                                },
                                minDate: f,
                                maxDate: C,
                                disabled: j
                            })
                        }),
                        (0, l.jsx)(s.xJW, {
                            title: d.intl.string(d.t['6dGmCA']),
                            required: !0,
                            children: (0, l.jsx)(s.MGJ, {
                                value: h.startDate,
                                onChange: (e) => {
                                    e.isValid() &&
                                        (null == u || u(!0),
                                        t({
                                            ...h,
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
                null != p &&
                    null != i &&
                    (0, l.jsx)(o.Z, {
                        onRecurrenceChange: i,
                        startDate: p,
                        recurrenceRule: m
                    })
            ]
        })
    );
}
