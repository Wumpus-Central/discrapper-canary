n.d(t, { Z: () => c });
var r = n(255367),
    i = n(481060),
    l = n(475179),
    a = n(841397),
    o = n(388032),
    s = n(55706);
function c(e) {
    let { channelId: t } = e;
    return (0, r.jsxs)('div', {
        className: s.container,
        children: [
            (0, r.jsx)(a.Z, {}),
            (0, r.jsxs)('div', {
                className: s.content,
                children: [
                    (0, r.jsx)(i.X6q, {
                        variant: 'heading-lg/normal',
                        children: o.intl.format(o.t.ilLVLi, {})
                    }),
                    (0, r.jsx)(i.zxk, {
                        size: i.zxk.Sizes.LARGE,
                        color: i.zxk.Colors.PRIMARY,
                        onClick: (e) => {
                            e.stopPropagation(), l.Z.toggleVoiceParticipantsHidden(t, !1);
                        },
                        children: o.intl.string(o.t.kLQySE)
                    })
                ]
            })
        ]
    });
}
