n.d(t, { default: () => e9 });
var l = n(477900),
    r = n(582128),
    i = n(613412),
    s = n(683438),
    a = n(834730),
    o = n(252452),
    c = n(139286),
    u = n(200921),
    d = n(729934),
    h = n(324593),
    g = n(855986),
    m = n(521489),
    x = n(568602),
    f = n(775602),
    v = n(531685),
    y = n(188567),
    A = n(140735),
    j = n(534514),
    p = n(707554),
    N = n(964486);
(n(667532), n(134528), n(947204));
var b = n(503698),
    S = n.n(b),
    C = n(607399),
    E = n(408278),
    I = n(477155),
    k = n(43990),
    P = n(331322),
    T = n(668953),
    w = n(972213),
    M = n(97469),
    _ = n(963935),
    R = n(894858),
    B = n(272053),
    D = n(528689),
    L = n(939249),
    O = n(215566),
    F = n(792996),
    K = n(764318);
function G(e) {
    let { node: t, isLast: n } = e,
        r = t.useTitle(),
        i = t.usePersistentBadge?.(),
        s = (0, l.jsxs)(P.B, {
            direction: "horizontal",
            align: "center",
            gap: "xs",
            className: K.Ze,
            children: [
                (0, l.jsx)(a.E, {
                    variant: n ? "body-md/medium" : "body-md/normal",
                    color: n ? "text-default" : void 0,
                    className: K.b,
                    children: r,
                }),
                n && null != i && (0, l.jsx)(O.A, { badge: i }),
                !n &&
                    (0, l.jsx)(a.E, {
                        variant: "body-md/normal",
                        color: "interactive-text-default",
                        "aria-hidden": !0,
                        children: "/",
                    }),
            ],
        });
    return (0, l.jsx)("li", {
        "aria-current": n ? "page" : void 0,
        className: K.QF,
        children: n
            ? s
            : (0, l.jsx)(L.D, {
                  onClick: function () {
                      B.A.navigate(t.key);
                  },
                  className: K.vk,
                  children: s,
              }),
    });
}
function z(e) {
    let { path: t } = e;
    return (0, l.jsx)("nav", {
        "aria-label": F.intl.string(F.t["bM+M/m"]),
        className: K.m7,
        children: (0, l.jsx)(P.B, {
            direction: "horizontal",
            role: "list",
            className: K.jD,
            children: t.map((e, n) => (0, l.jsx)(G, { node: e, isLast: n === t.length - 1 }, e.key)),
        }),
    });
}
var H = n(444493);
function X(e) {
    let { icon: t, label: n, onClick: r } = e;
    return (0, l.jsx)(E.K, { onClick: r, icon: t, size: "sm", variant: "icon-only", "aria-label": n });
}
function V(e) {
    let { setting: t, onClose: n } = e,
        r = (0, M.NC)(),
        i =
            null != t
                ? (function (e) {
                      let t = [e];
                      for (let n = e.parent; null != n && n.type !== _.Z6.SIDEBAR_ITEM; n = n.parent)
                          n.type === _.Z6.PANEL && t.unshift(n);
                      return t;
                  })(t)
                : [],
        s = i.at(-2),
        a = C.Fr && i.length <= 1,
        o = i.length > 1 && null != s;
    return (0, l.jsx)(k.N, {
        theme: r,
        children: (e) =>
            (0, l.jsxs)("div", {
                className: S()(H.$Q, e, { [H.HW]: a || o }),
                children: [
                    (0, l.jsxs)(P.B, {
                        direction: "horizontal",
                        align: "center",
                        className: H.y9,
                        children: [
                            a &&
                                (0, l.jsx)(X, {
                                    icon: T.ChevronLargeLeftIcon,
                                    onClick: () => R.A.setState({ showNavigationMobile: !0 }),
                                    label: F.intl.string(F.t["13/7kX"]),
                                }),
                            o &&
                                (0, l.jsx)(X, {
                                    icon: I.ArrowSmallLeftIcon,
                                    onClick: () => B.A.navigate(s.key),
                                    label: F.intl.string(F.t["13/7kX"]),
                                }),
                            null != t && (0, l.jsx)(z, { path: i }),
                        ],
                    }),
                    (0, l.jsx)(X, { icon: w.XLargeIcon, onClick: n, label: F.intl.string(F.t.cpT0Cq) }),
                ],
            }),
    });
}
let $ = r.memo(function (e) {
    let { onClose: t, setting: n } = e,
        r = R.A.useField("showNavigationMobile");
    return (0, l.jsxs)("div", {
        className: S()(H.Qs, { [H.Hw]: C.Fr, [H.n7]: r }),
        children: [
            (0, l.jsx)(V, { setting: n, onClose: t }),
            (0, l.jsx)("div", { className: H.yp, children: null != n && (0, l.jsx)(D.A, { node: n }) }),
        ],
    });
});
n(321073);
var q = n(837381),
    W = n(741918),
    Z = n(516521),
    U = n(928039),
    Q = n(263775),
    Y = n(199966),
    J = n(466448),
    ee = n(397274);
