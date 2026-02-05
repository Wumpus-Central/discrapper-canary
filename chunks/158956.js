n.d(e, { default: () => S });
var r = n(627968),
    i = n(64700),
    l = n(158954),
    a = n(311907),
    s = n(397927),
    A = n(47167),
    u = n(734057),
    c = n(808728),
    d = n(994500),
    E = n(287809),
    o = n(239705),
    N = n(985018);
let h = (t) => {
    let { guildId: e, channel: n, onSelectChannel: i } = t,
        l = (0, a.yK)(
            [c.Ay],
            () =>
                c.Ay.getChannels(e)
                    [c.I6].filter((t) => {
                        let { channel: e } = t;
                        return !e.isGuildVocal() && !e.isThread() && !e.isForumLikeChannel();
                    })
                    .map((t) => {
                        let { channel: e } = t;
                        return e;
                    }),
            [e],
        );
    return (0, r.jsx)(s.ZiE, {
        required: !0,
        value: n?.id,
        options: l.map((t) => ({ id: t.id, value: t.id, label: (0, A.m1)(t, E.default, d.A, !0) })),
        onSelectionChange: (t) => {
            i(l.find((e) => e.id === t) ?? void 0);
        },
        placeholder: N.intl.string(N.t["N+T69y"]),
        selectionMode: "single",
    });
};
function S(t) {
    let { action: e, triggerType: n, guildId: A, isEdit: c, onEditChannel: d, onClose: E, transitionState: S } = t,
        [_, C] = i.useState(e.metadata.channelId),
        [g, H] = i.useState(null),
        I = (0, a.bG)([u.A], () => u.A.getChannel(_), [_]),
        L = (0, o.x)(e.type, e, n);
    if (null == L) return null;
    let { headerText: T } = L;
    return (0, r.jsx)(l.Modal, {
        onClose: E,
        transitionState: S,
        title: T,
        subtitle: N.intl.string(N.t["z/ZF2i"]),
        actions: [
            {
                text: N.intl.string(N.t["ETE/oC"]),
                onClick: () => {
                    E();
                },
                variant: "secondary",
            },
            {
                text: c ? N.intl.string(N.t.bt75uw) : N.intl.string(N.t["R3BPH+"]),
                onClick: () => {
                    null == _ ? H(N.intl.string(N.t.lM1NLh)) : d(_);
                },
            },
        ],
        children: (0, r.jsxs)(s.BJc, {
            gap: 8,
            direction: "vertical",
            children: [
                (0, r.jsx)(h, {
                    guildId: A,
                    channel: I,
                    onSelectChannel: (t) => {
                        null != t && C(t.id);
                    },
                }),
                null != g
                    ? (0, r.jsx)(s.Text, { color: "text-feedback-critical", variant: "text-sm/normal", children: g })
                    : (0, r.jsx)(s.Text, {
                          color: "text-muted",
                          variant: "text-sm/normal",
                          children: N.intl.string(N.t["ric+5q"]),
                      }),
            ],
        }),
    });
}
