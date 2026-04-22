n.d(t, { A: () => p });
var i = n(627968);
n(64700);
var l = n(289873),
    s = n(349288),
    a = n(534514),
    r = n(834730),
    o = n(573613),
    d = n(939249),
    c = n(892547),
    u = n(792831),
    h = n(226694),
    A = n(985018),
    _ = n(167901),
    m = n(22735),
    g = n(578576);
let p = (e) => {
    let t,
        {
            searchQuery: n,
            setSearchQuery: p,
            mostRecentQuery: f,
            handleClearSearch: E,
            handleSearchKeyPress: x,
            handleCreateOrAddGuild: I,
            searchResults: C,
            searchFetching: b,
        } = e;
    if (b) t = (0, i.jsx)("div", { className: _.$$, children: (0, i.jsx)(l.y, { className: _.u1 }) });
    else if (0 === C.length) {
        let e =
            null != I
                ? A.intl.format(A.t.qWFupn, {
                      addServerHook: function (e, t) {
                          return (0, i.jsx)(s.Anchor, { onClick: I, children: e }, t);
                      },
                  })
                : A.intl.string(A.t.vYyEnv);
        t = (0, i.jsxs)("div", {
            className: m.Je,
            children: [
                (0, i.jsx)("img", { className: m.Tc, alt: "", src: g }),
                (0, i.jsx)(a.D, {
                    variant: "heading-xl/semibold",
                    color: "text-strong",
                    className: m.gR,
                    children: A.intl.string(A.t["6HXiuE"]),
                }),
                (0, i.jsx)(r.E, { variant: "text-md/normal", color: "text-default", className: m.av, children: e }),
            ],
        });
    } else t = (0, i.jsx)("div", { className: _.vY, children: C.map((e) => (0, i.jsx)(h.A, { entry: e }, e.guildId)) });
    return (0, i.jsx)("div", {
        className: _.$$,
        children: (0, i.jsxs)(o.Ar, {
            className: _.XG,
            children: [
                (0, i.jsxs)("div", {
                    className: m.wL,
                    children: [
                        (0, i.jsxs)("div", {
                            className: m.Dr,
                            children: [
                                (0, i.jsx)(d.D, {
                                    onClick: E,
                                    className: m.UE,
                                    children: (0, i.jsx)(u.A, { direction: u.A.Directions.LEFT }),
                                }),
                                (0, i.jsx)(a.D, {
                                    variant: "heading-xl/semibold",
                                    className: m.s7,
                                    children: A.intl.format(A.t.UkOHRd, { numResults: C.length, query: f }),
                                }),
                            ],
                        }),
                        (0, i.jsx)(c.I, {
                            query: n,
                            "aria-label": A.intl.string(A.t.nL2wKD),
                            placeholder: A.intl.string(A.t.nL2wKD),
                            onChange: p,
                            onClear: E,
                            onKeyDown: x,
                        }),
                    ],
                }),
                t,
            ],
        }),
    });
};
