n.d(t, {
    A: () => c,
});
var r = n(627968),
    l = n(397927),
    i = n(367513),
    a = n(715989),
    s = n(985018),
    o = n(852887);

function c(e) {
    let { channelId: t, allPoppedOut: n = !1 } = e;
    return (0, r.jsxs)("div", {
        className: o.kL,
        children: [
            (0, r.jsx)(a.A, {}),
            (0, r.jsxs)("div", {
                className: o.Qs,
                children: [
                    (0, r.jsx)(l.Heading, {
                        variant: "heading-lg/normal",
                        children: n ? s.intl.string(s.t.KIConm) : s.intl.format(s.t.ilLVLr, {}),
                    }),
                    !n &&
                        (0, r.jsx)(l.Button, {
                            variant: "secondary",
                            size: "md",
                            onClick: (e) => {
                                e.stopPropagation(), i.A.toggleVoiceParticipantsHidden(t, !1);
                            },
                            text: s.intl.string(s.t.kLQySL),
                        }),
                ],
            }),
        ],
    });
}
