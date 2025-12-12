n.d(t, { Z: () => y }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    s = n(481060),
    o = n(393238),
    c = n(400251),
    d = n(486527),
    u = n(231338),
    p = n(388032),
    h = n(960931),
    f = n(375862),
    g = n(584354),
    m = n(725060);
let b = (e) => {
        let { searchQuery: t, setSearchQuery: n, handleClearSearch: i, handleSearchKeyPress: l } = e,
            { ref: c, width: d } = (0, o.ZP)(),
            h = null != d && d <= 800;
        return (0, r.jsxs)("div", {
            ref: c,
            className: f.header,
            children: [
                (0, r.jsx)("img", {
                    alt: "",
                    className: f.headerImage,
                    src: h ? m : g,
                }),
                (0, r.jsx)("div", {
                    className: f.headerContentWrapper,
                    children: (0, r.jsxs)("div", {
                        className: a()(f.headerContent, { [f.headerContentSmall]: h }),
                        children: [
                            (0, r.jsx)(s.Heading, {
                                variant: "heading-xl/semibold",
                                className: f.searchTitle,
                                children: p.intl.string(p.t.IT7qoC),
                            }),
                            (0, r.jsx)(s.Text, {
                                variant: "text-md/normal",
                                className: f.searchSubtitle,
                                children: p.intl.string(p.t["5PoYts"]),
                            }),
                            (0, r.jsx)(s.f6W, {
                                theme: u.BR.LIGHT,
                                children: (e) =>
                                    (0, r.jsx)("div", {
                                        className: a()(f.searchContainer, e),
                                        children: (0, r.jsx)(s.E1j, {
                                            query: t,
                                            "aria-label": p.intl.string(p.t.nL2wKD),
                                            placeholder: p.intl.string(p.t.nL2wKD),
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
            categoryCounts: O,
            allEntriesCount: x,
            isLoading: j,
        } = e;
        return (0, r.jsx)("div", {
            className: h.pageContainer,
            children: (0, r.jsxs)(s.yWw, {
                className: h.scroller,
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
                                        children: "".concat(p.intl.string(p.t.hEAa2a), " (").concat(x, ")"),
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
                                                .concat(null != O[t] ? "(".concat(O[t], ")") : ""),
                                        },
                                        t,
                                    );
                                }),
                            ],
                        }),
                    }),
                    j && null == n
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
