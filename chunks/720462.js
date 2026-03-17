n.d(t, { A: () => f });
var a = n(627968),
    l = n(64700),
    i = n(503698),
    r = n.n(i),
    s = n(735438),
    o = n(311907),
    c = n(732955),
    d = n(770178),
    u = n(775602),
    m = n(985018),
    x = n(289752);
let f = (e) => {
    let {
            children: t,
            gap: n = 24,
            edgeFade: i = "xl",
            hideActionsWhenDisabled: f = !0,
            className: h,
            "aria-label": g,
        } = e,
        p = l.useId(),
        v = l.useRef(0),
        j = l.useRef(0),
        _ = l.useRef(0),
        A = l.useRef(!1),
        E = l.useRef(!1),
        I = l.useRef(null),
        b = (0, o.bG)([u.A], () => u.A.keyboardModeEnabled),
        N = (0, o.bG)([u.A], () => u.A.useReducedMotion),
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
        [y, R] = l.useState(!0),
        G = () => {
            S(j.current > v.current);
        },
        O = l.useCallback(() => {
            if (E.current) return;
            let e = P.current;
            if (null == e) return;
            let t = Math.floor((_.current + e.clientWidth / 2) / (e.scrollWidth / e.childElementCount));
            I.current = Math.max(0, Math.min(e.childElementCount - 1, t));
        }, []),
        M = l.useCallback(() => {
            let e = P.current;
            null != e && (k(_.current > 0), R(_.current + e.clientWidth < e.scrollWidth), O());
        }, [O]),
        w = l.useCallback(() => {
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
            (v.current = t.width), null != P.current && (_.current = P.current?.scrollLeft), G(), M(), w();
        }),
        P = l.useRef(null);
    l.useEffect(() => {
        let e = P.current;
        if (null == e) return;
        let t = new ResizeObserver(() => {
            (j.current = e.scrollWidth), e.scrollLeft !== _.current && (e.scrollLeft = _.current), G(), M();
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
            e.addEventListener("scrollend", M),
            () => {
                t.disconnect(), n.disconnect(), e.removeEventListener("scrollend", M);
            }
        );
    }, [M]);
    let V = l.useMemo(
            () =>
                (0, s.throttle)(() => {
                    let e = P.current;
                    if (null == e) return;
                    let { scrollLeft: t } = e,
                        n = Math.max(0, t - v.current);
                    (_.current = n),
                        (A.current = !0),
                        e.scrollTo({ left: n, behavior: N ? "auto" : "smooth" }),
                        e.addEventListener("scrollend", () => (A.current = !1), { once: !0 }),
                        M();
                }, 200),
            [v, M, N],
        ),
        W = l.useMemo(
            () =>
                (0, s.throttle)(() => {
                    let e = P.current;
                    if (null == e) return;
                    let { scrollLeft: t } = e,
                        n = t + v.current;
                    (_.current = n),
                        (A.current = !0),
                        e.scrollTo({ left: n, behavior: N ? "auto" : "smooth" }),
                        e.addEventListener("scrollend", () => (A.current = !1), { once: !0 }),
                        M();
                }, 200),
            [v, M, N],
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
                        w();
                    }
                }
            }, 10);
        }, [Y, w]);
    l.useEffect(() => {
        w();
    }, [b, w]);
    let U = { "--custom-edge-fade-width": `var(--space-${i})` };
    return (0, a.jsxs)("div", {
        ref: D,
        role: null != g ? "region" : void 0,
        "aria-label": g,
        style: U,
        className: r()(x.kL, h),
        children: [
            T &&
                (0, a.jsxs)("div", {
                    className: x.o1,
                    role: "group",
                    children: [
                        (0, a.jsx)("div", {
                            className: r()(x.x6, { [x.r9]: !L && f }),
                            children: (0, a.jsx)(c.K0, {
                                icon: c.Zge,
                                variant: "overlay-secondary",
                                onClick: V,
                                disabled: !L,
                                "aria-label": m.intl.string(m.t.FQx1Ru),
                                "aria-hidden": !L && f,
                                "aria-controls": p,
                            }),
                        }),
                        (0, a.jsx)("div", {
                            className: r()(x.x6, { [x.r9]: !y && f }),
                            children: (0, a.jsx)(c.K0, {
                                icon: c.KS6,
                                variant: "overlay-secondary",
                                onClick: W,
                                disabled: !y,
                                "aria-label": m.intl.string(m.t.H4hwjn),
                                "aria-hidden": !y && f,
                                "aria-controls": p,
                            }),
                        }),
                    ],
                }),
            (0, a.jsx)(c.BJc, {
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
                        if ((e.preventDefault(), O(), -1 !== t.tabIndex)) {
                            let e = I?.current ?? 0,
                                n = t.children[e];
                            null != n && (n.focus(), n.setAttribute("tabIndex", "0"), (I.current = e), w());
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
                            (_.current = n),
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
                                w();
                        } else t.setAttribute("tabIndex", "0"), O();
                },
                onScroll: (e) => {
                    A.current || ((_.current = e.target.scrollLeft), M());
                },
                children: C,
            }),
        ],
    });
};
