(n.d(t, { Z: () => b }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    o = n.n(l),
    a = n(481060),
    s = n(393238),
    c = n(400251),
    u = n(75666),
    d = n(388032),
    p = n(400816),
    h = n(104402),
    f = n(584354),
    m = n(725060);
let g = (e) => {
        let { searchQuery: t, setSearchQuery: n, handleClearSearch: i, handleSearchKeyPress: l } = e,
            { ref: c, width: u } = (0, s.ZP)(),
            p = null != u && u <= 800;
        return (0, r.jsxs)('div', {
            ref: c,
            className: h.header,
            children: [
                (0, r.jsx)('img', {
                    alt: '',
                    className: h.headerImage,
                    src: p ? m : f
                }),
                (0, r.jsx)('div', {
                    className: h.headerContentWrapper,
                    children: (0, r.jsxs)('div', {
                        className: o()(h.headerContent, { [h.headerContentSmall]: p }),
                        children: [
                            (0, r.jsx)(a.X6q, {
                                variant: 'heading-xl/semibold',
                                className: h.searchTitle,
                                children: d.intl.string(d.t.IT7qoK)
                            }),
                            (0, r.jsx)(a.Text, {
                                variant: 'text-md/normal',
                                className: h.searchSubtitle,
                                children: d.intl.string(d.t['5PoYtr'])
                            }),
                            (0, r.jsx)(a.Rj2, {
                                searchTerm: t,
                                className: h.searchBox,
                                inputClassName: h.searchBoxInput,
                                closeIconClassName: h.closeIcon,
                                searchIconClassName: h.searchIcon,
                                label: d.intl.string(d.t.nL2wKC),
                                placeholder: d.intl.string(d.t.nL2wKC),
                                onChange: n,
                                onClear: i,
                                onKeyPress: l,
                                cta: null != t && t.length > 0 ? d.intl.string(d.t['CU+6oK']) : null
                            })
                        ]
                    })
                })
            ]
        });
    },
    b = (e) => {
        let { channel: t, directoryEntries: n, handleCreateOrAddGuild: l, searchQuery: o, setSearchQuery: s, handleClearSearch: f, handleSearchKeyPress: m, currentCategoryId: b, handleSelectCategory: _, categoryCounts: y, allEntriesCount: C, isLoading: x } = e;
        return (0, r.jsx)('div', {
            className: p.pageContainer,
            children: (0, r.jsxs)(a.yWw, {
                className: p.scroller,
                children: [
                    (0, r.jsx)(g, {
                        searchQuery: o,
                        setSearchQuery: s,
                        handleClearSearch: f,
                        handleSearchKeyPress: m
                    }),
                    (0, r.jsx)(a.h21, {
                        orientation: 'horizontal',
                        children: (0, r.jsxs)(a.njP, {
                            className: h.tabBar,
                            type: 'top',
                            look: 'brand',
                            selectedItem: b,
                            onItemSelect: (e) => {
                                _(e);
                            },
                            children: [
                                (0, r.jsx)(
                                    a.njP.Item,
                                    {
                                        className: h.tabBarItem,
                                        id: u.AR.ALL,
                                        children: ''.concat(d.intl.string(d.t.hEAa2d), ' (').concat(C, ')')
                                    },
                                    u.AR.ALL
                                ),
                                (0, u.b7)(t.id).map((e) => {
                                    let { value: t, label: n } = e;
                                    return (0, r.jsx)(
                                        a.njP.Item,
                                        {
                                            className: h.tabBarItem,
                                            id: t,
                                            children: ''.concat(n, ' ').concat(null != y[t] ? '('.concat(y[t], ')') : '')
                                        },
                                        t
                                    );
                                })
                            ]
                        })
                    }),
                    x && null == n
                        ? (0, r.jsx)(a.$jN, { className: p.spinner })
                        : null == n
                          ? void 0
                          : n.map((e, t) =>
                                (0, r.jsxs)(
                                    i.Fragment,
                                    {
                                        children: [
                                            void 0 !== e.header
                                                ? (0, r.jsx)(a.Text, {
                                                      variant: 'text-md/semibold',
                                                      className: h.sectionHeader,
                                                      children: e.header
                                                  })
                                                : null,
                                            (0, r.jsxs)('div', {
                                                className: p.cardsContainer,
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
