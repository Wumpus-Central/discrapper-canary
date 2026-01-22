n.d(t, {
    A: () => A,
}),
    n(896048);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(397927),
    o = n(765671),
    c = n(226694),
    u = n(946116),
    d = n(818348),
    f = n(985018),
    p = n(10544),
    h = n(255753),
    b = n(296753),
    g = n(663093);
let m = (e) => {
        let { searchQuery: t, setSearchQuery: n, handleClearSearch: l, handleSearchKeyPress: i } = e,
            { ref: c, width: u } = (0, o.Ay)(),
            p = null != u && u <= 800;
        return (0, r.jsxs)("div", {
            ref: c,
            className: h.wx,
            children: [
                (0, r.jsx)("img", {
                    alt: "",
                    className: h.F0,
                    src: p ? g : b,
                }),
                (0, r.jsx)("div", {
                    className: h.AZ,
                    children: (0, r.jsxs)("div", {
                        className: a()(h.VW, {
                            [h.eO]: p,
                        }),
                        children: [
                            (0, r.jsx)(s.Heading, {
                                variant: "heading-xl/semibold",
                                className: h.dc,
                                children: f.intl.string(f.t.IT7qoC),
                            }),
                            (0, r.jsx)(s.Text, {
                                variant: "text-md/normal",
                                className: h.R_,
                                children: f.intl.string(f.t["5PoYts"]),
                            }),
                            (0, r.jsx)(s.NPJ, {
                                theme: d.NJ.LIGHT,
                                children: (e) =>
                                    (0, r.jsx)("div", {
                                        className: a()(h.MT, e),
                                        children: (0, r.jsx)(s.IWV, {
                                            query: t,
                                            "aria-label": f.intl.string(f.t.nL2wKD),
                                            placeholder: f.intl.string(f.t.nL2wKD),
                                            onChange: n,
                                            onClear: l,
                                            onKeyDown: i,
                                        }),
                                    }),
                            }),
                        ],
                    }),
                }),
            ],
        });
    },
    A = (e) => {
        let {
            channel: t,
            directoryEntries: n,
            handleCreateOrAddGuild: i,
            searchQuery: a,
            setSearchQuery: o,
            handleClearSearch: d,
            handleSearchKeyPress: b,
            currentCategoryId: g,
            handleSelectCategory: A,
            categoryCounts: y,
            allEntriesCount: O,
            isLoading: j,
        } = e;
        return (0, r.jsx)("div", {
            className: p.$$,
            children: (0, r.jsxs)(s.GtU, {
                className: p.XG,
                children: [
                    (0, r.jsx)(m, {
                        searchQuery: a,
                        setSearchQuery: o,
                        handleClearSearch: d,
                        handleSearchKeyPress: b,
                    }),
                    (0, r.jsx)(s.ChK, {
                        orientation: "horizontal",
                        children: (0, r.jsxs)(s.VQ0, {
                            className: h.$H,
                            type: "top",
                            look: "brand",
                            selectedItem: g,
                            onItemSelect: (e) => {
                                A(e);
                            },
                            children: [
                                (0, r.jsx)(
                                    s.VQ0.Item,
                                    {
                                        className: h.YU,
                                        id: u.mU.ALL,
                                        children: "".concat(f.intl.string(f.t.hEAa2a), " (").concat(O, ")"),
                                    },
                                    u.mU.ALL,
                                ),
                                (0, u.g2)(t.id).map((e) => {
                                    let { value: t, label: n } = e;
                                    return (0, r.jsx)(
                                        s.VQ0.Item,
                                        {
                                            className: h.YU,
                                            id: t,
                                            children: ""
                                                .concat(n, " ")
                                                .concat(null != y[t] ? "(".concat(y[t], ")") : ""),
                                        },
                                        t,
                                    );
                                }),
                            ],
                        }),
                    }),
                    j && null == n
                        ? (0, r.jsx)(s.y$y, {
                              className: p.u1,
                          })
                        : null == n
                          ? void 0
                          : n.map((e, t) =>
                                (0, r.jsxs)(
                                    l.Fragment,
                                    {
                                        children: [
                                            void 0 !== e.header
                                                ? (0, r.jsx)(s.Text, {
                                                      variant: "text-md/semibold",
                                                      className: h.bV,
                                                      children: e.header,
                                                  })
                                                : null,
                                            (0, r.jsxs)("div", {
                                                className: p.vY,
                                                children: [
                                                    e.entries.map((e) =>
                                                        (0, r.jsx)(
                                                            c.A,
                                                            {
                                                                entry: e,
                                                            },
                                                            e.guildId,
                                                        ),
                                                    ),
                                                    e.appendEndCard && null != i
                                                        ? (0, r.jsx)(c.s, {
                                                              onClick: i,
                                                          })
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
