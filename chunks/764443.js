n.d(t, {
    I: function () {
        return I;
    }
});
var i = n(200651);
n(192379);
var r = n(722770),
    l = n(481060),
    a = n(440051),
    s = n(734934),
    o = n(158238),
    c = n(695346),
    d = n(70956),
    u = n(51144),
    h = n(246133),
    m = n(981631),
    p = n(388032),
    g = n(602654);
let f = [
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
function _(e, t, n) {
    let r = (0, i.jsx)(i.Fragment, {
        children: f.map((n) => {
            let { duration: r, label: a } = n;
            return (0, i.jsx)(
                l.MenuItem,
                {
                    id: ''.concat(e, '-').concat(r),
                    label: a(),
                    action: () => (0, h.Z)(e, t, void 0, r),
                    dontCloseOnAction: !0
                },
                r
            );
        })
    });
    return (0, i.jsx)(l.MenuItem, {
        id: e,
        className: g.expiringStatusMenuItem,
        keepItemStyles: !0,
        hasSubmenu: !0,
        label: (t) => {
            let { isFocused: r } = t;
            return (0, i.jsxs)('div', {
                className: g.statusItem,
                children: [
                    (0, i.jsx)(l.Status, {
                        status: e,
                        className: g.icon,
                        size: 10,
                        color: r ? 'currentColor' : void 0
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
        dontCloseOnAction: !0,
        children: e !== m.Skl.ONLINE ? r : void 0
    });
}
function E(e, t, n) {
    return (0, i.jsx)(l.MenuItem, {
        id: e,
        keepItemStyles: !0,
        render: (t) => {
            let { isFocused: r } = t;
            return (0, i.jsxs)('div', {
                className: g.statusItem,
                children: [
                    (0, i.jsx)(l.Status, {
                        status: e,
                        className: g.icon,
                        size: 10,
                        color: r ? 'currentColor' : void 0
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
    let t = a.Y.useExperiment({ location: 'AccountProfilePopout' }).expiringStatus,
        n = c.Cr.useSetting(),
        d = (0, s.p)(),
        u = o.e.useExperiment({ location: 'AccountProfilePopout' }).allowQuietMode || d,
        h = c.fv.useSetting(),
        I = e === m.Skl.DND,
        C = (t) => {
            let i =
                null != n && '0' !== n
                    ? p.intl.formatToPlainString(p.t.BWD8fn, {
                          endTime: new Date(Number(n)).toLocaleString(p.intl.currentLocale, {
                              month: 'numeric',
                              day: 'numeric',
                              hour: 'numeric',
                              minute: '2-digit'
                          })
                      })
                    : void 0;
            if (e === t && null != i) return i;
            switch (t) {
                case m.Skl.DND:
                    return u ? p.intl.string(p.t.day5Aw) : p.intl.string(p.t.U9Vv19);
                case m.Skl.INVISIBLE:
                    return p.intl.string(p.t.MqanVF);
                default:
                    return;
            }
        },
        v = (0, i.jsx)(i.Fragment, {
            children: f.map((t) => {
                let { duration: n, label: r } = t;
                return (0, i.jsx)(
                    l.MenuItem,
                    {
                        id: ''.concat(e, '-').concat(n),
                        label: r(),
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
            (0, i.jsx)(l.MenuSeparator, {}, 'menu-separator-statuses'),
            t ? _(m.Skl.IDLE, e, C(m.Skl.IDLE)) : E(m.Skl.IDLE, e, C(m.Skl.IDLE)),
            t ? _(m.Skl.DND, e, C(m.Skl.DND)) : E(m.Skl.DND, e, C(m.Skl.DND)),
            t ? _(m.Skl.INVISIBLE, e, C(m.Skl.INVISIBLE)) : E(m.Skl.INVISIBLE, e, C(m.Skl.INVISIBLE)),
            u || d
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(l.MenuSeparator, {}, 'menu-separator-statuses'),
                          (0, i.jsx)(
                              l.MenuItem,
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
                                              (0, i.jsx)(l.BellSlashIcon, {
                                                  size: 'xxs',
                                                  className: g.icon
                                              }),
                                              (0, i.jsxs)('div', {
                                                  className: g.focusModeTitle,
                                                  children: [
                                                      p.intl.string(p.t.gJRnwM),
                                                      (0, i.jsx)(l.TextBadge, {
                                                          text: d ? p.intl.string(p.t.ApAu9f) : I ? p.intl.string(p.t.gH3Fra) : p.intl.string(p.t['64pl8/']),
                                                          color: d ? r.Z.BRAND_500 : I ? r.Z.RED_400 : r.Z.PRIMARY_500
                                                      })
                                                  ]
                                              }),
                                              (0, i.jsx)('div', {
                                                  className: g.description,
                                                  children:
                                                      d && null != h && '0' !== h
                                                          ? p.intl.formatToPlainString(p.t.BWD8fn, {
                                                                endTime: new Date(Number(h)).toLocaleString(p.intl.currentLocale, {
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
                                      (0, s.oW)(!d);
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
