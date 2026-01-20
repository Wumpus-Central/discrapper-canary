n.d(t, {
    Z: () => T,
    w: () => P,
}),
    n(388685);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    s = n(106351),
    o = n(442837),
    c = n(481060),
    d = n(367907),
    u = n(933557),
    g = n(369994),
    f = n(162157),
    m = n(290719),
    b = n(177862),
    p = n(11265),
    h = n(592125),
    x = n(984933),
    j = n(496675),
    v = n(699516),
    O = n(594174),
    y = n(434404),
    C = n(449226),
    N = n(981631),
    E = n(388032),
    I = n(146473);
function S(e) {
    let { guild: t, isExpanded: n, selectedChannelId: l, className: s } = e,
        p = (0, f.BT)(t),
        x = (0, m.Z)(t),
        [j, v] = i.useState(x),
        O = (0, o.e7)([h.Z], () => h.Z.getChannel(l), [l]),
        y = (0, u.ZP)(O),
        S = async () => {
            v(!j);
            try {
                var e;
                await (0, g.f6)(t, !x);
                let n = null != (e = null != l ? l : t.safetyAlertsChannelId) ? e : null;
                if (null != n) {
                    let e = {
                        raid_alert_type: b.wR.JOIN_RAID,
                        enabled: !x,
                        raid_alert_channel_id: n,
                        guild_id: t.id,
                        channel_id: n,
                    };
                    (0, d.yw)(N.rMx.GUILD_RAID_ALERTS_SETUP, e);
                }
            } catch (e) {
                (0, c.showToast)((0, c.createToast)(E.intl.string(E.t["46Rs3v"]), c.ToastType.FAILURE)), v(!x);
            }
        };
    return (0, r.jsxs)("div", {
        className: a()(I.itemWrapper, s),
        children: [
            (0, r.jsxs)("div", {
                className: I.itemContent,
                children: [
                    (0, r.jsx)(c.Heading, {
                        variant: "text-md/semibold",
                        color: "text-strong",
                        children: E.intl.string(E.t.Qp98s9),
                    }),
                    (0, r.jsx)(c.Text, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: E.intl.string(E.t.Mg843t),
                    }),
                    n || null == l
                        ? null
                        : (0, r.jsxs)(c.Text, {
                              color: "interactive-text-default",
                              variant: "text-xs/medium",
                              className: I.valuePill,
                              children: [
                                  (0, r.jsx)(c.VL1, {
                                      size: "xxs",
                                      color: "currentColor",
                                  }),
                                  " ",
                                  y,
                              ],
                          }),
                ],
            }),
            (0, r.jsx)(C.Z, {
                checked: j,
                onChange: S,
                disabled: !p || null == l,
            }),
        ],
    });
}
function _(e) {
    var t;
    let { guild: n, selectedChannelId: i, setSelectedChannelId: l, className: g } = e,
        f = null != (t = n.safetyAlertsChannelId) ? t : null,
        p = (0, o.Wu)([x.ZP, O.default, v.Z, j.Z], () => {
            let e = x.ZP.getChannels(n.id)
                [x.sH].filter((e) => {
                    let { channel: t } = e;
                    return t.type === s.d.GUILD_TEXT && j.Z.can(N.Plq.SEND_MESSAGES, t);
                })
                .map((e) => {
                    let { channel: t } = e;
                    return {
                        id: t.id,
                        value: t.id,
                        label: (0, u.F6)(t, O.default, v.Z, !0),
                    };
                });
            return null != f ? e : [...e];
        }, [n.id, f]),
        h = async (e) => {
            l(e);
            try {
                if (
                    (e !== f &&
                        (await y.Z.saveGuild(n.id, { safetyAlertsChannelId: e }, { throwErr: !0 }),
                        y.Z.updateGuild({ safetyAlertsChannelId: e })),
                    null != e)
                ) {
                    let t = {
                        raid_alert_type: b.wR.JOIN_RAID,
                        enabled: (0, m.Z)(n),
                        raid_alert_channel_id: e,
                        guild_id: n.id,
                        channel_id: e,
                    };
                    (0, d.yw)(N.rMx.GUILD_RAID_ALERTS_SETUP, t);
                }
            } catch (e) {
                (0, c.showToast)((0, c.createToast)(E.intl.string(E.t["46Rs3v"]), c.ToastType.FAILURE)), l(f);
            }
        };
    return (0, r.jsx)("div", {
        className: a()(I.itemBodyContainer, g),
        children: (0, r.jsx)("div", {
            className: I.itemBodyInner,
            children: (0, r.jsx)(c.VcW, {
                selectionMode: "single",
                label: E.intl.string(E.t.sMkYE8),
                helperText: E.intl.string(E.t["1QxN9N"]),
                options: p,
                onSelectionChange: h,
                value: i,
                maxOptionsVisible: 5,
            }),
        }),
    });
}
function T(e) {
    var t, n;
    let { guild: l } = e,
        [a, s] = i.useState(!1),
        o = null != (t = l.safetyAlertsChannelId) ? t : null,
        [c, d] = i.useState(null != o ? o : null != (n = null == l ? void 0 : l.publicUpdatesChannelId) ? n : null);
    return (0, r.jsx)(p.Z, {
        renderHeader: (0, r.jsx)(S, {
            isExpanded: a,
            guild: l,
            selectedChannelId: c,
        }),
        isExpanded: a,
        onExpand: () => s(!a),
        children: (0, r.jsx)(_, {
            guild: l,
            selectedChannelId: c,
            setSelectedChannelId: d,
        }),
    });
}
function P(e) {
    var t, n;
    let { guild: l } = e,
        a = null != (t = l.safetyAlertsChannelId) ? t : null,
        [s, o] = i.useState(null != a ? a : null != (n = null == l ? void 0 : l.publicUpdatesChannelId) ? n : null);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(S, {
                isExpanded: !0,
                guild: l,
                selectedChannelId: s,
                className: I.noPadding,
            }),
            (0, r.jsx)(_, {
                guild: l,
                selectedChannelId: s,
                setSelectedChannelId: o,
                className: I.noPadding,
            }),
        ],
    });
}
