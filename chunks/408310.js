n.d(t, { Z: () => d });
var r = n(200651);
n(192379);
var i = n(481060),
    l = n(671533),
    o = n(400251),
    a = n(388032),
    s = n(400816),
    c = n(1765),
    u = n(176480);
let d = (e) => {
    let t,
        { searchQuery: n, setSearchQuery: d, mostRecentQuery: p, handleClearSearch: h, handleSearchKeyPress: f, handleCreateOrAddGuild: m, searchResults: g, searchFetching: b } = e;
    if (b)
        t = (0, r.jsx)('div', {
            className: s.pageContainer,
            children: (0, r.jsx)(i.$jN, { className: s.spinner })
        });
    else if (0 === g.length) {
        let e =
            null != m
                ? a.NW.format(a.t.qWFupq, {
                      addServerHook: function (e, t) {
                          return (0, r.jsx)(
                              i.eee,
                              {
                                  onClick: m,
                                  children: e
                              },
                              t
                          );
                      }
                  })
                : a.NW.string(a.t.vYyEnp);
        t = (0, r.jsxs)('div', {
            className: c.emptySearchWrapper,
            children: [
                (0, r.jsx)('img', {
                    className: c.emptySearchImage,
                    alt: '',
                    src: u
                }),
                (0, r.jsx)(i.X6q, {
                    variant: 'heading-xl/semibold',
                    color: 'header-primary',
                    className: c.emptySearchTitle,
                    children: a.NW.string(a.t['6HXiuL'])
                }),
                (0, r.jsx)(i.Text, {
                    variant: 'text-md/normal',
                    color: 'header-secondary',
                    className: c.emptySearchSubtitle,
                    children: e
                })
            ]
        });
    } else
        t = (0, r.jsx)('div', {
            className: s.cardsContainer,
            children: g.map((e) => (0, r.jsx)(o.Z, { entry: e }, e.guildId))
        });
    return (0, r.jsx)('div', {
        className: s.pageContainer,
        children: (0, r.jsxs)(i.w0Z, {
            className: s.scroller,
            children: [
                (0, r.jsxs)('div', {
                    className: c.searchHeader,
                    children: [
                        (0, r.jsxs)('div', {
                            className: c.headerTitleWrapper,
                            children: [
                                (0, r.jsx)(i.P3F, {
                                    onClick: h,
                                    className: c.arrow,
                                    children: (0, r.jsx)(l.Z, { direction: l.Z.Directions.LEFT })
                                }),
                                (0, r.jsx)(i.X6q, {
                                    variant: 'heading-xl/semibold',
                                    className: c.searchPageTitle,
                                    children: a.NW.format(a.t.UkOHRU, {
                                        numResults: g.length,
                                        query: p
                                    })
                                })
                            ]
                        }),
                        (0, r.jsx)(i.Rj2, {
                            searchTerm: n,
                            className: c.searchPageBox,
                            inputClassName: c.searchPageInput,
                            label: a.NW.string(a.t.nL2wKC),
                            placeholder: a.NW.string(a.t.nL2wKC),
                            onChange: d,
                            onClear: h,
                            onKeyPress: f,
                            cta: null != n && n.length > 0 ? a.NW.string(a.t['CU+6oK']) : null
                        })
                    ]
                }),
                t
            ]
        })
    });
};
