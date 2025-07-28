(n.d(t, {
    Z: () => T,
    w: () => P
}),
    n(388685));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    s = n(106351),
    o = n(442837),
    c = n(481060),
    d = n(367907),
    u = n(933557),
    m = n(369994),
    g = n(162157),
    p = n(290719),
    h = n(177862),
    f = n(11265),
    x = n(592125),
    b = n(984933),
    j = n(496675),
    v = n(699516),
    _ = n(594174),
    O = n(434404),
    y = n(449226),
    C = n(981631),
    N = n(388032),
    I = n(296205);
function E(e) {
    let { guild: t, isExpanded: n, selectedChannelId: l, className: s } = e,
        f = (0, g.BT)(t),
        b = (0, p.Z)(t),
        [j, v] = i.useState(b),
        _ = (0, o.e7)([x.Z], () => x.Z.getChannel(l), [l]),
        O = (0, u.ZP)(_),
        E = async () => {
            v(!j);
            try {
                var e;
                await (0, m.f6)(t, !b);
                let n = null != (e = null != l ? l : t.safetyAlertsChannelId) ? e : null;
                if (null != n) {
                    let e = {
                        raid_alert_type: h.wR.JOIN_RAID,
                        enabled: !b,
                        raid_alert_channel_id: n,
                        guild_id: t.id,
                        channel_id: n
                    };
                    (0, d.yw)(C.rMx.GUILD_RAID_ALERTS_SETUP, e);
                }
            } catch (e) {
                ((0, c.showToast)((0, c.createToast)(N.intl.string(N.t['46Rs3t']), c.ToastType.FAILURE)), v(!b));
            }
        };
    return (0, r.jsxs)('div', {
        className: a()(I.itemWrapper, s),
        children: [
            (0, r.jsxs)('div', {
                className: I.itemContent,
                children: [
                    (0, r.jsx)(c.X6q, {
                        variant: 'text-md/semibold',
                        color: 'header-primary',
                        children: N.intl.string(N.t.Qp98s7)
                    }),
                    (0, r.jsx)(c.Text, {
                        variant: 'text-sm/medium',
                        color: 'header-secondary',
                        children: N.intl.string(N.t.Mg843t)
                    }),
                    n || null == l
                        ? null
                        : (0, r.jsxs)(c.Text, {
                              color: 'interactive-normal',
                              variant: 'text-xs/medium',
                              className: I.valuePill,
                              children: [
                                  (0, r.jsx)(c.VL1, {
                                      size: 'xxs',
                                      color: 'currentColor'
                                  }),
                                  ' ',
                                  O
                              ]
                          })
                ]
            }),
            (0, r.jsx)(y.Z, {
                checked: j,
                onChange: E,
                disabled: !f || null == l
            })
        ]
    });
}
function S(e) {
    var t;
    let { guild: n, selectedChannelId: i, setSelectedChannelId: l, className: m } = e,
        g = null != (t = n.safetyAlertsChannelId) ? t : null,
        f = (0, o.Wu)(
            [b.ZP, _.default, v.Z, j.Z],
            () => {
                let e = b.ZP.getChannels(n.id)
                    [b.sH].filter((e) => {
                        let { channel: t } = e;
                        return t.type === s.d.GUILD_TEXT && j.Z.can(C.Plq.SEND_MESSAGES, t);
                    })
                    .map((e) => {
                        let { channel: t } = e;
                        return {
                            value: t.id,
                            label: (0, u.F6)(t, _.default, v.Z, !0)
                        };
                    });
                return null != g ? e : [...e];
            },
            [n.id, g]
        ),
        x = async (e) => {
            l(e);
            try {
                if ((e !== g && (await O.Z.saveGuild(n.id, { safetyAlertsChannelId: e }, { throwErr: !0 }), O.Z.updateGuild({ safetyAlertsChannelId: e })), null != e)) {
                    let t = {
                        raid_alert_type: h.wR.JOIN_RAID,
                        enabled: (0, p.Z)(n),
                        raid_alert_channel_id: e,
                        guild_id: n.id,
                        channel_id: e
                    };
                    (0, d.yw)(C.rMx.GUILD_RAID_ALERTS_SETUP, t);
                }
            } catch (e) {
                ((0, c.showToast)((0, c.createToast)(N.intl.string(N.t['46Rs3t']), c.ToastType.FAILURE)), l(g));
            }
        };
    return (0, r.jsx)('div', {
        className: a()(I.itemBodyContainer, m),
        children: (0, r.jsxs)('div', {
            className: I.itemBodyInner,
            children: [
                (0, r.jsx)(c.vwX, { children: N.intl.string(N.t.sMkYEx) }),
                (0, r.jsx)(c.VcW, {
                    wrapperClassName: I.bringToFront,
                    options: f,
                    onChange: x,
                    value: i,
                    maxVisibleItems: 5
                }),
                (0, r.jsx)(c.Text, {
                    variant: 'text-sm/medium',
                    color: 'interactive-normal',
                    children: N.intl.string(N.t['1QxN9P'])
                })
            ]
        })
    });
}
function T(e) {
    var t, n;
    let { guild: l } = e,
        [a, s] = i.useState(!1),
        o = null != (t = l.safetyAlertsChannelId) ? t : null,
        [c, d] = i.useState(null != o ? o : null != (n = null == l ? void 0 : l.publicUpdatesChannelId) ? n : null);
    return (0, r.jsx)(f.Z, {
        renderHeader: (0, r.jsx)(E, {
            isExpanded: a,
            guild: l,
            selectedChannelId: c
        }),
        isExpanded: a,
        onExpand: () => s(!a),
        children: (0, r.jsx)(S, {
            guild: l,
            selectedChannelId: c,
            setSelectedChannelId: d
        })
    });
}
function P(e) {
    var t, n;
    let { guild: l } = e,
        a = null != (t = l.safetyAlertsChannelId) ? t : null,
        [s, o] = i.useState(null != a ? a : null != (n = null == l ? void 0 : l.publicUpdatesChannelId) ? n : null);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(E, {
                isExpanded: !0,
                guild: l,
                selectedChannelId: s,
                className: I.noPadding
            }),
            (0, r.jsx)(S, {
                guild: l,
                selectedChannelId: s,
                setSelectedChannelId: o,
                className: I.noPadding
            })
        ]
    });
}
