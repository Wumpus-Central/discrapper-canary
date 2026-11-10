n.d(t, { default: () => e8 });
var i = n(477900),
    s = n(582128),
    r = n(613412),
    l = n(683438),
    a = n(834730),
    c = n(252452),
    o = n(139286),
    u = n(200921),
    d = n(729934),
    m = n(324593),
    h = n(855986),
    g = n(521489),
    f = n(568602),
    p = n(775602),
    x = n(531685),
    v = n(188567),
    A = n(140735),
    y = n(534514),
    b = n(707554),
    j = n(964486);
(n(667532), n(134528), n(947204));
var S = n(503698),
    N = n.n(S),
    E = n(607399),
    C = n(408278),
    I = n(477155),
    k = n(43990),
    P = n(331322),
    w = n(668953),
    T = n(972213),
    D = n(97469),
    M = n(963935),
    R = n(894858),
    _ = n(272053),
    L = n(528689),
    O = n(939249),
    B = n(215566),
    K = n(792996),
    F = n(764318);
function G(e) {
    let { node: t, isLast: n } = e,
        s = t.useTitle(),
        r = t.usePersistentBadge?.(),
        l = (0, i.jsxs)(P.B, {
            direction: "horizontal",
            align: "center",
            gap: "xs",
            className: F.Ze,
            children: [
                (0, i.jsx)(a.E, {
                    variant: n ? "body-md/medium" : "body-md/normal",
                    color: n ? "text-default" : void 0,
                    className: F.b,
                    children: s,
                }),
                n && null != r && (0, i.jsx)(B.A, { badge: r }),
                !n &&
                    (0, i.jsx)(a.E, {
                        variant: "body-md/normal",
                        color: "interactive-text-default",
                        "aria-hidden": !0,
                        children: "/",
                    }),
            ],
        });
    return (0, i.jsx)("li", {
        "aria-current": n ? "page" : void 0,
        className: F.QF,
        children: n
            ? l
            : (0, i.jsx)(O.D, {
                  onClick: function () {
                      _.A.navigate(t.key);
                  },
                  className: F.vk,
                  children: l,
              }),
    });
}
function U(e) {
    let { path: t } = e;
    return (0, i.jsx)("nav", {
        "aria-label": K.intl.string(K.t["bM+M/m"]),
        className: F.m7,
        children: (0, i.jsx)(P.B, {
            direction: "horizontal",
            role: "list",
            className: F.jD,
            children: t.map((e, n) => (0, i.jsx)(G, { node: e, isLast: n === t.length - 1 }, e.key)),
        }),
    });
}
var z = n(444493);
function W(e) {
    let { icon: t, label: n, onClick: s } = e;
    return (0, i.jsx)(C.K, { onClick: s, icon: t, size: "sm", variant: "icon-only", "aria-label": n });
}
function X(e) {
    let { setting: t, onClose: n } = e,
        s = (0, D.NC)(),
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
        a = E.Fr && r.length <= 1,
        c = r.length > 1 && null != l;
    return (0, i.jsx)(k.N, {
        theme: s,
        children: (e) =>
            (0, i.jsxs)("div", {
                className: N()(z.$Q, e, { [z.HW]: a || c }),
                children: [
                    (0, i.jsxs)(P.B, {
                        direction: "horizontal",
                        align: "center",
                        className: z.y9,
                        children: [
                            a &&
                                (0, i.jsx)(W, {
                                    icon: w.ChevronLargeLeftIcon,
                                    onClick: () => R.A.setState({ showNavigationMobile: !0 }),
                                    label: K.intl.string(K.t["13/7kX"]),
                                }),
                            c &&
                                (0, i.jsx)(W, {
                                    icon: I.ArrowSmallLeftIcon,
                                    onClick: () => _.A.navigate(l.key),
                                    label: K.intl.string(K.t["13/7kX"]),
                                }),
                            null != t && (0, i.jsx)(U, { path: r }),
                        ],
                    }),
                    (0, i.jsx)(W, { icon: T.XLargeIcon, onClick: n, label: K.intl.string(K.t.cpT0Cq) }),
                ],
            }),
    });
}
let H = s.memo(function (e) {
    let { onClose: t, setting: n } = e,
        s = R.A.useField("showNavigationMobile");
    return (0, i.jsxs)("div", {
        className: N()(z.Qs, { [z.Hw]: E.Fr, [z.n7]: s }),
        children: [
            (0, i.jsx)(X, { setting: n, onClose: t }),
            (0, i.jsx)("div", { className: z.yp, children: null != n && (0, i.jsx)(L.A, { node: n }) }),
        ],
    });
});
n(321073);
var V = n(837381),
    $ = n(741918),
    Z = n(516521),
    Y = n(928039),
    q = n(263775),
    Q = n(199966),
    J = n(466448),
    ee = n(397274);
