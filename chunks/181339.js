n.d(t, {
    Z: () => R,
    w: () => Z
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    s = n.n(l),
    a = n(106351),
    o = n(442837),
    c = n(481060),
    d = n(367907),
    u = n(933557),
    m = n(369994),
    h = n(162157),
    g = n(177862),
    x = n(11265),
    p = n(592125),
    _ = n(984933),
    C = n(496675),
    f = n(699516),
    v = n(594174),
    N = n(434404),
    j = n(449226),
    I = n(981631),
    E = n(388032),
    b = n(232203);
function T(e) {
    let { guild: t, isExpanded: n, selectedChannelId: l, className: a } = e,
        x = (0, h.BT)(t),
        _ = t.canHaveRaidActivityAlerts(),
        [C, f] = r.useState(_),
        v = (0, o.e7)([p.Z], () => p.Z.getChannel(l), [l]),
        N = (0, u.ZP)(v),
        T = async () => {
            f(!C);
            try {
                var e;
                await (0, m.f6)(t, !_);
                let n = null !== (e = null != l ? l : t.safetyAlertsChannelId) && void 0 !== e ? e : null;
                if (null != n) {
                    let e = {
                        raid_alert_type: g.wR.JOIN_RAID,
                        enabled: !_,
                        raid_alert_channel_id: n,
                        guild_id: t.id,
                        channel_id: n
                    };
                    (0, d.yw)(I.rMx.GUILD_RAID_ALERTS_SETUP, e);
                }
            } catch (e) {
                (0, c.showToast)((0, c.createToast)(E.intl.string(E.t['46Rs3t']), c.ToastType.FAILURE)), f(!_);
            }
        };
    return (0, i.jsxs)('div', {
        className: s()(b.itemWrapper, a),
        children: [
            (0, i.jsxs)('div', {
                className: b.itemContent,
                children: [
                    (0, i.jsx)(c.X6q, {
                        variant: 'text-md/semibold',
                        color: 'header-primary',
                        children: E.intl.string(E.t.Qp98s7)
                    }),
                    (0, i.jsx)(c.Text, {
                        variant: 'text-sm/medium',
                        color: 'header-secondary',
                        children: E.intl.string(E.t.Mg843t)
                    }),
                    n || null == l
                        ? null
                        : (0, i.jsxs)(c.Text, {
                              color: 'interactive-normal',
                              variant: 'text-xs/medium',
                              className: b.valuePill,
                              children: [
                                  (0, i.jsx)(c.VL1, {
                                      size: 'xxs',
                                      color: 'currentColor'
                                  }),
                                  ' ',
                                  N
                              ]
                          })
                ]
            }),
            (0, i.jsx)(j.Z, {
                checked: C,
                onChange: T,
                disabled: !x || null == l
            })
        ]
    });
}
function S(e) {
    var t;
    let { guild: n, selectedChannelId: r, setSelectedChannelId: l, className: m } = e,
        h = null !== (t = n.safetyAlertsChannelId) && void 0 !== t ? t : null,
        x = (0, o.Wu)(
            [_.ZP, v.default, f.Z, C.Z],
            () => {
                let e = _.ZP.getChannels(n.id)
                    [_.sH].filter((e) => {
                        let { channel: t } = e;
                        return t.type === a.d.GUILD_TEXT && C.Z.can(I.Plq.SEND_MESSAGES, t);
                    })
                    .map((e) => {
                        let { channel: t } = e;
                        return {
                            value: t.id,
                            label: (0, u.F6)(t, v.default, f.Z, !0)
                        };
                    });
                return null != h ? e : [...e];
            },
            [n.id, h]
        ),
        p = async (e) => {
            l(e);
            try {
                if ((e !== h && (await N.Z.saveGuild(n.id, { safetyAlertsChannelId: e }, { throwErr: !0 }), N.Z.updateGuild({ safetyAlertsChannelId: e })), null != e)) {
                    let t = {
                        raid_alert_type: g.wR.JOIN_RAID,
                        enabled: n.canHaveRaidActivityAlerts(),
                        raid_alert_channel_id: e,
                        guild_id: n.id,
                        channel_id: e
                    };
                    (0, d.yw)(I.rMx.GUILD_RAID_ALERTS_SETUP, t);
                }
            } catch (e) {
                (0, c.showToast)((0, c.createToast)(E.intl.string(E.t['46Rs3t']), c.ToastType.FAILURE)), l(h);
            }
        };
    return (0, i.jsx)('div', {
        className: s()(b.itemBodyContainer, m),
        children: (0, i.jsxs)('div', {
            className: b.itemBodyInner,
            children: [
                (0, i.jsx)(c.vwX, { children: E.intl.string(E.t.sMkYEx) }),
                (0, i.jsx)(c.VcW, {
                    wrapperClassName: b.bringToFront,
                    options: x,
                    onChange: p,
                    value: r,
                    maxVisibleItems: 5
                }),
                (0, i.jsx)(c.Text, {
                    variant: 'text-sm/medium',
                    color: 'interactive-normal',
                    children: E.intl.string(E.t['1QxN9P'])
                })
            ]
        })
    });
}
function R(e) {
    var t, n;
    let { guild: l } = e,
        [s, a] = r.useState(!1),
        o = null !== (t = l.safetyAlertsChannelId) && void 0 !== t ? t : null,
        [c, d] = r.useState(null != o ? o : null !== (n = null == l ? void 0 : l.publicUpdatesChannelId) && void 0 !== n ? n : null);
    return (0, i.jsx)(x.Z, {
        renderHeader: (0, i.jsx)(T, {
            isExpanded: s,
            guild: l,
            selectedChannelId: c
        }),
        isExpanded: s,
        onExpand: () => a(!s),
        children: (0, i.jsx)(S, {
            guild: l,
            selectedChannelId: c,
            setSelectedChannelId: d
        })
    });
}
function Z(e) {
    var t, n;
    let { guild: l } = e,
        s = null !== (t = l.safetyAlertsChannelId) && void 0 !== t ? t : null,
        [a, o] = r.useState(null != s ? s : null !== (n = null == l ? void 0 : l.publicUpdatesChannelId) && void 0 !== n ? n : null);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(T, {
                isExpanded: !0,
                guild: l,
                selectedChannelId: a,
                className: b.noPadding
            }),
            (0, i.jsx)(S, {
                guild: l,
                selectedChannelId: a,
                setSelectedChannelId: o,
                className: b.noPadding
            })
        ]
    });
}
