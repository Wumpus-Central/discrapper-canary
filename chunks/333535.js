n.d(t, { Z: () => b });
var i = n(951288),
    r = n(647438),
    l = n(399606),
    a = n(481060),
    o = n(367907),
    s = n(592125),
    c = n(934415),
    u = n(572004),
    d = n(63063),
    p = n(158222),
    h = n(523900),
    f = n(981631),
    m = n(388032),
    g = n(235391);
function b(e) {
    let { threadId: t } = e,
        n = (0, l.e7)([s.Z], () => s.Z.getChannel(t)),
        b = (0, l.e7)([s.Z], () => s.Z.getChannel(null == n ? void 0 : n.parent_id)),
        y = r.useCallback(() => {
            null != n &&
                null != b &&
                ((0, o.yw)(f.rMx.MEDIA_POST_SHARE_PROMPT_CLICKED, { media_post_id: n.id }), (0, u.JG)((0, c.EO)(n, b)));
        }, [n, b]);
    return (0, i.jsxs)("div", {
        className: g.sharePromptContainer,
        children: [
            (0, i.jsx)(h.Z, {}),
            (0, i.jsxs)("div", {
                className: g.sharePromptContent,
                children: [
                    (0, i.jsx)(a.Text, {
                        variant: "text-md/semibold",
                        color: "header-primary",
                        children: m.intl.string(m.t["5uAO7d"]),
                    }),
                    (0, i.jsx)(a.Text, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: m.intl.format(m.t.WnfPV3, {
                            helpArticleUrl: d.Z.getCreatorSupportArticleURL(f.BhN.MEDIA_CHANNEL),
                        }),
                    }),
                    (0, i.jsx)(a.LZC, { size: 4 }),
                    (0, i.jsx)(a.Button, {
                        text: m.intl.string(m.t.C5UQC9),
                        variant: "primary",
                        icon: a.xPt,
                        onClick: y,
                    }),
                ],
            }),
            (0, i.jsx)(a.P3F, {
                className: g.closeButton,
                onClick: () => {
                    (0, p.fn)(t);
                },
                "aria-label": m.intl.string(m.t["0+xZH0"]),
                children: (0, i.jsx)(a.Dio, {
                    color: "currentColor",
                    size: "xs",
                }),
            }),
        ],
    });
}
