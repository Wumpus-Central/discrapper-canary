l.d(n, { A: () => d });
var t = l(477900),
    i = l(582128),
    a = l(821609),
    s = l(331322),
    r = l(834730),
    c = l(847599),
    u = l(349164);
let d = function (e) {
    let {
        title: n,
        subtitle: l,
        description: d,
        agreement: o,
        agreementButtonVariant: A = "primary",
        disagreement: h,
        disagreementButtonVariant: g = "secondary",
        onAgree: m,
        onDisagree: x,
        modalType: f,
        channelId: j,
        guildId: N,
    } = e;
    i.useEffect(() => {
        (0, c.Bf)(f, j, N);
    }, [f, j, N]);
    let p = i.useCallback(() => {
            ((0, c.mU)(c.IY.NSFW_CHANNEL_DISAGREE_CTA, f, j, N), x?.());
        }, [x, f, j, N]),
        C = i.useCallback(() => {
            ((0, c.mU)(c.IY.NSFW_CHANNEL_AGREE_CTA, f, j, N), m?.());
        }, [m, f, j, N]),
        E = null != o && null != m ? (0, t.jsx)(a.$, { variant: A, text: o, onClick: C }, "agree") : null,
        I = null != h && null != x ? (0, t.jsx)(a.$, { variant: g, text: h, onClick: p }, "disagree") : null;
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
                    (0, t.jsx)(r.E, { variant: "text-lg/semibold", className: u.DD, children: n }),
                    null != l
                        ? (0, t.jsx)(r.E, {
                              variant: "text-md/medium",
                              className: u.VA,
                              color: "text-muted",
                              children: l,
                          })
                        : null,
                    (0, t.jsx)(r.E, { variant: "text-md/medium", className: u.h_, color: "text-muted", children: d }),
                ],
            }),
            (0, t.jsx)(s.B, {
                direction: "horizontal",
                justify: "center",
                align: "center",
                gap: 16,
                children: "primary" === g ? [E, I] : [I, E],
            }),
        ],
    });
};
