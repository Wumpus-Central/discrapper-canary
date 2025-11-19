n.d(t, { Z: () => u });
var r = n(54381);
n(473749);
var i = n(481060),
    l = n(671533),
    a = n(400251),
    s = n(388032),
    o = n(806328),
    c = n(166582),
    d = n(176480);
let u = (e) => {
    let t,
        {
            searchQuery: n,
            setSearchQuery: u,
            mostRecentQuery: p,
            handleClearSearch: h,
            handleSearchKeyPress: f,
            handleCreateOrAddGuild: g,
            searchResults: m,
            searchFetching: b,
        } = e;
    if (b)
        t = (0, r.jsx)("div", {
            className: o.pageContainer,
            children: (0, r.jsx)(i.$jN, { className: o.spinner }),
        });
    else if (0 === m.length) {
        let e =
            null != g
                ? s.intl.format(s.t.qWFupn, {
                      addServerHook: function (e, t) {
                          return (0, r.jsx)(
                              i.Anchor,
                              {
                                  onClick: g,
                                  children: e,
                              },
                              t,
                          );
                      },
                  })
                : s.intl.string(s.t.vYyEnv);
        t = (0, r.jsxs)("div", {
            className: c.emptySearchWrapper,
            children: [
                (0, r.jsx)("img", {
                    className: c.emptySearchImage,
                    alt: "",
                    src: d,
                }),
                (0, r.jsx)(i.Heading, {
                    variant: "heading-xl/semibold",
                    color: "header-primary",
                    className: c.emptySearchTitle,
                    children: s.intl.string(s.t["6HXiuE"]),
                }),
                (0, r.jsx)(i.Text, {
                    variant: "text-md/normal",
                    color: "header-secondary",
                    className: c.emptySearchSubtitle,
                    children: e,
                }),
            ],
        });
    } else
        t = (0, r.jsx)("div", {
            className: o.cardsContainer,
            children: m.map((e) => (0, r.jsx)(a.Z, { entry: e }, e.guildId)),
        });
    return (0, r.jsx)("div", {
        className: o.pageContainer,
        children: (0, r.jsxs)(i.w0Z, {
            className: o.scroller,
            children: [
                (0, r.jsxs)("div", {
                    className: c.searchHeader,
                    children: [
                        (0, r.jsxs)("div", {
                            className: c.headerTitleWrapper,
                            children: [
                                (0, r.jsx)(i.P3F, {
                                    onClick: h,
                                    className: c.arrow,
                                    children: (0, r.jsx)(l.Z, { direction: l.Z.Directions.LEFT }),
                                }),
                                (0, r.jsx)(i.Heading, {
                                    variant: "heading-xl/semibold",
                                    className: c.searchPageTitle,
                                    children: s.intl.format(s.t.UkOHRd, {
                                        numResults: m.length,
                                        query: p,
                                    }),
                                }),
                            ],
                        }),
                        (0, r.jsx)(i.E1j, {
                            query: n,
                            "aria-label": s.intl.string(s.t.nL2wKD),
                            placeholder: s.intl.string(s.t.nL2wKD),
                            onChange: u,
                            onClear: h,
                            onKeyDown: f,
                        }),
                    ],
                }),
                t,
            ],
        }),
    });
};
