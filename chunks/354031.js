n.d(t, { P: () => u }), n(388685), n(953529);
var r = n(951288),
    i = n(647438),
    l = n(481060),
    s = n(63063),
    a = n(434404),
    o = n(981631),
    c = n(388032),
    d = n(73126);
function u(e) {
    let { features: t, canManageGuild: n } = e,
        u = i.useCallback(
            (e) => {
                let n = new Set(t);
                e ? n.add(o.oNc.SUMMARIES_ENABLED_BY_USER) : n.delete(o.oNc.SUMMARIES_ENABLED_BY_USER),
                    a.Z.updateGuild({ features: n });
            },
            [t],
        );
    return (0, r.jsxs)(l.hjN, {
        children: [
            (0, r.jsxs)(l.vwX, {
                className: d.subtitle,
                children: [
                    c.intl.string(c.t.FOYxgo),
                    (0, r.jsx)(l.IGR, {
                        text: c.intl.string(c.t.oW0eUV),
                        color: l.TVs.unsafe_rawColors.BRAND_500.css,
                    }),
                ],
            }),
            (0, r.jsx)(l.Text, {
                variant: "text-sm/medium",
                color: "text-secondary",
                className: d.description,
                children: c.intl.format(c.t["c6Cy/v"], {
                    helpdeskArticle: s.Z.getArticleURL(o.BhN.CONVERSATION_SUMMARIES),
                }),
            }),
            (0, r.jsx)(l.rsf, {
                label: c.intl.string(c.t.vmEDQk),
                checked: t.has(o.oNc.SUMMARIES_ENABLED_BY_USER),
                onChange: u,
                disabled: !n,
            }),
        ],
    });
}
