n.d(t, { A: () => N });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(534514),
    o = n(834730),
    d = n(43990),
    c = n(892547),
    u = n(599319),
    h = n(761508),
    A = n(289873),
    _ = n(765671),
    m = n(226694),
    g = n(946116),
    p = n(818348),
    f = n(985018),
    E = n(562845),
    x = n(519094),
    I = n(296753),
    C = n(663093);
let b = (e) => {
        let { searchQuery: t, setSearchQuery: n, handleClearSearch: l, handleSearchKeyPress: s } = e,
            { ref: u, width: h } = (0, _.Ay)(),
            A = null != h && h <= 800;
        return (0, i.jsxs)("div", {
            ref: u,
            className: x.wx,
            children: [
                (0, i.jsx)("img", { alt: "", className: x.F0, src: A ? C : I }),
                (0, i.jsx)("div", {
                    className: x.AZ,
                    children: (0, i.jsxs)("div", {
                        className: a()(x.VW, { [x.eO]: A }),
                        children: [
                            (0, i.jsx)(r.D, {
                                variant: "heading-xl/semibold",
                                className: x.dc,
                                children: f.intl.string(f.t.IT7qoC),
                            }),
                            (0, i.jsx)(o.E, {
                                variant: "text-md/normal",
                                className: x.R_,
                                children: f.intl.string(f.t["5PoYts"]),
                            }),
                            (0, i.jsx)(d.N, {
                                theme: p.NJ.LIGHT,
                                children: (e) =>
                                    (0, i.jsx)("div", {
                                        className: a()(x.MT, e),
                                        children: (0, i.jsx)(c.I, {
                                            query: t,
                                            "aria-label": f.intl.string(f.t.nL2wKD),
                                            placeholder: f.intl.string(f.t.nL2wKD),
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
    N = (e) => {
        let {
            channel: t,
            directoryEntries: n,
            handleCreateOrAddGuild: s,
            searchQuery: a,
            setSearchQuery: r,
            handleClearSearch: d,
            handleSearchKeyPress: c,
            currentCategoryId: _,
            handleSelectCategory: p,
            categoryCounts: I,
            allEntriesCount: C,
            isLoading: N,
        } = e;
        return (0, i.jsx)("div", {
            className: E.$$,
            children: (0, i.jsxs)(u.Gt, {
                className: E.XG,
                children: [
                    (0, i.jsx)(b, { searchQuery: a, setSearchQuery: r, handleClearSearch: d, handleSearchKeyPress: c }),
                    (0, i.jsx)(u.Ch, {
                        orientation: "horizontal",
                        children: (0, i.jsxs)(h.V, {
                            className: x.$H,
                            type: "top",
                            look: "brand",
                            selectedItem: _,
                            onItemSelect: (e) => {
                                p(e);
                            },
                            children: [
                                (0, i.jsx)(
                                    h.V.Item,
                                    { className: x.YU, id: g.mU.ALL, children: `${f.intl.string(f.t.hEAa2a)} (${C})` },
                                    g.mU.ALL,
                                ),
                                (0, g.g2)(t.id).map((e) => {
                                    let { value: t, label: n } = e;
                                    return (0, i.jsx)(
                                        h.V.Item,
                                        { className: x.YU, id: t, children: `${n} ${null != I[t] ? `(${I[t]})` : ""}` },
                                        t,
                                    );
                                }),
                            ],
                        }),
                    }),
                    N && null == n
                        ? (0, i.jsx)(A.y, { className: E.u1 })
                        : n?.map((e, t) =>
                              (0, i.jsxs)(
                                  l.Fragment,
                                  {
                                      children: [
                                          void 0 !== e.header
                                              ? (0, i.jsx)(o.E, {
                                                    variant: "text-md/semibold",
                                                    className: x.bV,
                                                    children: e.header,
                                                })
                                              : null,
                                          (0, i.jsxs)("div", {
                                              className: E.vY,
                                              children: [
                                                  e.entries.map((e) => (0, i.jsx)(m.A, { entry: e }, e.guildId)),
                                                  e.appendEndCard && null != s ? (0, i.jsx)(m.s, { onClick: s }) : null,
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
