n.d(t, { A: () => f });
var i = n(627968),
    l = n(64700),
    a = n(417597),
    s = n(397927),
    r = n(58149),
    o = n(734057),
    c = n(147036),
    d = n(957565),
    u = n(975571),
    h = n(36491),
    m = n(209100),
    A = n(652215),
    p = n(985018),
    g = n(179783);
function f(e) {
    let { threadId: t } = e,
        n = (0, a.bG)([o.A], () => o.A.getChannel(t)),
        f = (0, a.bG)([o.A], () => o.A.getChannel(n?.parent_id)),
        _ = l.useCallback(() => {
            null != n &&
                null != f &&
                ((0, r.zV)(A.HAw.MEDIA_POST_SHARE_PROMPT_CLICKED, { media_post_id: n.id }), (0, d.C)((0, c.af)(n, f)));
        }, [n, f]);
    return (0, i.jsxs)("div", {
        className: g.BQ,
        children: [
            (0, i.jsx)(m.A, {}),
            (0, i.jsxs)("div", {
                className: g.BB,
                children: [
                    (0, i.jsx)(s.Text, {
                        variant: "text-md/semibold",
                        color: "text-strong",
                        children: p.intl.string(p.t["5uAO7d"]),
                    }),
                    (0, i.jsx)(s.Text, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: p.intl.format(p.t.WnfPV3, {
                            helpArticleUrl: u.A.getCreatorSupportArticleURL(A.MVz.MEDIA_CHANNEL),
                        }),
                    }),
                    (0, i.jsx)(s.hKd, { size: 4 }),
                    (0, i.jsx)(s.Button, {
                        text: p.intl.string(p.t.C5UQC9),
                        variant: "primary",
                        icon: s.qYV,
                        onClick: _,
                    }),
                ],
            }),
            (0, i.jsx)(s.DUT, {
                className: g.b,
                onClick: () => {
                    (0, h.sF)(t);
                },
                "aria-label": p.intl.string(p.t["0+xZH0"]),
                children: (0, i.jsx)(s.PGe, { color: "currentColor", size: "xs" }),
            }),
        ],
    });
}
