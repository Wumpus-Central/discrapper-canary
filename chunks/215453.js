n.d(t, { Z: () => h }), n(789020);
var i = n(200651),
    a = n(192379),
    r = n(481060),
    l = n(860719),
    s = n(63063),
    o = n(49012),
    c = n(981631),
    d = n(388032),
    u = n(391328);
let m = s.Z.getArticleURL(c.BhN.BOT_DATA_ACCESS);
function h(e) {
    let { application: t } = e,
        { hasMessageContent: n, hasGuildPresences: s, hasGuildMembers: c, hasIntents: h } = (0, l.w)({ flags: null == t ? void 0 : t.flags }),
        g = a.useCallback(() => {
            null != t.privacy_policy_url && (0, o.q)({ href: t.privacy_policy_url });
        }, [t.privacy_policy_url]);
    return (0, i.jsxs)('div', {
        className: u.sectionContainer,
        children: [
            (0, i.jsx)(r.X6q, {
                variant: 'heading-lg/semibold',
                color: 'header-primary',
                children: d.intl.string(d.t.QzDgMj)
            }),
            (0, i.jsxs)('div', {
                className: u.contentContainer,
                children: [
                    h &&
                        (0, i.jsxs)('ul', {
                            className: u.intentsList,
                            children: [
                                (0, i.jsx)(r.X6q, {
                                    variant: 'heading-md/semibold',
                                    color: 'header-secondary',
                                    children: d.intl.string(d.t.U6KH5e)
                                }),
                                n &&
                                    (0, i.jsx)(p, {
                                        icon: r.kBi,
                                        heading: d.intl.string(d.t.gJpBOz),
                                        body: d.intl.string(d.t['L+QVbm'])
                                    }),
                                s &&
                                    (0, i.jsx)(p, {
                                        icon: r.z65,
                                        heading: d.intl.string(d.t.jo0oj4),
                                        body: d.intl.string(d.t.Dm0jq6)
                                    }),
                                c &&
                                    (0, i.jsx)(p, {
                                        icon: r.BFJ,
                                        heading: d.intl.string(d.t.QZql7O),
                                        body: d.intl.string(d.t['ez/N/f'])
                                    })
                            ]
                        }),
                    (0, i.jsx)(r.Text, {
                        variant: 'text-md/normal',
                        color: 'header-secondary',
                        children: d.intl.format(d.t.b6nqk5, { helpCenterUrl: m })
                    }),
                    null != t.privacy_policy_url &&
                        (0, i.jsx)(r.Text, {
                            variant: 'text-md/normal',
                            color: 'header-secondary',
                            className: u.privacyPolicy,
                            children: d.intl.format(d.t.agYVY2, { onClick: g })
                        })
                ]
            })
        ]
    });
}
function p(e) {
    let { icon: t, heading: n, body: a } = e;
    return (0, i.jsxs)('li', {
        className: u.intentContainer,
        children: [
            (0, i.jsx)(t, {
                color: 'currentColor',
                size: 'md'
            }),
            (0, i.jsxs)('div', {
                className: u.intentTextContainer,
                children: [
                    (0, i.jsx)(r.X6q, {
                        variant: 'heading-md/semibold',
                        color: 'header-secondary',
                        children: n
                    }),
                    (0, i.jsx)(r.Text, {
                        variant: 'text-md/normal',
                        color: 'header-secondary',
                        children: a
                    })
                ]
            })
        ]
    });
}
