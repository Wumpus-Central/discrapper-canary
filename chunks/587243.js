(n.d(t, {
    F: () => O,
    I: () => v
}),
    n(953529),
    n(388685));
var i = n(255367),
    r = n(73800),
    s = n(722770),
    a = n(755721),
    l = n(481060),
    o = n(440051),
    c = n(734934),
    d = n(158238),
    u = n(695346),
    m = n(70956),
    p = n(51144),
    g = n(246133),
    h = n(981631),
    f = n(388032),
    b = n(404255);
let x = [
        {
            duration: 15 * m.Z.Millis.MINUTE,
            label: () => f.intl.string(f.t['8ot6go'])
        },
        {
            duration: m.Z.Millis.HOUR,
            label: () => f.intl.string(f.t.UMWBZm)
        },
        {
            duration: 8 * m.Z.Millis.HOUR,
            label: () => f.intl.string(f.t.EpAXPD)
        },
        {
            duration: m.Z.Millis.DAY,
            label: () => f.intl.string(f.t['755t4u'])
        },
        {
            duration: 3 * m.Z.Millis.DAY,
            label: () => f.intl.string(f.t['f3/1cn'])
        },
        {
            duration: void 0,
            label: () => f.intl.string(f.t['46dqJS'])
        }
    ],
    _ = [
        {
            duration: m.Z.Millis.HOUR,
            label: () => f.intl.formatToPlainString(f.t.rhY1Rk, { hours: 1 })
        },
        {
            duration: m.Z.Millis.DAY,
            label: () => f.intl.formatToPlainString(f.t.rhY1Rk, { hours: 24 })
        },
        {
            duration: 3 * m.Z.Millis.DAY,
            label: () => f.intl.formatToPlainString(f.t.GBLpQ0, { days: 3 })
        },
        {
            duration: void 0,
            label: () => f.intl.string(f.t['46dqJS'])
        }
    ],
    j = 'forever';
