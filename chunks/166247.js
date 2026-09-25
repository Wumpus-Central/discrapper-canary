e.d(t, { default: () => S });
var i = e(477900),
    a = e(582128),
    n = e(935399),
    d = e(400829),
    c = e(22856),
    r = e(224640),
    l = e(315629),
    o = e(20742),
    x = e(297264),
    h = e(834730),
    m = e(821609),
    p = e(403581),
    b = e(367727),
    g = e(975571),
    j = e(87719),
    u = e(652215),
    f = e(49999),
    v = e(375708),
    k = e(431901);
function S(s) {
    let { renderModalProps: t, dismissibleContent: e, markAsDismissed: S } = s,
        { onClose: w, transitionState: C } = t,
        { headingId: N } = (0, c.k)();
    return (
        (0, n.Ay)(() => {
            (0, b.Wx)(e);
        }),
        a.useEffect(
            () => () => {
                S(f.i.AUTO_DISMISS);
            },
            [S],
        ),
        (0, i.jsx)(r.d, {
            transitionState: C,
            onClose: w,
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
                                id: N,
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
                                        onClick: () => window.open(g.A.getArticleURL(u.MVz.PREMIUM_DETAILS), "_blank"),
                                        text: v.intl.string(v.t.WHWwCY),
                                    }),
                                    (0, i.jsx)(m.$, {
                                        variant: "primary",
                                        size: "md",
                                        icon: p.t,
                                        text: v.intl.string(v.t["mHF+AF"]),
                                        onClick: () => (0, j.x)(w),
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
