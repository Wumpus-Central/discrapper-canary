n.d(t, { A: () => c });
var i = n(627968),
    l = n(397927),
    s = n(367513),
    a = n(715989),
    r = n(985018),
    o = n(616124);
function c(e) {
    let { channelId: t, allPoppedOut: n = !1 } = e;
    return (0, i.jsxs)("div", {
        className: o.kL,
        children: [
            (0, i.jsx)(a.A, {}),
            (0, i.jsxs)("div", {
                className: o.Qs,
                children: [
                    (0, i.jsx)(l.Heading, {
                        variant: "heading-lg/normal",
                        children: n ? r.intl.string(r.t.KIConm) : r.intl.format(r.t.ilLVLr, {}),
                    }),
                    !n &&
                        (0, i.jsx)(l.Button, {
                            variant: "secondary",
                            size: "md",
                            onClick: (e) => {
                                e.stopPropagation(), s.A.toggleVoiceParticipantsHidden(t, !1);
                            },
                            text: r.intl.string(r.t.kLQySL),
                        }),
                ],
            }),
        ],
    });
}
