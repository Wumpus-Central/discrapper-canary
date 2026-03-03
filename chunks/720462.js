n.d(t, { A: () => h });
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    o = n(735438),
    s = n(311907),
    c = n(732955),
    u = n(770178),
    d = n(775602),
    f = n(985018),
    p = n(289752);
let h = (e) => {
    let {
            children: t,
            gap: n = 8,
            edgeFade: i = "xl",
            hideActionsWhenDisabled: h = !0,
            className: g,
            "aria-label": v,
        } = e,
        m = l.useId(),
        b = l.useRef(0),
        A = l.useRef(0),
        E = l.useRef(0),
        y = l.useRef(!1),
        x = l.useRef(!1),
        S = l.useRef(null),
        k = (0, s.bG)([d.A], () => d.A.keyboardModeEnabled),
        C = (0, s.bG)([d.A], () => d.A.useReducedMotion),
        I = l.useMemo(
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
        [D, M] = l.useState(!1),
        [N, L] = l.useState(!1),
        [w, R] = l.useState(!0),
        _ = () => {
            M(A.current > b.current);
        },
        j = l.useCallback(() => {
            if (x.current) return;
            let e = W.current;
            if (null == e) return;
            let t = Math.floor((E.current + e.clientWidth / 2) / (e.scrollWidth / e.childElementCount));
            S.current = Math.max(0, Math.min(e.childElementCount - 1, t));
        }, []),
        T = l.useCallback(() => {
            let e = W.current;
            null != e && (L(E.current > 0), R(E.current + e.clientWidth < e.scrollWidth), j());
        }, [j]),
        P = l.useCallback(() => {
            let e = W.current;
            if (null == e) return;
            let t = S.current;
            Array.from(e.children).forEach((e, n) => {
                Array.from(e.children).forEach((e) => {
                    k && n !== t ? e.setAttribute("inert", "true") : e.removeAttribute("inert");
                });
            });
        }, [k]),
        G = (0, u.w)((e) => {
            let { contentRect: t } = e;
            (b.current = t.width), null != W.current && (E.current = W.current?.scrollLeft), _(), T(), P();
        }),
        W = l.useRef(null);
    l.useEffect(() => {
        let e = W.current;
        if (null == e) return;
        let t = new ResizeObserver(() => {
            (A.current = e.scrollWidth), e.scrollLeft !== E.current && (e.scrollLeft = E.current), _(), T();
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
            e.addEventListener("scrollend", T),
            () => {
                t.disconnect(), n.disconnect(), e.removeEventListener("scrollend", T);
            }
        );
    }, [T]);
    let O = l.useMemo(
            () =>
                (0, o.throttle)(() => {
                    let e = W.current;
                    if (null == e) return;
                    let { scrollLeft: t } = e,
                        n = Math.max(0, t - b.current);
                    (E.current = n),
                        (y.current = !0),
                        e.scrollTo({ left: n, behavior: C ? "auto" : "smooth" }),
                        e.addEventListener("scrollend", () => (y.current = !1), { once: !0 }),
                        T();
                }, 200),
            [b, T, C],
        ),
        B = l.useMemo(
            () =>
                (0, o.throttle)(() => {
                    let e = W.current;
                    if (null == e) return;
                    let { scrollLeft: t } = e,
                        n = t + b.current;
                    (E.current = n),
                        (y.current = !0),
                        e.scrollTo({ left: n, behavior: C ? "auto" : "smooth" }),
                        e.addEventListener("scrollend", () => (y.current = !1), { once: !0 }),
                        T();
                }, 200),
            [b, T, C],
        ),
        H = l.useCallback(() => {
            let e = W.current;
            if (null == e) return !1;
            for (let t of e.children) if (t.contains(document.activeElement)) return !0;
            return !1;
        }, []),
        K = l.useCallback(() => {
            setTimeout(() => {
                if (!H()) {
                    let e = W.current;
                    if (null != e) {
                        for (let t of (e.setAttribute("tabIndex", "0"), e.children)) t.setAttribute("tabIndex", "-1");
                        P();
                    }
                }
            }, 10);
        }, [H, P]);
    l.useEffect(() => {
        P();
    }, [k, P]);
    let F = { "--custom-edge-fade-width": `var(--space-${i})` };
    return (0, r.jsxs)("div", {
        ref: G,
        role: null != v ? "region" : void 0,
        "aria-label": v,
        style: F,
        className: a()(p.kL, g),
        children: [
            D &&
                (0, r.jsxs)("div", {
                    className: p.o1,
                    role: "group",
                    children: [
                        (0, r.jsx)("div", {
                            className: a()(p.x6, { [p.r9]: !N && h }),
                            children: (0, r.jsx)(c.K0, {
                                icon: c.Zge,
                                variant: "overlay-secondary",
                                onClick: O,
                                disabled: !N,
                                "aria-label": f.intl.string(f.t.FQx1Ru),
                                "aria-hidden": !N && h,
                                "aria-controls": m,
                            }),
                        }),
                        (0, r.jsx)("div", {
                            className: a()(p.x6, { [p.r9]: !w && h }),
                            children: (0, r.jsx)(c.K0, {
                                icon: c.KS6,
                                variant: "overlay-secondary",
                                onClick: B,
                                disabled: !w,
                                "aria-label": f.intl.string(f.t.H4hwjn),
                                "aria-hidden": !w && h,
                                "aria-controls": m,
                            }),
                        }),
                    ],
                }),
            (0, r.jsx)(c.BJc, {
                direction: "horizontal",
                gap: n,
                id: m,
                "aria-label": v,
                ref: W,
                className: a()(p.Y_, { [p.jL]: N, [p.w6]: w, [p.XG]: N && w, [p.DY]: k }),
                tabIndex: 0,
                onFocus: (e) => {
                    let t = W.current;
                    if (null != t) {
                        if ((e.preventDefault(), j(), -1 !== t.tabIndex)) {
                            let e = S?.current ?? 0,
                                n = t.children[e];
                            null != n && (n.focus(), n.setAttribute("tabIndex", "0"), (S.current = e), P());
                        }
                        t.setAttribute("tabIndex", "-1");
                    }
                },
                onBlur: (e) => {
                    e.preventDefault(), K();
                },
                onKeyDown: (e) => {
                    let t = W.current;
                    if (null == t) return;
                    let n = t.children,
                        r = S.current ?? 0,
                        l = n[r];
                    null != l && l.setAttribute("tabIndex", "-1");
                    let i = ["ArrowLeft"],
                        a = ["ArrowRight"];
                    if ([...i, ...a].includes(e.key))
                        if (
                            (e.preventDefault(),
                            i.includes(e.key) && (r = Math.max(0, r - 1)),
                            a.includes(e.key) && (r = Math.min(t.childElementCount - 1, r + 1)),
                            null != (l = n[r]))
                        ) {
                            l.setAttribute("tabIndex", "0"),
                                t.setAttribute("tabIndex", "-1"),
                                l.focus({ preventScroll: !0 });
                            let e = l.offsetLeft - t.clientWidth / 2 + l.offsetWidth / 2,
                                n = Math.max(0, Math.min(t.scrollWidth - t.clientWidth, e));
                            (E.current = n),
                                n !== t.scrollLeft &&
                                    ((y.current = !0),
                                    (x.current = !0),
                                    t.scrollTo({ left: n, behavior: C ? "auto" : "smooth" }),
                                    t.addEventListener(
                                        "scrollend",
                                        () => {
                                            (y.current = !1), (x.current = !1);
                                        },
                                        { once: !0 },
                                    )),
                                (S.current = r),
                                P();
                        } else t.setAttribute("tabIndex", "0"), j();
                },
                onScroll: (e) => {
                    y.current || ((E.current = e.target.scrollLeft), T());
                },
                children: I,
            }),
        ],
    });
};
