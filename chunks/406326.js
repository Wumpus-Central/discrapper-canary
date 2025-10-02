n.d(t, { Z: () => O }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    s = n(681715),
    o = n(481060),
    c = n(63063),
    d = n(607802),
    u = n(945577),
    p = n(28964),
    h = n(465524),
    f = n(770092),
    g = n(981631),
    m = n(388032),
    b = n(865239);
function y(e) {
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
function _(e, t) {
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
function O(e) {
    let {
            searchContext: t,
            searchMode: l,
            onSearchModeChange: s,
            totalResults: c,
            isIndexing: O,
            isSearching: x,
            documentsIndexed: v,
        } = e,
        C = (0, u.UX)({ location: "SearchHeader" }),
        I = (0, p.nP)({ location: "SearchHeader" }),
        S = (0, p.KS)({ location: "SearchHeader" }),
        Z = (0, f.I)(t),
        { totalFilters: P } = (0, h.p4)(Z, t),
        T = i.useMemo(() => {
            if (t.type === g.aib.DMS && C) {
                var e, n;
                let t = null != (n = null == (e = (0, d.$G)(Z).channel_id) ? void 0 : e.length) ? n : 0;
                return t > 0 ? m.intl.format(m.t.A2dqWF, { filterCount: t }) : m.intl.string(m.t.tc619f);
            }
            return null;
        }, [C, t.type, Z]),
        N = i.useCallback(() => {
            (0, o.ZDy)(async () => {
                let { default: e } = await Promise.all([n.e("37979"), n.e("57390")]).then(n.bind(n, 238088));
                return (n) => (0, r.jsx)(e, _(y({}, n), { searchContext: t }));
            });
        }, [t]),
        R = i.useMemo(() => (P > 0 ? m.intl.format(m.t.uaR4sL, { filterCount: P }) : m.intl.string(m.t.UdhTtr)), [P]);
    return (0, r.jsxs)("header", {
        className: a()(b.searchHeader, { [b.searchHeaderWithSubtitle]: null != T }),
        children: [
            (0, r.jsx)("div", {
                className: b.totalResults,
                role: "status",
                children: (0, r.jsx)(j, {
                    totalResults: c,
                    subtitle: T,
                    isIndexing: O,
                    isSearching: x,
                    documentsIndexed: v,
                }),
            }),
            I || S
                ? (0, r.jsxs)("div", {
                      className: b.searchModeAndFiltersContainer,
                      children: [
                          (0, r.jsx)(o.zxk, {
                              variant: "secondary",
                              onClick: N,
                              text: R,
                              icon: o.gXV,
                              size: "sm",
                          }),
                          (0, r.jsx)(E, {
                              searchMode: l,
                              onSearchModeChange: s,
                          }),
                      ],
                  })
                : (0, r.jsxs)(o.njP, {
                      orientation: "horizontal",
                      className: b.searchHeaderTabList,
                      selectedItem: l,
                      onItemSelect: s,
                      children: [
                          (0, r.jsx)(o.njP.Item, {
                              className: b.searchHeaderTab,
                              id: g.QIO.NEWEST,
                              children: m.intl.string(m.t.rLjqbW),
                          }),
                          (0, r.jsx)(o.njP.Item, {
                              className: b.searchHeaderTab,
                              id: g.QIO.OLDEST,
                              children: m.intl.string(m.t.a1BaUl),
                          }),
                          (0, r.jsx)(o.njP.Item, {
                              className: b.searchHeaderTab,
                              id: g.QIO.MOST_RELEVANT,
                              children: m.intl.string(m.t.FtR97u),
                          }),
                      ],
                  }),
        ],
    });
}
function j(e) {
    let { totalResults: t, subtitle: n, isSearching: i, isIndexing: l, documentsIndexed: a } = e;
    return l
        ? (0, r.jsx)(v, { documentsIndexed: a })
        : i
          ? (0, r.jsx)(C, {})
          : (0, r.jsx)(I, {
                totalResults: t,
                subtitle: n,
            });
}
function x() {
    return (0, r.jsx)("div", {
        className: b.spinnerWrapper,
        children: (0, r.jsx)(o.$jN, {
            type: o.$jN.Type.SPINNING_CIRCLE,
            className: b.spinner,
            itemClassName: b.spinnerPath,
        }),
    });
}
function v(e) {
    let { documentsIndexed: t } = e;
    return (0, r.jsx)(s.u, {
        asContainer: !0,
        text: m.intl.formatToPlainString(m.t["4Y3O+P"], { count: t }),
        children: (0, r.jsxs)("div", {
            className: b.totalResultsWrapper,
            children: [
                (0, r.jsx)(o.Text, {
                    variant: "text-md/medium",
                    color: "text-muted",
                    children: (0, r.jsx)(o.eee, {
                        className: b.helpdeskLink,
                        href: c.Z.getArticleURL(g.BhN.SEARCH_INDEXING),
                        children: m.intl.string(m.t["G3EA+/"]),
                    }),
                }),
                (0, r.jsx)(x, {}),
            ],
        }),
    });
}
function C() {
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(o.Text, {
                variant: "text-md/medium",
                color: "header-secondary",
                children: m.intl.string(m.t.uixzLS),
            }),
            (0, r.jsx)(x, {}),
        ],
    });
}
function I(e) {
    let { totalResults: t, subtitle: n } = e,
        l = i.useMemo(() => t.toLocaleString(), [t]),
        a = (0, r.jsx)(o.Text, {
            variant: "text-md/medium",
            color: "header-primary",
            children: m.intl.format(m.t.ZGVL3t, { count: l }),
        });
    return null != n
        ? (0, r.jsxs)("div", {
              className: b.totalResultsWithSubtitle,
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
function E(e) {
    let { searchMode: t, onSearchModeChange: n } = e,
        l = i.useRef(null),
        [a, s] = i.useState(!1),
        c = i.useMemo(
            () => [
                {
                    label: m.intl.string(m.t.CbaapK),
                    value: g.QIO.NEWEST,
                },
                {
                    label: m.intl.string(m.t.OukXZm),
                    value: g.QIO.OLDEST,
                },
                {
                    label: m.intl.string(m.t["q8gB5+"]),
                    value: g.QIO.MOST_RELEVANT,
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
                "aria-label": m.intl.string(m.t.utp2hY),
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
                _(y({}, e), {
                    buttonRef: l,
                    variant: "secondary",
                    icon: o.uVW,
                    onClick: () => {
                        s((e) => !e);
                    },
                    "aria-label": m.intl.string(m.t.XvNMNj),
                    size: "sm",
                }),
            ),
    });
}
