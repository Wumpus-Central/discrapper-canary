n.d(t, { Z: () => m }), n(997841);
var a = n(54381),
    r = n(473749),
    i = n(481060),
    l = n(860719),
    s = n(63063),
    o = n(49012),
    c = n(981631),
    d = n(388032),
    u = n(21371);
let p = s.Z.getArticleURL(c.BhN.BOT_DATA_ACCESS);
function m(e) {
    let { application: t } = e,
        {
            hasMessageContent: n,
            hasGuildPresences: s,
            hasGuildMembers: c,
            hasIntents: m,
        } = (0, l.w)({ flags: null == t ? void 0 : t.flags }),
        f = r.useCallback(() => {
            null != t.privacy_policy_url && (0, o.q)({ href: t.privacy_policy_url });
        }, [t.privacy_policy_url]);
    return (0, a.jsxs)("div", {
        className: u.sectionContainer,
        children: [
            (0, a.jsx)(i.Heading, {
                variant: "heading-lg/semibold",
                color: "text-strong",
                children: d.intl.string(d.t.QzDgMq),
            }),
            (0, a.jsxs)("div", {
                className: u.contentContainer,
                children: [
                    m &&
                        (0, a.jsxs)("ul", {
                            className: u.intentsList,
                            children: [
                                (0, a.jsx)(i.Heading, {
                                    variant: "heading-md/semibold",
                                    color: "text-default",
                                    children: d.intl.string(d.t.U6KH5S),
                                }),
                                n &&
                                    (0, a.jsx)(h, {
                                        icon: i.kBi,
                                        heading: d.intl.string(d.t.gJpBO2),
                                        body: d.intl.string(d.t["L+QVbh"]),
                                    }),
                                s &&
                                    (0, a.jsx)(h, {
                                        icon: i.z65,
                                        heading: d.intl.string(d.t["jo0oj/"]),
                                        body: d.intl.string(d.t.Dm0jqx),
                                    }),
                                c &&
                                    (0, a.jsx)(h, {
                                        icon: i.BFJ,
                                        heading: d.intl.string(d.t.QZql7O),
                                        body: d.intl.string(d.t["ez/N/R"]),
                                    }),
                            ],
                        }),
                    (0, a.jsx)(i.Text, {
                        variant: "text-md/normal",
                        color: "text-default",
                        children: d.intl.format(d.t.b6nqk0, { helpCenterUrl: p }),
                    }),
                    null != t.privacy_policy_url &&
                        (0, a.jsx)(i.Text, {
                            variant: "text-md/normal",
                            color: "text-default",
                            className: u.privacyPolicy,
                            children: d.intl.format(d.t.agYVY5, { onClick: f }),
                        }),
                ],
            }),
        ],
    });
}
function h(e) {
    let { icon: t, heading: n, body: r } = e;
    return (0, a.jsxs)("li", {
        className: u.intentContainer,
        children: [
            (0, a.jsx)(t, {
                color: "currentColor",
                size: "md",
            }),
            (0, a.jsxs)("div", {
                className: u.intentTextContainer,
                children: [
                    (0, a.jsx)(i.Heading, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        children: n,
                    }),
                    (0, a.jsx)(i.Text, {
                        variant: "text-md/normal",
                        color: "text-default",
                        children: r,
                    }),
                ],
            }),
        ],
    });
}
