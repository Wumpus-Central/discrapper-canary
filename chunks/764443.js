n.d(t, { I: () => I });
var i = n(200651);
n(192379);
var l = n(722770),
    r = n(481060),
    a = n(440051),
    s = n(734934),
    o = n(158238),
    c = n(695346),
    d = n(70956),
    u = n(51144),
    h = n(246133),
    m = n(981631),
    p = n(388032),
    g = n(949990);
let _ = [
    {
        duration: 30 * d.Z.Millis.MINUTE,
        label: () => p.intl.string(p.t.RxJGbG)
    },
    {
        duration: d.Z.Millis.HOUR,
        label: () => p.intl.string(p.t.UMWBZm)
    },
    {
        duration: 3 * d.Z.Millis.HOUR,
        label: () => p.intl.string(p.t.QmYWtr)
    },
    {
        duration: 8 * d.Z.Millis.HOUR,
        label: () => p.intl.string(p.t.EpAXPD)
    },
    {
        duration: d.Z.Millis.DAY,
        label: () => p.intl.string(p.t['755t4u'])
    },
    {
        duration: void 0,
        label: () => p.intl.string(p.t['46dqJS'])
    }
];
function f(e) {
    let { status: t, currentStatus: n, description: l, defaultClickExpire: a } = e,
        s = (0, i.jsx)(i.Fragment, {
            children: _.map((e) => {
                let { duration: l, label: a } = e;
                return (0, i.jsx)(
                    r.sNh,
                    {
                        id: ''.concat(t, '-').concat(l),
                        label: a(),
                        action: () => (0, h.Z)(t, n, void 0, l),
                        dontCloseOnAction: !0
                    },
                    l
                );
            })
        });
    return (0, i.jsx)(r.sNh, {
        id: t,
        className: g.expiringStatusMenuItem,
        keepItemStyles: !0,
        hasSubmenu: !0,
        label: (e) => {
            let { isFocused: n } = e;
            return (0, i.jsxs)('div', {
                className: g.statusItem,
                children: [
                    (0, i.jsx)(r.qbd, {
                        status: t,
                        className: g.icon,
                        size: 10,
                        color: n ? 'currentColor' : void 0
                    }),
                    (0, i.jsx)('div', {
                        className: g.status,
                        children: (0, u.u5)(t)
                    }),
                    null != l &&
                        (0, i.jsx)('div', {
                            className: g.description,
                            children: l
                        })
                ]
            });
        },
        action: () => (0, h.Z)(t, n, void 0, a ? d.Z.Millis.DAY : void 0),
        dontCloseOnAction: !0,
        children: t !== m.Skl.ONLINE ? s : void 0
    });
}
function E(e, t, n) {
    return (0, i.jsx)(r.sNh, {
        id: e,
        keepItemStyles: !0,
        render: (t) => {
            let { isFocused: l } = t;
            return (0, i.jsxs)('div', {
                className: g.statusItem,
                children: [
                    (0, i.jsx)(r.qbd, {
                        status: e,
                        className: g.icon,
                        size: 10,
                        color: l ? 'currentColor' : void 0
                    }),
                    (0, i.jsx)('div', {
                        className: g.status,
                        children: (0, u.u5)(e)
                    }),
                    null != n &&
                        (0, i.jsx)('div', {
                            className: g.description,
                            children: n
                        })
                ]
            });
        },
        action: () => (0, h.Z)(e, t),
        dontCloseOnAction: !0
    });
}
function I(e) {
    let { expiringStatus: t, defaultClickExpire: n } = a.i.useExperiment({ location: 'AccountProfilePopout' }),
        d = c.Cr.useSetting(),
        u = (0, s.p)(),
        h = o.e.useExperiment({ location: 'AccountProfilePopout' }).allowQuietMode || u,
        I = c.fv.useSetting(),
        C = e === m.Skl.DND,
        N = (t) => {
            let n =
                null != d && '0' !== d
                    ? p.intl.formatToPlainString(p.t.BWD8fn, {
                          endTime: new Date(Number(d)).toLocaleString(p.intl.currentLocale, {
                              month: 'numeric',
                              day: 'numeric',
                              hour: 'numeric',
                              minute: '2-digit'
                          })
                      })
                    : void 0;
            if (e === t && null != n) return n;
            switch (t) {
                case m.Skl.DND:
                    return h ? p.intl.string(p.t.day5Aw) : p.intl.string(p.t.U9Vv19);
                case m.Skl.INVISIBLE:
                    return p.intl.string(p.t.MqanVF);
                default:
                    return;
            }
        },
        v = (0, i.jsx)(i.Fragment, {
            children: _.map((t) => {
                let { duration: n, label: l } = t;
                return (0, i.jsx)(
                    r.sNh,
                    {
                        id: ''.concat(e, '-').concat(n),
                        label: l(),
                        action: () => {
                            (0, s.oW)(!0, n);
                        },
                        dontCloseOnAction: !0
                    },
                    n
                );
            })
        });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            E(m.Skl.ONLINE, e),
            (0, i.jsx)(r.Clw, {}, 'menu-separator-statuses'),
            t
                ? f({
                      status: m.Skl.IDLE,
                      currentStatus: e,
                      description: N(m.Skl.IDLE),
                      defaultClickExpire: n
                  })
                : E(m.Skl.IDLE, e, N(m.Skl.IDLE)),
            t
                ? f({
                      status: m.Skl.DND,
                      currentStatus: e,
                      description: N(m.Skl.DND),
                      defaultClickExpire: n
                  })
                : E(m.Skl.DND, e, N(m.Skl.DND)),
            t
                ? f({
                      status: m.Skl.INVISIBLE,
                      currentStatus: e,
                      description: N(m.Skl.INVISIBLE),
                      defaultClickExpire: n
                  })
                : E(m.Skl.INVISIBLE, e, N(m.Skl.INVISIBLE)),
            h || u
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(r.Clw, {}, 'menu-separator-statuses'),
                          (0, i.jsx)(
                              r.sNh,
                              {
                                  id: 'quiet-mode',
                                  'aria-label': 'focus mode',
                                  className: g.expiringStatusMenuItem,
                                  keepItemStyles: !0,
                                  hasSubmenu: !0,
                                  label: () =>
                                      (0, i.jsxs)('div', {
                                          className: g.statusItem,
                                          children: [
                                              (0, i.jsx)(r.owu, {
                                                  size: 'xxs',
                                                  className: g.icon
                                              }),
                                              (0, i.jsxs)('div', {
                                                  className: g.focusModeTitle,
                                                  children: [
                                                      p.intl.string(p.t.gJRnwM),
                                                      (0, i.jsx)(r.IGR, {
                                                          text: u ? p.intl.string(p.t.ApAu9f) : C ? p.intl.string(p.t.gH3Fra) : p.intl.string(p.t['64pl8/']),
                                                          color: u ? l.Z.BRAND_500 : C ? l.Z.RED_400 : l.Z.PRIMARY_500
                                                      })
                                                  ]
                                              }),
                                              (0, i.jsx)('div', {
                                                  className: g.description,
                                                  children:
                                                      u && null != I && '0' !== I
                                                          ? p.intl.formatToPlainString(p.t.BWD8fn, {
                                                                endTime: new Date(Number(I)).toLocaleString(p.intl.currentLocale, {
                                                                    month: 'numeric',
                                                                    day: 'numeric',
                                                                    hour: 'numeric',
                                                                    minute: '2-digit'
                                                                })
                                                            })
                                                          : p.intl.string(p.t['Br1q+/'])
                                              })
                                          ]
                                      }),
                                  action: () => {
                                      (0, s.oW)(!u);
                                  },
                                  dontCloseOnAction: !0,
                                  children: v
                              },
                              'quiet-mode'
                          )
                      ]
                  })
                : null
        ]
    });
}
