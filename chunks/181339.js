n.d(t, {
    Z: () => S,
    w: () => T
}),
    n(388685);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    l = n.n(s),
    a = n(106351),
    o = n(442837),
    c = n(481060),
    d = n(367907),
    u = n(933557),
    m = n(369994),
    g = n(162157),
    p = n(177862),
    h = n(11265),
    f = n(592125),
    x = n(984933),
    b = n(496675),
    j = n(699516),
    N = n(594174),
    _ = n(434404),
    v = n(449226),
    O = n(981631),
    C = n(388032),
    y = n(296205);
function I(e) {
    let { guild: t, isExpanded: n, selectedChannelId: s, className: a } = e,
        h = (0, g.BT)(t),
        x = t.canHaveRaidActivityAlerts(),
        [b, j] = i.useState(x),
        N = (0, o.e7)([f.Z], () => f.Z.getChannel(s), [s]),
        _ = (0, u.ZP)(N),
        I = async () => {
            j(!b);
            try {
                var e;
                await (0, m.f6)(t, !x);
                let n = null != (e = null != s ? s : t.safetyAlertsChannelId) ? e : null;
                if (null != n) {
                    let e = {
                        raid_alert_type: p.wR.JOIN_RAID,
                        enabled: !x,
                        raid_alert_channel_id: n,
                        guild_id: t.id,
                        channel_id: n
                    };
                    (0, d.yw)(O.rMx.GUILD_RAID_ALERTS_SETUP, e);
                }
            } catch (e) {
                (0, c.showToast)((0, c.createToast)(C.NW.string(C.t['46Rs3t']), c.ToastType.FAILURE)), j(!x);
            }
        };
    return (0, r.jsxs)('div', {
        className: l()(y.itemWrapper, a),
        children: [
            (0, r.jsxs)('div', {
                className: y.itemContent,
                children: [
                    (0, r.jsx)(c.X6q, {
                        variant: 'text-md/semibold',
                        color: 'header-primary',
                        children: C.NW.string(C.t.Qp98s7)
                    }),
                    (0, r.jsx)(c.Text, {
                        variant: 'text-sm/medium',
                        color: 'header-secondary',
                        children: C.NW.string(C.t.Mg843t)
                    }),
                    n || null == s
                        ? null
                        : (0, r.jsxs)(c.Text, {
                              color: 'interactive-normal',
                              variant: 'text-xs/medium',
                              className: y.valuePill,
                              children: [
                                  (0, r.jsx)(c.VL1, {
                                      size: 'xxs',
                                      color: 'currentColor'
                                  }),
                                  ' ',
                                  _
                              ]
                          })
                ]
            }),
            (0, r.jsx)(v.Z, {
                checked: b,
                onChange: I,
                disabled: !h || null == s
            })
        ]
    });
}
function E(e) {
    var t;
    let { guild: n, selectedChannelId: i, setSelectedChannelId: s, className: m } = e,
        g = null != (t = n.safetyAlertsChannelId) ? t : null,
        h = (0, o.Wu)(
            [x.ZP, N.default, j.Z, b.Z],
            () => {
                let e = x.ZP.getChannels(n.id)
                    [x.sH].filter((e) => {
                        let { channel: t } = e;
                        return t.type === a.d.GUILD_TEXT && b.Z.can(O.Plq.SEND_MESSAGES, t);
                    })
                    .map((e) => {
                        let { channel: t } = e;
                        return {
                            value: t.id,
                            label: (0, u.F6)(t, N.default, j.Z, !0)
                        };
                    });
                return null != g ? e : [...e];
            },
            [n.id, g]
        ),
        f = async (e) => {
            s(e);
            try {
                if ((e !== g && (await _.Z.saveGuild(n.id, { safetyAlertsChannelId: e }, { throwErr: !0 }), _.Z.updateGuild({ safetyAlertsChannelId: e })), null != e)) {
                    let t = {
                        raid_alert_type: p.wR.JOIN_RAID,
                        enabled: n.canHaveRaidActivityAlerts(),
                        raid_alert_channel_id: e,
                        guild_id: n.id,
                        channel_id: e
                    };
                    (0, d.yw)(O.rMx.GUILD_RAID_ALERTS_SETUP, t);
                }
            } catch (e) {
                (0, c.showToast)((0, c.createToast)(C.NW.string(C.t['46Rs3t']), c.ToastType.FAILURE)), s(g);
            }
        };
    return (0, r.jsx)('div', {
        className: l()(y.itemBodyContainer, m),
        children: (0, r.jsxs)('div', {
            className: y.itemBodyInner,
            children: [
                (0, r.jsx)(c.vwX, { children: C.NW.string(C.t.sMkYEx) }),
                (0, r.jsx)(c.VcW, {
                    wrapperClassName: y.bringToFront,
                    options: h,
                    onChange: f,
                    value: i,
                    maxVisibleItems: 5
                }),
                (0, r.jsx)(c.Text, {
                    variant: 'text-sm/medium',
                    color: 'interactive-normal',
                    children: C.NW.string(C.t['1QxN9P'])
                })
            ]
        })
    });
}
function S(e) {
    var t, n;
    let { guild: s } = e,
        [l, a] = i.useState(!1),
        o = null != (t = s.safetyAlertsChannelId) ? t : null,
        [c, d] = i.useState(null != o ? o : null != (n = null == s ? void 0 : s.publicUpdatesChannelId) ? n : null);
    return (0, r.jsx)(h.Z, {
        renderHeader: (0, r.jsx)(I, {
            isExpanded: l,
            guild: s,
            selectedChannelId: c
        }),
        isExpanded: l,
        onExpand: () => a(!l),
        children: (0, r.jsx)(E, {
            guild: s,
            selectedChannelId: c,
            setSelectedChannelId: d
        })
    });
}
function T(e) {
    var t, n;
    let { guild: s } = e,
        l = null != (t = s.safetyAlertsChannelId) ? t : null,
        [a, o] = i.useState(null != l ? l : null != (n = null == s ? void 0 : s.publicUpdatesChannelId) ? n : null);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(I, {
                isExpanded: !0,
                guild: s,
                selectedChannelId: a,
                className: y.noPadding
            }),
            (0, r.jsx)(E, {
                guild: s,
                selectedChannelId: a,
                setSelectedChannelId: o,
                className: y.noPadding
            })
        ]
    });
}
