e.d(n, { default: () => _ }), e(388685);
var l = e(255367),
    r = e(73800),
    i = e(442837),
    a = e(82659),
    u = e(481060),
    s = e(933557),
    c = e(592125),
    d = e(984933),
    j = e(699516),
    o = e(594174),
    A = e(556012),
    E = e(388032);
let N = (t) => {
    let { guildId: n, channel: e, onSelectChannel: r } = t,
        a = (0, i.Wu)(
            [d.ZP],
            () =>
                d.ZP.getChannels(n)
                    [d.sH].filter((t) => {
                        let { channel: n } = t;
                        return !n.isGuildVocal() && !n.isThread() && !n.isForumLikeChannel();
                    })
                    .map((t) => {
                        let { channel: n } = t;
                        return n;
                    }),
            [n],
        );
    return (0, l.jsx)(u.xJW, {
        required: !0,
        children: (0, l.jsx)(u.VcW, {
            value: null == e ? void 0 : e.id,
            options: a.map((t) => ({
                value: t.id,
                label: (0, s.F6)(t, o.default, j.Z, !0),
            })),
            onChange: (t) => {
                let n = a.find((n) => n.id === t);
                r(null != n ? n : void 0);
            },
            placeholder: E.intl.string(E.t["N+T69/"]),
        }),
    });
};
function _(t) {
    let { action: n, triggerType: e, guildId: s, isEdit: d, onEditChannel: j, onClose: o, transitionState: _ } = t,
        [S, h] = r.useState(n.metadata.channelId),
        [C, I] = r.useState(null),
        L = (0, i.e7)([c.Z], () => c.Z.getChannel(S), [S]),
        g = (0, A.c)(n.type, n, e);
    if (null == g) return null;
    let { headerText: T } = g;
    return (0, l.jsx)(a.Modal, {
        onClose: o,
        transitionState: _,
        title: T,
        subtitle: E.intl.string(E.t["z/ZF2t"]),
        actions: [
            {
                text: E.intl.string(E.t["ETE/oK"]),
                onClick: () => {
                    o();
                },
                variant: "secondary",
            },
            {
                text: d ? E.intl.string(E.t.bt75u7) : E.intl.string(E.t.R3BPHx),
                onClick: () => {
                    if (null == S) return void I(E.intl.string(E.t.lM1NLi));
                    j(S);
                },
            },
        ],
        children: (0, l.jsxs)(u.Kqy, {
            gap: 8,
            direction: "vertical",
            children: [
                (0, l.jsx)(N, {
                    guildId: s,
                    channel: L,
                    onSelectChannel: (t) => {
                        null != t && h(t.id);
                    },
                }),
                null != C
                    ? (0, l.jsx)(u.Text, {
                          color: "text-danger",
                          variant: "text-sm/normal",
                          children: C,
                      })
                    : (0, l.jsx)(u.Text, {
                          color: "text-muted",
                          variant: "text-sm/normal",
                          children: E.intl.string(E.t["ric+5u"]),
                      }),
            ],
        }),
    });
}
