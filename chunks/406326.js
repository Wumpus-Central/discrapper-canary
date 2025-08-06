n.d(t, { Z: () => x });
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    s = n(442837),
    o = n(481060),
    c = n(63063),
    u = n(518944),
    d = n(607802),
    h = n(945577),
    p = n(28964),
    f = n(981631),
    g = n(388032),
    m = n(107242);
function b(e) {
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
function y(e, t) {
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
function x(e) {
    let {
            searchContext: t,
            searchMode: l,
            onSearchModeChange: c,
            totalResults: x,
            isIndexing: _,
            isSearching: O,
            documentsIndexed: v,
        } = e,
        C = (0, h.UX)({ location: "SearchHeader" }),
        E = (0, p.xd)({
            isXDMSearch: t.type === f.aib.DMS,
            location: "SearchHeader",
        }),
        S = (0, s.e7)([u.Z], () => {
            let e = (0, d.Tm)(t);
            return u.Z.getSearchResultsQueryString(e);
        }),
        Z = i.useMemo(() => {
            if (t.type === f.aib.DMS && C) {
                var e, n;
                let t = (0, d.kG)(null != S ? S : ""),
                    r = null != (n = null == (e = (0, d.$G)(t).channel_id) ? void 0 : e.length) ? n : 0;
                return r > 0 ? g.intl.format(g.t.A2dqWF, { filterCount: r }) : g.intl.string(g.t.tc619f);
            }
            return null;
        }, [C, t.type, S]),
        I = i.useMemo(
            () => [
                {
                    label: g.intl.string(g.t.CbaapK),
                    value: f.QIO.NEWEST,
                },
                {
                    label: g.intl.string(g.t.OukXZm),
                    value: f.QIO.OLDEST,
                },
                {
                    label: g.intl.string(g.t["q8gB5+"]),
                    value: f.QIO.MOST_RELEVANT,
                },
            ],
            [],
        ),
        P = i.useCallback(() => {
            (0, o.ZDy)(async () => {
                let { default: e } = await n.e("37979").then(n.bind(n, 238088));
                return (n) => (0, r.jsx)(e, y(b({}, n), { searchContext: t }));
            });
        }, [t]);
    return (0, r.jsxs)("header", {
        className: a()(m.searchHeader, { [m.searchHeaderWithSubtitle]: null != Z }),
        children: [
            (0, r.jsx)("div", {
                className: m.totalResults,
                role: "status",
                children: (0, r.jsx)(j, {
                    totalResults: x,
                    subtitle: Z,
                    isIndexing: _,
                    isSearching: O,
                    documentsIndexed: v,
                }),
            }),
            E
                ? (0, r.jsxs)("div", {
                      className: m.searchModeAndFiltersContainer,
                      children: [
                          (0, r.jsx)(o.q4e, {
                              options: I,
                              value: l,
                              onChange: c,
                              look: o.qQH.CUSTOM,
                              className: m.searchModeSelect,
                              popoutWidth: 130,
                          }),
                          (0, r.jsx)(o.zxk, {
                              variant: "secondary",
                              onClick: P,
                              text: g.intl.string(g.t.UdhTtr),
                              icon: o.gXV,
                              size: "sm",
                          }),
                      ],
                  })
                : (0, r.jsxs)(o.njP, {
                      orientation: "horizontal",
                      className: m.searchHeaderTabList,
                      selectedItem: l,
                      onItemSelect: c,
                      children: [
                          (0, r.jsx)(o.njP.Item, {
                              className: m.searchHeaderTab,
                              id: f.QIO.NEWEST,
                              children: g.intl.string(g.t.rLjqbW),
                          }),
                          (0, r.jsx)(o.njP.Item, {
                              className: m.searchHeaderTab,
                              id: f.QIO.OLDEST,
                              children: g.intl.string(g.t.a1BaUl),
                          }),
                          (0, r.jsx)(o.njP.Item, {
                              className: m.searchHeaderTab,
                              id: f.QIO.MOST_RELEVANT,
                              children: g.intl.string(g.t.FtR97u),
                          }),
                      ],
                  }),
        ],
    });
}
function j(e) {
    let { totalResults: t, subtitle: n, isSearching: i, isIndexing: l, documentsIndexed: a } = e;
    return l
        ? (0, r.jsx)(O, { documentsIndexed: a })
        : i
          ? (0, r.jsx)(v, {})
          : (0, r.jsx)(C, {
                totalResults: t,
                subtitle: n,
            });
}
function _() {
    return (0, r.jsx)("div", {
        className: m.spinnerWrapper,
        children: (0, r.jsx)(o.$jN, {
            type: o.$jN.Type.SPINNING_CIRCLE,
            className: m.spinner,
            itemClassName: m.spinnerPath,
        }),
    });
}
function O(e) {
    let { documentsIndexed: t } = e;
    return (0, r.jsx)(o.ua7, {
        text: g.intl.formatToPlainString(g.t["4Y3O+P"], { count: t }),
        children: (e) =>
            (0, r.jsxs)(
                "div",
                y(b({ className: m.totalResultsWrapper }, e), {
                    children: [
                        (0, r.jsx)(o.Text, {
                            variant: "text-md/medium",
                            color: "text-muted",
                            children: (0, r.jsx)(o.eee, {
                                className: m.helpdeskLink,
                                href: c.Z.getArticleURL(f.BhN.SEARCH_INDEXING),
                                children: g.intl.string(g.t["G3EA+/"]),
                            }),
                        }),
                        (0, r.jsx)(_, {}),
                    ],
                }),
            ),
    });
}
function v() {
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(o.Text, {
                variant: "text-md/medium",
                color: "header-secondary",
                children: g.intl.string(g.t.uixzLS),
            }),
            (0, r.jsx)(_, {}),
        ],
    });
}
function C(e) {
    let { totalResults: t, subtitle: n } = e,
        l = i.useMemo(() => t.toLocaleString(), [t]),
        a = (0, r.jsx)(o.Text, {
            variant: "text-md/medium",
            color: "header-primary",
            children: g.intl.format(g.t.ZGVL3t, { count: l }),
        });
    return null != n
        ? (0, r.jsxs)("div", {
              className: m.totalResultsWithSubtitle,
              children: [
                  a,
                  (0, r.jsx)(o.Text, {
                      variant: "text-xs/medium",
                      color: "text-secondary",
                      children: n,
                  }),
              ],
          })
        : a;
}
