n.d(t, { Z: () => _ }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    s = n(28664),
    o = n(481060),
    c = n(63063),
    d = n(607802),
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
            onSearchModeChange: s,
            totalResults: c,
            isIndexing: _,
            isSearching: O,
            documentsIndexed: x,
        } = e,
        v = (0, u.nP)({ location: "SearchHeader" }),
        C = (0, u.KS)({ location: "SearchHeader" }),
        E = (0, h.I)(t),
        { totalFilters: S } = (0, p.p4)(E, t),
        Z = i.useMemo(() => {
            if (t.type === f.aib.DMS) {
                var e, n;
                let t = null != (n = null == (e = (0, d.$G)(E).channel_id) ? void 0 : e.length) ? n : 0;
                return t > 0 ? g.intl.format(g.t.A2dqWF, { filterCount: t }) : g.intl.string(g.t.tc619f);
            }
            return null;
        }, [t.type, E]),
        T = i.useCallback(() => {
            (0, o.ZDy)(async () => {
                let { default: e } = await Promise.all([n.e("37979"), n.e("57390")]).then(n.bind(n, 238088));
                return (n) => (0, r.jsx)(e, y(b({}, n), { searchContext: t }));
            });
        }, [t]),
        P = i.useMemo(() => (S > 0 ? g.intl.format(g.t.uaR4sL, { filterCount: S }) : g.intl.string(g.t.UdhTtr)), [S]);
    return (0, r.jsxs)("header", {
        className: a()(m.searchHeader, { [m.searchHeaderWithSubtitle]: null != Z }),
        children: [
            (0, r.jsx)("div", {
                className: m.totalResults,
                role: "status",
                children: (0, r.jsx)(j, {
                    totalResults: c,
                    subtitle: Z,
                    isIndexing: _,
                    isSearching: O,
                    documentsIndexed: x,
                }),
            }),
            v || C
                ? (0, r.jsxs)("div", {
                      className: m.searchModeAndFiltersContainer,
                      children: [
                          (0, r.jsx)(o.zxk, {
                              variant: "secondary",
                              onClick: T,
                              text: P,
                              icon: o.gXV,
                              size: "sm",
                          }),
                          (0, r.jsx)(I, {
                              searchMode: l,
                              onSearchModeChange: s,
                          }),
                      ],
                  })
                : (0, r.jsxs)(o.njP, {
                      orientation: "horizontal",
                      className: m.searchHeaderTabList,
                      selectedItem: l,
                      onItemSelect: s,
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
        ? (0, r.jsx)(x, { documentsIndexed: a })
        : i
          ? (0, r.jsx)(v, {})
          : (0, r.jsx)(C, {
                totalResults: t,
                subtitle: n,
            });
}
function O() {
    return (0, r.jsx)("div", {
        className: m.spinnerWrapper,
        children: (0, r.jsx)(o.$jN, {
            type: o.$jN.Type.SPINNING_CIRCLE,
            className: m.spinner,
            itemClassName: m.spinnerPath,
        }),
    });
}
function x(e) {
    let { documentsIndexed: t } = e;
    return (0, r.jsx)(s.u, {
        asContainer: !0,
        text: g.intl.formatToPlainString(g.t["4Y3O+P"], { count: t }),
        children: (0, r.jsxs)("div", {
            className: m.totalResultsWrapper,
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
                (0, r.jsx)(O, {}),
            ],
        }),
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
            (0, r.jsx)(O, {}),
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
function I(e) {
    let { searchMode: t, onSearchModeChange: n } = e,
        l = i.useRef(null),
        [a, s] = i.useState(!1),
        c = i.useMemo(
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
        );
    return (0, r.jsx)(o.yRy, {
        targetElementRef: l,
        shouldShow: a,
        animation: o.yRy.Animation.NONE,
        position: "bottom",
        align: "right",
        onRequestClose: () => s(!1),
        renderPopout: (e) => {
            let { closePopout: i } = e;
            return (0, r.jsx)(o.v2r, {
                navId: "search-result-sort-menu",
                onClose: i,
                "aria-label": g.intl.string(g.t.utp2hY),
                onSelect: () => s(!1),
                children: (0, r.jsx)(o.kSQ, {
                    children: c.map((e) => {
                        let { label: i, value: l } = e;
                        return (0, r.jsx)(
                            o.k5B,
                            {
                                group: "sort-by",
                                id: "sort-by-option-".concat(l),
                                label: i,
                                action: () => n(l),
                                checked: t === l,
                            },
                            l,
                        );
                    }),
                }),
            });
        },
        children: (e) =>
            (0, r.jsx)(
                o.hU,
                y(b({}, e), {
                    buttonRef: l,
                    variant: "secondary",
                    icon: o.uVW,
                    onClick: () => {
                        s((e) => !e);
                    },
                    "aria-label": g.intl.string(g.t.XvNMNj),
                    size: "sm",
                }),
            ),
    });
}
