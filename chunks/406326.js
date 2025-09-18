n.d(t, { Z: () => _ });
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(481060),
    s = n(63063),
    c = n(607802),
    u = n(945577),
    d = n(28964),
    p = n(465524),
    h = n(770092),
    f = n(981631),
    m = n(388032),
    g = n(865239);
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
            onSearchModeChange: s,
            totalResults: _,
            isIndexing: v,
            isSearching: x,
            documentsIndexed: O,
        } = e,
        j = (0, u.UX)({ location: "SearchHeader" }),
        E = (0, d.nP)({
            isXDMSearch: t.type === f.aib.DMS,
            location: "SearchHeader",
        }),
        S = (0, d.KS)({
            isXDMSearch: t.type === f.aib.DMS,
            location: "SearchHeader",
        }),
        I = (0, h.I)(t),
        { totalFilters: P } = (0, p.p4)(I, t),
        Z = i.useMemo(() => {
            if (t.type === f.aib.DMS && j) {
                var e, n;
                let t = null != (n = null == (e = (0, c.$G)(I).channel_id) ? void 0 : e.length) ? n : 0;
                return t > 0 ? m.intl.format(m.t.A2dqWF, { filterCount: t }) : m.intl.string(m.t.tc619f);
            }
            return null;
        }, [j, t.type, I]),
        T = i.useMemo(
            () => [
                {
                    label: m.intl.string(m.t.CbaapK),
                    value: f.QIO.NEWEST,
                },
                {
                    label: m.intl.string(m.t.OukXZm),
                    value: f.QIO.OLDEST,
                },
                {
                    label: m.intl.string(m.t["q8gB5+"]),
                    value: f.QIO.MOST_RELEVANT,
                },
            ],
            [],
        ),
        N = i.useCallback(() => {
            (0, o.ZDy)(async () => {
                let { default: e } = await n.e("16757").then(n.bind(n, 238088));
                return (n) => (0, r.jsx)(e, y(b({}, n), { searchContext: t }));
            });
        }, [t]),
        A = i.useMemo(() => (P > 0 ? m.intl.format(m.t.uaR4sL, { filterCount: P }) : m.intl.string(m.t.UdhTtr)), [P]);
    return (0, r.jsxs)("header", {
        className: a()(g.searchHeader, { [g.searchHeaderWithSubtitle]: null != Z }),
        children: [
            (0, r.jsx)("div", {
                className: g.totalResults,
                role: "status",
                children: (0, r.jsx)(C, {
                    totalResults: _,
                    subtitle: Z,
                    isIndexing: v,
                    isSearching: x,
                    documentsIndexed: O,
                }),
            }),
            E || S
                ? (0, r.jsxs)("div", {
                      className: g.searchModeAndFiltersContainer,
                      children: [
                          (0, r.jsx)(o.q4e, {
                              options: T,
                              value: l,
                              onChange: s,
                              popoutWidth: 130,
                              size: "sm",
                          }),
                          (0, r.jsx)(o.zxk, {
                              variant: "secondary",
                              onClick: N,
                              text: A,
                              icon: o.gXV,
                              size: "sm",
                          }),
                      ],
                  })
                : (0, r.jsxs)(o.njP, {
                      orientation: "horizontal",
                      className: g.searchHeaderTabList,
                      selectedItem: l,
                      onItemSelect: s,
                      children: [
                          (0, r.jsx)(o.njP.Item, {
                              className: g.searchHeaderTab,
                              id: f.QIO.NEWEST,
                              children: m.intl.string(m.t.rLjqbW),
                          }),
                          (0, r.jsx)(o.njP.Item, {
                              className: g.searchHeaderTab,
                              id: f.QIO.OLDEST,
                              children: m.intl.string(m.t.a1BaUl),
                          }),
                          (0, r.jsx)(o.njP.Item, {
                              className: g.searchHeaderTab,
                              id: f.QIO.MOST_RELEVANT,
                              children: m.intl.string(m.t.FtR97u),
                          }),
                      ],
                  }),
        ],
    });
}
function C(e) {
    let { totalResults: t, subtitle: n, isSearching: i, isIndexing: l, documentsIndexed: a } = e;
    return l
        ? (0, r.jsx)(x, { documentsIndexed: a })
        : i
          ? (0, r.jsx)(O, {})
          : (0, r.jsx)(j, {
                totalResults: t,
                subtitle: n,
            });
}
function v() {
    return (0, r.jsx)("div", {
        className: g.spinnerWrapper,
        children: (0, r.jsx)(o.$jN, {
            type: o.$jN.Type.SPINNING_CIRCLE,
            className: g.spinner,
            itemClassName: g.spinnerPath,
        }),
    });
}
function x(e) {
    let { documentsIndexed: t } = e;
    return (0, r.jsx)(o.ua7, {
        text: m.intl.formatToPlainString(m.t["4Y3O+P"], { count: t }),
        children: (e) =>
            (0, r.jsxs)(
                "div",
                y(b({ className: g.totalResultsWrapper }, e), {
                    children: [
                        (0, r.jsx)(o.Text, {
                            variant: "text-md/medium",
                            color: "text-muted",
                            children: (0, r.jsx)(o.eee, {
                                className: g.helpdeskLink,
                                href: s.Z.getArticleURL(f.BhN.SEARCH_INDEXING),
                                children: m.intl.string(m.t["G3EA+/"]),
                            }),
                        }),
                        (0, r.jsx)(v, {}),
                    ],
                }),
            ),
    });
}
function O() {
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(o.Text, {
                variant: "text-md/medium",
                color: "header-secondary",
                children: m.intl.string(m.t.uixzLS),
            }),
            (0, r.jsx)(v, {}),
        ],
    });
}
function j(e) {
    let { totalResults: t, subtitle: n } = e,
        l = i.useMemo(() => t.toLocaleString(), [t]),
        a = (0, r.jsx)(o.Text, {
            variant: "text-md/medium",
            color: "header-primary",
            children: m.intl.format(m.t.ZGVL3t, { count: l }),
        });
    return null != n
        ? (0, r.jsxs)("div", {
              className: g.totalResultsWithSubtitle,
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