function et(e, t, n) {
    let { nodeKeyToDismissibleContents: l, dismissibleContentToBadge: r } = n,
        i = l.get(e);
    return null != t && null != i && i.has(t) ? r.get(t) : null;
}
var en = n(646514),
    el = n(805251),
    er = n(374193);
let ei = function (e) {
    let { badge: t } = e;
    switch (t.badgeType) {
        case er.Xi.NEW:
            return (0, l.jsx)(el.E, { type: "new", variant: "primary" });
        case er.Xi.STRONGLY_DISCOURAGED_CUSTOM:
            let { StronglyDiscouragedCustomComponent: n } = t;
            return (0, l.jsx)(n, {});
    }
};
var es = n(284009),
    ea = n.n(es),
    eo = n(120692),
    ec = n(935399),
    eu = n(319354),
    ed = n(717421),
    eh = n(253932),
    eg = n(480423);
let em = "refresh_sm";
function ex(e) {
    let { category: t, onClick: n, active: i, dismissibleBadge: s } = e,
        { useTitle: o, useSubnavLabel: c, key: u, usePersistentBadge: d } = t,
        h = d?.(),
        g = r.useMemo(
            () =>
                null != s
                    ? i
                        ? null
                        : (0, l.jsx)(ei, { badge: s })
                    : null != h
                      ? (0, l.jsx)(O.A, { badge: h })
                      : void 0,
            [i, s, h],
        ),
        m = o?.(),
        x = c?.() ?? m;
    return (
        ea()(null != x, "[SettingsSubnavigationCategory] Category must have a title"),
        (0, l.jsx)(q.tG, {
            id: u,
            children: (e) =>
                (0, l.jsx)("div", {
                    role: "listitem",
                    children: (0, l.jsxs)(
                        L.D,
                        {
                            onClick: n,
                            className: S()(eg.AS, { [eg.vu]: i }),
                            ...e,
                            role: "link",
                            "aria-current": i ? "location" : void 0,
                            children: [(0, l.jsx)(a.E, { variant: "body-md/normal", color: "none", children: x }), g],
                        },
                        u,
                    ),
                }),
        })
    );
}
function ef(e) {
    let t,
        n,
        i,
        s,
        { active: a, isTopLevelPanelVisible: o, visibleCategories: c, visibleContent: u, dismissibleBadges: d } = e,
        h = R.A.useField("currentCategoryKey"),
        [g, m] = r.useState(a);
    r.useLayoutEffect(() => {
        a && m(!0);
    }, [a]);
    let x = r.useMemo(() => c.findIndex((e) => e.key === h), [c, h]);
    r.useEffect(() => {
        if (!a) {
            let e = f.current;
            null != e &&
                ((e.style.height = `${e.scrollHeight}px`),
                window.getComputedStyle(e).height,
                (e.style.height = "0"),
                Promise.allSettled(e.getAnimations().map((e) => e.finished)).then(() => {
                    m(!1);
                }));
        }
    }, [a]);
    let f = r.useRef(null),
        [v, y] = r.useState(a ? "auto" : "0");
    return (
        (t = r.useRef(null)),
        (n = r.useRef(new Set())),
        (i = r.useRef(!1)),
        (s = r.useMemo(() => {
            let e = new Set();
            return (c.forEach((t) => e.add(t.key)), e);
        }, [c])),
        r.useEffect(() => {
            if (!o) return;
            let e = ee.A.getPanelScrollerNode();
            if (null == e) return;
            let l = e.querySelectorAll("[data-settings-category-key]"),
                r = e.querySelector("[data-panel-bottom]"),
                a = [];
            Array.from(l).forEach((e) => {
                let t = e.getAttribute("data-settings-category-key");
                null != t && s.has(t) && a.push(e);
            });
            let c = new Map(),
                u = [];
            return (
                a.forEach((e) => {
                    let t = e.getAttribute("data-settings-category-key");
                    null != t && (c.set(e, t), u.push(t));
                }),
                (t.current = new IntersectionObserver(
                    function (t) {
                        if (
                            null == e ||
                            (t.forEach((t) => {
                                let { isIntersecting: l, target: s } = t;
                                if (s === r) {
                                    let t = e.scrollHeight > e.clientHeight;
                                    i.current = l && t;
                                    return;
                                }
                                let a = c.get(s);
                                null != a && (l ? n.current.add(a) : n.current.delete(a));
                            }),
                            !ee.A.getIsSidebarCategoryAutoSelectEnabled())
                        )
                            return;
                        let l = [];
                        if (
                            (u.forEach((e) => {
                                n.current.has(e) && l.push(e);
                            }),
                            0 === l.length)
                        )
                            return;
                        let s = l.at(i.current ? -1 : 0);
                        R.A.getField("currentCategoryKey") !== s && R.A.setState({ currentCategoryKey: s });
                    },
                    { root: e, rootMargin: "0px 100000px 0px 100000px", threshold: 1 },
                )),
                a.forEach((e) => t.current?.observe(e)),
                null != r && t.current?.observe(r),
                () => {
                    (a.forEach((e) => t.current?.unobserve(e)),
                        null != r && t.current?.unobserve(r),
                        t.current?.disconnect(),
                        (t.current = null));
                }
            );
        }, [s, o]),
        (0, l.jsx)("div", {
            className: eg.lK,
            style: { height: v, opacity: +!!a },
            ref: f,
            children:
                g &&
                (0, l.jsx)(ev, {
                    index: x,
                    activeKey: h,
                    categories: c,
                    visibleContent: u,
                    dismissibleBadges: d,
                    onMount: function () {
                        let e = f.current;
                        null != e &&
                            ((e.style.height = `${e.scrollHeight}px`),
                            Promise.all(e.getAnimations().map((e) => e.finished))
                                .then(() => {
                                    ((e.style.height = "auto"),
                                        ee.A.scrollSidebarNodeIntoView(e, { animate: !0, block: "nearest" }));
                                })
                                .catch(() => {}));
                    },
                }),
        })
    );
}
function ev(e) {
    let { index: t, activeKey: n, categories: i, visibleContent: s, dismissibleBadges: a, onMount: o } = e,
        {
            thumbRef: c,
            trackRef: u,
            thumbAnchorRef: d,
            springs: h,
        } = (function (e) {
            let t = eh.Xi.useSetting(),
                n = r.useRef(null),
                l = r.useRef(null),
                i = r.useRef(null),
                s = r.useRef(!0),
                a = r.useRef(t),
                o = r.useRef(e),
                [c, u] = (0, ed.z)(() => ({ y: 0, height: 0, config: { mass: 0.1, friction: 20, tension: 300 } }));
            return (
                r.useLayoutEffect(() => {
                    let r = a.current !== t;
                    function d() {
                        if (null == n.current || null == l.current || null == i.current) return;
                        let [d, h] = [n.current.getBoundingClientRect(), i.current.getBoundingClientRect()],
                            g = d.width / 2,
                            m = (h.y - d.y) / g,
                            x = h.height / g;
                        (s.current || r || f.Ay.useReducedMotion || -1 === o.current
                            ? (c.y.set(m), c.height.set(x))
                            : u({ y: m, height: x }),
                            (s.current = !1),
                            (a.current = t),
                            (o.current = e));
                    }
                    let h = null;
                    return (
                        r
                            ? (h = requestAnimationFrame(() => {
                                  ((h = null), d());
                              }))
                            : d(),
                        () => {
                            null != h && cancelAnimationFrame(h);
                        }
                    );
                }, [e, u, c.y, c.height, t]),
                { thumbRef: l, trackRef: n, thumbAnchorRef: i, springs: c }
            );
        })(t);
    (0, ec.Ay)(o);
    let g = {
        "--custom-nav-count": i.length,
        "--custom-nav-index": Math.max(t, 0),
        "--custom-nav-width": "2px",
        "--custom-icon-size": `${eu.E[em]}px`,
    };
    return (0, l.jsxs)("div", {
        className: eg.o8,
        role: "list",
        style: g,
        children: [
            (0, l.jsx)("div", {
                className: eg.u4,
                "aria-hidden": "true",
                ref: u,
                children: (0, l.jsx)(eo.animated.div, {
                    className: S()(eg.FF, { [eg.R]: null == n }),
                    style: h,
                    ref: c,
                }),
            }),
            (0, l.jsx)("div", { className: eg.gu, "aria-hidden": "true", ref: d }),
            i.map((e) => {
                let t = et(e.key, s, a);
                return (0, l.jsx)(
                    ex,
                    {
                        onClick: () => {
                            var t;
                            return ((t = e.key), void B.A.navigate(t, { showNavigationMobile: !1 }));
                        },
                        active: e.key === n,
                        category: e,
                        dismissibleBadge: t,
                    },
                    e.key,
                );
            }),
        ],
    });
}
var ey = n(686380);
function eA(e) {
    let { onClick: t, active: n, node: i, dismissibleBadge: s, panelKey: o, listItemProps: c, children: u } = e,
        {
            icon: d,
            StronglyDiscouragedCustomComponent: h,
            usePersistentBadge: g,
            useTitle: m,
            variant: x = "default",
        } = i,
        f = m?.(),
        v = (function (e) {
            switch (e) {
                case "default":
                    return "currentColor";
                case "destructive":
                    return "text-feedback-critical";
            }
        })(x),
        y = (function (e) {
            switch (e) {
                case "default":
                    return "currentColor";
                case "destructive":
                    return en.A.colors.ICON_FEEDBACK_CRITICAL;
            }
        })(x),
        A = g?.(n),
        j = r.useMemo(
            () =>
                null != s
                    ? n
                        ? null
                        : (0, l.jsx)(ei, { badge: s })
                    : null != A
                      ? (0, l.jsx)(O.A, { badge: A })
                      : void 0,
            [n, s, A],
        );
    return (0, l.jsxs)("li", {
        "data-settings-sidebar-item": o,
        className: ey.DB,
        children: [
            (0, l.jsxs)(L.D, {
                ...c,
                role: "link",
                "aria-current": n ? "page" : void 0,
                className: S()(ey.AS, { [ey.vu]: n, [ey.RD]: "destructive" === x }),
                onClick: t,
                children: [
                    null != h
                        ? (0, l.jsx)(h, {})
                        : (0, l.jsxs)("div", {
                              className: ey.Ly,
                              children: [
                                  (0, l.jsx)(d, { color: y, size: em, className: ey.Kk }),
                                  (0, l.jsx)(a.E, { variant: "body-md/medium", color: v, children: f }),
                              ],
                          }),
                    j,
                ],
            }),
            u,
        ],
    });
}
function ej(e) {
    let { node: t, visibleContent: n, dismissibleBadges: i, hoisted: s = !1 } = e,
        a = r.useMemo(() => t.layout[0], [t]),
        o = R.A.useField("currentPanelKey"),
        { accessibleDirectory: c } = (0, Y._)(),
        u = a?.key === o,
        d = r.useMemo(() => {
            if (null == o) return !1;
            let e = c.entry(o);
            return e?.parentSidebarItemKey === t.key;
        }, [o, t.key, c]),
        h = r.useMemo(() => {
            if (null == a || !(0, _.zS)(a.layout)) return null;
            let e = a.layout.filter(_.bJ);
            return e.length > 1 ? e : null;
        }, [a]),
        g =
            null != a
                ? () => {
                      let e = o === a.key && null != h ? h[0].key : a.key;
                      B.A.navigate(e, { animateSidebarScroll: !0, showNavigationMobile: !1 });
                  }
                : t.onClick,
        m = null != o,
        x = r.useMemo(
            () =>
                null != h && m
                    ? (0, l.jsx)(ef, {
                          active: d,
                          isTopLevelPanelVisible: u,
                          visibleCategories: h,
                          visibleContent: n,
                          dismissibleBadges: i,
                      })
                    : null,
            [h, m, d, u, n, i],
        ),
        f = r.useMemo(() => et(t.key, n, i), [t.key, n, i]);
    return s
        ? (0, l.jsx)(eA, {
              panelKey: a?.key,
              onClick: g,
              active: d,
              "aria-expanded": null != h ? d : void 0,
              node: t,
              dismissibleBadge: f,
              children: x,
          })
        : (0, l.jsx)(q.tG, {
              id: a?.key ?? t.key,
              children: (e) =>
                  (0, l.jsx)(eA, {
                      panelKey: a?.key,
                      onClick: g,
                      active: d,
                      node: t,
                      dismissibleBadge: f,
                      listItemProps: e,
                      children: x,
                  }),
          });
}
var ep = n(639876);
function eN(e) {
    let { currentPanelKey: t, root: n, onClose: i, footer: s, emptyState: a, searchBar: o } = e,
        c = R.A.useField("showNavigationMobile"),
        u = r.useRef(null),
        [d] = r.useState(n),
        { accessibleDirectory: h } = (0, Y._)(),
        g = r.useMemo(() => {
            let e, t, n, l;
            return (
                (e = []),
                (t = new Map()),
                (n = new Map()),
                (l = new Map()),
                !(function e(t, n) {
                    if ((n(t), (0, _.nW)(t))) for (let l of t.layout) e(l, n);
                })(d, (r) => {
                    if (!("getDismissibleBadges" in r)) return;
                    let i = r.getDismissibleBadges?.();
                    if (null == i) return;
                    let s = h.entry(r.key);
                    if (s?.parentSidebarItemKey == null) return;
                    let a = null;
                    if (null != s.parentCategoryKey) {
                        let e = h.get(s.parentCategoryKey);
                        e?.type === _.Z6.CATEGORY && (0, _.bJ)(e) && (a = s.parentCategoryKey);
                    }
                    let o = { sidebarItemKey: s.parentSidebarItemKey, categoryKey: a };
                    i.forEach((r) =>
                        (function (r, i) {
                            let { dismissibleContent: s } = r;
                            (e.push(s), t.set(s, i), l.set(s, r));
                            let a = n.get(i.sidebarItemKey) ?? new Set();
                            if ((a.add(s), n.set(i.sidebarItemKey, a), null != i.categoryKey)) {
                                let e = n.get(i.categoryKey) ?? new Set();
                                (e.add(s), n.set(i.categoryKey, e));
                            }
                        })(r, o),
                    );
                }),
                {
                    allDismissibleContents: e,
                    dismissibleContentToNodeKeys: t,
                    nodeKeyToDismissibleContents: n,
                    dismissibleContentToBadge: l,
                }
            );
        }, [d, h]),
        [m] = (0, Q.kn)(g.allDismissibleContents);
    r.useEffect(() => {
        J.A.registerBadges(g, m);
    }, [g, m]);
    let [x, f] = r.useMemo(() => {
            let e = [],
                t = [];
            return (
                n.layout.forEach((n) => {
                    n.hoisted ? e.push(n) : t.push(n);
                }),
                [e, t]
            );
        }, [n.layout]),
        v = (0, M.NC)(),
        y = (0, U.A)("settings-sidebar", u, { orientation: W.Gl.VERTICAL, defaultFocused: t }),
        [N, b] = r.useState(!1),
        I = r.useCallback(() => {
            let e = u.current?.getScrollerNode();
            b(null != e && e.scrollTop > 12);
        }, []),
        P = r.useId();
    return (0, l.jsx)(k.N, {
        theme: v,
        children: (e) =>
            (0, l.jsxs)("aside", {
                "aria-labelledby": P,
                className: S()(ep.pz, e, { [ep.Hw]: C.Fr, [ep.n7]: c }),
                children: [
                    (0, l.jsx)(A.A, {
                        children: (0, l.jsx)(j.D, {
                            variant: "body-sm/semibold",
                            id: P,
                            children: F.intl.string(F.t["ZU3/B4"]),
                        }),
                    }),
                    (0, l.jsxs)(p.F, {
                        children: [
                            (0, l.jsxs)("div", {
                                className: S()(ep.gM, { [ep.to]: N }),
                                children: [
                                    C.Fr &&
                                        (0, l.jsx)("div", {
                                            className: ep.hg,
                                            children: (0, l.jsx)(E.K, {
                                                icon: w.XLargeIcon,
                                                onClick: i,
                                                variant: "icon-only",
                                                size: "sm",
                                                "aria-label": F.intl.string(F.t.cpT0Cq),
                                            }),
                                        }),
                                    (0, l.jsx)("div", {
                                        children: x.map((e) =>
                                            (0, l.jsx)(
                                                eb,
                                                { section: e, visibleContent: m, dismissibleBadges: g },
                                                e.key,
                                            ),
                                        ),
                                    }),
                                    null != o && (0, l.jsx)(o, {}),
                                    null != a && 0 === f.length && (0, l.jsx)(a, {}),
                                ],
                            }),
                            (0, l.jsx)("nav", {
                                className: ep.C$,
                                "aria-label": F.intl.string(F.t.MqTGqz),
                                children: (0, l.jsx)(q.hD, {
                                    navigator: y,
                                    children: (0, l.jsx)(q.PR, {
                                        children: (e) => {
                                            let { ref: t, ...n } = e;
                                            return (0, l.jsxs)(Z.Ch, {
                                                ref: (e) => {
                                                    ((u.current = e), ee.A.setSidebarScrollerRef(e), I());
                                                },
                                                className: ep.Mt,
                                                fade: !0,
                                                onScroll: I,
                                                children: [
                                                    (0, l.jsx)("ul", {
                                                        className: ep.jV,
                                                        ...n,
                                                        ref: t,
                                                        children: f.map((e) =>
                                                            (0, l.jsx)(
                                                                eS,
                                                                { section: e, visibleContent: m, dismissibleBadges: g },
                                                                e.key,
                                                            ),
                                                        ),
                                                    }),
                                                    null != s && (0, l.jsx)(s, {}),
                                                ],
                                            });
                                        },
                                    }),
                                }),
                            }),
                        ],
                    }),
                ],
            }),
    });
}
function eb(e) {
    let { section: t, visibleContent: n, dismissibleBadges: r } = e;
    return (0, l.jsx)("div", {
        className: ep.uW,
        children: (0, l.jsx)("ul", {
            className: ep.C4,
            children: t.layout.map((e) =>
                (0, l.jsx)(ej, { node: e, visibleContent: n, dismissibleBadges: r, hoisted: !0 }, e.key),
            ),
        }),
    });
}
function eS(e) {
    let { section: t, visibleContent: n, dismissibleBadges: i } = e,
        s = t.useTitle?.() ?? F.intl.string(F.t["3D5yo/"]),
        a = r.useId();
    return (0, l.jsxs)("li", {
        className: ep.uW,
        "aria-labelledby": a,
        children: [
            t.hideTitle
                ? (0, l.jsx)(A.A, { children: (0, l.jsx)(j.D, { id: a, variant: "heading-xs/medium", children: s }) })
                : (0, l.jsx)("div", {
                      className: ep.a9,
                      children: (0, l.jsx)(j.D, {
                          id: a,
                          className: ep.Pf,
                          variant: "heading-xs/medium",
                          color: "text-muted",
                          children: s,
                      }),
                  }),
            (0, l.jsx)("ul", {
                className: ep.C4,
                children: t.layout.map((e) =>
                    (0, l.jsx)(ej, { node: e, visibleContent: n, dismissibleBadges: i }, e.key),
                ),
            }),
        ],
    });
}
var eC = n(823092),
    eE = n(122088),
    eI = n(759031);
