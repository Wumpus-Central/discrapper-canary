n.d(t, { P: () => h }), n(539854), n(388685);
var r = n(54381),
    o = n(473749),
    i = n(120356),
    l = n.n(i),
    a = n(91192),
    c = n(873546),
    s = n(704215),
    u = n(481060),
    d = n(607070),
    f = n(724757),
    b = n(243778),
    y = n(984802),
    p = n(28682),
    g = n(996435),
    O = n(886880),
    j = n(854014),
    m = n(388032),
    v = n(845435);
function h(e) {
    let { root: t, footer: n, onClose: i, emptyState: s, searchQuery: O, onSearchChange: j } = e,
        h = g.Z.useField("showNavigationMobile"),
        P = o.useRef(null),
        C = o.useMemo(() => {
            let e = [];
            return (
                t.layout.forEach((t) => {
                    let { layout: n } = t;
                    n.forEach((t) => {
                        if (null != t.trailing)
                            switch (t.trailing.type) {
                                case p.PU.BADGE_NEW:
                                case p.PU.STRONGLY_DISCOURAGED_CUSTOM:
                                    var n, r, o;
                                    null == (r = (o = t.trailing).getDismissibleContentTypes) ||
                                        null == (n = r.call(o)) ||
                                        n.forEach((t) => {
                                            e.push(t);
                                        });
                            }
                    });
                }),
                e
            );
        }, [t.layout]),
        [_, w] = o.useMemo(() => {
            let e = [],
                n = [];
            return (
                t.layout.forEach((t) => {
                    t.hoisted ? e.push(t) : n.push(t);
                }),
                [e, n]
            );
        }, [t.layout]),
        k = (0, y.Ll)(),
        N = (0, f.Z)("settings-sidebar", P),
        E = g.Z.useField("currentPanelKey");
    return (
        o.useEffect(() => {
            var e;
            if (null == P.current || null == E) return;
            let t = g.Z.getField("navTransition"),
                n = null == t || t.animateScroll,
                r =
                    null == (e = P.current.getScrollerNode())
                        ? void 0
                        : e.querySelector('[data-settings-sidebar-item="'.concat(E, '"]'));
            null != r &&
                P.current.scrollIntoViewNode({
                    node: r,
                    padding: 8,
                    animate: !d.Z.useReducedMotion && n,
                });
        }, [E]),
        (0, r.jsx)(u.f6W, {
            theme: k,
            children: (e) =>
                (0, r.jsx)(b.ZP, {
                    contentTypes: C,
                    children: (t) => {
                        let { visibleContent: o } = t;
                        return (0, r.jsxs)("div", {
                            className: l()(v.sidebar, e, {
                                [v.mobile]: c.tq,
                                [v.mobileNavigationOpen]: h,
                            }),
                            children: [
                                (0, r.jsxs)("div", {
                                    className: v.fixedContent,
                                    children: [
                                        c.tq &&
                                            (0, r.jsx)("div", {
                                                className: v.mobileCloseButton,
                                                children: (0, r.jsx)(u.hU, {
                                                    icon: u.Uz9,
                                                    onClick: i,
                                                    variant: "icon-only",
                                                    size: "sm",
                                                    "aria-label": m.intl.string(m.t.cpT0Cq),
                                                }),
                                            }),
                                        (0, r.jsx)("div", {
                                            children: _.map((e) =>
                                                (0, r.jsx)(
                                                    x,
                                                    {
                                                        section: e,
                                                        visibleContent: o,
                                                        hoisted: !0,
                                                    },
                                                    e.key,
                                                ),
                                            ),
                                        }),
                                        null != O &&
                                            null != j &&
                                            (0, r.jsx)(S, {
                                                searchQuery: O,
                                                onSearchChange: j,
                                            }),
                                        null != s && 0 === w.length && (0, r.jsx)(s, {}),
                                    ],
                                }),
                                (0, r.jsx)(a.bG, {
                                    navigator: N,
                                    children: (0, r.jsx)(a.SJ, {
                                        children: (e) => {
                                            var t,
                                                i,
                                                { ref: l } = e,
                                                a = (function (e, t) {
                                                    if (null == e) return {};
                                                    var n,
                                                        r,
                                                        o = (function (e, t) {
                                                            if (null == e) return {};
                                                            var n,
                                                                r,
                                                                o = {},
                                                                i = Object.keys(e);
                                                            for (r = 0; r < i.length; r++)
                                                                (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                                                            return o;
                                                        })(e, t);
                                                    if (Object.getOwnPropertySymbols) {
                                                        var i = Object.getOwnPropertySymbols(e);
                                                        for (r = 0; r < i.length; r++)
                                                            (n = i[r]),
                                                                !(t.indexOf(n) >= 0) &&
                                                                    Object.prototype.propertyIsEnumerable.call(e, n) &&
                                                                    (o[n] = e[n]);
                                                    }
                                                    return o;
                                                })(e, ["ref"]);
                                            return (0, r.jsxs)(
                                                u.h21,
                                                ((t = (function (e) {
                                                    for (var t = 1; t < arguments.length; t++) {
                                                        var n = null != arguments[t] ? arguments[t] : {},
                                                            r = Object.keys(n);
                                                        "function" == typeof Object.getOwnPropertySymbols &&
                                                            (r = r.concat(
                                                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                                                    return Object.getOwnPropertyDescriptor(n, e)
                                                                        .enumerable;
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
                                                })(
                                                    {
                                                        ref: (e) => {
                                                            var t;
                                                            (P.current = e),
                                                                (l.current =
                                                                    null !=
                                                                    (t = null == e ? void 0 : e.getScrollerNode())
                                                                        ? t
                                                                        : null);
                                                        },
                                                        className: v.navScroller,
                                                        fade: !0,
                                                    },
                                                    a,
                                                )),
                                                (i = i =
                                                    {
                                                        children: [
                                                            (0, r.jsx)("nav", {
                                                                className: v.nav,
                                                                children: w.map((e) =>
                                                                    (0, r.jsx)(
                                                                        x,
                                                                        {
                                                                            section: e,
                                                                            visibleContent: o,
                                                                        },
                                                                        e.key,
                                                                    ),
                                                                ),
                                                            }),
                                                            null != n && (0, r.jsx)(n, {}),
                                                        ],
                                                    }),
                                                Object.getOwnPropertyDescriptors
                                                    ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i))
                                                    : (function (e, t) {
                                                          var n = Object.keys(e);
                                                          if (Object.getOwnPropertySymbols) {
                                                              var r = Object.getOwnPropertySymbols(e);
                                                              n.push.apply(n, r);
                                                          }
                                                          return n;
                                                      })(Object(i)).forEach(function (e) {
                                                          Object.defineProperty(
                                                              t,
                                                              e,
                                                              Object.getOwnPropertyDescriptor(i, e),
                                                          );
                                                      }),
                                                t),
                                            );
                                        },
                                    }),
                                }),
                            ],
                        });
                    },
                }),
        })
    );
}
function x(e) {
    var t;
    let { section: n, visibleContent: o, hoisted: i = !1 } = e,
        l = null == (t = n.useLabel) ? void 0 : t.call(n);
    return (0, r.jsxs)("ul", {
        className: v.section,
        "aria-label": l,
        children: [
            null != l &&
                (0, r.jsx)("div", {
                    className: v.sectionLabel,
                    children: (0, r.jsx)(u.Heading, {
                        className: v.label,
                        variant: "heading-sm/medium",
                        color: "text-tertiary",
                        children: l,
                    }),
                }),
            n.layout.map((e) =>
                (0, r.jsx)(
                    j.y,
                    {
                        node: e,
                        visibleContent: o,
                        hoisted: i,
                    },
                    e.key,
                ),
            ),
        ],
    });
}
function S(e) {
    let { searchQuery: t, onSearchChange: n } = e,
        i = o.useRef(null),
        [l, a] = (0, b.US)([s.z.USER_SETTINGS_REDESIGN_EDUCATION_POPOVER]),
        c = o.useCallback(() => {
            n("");
        }, [n]),
        d = o.useMemo(
            () => ({
                title: m.intl.string(m.t.Kv519a),
                body: m.intl.string(m.t.cTGJBZ),
                badge: "new",
                position: "right",
                align: "center",
                scrollBehavior: "sticky",
            }),
            [],
        );
    return (0, r.jsxs)("div", {
        className: v.searchBarContainer,
        children: [
            (0, r.jsx)(u.E1j, {
                size: "md",
                query: t,
                onChange: n,
                onClear: c,
            }),
            (0, r.jsx)("div", {
                className: v.popoverAnchor,
                ref: i,
            }),
            (0, r.jsx)(O.Z, {
                dismissibleContentType: s.z.USER_SETTINGS_REDESIGN_EDUCATION_POPOVER,
                targetElementRef: i,
                visibleContent: l,
                markAsDismissed: a,
                props: d,
            }),
        ],
    });
}
