var i = n(200651);
n(192379);
var l = n(481060),
    r = n(671533),
    a = n(400251),
    s = n(388032),
    o = n(405143),
    c = n(182007),
    d = n(176480);
t.Z = (e) => {
    let t,
        { searchQuery: n, setSearchQuery: u, mostRecentQuery: h, handleClearSearch: p, handleSearchKeyPress: m, handleCreateOrAddGuild: f, searchResults: g, searchFetching: C } = e;
    if (C)
        t = (0, i.jsx)('div', {
            className: o.pageContainer,
            children: (0, i.jsx)(l.Spinner, { className: o.spinner })
        });
    else if (0 === g.length) {
        let e =
            null != f
                ? s.intl.format(s.t.qWFupq, {
                      addServerHook: function (e, t) {
                          return (0, i.jsx)(
                              l.Anchor,
                              {
                                  onClick: f,
                                  children: e
                              },
                              t
                          );
                      }
                  })
                : s.intl.string(s.t.vYyEnp);
        t = (0, i.jsxs)('div', {
            className: c.emptySearchWrapper,
            children: [
                (0, i.jsx)('img', {
                    className: c.emptySearchImage,
                    alt: '',
                    src: d
                }),
                (0, i.jsx)(l.Heading, {
                    variant: 'heading-xl/semibold',
                    color: 'header-primary',
                    className: c.emptySearchTitle,
                    children: s.intl.string(s.t['6HXiuL'])
                }),
                (0, i.jsx)(l.Text, {
                    variant: 'text-md/normal',
                    color: 'header-secondary',
                    className: c.emptySearchSubtitle,
                    children: e
                })
            ]
        });
    } else
        t = (0, i.jsx)('div', {
            className: o.cardsContainer,
            children: g.map((e) => (0, i.jsx)(a.Z, { entry: e }, e.guildId))
        });
    return (0, i.jsx)('div', {
        className: o.pageContainer,
        children: (0, i.jsxs)(l.ScrollerAuto, {
            className: o.scroller,
            children: [
                (0, i.jsxs)('div', {
                    className: c.searchHeader,
                    children: [
                        (0, i.jsxs)('div', {
                            className: c.headerTitleWrapper,
                            children: [
                                (0, i.jsx)(l.Clickable, {
                                    onClick: p,
                                    className: c.arrow,
                                    children: (0, i.jsx)(r.Z, { direction: r.Z.Directions.LEFT })
                                }),
                                (0, i.jsx)(l.Heading, {
                                    variant: 'heading-xl/semibold',
                                    className: c.searchPageTitle,
                                    children: s.intl.format(s.t.UkOHRU, {
                                        numResults: g.length,
                                        query: h
                                    })
                                })
                            ]
                        }),
                        (0, i.jsx)(l.SearchBox, {
                            searchTerm: n,
                            className: c.searchPageBox,
                            inputClassName: c.searchPageInput,
                            label: s.intl.string(s.t.nL2wKC),
                            placeholder: s.intl.string(s.t.nL2wKC),
                            onChange: u,
                            onClear: p,
                            onKeyPress: m,
                            cta: null != n && n.length > 0 ? s.intl.string(s.t['CU+6oK']) : null
                        })
                    ]
                }),
                t
            ]
        })
    });
};
