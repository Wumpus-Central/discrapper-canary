r.d(t, { A: () => x });
var l = r(627968),
    n = r(64700),
    u = r(503698),
    c = r.n(u),
    i = r(735438),
    s = r(17928),
    o = r(408278),
    a = r(548411),
    d = r(554830),
    f = r(331322),
    h = r(770178),
    b = r(775602),
    m = r(375708),
    v = r(652046);
let x = (e) => {
    let {
            children: t,
            gap: r = 24,
            edgeFade: u = "xl",
            hideActionsWhenDisabled: x = !0,
            className: A,
            iconButtonSize: E,
            "aria-label": p,
        } = e,
        y = n.useId(),
        k = n.useRef(0),
        C = n.useRef(0),
        L = n.useRef(0),
        w = n.useRef(!1),
        I = n.useRef(!1),
        M = n.useRef(null),
        R = n.useRef(null),
        j = (0, s.bG)([b.A], () => b.A.keyboardModeEnabled),
        W = (0, s.bG)([b.A], () => b.A.useReducedMotion),
        g = n.useMemo(
            () =>
                n.Children.map(t, (e) =>
                    n.isValidElement(e)
                        ? null != e && "object" == typeof e && e.$$typeof === Symbol.for("react.portal")
                            ? e
                            : n.cloneElement(e, { tabIndex: -1 })
                        : e,
                ),
            [t],
        ),
        [S, D] = n.useState(!1),
        [N, z] = n.useState(!1),
        [K, T] = n.useState(!0),
        G = () => {
            D(C.current > k.current);
        },
        $ = n.useCallback(() => {
            let e;
            if (I.current) return null;
            let t = O.current;
            if (null == t || 0 === t.childElementCount) return null;
            let r = L.current,
                l = t.clientWidth,
                n = t.scrollWidth - l;
            if (r <= 0) e = 0;
            else if (r >= n) e = t.childElementCount - 1;
            else {
                let n = r + l / 2,
                    u = 0,
                    c = 1 / 0;
                for (let e = 0; e < t.children.length; e++) {
                    let r = t.children[e],
                        l = Math.abs(r.offsetLeft + r.offsetWidth / 2 - n);
                    l < c && ((c = l), (u = e));
                }
                e = u;
            }
            return (M.current = e), e;
        }, []),
        _ = n.useCallback(() => {
            let e = O.current;
            null != e && (z(L.current > 0), T(L.current + e.clientWidth < e.scrollWidth), $());
        }, [$]),
        B = n.useCallback(() => {
            let e = O.current;
            if (null == e) return;
            let t = M.current;
            Array.from(e.children).forEach((e, r) => {
                Array.from(e.children).forEach((e) => {
                    j && r !== t ? e.setAttribute("inert", "true") : e.removeAttribute("inert");
                });
            });
        }, [j]),
        F = (0, h.w)((e) => {
            let { contentRect: t } = e;
            (k.current = t.width), null != O.current && (L.current = O.current?.scrollLeft), G(), _(), B();
        }),
        O = n.useRef(null);
    n.useEffect(() => {
        let e = O.current;
        if (null == e) return;
        let t = new ResizeObserver(() => {
            (C.current = e.scrollWidth), e.scrollLeft !== L.current && (e.scrollLeft = L.current), G(), _();
        });
        Array.from(e.children).forEach((e) => {
            t.observe(e);
        });
        let r = new MutationObserver(() => {
            t.disconnect(),
                Array.from(e.children).forEach((e) => {
                    t.observe(e);
                }),
                null != R.current && R.current >= e.childElementCount && (R.current = null);
        });
        return (
            r.observe(e, { childList: !0 }),
            e.addEventListener("scrollend", _),
            () => {
                t.disconnect(), r.disconnect(), e.removeEventListener("scrollend", _);
            }
        );
    }, [_]);
    let Y = n.useMemo(
            () =>
                (0, i.throttle)(() => {
                    let e = O.current;
                    if (null == e) return;
                    let { scrollLeft: t } = e,
                        r = Math.max(0, t - k.current);
                    (L.current = r),
                        (w.current = !0),
                        e.scrollTo({ left: r, behavior: W ? "auto" : "smooth" }),
                        e.addEventListener("scrollend", () => (w.current = !1), { once: !0 }),
                        _();
                    let l = $();
                    null != l && (R.current = l);
                }, 200),
            [k, _, $, W],
        ),
        H = n.useMemo(
            () =>
                (0, i.throttle)(() => {
                    let e = O.current;
                    if (null == e) return;
                    let { scrollLeft: t } = e,
                        r = t + k.current;
                    (L.current = r),
                        (w.current = !0),
                        e.scrollTo({ left: r, behavior: W ? "auto" : "smooth" }),
                        e.addEventListener("scrollend", () => (w.current = !1), { once: !0 }),
                        _();
                    let l = $();
                    null != l && (R.current = l);
                }, 200),
            [k, _, $, W],
        ),
        Q = n.useCallback(() => {
            let e = O.current;
            if (null == e) return !1;
            for (let t of e.children) if (t.contains(document.activeElement)) return !0;
            return !1;
        }, []),
        V = n.useCallback(() => {
            setTimeout(() => {
                if (!Q()) {
                    let e = O.current;
                    if (null != e) {
                        for (let t of (e.setAttribute("tabIndex", "0"), e.children)) t.setAttribute("tabIndex", "-1");
                        B();
                    }
                }
            }, 10);
        }, [Q, B]);
    n.useEffect(() => {
        B();
    }, [j, B]);
    let X = { "--custom-edge-fade-width": `var(--space-${u})` };
    return (0, l.jsxs)("div", {
        ref: F,
        role: null != p ? "region" : void 0,
        "aria-label": p,
        style: X,
        className: c()(v.kL, A),
        children: [
            S &&
                (0, l.jsxs)("div", {
                    className: v.o1,
                    role: "group",
                    children: [
                        (0, l.jsx)("div", {
                            className: c()(v.x6, { [v.r9]: !N && x }),
                            children: (0, l.jsx)(o.K, {
                                icon: a.Z,
                                size: E,
                                variant: "overlay-secondary",
                                onClick: Y,
                                disabled: !N,
                                "aria-label": m.intl.string(m.t.FQx1Ru),
                                "aria-hidden": !N && x,
                                "aria-controls": y,
                            }),
                        }),
                        (0, l.jsx)("div", {
                            className: c()(v.x6, { [v.r9]: !K && x }),
                            children: (0, l.jsx)(o.K, {
                                icon: d.K,
                                size: E,
                                variant: "overlay-secondary",
                                onClick: H,
                                disabled: !K,
                                "aria-label": m.intl.string(m.t.H4hwjn),
                                "aria-hidden": !K && x,
                                "aria-controls": y,
                            }),
                        }),
                    ],
                }),
            (0, l.jsx)(f.B, {
                direction: "horizontal",
                gap: r,
                id: y,
                "aria-label": p,
                ref: O,
                className: c()(v.Y_, { [v.jL]: N, [v.w6]: K, [v.XG]: N && K, [v.DY]: j }),
                tabIndex: 0,
                onFocus: (e) => {
                    let t = O.current;
                    if (null != t) {
                        if (
                            (e.preventDefault(),
                            (null == M.current || M.current >= t.childElementCount) && $(),
                            -1 !== t.tabIndex)
                        ) {
                            let e = R.current,
                                r = (null != e && e < t.childElementCount ? e : null) ?? 0,
                                l = t.children[r];
                            null != l && (l.focus(), l.setAttribute("tabIndex", "0"), (M.current = r), B());
                        }
                        t.setAttribute("tabIndex", "-1");
                    }
                },
                onBlur: (e) => {
                    e.preventDefault(), V();
                },
                onKeyDown: (e) => {
                    let t = O.current;
                    if (null == t) return;
                    let r = t.children,
                        l = M.current ?? 0,
                        n = r[l];
                    null != n && n.setAttribute("tabIndex", "-1");
                    let u = ["ArrowLeft"],
                        c = ["ArrowRight"];
                    if ([...u, ...c].includes(e.key))
                        if (
                            (e.preventDefault(),
                            u.includes(e.key) && (l = Math.max(0, l - 1)),
                            c.includes(e.key) && (l = Math.min(t.childElementCount - 1, l + 1)),
                            null != (n = r[l]))
                        ) {
                            n.setAttribute("tabIndex", "0"),
                                t.setAttribute("tabIndex", "-1"),
                                n.focus({ preventScroll: !0 });
                            let e = n.offsetLeft - t.clientWidth / 2 + n.offsetWidth / 2,
                                r = Math.max(0, Math.min(t.scrollWidth - t.clientWidth, e));
                            (L.current = r),
                                r !== t.scrollLeft &&
                                    ((w.current = !0),
                                    (I.current = !0),
                                    t.scrollTo({ left: r, behavior: W ? "auto" : "smooth" }),
                                    t.addEventListener(
                                        "scrollend",
                                        () => {
                                            (w.current = !1), (I.current = !1);
                                        },
                                        { once: !0 },
                                    )),
                                (M.current = l),
                                (R.current = l),
                                B();
                        } else t.setAttribute("tabIndex", "0"), $();
                },
                onScroll: (e) => {
                    w.current || ((L.current = e.target.scrollLeft), _());
                },
                children: g,
            }),
        ],
    });
};
