n.d(t, { Z: () => E }), n(388685);
var r = n(54381),
    i = n(473749),
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
    O = n(315322),
    j = n(981631),
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
            searchMode: n,
            onSearchModeChange: l,
            totalResults: o,
            isIndexing: c,
            isSearching: p,
            documentsIndexed: h,
            selectedChannelId: O,
        } = e,
        I = (0, m.kU)({ location: "SearchHeader" }),
        S = (0, y.I)(t),
        { totalFilters: E } = (0, b.p4)(S, t),
        P = i.useMemo(() => {
            if (t.type === j.aib.DMS) {
                var e, n;
                let t = null != (n = null == (e = (0, f.$G)(S).channel_id) ? void 0 : e.length) ? n : 0;
                return t > 0 ? v.intl.format(v.t.A2dqWG, { filterCount: t }) : v.intl.string(v.t.tc619d);
            }
            return null;
        }, [t.type, S]),
        [T, N] = i.useState(null),
        R = i.useMemo(() => (p ? [] : [s.z.CROSS_DM_SEARCH_SETTING_EDUCATION_POPOVER]), [p]),
        [D, L] = (0, u.US)(R),
        M = D === s.z.CROSS_DM_SEARCH_SETTING_EDUCATION_POPOVER,
        k = i.useCallback(
            (e) => {
                null != e && M && L(x.L.USER_DISMISS), N(e);
            },
            [L, M],
        ),
        U = i.useCallback(
            (e) => {
                L("user:explicit" === e ? x.L.USER_DISMISS : x.L.AUTO_DISMISS);
            },
            [L],
        ),
        G = i.useCallback(() => {
            k(null), _.Z.openSearchFiltersModal(t);
        }, [t, k]),
        H = i.useMemo(() => (E > 0 ? v.intl.format(v.t.uaR4sI, { filterCount: E }) : v.intl.string(v.t.UdhTtk)), [E]),
        F = (0, g.UX)({ location: "SearchHeader" }),
        B = t.type === j.aib.DMS || t.type === j.aib.CHANNEL,
        V = i.useMemo(
            () =>
                I && F
                    ? (0, r.jsxs)("div", {
                          className: C.searchModeAndFiltersContainer,
                          children: [
                              (0, r.jsx)(d.Button, {
                                  variant: "secondary",
                                  onClick: G,
                                  text: H,
                                  icon: d.gXV,
                                  size: "sm",
                              }),
                              (0, r.jsx)(A, {
                                  searchMode: n,
                                  onSearchModeChange: l,
                                  isPopoutOpen: "sort" === T,
                                  setOpenPopout: k,
                              }),
                              B &&
                                  (0, r.jsx)(w, {
                                      searchContext: t,
                                      selectedChannelId: O,
                                      isPopoutOpen: "settings" === T,
                                      setOpenPopout: k,
                                      isPopoverVisible: M,
                                      onPopoverRequestClose: U,
                                  }),
                          ],
                      })
                    : I
                      ? (0, r.jsxs)("div", {
                            className: C.searchModeAndFiltersContainer,
                            children: [
                                (0, r.jsx)(d.Button, {
                                    variant: "secondary",
                                    onClick: G,
                                    text: H,
                                    icon: d.gXV,
                                    size: "sm",
                                }),
                                (0, r.jsx)(A, {
                                    searchMode: n,
                                    onSearchModeChange: l,
                                    isPopoutOpen: "sort" === T,
                                    setOpenPopout: k,
                                }),
                            ],
                        })
                      : F
                        ? (0, r.jsxs)("div", {
                              className: C.searchModeAndFiltersContainer,
                              children: [
                                  (0, r.jsx)(A, {
                                      searchMode: n,
                                      onSearchModeChange: l,
                                      isPopoutOpen: "sort" === T,
                                      setOpenPopout: k,
                                  }),
                                  B &&
                                      (0, r.jsx)(w, {
                                          searchContext: t,
                                          selectedChannelId: O,
                                          isPopoutOpen: "settings" === T,
                                          setOpenPopout: k,
                                          isPopoverVisible: M,
                                          onPopoverRequestClose: U,
                                      }),
                              ],
                          })
                        : (0, r.jsxs)(d.njP, {
                              orientation: "horizontal",
                              className: C.searchHeaderTabList,
                              selectedItem: n,
                              onItemSelect: l,
                              children: [
                                  (0, r.jsx)(d.njP.Item, {
                                      className: C.searchHeaderTab,
                                      id: j.QIO.NEWEST,
                                      children: v.intl.string(v.t.rLjqbS),
                                  }),
                                  (0, r.jsx)(d.njP.Item, {
                                      className: C.searchHeaderTab,
                                      id: j.QIO.OLDEST,
                                      children: v.intl.string(v.t.a1BaUr),
                                  }),
                                  (0, r.jsx)(d.njP.Item, {
                                      className: C.searchHeaderTab,
                                      id: j.QIO.MOST_RELEVANT,
                                      children: v.intl.string(v.t.FtR97k),
                                  }),
                              ],
                          }),
            [H, G, I, T, F, B, l, t, n, O, M, k, U],
        );
    return (0, r.jsxs)("header", {
        className: a()(C.searchHeader, { [C.searchHeaderWithSubtitle]: null != P }),
        children: [
            (0, r.jsx)("div", {
                className: C.totalResults,
                role: "status",
                children: (0, r.jsx)(Z, {
                    totalResults: o,
                    subtitle: P,
                    isIndexing: c,
                    isSearching: p,
                    documentsIndexed: h,
                }),
            }),
            V,
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
                        href: h.Z.getArticleURL(j.BhN.SEARCH_INDEXING),
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
        f = (0, g.xy)({ location: "SearchSettingsPopout" }),
        m = null != (t = p.rR.useSetting()) ? t : f,
        b = i.useCallback(
            (e) => {
                if (m !== e) {
                    if (
                        ((0, O.yn)({
                            searchContext: n,
                            prevIsCrossDMSettingEnabled: p.rR.getSetting(),
                            isCrossDMSettingEnabled: e,
                            location: O.Ix.SEARCH_HEADER,
                        }),
                        e)
                    ) {
                        let e = { type: j.aib.DMS };
                        _.Z.transitionStateToSearchContext(n, e, _.Z.cleanUpPrivateChannelSearchState);
                    } else {
                        let e = {
                            type: j.aib.CHANNEL,
                            channelId: l,
                        };
                        _.Z.transitionStateToSearchContext(n, e);
                    }
                    s(null), p.rR.updateSetting(e);
                }
            },
            [m, s, n, l],
        ),
        [y, x] = i.useMemo(
            () => [
                m ? v.intl.string(v.t["8lklch"]) : v.intl.string(v.t.ji3jTF),
                m ? v.intl.string(v.t.RMQZCa) : v.intl.string(v.t["v/PagC"]),
            ],
            [m],
        ),
        C = i.useMemo(() => ({ align: "end" }), []);
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
                title: y,
                body: x,
                caretConfig: C,
                badge: "new",
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
                    value: j.QIO.NEWEST,
                },
                {
                    label: v.intl.string(v.t.OukXZj),
                    value: j.QIO.OLDEST,
                },
                {
                    label: v.intl.string(v.t.q8gB52),
                    value: j.QIO.MOST_RELEVANT,
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
