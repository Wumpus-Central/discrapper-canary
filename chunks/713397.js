n.d(t, { A: () => d });
var i = n(627968),
    a = n(534514),
    l = n(821609),
    s = n(367513),
    r = n(715989),
    o = n(985018),
    c = n(376460);
function d(e) {
    let { channelId: t, allPoppedOut: n = !1 } = e;
    return (0, i.jsxs)("div", {
        className: c.kL,
        children: [
            (0, i.jsx)(r.A, {}),
            (0, i.jsxs)("div", {
                className: c.Qs,
                children: [
                    (0, i.jsx)(a.D, {
                        variant: "heading-lg/normal",
                        children: n ? o.intl.string(o.t.KIConm) : o.intl.format(o.t.ilLVLr, {}),
                    }),
                    !n &&
                        (0, i.jsx)(l.$, {
                            variant: "secondary",
                            size: "md",
                            onClick: (e) => {
                                e.stopPropagation(), s.A.toggleVoiceParticipantsHidden(t, !1);
                            },
                            text: o.intl.string(o.t.kLQySL),
                        }),
                ],
            }),
        ],
    });
}
