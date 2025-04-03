n.d(t, { Z: () => m }), n(789020);
var r = n(200651),
    a = n(192379),
    i = n(481060),
    l = n(860719),
    o = n(63063),
    s = n(49012),
    c = n(981631),
    d = n(388032),
    u = n(924902);
let p = o.Z.getArticleURL(c.BhN.BOT_DATA_ACCESS);
function m(e) {
    let { application: t } = e,
        { hasMessageContent: n, hasGuildPresences: o, hasGuildMembers: c, hasIntents: m } = (0, l.w)({ flags: null == t ? void 0 : t.flags }),
        g = a.useCallback(() => {
            null != t.privacy_policy_url && (0, s.q)({ href: t.privacy_policy_url });
        }, [t.privacy_policy_url]);
    return (0, r.jsxs)('div', {
        className: u.sectionContainer,
        children: [
            (0, r.jsx)(i.X6q, {
                variant: 'heading-lg/semibold',
                color: 'header-primary',
                children: d.NW.string(d.t.QzDgMj)
            }),
            (0, r.jsxs)('div', {
                className: u.contentContainer,
                children: [
                    m &&
                        (0, r.jsxs)('ul', {
                            className: u.intentsList,
                            children: [
                                (0, r.jsx)(i.X6q, {
                                    variant: 'heading-md/semibold',
                                    color: 'header-secondary',
                                    children: d.NW.string(d.t.U6KH5e)
                                }),
                                n &&
                                    (0, r.jsx)(h, {
                                        icon: i.kBi,
                                        heading: d.NW.string(d.t.gJpBOz),
                                        body: d.NW.string(d.t['L+QVbm'])
                                    }),
                                o &&
                                    (0, r.jsx)(h, {
                                        icon: i.z65,
                                        heading: d.NW.string(d.t.jo0oj4),
                                        body: d.NW.string(d.t.Dm0jq6)
                                    }),
                                c &&
                                    (0, r.jsx)(h, {
                                        icon: i.BFJ,
                                        heading: d.NW.string(d.t.QZql7O),
                                        body: d.NW.string(d.t['ez/N/f'])
                                    })
                            ]
                        }),
                    (0, r.jsx)(i.Text, {
                        variant: 'text-md/normal',
                        color: 'header-secondary',
                        children: d.NW.format(d.t.b6nqk5, { helpCenterUrl: p })
                    }),
                    null != t.privacy_policy_url &&
                        (0, r.jsx)(i.Text, {
                            variant: 'text-md/normal',
                            color: 'header-secondary',
                            className: u.privacyPolicy,
                            children: d.NW.format(d.t.agYVY2, { onClick: g })
                        })
                ]
            })
        ]
    });
}
function h(e) {
    let { icon: t, heading: n, body: a } = e;
    return (0, r.jsxs)('li', {
        className: u.intentContainer,
        children: [
            (0, r.jsx)(t, {
                color: 'currentColor',
                size: 'md'
            }),
            (0, r.jsxs)('div', {
                className: u.intentTextContainer,
                children: [
                    (0, r.jsx)(i.X6q, {
                        variant: 'heading-md/semibold',
                        color: 'header-secondary',
                        children: n
                    }),
                    (0, r.jsx)(i.Text, {
                        variant: 'text-md/normal',
                        color: 'header-secondary',
                        children: a
                    })
                ]
            })
        ]
    });
}