function ek(e) {
    let {
            partialRoot: t,
            target: n,
            defaultTarget: i,
            onClose: s,
            sidebarFooter: a,
            searchBar: o,
            onViewChange: c,
            emptyState: u,
            searchQuery: d,
            clearSearchQuery: h,
        } = e,
        g = R.A.useField("currentPanelKey"),
        { node: m, visibleDirectory: x, accessibleDirectory: f } = (0, eE.Ay)(t, d ?? ""),
        v = null != n && x.entry(n)?.parentPanelKey != null ? n : i,
        y = r.useMemo(() => {
            let e = f.entry(g ?? v)?.parentPanelKey;
            if (null != e) return f.getPanelOrThrow(e);
        }, [g, f, v]),
        { navigateWithValidation: b } = (0, eC.L_)(),
        S = r.useMemo(() => () => b(s), [b, s]);
    r.useEffect(() => {
        B.A.init({
            accessibleDirectory: f,
            onViewChange: c,
            navigateWithValidation: (e, t) => {
                (null == x.entry(e) && h?.(), b(t));
            },
            closeWithValidation: S,
        });
    }, [f, b, c, h, x, S]);
    let [C, E] = r.useState(!0);
    (0, N.Ay)(
        () => (
            B.A.navigate(v, { animatePanelScroll: !1, animateSidebarScroll: !1, showNavigationMobile: null == n }),
            E(!1),
            () => {
                (J.A.reset(), B.A.reset(), ee.A.reset(), R.A.resetState());
            }
        ),
    );
    let I = r.useMemo(() => ({ visibleDirectory: x, accessibleDirectory: f }), [x, f]),
        k = null != g ? x.get(g) : void 0,
        P = C ? void 0 : (k ?? y),
        T = P?.useTitle() ?? F.intl.string(F.t["3D5yo/"]);
    return (0, l.jsx)(Y.x.Provider, {
        value: I,
        children: (0, l.jsxs)("div", {
            className: eI.k,
            children: [
                (0, l.jsx)(A.A, { children: (0, l.jsx)(j.D, { variant: "body-sm/semibold", children: T }) }),
                (0, l.jsxs)(p.F, {
                    children: [
                        (0, l.jsx)(eN, {
                            currentPanelKey: g,
                            root: m,
                            onClose: S,
                            footer: a,
                            emptyState: u,
                            searchBar: o,
                        }),
                        (0, l.jsx)($, { onClose: S, setting: P }),
                    ],
                }),
            ],
        }),
    });
}
function eP(e) {
    return (0, l.jsx)(eC.ms, { children: (0, l.jsx)(ek, { ...e }) });
}
var eT = n(652215);
function ew(e) {
    let {
            partialRoot: t,
            target: n,
            defaultTarget: i,
            onViewChange: s,
            sidebarFooter: a,
            emptyState: o,
            searchQuery: c,
            clearSearchQuery: u,
            searchBar: d,
            ...h
        } = e,
        [A, j] = r.useState(!1),
        [p, N] = r.useState(1.4),
        b = r.useRef(null),
        S = (0, g.bG)([f.Ay], () => f.Ay.useReducedMotion),
        C = (0, g.bG)([v.A], () => v.A.isFocused());
    return (
        r.useEffect(() => {
            function e(e) {
                let { intensity: t, duration: n } = e;
                !S &&
                    C &&
                    (j(!0), N(t ?? 1.4), clearTimeout(b.current), (b.current = setTimeout(() => j(!1), n ?? 1e3)));
            }
            return (
                y._.subscribe(eT.jej.SHAKE_SETTINGS_MODAL, e),
                () => {
                    (y._.unsubscribe(eT.jej.SHAKE_SETTINGS_MODAL, e), clearTimeout(b.current));
                }
            );
        }, [S, C]),
        (0, l.jsx)(x.b, {
            isShaking: A,
            intensity: p,
            children: (0, l.jsx)(m.N, {
                ...h,
                children: (0, l.jsx)(eP, {
                    onClose: h.onClose,
                    partialRoot: t,
                    target: n,
                    defaultTarget: i,
                    onViewChange: s,
                    emptyState: o,
                    sidebarFooter: a,
                    searchQuery: c,
                    clearSearchQuery: u,
                    searchBar: d,
                }),
            }),
        })
    );
}
var eM = n(46653),
    e_ = n(287809),
    eR = n(152056),
    eB = n(780964),
    eD = n(634778),
    eL = n(165862),
    eO = n(477782),
    eF = n(28863),
    eK = n(265872),
    eG = n(975807),
    ez = n(212031),
    eH = n(975571),
    eX = n(481613),
    eV = n.n(eX),
    e$ = n(77729),
    eq = n(521502),
    eW = n(915089),
    eZ = n(206845),
    eU = n(253400),
    eQ = n(415443),
    eY = n(592739);
