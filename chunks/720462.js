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
    let { children: t, gap: n = 8, edgeFade: i = "xl", hideActionsWhenDisabled: g = !0 } = e,
        h = l.useRef(0),
        v = l.useRef(0),
        b = l.useRef(0),
        m = l.useRef(!1),
        A = l.useRef(null),
        E = (0, s.bG)([d.A], () => d.A.keyboardModeEnabled),
        y = (0, s.bG)([d.A], () => d.A.useReducedMotion),
        x = l.useMemo(
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
        [S, k] = l.useState(!1),
        [C, I] = l.useState(!1),
        [N, D] = l.useState(!0),
        M = () => {
            k(v.current > h.current);
        },
        w = l.useCallback(() => {
            let e = j.current;
            null == e ||
                (A.current = Math.floor((b.current + e.clientWidth / 2) / (e.scrollWidth / e.childElementCount)));
        }, []),
        R = l.useCallback(() => {
            let e = j.current;
            null != e && (I(b.current > 0), D(b.current + e.clientWidth < e.scrollWidth), w());
        }, [w]),
        L = l.useCallback(() => {
            let e = j.current;
            if (null == e) return;
            let t = A.current;
            Array.from(e.children).forEach((e, n) => {
                Array.from(e.children).forEach((e) => {
                    E && n !== t ? e.setAttribute("inert", "true") : e.removeAttribute("inert");
                });
            });
        }, [E]),
        _ = (0, u.w)((e) => {
            let { contentRect: t } = e;
            (h.current = t.width), null != j.current && (b.current = j.current?.scrollLeft), M(), R(), L();
        }),
        j = l.useRef(null);
    l.useEffect(() => {
        let e = j.current;
        if (null == e) return;
        let t = new ResizeObserver(() => {
            (v.current = e.scrollWidth), M(), R();
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
            e.addEventListener("scrollend", R),
            () => {
                t.disconnect(), n.disconnect(), e.removeEventListener("scrollend", R);
            }
        );
    }, [R]);
    let T = l.useMemo(
            () =>
                (0, o.throttle)(() => {
                    let e = j.current;
                    if (null == e) return;
                    let { scrollLeft: t } = e,
                        n = Math.max(0, t - h.current);
                    (b.current = n),
                        (m.current = !0),
                        e.scrollTo({ left: n, behavior: y ? "auto" : "smooth" }),
                        e.addEventListener("scrollend", () => (m.current = !1), { once: !0 }),
                        R();
                }, 200),
            [h, R, y],
        ),
        P = l.useMemo(
            () =>
                (0, o.throttle)(() => {
                    let e = j.current;
                    if (null == e) return;
                    let { scrollLeft: t } = e,
                        n = t + h.current;
                    (b.current = n),
                        (m.current = !0),
                        e.scrollTo({ left: n, behavior: y ? "auto" : "smooth" }),
                        e.addEventListener("scrollend", () => (m.current = !1), { once: !0 }),
                        R();
                }, 200),
            [h, R, y],
        ),
        G = l.useCallback(() => {
            let e = j.current;
            if (null == e) return !1;
            for (let t of e.children) if (t.contains(document.activeElement)) return !0;
            return !1;
        }, []),
        O = l.useCallback(() => {
            setTimeout(() => {
                if (!G()) {
                    let e = j.current;
                    if (null != e) {
                        for (let t of (e.setAttribute("tabIndex", "0"), e.children)) t.setAttribute("tabIndex", "-1");
                        L();
                    }
                }
            }, 10);
        }, [G, L]);
    l.useEffect(() => {
        L();
    }, [E, L]);
    let B = { "--custom-edge-fade-width": `var(--space-${i})` };
    return (0, r.jsxs)("div", {
        ref: _,
        style: B,
        className: f.kL,
        children: [
            S &&
                (0, r.jsxs)("div", {
                    className: f.o1,
                    children: [
                        (0, r.jsx)("div", {
                            className: a()(f.x6, { [f.r9]: !C && g }),
                            children: (0, r.jsx)(c.K0, {
                                icon: c.Zge,
                                variant: "overlay-secondary",
                                onClick: T,
                                disabled: !C,
                                "aria-label": p.intl.string(p.t.FQx1Ru),
                                "aria-hidden": !C && g,
                            }),
                        }),
                        (0, r.jsx)("div", {
                            className: a()(f.x6, { [f.r9]: !N && g }),
                            children: (0, r.jsx)(c.K0, {
                                icon: c.KS6,
                                variant: "overlay-secondary",
                                onClick: P,
                                disabled: !N,
                                "aria-label": p.intl.string(p.t.H4hwjn),
                                "aria-hidden": !N && g,
                            }),
                        }),
                    ],
                }),
            (0, r.jsx)(c.BJc, {
                direction: "horizontal",
                gap: n,
                ref: j,
                className: a()(f.Y_, { [f.jL]: C, [f.w6]: N, [f.XG]: C && N }),
                tabIndex: 0,
                onFocus: (e) => {
                    let t = j.current;
                    if (null != t) {
                        if ((e.preventDefault(), -1 !== t.tabIndex)) {
                            let e = t.children[A?.current ?? 0];
                            null != e && (e.focus(), e.setAttribute("tabIndex", "0"), (A.current = 0), L());
                        }
                        t.setAttribute("tabIndex", "-1");
                    }
                },
                onBlur: (e) => {
                    e.preventDefault(), O();
                },
                onKeyDown: (e) => {
                    let t = j.current;
                    if (null == t) return;
                    let n = t.children,
                        r = A.current ?? 0,
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
                              (A.current = r),
                              L())
                            : (t.setAttribute("tabIndex", "0"), w()));
                },
                onScroll: (e) => {
                    m.current || ((b.current = e.target.scrollLeft), R());
                },
                children: x,
            }),
        ],
    });
};
