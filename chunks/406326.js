n.d(t, { Z: () => E }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    s = n(704215),
    o = n(907862),
    c = n(28664),
    d = n(481060),
    u = n(243778),
    p = n(695346),
    h = n(63063),
    f = n(607802),
    g = n(945577),
    m = n(28964),
    b = n(465524),
    y = n(611004),
    O = n(770092),
    x = n(315322),
    j = n(981631),
    v = n(921944),
    C = n(388032),
    I = n(372403);
function _(e) {
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
            selectedChannelId: x,
        } = e,
        _ = (0, m.kU)({ location: "SearchHeader" }),
        S = (0, O.I)(t),
        { totalFilters: E } = (0, b.p4)(S, t),
        P = i.useMemo(() => {
            if (t.type === j.aib.DMS) {
                var e, n;
                let t = null != (n = null == (e = (0, f.$G)(S).channel_id) ? void 0 : e.length) ? n : 0;
                return t > 0 ? C.intl.format(C.t.A2dqWG, { filterCount: t }) : C.intl.string(C.t.tc619d);
            }
            return null;
        }, [t.type, S]),
        [T, N] = i.useState(null),
        R = i.useMemo(() => (p ? [] : [s.z.CROSS_DM_SEARCH_SETTING_EDUCATION_POPOVER]), [p]),
        [D, L] = (0, u.US)(R),
        M = D === s.z.CROSS_DM_SEARCH_SETTING_EDUCATION_POPOVER,
        k = i.useCallback(
            (e) => {
                null != e && M && L(v.L.USER_DISMISS), N(e);
            },
            [L, M],
        ),
        U = i.useCallback(
            (e) => {
                L("user:explicit" === e ? v.L.USER_DISMISS : v.L.AUTO_DISMISS);
            },
            [L],
        ),
        G = i.useCallback(() => {
            k(null), y.Z.openSearchFiltersModal(t);
        }, [t, k]),
        H = i.useMemo(() => (E > 0 ? C.intl.format(C.t.uaR4sI, { filterCount: E }) : C.intl.string(C.t.UdhTtk)), [E]),
        F = (0, g.U)({ location: "SearchHeader" }),
        B = t.type === j.aib.DMS || t.type === j.aib.CHANNEL,
        V = i.useMemo(
            () =>
                _ && F
                    ? (0, r.jsxs)("div", {
                          className: I.searchModeAndFiltersContainer,
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
                                      selectedChannelId: x,
                                      isPopoutOpen: "settings" === T,
                                      setOpenPopout: k,
                                      isPopoverVisible: M,
                                      onPopoverRequestClose: U,
                                  }),
                          ],
                      })
                    : _
                      ? (0, r.jsxs)("div", {
                            className: I.searchModeAndFiltersContainer,
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
                              className: I.searchModeAndFiltersContainer,
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
                                          selectedChannelId: x,
                                          isPopoutOpen: "settings" === T,
                                          setOpenPopout: k,
                                          isPopoverVisible: M,
                                          onPopoverRequestClose: U,
                                      }),
                              ],
                          })
                        : (0, r.jsxs)(d.njP, {
                              orientation: "horizontal",
                              className: I.searchHeaderTabList,
                              selectedItem: n,
                              onItemSelect: l,
                              children: [
                                  (0, r.jsx)(d.njP.Item, {
                                      className: I.searchHeaderTab,
                                      id: j.QIO.NEWEST,
                                      children: C.intl.string(C.t.rLjqbS),
                                  }),
                                  (0, r.jsx)(d.njP.Item, {
                                      className: I.searchHeaderTab,
                                      id: j.QIO.OLDEST,
                                      children: C.intl.string(C.t.a1BaUr),
                                  }),
                                  (0, r.jsx)(d.njP.Item, {
                                      className: I.searchHeaderTab,
                                      id: j.QIO.MOST_RELEVANT,
                                      children: C.intl.string(C.t.FtR97k),
                                  }),
                              ],
                          }),
            [H, G, _, T, F, B, l, t, n, x, M, k, U],
        );
    return (0, r.jsxs)("header", {
        className: a()(I.searchHeader, { [I.searchHeaderWithSubtitle]: null != P }),
        children: [
            (0, r.jsx)("div", {
                className: I.totalResults,
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
        className: I.spinnerWrapper,
        children: (0, r.jsx)(d.$jN, {
            type: d.$jN.Type.SPINNING_CIRCLE,
            className: I.spinner,
            itemClassName: I.spinnerPath,
        }),
    });
}
function T(e) {
    let { documentsIndexed: t } = e;
    return (0, r.jsx)(c.u, {
        asContainer: !0,
        text: C.intl.formatToPlainString(C.t["4Y3O+O"], { count: null != t ? t : "" }),
        children: (0, r.jsxs)("div", {
            className: I.totalResultsWrapper,
            children: [
                (0, r.jsx)(d.Text, {
                    variant: "text-md/medium",
                    color: "text-muted",
                    children: (0, r.jsx)(d.Anchor, {
                        className: I.helpdeskLink,
                        href: h.Z.getArticleURL(j.BhN.SEARCH_INDEXING),
                        children: C.intl.string(C.t["G3EA+4"]),
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
                color: "text-default",
                children: C.intl.string(C.t.uixzLf),
            }),
            (0, r.jsx)(P, {}),
        ],
    });
}
function R(e) {
    let { totalResults: t, subtitle: n } = e,
        i = (0, r.jsx)(d.Text, {
            variant: "text-md/medium",
            color: "text-strong",
            children: C.intl.format(C.t.ZGVL3g, { count: t }),
        });
    return null != n
        ? (0, r.jsxs)("div", {
              className: I.totalResultsWithSubtitle,
              children: [
                  i,
                  (0, r.jsx)(d.Text, {
                      variant: "text-xs/medium",
                      color: "text-subtle",
                      children: n,
                  }),
              ],
          })
        : i;
}
function w(e) {
    let {
            searchContext: t,
            selectedChannelId: n,
            isPopoutOpen: l,
            setOpenPopout: a,
            onPopoverRequestClose: s,
            isPopoverVisible: c,
        } = e,
        u = i.useRef(null),
        h = p.rR.useSetting(),
        f = i.useCallback(
            (e) => {
                if (h !== e) {
                    if (
                        ((0, x.yn)({
                            searchContext: t,
                            prevIsCrossDMSettingEnabled: p.rR.getSetting(),
                            isCrossDMSettingEnabled: e,
                            location: x.Ix.SEARCH_HEADER,
                        }),
                        e)
                    ) {
                        let e = { type: j.aib.DMS };
                        y.Z.transitionStateToSearchContext(t, e, y.Z.cleanUpPrivateChannelSearchState);
                    } else {
                        let e = {
                            type: j.aib.CHANNEL,
                            channelId: n,
                        };
                        y.Z.transitionStateToSearchContext(t, e);
                    }
                    a(null), p.rR.updateSetting(e);
                }
            },
            [h, a, t, n],
        ),
        [g, m] = i.useMemo(
            () => [
                h ? C.intl.string(C.t["8lklch"]) : C.intl.string(C.t.ji3jTF),
                h ? C.intl.string(C.t.RMQZCa) : C.intl.string(C.t["v/PagC"]),
            ],
            [h],
        ),
        b = i.useMemo(() => ({ align: "end" }), []);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(d.yRy, {
                targetElementRef: u,
                shouldShow: l,
                animation: d.yRy.Animation.NONE,
                position: "bottom",
                align: "right",
                onRequestClose: () => a(null),
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, r.jsx)(d.v2r, {
                        navId: "search-settings-cog",
                        onClose: t,
                        "aria-label": C.intl.string(C.t.fb59v0),
                        onSelect: () => a(null),
                        children: (0, r.jsxs)(
                            d.kSQ,
                            {
                                label: C.intl.string(C.t["/tMwrA"]),
                                children: [
                                    (0, r.jsx)(d.k5B, {
                                        id: "xdm-search-disabled",
                                        group: "xdm-search-items",
                                        label: C.intl.string(C.t.jRkYAh),
                                        checked: !h,
                                        action: () => f(!1),
                                    }),
                                    (0, r.jsx)(d.k5B, {
                                        id: "xdm-search-enabled",
                                        group: "xdm-search-items",
                                        label: C.intl.string(C.t["lWpJ/t"]),
                                        checked: h,
                                        action: () => f(!0),
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
                        S(_({}, e), {
                            buttonRef: u,
                            variant: "secondary",
                            icon: d.ewm,
                            onClick: () => {
                                a(l ? null : "settings");
                            },
                            "aria-label": C.intl.string(C.t["3D5yo/"]),
                            size: "sm",
                        }),
                    ),
            }),
            (0, r.jsx)(o.J2, {
                targetElementRef: u,
                shouldShow: c,
                onRequestClose: s,
                title: g,
                body: m,
                caretConfig: b,
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
                    label: C.intl.string(C.t.CbaapP),
                    value: j.QIO.NEWEST,
                },
                {
                    label: C.intl.string(C.t.OukXZj),
                    value: j.QIO.OLDEST,
                },
                {
                    label: C.intl.string(C.t.q8gB52),
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
                "aria-label": C.intl.string(C.t.utp2hS),
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
                d.Button,
                S(_({}, e), {
                    buttonRef: s,
                    variant: "secondary",
                    icon: d.uVW,
                    onClick: () => {
                        a(l ? null : "sort");
                    },
                    text: C.intl.string(C.t.XvNMNk),
                    "aria-label": C.intl.string(C.t.XvNMNk),
                    size: "sm",
                }),
            ),
    });
}
