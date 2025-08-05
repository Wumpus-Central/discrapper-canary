(n.d(t, { Z: () => b }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    s = n(481060),
    o = n(393238),
    c = n(400251),
    d = n(75666),
    u = n(388032),
    h = n(400816),
    p = n(104402),
    f = n(584354),
    g = n(725060);
let m = (e) => {
        let { searchQuery: t, setSearchQuery: n, handleClearSearch: i, handleSearchKeyPress: l } = e,
            { ref: c, width: d } = (0, o.ZP)(),
            h = null != d && d <= 800;
        return (0, r.jsxs)('div', {
            ref: c,
            className: p.header,
            children: [
                (0, r.jsx)('img', {
                    alt: '',
                    className: p.headerImage,
                    src: h ? g : f
                }),
                (0, r.jsx)('div', {
                    className: p.headerContentWrapper,
                    children: (0, r.jsxs)('div', {
                        className: a()(p.headerContent, { [p.headerContentSmall]: h }),
                        children: [
                            (0, r.jsx)(s.X6q, {
                                variant: 'heading-xl/semibold',
                                className: p.searchTitle,
                                children: u.intl.string(u.t.IT7qoK)
                            }),
                            (0, r.jsx)(s.Text, {
                                variant: 'text-md/normal',
                                className: p.searchSubtitle,
                                children: u.intl.string(u.t['5PoYtr'])
                            }),
                            (0, r.jsx)(s.Rj2, {
                                searchTerm: t,
                                className: p.searchBox,
                                inputClassName: p.searchBoxInput,
                                closeIconClassName: p.closeIcon,
                                searchIconClassName: p.searchIcon,
                                label: u.intl.string(u.t.nL2wKC),
                                placeholder: u.intl.string(u.t.nL2wKC),
                                onChange: n,
                                onClear: i,
                                onKeyPress: l,
                                cta: null != t && t.length > 0 ? u.intl.string(u.t['CU+6oK']) : null
                            })
                        ]
                    })
                })
            ]
        });
    },
    b = (e) => {
        let { channel: t, directoryEntries: n, handleCreateOrAddGuild: l, searchQuery: a, setSearchQuery: o, handleClearSearch: f, handleSearchKeyPress: g, currentCategoryId: b, handleSelectCategory: _, categoryCounts: y, allEntriesCount: j, isLoading: O } = e;
        return (0, r.jsx)('div', {
            className: h.pageContainer,
            children: (0, r.jsxs)(s.yWw, {
                className: h.scroller,
                children: [
                    (0, r.jsx)(m, {
                        searchQuery: a,
                        setSearchQuery: o,
                        handleClearSearch: f,
                        handleSearchKeyPress: g
                    }),
                    (0, r.jsx)(s.h21, {
                        orientation: 'horizontal',
                        children: (0, r.jsxs)(s.njP, {
                            className: p.tabBar,
                            type: 'top',
                            look: 'brand',
                            selectedItem: b,
                            onItemSelect: (e) => {
                                _(e);
                            },
                            children: [
                                (0, r.jsx)(
                                    s.njP.Item,
                                    {
                                        className: p.tabBarItem,
                                        id: d.AR.ALL,
                                        children: ''.concat(u.intl.string(u.t.hEAa2d), ' (').concat(j, ')')
                                    },
                                    d.AR.ALL
                                ),
                                (0, d.b7)(t.id).map((e) => {
                                    let { value: t, label: n } = e;
                                    return (0, r.jsx)(
                                        s.njP.Item,
                                        {
                                            className: p.tabBarItem,
                                            id: t,
                                            children: ''.concat(n, ' ').concat(null != y[t] ? '('.concat(y[t], ')') : '')
                                        },
                                        t
                                    );
                                })
                            ]
                        })
                    }),
                    O && null == n
                        ? (0, r.jsx)(s.$jN, { className: h.spinner })
                        : null == n
                          ? void 0
                          : n.map((e, t) =>
                                (0, r.jsxs)(
                                    i.Fragment,
                                    {
                                        children: [
                                            void 0 !== e.header
                                                ? (0, r.jsx)(s.Text, {
                                                      variant: 'text-md/semibold',
                                                      className: p.sectionHeader,
                                                      children: e.header
                                                  })
                                                : null,
                                            (0, r.jsxs)('div', {
                                                className: h.cardsContainer,
                                                children: [e.entries.map((e) => (0, r.jsx)(c.Z, { entry: e }, e.guildId)), e.appendEndCard && null != l ? (0, r.jsx)(c.m, { onClick: l }) : null]
                                            })
                                        ]
                                    },
                                    t
                                )
                            )
                ]
            })
        });
    };
