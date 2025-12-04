e.d(n, { default: () => _ }), e(388685);
var l = e(54381),
    r = e(473749),
    i = e(793030),
    a = e(442837),
    u = e(668339),
    s = e(481060),
    c = e(933557),
    d = e(592125),
    j = e(984933),
    o = e(699516),
    A = e(594174),
    E = e(556012),
    N = e(388032);
let S = (t) => {
    let { guildId: n, channel: e, onSelectChannel: r } = t,
        i = (0, a.Wu)(
            [j.ZP],
            () =>
                j.ZP.getChannels(n)
                    [j.sH].filter((t) => {
                        let { channel: n } = t;
                        return !n.isGuildVocal() && !n.isThread() && !n.isForumLikeChannel();
                    })
                    .map((t) => {
                        let { channel: n } = t;
                        return n;
                    }),
            [n],
        );
    return (0, l.jsx)(u.d, {
        required: !0,
        value: null == e ? void 0 : e.id,
        options: i.map((t) => ({
            value: t.id,
            label: (0, c.F6)(t, A.default, o.Z, !0),
        })),
        onChange: (t) => {
            let n = i.find((n) => n.id === t);
            r(null != n ? n : void 0);
        },
        placeholder: N.intl.string(N.t["N+T69y"]),
    });
};
function _(t) {
    let { action: n, triggerType: e, guildId: u, isEdit: c, onEditChannel: j, onClose: o, transitionState: A } = t,
        [_, C] = r.useState(n.metadata.channelId),
        [h, g] = r.useState(null),
        I = (0, a.e7)([d.Z], () => d.Z.getChannel(_), [_]),
        L = (0, E.c)(n.type, n, e);
    if (null == L) return null;
    let { headerText: f } = L;
    return (0, l.jsx)(i.Modal, {
        onClose: o,
        transitionState: A,
        title: f,
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
                    if (null == _) return void g(N.intl.string(N.t.lM1NLh));
                    j(_);
                },
            },
        ],
        children: (0, l.jsxs)(s.Kqy, {
            gap: 8,
            direction: "vertical",
            children: [
                (0, l.jsx)(S, {
                    guildId: u,
                    channel: I,
                    onSelectChannel: (t) => {
                        null != t && C(t.id);
                    },
                }),
                null != h
                    ? (0, l.jsx)(s.Text, {
                          color: "text-feedback-critical",
                          variant: "text-sm/normal",
                          children: h,
                      })
                    : (0, l.jsx)(s.Text, {
                          color: "text-muted",
                          variant: "text-sm/normal",
                          children: N.intl.string(N.t["ric+5q"]),
                      }),
            ],
        }),
    });
}
