t.d(e, { default: () => N });
var i = t(477900),
    a = t(582128),
    n = t(935399),
    d = t(122074),
    c = t(22856),
    r = t(224640),
    l = t(315629),
    o = t(20742),
    x = t(297264),
    h = t(834730),
    m = t(821609),
    p = t(403581),
    b = t(501419),
    g = t(975571),
    u = t(87719),
    f = t(652215),
    j = t(49999),
    v = t(660183),
    k = t(431901);
function N(s) {
    let { renderModalProps: e, dismissibleContent: t, markAsDismissed: N } = s,
        { onClose: S, transitionState: w } = e,
        { headingId: C } = (0, c.k)();
    return (
        (0, n.Ay)(() => {
            (0, b.Wx)(t);
        }),
        a.useEffect(
            () => () => {
                N(j.i.AUTO_DISMISS);
            },
            [N],
        ),
        (0, i.jsx)(r.d, {
            transitionState: w,
            onClose: S,
            size: "md",
            paddingSize: "lg",
            children: (0, i.jsxs)(l.h, {
                color: "nitro-pink",
                className: k.D7,
                children: [
                    (0, i.jsx)("div", { className: k.cG, children: (0, i.jsx)(o.s_, { shouldColorMix: !0 }) }),
                    (0, i.jsx)("div", {
                        className: k.JS,
                        children: (0, i.jsx)(d.D, { alt: "", width: 360, height: "auto" }),
                    }),
                    (0, i.jsxs)("div", {
                        className: k.Qs,
                        children: [
                            (0, i.jsx)(x.D, {
                                id: C,
                                variant: "nitro-md",
                                color: "text-strong",
                                className: k.wx,
                                children: v.intl.string(v.t.Xm5q5l),
                            }),
                            (0, i.jsx)(h.E, {
                                variant: "text-md/normal",
                                color: "text-subtle",
                                className: k.rf,
                                children: v.intl.string(v.t.svsMII),
                            }),
                            (0, i.jsxs)("div", {
                                className: k.v0,
                                children: [
                                    (0, i.jsx)(m.$, {
                                        variant: "secondary",
                                        size: "md",
                                        onClick: () => window.open(g.A.getArticleURL(f.MVz.PREMIUM_DETAILS), "_blank"),
                                        text: v.intl.string(v.t.WHWwCY),
                                    }),
                                    (0, i.jsx)(m.$, {
                                        variant: "primary",
                                        size: "md",
                                        icon: p.t,
                                        text: v.intl.string(v.t["mHF+AF"]),
                                        onClick: () => (0, u.x)(S),
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        })
    );
}
