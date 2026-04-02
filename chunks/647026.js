n.d(t, { A: () => u });
var i = n(627968);
n(64700);
var l = n(397927),
    s = n(792831),
    a = n(226694),
    r = n(985018),
    o = n(46570),
    d = n(624042),
    c = n(578576);
let u = (e) => {
    let t,
        {
            searchQuery: n,
            setSearchQuery: u,
            mostRecentQuery: h,
            handleClearSearch: A,
            handleSearchKeyPress: _,
            handleCreateOrAddGuild: m,
            searchResults: g,
            searchFetching: p,
        } = e;
    if (p) t = (0, i.jsx)("div", { className: o.$$, children: (0, i.jsx)(l.y$y, { className: o.u1 }) });
    else if (0 === g.length) {
        let e =
            null != m
                ? r.intl.format(r.t.qWFupn, {
                      addServerHook: function (e, t) {
                          return (0, i.jsx)(l.MzZ, { onClick: m, children: e }, t);
                      },
                  })
                : r.intl.string(r.t.vYyEnv);
        t = (0, i.jsxs)("div", {
            className: d.Je,
            children: [
                (0, i.jsx)("img", { className: d.Tc, alt: "", src: c }),
                (0, i.jsx)(l.Heading, {
                    variant: "heading-xl/semibold",
                    color: "text-strong",
                    className: d.gR,
                    children: r.intl.string(r.t["6HXiuE"]),
                }),
                (0, i.jsx)(l.Text, { variant: "text-md/normal", color: "text-default", className: d.av, children: e }),
            ],
        });
    } else t = (0, i.jsx)("div", { className: o.vY, children: g.map((e) => (0, i.jsx)(a.A, { entry: e }, e.guildId)) });
    return (0, i.jsx)("div", {
        className: o.$$,
        children: (0, i.jsxs)(l.ArX, {
            className: o.XG,
            children: [
                (0, i.jsxs)("div", {
                    className: d.wL,
                    children: [
                        (0, i.jsxs)("div", {
                            className: d.Dr,
                            children: [
                                (0, i.jsx)(l.DUT, {
                                    onClick: A,
                                    className: d.UE,
                                    children: (0, i.jsx)(s.A, { direction: s.A.Directions.LEFT }),
                                }),
                                (0, i.jsx)(l.Heading, {
                                    variant: "heading-xl/semibold",
                                    className: d.s7,
                                    children: r.intl.format(r.t.UkOHRd, { numResults: g.length, query: h }),
                                }),
                            ],
                        }),
                        (0, i.jsx)(l.IWV, {
                            query: n,
                            "aria-label": r.intl.string(r.t.nL2wKD),
                            placeholder: r.intl.string(r.t.nL2wKD),
                            onChange: u,
                            onClear: A,
                            onKeyDown: _,
                        }),
                    ],
                }),
                t,
            ],
        }),
    });
};
