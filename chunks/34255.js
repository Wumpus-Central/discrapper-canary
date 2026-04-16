n.d(i, { default: () => p });
var s = n(627968),
    e = n(64700),
    a = n(935399),
    r = n(550644),
    c = n(158954),
    d = n(367727),
    o = n(927578),
    l = n(580630),
    x = n(87719),
    _ = n(783420),
    m = n(788868),
    h = n(49999),
    f = n(985018),
    u = n(164466);
function p(t) {
    let { renderModalProps: i, dismissibleContent: n, markAsDismissed: p } = t,
        { onClose: b, transitionState: j } = i,
        { headingId: v } = (0, c.k34)(),
        g = (0, l.$g)(0, (0, o.Rr)(), { minimumFractionDigits: 0, maximumFractionDigits: 0 });
    return (
        (0, a.Ay)(() => {
            (0, d.Wx)(n);
        }),
        e.useEffect(
            () => () => {
                p(h.i.AUTO_DISMISS);
            },
            [p],
        ),
        (0, s.jsx)(_.A, {
            subscriptionTier: m.pe.TIER_2,
            children: (t) => {
                let { onClick: i } = t;
                return (0, s.jsx)(c.dWK, {
                    transitionState: j,
                    onClose: b,
                    size: "md",
                    paddingSize: "lg",
                    children: (0, s.jsxs)(c.hLv, {
                        color: "nitro-pink",
                        className: u.D7,
                        children: [
                            (0, s.jsx)("div", { className: u.cG, children: (0, s.jsx)(c.s_y, { shouldColorMix: !0 }) }),
                            (0, s.jsx)("div", {
                                className: u.tW,
                                children: (0, s.jsx)(r.x, { alt: "", width: 400, height: "auto" }),
                            }),
                            (0, s.jsxs)("div", {
                                className: u.Qs,
                                children: [
                                    (0, s.jsx)(c.DZT, {
                                        id: v,
                                        variant: "display-md",
                                        color: "text-strong",
                                        className: u.wx,
                                        children: f.intl.string(f.t["M/ytwa"]),
                                    }),
                                    (0, s.jsx)(c.EYj, {
                                        variant: "text-md/normal",
                                        color: "text-subtle",
                                        className: u.rf,
                                        children: f.intl.formatToPlainString(f.t.xMkRkc, { price: g }),
                                    }),
                                    (0, s.jsxs)("div", {
                                        className: u.v0,
                                        children: [
                                            (0, s.jsx)(c.$nd, {
                                                variant: "secondary",
                                                size: "md",
                                                onClick: () => (0, x.x)(b),
                                                text: f.intl.string(f.t.j7LkaR),
                                            }),
                                            (0, s.jsx)(c.$nd, {
                                                variant: "expressive",
                                                size: "md",
                                                icon: c.tvc,
                                                text: f.intl.formatToPlainString(f.t.mPWeSh, { price: g }),
                                                onClick: async (t) => {
                                                    await b(), i(t);
                                                },
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                });
            },
        })
    );
}
