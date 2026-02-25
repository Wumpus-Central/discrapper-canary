n.d(t, { A: () => g });
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    o = n(735438),
    s = n(311907),
    c = n(732955),
    u = n(770178),
    d = n(775602),
    p = n(985018),
    f = n(970206);
let g = (e) => {
    let { children: t, gap: n = 8, edgeFade: i = "xl", hideActionsWhenDisabled: g = !0, className: h } = e,
        v = l.useRef(0),
        b = l.useRef(0),
        m = l.useRef(0),
        A = l.useRef(!1),
        E = l.useRef(null),
        y = (0, s.bG)([d.A], () => d.A.keyboardModeEnabled),
        x = (0, s.bG)([d.A], () => d.A.useReducedMotion),
        S = l.useMemo(
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
        [k, C] = l.useState(!1),
        [I, N] = l.useState(!1),
        [D, M] = l.useState(!0),
        w = () => {
            C(b.current > v.current);
        },
        R = l.useCallback(() => {
            let e = T.current;
            null == e ||
                (E.current = Math.floor((m.current + e.clientWidth / 2) / (e.scrollWidth / e.childElementCount)));
        }, []),
        L = l.useCallback(() => {
            let e = T.current;
            null != e && (N(m.current > 0), M(m.current + e.clientWidth < e.scrollWidth), R());
        }, [R]),
        _ = l.useCallback(() => {
            let e = T.current;
            if (null == e) return;
            let t = E.current;
            Array.from(e.children).forEach((e, n) => {
                Array.from(e.children).forEach((e) => {
                    y && n !== t ? e.setAttribute("inert", "true") : e.removeAttribute("inert");
                });
            });
        }, [y]),
        j = (0, u.w)((e) => {
            let { contentRect: t } = e;
            (v.current = t.width), null != T.current && (m.current = T.current?.scrollLeft), w(), L(), _();
        }),
        T = l.useRef(null);
    l.useEffect(() => {
        let e = T.current;
        if (null == e) return;
        let t = new ResizeObserver(() => {
            (b.current = e.scrollWidth), w(), L();
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
            e.addEventListener("scrollend", L),
            () => {
                t.disconnect(), n.disconnect(), e.removeEventListener("scrollend", L);
            }
        );
    }, [L]);
    let P = l.useMemo(
            () =>
                (0, o.throttle)(() => {
                    let e = T.current;
                    if (null == e) return;
                    let { scrollLeft: t } = e,
                        n = Math.max(0, t - v.current);
                    (m.current = n),
                        (A.current = !0),
                        e.scrollTo({ left: n, behavior: x ? "auto" : "smooth" }),
                        e.addEventListener("scrollend", () => (A.current = !1), { once: !0 }),
                        L();
                }, 200),
            [v, L, x],
        ),
        G = l.useMemo(
            () =>
                (0, o.throttle)(() => {
                    let e = T.current;
                    if (null == e) return;
                    let { scrollLeft: t } = e,
                        n = t + v.current;
                    (m.current = n),
                        (A.current = !0),
                        e.scrollTo({ left: n, behavior: x ? "auto" : "smooth" }),
                        e.addEventListener("scrollend", () => (A.current = !1), { once: !0 }),
                        L();
                }, 200),
            [v, L, x],
        ),
        O = l.useCallback(() => {
            let e = T.current;
            if (null == e) return !1;
            for (let t of e.children) if (t.contains(document.activeElement)) return !0;
            return !1;
        }, []),
        B = l.useCallback(() => {
            setTimeout(() => {
                if (!O()) {
                    let e = T.current;
                    if (null != e) {
                        for (let t of (e.setAttribute("tabIndex", "0"), e.children)) t.setAttribute("tabIndex", "-1");
                        _();
                    }
                }
            }, 10);
        }, [O, _]);
    l.useEffect(() => {
        _();
    }, [y, _]);
    let H = { "--custom-edge-fade-width": `var(--space-${i})` };
    return (0, r.jsxs)("div", {
        ref: j,
        style: H,
        className: a()(f.kL, h),
        children: [
            k &&
                (0, r.jsxs)("div", {
                    className: f.o1,
                    children: [
                        (0, r.jsx)("div", {
                            className: a()(f.x6, { [f.r9]: !I && g }),
                            children: (0, r.jsx)(c.K0, {
                                icon: c.Zge,
                                variant: "overlay-secondary",
                                onClick: P,
                                disabled: !I,
                                "aria-label": p.intl.string(p.t.FQx1Ru),
                                "aria-hidden": !I && g,
                            }),
                        }),
                        (0, r.jsx)("div", {
                            className: a()(f.x6, { [f.r9]: !D && g }),
                            children: (0, r.jsx)(c.K0, {
                                icon: c.KS6,
                                variant: "overlay-secondary",
                                onClick: G,
                                disabled: !D,
                                "aria-label": p.intl.string(p.t.H4hwjn),
                                "aria-hidden": !D && g,
                            }),
                        }),
                    ],
                }),
            (0, r.jsx)(c.BJc, {
                direction: "horizontal",
                gap: n,
                ref: T,
                className: a()(f.Y_, { [f.jL]: I, [f.w6]: D, [f.XG]: I && D }),
                tabIndex: 0,
                onFocus: (e) => {
                    let t = T.current;
                    if (null != t) {
                        if ((e.preventDefault(), -1 !== t.tabIndex)) {
                            let e = t.children[E?.current ?? 0];
                            null != e && (e.focus(), e.setAttribute("tabIndex", "0"), (E.current = 0), _());
                        }
                        t.setAttribute("tabIndex", "-1");
                    }
                },
                onBlur: (e) => {
                    e.preventDefault(), B();
                },
                onKeyDown: (e) => {
                    let t = T.current;
                    if (null == t) return;
                    let n = t.children,
                        r = E.current ?? 0,
                        l = n[r];
                    null != l && l.setAttribute("tabIndex", "-1");
                    let i = ["ArrowLeft"],
                        a = ["ArrowRight"];
                    [...i, ...a].includes(e.key) &&
                        (e.preventDefault(),
                        i.includes(e.key) && (r = Math.max(0, r - 1)),
                        a.includes(e.key) && (r = Math.min(t.childElementCount - 1, r + 1)),
                        null != (l = n[r])
                            ? (l.setAttribute("tabIndex", "0"),
                              t.setAttribute("tabIndex", "-1"),
                              l.focus(),
                              (E.current = r),
                              _())
                            : (t.setAttribute("tabIndex", "0"), R()));
                },
                onScroll: (e) => {
                    A.current || ((m.current = e.target.scrollLeft), L());
                },
                children: S,
            }),
        ],
    });
};
