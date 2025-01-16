e.r(n),
    e.d(n, {
        default: function () {
            return E;
        }
    }),
    e(47120);
var l = e(200651),
    r = e(192379),
    i = e(442837),
    a = e(481060),
    o = e(933557),
    s = e(313201),
    c = e(592125),
    u = e(984933),
    d = e(699516),
    j = e(594174),
    A = e(556012),
    h = e(388032),
    N = e(93660);
let C = (t) => {
    let { guildId: n, channel: e, onSelectChannel: r } = t,
        s = (0, i.Wu)(
            [u.ZP],
            () =>
                u.ZP.getChannels(n)
                    [u.sH].filter((t) => {
                        let { channel: n } = t;
                        return !n.isGuildVocal() && !n.isThread() && !n.isForumLikeChannel();
                    })
                    .map((t) => {
                        let { channel: n } = t;
                        return n;
                    }),
            [n]
        );
    return (0, l.jsx)(a.FormItem, {
        className: N.channelSelector,
        required: !0,
        children: (0, l.jsx)(a.SearchableSelect, {
            value: null == e ? void 0 : e.id,
            options: s.map((t) => ({
                value: t.id,
                label: (0, o.F6)(t, j.default, d.Z, !0)
            })),
            onChange: (t) => {
                let n = s.find((n) => n.id === t);
                r(null != n ? n : void 0);
            },
            placeholder: h.intl.string(h.t['N+T69/'])
        })
    });
};
function E(t) {
    let { action: n, triggerType: e, guildId: o, isEdit: u, onEditChannel: d, onClose: j, transitionState: E } = t,
        S = (0, s.Dt)(),
        [_, I] = r.useState(n.metadata.channelId),
        [L, f] = r.useState(null),
        g = (0, i.e7)([c.Z], () => c.Z.getChannel(_), [_]),
        T = (0, A.c)(n.type, n, e);
    if (null == T) return null;
    let { headerText: x } = T;
    return (0, l.jsxs)(a.ModalRoot, {
        transitionState: E,
        'aria-labelledby': S,
        size: a.ModalSize.SMALL,
        children: [
            (0, l.jsxs)(a.ModalContent, {
                className: N.actionContentContainer,
                children: [
                    (0, l.jsx)(a.Heading, {
                        id: S,
                        color: 'header-primary',
                        variant: 'heading-lg/semibold',
                        className: N.header,
                        children: x
                    }),
                    (0, l.jsx)(a.Text, {
                        color: 'header-secondary',
                        variant: 'text-sm/normal',
                        children: h.intl.string(h.t['z/ZF2t'])
                    }),
                    (0, l.jsx)(C, {
                        guildId: o,
                        channel: g,
                        onSelectChannel: (t) => {
                            if (null != t) I(t.id);
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
            (0, l.jsxs)(a.ModalFooter, {
                children: [
                    (0, l.jsx)(a.Button, {
                        onClick: () => {
                            if (null == _) {
                                f(h.intl.string(h.t.lM1NLi));
                                return;
                            }
                            d(_);
                        },
                        color: a.Button.Colors.BRAND,
                        size: a.Button.Sizes.SMALL,
                        children: u ? h.intl.string(h.t.bt75u7) : h.intl.string(h.t.R3BPHx)
                    }),
                    (0, l.jsx)(a.Button, {
                        onClick: () => {
                            j();
                        },
                        color: a.Button.Colors.TRANSPARENT,
                        look: a.Button.Looks.LINK,
                        children: h.intl.string(h.t['ETE/oK'])
                    })
                ]
            })
        ]
    });
}
