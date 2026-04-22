a.d(s, { default: () => A });
var c = a(627968),
    e = a(64700),
    n = a(935399),
    i = a(22856),
    d = a(224640),
    r = a(315629),
    l = a(20742),
    o = a(534514),
    x = a(834730),
    _ = a(821609),
    b = a(403581),
    h = a(326554),
    p = a(367727),
    f = a(975571),
    m = a(87719),
    u = a(652215),
    g = a(49999),
    v = a(985018),
    j = a(886626);
function A(t) {
    let { renderModalProps: s, dismissibleContent: a, markAsDismissed: A } = t,
        { onClose: C, transitionState: w } = s,
        { headingId: k } = (0, i.k)();
    return (
        (0, n.Ay)(() => {
            (0, p.Wx)(a);
        }),
        e.useEffect(
            () => () => {
                A(g.i.AUTO_DISMISS);
            },
            [A],
        ),
        (0, c.jsx)(d.d, {
            transitionState: w,
            onClose: C,
            size: "md",
            paddingSize: "lg",
            children: (0, c.jsxs)(r.h, {
                color: "nitro-pink",
                className: j.D7,
                children: [
                    (0, c.jsx)("div", { className: j.cG, children: (0, c.jsx)(l.s_, { shouldColorMix: !0 }) }),
                    (0, c.jsx)("div", {
                        className: j.JS,
                        children: (0, c.jsx)(h.D, { alt: "", width: 360, height: "auto" }),
                    }),
                    (0, c.jsxs)("div", {
                        className: j.Qs,
                        children: [
                            (0, c.jsx)(o.D, {
                                id: k,
                                variant: "display-md",
                                color: "text-strong",
                                className: j.wx,
                                children: v.intl.string(v.t.Xm5q5l),
                            }),
                            (0, c.jsx)(x.E, {
                                variant: "text-md/normal",
                                color: "text-subtle",
                                className: j.rf,
                                children: v.intl.string(v.t.svsMII),
                            }),
                            (0, c.jsxs)("div", {
                                className: j.v0,
                                children: [
                                    (0, c.jsx)(_.$, {
                                        variant: "secondary",
                                        size: "md",
                                        onClick: () => window.open(f.A.getArticleURL(u.MVz.PREMIUM_DETAILS), "_blank"),
                                        text: v.intl.string(v.t.WHWwCY),
                                    }),
                                    (0, c.jsx)(_.$, {
                                        variant: "primary",
                                        size: "md",
                                        icon: b.t,
                                        text: v.intl.string(v.t["mHF+AF"]),
                                        onClick: () => (0, m.x)(C),
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
