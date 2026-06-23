e.d(n, { default: () => m });
var i = e(627968),
    l = e(64700),
    a = e(189213),
    r = e(17928),
    s = e(783878),
    o = e(331322),
    c = e(834730),
    d = e(47167),
    u = e(734057),
    h = e(808728),
    g = e(994500),
    p = e(287809),
    x = e(239705),
    f = e(375708);
function C(t) {
    let { guildId: n, channel: e, onSelectChannel: l } = t,
        a = (0, r.yK)(
            [h.Ay],
            () =>
                h.Ay.getChannels(n)
                    [h.I6].filter((t) => {
                        let { channel: n } = t;
                        return !n.isGuildVocal() && !n.isThread() && !n.isForumLikeChannel();
                    })
                    .map((t) => {
                        let { channel: n } = t;
                        return n;
                    }),
            [n],
        );
    return (0, i.jsx)(s.Z, {
        required: !0,
        value: e?.id,
        options: a.map((t) => ({ id: t.id, value: t.id, label: (0, d.m1)(t, p.default, g.A, !0) })),
        onSelectionChange: function (t) {
            l(a.find((n) => n.id === t) ?? void 0);
        },
        placeholder: f.intl.string(f.t["N+T69y"]),
        selectionMode: "single",
    });
}
function m(t) {
    let { action: n, triggerType: e, guildId: s, isEdit: d, onEditChannel: h, onClose: g, transitionState: p } = t,
        [m, k] = l.useState(n.metadata.channelId),
        [v, b] = l.useState(null),
        j = (0, r.bG)([u.A], () => u.A.getChannel(m), [m]),
        y = (0, x.x)(n.type, n, e);
    if (null == y) return null;
    let { headerText: A } = y;
    return (0, i.jsx)(a.Modal, {
        onClose: g,
        transitionState: p,
        title: A,
        subtitle: f.intl.string(f.t["z/ZF2i"]),
        actions: [
            {
                text: f.intl.string(f.t["ETE/oC"]),
                onClick: function () {
                    g();
                },
                variant: "secondary",
            },
            {
                text: d ? f.intl.string(f.t.bt75uw) : f.intl.string(f.t["R3BPH+"]),
                onClick: () => {
                    null == m ? b(f.intl.string(f.t.lM1NLh)) : h(m);
                },
            },
        ],
        children: (0, i.jsxs)(o.B, {
            gap: 8,
            direction: "vertical",
            children: [
                (0, i.jsx)(C, {
                    guildId: s,
                    channel: j,
                    onSelectChannel: function (t) {
                        null != t && k(t.id);
                    },
                }),
                null != v
                    ? (0, i.jsx)(c.E, { color: "text-feedback-critical", variant: "text-sm/normal", children: v })
                    : (0, i.jsx)(c.E, {
                          color: "text-muted",
                          variant: "text-sm/normal",
                          children: f.intl.string(f.t["ric+5q"]),
                      }),
            ],
        }),
    });
}
