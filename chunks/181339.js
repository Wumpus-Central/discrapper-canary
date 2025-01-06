n.d(t, {
    Z: function () {
        return R;
    },
    w: function () {
        return y;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    s = n(106351),
    o = n(442837),
    c = n(481060),
    d = n(367907),
    u = n(933557),
    m = n(369994),
    h = n(162157),
    g = n(177862),
    x = n(11265),
    p = n(592125),
    f = n(984933),
    C = n(496675),
    v = n(699516),
    _ = n(594174),
    I = n(434404),
    N = n(449226),
    T = n(981631),
    j = n(388032),
    b = n(232203);
function S(e) {
    let { guild: t, isExpanded: n, selectedChannelId: l, className: s } = e,
        x = (0, h.BT)(t),
        f = t.canHaveRaidActivityAlerts(),
        [C, v] = r.useState(f),
        _ = (0, o.e7)([p.Z], () => p.Z.getChannel(l), [l]),
        I = (0, u.ZP)(_),
        S = async () => {
            v(!C);
            try {
                var e;
                await (0, m.f6)(t, !f);
                let n = null !== (e = null != l ? l : t.safetyAlertsChannelId) && void 0 !== e ? e : null;
                if (null != n) {
                    let e = {
                        raid_alert_type: g.wR.JOIN_RAID,
                        enabled: !f,
                        raid_alert_channel_id: n,
                        guild_id: t.id,
                        channel_id: n
                    };
                    (0, d.yw)(T.rMx.GUILD_RAID_ALERTS_SETUP, e);
                }
            } catch (e) {
                (0, c.showToast)((0, c.createToast)(j.intl.string(j.t['46Rs3t']), c.ToastType.FAILURE)), v(!f);
            }
        };
    return (0, i.jsxs)('div', {
        className: a()(b.itemWrapper, s),
        children: [
            (0, i.jsxs)('div', {
                className: b.itemContent,
                children: [
                    (0, i.jsx)(c.Heading, {
                        variant: 'text-md/semibold',
                        color: 'header-primary',
                        children: j.intl.string(j.t.Qp98s7)
                    }),
                    (0, i.jsx)(c.Text, {
                        variant: 'text-sm/medium',
                        color: 'header-secondary',
                        children: j.intl.string(j.t.Mg843t)
                    }),
                    n || null == l
                        ? null
                        : (0, i.jsxs)(c.Text, {
                              color: 'interactive-normal',
                              variant: 'text-xs/medium',
                              className: b.valuePill,
                              children: [
                                  (0, i.jsx)(c.TextIcon, {
                                      size: 'xxs',
                                      color: 'currentColor'
                                  }),
                                  ' ',
                                  I
                              ]
                          })
                ]
            }),
            (0, i.jsx)(N.Z, {
                checked: C,
                onChange: S,
                disabled: !x || null == l
            })
        ]
    });
}
function E(e) {
    var t;
    let { guild: n, selectedChannelId: r, setSelectedChannelId: l, className: m } = e,
        h = null !== (t = n.safetyAlertsChannelId) && void 0 !== t ? t : null,
        x = (0, o.Wu)(
            [f.ZP, _.default, v.Z, C.Z],
            () => {
                let e = f.ZP.getChannels(n.id)
                    [f.sH].filter((e) => {
                        let { channel: t } = e;
                        return t.type === s.d.GUILD_TEXT && C.Z.can(T.Plq.SEND_MESSAGES, t);
                    })
                    .map((e) => {
                        let { channel: t } = e;
                        return {
                            value: t.id,
                            label: (0, u.F6)(t, _.default, v.Z, !0)
                        };
                    });
                return null != h ? e : [...e];
            },
            [n.id, h]
        ),
        p = async (e) => {
            l(e);
            try {
                if ((e !== h && (await I.Z.saveGuild(n.id, { safetyAlertsChannelId: e }, { throwErr: !0 }), I.Z.updateGuild({ safetyAlertsChannelId: e })), null != e)) {
                    let t = {
                        raid_alert_type: g.wR.JOIN_RAID,
                        enabled: n.canHaveRaidActivityAlerts(),
                        raid_alert_channel_id: e,
                        guild_id: n.id,
                        channel_id: e
                    };
                    (0, d.yw)(T.rMx.GUILD_RAID_ALERTS_SETUP, t);
                }
            } catch (e) {
                (0, c.showToast)((0, c.createToast)(j.intl.string(j.t['46Rs3t']), c.ToastType.FAILURE)), l(h);
            }
        };
    return (0, i.jsx)('div', {
        className: a()(b.itemBodyContainer, m),
        children: (0, i.jsxs)('div', {
            className: b.itemBodyInner,
            children: [
                (0, i.jsx)(c.FormTitle, { children: j.intl.string(j.t.sMkYEx) }),
                (0, i.jsx)(c.SearchableSelect, {
                    wrapperClassName: b.bringToFront,
                    options: x,
                    onChange: p,
                    value: r,
                    maxVisibleItems: 5
                }),
                (0, i.jsx)(c.Text, {
                    variant: 'text-sm/medium',
                    color: 'interactive-normal',
                    children: j.intl.string(j.t['1QxN9P'])
                })
            ]
        })
    });
}
function R(e) {
    var t, n;
    let { guild: l } = e,
        [a, s] = r.useState(!1),
        o = null !== (t = l.safetyAlertsChannelId) && void 0 !== t ? t : null,
        [c, d] = r.useState(null != o ? o : null !== (n = null == l ? void 0 : l.publicUpdatesChannelId) && void 0 !== n ? n : null);
    return (0, i.jsx)(x.Z, {
        renderHeader: (0, i.jsx)(S, {
            isExpanded: a,
            guild: l,
            selectedChannelId: c
        }),
        isExpanded: a,
        onExpand: () => s(!a),
        children: (0, i.jsx)(E, {
            guild: l,
            selectedChannelId: c,
            setSelectedChannelId: d
        })
    });
}
function y(e) {
    var t, n;
    let { guild: l } = e,
        a = null !== (t = l.safetyAlertsChannelId) && void 0 !== t ? t : null,
        [s, o] = r.useState(null != a ? a : null !== (n = null == l ? void 0 : l.publicUpdatesChannelId) && void 0 !== n ? n : null);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(S, {
                isExpanded: !0,
                guild: l,
                selectedChannelId: s,
                className: b.noPadding
            }),
            (0, i.jsx)(E, {
                guild: l,
                selectedChannelId: s,
                setSelectedChannelId: o,
                className: b.noPadding
            })
        ]
    });
}
