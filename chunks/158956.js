n.d(e, { default: () => k });
var l = n(627968),
    i = n(64700),
    a = n(189213),
    r = n(17928),
    s = n(783878),
    d = n(331322),
    o = n(834730),
    c = n(47167),
    u = n(734057),
    h = n(808728),
    g = n(994500),
    p = n(287809),
    x = n(239705),
    C = n(375708);
let m = (t) => {
    let { guildId: e, channel: n, onSelectChannel: i } = t,
        a = (0, r.yK)(
            [h.Ay],
            () =>
                h.Ay.getChannels(e)
                    [h.I6].filter((t) => {
                        let { channel: e } = t;
                        return !e.isGuildVocal() && !e.isThread() && !e.isForumLikeChannel();
                    })
                    .map((t) => {
                        let { channel: e } = t;
                        return e;
                    }),
            [e],
        );
    return (0, l.jsx)(s.Z, {
        required: !0,
        value: n?.id,
        options: a.map((t) => ({ id: t.id, value: t.id, label: (0, c.m1)(t, p.default, g.A, !0) })),
        onSelectionChange: (t) => {
            i(a.find((e) => e.id === t) ?? void 0);
        },
        placeholder: C.intl.string(C.t["N+T69y"]),
        selectionMode: "single",
    });
};
function k(t) {
    let { action: e, triggerType: n, guildId: s, isEdit: c, onEditChannel: h, onClose: g, transitionState: p } = t,
        [k, v] = i.useState(e.metadata.channelId),
        [b, f] = i.useState(null),
        j = (0, r.bG)([u.A], () => u.A.getChannel(k), [k]),
        y = (0, x.x)(e.type, e, n);
    if (null == y) return null;
    let { headerText: A } = y;
    return (0, l.jsx)(a.Modal, {
        onClose: g,
        transitionState: p,
        title: A,
        subtitle: C.intl.string(C.t["z/ZF2i"]),
        actions: [
            {
                text: C.intl.string(C.t["ETE/oC"]),
                onClick: () => {
                    g();
                },
                variant: "secondary",
            },
            {
                text: c ? C.intl.string(C.t.bt75uw) : C.intl.string(C.t["R3BPH+"]),
                onClick: () => {
                    null == k ? f(C.intl.string(C.t.lM1NLh)) : h(k);
                },
            },
        ],
        children: (0, l.jsxs)(d.B, {
            gap: 8,
            direction: "vertical",
            children: [
                (0, l.jsx)(m, {
                    guildId: s,
                    channel: j,
                    onSelectChannel: (t) => {
                        null != t && v(t.id);
                    },
                }),
                null != b
                    ? (0, l.jsx)(o.E, { color: "text-feedback-critical", variant: "text-sm/normal", children: b })
                    : (0, l.jsx)(o.E, {
                          color: "text-muted",
                          variant: "text-sm/normal",
                          children: C.intl.string(C.t["ric+5q"]),
                      }),
            ],
        }),
    });
}
