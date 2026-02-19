"use strict";
n.d(t, { A: () => c });
var i = n(627968),
    s = n(397927),
    l = n(367513),
    r = n(715989),
    a = n(985018),
    o = n(852887);
function c(e) {
    let { channelId: t, allPoppedOut: n = !1 } = e;
    return (0, i.jsxs)("div", {
        className: o.kL,
        children: [
            (0, i.jsx)(r.A, {}),
            (0, i.jsxs)("div", {
                className: o.Qs,
                children: [
                    (0, i.jsx)(s.Heading, {
                        variant: "heading-lg/normal",
                        children: n ? a.intl.string(a.t.KIConm) : a.intl.format(a.t.ilLVLr, {}),
                    }),
                    !n &&
                        (0, i.jsx)(s.Button, {
                            variant: "secondary",
                            size: "md",
                            onClick: (e) => {
                                e.stopPropagation(), l.A.toggleVoiceParticipantsHidden(t, !1);
                            },
                            text: a.intl.string(a.t.kLQySL),
                        }),
                ],
            }),
        ],
    });
}
