n.d(t, { A: () => o });
var i = n(627968),
    l = n(64700),
    s = n(397927),
    a = n(847599),
    r = n(263518);
let o = function (e) {
    let {
        title: t,
        description: n,
        agreement: o,
        disagreement: d,
        onAgree: c,
        onDisagree: u,
        modalType: h,
        channelId: A,
        guildId: g,
    } = e;
    l.useEffect(() => {
        (0, a.Bf)(h, A, g);
    }, [h, A, g]);
    let m = l.useCallback(() => {
            (0, a.mU)(a.IY.NSFW_CHANNEL_DISAGREE_CTA, h, A, g), u?.();
        }, [u, h, A, g]),
        p = l.useCallback(() => {
            (0, a.mU)(a.IY.NSFW_CHANNEL_AGREE_CTA, h, A, g), c?.();
        }, [c, h, A, g]);
    return (0, i.jsxs)(s.BJc, {
        justify: "center",
        align: "center",
        direction: "vertical",
        gap: 16,
        className: r.XG,
        children: [
            (0, i.jsxs)(s.BJc, {
                gap: 8,
                justify: "center",
                align: "center",
                direction: "vertical",
                children: [
                    (0, i.jsx)(s.Text, { variant: "text-lg/semibold", className: r.DD, children: t }),
                    (0, i.jsx)(s.Text, {
                        variant: "text-md/medium",
                        className: r.h_,
                        color: "text-muted",
                        children: n,
                    }),
                ],
            }),
            (0, i.jsxs)(s.BJc, {
                direction: "horizontal",
                justify: "center",
                align: "center",
                gap: 16,
                children: [
                    null != d && null != u ? (0, i.jsx)(s.Button, { variant: "secondary", text: d, onClick: m }) : null,
                    null != o && null != c ? (0, i.jsx)(s.Button, { onClick: p, text: o }) : null,
                ],
            }),
        ],
    });
};
