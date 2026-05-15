n.d(t, { default: () => te });
var r = n(627968),
    l = n(64700),
    s = n(562708),
    i = n(892547),
    a = n(834730),
    u = n(252452),
    o = n(139286),
    c = n(200921),
    d = n(507553),
    h = n(89381),
    m = n(17928),
    g = n(521489),
    x = n(568602),
    y = n(775602),
    f = n(531685),
    j = n(625494),
    p = n(964486);
n(667532), n(134528), n(947204);
var v = n(503698),
    A = n.n(v),
    b = n(607399),
    S = n(408278),
    N = n(477155),
    C = n(43990),
    E = n(331322),
    k = n(668953),
    I = n(972213),
    M = n(97469),
    R = n(963935),
    w = n(894858),
    T = n(272053),
    K = n(740572),
    _ = n(939249),
    O = n(508770),
    B = n(738188),
    L = n(661531),
    P = n(777666),
    D = n(933297);
function F(e) {
    let { badge: t } = e;
    return t.useCustomBadge();
}
function G(e) {
    let { badge: t } = e,
        n = t.useCount();
    return n <= 0 ? null : (0, r.jsx)(P.hV, { count: n });
}
let X = function (e) {
    let { badge: t } = e;
    switch (t.badgeType) {
        case D.Xi.BETA:
            return (0, r.jsx)(O.E, { type: "beta", variant: "brand" });
        case D.Xi.COUNT:
            return (0, r.jsx)(G, { badge: t });
        case D.Xi.WARNING:
            return (0, r.jsx)(B.i, { size: "xs", color: L.A.colors.ICON_FEEDBACK_WARNING });
        case D.Xi.STRONGLY_DISCOURAGED_CUSTOM:
            return (0, r.jsx)(F, { badge: t });
    }
};
var z = n(375708),
    U = n(508891);
function q(e) {
    let { node: t, isLast: n } = e,
        l = t.useTitle(),
        s = t.usePersistentBadge?.(),
        i = (0, r.jsxs)(E.B, {
            direction: "horizontal",
            align: "center",
            gap: "xs",
            className: U.Ze,
            children: [
                (0, r.jsx)(a.E, {
                    variant: n ? "text-md/medium" : "text-md/normal",
                    color: n ? "text-default" : void 0,
                    className: U.b,
                    children: l,
                }),
                n && null != s && (0, r.jsx)(X, { badge: s }),
                !n &&
                    (0, r.jsx)(a.E, {
                        variant: "text-md/normal",
                        color: "interactive-text-default",
                        "aria-hidden": !0,
                        children: "/",
                    }),
            ],
        });
    return (0, r.jsx)("li", {
        "aria-current": n ? "page" : void 0,
        className: U.QF,
        children: n
            ? i
            : (0, r.jsx)(_.D, {
                  onClick: () => {
                      T.A.navigate(t.key);
                  },
                  className: U.vk,
                  children: i,
              }),
    });
}
function W(e) {
    let { path: t } = e;
    return (0, r.jsx)("nav", {
        "aria-label": z.intl.string(z.t["bM+M/m"]),
        className: U.m7,
        children: (0, r.jsx)(E.B, {
            direction: "horizontal",
            role: "list",
            className: U.jD,
            children: t.map((e, n) => (0, r.jsx)(q, { node: e, isLast: n === t.length - 1 }, e.key)),
        }),
    });
}
var V = n(441562);
function $(e) {
    let { icon: t, label: n, onClick: l } = e;
    return (0, r.jsx)(S.K, { onClick: l, icon: t, size: "sm", variant: "icon-only", "aria-label": n });
}
function H(e) {
    let { setting: t, onClose: n } = e,
        l = (0, M.NC)(),
        s =
            null != t
                ? (function (e) {
                      let t = [e];
                      for (let n = e.parent; null != n && n.type !== R.Z6.SIDEBAR_ITEM; n = n.parent)
                          n.type === R.Z6.PANEL && t.unshift(n);
                      return t;
                  })(t)
                : [],
        i = s.at(-2),
        a = b.Fr && s.length <= 1,
        u = s.length > 1 && null != i;
    return (0, r.jsx)(C.N, {
        theme: l,
        children: (e) =>
            (0, r.jsxs)("div", {
                className: A()(V.$Q, e, { [V.HW]: a || u }),
                children: [
                    (0, r.jsxs)(E.B, {
                        direction: "horizontal",
                        align: "center",
                        className: V.y9,
                        children: [
                            a &&
                                (0, r.jsx)($, {
                                    icon: k.f,
                                    onClick: () => w.A.setState({ showNavigationMobile: !0 }),
                                    label: z.intl.string(z.t["13/7kX"]),
                                }),
                            u &&
                                (0, r.jsx)($, {
                                    icon: N.r,
                                    onClick: () => T.A.navigate(i.key),
                                    label: z.intl.string(z.t["13/7kX"]),
                                }),
                            null != t && (0, r.jsx)(W, { path: s }),
                        ],
                    }),
                    (0, r.jsx)($, { icon: I.d, onClick: n, label: z.intl.string(z.t.cpT0Cq) }),
                ],
            }),
    });
}
let Q = l.memo(function (e) {
    let { onClose: t, setting: n } = e,
        l = w.A.useField("showNavigationMobile");
    return (0, r.jsxs)("div", {
        className: A()(V.Qs, { [V.Hw]: b.Fr, [V.n7]: l }),
        children: [
            (0, r.jsx)(H, { setting: n, onClose: t }),
            (0, r.jsx)("div", { className: V.yp, children: null != n && (0, r.jsx)(K.A, { node: n }) }),
        ],
    });
});
n(321073);
var Y = n(837381),
    Z = n(689175),
    J = n(534514),
    ee = n(928039),
    et = n(131607),
    en = n(199966),
    er = n(397274);
