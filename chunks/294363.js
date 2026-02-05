"use strict";
n.d(t, { A: () => y, b: () => R });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(478437),
    o = n(311907),
    d = n(397927),
    c = n(58149),
    u = n(47167),
    m = n(554113),
    g = n(974103),
    x = n(978956),
    h = n(615550),
    _ = n(419707),
    A = n(734057),
    p = n(808728),
    f = n(576705),
    j = n(994500),
    N = n(287809),
    E = n(997509),
    b = n(600955),
    T = n(652215),
    C = n(985018),
    I = n(690450);
function v(e) {
    let { guild: t, isExpanded: n, selectedChannelId: l, className: a } = e,
        _ = (0, g.w)(t),
        p = (0, x.A)(t),
        [f, j] = s.useState(p),
        N = (0, o.bG)([A.A], () => A.A.getChannel(l), [l]),
        E = (0, u.Ay)(N),
        v = async () => {
            j(!f);
            try {
                await (0, m.jB)(t, !p);
                let e = l ?? t.safetyAlertsChannelId ?? null;
                if (null != e) {
                    let n = {
                        raid_alert_type: h.TF.JOIN_RAID,
                        enabled: !p,
                        raid_alert_channel_id: e,
                        guild_id: t.id,
                        channel_id: e,
                    };
                    (0, c.zV)(T.HAw.GUILD_RAID_ALERTS_SETUP, n);
                }
            } catch (e) {
                (0, d.showToast)((0, d.createToast)(C.intl.string(C.t["46Rs3v"]), d.ToastType.FAILURE)), j(!p);
            }
        };
    return (0, i.jsxs)("div", {
        className: r()(I.D5, a),
        children: [
            (0, i.jsxs)("div", {
                className: I.Ly,
                children: [
                    (0, i.jsx)(d.Heading, {
                        variant: "text-md/semibold",
                        color: "text-strong",
                        children: C.intl.string(C.t.Qp98s9),
                    }),
                    (0, i.jsx)(d.Text, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: C.intl.string(C.t.Mg843t),
                    }),
                    n || null == l
                        ? null
                        : (0, i.jsxs)(d.Text, {
                              color: "interactive-text-default",
                              variant: "text-xs/medium",
                              className: I.Lp,
                              children: [(0, i.jsx)(d.N$i, { size: "xxs", color: "currentColor" }), " ", E],
                          }),
                ],
            }),
            (0, i.jsx)(b.A, { checked: f, onChange: v, disabled: !_ || null == l }),
        ],
    });
}
function S(e) {
    let { guild: t, selectedChannelId: n, setSelectedChannelId: s, className: l } = e,
        m = t.safetyAlertsChannelId ?? null,
        g = (0, o.yK)([p.Ay, N.default, j.A, f.A], () => {
            let e = p.Ay.getChannels(t.id)
                [p.I6].filter((e) => {
                    let { channel: t } = e;
                    return t.type === a.r.GUILD_TEXT && f.A.can(T.xBc.SEND_MESSAGES, t);
                })
                .map((e) => {
                    let { channel: t } = e;
                    return { id: t.id, value: t.id, label: (0, u.m1)(t, N.default, j.A, !0) };
                });
            return null != m ? e : [...e];
        }, [t.id, m]),
        _ = async (e) => {
            s(e);
            try {
                if (
                    (e !== m &&
                        (await E.A.saveGuild(t.id, { safetyAlertsChannelId: e }, { throwErr: !0 }),
                        E.A.updateGuild({ safetyAlertsChannelId: e })),
                    null != e)
                ) {
                    let n = {
                        raid_alert_type: h.TF.JOIN_RAID,
                        enabled: (0, x.A)(t),
                        raid_alert_channel_id: e,
                        guild_id: t.id,
                        channel_id: e,
                    };
                    (0, c.zV)(T.HAw.GUILD_RAID_ALERTS_SETUP, n);
                }
            } catch (e) {
                (0, d.showToast)((0, d.createToast)(C.intl.string(C.t["46Rs3v"]), d.ToastType.FAILURE)), s(m);
            }
        };
    return (0, i.jsx)("div", {
        className: r()(I.ho, l),
        children: (0, i.jsx)("div", {
            className: I.U,
            children: (0, i.jsx)(d.ZiE, {
                selectionMode: "single",
                label: C.intl.string(C.t.sMkYE8),
                helperText: C.intl.string(C.t["1QxN9N"]),
                options: g,
                onSelectionChange: _,
                value: n,
                maxOptionsVisible: 5,
            }),
        }),
    });
}
function y(e) {
    let { guild: t } = e,
        [n, l] = s.useState(!1),
        r = t.safetyAlertsChannelId ?? null,
        [a, o] = s.useState(null != r ? r : (t?.publicUpdatesChannelId ?? null));
    return (0, i.jsx)(_.A, {
        renderHeader: (0, i.jsx)(v, { isExpanded: n, guild: t, selectedChannelId: a }),
        isExpanded: n,
        onExpand: () => l(!n),
        children: (0, i.jsx)(S, { guild: t, selectedChannelId: a, setSelectedChannelId: o }),
    });
}
function R(e) {
    let { guild: t } = e,
        n = t.safetyAlertsChannelId ?? null,
        [l, r] = s.useState(null != n ? n : (t?.publicUpdatesChannelId ?? null));
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(v, { isExpanded: !0, guild: t, selectedChannelId: l, className: I.pN }),
            (0, i.jsx)(S, { guild: t, selectedChannelId: l, setSelectedChannelId: r, className: I.pN }),
        ],
    });
}
