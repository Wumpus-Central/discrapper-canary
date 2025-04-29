n.d(t, {
    Z: () => S,
    w: () => T
}),
    n(388685);
var r = n(255367),
    i = n(73800),
    l = n(120356),
    s = n.n(l),
    a = n(106351),
    o = n(442837),
    c = n(481060),
    u = n(367907),
    d = n(933557),
    m = n(369994),
    g = n(162157),
    p = n(177862),
    h = n(11265),
    f = n(592125),
    x = n(984933),
    b = n(496675),
    j = n(699516),
    _ = n(594174),
    v = n(434404),
    O = n(449226),
    C = n(981631),
    y = n(388032),
    N = n(296205);
function I(e) {
    let { guild: t, isExpanded: n, selectedChannelId: l, className: a } = e,
        h = (0, g.BT)(t),
        x = t.canHaveRaidActivityAlerts(),
        [b, j] = i.useState(x),
        _ = (0, o.e7)([f.Z], () => f.Z.getChannel(l), [l]),
        v = (0, d.ZP)(_),
        I = async () => {
            j(!b);
            try {
                var e;
                await (0, m.f6)(t, !x);
                let n = null != (e = null != l ? l : t.safetyAlertsChannelId) ? e : null;
                if (null != n) {
                    let e = {
                        raid_alert_type: p.wR.JOIN_RAID,
                        enabled: !x,
                        raid_alert_channel_id: n,
                        guild_id: t.id,
                        channel_id: n
                    };
                    (0, u.yw)(C.rMx.GUILD_RAID_ALERTS_SETUP, e);
                }
            } catch (e) {
                (0, c.showToast)((0, c.createToast)(y.intl.string(y.t['46Rs3t']), c.ToastType.FAILURE)), j(!x);
            }
        };
    return (0, r.jsxs)('div', {
        className: s()(N.itemWrapper, a),
        children: [
            (0, r.jsxs)('div', {
                className: N.itemContent,
                children: [
                    (0, r.jsx)(c.X6q, {
                        variant: 'text-md/semibold',
                        color: 'header-primary',
                        children: y.intl.string(y.t.Qp98s7)
                    }),
                    (0, r.jsx)(c.Text, {
                        variant: 'text-sm/medium',
                        color: 'header-secondary',
                        children: y.intl.string(y.t.Mg843t)
                    }),
                    n || null == l
                        ? null
                        : (0, r.jsxs)(c.Text, {
                              color: 'interactive-normal',
                              variant: 'text-xs/medium',
                              className: N.valuePill,
                              children: [
                                  (0, r.jsx)(c.VL1, {
                                      size: 'xxs',
                                      color: 'currentColor'
                                  }),
                                  ' ',
                                  v
                              ]
                          })
                ]
            }),
            (0, r.jsx)(O.Z, {
                checked: b,
                onChange: I,
                disabled: !h || null == l
            })
        ]
    });
}
function E(e) {
    var t;
    let { guild: n, selectedChannelId: i, setSelectedChannelId: l, className: m } = e,
        g = null != (t = n.safetyAlertsChannelId) ? t : null,
        h = (0, o.Wu)(
            [x.ZP, _.default, j.Z, b.Z],
            () => {
                let e = x.ZP.getChannels(n.id)
                    [x.sH].filter((e) => {
                        let { channel: t } = e;
                        return t.type === a.d.GUILD_TEXT && b.Z.can(C.Plq.SEND_MESSAGES, t);
                    })
                    .map((e) => {
                        let { channel: t } = e;
                        return {
                            value: t.id,
                            label: (0, d.F6)(t, _.default, j.Z, !0)
                        };
                    });
                return null != g ? e : [...e];
            },
            [n.id, g]
        ),
        f = async (e) => {
            l(e);
            try {
                if ((e !== g && (await v.Z.saveGuild(n.id, { safetyAlertsChannelId: e }, { throwErr: !0 }), v.Z.updateGuild({ safetyAlertsChannelId: e })), null != e)) {
                    let t = {
                        raid_alert_type: p.wR.JOIN_RAID,
                        enabled: n.canHaveRaidActivityAlerts(),
                        raid_alert_channel_id: e,
                        guild_id: n.id,
                        channel_id: e
                    };
                    (0, u.yw)(C.rMx.GUILD_RAID_ALERTS_SETUP, t);
                }
            } catch (e) {
                (0, c.showToast)((0, c.createToast)(y.intl.string(y.t['46Rs3t']), c.ToastType.FAILURE)), l(g);
            }
        };
    return (0, r.jsx)('div', {
        className: s()(N.itemBodyContainer, m),
        children: (0, r.jsxs)('div', {
            className: N.itemBodyInner,
            children: [
                (0, r.jsx)(c.vwX, { children: y.intl.string(y.t.sMkYEx) }),
                (0, r.jsx)(c.VcW, {
                    wrapperClassName: N.bringToFront,
                    options: h,
                    onChange: f,
                    value: i,
                    maxVisibleItems: 5
                }),
                (0, r.jsx)(c.Text, {
                    variant: 'text-sm/medium',
                    color: 'interactive-normal',
                    children: y.intl.string(y.t['1QxN9P'])
                })
            ]
        })
    });
}
function S(e) {
    var t, n;
    let { guild: l } = e,
        [s, a] = i.useState(!1),
        o = null != (t = l.safetyAlertsChannelId) ? t : null,
        [c, u] = i.useState(null != o ? o : null != (n = null == l ? void 0 : l.publicUpdatesChannelId) ? n : null);
    return (0, r.jsx)(h.Z, {
        renderHeader: (0, r.jsx)(I, {
            isExpanded: s,
            guild: l,
            selectedChannelId: c
        }),
        isExpanded: s,
        onExpand: () => a(!s),
        children: (0, r.jsx)(E, {
            guild: l,
            selectedChannelId: c,
            setSelectedChannelId: u
        })
    });
}
function T(e) {
    var t, n;
    let { guild: l } = e,
        s = null != (t = l.safetyAlertsChannelId) ? t : null,
        [a, o] = i.useState(null != s ? s : null != (n = null == l ? void 0 : l.publicUpdatesChannelId) ? n : null);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(I, {
                isExpanded: !0,
                guild: l,
                selectedChannelId: a,
                className: N.noPadding
            }),
            (0, r.jsx)(E, {
                guild: l,
                selectedChannelId: a,
                setSelectedChannelId: o,
                className: N.noPadding
            })
        ]
    });
}
