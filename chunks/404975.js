n.d(t, { P: () => v }), n(539854), n(388685);
var r = n(54381),
    l = n(473749),
    i = n(120356),
    o = n.n(i),
    a = n(91192),
    c = n(873546),
    s = n(481060),
    u = n(724757),
    d = n(243778),
    f = n(984802),
    b = n(28682),
    p = n(996435),
    y = n(854014),
    j = n(388032),
    m = n(565184);
function v(e) {
    let { root: t, header: n, footer: i, onClose: y, emptyState: v } = e,
        x = p.Z.useField("showNavigationMobile"),
        h = l.useRef(null),
        O = l.useMemo(() => {
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
        C = (0, f.Ll)(),
        _ = (0, u.Z)("settings-sidebar", h);
    return (0, r.jsx)(s.f6W, {
        theme: C,
        children: (e) =>
            (0, r.jsx)(d.ZP, {
                contentTypes: O,
                children: (t) => {
                    let { visibleContent: l } = t;
                    return (0, r.jsxs)("div", {
                        className: o()(m.sidebar, e, {
                            [m.mobile]: c.tq,
                            [m.mobileNavigationOpen]: x,
                        }),
                        children: [
                            (0, r.jsxs)("div", {
                                className: m.fixedContent,
                                children: [
                                    c.tq &&
                                        (0, r.jsx)("div", {
                                            className: m.mobileCloseButton,
                                            children: (0, r.jsx)(s.hU, {
                                                icon: s.Uz9,
                                                onClick: y,
                                                variant: "icon-only",
                                                size: "sm",
                                                "aria-label": j.intl.string(j.t.cpT0Cq),
                                            }),
                                        }),
                                    (0, r.jsx)("div", {
                                        children: P.map((e) =>
                                            (0, r.jsx)(
                                                g,
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
                                    null != v && 0 === S.length && (0, r.jsx)(v, {}),
                                ],
                            }),
                            (0, r.jsx)(a.bG, {
                                navigator: _,
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
                                            s.h21,
                                            ((t = (function (e) {
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
                                            })(
                                                {
                                                    ref: (e) => {
                                                        var t;
                                                        (h.current = e),
                                                            (o.current =
                                                                null != (t = null == e ? void 0 : e.getScrollerNode())
                                                                    ? t
                                                                    : null);
                                                    },
                                                    className: m.navScroller,
                                                    fade: !0,
                                                },
                                                a,
                                            )),
                                            (n = n =
                                                {
                                                    children: [
                                                        (0, r.jsx)("nav", {
                                                            className: m.nav,
                                                            children: S.map((e) =>
                                                                (0, r.jsx)(
                                                                    g,
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
    });
}
function g(e) {
    var t;
    let { section: n, visibleContent: l, hoisted: i = !1 } = e,
        o = null == (t = n.useLabel) ? void 0 : t.call(n);
    return (0, r.jsxs)("ul", {
        className: m.section,
        "aria-label": o,
        children: [
            null != o &&
                (0, r.jsx)("div", {
                    className: m.sectionLabel,
                    children: (0, r.jsx)(s.Heading, {
                        className: m.label,
                        variant: "heading-sm/medium",
                        color: "text-tertiary",
                        children: o,
                    }),
                }),
            n.layout.map((e) =>
                (0, r.jsx)(
                    y.y,
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
