n.d(t, { A: () => x });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(397927),
    o = n(765671),
    d = n(226694),
    c = n(946116),
    u = n(818348),
    h = n(985018),
    A = n(10544),
    g = n(255753),
    m = n(296753),
    p = n(663093);
let _ = (e) => {
        let { searchQuery: t, setSearchQuery: n, handleClearSearch: l, handleSearchKeyPress: s } = e,
            { ref: d, width: c } = (0, o.Ay)(),
            A = null != c && c <= 800;
        return (0, i.jsxs)("div", {
            ref: d,
            className: g.wx,
            children: [
                (0, i.jsx)("img", { alt: "", className: g.F0, src: A ? p : m }),
                (0, i.jsx)("div", {
                    className: g.AZ,
                    children: (0, i.jsxs)("div", {
                        className: a()(g.VW, { [g.eO]: A }),
                        children: [
                            (0, i.jsx)(r.Heading, {
                                variant: "heading-xl/semibold",
                                className: g.dc,
                                children: h.intl.string(h.t.IT7qoC),
                            }),
                            (0, i.jsx)(r.Text, {
                                variant: "text-md/normal",
                                className: g.R_,
                                children: h.intl.string(h.t["5PoYts"]),
                            }),
                            (0, i.jsx)(r.NPJ, {
                                theme: u.NJ.LIGHT,
                                children: (e) =>
                                    (0, i.jsx)("div", {
                                        className: a()(g.MT, e),
                                        children: (0, i.jsx)(r.IWV, {
                                            query: t,
                                            "aria-label": h.intl.string(h.t.nL2wKD),
                                            placeholder: h.intl.string(h.t.nL2wKD),
                                            onChange: n,
                                            onClear: l,
                                            onKeyDown: s,
                                        }),
                                    }),
                            }),
                        ],
                    }),
                }),
            ],
        });
    },
    x = (e) => {
        let {
            channel: t,
            directoryEntries: n,
            handleCreateOrAddGuild: s,
            searchQuery: a,
            setSearchQuery: o,
            handleClearSearch: u,
            handleSearchKeyPress: m,
            currentCategoryId: p,
            handleSelectCategory: x,
            categoryCounts: f,
            allEntriesCount: E,
            isLoading: C,
        } = e;
        return (0, i.jsx)("div", {
            className: A.$$,
            children: (0, i.jsxs)(r.GtU, {
                className: A.XG,
                children: [
                    (0, i.jsx)(_, { searchQuery: a, setSearchQuery: o, handleClearSearch: u, handleSearchKeyPress: m }),
                    (0, i.jsx)(r.ChK, {
                        orientation: "horizontal",
                        children: (0, i.jsxs)(r.VQ0, {
                            className: g.$H,
                            type: "top",
                            look: "brand",
                            selectedItem: p,
                            onItemSelect: (e) => {
                                x(e);
                            },
                            children: [
                                (0, i.jsx)(
                                    r.VQ0.Item,
                                    { className: g.YU, id: c.mU.ALL, children: `${h.intl.string(h.t.hEAa2a)} (${E})` },
                                    c.mU.ALL,
                                ),
                                (0, c.g2)(t.id).map((e) => {
                                    let { value: t, label: n } = e;
                                    return (0, i.jsx)(
                                        r.VQ0.Item,
                                        { className: g.YU, id: t, children: `${n} ${null != f[t] ? `(${f[t]})` : ""}` },
                                        t,
                                    );
                                }),
                            ],
                        }),
                    }),
                    C && null == n
                        ? (0, i.jsx)(r.y$y, { className: A.u1 })
                        : n?.map((e, t) =>
                              (0, i.jsxs)(
                                  l.Fragment,
                                  {
                                      children: [
                                          void 0 !== e.header
                                              ? (0, i.jsx)(r.Text, {
                                                    variant: "text-md/semibold",
                                                    className: g.bV,
                                                    children: e.header,
                                                })
                                              : null,
                                          (0, i.jsxs)("div", {
                                              className: A.vY,
                                              children: [
                                                  e.entries.map((e) => (0, i.jsx)(d.A, { entry: e }, e.guildId)),
                                                  e.appendEndCard && null != s ? (0, i.jsx)(d.s, { onClick: s }) : null,
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
