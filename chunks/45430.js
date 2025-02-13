n.d(t, { Z: () => c });
var i = n(200651),
    l = n(481060),
    a = n(475179),
    r = n(841397),
    s = n(388032),
    o = n(931481);
function c(e) {
    let { channelId: t } = e;
    return (0, i.jsxs)('div', {
        className: o.container,
        children: [
            (0, i.jsx)(r.Z, {}),
            (0, i.jsxs)('div', {
                className: o.content,
                children: [
                    (0, i.jsx)(l.X6q, {
                        variant: 'heading-lg/normal',
                        children: s.intl.format(s.t.ilLVLi, {})
                    }),
                    (0, i.jsx)(l.zxk, {
                        size: l.zxk.Sizes.LARGE,
                        color: l.zxk.Colors.PRIMARY,
                        onClick: (e) => {
                            e.stopPropagation(), a.Z.toggleVoiceParticipantsHidden(t, !1);
                        },
                        children: s.intl.string(s.t.kLQySE)
                    })
                ]
            })
        ]
    });
}
