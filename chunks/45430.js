n.d(t, { Z: () => c });
var r = n(200651),
    i = n(481060),
    l = n(475179),
    o = n(841397),
    a = n(388032),
    s = n(761325);
function c(e) {
    let { channelId: t } = e;
    return (0, r.jsxs)('div', {
        className: s.container,
        children: [
            (0, r.jsx)(o.Z, {}),
            (0, r.jsxs)('div', {
                className: s.content,
                children: [
                    (0, r.jsx)(i.X6q, {
                        variant: 'heading-lg/normal',
                        children: a.NW.format(a.t.ilLVLi, {})
                    }),
                    (0, r.jsx)(i.zxk, {
                        size: i.zxk.Sizes.LARGE,
                        color: i.zxk.Colors.PRIMARY,
                        onClick: (e) => {
                            e.stopPropagation(), l.Z.toggleVoiceParticipantsHidden(t, !1);
                        },
                        children: a.NW.string(a.t.kLQySE)
                    })
                ]
            })
        ]
    });
}
