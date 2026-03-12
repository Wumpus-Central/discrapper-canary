"use strict";
n.d(t, { A: () => h });
var a = n(627968),
    l = n(64700),
    i = n(503698),
    r = n.n(i),
    s = n(735438),
    c = n(311907),
    o = n(732955),
    d = n(770178),
    u = n(775602),
    m = n(985018),
    x = n(970206);
let h = (e) => {
    let {
            children: t,
            gap: n = 24,
            edgeFade: i = "xl",
            hideActionsWhenDisabled: h = !0,
            className: f,
            "aria-label": g,
        } = e,
        p = l.useId(),
        _ = l.useRef(0),
        v = l.useRef(0),
        j = l.useRef(0),
        A = l.useRef(!1),
        E = l.useRef(!1),
        I = l.useRef(null),
        b = (0, c.bG)([u.A], () => u.A.keyboardModeEnabled),
        N = (0, c.bG)([u.A], () => u.A.useReducedMotion),
        C = l.useMemo(
            () =>
                l.Children.map(t, (e) =>
                    l.isValidElement(e)
                        ? null != e && "object" == typeof e && e.$$typeof === Symbol.for("react.portal")
                            ? e
                            : l.cloneElement(e, { tabIndex: -1 })
                        : e,
                ),
            [t],
        ),
        [T, S] = l.useState(!1),
        [L, k] = l.useState(!1),
        [y, O] = l.useState(!0),
        R = () => {
            S(v.current > _.current);
        },
        G = l.useCallback(() => {
            if (E.current) return;
            let e = P.current;
            if (null == e) return;
            let t = Math.floor((j.current + e.clientWidth / 2) / (e.scrollWidth / e.childElementCount));
            I.current = Math.max(0, Math.min(e.childElementCount - 1, t));
        }, []),
        w = l.useCallback(() => {
            let e = P.current;
            null != e && (k(j.current > 0), O(j.current + e.clientWidth < e.scrollWidth), G());
        }, [G]),
        M = l.useCallback(() => {
            let e = P.current;
            if (null == e) return;
            let t = I.current;
            Array.from(e.children).forEach((e, n) => {
                Array.from(e.children).forEach((e) => {
                    b && n !== t ? e.setAttribute("inert", "true") : e.removeAttribute("inert");
                });
            });
        }, [b]),
        D = (0, d.w)((e) => {
            let { contentRect: t } = e;
            (_.current = t.width), null != P.current && (j.current = P.current?.scrollLeft), R(), w(), M();
        }),
        P = l.useRef(null);
    l.useEffect(() => {
        let e = P.current;
        if (null == e) return;
        let t = new ResizeObserver(() => {
            (v.current = e.scrollWidth), e.scrollLeft !== j.current && (e.scrollLeft = j.current), R(), w();
        });
        Array.from(e.children).forEach((e) => {
            t.observe(e);
        });
        let n = new MutationObserver(() => {
            t.disconnect(),
                Array.from(e.children).forEach((e) => {
                    t.observe(e);
                });
        });
        return (
            n.observe(e, { childList: !0 }),
            e.addEventListener("scrollend", w),
            () => {
                t.disconnect(), n.disconnect(), e.removeEventListener("scrollend", w);
            }
        );
    }, [w]);
    let V = l.useMemo(
            () =>
                (0, s.throttle)(() => {
                    let e = P.current;
                    if (null == e) return;
                    let { scrollLeft: t } = e,
                        n = Math.max(0, t - _.current);
                    (j.current = n),
                        (A.current = !0),
                        e.scrollTo({ left: n, behavior: N ? "auto" : "smooth" }),
                        e.addEventListener("scrollend", () => (A.current = !1), { once: !0 }),
                        w();
                }, 200),
            [_, w, N],
        ),
        W = l.useMemo(
            () =>
                (0, s.throttle)(() => {
                    let e = P.current;
                    if (null == e) return;
                    let { scrollLeft: t } = e,
                        n = t + _.current;
                    (j.current = n),
                        (A.current = !0),
                        e.scrollTo({ left: n, behavior: N ? "auto" : "smooth" }),
                        e.addEventListener("scrollend", () => (A.current = !1), { once: !0 }),
                        w();
                }, 200),
            [_, w, N],
        ),
        Y = l.useCallback(() => {
            let e = P.current;
            if (null == e) return !1;
            for (let t of e.children) if (t.contains(document.activeElement)) return !0;
            return !1;
        }, []),
        F = l.useCallback(() => {
            setTimeout(() => {
                if (!Y()) {
                    let e = P.current;
                    if (null != e) {
                        for (let t of (e.setAttribute("tabIndex", "0"), e.children)) t.setAttribute("tabIndex", "-1");
                        M();
                    }
                }
            }, 10);
        }, [Y, M]);
    l.useEffect(() => {
        M();
    }, [b, M]);
    let U = { "--custom-edge-fade-width": `var(--space-${i})` };
    return (0, a.jsxs)("div", {
        ref: D,
        role: null != g ? "region" : void 0,
        "aria-label": g,
        style: U,
        className: r()(x.kL, f),
        children: [
            T &&
                (0, a.jsxs)("div", {
                    className: x.o1,
                    role: "group",
                    children: [
                        (0, a.jsx)("div", {
                            className: r()(x.x6, { [x.r9]: !L && h }),
                            children: (0, a.jsx)(o.K0, {
                                icon: o.Zge,
                                variant: "overlay-secondary",
                                onClick: V,
                                disabled: !L,
                                "aria-label": m.intl.string(m.t.FQx1Ru),
                                "aria-hidden": !L && h,
                                "aria-controls": p,
                            }),
                        }),
                        (0, a.jsx)("div", {
                            className: r()(x.x6, { [x.r9]: !y && h }),
                            children: (0, a.jsx)(o.K0, {
                                icon: o.KS6,
                                variant: "overlay-secondary",
                                onClick: W,
                                disabled: !y,
                                "aria-label": m.intl.string(m.t.H4hwjn),
                                "aria-hidden": !y && h,
                                "aria-controls": p,
                            }),
                        }),
                    ],
                }),
            (0, a.jsx)(o.BJc, {
                direction: "horizontal",
                gap: n,
                id: p,
                "aria-label": g,
                ref: P,
                className: r()(x.Y_, { [x.jL]: L, [x.w6]: y, [x.XG]: L && y, [x.DY]: b }),
                tabIndex: 0,
                onFocus: (e) => {
                    let t = P.current;
                    if (null != t) {
                        if ((e.preventDefault(), G(), -1 !== t.tabIndex)) {
                            let e = I?.current ?? 0,
                                n = t.children[e];
                            null != n && (n.focus(), n.setAttribute("tabIndex", "0"), (I.current = e), M());
                        }
                        t.setAttribute("tabIndex", "-1");
                    }
                },
                onBlur: (e) => {
                    e.preventDefault(), F();
                },
                onKeyDown: (e) => {
                    let t = P.current;
                    if (null == t) return;
                    let n = t.children,
                        a = I.current ?? 0,
                        l = n[a];
                    null != l && l.setAttribute("tabIndex", "-1");
                    let i = ["ArrowLeft"],
                        r = ["ArrowRight"];
                    if ([...i, ...r].includes(e.key))
                        if (
                            (e.preventDefault(),
                            i.includes(e.key) && (a = Math.max(0, a - 1)),
                            r.includes(e.key) && (a = Math.min(t.childElementCount - 1, a + 1)),
                            null != (l = n[a]))
                        ) {
                            l.setAttribute("tabIndex", "0"),
                                t.setAttribute("tabIndex", "-1"),
                                l.focus({ preventScroll: !0 });
                            let e = l.offsetLeft - t.clientWidth / 2 + l.offsetWidth / 2,
                                n = Math.max(0, Math.min(t.scrollWidth - t.clientWidth, e));
                            (j.current = n),
                                n !== t.scrollLeft &&
                                    ((A.current = !0),
                                    (E.current = !0),
                                    t.scrollTo({ left: n, behavior: N ? "auto" : "smooth" }),
                                    t.addEventListener(
                                        "scrollend",
                                        () => {
                                            (A.current = !1), (E.current = !1);
                                        },
                                        { once: !0 },
                                    )),
                                (I.current = a),
                                M();
                        } else t.setAttribute("tabIndex", "0"), G();
                },
                onScroll: (e) => {
                    A.current || ((j.current = e.target.scrollLeft), w());
                },
                children: C,
            }),
        ],
    });
};
