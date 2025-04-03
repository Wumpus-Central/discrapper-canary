n.d(t, {
    F: () => E,
    I: () => j
}),
    n(266796),
    n(47120);
var r = n(200651),
    i = n(192379),
    s = n(722770),
    a = n(481060),
    l = n(440051),
    o = n(734934),
    c = n(158238),
    d = n(695346),
    u = n(70956),
    m = n(51144),
    g = n(246133),
    p = n(981631),
    h = n(388032),
    f = n(659233);
let b = [
        {
            duration: 15 * u.Z.Millis.MINUTE,
            label: () => h.NW.string(h.t['8ot6go'])
        },
        {
            duration: u.Z.Millis.HOUR,
            label: () => h.NW.string(h.t.UMWBZm)
        },
        {
            duration: 8 * u.Z.Millis.HOUR,
            label: () => h.NW.string(h.t.EpAXPD)
        },
        {
            duration: u.Z.Millis.DAY,
            label: () => h.NW.string(h.t['755t4u'])
        },
        {
            duration: 3 * u.Z.Millis.DAY,
            label: () => h.NW.string(h.t['f3/1cn'])
        },
        {
            duration: void 0,
            label: () => h.NW.string(h.t['46dqJS'])
        }
    ],
    N = [
        {
            duration: u.Z.Millis.HOUR,
            label: () => h.NW.formatToPlainString(h.t.rhY1Rk, { hours: 1 })
        },
        {
            duration: u.Z.Millis.DAY,
            label: () => h.NW.formatToPlainString(h.t.rhY1Rk, { hours: 24 })
        },
        {
            duration: 3 * u.Z.Millis.DAY,
            label: () => h.NW.formatToPlainString(h.t.GBLpQ0, { days: 3 })
        },
        {
            duration: void 0,
            label: () => h.NW.string(h.t['46dqJS'])
        }
    ];
