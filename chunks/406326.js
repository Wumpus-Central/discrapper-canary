n.d(t, { Z: () => d });
var i = n(200651);
n(192379);
var l = n(481060),
    a = n(540059),
    r = n(63063),
    s = n(981631),
    o = n(388032),
    c = n(739372);
function d(e) {
    let { searchMode: t, searchByMode: n } = e;
    return (0, i.jsxs)('header', {
        className: c.searchHeader,
        children: [
            (0, i.jsx)(u, { ...e }),
            (0, i.jsxs)(l.njP, {
                orientation: 'horizontal',
                className: c.searchHeaderTabList,
                selectedItem: t,
                onItemSelect: n,
                children: [
                    (0, i.jsx)(l.njP.Item, {
                        id: s.QIO.NEWEST,
                        children: o.intl.string(o.t.rLjqbW)
                    }),
                    (0, i.jsx)(l.njP.Item, {
                        id: s.QIO.OLDEST,
                        children: o.intl.string(o.t.a1BaUl)
                    }),
                    (0, i.jsx)(l.njP.Item, {
                        id: s.QIO.MOST_RELEVANT,
                        children: o.intl.string(o.t.FtR97u)
                    })
                ]
            })
        ]
    });
}
function u(e) {
    let t;
    let { isSearching: n, isIndexing: a, documentsIndexed: r } = e;
    (a || n) &&
        (t = (0, i.jsx)('div', {
            className: c.spinnerWrapper,
            children: (0, i.jsx)(l.$jN, {
                type: l.$jN.Type.SPINNING_CIRCLE,
                className: c.spinner,
                itemClassName: c.spinnerPath
            })
        }));
    let s = a && !n;
    return (0, i.jsxs)('div', {
        className: c.totalResults,
        role: 'status',
        children: [
            s
                ? (0, i.jsx)(l.ua7, {
                      text: o.intl.formatToPlainString(o.t['4Y3O+P'], { count: r }),
                      children: (n) =>
                          (0, i.jsxs)('div', {
                              className: c.totalResultsWrapper,
                              ...n,
                              children: [(0, i.jsx)(h, { ...e }), t]
                          })
                  })
                : (0, i.jsx)(h, { ...e }),
            s ? null : t
        ]
    });
}
function h(e) {
    let { isSearching: t, isIndexing: n, totalResults: d } = e,
        u = (0, a.Q3)('TotalResultsText') ? 'text-md/medium' : 'text-md/normal';
    if (t)
        return (0, i.jsx)(l.Text, {
            variant: u,
            color: 'header-secondary',
            children: o.intl.string(o.t.uixzLS)
        });
    if (n)
        return (0, i.jsx)(l.Text, {
            variant: u,
            color: 'text-muted',
            children: (0, i.jsx)(l.eee, {
                className: c.helpdeskLink,
                href: r.Z.getArticleURL(s.BhN.SEARCH_INDEXING),
                children: o.intl.string(o.t['G3EA+/'])
            })
        });
    {
        let e = d.toLocaleString();
        return (0, i.jsx)(l.Text, {
            variant: u,
            color: 'header-primary',
            children: o.intl.format(o.t.ZGVL3t, { count: e })
        });
    }
}
