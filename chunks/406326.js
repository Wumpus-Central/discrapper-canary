r.d(t, { Z: () => m });
var n = r(255367),
    s = r(73800),
    l = r(120356),
    a = r.n(l),
    i = r(442837),
    o = r(481060),
    c = r(778877),
    u = r(768119),
    d = r(63063),
    h = r(405656),
    p = r(981631),
    f = r(388032),
    g = r(107242);
function m(e) {
    let { searchId: t, searchMode: r, onSearchModeChange: l, totalResults: d, isIndexing: m, isSearching: S, documentsIndexed: y } = e,
        b = (0, c.U)({ location: 'SearchHeader' }),
        x = (0, i.e7)([u.Z], () => u.Z.getSearchResultsQueryString(t)),
        E = s.useMemo(() => (t === p.aib.DMS && b ? ((0, h.j2)(null != x ? x : '', p.dCx.FILTER_IN) ? null : f.intl.string(f.t.tc619f)) : null), [t, b, x]);
    return (0, n.jsxs)('header', {
        className: a()(g.searchHeader, { [g.searchHeaderWithSubtitle]: null != E }),
        children: [
            (0, n.jsx)('div', {
                className: g.totalResults,
                role: 'status',
                children: (0, n.jsx)(_, {
                    totalResults: d,
                    subtitle: E,
                    isIndexing: m,
                    isSearching: S,
                    documentsIndexed: y
                })
            }),
            (0, n.jsxs)(o.njP, {
                orientation: 'horizontal',
                className: g.searchHeaderTabList,
                selectedItem: r,
                onItemSelect: l,
                children: [
                    (0, n.jsx)(o.njP.Item, {
                        className: g.searchHeaderTab,
                        id: p.QIO.NEWEST,
                        children: f.intl.string(f.t.rLjqbW)
                    }),
                    (0, n.jsx)(o.njP.Item, {
                        className: g.searchHeaderTab,
                        id: p.QIO.OLDEST,
                        children: f.intl.string(f.t.a1BaUl)
                    }),
                    (0, n.jsx)(o.njP.Item, {
                        className: g.searchHeaderTab,
                        id: p.QIO.MOST_RELEVANT,
                        children: f.intl.string(f.t.FtR97u)
                    })
                ]
            })
        ]
    });
}
function _(e) {
    let { totalResults: t, subtitle: r, isSearching: s, isIndexing: l, documentsIndexed: a } = e;
    return l
        ? (0, n.jsx)(y, { documentsIndexed: a })
        : s
          ? (0, n.jsx)(b, {})
          : (0, n.jsx)(x, {
                totalResults: t,
                subtitle: r
            });
}
function S() {
    return (0, n.jsx)('div', {
        className: g.spinnerWrapper,
        children: (0, n.jsx)(o.$jN, {
            type: o.$jN.Type.SPINNING_CIRCLE,
            className: g.spinner,
            itemClassName: g.spinnerPath
        })
    });
}
function y(e) {
    let { documentsIndexed: t } = e;
    return (0, n.jsx)(o.ua7, {
        text: f.intl.formatToPlainString(f.t['4Y3O+P'], { count: t }),
        children: (e) => {
            var t, r;
            return (0, n.jsxs)(
                'div',
                ((t = (function (e) {
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
                })({ className: g.totalResultsWrapper }, e)),
                (r = r =
                    {
                        children: [
                            (0, n.jsx)(o.Text, {
                                variant: 'text-md/medium',
                                color: 'text-muted',
                                children: (0, n.jsx)(o.eee, {
                                    className: g.helpdeskLink,
                                    href: d.Z.getArticleURL(p.BhN.SEARCH_INDEXING),
                                    children: f.intl.string(f.t['G3EA+/'])
                                })
                            }),
                            (0, n.jsx)(S, {})
                        ]
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
                    : (function (e, t) {
                          var r = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var n = Object.getOwnPropertySymbols(e);
                              r.push.apply(r, n);
                          }
                          return r;
                      })(Object(r)).forEach(function (e) {
                          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
                      }),
                t)
            );
        }
    });
}
function b() {
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(o.Text, {
                variant: 'text-md/medium',
                color: 'header-secondary',
                children: f.intl.string(f.t.uixzLS)
            }),
            (0, n.jsx)(S, {})
        ]
    });
}
function x(e) {
    let { totalResults: t, subtitle: r } = e,
        l = s.useMemo(() => t.toLocaleString(), [t]),
        a = (0, n.jsx)(o.Text, {
            variant: 'text-md/medium',
            color: 'header-primary',
            children: f.intl.format(f.t.ZGVL3t, { count: l })
        });
    return null != r
        ? (0, n.jsxs)('div', {
              className: g.totalResultsWithSubtitle,
              children: [
                  a,
                  null != r &&
                      (0, n.jsx)(o.Text, {
                          variant: 'text-xs/medium',
                          color: 'text-secondary',
                          children: f.intl.string(f.t.tc619f)
                      })
              ]
          })
        : a;
}
