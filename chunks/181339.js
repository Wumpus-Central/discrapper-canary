n.d(t, {
    Z: () => T,
    w: () => P,
}),
    n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    s = n.n(l),
    a = n(106351),
    o = n(442837),
    c = n(481060),
    d = n(367907),
    u = n(933557),
    g = n(369994),
    m = n(162157),
    p = n(290719),
    f = n(177862),
    h = n(11265),
    x = n(592125),
    b = n(984933),
    j = n(496675),
    _ = n(699516),
    v = n(594174),
    C = n(434404),
    O = n(449226),
    y = n(981631),
    N = n(388032),
    E = n(824804);
function I(e) {
    let { guild: t, isExpanded: n, selectedChannelId: l, className: a } = e,
        h = (0, m.BT)(t),
        b = (0, p.Z)(t),
        [j, _] = i.useState(b),
        v = (0, o.e7)([x.Z], () => x.Z.getChannel(l), [l]),
        C = (0, u.ZP)(v),
        I = async () => {
            _(!j);
            try {
                var e;
                await (0, g.f6)(t, !b);
                let n = null != (e = null != l ? l : t.safetyAlertsChannelId) ? e : null;
                if (null != n) {
                    let e = {
                        raid_alert_type: f.wR.JOIN_RAID,
                        enabled: !b,
                        raid_alert_channel_id: n,
                        guild_id: t.id,
                        channel_id: n,
                    };
                    (0, d.yw)(y.rMx.GUILD_RAID_ALERTS_SETUP, e);
                }
            } catch (e) {
                (0, c.showToast)((0, c.createToast)(N.intl.string(N.t["46Rs3t"]), c.ToastType.FAILURE)), _(!b);
            }
        };
    return (0, r.jsxs)("div", {
        className: s()(E.itemWrapper, a),
        children: [
            (0, r.jsxs)("div", {
                className: E.itemContent,
                children: [
                    (0, r.jsx)(c.X6q, {
                        variant: "text-md/semibold",
                        color: "header-primary",
                        children: N.intl.string(N.t.Qp98s7),
                    }),
                    (0, r.jsx)(c.Text, {
                        variant: "text-sm/medium",
                        color: "header-secondary",
                        children: N.intl.string(N.t.Mg843t),
                    }),
                    n || null == l
                        ? null
                        : (0, r.jsxs)(c.Text, {
                              color: "interactive-normal",
                              variant: "text-xs/medium",
                              className: E.valuePill,
                              children: [
                                  (0, r.jsx)(c.VL1, {
                                      size: "xxs",
                                      color: "currentColor",
                                  }),
                                  " ",
                                  C,
                              ],
                          }),
                ],
            }),
            (0, r.jsx)(O.Z, {
                checked: j,
                onChange: I,
                disabled: !h || null == l,
            }),
        ],
    });
}
function S(e) {
    var t;
    let { guild: n, selectedChannelId: i, setSelectedChannelId: l, className: g } = e,
        m = null != (t = n.safetyAlertsChannelId) ? t : null,
        h = (0, o.Wu)([b.ZP, v.default, _.Z, j.Z], () => {
            let e = b.ZP.getChannels(n.id)
                [b.sH].filter((e) => {
                    let { channel: t } = e;
                    return t.type === a.d.GUILD_TEXT && j.Z.can(y.Plq.SEND_MESSAGES, t);
                })
                .map((e) => {
                    let { channel: t } = e;
                    return {
                        value: t.id,
                        label: (0, u.F6)(t, v.default, _.Z, !0),
                    };
                });
            return null != m ? e : [...e];
        }, [n.id, m]),
        x = async (e) => {
            l(e);
            try {
                if (
                    (e !== m &&
                        (await C.Z.saveGuild(n.id, { safetyAlertsChannelId: e }, { throwErr: !0 }),
                        C.Z.updateGuild({ safetyAlertsChannelId: e })),
                    null != e)
                ) {
                    let t = {
                        raid_alert_type: f.wR.JOIN_RAID,
                        enabled: (0, p.Z)(n),
                        raid_alert_channel_id: e,
                        guild_id: n.id,
                        channel_id: e,
                    };
                    (0, d.yw)(y.rMx.GUILD_RAID_ALERTS_SETUP, t);
                }
            } catch (e) {
                (0, c.showToast)((0, c.createToast)(N.intl.string(N.t["46Rs3t"]), c.ToastType.FAILURE)), l(m);
            }
        };
    return (0, r.jsx)("div", {
        className: s()(E.itemBodyContainer, g),
        children: (0, r.jsxs)("div", {
            className: E.itemBodyInner,
            children: [
                (0, r.jsx)(c.vwX, { children: N.intl.string(N.t.sMkYEx) }),
                (0, r.jsx)(c.VcW, {
                    wrapperClassName: E.bringToFront,
                    options: h,
                    onChange: x,
                    value: i,
                    maxVisibleItems: 5,
                }),
                (0, r.jsx)(c.Text, {
                    variant: "text-sm/medium",
                    color: "interactive-normal",
                    children: N.intl.string(N.t["1QxN9P"]),
                }),
            ],
        }),
    });
}
function T(e) {
    var t, n;
    let { guild: l } = e,
        [s, a] = i.useState(!1),
        o = null != (t = l.safetyAlertsChannelId) ? t : null,
        [c, d] = i.useState(null != o ? o : null != (n = null == l ? void 0 : l.publicUpdatesChannelId) ? n : null);
    return (0, r.jsx)(h.Z, {
        renderHeader: (0, r.jsx)(I, {
            isExpanded: s,
            guild: l,
            selectedChannelId: c,
        }),
        isExpanded: s,
        onExpand: () => a(!s),
        children: (0, r.jsx)(S, {
            guild: l,
            selectedChannelId: c,
            setSelectedChannelId: d,
        }),
    });
}
function P(e) {
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
                className: E.noPadding,
            }),
            (0, r.jsx)(S, {
                guild: l,
                selectedChannelId: a,
                setSelectedChannelId: o,
                className: E.noPadding,
            }),
        ],
    });
}
