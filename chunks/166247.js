var i = t(477900),
    a = t(582128),
    n = t(935399),
    c = t(664499),
    d = t(22856),
    r = t(224640),
    l = t(315629),
    o = t(20742),
    h = t(534514),
    x = t(834730),
    m = t(821609),
    p = t(403581),
    b = t(543862),
    g = t(975571),
    u = t(87719),
    j = t(652215),
    v = t(49999),
    f = t(792996),
    k = t(431901);
t.d(
    e,
    {},
    {
        default: function (s) {
            let { renderModalProps: e, dismissibleContent: t, markAsDismissed: N } = s,
                { onClose: S, transitionState: w } = e,
                { headingId: y } = (0, d.k)();
            return (
                (0, n.Ay)(() => {
                    (0, b.Wx)(t);
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
                                    (0, i.jsx)(h.D, {
                                        id: y,
                                        variant: "nitro-md",
                                        color: "text-strong",
                                        className: k.wx,
                                        children: f.intl.string(f.t.Xm5q5l),
                                    }),
                                    (0, i.jsx)(x.E, {
                                        variant: "body-md/normal",
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
                                                onClick: () =>
                                                    window.open(g.A.getArticleURL(j.MVz.PREMIUM_DETAILS), "_blank"),
                                                text: f.intl.string(f.t.WHWwCY),
                                            }),
                                            (0, i.jsx)(m.$, {
                                                variant: "primary",
                                                size: "md",
                                                icon: p.NitroWheelIcon,
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
        },
    },
);
