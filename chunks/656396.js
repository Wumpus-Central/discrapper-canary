n.d(t, { Z: () => S }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(704215),
    s = n(907862),
    c = n(28664),
    u = n(481060),
    d = n(243778),
    p = n(695346),
    f = n(63063),
    h = n(607802),
    g = n(611004),
    m = n(770092),
    b = n(315322),
    y = n(971212),
    v = n(981631),
    O = n(921944),
    j = n(388032),
    x = n(560911);
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
function E(e, t) {
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
            searchMode: n,
            onSearchModeChange: l,
            totalResults: s,
            isIndexing: c,
            isSearching: p,
            documentsIndexed: f,
            selectedChannelId: b,
        } = e,
        C = (0, m.I)(t),
        { totalFilters: E } = (0, y.p4)(C, t),
        S = i.useMemo(() => {
            if (t.type === v.aib.DMS) {
                var e, n;
                let t = null != (n = null == (e = (0, h.$G)(C).channel_id) ? void 0 : e.length) ? n : 0;
                return t > 0 ? j.intl.format(j.t.A2dqWG, { filterCount: t }) : j.intl.string(j.t.tc619d);
            }
            return null;
        }, [t.type, C]),
        [I, P] = i.useState(null),
        Z = i.useMemo(() => (p ? [] : [o.z.CROSS_DM_SEARCH_SETTING_EDUCATION_POPOVER]), [p]),
        [N, w] = (0, d.US)(Z),
        R = N === o.z.CROSS_DM_SEARCH_SETTING_EDUCATION_POPOVER,
        D = i.useCallback(
            (e) => {
                null != e && R && w(O.L.USER_DISMISS), P(e);
            },
            [R, w, P],
        ),
        M = i.useCallback(
            (e) => {
                w("user:explicit" === e ? O.L.USER_DISMISS : O.L.AUTO_DISMISS);
            },
            [w],
        ),
        k = i.useCallback(() => {
            D(null), g.Z.openSearchFiltersModal(t);
        }, [D, t]),
        L = i.useMemo(() => (E > 0 ? j.intl.format(j.t.uaR4sI, { filterCount: E }) : j.intl.string(j.t.UdhTtk)), [E]),
        U = t.type === v.aib.DMS || t.type === v.aib.CHANNEL;
    return (0, r.jsxs)("header", {
        className: a()(x.searchHeader, { [x.searchHeaderWithSubtitle]: null != S }),
        children: [
            (0, r.jsx)("div", {
                className: x.totalResults,
                role: "status",
                children: (0, r.jsx)(_, {
                    totalResults: s,
                    subtitle: S,
                    isIndexing: c,
                    isSearching: p,
                    documentsIndexed: f,
                }),
            }),
            (0, r.jsxs)("div", {
                className: x.searchModeAndFiltersContainer,
                children: [
                    (0, r.jsx)(u.Button, {
                        variant: "secondary",
                        onClick: k,
                        text: L,
                        icon: u.gXV,
                        size: "sm",
                    }),
                    (0, r.jsx)(A, {
                        searchMode: n,
                        onSearchModeChange: l,
                        isPopoutOpen: "sort" === I,
                        setOpenPopout: D,
                    }),
                    U &&
                        (0, r.jsx)(T, {
                            searchContext: t,
                            selectedChannelId: b,
                            isPopoutOpen: "settings" === I,
                            setOpenPopout: D,
                            isPopoverVisible: R,
                            onPopoverRequestClose: M,
                        }),
                ],
            }),
        ],
    });
}
function _(e) {
    let { totalResults: t, subtitle: n, isSearching: i, isIndexing: l, documentsIndexed: a } = e;
    return l
        ? (0, r.jsx)(P, { documentsIndexed: a })
        : i
          ? (0, r.jsx)(Z, {})
          : (0, r.jsx)(N, {
                totalResults: t,
                subtitle: n,
            });
}
function I() {
    return (0, r.jsx)("div", {
        className: x.spinnerWrapper,
        children: (0, r.jsx)(u.$jN, {
            type: u.$jN.Type.SPINNING_CIRCLE,
            className: x.spinner,
            itemClassName: x.spinnerPath,
        }),
    });
}
function P(e) {
    let { documentsIndexed: t } = e;
    return (0, r.jsx)(c.u, {
        asContainer: !0,
        text: j.intl.formatToPlainString(j.t["4Y3O+O"], { count: null != t ? t : "" }),
        children: (0, r.jsxs)("div", {
            className: x.totalResultsWrapper,
            children: [
                (0, r.jsx)(u.Text, {
                    variant: "text-md/medium",
                    color: "text-muted",
                    children: (0, r.jsx)(u.eee, {
                        className: x.helpdeskLink,
                        href: f.Z.getArticleURL(v.BhN.SEARCH_INDEXING),
                        children: j.intl.string(j.t["G3EA+4"]),
                    }),
                }),
                (0, r.jsx)(I, {}),
            ],
        }),
    });
}
function Z() {
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(u.Text, {
                variant: "text-md/medium",
                color: "text-default",
                children: j.intl.string(j.t.uixzLf),
            }),
            (0, r.jsx)(I, {}),
        ],
    });
}
function N(e) {
    let { totalResults: t, subtitle: n } = e,
        i = (0, r.jsx)(u.Text, {
            variant: "text-md/medium",
            color: "text-strong",
            children: j.intl.format(j.t.ZGVL3g, { count: t }),
        });
    return null != n
        ? (0, r.jsxs)("div", {
              className: x.totalResultsWithSubtitle,
              children: [
                  i,
                  (0, r.jsx)(u.Text, {
                      variant: "text-xs/medium",
                      color: "text-subtle",
                      children: n,
                  }),
              ],
          })
        : i;
}
function T(e) {
    let {
            searchContext: t,
            selectedChannelId: n,
            isPopoutOpen: l,
            setOpenPopout: a,
            onPopoverRequestClose: o,
            isPopoverVisible: c,
        } = e,
        d = i.useRef(null),
        f = p.rR.useSetting(),
        h = i.useCallback(
            (e) => {
                if (f !== e) {
                    if (
                        ((0, b.yn)({
                            searchContext: t,
                            prevIsCrossDMSettingEnabled: p.rR.getSetting(),
                            isCrossDMSettingEnabled: e,
                            location: b.Ix.SEARCH_HEADER,
                        }),
                        e)
                    ) {
                        let e = { type: v.aib.DMS };
                        g.Z.transitionStateToSearchContext(t, e, g.Z.cleanUpPrivateChannelSearchState);
                    } else {
                        let e = {
                            type: v.aib.CHANNEL,
                            channelId: n,
                        };
                        g.Z.transitionStateToSearchContext(t, e);
                    }
                    a(null), p.rR.updateSetting(e);
                }
            },
            [f, a, t, n],
        ),
        [m, y] = i.useMemo(
            () => [
                f ? j.intl.string(j.t["8lklch"]) : j.intl.string(j.t.ji3jTF),
                f ? j.intl.string(j.t.RMQZCa) : j.intl.string(j.t["v/PagC"]),
            ],
            [f],
        ),
        O = i.useMemo(() => ({ align: "end" }), []);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(u.yRy, {
                targetElementRef: d,
                shouldShow: l,
                animation: u.yRy.Animation.NONE,
                position: "bottom",
                align: "right",
                onRequestClose: () => a(null),
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, r.jsx)(u.v2r, {
                        navId: "search-settings-cog",
                        onClose: t,
                        "aria-label": j.intl.string(j.t.fb59v0),
                        onSelect: () => a(null),
                        children: (0, r.jsxs)(
                            u.kSQ,
                            {
                                label: j.intl.string(j.t["/tMwrA"]),
                                children: [
                                    (0, r.jsx)(u.k5B, {
                                        id: "xdm-search-disabled",
                                        group: "xdm-search-items",
                                        label: j.intl.string(j.t.jRkYAh),
                                        checked: !f,
                                        action: () => h(!1),
                                    }),
                                    (0, r.jsx)(u.k5B, {
                                        id: "xdm-search-enabled",
                                        group: "xdm-search-items",
                                        label: j.intl.string(j.t["lWpJ/t"]),
                                        checked: f,
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
                        u.hU,
                        E(C({}, e), {
                            buttonRef: d,
                            variant: "secondary",
                            icon: u.ewm,
                            onClick: () => {
                                a(l ? null : "settings");
                            },
                            "aria-label": j.intl.string(j.t["3D5yo/"]),
                            size: "sm",
                        }),
                    ),
            }),
            (0, r.jsx)(s.J2, {
                targetElementRef: d,
                shouldShow: c,
                onRequestClose: o,
                title: m,
                body: y,
                caretConfig: O,
                badge: "new",
            }),
        ],
    });
}
function A(e) {
    let { searchMode: t, onSearchModeChange: n, isPopoutOpen: l, setOpenPopout: a } = e,
        o = i.useRef(null),
        s = i.useMemo(
            () => [
                {
                    label: j.intl.string(j.t.CbaapP),
                    value: v.QIO.NEWEST,
                },
                {
                    label: j.intl.string(j.t.OukXZj),
                    value: v.QIO.OLDEST,
                },
                {
                    label: j.intl.string(j.t.q8gB52),
                    value: v.QIO.MOST_RELEVANT,
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
    return (0, r.jsx)(u.yRy, {
        targetElementRef: o,
        shouldShow: l,
        animation: u.yRy.Animation.NONE,
        position: "bottom",
        align: "right",
        onRequestClose: () => a(null),
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, r.jsx)(u.v2r, {
                navId: "search-result-sort-menu",
                onClose: n,
                "aria-label": j.intl.string(j.t.utp2hS),
                onSelect: () => a(null),
                children: (0, r.jsx)(
                    u.kSQ,
                    {
                        children: s.map((e) => {
                            let { label: n, value: i } = e;
                            return (0, r.jsx)(
                                u.k5B,
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
                u.Button,
                E(C({}, e), {
                    buttonRef: o,
                    variant: "secondary",
                    icon: u.uVW,
                    onClick: () => {
                        a(l ? null : "sort");
                    },
                    text: j.intl.string(j.t.XvNMNk),
                    "aria-label": j.intl.string(j.t.XvNMNk),
                    size: "sm",
                }),
            ),
    });
}
