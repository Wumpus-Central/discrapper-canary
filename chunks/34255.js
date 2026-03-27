i.d(s, { default: () => h });
var n = i(627968),
    e = i(64700),
    a = i(550644),
    r = i(158954),
    c = i(87719),
    d = i(783420),
    l = i(788868),
    o = i(49999),
    x = i(985018),
    _ = i(164466);
function h(t) {
    let { renderModalProps: s, markAsDismissed: i } = t,
        { onClose: h, transitionState: f } = s,
        { headingId: u } = (0, r.k34)();
    return (
        e.useEffect(
            () => () => {
                i(o.i.AUTO_DISMISS);
            },
            [i],
        ),
        (0, n.jsx)(d.A, {
            subscriptionTier: l.pe.TIER_2,
            children: (t) => {
                let { onClick: s } = t;
                return (0, n.jsx)(r.dWK, {
                    transitionState: f,
                    onClose: h,
                    size: "md",
                    paddingSize: "lg",
                    children: (0, n.jsxs)(r.hLv, {
                        color: "nitro-pink",
                        className: _.D7,
                        children: [
                            (0, n.jsx)("div", { className: _.cG, children: (0, n.jsx)(r.s_y, { shouldColorMix: !0 }) }),
                            (0, n.jsx)("div", {
                                className: _.tW,
                                children: (0, n.jsx)(a.x, { alt: "", width: 400, height: "auto" }),
                            }),
                            (0, n.jsxs)("div", {
                                className: _.Qs,
                                children: [
                                    (0, n.jsx)(r.DZT, {
                                        id: u,
                                        variant: "display-md",
                                        color: "text-strong",
                                        className: _.wx,
                                        children: x.intl.string(x.t["M/ytwa"]),
                                    }),
                                    (0, n.jsx)(r.EYj, {
                                        variant: "text-md/normal",
                                        color: "text-subtle",
                                        className: _.rf,
                                        children: x.intl.string(x.t.xMkRkc),
                                    }),
                                    (0, n.jsxs)("div", {
                                        className: _.v0,
                                        children: [
                                            (0, n.jsx)(r.$nd, {
                                                variant: "secondary",
                                                size: "md",
                                                onClick: () => (0, c.x)(h),
                                                text: x.intl.string(x.t.j7LkaR),
                                            }),
                                            (0, n.jsx)(r.$nd, {
                                                variant: "expressive",
                                                size: "md",
                                                icon: r.tvc,
                                                text: x.intl.string(x.t.mPWeSh),
                                                onClick: async (t) => {
                                                    await h(), s(t);
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
