i.d(t, {
    Z: function () {
        return m;
    }
}),
    i(47120);
var n = i(200651),
    r = i(192379),
    a = i(481060),
    o = i(626135),
    l = i(34674),
    c = i(190733),
    s = i(132871),
    d = i(147890),
    u = i(981631),
    h = i(388032),
    _ = i(384552),
    p = i(943935);
function m() {
    let e = (0, s.useApplicationDirectoryHistory)((e) => e.guildId),
        [t, i] = r.useState(''),
        m = r.useCallback(() => {
            let i = (0, l.KQ)();
            o.default.track(u.rMx.APP_DIRECTORY_SEARCH_STARTED, {
                search_term: t,
                category: i.name,
                current_page: s.ApplicationDirectoryViews.HOME,
                category_id: i.id,
                guild_id: e
            }),
                (0, d.goSearch)({ query: t });
        }, [e, t]);
    return (0, n.jsxs)('div', {
        className: _.container,
        children: [
            (0, n.jsxs)('div', {
                className: _.searchBarContainer,
                children: [
                    (0, n.jsx)(a.Heading, {
                        variant: 'display-lg',
                        className: _.heading,
                        children: h.intl.string(h.t['n61/Q0'])
                    }),
                    (0, n.jsx)(c.Z, {
                        className: _.searchBar,
                        query: t,
                        onChange: i,
                        onSubmit: m,
                        canShowCta: !0
                    })
                ]
            }),
            (0, n.jsx)('img', {
                src: p,
                alt: '',
                className: _.rightImage
            })
        ]
    });
}
