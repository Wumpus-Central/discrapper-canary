n.d(t, {
    Z: function () {
        return u;
    }
});
var i = n(200651);
n(192379);
var a = n(481060),
    l = n(782568),
    r = n(626135),
    c = n(132871),
    o = n(981631),
    s = n(388032),
    d = n(824675);
function u(e) {
    let { guildId: t } = e;
    return (0, i.jsxs)('div', {
        className: d.container,
        children: [
            (0, i.jsx)('img', {
                className: d.image,
                src: n(731914),
                alt: ''
            }),
            (0, i.jsxs)('div', {
                className: d.content,
                children: [
                    (0, i.jsx)(a.Heading, {
                        variant: 'heading-md/extrabold',
                        children: s.intl.string(s.t.xu0raG)
                    }),
                    (0, i.jsx)(a.Text, {
                        variant: 'text-sm/medium',
                        children: s.intl.string(s.t.oz7e8v)
                    })
                ]
            }),
            (0, i.jsx)(a.Button, {
                size: a.Button.Sizes.SMALL,
                onClick: function () {
                    r.default.track(o.rMx.APP_DIRECTORY_CTA_CLICKED, {
                        cta: 'submit_music_app',
                        current_page: c.ApplicationDirectoryViews.SEARCH,
                        guild_id: t
                    }),
                        (0, l.Z)('https://dis.gd/music-search-page-inclusion');
                },
                color: a.Button.Colors.TRANSPARENT,
                className: d.button,
                children: s.intl.string(s.t.WJAXoq)
            })
        ]
    });
}
