n.d(t, { default: () => e3 });
var i = n(627968),
    s = n(64700),
    r = n(562708),
    l = n(892547),
    a = n(834730),
    c = n(252452),
    o = n(139286),
    u = n(200921),
    d = n(507553),
    m = n(89381),
    h = n(17928),
    g = n(521489),
    x = n(568602),
    f = n(775602),
    p = n(531685),
    A = n(625494),
    y = n(140735),
    v = n(297264),
    S = n(707554),
    b = n(964486);
n(667532), n(134528), n(947204);
var j = n(503698),
    I = n.n(j),
    N = n(607399),
    E = n(408278),
    C = n(477155),
    T = n(43990),
    P = n(331322),
    R = n(668953),
    w = n(972213),
    k = n(97469),
    M = n(963935),
    _ = n(894858),
    L = n(272053),
    D = n(377980),
    O = n(939249),
    B = n(215566),
    K = n(375708),
    G = n(508891);
function F(e) {
    let { node: t, isLast: n } = e,
        s = t.useTitle(),
        r = t.usePersistentBadge?.(),
        l = (0, i.jsxs)(P.B, {
            direction: "horizontal",
            align: "center",
            gap: "xs",
            className: G.Ze,
            children: [
                (0, i.jsx)(a.E, {
                    variant: n ? "text-md/medium" : "text-md/normal",
                    color: n ? "text-default" : void 0,
                    className: G.b,
                    children: s,
                }),
                n && null != r && (0, i.jsx)(B.A, { badge: r }),
                !n &&
                    (0, i.jsx)(a.E, {
                        variant: "text-md/normal",
                        color: "interactive-text-default",
                        "aria-hidden": !0,
                        children: "/",
                    }),
            ],
        });
    return (0, i.jsx)("li", {
        "aria-current": n ? "page" : void 0,
        className: G.QF,
        children: n
            ? l
            : (0, i.jsx)(O.D, {
                  onClick: function () {
                      L.A.navigate(t.key);
                  },
                  className: G.vk,
                  children: l,
              }),
    });
}
function U(e) {
    let { path: t } = e;
    return (0, i.jsx)("nav", {
        "aria-label": K.intl.string(K.t["bM+M/m"]),
        className: G.m7,
        children: (0, i.jsx)(P.B, {
            direction: "horizontal",
            role: "list",
            className: G.jD,
            children: t.map((e, n) => (0, i.jsx)(F, { node: e, isLast: n === t.length - 1 }, e.key)),
        }),
    });
}
var W = n(441562);
function H(e) {
    let { icon: t, label: n, onClick: s } = e;
    return (0, i.jsx)(E.K, { onClick: s, icon: t, size: "sm", variant: "icon-only", "aria-label": n });
}
function z(e) {
    let { setting: t, onClose: n } = e,
        s = (0, k.NC)(),
        r =
            null != t
                ? (function (e) {
                      let t = [e];
                      for (let n = e.parent; null != n && n.type !== M.Z6.SIDEBAR_ITEM; n = n.parent)
                          n.type === M.Z6.PANEL && t.unshift(n);
                      return t;
                  })(t)
                : [],
        l = r.at(-2),
        a = N.Fr && r.length <= 1,
        c = r.length > 1 && null != l;
    return (0, i.jsx)(T.N, {
        theme: s,
        children: (e) =>
            (0, i.jsxs)("div", {
                className: I()(W.$Q, e, { [W.HW]: a || c }),
                children: [
                    (0, i.jsxs)(P.B, {
                        direction: "horizontal",
                        align: "center",
                        className: W.y9,
                        children: [
                            a &&
                                (0, i.jsx)(H, {
                                    icon: R.f,
                                    onClick: () => _.A.setState({ showNavigationMobile: !0 }),
                                    label: K.intl.string(K.t["13/7kX"]),
                                }),
                            c &&
                                (0, i.jsx)(H, {
                                    icon: C.r,
                                    onClick: () => L.A.navigate(l.key),
                                    label: K.intl.string(K.t["13/7kX"]),
                                }),
                            null != t && (0, i.jsx)(U, { path: r }),
                        ],
                    }),
                    (0, i.jsx)(H, { icon: w.d, onClick: n, label: K.intl.string(K.t.cpT0Cq) }),
                ],
            }),
    });
}
let V = s.memo(function (e) {
    let { onClose: t, setting: n } = e,
        s = _.A.useField("showNavigationMobile");
    return (0, i.jsxs)("div", {
        className: I()(W.Qs, { [W.Hw]: N.Fr, [W.n7]: s }),
        children: [
            (0, i.jsx)(z, { setting: n, onClose: t }),
            (0, i.jsx)("div", { className: W.yp, children: null != n && (0, i.jsx)(D.A, { node: n }) }),
        ],
    });
});
n(321073);
var X = n(837381),
    Y = n(741918),
    Z = n(689175),
    q = n(928039),
    $ = n(131607),
    Q = n(199966),
    J = n(397274);
