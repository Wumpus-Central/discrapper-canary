n.d(t, {
    A: () => I,
    b: () => C,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(478437),
    c = n(311907),
    o = n(397927),
    d = n(58149),
    u = n(47167),
    f = n(554113),
    g = n(974103),
    b = n(978956),
    m = n(615550),
    p = n(419707),
    x = n(734057),
    h = n(808728),
    j = n(576705),
    O = n(994500),
    y = n(287809),
    v = n(997509),
    A = n(600955),
    E = n(652215),
    N = n(985018),
    _ = n(690450);
function S(e) {
    let { guild: t, isExpanded: n, selectedChannelId: l, className: a } = e,
        p = (0, g.w)(t),
        h = (0, b.A)(t),
        [j, O] = i.useState(h),
        y = (0, c.bG)([x.A], () => x.A.getChannel(l), [l]),
        v = (0, u.Ay)(y),
        S = async () => {
            O(!j);
            try {
                var e;
                await (0, f.jB)(t, !h);
                let n = null != (e = null != l ? l : t.safetyAlertsChannelId) ? e : null;
                if (null != n) {
                    let e = {
                        raid_alert_type: m.TF.JOIN_RAID,
                        enabled: !h,
                        raid_alert_channel_id: n,
                        guild_id: t.id,
                        channel_id: n,
                    };
                    (0, d.zV)(E.HAw.GUILD_RAID_ALERTS_SETUP, e);
                }
            } catch (e) {
                (0, o.showToast)((0, o.createToast)(N.intl.string(N.t["46Rs3v"]), o.ToastType.FAILURE)), O(!h);
            }
        };
    return (0, r.jsxs)("div", {
        className: s()(_.D5, a),
        children: [
            (0, r.jsxs)("div", {
                className: _.Ly,
                children: [
                    (0, r.jsx)(o.Heading, {
                        variant: "text-md/semibold",
                        color: "text-strong",
                        children: N.intl.string(N.t.Qp98s9),
                    }),
                    (0, r.jsx)(o.Text, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: N.intl.string(N.t.Mg843t),
                    }),
                    n || null == l
                        ? null
                        : (0, r.jsxs)(o.Text, {
                              color: "interactive-text-default",
                              variant: "text-xs/medium",
                              className: _.Lp,
                              children: [
                                  (0, r.jsx)(o.N$i, {
                                      size: "xxs",
                                      color: "currentColor",
                                  }),
                                  " ",
                                  v,
                              ],
                          }),
                ],
            }),
            (0, r.jsx)(A.A, {
                checked: j,
                onChange: S,
                disabled: !p || null == l,
            }),
        ],
    });
}
function T(e) {
    var t;
    let { guild: n, selectedChannelId: i, setSelectedChannelId: l, className: f } = e,
        g = null != (t = n.safetyAlertsChannelId) ? t : null,
        p = (0, c.yK)([h.Ay, y.default, O.A, j.A], () => {
            let e = h.Ay.getChannels(n.id)
                [h.I6].filter((e) => {
                    let { channel: t } = e;
                    return t.type === a.r.GUILD_TEXT && j.A.can(E.xBc.SEND_MESSAGES, t);
                })
                .map((e) => {
                    let { channel: t } = e;
                    return {
                        id: t.id,
                        value: t.id,
                        label: (0, u.m1)(t, y.default, O.A, !0),
                    };
                });
            return null != g ? e : [...e];
        }, [n.id, g]),
        x = async (e) => {
            l(e);
            try {
                if (
                    (e !== g &&
                        (await v.A.saveGuild(n.id, { safetyAlertsChannelId: e }, { throwErr: !0 }),
                        v.A.updateGuild({ safetyAlertsChannelId: e })),
                    null != e)
                ) {
                    let t = {
                        raid_alert_type: m.TF.JOIN_RAID,
                        enabled: (0, b.A)(n),
                        raid_alert_channel_id: e,
                        guild_id: n.id,
                        channel_id: e,
                    };
                    (0, d.zV)(E.HAw.GUILD_RAID_ALERTS_SETUP, t);
                }
            } catch (e) {
                (0, o.showToast)((0, o.createToast)(N.intl.string(N.t["46Rs3v"]), o.ToastType.FAILURE)), l(g);
            }
        };
    return (0, r.jsx)("div", {
        className: s()(_.ho, f),
        children: (0, r.jsx)("div", {
            className: _.U,
            children: (0, r.jsx)(o.ZiE, {
                selectionMode: "single",
                label: N.intl.string(N.t.sMkYE8),
                helperText: N.intl.string(N.t["1QxN9N"]),
                options: p,
                onSelectionChange: x,
                value: i,
                maxOptionsVisible: 5,
            }),
        }),
    });
}
function I(e) {
    var t, n;
    let { guild: l } = e,
        [s, a] = i.useState(!1),
        c = null != (t = l.safetyAlertsChannelId) ? t : null,
        [o, d] = i.useState(null != c ? c : null != (n = null == l ? void 0 : l.publicUpdatesChannelId) ? n : null);
    return (0, r.jsx)(p.A, {
        renderHeader: (0, r.jsx)(S, {
            isExpanded: s,
            guild: l,
            selectedChannelId: o,
        }),
        isExpanded: s,
        onExpand: () => a(!s),
        children: (0, r.jsx)(T, {
            guild: l,
            selectedChannelId: o,
            setSelectedChannelId: d,
        }),
    });
}
function C(e) {
    var t, n;
    let { guild: l } = e,
        s = null != (t = l.safetyAlertsChannelId) ? t : null,
        [a, c] = i.useState(null != s ? s : null != (n = null == l ? void 0 : l.publicUpdatesChannelId) ? n : null);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(S, {
                isExpanded: !0,
                guild: l,
                selectedChannelId: a,
                className: _.pN,
            }),
            (0, r.jsx)(T, {
                guild: l,
                selectedChannelId: a,
                setSelectedChannelId: c,
                className: _.pN,
            }),
        ],
    });
}
