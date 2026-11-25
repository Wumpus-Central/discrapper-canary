n.d(t, { default: () => e7 });
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
    m = n(855986),
    g = n(521489),
    x = n(568602),
    f = n(775602),
    v = n(531685),
    y = n(188567),
    A = n(140735),
    j = n(534514),
    p = n(707554),
    S = n(964486);
(n(667532), n(134528), n(947204));
var N = n(503698),
    E = n.n(N),
    b = n(607399),
    C = n(408278),
    I = n(477155),
    k = n(43990),
    _ = n(331322),
    P = n(668953),
    T = n(972213),
    R = n(97469),
    w = n(963935),
    M = n(894858),
    D = n(272053),
    B = n(528689),
    O = n(939249),
    L = n(215566),
    F = n(792996),
    K = n(764318);
function G(e) {
    let { node: t, isLast: n } = e,
        r = t.useTitle(),
        i = t.usePersistentBadge?.(),
        s = (0, l.jsxs)(_.B, {
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
                n && null != i && (0, l.jsx)(L.A, { badge: i }),
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
            : (0, l.jsx)(O.D, {
                  onClick: function () {
                      D.A.navigate(t.key);
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
        children: (0, l.jsx)(_.B, {
            direction: "horizontal",
            role: "list",
            className: K.jD,
            children: t.map((e, n) => (0, l.jsx)(G, { node: e, isLast: n === t.length - 1 }, e.key)),
        }),
    });
}
var V = n(444493);
function H(e) {
    let { icon: t, label: n, onClick: r } = e;
    return (0, l.jsx)(C.K, { onClick: r, icon: t, size: "sm", variant: "icon-only", "aria-label": n });
}
function X(e) {
    let { setting: t, onClose: n } = e,
        r = (0, R.NC)(),
        i =
            null != t
                ? (function (e) {
                      let t = [e];
                      for (let n = e.parent; null != n && n.type !== w.Z6.SIDEBAR_ITEM; n = n.parent)
                          n.type === w.Z6.PANEL && t.unshift(n);
                      return t;
                  })(t)
                : [],
        s = i.at(-2),
        a = b.Fr && i.length <= 1,
        o = i.length > 1 && null != s;
    return (0, l.jsx)(k.N, {
        theme: r,
        children: (e) =>
            (0, l.jsxs)("div", {
                className: E()(V.$Q, e, { [V.HW]: a || o }),
                children: [
                    (0, l.jsxs)(_.B, {
                        direction: "horizontal",
                        align: "center",
                        className: V.y9,
                        children: [
                            a &&
                                (0, l.jsx)(H, {
                                    icon: P.ChevronLargeLeftIcon,
                                    onClick: () => M.A.setState({ showNavigationMobile: !0 }),
                                    label: F.intl.string(F.t["13/7kX"]),
                                }),
                            o &&
                                (0, l.jsx)(H, {
                                    icon: I.ArrowSmallLeftIcon,
                                    onClick: () => D.A.navigate(s.key),
                                    label: F.intl.string(F.t["13/7kX"]),
                                }),
                            null != t && (0, l.jsx)(z, { path: i }),
                        ],
                    }),
                    (0, l.jsx)(H, { icon: T.XLargeIcon, onClick: n, label: F.intl.string(F.t.cpT0Cq) }),
                ],
            }),
    });
}
let U = r.memo(function (e) {
    let { onClose: t, setting: n } = e,
        r = M.A.useField("showNavigationMobile");
    return (0, l.jsxs)("div", {
        className: E()(V.Qs, { [V.Hw]: b.Fr, [V.n7]: r }),
        children: [
            (0, l.jsx)(X, { setting: n, onClose: t }),
            (0, l.jsx)("div", { className: V.yp, children: null != n && (0, l.jsx)(B.A, { node: n }) }),
        ],
    });
});
n(321073);
var q = n(837381),
    Y = n(741918),
    $ = n(516521),
    W = n(928039),
    Z = n(263775),
    Q = n(199966),
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
    eo = n(156150),
    ec = n(935399),
    eu = n(319354),
    ed = n(717421),
    eh = n(253932),
    em = n(480423);
let eg = "refresh_sm";
function ex(e) {
    let { category: t, onClick: n, active: i, dismissibleBadge: s } = e,
        { useTitle: o, useSubnavLabel: c, key: u, usePersistentBadge: d } = t,
        h = d?.(),
        m = r.useMemo(
            () =>
                null != s
                    ? i
                        ? null
                        : (0, l.jsx)(ei, { badge: s })
                    : null != h
                      ? (0, l.jsx)(L.A, { badge: h })
                      : void 0,
            [i, s, h],
        ),
        g = o?.(),
        x = c?.() ?? g;
    return (
        ea()(null != x, "[SettingsSubnavigationCategory] Category must have a title"),
        (0, l.jsx)(q.tG, {
            id: u,
            children: (e) =>
                (0, l.jsx)("div", {
                    role: "listitem",
                    children: (0, l.jsxs)(
                        O.D,
                        {
                            onClick: n,
                            className: E()(em.AS, { [em.vu]: i }),
                            ...e,
                            role: "link",
                            "aria-current": i ? "location" : void 0,
                            children: [(0, l.jsx)(a.E, { variant: "body-md/normal", color: "none", children: x }), m],
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
        h = M.A.useField("currentCategoryKey"),
        [m, g] = r.useState(a);
    r.useLayoutEffect(() => {
        a && g(!0);
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
                    g(!1);
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
                        M.A.getField("currentCategoryKey") !== s && M.A.setState({ currentCategoryKey: s });
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
            className: em.lK,
            style: { height: v, opacity: +!!a },
            ref: f,
            children:
                m &&
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
                            m = d.width / 2,
                            g = (h.y - d.y) / m,
                            x = h.height / m;
                        (s.current || r || f.Ay.useReducedMotion || -1 === o.current
                            ? (c.y.set(g), c.height.set(x))
                            : u({ y: g, height: x }),
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
    let m = {
        "--custom-nav-count": i.length,
        "--custom-nav-index": Math.max(t, 0),
        "--custom-nav-width": "2px",
        "--custom-icon-size": `${eu.E[eg]}px`,
    };
    return (0, l.jsxs)("div", {
        className: em.o8,
        role: "list",
        style: m,
        children: [
            (0, l.jsx)("div", {
                className: em.u4,
                "aria-hidden": "true",
                ref: u,
                children: (0, l.jsx)(eo.animated.div, {
                    className: E()(em.FF, { [em.R]: null == n }),
                    style: h,
                    ref: c,
                }),
            }),
            (0, l.jsx)("div", { className: em.gu, "aria-hidden": "true", ref: d }),
            i.map((e) => {
                let t = et(e.key, s, a);
                return (0, l.jsx)(
                    ex,
                    {
                        onClick: () => {
                            var t;
                            return ((t = e.key), void D.A.navigate(t, { showNavigationMobile: !1 }));
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
            usePersistentBadge: m,
            useTitle: g,
            variant: x = "default",
        } = i,
        f = g?.(),
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
        A = m?.(n),
        j = r.useMemo(
            () =>
                null != s
                    ? n
                        ? null
                        : (0, l.jsx)(ei, { badge: s })
                    : null != A
                      ? (0, l.jsx)(L.A, { badge: A })
                      : void 0,
            [n, s, A],
        );
    return (0, l.jsxs)("li", {
        "data-settings-sidebar-item": o,
        className: ey.DB,
        children: [
            (0, l.jsxs)(O.D, {
                ...c,
                role: "link",
                "aria-current": n ? "page" : void 0,
                className: E()(ey.AS, { [ey.vu]: n, [ey.RD]: "destructive" === x }),
                onClick: t,
                children: [
                    null != h
                        ? (0, l.jsx)(h, {})
                        : (0, l.jsxs)("div", {
                              className: ey.Ly,
                              children: [
                                  (0, l.jsx)(d, { color: y, size: eg, className: ey.Kk }),
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
        o = M.A.useField("currentPanelKey"),
        { accessibleDirectory: c } = (0, Q._)(),
        u = a?.key === o,
        d = r.useMemo(() => {
            if (null == o) return !1;
            let e = c.entry(o);
            return e?.parentSidebarItemKey === t.key;
        }, [o, t.key, c]),
        h = r.useMemo(() => {
            if (null == a || !(0, w.zS)(a.layout)) return null;
            let e = a.layout.filter(w.bJ);
            return e.length > 1 ? e : null;
        }, [a]),
        m =
            null != a
                ? () => {
                      let e = o === a.key && null != h ? h[0].key : a.key;
                      D.A.navigate(e, { animateSidebarScroll: !0, showNavigationMobile: !1 });
                  }
                : t.onClick,
        g = null != o,
        x = r.useMemo(
            () =>
                null != h && g
                    ? (0, l.jsx)(ef, {
                          active: d,
                          isTopLevelPanelVisible: u,
                          visibleCategories: h,
                          visibleContent: n,
                          dismissibleBadges: i,
                      })
                    : null,
            [h, g, d, u, n, i],
        ),
        f = r.useMemo(() => et(t.key, n, i), [t.key, n, i]);
    return s
        ? (0, l.jsx)(eA, {
              panelKey: a?.key,
              onClick: m,
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
                      onClick: m,
                      active: d,
                      node: t,
                      dismissibleBadge: f,
                      listItemProps: e,
                      children: x,
                  }),
          });
}
var ep = n(639876);
function eS(e) {
    let { currentPanelKey: t, root: n, onClose: i, footer: s, emptyState: a, searchBar: o } = e,
        c = M.A.useField("showNavigationMobile"),
        u = r.useRef(null),
        [d] = r.useState(n),
        { accessibleDirectory: h } = (0, Q._)(),
        m = r.useMemo(() => {
            let e, t, n, l;
            return (
                (e = []),
                (t = new Map()),
                (n = new Map()),
                (l = new Map()),
                !(function e(t, n) {
                    if ((n(t), (0, w.nW)(t))) for (let l of t.layout) e(l, n);
                })(d, (r) => {
                    if (!("getDismissibleBadges" in r)) return;
                    let i = r.getDismissibleBadges?.();
                    if (null == i) return;
                    let s = h.entry(r.key);
                    if (s?.parentSidebarItemKey == null) return;
                    let a = null;
                    if (null != s.parentCategoryKey) {
                        let e = h.get(s.parentCategoryKey);
                        e?.type === w.Z6.CATEGORY && (0, w.bJ)(e) && (a = s.parentCategoryKey);
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
        [g] = (0, Z.kn)(m.allDismissibleContents);
    r.useEffect(() => {
        J.A.registerBadges(m, g);
    }, [m, g]);
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
        v = (0, R.NC)(),
        y = (0, W.A)("settings-sidebar", u, { orientation: Y.Gl.VERTICAL, defaultFocused: t }),
        [S, N] = r.useState(!1),
        I = r.useCallback(() => {
            let e = u.current?.getScrollerNode();
            N(null != e && e.scrollTop > 12);
        }, []),
        _ = r.useId();
    return (0, l.jsx)(k.N, {
        theme: v,
        children: (e) =>
            (0, l.jsxs)("aside", {
                "aria-labelledby": _,
                className: E()(ep.pz, e, { [ep.Hw]: b.Fr, [ep.n7]: c }),
                children: [
                    (0, l.jsx)(A.A, {
                        children: (0, l.jsx)(j.D, {
                            variant: "body-sm/semibold",
                            id: _,
                            children: F.intl.string(F.t["ZU3/B4"]),
                        }),
                    }),
                    (0, l.jsxs)(p.F, {
                        children: [
                            (0, l.jsxs)("div", {
                                className: E()(ep.gM, { [ep.to]: S }),
                                children: [
                                    b.Fr &&
                                        (0, l.jsx)("div", {
                                            className: ep.hg,
                                            children: (0, l.jsx)(C.K, {
                                                icon: T.XLargeIcon,
                                                onClick: i,
                                                variant: "icon-only",
                                                size: "sm",
                                                "aria-label": F.intl.string(F.t.cpT0Cq),
                                            }),
                                        }),
                                    (0, l.jsx)("div", {
                                        children: x.map((e) =>
                                            (0, l.jsx)(
                                                eN,
                                                { section: e, visibleContent: g, dismissibleBadges: m },
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
                                            return (0, l.jsxs)($.Ch, {
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
                                                                eE,
                                                                { section: e, visibleContent: g, dismissibleBadges: m },
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
function eN(e) {
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
function eE(e) {
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
var eb = n(823092),
    eC = n(122088),
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
        m = M.A.useField("currentPanelKey"),
        { node: g, visibleDirectory: x, accessibleDirectory: f } = (0, eC.Ay)(t, d ?? ""),
        v = null != n && x.entry(n)?.parentPanelKey != null ? n : i,
        y = r.useMemo(() => {
            let e = f.entry(m ?? v)?.parentPanelKey;
            if (null != e) return f.getPanelOrThrow(e);
        }, [m, f, v]),
        { navigateWithValidation: N } = (0, eb.L_)(),
        E = r.useMemo(() => () => N(s), [N, s]);
    r.useEffect(() => {
        D.A.init({
            accessibleDirectory: f,
            onViewChange: c,
            navigateWithValidation: (e, t) => {
                (null == x.entry(e) && h?.(), N(t));
            },
            closeWithValidation: E,
        });
    }, [f, N, c, h, x, E]);
    let [b, C] = r.useState(!0);
    (0, S.Ay)(
        () => (
            D.A.navigate(v, { animatePanelScroll: !1, animateSidebarScroll: !1, showNavigationMobile: null == n }),
            C(!1),
            () => {
                (J.A.reset(), D.A.reset(), ee.A.reset(), M.A.resetState());
            }
        ),
    );
    let I = r.useMemo(() => ({ visibleDirectory: x, accessibleDirectory: f }), [x, f]),
        k = null != m ? x.get(m) : void 0,
        _ = b ? void 0 : (k ?? y),
        P = _?.useTitle() ?? F.intl.string(F.t["3D5yo/"]);
    return (0, l.jsx)(Q.x.Provider, {
        value: I,
        children: (0, l.jsxs)("div", {
            className: eI.k,
            children: [
                (0, l.jsx)(A.A, { children: (0, l.jsx)(j.D, { variant: "body-sm/semibold", children: P }) }),
                (0, l.jsxs)(p.F, {
                    children: [
                        (0, l.jsx)(eS, {
                            currentPanelKey: m,
                            root: g,
                            onClose: E,
                            footer: a,
                            emptyState: u,
                            searchBar: o,
                        }),
                        (0, l.jsx)(U, { onClose: E, setting: _ }),
                    ],
                }),
            ],
        }),
    });
}
function e_(e) {
    return (0, l.jsx)(eb.ms, { children: (0, l.jsx)(ek, { ...e }) });
}
var eP = n(652215);
function eT(e) {
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
        [p, S] = r.useState(1.4),
        N = r.useRef(null),
        E = (0, m.bG)([f.Ay], () => f.Ay.useReducedMotion),
        b = (0, m.bG)([v.A], () => v.A.isFocused());
    return (
        r.useEffect(() => {
            function e(e) {
                let { intensity: t, duration: n } = e;
                !E &&
                    b &&
                    (j(!0), S(t ?? 1.4), clearTimeout(N.current), (N.current = setTimeout(() => j(!1), n ?? 1e3)));
            }
            return (
                y._.subscribe(eP.jej.SHAKE_SETTINGS_MODAL, e),
                () => {
                    (y._.unsubscribe(eP.jej.SHAKE_SETTINGS_MODAL, e), clearTimeout(N.current));
                }
            );
        }, [E, b]),
        (0, l.jsx)(x.b, {
            isShaking: A,
            intensity: p,
            children: (0, l.jsx)(g.N, {
                ...h,
                children: (0, l.jsx)(e_, {
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
var eR = n(46653),
    ew = n(287809),
    eM = n(152056),
    eD = n(780964),
    eB = n(95767),
    eO = n(165862),
    eL = n(477782),
    eF = n(28863),
    eK = n(265872),
    eG = n(975807),
    ez = n(212031),
    eV = n(975571),
    eH = n(481613),
    eX = n.n(eH),
    eU = n(77729),
    eq = n(521502),
    eY = n(915089),
    e$ = n(206845),
    eW = n(253400),
    eZ = n(415443),
    eQ = n(592739);
function eJ() {
    let e = (0, eY.GV)(),
        t = window.GLOBAL_ENV.RELEASE_CHANNEL,
        n = "681377",
        r = "f5263cc87facdb62406e378f76493c2b2c8bd524".substring(0, 7),
        i = eU.A?.app.getVersion(),
        s = eU.A?.app.getBuildNumber(),
        o = eU.A?.app.getAppArch(),
        c = eq.A.getCurrentBuildOverride().overrides?.discord_web,
        u = null != c ? (0, eZ.A)("1795640722202", !1) : null,
        d = null != u ? ` (built ${u})` : "",
        h = (function () {
            let e = eX()?.os?.toString();
            if (null == e || null == eU.A) return null;
            let t = eU.A.os.release,
                [n, l, r] = eW.Ay.parsedOSRelease;
            return (
                e.includes("Windows 10") && void 0 !== r && r >= 22e3 && (e = e.replace("Windows 10", "Windows 11")),
                e.includes("OS X 10.15.7") && void 0 !== n && n >= 20 && (e = `macOS ${n >= 25 ? n + 1 : n - 9}`),
                `${e} (${t})`
            );
        })(),
        m = [t, n, `(${r})`];
    return (
        null != i && (m.push(`Host ${i}`), null != o && m.push(o.toLowerCase()), null != s && m.push(`(${s})`)),
        m.push(`Build Override: ${null != c ? c.id : "N/A"}${d}`),
        null != h && m.push(h),
        (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(e$.A, {
                    copyValue: m.join(" "),
                    text: F.intl.string(F.t["9Al4Qd"]),
                    "aria-label": !1,
                    dataMeticulousIgnore: "true",
                    children: (u) =>
                        (0, l.jsxs)(O.D, {
                            ...u,
                            "aria-describedby": e,
                            className: E()(eQ.vk, eQ.oE),
                            children: [
                                (0, l.jsxs)("div", {
                                    className: eQ.Cr,
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
                                                (0, l.jsxs)("span", { className: eQ.Pc, children: ["(", r, ")"] }),
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
                                                            className: eQ.GI,
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
                                            className: eQ.Pc,
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
    return (0, l.jsx)(eO.W, {
        "data-menu-migrated-auto": !0,
        navId: "settings-footer-more-menu",
        onClose: t,
        onSelect: () => {},
        "aria-label": F.intl.string(F.t["6Ic4Ev"]),
        children: (0, l.jsxs)(eL.rX, {
            children: [
                (0, l.jsx)(eL.Dr, { id: "changelog", label: F.intl.string(F.t.LRmNAl), action: () => (0, ez.j)(!0) }),
                (0, l.jsx)(eL.Dr, {
                    id: "acknowledgements",
                    label: F.intl.string(F.t["0nUKy3"]),
                    action: () => (0, eG.A)(eP.X7G.ACKNOWLEDGEMENTS),
                }),
                (0, l.jsx)(eL.Dr, {
                    id: "support",
                    label: F.intl.string(F.t["Yl/Riu"]),
                    action: () => (0, eG.A)(eV.C),
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
                        href: eP.X7G.PRIVACY,
                        children: (0, l.jsx)(a.E, {
                            tag: "span",
                            variant: "footnote/normal",
                            color: "currentColor",
                            children: F.intl.string(F.t["Knf/f/"]),
                        }),
                    }),
                    (0, l.jsx)("span", { className: e0.xE, "aria-hidden": "true", children: "\u2022" }),
                    (0, l.jsx)(eF.Anchor, {
                        href: eP.X7G.TERMS,
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
                                className: E()(e0.Mj, { [e0.vu]: n.isShown }),
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
    e6 = n(830543),
    e8 = n(953056);
let e4 = new Set([eD.X.PROFILE_PANEL, eD.X.SUBSCRIPTIONS_PANEL, eD.X.FAMILY_CENTER_PANEL, eD.X.POGGERMODE_PANEL]),
    e9 = new Map([[eD.X.SESSIONS_PANEL, i.ImpressionNames.USER_SETTINGS_SESSIONS]]);
function e7(e) {
    let { target: t, ...n } = e,
        s = eM.A.useField("query"),
        a = r.useCallback(() => {
            (eM.A.setState({ query: "" }), h.A.terminate());
        }, []),
        [m, g] = r.useState(!1);
    return (r.useLayoutEffect(() => {
        function e() {
            null == ew.default.getCurrentUser() && (g(!0), (0, e6.default)());
        }
        return (
            eR.default.addChangeListener(e),
            () => {
                (eR.default.removeChangeListener(e), e2.A.resetState(), d.A.resetState(), o.A.close(), (0, u.ZQ)());
            }
        );
    }, []),
    m)
        ? null
        : (0, l.jsx)(eT, {
              partialRoot: eB.D,
              searchBar: te,
              emptyState: tt,
              sidebarFooter: e5,
              onViewChange: function (e) {
                  e4.has(e) || (0, e3._)(e);
                  let t = e9.get(e);
                  (null != t &&
                      (0, c.x)({
                          type: i.ImpressionTypes.PANE,
                          name: t,
                          properties: { source: e2.A.getField("source") },
                      }),
                      e2.A.setState({ source: void 0 }));
              },
              target: t,
              defaultTarget: eD.X.ACCOUNT_PANEL,
              searchQuery: s,
              clearSearchQuery: a,
              ...n,
          });
}
function te() {
    let e = eM.A.useField("query"),
        t = r.useCallback((e) => {
            (eM.A.setState({ query: e }), h.A.maybeTrackQueryEntered());
        }, []),
        n = r.useCallback(() => {
            h.A.isSessionActive() || h.A.initialize();
        }, []),
        i = r.useCallback(() => {
            0 === eM.A.getField("query").trim().length && h.A.terminate();
        }, []),
        a = r.useCallback(() => {
            (eM.A.setState({ query: "" }), h.A.terminate());
        }, []);
    return (
        r.useEffect(
            () => () => {
                (eM.A.resetState(), h.A.terminate());
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