function ee(e, t, n) {
    let { nodeKeyToDismissibleContents: i, dismissibleContentToBadge: s } = n,
        r = i.get(e);
    return null != t && null != r && r.has(t) ? s.get(t) : null;
}
var et = n(661531),
    en = n(508770),
    ei = n(933297);
let es = function (e) {
    let { badge: t } = e;
    switch (t.badgeType) {
        case ei.Xi.NEW:
            return (0, i.jsx)(en.E, { type: "new", variant: "brand" });
        case ei.Xi.STRONGLY_DISCOURAGED_CUSTOM:
            let { StronglyDiscouragedCustomComponent: n } = t;
            return (0, i.jsx)(n, {});
    }
};
var er = n(284009),
    el = n.n(er),
    ea = n(580929),
    ec = n(935399),
    eo = n(319354),
    eu = n(717421),
    ed = n(885386),
    em = n(429566);
function eh(e) {
    let { category: t, onClick: n, active: r, dismissibleBadge: l } = e,
        { useTitle: a, useSubnavLabel: c, key: o, usePersistentBadge: u } = t,
        d = u?.(),
        m = s.useMemo(
            () =>
                null != l
                    ? r
                        ? null
                        : (0, i.jsx)(es, { badge: l })
                    : null != d
                      ? (0, i.jsx)(B.A, { badge: d })
                      : void 0,
            [r, l, d],
        ),
        h = a?.(),
        g = c?.() ?? h;
    return (
        el()(null != g, "[SettingsSubnavigationCategory] Category must have a title"),
        (0, i.jsx)(X.tG, {
            id: o,
            children: (e) =>
                (0, i.jsx)("div", {
                    role: "listitem",
                    children: (0, i.jsxs)(
                        O.D,
                        {
                            onClick: n,
                            className: I()(em.AS, { [em.vu]: r }),
                            ...e,
                            role: "link",
                            "aria-current": r ? "location" : void 0,
                            children: [g, m],
                        },
                        o,
                    ),
                }),
        })
    );
}
function eg(e) {
    let t,
        n,
        r,
        l,
        { active: a, isTopLevelPanelVisible: c, visibleCategories: o, visibleContent: u, dismissibleBadges: d } = e,
        m = _.A.useField("currentCategoryKey"),
        [h, g] = s.useState(a);
    s.useLayoutEffect(() => {
        a && g(!0);
    }, [a]);
    let x = s.useMemo(() => o.findIndex((e) => e.key === m), [o, m]);
    s.useEffect(() => {
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
    let f = s.useRef(null),
        [p, A] = s.useState(a ? "auto" : "0");
    return (
        (t = s.useRef(null)),
        (n = s.useRef(new Set())),
        (r = s.useRef(!1)),
        (l = s.useMemo(() => {
            let e = new Set();
            return o.forEach((t) => e.add(t.key)), e;
        }, [o])),
        s.useEffect(() => {
            if (!c) return;
            let e = J.A.getPanelScrollerNode();
            if (null == e) return;
            let i = e.querySelectorAll("[data-settings-category-key]"),
                s = e.querySelector("[data-panel-bottom]"),
                a = [];
            Array.from(i).forEach((e) => {
                let t = e.getAttribute("data-settings-category-key");
                null != t && l.has(t) && a.push(e);
            });
            let o = new Map(),
                u = [];
            return (
                a.forEach((e) => {
                    let t = e.getAttribute("data-settings-category-key");
                    null != t && (o.set(e, t), u.push(t));
                }),
                (t.current = new IntersectionObserver(
                    (t) => {
                        if (
                            (t.forEach((t) => {
                                let { isIntersecting: i, target: l } = t;
                                if (l === s) {
                                    let t = e.scrollHeight > e.clientHeight;
                                    r.current = i && t;
                                    return;
                                }
                                let a = o.get(l);
                                null != a && (i ? n.current.add(a) : n.current.delete(a));
                            }),
                            !J.A.getIsSidebarCategoryAutoSelectEnabled())
                        )
                            return;
                        let i = [];
                        if (
                            (u.forEach((e) => {
                                n.current.has(e) && i.push(e);
                            }),
                            0 === i.length)
                        )
                            return;
                        let l = i.at(r.current ? -1 : 0);
                        _.A.getField("currentCategoryKey") !== l && _.A.setState({ currentCategoryKey: l });
                    },
                    { root: e, rootMargin: "0px 100000px 0px 100000px", threshold: 1 },
                )),
                a.forEach((e) => t.current?.observe(e)),
                null != s && t.current?.observe(s),
                () => {
                    a.forEach((e) => t.current?.unobserve(e)),
                        null != s && t.current?.unobserve(s),
                        t.current?.disconnect(),
                        (t.current = null);
                }
            );
        }, [l, c]),
        (0, i.jsx)("div", {
            className: em.lK,
            style: { height: p, opacity: +!!a },
            ref: f,
            children:
                h &&
                (0, i.jsx)(ex, {
                    index: x,
                    activeKey: m,
                    categories: o,
                    visibleContent: u,
                    dismissibleBadges: d,
                    onMount: function () {
                        let e = f.current;
                        null != e &&
                            ((e.style.height = `${e.scrollHeight}px`),
                            Promise.all(e.getAnimations().map((e) => e.finished))
                                .then(() => {
                                    (e.style.height = "auto"),
                                        J.A.scrollSidebarNodeIntoView(e, { animate: !0, block: "nearest" });
                                })
                                .catch(() => {}));
                    },
                }),
        })
    );
}
function ex(e) {
    let { index: t, activeKey: n, categories: r, visibleContent: l, dismissibleBadges: a, onMount: c } = e,
        {
            thumbRef: o,
            trackRef: u,
            thumbAnchorRef: d,
            springs: m,
        } = (function (e) {
            let t = ed.Xi.useSetting(),
                n = s.useRef(null),
                i = s.useRef(null),
                r = s.useRef(null),
                l = s.useRef(!0),
                a = s.useRef(t),
                c = s.useRef(e),
                [o, u] = (0, eu.z)(() => ({ y: 0, height: 0, config: { mass: 0.1, friction: 20, tension: 300 } }));
            return (
                s.useLayoutEffect(() => {
                    let s = a.current !== t;
                    function d() {
                        if (null == n.current || null == i.current || null == r.current) return;
                        let [d, m] = [n.current.getBoundingClientRect(), r.current.getBoundingClientRect()],
                            h = d.width / 2,
                            g = (m.y - d.y) / h,
                            x = m.height / h;
                        l.current || s || f.Ay.useReducedMotion || -1 === c.current
                            ? (o.y.set(g), o.height.set(x))
                            : u({ y: g, height: x }),
                            (l.current = !1),
                            (a.current = t),
                            (c.current = e);
                    }
                    let m = null;
                    return (
                        s
                            ? (m = requestAnimationFrame(() => {
                                  (m = null), d();
                              }))
                            : d(),
                        () => {
                            null != m && cancelAnimationFrame(m);
                        }
                    );
                }, [e, u, o.y, o.height, t]),
                { thumbRef: i, trackRef: n, thumbAnchorRef: r, springs: o }
            );
        })(t);
    return (
        (0, ec.Ay)(c),
        (0, i.jsxs)("div", {
            className: em.o8,
            role: "list",
            style: {
                "--custom-nav-count": r.length,
                "--custom-nav-index": Math.max(t, 0),
                "--custom-nav-width": "2px",
                "--custom-icon-size": `${eo.E[ep]}px`,
            },
            children: [
                (0, i.jsx)("div", {
                    className: em.u4,
                    "aria-hidden": "true",
                    ref: u,
                    children: (0, i.jsx)(ea.animated.div, {
                        className: I()(em.FF, { [em.R]: null == n }),
                        style: m,
                        ref: o,
                    }),
                }),
                (0, i.jsx)("div", { className: em.gu, "aria-hidden": "true", ref: d }),
                r.map((e) => {
                    let t = ee(e.key, l, a);
                    return (0, i.jsx)(
                        eh,
                        {
                            onClick: () => {
                                var t;
                                return (t = e.key), void L.A.navigate(t, { showNavigationMobile: !1 });
                            },
                            active: e.key === n,
                            category: e,
                            dismissibleBadge: t,
                        },
                        e.key,
                    );
                }),
            ],
        })
    );
}
var ef = n(585635);
let ep = "refresh_sm";
function eA(e) {
    let { onClick: t, active: n, node: r, dismissibleBadge: l, panelKey: c, listItemProps: o, children: u } = e,
        {
            icon: d,
            StronglyDiscouragedCustomComponent: m,
            usePersistentBadge: h,
            useTitle: g,
            variant: x = "default",
        } = r,
        f = g?.(),
        p = (function (e) {
            switch (e) {
                case "default":
                    return "currentColor";
                case "destructive":
                    return "text-feedback-critical";
            }
        })(x),
        A = (function (e) {
            switch (e) {
                case "default":
                    return "currentColor";
                case "destructive":
                    return et.A.colors.ICON_FEEDBACK_CRITICAL;
            }
        })(x),
        y = h?.(n),
        v = s.useMemo(
            () =>
                null != l
                    ? n
                        ? null
                        : (0, i.jsx)(es, { badge: l })
                    : null != y
                      ? (0, i.jsx)(B.A, { badge: y })
                      : void 0,
            [n, l, y],
        );
    return (0, i.jsxs)("li", {
        "data-settings-sidebar-item": c,
        className: ef.DB,
        children: [
            (0, i.jsxs)(O.D, {
                ...o,
                role: "link",
                "aria-current": n ? "page" : void 0,
                className: I()(ef.AS, { [ef.vu]: n, [ef.RD]: "destructive" === x }),
                onClick: t,
                children: [
                    null != m
                        ? (0, i.jsx)(m, {})
                        : (0, i.jsxs)("div", {
                              className: ef.Ly,
                              children: [
                                  (0, i.jsx)(d, { color: A, size: ep, className: ef.Kk }),
                                  (0, i.jsx)(a.E, { variant: "text-md/medium", color: p, children: f }),
                              ],
                          }),
                    v,
                ],
            }),
            u,
        ],
    });
}
function ey(e) {
    let { node: t, visibleContent: n, dismissibleBadges: r, hoisted: l = !1 } = e,
        a = s.useMemo(() => t.layout[0], [t]),
        c = _.A.useField("currentPanelKey"),
        { accessibleDirectory: o } = (0, Q._)(),
        u = a?.key === c,
        d = s.useMemo(() => {
            if (null == c) return !1;
            let e = o.entry(c);
            return e?.parentSidebarItemKey === t.key;
        }, [c, t.key, o]),
        m = s.useMemo(() => {
            if (null == a || !(0, M.Iu)(a.layout)) return null;
            let e = a.layout.filter(M.bJ);
            return e.length > 1 ? e : null;
        }, [a]),
        h =
            null != a
                ? () => {
                      let e = c === a.key && null != m ? m[0].key : a.key;
                      L.A.navigate(e, { animateSidebarScroll: !0, showNavigationMobile: !1 });
                  }
                : t.onClick,
        g = null != c,
        x = s.useMemo(
            () =>
                null != m && g
                    ? (0, i.jsx)(eg, {
                          active: d,
                          isTopLevelPanelVisible: u,
                          visibleCategories: m,
                          visibleContent: n,
                          dismissibleBadges: r,
                      })
                    : null,
            [m, g, d, u, n, r],
        ),
        f = s.useMemo(() => ee(t.key, n, r), [t.key, n, r]);
    return l
        ? (0, i.jsx)(eA, {
              panelKey: a?.key,
              onClick: h,
              active: d,
              "aria-expanded": null != m ? d : void 0,
              node: t,
              dismissibleBadge: f,
              children: x,
          })
        : (0, i.jsx)(X.tG, {
              id: a?.key ?? t.key,
              children: (e) =>
                  (0, i.jsx)(eA, {
                      panelKey: a?.key,
                      onClick: h,
                      active: d,
                      node: t,
                      dismissibleBadge: f,
                      listItemProps: e,
                      children: x,
                  }),
          });
}
var ev = n(826673),
    eS = n(49999),
    eb = n(443263);
function ej(e) {
    let { currentPanelKey: t, root: n, onClose: r, footer: l, emptyState: a, searchBar: c } = e,
        o = _.A.useField("showNavigationMobile"),
        u = s.useRef(null),
        [d] = s.useState(n),
        { accessibleDirectory: m } = (0, Q._)(),
        h = s.useMemo(() => {
            let e, t, n, i;
            return (
                (e = []),
                (t = new Map()),
                (n = new Map()),
                (i = new Map()),
                !(function e(t, n) {
                    if ((n(t), (0, M.nW)(t))) for (let i of t.layout) e(i, n);
                })(d, (s) => {
                    if (!("getDismissibleBadges" in s)) return;
                    let r = s.getDismissibleBadges?.();
                    if (null == r) return;
                    let l = m.entry(s.key);
                    if (l?.parentSidebarItemKey == null) return;
                    let a = null;
                    if (null != l.parentCategoryKey) {
                        let e = m.get(l.parentCategoryKey);
                        e?.type === M.Z6.CATEGORY && (0, M.bJ)(e) && (a = l.parentCategoryKey);
                    }
                    let c = { sidebarItemKey: l.parentSidebarItemKey, categoryKey: a };
                    r.forEach((s) =>
                        (function (s, r) {
                            let { dismissibleContent: l } = s;
                            e.push(l), t.set(l, r), i.set(l, s);
                            let a = n.get(r.sidebarItemKey) ?? new Set();
                            if ((a.add(l), n.set(r.sidebarItemKey, a), null != r.categoryKey)) {
                                let e = n.get(r.categoryKey) ?? new Set();
                                e.add(l), n.set(r.categoryKey, e);
                            }
                        })(s, c),
                    );
                }),
                {
                    allDismissibleContents: e,
                    dismissibleContentToNodeKeys: t,
                    nodeKeyToDismissibleContents: n,
                    dismissibleContentToBadge: i,
                }
            );
        }, [d, m]),
        [g] = (0, $.kn)(h.allDismissibleContents);
    !(function (e) {
        let { visibleContent: t, dismissibleBadges: n, accessibleDirectory: i } = e,
            { dismissibleContentToNodeKeys: r, nodeKeyToDismissibleContents: l } = n,
            a = s.useRef(!1);
        s.useEffect(() => {
            if (((a.current = !1), null == t || !r.has(t))) return;
            let e = r.get(t);
            if (null == e) return;
            let n = () => {
                    a.current = !1;
                    let t = l.get(e.sidebarItemKey);
                    null != t &&
                        t.forEach((e) => {
                            (0, ev.Dr)(e, { dismissAction: eS.i.AUTO, forceTrack: !0 });
                        });
                },
                s = _.A.subscribe(
                    (e) => {
                        let { currentPanelKey: t } = e;
                        return t;
                    },
                    (t) => {
                        let s = null != t && null != i ? i.entry(t)?.parentSidebarItemKey : null;
                        null != s && (s === e.sidebarItemKey ? (a.current = !0) : a.current && n());
                    },
                    { equalityFn: (e, t) => e === t, fireImmediately: !0 },
                );
            return () => {
                s(), a.current && n();
            };
        }, [t, r, i, l]);
    })({ visibleContent: g, dismissibleBadges: h, accessibleDirectory: m });
    let [x, f] = s.useMemo(() => {
            let e = [],
                t = [];
            return (
                n.layout.forEach((n) => {
                    n.hoisted ? e.push(n) : t.push(n);
                }),
                [e, t]
            );
        }, [n.layout]),
        p = (0, k.NC)(),
        A = (0, q.A)("settings-sidebar", u, { orientation: Y.Gl.VERTICAL, defaultFocused: t }),
        [b, j] = s.useState(!1),
        C = s.useCallback(() => {
            let e = u.current?.getScrollerNode();
            j(null != e && e.scrollTop > 12);
        }, []),
        P = s.useId();
    return (0, i.jsx)(T.N, {
        theme: p,
        children: (e) =>
            (0, i.jsxs)("aside", {
                "aria-labelledby": P,
                className: I()(eb.pz, e, { [eb.Hw]: N.Fr, [eb.n7]: o }),
                children: [
                    (0, i.jsx)(y.A, {
                        children: (0, i.jsx)(v.D, {
                            variant: "text-sm/bold",
                            id: P,
                            children: K.intl.string(K.t["ZU3/B4"]),
                        }),
                    }),
                    (0, i.jsxs)(S.F, {
                        children: [
                            (0, i.jsxs)("div", {
                                className: I()(eb.gM, { [eb.to]: b }),
                                children: [
                                    N.Fr &&
                                        (0, i.jsx)("div", {
                                            className: eb.hg,
                                            children: (0, i.jsx)(E.K, {
                                                icon: w.d,
                                                onClick: r,
                                                variant: "icon-only",
                                                size: "sm",
                                                "aria-label": K.intl.string(K.t.cpT0Cq),
                                            }),
                                        }),
                                    (0, i.jsx)("div", {
                                        children: x.map((e) =>
                                            (0, i.jsx)(
                                                eI,
                                                { section: e, visibleContent: g, dismissibleBadges: h },
                                                e.key,
                                            ),
                                        ),
                                    }),
                                    null != c && (0, i.jsx)(c, {}),
                                    null != a && 0 === f.length && (0, i.jsx)(a, {}),
                                ],
                            }),
                            (0, i.jsx)("nav", {
                                className: eb.C$,
                                "aria-label": K.intl.string(K.t.MqTGqz),
                                children: (0, i.jsx)(X.hD, {
                                    navigator: A,
                                    children: (0, i.jsx)(X.PR, {
                                        children: (e) => {
                                            let { ref: t, ...n } = e;
                                            return (0, i.jsxs)(Z.Ch, {
                                                ref: (e) => {
                                                    (u.current = e), J.A.setSidebarScrollerRef(e), C();
                                                },
                                                className: eb.Mt,
                                                fade: !0,
                                                onScroll: C,
                                                children: [
                                                    (0, i.jsx)("ul", {
                                                        className: eb.jV,
                                                        ...n,
                                                        ref: t,
                                                        children: f.map((e) =>
                                                            (0, i.jsx)(
                                                                eN,
                                                                { section: e, visibleContent: g, dismissibleBadges: h },
                                                                e.key,
                                                            ),
                                                        ),
                                                    }),
                                                    null != l && (0, i.jsx)(l, {}),
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
function eI(e) {
    let { section: t, visibleContent: n, dismissibleBadges: s } = e;
    return (0, i.jsx)("div", {
        className: eb.uW,
        children: (0, i.jsx)("ul", {
            className: eb.C4,
            children: t.layout.map((e) =>
                (0, i.jsx)(ey, { node: e, visibleContent: n, dismissibleBadges: s, hoisted: !0 }, e.key),
            ),
        }),
    });
}
function eN(e) {
    let { section: t, visibleContent: n, dismissibleBadges: r } = e,
        l = t.useTitle?.() ?? K.intl.string(K.t["3D5yo/"]),
        a = s.useId();
    return (0, i.jsxs)("li", {
        className: eb.uW,
        "aria-labelledby": a,
        children: [
            t.hideTitle
                ? (0, i.jsx)(y.A, { children: (0, i.jsx)(v.D, { id: a, variant: "heading-sm/medium", children: l }) })
                : (0, i.jsx)("div", {
                      className: eb.a9,
                      children: (0, i.jsx)(v.D, {
                          id: a,
                          className: eb.Pf,
                          variant: "heading-sm/medium",
                          color: "text-muted",
                          children: l,
                      }),
                  }),
            (0, i.jsx)("ul", {
                className: eb.C4,
                children: t.layout.map((e) =>
                    (0, i.jsx)(ey, { node: e, visibleContent: n, dismissibleBadges: r }, e.key),
                ),
            }),
        ],
    });
}
var eE = n(823092),
    eC = n(581298),
    eT = n(910772);
function eP(e) {
    let {
            partialRoot: t,
            target: n,
            defaultTarget: r,
            onClose: l,
            sidebarFooter: a,
            searchBar: c,
            onViewChange: o,
            emptyState: u,
            searchQuery: d,
            clearSearchQuery: m,
        } = e,
        h = _.A.useField("currentPanelKey"),
        { node: g, visibleDirectory: x, accessibleDirectory: f } = (0, eC.Ay)(t, d ?? ""),
        p = null != n && x.entry(n)?.parentPanelKey != null ? n : r,
        A = s.useMemo(() => {
            let e = f.entry(h ?? p)?.parentPanelKey;
            if (null != e) return f.getPanelOrThrow(e);
        }, [h, f, p]),
        { navigateWithValidation: j } = (0, eE.L_)(),
        I = s.useMemo(() => () => j(l), [j, l]);
    s.useEffect(() => {
        L.A.init({
            accessibleDirectory: f,
            onViewChange: o,
            navigateWithValidation: (e, t) => {
                null == x.entry(e) && m?.(), j(t);
            },
            closeWithValidation: I,
        });
    }, [f, j, o, m, x, I]);
    let [N, E] = s.useState(!0);
    (0, b.Ay)(
        () => (
            L.A.navigate(p, { animatePanelScroll: !1, animateSidebarScroll: !1, showNavigationMobile: null == n }),
            E(!1),
            () => {
                L.A.reset(), J.A.reset(), _.A.resetState();
            }
        ),
    );
    let C = s.useMemo(() => ({ visibleDirectory: x, accessibleDirectory: f }), [x, f]),
        T = null != h ? x.get(h) : void 0,
        P = N ? void 0 : (T ?? A),
        R = P?.useTitle() ?? K.intl.string(K.t["3D5yo/"]);
    return (0, i.jsx)(Q.x.Provider, {
        value: C,
        children: (0, i.jsxs)("div", {
            className: eT.k,
            children: [
                (0, i.jsx)(y.A, { children: (0, i.jsx)(v.D, { variant: "text-sm/bold", children: R }) }),
                (0, i.jsxs)(S.F, {
                    children: [
                        (0, i.jsx)(ej, {
                            currentPanelKey: h,
                            root: g,
                            onClose: I,
                            footer: a,
                            emptyState: u,
                            searchBar: c,
                        }),
                        (0, i.jsx)(V, { onClose: I, setting: P }),
                    ],
                }),
            ],
        }),
    });
}
function eR(e) {
    return (0, i.jsx)(eE.ms, { children: (0, i.jsx)(eP, { ...e }) });
}
var ew = n(652215);
function ek(e) {
    let {
            partialRoot: t,
            target: n,
            defaultTarget: r,
            onViewChange: l,
            sidebarFooter: a,
            emptyState: c,
            searchQuery: o,
            clearSearchQuery: u,
            searchBar: d,
            ...m
        } = e,
        [y, v] = s.useState(!1),
        [S, b] = s.useState(1.4),
        j = s.useRef(null),
        I = (0, h.bG)([f.Ay], () => f.Ay.useReducedMotion),
        N = (0, h.bG)([p.A], () => p.A.isFocused());
    return (
        s.useEffect(() => {
            function e(e) {
                let { intensity: t, duration: n } = e;
                !I &&
                    N &&
                    (v(!0), b(t ?? 1.4), clearTimeout(j.current), (j.current = setTimeout(() => v(!1), n ?? 1e3)));
            }
            return (
                A._.subscribe(ew.jej.SHAKE_SETTINGS_MODAL, e),
                () => {
                    A._.unsubscribe(ew.jej.SHAKE_SETTINGS_MODAL, e), clearTimeout(j.current);
                }
            );
        }, [I, N]),
        (0, i.jsx)(x.b, {
            isShaking: y,
            intensity: S,
            children: (0, i.jsx)(g.N, {
                ...m,
                children: (0, i.jsx)(eR, {
                    onClose: m.onClose,
                    partialRoot: t,
                    target: n,
                    defaultTarget: r,
                    onViewChange: l,
                    emptyState: c,
                    sidebarFooter: a,
                    searchQuery: o,
                    clearSearchQuery: u,
                    searchBar: d,
                }),
            }),
        })
    );
}
var eM = n(280450),
    e_ = n(287809),
    eL = n(152056),
    eD = n(780964),
    eO = n(357927),
    eB = n(980707),
    eK = n(477782),
    eG = n(349288),
    eF = n(922016),
    eU = n(975807),
    eW = n(212031),
    eH = n(975571),
    ez = n(481613),
    eV = n.n(ez),
    eX = n(77729),
    eY = n(521502),
    eZ = n(915089),
    eq = n(206845),
    e$ = n(19575),
    eQ = n(763224);
function eJ() {
    let e = (0, eZ.GV)(),
        t = window.GLOBAL_ENV.RELEASE_CHANNEL,
        n = "579941",
        s = "e7cef2ea462b5cc6ddecfda90199f7b97ebd946f".substring(0, 7),
        r = eX.A?.app.getVersion(),
        l = eX.A?.app.getBuildNumber(),
        c = eX.A?.app.getAppArch(),
        o = eY.A.getCurrentBuildOverride().overrides?.discord_web,
        u = (function () {
            let e = eV()?.os?.toString();
            if (null == e || null == eX.A) return null;
            let t = eX.A.os.release,
                [n, i, s] = e$.Ay.parsedOSRelease;
            return (
                e.includes("Windows 10") && void 0 !== s && s >= 22e3 && (e = e.replace("Windows 10", "Windows 11")),
                e.includes("OS X 10.15.7") && void 0 !== n && n >= 20 && (e = `macOS ${n >= 25 ? n + 1 : n - 9}`),
                `${e} (${t})`
            );
        })(),
        d = [t, n, `(${s})`];
    return (
        null != r && (d.push(`Host ${r}`), null != c && d.push(c.toLowerCase()), null != l && d.push(`(${l})`)),
        d.push(`Build Override: ${null != o ? o.id : "N/A"}`),
        null != u && d.push(u),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(eq.A, {
                    copyValue: d.join(" "),
                    text: K.intl.string(K.t["9Al4Qd"]),
                    "aria-label": !1,
                    dataMeticulousIgnore: "true",
                    children: (u) =>
                        (0, i.jsxs)(O.D, {
                            ...u,
                            "aria-describedby": e,
                            className: I()(eQ.vk, eQ.oE),
                            children: [
                                (0, i.jsxs)("div", {
                                    className: eQ.Cr,
                                    "data-mtctest-ignore": "true",
                                    children: [
                                        (0, i.jsxs)(a.E, {
                                            tag: "span",
                                            variant: "text-xxs/normal",
                                            color: "text-muted",
                                            children: [
                                                t,
                                                " ",
                                                n,
                                                " ",
                                                (0, i.jsxs)("span", { className: eQ.Pc, children: ["(", s, ")"] }),
                                            ],
                                        }),
                                        null != r &&
                                            (0, i.jsxs)(a.E, {
                                                tag: "span",
                                                variant: "text-xxs/normal",
                                                color: "text-muted",
                                                children: [
                                                    r,
                                                    null != c &&
                                                        (0, i.jsxs)("span", {
                                                            className: eQ.GI,
                                                            children: [" ", c.toLowerCase()],
                                                        }),
                                                    null != l && (0, i.jsxs)("span", { children: [" (", l, ")"] }),
                                                ],
                                            }),
                                    ],
                                }),
                                null != o &&
                                    (0, i.jsx)(a.E, {
                                        tag: "span",
                                        variant: "text-xxs/normal",
                                        color: "text-muted",
                                        children: (0, i.jsxs)("span", {
                                            className: eQ.Pc,
                                            children: ["Build Override: ", o.id],
                                        }),
                                    }),
                            ],
                        }),
                }),
                (0, i.jsx)(y.A, { id: e, children: K.intl.string(K.t["9Al4Qd"]) }),
            ],
        })
    );
}
var e0 = n(779801);
function e1(e) {
    let { onClose: t } = e;
    return (0, i.jsx)(eB.W, {
        "data-menu-migrated-auto": !0,
        navId: "settings-footer-more-menu",
        onClose: t,
        onSelect: () => {},
        "aria-label": "More options",
        children: (0, i.jsxs)(eK.rX, {
            children: [
                (0, i.jsx)(eK.Dr, { id: "changelog", label: K.intl.string(K.t.LRmNAl), action: () => (0, eW.j)(!0) }),
                (0, i.jsx)(eK.Dr, {
                    id: "acknowledgements",
                    label: K.intl.string(K.t["0nUKy3"]),
                    action: () => (0, eU.A)(ew.X7G.ACKNOWLEDGEMENTS),
                }),
                (0, i.jsx)(eK.Dr, {
                    id: "support",
                    label: K.intl.string(K.t["Yl/Riu"]),
                    action: () => (0, eU.A)(eH.C),
                }),
            ],
        }),
    });
}
function e2() {
    let e = s.useRef(null);
    return (0, i.jsxs)("div", {
        children: [
            (0, i.jsx)(eJ, {}),
            (0, i.jsxs)("div", {
                className: e0.yJ,
                children: [
                    (0, i.jsx)(eG.Anchor, {
                        href: ew.X7G.PRIVACY,
                        children: (0, i.jsx)(a.E, {
                            tag: "span",
                            variant: "text-xxs/normal",
                            color: "currentColor",
                            children: K.intl.string(K.t["Knf/f/"]),
                        }),
                    }),
                    (0, i.jsx)("span", { className: e0.xE, "aria-hidden": "true", children: "\u2022" }),
                    (0, i.jsx)(eG.Anchor, {
                        href: ew.X7G.TERMS,
                        children: (0, i.jsx)(a.E, {
                            tag: "span",
                            variant: "text-xxs/normal",
                            color: "currentColor",
                            children: K.intl.string(K.t.uFSTGq),
                        }),
                    }),
                    (0, i.jsx)("span", { className: e0.xE, "aria-hidden": "true", children: "\u2022" }),
                    (0, i.jsx)(eF.Y, {
                        targetElementRef: e,
                        position: "top",
                        align: "center",
                        spacing: 0,
                        animation: eF.Y.Animation.NONE,
                        renderPopout: (e) => {
                            let { closePopout: t } = e;
                            return (0, i.jsx)(e1, { onClose: t });
                        },
                        children: (t, n) =>
                            (0, i.jsx)(eG.Anchor, {
                                ...t,
                                ref: e,
                                useDefaultUnderlineStyles: !1,
                                className: I()(e0.Mj, { [e0.vu]: n.isShown }),
                                children: (0, i.jsx)(a.E, {
                                    tag: "span",
                                    variant: "text-xxs/normal",
                                    color: "currentColor",
                                    children: K.intl.string(K.t["UKOtz+"]),
                                }),
                            }),
                    }),
                ],
            }),
        ],
    });
}
var e5 = n(402651),
    e9 = n(669067),
    e7 = n(830543),
    e6 = n(466745);
let e4 = new Set([eD.X.PROFILE_PANEL, eD.X.SUBSCRIPTIONS_PANEL, eD.X.FAMILY_CENTER_PANEL, eD.X.POGGERMODE_PANEL]),
    e8 = new Map([
        [eD.X.CONNECTIONS_PANEL, r.ImpressionNames.USER_SETTINGS_CONNECTIONS],
        [eD.X.SESSIONS_PANEL, r.ImpressionNames.USER_SETTINGS_SESSIONS],
    ]);
function e3(e) {
    let { target: t, ...n } = e,
        l = eL.A.useField("query"),
        a = s.useCallback(() => {
            eL.A.setState({ query: "" }), m.A.terminate();
        }, []),
        [h, g] = s.useState(!1);
    return (s.useLayoutEffect(() => {
        function e() {
            null == e_.default.getCurrentUser() && (g(!0), (0, e7.default)());
        }
        return (
            eM.default.addChangeListener(e),
            () => {
                eM.default.removeChangeListener(e), e5.A.resetState(), d.A.resetState(), c.A.close(), (0, u.ZQ)();
            }
        );
    }, []),
    h)
        ? null
        : (0, i.jsx)(ek, {
              partialRoot: eO.D,
              searchBar: te,
              emptyState: tt,
              sidebarFooter: e2,
              onViewChange: function (e) {
                  e4.has(e) || (0, e9._)(e);
                  let t = e8.get(e);
                  null != t &&
                      (0, o.x)({
                          type: r.ImpressionTypes.PANE,
                          name: t,
                          properties: { source: e5.A.getField("source") },
                      }),
                      e5.A.setState({ source: void 0 });
              },
              target: t,
              defaultTarget: eD.X.ACCOUNT_PANEL,
              searchQuery: l,
              clearSearchQuery: a,
              ...n,
          });
}
function te() {
    let e = eL.A.useField("query"),
        t = s.useCallback((e) => {
            eL.A.setState({ query: e }), m.A.maybeTrackQueryEntered();
        }, []),
        n = s.useCallback(() => {
            m.A.isSessionActive() || m.A.initialize();
        }, []),
        r = s.useCallback(() => {
            0 === eL.A.getField("query").trim().length && m.A.terminate();
        }, []),
        a = s.useCallback(() => {
            eL.A.setState({ query: "" }), m.A.terminate();
        }, []);
    return (
        s.useEffect(
            () => () => {
                eL.A.resetState(), m.A.terminate();
            },
            [],
        ),
        (0, i.jsx)("div", {
            className: e6.P,
            children: (0, i.jsx)(l.I, { size: "md", query: e, onFocus: n, onBlur: r, onChange: t, onClear: a }),
        })
    );
}
function tt() {
    return (0, i.jsxs)("div", {
        className: e6.t,
        children: [
            (0, i.jsx)(a.E, { variant: "text-sm/semibold", color: "text-strong", children: K.intl.string(K.t.zihbmv) }),
            (0, i.jsx)(a.E, { variant: "text-sm/normal", color: "text-subtle", children: K.intl.string(K.t.XclvsB) }),
        ],
    });
}
