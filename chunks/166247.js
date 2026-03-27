i.d(s, { default: () => h });
var n = i(627968),
    e = i(64700),
    a = i(158954),
    d = i(492917),
    r = i(975571),
    c = i(87719),
    l = i(652215),
    o = i(49999),
    _ = i(985018),
    x = i(164466);
function h(t) {
    let { renderModalProps: s, markAsDismissed: i } = t,
        { onClose: h, transitionState: f } = s,
        { headingId: m } = (0, a.k34)();
    return (
        e.useEffect(
            () => () => {
                i(o.i.AUTO_DISMISS);
            },
            [i],
        ),
        (0, n.jsx)(a.dWK, {
            transitionState: f,
            onClose: h,
            size: "md",
            paddingSize: "lg",
            children: (0, n.jsxs)(a.hLv, {
                color: "nitro-pink",
                className: x.D7,
                children: [
                    (0, n.jsx)("div", { className: x.cG, children: (0, n.jsx)(a.s_y, { shouldColorMix: !0 }) }),
                    (0, n.jsx)("div", {
                        className: x.JS,
                        children: (0, n.jsx)(d.DAD, { alt: "", width: 360, height: "auto" }),
                    }),
                    (0, n.jsxs)("div", {
                        className: x.Qs,
                        children: [
                            (0, n.jsx)(a.DZT, {
                                id: m,
                                variant: "display-md",
                                color: "text-strong",
                                className: x.wx,
                                children: _.intl.string(_.t.Xm5q5l),
                            }),
                            (0, n.jsx)(a.EYj, {
                                variant: "text-md/normal",
                                color: "text-subtle",
                                className: x.rf,
                                children: _.intl.string(_.t.svsMII),
                            }),
                            (0, n.jsxs)("div", {
                                className: x.v0,
                                children: [
                                    (0, n.jsx)(a.$nd, {
                                        variant: "secondary",
                                        size: "md",
                                        onClick: () => window.open(r.A.getArticleURL(l.MVz.PREMIUM_DETAILS), "_blank"),
                                        text: _.intl.string(_.t.WHWwCY),
                                    }),
                                    (0, n.jsx)(a.$nd, {
                                        variant: "primary",
                                        size: "md",
                                        icon: a.tvc,
                                        text: _.intl.string(_.t["mHF+AF"]),
                                        onClick: () => (0, c.x)(h),
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
