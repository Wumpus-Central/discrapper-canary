n.d(t, {
    F: () => j,
    I: () => C
}),
    n(953529),
    n(388685);
var i = n(200651),
    r = n(192379),
    s = n(722770),
    l = n(481060),
    a = n(440051),
    o = n(734934),
    c = n(158238),
    d = n(695346),
    u = n(70956),
    m = n(51144),
    p = n(246133),
    g = n(981631),
    h = n(388032),
    f = n(404255);
let b = [
        {
            duration: 15 * u.Z.Millis.MINUTE,
            label: () => h.intl.string(h.t['8ot6go'])
        },
        {
            duration: u.Z.Millis.HOUR,
            label: () => h.intl.string(h.t.UMWBZm)
        },
        {
            duration: 8 * u.Z.Millis.HOUR,
            label: () => h.intl.string(h.t.EpAXPD)
        },
        {
            duration: u.Z.Millis.DAY,
            label: () => h.intl.string(h.t['755t4u'])
        },
        {
            duration: 3 * u.Z.Millis.DAY,
            label: () => h.intl.string(h.t['f3/1cn'])
        },
        {
            duration: void 0,
            label: () => h.intl.string(h.t['46dqJS'])
        }
    ],
    _ = [
        {
            duration: u.Z.Millis.HOUR,
            label: () => h.intl.formatToPlainString(h.t.rhY1Rk, { hours: 1 })
        },
        {
            duration: u.Z.Millis.DAY,
            label: () => h.intl.formatToPlainString(h.t.rhY1Rk, { hours: 24 })
        },
        {
            duration: 3 * u.Z.Millis.DAY,
            label: () => h.intl.formatToPlainString(h.t.GBLpQ0, { days: 3 })
        },
        {
            duration: null,
            label: () => h.intl.string(h.t['46dqJS'])
        }
    ];
