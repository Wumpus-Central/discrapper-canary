r.d(n, {
    Z: function () {
        return d;
    }
});
var i = r(200651);
r(192379);
var a = r(481060),
    o = r(502762),
    s = r(63063),
    l = r(388032),
    u = r(483434);
let c = {
    profile: {
        Wrapper: o.Z.Overlay,
        className: u.profile,
        headerVariant: 'heading-sm/semibold',
        bodyVariant: 'text-xs/medium'
    },
    profile_modal: {
        Wrapper: o.Z.Overlay,
        className: u.profile,
        headerVariant: 'text-xs/semibold',
        bodyVariant: 'text-sm/normal'
    },
    channel_header: {
        Wrapper: 'div',
        className: u.channelHeader,
        headerVariant: 'text-md/semibold',
        bodyVariant: 'text-md/normal'
    }
};
function d(e) {
    let { look: n } = e,
        { Wrapper: r, className: o, headerVariant: d, bodyVariant: f } = c[n];
    return (0, i.jsx)(r, {
        className: o,
        children: (0, i.jsxs)('div', {
            className: u.layoutContainer,
            children: [
                (0, i.jsx)(a.UserPlatformIcon, {
                    size: 'md',
                    className: u.icon
                }),
                (0, i.jsxs)('div', {
                    children: [
                        (0, i.jsx)(a.Heading, {
                            variant: d,
                            color: 'text-normal',
                            children: l.intl.string(l.t.Iyka0d)
                        }),
                        (0, i.jsx)(a.Text, {
                            variant: f,
                            color: 'text-normal',
                            children: l.intl.format(l.t['q+N8Ly'], { helpdeskArticle: s.Z.getArticleURL('') })
                        })
                    ]
                })
            ]
        })
    });
}
