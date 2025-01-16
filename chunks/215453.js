t.d(n, {
    Z: function () {
        return p;
    }
}),
    t(789020);
var a = t(200651),
    i = t(192379),
    r = t(481060),
    l = t(860719),
    o = t(63063),
    s = t(49012),
    c = t(981631),
    d = t(388032),
    u = t(349778);
let m = o.Z.getArticleURL(c.BhN.BOT_DATA_ACCESS);
function p(e) {
    let { application: n } = e,
        { hasMessageContent: t, hasGuildPresences: o, hasGuildMembers: c, hasIntents: p } = (0, l.w)({ flags: null == n ? void 0 : n.flags }),
        g = i.useCallback(() => {
            null != n.privacy_policy_url && (0, s.q)({ href: n.privacy_policy_url });
        }, [n.privacy_policy_url]);
    return (0, a.jsxs)('div', {
        className: u.sectionContainer,
        children: [
            (0, a.jsx)(r.Heading, {
                variant: 'heading-lg/semibold',
                color: 'header-primary',
                children: d.intl.string(d.t.QzDgMj)
            }),
            (0, a.jsxs)('div', {
                className: u.contentContainer,
                children: [
                    p &&
                        (0, a.jsxs)('ul', {
                            className: u.intentsList,
                            children: [
                                (0, a.jsx)(r.Heading, {
                                    variant: 'heading-md/semibold',
                                    color: 'header-secondary',
                                    children: d.intl.string(d.t.U6KH5e)
                                }),
                                t &&
                                    (0, a.jsx)(_, {
                                        icon: r.ChatIcon,
                                        heading: d.intl.string(d.t.gJpBOz),
                                        body: d.intl.string(d.t['L+QVbm'])
                                    }),
                                o &&
                                    (0, a.jsx)(_, {
                                        icon: r.UserCircleStatusIcon,
                                        heading: d.intl.string(d.t.jo0oj4),
                                        body: d.intl.string(d.t.Dm0jq6)
                                    }),
                                c &&
                                    (0, a.jsx)(_, {
                                        icon: r.GroupIcon,
                                        heading: d.intl.string(d.t.QZql7O),
                                        body: d.intl.string(d.t['ez/N/f'])
                                    })
                            ]
                        }),
                    (0, a.jsx)(r.Text, {
                        variant: 'text-md/normal',
                        color: 'header-secondary',
                        children: d.intl.format(d.t.b6nqk5, { helpCenterUrl: m })
                    }),
                    null != n.privacy_policy_url &&
                        (0, a.jsx)(r.Text, {
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
function _(e) {
    let { icon: n, heading: t, body: i } = e;
    return (0, a.jsxs)('li', {
        className: u.intentContainer,
        children: [
            (0, a.jsx)(n, {
                color: 'currentColor',
                size: 'md'
            }),
            (0, a.jsxs)('div', {
                className: u.intentTextContainer,
                children: [
                    (0, a.jsx)(r.Heading, {
                        variant: 'heading-md/semibold',
                        color: 'header-secondary',
                        children: t
                    }),
                    (0, a.jsx)(r.Text, {
                        variant: 'text-md/normal',
                        color: 'header-secondary',
                        children: i
                    })
                ]
            })
        ]
    });
}
