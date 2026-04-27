c.d(s, { default: () => C });
var a = c(627968),
    e = c(64700),
    n = c(935399),
    i = c(22856),
    d = c(224640),
    r = c(315629),
    l = c(20742),
    o = c(534514),
    x = c(834730),
    _ = c(821609),
    b = c(403581),
    h = c(400829),
    p = c(367727),
    f = c(975571),
    m = c(87719),
    u = c(652215),
    g = c(49999),
    j = c(985018),
    v = c(886626);
function C(t) {
    let { renderModalProps: s, dismissibleContent: c, markAsDismissed: C } = t,
        { onClose: w, transitionState: k } = s,
        { headingId: S } = (0, i.k)();
    return (
        (0, n.Ay)(() => {
            (0, p.Wx)(c);
        }),
        e.useEffect(
            () => () => {
                C(g.i.AUTO_DISMISS);
            },
            [C],
        ),
        (0, a.jsx)(d.d, {
            transitionState: k,
            onClose: w,
            size: "md",
            paddingSize: "lg",
            children: (0, a.jsxs)(r.h, {
                color: "nitro-pink",
                className: v.D7,
                children: [
                    (0, a.jsx)("div", { className: v.cG, children: (0, a.jsx)(l.s_, { shouldColorMix: !0 }) }),
                    (0, a.jsx)("div", {
                        className: v.JS,
                        children: (0, a.jsx)(h.D, { alt: "", width: 360, height: "auto" }),
                    }),
                    (0, a.jsxs)("div", {
                        className: v.Qs,
                        children: [
                            (0, a.jsx)(o.D, {
                                id: S,
                                variant: "display-md",
                                color: "text-strong",
                                className: v.wx,
                                children: j.intl.string(j.t.Xm5q5l),
                            }),
                            (0, a.jsx)(x.E, {
                                variant: "text-md/normal",
                                color: "text-subtle",
                                className: v.rf,
                                children: j.intl.string(j.t.svsMII),
                            }),
                            (0, a.jsxs)("div", {
                                className: v.v0,
                                children: [
                                    (0, a.jsx)(_.$, {
                                        variant: "secondary",
                                        size: "md",
                                        onClick: () => window.open(f.A.getArticleURL(u.MVz.PREMIUM_DETAILS), "_blank"),
                                        text: j.intl.string(j.t.WHWwCY),
                                    }),
                                    (0, a.jsx)(_.$, {
                                        variant: "primary",
                                        size: "md",
                                        icon: b.t,
                                        text: j.intl.string(j.t["mHF+AF"]),
                                        onClick: () => (0, m.x)(w),
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
