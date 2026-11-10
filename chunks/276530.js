n.d(t, { default: () => e6 });
var i = n(477900),
    r = n(582128),
    s = n(613412),
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
    A = n(531685),
    x = n(188567),
    v = n(140735),
    y = n(534514),
    b = n(707554),
    S = n(964486);
(n(667532), n(134528), n(947204));
var E = n(503698),
    j = n.n(E),
    N = n(607399),
    I = n(408278),
    C = n(477155),
    P = n(43990),
    T = n(331322),
    _ = n(668953),
    k = n(972213),
    R = n(97469),
    w = n(963935),
    O = n(894858),
    M = n(272053),
    D = n(528689),
    L = n(939249),
    B = n(215566),
    F = n(792996),
    K = n(764318);
function G(e) {
    let { node: t, isLast: n } = e,
        r = t.useTitle(),
        s = t.usePersistentBadge?.(),
        l = (0, i.jsxs)(T.B, {
            direction: "horizontal",
            align: "center",
            gap: "xs",
            className: K.Ze,
            children: [
                (0, i.jsx)(a.E, {
                    variant: n ? "body-md/medium" : "body-md/normal",
                    color: n ? "text-default" : void 0,
                    className: K.b,
                    children: r,
                }),
                n && null != s && (0, i.jsx)(B.A, { badge: s }),
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
        className: K.QF,
        children: n
            ? l
            : (0, i.jsx)(L.D, {
                  onClick: function () {
                      M.A.navigate(t.key);
                  },
                  className: K.vk,
                  children: l,
              }),
    });
}
function U(e) {
    let { path: t } = e;
    return (0, i.jsx)("nav", {
        "aria-label": F.intl.string(F.t["bM+M/m"]),
        className: K.m7,
        children: (0, i.jsx)(T.B, {
            direction: "horizontal",
            role: "list",
            className: K.jD,
            children: t.map((e, n) => (0, i.jsx)(G, { node: e, isLast: n === t.length - 1 }, e.key)),
        }),
    });
}
var H = n(444493);
function z(e) {
    let { icon: t, label: n, onClick: r } = e;
    return (0, i.jsx)(I.K, { onClick: r, icon: t, size: "sm", variant: "icon-only", "aria-label": n });
}
function W(e) {
    let { setting: t, onClose: n } = e,
        r = (0, R.NC)(),
        s =
            null != t
                ? (function (e) {
                      let t = [e];
                      for (let n = e.parent; null != n && n.type !== w.Z6.SIDEBAR_ITEM; n = n.parent)
                          n.type === w.Z6.PANEL && t.unshift(n);
                      return t;
                  })(t)
                : [],
        l = s.at(-2),
        a = N.Fr && s.length <= 1,
        c = s.length > 1 && null != l;
    return (0, i.jsx)(P.N, {
        theme: r,
        children: (e) =>
            (0, i.jsxs)("div", {
                className: j()(H.$Q, e, { [H.HW]: a || c }),
                children: [
                    (0, i.jsxs)(T.B, {
                        direction: "horizontal",
                        align: "center",
                        className: H.y9,
                        children: [
                            a &&
                                (0, i.jsx)(z, {
                                    icon: _.ChevronLargeLeftIcon,
                                    onClick: () => O.A.setState({ showNavigationMobile: !0 }),
                                    label: F.intl.string(F.t["13/7kX"]),
                                }),
                            c &&
                                (0, i.jsx)(z, {
                                    icon: C.ArrowSmallLeftIcon,
                                    onClick: () => M.A.navigate(l.key),
                                    label: F.intl.string(F.t["13/7kX"]),
                                }),
                            null != t && (0, i.jsx)(U, { path: s }),
                        ],
                    }),
                    (0, i.jsx)(z, { icon: k.XLargeIcon, onClick: n, label: F.intl.string(F.t.cpT0Cq) }),
                ],
            }),
    });
}
let X = r.memo(function (e) {
    let { onClose: t, setting: n } = e,
        r = O.A.useField("showNavigationMobile");
    return (0, i.jsxs)("div", {
        className: j()(H.Qs, { [H.Hw]: N.Fr, [H.n7]: r }),
        children: [
            (0, i.jsx)(W, { setting: n, onClose: t }),
            (0, i.jsx)("div", { className: H.yp, children: null != n && (0, i.jsx)(D.A, { node: n }) }),
        ],
    });
});
n(321073);
var V = n(837381),
    Q = n(741918),
    Z = n(516521),
    $ = n(928039),
    q = n(263775),
    Y = n(199966),
    J = n(466448),
    ee = n(397274);
function et(e, t, n) {
    let { nodeKeyToDismissibleContents: i, dismissibleContentToBadge: r } = n,
        s = i.get(e);
    return null != t && null != s && s.has(t) ? r.get(t) : null;
}
var en = n(646514),
    ei = n(805251),
    er = n(374193);
let es = function (e) {
    let { badge: t } = e;
    switch (t.badgeType) {
        case er.Xi.NEW:
            return (0, i.jsx)(ei.E, { type: "new", variant: "primary" });
        case er.Xi.STRONGLY_DISCOURAGED_CUSTOM:
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
    let { category: t, onClick: n, active: s, dismissibleBadge: l } = e,
        { useTitle: c, useSubnavLabel: o, key: u, usePersistentBadge: d } = t,
        m = d?.(),
        h = r.useMemo(
            () =>
                null != l
                    ? s
                        ? null
                        : (0, i.jsx)(es, { badge: l })
                    : null != m
                      ? (0, i.jsx)(B.A, { badge: m })
                      : void 0,
            [s, l, m],
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
                        L.D,
                        {
                            onClick: n,
                            className: j()(eh.AS, { [eh.vu]: s }),
                            ...e,
                            role: "link",
                            "aria-current": s ? "location" : void 0,
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
        s,
        l,
        { active: a, isTopLevelPanelVisible: c, visibleCategories: o, visibleContent: u, dismissibleBadges: d } = e,
        m = O.A.useField("currentCategoryKey"),
        [h, g] = r.useState(a);
    r.useLayoutEffect(() => {
        a && g(!0);
    }, [a]);
    let f = r.useMemo(() => o.findIndex((e) => e.key === m), [o, m]);
    r.useEffect(() => {
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
    let p = r.useRef(null),
        [A, x] = r.useState(a ? "auto" : "0");
    return (
        (t = r.useRef(null)),
        (n = r.useRef(new Set())),
        (s = r.useRef(!1)),
        (l = r.useMemo(() => {
            let e = new Set();
            return (o.forEach((t) => e.add(t.key)), e);
        }, [o])),
        r.useEffect(() => {
            if (!c) return;
            let e = ee.A.getPanelScrollerNode();
            if (null == e) return;
            let i = e.querySelectorAll("[data-settings-category-key]"),
                r = e.querySelector("[data-panel-bottom]"),
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
                                if (l === r) {
                                    let t = e.scrollHeight > e.clientHeight;
                                    s.current = i && t;
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
                        let l = i.at(s.current ? -1 : 0);
                        O.A.getField("currentCategoryKey") !== l && O.A.setState({ currentCategoryKey: l });
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
        }, [l, c]),
        (0, i.jsx)("div", {
            className: eh.lK,
            style: { height: A, opacity: +!!a },
            ref: p,
            children:
                h &&
                (0, i.jsx)(eA, {
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
function eA(e) {
    let { index: t, activeKey: n, categories: s, visibleContent: l, dismissibleBadges: a, onMount: c } = e,
        {
            thumbRef: o,
            trackRef: u,
            thumbAnchorRef: d,
            springs: m,
        } = (function (e) {
            let t = em.Xi.useSetting(),
                n = r.useRef(null),
                i = r.useRef(null),
                s = r.useRef(null),
                l = r.useRef(!0),
                a = r.useRef(t),
                c = r.useRef(e),
                [o, u] = (0, ed.z)(() => ({ y: 0, height: 0, config: { mass: 0.1, friction: 20, tension: 300 } }));
            return (
                r.useLayoutEffect(() => {
                    let r = a.current !== t;
                    function d() {
                        if (null == n.current || null == i.current || null == s.current) return;
                        let [d, m] = [n.current.getBoundingClientRect(), s.current.getBoundingClientRect()],
                            h = d.width / 2,
                            g = (m.y - d.y) / h,
                            f = m.height / h;
                        (l.current || r || p.Ay.useReducedMotion || -1 === c.current
                            ? (o.y.set(g), o.height.set(f))
                            : u({ y: g, height: f }),
                            (l.current = !1),
                            (a.current = t),
                            (c.current = e));
                    }
                    let m = null;
                    return (
                        r
                            ? (m = requestAnimationFrame(() => {
                                  ((m = null), d());
                              }))
                            : d(),
                        () => {
                            null != m && cancelAnimationFrame(m);
                        }
                    );
                }, [e, u, o.y, o.height, t]),
                { thumbRef: i, trackRef: n, thumbAnchorRef: s, springs: o }
            );
        })(t);
    (0, eo.Ay)(c);
    let h = {
        "--custom-nav-count": s.length,
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
                    className: j()(eh.FF, { [eh.R]: null == n }),
                    style: m,
                    ref: o,
                }),
            }),
            (0, i.jsx)("div", { className: eh.gu, "aria-hidden": "true", ref: d }),
            s.map((e) => {
                let t = et(e.key, l, a);
                return (0, i.jsx)(
                    ef,
                    {
                        onClick: () => {
                            var t;
                            return ((t = e.key), void M.A.navigate(t, { showNavigationMobile: !1 }));
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
var ex = n(686380);
function ev(e) {
    let { onClick: t, active: n, node: s, dismissibleBadge: l, panelKey: c, listItemProps: o, children: u } = e,
        {
            icon: d,
            StronglyDiscouragedCustomComponent: m,
            usePersistentBadge: h,
            useTitle: g,
            variant: f = "default",
        } = s,
        p = g?.(),
        A = (function (e) {
            switch (e) {
                case "default":
                    return "currentColor";
                case "destructive":
                    return "text-feedback-critical";
            }
        })(f),
        x = (function (e) {
            switch (e) {
                case "default":
                    return "currentColor";
                case "destructive":
                    return en.A.colors.ICON_FEEDBACK_CRITICAL;
            }
        })(f),
        v = h?.(n),
        y = r.useMemo(
            () =>
                null != l
                    ? n
                        ? null
                        : (0, i.jsx)(es, { badge: l })
                    : null != v
                      ? (0, i.jsx)(B.A, { badge: v })
                      : void 0,
            [n, l, v],
        );
    return (0, i.jsxs)("li", {
        "data-settings-sidebar-item": c,
        className: ex.DB,
        children: [
            (0, i.jsxs)(L.D, {
                ...o,
                role: "link",
                "aria-current": n ? "page" : void 0,
                className: j()(ex.AS, { [ex.vu]: n, [ex.RD]: "destructive" === f }),
                onClick: t,
                children: [
                    null != m
                        ? (0, i.jsx)(m, {})
                        : (0, i.jsxs)("div", {
                              className: ex.Ly,
                              children: [
                                  (0, i.jsx)(d, { color: x, size: eg, className: ex.Kk }),
                                  (0, i.jsx)(a.E, { variant: "body-md/medium", color: A, children: p }),
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
    let { node: t, visibleContent: n, dismissibleBadges: s, hoisted: l = !1 } = e,
        a = r.useMemo(() => t.layout[0], [t]),
        c = O.A.useField("currentPanelKey"),
        { accessibleDirectory: o } = (0, Y._)(),
        u = a?.key === c,
        d = r.useMemo(() => {
            if (null == c) return !1;
            let e = o.entry(c);
            return e?.parentSidebarItemKey === t.key;
        }, [c, t.key, o]),
        m = r.useMemo(() => {
            if (null == a || !(0, w.zS)(a.layout)) return null;
            let e = a.layout.filter(w.bJ);
            return e.length > 1 ? e : null;
        }, [a]),
        h =
            null != a
                ? () => {
                      let e = c === a.key && null != m ? m[0].key : a.key;
                      M.A.navigate(e, { animateSidebarScroll: !0, showNavigationMobile: !1 });
                  }
                : t.onClick,
        g = null != c,
        f = r.useMemo(
            () =>
                null != m && g
                    ? (0, i.jsx)(ep, {
                          active: d,
                          isTopLevelPanelVisible: u,
                          visibleCategories: m,
                          visibleContent: n,
                          dismissibleBadges: s,
                      })
                    : null,
            [m, g, d, u, n, s],
        ),
        p = r.useMemo(() => et(t.key, n, s), [t.key, n, s]);
    return l
        ? (0, i.jsx)(ev, {
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
                  (0, i.jsx)(ev, {
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
function eS(e) {
    let { currentPanelKey: t, root: n, onClose: s, footer: l, emptyState: a, searchBar: c } = e,
        o = O.A.useField("showNavigationMobile"),
        u = r.useRef(null),
        [d] = r.useState(n),
        { accessibleDirectory: m } = (0, Y._)(),
        h = r.useMemo(() => {
            let e, t, n, i;
            return (
                (e = []),
                (t = new Map()),
                (n = new Map()),
                (i = new Map()),
                !(function e(t, n) {
                    if ((n(t), (0, w.nW)(t))) for (let i of t.layout) e(i, n);
                })(d, (r) => {
                    if (!("getDismissibleBadges" in r)) return;
                    let s = r.getDismissibleBadges?.();
                    if (null == s) return;
                    let l = m.entry(r.key);
                    if (l?.parentSidebarItemKey == null) return;
                    let a = null;
                    if (null != l.parentCategoryKey) {
                        let e = m.get(l.parentCategoryKey);
                        e?.type === w.Z6.CATEGORY && (0, w.bJ)(e) && (a = l.parentCategoryKey);
                    }
                    let c = { sidebarItemKey: l.parentSidebarItemKey, categoryKey: a };
                    s.forEach((r) =>
                        (function (r, s) {
                            let { dismissibleContent: l } = r;
                            (e.push(l), t.set(l, s), i.set(l, r));
                            let a = n.get(s.sidebarItemKey) ?? new Set();
                            if ((a.add(l), n.set(s.sidebarItemKey, a), null != s.categoryKey)) {
                                let e = n.get(s.categoryKey) ?? new Set();
                                (e.add(l), n.set(s.categoryKey, e));
                            }
                        })(r, c),
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
    r.useEffect(() => {
        J.A.registerBadges(h, g);
    }, [h, g]);
    let [f, p] = r.useMemo(() => {
            let e = [],
                t = [];
            return (
                n.layout.forEach((n) => {
                    n.hoisted ? e.push(n) : t.push(n);
                }),
                [e, t]
            );
        }, [n.layout]),
        A = (0, R.NC)(),
        x = (0, $.A)("settings-sidebar", u, { orientation: Q.Gl.VERTICAL, defaultFocused: t }),
        [S, E] = r.useState(!1),
        C = r.useCallback(() => {
            let e = u.current?.getScrollerNode();
            E(null != e && e.scrollTop > 12);
        }, []),
        T = r.useId();
    return (0, i.jsx)(P.N, {
        theme: A,
        children: (e) =>
            (0, i.jsxs)("aside", {
                "aria-labelledby": T,
                className: j()(eb.pz, e, { [eb.Hw]: N.Fr, [eb.n7]: o }),
                children: [
                    (0, i.jsx)(v.A, {
                        children: (0, i.jsx)(y.D, {
                            variant: "body-sm/semibold",
                            id: T,
                            children: F.intl.string(F.t["ZU3/B4"]),
                        }),
                    }),
                    (0, i.jsxs)(b.F, {
                        children: [
                            (0, i.jsxs)("div", {
                                className: j()(eb.gM, { [eb.to]: S }),
                                children: [
                                    N.Fr &&
                                        (0, i.jsx)("div", {
                                            className: eb.hg,
                                            children: (0, i.jsx)(I.K, {
                                                icon: k.XLargeIcon,
                                                onClick: s,
                                                variant: "icon-only",
                                                size: "sm",
                                                "aria-label": F.intl.string(F.t.cpT0Cq),
                                            }),
                                        }),
                                    (0, i.jsx)("div", {
                                        children: f.map((e) =>
                                            (0, i.jsx)(
                                                eE,
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
                                "aria-label": F.intl.string(F.t.MqTGqz),
                                children: (0, i.jsx)(V.hD, {
                                    navigator: x,
                                    children: (0, i.jsx)(V.PR, {
                                        children: (e) => {
                                            let { ref: t, ...n } = e;
                                            return (0, i.jsxs)(Z.Ch, {
                                                ref: (e) => {
                                                    ((u.current = e), ee.A.setSidebarScrollerRef(e), C());
                                                },
                                                className: eb.Mt,
                                                fade: !0,
                                                onScroll: C,
                                                children: [
                                                    (0, i.jsx)("ul", {
                                                        className: eb.jV,
                                                        ...n,
                                                        ref: t,
                                                        children: p.map((e) =>
                                                            (0, i.jsx)(
                                                                ej,
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
function eE(e) {
    let { section: t, visibleContent: n, dismissibleBadges: r } = e;
    return (0, i.jsx)("div", {
        className: eb.uW,
        children: (0, i.jsx)("ul", {
            className: eb.C4,
            children: t.layout.map((e) =>
                (0, i.jsx)(ey, { node: e, visibleContent: n, dismissibleBadges: r, hoisted: !0 }, e.key),
            ),
        }),
    });
}
function ej(e) {
    let { section: t, visibleContent: n, dismissibleBadges: s } = e,
        l = t.useTitle?.() ?? F.intl.string(F.t["3D5yo/"]),
        a = r.useId();
    return (0, i.jsxs)("li", {
        className: eb.uW,
        "aria-labelledby": a,
        children: [
            t.hideTitle
                ? (0, i.jsx)(v.A, { children: (0, i.jsx)(y.D, { id: a, variant: "heading-xs/medium", children: l }) })
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
                    (0, i.jsx)(ey, { node: e, visibleContent: n, dismissibleBadges: s }, e.key),
                ),
            }),
        ],
    });
}
var eN = n(823092),
    eI = n(122088),
    eC = n(759031);
function eP(e) {
    let {
            partialRoot: t,
            target: n,
            defaultTarget: s,
            onClose: l,
            sidebarFooter: a,
            searchBar: c,
            onViewChange: o,
            emptyState: u,
            searchQuery: d,
            clearSearchQuery: m,
        } = e,
        h = O.A.useField("currentPanelKey"),
        { node: g, visibleDirectory: f, accessibleDirectory: p } = (0, eI.Ay)(t, d ?? ""),
        A = null != n && f.entry(n)?.parentPanelKey != null ? n : s,
        x = r.useMemo(() => {
            let e = p.entry(h ?? A)?.parentPanelKey;
            if (null != e) return p.getPanelOrThrow(e);
        }, [h, p, A]),
        { navigateWithValidation: E } = (0, eN.L_)(),
        j = r.useMemo(() => () => E(l), [E, l]);
    r.useEffect(() => {
        M.A.init({
            accessibleDirectory: p,
            onViewChange: o,
            navigateWithValidation: (e, t) => {
                (null == f.entry(e) && m?.(), E(t));
            },
            closeWithValidation: j,
        });
    }, [p, E, o, m, f, j]);
    let [N, I] = r.useState(!0);
    (0, S.Ay)(
        () => (
            M.A.navigate(A, { animatePanelScroll: !1, animateSidebarScroll: !1, showNavigationMobile: null == n }),
            I(!1),
            () => {
                (J.A.reset(), M.A.reset(), ee.A.reset(), O.A.resetState());
            }
        ),
    );
    let C = r.useMemo(() => ({ visibleDirectory: f, accessibleDirectory: p }), [f, p]),
        P = null != h ? f.get(h) : void 0,
        T = N ? void 0 : (P ?? x),
        _ = T?.useTitle() ?? F.intl.string(F.t["3D5yo/"]);
    return (0, i.jsx)(Y.x.Provider, {
        value: C,
        children: (0, i.jsxs)("div", {
            className: eC.k,
            children: [
                (0, i.jsx)(v.A, { children: (0, i.jsx)(y.D, { variant: "body-sm/semibold", children: _ }) }),
                (0, i.jsxs)(b.F, {
                    children: [
                        (0, i.jsx)(eS, {
                            currentPanelKey: h,
                            root: g,
                            onClose: j,
                            footer: a,
                            emptyState: u,
                            searchBar: c,
                        }),
                        (0, i.jsx)(X, { onClose: j, setting: T }),
                    ],
                }),
            ],
        }),
    });
}
function eT(e) {
    return (0, i.jsx)(eN.ms, { children: (0, i.jsx)(eP, { ...e }) });
}
var e_ = n(652215);
function ek(e) {
    let {
            partialRoot: t,
            target: n,
            defaultTarget: s,
            onViewChange: l,
            sidebarFooter: a,
            emptyState: c,
            searchQuery: o,
            clearSearchQuery: u,
            searchBar: d,
            ...m
        } = e,
        [v, y] = r.useState(!1),
        [b, S] = r.useState(1.4),
        E = r.useRef(null),
        j = (0, h.bG)([p.Ay], () => p.Ay.useReducedMotion),
        N = (0, h.bG)([A.A], () => A.A.isFocused());
    return (
        r.useEffect(() => {
            function e(e) {
                let { intensity: t, duration: n } = e;
                !j &&
                    N &&
                    (y(!0), S(t ?? 1.4), clearTimeout(E.current), (E.current = setTimeout(() => y(!1), n ?? 1e3)));
            }
            return (
                x._.subscribe(e_.jej.SHAKE_SETTINGS_MODAL, e),
                () => {
                    (x._.unsubscribe(e_.jej.SHAKE_SETTINGS_MODAL, e), clearTimeout(E.current));
                }
            );
        }, [j, N]),
        (0, i.jsx)(f.b, {
            isShaking: v,
            intensity: b,
            children: (0, i.jsx)(g.N, {
                ...m,
                children: (0, i.jsx)(eT, {
                    onClose: m.onClose,
                    partialRoot: t,
                    target: n,
                    defaultTarget: s,
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
var eR = n(46653),
    ew = n(287809),
    eO = n(152056),
    eM = n(780964),
    eD = n(819390),
    eL = n(165862),
    eB = n(477782),
    eF = n(28863),
    eK = n(265872),
    eG = n(975807),
    eU = n(212031),
    eH = n(975571),
    ez = n(481613),
    eW = n.n(ez),
    eX = n(77729),
    eV = n(521502),
    eQ = n(915089),
    eZ = n(206845),
    e$ = n(253400),
    eq = n(415443),
    eY = n(592739);
function eJ() {
    let e = (0, eQ.GV)(),
        t = window.GLOBAL_ENV.RELEASE_CHANNEL,
        n = "670715",
        r = "c5948e1f50b18d4e7c39dae3cea2fa18775cf582".substring(0, 7),
        s = eX.A?.app.getVersion(),
        l = eX.A?.app.getBuildNumber(),
        c = eX.A?.app.getAppArch(),
        o = eV.A.getCurrentBuildOverride().overrides?.discord_web,
        u = null != o ? (0, eq.A)("1794348311302", !1) : null,
        d = null != u ? ` (built ${u})` : "",
        m = (function () {
            let e = eW()?.os?.toString();
            if (null == e || null == eX.A) return null;
            let t = eX.A.os.release,
                [n, i, r] = e$.Ay.parsedOSRelease;
            return (
                e.includes("Windows 10") && void 0 !== r && r >= 22e3 && (e = e.replace("Windows 10", "Windows 11")),
                e.includes("OS X 10.15.7") && void 0 !== n && n >= 20 && (e = `macOS ${n >= 25 ? n + 1 : n - 9}`),
                `${e} (${t})`
            );
        })(),
        h = [t, n, `(${r})`];
    return (
        null != s && (h.push(`Host ${s}`), null != c && h.push(c.toLowerCase()), null != l && h.push(`(${l})`)),
        h.push(`Build Override: ${null != o ? o.id : "N/A"}${d}`),
        null != m && h.push(m),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(eZ.A, {
                    copyValue: h.join(" "),
                    text: F.intl.string(F.t["9Al4Qd"]),
                    "aria-label": !1,
                    dataMeticulousIgnore: "true",
                    children: (u) =>
                        (0, i.jsxs)(L.D, {
                            ...u,
                            "aria-describedby": e,
                            className: j()(eY.vk, eY.oE),
                            children: [
                                (0, i.jsxs)("div", {
                                    className: eY.Cr,
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
                                                (0, i.jsxs)("span", { className: eY.Pc, children: ["(", r, ")"] }),
                                            ],
                                        }),
                                        null != s &&
                                            (0, i.jsxs)(a.E, {
                                                tag: "span",
                                                variant: "footnote/normal",
                                                color: "text-muted",
                                                children: [
                                                    s,
                                                    null != c &&
                                                        (0, i.jsxs)("span", {
                                                            className: eY.GI,
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
                                            className: eY.Pc,
                                            children: ["Build Override: ", o.id, d],
                                        }),
                                    }),
                            ],
                        }),
                }),
                (0, i.jsx)(v.A, { id: e, children: F.intl.string(F.t["9Al4Qd"]) }),
            ],
        })
    );
}
var e0 = n(370658);
function e1(e) {
    let { onClose: t } = e;
    return (0, i.jsx)(eL.W, {
        "data-menu-migrated-auto": !0,
        navId: "settings-footer-more-menu",
        onClose: t,
        onSelect: () => {},
        "aria-label": F.intl.string(F.t["6Ic4Ev"]),
        children: (0, i.jsxs)(eB.rX, {
            children: [
                (0, i.jsx)(eB.Dr, { id: "changelog", label: F.intl.string(F.t.LRmNAl), action: () => (0, eU.j)(!0) }),
                (0, i.jsx)(eB.Dr, {
                    id: "acknowledgements",
                    label: F.intl.string(F.t["0nUKy3"]),
                    action: () => (0, eG.A)(e_.X7G.ACKNOWLEDGEMENTS),
                }),
                (0, i.jsx)(eB.Dr, {
                    id: "support",
                    label: F.intl.string(F.t["Yl/Riu"]),
                    action: () => (0, eG.A)(eH.C),
                }),
            ],
        }),
    });
}
function e2() {
    let e = r.useRef(null);
    return (0, i.jsxs)("div", {
        children: [
            (0, i.jsx)(eJ, {}),
            (0, i.jsxs)("div", {
                className: e0.yJ,
                children: [
                    (0, i.jsx)(eF.Anchor, {
                        href: e_.X7G.PRIVACY,
                        children: (0, i.jsx)(a.E, {
                            tag: "span",
                            variant: "footnote/normal",
                            color: "currentColor",
                            children: F.intl.string(F.t["Knf/f/"]),
                        }),
                    }),
                    (0, i.jsx)("span", { className: e0.xE, "aria-hidden": "true", children: "\u2022" }),
                    (0, i.jsx)(eF.Anchor, {
                        href: e_.X7G.TERMS,
                        children: (0, i.jsx)(a.E, {
                            tag: "span",
                            variant: "footnote/normal",
                            color: "currentColor",
                            children: F.intl.string(F.t.uFSTGq),
                        }),
                    }),
                    (0, i.jsx)("span", { className: e0.xE, "aria-hidden": "true", children: "\u2022" }),
                    (0, i.jsx)(eK.Y, {
                        targetElementRef: e,
                        position: "top",
                        align: "center",
                        spacing: 0,
                        animation: eK.Y.Animation.NONE,
                        renderPopout: (e) => {
                            let { closePopout: t } = e;
                            return (0, i.jsx)(e1, { onClose: t });
                        },
                        children: (t, n) =>
                            (0, i.jsx)(eF.Anchor, {
                                ...t,
                                ref: e,
                                useDefaultUnderlineStyles: !1,
                                className: j()(e0.Mj, { [e0.vu]: n.isShown }),
                                children: (0, i.jsx)(a.E, {
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
var e5 = n(402651),
    e8 = n(669067),
    e9 = n(830543),
    e4 = n(953056);
let e3 = new Set([eM.X.PROFILE_PANEL, eM.X.SUBSCRIPTIONS_PANEL, eM.X.FAMILY_CENTER_PANEL, eM.X.POGGERMODE_PANEL]),
    e7 = new Map([[eM.X.SESSIONS_PANEL, s.ImpressionNames.USER_SETTINGS_SESSIONS]]);
function e6(e) {
    let { target: t, ...n } = e,
        l = eO.A.useField("query"),
        a = r.useCallback(() => {
            (eO.A.setState({ query: "" }), m.A.terminate());
        }, []),
        [h, g] = r.useState(!1);
    return (r.useLayoutEffect(() => {
        function e() {
            null == ew.default.getCurrentUser() && (g(!0), (0, e9.default)());
        }
        return (
            eR.default.addChangeListener(e),
            () => {
                (eR.default.removeChangeListener(e), e5.A.resetState(), d.A.resetState(), c.A.close(), (0, u.ZQ)());
            }
        );
    }, []),
    h)
        ? null
        : (0, i.jsx)(ek, {
              partialRoot: eD.D,
              searchBar: te,
              emptyState: tt,
              sidebarFooter: e2,
              onViewChange: function (e) {
                  e3.has(e) || (0, e8._)(e);
                  let t = e7.get(e);
                  (null != t &&
                      (0, o.x)({
                          type: s.ImpressionTypes.PANE,
                          name: t,
                          properties: { source: e5.A.getField("source") },
                      }),
                      e5.A.setState({ source: void 0 }));
              },
              target: t,
              defaultTarget: eM.X.ACCOUNT_PANEL,
              searchQuery: l,
              clearSearchQuery: a,
              ...n,
          });
}
function te() {
    let e = eO.A.useField("query"),
        t = r.useCallback((e) => {
            (eO.A.setState({ query: e }), m.A.maybeTrackQueryEntered());
        }, []),
        n = r.useCallback(() => {
            m.A.isSessionActive() || m.A.initialize();
        }, []),
        s = r.useCallback(() => {
            0 === eO.A.getField("query").trim().length && m.A.terminate();
        }, []),
        a = r.useCallback(() => {
            (eO.A.setState({ query: "" }), m.A.terminate());
        }, []);
    return (
        r.useEffect(
            () => () => {
                (eO.A.resetState(), m.A.terminate());
            },
            [],
        ),
        (0, i.jsx)("div", {
            className: e4.P,
            children: (0, i.jsx)(l.I, { size: "md", query: e, onFocus: n, onBlur: s, onChange: t, onClear: a }),
        })
    );
}
function tt() {
    return (0, i.jsxs)("div", {
        className: e4.t,
        children: [
            (0, i.jsx)(a.E, { variant: "body-sm/semibold", color: "text-strong", children: F.intl.string(F.t.zihbmv) }),
            (0, i.jsx)(a.E, { variant: "body-sm/normal", color: "text-subtle", children: F.intl.string(F.t.XclvsB) }),
        ],
    });
}
