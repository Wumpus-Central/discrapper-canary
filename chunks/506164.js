n.d(t, { A: () => o });
var i = n(627968),
    l = n(64700),
    s = n(397927),
    a = n(847599),
    r = n(928800);
let o = function (e) {
    let {
        title: t,
        subtitle: n,
        description: o,
        agreement: d,
        disagreement: c,
        onAgree: u,
        onDisagree: h,
        modalType: A,
        channelId: _,
        guildId: m,
    } = e;
    l.useEffect(() => {
        (0, a.Bf)(A, _, m);
    }, [A, _, m]);
    let g = l.useCallback(() => {
            (0, a.mU)(a.IY.NSFW_CHANNEL_DISAGREE_CTA, A, _, m), h?.();
        }, [h, A, _, m]),
        p = l.useCallback(() => {
            (0, a.mU)(a.IY.NSFW_CHANNEL_AGREE_CTA, A, _, m), u?.();
        }, [u, A, _, m]);
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
                    null != n
                        ? (0, i.jsx)(s.Text, {
                              variant: "text-md/medium",
                              className: r.VA,
                              color: "text-muted",
                              children: n,
                          })
                        : null,
                    (0, i.jsx)(s.Text, {
                        variant: "text-md/medium",
                        className: r.h_,
                        color: "text-muted",
                        children: o,
                    }),
                ],
            }),
            (0, i.jsxs)(s.BJc, {
                direction: "horizontal",
                justify: "center",
                align: "center",
                gap: 16,
                children: [
                    null != c && null != h ? (0, i.jsx)(s.Button, { variant: "secondary", text: c, onClick: g }) : null,
                    null != d && null != u ? (0, i.jsx)(s.Button, { onClick: p, text: d }) : null,
                ],
            }),
        ],
    });
};
