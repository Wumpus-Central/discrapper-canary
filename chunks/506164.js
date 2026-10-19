t.d(n, { A: () => d });
var l = t(477900),
    i = t(582128),
    a = t(821609),
    s = t(331322),
    r = t(297264),
    c = t(834730),
    o = t(306537),
    u = t(349164);
let d = function (e) {
    let {
        title: n,
        subtitle: t,
        description: d,
        agreement: h,
        agreementButtonVariant: g = "primary",
        disagreement: A,
        disagreementButtonVariant: m = "secondary",
        onAgree: p,
        onDisagree: j,
        modalType: f,
        channelId: x,
        guildId: N,
        "data-testid": C,
    } = e;
    i.useEffect(() => {
        (0, o.Bf)(f, x, N);
    }, [f, x, N]);
    let b = i.useCallback(() => {
            ((0, o.mU)(o.IY.NSFW_CHANNEL_DISAGREE_CTA, f, x, N), j?.());
        }, [j, f, x, N]),
        E = i.useCallback(() => {
            ((0, o.mU)(o.IY.NSFW_CHANNEL_AGREE_CTA, f, x, N), p?.());
        }, [p, f, x, N]),
        I = null != h && null != p ? (0, l.jsx)(a.$, { variant: g, text: h, onClick: E }, "agree") : null,
        _ = null != A && null != j ? (0, l.jsx)(a.$, { variant: m, text: A, onClick: b }, "disagree") : null;
    return (0, l.jsxs)(s.B, {
        justify: "center",
        align: "center",
        direction: "vertical",
        gap: 16,
        className: u.XG,
        "data-testid": C,
        children: [
            (0, l.jsxs)(s.B, {
                gap: 8,
                justify: "center",
                align: "center",
                direction: "vertical",
                children: [
                    (0, l.jsx)(r.D, { variant: "text-lg/semibold", className: u.DD, children: n }),
                    null != t
                        ? (0, l.jsx)(c.E, {
                              variant: "text-md/medium",
                              className: u.VA,
                              color: "text-muted",
                              children: t,
                          })
                        : null,
                    (0, l.jsx)(c.E, { variant: "text-md/medium", className: u.h_, color: "text-muted", children: d }),
                ],
            }),
            (0, l.jsx)(s.B, {
                direction: "horizontal",
                justify: "center",
                align: "center",
                gap: 16,
                children: "primary" === m ? [I, _] : [_, I],
            }),
        ],
    });
};