function et(e, t, n) {
    let { nodeKeyToDismissibleContents: i, dismissibleContentToBadge: s } = n,
        r = i.get(e);
    return null != t && null != r && r.has(t) ? s.get(t) : null;
}
var en = n(646514),
    ei = n(805251),
    es = n(374193);
let er = function (e) {
    let { badge: t } = e;
    switch (t.badgeType) {
        case es.Xi.NEW:
            return (0, i.jsx)(ei.E, { type: "new", variant: "primary" });
        case es.Xi.STRONGLY_DISCOURAGED_CUSTOM:
            let { StronglyDiscouragedCustomComponent: n } = t;
            return (0, i.jsx)(n, {});
    }
};
var el = n(284009),
    ea = n.n(el),
    ec = n(120692),
    eo = n(935399),
    eu = n(319354),
    ed = n(717421),
    em = n(253932),
    eh = n(480423);
let eg = "refresh_sm";
function ef(e) {
    let { category: t, onClick: n, active: r, dismissibleBadge: l } = e,
        { useTitle: c, useSubnavLabel: o, key: u, usePersistentBadge: d } = t,
        m = d?.(),
        h = s.useMemo(
            () =>
                null != l
                    ? r
                        ? null
                        : (0, i.jsx)(er, { badge: l })
                    : null != m
                      ? (0, i.jsx)(B.A, { badge: m })
                      : void 0,
            [r, l, m],
        ),
        g = c?.(),
        f = o?.() ?? g;
    return (
        ea()(null != f, "[SettingsSubnavigationCategory] Category must have a title"),
        (0, i.jsx)(V.tG, {
            id: u,
            children: (e) =>
                (0, i.jsx)("div", {
                    role: "listitem",
                    children: (0, i.jsxs)(
                        O.D,
                        {
                            onClick: n,
                            className: N()(eh.AS, { [eh.vu]: r }),
                            ...e,
                            role: "link",
                            "aria-current": r ? "location" : void 0,
                            children: [(0, i.jsx)(a.E, { variant: "body-md/normal", color: "none", children: f }), h],
                        },
                        u,
                    ),
                }),
        })
    );
}
function ep(e) {
    let t,
        n,
        r,
        l,
        { active: a, isTopLevelPanelVisible: c, visibleCategories: o, visibleContent: u, dismissibleBadges: d } = e,
        m = R.A.useField("currentCategoryKey"),
        [h, g] = s.useState(a);
    s.useLayoutEffect(() => {
        a && g(!0);
    }, [a]);
    let f = s.useMemo(() => o.findIndex((e) => e.key === m), [o, m]);
    s.useEffect(() => {
        if (!a) {
            let e = p.current;
            null != e &&
                ((e.style.height = `${e.scrollHeight}px`),
                window.getComputedStyle(e).height,
                (e.style.height = "0"),
                Promise.allSettled(e.getAnimations().map((e) => e.finished)).then(() => {
                    g(!1);
                }));
        }
    }, [a]);
    let p = s.useRef(null),
        [x, v] = s.useState(a ? "auto" : "0");
    return (
        (t = s.useRef(null)),
        (n = s.useRef(new Set())),
        (r = s.useRef(!1)),
        (l = s.useMemo(() => {
            let e = new Set();
            return (o.forEach((t) => e.add(t.key)), e);
        }, [o])),
        s.useEffect(() => {
            if (!c) return;
            let e = ee.A.getPanelScrollerNode();
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
                    function (t) {
                        if (
                            null == e ||
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
                            !ee.A.getIsSidebarCategoryAutoSelectEnabled())
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
                        R.A.getField("currentCategoryKey") !== l && R.A.setState({ currentCategoryKey: l });
                    },
                    { root: e, rootMargin: "0px 100000px 0px 100000px", threshold: 1 },
                )),
                a.forEach((e) => t.current?.observe(e)),
                null != s && t.current?.observe(s),
                () => {
                    (a.forEach((e) => t.current?.unobserve(e)),
                        null != s && t.current?.unobserve(s),
                        t.current?.disconnect(),
                        (t.current = null));
                }
            );
        }, [l, c]),
        (0, i.jsx)("div", {
            className: eh.lK,
            style: { height: x, opacity: +!!a },
            ref: p,
            children:
                h &&
                (0, i.jsx)(ex, {
                    index: f,
                    activeKey: m,
                    categories: o,
                    visibleContent: u,
                    dismissibleBadges: d,
                    onMount: function () {
                        let e = p.current;
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
function ex(e) {
    let { index: t, activeKey: n, categories: r, visibleContent: l, dismissibleBadges: a, onMount: c } = e,
        {
            thumbRef: o,
            trackRef: u,
            thumbAnchorRef: d,
            springs: m,
        } = (function (e) {
            let t = em.Xi.useSetting(),
                n = s.useRef(null),
                i = s.useRef(null),
                r = s.useRef(null),
                l = s.useRef(!0),
                a = s.useRef(t),
                c = s.useRef(e),
                [o, u] = (0, ed.z)(() => ({ y: 0, height: 0, config: { mass: 0.1, friction: 20, tension: 300 } }));
            return (
                s.useLayoutEffect(() => {
                    let s = a.current !== t;
                    function d() {
                        if (null == n.current || null == i.current || null == r.current) return;
                        let [d, m] = [n.current.getBoundingClientRect(), r.current.getBoundingClientRect()],
                            h = d.width / 2,
                            g = (m.y - d.y) / h,
                            f = m.height / h;
                        (l.current || s || p.Ay.useReducedMotion || -1 === c.current
                            ? (o.y.set(g), o.height.set(f))
                            : u({ y: g, height: f }),
                            (l.current = !1),
                            (a.current = t),
                            (c.current = e));
                    }
                    let m = null;
                    return (
                        s
                            ? (m = requestAnimationFrame(() => {
                                  ((m = null), d());
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
    (0, eo.Ay)(c);
    let h = {
        "--custom-nav-count": r.length,
        "--custom-nav-index": Math.max(t, 0),
        "--custom-nav-width": "2px",
        "--custom-icon-size": `${eu.E[eg]}px`,
    };
    return (0, i.jsxs)("div", {
        className: eh.o8,
        role: "list",
        style: h,
        children: [
            (0, i.jsx)("div", {
                className: eh.u4,
                "aria-hidden": "true",
                ref: u,
                children: (0, i.jsx)(ec.animated.div, {
                    className: N()(eh.FF, { [eh.R]: null == n }),
                    style: m,
                    ref: o,
                }),
            }),
            (0, i.jsx)("div", { className: eh.gu, "aria-hidden": "true", ref: d }),
            r.map((e) => {
                let t = et(e.key, l, a);
                return (0, i.jsx)(
                    ef,
                    {
                        onClick: () => {
                            var t;
                            return ((t = e.key), void _.A.navigate(t, { showNavigationMobile: !1 }));
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
var ev = n(686380);
function eA(e) {
    let { onClick: t, active: n, node: r, dismissibleBadge: l, panelKey: c, listItemProps: o, children: u } = e,
        {
            icon: d,
            StronglyDiscouragedCustomComponent: m,
            usePersistentBadge: h,
            useTitle: g,
            variant: f = "default",
        } = r,
        p = g?.(),
        x = (function (e) {
            switch (e) {
                case "default":
                    return "currentColor";
                case "destructive":
                    return "text-feedback-critical";
            }
        })(f),
        v = (function (e) {
            switch (e) {
                case "default":
                    return "currentColor";
                case "destructive":
                    return en.A.colors.ICON_FEEDBACK_CRITICAL;
            }
        })(f),
        A = h?.(n),
        y = s.useMemo(
            () =>
                null != l
                    ? n
                        ? null
                        : (0, i.jsx)(er, { badge: l })
                    : null != A
                      ? (0, i.jsx)(B.A, { badge: A })
                      : void 0,
            [n, l, A],
        );
    return (0, i.jsxs)("li", {
        "data-settings-sidebar-item": c,
        className: ev.DB,
        children: [
            (0, i.jsxs)(O.D, {
                ...o,
                role: "link",
                "aria-current": n ? "page" : void 0,
                className: N()(ev.AS, { [ev.vu]: n, [ev.RD]: "destructive" === f }),
                onClick: t,
                children: [
                    null != m
                        ? (0, i.jsx)(m, {})
                        : (0, i.jsxs)("div", {
                              className: ev.Ly,
                              children: [
                                  (0, i.jsx)(d, { color: v, size: eg, className: ev.Kk }),
                                  (0, i.jsx)(a.E, { variant: "body-md/medium", color: x, children: p }),
                              ],
                          }),
                    y,
                ],
            }),
            u,
        ],
    });
}
function ey(e) {
    let { node: t, visibleContent: n, dismissibleBadges: r, hoisted: l = !1 } = e,
        a = s.useMemo(() => t.layout[0], [t]),
        c = R.A.useField("currentPanelKey"),
        { accessibleDirectory: o } = (0, Q._)(),
        u = a?.key === c,
        d = s.useMemo(() => {
            if (null == c) return !1;
            let e = o.entry(c);
            return e?.parentSidebarItemKey === t.key;
        }, [c, t.key, o]),
        m = s.useMemo(() => {
            if (null == a || !(0, M.zS)(a.layout)) return null;
            let e = a.layout.filter(M.bJ);
            return e.length > 1 ? e : null;
        }, [a]),
        h =
            null != a
                ? () => {
                      let e = c === a.key && null != m ? m[0].key : a.key;
                      _.A.navigate(e, { animateSidebarScroll: !0, showNavigationMobile: !1 });
                  }
                : t.onClick,
        g = null != c,
        f = s.useMemo(
            () =>
                null != m && g
                    ? (0, i.jsx)(ep, {
                          active: d,
                          isTopLevelPanelVisible: u,
                          visibleCategories: m,
                          visibleContent: n,
                          dismissibleBadges: r,
                      })
                    : null,
            [m, g, d, u, n, r],
        ),
        p = s.useMemo(() => et(t.key, n, r), [t.key, n, r]);
    return l
        ? (0, i.jsx)(eA, {
              panelKey: a?.key,
              onClick: h,
              active: d,
              "aria-expanded": null != m ? d : void 0,
              node: t,
              dismissibleBadge: p,
              children: f,
          })
        : (0, i.jsx)(V.tG, {
              id: a?.key ?? t.key,
              children: (e) =>
                  (0, i.jsx)(eA, {
                      panelKey: a?.key,
                      onClick: h,
                      active: d,
                      node: t,
                      dismissibleBadge: p,
                      listItemProps: e,
                      children: f,
                  }),
          });
}
var eb = n(639876);
function ej(e) {
    let { currentPanelKey: t, root: n, onClose: r, footer: l, emptyState: a, searchBar: c } = e,
        o = R.A.useField("showNavigationMobile"),
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
                            (e.push(l), t.set(l, r), i.set(l, s));
                            let a = n.get(r.sidebarItemKey) ?? new Set();
                            if ((a.add(l), n.set(r.sidebarItemKey, a), null != r.categoryKey)) {
                                let e = n.get(r.categoryKey) ?? new Set();
                                (e.add(l), n.set(r.categoryKey, e));
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
        [g] = (0, q.kn)(h.allDismissibleContents);
    s.useEffect(() => {
        J.A.registerBadges(h, g);
    }, [h, g]);
    let [f, p] = s.useMemo(() => {
            let e = [],
                t = [];
            return (
                n.layout.forEach((n) => {
                    n.hoisted ? e.push(n) : t.push(n);
                }),
                [e, t]
            );
        }, [n.layout]),
        x = (0, D.NC)(),
        v = (0, Y.A)("settings-sidebar", u, { orientation: $.Gl.VERTICAL, defaultFocused: t }),
        [j, S] = s.useState(!1),
        I = s.useCallback(() => {
            let e = u.current?.getScrollerNode();
            S(null != e && e.scrollTop > 12);
        }, []),
        P = s.useId();
    return (0, i.jsx)(k.N, {
        theme: x,
        children: (e) =>
            (0, i.jsxs)("aside", {
                "aria-labelledby": P,
                className: N()(eb.pz, e, { [eb.Hw]: E.Fr, [eb.n7]: o }),
                children: [
                    (0, i.jsx)(A.A, {
                        children: (0, i.jsx)(y.D, {
                            variant: "body-sm/semibold",
                            id: P,
                            children: K.intl.string(K.t["ZU3/B4"]),
                        }),
                    }),
                    (0, i.jsxs)(b.F, {
                        children: [
                            (0, i.jsxs)("div", {
                                className: N()(eb.gM, { [eb.to]: j }),
                                children: [
                                    E.Fr &&
                                        (0, i.jsx)("div", {
                                            className: eb.hg,
                                            children: (0, i.jsx)(C.K, {
                                                icon: T.XLargeIcon,
                                                onClick: r,
                                                variant: "icon-only",
                                                size: "sm",
                                                "aria-label": K.intl.string(K.t.cpT0Cq),
                                            }),
                                        }),
                                    (0, i.jsx)("div", {
                                        children: f.map((e) =>
                                            (0, i.jsx)(
                                                eS,
                                                { section: e, visibleContent: g, dismissibleBadges: h },
                                                e.key,
                                            ),
                                        ),
                                    }),
                                    null != c && (0, i.jsx)(c, {}),
                                    null != a && 0 === p.length && (0, i.jsx)(a, {}),
                                ],
                            }),
                            (0, i.jsx)("nav", {
                                className: eb.C$,
                                "aria-label": K.intl.string(K.t.MqTGqz),
                                children: (0, i.jsx)(V.hD, {
                                    navigator: v,
                                    children: (0, i.jsx)(V.PR, {
                                        children: (e) => {
                                            let { ref: t, ...n } = e;
                                            return (0, i.jsxs)(Z.Ch, {
                                                ref: (e) => {
                                                    ((u.current = e), ee.A.setSidebarScrollerRef(e), I());
                                                },
                                                className: eb.Mt,
                                                fade: !0,
                                                onScroll: I,
                                                children: [
                                                    (0, i.jsx)("ul", {
                                                        className: eb.jV,
                                                        ...n,
                                                        ref: t,
                                                        children: p.map((e) =>
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
function eS(e) {
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
                ? (0, i.jsx)(A.A, { children: (0, i.jsx)(y.D, { id: a, variant: "heading-xs/medium", children: l }) })
                : (0, i.jsx)("div", {
                      className: eb.a9,
                      children: (0, i.jsx)(y.D, {
                          id: a,
                          className: eb.Pf,
                          variant: "heading-xs/medium",
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
    eC = n(122088),
    eI = n(759031);
function ek(e) {
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
        h = R.A.useField("currentPanelKey"),
        { node: g, visibleDirectory: f, accessibleDirectory: p } = (0, eC.Ay)(t, d ?? ""),
        x = null != n && f.entry(n)?.parentPanelKey != null ? n : r,
        v = s.useMemo(() => {
            let e = p.entry(h ?? x)?.parentPanelKey;
            if (null != e) return p.getPanelOrThrow(e);
        }, [h, p, x]),
        { navigateWithValidation: S } = (0, eE.L_)(),
        N = s.useMemo(() => () => S(l), [S, l]);
    s.useEffect(() => {
        _.A.init({
            accessibleDirectory: p,
            onViewChange: o,
            navigateWithValidation: (e, t) => {
                (null == f.entry(e) && m?.(), S(t));
            },
            closeWithValidation: N,
        });
    }, [p, S, o, m, f, N]);
    let [E, C] = s.useState(!0);
    (0, j.Ay)(
        () => (
            _.A.navigate(x, { animatePanelScroll: !1, animateSidebarScroll: !1, showNavigationMobile: null == n }),
            C(!1),
            () => {
                (J.A.reset(), _.A.reset(), ee.A.reset(), R.A.resetState());
            }
        ),
    );
    let I = s.useMemo(() => ({ visibleDirectory: f, accessibleDirectory: p }), [f, p]),
        k = null != h ? f.get(h) : void 0,
        P = E ? void 0 : (k ?? v),
        w = P?.useTitle() ?? K.intl.string(K.t["3D5yo/"]);
    return (0, i.jsx)(Q.x.Provider, {
        value: I,
        children: (0, i.jsxs)("div", {
            className: eI.k,
            children: [
                (0, i.jsx)(A.A, { children: (0, i.jsx)(y.D, { variant: "body-sm/semibold", children: w }) }),
                (0, i.jsxs)(b.F, {
                    children: [
                        (0, i.jsx)(ej, {
                            currentPanelKey: h,
                            root: g,
                            onClose: N,
                            footer: a,
                            emptyState: u,
                            searchBar: c,
                        }),
                        (0, i.jsx)(H, { onClose: N, setting: P }),
                    ],
                }),
            ],
        }),
    });
}
function eP(e) {
    return (0, i.jsx)(eE.ms, { children: (0, i.jsx)(ek, { ...e }) });
}
var ew = n(652215);
function eT(e) {
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
        [A, y] = s.useState(!1),
        [b, j] = s.useState(1.4),
        S = s.useRef(null),
        N = (0, h.bG)([p.Ay], () => p.Ay.useReducedMotion),
        E = (0, h.bG)([x.A], () => x.A.isFocused());
    return (
        s.useEffect(() => {
            function e(e) {
                let { intensity: t, duration: n } = e;
                !N &&
                    E &&
                    (y(!0), j(t ?? 1.4), clearTimeout(S.current), (S.current = setTimeout(() => y(!1), n ?? 1e3)));
            }
            return (
                v._.subscribe(ew.jej.SHAKE_SETTINGS_MODAL, e),
                () => {
                    (v._.unsubscribe(ew.jej.SHAKE_SETTINGS_MODAL, e), clearTimeout(S.current));
                }
            );
        }, [N, E]),
        (0, i.jsx)(f.b, {
            isShaking: A,
            intensity: b,
            children: (0, i.jsx)(g.N, {
                ...m,
                children: (0, i.jsx)(eP, {
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
var eD = n(46653),
    eM = n(287809),
    eR = n(152056),
    e_ = n(780964),
    eL = n(819390),
    eO = n(165862),
    eB = n(477782),
    eK = n(28863),
    eF = n(265872),
    eG = n(975807),
    eU = n(212031),
    ez = n(975571),
    eW = n(481613),
    eX = n.n(eW),
    eH = n(77729),
    eV = n(521502),
    e$ = n(915089),
    eZ = n(206845),
    eY = n(253400),
    eq = n(415443),
    eQ = n(592739);
function eJ() {
    let e = (0, e$.GV)(),
        t = window.GLOBAL_ENV.RELEASE_CHANNEL,
        n = "670590",
        s = "04331385ff74fc2d7cda3357869fd3be84639d86".substring(0, 7),
        r = eH.A?.app.getVersion(),
        l = eH.A?.app.getBuildNumber(),
        c = eH.A?.app.getAppArch(),
        o = eV.A.getCurrentBuildOverride().overrides?.discord_web,
        u = null != o ? (0, eq.A)("1794344924443", !1) : null,
        d = null != u ? ` (built ${u})` : "",
        m = (function () {
            let e = eX()?.os?.toString();
            if (null == e || null == eH.A) return null;
            let t = eH.A.os.release,
                [n, i, s] = eY.Ay.parsedOSRelease;
            return (
                e.includes("Windows 10") && void 0 !== s && s >= 22e3 && (e = e.replace("Windows 10", "Windows 11")),
                e.includes("OS X 10.15.7") && void 0 !== n && n >= 20 && (e = `macOS ${n >= 25 ? n + 1 : n - 9}`),
                `${e} (${t})`
            );
        })(),
        h = [t, n, `(${s})`];
    return (
        null != r && (h.push(`Host ${r}`), null != c && h.push(c.toLowerCase()), null != l && h.push(`(${l})`)),
        h.push(`Build Override: ${null != o ? o.id : "N/A"}${d}`),
        null != m && h.push(m),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(eZ.A, {
                    copyValue: h.join(" "),
                    text: K.intl.string(K.t["9Al4Qd"]),
                    "aria-label": !1,
                    dataMeticulousIgnore: "true",
                    children: (u) =>
                        (0, i.jsxs)(O.D, {
                            ...u,
                            "aria-describedby": e,
                            className: N()(eQ.vk, eQ.oE),
                            children: [
                                (0, i.jsxs)("div", {
                                    className: eQ.Cr,
                                    "data-mtctest-ignore": "true",
                                    children: [
                                        (0, i.jsxs)(a.E, {
                                            tag: "span",
                                            variant: "footnote/normal",
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
                                                variant: "footnote/normal",
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
                                        variant: "footnote/normal",
                                        color: "text-muted",
                                        children: (0, i.jsxs)("span", {
                                            className: eQ.Pc,
                                            children: ["Build Override: ", o.id, d],
                                        }),
                                    }),
                            ],
                        }),
                }),
                (0, i.jsx)(A.A, { id: e, children: K.intl.string(K.t["9Al4Qd"]) }),
            ],
        })
    );
}
var e0 = n(370658);
function e1(e) {
    let { onClose: t } = e;
    return (0, i.jsx)(eO.W, {
        "data-menu-migrated-auto": !0,
        navId: "settings-footer-more-menu",
        onClose: t,
        onSelect: () => {},
        "aria-label": K.intl.string(K.t["6Ic4Ev"]),
        children: (0, i.jsxs)(eB.rX, {
            children: [
                (0, i.jsx)(eB.Dr, { id: "changelog", label: K.intl.string(K.t.LRmNAl), action: () => (0, eU.j)(!0) }),
                (0, i.jsx)(eB.Dr, {
                    id: "acknowledgements",
                    label: K.intl.string(K.t["0nUKy3"]),
                    action: () => (0, eG.A)(ew.X7G.ACKNOWLEDGEMENTS),
                }),
                (0, i.jsx)(eB.Dr, {
                    id: "support",
                    label: K.intl.string(K.t["Yl/Riu"]),
                    action: () => (0, eG.A)(ez.C),
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
                    (0, i.jsx)(eK.Anchor, {
                        href: ew.X7G.PRIVACY,
                        children: (0, i.jsx)(a.E, {
                            tag: "span",
                            variant: "footnote/normal",
                            color: "currentColor",
                            children: K.intl.string(K.t["Knf/f/"]),
                        }),
                    }),
                    (0, i.jsx)("span", { className: e0.xE, "aria-hidden": "true", children: "\u2022" }),
                    (0, i.jsx)(eK.Anchor, {
                        href: ew.X7G.TERMS,
                        children: (0, i.jsx)(a.E, {
                            tag: "span",
                            variant: "footnote/normal",
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
                            (0, i.jsx)(eK.Anchor, {
                                ...t,
                                ref: e,
                                useDefaultUnderlineStyles: !1,
                                className: N()(e0.Mj, { [e0.vu]: n.isShown }),
                                children: (0, i.jsx)(a.E, {
                                    tag: "span",
                                    variant: "footnote/normal",
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
    e4 = n(669067),
    e9 = n(830543),
    e6 = n(953056);
let e3 = new Set([e_.X.PROFILE_PANEL, e_.X.SUBSCRIPTIONS_PANEL, e_.X.FAMILY_CENTER_PANEL, e_.X.POGGERMODE_PANEL]),
    e7 = new Map([[e_.X.SESSIONS_PANEL, r.ImpressionNames.USER_SETTINGS_SESSIONS]]);
function e8(e) {
    let { target: t, ...n } = e,
        l = eR.A.useField("query"),
        a = s.useCallback(() => {
            (eR.A.setState({ query: "" }), m.A.terminate());
        }, []),
        [h, g] = s.useState(!1);
    return (s.useLayoutEffect(() => {
        function e() {
            null == eM.default.getCurrentUser() && (g(!0), (0, e9.default)());
        }
        return (
            eD.default.addChangeListener(e),
            () => {
                (eD.default.removeChangeListener(e), e5.A.resetState(), d.A.resetState(), c.A.close(), (0, u.ZQ)());
            }
        );
    }, []),
    h)
        ? null
        : (0, i.jsx)(eT, {
              partialRoot: eL.D,
              searchBar: te,
              emptyState: tt,
              sidebarFooter: e2,
              onViewChange: function (e) {
                  e3.has(e) || (0, e4._)(e);
                  let t = e7.get(e);
                  (null != t &&
                      (0, o.x)({
                          type: r.ImpressionTypes.PANE,
                          name: t,
                          properties: { source: e5.A.getField("source") },
                      }),
                      e5.A.setState({ source: void 0 }));
              },
              target: t,
              defaultTarget: e_.X.ACCOUNT_PANEL,
              searchQuery: l,
              clearSearchQuery: a,
              ...n,
          });
}
function te() {
    let e = eR.A.useField("query"),
        t = s.useCallback((e) => {
            (eR.A.setState({ query: e }), m.A.maybeTrackQueryEntered());
        }, []),
        n = s.useCallback(() => {
            m.A.isSessionActive() || m.A.initialize();
        }, []),
        r = s.useCallback(() => {
            0 === eR.A.getField("query").trim().length && m.A.terminate();
        }, []),
        a = s.useCallback(() => {
            (eR.A.setState({ query: "" }), m.A.terminate());
        }, []);
    return (
        s.useEffect(
            () => () => {
                (eR.A.resetState(), m.A.terminate());
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
            (0, i.jsx)(a.E, { variant: "body-sm/semibold", color: "text-strong", children: K.intl.string(K.t.zihbmv) }),
            (0, i.jsx)(a.E, { variant: "body-sm/normal", color: "text-subtle", children: K.intl.string(K.t.XclvsB) }),
        ],
    });
}
