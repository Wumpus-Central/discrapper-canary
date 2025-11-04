n.d(t, { Z: () => S }), n(388685);
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
    x = n(981631),
    v = n(921944),
    j = n(388032),
    O = n(865239);
function C(e) {
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
function I(e, t) {
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
function S(e) {
    let {
            searchContext: t,
            searchMode: l,
            onSearchModeChange: o,
            totalResults: c,
            isIndexing: p,
            isSearching: h,
            documentsIndexed: _,
            selectedChannelId: S,
        } = e,
        Z = (0, m.nP)({ location: "SearchHeader" }),
        P = (0, m.KS)({ location: "SearchHeader" }),
        T = Z || P,
        N = (0, y.I)(t),
        { totalFilters: A } = (0, b.p4)(N, t),
        D = i.useMemo(() => {
            if (t.type === x.aib.DMS) {
                var e, n;
                let t = null != (n = null == (e = (0, f.$G)(N).channel_id) ? void 0 : e.length) ? n : 0;
                return t > 0 ? j.intl.format(j.t.A2dqWG, { filterCount: t }) : j.intl.string(j.t.tc619d);
            }
            return null;
        }, [t.type, N]),
        [L, M] = i.useState(null),
        k = i.useMemo(() => (h ? [] : [s.z.CROSS_DM_SEARCH_SETTING_EDUCATION_POPOVER]), [h]),
        [U, G] = (0, u.US)(k),
        H = U === s.z.CROSS_DM_SEARCH_SETTING_EDUCATION_POPOVER,
        F = i.useCallback(
            (e) => {
                null != e && H && G(v.L.USER_DISMISS), M(e);
            },
            [G, H],
        ),
        B = i.useCallback(
            (e) => {
                G("user:explicit" === e ? v.L.USER_DISMISS : v.L.AUTO_DISMISS);
            },
            [G],
        ),
        V = i.useCallback(() => {
            F(null),
                (0, d.ZDy)(async () => {
                    let { default: e } = await Promise.all([n.e("37979"), n.e("57390")]).then(n.bind(n, 238088));
                    return (n) => (0, r.jsx)(e, I(C({}, n), { searchContext: t }));
                });
        }, [t, F]),
        z = i.useMemo(() => (A > 0 ? j.intl.format(j.t.uaR4sI, { filterCount: A }) : j.intl.string(j.t.UdhTtk)), [A]),
        W = (0, g.UX)({ location: "SearchHeader" }),
        Y = t.type === x.aib.DMS || t.type === x.aib.CHANNEL,
        q = i.useMemo(
            () =>
                T && W
                    ? (0, r.jsxs)("div", {
                          className: O.searchModeAndFiltersContainer,
                          children: [
                              (0, r.jsx)(d.Button, {
                                  variant: "secondary",
                                  onClick: V,
                                  text: z,
                                  icon: d.gXV,
                                  size: "sm",
                              }),
                              (0, r.jsx)(w, {
                                  searchMode: l,
                                  onSearchModeChange: o,
                                  isPopoutOpen: "sort" === L,
                                  setOpenPopout: F,
                              }),
                              Y &&
                                  (0, r.jsx)(R, {
                                      searchContext: t,
                                      selectedChannelId: S,
                                      isPopoutOpen: "settings" === L,
                                      setOpenPopout: F,
                                      isPopoverVisible: H,
                                      onPopoverRequestClose: B,
                                  }),
                          ],
                      })
                    : T
                      ? (0, r.jsxs)("div", {
                            className: O.searchModeAndFiltersContainer,
                            children: [
                                (0, r.jsx)(d.Button, {
                                    variant: "secondary",
                                    onClick: V,
                                    text: z,
                                    icon: d.gXV,
                                    size: "sm",
                                }),
                                (0, r.jsx)(w, {
                                    searchMode: l,
                                    onSearchModeChange: o,
                                    isPopoutOpen: "sort" === L,
                                    setOpenPopout: F,
                                }),
                            ],
                        })
                      : W
                        ? (0, r.jsxs)("div", {
                              className: O.searchModeAndFiltersContainer,
                              children: [
                                  (0, r.jsx)(w, {
                                      searchMode: l,
                                      onSearchModeChange: o,
                                      isPopoutOpen: "sort" === L,
                                      setOpenPopout: F,
                                  }),
                                  Y &&
                                      (0, r.jsx)(R, {
                                          searchContext: t,
                                          selectedChannelId: S,
                                          isPopoutOpen: "settings" === L,
                                          setOpenPopout: F,
                                          isPopoverVisible: H,
                                          onPopoverRequestClose: B,
                                      }),
                              ],
                          })
                        : (0, r.jsxs)(d.njP, {
                              orientation: "horizontal",
                              className: O.searchHeaderTabList,
                              selectedItem: l,
                              onItemSelect: o,
                              children: [
                                  (0, r.jsx)(d.njP.Item, {
                                      className: O.searchHeaderTab,
                                      id: x.QIO.NEWEST,
                                      children: j.intl.string(j.t.rLjqbS),
                                  }),
                                  (0, r.jsx)(d.njP.Item, {
                                      className: O.searchHeaderTab,
                                      id: x.QIO.OLDEST,
                                      children: j.intl.string(j.t.a1BaUr),
                                  }),
                                  (0, r.jsx)(d.njP.Item, {
                                      className: O.searchHeaderTab,
                                      id: x.QIO.MOST_RELEVANT,
                                      children: j.intl.string(j.t.FtR97k),
                                  }),
                              ],
                          }),
            [z, V, T, L, W, Y, o, t, l, S, H, F, B],
        );
    return (0, r.jsxs)("header", {
        className: a()(O.searchHeader, { [O.searchHeaderWithSubtitle]: null != D }),
        children: [
            (0, r.jsx)("div", {
                className: O.totalResults,
                role: "status",
                children: (0, r.jsx)(E, {
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
function E(e) {
    let { totalResults: t, subtitle: n, isSearching: i, isIndexing: l, documentsIndexed: a } = e;
    return l
        ? (0, r.jsx)(P, { documentsIndexed: a })
        : i
          ? (0, r.jsx)(T, {})
          : (0, r.jsx)(N, {
                totalResults: t,
                subtitle: n,
            });
}
function Z() {
    return (0, r.jsx)("div", {
        className: O.spinnerWrapper,
        children: (0, r.jsx)(d.$jN, {
            type: d.$jN.Type.SPINNING_CIRCLE,
            className: O.spinner,
            itemClassName: O.spinnerPath,
        }),
    });
}
function P(e) {
    let { documentsIndexed: t } = e;
    return (0, r.jsx)(c.u, {
        asContainer: !0,
        text: j.intl.formatToPlainString(j.t["4Y3O+O"], { count: null != t ? t : "" }),
        children: (0, r.jsxs)("div", {
            className: O.totalResultsWrapper,
            children: [
                (0, r.jsx)(d.Text, {
                    variant: "text-md/medium",
                    color: "text-muted",
                    children: (0, r.jsx)(d.Anchor, {
                        className: O.helpdeskLink,
                        href: h.Z.getArticleURL(x.BhN.SEARCH_INDEXING),
                        children: j.intl.string(j.t["G3EA+4"]),
                    }),
                }),
                (0, r.jsx)(Z, {}),
            ],
        }),
    });
}
function T() {
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(d.Text, {
                variant: "text-md/medium",
                color: "header-secondary",
                children: j.intl.string(j.t.uixzLf),
            }),
            (0, r.jsx)(Z, {}),
        ],
    });
}
function N(e) {
    let { totalResults: t, subtitle: n } = e,
        i = (0, r.jsx)(d.Text, {
            variant: "text-md/medium",
            color: "header-primary",
            children: j.intl.format(j.t.ZGVL3g, { count: t }),
        });
    return null != n
        ? (0, r.jsxs)("div", {
              className: O.totalResultsWithSubtitle,
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
function R(e) {
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
                    if (e) {
                        let e = { type: x.aib.DMS };
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
                            type: x.aib.CHANNEL,
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
            [m, s, n, l],
        ),
        y = i.useMemo(() => ({ align: "end" }), []);
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
                        "aria-label": j.intl.string(j.t.fb59v0),
                        onSelect: () => s(null),
                        children: (0, r.jsxs)(
                            d.kSQ,
                            {
                                label: j.intl.string(j.t["/tMwrA"]),
                                children: [
                                    (0, r.jsx)(d.k5B, {
                                        id: "xdm-search-disabled",
                                        group: "xdm-search-items",
                                        label: j.intl.string(j.t.jRkYAh),
                                        checked: !m,
                                        action: () => b(!1),
                                    }),
                                    (0, r.jsx)(d.k5B, {
                                        id: "xdm-search-enabled",
                                        group: "xdm-search-items",
                                        label: j.intl.string(j.t["lWpJ/t"]),
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
                        I(C({}, e), {
                            buttonRef: h,
                            variant: "secondary",
                            icon: d.ewm,
                            onClick: () => {
                                s(a ? null : "settings");
                            },
                            "aria-label": j.intl.string(j.t["3D5yo/"]),
                            size: "sm",
                        }),
                    ),
            }),
            (0, r.jsx)(o.J2, {
                targetElementRef: h,
                shouldShow: u,
                onRequestClose: c,
                title: j.intl.string(j.t.qha2Zv),
                body: j.intl.string(j.t.IQWEoV),
                caretConfig: y,
            }),
        ],
    });
}
function w(e) {
    let { searchMode: t, onSearchModeChange: n, isPopoutOpen: l, setOpenPopout: a } = e,
        s = i.useRef(null),
        o = i.useMemo(
            () => [
                {
                    label: j.intl.string(j.t.CbaapP),
                    value: x.QIO.NEWEST,
                },
                {
                    label: j.intl.string(j.t.OukXZj),
                    value: x.QIO.OLDEST,
                },
                {
                    label: j.intl.string(j.t.q8gB52),
                    value: x.QIO.MOST_RELEVANT,
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
                "aria-label": j.intl.string(j.t.utp2hS),
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
                I(C({}, e), {
                    buttonRef: s,
                    variant: "secondary",
                    icon: d.uVW,
                    onClick: () => {
                        a(l ? null : "sort");
                    },
                    "aria-label": j.intl.string(j.t.XvNMNk),
                    size: "sm",
                }),
            ),
    });
}
