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
    p = n(970206);
let h = (e) => {
    let { children: t, gap: n = 8, edgeFade: i = "xl", hideActionsWhenDisabled: h = !0, className: g } = e,
        m = l.useRef(0),
        v = l.useRef(0),
        b = l.useRef(0),
        A = l.useRef(!1),
        E = l.useRef(!1),
        y = l.useRef(null),
        x = (0, s.bG)([d.A], () => d.A.keyboardModeEnabled),
        S = (0, s.bG)([d.A], () => d.A.useReducedMotion),
        k = l.useMemo(
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
        [C, D] = l.useState(!1),
        [I, M] = l.useState(!1),
        [N, L] = l.useState(!0),
        w = () => {
            D(v.current > m.current);
        },
        R = l.useCallback(() => {
            if (E.current) return;
            let e = P.current;
            if (null == e) return;
            let t = Math.floor((b.current + e.clientWidth / 2) / (e.scrollWidth / e.childElementCount));
            y.current = Math.max(0, Math.min(e.childElementCount - 1, t));
        }, []),
        _ = l.useCallback(() => {
            let e = P.current;
            null != e && (M(b.current > 0), L(b.current + e.clientWidth < e.scrollWidth), R());
        }, [R]),
        j = l.useCallback(() => {
            let e = P.current;
            if (null == e) return;
            let t = y.current;
            Array.from(e.children).forEach((e, n) => {
                Array.from(e.children).forEach((e) => {
                    x && n !== t ? e.setAttribute("inert", "true") : e.removeAttribute("inert");
                });
            });
        }, [x]),
        T = (0, u.w)((e) => {
            let { contentRect: t } = e;
            (m.current = t.width), null != P.current && (b.current = P.current?.scrollLeft), w(), _(), j();
        }),
        P = l.useRef(null);
    l.useEffect(() => {
        let e = P.current;
        if (null == e) return;
        let t = new ResizeObserver(() => {
            (v.current = e.scrollWidth), e.scrollLeft !== b.current && (e.scrollLeft = b.current), w(), _();
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
            e.addEventListener("scrollend", _),
            () => {
                t.disconnect(), n.disconnect(), e.removeEventListener("scrollend", _);
            }
        );
    }, [_]);
    let G = l.useMemo(
            () =>
                (0, o.throttle)(() => {
                    let e = P.current;
                    if (null == e) return;
                    let { scrollLeft: t } = e,
                        n = Math.max(0, t - m.current);
                    (b.current = n),
                        (A.current = !0),
                        e.scrollTo({ left: n, behavior: S ? "auto" : "smooth" }),
                        e.addEventListener("scrollend", () => (A.current = !1), { once: !0 }),
                        _();
                }, 200),
            [m, _, S],
        ),
        W = l.useMemo(
            () =>
                (0, o.throttle)(() => {
                    let e = P.current;
                    if (null == e) return;
                    let { scrollLeft: t } = e,
                        n = t + m.current;
                    (b.current = n),
                        (A.current = !0),
                        e.scrollTo({ left: n, behavior: S ? "auto" : "smooth" }),
                        e.addEventListener("scrollend", () => (A.current = !1), { once: !0 }),
                        _();
                }, 200),
            [m, _, S],
        ),
        O = l.useCallback(() => {
            let e = P.current;
            if (null == e) return !1;
            for (let t of e.children) if (t.contains(document.activeElement)) return !0;
            return !1;
        }, []),
        B = l.useCallback(() => {
            setTimeout(() => {
                if (!O()) {
                    let e = P.current;
                    if (null != e) {
                        for (let t of (e.setAttribute("tabIndex", "0"), e.children)) t.setAttribute("tabIndex", "-1");
                        j();
                    }
                }
            }, 10);
        }, [O, j]);
    l.useEffect(() => {
        j();
    }, [x, j]);
    let H = { "--custom-edge-fade-width": `var(--space-${i})` };
    return (0, r.jsxs)("div", {
        ref: T,
        style: H,
        className: a()(p.kL, g),
        children: [
            C &&
                (0, r.jsxs)("div", {
                    className: p.o1,
                    children: [
                        (0, r.jsx)("div", {
                            className: a()(p.x6, { [p.r9]: !I && h }),
                            children: (0, r.jsx)(c.K0, {
                                icon: c.Zge,
                                variant: "overlay-secondary",
                                onClick: G,
                                disabled: !I,
                                "aria-label": f.intl.string(f.t.FQx1Ru),
                                "aria-hidden": !I && h,
                            }),
                        }),
                        (0, r.jsx)("div", {
                            className: a()(p.x6, { [p.r9]: !N && h }),
                            children: (0, r.jsx)(c.K0, {
                                icon: c.KS6,
                                variant: "overlay-secondary",
                                onClick: W,
                                disabled: !N,
                                "aria-label": f.intl.string(f.t.H4hwjn),
                                "aria-hidden": !N && h,
                            }),
                        }),
                    ],
                }),
            (0, r.jsx)(c.BJc, {
                direction: "horizontal",
                gap: n,
                ref: P,
                className: a()(p.Y_, { [p.jL]: I, [p.w6]: N, [p.XG]: I && N, [p.DY]: x }),
                tabIndex: 0,
                onFocus: (e) => {
                    let t = P.current;
                    if (null != t) {
                        if ((e.preventDefault(), R(), -1 !== t.tabIndex)) {
                            let e = y?.current ?? 0,
                                n = t.children[e];
                            null != n && (n.focus(), n.setAttribute("tabIndex", "0"), (y.current = e), j());
                        }
                        t.setAttribute("tabIndex", "-1");
                    }
                },
                onBlur: (e) => {
                    e.preventDefault(), B();
                },
                onKeyDown: (e) => {
                    let t = P.current;
                    if (null == t) return;
                    let n = t.children,
                        r = y.current ?? 0,
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
                            (b.current = n),
                                n !== t.scrollLeft &&
                                    ((A.current = !0),
                                    (E.current = !0),
                                    t.scrollTo({ left: n, behavior: S ? "auto" : "smooth" }),
                                    t.addEventListener(
                                        "scrollend",
                                        () => {
                                            (A.current = !1), (E.current = !1);
                                        },
                                        { once: !0 },
                                    )),
                                (y.current = r),
                                j();
                        } else t.setAttribute("tabIndex", "0"), R();
                },
                onScroll: (e) => {
                    A.current || ((b.current = e.target.scrollLeft), _());
                },
                children: k,
            }),
        ],
    });
};
