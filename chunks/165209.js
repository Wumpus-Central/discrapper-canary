i.d(t, {
    Z: function () {
        return _;
    }
});
var n = i(200651);
i(192379);
var r = i(481060),
    a = i(782568),
    o = i(626135),
    l = i(63063),
    c = i(132871),
    s = i(981631),
    d = i(388032),
    u = i(62567),
    h = i(820305);
function _() {
    let e = (0, c.useApplicationDirectoryHistory)((e) => e.guildId);
    return (0, n.jsxs)('div', {
        className: u.container,
        role: 'contentinfo',
        children: [
            (0, n.jsx)('img', {
                className: u.image,
                src: h,
                alt: ''
            }),
            (0, n.jsxs)('div', {
                className: u.content,
                children: [
                    (0, n.jsx)(r.Heading, {
                        variant: 'heading-md/semibold',
                        children: d.intl.string(d.t['kw8/ER'])
                    }),
                    (0, n.jsx)(r.Text, {
                        variant: 'text-sm/normal',
                        color: 'header-secondary',
                        children: d.intl.string(d.t.GZoV1N)
                    })
                ]
            }),
            (0, n.jsx)(r.Button, {
                size: r.Button.Sizes.SMALL,
                onClick: function () {
                    o.default.track(s.rMx.APP_DIRECTORY_CTA_CLICKED, {
                        cta: 'new_to_apps',
                        current_page: c.ApplicationDirectoryViews.HOME,
                        guild_id: e
                    }),
                        (0, a.Z)(l.Z.getAppsSupportURL(s.BhN.APPS_LEARN_MORE));
                },
                className: u.button,
                children: d.intl.string(d.t['B90I9/'])
            })
        ]
    });
}
