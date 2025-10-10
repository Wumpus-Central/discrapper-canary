n.d(t, { Z: () => v }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    s = n(28664),
    o = n(481060),
    c = n(695346),
    d = n(63063),
    u = n(607802),
    p = n(945577),
    h = n(28964),
    f = n(465524),
    g = n(611004),
    m = n(770092),
    b = n(125085),
    y = n(981631),
    _ = n(388032),
    j = n(865239);
function x(e) {
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
function O(e, t) {
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
function v(e) {
    let {
            searchContext: t,
            searchMode: l,
            onSearchModeChange: s,
            totalResults: c,
            isIndexing: d,
            isSearching: g,
            documentsIndexed: b,
            selectedChannelId: v,
        } = e,
        I = (0, h.nP)({ location: "SearchHeader" }),
        E = (0, h.KS)({ location: "SearchHeader" }),
        S = I || E,
        Z = (0, m.I)(t),
        { totalFilters: N } = (0, f.p4)(Z, t),
        R = i.useMemo(() => {
            if (t.type === y.aib.DMS) {
                var e, n;
                let t = null != (n = null == (e = (0, u.$G)(Z).channel_id) ? void 0 : e.length) ? n : 0;
                return t > 0 ? _.intl.format(_.t.A2dqWF, { filterCount: t }) : _.intl.string(_.t.tc619f);
            }
            return null;
        }, [t.type, Z]),
        w = i.useCallback(() => {
            (0, o.ZDy)(async () => {
                let { default: e } = await Promise.all([n.e("37979"), n.e("57390")]).then(n.bind(n, 238088));
                return (n) => (0, r.jsx)(e, O(x({}, n), { searchContext: t }));
            });
        }, [t]),
        A = i.useMemo(() => (N > 0 ? _.intl.format(_.t.uaR4sL, { filterCount: N }) : _.intl.string(_.t.UdhTtr)), [N]),
        D = (0, p.u5)({ location: "SearchHeader" }),
        L = t.type === y.aib.DMS || t.type === y.aib.CHANNEL,
        M = i.useMemo(
            () =>
                S && D
                    ? (0, r.jsxs)("div", {
                          className: j.searchModeAndFiltersContainer,
                          children: [
                              (0, r.jsx)(o.zxk, {
                                  variant: "secondary",
                                  onClick: w,
                                  text: A,
                                  icon: o.gXV,
                                  size: "sm",
                              }),
                              (0, r.jsx)(P, {
                                  searchMode: l,
                                  onSearchModeChange: s,
                              }),
                              L &&
                                  (0, r.jsx)(T, {
                                      searchContext: t,
                                      selectedChannelId: v,
                                  }),
                          ],
                      })
                    : S
                      ? (0, r.jsxs)("div", {
                            className: j.searchModeAndFiltersContainer,
                            children: [
                                (0, r.jsx)(o.zxk, {
                                    variant: "secondary",
                                    onClick: w,
                                    text: A,
                                    icon: o.gXV,
                                    size: "sm",
                                }),
                                (0, r.jsx)(P, {
                                    searchMode: l,
                                    onSearchModeChange: s,
                                }),
                            ],
                        })
                      : D
                        ? (0, r.jsxs)("div", {
                              className: j.searchModeAndFiltersContainer,
                              children: [
                                  (0, r.jsx)(P, {
                                      searchMode: l,
                                      onSearchModeChange: s,
                                  }),
                                  L &&
                                      (0, r.jsx)(T, {
                                          searchContext: t,
                                          selectedChannelId: v,
                                      }),
                              ],
                          })
                        : (0, r.jsxs)(o.njP, {
                              orientation: "horizontal",
                              className: j.searchHeaderTabList,
                              selectedItem: l,
                              onItemSelect: s,
                              children: [
                                  (0, r.jsx)(o.njP.Item, {
                                      className: j.searchHeaderTab,
                                      id: y.QIO.NEWEST,
                                      children: _.intl.string(_.t.rLjqbW),
                                  }),
                                  (0, r.jsx)(o.njP.Item, {
                                      className: j.searchHeaderTab,
                                      id: y.QIO.OLDEST,
                                      children: _.intl.string(_.t.a1BaUl),
                                  }),
                                  (0, r.jsx)(o.njP.Item, {
                                      className: j.searchHeaderTab,
                                      id: y.QIO.MOST_RELEVANT,
                                      children: _.intl.string(_.t.FtR97u),
                                  }),
                              ],
                          }),
            [A, w, S, D, L, s, t, l, v],
        );
    return (0, r.jsxs)("header", {
        className: a()(j.searchHeader, { [j.searchHeaderWithSubtitle]: null != R }),
        children: [
            (0, r.jsx)("div", {
                className: j.totalResults,
                role: "status",
                children: (0, r.jsx)(C, {
                    totalResults: c,
                    subtitle: R,
                    isIndexing: d,
                    isSearching: g,
                    documentsIndexed: b,
                }),
            }),
            M,
        ],
    });
}
function C(e) {
    let { totalResults: t, subtitle: n, isSearching: i, isIndexing: l, documentsIndexed: a } = e;
    return l
        ? (0, r.jsx)(E, { documentsIndexed: a })
        : i
          ? (0, r.jsx)(S, {})
          : (0, r.jsx)(Z, {
                totalResults: t,
                subtitle: n,
            });
}
function I() {
    return (0, r.jsx)("div", {
        className: j.spinnerWrapper,
        children: (0, r.jsx)(o.$jN, {
            type: o.$jN.Type.SPINNING_CIRCLE,
            className: j.spinner,
            itemClassName: j.spinnerPath,
        }),
    });
}
function E(e) {
    let { documentsIndexed: t } = e;
    return (0, r.jsx)(s.u, {
        asContainer: !0,
        text: _.intl.formatToPlainString(_.t["4Y3O+P"], { count: t }),
        children: (0, r.jsxs)("div", {
            className: j.totalResultsWrapper,
            children: [
                (0, r.jsx)(o.Text, {
                    variant: "text-md/medium",
                    color: "text-muted",
                    children: (0, r.jsx)(o.eee, {
                        className: j.helpdeskLink,
                        href: d.Z.getArticleURL(y.BhN.SEARCH_INDEXING),
                        children: _.intl.string(_.t["G3EA+/"]),
                    }),
                }),
                (0, r.jsx)(I, {}),
            ],
        }),
    });
}
function S() {
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(o.Text, {
                variant: "text-md/medium",
                color: "header-secondary",
                children: _.intl.string(_.t.uixzLS),
            }),
            (0, r.jsx)(I, {}),
        ],
    });
}
function Z(e) {
    let { totalResults: t, subtitle: n } = e,
        l = i.useMemo(() => t.toLocaleString(), [t]),
        a = (0, r.jsx)(o.Text, {
            variant: "text-md/medium",
            color: "header-primary",
            children: _.intl.format(_.t.ZGVL3t, { count: l }),
        });
    return null != n
        ? (0, r.jsxs)("div", {
              className: j.totalResultsWithSubtitle,
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
function T(e) {
    var t;
    let { searchContext: n, selectedChannelId: l } = e,
        [a, s] = i.useState(!1),
        d = i.useRef(null),
        p = null != (t = c.rR.useSetting()) ? t : b.K,
        h = i.useCallback(
            (e) => {
                if (e) {
                    let e = { type: y.aib.DMS };
                    g.Z.transitionQueryStateToSearchContext(n, e, (t) => {
                        g.Z.fetchCrossDMMessages({
                            searchContext: e,
                            selectedPageIndex: 0,
                            queryString: t,
                        });
                    });
                } else {
                    let e = {
                        type: y.aib.CHANNEL,
                        channelId: l,
                    };
                    g.Z.transitionQueryStateToSearchContext(n, e, (t) => {
                        let n = (0, u.kG)(t),
                            r = (0, u.$G)(n);
                        g.Z.fetchMessages({
                            searchContext: e,
                            queryString: t,
                            searchQuery: r,
                            offset: 0,
                        });
                    });
                }
                c.rR.updateSetting(e);
            },
            [n, l],
        );
    return (0, r.jsx)(o.yRy, {
        targetElementRef: d,
        shouldShow: a,
        animation: o.yRy.Animation.NONE,
        position: "bottom",
        align: "right",
        onRequestClose: () => s(!1),
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, r.jsx)(o.v2r, {
                navId: "search-settings-cog",
                onClose: t,
                "aria-label": _.intl.string(_.t.fb59v7),
                onSelect: () => s(!1),
                children: (0, r.jsxs)(
                    o.kSQ,
                    {
                        label: _.intl.string(_.t["/tMwrK"]),
                        children: [
                            (0, r.jsx)(o.k5B, {
                                id: "xdm-search-disabled",
                                group: "xdm-search-items",
                                label: _.intl.string(_.t.jRkYAg),
                                checked: !p,
                                action: () => h(!1),
                            }),
                            (0, r.jsx)(o.k5B, {
                                id: "xdm-search-enabled",
                                group: "xdm-search-items",
                                label: _.intl.string(_.t["lWpJ/v"]),
                                checked: p,
                                action: () => h(!0),
                            }),
                        ],
                    },
                    "xdm-search-items",
                ),
            });
        },
        children: (e) =>
            (0, r.jsx)(
                o.hU,
                O(x({}, e), {
                    buttonRef: d,
                    variant: "secondary",
                    icon: o.ewm,
                    onClick: () => {
                        s((e) => !e);
                    },
                    "aria-label": _.intl.string(_.t["3D5yo6"]),
                    size: "sm",
                }),
            ),
    });
}
function P(e) {
    let { searchMode: t, onSearchModeChange: n } = e,
        l = i.useRef(null),
        [a, s] = i.useState(!1),
        c = i.useMemo(
            () => [
                {
                    label: _.intl.string(_.t.CbaapK),
                    value: y.QIO.NEWEST,
                },
                {
                    label: _.intl.string(_.t.OukXZm),
                    value: y.QIO.OLDEST,
                },
                {
                    label: _.intl.string(_.t["q8gB5+"]),
                    value: y.QIO.MOST_RELEVANT,
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
                "aria-label": _.intl.string(_.t.utp2hY),
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
                O(x({}, e), {
                    buttonRef: l,
                    variant: "secondary",
                    icon: o.uVW,
                    onClick: () => {
                        s((e) => !e);
                    },
                    "aria-label": _.intl.string(_.t.XvNMNj),
                    size: "sm",
                }),
            ),
    });
}
