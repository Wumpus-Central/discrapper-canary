n.d(t, { default: () => e6 });
var l = n(627968),
    r = n(64700),
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
    v = n(140735),
    A = n(534514),
    p = n(707554),
    b = n(964486);
n(667532), n(134528), n(947204);
var S = n(503698),
    N = n.n(S),
    C = n(607399),
    E = n(408278),
    k = n(477155),
    M = n(43990),
    I = n(331322),
    w = n(668953),
    R = n(972213),
    T = n(97469),
    K = n(963935),
    B = n(894858),
    D = n(272053),
    P = n(377980),
    _ = n(939249),
    F = n(215566),
    L = n(375708),
    O = n(508891);
function G(e) {
    let { node: t, isLast: n } = e,
        r = t.useTitle(),
        s = t.usePersistentBadge?.(),
        i = (0, l.jsxs)(I.B, {
            direction: "horizontal",
            align: "center",
            gap: "xs",
            className: O.Ze,
            children: [
                (0, l.jsx)(a.E, {
                    variant: n ? "text-md/medium" : "text-md/normal",
                    color: n ? "text-default" : void 0,
                    className: O.b,
                    children: r,
                }),
                n && null != s && (0, l.jsx)(F.A, { badge: s }),
                !n &&
                    (0, l.jsx)(a.E, {
                        variant: "text-md/normal",
                        color: "interactive-text-default",
                        "aria-hidden": !0,
                        children: "/",
                    }),
            ],
        });
    return (0, l.jsx)("li", {
        "aria-current": n ? "page" : void 0,
        className: O.QF,
        children: n
            ? i
            : (0, l.jsx)(_.D, {
                  onClick: () => {
                      D.A.navigate(t.key);
                  },
                  className: O.vk,
                  children: i,
              }),
    });
}
function X(e) {
    let { path: t } = e;
    return (0, l.jsx)("nav", {
        "aria-label": L.intl.string(L.t["bM+M/m"]),
        className: O.m7,
        children: (0, l.jsx)(I.B, {
            direction: "horizontal",
            role: "list",
            className: O.jD,
            children: t.map((e, n) => (0, l.jsx)(G, { node: e, isLast: n === t.length - 1 }, e.key)),
        }),
    });
}
var q = n(441562);
function z(e) {
    let { icon: t, label: n, onClick: r } = e;
    return (0, l.jsx)(E.K, { onClick: r, icon: t, size: "sm", variant: "icon-only", "aria-label": n });
}
function V(e) {
    let { setting: t, onClose: n } = e,
        r = (0, T.NC)(),
        s =
            null != t
                ? (function (e) {
                      let t = [e];
                      for (let n = e.parent; null != n && n.type !== K.Z6.SIDEBAR_ITEM; n = n.parent)
                          n.type === K.Z6.PANEL && t.unshift(n);
                      return t;
                  })(t)
                : [],
        i = s.at(-2),
        a = C.Fr && s.length <= 1,
        u = s.length > 1 && null != i;
    return (0, l.jsx)(M.N, {
        theme: r,
        children: (e) =>
            (0, l.jsxs)("div", {
                className: N()(q.$Q, e, { [q.HW]: a || u }),
                children: [
                    (0, l.jsxs)(I.B, {
                        direction: "horizontal",
                        align: "center",
                        className: q.y9,
                        children: [
                            a &&
                                (0, l.jsx)(z, {
                                    icon: w.f,
                                    onClick: () => B.A.setState({ showNavigationMobile: !0 }),
                                    label: L.intl.string(L.t["13/7kX"]),
                                }),
                            u &&
                                (0, l.jsx)(z, {
                                    icon: k.r,
                                    onClick: () => D.A.navigate(i.key),
                                    label: L.intl.string(L.t["13/7kX"]),
                                }),
                            null != t && (0, l.jsx)(X, { path: s }),
                        ],
                    }),
                    (0, l.jsx)(z, { icon: R.d, onClick: n, label: L.intl.string(L.t.cpT0Cq) }),
                ],
            }),
    });
}
let U = r.memo(function (e) {
    let { onClose: t, setting: n } = e,
        r = B.A.useField("showNavigationMobile");
    return (0, l.jsxs)("div", {
        className: N()(q.Qs, { [q.Hw]: C.Fr, [q.n7]: r }),
        children: [
            (0, l.jsx)(V, { setting: n, onClose: t }),
            (0, l.jsx)("div", { className: q.yp, children: null != n && (0, l.jsx)(P.A, { node: n }) }),
        ],
    });
});
n(321073);
var W = n(837381),
    $ = n(741918),
    H = n(689175),
    Q = n(928039),
    Y = n(131607),
    Z = n(199966),
    J = n(397274);
