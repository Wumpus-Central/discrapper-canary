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
    m = n(369994),
    p = n(162157),
    f = n(290719),
    h = n(177862),
    b = n(11265),
    x = n(592125),
    j = n(984933),
    _ = n(496675),
    v = n(699516),
    O = n(594174),
    C = n(434404),
    y = n(449226),
    N = n(981631),
    E = n(388032),
    I = n(824804);
function S(e) {
    let { guild: t, isExpanded: n, selectedChannelId: l, className: s } = e,
        c = (0, p.BT)(t),
        b = (0, f.Z)(t),
        [j, _] = i.useState(b),
        v = (0, o.e7)([x.Z], () => x.Z.getChannel(l), [l]),
        O = (0, g.ZP)(v),
        C = async () => {
            _(!j);
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
                        channel_id: n,
                    };
                    (0, u.yw)(N.rMx.GUILD_RAID_ALERTS_SETUP, e);
                }
            } catch (e) {
                (0, d.showToast)((0, d.createToast)(E.intl.string(E.t["46Rs3v"]), d.ToastType.FAILURE)), _(!b);
            }
        };
    return (0, r.jsxs)("div", {
        className: a()(I.itemWrapper, s),
        children: [
            (0, r.jsxs)("div", {
                className: I.itemContent,
                children: [
                    (0, r.jsx)(d.Heading, {
                        variant: "text-md/semibold",
                        color: "header-primary",
                        children: E.intl.string(E.t.Qp98s9),
                    }),
                    (0, r.jsx)(d.Text, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: E.intl.string(E.t.Mg843t),
                    }),
                    n || null == l
                        ? null
                        : (0, r.jsxs)(d.Text, {
                              color: "interactive-normal",
                              variant: "text-xs/medium",
                              className: I.valuePill,
                              children: [
                                  (0, r.jsx)(d.VL1, {
                                      size: "xxs",
                                      color: "currentColor",
                                  }),
                                  " ",
                                  O,
                              ],
                          }),
                ],
            }),
            (0, r.jsx)(y.Z, {
                checked: j,
                onChange: C,
                disabled: !c || null == l,
            }),
        ],
    });
}
function T(e) {
    var t;
    let { guild: n, selectedChannelId: i, setSelectedChannelId: l, className: m } = e,
        p = null != (t = n.safetyAlertsChannelId) ? t : null,
        b = (0, o.Wu)([j.ZP, O.default, v.Z, _.Z], () => {
            let e = j.ZP.getChannels(n.id)
                [j.sH].filter((e) => {
                    let { channel: t } = e;
                    return t.type === s.d.GUILD_TEXT && _.Z.can(N.Plq.SEND_MESSAGES, t);
                })
                .map((e) => {
                    let { channel: t } = e;
                    return {
                        value: t.id,
                        label: (0, g.F6)(t, O.default, v.Z, !0),
                    };
                });
            return null != p ? e : [...e];
        }, [n.id, p]),
        x = async (e) => {
            l(e);
            try {
                if (
                    (e !== p &&
                        (await C.Z.saveGuild(n.id, { safetyAlertsChannelId: e }, { throwErr: !0 }),
                        C.Z.updateGuild({ safetyAlertsChannelId: e })),
                    null != e)
                ) {
                    let t = {
                        raid_alert_type: h.wR.JOIN_RAID,
                        enabled: (0, f.Z)(n),
                        raid_alert_channel_id: e,
                        guild_id: n.id,
                        channel_id: e,
                    };
                    (0, u.yw)(N.rMx.GUILD_RAID_ALERTS_SETUP, t);
                }
            } catch (e) {
                (0, d.showToast)((0, d.createToast)(E.intl.string(E.t["46Rs3v"]), d.ToastType.FAILURE)), l(p);
            }
        };
    return (0, r.jsx)("div", {
        className: a()(I.itemBodyContainer, m),
        children: (0, r.jsx)("div", {
            className: I.itemBodyInner,
            children: (0, r.jsx)(c.d, {
                wrapperClassName: I.bringToFront,
                label: E.intl.string(E.t.sMkYE8),
                helperText: E.intl.string(E.t["1QxN9N"]),
                options: b,
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
    return (0, r.jsx)(b.Z, {
        renderHeader: (0, r.jsx)(S, {
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
            (0, r.jsx)(S, {
                isExpanded: !0,
                guild: l,
                selectedChannelId: s,
                className: I.noPadding,
            }),
            (0, r.jsx)(T, {
                guild: l,
                selectedChannelId: s,
                setSelectedChannelId: o,
                className: I.noPadding,
            }),
        ],
    });
}
