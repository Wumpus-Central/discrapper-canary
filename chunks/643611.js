e.d(n, { default: () => v }), e(388685);
var l = e(255367),
    i = e(73800),
    r = e(442837),
    a = e(82659),
    s = e(481060),
    u = e(933557),
    d = e(592125),
    o = e(984933),
    c = e(699516),
    h = e(594174),
    x = e(556012),
    g = e(388032);
let p = (t) => {
    let { guildId: n, channel: e, onSelectChannel: i } = t,
        a = (0, r.Wu)(
            [o.ZP],
            () =>
                o.ZP.getChannels(n)
                    [o.sH].filter((t) => {
                        let { channel: n } = t;
                        return !n.isGuildVocal() && !n.isThread() && !n.isForumLikeChannel();
                    })
                    .map((t) => {
                        let { channel: n } = t;
                        return n;
                    }),
            [n],
        );
    return (0, l.jsx)(s.xJW, {
        required: !0,
        children: (0, l.jsx)(s.VcW, {
            value: null == e ? void 0 : e.id,
            options: a.map((t) => ({
                value: t.id,
                label: (0, u.F6)(t, h.default, c.Z, !0),
            })),
            onChange: (t) => {
                let n = a.find((n) => n.id === t);
                i(null != n ? n : void 0);
            },
            placeholder: g.intl.string(g.t["N+T69/"]),
        }),
    });
};
function v(t) {
    let { action: n, triggerType: e, guildId: u, isEdit: o, onEditChannel: c, onClose: h, transitionState: v } = t,
        [C, m] = i.useState(n.metadata.channelId),
        [f, j] = i.useState(null),
        k = (0, r.e7)([d.Z], () => d.Z.getChannel(C), [C]),
        Z = (0, x.c)(n.type, n, e);
    if (null == Z) return null;
    let { headerText: b } = Z;
    return (0, l.jsx)(a.Modal, {
        onClose: h,
        transitionState: v,
        title: b,
        subtitle: g.intl.string(g.t["z/ZF2t"]),
        actions: [
            {
                text: g.intl.string(g.t["ETE/oK"]),
                onClick: () => {
                    h();
                },
                variant: "secondary",
            },
            {
                text: o ? g.intl.string(g.t.bt75u7) : g.intl.string(g.t.R3BPHx),
                onClick: () => {
                    if (null == C) return void j(g.intl.string(g.t.lM1NLi));
                    c(C);
                },
            },
        ],
        children: (0, l.jsxs)(s.Kqy, {
            gap: 8,
            direction: "vertical",
            children: [
                (0, l.jsx)(p, {
                    guildId: u,
                    channel: k,
                    onSelectChannel: (t) => {
                        null != t && m(t.id);
                    },
                }),
                null != f
                    ? (0, l.jsx)(s.Text, {
                          color: "text-danger",
                          variant: "text-sm/normal",
                          children: f,
                      })
                    : (0, l.jsx)(s.Text, {
                          color: "text-muted",
                          variant: "text-sm/normal",
                          children: g.intl.string(g.t["ric+5u"]),
                      }),
            ],
        }),
    });
}
