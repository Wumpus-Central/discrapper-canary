n.d(l, { A: () => d });
var t = n(477900),
    i = n(582128),
    s = n(331322),
    a = n(834730),
    r = n(821609),
    c = n(847599),
    u = n(969361);
let d = function (e) {
    let {
        title: l,
        subtitle: n,
        description: d,
        agreement: o,
        disagreement: m,
        onAgree: A,
        onDisagree: h,
        modalType: g,
        channelId: x,
        guildId: N,
    } = e;
    i.useEffect(() => {
        (0, c.Bf)(g, x, N);
    }, [g, x, N]);
    let f = i.useCallback(() => {
            (0, c.mU)(c.IY.NSFW_CHANNEL_DISAGREE_CTA, g, x, N), h?.();
        }, [h, g, x, N]),
        j = i.useCallback(() => {
            (0, c.mU)(c.IY.NSFW_CHANNEL_AGREE_CTA, g, x, N), A?.();
        }, [A, g, x, N]);
    return (0, t.jsxs)(s.B, {
        justify: "center",
        align: "center",
        direction: "vertical",
        gap: 16,
        className: u.XG,
        children: [
            (0, t.jsxs)(s.B, {
                gap: 8,
                justify: "center",
                align: "center",
                direction: "vertical",
                children: [
                    (0, t.jsx)(a.E, { variant: "text-lg/semibold", className: u.DD, children: l }),
                    null != n
                        ? (0, t.jsx)(a.E, {
                              variant: "text-md/medium",
                              className: u.VA,
                              color: "text-muted",
                              children: n,
                          })
                        : null,
                    (0, t.jsx)(a.E, { variant: "text-md/medium", className: u.h_, color: "text-muted", children: d }),
                ],
            }),
            (0, t.jsxs)(s.B, {
                direction: "horizontal",
                justify: "center",
                align: "center",
                gap: 16,
                children: [
                    null != m && null != h ? (0, t.jsx)(r.$, { variant: "secondary", text: m, onClick: f }) : null,
                    null != o && null != A ? (0, t.jsx)(r.$, { onClick: j, text: o }) : null,
                ],
            }),
        ],
    });
};
