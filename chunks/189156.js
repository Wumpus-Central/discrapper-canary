n.d(t, { Z: () => p });
var i = n(200651),
    r = n(192379),
    a = n(481060),
    s = n(833062),
    o = n(502762),
    l = n(63063),
    u = n(81866),
    c = n(981631),
    d = n(388032),
    f = n(483434);
let _ = {
    profile: {
        Wrapper: o.Z.Overlay,
        className: f.profile,
        headerVariant: 'heading-sm/semibold',
        bodyVariant: 'text-xs/medium'
    },
    profile_modal: {
        Wrapper: o.Z.Overlay,
        className: f.profile,
        headerVariant: 'text-xs/semibold',
        bodyVariant: 'text-sm/normal'
    },
    channel_header: {
        Wrapper: 'div',
        className: f.channelHeader,
        headerVariant: 'text-md/semibold',
        bodyVariant: 'text-md/normal'
    }
};
function p(e) {
    let { look: t, userId: n } = e,
        { Wrapper: o, className: p, headerVariant: h, bodyVariant: m } = _[t],
        g = (0, u.Z)(n),
        E = r.useMemo(
            () =>
                null != g
                    ? d.intl.format(d.t.rSUACQ, {
                          helpdeskArticle: l.Z.getArticleURL(''),
                          applicationName: () => (0, i.jsx)(s.Z, { application: g }, g.id)
                      })
                    : d.intl.format(d.t['q+N8Ly'], { helpdeskArticle: l.Z.getArticleURL(c.BhN.SLAYER_PROVISIONAL_ACCOUNTS) }),
            [g]
        );
    return (0, i.jsx)(o, {
        className: p,
        children: (0, i.jsxs)('div', {
            className: f.layoutContainer,
            children: [
                (0, i.jsx)(a.KED, {
                    size: 'md',
                    className: f.icon
                }),
                (0, i.jsxs)('div', {
                    children: [
                        (0, i.jsx)(a.X6q, {
                            variant: h,
                            color: 'text-normal',
                            children: d.intl.string(d.t.Iyka0d)
                        }),
                        (0, i.jsx)(a.Text, {
                            variant: m,
                            color: 'text-normal',
                            children: E
                        })
                    ]
                })
            ]
        })
    });
}
