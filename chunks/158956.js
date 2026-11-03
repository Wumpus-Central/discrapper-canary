i.d(n, { default: () => m });
var e = i(477900),
    l = i(582128),
    a = i(17928),
    r = i(189213),
    s = i(890497),
    o = i(331322),
    c = i(834730),
    d = i(47167),
    u = i(734057),
    h = i(808728),
    g = i(994500),
    p = i(287809),
    f = i(677420),
    x = i(105292);
function C(t) {
    let { guildId: n, channel: i, onSelectChannel: l } = t,
        r = (0, a.yK)(
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
    return (0, e.jsx)(s.Z, {
        required: !0,
        value: i?.id,
        options: r.map((t) => ({ id: t.id, value: t.id, label: (0, d.m1)(t, p.default, g.A, !0) })),
        onSelectionChange: function (t) {
            l(r.find((n) => n.id === t) ?? void 0);
        },
        placeholder: x.intl.string(x.t["N+T69y"]),
        selectionMode: "single",
    });
}
function m(t) {
    let { action: n, triggerType: i, guildId: s, isEdit: d, onEditChannel: h, onClose: g, transitionState: p } = t,
        [m, b] = l.useState(n.metadata.channelId),
        [k, v] = l.useState(null),
        y = (0, a.bG)([u.A], () => u.A.getChannel(m), [m]),
        j = (0, f.x)(n.type, n, i);
    if (null == j) return null;
    let { headerText: A } = j;
    return (0, e.jsx)(r.a, {
        onClose: g,
        transitionState: p,
        title: A,
        subtitle: x.intl.string(x.t["z/ZF2i"]),
        actions: [
            {
                text: x.intl.string(x.t["ETE/oC"]),
                onClick: function () {
                    g();
                },
                variant: "secondary",
            },
            {
                text: d ? x.intl.string(x.t.bt75uw) : x.intl.string(x.t["R3BPH+"]),
                onClick: function () {
                    null == m ? v(x.intl.string(x.t.lM1NLh)) : h(m);
                },
            },
        ],
        children: (0, e.jsxs)(o.B, {
            gap: 8,
            direction: "vertical",
            children: [
                (0, e.jsx)(C, {
                    guildId: s,
                    channel: y,
                    onSelectChannel: function (t) {
                        null != t && b(t.id);
                    },
                }),
                null != k
                    ? (0, e.jsx)(c.E, { color: "text-feedback-critical", variant: "body-sm/normal", children: k })
                    : (0, e.jsx)(c.E, {
                          color: "text-muted",
                          variant: "body-sm/normal",
                          children: x.intl.string(x.t["ric+5q"]),
                      }),
            ],
        }),
    });
}
