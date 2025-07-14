n.d(t, { Z: () => m });
var r = n(255367),
    i = n(73800),
    l = n(442837),
    a = n(481060),
    o = n(778877),
    s = n(768119),
    c = n(63063),
    u = n(405656),
    d = n(981631),
    p = n(388032),
    h = n(107242);
function f(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
    }
    return e;
}
function m(e) {
    let { searchMode: t, onSearchModeChange: n } = e;
    return (0, r.jsxs)('header', {
        className: h.searchHeader,
        children: [
            (0, r.jsx)(g, f({}, e)),
            (0, r.jsxs)(a.njP, {
                orientation: 'horizontal',
                className: h.searchHeaderTabList,
                selectedItem: t,
                onItemSelect: n,
                children: [
                    (0, r.jsx)(a.njP.Item, {
                        id: d.QIO.NEWEST,
                        children: p.intl.string(p.t.rLjqbW)
                    }),
                    (0, r.jsx)(a.njP.Item, {
                        id: d.QIO.OLDEST,
                        children: p.intl.string(p.t.a1BaUl)
                    }),
                    (0, r.jsx)(a.njP.Item, {
                        id: d.QIO.MOST_RELEVANT,
                        children: p.intl.string(p.t.FtR97u)
                    })
                ]
            })
        ]
    });
}
function g(e) {
    let t,
        { isSearching: n, isIndexing: i, documentsIndexed: l } = e;
    (i || n) &&
        (t = (0, r.jsx)('div', {
            className: h.spinnerWrapper,
            children: (0, r.jsx)(a.$jN, {
                type: a.$jN.Type.SPINNING_CIRCLE,
                className: h.spinner,
                itemClassName: h.spinnerPath
            })
        }));
    let o = i && !n;
    return (0, r.jsxs)('div', {
        className: h.totalResults,
        role: 'status',
        children: [
            o
                ? (0, r.jsx)(a.ua7, {
                      text: p.intl.formatToPlainString(p.t['4Y3O+P'], { count: l }),
                      children: (n) => {
                          var i, l;
                          return (0, r.jsxs)(
                              'div',
                              ((i = f({ className: h.totalResultsWrapper }, n)),
                              (l = l =
                                  {
                                      children: [(0, r.jsx)(b, f({}, e)), t]
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
                : (0, r.jsx)(b, f({}, e)),
            o ? null : t
        ]
    });
}
function b(e) {
    let { isSearching: t, isIndexing: n, totalResults: i, searchId: l } = e,
        s = (0, o.U)({ location: 'TotalResultsText' });
    if (t)
        return (0, r.jsx)(a.Text, {
            variant: 'text-md/medium',
            color: 'header-secondary',
            children: p.intl.string(p.t.uixzLS)
        });
    {
        if (n)
            return (0, r.jsx)(a.Text, {
                variant: 'text-md/medium',
                color: 'text-muted',
                children: (0, r.jsx)(a.eee, {
                    className: h.helpdeskLink,
                    href: c.Z.getArticleURL(d.BhN.SEARCH_INDEXING),
                    children: p.intl.string(p.t['G3EA+/'])
                })
            });
        if (l === d.aib.DMS && s)
            return (0, r.jsx)(_, {
                totalResults: i,
                searchId: l
            });
        let e = i.toLocaleString();
        return (0, r.jsx)(a.Text, {
            variant: 'text-md/medium',
            color: 'header-primary',
            children: p.intl.format(p.t.ZGVL3t, { count: e })
        });
    }
}
function _(e) {
    let { totalResults: t, searchId: n } = e,
        o = t.toLocaleString(),
        c = (0, l.e7)([s.Z], () => s.Z.getSearchResultsQueryString(n)),
        f = i.useMemo(() => (0, u.j2)(null != c ? c : '', d.dCx.FILTER_IN), [c]);
    return (0, r.jsxs)('div', {
        className: h.totalResultsWithSubtitle,
        children: [
            (0, r.jsx)(a.Text, {
                variant: 'text-md/medium',
                color: 'header-primary',
                children: p.intl.format(p.t.ZGVL3t, { count: o })
            }),
            !f &&
                (0, r.jsx)(a.Text, {
                    variant: 'text-xs/medium',
                    color: 'text-secondary',
                    children: p.intl.string(p.t.tc619f)
                })
        ]
    });
}