function eJ() {
    let e = (0, eW.GV)(),
        t = window.GLOBAL_ENV.RELEASE_CHANNEL,
        n = "672573",
        r = "53f1df8e679f987e5b0d7bc6791725872f59eab7".substring(0, 7),
        i = e$.A?.app.getVersion(),
        s = e$.A?.app.getBuildNumber(),
        o = e$.A?.app.getAppArch(),
        c = eq.A.getCurrentBuildOverride().overrides?.discord_web,
        u = null != c ? (0, eQ.A)("1794532258775", !1) : null,
        d = null != u ? ` (built ${u})` : "",
        h = (function () {
            let e = eV()?.os?.toString();
            if (null == e || null == e$.A) return null;
            let t = e$.A.os.release,
                [n, l, r] = eU.Ay.parsedOSRelease;
            return (
                e.includes("Windows 10") && void 0 !== r && r >= 22e3 && (e = e.replace("Windows 10", "Windows 11")),
                e.includes("OS X 10.15.7") && void 0 !== n && n >= 20 && (e = `macOS ${n >= 25 ? n + 1 : n - 9}`),
                `${e} (${t})`
            );
        })(),
        g = [t, n, `(${r})`];
    return (
        null != i && (g.push(`Host ${i}`), null != o && g.push(o.toLowerCase()), null != s && g.push(`(${s})`)),
        g.push(`Build Override: ${null != c ? c.id : "N/A"}${d}`),
        null != h && g.push(h),
        (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(eZ.A, {
                    copyValue: g.join(" "),
                    text: F.intl.string(F.t["9Al4Qd"]),
                    "aria-label": !1,
                    dataMeticulousIgnore: "true",
                    children: (u) =>
                        (0, l.jsxs)(L.D, {
                            ...u,
                            "aria-describedby": e,
                            className: S()(eY.vk, eY.oE),
                            children: [
                                (0, l.jsxs)("div", {
                                    className: eY.Cr,
                                    "data-mtctest-ignore": "true",
                                    children: [
                                        (0, l.jsxs)(a.E, {
                                            tag: "span",
                                            variant: "footnote/normal",
                                            color: "text-muted",
                                            children: [
                                                t,
                                                " ",
                                                n,
                                                " ",
                                                (0, l.jsxs)("span", { className: eY.Pc, children: ["(", r, ")"] }),
                                            ],
                                        }),
                                        null != i &&
                                            (0, l.jsxs)(a.E, {
                                                tag: "span",
                                                variant: "footnote/normal",
                                                color: "text-muted",
                                                children: [
                                                    i,
                                                    null != o &&
                                                        (0, l.jsxs)("span", {
                                                            className: eY.GI,
                                                            children: [" ", o.toLowerCase()],
                                                        }),
                                                    null != s && (0, l.jsxs)("span", { children: [" (", s, ")"] }),
                                                ],
                                            }),
                                    ],
                                }),
                                null != c &&
                                    (0, l.jsx)(a.E, {
                                        tag: "span",
                                        variant: "footnote/normal",
                                        color: "text-muted",
                                        children: (0, l.jsxs)("span", {
                                            className: eY.Pc,
                                            children: ["Build Override: ", c.id, d],
                                        }),
                                    }),
                            ],
                        }),
                }),
                (0, l.jsx)(A.A, { id: e, children: F.intl.string(F.t["9Al4Qd"]) }),
            ],
        })
    );
}
var e0 = n(370658);
function e1(e) {
    let { onClose: t } = e;
    return (0, l.jsx)(eL.W, {
        "data-menu-migrated-auto": !0,
        navId: "settings-footer-more-menu",
        onClose: t,
        onSelect: () => {},
        "aria-label": F.intl.string(F.t["6Ic4Ev"]),
        children: (0, l.jsxs)(eO.rX, {
            children: [
                (0, l.jsx)(eO.Dr, { id: "changelog", label: F.intl.string(F.t.LRmNAl), action: () => (0, ez.j)(!0) }),
                (0, l.jsx)(eO.Dr, {
                    id: "acknowledgements",
                    label: F.intl.string(F.t["0nUKy3"]),
                    action: () => (0, eG.A)(eT.X7G.ACKNOWLEDGEMENTS),
                }),
                (0, l.jsx)(eO.Dr, {
                    id: "support",
                    label: F.intl.string(F.t["Yl/Riu"]),
                    action: () => (0, eG.A)(eH.C),
                }),
            ],
        }),
    });
}
function e5() {
    let e = r.useRef(null);
    return (0, l.jsxs)("div", {
        children: [
            (0, l.jsx)(eJ, {}),
            (0, l.jsxs)("div", {
                className: e0.yJ,
                children: [
                    (0, l.jsx)(eF.Anchor, {
                        href: eT.X7G.PRIVACY,
                        children: (0, l.jsx)(a.E, {
                            tag: "span",
                            variant: "footnote/normal",
                            color: "currentColor",
                            children: F.intl.string(F.t["Knf/f/"]),
                        }),
                    }),
                    (0, l.jsx)("span", { className: e0.xE, "aria-hidden": "true", children: "\u2022" }),
                    (0, l.jsx)(eF.Anchor, {
                        href: eT.X7G.TERMS,
                        children: (0, l.jsx)(a.E, {
                            tag: "span",
                            variant: "footnote/normal",
                            color: "currentColor",
                            children: F.intl.string(F.t.uFSTGq),
                        }),
                    }),
                    (0, l.jsx)("span", { className: e0.xE, "aria-hidden": "true", children: "\u2022" }),
                    (0, l.jsx)(eK.Y, {
                        targetElementRef: e,
                        position: "top",
                        align: "center",
                        spacing: 0,
                        animation: eK.Y.Animation.NONE,
                        renderPopout: (e) => {
                            let { closePopout: t } = e;
                            return (0, l.jsx)(e1, { onClose: t });
                        },
                        children: (t, n) =>
                            (0, l.jsx)(eF.Anchor, {
                                ...t,
                                ref: e,
                                useDefaultUnderlineStyles: !1,
                                className: S()(e0.Mj, { [e0.vu]: n.isShown }),
                                children: (0, l.jsx)(a.E, {
                                    tag: "span",
                                    variant: "footnote/normal",
                                    color: "currentColor",
                                    children: F.intl.string(F.t["UKOtz+"]),
                                }),
                            }),
                    }),
                ],
            }),
        ],
    });
}
var e2 = n(402651),
    e3 = n(669067),
    e7 = n(830543),
    e8 = n(953056);
