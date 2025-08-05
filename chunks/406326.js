n.d(t, { Z: () => h });
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
function f(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function h(e) {
    let { searchContext: t, searchMode: l, onSearchModeChange: c, totalResults: h, isIndexing: m, isSearching: g, documentsIndexed: N } = e,
        R = (0, _.U)({ location: 'SearchHeader' }),
        y = (0, E.xd)({
            isXDMSearch: t.type === p.aib.DMS,
            location: 'SearchHeader'
        }),
        A = (0, d.WJ)(t),
        b = (0, o.e7)([u.Z], () => u.Z.getSearchResultsQueryString(A)),
        C = i.useMemo(() => {
            if (t.type === p.aib.DMS && R) {
                var e, n;
                let t = (0, d.kG)(null != b ? b : ''),
                    r = null != (n = null == (e = (0, d.$G)(t).channel_id) ? void 0 : e.length) ? n : 0;
                return r > 0 ? I.intl.format(I.t.A2dqWF, { filterCount: r }) : I.intl.string(I.t.tc619f);
            }
            return null;
        }, [R, t.type, b]),
        P = i.useMemo(
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
        ),
        D = i.useCallback(() => {
            (0, s.ZDy)(async () => {
                let { default: e } = await n.e('37979').then(n.bind(n, 238088));
                return (n) => (0, r.jsx)(e, f(S({}, n), { searchContext: t }));
            });
        }, [t]);
    return (0, r.jsxs)('header', {
        className: a()(O.searchHeader, { [O.searchHeaderWithSubtitle]: null != C }),
        children: [
            (0, r.jsx)('div', {
                className: O.totalResults,
                role: 'status',
                children: (0, r.jsx)(T, {
                    totalResults: h,
                    subtitle: C,
                    isIndexing: m,
                    isSearching: g,
                    documentsIndexed: N
                })
            }),
            y
                ? (0, r.jsxs)('div', {
                      className: O.searchModeAndFiltersContainer,
                      children: [
                          (0, r.jsx)(s.q4e, {
                              options: P,
                              value: l,
                              onChange: c,
                              look: s.qQH.CUSTOM,
                              className: O.searchModeSelect,
                              popoutWidth: 130
                          }),
                          (0, r.jsx)(s.zxk, {
                              variant: 'secondary',
                              onClick: D,
                              text: I.intl.string(I.t.UdhTtr),
                              icon: s.gXV,
                              size: 'sm'
                          })
                      ]
                  })
                : (0, r.jsxs)(s.njP, {
                      orientation: 'horizontal',
                      className: O.searchHeaderTabList,
                      selectedItem: l,
                      onItemSelect: c,
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
function T(e) {
    let { totalResults: t, subtitle: n, isSearching: i, isIndexing: l, documentsIndexed: a } = e;
    return l
        ? (0, r.jsx)(g, { documentsIndexed: a })
        : i
          ? (0, r.jsx)(N, {})
          : (0, r.jsx)(R, {
                totalResults: t,
                subtitle: n
            });
}
function m() {
    return (0, r.jsx)('div', {
        className: O.spinnerWrapper,
        children: (0, r.jsx)(s.$jN, {
            type: s.$jN.Type.SPINNING_CIRCLE,
            className: O.spinner,
            itemClassName: O.spinnerPath
        })
    });
}
function g(e) {
    let { documentsIndexed: t } = e;
    return (0, r.jsx)(s.ua7, {
        text: I.intl.formatToPlainString(I.t['4Y3O+P'], { count: t }),
        children: (e) =>
            (0, r.jsxs)(
                'div',
                f(S({ className: O.totalResultsWrapper }, e), {
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
                        (0, r.jsx)(m, {})
                    ]
                })
            )
    });
}
function N() {
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(s.Text, {
                variant: 'text-md/medium',
                color: 'header-secondary',
                children: I.intl.string(I.t.uixzLS)
            }),
            (0, r.jsx)(m, {})
        ]
    });
}
function R(e) {
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
