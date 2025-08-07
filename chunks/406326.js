n.d(t, { Z: () => y });
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    s = n(481060),
    o = n(63063),
    c = n(833103),
    u = n(607802),
    d = n(945577),
    h = n(28964),
    p = n(981631),
    f = n(388032),
    g = n(107242);
function m(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function b(e, t) {
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
function y(e) {
    let {
            searchContext: t,
            searchMode: l,
            onSearchModeChange: o,
            totalResults: y,
            isIndexing: _,
            isSearching: j,
            documentsIndexed: O,
        } = e,
        v = (0, d.UX)({ location: "SearchHeader" }),
        C = (0, h.xd)({
            isXDMSearch: t.type === p.aib.DMS,
            location: "SearchHeader",
        }),
        E = (0, c.gI)(t),
        { totalFilters: S } = (0, c.hE)(E),
        I = i.useMemo(() => {
            if (t.type === p.aib.DMS && v) {
                var e, n;
                let t = null != (n = null == (e = (0, u.$G)(E).channel_id) ? void 0 : e.length) ? n : 0;
                return t > 0 ? f.intl.format(f.t.A2dqWF, { filterCount: t }) : f.intl.string(f.t.tc619f);
            }
            return null;
        }, [v, t.type, E]),
        Z = i.useMemo(
            () => [
                {
                    label: f.intl.string(f.t.CbaapK),
                    value: p.QIO.NEWEST,
                },
                {
                    label: f.intl.string(f.t.OukXZm),
                    value: p.QIO.OLDEST,
                },
                {
                    label: f.intl.string(f.t["q8gB5+"]),
                    value: p.QIO.MOST_RELEVANT,
                },
            ],
            [],
        ),
        P = i.useCallback(() => {
            (0, s.ZDy)(async () => {
                let { default: e } = await n.e("37979").then(n.bind(n, 238088));
                return (n) => (0, r.jsx)(e, b(m({}, n), { searchContext: t }));
            });
        }, [t]),
        T = i.useMemo(() => (S > 0 ? f.intl.format(f.t.uaR4sL, { filterCount: S }) : f.intl.string(f.t.UdhTtr)), [S]);
    return (0, r.jsxs)("header", {
        className: a()(g.searchHeader, { [g.searchHeaderWithSubtitle]: null != I }),
        children: [
            (0, r.jsx)("div", {
                className: g.totalResults,
                role: "status",
                children: (0, r.jsx)(x, {
                    totalResults: y,
                    subtitle: I,
                    isIndexing: _,
                    isSearching: j,
                    documentsIndexed: O,
                }),
            }),
            C
                ? (0, r.jsxs)("div", {
                      className: g.searchModeAndFiltersContainer,
                      children: [
                          (0, r.jsx)(s.q4e, {
                              options: Z,
                              value: l,
                              onChange: o,
                              look: s.qQH.CUSTOM,
                              className: g.searchModeSelect,
                              popoutWidth: 130,
                          }),
                          (0, r.jsx)(s.zxk, {
                              variant: "secondary",
                              onClick: P,
                              text: T,
                              icon: s.gXV,
                              size: "sm",
                          }),
                      ],
                  })
                : (0, r.jsxs)(s.njP, {
                      orientation: "horizontal",
                      className: g.searchHeaderTabList,
                      selectedItem: l,
                      onItemSelect: o,
                      children: [
                          (0, r.jsx)(s.njP.Item, {
                              className: g.searchHeaderTab,
                              id: p.QIO.NEWEST,
                              children: f.intl.string(f.t.rLjqbW),
                          }),
                          (0, r.jsx)(s.njP.Item, {
                              className: g.searchHeaderTab,
                              id: p.QIO.OLDEST,
                              children: f.intl.string(f.t.a1BaUl),
                          }),
                          (0, r.jsx)(s.njP.Item, {
                              className: g.searchHeaderTab,
                              id: p.QIO.MOST_RELEVANT,
                              children: f.intl.string(f.t.FtR97u),
                          }),
                      ],
                  }),
        ],
    });
}
function x(e) {
    let { totalResults: t, subtitle: n, isSearching: i, isIndexing: l, documentsIndexed: a } = e;
    return l
        ? (0, r.jsx)(j, { documentsIndexed: a })
        : i
          ? (0, r.jsx)(O, {})
          : (0, r.jsx)(v, {
                totalResults: t,
                subtitle: n,
            });
}
function _() {
    return (0, r.jsx)("div", {
        className: g.spinnerWrapper,
        children: (0, r.jsx)(s.$jN, {
            type: s.$jN.Type.SPINNING_CIRCLE,
            className: g.spinner,
            itemClassName: g.spinnerPath,
        }),
    });
}
function j(e) {
    let { documentsIndexed: t } = e;
    return (0, r.jsx)(s.ua7, {
        text: f.intl.formatToPlainString(f.t["4Y3O+P"], { count: t }),
        children: (e) =>
            (0, r.jsxs)(
                "div",
                b(m({ className: g.totalResultsWrapper }, e), {
                    children: [
                        (0, r.jsx)(s.Text, {
                            variant: "text-md/medium",
                            color: "text-muted",
                            children: (0, r.jsx)(s.eee, {
                                className: g.helpdeskLink,
                                href: o.Z.getArticleURL(p.BhN.SEARCH_INDEXING),
                                children: f.intl.string(f.t["G3EA+/"]),
                            }),
                        }),
                        (0, r.jsx)(_, {}),
                    ],
                }),
            ),
    });
}
function O() {
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(s.Text, {
                variant: "text-md/medium",
                color: "header-secondary",
                children: f.intl.string(f.t.uixzLS),
            }),
            (0, r.jsx)(_, {}),
        ],
    });
}
function v(e) {
    let { totalResults: t, subtitle: n } = e,
        l = i.useMemo(() => t.toLocaleString(), [t]),
        a = (0, r.jsx)(s.Text, {
            variant: "text-md/medium",
            color: "header-primary",
            children: f.intl.format(f.t.ZGVL3t, { count: l }),
        });
    return null != n
        ? (0, r.jsxs)("div", {
              className: g.totalResultsWithSubtitle,
              children: [
                  a,
                  (0, r.jsx)(s.Text, {
                      variant: "text-xs/medium",
                      color: "text-secondary",
                      children: n,
                  }),
              ],
          })
        : a;
}
