n.d(t, {
    Z: function () {
        return g;
    }
}),
    n(789020);
var i = n(200651),
    a = n(192379),
    r = n(120356),
    o = n.n(r),
    l = n(481060),
    s = n(860719),
    c = n(63063),
    d = n(49012),
    u = n(981631),
    p = n(388032),
    m = n(369933);
let _ = c.Z.getArticleURL(u.BhN.BOT_DATA_ACCESS);
function f(e) {
    let { icon: t, heading: n, body: a } = e;
    return (0, i.jsxs)('li', {
        className: m.intentContainer,
        children: [
            (0, i.jsx)('div', {
                children: (0, i.jsx)(t, {
                    color: 'currentColor',
                    size: 'md'
                })
            }),
            (0, i.jsxs)('div', {
                className: m.intentTextContainer,
                children: [
                    (0, i.jsx)('div', {
                        children: (0, i.jsx)(l.Heading, {
                            variant: 'eyebrow',
                            color: 'header-secondary',
                            children: n
                        })
                    }),
                    (0, i.jsx)('div', {
                        className: m.intentBody,
                        children: (0, i.jsx)(l.Text, {
                            variant: 'text-sm/normal',
                            color: 'header-secondary',
                            children: a
                        })
                    })
                ]
            })
        ]
    });
}
function g(e) {
    let { application: t } = e,
        { hasMessageContent: n, hasGuildPresences: r, hasGuildMembers: c, hasIntents: u } = (0, s.w)({ flags: null == t ? void 0 : t.flags }),
        g = a.useCallback(() => {
            (null == t ? void 0 : t.privacy_policy_url) != null && (0, d.q)({ href: t.privacy_policy_url });
        }, [null == t ? void 0 : t.privacy_policy_url]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            u &&
                (0, i.jsx)('div', {
                    className: m.intentsListHeading,
                    children: (0, i.jsx)(l.Text, {
                        variant: 'text-md/normal',
                        children: p.intl.string(p.t.U6KH5e)
                    })
                }),
            (0, i.jsxs)('div', {
                className: m.intentsContainer,
                children: [
                    u &&
                        (0, i.jsxs)('ul', {
                            className: m.intentsList,
                            children: [
                                n &&
                                    (0, i.jsx)(f, {
                                        icon: l.ChatIcon,
                                        heading: p.intl.string(p.t.gJpBOz),
                                        body: p.intl.string(p.t['L+QVbm'])
                                    }),
                                r &&
                                    (0, i.jsx)(f, {
                                        icon: l.UserCircleStatusIcon,
                                        heading: p.intl.string(p.t.jo0oj4),
                                        body: p.intl.string(p.t.Dm0jq6)
                                    }),
                                c &&
                                    (0, i.jsx)(f, {
                                        icon: l.GroupIcon,
                                        heading: p.intl.string(p.t.QZql7O),
                                        body: p.intl.string(p.t['ez/N/f'])
                                    })
                            ]
                        }),
                    (0, i.jsxs)('div', {
                        className: o()({ [m.hasSeparator]: u }),
                        children: [
                            (0, i.jsx)(l.Text, {
                                variant: 'text-sm/normal',
                                color: 'header-secondary',
                                children: p.intl.format(p.t.b6nqk5, { helpCenterUrl: _ })
                            }),
                            (null == t ? void 0 : t.privacy_policy_url) != null &&
                                (0, i.jsx)(l.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'header-secondary',
                                    className: m.privacyPolicy,
                                    children: p.intl.format(p.t.agYVY2, { onClick: g })
                                })
                        ]
                    })
                ]
            })
        ]
    });
}
