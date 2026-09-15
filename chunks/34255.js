s.d(t, { default: () => N });
var a = s(477900),
    e = s(582128),
    n = s(935399),
    r = s(212776),
    c = s(22856),
    l = s(224640),
    d = s(315629),
    o = s(20742),
    x = s(297264),
    m = s(834730),
    h = s(821609),
    p = s(403581),
    u = s(367727),
    j = s(158045),
    f = s(580630),
    g = s(87719),
    v = s(783420),
    k = s(202541),
    S = s(49999),
    b = s(375708),
    C = s(431901);
function N(i) {
    let { renderModalProps: t, dismissibleContent: s, markAsDismissed: N } = i,
        { onClose: w, transitionState: y } = t,
        { headingId: D } = (0, c.k)(),
        T = (0, f.$g)(0, (0, j.Rr)(), { minimumFractionDigits: 0, maximumFractionDigits: 0 });
    return (
        (0, n.Ay)(() => {
            (0, u.Wx)(s);
        }),
        e.useEffect(
            () => () => {
                N(S.i.AUTO_DISMISS);
            },
            [N],
        ),
        (0, a.jsx)(v.A, {
            subscriptionTier: k.pe.TIER_2,
            children: (i) => {
                let { onClick: t } = i;
                return (0, a.jsx)(l.d, {
                    transitionState: y,
                    onClose: w,
                    size: "md",
                    paddingSize: "lg",
                    children: (0, a.jsxs)(d.h, {
                        color: "nitro-pink",
                        className: C.D7,
                        children: [
                            (0, a.jsx)("div", { className: C.cG, children: (0, a.jsx)(o.s_, { shouldColorMix: !0 }) }),
                            (0, a.jsx)("div", {
                                className: C.tW,
                                children: (0, a.jsx)(r.x, { alt: "", width: 400, height: "auto" }),
                            }),
                            (0, a.jsxs)("div", {
                                className: C.Qs,
                                children: [
                                    (0, a.jsx)(x.D, {
                                        id: D,
                                        variant: "nitro-md",
                                        color: "text-strong",
                                        className: C.wx,
                                        children: b.intl.string(b.t["M/ytwa"]),
                                    }),
                                    (0, a.jsx)(m.E, {
                                        variant: "text-md/normal",
                                        color: "text-subtle",
                                        className: C.rf,
                                        children: b.intl.formatToPlainString(b.t.xMkRkc, { price: T }),
                                    }),
                                    (0, a.jsxs)("div", {
                                        className: C.v0,
                                        children: [
                                            (0, a.jsx)(h.$, {
                                                variant: "secondary",
                                                size: "md",
                                                onClick: () => (0, g.x)(w),
                                                text: b.intl.string(b.t.j7LkaR),
                                            }),
                                            (0, a.jsx)(h.$, {
                                                variant: "expressive",
                                                size: "md",
                                                icon: p.t,
                                                text: b.intl.formatToPlainString(b.t.mPWeSh, { price: T }),
                                                onClick: async (i) => {
                                                    (await w(), t(i));
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
