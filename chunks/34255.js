i.d(e, { default: () => S });
var a = i(627968),
    s = i(64700),
    c = i(935399),
    n = i(550644),
    r = i(22856),
    d = i(224640),
    o = i(315629),
    l = i(20742),
    x = i(534514),
    f = i(834730),
    m = i(821609),
    p = i(403581),
    h = i(367727),
    _ = i(927578),
    b = i(580630),
    u = i(87719),
    g = i(783420),
    j = i(788868),
    v = i(49999),
    k = i(985018),
    C = i(886626);
function S(t) {
    let { renderModalProps: e, dismissibleContent: i, markAsDismissed: S } = t,
        { onClose: w, transitionState: A } = e,
        { headingId: y } = (0, r.k)(),
        N = (0, b.$g)(0, (0, _.Rr)(), { minimumFractionDigits: 0, maximumFractionDigits: 0 });
    return (
        (0, c.Ay)(() => {
            (0, h.Wx)(i);
        }),
        s.useEffect(
            () => () => {
                S(v.i.AUTO_DISMISS);
            },
            [S],
        ),
        (0, a.jsx)(g.A, {
            subscriptionTier: j.pe.TIER_2,
            children: (t) => {
                let { onClick: e } = t;
                return (0, a.jsx)(d.d, {
                    transitionState: A,
                    onClose: w,
                    size: "md",
                    paddingSize: "lg",
                    children: (0, a.jsxs)(o.h, {
                        color: "nitro-pink",
                        className: C.D7,
                        children: [
                            (0, a.jsx)("div", { className: C.cG, children: (0, a.jsx)(l.s_, { shouldColorMix: !0 }) }),
                            (0, a.jsx)("div", {
                                className: C.tW,
                                children: (0, a.jsx)(n.x, { alt: "", width: 400, height: "auto" }),
                            }),
                            (0, a.jsxs)("div", {
                                className: C.Qs,
                                children: [
                                    (0, a.jsx)(x.D, {
                                        id: y,
                                        variant: "display-md",
                                        color: "text-strong",
                                        className: C.wx,
                                        children: k.intl.string(k.t["M/ytwa"]),
                                    }),
                                    (0, a.jsx)(f.E, {
                                        variant: "text-md/normal",
                                        color: "text-subtle",
                                        className: C.rf,
                                        children: k.intl.formatToPlainString(k.t.xMkRkc, { price: N }),
                                    }),
                                    (0, a.jsxs)("div", {
                                        className: C.v0,
                                        children: [
                                            (0, a.jsx)(m.$, {
                                                variant: "secondary",
                                                size: "md",
                                                onClick: () => (0, u.x)(w),
                                                text: k.intl.string(k.t.j7LkaR),
                                            }),
                                            (0, a.jsx)(m.$, {
                                                variant: "expressive",
                                                size: "md",
                                                icon: p.t,
                                                text: k.intl.formatToPlainString(k.t.mPWeSh, { price: N }),
                                                onClick: async (t) => {
                                                    await w(), e(t);
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
