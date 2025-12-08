n.d(t, { P: () => m }), n(539854), n(388685);
var r = n(54381),
    o = n(473749),
    i = n(120356),
    l = n.n(i),
    a = n(91192),
    c = n(873546),
    s = n(481060),
    u = n(607070),
    d = n(724757),
    f = n(243778),
    b = n(984802),
    y = n(970013),
    p = n(996435),
    g = n(854014),
    O = n(388032),
    j = n(845435);
function m(e) {
    let { root: t, header: n, footer: i, onClose: g, emptyState: m } = e,
        h = p.Z.useField("showNavigationMobile"),
        x = o.useRef(null),
        S = o.useMemo(() => {
            let e = [];
            return (
                t.layout.forEach((t) => {
                    let { layout: n } = t;
                    n.forEach((t) => {
                        if (null != t.trailing)
                            switch (t.trailing.type) {
                                case y.W.BADGE_NEW:
                                case y.W.STRONGLY_DISCOURAGED_CUSTOM:
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
        [P, C] = o.useMemo(() => {
            let e = [],
                n = [];
            return (
                t.layout.forEach((t) => {
                    t.hoisted ? e.push(t) : n.push(t);
                }),
                [e, n]
            );
        }, [t.layout]),
        _ = (0, b.Ll)(),
        w = (0, d.Z)("settings-sidebar", x),
        k = p.Z.useField("currentPanelKey");
    return (
        o.useEffect(() => {
            var e;
            if (null == x.current || null == k) return;
            let t = p.Z.getField("navTransition"),
                n = null == t || t.animateScroll,
                r =
                    null == (e = x.current.getScrollerNode())
                        ? void 0
                        : e.querySelector('[data-settings-sidebar-item="'.concat(k, '"]'));
            null != r &&
                x.current.scrollIntoViewNode({
                    node: r,
                    padding: 8,
                    animate: !u.Z.useReducedMotion && n,
                });
        }, [k]),
        (0, r.jsx)(s.f6W, {
            theme: _,
            children: (e) =>
                (0, r.jsx)(f.ZP, {
                    contentTypes: S,
                    children: (t) => {
                        let { visibleContent: o } = t;
                        return (0, r.jsxs)("div", {
                            className: l()(j.sidebar, e, {
                                [j.mobile]: c.tq,
                                [j.mobileNavigationOpen]: h,
                            }),
                            children: [
                                (0, r.jsxs)("div", {
                                    className: j.fixedContent,
                                    children: [
                                        c.tq &&
                                            (0, r.jsx)("div", {
                                                className: j.mobileCloseButton,
                                                children: (0, r.jsx)(s.hU, {
                                                    icon: s.Uz9,
                                                    onClick: g,
                                                    variant: "icon-only",
                                                    size: "sm",
                                                    "aria-label": O.intl.string(O.t.cpT0Cq),
                                                }),
                                            }),
                                        (0, r.jsx)("div", {
                                            children: P.map((e) =>
                                                (0, r.jsx)(
                                                    v,
                                                    {
                                                        section: e,
                                                        visibleContent: o,
                                                        hoisted: !0,
                                                    },
                                                    e.key,
                                                ),
                                            ),
                                        }),
                                        null != n && (0, r.jsx)(n, {}),
                                        null != m && 0 === C.length && (0, r.jsx)(m, {}),
                                    ],
                                }),
                                (0, r.jsx)(a.bG, {
                                    navigator: w,
                                    children: (0, r.jsx)(a.SJ, {
                                        children: (e) => {
                                            var t,
                                                n,
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
                                                s.h21,
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
                                                            (x.current = e),
                                                                (l.current =
                                                                    null !=
                                                                    (t = null == e ? void 0 : e.getScrollerNode())
                                                                        ? t
                                                                        : null);
                                                        },
                                                        className: j.navScroller,
                                                        fade: !0,
                                                    },
                                                    a,
                                                )),
                                                (n = n =
                                                    {
                                                        children: [
                                                            (0, r.jsx)("nav", {
                                                                className: j.nav,
                                                                children: C.map((e) =>
                                                                    (0, r.jsx)(
                                                                        v,
                                                                        {
                                                                            section: e,
                                                                            visibleContent: o,
                                                                        },
                                                                        e.key,
                                                                    ),
                                                                ),
                                                            }),
                                                            null != i && (0, r.jsx)(i, {}),
                                                        ],
                                                    }),
                                                Object.getOwnPropertyDescriptors
                                                    ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                                                    : (function (e, t) {
                                                          var n = Object.keys(e);
                                                          if (Object.getOwnPropertySymbols) {
                                                              var r = Object.getOwnPropertySymbols(e);
                                                              n.push.apply(n, r);
                                                          }
                                                          return n;
                                                      })(Object(n)).forEach(function (e) {
                                                          Object.defineProperty(
                                                              t,
                                                              e,
                                                              Object.getOwnPropertyDescriptor(n, e),
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
function v(e) {
    var t;
    let { section: n, visibleContent: o, hoisted: i = !1 } = e,
        l = null == (t = n.useTitle) ? void 0 : t.call(n);
    return (0, r.jsxs)("ul", {
        className: j.section,
        "aria-label": l,
        children: [
            null != l &&
                (0, r.jsx)("div", {
                    className: j.sectionLabel,
                    children: (0, r.jsx)(s.Heading, {
                        className: j.label,
                        variant: "heading-sm/medium",
                        color: "text-muted",
                        children: l,
                    }),
                }),
            n.layout.map((e) =>
                (0, r.jsx)(
                    g.y,
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
