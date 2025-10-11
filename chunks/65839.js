n.d(t, { Z: () => y }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    s = n(481060),
    o = n(393238),
    c = n(400251),
    d = n(75666),
    u = n(231338),
    h = n(388032),
    p = n(806328),
    f = n(152013),
    g = n(584354),
    m = n(725060);
let b = (e) => {
        let { searchQuery: t, setSearchQuery: n, handleClearSearch: i, handleSearchKeyPress: l } = e,
            { ref: c, width: d } = (0, o.ZP)(),
            p = null != d && d <= 800;
        return (0, r.jsxs)("div", {
            ref: c,
            className: f.header,
            children: [
                (0, r.jsx)("img", {
                    alt: "",
                    className: f.headerImage,
                    src: p ? m : g,
                }),
                (0, r.jsx)("div", {
                    className: f.headerContentWrapper,
                    children: (0, r.jsxs)("div", {
                        className: a()(f.headerContent, { [f.headerContentSmall]: p }),
                        children: [
                            (0, r.jsx)(s.Heading, {
                                variant: "heading-xl/semibold",
                                className: f.searchTitle,
                                children: h.intl.string(h.t.IT7qoK),
                            }),
                            (0, r.jsx)(s.Text, {
                                variant: "text-md/normal",
                                className: f.searchSubtitle,
                                children: h.intl.string(h.t["5PoYtr"]),
                            }),
                            (0, r.jsx)(s.f6W, {
                                theme: u.BR.LIGHT,
                                children: (e) =>
                                    (0, r.jsx)("div", {
                                        className: a()(f.searchContainer, e),
                                        children: (0, r.jsx)(s.E1j, {
                                            query: t,
                                            "aria-label": h.intl.string(h.t.nL2wKC),
                                            placeholder: h.intl.string(h.t.nL2wKC),
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
            setSearchQuery: o,
            handleClearSearch: u,
            handleSearchKeyPress: g,
            currentCategoryId: m,
            handleSelectCategory: y,
            categoryCounts: _,
            allEntriesCount: j,
            isLoading: O,
        } = e;
        return (0, r.jsx)("div", {
            className: p.pageContainer,
            children: (0, r.jsxs)(s.yWw, {
                className: p.scroller,
                children: [
                    (0, r.jsx)(b, {
                        searchQuery: a,
                        setSearchQuery: o,
                        handleClearSearch: u,
                        handleSearchKeyPress: g,
                    }),
                    (0, r.jsx)(s.h21, {
                        orientation: "horizontal",
                        children: (0, r.jsxs)(s.njP, {
                            className: f.tabBar,
                            type: "top",
                            look: "brand",
                            selectedItem: m,
                            onItemSelect: (e) => {
                                y(e);
                            },
                            children: [
                                (0, r.jsx)(
                                    s.njP.Item,
                                    {
                                        className: f.tabBarItem,
                                        id: d.AR.ALL,
                                        children: "".concat(h.intl.string(h.t.hEAa2d), " (").concat(j, ")"),
                                    },
                                    d.AR.ALL,
                                ),
                                (0, d.b7)(t.id).map((e) => {
                                    let { value: t, label: n } = e;
                                    return (0, r.jsx)(
                                        s.njP.Item,
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
                    O && null == n
                        ? (0, r.jsx)(s.$jN, { className: p.spinner })
                        : null == n
                          ? void 0
                          : n.map((e, t) =>
                                (0, r.jsxs)(
                                    i.Fragment,
                                    {
                                        children: [
                                            void 0 !== e.header
                                                ? (0, r.jsx)(s.Text, {
                                                      variant: "text-md/semibold",
                                                      className: f.sectionHeader,
                                                      children: e.header,
                                                  })
                                                : null,
                                            (0, r.jsxs)("div", {
                                                className: p.cardsContainer,
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
