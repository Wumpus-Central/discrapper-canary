(e.d(n, { default: () => C }), e(388685));
var l = e(255367),
    r = e(73800),
    i = e(442837),
    a = e(481060),
    s = e(933557),
    c = e(313201),
    u = e(592125),
    o = e(984933),
    d = e(699516),
    j = e(594174),
    A = e(556012),
    h = e(388032),
    N = e(331632);
let E = (t) => {
    let { guildId: n, channel: e, onSelectChannel: r } = t,
        c = (0, i.Wu)(
            [o.ZP],
            () =>
                o.ZP.getChannels(n)
                    [o.sH].filter((t) => {
                        let { channel: n } = t;
                        return !n.isGuildVocal() && !n.isThread() && !n.isForumLikeChannel();
                    })
                    .map((t) => {
                        let { channel: n } = t;
                        return n;
                    }),
            [n]
        );
    return (0, l.jsx)(a.xJW, {
        className: N.channelSelector,
        required: !0,
        children: (0, l.jsx)(a.VcW, {
            value: null == e ? void 0 : e.id,
            options: c.map((t) => ({
                value: t.id,
                label: (0, s.F6)(t, j.default, d.Z, !0)
            })),
            onChange: (t) => {
                let n = c.find((n) => n.id === t);
                r(null != n ? n : void 0);
            },
            placeholder: h.intl.string(h.t['N+T69/'])
        })
    });
};
function C(t) {
    let { action: n, triggerType: e, guildId: s, isEdit: o, onEditChannel: d, onClose: j, transitionState: C } = t,
        _ = (0, c.Dt)(),
        [S, x] = r.useState(n.metadata.channelId),
        [L, g] = r.useState(null),
        I = (0, i.e7)([u.Z], () => u.Z.getChannel(S), [S]),
        T = (0, A.c)(n.type, n, e);
    if (null == T) return null;
    let { headerText: f } = T;
    return (0, l.jsxs)(a.Y0X, {
        transitionState: C,
        'aria-labelledby': _,
        size: a.CgR.SMALL,
        parentComponent: 'AutomodActionFlagToChannelModal',
        children: [
            (0, l.jsxs)(a.hzk, {
                className: N.actionContentContainer,
                children: [
                    (0, l.jsx)(a.X6q, {
                        id: _,
                        color: 'header-primary',
                        variant: 'heading-lg/semibold',
                        className: N.header,
                        children: f
                    }),
                    (0, l.jsx)(a.Text, {
                        color: 'header-secondary',
                        variant: 'text-sm/normal',
                        children: h.intl.string(h.t['z/ZF2t'])
                    }),
                    (0, l.jsx)(E, {
                        guildId: s,
                        channel: I,
                        onSelectChannel: (t) => {
                            null != t && x(t.id);
                        }
                    }),
                    null != L
                        ? (0, l.jsx)(a.Text, {
                              color: 'text-danger',
                              variant: 'text-sm/normal',
                              children: L
                          })
                        : (0, l.jsx)(a.Text, {
                              color: 'text-muted',
                              variant: 'text-sm/normal',
                              children: h.intl.string(h.t['ric+5u'])
                          })
                ]
            }),
            (0, l.jsxs)(a.mzw, {
                children: [
                    (0, l.jsx)(a.zxk, {
                        onClick: () => {
                            if (null == S) return void g(h.intl.string(h.t.lM1NLi));
                            d(S);
                        },
                        color: a.zxk.Colors.BRAND,
                        size: a.zxk.Sizes.SMALL,
                        children: o ? h.intl.string(h.t.bt75u7) : h.intl.string(h.t.R3BPHx)
                    }),
                    (0, l.jsx)(a.zxk, {
                        onClick: () => {
                            j();
                        },
                        color: a.zxk.Colors.TRANSPARENT,
                        look: a.zxk.Looks.LINK,
                        children: h.intl.string(h.t['ETE/oK'])
                    })
                ]
            })
        ]
    });
}
