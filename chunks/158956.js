e.d(n, {
    default: () => S,
}),
    e(896048);
var l = e(627968),
    i = e(64700),
    r = e(158954),
    a = e(311907),
    u = e(397927),
    s = e(47167),
    A = e(734057),
    c = e(808728),
    d = e(994500),
    o = e(287809),
    E = e(239705),
    N = e(985018);
let h = (t) => {
    let { guildId: n, channel: e, onSelectChannel: i } = t,
        r = (0, a.yK)(
            [c.Ay],
            () =>
                c.Ay.getChannels(n)
                    [c.I6].filter((t) => {
                        let { channel: n } = t;
                        return !n.isGuildVocal() && !n.isThread() && !n.isForumLikeChannel();
                    })
                    .map((t) => {
                        let { channel: n } = t;
                        return n;
                    }),
            [n],
        );
    return (0, l.jsx)(u.ZiE, {
        required: !0,
        value: null == e ? void 0 : e.id,
        options: r.map((t) => ({
            id: t.id,
            value: t.id,
            label: (0, s.m1)(t, o.default, d.A, !0),
        })),
        onSelectionChange: (t) => {
            let n = r.find((n) => n.id === t);
            i(null != n ? n : void 0);
        },
        placeholder: N.intl.string(N.t["N+T69y"]),
        selectionMode: "single",
    });
};

function S(t) {
    let { action: n, triggerType: e, guildId: s, isEdit: c, onEditChannel: d, onClose: o, transitionState: S } = t,
        [_, C] = i.useState(n.metadata.channelId),
        [g, H] = i.useState(null),
        I = (0, a.bG)([A.A], () => A.A.getChannel(_), [_]),
        L = (0, E.x)(n.type, n, e);
    if (null == L) return null;
    let { headerText: T } = L;
    return (0, l.jsx)(r.Modal, {
        onClose: o,
        transitionState: S,
        title: T,
        subtitle: N.intl.string(N.t["z/ZF2i"]),
        actions: [
            {
                text: N.intl.string(N.t["ETE/oC"]),
                onClick: () => {
                    o();
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
        children: (0, l.jsxs)(u.BJc, {
            gap: 8,
            direction: "vertical",
            children: [
                (0, l.jsx)(h, {
                    guildId: s,
                    channel: I,
                    onSelectChannel: (t) => {
                        null != t && C(t.id);
                    },
                }),
                null != g
                    ? (0, l.jsx)(u.Text, {
                          color: "text-feedback-critical",
                          variant: "text-sm/normal",
                          children: g,
                      })
                    : (0, l.jsx)(u.Text, {
                          color: "text-muted",
                          variant: "text-sm/normal",
                          children: N.intl.string(N.t["ric+5q"]),
                      }),
            ],
        }),
    });
}
