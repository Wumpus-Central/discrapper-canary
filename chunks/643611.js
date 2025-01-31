e.d(n, { default: () => _ }), e(47120);
var l = e(200651),
    r = e(192379),
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
    N = e(93660);
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
function _(t) {
    let { action: n, triggerType: e, guildId: s, isEdit: o, onEditChannel: d, onClose: j, transitionState: _ } = t,
        S = (0, c.Dt)(),
        [C, x] = r.useState(n.metadata.channelId),
        [L, I] = r.useState(null),
        g = (0, i.e7)([u.Z], () => u.Z.getChannel(C), [C]),
        T = (0, A.c)(n.type, n, e);
    if (null == T) return null;
    let { headerText: v } = T;
    return (0, l.jsxs)(a.Y0X, {
        transitionState: _,
        'aria-labelledby': S,
        size: a.CgR.SMALL,
        children: [
            (0, l.jsxs)(a.hzk, {
                className: N.actionContentContainer,
                children: [
                    (0, l.jsx)(a.X6q, {
                        id: S,
                        color: 'header-primary',
                        variant: 'heading-lg/semibold',
                        className: N.header,
                        children: v
                    }),
                    (0, l.jsx)(a.Text, {
                        color: 'header-secondary',
                        variant: 'text-sm/normal',
                        children: h.intl.string(h.t['z/ZF2t'])
                    }),
                    (0, l.jsx)(E, {
                        guildId: s,
                        channel: g,
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
                            if (null == C) {
                                I(h.intl.string(h.t.lM1NLi));
                                return;
                            }
                            d(C);
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
