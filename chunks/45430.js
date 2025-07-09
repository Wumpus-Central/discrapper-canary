n.d(t, { Z: () => u });
var r = n(255367),
    i = n(755721),
    l = n(481060),
    a = n(475179),
    o = n(841397),
    s = n(388032),
    c = n(761325);
function u(e) {
    let { channelId: t } = e;
    return (0, r.jsxs)('div', {
        className: c.container,
        children: [
            (0, r.jsx)(o.Z, {}),
            (0, r.jsxs)('div', {
                className: c.content,
                children: [
                    (0, r.jsx)(l.X6q, {
                        variant: 'heading-lg/normal',
                        children: s.intl.format(s.t.ilLVLi, {})
                    }),
                    (0, r.jsx)(i.zx, {
                        size: i.zx.Sizes.LARGE,
                        color: i.zx.Colors.PRIMARY,
                        onClick: (e) => {
                            (e.stopPropagation(), a.Z.toggleVoiceParticipantsHidden(t, !1));
                        },
                        children: s.intl.string(s.t.kLQySE)
                    })
                ]
            })
        ]
    });
}
