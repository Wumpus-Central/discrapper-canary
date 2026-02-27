"use strict";
n.d(t, { A: () => o });
var i = n(627968),
    s = n(64700),
    l = n(397927),
    r = n(847599),
    a = n(263518);
let o = function (e) {
    let {
        title: t,
        description: n,
        agreement: o,
        disagreement: c,
        onAgree: d,
        onDisagree: u,
        modalType: h,
        channelId: A,
        guildId: p,
    } = e;
    s.useEffect(() => {
        (0, r.Bf)(h, A, p);
    }, [h, A, p]);
    let g = s.useCallback(() => {
            (0, r.mU)(r.IY.NSFW_CHANNEL_DISAGREE_CTA, h, A, p), u?.();
        }, [u, h, A, p]),
        m = s.useCallback(() => {
            (0, r.mU)(r.IY.NSFW_CHANNEL_AGREE_CTA, h, A, p), d?.();
        }, [d, h, A, p]);
    return (0, i.jsxs)(l.BJc, {
        justify: "center",
        align: "center",
        direction: "vertical",
        gap: 16,
        className: a.XG,
        children: [
            (0, i.jsxs)(l.BJc, {
                gap: 8,
                justify: "center",
                align: "center",
                direction: "vertical",
                children: [
                    (0, i.jsx)(l.Text, { variant: "text-lg/semibold", className: a.DD, children: t }),
                    (0, i.jsx)(l.Text, {
                        variant: "text-md/medium",
                        className: a.h_,
                        color: "text-muted",
                        children: n,
                    }),
                ],
            }),
            (0, i.jsxs)(l.BJc, {
                direction: "horizontal",
                justify: "center",
                align: "center",
                gap: 16,
                children: [
                    null != c && null != u ? (0, i.jsx)(l.Button, { variant: "secondary", text: c, onClick: g }) : null,
                    null != o && null != d ? (0, i.jsx)(l.Button, { onClick: m, text: o }) : null,
                ],
            }),
        ],
    });
};
