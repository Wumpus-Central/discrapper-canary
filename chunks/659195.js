n.d(t, { A: () => S });
var i = n(627968),
    l = n(64700),
    a = n(417597),
    s = n(834730),
    r = n(696986),
    o = n(821609),
    c = n(173936),
    d = n(939249),
    u = n(789645),
    h = n(58149),
    m = n(734057),
    A = n(147036),
    g = n(957565),
    _ = n(975571),
    p = n(36491),
    f = n(209100),
    E = n(652215),
    C = n(985018),
    x = n(788780);
function S(e) {
    let { threadId: t } = e,
        n = (0, a.bG)([m.A], () => m.A.getChannel(t)),
        S = (0, a.bG)([m.A], () => m.A.getChannel(n?.parent_id)),
        I = l.useCallback(() => {
            null != n &&
                null != S &&
                ((0, h.zV)(E.HAw.MEDIA_POST_SHARE_PROMPT_CLICKED, { media_post_id: n.id }), (0, g.C)((0, A.af)(n, S)));
        }, [n, S]);
    return (0, i.jsxs)("div", {
        className: x.BQ,
        children: [
            (0, i.jsx)(f.A, {}),
            (0, i.jsxs)("div", {
                className: x.BB,
                children: [
                    (0, i.jsx)(s.E, {
                        variant: "text-md/semibold",
                        color: "text-strong",
                        children: C.intl.string(C.t["5uAO7d"]),
                    }),
                    (0, i.jsx)(s.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: C.intl.format(C.t.WnfPV3, {
                            helpArticleUrl: _.A.getCreatorSupportArticleURL(E.MVz.MEDIA_CHANNEL),
                        }),
                    }),
                    (0, i.jsx)(r.h, { size: 4 }),
                    (0, i.jsx)(o.$, { text: C.intl.string(C.t.C5UQC9), variant: "primary", icon: c.q, onClick: I }),
                ],
            }),
            (0, i.jsx)(d.D, {
                className: x.b,
                onClick: () => {
                    (0, p.sF)(t);
                },
                "aria-label": C.intl.string(C.t["0+xZH0"]),
                children: (0, i.jsx)(u.P, { color: "currentColor", size: "xs" }),
            }),
        ],
    });
}
