n.d(t, { A: () => o });
var i = n(627968),
    l = n(64700),
    s = n(397927),
    a = n(847599),
    r = n(132857);
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
        guildId: _,
    } = e;
    l.useEffect(() => {
        (0, a.Bf)(h, A, _);
    }, [h, A, _]);
    let m = l.useCallback(() => {
            (0, a.mU)(a.IY.NSFW_CHANNEL_DISAGREE_CTA, h, A, _), u?.();
        }, [u, h, A, _]),
        g = l.useCallback(() => {
            (0, a.mU)(a.IY.NSFW_CHANNEL_AGREE_CTA, h, A, _), d?.();
        }, [d, h, A, _]);
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
                    null != c && null != u ? (0, i.jsx)(s.Button, { variant: "secondary", text: c, onClick: m }) : null,
                    null != o && null != d ? (0, i.jsx)(s.Button, { onClick: g, text: o }) : null,
                ],
            }),
        ],
    });
};
