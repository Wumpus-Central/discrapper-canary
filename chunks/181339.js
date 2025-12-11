n.d(t, {
    Z: () => P,
    w: () => w,
}),
    n(388685);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    s = n(106351),
    o = n(442837),
    c = n(668339),
    d = n(481060),
    u = n(367907),
    g = n(933557),
    f = n(369994),
    m = n(162157),
    b = n(290719),
    p = n(177862),
    h = n(11265),
    x = n(592125),
    j = n(984933),
    v = n(496675),
    O = n(699516),
    C = n(594174),
    y = n(434404),
    N = n(449226),
    E = n(981631),
    I = n(388032),
    S = n(146473);
function _(e) {
    let { guild: t, isExpanded: n, selectedChannelId: l, className: s } = e,
        c = (0, m.BT)(t),
        h = (0, b.Z)(t),
        [j, v] = i.useState(h),
        O = (0, o.e7)([x.Z], () => x.Z.getChannel(l), [l]),
        C = (0, g.ZP)(O),
        y = async () => {
            v(!j);
            try {
                var e;
                await (0, f.f6)(t, !h);
                let n = null != (e = null != l ? l : t.safetyAlertsChannelId) ? e : null;
                if (null != n) {
                    let e = {
                        raid_alert_type: p.wR.JOIN_RAID,
                        enabled: !h,
                        raid_alert_channel_id: n,
                        guild_id: t.id,
                        channel_id: n,
                    };
                    (0, u.yw)(E.rMx.GUILD_RAID_ALERTS_SETUP, e);
                }
            } catch (e) {
                (0, d.showToast)((0, d.createToast)(I.intl.string(I.t["46Rs3v"]), d.ToastType.FAILURE)), v(!h);
            }
        };
    return (0, r.jsxs)("div", {
        className: a()(S.itemWrapper, s),
        children: [
            (0, r.jsxs)("div", {
                className: S.itemContent,
                children: [
                    (0, r.jsx)(d.Heading, {
                        variant: "text-md/semibold",
                        color: "text-strong",
                        children: I.intl.string(I.t.Qp98s9),
                    }),
                    (0, r.jsx)(d.Text, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: I.intl.string(I.t.Mg843t),
                    }),
                    n || null == l
                        ? null
                        : (0, r.jsxs)(d.Text, {
                              color: "interactive-text-default",
                              variant: "text-xs/medium",
                              className: S.valuePill,
                              children: [
                                  (0, r.jsx)(d.VL1, {
                                      size: "xxs",
                                      color: "currentColor",
                                  }),
                                  " ",
                                  C,
                              ],
                          }),
                ],
            }),
            (0, r.jsx)(N.Z, {
                checked: j,
                onChange: y,
                disabled: !c || null == l,
            }),
        ],
    });
}
function T(e) {
    var t;
    let { guild: n, selectedChannelId: i, setSelectedChannelId: l, className: f } = e,
        m = null != (t = n.safetyAlertsChannelId) ? t : null,
        h = (0, o.Wu)([j.ZP, C.default, O.Z, v.Z], () => {
            let e = j.ZP.getChannels(n.id)
                [j.sH].filter((e) => {
                    let { channel: t } = e;
                    return t.type === s.d.GUILD_TEXT && v.Z.can(E.Plq.SEND_MESSAGES, t);
                })
                .map((e) => {
                    let { channel: t } = e;
                    return {
                        value: t.id,
                        label: (0, g.F6)(t, C.default, O.Z, !0),
                    };
                });
            return null != m ? e : [...e];
        }, [n.id, m]),
        x = async (e) => {
            l(e);
            try {
                if (
                    (e !== m &&
                        (await y.Z.saveGuild(n.id, { safetyAlertsChannelId: e }, { throwErr: !0 }),
                        y.Z.updateGuild({ safetyAlertsChannelId: e })),
                    null != e)
                ) {
                    let t = {
                        raid_alert_type: p.wR.JOIN_RAID,
                        enabled: (0, b.Z)(n),
                        raid_alert_channel_id: e,
                        guild_id: n.id,
                        channel_id: e,
                    };
                    (0, u.yw)(E.rMx.GUILD_RAID_ALERTS_SETUP, t);
                }
            } catch (e) {
                (0, d.showToast)((0, d.createToast)(I.intl.string(I.t["46Rs3v"]), d.ToastType.FAILURE)), l(m);
            }
        };
    return (0, r.jsx)("div", {
        className: a()(S.itemBodyContainer, f),
        children: (0, r.jsx)("div", {
            className: S.itemBodyInner,
            children: (0, r.jsx)(c.d, {
                wrapperClassName: S.bringToFront,
                label: I.intl.string(I.t.sMkYE8),
                helperText: I.intl.string(I.t["1QxN9N"]),
                options: h,
                onChange: x,
                value: i,
                maxVisibleItems: 5,
            }),
        }),
    });
}
function P(e) {
    var t, n;
    let { guild: l } = e,
        [a, s] = i.useState(!1),
        o = null != (t = l.safetyAlertsChannelId) ? t : null,
        [c, d] = i.useState(null != o ? o : null != (n = null == l ? void 0 : l.publicUpdatesChannelId) ? n : null);
    return (0, r.jsx)(h.Z, {
        renderHeader: (0, r.jsx)(_, {
            isExpanded: a,
            guild: l,
            selectedChannelId: c,
        }),
        isExpanded: a,
        onExpand: () => s(!a),
        children: (0, r.jsx)(T, {
            guild: l,
            selectedChannelId: c,
            setSelectedChannelId: d,
        }),
    });
}
function w(e) {
    var t, n;
    let { guild: l } = e,
        a = null != (t = l.safetyAlertsChannelId) ? t : null,
        [s, o] = i.useState(null != a ? a : null != (n = null == l ? void 0 : l.publicUpdatesChannelId) ? n : null);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(_, {
                isExpanded: !0,
                guild: l,
                selectedChannelId: s,
                className: S.noPadding,
            }),
            (0, r.jsx)(T, {
                guild: l,
                selectedChannelId: s,
                setSelectedChannelId: o,
                className: S.noPadding,
            }),
        ],
    });
}
