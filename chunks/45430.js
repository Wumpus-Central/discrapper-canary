n.d(t, { Z: () => u });
var r = n(255367),
    i = n(755721),
    a = n(481060),
    o = n(475179),
    s = n(841397),
    l = n(388032),
    c = n(761325);
function u(e) {
    let { channelId: t } = e;
    return (0, r.jsxs)('div', {
        className: c.container,
        children: [
            (0, r.jsx)(s.Z, {}),
            (0, r.jsxs)('div', {
                className: c.content,
                children: [
                    (0, r.jsx)(a.X6q, {
                        variant: 'heading-lg/normal',
                        children: l.intl.format(l.t.ilLVLi, {})
                    }),
                    (0, r.jsx)(i.zx, {
                        size: i.zx.Sizes.LARGE,
                        color: i.zx.Colors.PRIMARY,
                        onClick: (e) => {
                            (e.stopPropagation(), o.Z.toggleVoiceParticipantsHidden(t, !1));
                        },
                        children: l.intl.string(l.t.kLQySE)
                    })
                ]
            })
        ]
    });
}
