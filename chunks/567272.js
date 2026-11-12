var i = n(839214),
    r = n(488995),
    a = n(523754);
let s = Object.freeze({ searchGenres: [], searchPlatforms: [], searchPage: 1 }),
    l = Object.freeze({ searchQuery: "", submittedQuery: "", ...s }),
    o = Object.freeze({ selectedView: a.y.FEATURED, searchBarState: r.Um.DEFAULT, ...l }),
    d = (0, i.D)(() => o);
n.d(
    t,
    {},
    {
        Ay: d,
        Ch: function () {
            d.setState(l);
        },
        P4: function (e) {
            d.setState({ ...s, submittedQuery: e });
        },
        ei: function (e) {
            let t = d.getField("searchPlatforms");
            d.setState({
                searchPlatforms: t.includes(e) ? t.filter((t) => t !== e) : [...t, e],
                searchPage: s.searchPage,
            });
        },
        kG: function (e) {
            d.setState({ searchPage: e });
        },
        pR: function (e) {
            d.setState({ searchQuery: e });
        },
        xc: function (e) {
            d.setState({ searchGenres: e, searchPage: s.searchPage });
        },
    },
);