function ee(e, t, n) {
    let { nodeKeyToDismissibleContents: l, dismissibleContentToBadge: r } = n,
        s = l.get(e);
    return null != t && null != s && s.has(t) ? r.get(t) : null;
}
var et = n(661531),
    en = n(508770),
    el = n(933297);
let er = function (e) {
    let { badge: t } = e;
    switch (t.badgeType) {
        case el.Xi.NEW:
            return (0, l.jsx)(en.E, { type: "new", variant: "brand" });
        case el.Xi.STRONGLY_DISCOURAGED_CUSTOM:
            let { StronglyDiscouragedCustomComponent: n } = t;
            return (0, l.jsx)(n, {});
    }
};
var es = n(284009),
    ei = n.n(es),
    ea = n(308186),
    eu = n(935399),
    eo = n(319354),
    ec = n(717421),
    ed = n(885386),
    eh = n(429566);
function em(e) {
    let { category: t, onClick: n, active: s, dismissibleBadge: i } = e,
        { useTitle: a, useSubnavLabel: u, key: o, usePersistentBadge: c } = t,
        d = c?.(),
        h = r.useMemo(
            () =>
                null != i
                    ? s
                        ? null
                        : (0, l.jsx)(er, { badge: i })
                    : null != d
                      ? (0, l.jsx)(F.A, { badge: d })
                      : void 0,
            [s, i, d],
        ),
        m = a?.(),
        g = u?.() ?? m;
    return (
        ei()(null != g, "[SettingsSubnavigationCategory] Category must have a title"),
        (0, l.jsx)(W.tG, {
            id: o,
            children: (e) =>
                (0, l.jsx)("div", {
                    role: "listitem",
                    children: (0, l.jsxs)(
                        _.D,
                        {
                            onClick: n,
                            className: N()(eh.AS, { [eh.vu]: s }),
                            ...e,
                            role: "link",
                            "aria-current": s ? "location" : void 0,
                            children: [g, h],
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
        s,
        i,
        { active: a, isTopLevelPanelVisible: u, visibleCategories: o, visibleContent: c, dismissibleBadges: d } = e,
        h = B.A.useField("currentCategoryKey"),
        [m, g] = r.useState(a);
    r.useLayoutEffect(() => {
        a && g(!0);
    }, [a]);
    let x = r.useMemo(() => o.findIndex((e) => e.key === h), [o, h]);
    r.useEffect(() => {
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
    let y = r.useRef(null),
        [f, j] = r.useState(a ? "auto" : "0");
    return (
        (t = r.useRef(null)),
        (n = r.useRef(new Set())),
        (s = r.useRef(!1)),
        (i = r.useMemo(() => {
            let e = new Set();
            return o.forEach((t) => e.add(t.key)), e;
        }, [o])),
        r.useEffect(() => {
            if (!u) return;
            let e = J.A.getPanelScrollerNode();
            if (null == e) return;
            let l = e.querySelectorAll("[data-settings-category-key]"),
                r = e.querySelector("[data-panel-bottom]"),
                a = [];
            Array.from(l).forEach((e) => {
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
                                let { isIntersecting: l, target: i } = t;
                                if (i === r) {
                                    let t = e.scrollHeight > e.clientHeight;
                                    s.current = l && t;
                                    return;
                                }
                                let a = o.get(i);
                                null != a && (l ? n.current.add(a) : n.current.delete(a));
                            }),
                            !J.A.getIsSidebarCategoryAutoSelectEnabled())
                        )
                            return;
                        let l = [];
                        if (
                            (c.forEach((e) => {
                                n.current.has(e) && l.push(e);
                            }),
                            0 === l.length)
                        )
                            return;
                        let i = l.at(s.current ? -1 : 0);
                        B.A.getField("currentCategoryKey") !== i && B.A.setState({ currentCategoryKey: i });
                    },
                    { root: e, rootMargin: "0px 100000px 0px 100000px", threshold: 1 },
                )),
                a.forEach((e) => t.current?.observe(e)),
                null != r && t.current?.observe(r),
                () => {
                    a.forEach((e) => t.current?.unobserve(e)),
                        null != r && t.current?.unobserve(r),
                        t.current?.disconnect(),
                        (t.current = null);
                }
            );
        }, [i, u]),
        (0, l.jsx)("div", {
            className: eh.lK,
            style: { height: f, opacity: +!!a },
            ref: y,
            children:
                m &&
                (0, l.jsx)(ex, {
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
                                        J.A.scrollSidebarNodeIntoView(e, { animate: !0, block: "nearest" });
                                })
                                .catch(() => {}));
                    },
                }),
        })
    );
}
function ex(e) {
    let { index: t, activeKey: n, categories: s, visibleContent: i, dismissibleBadges: a, onMount: u } = e,
        {
            thumbRef: o,
            trackRef: c,
            thumbAnchorRef: d,
            springs: h,
        } = (function (e) {
            let t = ed.Xi.useSetting(),
                n = r.useRef(null),
                l = r.useRef(null),
                s = r.useRef(null),
                i = r.useRef(!0),
                a = r.useRef(t),
                u = r.useRef(e),
                [o, c] = (0, ec.z)(() => ({ y: 0, height: 0, config: { mass: 0.1, friction: 20, tension: 300 } }));
            return (
                r.useLayoutEffect(() => {
                    let r = a.current !== t,
                        d = () => {
                            if (null == n.current || null == l.current || null == s.current) return;
                            let [d, h] = [n.current.getBoundingClientRect(), s.current.getBoundingClientRect()],
                                m = d.width / 2,
                                g = (h.y - d.y) / m,
                                x = h.height / m;
                            i.current || r || y.Ay.useReducedMotion || -1 === u.current
                                ? (o.y.set(g), o.height.set(x))
                                : c({ y: g, height: x }),
                                (i.current = !1),
                                (a.current = t),
                                (u.current = e);
                        },
                        h = null;
                    return (
                        r
                            ? (h = requestAnimationFrame(() => {
                                  (h = null), d();
                              }))
                            : d(),
                        () => {
                            null != h && cancelAnimationFrame(h);
                        }
                    );
                }, [e, c, o.y, o.height, t]),
                { thumbRef: l, trackRef: n, thumbAnchorRef: s, springs: o }
            );
        })(t);
    return (
        (0, eu.Ay)(u),
        (0, l.jsxs)("div", {
            className: eh.o8,
            role: "list",
            style: {
                "--custom-nav-count": s.length,
                "--custom-nav-index": Math.max(t, 0),
                "--custom-nav-width": "2px",
                "--custom-icon-size": `${eo.E[ef]}px`,
            },
            children: [
                (0, l.jsx)("div", {
                    className: eh.u4,
                    "aria-hidden": "true",
                    ref: c,
                    children: (0, l.jsx)(ea.animated.div, {
                        className: N()(eh.FF, { [eh.R]: null == n }),
                        style: h,
                        ref: o,
                    }),
                }),
                (0, l.jsx)("div", { className: eh.gu, "aria-hidden": "true", ref: d }),
                s.map((e) => {
                    let t = ee(e.key, i, a);
                    return (0, l.jsx)(
                        em,
                        {
                            onClick: () => {
                                var t;
                                return (t = e.key), void D.A.navigate(t, { showNavigationMobile: !1 });
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
var ey = n(585635);
let ef = "refresh_sm";
function ej(e) {
    let { onClick: t, active: n, node: s, dismissibleBadge: i, panelKey: u, listItemProps: o, children: c } = e,
        {
            icon: d,
            StronglyDiscouragedCustomComponent: h,
            usePersistentBadge: m,
            useTitle: g,
            variant: x = "default",
        } = s,
        y = g?.(),
        f = (function (e) {
            switch (e) {
                case "default":
                    return "currentColor";
                case "destructive":
                    return "text-feedback-critical";
            }
        })(x),
        j = (function (e) {
            switch (e) {
                case "default":
                    return "currentColor";
                case "destructive":
                    return et.A.colors.ICON_FEEDBACK_CRITICAL;
            }
        })(x),
        v = m?.(n),
        A = r.useMemo(
            () =>
                null != i
                    ? n
                        ? null
                        : (0, l.jsx)(er, { badge: i })
                    : null != v
                      ? (0, l.jsx)(F.A, { badge: v })
                      : void 0,
            [n, i, v],
        );
    return (0, l.jsxs)("li", {
        "data-settings-sidebar-item": u,
        className: ey.DB,
        children: [
            (0, l.jsxs)(_.D, {
                ...o,
                role: "link",
                "aria-current": n ? "page" : void 0,
                className: N()(ey.AS, { [ey.vu]: n, [ey.RD]: "destructive" === x }),
                onClick: t,
                children: [
                    null != h
                        ? (0, l.jsx)(h, {})
                        : (0, l.jsxs)("div", {
                              className: ey.Ly,
                              children: [
                                  (0, l.jsx)(d, { color: j, size: ef, className: ey.Kk }),
                                  (0, l.jsx)(a.E, { variant: "text-md/medium", color: f, children: y }),
                              ],
                          }),
                    A,
                ],
            }),
            c,
        ],
    });
}
function ev(e) {
    let { node: t, visibleContent: n, dismissibleBadges: s, hoisted: i = !1 } = e,
        a = r.useMemo(() => t.layout[0], [t]),
        u = B.A.useField("currentPanelKey"),
        { accessibleDirectory: o } = (0, Z._)(),
        c = a?.key === u,
        d = r.useMemo(() => {
            if (null == u) return !1;
            let e = o.entry(u);
            return e?.parentSidebarItemKey === t.key;
        }, [u, t.key, o]),
        h = r.useMemo(() => {
            if (null == a || !(0, K.Iu)(a.layout)) return null;
            let e = a.layout.filter(K.bJ);
            return e.length > 1 ? e : null;
        }, [a]),
        m =
            null != a
                ? () => {
                      let e = u === a.key && null != h ? h[0].key : a.key;
                      D.A.navigate(e, { animateSidebarScroll: !0, showNavigationMobile: !1 });
                  }
                : t.onClick,
        g = null != u,
        x = r.useMemo(
            () =>
                null != h && g
                    ? (0, l.jsx)(eg, {
                          active: d,
                          isTopLevelPanelVisible: c,
                          visibleCategories: h,
                          visibleContent: n,
                          dismissibleBadges: s,
                      })
                    : null,
            [h, g, d, c, n, s],
        ),
        y = r.useMemo(() => ee(t.key, n, s), [t.key, n, s]);
    return i
        ? (0, l.jsx)(ej, {
              panelKey: a?.key,
              onClick: m,
              active: d,
              "aria-expanded": null != h ? d : void 0,
              node: t,
              dismissibleBadge: y,
              children: x,
          })
        : (0, l.jsx)(W.tG, {
              id: a?.key ?? t.key,
              children: (e) =>
                  (0, l.jsx)(ej, {
                      panelKey: a?.key,
                      onClick: m,
                      active: d,
                      node: t,
                      dismissibleBadge: y,
                      listItemProps: e,
                      children: x,
                  }),
          });
}
var eA = n(826673),
    ep = n(49999),
    eb = n(443263);
function eS(e) {
    let { currentPanelKey: t, root: n, onClose: s, footer: i, emptyState: a, searchBar: u } = e,
        o = B.A.useField("showNavigationMobile"),
        c = r.useRef(null),
        [d] = r.useState(n),
        { accessibleDirectory: h } = (0, Z._)(),
        m = r.useMemo(() => {
            let e, t, n, l;
            return (
                (e = []),
                (t = new Map()),
                (n = new Map()),
                (l = new Map()),
                !(function e(t, n) {
                    if ((n(t), (0, K.nW)(t))) for (let l of t.layout) e(l, n);
                })(d, (r) => {
                    if (!("getDismissibleBadges" in r)) return;
                    let s = r.getDismissibleBadges?.();
                    if (null == s) return;
                    let i = h.entry(r.key);
                    if (i?.parentSidebarItemKey == null) return;
                    let a = null;
                    if (null != i.parentCategoryKey) {
                        let e = h.get(i.parentCategoryKey);
                        e?.type === K.Z6.CATEGORY && (0, K.bJ)(e) && (a = i.parentCategoryKey);
                    }
                    let u = { sidebarItemKey: i.parentSidebarItemKey, categoryKey: a };
                    s.forEach((r) =>
                        (function (r, s) {
                            let { dismissibleContent: i } = r;
                            e.push(i), t.set(i, s), l.set(i, r);
                            let a = n.get(s.sidebarItemKey) ?? new Set();
                            if ((a.add(i), n.set(s.sidebarItemKey, a), null != s.categoryKey)) {
                                let e = n.get(s.categoryKey) ?? new Set();
                                e.add(i), n.set(s.categoryKey, e);
                            }
                        })(r, u),
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
        [g] = (0, Y.kn)(m.allDismissibleContents);
    !(function (e) {
        let { visibleContent: t, dismissibleBadges: n, accessibleDirectory: l } = e,
            { dismissibleContentToNodeKeys: s, nodeKeyToDismissibleContents: i } = n,
            a = r.useRef(!1);
        r.useEffect(() => {
            if (((a.current = !1), null == t || !s.has(t))) return;
            let e = s.get(t);
            if (null == e) return;
            let n = () => {
                    a.current = !1;
                    let t = i.get(e.sidebarItemKey);
                    null != t &&
                        t.forEach((e) => {
                            (0, eA.Dr)(e, { dismissAction: ep.i.AUTO, forceTrack: !0 });
                        });
                },
                r = B.A.subscribe(
                    (e) => {
                        let { currentPanelKey: t } = e;
                        return t;
                    },
                    (t) => {
                        let r = null != t && null != l ? l.entry(t)?.parentSidebarItemKey : null;
                        null != r && (r === e.sidebarItemKey ? (a.current = !0) : a.current && n());
                    },
                    { equalityFn: (e, t) => e === t, fireImmediately: !0 },
                );
            return () => {
                r(), a.current && n();
            };
        }, [t, s, l, i]);
    })({ visibleContent: g, dismissibleBadges: m, accessibleDirectory: h });
    let [x, y] = r.useMemo(() => {
            let e = [],
                t = [];
            return (
                n.layout.forEach((n) => {
                    n.hoisted ? e.push(n) : t.push(n);
                }),
                [e, t]
            );
        }, [n.layout]),
        f = (0, T.NC)(),
        j = (0, Q.A)("settings-sidebar", c, { orientation: $.Gl.VERTICAL, defaultFocused: t }),
        [b, S] = r.useState(!1),
        k = r.useCallback(() => {
            let e = c.current?.getScrollerNode();
            S(null != e && e.scrollTop > 12);
        }, []),
        I = r.useId();
    return (0, l.jsx)(M.N, {
        theme: f,
        children: (e) =>
            (0, l.jsxs)("aside", {
                "aria-labelledby": I,
                className: N()(eb.pz, e, { [eb.Hw]: C.Fr, [eb.n7]: o }),
                children: [
                    (0, l.jsx)(v.A, {
                        children: (0, l.jsx)(A.D, {
                            variant: "text-sm/bold",
                            id: I,
                            children: L.intl.string(L.t["ZU3/B4"]),
                        }),
                    }),
                    (0, l.jsxs)(p.F, {
                        children: [
                            (0, l.jsxs)("div", {
                                className: N()(eb.gM, { [eb.to]: b }),
                                children: [
                                    C.Fr &&
                                        (0, l.jsx)("div", {
                                            className: eb.hg,
                                            children: (0, l.jsx)(E.K, {
                                                icon: R.d,
                                                onClick: s,
                                                variant: "icon-only",
                                                size: "sm",
                                                "aria-label": L.intl.string(L.t.cpT0Cq),
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
                                    null != u && (0, l.jsx)(u, {}),
                                    null != a && 0 === y.length && (0, l.jsx)(a, {}),
                                ],
                            }),
                            (0, l.jsx)("nav", {
                                className: eb.C$,
                                "aria-label": L.intl.string(L.t.MqTGqz),
                                children: (0, l.jsx)(W.hD, {
                                    navigator: j,
                                    children: (0, l.jsx)(W.PR, {
                                        children: (e) => {
                                            let { ref: t, ...n } = e;
                                            return (0, l.jsxs)(H.Ch, {
                                                ref: (e) => {
                                                    (c.current = e), J.A.setSidebarScrollerRef(e), k();
                                                },
                                                className: eb.Mt,
                                                fade: !0,
                                                onScroll: k,
                                                children: [
                                                    (0, l.jsx)("ul", {
                                                        className: eb.jV,
                                                        ...n,
                                                        ref: t,
                                                        children: y.map((e) =>
                                                            (0, l.jsx)(
                                                                eC,
                                                                { section: e, visibleContent: g, dismissibleBadges: m },
                                                                e.key,
                                                            ),
                                                        ),
                                                    }),
                                                    null != i && (0, l.jsx)(i, {}),
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
        className: eb.uW,
        children: (0, l.jsx)("ul", {
            className: eb.C4,
            children: t.layout.map((e) =>
                (0, l.jsx)(ev, { node: e, visibleContent: n, dismissibleBadges: r, hoisted: !0 }, e.key),
            ),
        }),
    });
}
function eC(e) {
    let { section: t, visibleContent: n, dismissibleBadges: s } = e,
        i = t.useTitle?.() ?? L.intl.string(L.t["3D5yo/"]),
        a = r.useId();
    return (0, l.jsxs)("li", {
        className: eb.uW,
        "aria-labelledby": a,
        children: [
            t.hideTitle
                ? (0, l.jsx)(v.A, { children: (0, l.jsx)(A.D, { id: a, variant: "heading-sm/medium", children: i }) })
                : (0, l.jsx)("div", {
                      className: eb.a9,
                      children: (0, l.jsx)(A.D, {
                          id: a,
                          className: eb.Pf,
                          variant: "heading-sm/medium",
                          color: "text-muted",
                          children: i,
                      }),
                  }),
            (0, l.jsx)("ul", {
                className: eb.C4,
                children: t.layout.map((e) =>
                    (0, l.jsx)(ev, { node: e, visibleContent: n, dismissibleBadges: s }, e.key),
                ),
            }),
        ],
    });
}
var eE = n(823092),
    ek = n(581298),
    eM = n(910772);
function eI(e) {
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
        m = B.A.useField("currentPanelKey"),
        { node: g, visibleDirectory: x, accessibleDirectory: y } = (0, ek.Ay)(t, d ?? ""),
        f = null != n && x.entry(n)?.parentPanelKey != null ? n : s,
        j = r.useMemo(() => {
            let e = y.entry(m ?? f)?.parentPanelKey;
            if (null != e) return y.getPanelOrThrow(e);
        }, [m, y, f]),
        { navigateWithValidation: S } = (0, eE.L_)(),
        N = r.useMemo(() => () => S(i), [S, i]);
    r.useEffect(() => {
        D.A.init({
            accessibleDirectory: y,
            onViewChange: o,
            navigateWithValidation: (e, t) => {
                null == x.entry(e) && h?.(), S(t);
            },
            closeWithValidation: N,
        });
    }, [y, S, o, h, x, N]);
    let [C, E] = r.useState(!0);
    (0, b.Ay)(
        () => (
            D.A.navigate(f, { animatePanelScroll: !1, animateSidebarScroll: !1, showNavigationMobile: null == n }),
            E(!1),
            () => {
                D.A.reset(), J.A.reset(), B.A.resetState();
            }
        ),
    );
    let k = r.useMemo(() => ({ visibleDirectory: x, accessibleDirectory: y }), [x, y]),
        M = null != m ? x.get(m) : void 0,
        I = C ? void 0 : (M ?? j),
        w = I?.useTitle() ?? L.intl.string(L.t["3D5yo/"]);
    return (0, l.jsx)(Z.x.Provider, {
        value: k,
        children: (0, l.jsxs)("div", {
            className: eM.k,
            children: [
                (0, l.jsx)(v.A, { children: (0, l.jsx)(A.D, { variant: "text-sm/bold", children: w }) }),
                (0, l.jsxs)(p.F, {
                    children: [
                        (0, l.jsx)(eS, {
                            currentPanelKey: m,
                            root: g,
                            onClose: N,
                            footer: a,
                            emptyState: c,
                            searchBar: u,
                        }),
                        (0, l.jsx)(U, { onClose: N, setting: I }),
                    ],
                }),
            ],
        }),
    });
}
function ew(e) {
    return (0, l.jsx)(eE.ms, { children: (0, l.jsx)(eI, { ...e }) });
}
var eR = n(652215);
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
        [v, A] = r.useState(!1),
        [p, b] = r.useState(1.4),
        S = r.useRef(null),
        N = (0, m.bG)([y.Ay], () => y.Ay.useReducedMotion),
        C = (0, m.bG)([f.A], () => f.A.isFocused());
    return (
        r.useEffect(() => {
            let e = (e) => {
                let { intensity: t, duration: n } = e;
                !N &&
                    C &&
                    (A(!0), b(t ?? 1.4), clearTimeout(S.current), (S.current = setTimeout(() => A(!1), n ?? 1e3)));
            };
            return (
                j._.subscribe(eR.jej.SHAKE_SETTINGS_MODAL, e),
                () => {
                    j._.unsubscribe(eR.jej.SHAKE_SETTINGS_MODAL, e), clearTimeout(S.current);
                }
            );
        }, [N, C]),
        (0, l.jsx)(x.b, {
            isShaking: v,
            intensity: p,
            children: (0, l.jsx)(g.N, {
                ...h,
                children: (0, l.jsx)(ew, {
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
    eB = n(287809),
    eD = n(152056),
    eP = n(780964),
    e_ = n(456283),
    eF = n(980707),
    eL = n(477782),
    eO = n(349288),
    eG = n(922016),
    eX = n(975807),
    eq = n(212031),
    ez = n(975571),
    eV = n(481613),
    eU = n.n(eV),
    eW = n(77729),
    e$ = n(521502),
    eH = n(915089),
    eQ = n(206845),
    eY = n(19575),
    eZ = n(763224);
function eJ() {
    let e = (0, eH.GV)(),
        t = window.GLOBAL_ENV.RELEASE_CHANNEL,
        n = "567840",
        r = "23c07640a03bf370c62744ae351d37d080f30fdc".substring(0, 7),
        s = eW.A?.app.getVersion(),
        i = eW.A?.app.getBuildNumber(),
        u = eW.A?.app.getAppArch(),
        o = e$.A.getCurrentBuildOverride().overrides?.discord_web,
        c = (function () {
            let e = eU()?.os?.toString();
            if (null == e || null == eW.A) return null;
            let t = eW.A.os.release,
                [n, l, r] = eY.Ay.parsedOSRelease;
            return (
                e.includes("Windows 10") && void 0 !== r && r >= 22e3 && (e = e.replace("Windows 10", "Windows 11")),
                e.includes("OS X 10.15.7") && void 0 !== n && n >= 20 && (e = `macOS ${n >= 25 ? n + 1 : n - 9}`),
                `${e} (${t})`
            );
        })(),
        d = [t, n, `(${r})`];
    return (
        null != s && (d.push(`Host ${s}`), null != u && d.push(u.toLowerCase()), null != i && d.push(`(${i})`)),
        d.push(`Build Override: ${null != o ? o.id : "N/A"}`),
        null != c && d.push(c),
        (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(eQ.A, {
                    copyValue: d.join(" "),
                    text: L.intl.string(L.t["9Al4Qd"]),
                    "aria-label": !1,
                    dataMeticulousIgnore: "true",
                    children: (c) =>
                        (0, l.jsxs)(_.D, {
                            ...c,
                            "aria-describedby": e,
                            className: N()(eZ.vk, eZ.oE),
                            children: [
                                (0, l.jsxs)("div", {
                                    className: eZ.Cr,
                                    "data-mtctest-ignore": "true",
                                    children: [
                                        (0, l.jsxs)(a.E, {
                                            tag: "span",
                                            variant: "text-xxs/normal",
                                            color: "text-muted",
                                            children: [
                                                t,
                                                " ",
                                                n,
                                                " ",
                                                (0, l.jsxs)("span", { className: eZ.Pc, children: ["(", r, ")"] }),
                                            ],
                                        }),
                                        null != s &&
                                            (0, l.jsxs)(a.E, {
                                                tag: "span",
                                                variant: "text-xxs/normal",
                                                color: "text-muted",
                                                children: [
                                                    s,
                                                    null != u &&
                                                        (0, l.jsxs)("span", {
                                                            className: eZ.GI,
                                                            children: [" ", u.toLowerCase()],
                                                        }),
                                                    null != i && (0, l.jsxs)("span", { children: [" (", i, ")"] }),
                                                ],
                                            }),
                                    ],
                                }),
                                null != o &&
                                    (0, l.jsx)(a.E, {
                                        tag: "span",
                                        variant: "text-xxs/normal",
                                        color: "text-muted",
                                        children: (0, l.jsxs)("span", {
                                            className: eZ.Pc,
                                            children: ["Build Override: ", o.id],
                                        }),
                                    }),
                            ],
                        }),
                }),
                (0, l.jsx)(v.A, { id: e, children: L.intl.string(L.t["9Al4Qd"]) }),
            ],
        })
    );
}
var e0 = n(779801);
function e1(e) {
    let { onClose: t } = e;
    return (0, l.jsx)(eF.W, {
        "data-menu-migrated-auto": !0,
        navId: "settings-footer-more-menu",
        onClose: t,
        onSelect: () => {},
        "aria-label": "More options",
        children: (0, l.jsxs)(eL.rX, {
            children: [
                (0, l.jsx)(eL.Dr, { id: "changelog", label: L.intl.string(L.t.LRmNAl), action: () => (0, eq.j)(!0) }),
                (0, l.jsx)(eL.Dr, {
                    id: "acknowledgements",
                    label: L.intl.string(L.t["0nUKy3"]),
                    action: () => (0, eX.A)(eR.X7G.ACKNOWLEDGEMENTS),
                }),
                (0, l.jsx)(eL.Dr, {
                    id: "support",
                    label: L.intl.string(L.t["Yl/Riu"]),
                    action: () => (0, eX.A)(ez.C),
                }),
            ],
        }),
    });
}
function e7() {
    let e = r.useRef(null);
    return (0, l.jsxs)("div", {
        children: [
            (0, l.jsx)(eJ, {}),
            (0, l.jsxs)("div", {
                className: e0.yJ,
                children: [
                    (0, l.jsx)(eO.Anchor, {
                        href: eR.X7G.PRIVACY,
                        children: (0, l.jsx)(a.E, {
                            tag: "span",
                            variant: "text-xxs/normal",
                            color: "currentColor",
                            children: L.intl.string(L.t["Knf/f/"]),
                        }),
                    }),
                    (0, l.jsx)("span", { className: e0.xE, "aria-hidden": "true", children: "\u2022" }),
                    (0, l.jsx)(eO.Anchor, {
                        href: eR.X7G.TERMS,
                        children: (0, l.jsx)(a.E, {
                            tag: "span",
                            variant: "text-xxs/normal",
                            color: "currentColor",
                            children: L.intl.string(L.t.uFSTGq),
                        }),
                    }),
                    (0, l.jsx)("span", { className: e0.xE, "aria-hidden": "true", children: "\u2022" }),
                    (0, l.jsx)(eG.Y, {
                        targetElementRef: e,
                        position: "top",
                        align: "center",
                        spacing: 0,
                        animation: eG.Y.Animation.NONE,
                        renderPopout: (e) => {
                            let { closePopout: t } = e;
                            return (0, l.jsx)(e1, { onClose: t });
                        },
                        children: (t, n) =>
                            (0, l.jsx)(eO.Anchor, {
                                ...t,
                                ref: e,
                                useDefaultUnderlineStyles: !1,
                                className: N()(e0.Mj, { [e0.vu]: n.isShown }),
                                children: (0, l.jsx)(a.E, {
                                    tag: "span",
                                    variant: "text-xxs/normal",
                                    color: "currentColor",
                                    children: L.intl.string(L.t["UKOtz+"]),
                                }),
                            }),
                    }),
                ],
            }),
        ],
    });
}
var e2 = n(402651),
    e5 = n(669067),
    e9 = n(830543),
    e3 = n(466745);
let e4 = new Set([eP.X.PROFILE_PANEL, eP.X.SUBSCRIPTIONS_PANEL, eP.X.FAMILY_CENTER_PANEL, eP.X.POGGERMODE_PANEL]),
    e8 = new Map([
        [eP.X.CONNECTIONS_PANEL, s.ImpressionNames.USER_SETTINGS_CONNECTIONS],
        [eP.X.SESSIONS_PANEL, s.ImpressionNames.USER_SETTINGS_SESSIONS],
    ]);
function e6(e) {
    let { target: t, ...n } = e,
        i = eD.A.useField("query"),
        a = r.useCallback(() => {
            eD.A.setState({ query: "" }), h.A.terminate();
        }, []),
        [m, g] = r.useState(!1);
    return (r.useLayoutEffect(() => {
        function e() {
            null == eB.default.getCurrentUser() && (g(!0), (0, e9.default)());
        }
        return (
            eK.default.addChangeListener(e),
            () => {
                eK.default.removeChangeListener(e), e2.A.resetState(), d.A.resetState(), u.A.close(), (0, c.ZQ)();
            }
        );
    }, []),
    m)
        ? null
        : (0, l.jsx)(eT, {
              partialRoot: e_.D,
              searchBar: te,
              emptyState: tt,
              sidebarFooter: e7,
              onViewChange: function (e) {
                  e4.has(e) || (0, e5._)(e);
                  let t = e8.get(e);
                  null != t &&
                      (0, o.x)({
                          type: s.ImpressionTypes.PANE,
                          name: t,
                          properties: { source: e2.A.getField("source") },
                      }),
                      e2.A.setState({ source: void 0 });
              },
              target: t,
              defaultTarget: eP.X.ACCOUNT_PANEL,
              searchQuery: i,
              clearSearchQuery: a,
              ...n,
          });
}
function te() {
    let e = eD.A.useField("query"),
        t = r.useCallback((e) => {
            eD.A.setState({ query: e }), h.A.maybeTrackQueryEntered();
        }, []),
        n = r.useCallback(() => {
            h.A.isSessionActive() || h.A.initialize();
        }, []),
        s = r.useCallback(() => {
            0 === eD.A.getField("query").trim().length && h.A.terminate();
        }, []),
        a = r.useCallback(() => {
            eD.A.setState({ query: "" }), h.A.terminate();
        }, []);
    return (
        r.useEffect(
            () => () => {
                eD.A.resetState(), h.A.terminate();
            },
            [],
        ),
        (0, l.jsx)("div", {
            className: e3.P,
            children: (0, l.jsx)(i.I, { size: "md", query: e, onFocus: n, onBlur: s, onChange: t, onClear: a }),
        })
    );
}
function tt() {
    return (0, l.jsxs)("div", {
        className: e3.t,
        children: [
            (0, l.jsx)(a.E, { variant: "text-sm/semibold", color: "text-strong", children: L.intl.string(L.t.zihbmv) }),
            (0, l.jsx)(a.E, { variant: "text-sm/normal", color: "text-subtle", children: L.intl.string(L.t.XclvsB) }),
        ],
    });
}
