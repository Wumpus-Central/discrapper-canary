var i = n(477900),
    l = n(534514),
    a = n(821609),
    s = n(367513),
    r = n(715989),
    o = n(792996),
    c = n(853325);
n.d(
    t,
    {},
    {
        A: function (e) {
            let { channelId: t, allPoppedOut: n = !1 } = e;
            return (0, i.jsxs)("div", {
                className: c.kL,
                children: [
                    (0, i.jsx)(r.A, {}),
                    (0, i.jsxs)("div", {
                        className: c.Qs,
                        children: [
                            (0, i.jsx)(l.D, {
                                variant: "heading-lg/medium",
                                children: n ? o.intl.string(o.t.KIConm) : o.intl.format(o.t.ilLVLr, {}),
                            }),
                            !n &&
                                (0, i.jsx)(a.$, {
                                    variant: "secondary",
                                    size: "md",
                                    onClick: (e) => {
                                        (e.stopPropagation(), s.A.toggleVoiceParticipantsHidden(t, !1));
                                    },
                                    text: o.intl.string(o.t.kLQySL),
                                }),
                        ],
                    }),
                ],
            });
        },
    },
);
