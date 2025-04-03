n.d(t, { Z: () => d });
var r = n(200651);
n(192379);
var i = n(481060),
    l = n(540059),
    o = n(63063),
    a = n(981631),
    s = n(388032),
    c = n(107242);
function u(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function d(e) {
    let { searchMode: t, searchByMode: n } = e;
    return (0, r.jsxs)('header', {
        className: c.searchHeader,
        children: [
            (0, r.jsx)(p, u({}, e)),
            (0, r.jsxs)(i.njP, {
                orientation: 'horizontal',
                className: c.searchHeaderTabList,
                selectedItem: t,
                onItemSelect: n,
                children: [
                    (0, r.jsx)(i.njP.Item, {
                        id: a.QIO.NEWEST,
                        children: s.NW.string(s.t.rLjqbW)
                    }),
                    (0, r.jsx)(i.njP.Item, {
                        id: a.QIO.OLDEST,
                        children: s.NW.string(s.t.a1BaUl)
                    }),
                    (0, r.jsx)(i.njP.Item, {
                        id: a.QIO.MOST_RELEVANT,
                        children: s.NW.string(s.t.FtR97u)
                    })
                ]
            })
        ]
    });
}
function p(e) {
    let t,
        { isSearching: n, isIndexing: l, documentsIndexed: o } = e;
    (l || n) &&
        (t = (0, r.jsx)('div', {
            className: c.spinnerWrapper,
            children: (0, r.jsx)(i.$jN, {
                type: i.$jN.Type.SPINNING_CIRCLE,
                className: c.spinner,
                itemClassName: c.spinnerPath
            })
        }));
    let a = l && !n;
    return (0, r.jsxs)('div', {
        className: c.totalResults,
        role: 'status',
        children: [
            a
                ? (0, r.jsx)(i.ua7, {
                      text: s.NW.formatToPlainString(s.t['4Y3O+P'], { count: o }),
                      children: (n) => {
                          var i, l;
                          return (0, r.jsxs)(
                              'div',
                              ((i = u({ className: c.totalResultsWrapper }, n)),
                              (l = l =
                                  {
                                      children: [(0, r.jsx)(h, u({}, e)), t]
                                  }),
                              Object.getOwnPropertyDescriptors
                                  ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l))
                                  : (function (e, t) {
                                        var n = Object.keys(e);
                                        if (Object.getOwnPropertySymbols) {
                                            var r = Object.getOwnPropertySymbols(e);
                                            n.push.apply(n, r);
                                        }
                                        return n;
                                    })(Object(l)).forEach(function (e) {
                                        Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e));
                                    }),
                              i)
                          );
                      }
                  })
                : (0, r.jsx)(h, u({}, e)),
            a ? null : t
        ]
    });
}
function h(e) {
    let { isSearching: t, isIndexing: n, totalResults: u } = e,
        d = (0, l.Q3)('TotalResultsText') ? 'text-md/medium' : 'text-md/normal';
    if (t)
        return (0, r.jsx)(i.Text, {
            variant: d,
            color: 'header-secondary',
            children: s.NW.string(s.t.uixzLS)
        });
    {
        if (n)
            return (0, r.jsx)(i.Text, {
                variant: d,
                color: 'text-muted',
                children: (0, r.jsx)(i.eee, {
                    className: c.helpdeskLink,
                    href: o.Z.getArticleURL(a.BhN.SEARCH_INDEXING),
                    children: s.NW.string(s.t['G3EA+/'])
                })
            });
        let e = u.toLocaleString();
        return (0, r.jsx)(i.Text, {
            variant: d,
            color: 'header-primary',
            children: s.NW.format(s.t.ZGVL3t, { count: e })
        });
    }
}
