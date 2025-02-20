n.d(t, { I: () => x }), n(266796);
var r = n(200651);
n(192379);
var i = n(722770),
    s = n(481060),
    a = n(440051),
    l = n(734934),
    o = n(158238),
    c = n(695346),
    d = n(70956),
    u = n(51144),
    m = n(246133),
    g = n(981631),
    p = n(388032),
    h = n(307525);
let f = [
    {
        duration: 30 * d.Z.Millis.MINUTE,
        label: () => p.NW.string(p.t.RxJGbG)
    },
    {
        duration: d.Z.Millis.HOUR,
        label: () => p.NW.string(p.t.UMWBZm)
    },
    {
        duration: 3 * d.Z.Millis.HOUR,
        label: () => p.NW.string(p.t.QmYWtr)
    },
    {
        duration: 8 * d.Z.Millis.HOUR,
        label: () => p.NW.string(p.t.EpAXPD)
    },
    {
        duration: d.Z.Millis.DAY,
        label: () => p.NW.string(p.t['755t4u'])
    },
    {
        duration: void 0,
        label: () => p.NW.string(p.t['46dqJS'])
    }
];
function b(e) {
    let { status: t, currentStatus: n, description: i, defaultClickExpire: a } = e,
        l = (0, r.jsx)(r.Fragment, {
            children: f.map((e) => {
                let { duration: i, label: a } = e;
                return (0, r.jsx)(
                    s.sNh,
                    {
                        id: ''.concat(t, '-').concat(i),
                        label: a(),
                        action: () => (0, m.Z)(t, n, void 0, i),
                        dontCloseOnAction: !0
                    },
                    i
                );
            })
        });
    return (0, r.jsx)(s.sNh, {
        id: t,
        className: h.expiringStatusMenuItem,
        keepItemStyles: !0,
        hasSubmenu: !0,
        label: (e) => {
            let { isFocused: n } = e;
            return (0, r.jsxs)('div', {
                className: h.statusItem,
                children: [
                    (0, r.jsx)(s.qbd, {
                        status: t,
                        className: h.icon,
                        size: 10,
                        color: n ? 'currentColor' : void 0
                    }),
                    (0, r.jsx)('div', {
                        className: h.status,
                        children: (0, u.u5)(t)
                    }),
                    null != i &&
                        (0, r.jsx)('div', {
                            className: h.description,
                            children: i
                        })
                ]
            });
        },
        action: () => (0, m.Z)(t, n, void 0, a ? d.Z.Millis.DAY : void 0),
        dontCloseOnAction: !0,
        children: t !== g.Skl.ONLINE ? l : void 0
    });
}
function N(e, t, n) {
    return (0, r.jsx)(s.sNh, {
        id: e,
        keepItemStyles: !0,
        render: (t) => {
            let { isFocused: i } = t;
            return (0, r.jsxs)('div', {
                className: h.statusItem,
                children: [
                    (0, r.jsx)(s.qbd, {
                        status: e,
                        className: h.icon,
                        size: 10,
                        color: i ? 'currentColor' : void 0
                    }),
                    (0, r.jsx)('div', {
                        className: h.status,
                        children: (0, u.u5)(e)
                    }),
                    null != n &&
                        (0, r.jsx)('div', {
                            className: h.description,
                            children: n
                        })
                ]
            });
        },
        action: () => (0, m.Z)(e, t),
        dontCloseOnAction: !0
    });
}
function x(e) {
    let { expiringStatus: t, defaultClickExpire: n } = a.i.useExperiment({ location: 'AccountProfilePopout' }),
        d = c.Cr.useSetting(),
        u = (0, l.p)(),
        m = o.e.useExperiment({ location: 'AccountProfilePopout' }).allowQuietMode || u,
        x = c.fv.useSetting(),
        _ = e === g.Skl.DND,
        E = (t) => {
            let n =
                null != d && '0' !== d
                    ? p.NW.formatToPlainString(p.t.BWD8fn, {
                          endTime: new Date(Number(d)).toLocaleString(p.NW.currentLocale, {
                              month: 'numeric',
                              day: 'numeric',
                              hour: 'numeric',
                              minute: '2-digit'
                          })
                      })
                    : void 0;
            if (e === t && null != n) return n;
            switch (t) {
                case g.Skl.DND:
                    return m ? p.NW.string(p.t.day5Aw) : p.NW.string(p.t.U9Vv19);
                case g.Skl.INVISIBLE:
                    return p.NW.string(p.t.MqanVF);
                default:
                    return;
            }
        },
        j = (0, r.jsx)(r.Fragment, {
            children: f.map((t) => {
                let { duration: n, label: i } = t;
                return (0, r.jsx)(
                    s.sNh,
                    {
                        id: ''.concat(e, '-').concat(n),
                        label: i(),
                        action: () => {
                            (0, l.oW)(!0, n);
                        },
                        dontCloseOnAction: !0
                    },
                    n
                );
            })
        });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            N(g.Skl.ONLINE, e),
            (0, r.jsx)(s.Clw, {}, 'menu-separator-statuses'),
            t
                ? b({
                      status: g.Skl.IDLE,
                      currentStatus: e,
                      description: E(g.Skl.IDLE),
                      defaultClickExpire: n
                  })
                : N(g.Skl.IDLE, e, E(g.Skl.IDLE)),
            t
                ? b({
                      status: g.Skl.DND,
                      currentStatus: e,
                      description: E(g.Skl.DND),
                      defaultClickExpire: n
                  })
                : N(g.Skl.DND, e, E(g.Skl.DND)),
            t
                ? b({
                      status: g.Skl.INVISIBLE,
                      currentStatus: e,
                      description: E(g.Skl.INVISIBLE),
                      defaultClickExpire: n
                  })
                : N(g.Skl.INVISIBLE, e, E(g.Skl.INVISIBLE)),
            m || u
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(s.Clw, {}, 'menu-separator-statuses'),
                          (0, r.jsx)(
                              s.sNh,
                              {
                                  id: 'quiet-mode',
                                  'aria-label': 'focus mode',
                                  className: h.expiringStatusMenuItem,
                                  keepItemStyles: !0,
                                  hasSubmenu: !0,
                                  label: () =>
                                      (0, r.jsxs)('div', {
                                          className: h.statusItem,
                                          children: [
                                              (0, r.jsx)(s.owu, {
                                                  size: 'xxs',
                                                  className: h.icon
                                              }),
                                              (0, r.jsxs)('div', {
                                                  className: h.focusModeTitle,
                                                  children: [
                                                      p.NW.string(p.t.gJRnwM),
                                                      (0, r.jsx)(s.IGR, {
                                                          text: u ? p.NW.string(p.t.ApAu9f) : _ ? p.NW.string(p.t.gH3Fra) : p.NW.string(p.t['64pl8/']),
                                                          color: u ? i.Z.BRAND_500 : _ ? i.Z.RED_400 : i.Z.PRIMARY_500
                                                      })
                                                  ]
                                              }),
                                              (0, r.jsx)('div', {
                                                  className: h.description,
                                                  children:
                                                      u && null != x && '0' !== x
                                                          ? p.NW.formatToPlainString(p.t.BWD8fn, {
                                                                endTime: new Date(Number(x)).toLocaleString(p.NW.currentLocale, {
                                                                    month: 'numeric',
                                                                    day: 'numeric',
                                                                    hour: 'numeric',
                                                                    minute: '2-digit'
                                                                })
                                                            })
                                                          : p.NW.string(p.t['Br1q+/'])
                                              })
                                          ]
                                      }),
                                  action: () => {
                                      (0, l.oW)(!u);
                                  },
                                  dontCloseOnAction: !0,
                                  children: j
                              },
                              'quiet-mode'
                          )
                      ]
                  })
                : null
        ]
    });
}