function x(e, t) {
    return e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth() && e.getDate() === t.getDate();
}
function _(e) {
    let { status: t, currentStatus: n, description: s } = e,
        { showTempStatusOptions: o, hasDefaultClickOption: c, hasButtonStyling: d } = l.Y.useExperiment({ location: 'AccountProfilePopout' }),
        h = o && t !== p.Skl.ONLINE,
        [x, _] = i.useState(null),
        E = null != x && t === n,
        j = (0, r.jsx)(r.Fragment, {
            children: b.map((e) => {
                let { duration: i, label: s } = e;
                return (0, r.jsx)(
                    a.sNh,
                    {
                        id: ''.concat(t, '-').concat(i),
                        label: s(),
                        action: () =>
                            (0, g.Z)({
                                nextStatus: t,
                                prevStatus: n,
                                durationMillis: i
                            }),
                        dontCloseOnAction: !0
                    },
                    i
                );
            })
        }),
        O = (0, r.jsx)('div', {
            className: f.durationButtons,
            children: N.map((e) => {
                let { duration: i, label: s } = e;
                return (0, r.jsx)(
                    a.zxk,
                    {
                        id: ''.concat(t, '-').concat(i),
                        onClick: (e) => {
                            e.stopPropagation(),
                                _(null != i ? i : null),
                                (0, g.Z)({
                                    nextStatus: t,
                                    prevStatus: n,
                                    durationMillis: i
                                });
                        },
                        className: f.durationButton,
                        color: x === i ? a.Ttl.BRAND : a.Ttl.PRIMARY,
                        size: a.PhG.NONE,
                        grow: !1,
                        children: s()
                    },
                    i
                );
            })
        });
    return (0, r.jsx)(a.sNh, {
        id: t,
        className: f.expiringStatusMenuItem,
        keepItemStyles: !0,
        hasSubmenu: h,
        label: (e) => {
            let { isFocused: n } = e;
            return (0, r.jsxs)('div', {
                className: f.statusItem,
                children: [
                    (0, r.jsx)(a.qbd, {
                        status: t,
                        className: f.icon,
                        size: 10,
                        color: n ? 'currentColor' : void 0
                    }),
                    (0, r.jsx)('div', {
                        className: f.status,
                        children: (0, m.u5)(t)
                    }),
                    null != s &&
                        (0, r.jsx)('div', {
                            className: f.description,
                            children: s
                        }),
                    h && d && E ? O : void 0
                ]
            });
        },
        action: () => {
            _(h ? u.Z.Millis.DAY : null),
                (0, g.Z)({
                    nextStatus: t,
                    prevStatus: n,
                    durationMillis: c && h ? u.Z.Millis.DAY : void 0
                });
        },
        dontCloseOnAction: !0,
        children: h && !d ? j : void 0
    });
}
function E(e) {
    if (null == e || '0' === e) return;
    let t = new Date(Number(e)),
        n = x(t, new Date()),
        r = new Date();
    r.setDate(r.getDate() + 1);
    let i = x(t, r);
    return n
        ? h.NW.formatToPlainString(h.t.ZxxHIC, { timeString: h.NW.data.formatTime(t, { format: 'short' }) })
        : h.NW.formatToPlainString(h.t['9OFjSU'], {
              dateString: i ? h.NW.data.formatRelativeTime(1, 'day', { numeric: 'auto' }) : h.NW.data.formatDate(t, { dateStyle: 'short' }),
              timeString: h.NW.data.formatTime(t, { format: 'short' })
          });
}
function j(e) {
    let { hasNewStrings: t } = l.Y.useExperiment({ location: 'AccountProfilePopout' }),
        n = d.Cr.useSetting(),
        i = (0, o.p)(),
        u = c.e.useExperiment({ location: 'AccountProfilePopout' }).allowQuietMode || i,
        m = d.fv.useSetting(),
        g = e === p.Skl.DND,
        N = (r) => {
            let i = E(n);
            if (e === r && null != i) return i;
            switch (r) {
                case p.Skl.DND:
                    return u ? h.NW.string(h.t.day5Aw) : t ? h.NW.string(h.t['tq/fMD']) : h.NW.string(h.t.U9Vv19);
                case p.Skl.INVISIBLE:
                    return t ? h.NW.string(h.t.zPc6MT) : h.NW.string(h.t.MqanVF);
                default:
                    return;
            }
        },
        x = (0, r.jsx)(r.Fragment, {
            children: b.map((t) => {
                let { duration: n, label: i } = t;
                return (0, r.jsx)(
                    a.sNh,
                    {
                        id: ''.concat(e, '-').concat(n),
                        label: i(),
                        action: () => {
                            (0, o.oW)(!0, n);
                        },
                        dontCloseOnAction: !0
                    },
                    n
                );
            })
        }),
        j = _({
            status: p.Skl.ONLINE,
            currentStatus: e
        }),
        O = _({
            status: p.Skl.IDLE,
            currentStatus: e,
            description: N(p.Skl.IDLE)
        }),
        C = _({
            status: p.Skl.DND,
            currentStatus: e,
            description: N(p.Skl.DND)
        }),
        S = _({
            status: p.Skl.INVISIBLE,
            currentStatus: e,
            description: N(p.Skl.INVISIBLE)
        });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            j,
            (0, r.jsx)(a.Clw, {}, 'menu-separator-statuses'),
            O,
            C,
            S,
            u || i
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(a.Clw, {}, 'menu-separator-statuses'),
                          (0, r.jsx)(
                              a.sNh,
                              {
                                  id: 'quiet-mode',
                                  'aria-label': 'focus mode',
                                  className: f.expiringStatusMenuItem,
                                  keepItemStyles: !0,
                                  hasSubmenu: !0,
                                  label: () =>
                                      (0, r.jsxs)('div', {
                                          className: f.statusItem,
                                          children: [
                                              (0, r.jsx)(a.owu, {
                                                  size: 'xxs',
                                                  className: f.icon
                                              }),
                                              (0, r.jsxs)('div', {
                                                  className: f.focusModeTitle,
                                                  children: [
                                                      h.NW.string(h.t.gJRnwM),
                                                      (0, r.jsx)(a.IGR, {
                                                          text: i ? h.NW.string(h.t.ApAu9f) : g ? h.NW.string(h.t.gH3Fra) : h.NW.string(h.t['64pl8/']),
                                                          color: i ? s.Z.BRAND_500 : g ? s.Z.RED_400 : s.Z.PRIMARY_500
                                                      })
                                                  ]
                                              }),
                                              (0, r.jsx)('div', {
                                                  className: f.description,
                                                  children:
                                                      i && null != m && '0' !== m
                                                          ? h.NW.formatToPlainString(h.t.BWD8fn, {
                                                                endTime: new Date(Number(m)).toLocaleString(h.NW.currentLocale, {
                                                                    month: 'numeric',
                                                                    day: 'numeric',
                                                                    hour: 'numeric',
                                                                    minute: '2-digit'
                                                                })
                                                            })
                                                          : h.NW.string(h.t['Br1q+/'])
                                              })
                                          ]
                                      }),
                                  action: () => {
                                      (0, o.oW)(!i);
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
