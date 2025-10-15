n.d(t, { Z: () => E }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    s = n(704215),
    o = n(907862),
    c = n(28664),
    d = n(481060),
    u = n(426032),
    h = n(695346),
    p = n(63063),
    f = n(607802),
    g = n(945577),
    m = n(28964),
    b = n(465524),
    y = n(611004),
    _ = n(770092),
    j = n(125085),
    O = n(981631),
    x = n(921944),
    v = n(388032),
    C = n(865239);
function I(e) {
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
function S(e, t) {
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
function E(e) {
    let {
            searchContext: t,
            searchMode: l,
            onSearchModeChange: s,
            totalResults: o,
            isIndexing: c,
            isSearching: u,
            documentsIndexed: h,
            selectedChannelId: p,
        } = e,
        y = (0, m.nP)({ location: "SearchHeader" }),
        j = (0, m.KS)({ location: "SearchHeader" }),
        x = y || j,
        E = (0, _.I)(t),
        { totalFilters: P } = (0, b.p4)(E, t),
        T = i.useMemo(() => {
            if (t.type === O.aib.DMS) {
                var e, n;
                let t = null != (n = null == (e = (0, f.$G)(E).channel_id) ? void 0 : e.length) ? n : 0;
                return t > 0 ? v.intl.format(v.t.A2dqWG, { filterCount: t }) : v.intl.string(v.t.tc619d);
            }
            return null;
        }, [t.type, E]),
        N = i.useCallback(() => {
            (0, d.ZDy)(async () => {
                let { default: e } = await Promise.all([n.e("37979"), n.e("57390")]).then(n.bind(n, 238088));
                return (n) => (0, r.jsx)(e, S(I({}, n), { searchContext: t }));
            });
        }, [t]),
        R = i.useMemo(() => (P > 0 ? v.intl.format(v.t.uaR4sI, { filterCount: P }) : v.intl.string(v.t.UdhTtk)), [P]),
        D = (0, g.u5)({ location: "SearchHeader" }),
        L = t.type === O.aib.DMS || t.type === O.aib.CHANNEL,
        M = i.useMemo(
            () =>
                x && D
                    ? (0, r.jsxs)("div", {
                          className: C.searchModeAndFiltersContainer,
                          children: [
                              (0, r.jsx)(d.Button, {
                                  variant: "secondary",
                                  onClick: N,
                                  text: R,
                                  icon: d.gXV,
                                  size: "sm",
                              }),
                              (0, r.jsx)(A, {
                                  searchMode: l,
                                  onSearchModeChange: s,
                              }),
                              L &&
                                  (0, r.jsx)(w, {
                                      searchContext: t,
                                      selectedChannelId: p,
                                      isSearching: u,
                                  }),
                          ],
                      })
                    : x
                      ? (0, r.jsxs)("div", {
                            className: C.searchModeAndFiltersContainer,
                            children: [
                                (0, r.jsx)(d.Button, {
                                    variant: "secondary",
                                    onClick: N,
                                    text: R,
                                    icon: d.gXV,
                                    size: "sm",
                                }),
                                (0, r.jsx)(A, {
                                    searchMode: l,
                                    onSearchModeChange: s,
                                }),
                            ],
                        })
                      : D
                        ? (0, r.jsxs)("div", {
                              className: C.searchModeAndFiltersContainer,
                              children: [
                                  (0, r.jsx)(A, {
                                      searchMode: l,
                                      onSearchModeChange: s,
                                  }),
                                  L &&
                                      (0, r.jsx)(w, {
                                          searchContext: t,
                                          selectedChannelId: p,
                                          isSearching: u,
                                      }),
                              ],
                          })
                        : (0, r.jsxs)(d.njP, {
                              orientation: "horizontal",
                              className: C.searchHeaderTabList,
                              selectedItem: l,
                              onItemSelect: s,
                              children: [
                                  (0, r.jsx)(d.njP.Item, {
                                      className: C.searchHeaderTab,
                                      id: O.QIO.NEWEST,
                                      children: v.intl.string(v.t.rLjqbS),
                                  }),
                                  (0, r.jsx)(d.njP.Item, {
                                      className: C.searchHeaderTab,
                                      id: O.QIO.OLDEST,
                                      children: v.intl.string(v.t.a1BaUr),
                                  }),
                                  (0, r.jsx)(d.njP.Item, {
                                      className: C.searchHeaderTab,
                                      id: O.QIO.MOST_RELEVANT,
                                      children: v.intl.string(v.t.FtR97k),
                                  }),
                              ],
                          }),
            [R, N, x, u, D, L, s, t, l, p],
        );
    return (0, r.jsxs)("header", {
        className: a()(C.searchHeader, { [C.searchHeaderWithSubtitle]: null != T }),
        children: [
            (0, r.jsx)("div", {
                className: C.totalResults,
                role: "status",
                children: (0, r.jsx)(Z, {
                    totalResults: o,
                    subtitle: T,
                    isIndexing: c,
                    isSearching: u,
                    documentsIndexed: h,
                }),
            }),
            M,
        ],
    });
}
function Z(e) {
    let { totalResults: t, subtitle: n, isSearching: i, isIndexing: l, documentsIndexed: a } = e;
    return l
        ? (0, r.jsx)(T, { documentsIndexed: a })
        : i
          ? (0, r.jsx)(N, {})
          : (0, r.jsx)(R, {
                totalResults: t,
                subtitle: n,
            });
}
function P() {
    return (0, r.jsx)("div", {
        className: C.spinnerWrapper,
        children: (0, r.jsx)(d.$jN, {
            type: d.$jN.Type.SPINNING_CIRCLE,
            className: C.spinner,
            itemClassName: C.spinnerPath,
        }),
    });
}
function T(e) {
    let { documentsIndexed: t } = e;
    return (0, r.jsx)(c.u, {
        asContainer: !0,
        text: v.intl.formatToPlainString(v.t["4Y3O+O"], { count: t }),
        children: (0, r.jsxs)("div", {
            className: C.totalResultsWrapper,
            children: [
                (0, r.jsx)(d.Text, {
                    variant: "text-md/medium",
                    color: "text-muted",
                    children: (0, r.jsx)(d.Anchor, {
                        className: C.helpdeskLink,
                        href: p.Z.getArticleURL(O.BhN.SEARCH_INDEXING),
                        children: v.intl.string(v.t["G3EA+4"]),
                    }),
                }),
                (0, r.jsx)(P, {}),
            ],
        }),
    });
}
function N() {
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(d.Text, {
                variant: "text-md/medium",
                color: "header-secondary",
                children: v.intl.string(v.t.uixzLf),
            }),
            (0, r.jsx)(P, {}),
        ],
    });
}
function R(e) {
    let { totalResults: t, subtitle: n } = e,
        l = i.useMemo(() => t.toLocaleString(), [t]),
        a = (0, r.jsx)(d.Text, {
            variant: "text-md/medium",
            color: "header-primary",
            children: v.intl.format(v.t.ZGVL3g, { count: l }),
        });
    return null != n
        ? (0, r.jsxs)("div", {
              className: C.totalResultsWithSubtitle,
              children: [
                  a,
                  (0, r.jsx)(d.Text, {
                      variant: "text-xs/medium",
                      color: "text-secondary",
                      children: n,
                  }),
              ],
          })
        : a;
}
function w(e) {
    var t;
    let { searchContext: n, selectedChannelId: l, isSearching: a } = e,
        [c, p] = i.useState(!1),
        g = i.useRef(null),
        m = null != (t = h.rR.useSetting()) ? t : j.K,
        b = i.useCallback(
            (e) => {
                if (m !== e) {
                    if (e) {
                        let e = { type: O.aib.DMS };
                        y.Z.transitionQueryStateToSearchContext(n, e, (t) => {
                            y.Z.fetchCrossDMMessages({
                                searchContext: e,
                                selectedPageIndex: 0,
                                queryString: t,
                            });
                        });
                    } else {
                        let e = {
                            type: O.aib.CHANNEL,
                            channelId: l,
                        };
                        y.Z.transitionQueryStateToSearchContext(n, e, (t) => {
                            let n = (0, f.kG)(t),
                                r = (0, f.$G)(n);
                            y.Z.fetchMessages({
                                searchContext: e,
                                queryString: t,
                                searchQuery: r,
                                offset: 0,
                            });
                        });
                    }
                    h.rR.updateSetting(e);
                }
            },
            [n, l, m],
        ),
        _ = i.useMemo(() => (a ? [] : [s.z.CROSS_DM_SEARCH_SETTING_EDUCATION_POPOVER]), [a]),
        C = i.useMemo(() => ({ align: "end" }), []),
        [E, Z] = (0, u.US)(_),
        P = i.useCallback(
            (e) => {
                Z("user:explicit" === e ? x.L.USER_DISMISS : x.L.AUTO_DISMISS);
            },
            [Z],
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(d.yRy, {
                targetElementRef: g,
                shouldShow: c,
                animation: d.yRy.Animation.NONE,
                position: "bottom",
                align: "right",
                onRequestClose: () => p(!1),
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, r.jsx)(d.v2r, {
                        navId: "search-settings-cog",
                        onClose: t,
                        "aria-label": v.intl.string(v.t.fb59v0),
                        onSelect: () => p(!1),
                        children: (0, r.jsxs)(
                            d.kSQ,
                            {
                                label: v.intl.string(v.t["/tMwrA"]),
                                children: [
                                    (0, r.jsx)(d.k5B, {
                                        id: "xdm-search-disabled",
                                        group: "xdm-search-items",
                                        label: v.intl.string(v.t.jRkYAh),
                                        checked: !m,
                                        action: () => b(!1),
                                    }),
                                    (0, r.jsx)(d.k5B, {
                                        id: "xdm-search-enabled",
                                        group: "xdm-search-items",
                                        label: v.intl.string(v.t["lWpJ/t"]),
                                        checked: m,
                                        action: () => b(!0),
                                    }),
                                ],
                            },
                            "xdm-search-items",
                        ),
                    });
                },
                children: (e) =>
                    (0, r.jsx)(
                        d.hU,
                        S(I({}, e), {
                            buttonRef: g,
                            variant: "secondary",
                            icon: d.ewm,
                            onClick: () => {
                                p((e) => !e);
                            },
                            "aria-label": v.intl.string(v.t["3D5yo/"]),
                            size: "sm",
                        }),
                    ),
            }),
            (0, r.jsx)(o.J2, {
                targetElementRef: g,
                shouldShow: E === s.z.CROSS_DM_SEARCH_SETTING_EDUCATION_POPOVER,
                onRequestClose: P,
                title: v.intl.string(v.t.qha2Zv),
                body: v.intl.string(v.t.IQWEoV),
                caretConfig: C,
            }),
        ],
    });
}
function A(e) {
    let { searchMode: t, onSearchModeChange: n } = e,
        l = i.useRef(null),
        [a, s] = i.useState(!1),
        o = i.useMemo(
            () => [
                {
                    label: v.intl.string(v.t.CbaapP),
                    value: O.QIO.NEWEST,
                },
                {
                    label: v.intl.string(v.t.OukXZj),
                    value: O.QIO.OLDEST,
                },
                {
                    label: v.intl.string(v.t.q8gB52),
                    value: O.QIO.MOST_RELEVANT,
                },
            ],
            [],
        );
    return (0, r.jsx)(d.yRy, {
        targetElementRef: l,
        shouldShow: a,
        animation: d.yRy.Animation.NONE,
        position: "bottom",
        align: "right",
        onRequestClose: () => s(!1),
        renderPopout: (e) => {
            let { closePopout: i } = e;
            return (0, r.jsx)(d.v2r, {
                navId: "search-result-sort-menu",
                onClose: i,
                "aria-label": v.intl.string(v.t.utp2hS),
                onSelect: () => s(!1),
                children: (0, r.jsx)(d.kSQ, {
                    children: o.map((e) => {
                        let { label: i, value: l } = e;
                        return (0, r.jsx)(
                            d.k5B,
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
                d.hU,
                S(I({}, e), {
                    buttonRef: l,
                    variant: "secondary",
                    icon: d.uVW,
                    onClick: () => {
                        s((e) => !e);
                    },
                    "aria-label": v.intl.string(v.t.XvNMNk),
                    size: "sm",
                }),
            ),
    });
}
