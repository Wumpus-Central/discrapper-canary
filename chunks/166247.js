i.d(s, { default: () => m });
var n = i(627968),
    e = i(64700),
    a = i(935399),
    d = i(158954),
    r = i(492917),
    c = i(367727),
    l = i(975571),
    o = i(87719),
    _ = i(652215),
    x = i(49999),
    h = i(985018),
    f = i(164466);
function m(t) {
    let { renderModalProps: s, dismissibleContent: i, markAsDismissed: m } = t,
        { onClose: b, transitionState: p } = s,
        { headingId: u } = (0, d.k34)();
    return (
        (0, a.Ay)(() => {
            (0, c.Wx)(i);
        }),
        e.useEffect(
            () => () => {
                m(x.i.AUTO_DISMISS);
            },
            [m],
        ),
        (0, n.jsx)(d.dWK, {
            transitionState: p,
            onClose: b,
            size: "md",
            paddingSize: "lg",
            children: (0, n.jsxs)(d.hLv, {
                color: "nitro-pink",
                className: f.D7,
                children: [
                    (0, n.jsx)("div", { className: f.cG, children: (0, n.jsx)(d.s_y, { shouldColorMix: !0 }) }),
                    (0, n.jsx)("div", {
                        className: f.JS,
                        children: (0, n.jsx)(r.DAD, { alt: "", width: 360, height: "auto" }),
                    }),
                    (0, n.jsxs)("div", {
                        className: f.Qs,
                        children: [
                            (0, n.jsx)(d.DZT, {
                                id: u,
                                variant: "display-md",
                                color: "text-strong",
                                className: f.wx,
                                children: h.intl.string(h.t.Xm5q5l),
                            }),
                            (0, n.jsx)(d.EYj, {
                                variant: "text-md/normal",
                                color: "text-subtle",
                                className: f.rf,
                                children: h.intl.string(h.t.svsMII),
                            }),
                            (0, n.jsxs)("div", {
                                className: f.v0,
                                children: [
                                    (0, n.jsx)(d.$nd, {
                                        variant: "secondary",
                                        size: "md",
                                        onClick: () => window.open(l.A.getArticleURL(_.MVz.PREMIUM_DETAILS), "_blank"),
                                        text: h.intl.string(h.t.WHWwCY),
                                    }),
                                    (0, n.jsx)(d.$nd, {
                                        variant: "primary",
                                        size: "md",
                                        icon: d.tvc,
                                        text: h.intl.string(h.t["mHF+AF"]),
                                        onClick: () => (0, o.x)(b),
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
