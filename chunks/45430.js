n.d(t, { Z: () => c });
var r = n(951288),
    i = n(481060),
    l = n(475179),
    a = n(841397),
    o = n(388032),
    s = n(427538);
function c(e) {
    let { channelId: t, allPoppedOut: n = !1 } = e;
    return (0, r.jsxs)("div", {
        className: s.container,
        children: [
            (0, r.jsx)(a.Z, {}),
            (0, r.jsxs)("div", {
                className: s.content,
                children: [
                    (0, r.jsx)(i.Heading, {
                        variant: "heading-lg/normal",
                        children: n ? o.intl.string(o.t.KIConm) : o.intl.format(o.t.ilLVLr, {}),
                    }),
                    !n &&
                        (0, r.jsx)(i.Button, {
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
