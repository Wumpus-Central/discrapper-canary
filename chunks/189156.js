r.d(n, {
    Z: function () {
        return d;
    }
});
var i = r(200651);
r(192379);
var a = r(481060),
    s = r(502762),
    o = r(63063),
    l = r(388032),
    u = r(486981);
let c = {
    profile: {
        Wrapper: s.Z.Overlay,
        className: u.profile,
        headerVariant: 'heading-sm/semibold',
        bodyVariant: 'text-xs/medium'
    },
    profile_modal: {
        Wrapper: s.Z.Overlay,
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
        { Wrapper: r, className: s, headerVariant: d, bodyVariant: f } = c[n];
    return (0, i.jsx)(r, {
        className: s,
        children: (0, i.jsxs)('div', {
            className: u.layoutContainer,
            children: [
                (0, i.jsx)(a.CircleInformationIcon, {
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
                            children: l.intl.format(l.t['q+N8Ly'], { helpdeskArticle: o.Z.getArticleURL('') })
                        })
                    ]
                })
            ]
        })
    });
}
