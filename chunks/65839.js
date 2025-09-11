n.d(t, { Z: () => y }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(481060),
    s = n(393238),
    c = n(400251),
    u = n(486527),
    d = n(231338),
    p = n(388032),
    h = n(806328),
    f = n(152013),
    m = n(584354),
    g = n(725060);
let b = (e) => {
        let { searchQuery: t, setSearchQuery: n, handleClearSearch: i, handleSearchKeyPress: l } = e,
            { ref: c, width: u } = (0, s.ZP)(),
            h = null != u && u <= 800;
        return (0, r.jsxs)("div", {
            ref: c,
            className: f.header,
            children: [
                (0, r.jsx)("img", {
                    alt: "",
                    className: f.headerImage,
                    src: h ? g : m,
                }),
                (0, r.jsx)("div", {
                    className: f.headerContentWrapper,
                    children: (0, r.jsxs)("div", {
                        className: a()(f.headerContent, { [f.headerContentSmall]: h }),
                        children: [
                            (0, r.jsx)(o.X6q, {
                                variant: "heading-xl/semibold",
                                className: f.searchTitle,
                                children: p.intl.string(p.t.IT7qoK),
                            }),
                            (0, r.jsx)(o.Text, {
                                variant: "text-md/normal",
                                className: f.searchSubtitle,
                                children: p.intl.string(p.t["5PoYtr"]),
                            }),
                            (0, r.jsx)(o.f6W, {
                                theme: d.BR.LIGHT,
                                children: (e) =>
                                    (0, r.jsx)("div", {
                                        className: a()(f.searchContainer, e),
                                        children: (0, r.jsx)(o.E1j, {
                                            query: t,
                                            "aria-label": p.intl.string(p.t.nL2wKC),
                                            placeholder: p.intl.string(p.t.nL2wKC),
                                            onChange: n,
                                            onClear: i,
                                            onKeyDown: l,
                                        }),
                                    }),
                            }),
                        ],
                    }),
                }),
            ],
        });
    },
    y = (e) => {
        let {
            channel: t,
            directoryEntries: n,
            handleCreateOrAddGuild: l,
            searchQuery: a,
            setSearchQuery: s,
            handleClearSearch: d,
            handleSearchKeyPress: m,
            currentCategoryId: g,
            handleSelectCategory: y,
            categoryCounts: _,
            allEntriesCount: C,
            isLoading: v,
        } = e;
        return (0, r.jsx)("div", {
            className: h.pageContainer,
            children: (0, r.jsxs)(o.yWw, {
                className: h.scroller,
                children: [
                    (0, r.jsx)(b, {
                        searchQuery: a,
                        setSearchQuery: s,
                        handleClearSearch: d,
                        handleSearchKeyPress: m,
                    }),
                    (0, r.jsx)(o.h21, {
                        orientation: "horizontal",
                        children: (0, r.jsxs)(o.njP, {
                            className: f.tabBar,
                            type: "top",
                            look: "brand",
                            selectedItem: g,
                            onItemSelect: (e) => {
                                y(e);
                            },
                            children: [
                                (0, r.jsx)(
                                    o.njP.Item,
                                    {
                                        className: f.tabBarItem,
                                        id: u.AR.ALL,
                                        children: "".concat(p.intl.string(p.t.hEAa2d), " (").concat(C, ")"),
                                    },
                                    u.AR.ALL,
                                ),
                                (0, u.b7)(t.id).map((e) => {
                                    let { value: t, label: n } = e;
                                    return (0, r.jsx)(
                                        o.njP.Item,
                                        {
                                            className: f.tabBarItem,
                                            id: t,
                                            children: ""
                                                .concat(n, " ")
                                                .concat(null != _[t] ? "(".concat(_[t], ")") : ""),
                                        },
                                        t,
                                    );
                                }),
                            ],
                        }),
                    }),
                    v && null == n
                        ? (0, r.jsx)(o.$jN, { className: h.spinner })
                        : null == n
                          ? void 0
                          : n.map((e, t) =>
                                (0, r.jsxs)(
                                    i.Fragment,
                                    {
                                        children: [
                                            void 0 !== e.header
                                                ? (0, r.jsx)(o.Text, {
                                                      variant: "text-md/semibold",
                                                      className: f.sectionHeader,
                                                      children: e.header,
                                                  })
                                                : null,
                                            (0, r.jsxs)("div", {
                                                className: h.cardsContainer,
                                                children: [
                                                    e.entries.map((e) => (0, r.jsx)(c.Z, { entry: e }, e.guildId)),
                                                    e.appendEndCard && null != l
                                                        ? (0, r.jsx)(c.m, { onClick: l })
                                                        : null,
                                                ],
                                            }),
                                        ],
                                    },
                                    t,
                                ),
                            ),
                ],
            }),
        });
    };
