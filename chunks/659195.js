n.d(t, { A: () => m });
var r = n(627968),
    l = n(64700),
    i = n(417597),
    a = n(397927),
    s = n(58149),
    o = n(734057),
    c = n(147036),
    u = n(957565),
    d = n(975571),
    f = n(36491),
    p = n(209100),
    h = n(652215),
    b = n(985018),
    g = n(179783);
function m(e) {
    let { threadId: t } = e,
        n = (0, i.bG)([o.A], () => o.A.getChannel(t)),
        m = (0, i.bG)([o.A], () => o.A.getChannel(null == n ? void 0 : n.parent_id)),
        A = l.useCallback(() => {
            null != n &&
                null != m &&
                ((0, s.zV)(h.HAw.MEDIA_POST_SHARE_PROMPT_CLICKED, { media_post_id: n.id }), (0, u.C)((0, c.af)(n, m)));
        }, [n, m]);
    return (0, r.jsxs)("div", {
        className: g.BQ,
        children: [
            (0, r.jsx)(p.A, {}),
            (0, r.jsxs)("div", {
                className: g.BB,
                children: [
                    (0, r.jsx)(a.Text, {
                        variant: "text-md/semibold",
                        color: "text-strong",
                        children: b.intl.string(b.t["5uAO7d"]),
                    }),
                    (0, r.jsx)(a.Text, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: b.intl.format(b.t.WnfPV3, {
                            helpArticleUrl: d.A.getCreatorSupportArticleURL(h.MVz.MEDIA_CHANNEL),
                        }),
                    }),
                    (0, r.jsx)(a.hKd, { size: 4 }),
                    (0, r.jsx)(a.Button, {
                        text: b.intl.string(b.t.C5UQC9),
                        variant: "primary",
                        icon: a.qYV,
                        onClick: A,
                    }),
                ],
            }),
            (0, r.jsx)(a.DUT, {
                className: g.b,
                onClick: () => {
                    (0, f.sF)(t);
                },
                "aria-label": b.intl.string(b.t["0+xZH0"]),
                children: (0, r.jsx)(a.PGe, {
                    color: "currentColor",
                    size: "xs",
                }),
            }),
        ],
    });
}
