var e = s(477900),
    a = s(582128),
    n = s(935399),
    c = s(386286),
    r = s(22856),
    l = s(224640),
    d = s(315629),
    o = s(20742),
    x = s(534514),
    m = s(834730),
    h = s(821609),
    p = s(403581),
    u = s(543862),
    g = s(722178),
    f = s(580630),
    j = s(87719),
    v = s(783420),
    b = s(682901),
    k = s(49999),
    N = s(792996),
    S = s(431901);
s.d(
    t,
    {},
    {
        default: function (i) {
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
                        y(k.i.AUTO_DISMISS);
                    },
                    [y],
                ),
                (0, e.jsx)(v.A, {
                    subscriptionTier: b.pe.TIER_2,
                    children: (i) => {
                        let { onClick: t } = i;
                        return (0, e.jsx)(l.d, {
                            transitionState: w,
                            onClose: C,
                            size: "md",
                            paddingSize: "lg",
                            children: (0, e.jsxs)(d.h, {
                                color: "nitro-pink",
                                className: S.D7,
                                children: [
                                    (0, e.jsx)("div", {
                                        className: S.cG,
                                        children: (0, e.jsx)(o.s_, { shouldColorMix: !0 }),
                                    }),
                                    (0, e.jsx)("div", {
                                        className: S.tW,
                                        children: (0, e.jsx)(c.x, { alt: "", width: 400, height: "auto" }),
                                    }),
                                    (0, e.jsxs)("div", {
                                        className: S.Qs,
                                        children: [
                                            (0, e.jsx)(x.D, {
                                                id: D,
                                                variant: "nitro-md",
                                                color: "text-strong",
                                                className: S.wx,
                                                children: N.intl.string(N.t["M/ytwa"]),
                                            }),
                                            (0, e.jsx)(m.E, {
                                                variant: "body-md/normal",
                                                color: "text-subtle",
                                                className: S.rf,
                                                children: N.intl.formatToPlainString(N.t.xMkRkc, { price: M }),
                                            }),
                                            (0, e.jsxs)("div", {
                                                className: S.v0,
                                                children: [
                                                    (0, e.jsx)(h.$, {
                                                        variant: "secondary",
                                                        size: "md",
                                                        onClick: () => (0, j.x)(C),
                                                        text: N.intl.string(N.t.j7LkaR),
                                                    }),
                                                    (0, e.jsx)(h.$, {
                                                        variant: "expressive",
                                                        size: "md",
                                                        icon: p.NitroWheelIcon,
                                                        text: N.intl.formatToPlainString(N.t.mPWeSh, { price: M }),
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
        },
    },
);
