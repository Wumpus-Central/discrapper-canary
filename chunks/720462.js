n.d(t, { A: () => g });
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(735438),
    o = n(311907),
    c = n(732955),
    u = n(770178),
    d = n(775602),
    p = n(985018),
    f = n(289752);
let g = (e) => {
    let { children: t, gap: n = 8, edgeFade: i = "xl", hideActionsWhenDisabled: g = !0 } = e,
        h = l.useRef(0),
        v = l.useRef(0),
        m = l.useRef(0),
        b = l.useRef(!1),
        A = l.useRef(null),
        E = (0, o.bG)([d.A], () => d.A.keyboardModeEnabled),
        y = l.useMemo(
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
        [x, S] = l.useState(!1),
        [k, C] = l.useState(!1),
        [I, N] = l.useState(!0),
        D = () => {
            S(v.current > h.current);
        },
        w = l.useCallback(() => {
            let e = _.current;
            null == e ||
                (A.current = Math.floor((m.current + e.clientWidth / 2) / (e.scrollWidth / e.childElementCount)));
        }, []),
        M = l.useCallback(() => {
            let e = _.current;
            null != e && (C(m.current > 0), N(m.current + e.clientWidth < e.scrollWidth), w());
        }, [w]),
        R = l.useCallback(() => {
            let e = _.current;
            if (null == e) return;
            let t = A.current;
            Array.from(e.children).forEach((e, n) => {
                Array.from(e.children).forEach((e) => {
                    E && n !== t ? e.setAttribute("inert", "true") : e.removeAttribute("inert");
                });
            });
        }, [E]),
        L = (0, u.w)((e) => {
            let { contentRect: t } = e;
            (h.current = t.width), null != _.current && (m.current = _.current?.scrollLeft), D(), M(), R();
        }),
        _ = l.useRef(null);
    l.useEffect(() => {
        let e = _.current;
        if (null == e) return;
        let t = new ResizeObserver(() => {
            (v.current = e.scrollWidth), D(), M();
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
    let j = l.useMemo(
            () =>
                (0, s.throttle)(() => {
                    let e = _.current;
                    if (null == e) return;
                    let { scrollLeft: t } = e,
                        n = Math.max(0, t - h.current);
                    (m.current = n),
                        (b.current = !0),
                        e.scrollTo({ left: n, behavior: "smooth" }),
                        e.addEventListener("scrollend", () => (b.current = !1), { once: !0 }),
                        M();
                }, 200),
            [h, M],
        ),
        T = l.useMemo(
            () =>
                (0, s.throttle)(() => {
                    let e = _.current;
                    if (null == e) return;
                    let { scrollLeft: t } = e,
                        n = t + h.current;
                    (m.current = n),
                        (b.current = !0),
                        e.scrollTo({ left: n, behavior: "smooth" }),
                        e.addEventListener("scrollend", () => (b.current = !1), { once: !0 }),
                        M();
                }, 200),
            [h, M],
        ),
        P = l.useCallback(() => {
            let e = _.current;
            if (null == e) return !1;
            for (let t of e.children) if (t.contains(document.activeElement)) return !0;
            return !1;
        }, []),
        G = l.useCallback(() => {
            setTimeout(() => {
                if (!P()) {
                    let e = _.current;
                    if (null != e) {
                        for (let t of (e.setAttribute("tabIndex", "0"), e.children)) t.setAttribute("tabIndex", "-1");
                        R();
                    }
                }
            }, 10);
        }, [P, R]);
    l.useEffect(() => {
        R();
    }, [E, R]);
    let O = { "--custom-edge-fade-width": `var(--space-${i})` };
    return (0, r.jsxs)("div", {
        ref: L,
        style: O,
        className: f.kL,
        children: [
            x &&
                (0, r.jsxs)("div", {
                    className: f.o1,
                    children: [
                        (0, r.jsx)("div", {
                            className: a()(f.x6, { [f.r9]: !k && g }),
                            children: (0, r.jsx)(c.K0, {
                                icon: c.Zge,
                                variant: "overlay-secondary",
                                onClick: j,
                                disabled: !k,
                                "aria-label": p.intl.string(p.t.FQx1Ru),
                                "aria-hidden": !k && g,
                            }),
                        }),
                        (0, r.jsx)("div", {
                            className: a()(f.x6, { [f.r9]: !I && g }),
                            children: (0, r.jsx)(c.K0, {
                                icon: c.KS6,
                                variant: "overlay-secondary",
                                onClick: T,
                                disabled: !I,
                                "aria-label": p.intl.string(p.t.H4hwjn),
                                "aria-hidden": !I && g,
                            }),
                        }),
                    ],
                }),
            (0, r.jsx)(c.BJc, {
                direction: "horizontal",
                gap: n,
                ref: _,
                className: a()(f.Y_, { [f.jL]: k, [f.w6]: I, [f.XG]: k && I }),
                tabIndex: 0,
                onFocus: (e) => {
                    let t = _.current;
                    if (null != t) {
                        if ((e.preventDefault(), -1 !== t.tabIndex)) {
                            let e = t.children[A?.current ?? 0];
                            null != e && (e.focus(), e.setAttribute("tabIndex", "0"), (A.current = 0), R());
                        }
                        t.setAttribute("tabIndex", "-1");
                    }
                },
                onBlur: (e) => {
                    e.preventDefault(), G();
                },
                onKeyDown: (e) => {
                    let t = _.current;
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
                              R())
                            : (t.setAttribute("tabIndex", "0"), w()));
                },
                onScroll: (e) => {
                    b.current || ((m.current = e.target.scrollLeft), M());
                },
                children: y,
            }),
        ],
    });
};
