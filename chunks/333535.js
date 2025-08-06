n.d(t, { Z: () => g });
var r = n(255367),
    i = n(73800),
    o = n(399606),
    a = n(481060),
    s = n(367907),
    l = n(592125),
    c = n(934415),
    u = n(572004),
    d = n(63063),
    f = n(158222),
    _ = n(523900),
    p = n(981631),
    h = n(388032),
    m = n(684885);
function g(e) {
    let { threadId: t } = e,
        n = (0, o.e7)([l.Z], () => l.Z.getChannel(t)),
        g = (0, o.e7)([l.Z], () => l.Z.getChannel(null == n ? void 0 : n.parent_id)),
        E = i.useCallback(() => {
            null != n &&
                null != g &&
                ((0, s.yw)(p.rMx.MEDIA_POST_SHARE_PROMPT_CLICKED, { media_post_id: n.id }), (0, u.JG)((0, c.EO)(n, g)));
        }, [n, g]),
        b = () => {
            (0, f.fn)(t);
        };
    return (0, r.jsxs)("div", {
        className: m.sharePromptContainer,
        children: [
            (0, r.jsx)(_.Z, {}),
            (0, r.jsxs)("div", {
                className: m.sharePromptContent,
                children: [
                    (0, r.jsx)(a.Text, {
                        variant: "text-md/semibold",
                        color: "header-primary",
                        children: h.intl.string(h.t["5uAO7e"]),
                    }),
                    (0, r.jsx)(a.Text, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: h.intl.format(h.t.WnfPV1, {
                            helpArticleUrl: d.Z.getCreatorSupportArticleURL(p.BhN.MEDIA_CHANNEL),
                        }),
                    }),
                    (0, r.jsx)(a.LZC, { size: 4 }),
                    (0, r.jsx)(a.zxk, {
                        text: h.intl.string(h.t.C5UQCw),
                        variant: "primary",
                        icon: a.xPt,
                        onClick: E,
                    }),
                ],
            }),
            (0, r.jsx)(a.P3F, {
                className: m.closeButton,
                onClick: b,
                "aria-label": h.intl.string(h.t["0+xZHx"]),
                children: (0, r.jsx)(a.Dio, {
                    color: "currentColor",
                    size: "xs",
                }),
            }),
        ],
    });
}
