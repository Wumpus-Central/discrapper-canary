s.d(t, { default: () => y });
var e = s(477900),
    a = s(582128),
    n = s(935399),
    c = s(933436),
    r = s(22856),
    l = s(224640),
    d = s(315629),
    o = s(20742),
    x = s(297264),
    m = s(834730),
    h = s(821609),
    p = s(403581),
    u = s(501419),
    g = s(158045),
    f = s(580630),
    j = s(87719),
    v = s(783420),
    k = s(202541),
    b = s(49999),
    S = s(660183),
    N = s(431901);
function y(i) {
    let { renderModalProps: t, dismissibleContent: s, markAsDismissed: y } = i,
        { onClose: C, transitionState: w } = t,
        { headingId: D } = (0, r.k)(),
        M = (0, f.$g)(0, (0, g.Rr)(), { minimumFractionDigits: 0, maximumFractionDigits: 0 });
    return (
        (0, n.Ay)(() => {
            (0, u.Wx)(s);
        }),
        a.useEffect(
            () => () => {
                y(b.i.AUTO_DISMISS);
            },
            [y],
        ),
        (0, e.jsx)(v.A, {
            subscriptionTier: k.pe.TIER_2,
            children: (i) => {
                let { onClick: t } = i;
                return (0, e.jsx)(l.d, {
                    transitionState: w,
                    onClose: C,
                    size: "md",
                    paddingSize: "lg",
                    children: (0, e.jsxs)(d.h, {
                        color: "nitro-pink",
                        className: N.D7,
                        children: [
                            (0, e.jsx)("div", { className: N.cG, children: (0, e.jsx)(o.s_, { shouldColorMix: !0 }) }),
                            (0, e.jsx)("div", {
                                className: N.tW,
                                children: (0, e.jsx)(c.x, { alt: "", width: 400, height: "auto" }),
                            }),
                            (0, e.jsxs)("div", {
                                className: N.Qs,
                                children: [
                                    (0, e.jsx)(x.D, {
                                        id: D,
                                        variant: "nitro-md",
                                        color: "text-strong",
                                        className: N.wx,
                                        children: S.intl.string(S.t["M/ytwa"]),
                                    }),
                                    (0, e.jsx)(m.E, {
                                        variant: "text-md/normal",
                                        color: "text-subtle",
                                        className: N.rf,
                                        children: S.intl.formatToPlainString(S.t.xMkRkc, { price: M }),
                                    }),
                                    (0, e.jsxs)("div", {
                                        className: N.v0,
                                        children: [
                                            (0, e.jsx)(h.$, {
                                                variant: "secondary",
                                                size: "md",
                                                onClick: () => (0, j.x)(C),
                                                text: S.intl.string(S.t.j7LkaR),
                                            }),
                                            (0, e.jsx)(h.$, {
                                                variant: "expressive",
                                                size: "md",
                                                icon: p.t,
                                                text: S.intl.formatToPlainString(S.t.mPWeSh, { price: M }),
                                                onClick: async (i) => {
                                                    (await C(), t(i));
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
