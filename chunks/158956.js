l.d(e, { default: () => C });
var n = l(627968),
    i = l(64700),
    r = l(189213),
    a = l(17928),
    s = l(783878),
    c = l(331322),
    A = l(834730),
    u = l(47167),
    d = l(734057),
    o = l(808728),
    h = l(994500),
    E = l(287809),
    N = l(239705),
    g = l(985018);
let _ = (t) => {
    let { guildId: e, channel: l, onSelectChannel: i } = t,
        r = (0, a.yK)(
            [o.Ay],
            () =>
                o.Ay.getChannels(e)
                    [o.I6].filter((t) => {
                        let { channel: e } = t;
                        return !e.isGuildVocal() && !e.isThread() && !e.isForumLikeChannel();
                    })
                    .map((t) => {
                        let { channel: e } = t;
                        return e;
                    }),
            [e],
        );
    return (0, n.jsx)(s.Z, {
        required: !0,
        value: l?.id,
        options: r.map((t) => ({ id: t.id, value: t.id, label: (0, u.m1)(t, E.default, h.A, !0) })),
        onSelectionChange: (t) => {
            i(r.find((e) => e.id === t) ?? void 0);
        },
        placeholder: g.intl.string(g.t["N+T69y"]),
        selectionMode: "single",
    });
};
function C(t) {
    let { action: e, triggerType: l, guildId: s, isEdit: u, onEditChannel: o, onClose: h, transitionState: E } = t,
        [C, S] = i.useState(e.metadata.channelId),
        [I, L] = i.useState(null),
        f = (0, a.bG)([d.A], () => d.A.getChannel(C), [C]),
        x = (0, N.x)(e.type, e, l);
    if (null == x) return null;
    let { headerText: H } = x;
    return (0, n.jsx)(r.Modal, {
        onClose: h,
        transitionState: E,
        title: H,
        subtitle: g.intl.string(g.t["z/ZF2i"]),
        actions: [
            {
                text: g.intl.string(g.t["ETE/oC"]),
                onClick: () => {
                    h();
                },
                variant: "secondary",
            },
            {
                text: u ? g.intl.string(g.t.bt75uw) : g.intl.string(g.t["R3BPH+"]),
                onClick: () => {
                    null == C ? L(g.intl.string(g.t.lM1NLh)) : o(C);
                },
            },
        ],
        children: (0, n.jsxs)(c.B, {
            gap: 8,
            direction: "vertical",
            children: [
                (0, n.jsx)(_, {
                    guildId: s,
                    channel: f,
                    onSelectChannel: (t) => {
                        null != t && S(t.id);
                    },
                }),
                null != I
                    ? (0, n.jsx)(A.E, { color: "text-feedback-critical", variant: "text-sm/normal", children: I })
                    : (0, n.jsx)(A.E, {
                          color: "text-muted",
                          variant: "text-sm/normal",
                          children: g.intl.string(g.t["ric+5q"]),
                      }),
            ],
        }),
    });
}
