n.d(t, { Z: () => f });
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
    S = n(388032),
    O = n(107242);
function f(e) {
    let { searchContext: t, searchMode: n, onSearchModeChange: l, totalResults: c, isIndexing: f, isSearching: I, documentsIndexed: T } = e,
        m = (0, _.U)({ location: 'SearchHeader' }),
        g = (0, E.xd)({
            isXDMSearch: t.type === p.aib.DMS,
            location: 'SearchHeader'
        }),
        N = (0, d.WJ)(t),
        y = (0, o.e7)([u.Z], () => u.Z.getSearchResultsQueryString(N)),
        R = i.useMemo(() => {
            if (t.type === p.aib.DMS && m) {
                var e, n;
                let t = (0, d.kG)(null != y ? y : ''),
                    r = null != (n = null == (e = (0, d.$G)(t).channel_id) ? void 0 : e.length) ? n : 0;
                return r > 0 ? S.intl.format(S.t.A2dqWF, { filterCount: r }) : S.intl.string(S.t.tc619f);
            }
            return null;
        }, [m, t.type, y]),
        A = i.useMemo(
            () => [
                {
                    label: S.intl.string(S.t.CbaapK),
                    value: p.QIO.NEWEST
                },
                {
                    label: S.intl.string(S.t.OukXZm),
                    value: p.QIO.OLDEST
                },
                {
                    label: S.intl.string(S.t['q8gB5+']),
                    value: p.QIO.MOST_RELEVANT
                }
            ],
            []
        );
    return (0, r.jsxs)('header', {
        className: a()(O.searchHeader, { [O.searchHeaderWithSubtitle]: null != R }),
        children: [
            (0, r.jsx)('div', {
                className: O.totalResults,
                role: 'status',
                children: (0, r.jsx)(h, {
                    totalResults: c,
                    subtitle: R,
                    isIndexing: f,
                    isSearching: I,
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
                              text: S.intl.string(S.t.UdhTtr),
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
                              children: S.intl.string(S.t.rLjqbW)
                          }),
                          (0, r.jsx)(s.njP.Item, {
                              className: O.searchHeaderTab,
                              id: p.QIO.OLDEST,
                              children: S.intl.string(S.t.a1BaUl)
                          }),
                          (0, r.jsx)(s.njP.Item, {
                              className: O.searchHeaderTab,
                              id: p.QIO.MOST_RELEVANT,
                              children: S.intl.string(S.t.FtR97u)
                          })
                      ]
                  })
        ]
    });
}
function h(e) {
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
function I() {
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
        text: S.intl.formatToPlainString(S.t['4Y3O+P'], { count: t }),
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
                                    children: S.intl.string(S.t['G3EA+/'])
                                })
                            }),
                            (0, r.jsx)(I, {})
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
                children: S.intl.string(S.t.uixzLS)
            }),
            (0, r.jsx)(I, {})
        ]
    });
}
function g(e) {
    let { totalResults: t, subtitle: n } = e,
        l = i.useMemo(() => t.toLocaleString(), [t]),
        a = (0, r.jsx)(s.Text, {
            variant: 'text-md/medium',
            color: 'header-primary',
            children: S.intl.format(S.t.ZGVL3t, { count: l })
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
