n.d(t, { Z: () => _ });
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    s = n(481060),
    o = n(63063),
    c = n(607802),
    d = n(945577),
    u = n(28964),
    p = n(465524),
    h = n(770092),
    f = n(981631),
    g = n(388032),
    m = n(865239);
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
function _(e) {
    let {
            searchContext: t,
            searchMode: l,
            onSearchModeChange: o,
            totalResults: _,
            isIndexing: j,
            isSearching: x,
            documentsIndexed: v,
        } = e,
        C = (0, d.UX)({ location: "SearchHeader" }),
        I = (0, u.nP)({ location: "SearchHeader" }),
        E = (0, u.KS)({ location: "SearchHeader" }),
        S = (0, h.I)(t),
        { totalFilters: Z } = (0, p.p4)(S, t),
        P = i.useMemo(() => {
            if (t.type === f.aib.DMS && C) {
                var e, n;
                let t = null != (n = null == (e = (0, c.$G)(S).channel_id) ? void 0 : e.length) ? n : 0;
                return t > 0 ? g.intl.format(g.t.A2dqWF, { filterCount: t }) : g.intl.string(g.t.tc619f);
            }
            return null;
        }, [C, t.type, S]),
        T = i.useMemo(
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
        N = i.useCallback(() => {
            (0, s.ZDy)(async () => {
                let { default: e } = await n.e("16757").then(n.bind(n, 238088));
                return (n) => (0, r.jsx)(e, y(b({}, n), { searchContext: t }));
            });
        }, [t]),
        R = i.useMemo(() => (Z > 0 ? g.intl.format(g.t.uaR4sL, { filterCount: Z }) : g.intl.string(g.t.UdhTtr)), [Z]);
    return (0, r.jsxs)("header", {
        className: a()(m.searchHeader, { [m.searchHeaderWithSubtitle]: null != P }),
        children: [
            (0, r.jsx)("div", {
                className: m.totalResults,
                role: "status",
                children: (0, r.jsx)(O, {
                    totalResults: _,
                    subtitle: P,
                    isIndexing: j,
                    isSearching: x,
                    documentsIndexed: v,
                }),
            }),
            I || E
                ? (0, r.jsxs)("div", {
                      className: m.searchModeAndFiltersContainer,
                      children: [
                          (0, r.jsx)(s.q4e, {
                              options: T,
                              value: l,
                              onChange: o,
                              popoutWidth: 130,
                              size: "sm",
                          }),
                          (0, r.jsx)(s.zxk, {
                              variant: "secondary",
                              onClick: N,
                              text: R,
                              icon: s.gXV,
                              size: "sm",
                          }),
                      ],
                  })
                : (0, r.jsxs)(s.njP, {
                      orientation: "horizontal",
                      className: m.searchHeaderTabList,
                      selectedItem: l,
                      onItemSelect: o,
                      children: [
                          (0, r.jsx)(s.njP.Item, {
                              className: m.searchHeaderTab,
                              id: f.QIO.NEWEST,
                              children: g.intl.string(g.t.rLjqbW),
                          }),
                          (0, r.jsx)(s.njP.Item, {
                              className: m.searchHeaderTab,
                              id: f.QIO.OLDEST,
                              children: g.intl.string(g.t.a1BaUl),
                          }),
                          (0, r.jsx)(s.njP.Item, {
                              className: m.searchHeaderTab,
                              id: f.QIO.MOST_RELEVANT,
                              children: g.intl.string(g.t.FtR97u),
                          }),
                      ],
                  }),
        ],
    });
}
function O(e) {
    let { totalResults: t, subtitle: n, isSearching: i, isIndexing: l, documentsIndexed: a } = e;
    return l
        ? (0, r.jsx)(x, { documentsIndexed: a })
        : i
          ? (0, r.jsx)(v, {})
          : (0, r.jsx)(C, {
                totalResults: t,
                subtitle: n,
            });
}
function j() {
    return (0, r.jsx)("div", {
        className: m.spinnerWrapper,
        children: (0, r.jsx)(s.$jN, {
            type: s.$jN.Type.SPINNING_CIRCLE,
            className: m.spinner,
            itemClassName: m.spinnerPath,
        }),
    });
}
function x(e) {
    let { documentsIndexed: t } = e;
    return (0, r.jsx)(s.ua7, {
        text: g.intl.formatToPlainString(g.t["4Y3O+P"], { count: t }),
        children: (e) =>
            (0, r.jsxs)(
                "div",
                y(b({ className: m.totalResultsWrapper }, e), {
                    children: [
                        (0, r.jsx)(s.Text, {
                            variant: "text-md/medium",
                            color: "text-muted",
                            children: (0, r.jsx)(s.eee, {
                                className: m.helpdeskLink,
                                href: o.Z.getArticleURL(f.BhN.SEARCH_INDEXING),
                                children: g.intl.string(g.t["G3EA+/"]),
                            }),
                        }),
                        (0, r.jsx)(j, {}),
                    ],
                }),
            ),
    });
}
function v() {
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(s.Text, {
                variant: "text-md/medium",
                color: "header-secondary",
                children: g.intl.string(g.t.uixzLS),
            }),
            (0, r.jsx)(j, {}),
        ],
    });
}
function C(e) {
    let { totalResults: t, subtitle: n } = e,
        l = i.useMemo(() => t.toLocaleString(), [t]),
        a = (0, r.jsx)(s.Text, {
            variant: "text-md/medium",
            color: "header-primary",
            children: g.intl.format(g.t.ZGVL3t, { count: l }),
        });
    return null != n
        ? (0, r.jsxs)("div", {
              className: m.totalResultsWithSubtitle,
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