function E(e, t) {
    return e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth() && e.getDate() === t.getDate();
}
function C(e) {
    let { status: t, currentStatus: n, description: s } = e,
        { showTempStatusOptions: c, hasDefaultClickOption: d, hasButtonStyling: u } = o.Y.useExperiment({ location: 'UserProfileAccountPopout' }),
        f = c && t !== h.Skl.ONLINE,
        [E, C] = r.useState(void 0),
        O = void 0 !== E && t === n,
        v = (0, i.jsx)(i.Fragment, {
            children: x.map((e) => {
                let { duration: r, label: s } = e;
                return (0, i.jsx)(
                    l.sNh,
                    {
                        id: ''.concat(t, '-').concat(r),
                        label: s(),
                        action: () =>
                            (0, g.Z)({
                                nextStatus: t,
                                prevStatus: n,
                                durationMillis: r
                            }),
                        dontCloseOnAction: !0
                    },
                    null != r ? r : j
                );
            })
        }),
        S = (0, i.jsx)('div', {
            className: b.durationButtons,
            children: _.map((e) => {
                let { duration: r, label: s } = e;
                return (0, i.jsx)(
                    a.zx,
                    {
                        'data-migration-pending': !0,
                        id: ''.concat(t, '-').concat(r),
                        onClick: (e) => {
                            (e.stopPropagation(),
                                C(r),
                                (0, g.Z)({
                                    nextStatus: t,
                                    prevStatus: n,
                                    durationMillis: null != r ? r : void 0
                                }));
                        },
                        className: b.durationButton,
                        color: E === r ? a.Tt.BRAND : a.Tt.PRIMARY,
                        size: a.Ph.NONE,
                        grow: !1,
                        children: s()
                    },
                    null != r ? r : j
                );
            })
        });
    return (0, i.jsx)(l.sNh, {
        id: t,
        className: b.expiringStatusMenuItem,
        keepItemStyles: !0,
        hasSubmenu: f,
        label: (e) => {
            let { isFocused: n } = e;
            return (0, i.jsxs)('div', {
                className: b.statusItem,
                children: [
                    (0, i.jsx)(l.qbd, {
                        status: t,
                        className: b.icon,
                        size: 10,
                        color: n ? 'currentColor' : void 0
                    }),
                    (0, i.jsx)('div', {
                        className: b.status,
                        children: (0, p.u5)(t)
                    }),
                    null != s &&
                        (0, i.jsx)('div', {
                            className: b.description,
                            children: s
                        }),
                    f && u && O ? S : void 0
                ]
            });
        },
        action: () => {
            (C(f ? m.Z.Millis.DAY : void 0),
                (0, g.Z)({
                    nextStatus: t,
                    prevStatus: n,
                    durationMillis: d && f ? m.Z.Millis.DAY : void 0
                }));
        },
        dontCloseOnAction: !0,
        children: f && !u ? v : void 0
    });
}
function O(e) {
    if (null == e || '0' === e) return;
    let t = new Date(Number(e)),
        n = E(t, new Date()),
        i = new Date();
    i.setDate(i.getDate() + 1);
    let r = E(t, i);
    return n
        ? f.intl.formatToPlainString(f.t.ZxxHIC, { timeString: f.intl.data.formatTime(t, { format: 'short' }) })
        : f.intl.formatToPlainString(f.t['9OFjSU'], {
              dateString: r ? f.intl.data.formatRelativeTime(1, 'day', { numeric: 'auto' }) : f.intl.data.formatDate(t, { dateStyle: 'short' }),
              timeString: f.intl.data.formatTime(t, { format: 'short' })
          });
}
function v(e) {
    let { hasNewStrings: t } = o.Y.useExperiment({ location: 'UserProfileAccountPopout' }),
        n = u.Cr.useSetting(),
        r = (0, c.p)(),
        a = d.e.useExperiment({ location: 'UserProfileAccountPopout' }).allowQuietMode || r,
        m = u.fv.useSetting(),
        p = e === h.Skl.DND,
        g = (i) => {
            let r = O(n);
            if (e === i && null != r) return r;
            switch (i) {
                case h.Skl.DND:
                    return a ? f.intl.string(f.t.day5Aw) : t ? f.intl.string(f.t['tq/fMD']) : f.intl.string(f.t.U9Vv19);
                case h.Skl.INVISIBLE:
                    return t ? f.intl.string(f.t.zPc6MT) : f.intl.string(f.t.MqanVF);
                default:
                    return;
            }
        },
        _ = (0, i.jsx)(i.Fragment, {
            children: x.map((t) => {
                let { duration: n, label: r } = t;
                return (0, i.jsx)(
                    l.sNh,
                    {
                        id: ''.concat(e, '-').concat(n),
                        label: r(),
                        action: () => {
                            (0, c.oW)(!0, n);
                        },
                        dontCloseOnAction: !0
                    },
                    null != n ? n : j
                );
            })
        }),
        E = C({
            status: h.Skl.ONLINE,
            currentStatus: e
        }),
        v = C({
            status: h.Skl.IDLE,
            currentStatus: e,
            description: g(h.Skl.IDLE)
        }),
        S = C({
            status: h.Skl.DND,
            currentStatus: e,
            description: g(h.Skl.DND)
        }),
        T = C({
            status: h.Skl.INVISIBLE,
            currentStatus: e,
            description: g(h.Skl.INVISIBLE)
        });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            E,
            (0, i.jsx)(l.Clw, {}, 'menu-separator-statuses'),
            v,
            S,
            T,
            a || r
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(l.Clw, {}, 'menu-separator-statuses'),
                          (0, i.jsx)(
                              l.sNh,
                              {
                                  id: 'quiet-mode',
                                  'aria-label': 'focus mode',
                                  className: b.expiringStatusMenuItem,
                                  keepItemStyles: !0,
                                  hasSubmenu: !0,
                                  label: () =>
                                      (0, i.jsxs)('div', {
                                          className: b.statusItem,
                                          children: [
                                              (0, i.jsx)(l.owu, {
                                                  size: 'xxs',
                                                  className: b.icon
                                              }),
                                              (0, i.jsxs)('div', {
                                                  className: b.focusModeTitle,
                                                  children: [
                                                      f.intl.string(f.t.gJRnwM),
                                                      (0, i.jsx)(l.IGR, {
                                                          text: r ? f.intl.string(f.t.ApAu9f) : p ? f.intl.string(f.t.gH3Fra) : f.intl.string(f.t['64pl8/']),
                                                          color: r ? s.Z.BRAND_500 : p ? s.Z.RED_400 : s.Z.PRIMARY_500
                                                      })
                                                  ]
                                              }),
                                              (0, i.jsx)('div', {
                                                  className: b.description,
                                                  children:
                                                      r && null != m && '0' !== m
                                                          ? f.intl.formatToPlainString(f.t.BWD8fn, {
                                                                endTime: new Date(Number(m)).toLocaleString(f.intl.currentLocale, {
                                                                    month: 'numeric',
                                                                    day: 'numeric',
                                                                    hour: 'numeric',
                                                                    minute: '2-digit'
                                                                })
                                                            })
                                                          : f.intl.string(f.t['Br1q+/'])
                                              })
                                          ]
                                      }),
                                  action: () => {
                                      (0, c.oW)(!r);
                                  },
                                  dontCloseOnAction: !0,
                                  children: _
                              },
                              'quiet-mode'
                          )
                      ]
                  })
                : null
        ]
    });
}