let e6 = new Set([eB.X.PROFILE_PANEL, eB.X.SUBSCRIPTIONS_PANEL, eB.X.FAMILY_CENTER_PANEL, eB.X.POGGERMODE_PANEL]),
    e4 = new Map([[eB.X.SESSIONS_PANEL, i.ImpressionNames.USER_SETTINGS_SESSIONS]]);
function e9(e) {
    let { target: t, ...n } = e,
        s = eR.A.useField("query"),
        a = r.useCallback(() => {
            (eR.A.setState({ query: "" }), h.A.terminate());
        }, []),
        [g, m] = r.useState(!1);
    return (r.useLayoutEffect(() => {
        function e() {
            null == e_.default.getCurrentUser() && (m(!0), (0, e7.default)());
        }
        return (
            eM.default.addChangeListener(e),
            () => {
                (eM.default.removeChangeListener(e), e2.A.resetState(), d.A.resetState(), o.A.close(), (0, u.ZQ)());
            }
        );
    }, []),
    g)
        ? null
        : (0, l.jsx)(ew, {
              partialRoot: eD.D,
              searchBar: te,
              emptyState: tt,
              sidebarFooter: e5,
              onViewChange: function (e) {
                  e6.has(e) || (0, e3._)(e);
                  let t = e4.get(e);
                  (null != t &&
                      (0, c.x)({
                          type: i.ImpressionTypes.PANE,
                          name: t,
                          properties: { source: e2.A.getField("source") },
                      }),
                      e2.A.setState({ source: void 0 }));
              },
              target: t,
              defaultTarget: eB.X.ACCOUNT_PANEL,
              searchQuery: s,
              clearSearchQuery: a,
              ...n,
          });
}
function te() {
    let e = eR.A.useField("query"),
        t = r.useCallback((e) => {
            (eR.A.setState({ query: e }), h.A.maybeTrackQueryEntered());
        }, []),
        n = r.useCallback(() => {
            h.A.isSessionActive() || h.A.initialize();
        }, []),
        i = r.useCallback(() => {
            0 === eR.A.getField("query").trim().length && h.A.terminate();
        }, []),
        a = r.useCallback(() => {
            (eR.A.setState({ query: "" }), h.A.terminate());
        }, []);
    return (
        r.useEffect(
            () => () => {
                (eR.A.resetState(), h.A.terminate());
            },
            [],
        ),
        (0, l.jsx)("div", {
            className: e8.P,
            children: (0, l.jsx)(s.I, { size: "md", query: e, onFocus: n, onBlur: i, onChange: t, onClear: a }),
        })
    );
}
function tt() {
    return (0, l.jsxs)("div", {
        className: e8.t,
        children: [
            (0, l.jsx)(a.E, { variant: "body-sm/semibold", color: "text-strong", children: F.intl.string(F.t.zihbmv) }),
            (0, l.jsx)(a.E, { variant: "body-sm/normal", color: "text-subtle", children: F.intl.string(F.t.XclvsB) }),
        ],
    });
}
