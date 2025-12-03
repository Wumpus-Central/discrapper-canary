n.d(t, { Z: () => m }), n(997841);
var r = n(54381),
    i = n(473749),
    a = n(481060),
    l = n(860719),
    s = n(63063),
    o = n(49012),
    c = n(981631),
    d = n(388032),
    u = n(74380);
let p = s.Z.getArticleURL(c.BhN.BOT_DATA_ACCESS);
function m(e) {
    let { application: t } = e,
        {
            hasMessageContent: n,
            hasGuildPresences: s,
            hasGuildMembers: c,
            hasIntents: m,
        } = (0, l.w)({ flags: null == t ? void 0 : t.flags }),
        g = i.useCallback(() => {
            null != t.privacy_policy_url && (0, o.q)({ href: t.privacy_policy_url });
        }, [t.privacy_policy_url]);
    return (0, r.jsxs)("div", {
        className: u.sectionContainer,
        children: [
            (0, r.jsx)(a.Heading, {
                variant: "heading-lg/semibold",
                color: "header-primary",
                children: d.intl.string(d.t.QzDgMq),
            }),
            (0, r.jsxs)("div", {
                className: u.contentContainer,
                children: [
                    m &&
                        (0, r.jsxs)("ul", {
                            className: u.intentsList,
                            children: [
                                (0, r.jsx)(a.Heading, {
                                    variant: "heading-md/semibold",
                                    color: "text-default",
                                    children: d.intl.string(d.t.U6KH5S),
                                }),
                                n &&
                                    (0, r.jsx)(h, {
                                        icon: a.kBi,
                                        heading: d.intl.string(d.t.gJpBO2),
                                        body: d.intl.string(d.t["L+QVbh"]),
                                    }),
                                s &&
                                    (0, r.jsx)(h, {
                                        icon: a.z65,
                                        heading: d.intl.string(d.t["jo0oj/"]),
                                        body: d.intl.string(d.t.Dm0jqx),
                                    }),
                                c &&
                                    (0, r.jsx)(h, {
                                        icon: a.BFJ,
                                        heading: d.intl.string(d.t.QZql7O),
                                        body: d.intl.string(d.t["ez/N/R"]),
                                    }),
                            ],
                        }),
                    (0, r.jsx)(a.Text, {
                        variant: "text-md/normal",
                        color: "text-default",
                        children: d.intl.format(d.t.b6nqk0, { helpCenterUrl: p }),
                    }),
                    null != t.privacy_policy_url &&
                        (0, r.jsx)(a.Text, {
                            variant: "text-md/normal",
                            color: "text-default",
                            className: u.privacyPolicy,
                            children: d.intl.format(d.t.agYVY5, { onClick: g }),
                        }),
                ],
            }),
        ],
    });
}
function h(e) {
    let { icon: t, heading: n, body: i } = e;
    return (0, r.jsxs)("li", {
        className: u.intentContainer,
        children: [
            (0, r.jsx)(t, {
                color: "currentColor",
                size: "md",
            }),
            (0, r.jsxs)("div", {
                className: u.intentTextContainer,
                children: [
                    (0, r.jsx)(a.Heading, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        children: n,
                    }),
                    (0, r.jsx)(a.Text, {
                        variant: "text-md/normal",
                        color: "text-default",
                        children: i,
                    }),
                ],
            }),
        ],
    });
}
