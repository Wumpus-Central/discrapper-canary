n.d(l, { A: () => d });
var t = n(477900),
    i = n(582128),
    a = n(331322),
    s = n(834730),
    r = n(821609),
    c = n(847599),
    u = n(349164);
let d = function (e) {
    let {
        title: l,
        subtitle: n,
        description: d,
        agreement: o,
        disagreement: A,
        onAgree: h,
        onDisagree: g,
        modalType: m,
        channelId: x,
        guildId: f,
    } = e;
    i.useEffect(() => {
        (0, c.Bf)(m, x, f);
    }, [m, x, f]);
    let j = i.useCallback(() => {
            (0, c.mU)(c.IY.NSFW_CHANNEL_DISAGREE_CTA, m, x, f), g?.();
        }, [g, m, x, f]),
        N = i.useCallback(() => {
            (0, c.mU)(c.IY.NSFW_CHANNEL_AGREE_CTA, m, x, f), h?.();
        }, [h, m, x, f]);
    return (0, t.jsxs)(a.B, {
        justify: "center",
        align: "center",
        direction: "vertical",
        gap: 16,
        className: u.XG,
        children: [
            (0, t.jsxs)(a.B, {
                gap: 8,
                justify: "center",
                align: "center",
                direction: "vertical",
                children: [
                    (0, t.jsx)(s.E, { variant: "text-lg/semibold", className: u.DD, children: l }),
                    null != n
                        ? (0, t.jsx)(s.E, {
                              variant: "text-md/medium",
                              className: u.VA,
                              color: "text-muted",
                              children: n,
                          })
                        : null,
                    (0, t.jsx)(s.E, { variant: "text-md/medium", className: u.h_, color: "text-muted", children: d }),
                ],
            }),
            (0, t.jsxs)(a.B, {
                direction: "horizontal",
                justify: "center",
                align: "center",
                gap: 16,
                children: [
                    null != A && null != g ? (0, t.jsx)(r.$, { variant: "secondary", text: A, onClick: j }) : null,
                    null != o && null != h ? (0, t.jsx)(r.$, { onClick: N, text: o }) : null,
                ],
            }),
        ],
    });
};
