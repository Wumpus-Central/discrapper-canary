n.d(t, { A: () => o }), n(228524);
var r = n(627968),
    l = n(64700),
    i = n(397927),
    a = n(847599),
    s = n(263518);
let o = function (e) {
    let {
        title: t,
        description: n,
        agreement: o,
        disagreement: c,
        onAgree: u,
        onDisagree: d,
        modalType: f,
        channelId: p,
        guildId: h,
    } = e;
    l.useEffect(() => {
        (0, a.Bf)(f, p, h);
    }, [f, p, h]);
    let b = l.useCallback(() => {
            (0, a.mU)(a.IY.NSFW_CHANNEL_DISAGREE_CTA, f, p, h), null == d || d();
        }, [d, f, p, h]),
        g = l.useCallback(() => {
            (0, a.mU)(a.IY.NSFW_CHANNEL_AGREE_CTA, f, p, h), null == u || u();
        }, [u, f, p, h]);
    return (0, r.jsxs)(i.BJc, {
        justify: "center",
        align: "center",
        direction: "vertical",
        gap: 16,
        className: s.XG,
        children: [
            (0, r.jsxs)(i.BJc, {
                gap: 8,
                justify: "center",
                align: "center",
                direction: "vertical",
                children: [
                    (0, r.jsx)(i.Text, {
                        variant: "text-lg/semibold",
                        className: s.DD,
                        children: t,
                    }),
                    (0, r.jsx)(i.Text, {
                        variant: "text-md/medium",
                        className: s.h_,
                        color: "text-muted",
                        children: n,
                    }),
                ],
            }),
            (0, r.jsxs)(i.BJc, {
                direction: "horizontal",
                justify: "center",
                align: "center",
                gap: 16,
                children: [
                    null != c && null != d
                        ? (0, r.jsx)(i.Button, {
                              variant: "secondary",
                              text: c,
                              onClick: b,
                          })
                        : null,
                    null != o && null != u
                        ? (0, r.jsx)(i.Button, {
                              onClick: g,
                              text: o,
                          })
                        : null,
                ],
            }),
        ],
    });
};
