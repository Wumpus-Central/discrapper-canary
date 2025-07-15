n.d(t, { Z: () => m });
var r = n(255367),
    s = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    i = n(481060),
    c = n(778877),
    u = n(768119),
    d = n(63063),
    h = n(405656),
    p = n(981631),
    f = n(388032),
    g = n(107242);
function m(e) {
    let { searchId: t, searchMode: n, onSearchModeChange: l, totalResults: d, isIndexing: m, isSearching: y, documentsIndexed: S } = e,
        x = (0, c.U)({ location: 'SearchHeader' }),
        O = (0, o.e7)([u.Z], () => u.Z.getSearchResultsQueryString(t)),
        j = s.useMemo(() => (t === p.aib.DMS && x ? ((0, h.j2)(null != O ? O : '', p.dCx.FILTER_IN) ? null : f.intl.string(f.t.tc619f)) : null), [t, x, O]);
    return (0, r.jsxs)('header', {
        className: a()(g.searchHeader, { [g.searchHeaderWithSubtitle]: null != j }),
        children: [
            (0, r.jsx)('div', {
                className: g.totalResults,
                role: 'status',
                children: (0, r.jsx)(b, {
                    totalResults: d,
                    subtitle: j,
                    isIndexing: m,
                    isSearching: y,
                    documentsIndexed: S
                })
            }),
            (0, r.jsxs)(i.njP, {
                orientation: 'horizontal',
                className: g.searchHeaderTabList,
                selectedItem: n,
                onItemSelect: l,
                children: [
                    (0, r.jsx)(i.njP.Item, {
                        className: g.searchHeaderTab,
                        id: p.QIO.NEWEST,
                        children: f.intl.string(f.t.rLjqbW)
                    }),
                    (0, r.jsx)(i.njP.Item, {
                        className: g.searchHeaderTab,
                        id: p.QIO.OLDEST,
                        children: f.intl.string(f.t.a1BaUl)
                    }),
                    (0, r.jsx)(i.njP.Item, {
                        className: g.searchHeaderTab,
                        id: p.QIO.MOST_RELEVANT,
                        children: f.intl.string(f.t.FtR97u)
                    })
                ]
            })
        ]
    });
}
function b(e) {
    let { totalResults: t, subtitle: n, isSearching: s, isIndexing: l, documentsIndexed: a } = e;
    return l
        ? (0, r.jsx)(S, { documentsIndexed: a })
        : s
          ? (0, r.jsx)(x, {})
          : (0, r.jsx)(O, {
                totalResults: t,
                subtitle: n
            });
}
function y() {
    return (0, r.jsx)('div', {
        className: g.spinnerWrapper,
        children: (0, r.jsx)(i.$jN, {
            type: i.$jN.Type.SPINNING_CIRCLE,
            className: g.spinner,
            itemClassName: g.spinnerPath
        })
    });
}
function S(e) {
    let { documentsIndexed: t } = e;
    return (0, r.jsx)(i.ua7, {
        text: f.intl.formatToPlainString(f.t['4Y3O+P'], { count: t }),
        children: (e) => {
            var t, n;
            return (0, r.jsxs)(
                'div',
                ((t = (function (e) {
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
                })({ className: g.totalResultsWrapper }, e)),
                (n = n =
                    {
                        children: [
                            (0, r.jsx)(i.Text, {
                                variant: 'text-md/medium',
                                color: 'text-muted',
                                children: (0, r.jsx)(i.eee, {
                                    className: g.helpdeskLink,
                                    href: d.Z.getArticleURL(p.BhN.SEARCH_INDEXING),
                                    children: f.intl.string(f.t['G3EA+/'])
                                })
                            }),
                            (0, r.jsx)(y, {})
                        ]
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(n)).forEach(function (e) {
                          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                      }),
                t)
            );
        }
    });
}
function x() {
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(i.Text, {
                variant: 'text-md/medium',
                color: 'header-secondary',
                children: f.intl.string(f.t.uixzLS)
            }),
            (0, r.jsx)(y, {})
        ]
    });
}
function O(e) {
    let { totalResults: t, subtitle: n } = e,
        l = s.useMemo(() => t.toLocaleString(), [t]),
        a = (0, r.jsx)(i.Text, {
            variant: 'text-md/medium',
            color: 'header-primary',
            children: f.intl.format(f.t.ZGVL3t, { count: l })
        });
    return null != n
        ? (0, r.jsxs)('div', {
              className: g.totalResultsWithSubtitle,
              children: [
                  a,
                  null != n &&
                      (0, r.jsx)(i.Text, {
                          variant: 'text-xs/medium',
                          color: 'text-secondary',
                          children: f.intl.string(f.t.tc619f)
                      })
              ]
          })
        : a;
}
