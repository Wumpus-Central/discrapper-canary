n.d(t, { Z: () => u });
var i = n(951288),
    r = n(755721),
    l = n(481060),
    a = n(475179),
    o = n(841397),
    s = n(388032),
    c = n(427538);
function u(e) {
    let { channelId: t } = e;
    return (0, i.jsxs)("div", {
        className: c.container,
        children: [
            (0, i.jsx)(o.Z, {}),
            (0, i.jsxs)("div", {
                className: c.content,
                children: [
                    (0, i.jsx)(l.X6q, {
                        variant: "heading-lg/normal",
                        children: s.intl.format(s.t.ilLVLi, {}),
                    }),
                    (0, i.jsx)(r.zx, {
                        size: r.zx.Sizes.LARGE,
                        color: r.zx.Colors.PRIMARY,
                        onClick: (e) => {
                            e.stopPropagation(), a.Z.toggleVoiceParticipantsHidden(t, !1);
                        },
                        children: s.intl.string(s.t.kLQySE),
                    }),
                ],
            }),
        ],
    });
}
