n.d(t, { A: () => M, b: () => k });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(478437),
    o = n(311907),
    d = n(691540),
    c = n(857250),
    u = n(97483),
    m = n(534514),
    g = n(834730),
    h = n(276293),
    x = n(783878),
    _ = n(58149),
    p = n(47167),
    A = n(554113),
    E = n(974103),
    f = n(978956),
    j = n(615550),
    N = n(419707),
    I = n(734057),
    C = n(808728),
    b = n(576705),
    v = n(994500),
    S = n(287809),
    T = n(997509),
    y = n(600955),
    R = n(652215),
    L = n(985018),
    D = n(101839);
function O(e) {
    let { guild: t, isExpanded: n, selectedChannelId: s, className: a } = e,
        x = (0, E.w)(t),
        N = (0, f.A)(t),
        [C, b] = l.useState(N),
        v = (0, o.bG)([I.A], () => I.A.getChannel(s), [s]),
        S = (0, p.Ay)(v),
        T = async () => {
            b(!C);
            try {
                await (0, A.jB)(t, !N);
                let e = s ?? t.safetyAlertsChannelId ?? null;
                if (null != e) {
                    let n = {
                        raid_alert_type: j.TF.JOIN_RAID,
                        enabled: !N,
                        raid_alert_channel_id: e,
                        guild_id: t.id,
                        channel_id: e,
                    };
                    (0, _.zV)(R.HAw.GUILD_RAID_ALERTS_SETUP, n);
                }
            } catch (e) {
                (0, d.P0)((0, c.o)(L.intl.string(L.t["46Rs3v"]), u.Ck.FAILURE)), b(!N);
            }
        };
    return (0, i.jsxs)("div", {
        className: r()(D.D5, a),
        children: [
            (0, i.jsxs)("div", {
                className: D.Ly,
                children: [
                    (0, i.jsx)(m.D, {
                        variant: "text-md/semibold",
                        color: "text-strong",
                        children: L.intl.string(L.t.Qp98s9),
                    }),
                    (0, i.jsx)(g.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: L.intl.string(L.t.Mg843t),
                    }),
                    n || null == s
                        ? null
                        : (0, i.jsxs)(g.E, {
                              color: "interactive-text-default",
                              variant: "text-xs/medium",
                              className: D.Lp,
                              children: [(0, i.jsx)(h.N, { size: "xxs", color: "currentColor" }), " ", S],
                          }),
                ],
            }),
            (0, i.jsx)(y.A, { checked: C, onChange: T, disabled: !x || null == s }),
        ],
    });
}
function G(e) {
    let { guild: t, selectedChannelId: n, setSelectedChannelId: l, className: s } = e,
        m = t.safetyAlertsChannelId ?? null,
        g = (0, o.yK)([C.Ay, S.default, v.A, b.A], () => {
            let e = C.Ay.getChannels(t.id)
                [C.I6].filter((e) => {
                    let { channel: t } = e;
                    return t.type === a.r.GUILD_TEXT && b.A.can(R.xBc.SEND_MESSAGES, t);
                })
                .map((e) => {
                    let { channel: t } = e;
                    return { id: t.id, value: t.id, label: (0, p.m1)(t, S.default, v.A, !0) };
                });
            return null != m ? e : [...e];
        }, [t.id, m]),
        h = async (e) => {
            l(e);
            try {
                if (
                    (e !== m &&
                        (await T.A.saveGuild(t.id, { safetyAlertsChannelId: e }, { throwErr: !0 }),
                        T.A.updateGuild({ safetyAlertsChannelId: e })),
                    null != e)
                ) {
                    let n = {
                        raid_alert_type: j.TF.JOIN_RAID,
                        enabled: (0, f.A)(t),
                        raid_alert_channel_id: e,
                        guild_id: t.id,
                        channel_id: e,
                    };
                    (0, _.zV)(R.HAw.GUILD_RAID_ALERTS_SETUP, n);
                }
            } catch (e) {
                (0, d.P0)((0, c.o)(L.intl.string(L.t["46Rs3v"]), u.Ck.FAILURE)), l(m);
            }
        };
    return (0, i.jsx)("div", {
        className: r()(D.ho, s),
        children: (0, i.jsx)("div", {
            className: D.U,
            children: (0, i.jsx)(x.Z, {
                selectionMode: "single",
                label: L.intl.string(L.t.sMkYE8),
                helperText: L.intl.string(L.t["1QxN9N"]),
                options: g,
                onSelectionChange: h,
                value: n,
                maxOptionsVisible: 5,
            }),
        }),
    });
}
function M(e) {
    let { guild: t } = e,
        [n, s] = l.useState(!1),
        r = t.safetyAlertsChannelId ?? null,
        [a, o] = l.useState(null != r ? r : (t?.publicUpdatesChannelId ?? null));
    return (0, i.jsx)(N.A, {
        renderHeader: (0, i.jsx)(O, { isExpanded: n, guild: t, selectedChannelId: a }),
        isExpanded: n,
        onExpand: () => s(!n),
        children: (0, i.jsx)(G, { guild: t, selectedChannelId: a, setSelectedChannelId: o }),
    });
}
function k(e) {
    let { guild: t } = e,
        n = t.safetyAlertsChannelId ?? null,
        [s, r] = l.useState(null != n ? n : (t?.publicUpdatesChannelId ?? null));
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(O, { isExpanded: !0, guild: t, selectedChannelId: s, className: D.pN }),
            (0, i.jsx)(G, { guild: t, selectedChannelId: s, setSelectedChannelId: r, className: D.pN }),
        ],
    });
}
