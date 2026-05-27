r.d(t, { A: () => x });
var l = r(627968),
    n = r(64700),
    u = r(503698),
    c = r.n(u),
    i = r(17928),
    a = r(408278),
    s = r(548411),
    o = r(554830),
    d = r(331322),
    f = r(770178),
    h = r(59520),
    b = r(775602),
    m = r(152858),
    E = r(375708),
    v = r(652046);
let x = (e) => {
    let {
            children: t,
            gap: r = 24,
            edgeFade: u = "xl",
            hideActionsWhenDisabled: x = !0,
            className: A,
            iconButtonSize: C,
            scrollBehavior: p = m.Uf.PAGE,
            "aria-label": k,
        } = e,
        L = n.useId(),
        M = n.useRef(0),
        y = n.useRef(0),
        I = n.useRef(0),
        g = n.useRef(!1),
        w = n.useRef(!1),
        R = n.useRef(null),
        W = n.useRef(null),
        T = (0, i.bG)([b.A], () => b.A.keyboardModeEnabled),
        j = (0, i.bG)([b.A], () => b.A.useReducedMotion),
        S = n.useMemo(
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
        [N, G] = n.useState(!1),
        [D, U] = n.useState(!1),
        [z, K] = n.useState(!0),
        P = () => {
            G(y.current > M.current);
        },
        $ = n.useCallback(() => {
            let e;
            if (w.current) return null;
            let t = O.current;
            if (null == t || 0 === t.childElementCount) return null;
            let r = I.current,
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
            return (R.current = e), e;
        }, []),
        _ = n.useCallback(() => {
            let e = O.current;
            null != e && (U(I.current > 0), K(I.current + e.clientWidth < e.scrollWidth), $());
        }, [$]),
        B = n.useCallback(() => {
            let e = O.current;
            if (null == e) return;
            let t = R.current;
            Array.from(e.children).forEach((e, r) => {
                Array.from(e.children).forEach((e) => {
                    T && r !== t ? e.setAttribute("inert", "true") : e.removeAttribute("inert");
                });
            });
        }, [T]),
        F = (0, f.w)((e) => {
            let { contentRect: t } = e;
            (M.current = t.width), null != O.current && (I.current = O.current?.scrollLeft), P(), _(), B();
        }),
        O = n.useRef(null);
    n.useEffect(() => {
        let e = O.current;
        if (null == e) return;
        let t = new ResizeObserver(() => {
            (y.current = e.scrollWidth), e.scrollLeft !== I.current && (e.scrollLeft = I.current), P(), _();
        });
        Array.from(e.children).forEach((e) => {
            t.observe(e);
        });
        let r = new MutationObserver(() => {
            t.disconnect(),
                Array.from(e.children).forEach((e) => {
                    t.observe(e);
                }),
                null != W.current && W.current >= e.childElementCount && (W.current = null);
        });
        r.observe(e, { childList: !0 });
        let l = () => {
            p === m.Uf.ITEM && (I.current = e.scrollLeft), _();
        };
        return (
            e.addEventListener("scrollend", l),
            () => {
                t.disconnect(), r.disconnect(), e.removeEventListener("scrollend", l);
            }
        );
    }, [_, p]);
    let V = n.useCallback(
            (e) => {
                let t = O.current;
                if (null == t) return;
                let r = j ? "auto" : "smooth",
                    l = Math.max(0, t.scrollWidth - t.clientWidth);
                if (p === m.Uf.ITEM && null != t.firstElementChild) {
                    let n = R.current ?? $() ?? 0,
                        u = Math.max(0, Math.min(t.childElementCount - 1, n + ("right" === e ? 1 : -1))),
                        c = t.children[u];
                    if (null != c) {
                        let e = Math.max(0, Math.min(l, c.offsetLeft));
                        (I.current = e),
                            (g.current = !0),
                            t.addEventListener(
                                "scrollend",
                                () => {
                                    (g.current = !1), (R.current = u), (W.current = u);
                                },
                                { once: !0 },
                            ),
                            t.scrollTo({ left: e, behavior: r }),
                            _(),
                            (R.current = u),
                            (W.current = u);
                    }
                    return;
                }
                let n = "right" === e ? M.current : -M.current,
                    u = Math.max(0, Math.min(l, I.current + n));
                (I.current = u),
                    (g.current = !0),
                    t.addEventListener("scrollend", () => (g.current = !1), { once: !0 }),
                    t.scrollTo({ left: u, behavior: r }),
                    _();
                let c = $();
                null != c && (W.current = c);
            },
            [p, j, _, $],
        ),
        Y = n.useCallback(() => V("left"), [V]),
        H = n.useCallback(() => V("right"), [V]),
        Q = (0, h.I)(Y, 200, [Y]),
        X = (0, h.I)(H, 200, [H]),
        Z = n.useCallback(() => {
            let e = O.current;
            if (null == e) return !1;
            for (let t of e.children) if (t.contains(document.activeElement)) return !0;
            return !1;
        }, []),
        q = n.useCallback(() => {
            setTimeout(() => {
                if (!Z()) {
                    let e = O.current;
                    if (null != e) {
                        for (let t of (e.setAttribute("tabIndex", "0"), e.children)) t.setAttribute("tabIndex", "-1");
                        B();
                    }
                }
            }, 10);
        }, [Z, B]);
    n.useEffect(() => {
        B();
    }, [T, B]);
    let J = { "--custom-edge-fade-width": `var(--space-${u})` };
    return (0, l.jsxs)("div", {
        ref: F,
        role: null != k ? "region" : void 0,
        "aria-label": k,
        style: J,
        className: c()(v.kL, A),
        children: [
            N &&
                (0, l.jsxs)("div", {
                    className: v.o1,
                    role: "group",
                    children: [
                        (0, l.jsx)("div", {
                            className: c()(v.x6, { [v.r9]: !D && x }),
                            children: (0, l.jsx)(a.K, {
                                icon: s.Z,
                                size: C,
                                variant: "overlay-secondary",
                                onClick: Q,
                                disabled: !D,
                                "aria-label": E.intl.string(E.t.FQx1Ru),
                                "aria-hidden": !D && x,
                                "aria-controls": L,
                            }),
                        }),
                        (0, l.jsx)("div", {
                            className: c()(v.x6, { [v.r9]: !z && x }),
                            children: (0, l.jsx)(a.K, {
                                icon: o.K,
                                size: C,
                                variant: "overlay-secondary",
                                onClick: X,
                                disabled: !z,
                                "aria-label": E.intl.string(E.t.H4hwjn),
                                "aria-hidden": !z && x,
                                "aria-controls": L,
                            }),
                        }),
                    ],
                }),
            (0, l.jsx)(d.B, {
                direction: "horizontal",
                gap: r,
                id: L,
                "aria-label": k,
                ref: O,
                className: c()(v.Y_, { [v.jL]: D, [v.w6]: z, [v.XG]: D && z, [v.DY]: T }),
                tabIndex: 0,
                onFocus: (e) => {
                    let t = O.current;
                    if (null != t) {
                        if (
                            (e.preventDefault(),
                            (null == R.current || R.current >= t.childElementCount) && $(),
                            -1 !== t.tabIndex)
                        ) {
                            let e = W.current,
                                r = (null != e && e < t.childElementCount ? e : null) ?? 0,
                                l = t.children[r];
                            null != l && (l.focus(), l.setAttribute("tabIndex", "0"), (R.current = r), B());
                        }
                        t.setAttribute("tabIndex", "-1");
                    }
                },
                onBlur: (e) => {
                    e.preventDefault(), q();
                },
                onKeyDown: (e) => {
                    let t = O.current;
                    if (null == t) return;
                    let r = t.children,
                        l = R.current ?? 0,
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
                            (I.current = r),
                                r !== t.scrollLeft &&
                                    ((g.current = !0),
                                    (w.current = !0),
                                    t.addEventListener(
                                        "scrollend",
                                        () => {
                                            (g.current = !1), (w.current = !1);
                                        },
                                        { once: !0 },
                                    ),
                                    t.scrollTo({ left: r, behavior: j ? "auto" : "smooth" })),
                                (R.current = l),
                                (W.current = l),
                                B();
                        } else t.setAttribute("tabIndex", "0"), $();
                },
                onScroll: (e) => {
                    g.current || ((I.current = e.target.scrollLeft), _());
                },
                children: S,
            }),
        ],
    });
};
