n.d(t, { default: () => e8 });
var i = n(477900),
    s = n(582128),
    r = n(613412),
    l = n(683438),
    a = n(834730),
    o = n(252452),
    c = n(139286),
    u = n(200921),
    d = n(729934),
    m = n(324593),
    h = n(855986),
    g = n(521489),
    f = n(568602),
    x = n(775602),
    p = n(531685),
    A = n(188567),
    b = n(140735),
    y = n(534514),
    v = n(707554),
    S = n(964486);
(n(667532), n(134528), n(947204));
var j = n(503698),
    I = n.n(j),
    N = n(607399),
    E = n(408278),
    C = n(477155),
    T = n(43990),
    P = n(331322),
    w = n(668953),
    R = n(972213),
    k = n(97469),
    M = n(963935),
    L = n(894858),
    _ = n(272053),
    D = n(528689),
    O = n(939249),
    B = n(215566),
    K = n(792996),
    G = n(764318);
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
                    variant: n ? "body-md/medium" : "body-md/normal",
                    color: n ? "text-default" : void 0,
                    className: G.b,
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
        className: G.QF,
        children: n
            ? l
            : (0, i.jsx)(O.D, {
                  onClick: function () {
                      _.A.navigate(t.key);
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
var W = n(444493);
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
        o = r.length > 1 && null != l;
    return (0, i.jsx)(T.N, {
        theme: s,
        children: (e) =>
            (0, i.jsxs)("div", {
                className: I()(W.$Q, e, { [W.HW]: a || o }),
                children: [
                    (0, i.jsxs)(P.B, {
                        direction: "horizontal",
                        align: "center",
                        className: W.y9,
                        children: [
                            a &&
                                (0, i.jsx)(H, {
                                    icon: w.f,
                                    onClick: () => L.A.setState({ showNavigationMobile: !0 }),
                                    label: K.intl.string(K.t["13/7kX"]),
                                }),
                            o &&
                                (0, i.jsx)(H, {
                                    icon: C.r,
                                    onClick: () => _.A.navigate(l.key),
                                    label: K.intl.string(K.t["13/7kX"]),
                                }),
                            null != t && (0, i.jsx)(U, { path: r }),
                        ],
                    }),
                    (0, i.jsx)(H, { icon: R.XLargeIcon, onClick: n, label: K.intl.string(K.t.cpT0Cq) }),
                ],
            }),
    });
}
let V = s.memo(function (e) {
    let { onClose: t, setting: n } = e,
        s = L.A.useField("showNavigationMobile");
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
    Z = n(516521),
    $ = n(928039),
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
    eo = n(120692),
    ec = n(935399),
    eu = n(319354),
    ed = n(717421),
    em = n(253932),
    eh = n(480423);
let eg = "refresh_sm";
function ef(e) {
    let { category: t, onClick: n, active: r, dismissibleBadge: l } = e,
        { useTitle: o, useSubnavLabel: c, key: u, usePersistentBadge: d } = t,
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
        g = o?.(),
        f = c?.() ?? g;
    return (
        ea()(null != f, "[SettingsSubnavigationCategory] Category must have a title"),
        (0, i.jsx)(X.tG, {
            id: u,
            children: (e) =>
                (0, i.jsx)("div", {
                    role: "listitem",
                    children: (0, i.jsxs)(
                        O.D,
                        {
                            onClick: n,
                            className: I()(eh.AS, { [eh.vu]: r }),
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
function ex(e) {
    let t,
        n,
        r,
        l,
        { active: a, isTopLevelPanelVisible: o, visibleCategories: c, visibleContent: u, dismissibleBadges: d } = e,
        m = L.A.useField("currentCategoryKey"),
        [h, g] = s.useState(a);
    s.useLayoutEffect(() => {
        a && g(!0);
    }, [a]);
    let f = s.useMemo(() => c.findIndex((e) => e.key === m), [c, m]);
    s.useEffect(() => {
        if (!a) {
            let e = x.current;
            null != e &&
                ((e.style.height = `${e.scrollHeight}px`),
                window.getComputedStyle(e).height,
                (e.style.height = "0"),
                Promise.allSettled(e.getAnimations().map((e) => e.finished)).then(() => {
                    g(!1);
                }));
        }
    }, [a]);
    let x = s.useRef(null),
        [p, A] = s.useState(a ? "auto" : "0");
    return (
        (t = s.useRef(null)),
        (n = s.useRef(new Set())),
        (r = s.useRef(!1)),
        (l = s.useMemo(() => {
            let e = new Set();
            return (c.forEach((t) => e.add(t.key)), e);
        }, [c])),
        s.useEffect(() => {
            if (!o) return;
            let e = ee.A.getPanelScrollerNode();
            if (null == e) return;
            let i = e.querySelectorAll("[data-settings-category-key]"),
                s = e.querySelector("[data-panel-bottom]"),
                a = [];
            Array.from(i).forEach((e) => {
                let t = e.getAttribute("data-settings-category-key");
                null != t && l.has(t) && a.push(e);
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
                                let { isIntersecting: i, target: l } = t;
                                if (l === s) {
                                    let t = e.scrollHeight > e.clientHeight;
                                    r.current = i && t;
                                    return;
                                }
                                let a = c.get(l);
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
                        L.A.getField("currentCategoryKey") !== l && L.A.setState({ currentCategoryKey: l });
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
        }, [l, o]),
        (0, i.jsx)("div", {
            className: eh.lK,
            style: { height: p, opacity: +!!a },
            ref: x,
            children:
                h &&
                (0, i.jsx)(ep, {
                    index: f,
                    activeKey: m,
                    categories: c,
                    visibleContent: u,
                    dismissibleBadges: d,
                    onMount: function () {
                        let e = x.current;
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
function ep(e) {
    let { index: t, activeKey: n, categories: r, visibleContent: l, dismissibleBadges: a, onMount: o } = e,
        {
            thumbRef: c,
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
                o = s.useRef(e),
                [c, u] = (0, ed.z)(() => ({ y: 0, height: 0, config: { mass: 0.1, friction: 20, tension: 300 } }));
            return (
                s.useLayoutEffect(() => {
                    let s = a.current !== t;
                    function d() {
                        if (null == n.current || null == i.current || null == r.current) return;
                        let [d, m] = [n.current.getBoundingClientRect(), r.current.getBoundingClientRect()],
                            h = d.width / 2,
                            g = (m.y - d.y) / h,
                            f = m.height / h;
                        (l.current || s || x.Ay.useReducedMotion || -1 === o.current
                            ? (c.y.set(g), c.height.set(f))
                            : u({ y: g, height: f }),
                            (l.current = !1),
                            (a.current = t),
                            (o.current = e));
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
                }, [e, u, c.y, c.height, t]),
                { thumbRef: i, trackRef: n, thumbAnchorRef: r, springs: c }
            );
        })(t);
    (0, ec.Ay)(o);
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
                children: (0, i.jsx)(eo.animated.div, {
                    className: I()(eh.FF, { [eh.R]: null == n }),
                    style: m,
                    ref: c,
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
var eA = n(686380);
function eb(e) {
    let { onClick: t, active: n, node: r, dismissibleBadge: l, panelKey: o, listItemProps: c, children: u } = e,
        {
            icon: d,
            StronglyDiscouragedCustomComponent: m,
            usePersistentBadge: h,
            useTitle: g,
            variant: f = "default",
        } = r,
        x = g?.(),
        p = (function (e) {
            switch (e) {
                case "default":
                    return "currentColor";
                case "destructive":
                    return "text-feedback-critical";
            }
        })(f),
        A = (function (e) {
            switch (e) {
                case "default":
                    return "currentColor";
                case "destructive":
                    return en.A.colors.ICON_FEEDBACK_CRITICAL;
            }
        })(f),
        b = h?.(n),
        y = s.useMemo(
            () =>
                null != l
                    ? n
                        ? null
                        : (0, i.jsx)(er, { badge: l })
                    : null != b
                      ? (0, i.jsx)(B.A, { badge: b })
                      : void 0,
            [n, l, b],
        );
    return (0, i.jsxs)("li", {
        "data-settings-sidebar-item": o,
        className: eA.DB,
        children: [
            (0, i.jsxs)(O.D, {
                ...c,
                role: "link",
                "aria-current": n ? "page" : void 0,
                className: I()(eA.AS, { [eA.vu]: n, [eA.RD]: "destructive" === f }),
                onClick: t,
                children: [
                    null != m
                        ? (0, i.jsx)(m, {})
                        : (0, i.jsxs)("div", {
                              className: eA.Ly,
                              children: [
                                  (0, i.jsx)(d, { color: A, size: eg, className: eA.Kk }),
                                  (0, i.jsx)(a.E, { variant: "body-md/medium", color: p, children: x }),
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
        o = L.A.useField("currentPanelKey"),
        { accessibleDirectory: c } = (0, Q._)(),
        u = a?.key === o,
        d = s.useMemo(() => {
            if (null == o) return !1;
            let e = c.entry(o);
            return e?.parentSidebarItemKey === t.key;
        }, [o, t.key, c]),
        m = s.useMemo(() => {
            if (null == a || !(0, M.zS)(a.layout)) return null;
            let e = a.layout.filter(M.bJ);
            return e.length > 1 ? e : null;
        }, [a]),
        h =
            null != a
                ? () => {
                      let e = o === a.key && null != m ? m[0].key : a.key;
                      _.A.navigate(e, { animateSidebarScroll: !0, showNavigationMobile: !1 });
                  }
                : t.onClick,
        g = null != o,
        f = s.useMemo(
            () =>
                null != m && g
                    ? (0, i.jsx)(ex, {
                          active: d,
                          isTopLevelPanelVisible: u,
                          visibleCategories: m,
                          visibleContent: n,
                          dismissibleBadges: r,
                      })
                    : null,
            [m, g, d, u, n, r],
        ),
        x = s.useMemo(() => et(t.key, n, r), [t.key, n, r]);
    return l
        ? (0, i.jsx)(eb, {
              panelKey: a?.key,
              onClick: h,
              active: d,
              "aria-expanded": null != m ? d : void 0,
              node: t,
              dismissibleBadge: x,
              children: f,
          })
        : (0, i.jsx)(X.tG, {
              id: a?.key ?? t.key,
              children: (e) =>
                  (0, i.jsx)(eb, {
                      panelKey: a?.key,
                      onClick: h,
                      active: d,
                      node: t,
                      dismissibleBadge: x,
                      listItemProps: e,
                      children: f,
                  }),
          });
}
var ev = n(639876);
function eS(e) {
    let { currentPanelKey: t, root: n, onClose: r, footer: l, emptyState: a, searchBar: o } = e,
        c = L.A.useField("showNavigationMobile"),
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
                    let o = { sidebarItemKey: l.parentSidebarItemKey, categoryKey: a };
                    r.forEach((s) =>
                        (function (s, r) {
                            let { dismissibleContent: l } = s;
                            (e.push(l), t.set(l, r), i.set(l, s));
                            let a = n.get(r.sidebarItemKey) ?? new Set();
                            if ((a.add(l), n.set(r.sidebarItemKey, a), null != r.categoryKey)) {
                                let e = n.get(r.categoryKey) ?? new Set();
                                (e.add(l), n.set(r.categoryKey, e));
                            }
                        })(s, o),
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
    let [f, x] = s.useMemo(() => {
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
        A = (0, $.A)("settings-sidebar", u, { orientation: Y.Gl.VERTICAL, defaultFocused: t }),
        [S, j] = s.useState(!1),
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
                className: I()(ev.pz, e, { [ev.Hw]: N.Fr, [ev.n7]: c }),
                children: [
                    (0, i.jsx)(b.A, {
                        children: (0, i.jsx)(y.D, {
                            variant: "body-sm/semibold",
                            id: P,
                            children: K.intl.string(K.t["ZU3/B4"]),
                        }),
                    }),
                    (0, i.jsxs)(v.F, {
                        children: [
                            (0, i.jsxs)("div", {
                                className: I()(ev.gM, { [ev.to]: S }),
                                children: [
                                    N.Fr &&
                                        (0, i.jsx)("div", {
                                            className: ev.hg,
                                            children: (0, i.jsx)(E.K, {
                                                icon: R.XLargeIcon,
                                                onClick: r,
                                                variant: "icon-only",
                                                size: "sm",
                                                "aria-label": K.intl.string(K.t.cpT0Cq),
                                            }),
                                        }),
                                    (0, i.jsx)("div", {
                                        children: f.map((e) =>
                                            (0, i.jsx)(
                                                ej,
                                                { section: e, visibleContent: g, dismissibleBadges: h },
                                                e.key,
                                            ),
                                        ),
                                    }),
                                    null != o && (0, i.jsx)(o, {}),
                                    null != a && 0 === x.length && (0, i.jsx)(a, {}),
                                ],
                            }),
                            (0, i.jsx)("nav", {
                                className: ev.C$,
                                "aria-label": K.intl.string(K.t.MqTGqz),
                                children: (0, i.jsx)(X.hD, {
                                    navigator: A,
                                    children: (0, i.jsx)(X.PR, {
                                        children: (e) => {
                                            let { ref: t, ...n } = e;
                                            return (0, i.jsxs)(Z.Ch, {
                                                ref: (e) => {
                                                    ((u.current = e), ee.A.setSidebarScrollerRef(e), C());
                                                },
                                                className: ev.Mt,
                                                fade: !0,
                                                onScroll: C,
                                                children: [
                                                    (0, i.jsx)("ul", {
                                                        className: ev.jV,
                                                        ...n,
                                                        ref: t,
                                                        children: x.map((e) =>
                                                            (0, i.jsx)(
                                                                eI,
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
function ej(e) {
    let { section: t, visibleContent: n, dismissibleBadges: s } = e;
    return (0, i.jsx)("div", {
        className: ev.uW,
        children: (0, i.jsx)("ul", {
            className: ev.C4,
            children: t.layout.map((e) =>
                (0, i.jsx)(ey, { node: e, visibleContent: n, dismissibleBadges: s, hoisted: !0 }, e.key),
            ),
        }),
    });
}
function eI(e) {
    let { section: t, visibleContent: n, dismissibleBadges: r } = e,
        l = t.useTitle?.() ?? K.intl.string(K.t["3D5yo/"]),
        a = s.useId();
    return (0, i.jsxs)("li", {
        className: ev.uW,
        "aria-labelledby": a,
        children: [
            t.hideTitle
                ? (0, i.jsx)(b.A, { children: (0, i.jsx)(y.D, { id: a, variant: "heading-xs/medium", children: l }) })
                : (0, i.jsx)("div", {
                      className: ev.a9,
                      children: (0, i.jsx)(y.D, {
                          id: a,
                          className: ev.Pf,
                          variant: "heading-xs/medium",
                          color: "text-muted",
                          children: l,
                      }),
                  }),
            (0, i.jsx)("ul", {
                className: ev.C4,
                children: t.layout.map((e) =>
                    (0, i.jsx)(ey, { node: e, visibleContent: n, dismissibleBadges: r }, e.key),
                ),
            }),
        ],
    });
}
var eN = n(823092),
    eE = n(122088),
    eC = n(759031);
function eT(e) {
    let {
            partialRoot: t,
            target: n,
            defaultTarget: r,
            onClose: l,
            sidebarFooter: a,
            searchBar: o,
            onViewChange: c,
            emptyState: u,
            searchQuery: d,
            clearSearchQuery: m,
        } = e,
        h = L.A.useField("currentPanelKey"),
        { node: g, visibleDirectory: f, accessibleDirectory: x } = (0, eE.Ay)(t, d ?? ""),
        p = null != n && f.entry(n)?.parentPanelKey != null ? n : r,
        A = s.useMemo(() => {
            let e = x.entry(h ?? p)?.parentPanelKey;
            if (null != e) return x.getPanelOrThrow(e);
        }, [h, x, p]),
        { navigateWithValidation: j } = (0, eN.L_)(),
        I = s.useMemo(() => () => j(l), [j, l]);
    s.useEffect(() => {
        _.A.init({
            accessibleDirectory: x,
            onViewChange: c,
            navigateWithValidation: (e, t) => {
                (null == f.entry(e) && m?.(), j(t));
            },
            closeWithValidation: I,
        });
    }, [x, j, c, m, f, I]);
    let [N, E] = s.useState(!0);
    (0, S.Ay)(
        () => (
            _.A.navigate(p, { animatePanelScroll: !1, animateSidebarScroll: !1, showNavigationMobile: null == n }),
            E(!1),
            () => {
                (J.A.reset(), _.A.reset(), ee.A.reset(), L.A.resetState());
            }
        ),
    );
    let C = s.useMemo(() => ({ visibleDirectory: f, accessibleDirectory: x }), [f, x]),
        T = null != h ? f.get(h) : void 0,
        P = N ? void 0 : (T ?? A),
        w = P?.useTitle() ?? K.intl.string(K.t["3D5yo/"]);
    return (0, i.jsx)(Q.x.Provider, {
        value: C,
        children: (0, i.jsxs)("div", {
            className: eC.k,
            children: [
                (0, i.jsx)(b.A, { children: (0, i.jsx)(y.D, { variant: "body-sm/semibold", children: w }) }),
                (0, i.jsxs)(v.F, {
                    children: [
                        (0, i.jsx)(eS, {
                            currentPanelKey: h,
                            root: g,
                            onClose: I,
                            footer: a,
                            emptyState: u,
                            searchBar: o,
                        }),
                        (0, i.jsx)(V, { onClose: I, setting: P }),
                    ],
                }),
            ],
        }),
    });
}
function eP(e) {
    return (0, i.jsx)(eN.ms, { children: (0, i.jsx)(eT, { ...e }) });
}
var ew = n(652215);
function eR(e) {
    let {
            partialRoot: t,
            target: n,
            defaultTarget: r,
            onViewChange: l,
            sidebarFooter: a,
            emptyState: o,
            searchQuery: c,
            clearSearchQuery: u,
            searchBar: d,
            ...m
        } = e,
        [b, y] = s.useState(!1),
        [v, S] = s.useState(1.4),
        j = s.useRef(null),
        I = (0, h.bG)([x.Ay], () => x.Ay.useReducedMotion),
        N = (0, h.bG)([p.A], () => p.A.isFocused());
    return (
        s.useEffect(() => {
            function e(e) {
                let { intensity: t, duration: n } = e;
                !I &&
                    N &&
                    (y(!0), S(t ?? 1.4), clearTimeout(j.current), (j.current = setTimeout(() => y(!1), n ?? 1e3)));
            }
            return (
                A._.subscribe(ew.jej.SHAKE_SETTINGS_MODAL, e),
                () => {
                    (A._.unsubscribe(ew.jej.SHAKE_SETTINGS_MODAL, e), clearTimeout(j.current));
                }
            );
        }, [I, N]),
        (0, i.jsx)(f.b, {
            isShaking: b,
            intensity: v,
            children: (0, i.jsx)(g.N, {
                ...m,
                children: (0, i.jsx)(eP, {
                    onClose: m.onClose,
                    partialRoot: t,
                    target: n,
                    defaultTarget: r,
                    onViewChange: l,
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
var ek = n(46653),
    eM = n(287809),
    eL = n(152056),
    e_ = n(780964),
    eD = n(640497),
    eO = n(165862),
    eB = n(477782),
    eK = n(28863),
    eG = n(265872),
    eF = n(975807),
    eU = n(212031),
    eW = n(975571),
    eH = n(481613),
    ez = n.n(eH),
    eV = n(77729),
    eX = n(521502),
    eY = n(915089),
    eZ = n(206845),
    e$ = n(253400),
    eq = n(415443),
    eQ = n(592739);
function eJ() {
    let e = (0, eY.GV)(),
        t = window.GLOBAL_ENV.RELEASE_CHANNEL,
        n = "665561",
        s = "5c68171dad13bbda579946f6fdbbb7eb8cf12e78".substring(0, 7),
        r = eV.A?.app.getVersion(),
        l = eV.A?.app.getBuildNumber(),
        o = eV.A?.app.getAppArch(),
        c = eX.A.getCurrentBuildOverride().overrides?.discord_web,
        u = null != c ? (0, eq.A)("1793849470656", !1) : null,
        d = null != u ? ` (built ${u})` : "",
        m = (function () {
            let e = ez()?.os?.toString();
            if (null == e || null == eV.A) return null;
            let t = eV.A.os.release,
                [n, i, s] = e$.Ay.parsedOSRelease;
            return (
                e.includes("Windows 10") && void 0 !== s && s >= 22e3 && (e = e.replace("Windows 10", "Windows 11")),
                e.includes("OS X 10.15.7") && void 0 !== n && n >= 20 && (e = `macOS ${n >= 25 ? n + 1 : n - 9}`),
                `${e} (${t})`
            );
        })(),
        h = [t, n, `(${s})`];
    return (
        null != r && (h.push(`Host ${r}`), null != o && h.push(o.toLowerCase()), null != l && h.push(`(${l})`)),
        h.push(`Build Override: ${null != c ? c.id : "N/A"}${d}`),
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
                            className: I()(eQ.vk, eQ.oE),
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
                                                    null != o &&
                                                        (0, i.jsxs)("span", {
                                                            className: eQ.GI,
                                                            children: [" ", o.toLowerCase()],
                                                        }),
                                                    null != l && (0, i.jsxs)("span", { children: [" (", l, ")"] }),
                                                ],
                                            }),
                                    ],
                                }),
                                null != c &&
                                    (0, i.jsx)(a.E, {
                                        tag: "span",
                                        variant: "footnote/normal",
                                        color: "text-muted",
                                        children: (0, i.jsxs)("span", {
                                            className: eQ.Pc,
                                            children: ["Build Override: ", c.id, d],
                                        }),
                                    }),
                            ],
                        }),
                }),
                (0, i.jsx)(b.A, { id: e, children: K.intl.string(K.t["9Al4Qd"]) }),
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
                    action: () => (0, eF.A)(ew.X7G.ACKNOWLEDGEMENTS),
                }),
                (0, i.jsx)(eB.Dr, {
                    id: "support",
                    label: K.intl.string(K.t["Yl/Riu"]),
                    action: () => (0, eF.A)(eW.C),
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
                    (0, i.jsx)(eG.Y, {
                        targetElementRef: e,
                        position: "top",
                        align: "center",
                        spacing: 0,
                        animation: eG.Y.Animation.NONE,
                        renderPopout: (e) => {
                            let { closePopout: t } = e;
                            return (0, i.jsx)(e1, { onClose: t });
                        },
                        children: (t, n) =>
                            (0, i.jsx)(eK.Anchor, {
                                ...t,
                                ref: e,
                                useDefaultUnderlineStyles: !1,
                                className: I()(e0.Mj, { [e0.vu]: n.isShown }),
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
    e9 = n(669067),
    e6 = n(830543),
    e4 = n(953056);
let e3 = new Set([e_.X.PROFILE_PANEL, e_.X.SUBSCRIPTIONS_PANEL, e_.X.FAMILY_CENTER_PANEL, e_.X.POGGERMODE_PANEL]),
    e7 = new Map([[e_.X.SESSIONS_PANEL, r.ImpressionNames.USER_SETTINGS_SESSIONS]]);
function e8(e) {
    let { target: t, ...n } = e,
        l = eL.A.useField("query"),
        a = s.useCallback(() => {
            (eL.A.setState({ query: "" }), m.A.terminate());
        }, []),
        [h, g] = s.useState(!1);
    return (s.useLayoutEffect(() => {
        function e() {
            null == eM.default.getCurrentUser() && (g(!0), (0, e6.default)());
        }
        return (
            ek.default.addChangeListener(e),
            () => {
                (ek.default.removeChangeListener(e), e5.A.resetState(), d.A.resetState(), o.A.close(), (0, u.ZQ)());
            }
        );
    }, []),
    h)
        ? null
        : (0, i.jsx)(eR, {
              partialRoot: eD.D,
              searchBar: te,
              emptyState: tt,
              sidebarFooter: e2,
              onViewChange: function (e) {
                  e3.has(e) || (0, e9._)(e);
                  let t = e7.get(e);
                  (null != t &&
                      (0, c.x)({
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
    let e = eL.A.useField("query"),
        t = s.useCallback((e) => {
            (eL.A.setState({ query: e }), m.A.maybeTrackQueryEntered());
        }, []),
        n = s.useCallback(() => {
            m.A.isSessionActive() || m.A.initialize();
        }, []),
        r = s.useCallback(() => {
            0 === eL.A.getField("query").trim().length && m.A.terminate();
        }, []),
        a = s.useCallback(() => {
            (eL.A.setState({ query: "" }), m.A.terminate());
        }, []);
    return (
        s.useEffect(
            () => () => {
                (eL.A.resetState(), m.A.terminate());
            },
            [],
        ),
        (0, i.jsx)("div", {
            className: e4.P,
            children: (0, i.jsx)(l.I, { size: "md", query: e, onFocus: n, onBlur: r, onChange: t, onClear: a }),
        })
    );
}
function tt() {
    return (0, i.jsxs)("div", {
        className: e4.t,
        children: [
            (0, i.jsx)(a.E, { variant: "body-sm/semibold", color: "text-strong", children: K.intl.string(K.t.zihbmv) }),
            (0, i.jsx)(a.E, { variant: "body-sm/normal", color: "text-subtle", children: K.intl.string(K.t.XclvsB) }),
        ],
    });
}