function el(e, t, n) {
    let { nodeKeyToDismissibleContents: r, dismissibleContentToBadge: l } = n,
        s = r.get(e);
    return null != t && null != s && s.has(t) ? l.get(t) : null;
}
let es = function (e) {
    let { badge: t } = e;
    switch (t.badgeType) {
        case D.Xi.NEW:
            return (0, r.jsx)(O.E, { type: "new", variant: "brand" });
        case D.Xi.STRONGLY_DISCOURAGED_CUSTOM:
            let { StronglyDiscouragedCustomComponent: n } = t;
            return (0, r.jsx)(n, {});
    }
};
var ei = n(284009),
    ea = n.n(ei),
    eu = n(873174),
    eo = n(935399),
    ec = n(319354),
    ed = n(717421),
    eh = n(885386),
    em = n(429566);
function eg(e) {
    let { category: t, onClick: n, active: s, dismissibleBadge: i } = e,
        { useTitle: a, useSubnavLabel: u, key: o, usePersistentBadge: c } = t,
        d = c?.(),
        h = l.useMemo(
            () =>
                null != i
                    ? s
                        ? null
                        : (0, r.jsx)(es, { badge: i })
                    : null != d
                      ? (0, r.jsx)(X, { badge: d })
                      : void 0,
            [s, i, d],
        ),
        m = a?.(),
        g = u?.() ?? m;
    return (
        ea()(null != g, "[SettingsSubnavigationCategory] Category must have a title"),
        (0, r.jsx)(Y.tG, {
            id: o,
            children: (e) =>
                (0, r.jsxs)(
                    _.D,
                    {
                        onClick: n,
                        className: A()(em.AS, { [em.vu]: s }),
                        ...e,
                        "aria-current": s ? "page" : void 0,
                        children: [g, h],
                    },
                    o,
                ),
        })
    );
}
function ex(e) {
    let t,
        n,
        s,
        i,
        { active: a, isTopLevelPanelVisible: u, visibleCategories: o, visibleContent: c, dismissibleBadges: d } = e,
        h = w.A.useField("currentCategoryKey"),
        [m, g] = l.useState(a);
    l.useLayoutEffect(() => {
        a && g(!0);
    }, [a]);
    let x = l.useMemo(() => o.findIndex((e) => e.key === h), [o, h]);
    l.useEffect(() => {
        if (!a) {
            let e = y.current;
            null != e &&
                ((e.style.height = `${e.scrollHeight}px`),
                window.getComputedStyle(e).height,
                (e.style.height = "0"),
                Promise.allSettled(e.getAnimations().map((e) => e.finished)).then(() => {
                    g(!1);
                }));
        }
    }, [a]);
    let y = l.useRef(null),
        [f, j] = l.useState(a ? "auto" : "0");
    return (
        (t = l.useRef(null)),
        (n = l.useRef(new Set())),
        (s = l.useRef(!1)),
        (i = l.useMemo(() => {
            let e = new Set();
            return o.forEach((t) => e.add(t.key)), e;
        }, [o])),
        l.useEffect(() => {
            if (!u) return;
            let e = er.A.getPanelScrollerNode();
            if (null == e) return;
            let r = e.querySelectorAll("[data-settings-category-key]"),
                l = e.querySelector("[data-panel-bottom]"),
                a = [];
            Array.from(r).forEach((e) => {
                let t = e.getAttribute("data-settings-category-key");
                null != t && i.has(t) && a.push(e);
            });
            let o = new Map(),
                c = [];
            return (
                a.forEach((e) => {
                    let t = e.getAttribute("data-settings-category-key");
                    null != t && (o.set(e, t), c.push(t));
                }),
                (t.current = new IntersectionObserver(
                    (t) => {
                        if (
                            (t.forEach((t) => {
                                let { isIntersecting: r, target: i } = t;
                                if (i === l) {
                                    let t = e.scrollHeight > e.clientHeight;
                                    s.current = r && t;
                                    return;
                                }
                                let a = o.get(i);
                                null != a && (r ? n.current.add(a) : n.current.delete(a));
                            }),
                            !er.A.getIsSidebarCategoryAutoSelectEnabled())
                        )
                            return;
                        let r = [];
                        if (
                            (c.forEach((e) => {
                                n.current.has(e) && r.push(e);
                            }),
                            0 === r.length)
                        )
                            return;
                        let i = r.at(s.current ? -1 : 0);
                        w.A.getField("currentCategoryKey") !== i && w.A.setState({ currentCategoryKey: i });
                    },
                    { root: e, rootMargin: "0px 100000px 0px 100000px", threshold: 1 },
                )),
                a.forEach((e) => t.current?.observe(e)),
                null != l && t.current?.observe(l),
                () => {
                    a.forEach((e) => t.current?.unobserve(e)),
                        null != l && t.current?.unobserve(l),
                        t.current?.disconnect(),
                        (t.current = null);
                }
            );
        }, [i, u]),
        (0, r.jsx)("div", {
            className: em.lK,
            style: { height: f, opacity: +!!a },
            ref: y,
            children:
                m &&
                (0, r.jsx)(ey, {
                    index: x,
                    activeKey: h,
                    categories: o,
                    visibleContent: c,
                    dismissibleBadges: d,
                    onMount: function () {
                        let e = y.current;
                        null != e &&
                            ((e.style.height = `${e.scrollHeight}px`),
                            Promise.all(e.getAnimations().map((e) => e.finished))
                                .then(() => {
                                    (e.style.height = "auto"),
                                        er.A.scrollSidebarNodeIntoView(e, { animate: !0, block: "nearest" });
                                })
                                .catch(() => {}));
                    },
                }),
        })
    );
}
function ey(e) {
    let { index: t, activeKey: n, categories: s, visibleContent: i, dismissibleBadges: a, onMount: u } = e,
        {
            thumbRef: o,
            trackRef: c,
            thumbAnchorRef: d,
            springs: h,
        } = (function (e) {
            let t = eh.Xi.useSetting(),
                n = l.useRef(null),
                r = l.useRef(null),
                s = l.useRef(null),
                i = l.useRef(!0),
                a = l.useRef(t),
                u = l.useRef(e),
                [o, c] = (0, ed.z)(() => ({ y: 0, height: 0, config: { mass: 0.1, friction: 20, tension: 300 } }));
            return (
                l.useLayoutEffect(() => {
                    let l = a.current !== t,
                        d = () => {
                            if (null == n.current || null == r.current || null == s.current) return;
                            let [d, h] = [n.current.getBoundingClientRect(), s.current.getBoundingClientRect()],
                                m = d.width / 2,
                                g = (h.y - d.y) / m,
                                x = h.height / m;
                            i.current || l || y.A.useReducedMotion || -1 === u.current
                                ? (o.y.set(g), o.height.set(x))
                                : c({ y: g, height: x }),
                                (i.current = !1),
                                (a.current = t),
                                (u.current = e);
                        },
                        h = null;
                    return (
                        l
                            ? (h = requestAnimationFrame(() => {
                                  (h = null), d();
                              }))
                            : d(),
                        () => {
                            null != h && cancelAnimationFrame(h);
                        }
                    );
                }, [e, c, o.y, o.height, t]),
                { thumbRef: r, trackRef: n, thumbAnchorRef: s, springs: o }
            );
        })(t);
    return (
        (0, eo.Ay)(u),
        (0, r.jsxs)("div", {
            className: em.o8,
            role: "list",
            style: {
                "--custom-nav-count": s.length,
                "--custom-nav-index": Math.max(t, 0),
                "--custom-nav-width": "2px",
                "--custom-icon-size": `${ec.E[ej]}px`,
            },
            children: [
                (0, r.jsx)("div", {
                    className: em.u4,
                    "aria-hidden": "true",
                    ref: c,
                    children: (0, r.jsx)(eu.animated.div, {
                        className: A()(em.FF, { [em.R]: null == n }),
                        style: h,
                        ref: o,
                    }),
                }),
                (0, r.jsx)("div", { className: em.gu, "aria-hidden": "true", ref: d }),
                s.map((e) => {
                    let t = el(e.key, i, a);
                    return (0, r.jsx)(
                        eg,
                        {
                            onClick: () => {
                                var t;
                                return (t = e.key), void T.A.navigate(t, { showNavigationMobile: !1 });
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
let ej = "refresh_sm";
function ep(e) {
    let {
            tag: t,
            onClick: n,
            active: s,
            "aria-expanded": i,
            node: u,
            dismissibleBadge: o,
            panelKey: c,
            listItemProps: d,
            children: h,
        } = e,
        {
            icon: m,
            StronglyDiscouragedCustomComponent: g,
            usePersistentBadge: x,
            useTitle: y,
            variant: f = "default",
        } = u,
        j = y?.(),
        p = (function (e) {
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
                    return L.A.colors.ICON_FEEDBACK_CRITICAL;
            }
        })(f),
        b = x?.(s),
        S = l.useMemo(
            () =>
                null != o
                    ? s
                        ? null
                        : (0, r.jsx)(es, { badge: o })
                    : null != b
                      ? (0, r.jsx)(X, { badge: b })
                      : void 0,
            [s, o, b],
        );
    return (0, r.jsxs)(t, {
        "data-settings-sidebar-item": c,
        className: ef.DB,
        children: [
            (0, r.jsxs)(_.D, {
                ...d,
                "aria-expanded": i,
                className: A()(ef.AS, { [ef.vu]: s, [ef.RD]: "destructive" === f }),
                "aria-current": s ? "page" : void 0,
                onClick: n,
                children: [
                    null != g
                        ? (0, r.jsx)(g, {})
                        : (0, r.jsxs)("div", {
                              className: ef.Ly,
                              children: [
                                  (0, r.jsx)(m, { color: v, size: ej, className: ef.Kk }),
                                  (0, r.jsx)(a.E, { variant: "text-md/medium", color: p, children: j }),
                              ],
                          }),
                    S,
                ],
            }),
            h,
        ],
    });
}
function ev(e) {
    let { node: t, visibleContent: n, dismissibleBadges: s, hoisted: i = !1 } = e,
        a = l.useMemo(() => t.layout[0], [t]),
        u = w.A.useField("currentPanelKey"),
        { accessibleDirectory: o } = (0, en._)(),
        c = a?.key === u,
        d = l.useMemo(() => {
            if (null == u) return !1;
            let e = o.entry(u);
            return e?.parentSidebarItemKey === t.key;
        }, [u, t.key, o]),
        h = l.useMemo(() => {
            if (null == a || !(0, R.Iu)(a.layout)) return null;
            let e = a.layout.filter(R.bJ);
            return e.length > 1 ? e : null;
        }, [a]),
        m =
            null != a
                ? () => {
                      let e = u === a.key && null != h ? h[0].key : a.key;
                      T.A.navigate(e, { animateSidebarScroll: !0, showNavigationMobile: !1 });
                  }
                : t.onClick,
        g = null != u,
        x = l.useMemo(
            () =>
                null != h && g
                    ? (0, r.jsx)(ex, {
                          active: d,
                          isTopLevelPanelVisible: c,
                          visibleCategories: h,
                          visibleContent: n,
                          dismissibleBadges: s,
                      })
                    : null,
            [h, g, d, c, n, s],
        ),
        y = i ? "li" : "div",
        f = l.useMemo(() => el(t.key, n, s), [t.key, n, s]);
    return i
        ? (0, r.jsx)(ep, {
              tag: y,
              panelKey: a?.key,
              onClick: m,
              active: d,
              "aria-expanded": null != h ? d : void 0,
              node: t,
              dismissibleBadge: f,
              children: x,
          })
        : (0, r.jsx)(Y.tG, {
              id: t.key,
              children: (e) =>
                  (0, r.jsx)(ep, {
                      tag: y,
                      panelKey: a?.key,
                      onClick: m,
                      active: d,
                      "aria-expanded": null != h ? d : void 0,
                      node: t,
                      dismissibleBadge: f,
                      listItemProps: e,
                      children: x,
                  }),
          });
}
var eA = n(826673),
    eb = n(49999),
    eS = n(443263);
function eN(e) {
    let { root: t, onClose: n, footer: s, emptyState: i, searchBar: a } = e,
        u = w.A.useField("showNavigationMobile"),
        o = l.useRef(null),
        [c] = l.useState(t),
        { accessibleDirectory: d } = (0, en._)(),
        h = l.useMemo(() => {
            let e, t, n, r;
            return (
                (e = []),
                (t = new Map()),
                (n = new Map()),
                (r = new Map()),
                !(function e(t, n) {
                    if ((n(t), (0, R.nW)(t))) for (let r of t.layout) e(r, n);
                })(c, (l) => {
                    if (!("getDismissibleBadges" in l)) return;
                    let s = l.getDismissibleBadges?.();
                    if (null == s) return;
                    let i = d.entry(l.key);
                    if (i?.parentSidebarItemKey == null) return;
                    let a = null;
                    if (null != i.parentCategoryKey) {
                        let e = d.get(i.parentCategoryKey);
                        e?.type === R.Z6.CATEGORY && (0, R.bJ)(e) && (a = i.parentCategoryKey);
                    }
                    let u = { sidebarItemKey: i.parentSidebarItemKey, categoryKey: a };
                    s.forEach((l) =>
                        (function (l, s) {
                            let { dismissibleContent: i } = l;
                            e.push(i), t.set(i, s), r.set(i, l);
                            let a = n.get(s.sidebarItemKey) ?? new Set();
                            if ((a.add(i), n.set(s.sidebarItemKey, a), null != s.categoryKey)) {
                                let e = n.get(s.categoryKey) ?? new Set();
                                e.add(i), n.set(s.categoryKey, e);
                            }
                        })(l, u),
                    );
                }),
                {
                    allDismissibleContents: e,
                    dismissibleContentToNodeKeys: t,
                    nodeKeyToDismissibleContents: n,
                    dismissibleContentToBadge: r,
                }
            );
        }, [c, d]),
        [m] = (0, et.kn)(h.allDismissibleContents);
    !(function (e) {
        let { visibleContent: t, dismissibleBadges: n, accessibleDirectory: r } = e,
            { dismissibleContentToNodeKeys: s, nodeKeyToDismissibleContents: i } = n,
            a = l.useRef(!1);
        l.useEffect(() => {
            if (((a.current = !1), null == t || !s.has(t))) return;
            let e = s.get(t);
            if (null == e) return;
            let n = () => {
                    a.current = !1;
                    let t = i.get(e.sidebarItemKey);
                    null != t &&
                        t.forEach((e) => {
                            (0, eA.Dr)(e, { dismissAction: eb.i.AUTO, forceTrack: !0 });
                        });
                },
                l = w.A.subscribe(
                    (e) => {
                        let { currentPanelKey: t } = e;
                        return t;
                    },
                    (t) => {
                        let l = null != t && null != r ? r.entry(t)?.parentSidebarItemKey : null;
                        null != l && (l === e.sidebarItemKey ? (a.current = !0) : a.current && n());
                    },
                    { equalityFn: (e, t) => e === t, fireImmediately: !0 },
                );
            return () => {
                l(), a.current && n();
            };
        }, [t, s, r, i]);
    })({ visibleContent: m, dismissibleBadges: h, accessibleDirectory: d });
    let [g, x] = l.useMemo(() => {
            let e = [],
                n = [];
            return (
                t.layout.forEach((t) => {
                    t.hoisted ? e.push(t) : n.push(t);
                }),
                [e, n]
            );
        }, [t.layout]),
        y = (0, M.NC)(),
        f = (0, ee.A)("settings-sidebar", o),
        [j, p] = l.useState(!1),
        v = l.useCallback(() => {
            let e = o.current?.getScrollerNode();
            p(null != e && e.scrollTop > 12);
        }, []);
    return (0, r.jsx)(C.N, {
        theme: y,
        children: (e) =>
            (0, r.jsxs)("div", {
                className: A()(eS.pz, e, { [eS.Hw]: b.Fr, [eS.n7]: u }),
                children: [
                    (0, r.jsxs)("div", {
                        className: A()(eS.gM, { [eS.to]: j }),
                        children: [
                            b.Fr &&
                                (0, r.jsx)("div", {
                                    className: eS.hg,
                                    children: (0, r.jsx)(S.K, {
                                        icon: I.d,
                                        onClick: n,
                                        variant: "icon-only",
                                        size: "sm",
                                        "aria-label": z.intl.string(z.t.cpT0Cq),
                                    }),
                                }),
                            (0, r.jsx)("div", {
                                children: g.map((e) =>
                                    (0, r.jsx)(
                                        eC,
                                        { section: e, visibleContent: m, dismissibleBadges: h, hoisted: !0 },
                                        e.key,
                                    ),
                                ),
                            }),
                            null != a && (0, r.jsx)(a, {}),
                            null != i && 0 === x.length && (0, r.jsx)(i, {}),
                        ],
                    }),
                    (0, r.jsx)(Y.hD, {
                        navigator: f,
                        children: (0, r.jsx)(Y.PR, {
                            children: (e) => {
                                let { ref: t, ...n } = e;
                                return (0, r.jsxs)(Z.Ch, {
                                    ref: (e) => {
                                        (o.current = e),
                                            er.A.setSidebarScrollerRef(e),
                                            (t.current = e?.getScrollerNode() ?? null),
                                            v();
                                    },
                                    className: eS.Mt,
                                    fade: !0,
                                    onScroll: v,
                                    ...n,
                                    children: [
                                        (0, r.jsx)("nav", {
                                            className: eS.C$,
                                            children: x.map((e) =>
                                                (0, r.jsx)(
                                                    eC,
                                                    { section: e, visibleContent: m, dismissibleBadges: h },
                                                    e.key,
                                                ),
                                            ),
                                        }),
                                        null != s && (0, r.jsx)(s, {}),
                                    ],
                                });
                            },
                        }),
                    }),
                ],
            }),
    });
}
function eC(e) {
    let { section: t, visibleContent: n, dismissibleBadges: l, hoisted: s = !1 } = e,
        i = t.useTitle?.();
    return (0, r.jsxs)("ul", {
        className: eS.uW,
        "aria-label": i,
        children: [
            null != i &&
                (0, r.jsx)("div", {
                    className: eS.a9,
                    children: (0, r.jsx)(J.D, {
                        className: eS.Pf,
                        variant: "heading-sm/medium",
                        color: "text-muted",
                        children: i,
                    }),
                }),
            t.layout.map((e) =>
                (0, r.jsx)(ev, { node: e, visibleContent: n, dismissibleBadges: l, hoisted: s }, e.key),
            ),
        ],
    });
}
var eE = n(823092),
    ek = n(581298),
    eI = n(910772);
function eM(e) {
    let {
            partialRoot: t,
            target: n,
            defaultTarget: s,
            onClose: i,
            sidebarFooter: a,
            searchBar: u,
            onViewChange: o,
            emptyState: c,
            searchQuery: d,
            clearSearchQuery: h,
        } = e,
        m = w.A.useField("currentPanelKey"),
        { node: g, visibleDirectory: x, accessibleDirectory: y } = (0, ek.Ay)(t, d ?? ""),
        f = null != n && x.entry(n)?.parentPanelKey != null ? n : s,
        j = l.useMemo(() => {
            let e = y.entry(m ?? f)?.parentPanelKey;
            if (null != e) return y.getPanelOrThrow(e);
        }, [m, y, f]),
        { navigateWithValidation: v } = (0, eE.L_)(),
        A = l.useMemo(() => () => v(i), [v, i]);
    l.useEffect(() => {
        T.A.init({
            accessibleDirectory: y,
            onViewChange: o,
            navigateWithValidation: (e, t) => {
                null == x.entry(e) && h?.(), v(t);
            },
            closeWithValidation: A,
        });
    }, [y, v, o, h, x, A]);
    let [b, S] = l.useState(!0);
    (0, p.Ay)(
        () => (
            T.A.navigate(f, { animatePanelScroll: !1, animateSidebarScroll: !1, showNavigationMobile: null == n }),
            S(!1),
            () => {
                T.A.reset(), er.A.reset(), w.A.resetState();
            }
        ),
    );
    let N = l.useMemo(() => ({ visibleDirectory: x, accessibleDirectory: y }), [x, y]),
        C = null != m ? x.get(m) : void 0;
    return (0, r.jsx)(en.x.Provider, {
        value: N,
        children: (0, r.jsxs)("div", {
            className: eI.k,
            children: [
                (0, r.jsx)(eN, { root: g, onClose: A, footer: a, emptyState: c, searchBar: u }),
                (0, r.jsx)(Q, { onClose: A, setting: b ? void 0 : (C ?? j) }),
            ],
        }),
    });
}
function eR(e) {
    return (0, r.jsx)(eE.ms, { children: (0, r.jsx)(eM, { ...e }) });
}
var ew = n(652215);
function eT(e) {
    let {
            partialRoot: t,
            target: n,
            defaultTarget: s,
            onViewChange: i,
            sidebarFooter: a,
            emptyState: u,
            searchQuery: o,
            clearSearchQuery: c,
            searchBar: d,
            ...h
        } = e,
        [p, v] = l.useState(!1),
        [A, b] = l.useState(1.4),
        S = l.useRef(null),
        N = (0, m.bG)([y.A], () => y.A.useReducedMotion),
        C = (0, m.bG)([f.A], () => f.A.isFocused());
    return (
        l.useEffect(() => {
            let e = (e) => {
                let { intensity: t, duration: n } = e;
                !N &&
                    C &&
                    (v(!0), b(t ?? 1.4), clearTimeout(S.current), (S.current = setTimeout(() => v(!1), n ?? 1e3)));
            };
            return (
                j._.subscribe(ew.jej.SHAKE_SETTINGS_MODAL, e),
                () => {
                    j._.unsubscribe(ew.jej.SHAKE_SETTINGS_MODAL, e), clearTimeout(S.current);
                }
            );
        }, [N, C]),
        (0, r.jsx)(x.b, {
            isShaking: p,
            intensity: A,
            children: (0, r.jsx)(g.N, {
                ...h,
                children: (0, r.jsx)(eR, {
                    onClose: h.onClose,
                    partialRoot: t,
                    target: n,
                    defaultTarget: s,
                    onViewChange: i,
                    emptyState: u,
                    sidebarFooter: a,
                    searchQuery: o,
                    clearSearchQuery: c,
                    searchBar: d,
                }),
            }),
        })
    );
}
var eK = n(495544),
    e_ = n(287809),
    eO = n(152056),
    eB = n(780964),
    eL = n(755322),
    eP = n(980707),
    eD = n(477782),
    eF = n(349288),
    eG = n(922016),
    eX = n(975807),
    ez = n(212031),
    eU = n(975571),
    eq = n(481613),
    eW = n.n(eq),
    eV = n(140735),
    e$ = n(77729),
    eH = n(521502),
    eQ = n(915089),
    eY = n(206845),
    eZ = n(19575),
    eJ = n(763224);
function e0() {
    let e = (0, eQ.GV)(),
        t = window.GLOBAL_ENV.RELEASE_CHANNEL,
        n = "545172",
        l = "b4a90ed6867fe13e371763eef84571652439d1a3".substring(0, 7),
        s = e$.A?.app.getVersion(),
        i = e$.A?.app.getBuildNumber(),
        u = e$.A?.app.getAppArch(),
        o = eH.A.getCurrentBuildOverride().overrides?.discord_web,
        c = (function () {
            let e = eW()?.os?.toString();
            if (null == e || null == e$.A) return null;
            let t = e$.A.os.release,
                [n, r, l] = eZ.Ay.parsedOSRelease;
            return (
                e.includes("Windows 10") && void 0 !== l && l >= 22e3 && (e = e.replace("Windows 10", "Windows 11")),
                e.includes("OS X 10.15.7") && void 0 !== n && n >= 20 && (e = `macOS ${n >= 25 ? n + 1 : n - 9}`),
                `${e} (${t})`
            );
        })(),
        d = [t, n, `(${l})`];
    return (
        null != s && (d.push(`Host ${s}`), null != u && d.push(u.toLowerCase()), null != i && d.push(`(${i})`)),
        d.push(`Build Override: ${null != o ? o.id : "N/A"}`),
        null != c && d.push(c),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(eY.A, {
                    copyValue: d.join(" "),
                    text: z.intl.string(z.t["9Al4Qd"]),
                    "aria-label": !1,
                    dataMeticulousIgnore: "true",
                    children: (c) =>
                        (0, r.jsxs)(_.D, {
                            ...c,
                            "aria-describedby": e,
                            className: A()(eJ.vk, eJ.oE),
                            children: [
                                (0, r.jsxs)("div", {
                                    className: eJ.Cr,
                                    "data-mtctest-ignore": "true",
                                    children: [
                                        (0, r.jsxs)(a.E, {
                                            tag: "span",
                                            variant: "text-xxs/normal",
                                            color: "text-muted",
                                            children: [
                                                t,
                                                " ",
                                                n,
                                                " ",
                                                (0, r.jsxs)("span", { className: eJ.Pc, children: ["(", l, ")"] }),
                                            ],
                                        }),
                                        null != s &&
                                            (0, r.jsxs)(a.E, {
                                                tag: "span",
                                                variant: "text-xxs/normal",
                                                color: "text-muted",
                                                children: [
                                                    s,
                                                    null != u &&
                                                        (0, r.jsxs)("span", {
                                                            className: eJ.GI,
                                                            children: [" ", u.toLowerCase()],
                                                        }),
                                                    null != i && (0, r.jsxs)("span", { children: [" (", i, ")"] }),
                                                ],
                                            }),
                                    ],
                                }),
                                null != o &&
                                    (0, r.jsx)(a.E, {
                                        tag: "span",
                                        variant: "text-xxs/normal",
                                        color: "text-muted",
                                        children: (0, r.jsxs)("span", {
                                            className: eJ.Pc,
                                            children: ["Build Override: ", o.id],
                                        }),
                                    }),
                            ],
                        }),
                }),
                (0, r.jsx)(eV.A, { id: e, children: z.intl.string(z.t["9Al4Qd"]) }),
            ],
        })
    );
}
var e1 = n(779801);
function e7(e) {
    let { onClose: t } = e;
    return (0, r.jsx)(eP.W, {
        "data-menu-migrated-auto": !0,
        navId: "settings-footer-more-menu",
        onClose: t,
        onSelect: () => {},
        "aria-label": "More options",
        children: (0, r.jsxs)(eD.rX, {
            children: [
                (0, r.jsx)(eD.Dr, { id: "changelog", label: z.intl.string(z.t.LRmNAl), action: () => (0, ez.j)(!0) }),
                (0, r.jsx)(eD.Dr, {
                    id: "acknowledgements",
                    label: z.intl.string(z.t["0nUKy3"]),
                    action: () => (0, eX.A)(ew.X7G.ACKNOWLEDGEMENTS),
                }),
                (0, r.jsx)(eD.Dr, {
                    id: "support",
                    label: z.intl.string(z.t["Yl/Riu"]),
                    action: () => (0, eX.A)(eU.C),
                }),
            ],
        }),
    });
}
function e2() {
    let e = l.useRef(null);
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsx)(e0, {}),
            (0, r.jsxs)("div", {
                className: e1.yJ,
                children: [
                    (0, r.jsx)(eF.Anchor, {
                        href: ew.X7G.PRIVACY,
                        children: (0, r.jsx)(a.E, {
                            tag: "span",
                            variant: "text-xxs/normal",
                            color: "currentColor",
                            children: z.intl.string(z.t["Knf/f/"]),
                        }),
                    }),
                    (0, r.jsx)("span", { className: e1.xE, "aria-hidden": "true", children: "\u2022" }),
                    (0, r.jsx)(eF.Anchor, {
                        href: ew.X7G.TERMS,
                        children: (0, r.jsx)(a.E, {
                            tag: "span",
                            variant: "text-xxs/normal",
                            color: "currentColor",
                            children: z.intl.string(z.t.uFSTGq),
                        }),
                    }),
                    (0, r.jsx)("span", { className: e1.xE, "aria-hidden": "true", children: "\u2022" }),
                    (0, r.jsx)(eG.Y, {
                        targetElementRef: e,
                        position: "top",
                        align: "center",
                        spacing: 0,
                        animation: eG.Y.Animation.NONE,
                        renderPopout: (e) => {
                            let { closePopout: t } = e;
                            return (0, r.jsx)(e7, { onClose: t });
                        },
                        children: (t, n) =>
                            (0, r.jsx)(eF.Anchor, {
                                ...t,
                                ref: e,
                                useDefaultUnderlineStyles: !1,
                                className: A()(e1.Mj, { [e1.vu]: n.isShown }),
                                children: (0, r.jsx)(a.E, {
                                    tag: "span",
                                    variant: "text-xxs/normal",
                                    color: "currentColor",
                                    children: z.intl.string(z.t["UKOtz+"]),
                                }),
                            }),
                    }),
                ],
            }),
        ],
    });
}
var e9 = n(402651),
    e5 = n(669067),
    e3 = n(830543),
    e8 = n(466745);
let e6 = new Set([eB.X.PROFILE_PANEL, eB.X.SUBSCRIPTIONS_PANEL, eB.X.FAMILY_CENTER_PANEL, eB.X.POGGERMODE_PANEL]),
    e4 = new Map([
        [eB.X.CONNECTIONS_PANEL, s.ImpressionNames.USER_SETTINGS_CONNECTIONS],
        [eB.X.SESSIONS_PANEL, s.ImpressionNames.USER_SETTINGS_SESSIONS],
    ]);
function te(e) {
    let { target: t, ...n } = e,
        i = eO.A.useField("query"),
        a = l.useCallback(() => {
            eO.A.setState({ query: "" }), h.A.terminate();
        }, []),
        [m, g] = l.useState(!1);
    return (l.useLayoutEffect(() => {
        let e = () => {
            null == e_.default.getCurrentUser() && (g(!0), (0, e3.default)());
        };
        return (
            eK.default.addChangeListener(e),
            () => {
                eK.default.removeChangeListener(e), e9.A.resetState(), d.A.resetState(), u.A.close(), (0, c.ZQ)();
            }
        );
    }, []),
    m)
        ? null
        : (0, r.jsx)(eT, {
              partialRoot: eL.D,
              searchBar: tt,
              emptyState: tn,
              sidebarFooter: e2,
              onViewChange: (e) => {
                  e6.has(e) || (0, e5._)(e);
                  let t = e4.get(e);
                  null != t &&
                      (0, o.x)({
                          type: s.ImpressionTypes.PANE,
                          name: t,
                          properties: { source: e9.A.getField("source") },
                      }),
                      e9.A.setState({ source: void 0 });
              },
              target: t,
              defaultTarget: eB.X.ACCOUNT_PANEL,
              searchQuery: i,
              clearSearchQuery: a,
              ...n,
          });
}
function tt() {
    let e = eO.A.useField("query"),
        t = l.useCallback((e) => {
            eO.A.setState({ query: e }), h.A.maybeTrackQueryEntered();
        }, []),
        n = l.useCallback(() => {
            h.A.isSessionActive() || h.A.initialize();
        }, []),
        s = l.useCallback(() => {
            0 === eO.A.getField("query").trim().length && h.A.terminate();
        }, []),
        a = l.useCallback(() => {
            eO.A.setState({ query: "" }), h.A.terminate();
        }, []);
    return (
        l.useEffect(
            () => () => {
                eO.A.resetState(), h.A.terminate();
            },
            [],
        ),
        (0, r.jsx)("div", {
            className: e8.P,
            children: (0, r.jsx)(i.I, { size: "md", query: e, onFocus: n, onBlur: s, onChange: t, onClear: a }),
        })
    );
}
function tn() {
    return (0, r.jsxs)("div", {
        className: e8.t,
        children: [
            (0, r.jsx)(a.E, { variant: "text-sm/semibold", color: "text-strong", children: z.intl.string(z.t.zihbmv) }),
            (0, r.jsx)(a.E, { variant: "text-sm/normal", color: "text-subtle", children: z.intl.string(z.t.XclvsB) }),
        ],
    });
}