function x(e, t) {
    return e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth() && e.getDate() === t.getDate();
}
function E(e) {
    let { status: t, currentStatus: n, description: s } = e,
        { showTempStatusOptions: o, hasDefaultClickOption: c, hasButtonStyling: d } = a.Y.useExperiment({ location: 'UserProfileAccountPopout' }),
        h = o && t !== g.Skl.ONLINE,
        [x, E] = r.useState(void 0),
        j = void 0 !== x && t === n,
        C = (0, i.jsx)(i.Fragment, {
            children: b.map((e) => {
                let { duration: r, label: s } = e;
                return (0, i.jsx)(
                    l.sNh,
                    {
                        id: ''.concat(t, '-').concat(r),
                        label: s(),
                        action: () =>
                            (0, p.Z)({
                                nextStatus: t,
                                prevStatus: n,
                                durationMillis: r
                            }),
                        dontCloseOnAction: !0
                    },
                    r
                );
            })
        }),
        O = (0, i.jsx)('div', {
            className: f.durationButtons,
            children: _.map((e) => {
                let { duration: r, label: s } = e;
                return (0, i.jsx)(
                    l.zxk,
                    {
                        id: ''.concat(t, '-').concat(r),
                        onClick: (e) => {
                            e.stopPropagation(),
                                E(r),
                                (0, p.Z)({
                                    nextStatus: t,
                                    prevStatus: n,
                                    durationMillis: null != r ? r : void 0
                                });
                        },
                        className: f.durationButton,
                        color: x === r ? l.Ttl.BRAND : l.Ttl.PRIMARY,
                        size: l.PhG.NONE,
                        grow: !1,
                        children: s()
                    },
                    r
                );
            })
        });
    return (0, i.jsx)(l.sNh, {
        id: t,
        className: f.expiringStatusMenuItem,
        keepItemStyles: !0,
        hasSubmenu: h,
        label: (e) => {
            let { isFocused: n } = e;
            return (0, i.jsxs)('div', {
                className: f.statusItem,
                children: [
                    (0, i.jsx)(l.qbd, {
                        status: t,
                        className: f.icon,
                        size: 10,
                        color: n ? 'currentColor' : void 0
                    }),
                    (0, i.jsx)('div', {
                        className: f.status,
                        children: (0, m.u5)(t)
                    }),
                    null != s &&
                        (0, i.jsx)('div', {
                            className: f.description,
                            children: s
                        }),
                    h && d && j ? O : void 0
                ]
            });
        },
        action: () => {
            E(h ? u.Z.Millis.DAY : null),
                (0, p.Z)({
                    nextStatus: t,
                    prevStatus: n,
                    durationMillis: c && h ? u.Z.Millis.DAY : void 0
                });
        },
        dontCloseOnAction: !0,
        children: h && !d ? C : void 0
    });
}
function j(e) {
    if (null == e || '0' === e) return;
    let t = new Date(Number(e)),
        n = x(t, new Date()),
        i = new Date();
    i.setDate(i.getDate() + 1);
    let r = x(t, i);
    return n
        ? h.intl.formatToPlainString(h.t.ZxxHIC, { timeString: h.intl.data.formatTime(t, { format: 'short' }) })
        : h.intl.formatToPlainString(h.t['9OFjSU'], {
              dateString: r ? h.intl.data.formatRelativeTime(1, 'day', { numeric: 'auto' }) : h.intl.data.formatDate(t, { dateStyle: 'short' }),
              timeString: h.intl.data.formatTime(t, { format: 'short' })
          });
}
function C(e) {
    let { hasNewStrings: t } = a.Y.useExperiment({ location: 'UserProfileAccountPopout' }),
        n = d.Cr.useSetting(),
        r = (0, o.p)(),
        u = c.e.useExperiment({ location: 'UserProfileAccountPopout' }).allowQuietMode || r,
        m = d.fv.useSetting(),
        p = e === g.Skl.DND,
        _ = (i) => {
            let r = j(n);
            if (e === i && null != r) return r;
            switch (i) {
                case g.Skl.DND:
                    return u ? h.intl.string(h.t.day5Aw) : t ? h.intl.string(h.t['tq/fMD']) : h.intl.string(h.t.U9Vv19);
                case g.Skl.INVISIBLE:
                    return t ? h.intl.string(h.t.zPc6MT) : h.intl.string(h.t.MqanVF);
                default:
                    return;
            }
        },
        x = (0, i.jsx)(i.Fragment, {
            children: b.map((t) => {
                let { duration: n, label: r } = t;
                return (0, i.jsx)(
                    l.sNh,
                    {
                        id: ''.concat(e, '-').concat(n),
                        label: r(),
                        action: () => {
                            (0, o.oW)(!0, n);
                        },
                        dontCloseOnAction: !0
                    },
                    n
                );
            })
        }),
        C = E({
            status: g.Skl.ONLINE,
            currentStatus: e
        }),
        O = E({
            status: g.Skl.IDLE,
            currentStatus: e,
            description: _(g.Skl.IDLE)
        }),
        S = E({
            status: g.Skl.DND,
            currentStatus: e,
            description: _(g.Skl.DND)
        }),
        v = E({
            status: g.Skl.INVISIBLE,
            currentStatus: e,
            description: _(g.Skl.INVISIBLE)
        });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            C,
            (0, i.jsx)(l.Clw, {}, 'menu-separator-statuses'),
            O,
            S,
            v,
            u || r
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(l.Clw, {}, 'menu-separator-statuses'),
                          (0, i.jsx)(
                              l.sNh,
                              {
                                  id: 'quiet-mode',
                                  'aria-label': 'focus mode',
                                  className: f.expiringStatusMenuItem,
                                  keepItemStyles: !0,
                                  hasSubmenu: !0,
                                  label: () =>
                                      (0, i.jsxs)('div', {
                                          className: f.statusItem,
                                          children: [
                                              (0, i.jsx)(l.owu, {
                                                  size: 'xxs',
                                                  className: f.icon
                                              }),
                                              (0, i.jsxs)('div', {
                                                  className: f.focusModeTitle,
                                                  children: [
                                                      h.intl.string(h.t.gJRnwM),
                                                      (0, i.jsx)(l.IGR, {
                                                          text: r ? h.intl.string(h.t.ApAu9f) : p ? h.intl.string(h.t.gH3Fra) : h.intl.string(h.t['64pl8/']),
                                                          color: r ? s.Z.BRAND_500 : p ? s.Z.RED_400 : s.Z.PRIMARY_500
                                                      })
                                                  ]
                                              }),
                                              (0, i.jsx)('div', {
                                                  className: f.description,
                                                  children:
                                                      r && null != m && '0' !== m
                                                          ? h.intl.formatToPlainString(h.t.BWD8fn, {
                                                                endTime: new Date(Number(m)).toLocaleString(h.intl.currentLocale, {
                                                                    month: 'numeric',
                                                                    day: 'numeric',
                                                                    hour: 'numeric',
                                                                    minute: '2-digit'
                                                                })
                                                            })
                                                          : h.intl.string(h.t['Br1q+/'])
                                              })
                                          ]
                                      }),
                                  action: () => {
                                      (0, o.oW)(!r);
                                  },
                                  dontCloseOnAction: !0,
                                  children: x
                              },
                              'quiet-mode'
                          )
                      ]
                  })
                : null
        ]
    });
}
