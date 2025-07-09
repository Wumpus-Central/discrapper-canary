(e.d(n, { default: () => C }), e(388685));
var l = e(255367),
    r = e(73800),
    i = e(442837),
    a = e(755721),
    s = e(481060),
    c = e(933557),
    u = e(313201),
    o = e(592125),
    d = e(984933),
    j = e(699516),
    A = e(594174),
    h = e(556012),
    N = e(388032),
    E = e(331632);
let _ = (t) => {
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
            [n]
        );
    return (0, l.jsx)(s.xJW, {
        className: E.channelSelector,
        required: !0,
        children: (0, l.jsx)(s.VcW, {
            value: null == e ? void 0 : e.id,
            options: a.map((t) => ({
                value: t.id,
                label: (0, c.F6)(t, A.default, j.Z, !0)
            })),
            onChange: (t) => {
                let n = a.find((n) => n.id === t);
                r(null != n ? n : void 0);
            },
            placeholder: N.intl.string(N.t['N+T69/'])
        })
    });
};
function C(t) {
    let { action: n, triggerType: e, guildId: c, isEdit: d, onEditChannel: j, onClose: A, transitionState: C } = t,
        S = (0, u.Dt)(),
        [x, L] = r.useState(n.metadata.channelId),
        [g, I] = r.useState(null),
        T = (0, i.e7)([o.Z], () => o.Z.getChannel(x), [x]),
        m = (0, h.c)(n.type, n, e);
    if (null == m) return null;
    let { headerText: f } = m;
    return (0, l.jsxs)(s.Y0X, {
        transitionState: C,
        'aria-labelledby': S,
        size: s.CgR.SMALL,
        parentComponent: 'AutomodActionFlagToChannelModal',
        children: [
            (0, l.jsxs)(s.hzk, {
                className: E.actionContentContainer,
                children: [
                    (0, l.jsx)(s.X6q, {
                        id: S,
                        color: 'header-primary',
                        variant: 'heading-lg/semibold',
                        className: E.header,
                        children: f
                    }),
                    (0, l.jsx)(s.Text, {
                        color: 'header-secondary',
                        variant: 'text-sm/normal',
                        children: N.intl.string(N.t['z/ZF2t'])
                    }),
                    (0, l.jsx)(_, {
                        guildId: c,
                        channel: T,
                        onSelectChannel: (t) => {
                            null != t && L(t.id);
                        }
                    }),
                    null != g
                        ? (0, l.jsx)(s.Text, {
                              color: 'text-danger',
                              variant: 'text-sm/normal',
                              children: g
                          })
                        : (0, l.jsx)(s.Text, {
                              color: 'text-muted',
                              variant: 'text-sm/normal',
                              children: N.intl.string(N.t['ric+5u'])
                          })
                ]
            }),
            (0, l.jsxs)(s.mzw, {
                children: [
                    (0, l.jsx)(s.zxk, {
                        variant: 'primary',
                        size: 'sm',
                        text: d ? N.intl.string(N.t.bt75u7) : N.intl.string(N.t.R3BPHx),
                        onClick: () => {
                            if (null == x) return void I(N.intl.string(N.t.lM1NLi));
                            j(x);
                        }
                    }),
                    (0, l.jsx)(a.zx, {
                        onClick: () => {
                            A();
                        },
                        color: a.zx.Colors.TRANSPARENT,
                        look: a.zx.Looks.LINK,
                        children: N.intl.string(N.t['ETE/oK'])
                    })
                ]
            })
        ]
    });
}
