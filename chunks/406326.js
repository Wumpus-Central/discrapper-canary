n.d(t, { Z: () => O });
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(481060),
    c = n(63063),
    u = n(518944),
    d = n(607802),
    f = n(945577),
    _ = n(28964),
    p = n(981631),
    h = n(388032),
    m = n(107242);
function g(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function E(e) {
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
                g(e, t, n[t]);
            }));
    }
    return e;
}
function b(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function y(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : b(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function O(e) {
    let { searchContext: t, searchMode: a, onSearchModeChange: c, totalResults: g, isIndexing: b, isSearching: O, documentsIndexed: I } = e,
        T = (0, f.U)({ location: 'SearchHeader' }),
        S = (0, _.xd)({
            isXDMSearch: t.type === p.aib.DMS,
            location: 'SearchHeader'
        }),
        A = (0, d.WJ)(t),
        N = (0, s.e7)([u.Z], () => u.Z.getSearchResultsQueryString(A)),
        C = i.useMemo(() => {
            if (t.type === p.aib.DMS && T) {
                var e, n;
                let t = (0, d.kG)(null != N ? N : ''),
                    r = null != (n = null == (e = (0, d.$G)(t).channel_id) ? void 0 : e.length) ? n : 0;
                return r > 0 ? h.intl.format(h.t.A2dqWF, { filterCount: r }) : h.intl.string(h.t.tc619f);
            }
            return null;
        }, [T, t.type, N]),
        w = i.useMemo(
            () => [
                {
                    label: h.intl.string(h.t.CbaapK),
                    value: p.QIO.NEWEST
                },
                {
                    label: h.intl.string(h.t.OukXZm),
                    value: p.QIO.OLDEST
                },
                {
                    label: h.intl.string(h.t['q8gB5+']),
                    value: p.QIO.MOST_RELEVANT
                }
            ],
            []
        ),
        R = i.useCallback(() => {
            (0, l.ZDy)(async () => {
                let { default: e } = await n.e('37979').then(n.bind(n, 238088));
                return (n) => (0, r.jsx)(e, y(E({}, n), { searchContext: t }));
            });
        }, [t]);
    return (0, r.jsxs)('header', {
        className: o()(m.searchHeader, { [m.searchHeaderWithSubtitle]: null != C }),
        children: [
            (0, r.jsx)('div', {
                className: m.totalResults,
                role: 'status',
                children: (0, r.jsx)(v, {
                    totalResults: g,
                    subtitle: C,
                    isIndexing: b,
                    isSearching: O,
                    documentsIndexed: I
                })
            }),
            S
                ? (0, r.jsxs)('div', {
                      className: m.searchModeAndFiltersContainer,
                      children: [
                          (0, r.jsx)(l.q4e, {
                              options: w,
                              value: a,
                              onChange: c,
                              look: l.qQH.CUSTOM,
                              className: m.searchModeSelect,
                              popoutWidth: 130
                          }),
                          (0, r.jsx)(l.zxk, {
                              variant: 'secondary',
                              onClick: R,
                              text: h.intl.string(h.t.UdhTtr),
                              icon: l.gXV,
                              size: 'sm'
                          })
                      ]
                  })
                : (0, r.jsxs)(l.njP, {
                      orientation: 'horizontal',
                      className: m.searchHeaderTabList,
                      selectedItem: a,
                      onItemSelect: c,
                      children: [
                          (0, r.jsx)(l.njP.Item, {
                              className: m.searchHeaderTab,
                              id: p.QIO.NEWEST,
                              children: h.intl.string(h.t.rLjqbW)
                          }),
                          (0, r.jsx)(l.njP.Item, {
                              className: m.searchHeaderTab,
                              id: p.QIO.OLDEST,
                              children: h.intl.string(h.t.a1BaUl)
                          }),
                          (0, r.jsx)(l.njP.Item, {
                              className: m.searchHeaderTab,
                              id: p.QIO.MOST_RELEVANT,
                              children: h.intl.string(h.t.FtR97u)
                          })
                      ]
                  })
        ]
    });
}
function v(e) {
    let { totalResults: t, subtitle: n, isSearching: i, isIndexing: a, documentsIndexed: o } = e;
    return a
        ? (0, r.jsx)(T, { documentsIndexed: o })
        : i
          ? (0, r.jsx)(S, {})
          : (0, r.jsx)(A, {
                totalResults: t,
                subtitle: n
            });
}
function I() {
    return (0, r.jsx)('div', {
        className: m.spinnerWrapper,
        children: (0, r.jsx)(l.$jN, {
            type: l.$jN.Type.SPINNING_CIRCLE,
            className: m.spinner,
            itemClassName: m.spinnerPath
        })
    });
}
function T(e) {
    let { documentsIndexed: t } = e;
    return (0, r.jsx)(l.ua7, {
        text: h.intl.formatToPlainString(h.t['4Y3O+P'], { count: t }),
        children: (e) =>
            (0, r.jsxs)(
                'div',
                y(E({ className: m.totalResultsWrapper }, e), {
                    children: [
                        (0, r.jsx)(l.Text, {
                            variant: 'text-md/medium',
                            color: 'text-muted',
                            children: (0, r.jsx)(l.eee, {
                                className: m.helpdeskLink,
                                href: c.Z.getArticleURL(p.BhN.SEARCH_INDEXING),
                                children: h.intl.string(h.t['G3EA+/'])
                            })
                        }),
                        (0, r.jsx)(I, {})
                    ]
                })
            )
    });
}
function S() {
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(l.Text, {
                variant: 'text-md/medium',
                color: 'header-secondary',
                children: h.intl.string(h.t.uixzLS)
            }),
            (0, r.jsx)(I, {})
        ]
    });
}
function A(e) {
    let { totalResults: t, subtitle: n } = e,
        a = i.useMemo(() => t.toLocaleString(), [t]),
        o = (0, r.jsx)(l.Text, {
            variant: 'text-md/medium',
            color: 'header-primary',
            children: h.intl.format(h.t.ZGVL3t, { count: a })
        });
    return null != n
        ? (0, r.jsxs)('div', {
              className: m.totalResultsWithSubtitle,
              children: [
                  o,
                  (0, r.jsx)(l.Text, {
                      variant: 'text-xs/medium',
                      color: 'text-secondary',
                      children: n
                  })
              ]
          })
        : o;
}
