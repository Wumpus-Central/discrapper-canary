"use strict";
n.d(t, { A: () => f });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(397927),
    o = n(765671),
    c = n(226694),
    d = n(946116),
    u = n(818348),
    h = n(985018),
    A = n(46570),
    m = n(680779),
    _ = n(296753),
    p = n(663093);
let g = (e) => {
        let { searchQuery: t, setSearchQuery: n, handleClearSearch: s, handleSearchKeyPress: l } = e,
            { ref: c, width: d } = (0, o.Ay)(),
            A = null != d && d <= 800;
        return (0, i.jsxs)("div", {
            ref: c,
            className: m.wx,
            children: [
                (0, i.jsx)("img", { alt: "", className: m.F0, src: A ? p : _ }),
                (0, i.jsx)("div", {
                    className: m.AZ,
                    children: (0, i.jsxs)("div", {
                        className: r()(m.VW, { [m.eO]: A }),
                        children: [
                            (0, i.jsx)(a.Heading, {
                                variant: "heading-xl/semibold",
                                className: m.dc,
                                children: h.intl.string(h.t.IT7qoC),
                            }),
                            (0, i.jsx)(a.Text, {
                                variant: "text-md/normal",
                                className: m.R_,
                                children: h.intl.string(h.t["5PoYts"]),
                            }),
                            (0, i.jsx)(a.NPJ, {
                                theme: u.NJ.LIGHT,
                                children: (e) =>
                                    (0, i.jsx)("div", {
                                        className: r()(m.MT, e),
                                        children: (0, i.jsx)(a.IWV, {
                                            query: t,
                                            "aria-label": h.intl.string(h.t.nL2wKD),
                                            placeholder: h.intl.string(h.t.nL2wKD),
                                            onChange: n,
                                            onClear: s,
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
    f = (e) => {
        let {
            channel: t,
            directoryEntries: n,
            handleCreateOrAddGuild: l,
            searchQuery: r,
            setSearchQuery: o,
            handleClearSearch: u,
            handleSearchKeyPress: _,
            currentCategoryId: p,
            handleSelectCategory: f,
            categoryCounts: x,
            allEntriesCount: E,
            isLoading: C,
        } = e;
        return (0, i.jsx)("div", {
            className: A.$$,
            children: (0, i.jsxs)(a.GtU, {
                className: A.XG,
                children: [
                    (0, i.jsx)(g, { searchQuery: r, setSearchQuery: o, handleClearSearch: u, handleSearchKeyPress: _ }),
                    (0, i.jsx)(a.ChK, {
                        orientation: "horizontal",
                        children: (0, i.jsxs)(a.VQ0, {
                            className: m.$H,
                            type: "top",
                            look: "brand",
                            selectedItem: p,
                            onItemSelect: (e) => {
                                f(e);
                            },
                            children: [
                                (0, i.jsx)(
                                    a.VQ0.Item,
                                    { className: m.YU, id: d.mU.ALL, children: `${h.intl.string(h.t.hEAa2a)} (${E})` },
                                    d.mU.ALL,
                                ),
                                (0, d.g2)(t.id).map((e) => {
                                    let { value: t, label: n } = e;
                                    return (0, i.jsx)(
                                        a.VQ0.Item,
                                        { className: m.YU, id: t, children: `${n} ${null != x[t] ? `(${x[t]})` : ""}` },
                                        t,
                                    );
                                }),
                            ],
                        }),
                    }),
                    C && null == n
                        ? (0, i.jsx)(a.y$y, { className: A.u1 })
                        : n?.map((e, t) =>
                              (0, i.jsxs)(
                                  s.Fragment,
                                  {
                                      children: [
                                          void 0 !== e.header
                                              ? (0, i.jsx)(a.Text, {
                                                    variant: "text-md/semibold",
                                                    className: m.bV,
                                                    children: e.header,
                                                })
                                              : null,
                                          (0, i.jsxs)("div", {
                                              className: A.vY,
                                              children: [
                                                  e.entries.map((e) => (0, i.jsx)(c.A, { entry: e }, e.guildId)),
                                                  e.appendEndCard && null != l ? (0, i.jsx)(c.s, { onClick: l }) : null,
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
