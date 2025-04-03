n.d(t, { default: () => _ }), n(47120);
var r = n(200651),
    l = n(192379),
    a = n(442837),
    i = n(481060),
    s = n(933557),
    c = n(313201),
    u = n(592125),
    o = n(984933),
    N = n(699516),
    d = n(594174),
    j = n(556012),
    A = n(388032),
    h = n(331632);
let E = (e) => {
    let { guildId: t, channel: n, onSelectChannel: l } = e,
        c = (0, a.Wu)(
            [o.ZP],
            () =>
                o.ZP.getChannels(t)
                    [o.sH].filter((e) => {
                        let { channel: t } = e;
                        return !t.isGuildVocal() && !t.isThread() && !t.isForumLikeChannel();
                    })
                    .map((e) => {
                        let { channel: t } = e;
                        return t;
                    }),
            [t]
        );
    return (0, r.jsx)(i.xJW, {
        className: h.channelSelector,
        required: !0,
        children: (0, r.jsx)(i.VcW, {
            value: null == n ? void 0 : n.id,
            options: c.map((e) => ({
                value: e.id,
                label: (0, s.F6)(e, d.default, N.Z, !0)
            })),
            onChange: (e) => {
                let t = c.find((t) => t.id === e);
                l(null != t ? t : void 0);
            },
            placeholder: A.NW.string(A.t['N+T69/'])
        })
    });
};
function _(e) {
    let { action: t, triggerType: n, guildId: s, isEdit: o, onEditChannel: N, onClose: d, transitionState: _ } = e,
        S = (0, c.Dt)(),
        [C, x] = l.useState(t.metadata.channelId),
        [L, I] = l.useState(null),
        g = (0, a.e7)([u.Z], () => u.Z.getChannel(C), [C]),
        T = (0, j.c)(t.type, t, n);
    if (null == T) return null;
    let { headerText: f } = T;
    return (0, r.jsxs)(i.Y0X, {
        transitionState: _,
        'aria-labelledby': S,
        size: i.CgR.SMALL,
        children: [
            (0, r.jsxs)(i.hzk, {
                className: h.actionContentContainer,
                children: [
                    (0, r.jsx)(i.X6q, {
                        id: S,
                        color: 'header-primary',
                        variant: 'heading-lg/semibold',
                        className: h.header,
                        children: f
                    }),
                    (0, r.jsx)(i.Text, {
                        color: 'header-secondary',
                        variant: 'text-sm/normal',
                        children: A.NW.string(A.t['z/ZF2t'])
                    }),
                    (0, r.jsx)(E, {
                        guildId: s,
                        channel: g,
                        onSelectChannel: (e) => {
                            null != e && x(e.id);
                        }
                    }),
                    null != L
                        ? (0, r.jsx)(i.Text, {
                              color: 'text-danger',
                              variant: 'text-sm/normal',
                              children: L
                          })
                        : (0, r.jsx)(i.Text, {
                              color: 'text-muted',
                              variant: 'text-sm/normal',
                              children: A.NW.string(A.t['ric+5u'])
                          })
                ]
            }),
            (0, r.jsxs)(i.mzw, {
                children: [
                    (0, r.jsx)(i.zxk, {
                        onClick: () => {
                            if (null == C) return void I(A.NW.string(A.t.lM1NLi));
                            N(C);
                        },
                        color: i.zxk.Colors.BRAND,
                        size: i.zxk.Sizes.SMALL,
                        children: o ? A.NW.string(A.t.bt75u7) : A.NW.string(A.t.R3BPHx)
                    }),
                    (0, r.jsx)(i.zxk, {
                        onClick: () => {
                            d();
                        },
                        color: i.zxk.Colors.TRANSPARENT,
                        look: i.zxk.Looks.LINK,
                        children: A.NW.string(A.t['ETE/oK'])
                    })
                ]
            })
        ]
    });
}
