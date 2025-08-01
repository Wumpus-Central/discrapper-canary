n.d(t, { Z: () => S });
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    s = n(481060),
    c = n(63063),
    u = n(518944),
    d = n(607802),
    _ = n(945577),
    E = n(28964),
    p = n(981631),
    I = n(388032),
    O = n(107242);
function S(e) {
    let { searchContext: t, searchMode: n, onSearchModeChange: l, totalResults: c, isIndexing: S, isSearching: h, documentsIndexed: T } = e,
        m = (0, _.U)({ location: 'SearchHeader' }),
        g = (0, E.xd)({
            isXDMSearch: t.type === p.aib.DMS,
            location: 'SearchHeader'
        }),
        N = (0, d.WJ)(t),
        R = (0, o.e7)([u.Z], () => u.Z.getSearchResultsQueryString(N)),
        y = i.useMemo(() => {
            if (t.type === p.aib.DMS && m) {
                var e, n;
                let t = (0, d.kG)(null != R ? R : ''),
                    r = null != (n = null == (e = (0, d.$G)(t).channel_id) ? void 0 : e.length) ? n : 0;
                return r > 0 ? I.intl.format(I.t.A2dqWF, { filterCount: r }) : I.intl.string(I.t.tc619f);
            }
            return null;
        }, [m, t.type, R]),
        A = i.useMemo(
            () => [
                {
                    label: I.intl.string(I.t.CbaapK),
                    value: p.QIO.NEWEST
                },
                {
                    label: I.intl.string(I.t.OukXZm),
                    value: p.QIO.OLDEST
                },
                {
                    label: I.intl.string(I.t['q8gB5+']),
                    value: p.QIO.MOST_RELEVANT
                }
            ],
            []
        );
    return (0, r.jsxs)('header', {
        className: a()(O.searchHeader, { [O.searchHeaderWithSubtitle]: null != y }),
        children: [
            (0, r.jsx)('div', {
                className: O.totalResults,
                role: 'status',
                children: (0, r.jsx)(f, {
                    totalResults: c,
                    subtitle: y,
                    isIndexing: S,
                    isSearching: h,
                    documentsIndexed: T
                })
            }),
            g && t.type !== p.aib.DMS
                ? (0, r.jsxs)('div', {
                      className: O.searchModeAndFiltersContainer,
                      children: [
                          (0, r.jsx)(s.q4e, {
                              options: A,
                              value: n,
                              onChange: l,
                              look: s.qQH.CUSTOM,
                              className: O.searchModeSelect,
                              popoutWidth: 130
                          }),
                          (0, r.jsx)(s.zxk, {
                              variant: 'secondary',
                              text: I.intl.string(I.t.UdhTtr),
                              icon: s.gXV,
                              size: 'sm'
                          })
                      ]
                  })
                : (0, r.jsxs)(s.njP, {
                      orientation: 'horizontal',
                      className: O.searchHeaderTabList,
                      selectedItem: n,
                      onItemSelect: l,
                      children: [
                          (0, r.jsx)(s.njP.Item, {
                              className: O.searchHeaderTab,
                              id: p.QIO.NEWEST,
                              children: I.intl.string(I.t.rLjqbW)
                          }),
                          (0, r.jsx)(s.njP.Item, {
                              className: O.searchHeaderTab,
                              id: p.QIO.OLDEST,
                              children: I.intl.string(I.t.a1BaUl)
                          }),
                          (0, r.jsx)(s.njP.Item, {
                              className: O.searchHeaderTab,
                              id: p.QIO.MOST_RELEVANT,
                              children: I.intl.string(I.t.FtR97u)
                          })
                      ]
                  })
        ]
    });
}
function f(e) {
    let { totalResults: t, subtitle: n, isSearching: i, isIndexing: l, documentsIndexed: a } = e;
    return l
        ? (0, r.jsx)(T, { documentsIndexed: a })
        : i
          ? (0, r.jsx)(m, {})
          : (0, r.jsx)(g, {
                totalResults: t,
                subtitle: n
            });
}
function h() {
    return (0, r.jsx)('div', {
        className: O.spinnerWrapper,
        children: (0, r.jsx)(s.$jN, {
            type: s.$jN.Type.SPINNING_CIRCLE,
            className: O.spinner,
            itemClassName: O.spinnerPath
        })
    });
}
function T(e) {
    let { documentsIndexed: t } = e;
    return (0, r.jsx)(s.ua7, {
        text: I.intl.formatToPlainString(I.t['4Y3O+P'], { count: t }),
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
                })({ className: O.totalResultsWrapper }, e)),
                (n = n =
                    {
                        children: [
                            (0, r.jsx)(s.Text, {
                                variant: 'text-md/medium',
                                color: 'text-muted',
                                children: (0, r.jsx)(s.eee, {
                                    className: O.helpdeskLink,
                                    href: c.Z.getArticleURL(p.BhN.SEARCH_INDEXING),
                                    children: I.intl.string(I.t['G3EA+/'])
                                })
                            }),
                            (0, r.jsx)(h, {})
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
function m() {
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(s.Text, {
                variant: 'text-md/medium',
                color: 'header-secondary',
                children: I.intl.string(I.t.uixzLS)
            }),
            (0, r.jsx)(h, {})
        ]
    });
}
function g(e) {
    let { totalResults: t, subtitle: n } = e,
        l = i.useMemo(() => t.toLocaleString(), [t]),
        a = (0, r.jsx)(s.Text, {
            variant: 'text-md/medium',
            color: 'header-primary',
            children: I.intl.format(I.t.ZGVL3t, { count: l })
        });
    return null != n
        ? (0, r.jsxs)('div', {
              className: O.totalResultsWithSubtitle,
              children: [
                  a,
                  (0, r.jsx)(s.Text, {
                      variant: 'text-xs/medium',
                      color: 'text-secondary',
                      children: n
                  })
              ]
          })
        : a;
}
