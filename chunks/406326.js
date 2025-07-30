r.d(t, { Z: () => _ });
var n = r(255367),
    s = r(73800),
    l = r(120356),
    a = r.n(l),
    i = r(442837),
    o = r(481060),
    c = r(63063),
    u = r(518944),
    h = r(607802),
    d = r(945577),
    p = r(28964),
    f = r(981631),
    g = r(388032),
    m = r(107242);
function _(e) {
    let { searchId: t, searchMode: r, onSearchModeChange: l, totalResults: c, isIndexing: _, isSearching: S, documentsIndexed: x } = e,
        b = (0, d.U)({ location: 'SearchHeader' }),
        v = (0, p.xd)({
            isXDMSearch: t === f.aib.DMS,
            location: 'SearchHeader'
        }),
        C = (0, i.e7)([u.Z], () => u.Z.getSearchResultsQueryString(t)),
        j = s.useMemo(() => {
            if (t === f.aib.DMS && b) {
                var e, r;
                let t = (0, h.kG)(null != C ? C : ''),
                    n = null != (r = null == (e = (0, h.$G)(t).channel_id) ? void 0 : e.length) ? r : 0;
                return n > 0 ? g.intl.format(g.t.A2dqWF, { filterCount: n }) : g.intl.string(g.t.tc619f);
            }
            return null;
        }, [t, b, C]),
        E = s.useMemo(
            () => [
                {
                    label: g.intl.string(g.t.CbaapK),
                    value: f.QIO.NEWEST
                },
                {
                    label: g.intl.string(g.t.OukXZm),
                    value: f.QIO.OLDEST
                },
                {
                    label: g.intl.string(g.t['q8gB5+']),
                    value: f.QIO.MOST_RELEVANT
                }
            ],
            []
        );
    return (0, n.jsxs)('header', {
        className: a()(m.searchHeader, { [m.searchHeaderWithSubtitle]: null != j }),
        children: [
            (0, n.jsx)('div', {
                className: m.totalResults,
                role: 'status',
                children: (0, n.jsx)(y, {
                    totalResults: c,
                    subtitle: j,
                    isIndexing: _,
                    isSearching: S,
                    documentsIndexed: x
                })
            }),
            v && t !== f.aib.DMS
                ? (0, n.jsxs)('div', {
                      className: m.searchModeAndFiltersContainer,
                      children: [
                          (0, n.jsx)(o.q4e, {
                              options: E,
                              value: r,
                              onChange: l,
                              look: o.qQH.CUSTOM,
                              className: m.searchModeSelect,
                              popoutWidth: 130
                          }),
                          (0, n.jsx)(o.zxk, {
                              variant: 'secondary',
                              text: g.intl.string(g.t.UdhTtr),
                              icon: o.gXV,
                              size: 'sm'
                          })
                      ]
                  })
                : (0, n.jsxs)(o.njP, {
                      orientation: 'horizontal',
                      className: m.searchHeaderTabList,
                      selectedItem: r,
                      onItemSelect: l,
                      children: [
                          (0, n.jsx)(o.njP.Item, {
                              className: m.searchHeaderTab,
                              id: f.QIO.NEWEST,
                              children: g.intl.string(g.t.rLjqbW)
                          }),
                          (0, n.jsx)(o.njP.Item, {
                              className: m.searchHeaderTab,
                              id: f.QIO.OLDEST,
                              children: g.intl.string(g.t.a1BaUl)
                          }),
                          (0, n.jsx)(o.njP.Item, {
                              className: m.searchHeaderTab,
                              id: f.QIO.MOST_RELEVANT,
                              children: g.intl.string(g.t.FtR97u)
                          })
                      ]
                  })
        ]
    });
}
function y(e) {
    let { totalResults: t, subtitle: r, isSearching: s, isIndexing: l, documentsIndexed: a } = e;
    return l
        ? (0, n.jsx)(x, { documentsIndexed: a })
        : s
          ? (0, n.jsx)(b, {})
          : (0, n.jsx)(v, {
                totalResults: t,
                subtitle: r
            });
}
function S() {
    return (0, n.jsx)('div', {
        className: m.spinnerWrapper,
        children: (0, n.jsx)(o.$jN, {
            type: o.$jN.Type.SPINNING_CIRCLE,
            className: m.spinner,
            itemClassName: m.spinnerPath
        })
    });
}
function x(e) {
    let { documentsIndexed: t } = e;
    return (0, n.jsx)(o.ua7, {
        text: g.intl.formatToPlainString(g.t['4Y3O+P'], { count: t }),
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
                })({ className: m.totalResultsWrapper }, e)),
                (r = r =
                    {
                        children: [
                            (0, n.jsx)(o.Text, {
                                variant: 'text-md/medium',
                                color: 'text-muted',
                                children: (0, n.jsx)(o.eee, {
                                    className: m.helpdeskLink,
                                    href: c.Z.getArticleURL(f.BhN.SEARCH_INDEXING),
                                    children: g.intl.string(g.t['G3EA+/'])
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
                children: g.intl.string(g.t.uixzLS)
            }),
            (0, n.jsx)(S, {})
        ]
    });
}
function v(e) {
    let { totalResults: t, subtitle: r } = e,
        l = s.useMemo(() => t.toLocaleString(), [t]),
        a = (0, n.jsx)(o.Text, {
            variant: 'text-md/medium',
            color: 'header-primary',
            children: g.intl.format(g.t.ZGVL3t, { count: l })
        });
    return null != r
        ? (0, n.jsxs)('div', {
              className: m.totalResultsWithSubtitle,
              children: [
                  a,
                  (0, n.jsx)(o.Text, {
                      variant: 'text-xs/medium',
                      color: 'text-secondary',
                      children: r
                  })
              ]
          })
        : a;
}
