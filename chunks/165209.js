i.d(t, {
    Z: function () {
        return p;
    }
});
var n = i(200651);
i(192379);
var a = i(481060),
    r = i(782568),
    o = i(626135),
    l = i(63063),
    c = i(132871),
    s = i(981631),
    d = i(388032),
    u = i(729390),
    _ = i(820305);
function p() {
    let e = (0, c.useApplicationDirectoryHistory)((e) => e.guildId);
    return (0, n.jsxs)('div', {
        className: u.container,
        role: 'contentinfo',
        children: [
            (0, n.jsx)('img', {
                className: u.image,
                src: _,
                alt: ''
            }),
            (0, n.jsxs)('div', {
                className: u.content,
                children: [
                    (0, n.jsx)(a.Heading, {
                        variant: 'heading-md/semibold',
                        children: d.intl.string(d.t['kw8/ER'])
                    }),
                    (0, n.jsx)(a.Text, {
                        variant: 'text-sm/normal',
                        color: 'header-secondary',
                        children: d.intl.string(d.t.GZoV1N)
                    })
                ]
            }),
            (0, n.jsx)(a.Button, {
                size: a.Button.Sizes.SMALL,
                onClick: function () {
                    o.default.track(s.rMx.APP_DIRECTORY_CTA_CLICKED, {
                        cta: 'new_to_apps',
                        current_page: c.ApplicationDirectoryViews.HOME,
                        guild_id: e
                    }),
                        (0, r.Z)(l.Z.getAppsSupportURL(s.BhN.APPS_LEARN_MORE));
                },
                className: u.button,
                children: d.intl.string(d.t['B90I9/'])
            })
        ]
    });
}
