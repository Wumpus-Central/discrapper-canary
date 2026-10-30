e.d(t, { default: () => N });
var i = e(477900),
    a = e(582128),
    n = e(935399),
    c = e(400829),
    d = e(22856),
    r = e(224640),
    l = e(315629),
    o = e(20742),
    x = e(297264),
    h = e(834730),
    m = e(821609),
    p = e(403581),
    b = e(501419),
    g = e(975571),
    u = e(87719),
    j = e(652215),
    v = e(49999),
    f = e(105292),
    k = e(431901);
function N(s) {
    let { renderModalProps: t, dismissibleContent: e, markAsDismissed: N } = s,
        { onClose: S, transitionState: w } = t,
        { headingId: A } = (0, d.k)();
    return (
        (0, n.Ay)(() => {
            (0, b.Wx)(e);
        }),
        a.useEffect(
            () => () => {
                N(v.i.AUTO_DISMISS);
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
                        children: (0, i.jsx)(c.D, { alt: "", width: 360, height: "auto" }),
                    }),
                    (0, i.jsxs)("div", {
                        className: k.Qs,
                        children: [
                            (0, i.jsx)(x.D, {
                                id: A,
                                variant: "nitro-md",
                                color: "text-strong",
                                className: k.wx,
                                children: f.intl.string(f.t.Xm5q5l),
                            }),
                            (0, i.jsx)(h.E, {
                                variant: "text-md/normal",
                                color: "text-subtle",
                                className: k.rf,
                                children: f.intl.string(f.t.svsMII),
                            }),
                            (0, i.jsxs)("div", {
                                className: k.v0,
                                children: [
                                    (0, i.jsx)(m.$, {
                                        variant: "secondary",
                                        size: "md",
                                        onClick: () => window.open(g.A.getArticleURL(j.MVz.PREMIUM_DETAILS), "_blank"),
                                        text: f.intl.string(f.t.WHWwCY),
                                    }),
                                    (0, i.jsx)(m.$, {
                                        variant: "primary",
                                        size: "md",
                                        icon: p.t,
                                        text: f.intl.string(f.t["mHF+AF"]),
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
