e.d(n, { default: () => S }), e(388685);
var l = e(54381),
    i = e(473749),
    r = e(793030),
    a = e(442837),
    u = e(481060),
    s = e(933557),
    c = e(592125),
    d = e(984933),
    j = e(699516),
    o = e(594174),
    A = e(556012),
    E = e(388032);
let N = (t) => {
    let { guildId: n, channel: e, onSelectChannel: i } = t,
        r = (0, a.Wu)(
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
    return (0, l.jsx)(u.VcW, {
        required: !0,
        value: null == e ? void 0 : e.id,
        options: r.map((t) => ({
            id: t.id,
            value: t.id,
            label: (0, s.F6)(t, o.default, j.Z, !0),
        })),
        onSelectionChange: (t) => {
            let n = r.find((n) => n.id === t);
            i(null != n ? n : void 0);
        },
        placeholder: E.intl.string(E.t["N+T69y"]),
        selectionMode: "single",
    });
};
function S(t) {
    let { action: n, triggerType: e, guildId: s, isEdit: d, onEditChannel: j, onClose: o, transitionState: S } = t,
        [_, C] = i.useState(n.metadata.channelId),
        [h, g] = i.useState(null),
        I = (0, a.e7)([c.Z], () => c.Z.getChannel(_), [_]),
        L = (0, A.c)(n.type, n, e);
    if (null == L) return null;
    let { headerText: f } = L;
    return (0, l.jsx)(r.Modal, {
        onClose: o,
        transitionState: S,
        title: f,
        subtitle: E.intl.string(E.t["z/ZF2i"]),
        actions: [
            {
                text: E.intl.string(E.t["ETE/oC"]),
                onClick: () => {
                    o();
                },
                variant: "secondary",
            },
            {
                text: d ? E.intl.string(E.t.bt75uw) : E.intl.string(E.t["R3BPH+"]),
                onClick: () => {
                    if (null == _) return void g(E.intl.string(E.t.lM1NLh));
                    j(_);
                },
            },
        ],
        children: (0, l.jsxs)(u.Kqy, {
            gap: 8,
            direction: "vertical",
            children: [
                (0, l.jsx)(N, {
                    guildId: s,
                    channel: I,
                    onSelectChannel: (t) => {
                        null != t && C(t.id);
                    },
                }),
                null != h
                    ? (0, l.jsx)(u.Text, {
                          color: "text-feedback-critical",
                          variant: "text-sm/normal",
                          children: h,
                      })
                    : (0, l.jsx)(u.Text, {
                          color: "text-muted",
                          variant: "text-sm/normal",
                          children: E.intl.string(E.t["ric+5q"]),
                      }),
            ],
        }),
    });
}
