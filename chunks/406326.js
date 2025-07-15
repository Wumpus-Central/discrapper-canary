r.d(t, { Z: () => g });
var n = r(255367),
    s = r(73800),
    l = r(442837),
    a = r(481060),
    o = r(778877),
    i = r(768119),
    c = r(63063),
    u = r(405656),
    d = r(981631),
    h = r(388032),
    p = r(107242);
function f(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                })
            )),
            n.forEach(function (t) {
                var n;
                ((n = r[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = n));
            }));
    }
    return e;
}
function g(e) {
    let { searchMode: t, onSearchModeChange: r } = e;
    return (0, n.jsxs)('header', {
        className: p.searchHeader,
        children: [
            (0, n.jsx)(m, f({}, e)),
            (0, n.jsxs)(a.njP, {
                orientation: 'horizontal',
                className: p.searchHeaderTabList,
                selectedItem: t,
                onItemSelect: r,
                children: [
                    (0, n.jsx)(a.njP.Item, {
                        id: d.QIO.NEWEST,
                        children: h.intl.string(h.t.rLjqbW)
                    }),
                    (0, n.jsx)(a.njP.Item, {
                        id: d.QIO.OLDEST,
                        children: h.intl.string(h.t.a1BaUl)
                    }),
                    (0, n.jsx)(a.njP.Item, {
                        id: d.QIO.MOST_RELEVANT,
                        children: h.intl.string(h.t.FtR97u)
                    })
                ]
            })
        ]
    });
}
function m(e) {
    let t,
        { isSearching: r, isIndexing: s, documentsIndexed: l } = e;
    (s || r) &&
        (t = (0, n.jsx)('div', {
            className: p.spinnerWrapper,
            children: (0, n.jsx)(a.$jN, {
                type: a.$jN.Type.SPINNING_CIRCLE,
                className: p.spinner,
                itemClassName: p.spinnerPath
            })
        }));
    let o = s && !r;
    return (0, n.jsxs)('div', {
        className: p.totalResults,
        role: 'status',
        children: [
            o
                ? (0, n.jsx)(a.ua7, {
                      text: h.intl.formatToPlainString(h.t['4Y3O+P'], { count: l }),
                      children: (r) => {
                          var s, l;
                          return (0, n.jsxs)(
                              'div',
                              ((s = f({ className: p.totalResultsWrapper }, r)),
                              (l = l =
                                  {
                                      children: [(0, n.jsx)(b, f({}, e)), t]
                                  }),
                              Object.getOwnPropertyDescriptors
                                  ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(l))
                                  : (function (e, t) {
                                        var r = Object.keys(e);
                                        if (Object.getOwnPropertySymbols) {
                                            var n = Object.getOwnPropertySymbols(e);
                                            r.push.apply(r, n);
                                        }
                                        return r;
                                    })(Object(l)).forEach(function (e) {
                                        Object.defineProperty(s, e, Object.getOwnPropertyDescriptor(l, e));
                                    }),
                              s)
                          );
                      }
                  })
                : (0, n.jsx)(b, f({}, e)),
            o ? null : t
        ]
    });
}
function b(e) {
    let { isSearching: t, isIndexing: r, totalResults: s, searchId: l } = e,
        i = (0, o.U)({ location: 'TotalResultsText' });
    if (t)
        return (0, n.jsx)(a.Text, {
            variant: 'text-md/medium',
            color: 'header-secondary',
            children: h.intl.string(h.t.uixzLS)
        });
    {
        if (r)
            return (0, n.jsx)(a.Text, {
                variant: 'text-md/medium',
                color: 'text-muted',
                children: (0, n.jsx)(a.eee, {
                    className: p.helpdeskLink,
                    href: c.Z.getArticleURL(d.BhN.SEARCH_INDEXING),
                    children: h.intl.string(h.t['G3EA+/'])
                })
            });
        if (l === d.aib.DMS && i)
            return (0, n.jsx)(y, {
                totalResults: s,
                searchId: l
            });
        let e = s.toLocaleString();
        return (0, n.jsx)(a.Text, {
            variant: 'text-md/medium',
            color: 'header-primary',
            children: h.intl.format(h.t.ZGVL3t, { count: e })
        });
    }
}
function y(e) {
    let { totalResults: t, searchId: r } = e,
        o = t.toLocaleString(),
        c = (0, l.e7)([i.Z], () => i.Z.getSearchResultsQueryString(r)),
        f = s.useMemo(() => (0, u.j2)(null != c ? c : '', d.dCx.FILTER_IN), [c]);
    return (0, n.jsxs)('div', {
        className: p.totalResultsWithSubtitle,
        children: [
            (0, n.jsx)(a.Text, {
                variant: 'text-md/medium',
                color: 'header-primary',
                children: h.intl.format(h.t.ZGVL3t, { count: o })
            }),
            !f &&
                (0, n.jsx)(a.Text, {
                    variant: 'text-xs/medium',
                    color: 'text-secondary',
                    children: h.intl.string(h.t.tc619f)
                })
        ]
    });
}
