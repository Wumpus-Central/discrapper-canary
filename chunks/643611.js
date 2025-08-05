(t.d(n, { default: () => j }), t(388685));
var l = t(255367),
    a = t(73800),
    i = t(442837),
    r = t(755721),
    o = t(481060),
    s = t(933557),
    c = t(313201),
    d = t(592125),
    u = t(984933),
    h = t(699516),
    x = t(594174),
    m = t(556012),
    C = t(388032),
    p = t(331632);
let g = (e) => {
    let { guildId: n, channel: t, onSelectChannel: a } = e,
        r = (0, i.Wu)(
            [u.ZP],
            () =>
                u.ZP.getChannels(n)
                    [u.sH].filter((e) => {
                        let { channel: n } = e;
                        return !n.isGuildVocal() && !n.isThread() && !n.isForumLikeChannel();
                    })
                    .map((e) => {
                        let { channel: n } = e;
                        return n;
                    }),
            [n]
        );
    return (0, l.jsx)(o.xJW, {
        className: p.channelSelector,
        required: !0,
        children: (0, l.jsx)(o.VcW, {
            value: null == t ? void 0 : t.id,
            options: r.map((e) => ({
                value: e.id,
                label: (0, s.F6)(e, x.default, h.Z, !0)
            })),
            onChange: (e) => {
                let n = r.find((n) => n.id === e);
                a(null != n ? n : void 0);
            },
            placeholder: C.intl.string(C.t['N+T69/'])
        })
    });
};
function j(e) {
    let { action: n, triggerType: t, guildId: s, isEdit: u, onEditChannel: h, onClose: x, transitionState: j } = e,
        k = (0, c.Dt)(),
        [v, f] = a.useState(n.metadata.channelId),
        [z, S] = a.useState(null),
        T = (0, i.e7)([d.Z], () => d.Z.getChannel(v), [v]),
        N = (0, m.c)(n.type, n, t);
    if (null == N) return null;
    let { headerText: _ } = N;
    return (0, l.jsxs)(o.Y0X, {
        transitionState: j,
        'aria-labelledby': k,
        size: o.CgR.SMALL,
        parentComponent: 'AutomodActionFlagToChannelModal',
        children: [
            (0, l.jsxs)(o.hzk, {
                className: p.actionContentContainer,
                children: [
                    (0, l.jsx)(o.X6q, {
                        id: k,
                        color: 'header-primary',
                        variant: 'heading-lg/semibold',
                        className: p.header,
                        children: _
                    }),
                    (0, l.jsx)(o.Text, {
                        color: 'header-secondary',
                        variant: 'text-sm/normal',
                        children: C.intl.string(C.t['z/ZF2t'])
                    }),
                    (0, l.jsx)(g, {
                        guildId: s,
                        channel: T,
                        onSelectChannel: (e) => {
                            null != e && f(e.id);
                        }
                    }),
                    null != z
                        ? (0, l.jsx)(o.Text, {
                              color: 'text-danger',
                              variant: 'text-sm/normal',
                              children: z
                          })
                        : (0, l.jsx)(o.Text, {
                              color: 'text-muted',
                              variant: 'text-sm/normal',
                              children: C.intl.string(C.t['ric+5u'])
                          })
                ]
            }),
            (0, l.jsxs)(o.mzw, {
                children: [
                    (0, l.jsx)(o.zxk, {
                        variant: 'primary',
                        size: 'sm',
                        text: u ? C.intl.string(C.t.bt75u7) : C.intl.string(C.t.R3BPHx),
                        onClick: () => {
                            if (null == v) return void S(C.intl.string(C.t.lM1NLi));
                            h(v);
                        }
                    }),
                    (0, l.jsx)(r.zx, {
                        onClick: () => {
                            x();
                        },
                        color: r.zx.Colors.TRANSPARENT,
                        look: r.zx.Looks.LINK,
                        children: C.intl.string(C.t['ETE/oK'])
                    })
                ]
            })
        ]
    });
}
