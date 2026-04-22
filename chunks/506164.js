n.d(t, { A: () => c });
var i = n(627968),
    l = n(64700),
    s = n(331322),
    a = n(834730),
    r = n(821609),
    o = n(847599),
    d = n(347273);
let c = function (e) {
    let {
        title: t,
        subtitle: n,
        description: c,
        agreement: u,
        disagreement: h,
        onAgree: A,
        onDisagree: _,
        modalType: m,
        channelId: g,
        guildId: p,
    } = e;
    l.useEffect(() => {
        (0, o.Bf)(m, g, p);
    }, [m, g, p]);
    let f = l.useCallback(() => {
            (0, o.mU)(o.IY.NSFW_CHANNEL_DISAGREE_CTA, m, g, p), _?.();
        }, [_, m, g, p]),
        E = l.useCallback(() => {
            (0, o.mU)(o.IY.NSFW_CHANNEL_AGREE_CTA, m, g, p), A?.();
        }, [A, m, g, p]);
    return (0, i.jsxs)(s.B, {
        justify: "center",
        align: "center",
        direction: "vertical",
        gap: 16,
        className: d.XG,
        children: [
            (0, i.jsxs)(s.B, {
                gap: 8,
                justify: "center",
                align: "center",
                direction: "vertical",
                children: [
                    (0, i.jsx)(a.E, { variant: "text-lg/semibold", className: d.DD, children: t }),
                    null != n
                        ? (0, i.jsx)(a.E, {
                              variant: "text-md/medium",
                              className: d.VA,
                              color: "text-muted",
                              children: n,
                          })
                        : null,
                    (0, i.jsx)(a.E, { variant: "text-md/medium", className: d.h_, color: "text-muted", children: c }),
                ],
            }),
            (0, i.jsxs)(s.B, {
                direction: "horizontal",
                justify: "center",
                align: "center",
                gap: 16,
                children: [
                    null != h && null != _ ? (0, i.jsx)(r.$, { variant: "secondary", text: h, onClick: f }) : null,
                    null != u && null != A ? (0, i.jsx)(r.$, { onClick: E, text: u }) : null,
                ],
            }),
        ],
    });
};
