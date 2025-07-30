n.d(t, { Z: () => I });
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
    O = n(388032),
    f = n(107242);
function I(e) {
    let { searchId: t, searchMode: n, onSearchModeChange: l, totalResults: c, isIndexing: I, isSearching: T, documentsIndexed: S } = e,
        m = (0, _.U)({ location: 'SearchHeader' }),
        g = (0, E.xd)({
            isXDMSearch: t === p.aib.DMS,
            location: 'SearchHeader'
        }),
        N = (0, o.e7)([u.Z], () => u.Z.getSearchResultsQueryString(t)),
        R = i.useMemo(() => {
            if (t === p.aib.DMS && m) {
                var e, n;
                let t = (0, d.kG)(null != N ? N : ''),
                    r = null != (n = null == (e = (0, d.$G)(t).channel_id) ? void 0 : e.length) ? n : 0;
                return r > 0 ? O.intl.format(O.t.A2dqWF, { filterCount: r }) : O.intl.string(O.t.tc619f);
            }
            return null;
        }, [t, m, N]),
        b = i.useMemo(
            () => [
                {
                    label: O.intl.string(O.t.CbaapK),
                    value: p.QIO.NEWEST
                },
                {
                    label: O.intl.string(O.t.OukXZm),
                    value: p.QIO.OLDEST
                },
                {
                    label: O.intl.string(O.t['q8gB5+']),
                    value: p.QIO.MOST_RELEVANT
                }
            ],
            []
        );
    return (0, r.jsxs)('header', {
        className: a()(f.searchHeader, { [f.searchHeaderWithSubtitle]: null != R }),
        children: [
            (0, r.jsx)('div', {
                className: f.totalResults,
                role: 'status',
                children: (0, r.jsx)(h, {
                    totalResults: c,
                    subtitle: R,
                    isIndexing: I,
                    isSearching: T,
                    documentsIndexed: S
                })
            }),
            g && t !== p.aib.DMS
                ? (0, r.jsxs)('div', {
                      className: f.searchModeAndFiltersContainer,
                      children: [
                          (0, r.jsx)(s.q4e, {
                              options: b,
                              value: n,
                              onChange: l,
                              look: s.qQH.CUSTOM,
                              className: f.searchModeSelect,
                              popoutWidth: 130
                          }),
                          (0, r.jsx)(s.zxk, {
                              variant: 'secondary',
                              text: O.intl.string(O.t.UdhTtr),
                              icon: s.gXV,
                              size: 'sm'
                          })
                      ]
                  })
                : (0, r.jsxs)(s.njP, {
                      orientation: 'horizontal',
                      className: f.searchHeaderTabList,
                      selectedItem: n,
                      onItemSelect: l,
                      children: [
                          (0, r.jsx)(s.njP.Item, {
                              className: f.searchHeaderTab,
                              id: p.QIO.NEWEST,
                              children: O.intl.string(O.t.rLjqbW)
                          }),
                          (0, r.jsx)(s.njP.Item, {
                              className: f.searchHeaderTab,
                              id: p.QIO.OLDEST,
                              children: O.intl.string(O.t.a1BaUl)
                          }),
                          (0, r.jsx)(s.njP.Item, {
                              className: f.searchHeaderTab,
                              id: p.QIO.MOST_RELEVANT,
                              children: O.intl.string(O.t.FtR97u)
                          })
                      ]
                  })
        ]
    });
}
function h(e) {
    let { totalResults: t, subtitle: n, isSearching: i, isIndexing: l, documentsIndexed: a } = e;
    return l
        ? (0, r.jsx)(S, { documentsIndexed: a })
        : i
          ? (0, r.jsx)(m, {})
          : (0, r.jsx)(g, {
                totalResults: t,
                subtitle: n
            });
}
function T() {
    return (0, r.jsx)('div', {
        className: f.spinnerWrapper,
        children: (0, r.jsx)(s.$jN, {
            type: s.$jN.Type.SPINNING_CIRCLE,
            className: f.spinner,
            itemClassName: f.spinnerPath
        })
    });
}
function S(e) {
    let { documentsIndexed: t } = e;
    return (0, r.jsx)(s.ua7, {
        text: O.intl.formatToPlainString(O.t['4Y3O+P'], { count: t }),
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
                })({ className: f.totalResultsWrapper }, e)),
                (n = n =
                    {
                        children: [
                            (0, r.jsx)(s.Text, {
                                variant: 'text-md/medium',
                                color: 'text-muted',
                                children: (0, r.jsx)(s.eee, {
                                    className: f.helpdeskLink,
                                    href: c.Z.getArticleURL(p.BhN.SEARCH_INDEXING),
                                    children: O.intl.string(O.t['G3EA+/'])
                                })
                            }),
                            (0, r.jsx)(T, {})
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
                children: O.intl.string(O.t.uixzLS)
            }),
            (0, r.jsx)(T, {})
        ]
    });
}
function g(e) {
    let { totalResults: t, subtitle: n } = e,
        l = i.useMemo(() => t.toLocaleString(), [t]),
        a = (0, r.jsx)(s.Text, {
            variant: 'text-md/medium',
            color: 'header-primary',
            children: O.intl.format(O.t.ZGVL3t, { count: l })
        });
    return null != n
        ? (0, r.jsxs)('div', {
              className: f.totalResultsWithSubtitle,
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
