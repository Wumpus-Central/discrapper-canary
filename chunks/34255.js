n.d(i, { default: () => f });
var s = n(627968),
    e = n(64700),
    a = n(550644),
    r = n(158954),
    c = n(927578),
    d = n(580630),
    o = n(87719),
    l = n(783420),
    x = n(788868),
    _ = n(49999),
    m = n(985018),
    h = n(164466);
function f(t) {
    let { renderModalProps: i, markAsDismissed: n } = t,
        { onClose: f, transitionState: u } = i,
        { headingId: p } = (0, r.k34)(),
        b = (0, d.$g)(0, (0, c.Rr)(), { minimumFractionDigits: 0, maximumFractionDigits: 0 });
    return (
        e.useEffect(
            () => () => {
                n(_.i.AUTO_DISMISS);
            },
            [n],
        ),
        (0, s.jsx)(l.A, {
            subscriptionTier: x.pe.TIER_2,
            children: (t) => {
                let { onClick: i } = t;
                return (0, s.jsx)(r.dWK, {
                    transitionState: u,
                    onClose: f,
                    size: "md",
                    paddingSize: "lg",
                    children: (0, s.jsxs)(r.hLv, {
                        color: "nitro-pink",
                        className: h.D7,
                        children: [
                            (0, s.jsx)("div", { className: h.cG, children: (0, s.jsx)(r.s_y, { shouldColorMix: !0 }) }),
                            (0, s.jsx)("div", {
                                className: h.tW,
                                children: (0, s.jsx)(a.x, { alt: "", width: 400, height: "auto" }),
                            }),
                            (0, s.jsxs)("div", {
                                className: h.Qs,
                                children: [
                                    (0, s.jsx)(r.DZT, {
                                        id: p,
                                        variant: "display-md",
                                        color: "text-strong",
                                        className: h.wx,
                                        children: m.intl.string(m.t["M/ytwa"]),
                                    }),
                                    (0, s.jsx)(r.EYj, {
                                        variant: "text-md/normal",
                                        color: "text-subtle",
                                        className: h.rf,
                                        children: m.intl.formatToPlainString(m.t.xMkRkc, { price: b }),
                                    }),
                                    (0, s.jsxs)("div", {
                                        className: h.v0,
                                        children: [
                                            (0, s.jsx)(r.$nd, {
                                                variant: "secondary",
                                                size: "md",
                                                onClick: () => (0, o.x)(f),
                                                text: m.intl.string(m.t.j7LkaR),
                                            }),
                                            (0, s.jsx)(r.$nd, {
                                                variant: "expressive",
                                                size: "md",
                                                icon: r.tvc,
                                                text: m.intl.formatToPlainString(m.t.mPWeSh, { price: b }),
                                                onClick: async (t) => {
                                                    await f(), i(t);
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
