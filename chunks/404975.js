n.d(t, { P: () => m }), n(539854), n(388685);
var r = n(54381),
    l = n(473749),
    i = n(120356),
    o = n.n(i),
    a = n(91192),
    s = n(873546),
    c = n(481060),
    u = n(607070),
    d = n(724757),
    f = n(243778),
    p = n(984802),
    b = n(28682),
    y = n(996435),
    v = n(854014),
    g = n(388032),
    h = n(845435);
function m(e) {
    let { root: t, header: n, footer: i, onClose: v, emptyState: m } = e,
        j = y.Z.useField("showNavigationMobile"),
        O = l.useRef(null),
        C = l.useMemo(() => {
            let e = [];
            return (
                t.layout.forEach((t) => {
                    let { layout: n } = t;
                    n.forEach((t) => {
                        if (null != t.trailing)
                            switch (t.trailing.type) {
                                case b.PU.BADGE_NEW:
                                case b.PU.STRONGLY_DISCOURAGED_CUSTOM:
                                    var n, r, l;
                                    null == (r = (l = t.trailing).getDismissibleContentTypes) ||
                                        null == (n = r.call(l)) ||
                                        n.forEach((t) => {
                                            e.push(t);
                                        });
                            }
                    });
                }),
                e
            );
        }, [t.layout]),
        [P, S] = l.useMemo(() => {
            let e = [],
                n = [];
            return (
                t.layout.forEach((t) => {
                    t.hoisted ? e.push(t) : n.push(t);
                }),
                [e, n]
            );
        }, [t.layout]),
        _ = (0, p.Ll)(),
        E = (0, d.Z)("settings-sidebar", O),
        w = y.Z.useField("currentPanelKey");
    return (
        l.useEffect(() => {
            var e;
            if (null == O.current || null == w) return;
            let t =
                null == (e = O.current.getScrollerNode())
                    ? void 0
                    : e.querySelector('[data-settings-sidebar-item="'.concat(w, '"]'));
            null != t &&
                O.current.scrollIntoViewNode({
                    node: t,
                    padding: 8,
                    animate: !u.Z.useReducedMotion,
                });
        }, [w]),
        (0, r.jsx)(c.f6W, {
            theme: _,
            children: (e) =>
                (0, r.jsx)(f.ZP, {
                    contentTypes: C,
                    children: (t) => {
                        let { visibleContent: l } = t;
                        return (0, r.jsxs)("div", {
                            className: o()(h.sidebar, e, {
                                [h.mobile]: s.tq,
                                [h.mobileNavigationOpen]: j,
                            }),
                            children: [
                                (0, r.jsxs)("div", {
                                    className: h.fixedContent,
                                    children: [
                                        s.tq &&
                                            (0, r.jsx)("div", {
                                                className: h.mobileCloseButton,
                                                children: (0, r.jsx)(c.hU, {
                                                    icon: c.Uz9,
                                                    onClick: v,
                                                    variant: "icon-only",
                                                    size: "sm",
                                                    "aria-label": g.intl.string(g.t.cpT0Cq),
                                                }),
                                            }),
                                        (0, r.jsx)("div", {
                                            children: P.map((e) =>
                                                (0, r.jsx)(
                                                    x,
                                                    {
                                                        section: e,
                                                        visibleContent: l,
                                                        hoisted: !0,
                                                    },
                                                    e.key,
                                                ),
                                            ),
                                        }),
                                        null != n && (0, r.jsx)(n, {}),
                                        null != m && 0 === S.length && (0, r.jsx)(m, {}),
                                    ],
                                }),
                                (0, r.jsx)(a.bG, {
                                    navigator: E,
                                    children: (0, r.jsx)(a.SJ, {
                                        children: (e) => {
                                            var t,
                                                n,
                                                { ref: o } = e,
                                                a = (function (e, t) {
                                                    if (null == e) return {};
                                                    var n,
                                                        r,
                                                        l = (function (e, t) {
                                                            if (null == e) return {};
                                                            var n,
                                                                r,
                                                                l = {},
                                                                i = Object.keys(e);
                                                            for (r = 0; r < i.length; r++)
                                                                (n = i[r]), t.indexOf(n) >= 0 || (l[n] = e[n]);
                                                            return l;
                                                        })(e, t);
                                                    if (Object.getOwnPropertySymbols) {
                                                        var i = Object.getOwnPropertySymbols(e);
                                                        for (r = 0; r < i.length; r++)
                                                            (n = i[r]),
                                                                !(t.indexOf(n) >= 0) &&
                                                                    Object.prototype.propertyIsEnumerable.call(e, n) &&
                                                                    (l[n] = e[n]);
                                                    }
                                                    return l;
                                                })(e, ["ref"]);
                                            return (0, r.jsxs)(
                                                c.h21,
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
                                                            (O.current = e),
                                                                (o.current =
                                                                    null !=
                                                                    (t = null == e ? void 0 : e.getScrollerNode())
                                                                        ? t
                                                                        : null);
                                                        },
                                                        className: h.navScroller,
                                                        fade: !0,
                                                    },
                                                    a,
                                                )),
                                                (n = n =
                                                    {
                                                        children: [
                                                            (0, r.jsx)("nav", {
                                                                className: h.nav,
                                                                children: S.map((e) =>
                                                                    (0, r.jsx)(
                                                                        x,
                                                                        {
                                                                            section: e,
                                                                            visibleContent: l,
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
function x(e) {
    var t;
    let { section: n, visibleContent: l, hoisted: i = !1 } = e,
        o = null == (t = n.useLabel) ? void 0 : t.call(n);
    return (0, r.jsxs)("ul", {
        className: h.section,
        "aria-label": o,
        children: [
            null != o &&
                (0, r.jsx)("div", {
                    className: h.sectionLabel,
                    children: (0, r.jsx)(c.Heading, {
                        className: h.label,
                        variant: "heading-sm/medium",
                        color: "text-tertiary",
                        children: o,
                    }),
                }),
            n.layout.map((e) =>
                (0, r.jsx)(
                    v.y,
                    {
                        node: e,
                        visibleContent: l,
                        hoisted: i,
                    },
                    e.key,
                ),
            ),
        ],
    });
}
