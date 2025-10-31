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
    p = n(695346),
    h = n(63063),
    f = n(607802),
    g = n(945577),
    m = n(28964),
    b = n(465524),
    _ = n(611004),
    y = n(770092),
    x = n(125085),
    O = n(981631),
    j = n(921944),
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
            onSearchModeChange: o,
            totalResults: c,
            isIndexing: p,
            isSearching: h,
            documentsIndexed: _,
            selectedChannelId: x,
        } = e,
        E = (0, m.nP)({ location: "SearchHeader" }),
        P = (0, m.KS)({ location: "SearchHeader" }),
        T = E || P,
        N = (0, y.I)(t),
        { totalFilters: R } = (0, b.p4)(N, t),
        D = i.useMemo(() => {
            if (t.type === O.aib.DMS) {
                var e, n;
                let t = null != (n = null == (e = (0, f.$G)(N).channel_id) ? void 0 : e.length) ? n : 0;
                return t > 0 ? v.intl.format(v.t.A2dqWG, { filterCount: t }) : v.intl.string(v.t.tc619d);
            }
            return null;
        }, [t.type, N]),
        [L, M] = i.useState(null),
        k = i.useMemo(() => (h ? [] : [s.z.CROSS_DM_SEARCH_SETTING_EDUCATION_POPOVER]), [h]),
        [U, G] = (0, u.US)(k),
        H = U === s.z.CROSS_DM_SEARCH_SETTING_EDUCATION_POPOVER,
        F = i.useCallback(
            (e) => {
                null != e && H && G(j.L.USER_DISMISS), M(e);
            },
            [G, H],
        ),
        B = i.useCallback(
            (e) => {
                G("user:explicit" === e ? j.L.USER_DISMISS : j.L.AUTO_DISMISS);
            },
            [G],
        ),
        V = i.useCallback(() => {
            F(null),
                (0, d.ZDy)(async () => {
                    let { default: e } = await Promise.all([n.e("37979"), n.e("57390")]).then(n.bind(n, 238088));
                    return (n) => (0, r.jsx)(e, S(I({}, n), { searchContext: t }));
                });
        }, [t, F]),
        z = i.useMemo(() => (R > 0 ? v.intl.format(v.t.uaR4sI, { filterCount: R }) : v.intl.string(v.t.UdhTtk)), [R]),
        W = (0, g.u5)({ location: "SearchHeader" }),
        Y = t.type === O.aib.DMS || t.type === O.aib.CHANNEL,
        q = i.useMemo(
            () =>
                T && W
                    ? (0, r.jsxs)("div", {
                          className: C.searchModeAndFiltersContainer,
                          children: [
                              (0, r.jsx)(d.Button, {
                                  variant: "secondary",
                                  onClick: V,
                                  text: z,
                                  icon: d.gXV,
                                  size: "sm",
                              }),
                              (0, r.jsx)(A, {
                                  searchMode: l,
                                  onSearchModeChange: o,
                                  isPopoutOpen: "sort" === L,
                                  setOpenPopout: F,
                              }),
                              Y &&
                                  (0, r.jsx)(w, {
                                      searchContext: t,
                                      selectedChannelId: x,
                                      isPopoutOpen: "settings" === L,
                                      setOpenPopout: F,
                                      isPopoverVisible: H,
                                      onPopoverRequestClose: B,
                                  }),
                          ],
                      })
                    : T
                      ? (0, r.jsxs)("div", {
                            className: C.searchModeAndFiltersContainer,
                            children: [
                                (0, r.jsx)(d.Button, {
                                    variant: "secondary",
                                    onClick: V,
                                    text: z,
                                    icon: d.gXV,
                                    size: "sm",
                                }),
                                (0, r.jsx)(A, {
                                    searchMode: l,
                                    onSearchModeChange: o,
                                    isPopoutOpen: "sort" === L,
                                    setOpenPopout: F,
                                }),
                            ],
                        })
                      : W
                        ? (0, r.jsxs)("div", {
                              className: C.searchModeAndFiltersContainer,
                              children: [
                                  (0, r.jsx)(A, {
                                      searchMode: l,
                                      onSearchModeChange: o,
                                      isPopoutOpen: "sort" === L,
                                      setOpenPopout: F,
                                  }),
                                  Y &&
                                      (0, r.jsx)(w, {
                                          searchContext: t,
                                          selectedChannelId: x,
                                          isPopoutOpen: "settings" === L,
                                          setOpenPopout: F,
                                          isPopoverVisible: H,
                                          onPopoverRequestClose: B,
                                      }),
                              ],
                          })
                        : (0, r.jsxs)(d.njP, {
                              orientation: "horizontal",
                              className: C.searchHeaderTabList,
                              selectedItem: l,
                              onItemSelect: o,
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
            [z, V, T, L, W, Y, o, t, l, x, H, F, B],
        );
    return (0, r.jsxs)("header", {
        className: a()(C.searchHeader, { [C.searchHeaderWithSubtitle]: null != D }),
        children: [
            (0, r.jsx)("div", {
                className: C.totalResults,
                role: "status",
                children: (0, r.jsx)(Z, {
                    totalResults: c,
                    subtitle: D,
                    isIndexing: p,
                    isSearching: h,
                    documentsIndexed: _,
                }),
            }),
            q,
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
        text: v.intl.formatToPlainString(v.t["4Y3O+O"], { count: null != t ? t : "" }),
        children: (0, r.jsxs)("div", {
            className: C.totalResultsWrapper,
            children: [
                (0, r.jsx)(d.Text, {
                    variant: "text-md/medium",
                    color: "text-muted",
                    children: (0, r.jsx)(d.Anchor, {
                        className: C.helpdeskLink,
                        href: h.Z.getArticleURL(O.BhN.SEARCH_INDEXING),
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
        i = (0, r.jsx)(d.Text, {
            variant: "text-md/medium",
            color: "header-primary",
            children: v.intl.format(v.t.ZGVL3g, { count: t }),
        });
    return null != n
        ? (0, r.jsxs)("div", {
              className: C.totalResultsWithSubtitle,
              children: [
                  i,
                  (0, r.jsx)(d.Text, {
                      variant: "text-xs/medium",
                      color: "text-secondary",
                      children: n,
                  }),
              ],
          })
        : i;
}
function w(e) {
    var t;
    let {
            searchContext: n,
            selectedChannelId: l,
            isPopoutOpen: a,
            setOpenPopout: s,
            onPopoverRequestClose: c,
            isPopoverVisible: u,
        } = e,
        h = i.useRef(null),
        f = null != (t = p.rR.useSetting()) ? t : x.K,
        g = i.useCallback(
            (e) => {
                if (f !== e) {
                    if (e) {
                        let e = { type: O.aib.DMS };
                        _.Z.transitionQueryStateToSearchContext(n, e, (t) => {
                            _.Z.cleanUpPrivateChannelSearchState(),
                                _.Z.fetchMessages({
                                    searchContext: e,
                                    offset: 0,
                                    searchQueryString: t,
                                });
                        });
                    } else {
                        let e = {
                            type: O.aib.CHANNEL,
                            channelId: l,
                        };
                        _.Z.transitionQueryStateToSearchContext(n, e, (t) => {
                            _.Z.fetchMessages({
                                searchContext: e,
                                searchQueryString: t,
                                offset: 0,
                            });
                        });
                    }
                    s(null), p.rR.updateSetting(e);
                }
            },
            [f, s, n, l],
        ),
        m = i.useMemo(() => ({ align: "end" }), []);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(d.yRy, {
                targetElementRef: h,
                shouldShow: a,
                animation: d.yRy.Animation.NONE,
                position: "bottom",
                align: "right",
                onRequestClose: () => s(null),
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, r.jsx)(d.v2r, {
                        navId: "search-settings-cog",
                        onClose: t,
                        "aria-label": v.intl.string(v.t.fb59v0),
                        onSelect: () => s(null),
                        children: (0, r.jsxs)(
                            d.kSQ,
                            {
                                label: v.intl.string(v.t["/tMwrA"]),
                                children: [
                                    (0, r.jsx)(d.k5B, {
                                        id: "xdm-search-disabled",
                                        group: "xdm-search-items",
                                        label: v.intl.string(v.t.jRkYAh),
                                        checked: !f,
                                        action: () => g(!1),
                                    }),
                                    (0, r.jsx)(d.k5B, {
                                        id: "xdm-search-enabled",
                                        group: "xdm-search-items",
                                        label: v.intl.string(v.t["lWpJ/t"]),
                                        checked: f,
                                        action: () => g(!0),
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
                            buttonRef: h,
                            variant: "secondary",
                            icon: d.ewm,
                            onClick: () => {
                                s(a ? null : "settings");
                            },
                            "aria-label": v.intl.string(v.t["3D5yo/"]),
                            size: "sm",
                        }),
                    ),
            }),
            (0, r.jsx)(o.J2, {
                targetElementRef: h,
                shouldShow: u,
                onRequestClose: c,
                title: v.intl.string(v.t.qha2Zv),
                body: v.intl.string(v.t.IQWEoV),
                caretConfig: m,
            }),
        ],
    });
}
function A(e) {
    let { searchMode: t, onSearchModeChange: n, isPopoutOpen: l, setOpenPopout: a } = e,
        s = i.useRef(null),
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
        ),
        c = i.useCallback(
            (e) => {
                a(null), n(e);
            },
            [a, n],
        );
    return (0, r.jsx)(d.yRy, {
        targetElementRef: s,
        shouldShow: l,
        animation: d.yRy.Animation.NONE,
        position: "bottom",
        align: "right",
        onRequestClose: () => a(null),
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, r.jsx)(d.v2r, {
                navId: "search-result-sort-menu",
                onClose: n,
                "aria-label": v.intl.string(v.t.utp2hS),
                onSelect: () => a(null),
                children: (0, r.jsx)(
                    d.kSQ,
                    {
                        children: o.map((e) => {
                            let { label: n, value: i } = e;
                            return (0, r.jsx)(
                                d.k5B,
                                {
                                    group: "sort-by",
                                    id: "sort-by-option-".concat(i),
                                    label: n,
                                    action: () => c(i),
                                    checked: t === i,
                                },
                                i,
                            );
                        }),
                    },
                    "sort-by",
                ),
            });
        },
        children: (e) =>
            (0, r.jsx)(
                d.hU,
                S(I({}, e), {
                    buttonRef: s,
                    variant: "secondary",
                    icon: d.uVW,
                    onClick: () => {
                        a(l ? null : "sort");
                    },
                    "aria-label": v.intl.string(v.t.XvNMNk),
                    size: "sm",
                }),
            ),
    });
}
