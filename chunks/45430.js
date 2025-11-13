n.d(t, { Z: () => c });
var i = n(951288),
    r = n(481060),
    l = n(475179),
    a = n(841397),
    o = n(388032),
    s = n(427538);
function c(e) {
    let { channelId: t, allPoppedOut: n = !1 } = e;
    return (0, i.jsxs)("div", {
        className: s.container,
        children: [
            (0, i.jsx)(a.Z, {}),
            (0, i.jsxs)("div", {
                className: s.content,
                children: [
                    (0, i.jsx)(r.Heading, {
                        variant: "heading-lg/normal",
                        children: n ? o.intl.string(o.t.KIConm) : o.intl.format(o.t.ilLVLr, {}),
                    }),
                    !n &&
                        (0, i.jsx)(r.Button, {
                            variant: "secondary",
                            size: "md",
                            onClick: (e) => {
                                e.stopPropagation(), l.Z.toggleVoiceParticipantsHidden(t, !1);
                            },
                            text: o.intl.string(o.t.kLQySL),
                        }),
                ],
            }),
        ],
    });
}
