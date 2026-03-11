"use strict";
n.d(t, { A: () => u });
var i = n(627968);
n(64700);
var s = n(397927),
    l = n(792831),
    a = n(226694),
    r = n(985018),
    o = n(875514),
    c = n(607290),
    d = n(578576);
let u = (e) => {
    let t,
        {
            searchQuery: n,
            setSearchQuery: u,
            mostRecentQuery: h,
            handleClearSearch: A,
            handleSearchKeyPress: m,
            handleCreateOrAddGuild: p,
            searchResults: g,
            searchFetching: _,
        } = e;
    if (_) t = (0, i.jsx)("div", { className: o.$$, children: (0, i.jsx)(s.y$y, { className: o.u1 }) });
    else if (0 === g.length) {
        let e =
            null != p
                ? r.intl.format(r.t.qWFupn, {
                      addServerHook: function (e, t) {
                          return (0, i.jsx)(s.MzZ, { onClick: p, children: e }, t);
                      },
                  })
                : r.intl.string(r.t.vYyEnv);
        t = (0, i.jsxs)("div", {
            className: c.Je,
            children: [
                (0, i.jsx)("img", { className: c.Tc, alt: "", src: d }),
                (0, i.jsx)(s.Heading, {
                    variant: "heading-xl/semibold",
                    color: "text-strong",
                    className: c.gR,
                    children: r.intl.string(r.t["6HXiuE"]),
                }),
                (0, i.jsx)(s.Text, { variant: "text-md/normal", color: "text-default", className: c.av, children: e }),
            ],
        });
    } else t = (0, i.jsx)("div", { className: o.vY, children: g.map((e) => (0, i.jsx)(a.A, { entry: e }, e.guildId)) });
    return (0, i.jsx)("div", {
        className: o.$$,
        children: (0, i.jsxs)(s.ArX, {
            className: o.XG,
            children: [
                (0, i.jsxs)("div", {
                    className: c.wL,
                    children: [
                        (0, i.jsxs)("div", {
                            className: c.Dr,
                            children: [
                                (0, i.jsx)(s.DUT, {
                                    onClick: A,
                                    className: c.UE,
                                    children: (0, i.jsx)(l.A, { direction: l.A.Directions.LEFT }),
                                }),
                                (0, i.jsx)(s.Heading, {
                                    variant: "heading-xl/semibold",
                                    className: c.s7,
                                    children: r.intl.format(r.t.UkOHRd, { numResults: g.length, query: h }),
                                }),
                            ],
                        }),
                        (0, i.jsx)(s.IWV, {
                            query: n,
                            "aria-label": r.intl.string(r.t.nL2wKD),
                            placeholder: r.intl.string(r.t.nL2wKD),
                            onChange: u,
                            onClear: A,
                            onKeyDown: m,
                        }),
                    ],
                }),
                t,
            ],
        }),
    });
};
