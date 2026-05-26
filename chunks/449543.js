"use strict";
n.d(t, { A: () => m });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(735438),
    l = n(17928),
    u = n(408278),
    c = n(548411),
    d = n(554830),
    _ = n(331322),
    f = n(770178),
    h = n(775602),
    p = n(375708),
    E = n(652046);
let m = (e) => {
    let {
            children: t,
            gap: n = 24,
            edgeFade: s = "xl",
            hideActionsWhenDisabled: m = !0,
            className: g,
            iconButtonSize: A,
            "aria-label": I,
        } = e,
        T = r.useId(),
        S = r.useRef(0),
        N = r.useRef(0),
        y = r.useRef(0),
        C = r.useRef(!1),
        v = r.useRef(!1),
        O = r.useRef(null),
        R = r.useRef(null),
        b = (0, l.bG)([h.A], () => h.A.keyboardModeEnabled),
        D = (0, l.bG)([h.A], () => h.A.useReducedMotion),
        L = r.useMemo(
            () =>
                r.Children.map(t, (e) =>
                    r.isValidElement(e)
                        ? null != e && "object" == typeof e && e.$$typeof === Symbol.for("react.portal")
                            ? e
                            : r.cloneElement(e, { tabIndex: -1 })
                        : e,
                ),
            [t],
        ),
        [w, M] = r.useState(!1),
        [P, x] = r.useState(!1),
        [U, k] = r.useState(!0),
        G = () => {
            M(N.current > S.current);
        },
        F = r.useCallback(() => {
            let e;
            if (v.current) return null;
            let t = j.current;
            if (null == t || 0 === t.childElementCount) return null;
            let n = y.current,
                i = t.clientWidth,
                r = t.scrollWidth - i;
            if (n <= 0) e = 0;
            else if (n >= r) e = t.childElementCount - 1;
            else {
                let r = n + i / 2,
                    s = 0,
                    a = 1 / 0;
                for (let e = 0; e < t.children.length; e++) {
                    let n = t.children[e],
                        i = Math.abs(n.offsetLeft + n.offsetWidth / 2 - r);
                    i < a && ((a = i), (s = e));
                }
                e = s;
            }
            return (O.current = e), e;
        }, []),
        V = r.useCallback(() => {
            let e = j.current;
            null != e && (x(y.current > 0), k(y.current + e.clientWidth < e.scrollWidth), F());
        }, [F]),
        B = r.useCallback(() => {
            let e = j.current;
            if (null == e) return;
            let t = O.current;
            Array.from(e.children).forEach((e, n) => {
                Array.from(e.children).forEach((e) => {
                    b && n !== t ? e.setAttribute("inert", "true") : e.removeAttribute("inert");
                });
            });
        }, [b]),
        H = (0, f.w)((e) => {
            let { contentRect: t } = e;
            (S.current = t.width), null != j.current && (y.current = j.current?.scrollLeft), G(), V(), B();
        }),
        j = r.useRef(null);
    r.useEffect(() => {
        let e = j.current;
        if (null == e) return;
        let t = new ResizeObserver(() => {
            (N.current = e.scrollWidth), e.scrollLeft !== y.current && (e.scrollLeft = y.current), G(), V();
        });
        Array.from(e.children).forEach((e) => {
            t.observe(e);
        });
        let n = new MutationObserver(() => {
            t.disconnect(),
                Array.from(e.children).forEach((e) => {
                    t.observe(e);
                }),
                null != R.current && R.current >= e.childElementCount && (R.current = null);
        });
        return (
            n.observe(e, { childList: !0 }),
            e.addEventListener("scrollend", V),
            () => {
                t.disconnect(), n.disconnect(), e.removeEventListener("scrollend", V);
            }
        );
    }, [V]);
    let Y = r.useMemo(
            () =>
                (0, o.throttle)(() => {
                    let e = j.current;
                    if (null == e) return;
                    let { scrollLeft: t } = e,
                        n = Math.max(0, t - S.current);
                    (y.current = n),
                        (C.current = !0),
                        e.scrollTo({ left: n, behavior: D ? "auto" : "smooth" }),
                        e.addEventListener("scrollend", () => (C.current = !1), { once: !0 }),
                        V();
                    let i = F();
                    null != i && (R.current = i);
                }, 200),
            [S, V, F, D],
        ),
        W = r.useMemo(
            () =>
                (0, o.throttle)(() => {
                    let e = j.current;
                    if (null == e) return;
                    let { scrollLeft: t } = e,
                        n = t + S.current;
                    (y.current = n),
                        (C.current = !0),
                        e.scrollTo({ left: n, behavior: D ? "auto" : "smooth" }),
                        e.addEventListener("scrollend", () => (C.current = !1), { once: !0 }),
                        V();
                    let i = F();
                    null != i && (R.current = i);
                }, 200),
            [S, V, F, D],
        ),
        K = r.useCallback(() => {
            let e = j.current;
            if (null == e) return !1;
            for (let t of e.children) if (t.contains(document.activeElement)) return !0;
            return !1;
        }, []),
        z = r.useCallback(() => {
            setTimeout(() => {
                if (!K()) {
                    let e = j.current;
                    if (null != e) {
                        for (let t of (e.setAttribute("tabIndex", "0"), e.children)) t.setAttribute("tabIndex", "-1");
                        B();
                    }
                }
            }, 10);
        }, [K, B]);
    r.useEffect(() => {
        B();
    }, [b, B]);
    let $ = { "--custom-edge-fade-width": `var(--space-${s})` };
    return (0, i.jsxs)("div", {
        ref: H,
        role: null != I ? "region" : void 0,
        "aria-label": I,
        style: $,
        className: a()(E.kL, g),
        children: [
            w &&
                (0, i.jsxs)("div", {
                    className: E.o1,
                    role: "group",
                    children: [
                        (0, i.jsx)("div", {
                            className: a()(E.x6, { [E.r9]: !P && m }),
                            children: (0, i.jsx)(u.K, {
                                icon: c.Z,
                                size: A,
                                variant: "overlay-secondary",
                                onClick: Y,
                                disabled: !P,
                                "aria-label": p.intl.string(p.t.FQx1Ru),
                                "aria-hidden": !P && m,
                                "aria-controls": T,
                            }),
                        }),
                        (0, i.jsx)("div", {
                            className: a()(E.x6, { [E.r9]: !U && m }),
                            children: (0, i.jsx)(u.K, {
                                icon: d.K,
                                size: A,
                                variant: "overlay-secondary",
                                onClick: W,
                                disabled: !U,
                                "aria-label": p.intl.string(p.t.H4hwjn),
                                "aria-hidden": !U && m,
                                "aria-controls": T,
                            }),
                        }),
                    ],
                }),
            (0, i.jsx)(_.B, {
                direction: "horizontal",
                gap: n,
                id: T,
                "aria-label": I,
                ref: j,
                className: a()(E.Y_, { [E.jL]: P, [E.w6]: U, [E.XG]: P && U, [E.DY]: b }),
                tabIndex: 0,
                onFocus: (e) => {
                    let t = j.current;
                    if (null != t) {
                        if (
                            (e.preventDefault(),
                            (null == O.current || O.current >= t.childElementCount) && F(),
                            -1 !== t.tabIndex)
                        ) {
                            let e = R.current,
                                n = (null != e && e < t.childElementCount ? e : null) ?? 0,
                                i = t.children[n];
                            null != i && (i.focus(), i.setAttribute("tabIndex", "0"), (O.current = n), B());
                        }
                        t.setAttribute("tabIndex", "-1");
                    }
                },
                onBlur: (e) => {
                    e.preventDefault(), z();
                },
                onKeyDown: (e) => {
                    let t = j.current;
                    if (null == t) return;
                    let n = t.children,
                        i = O.current ?? 0,
                        r = n[i];
                    null != r && r.setAttribute("tabIndex", "-1");
                    let s = ["ArrowLeft"],
                        a = ["ArrowRight"];
                    if ([...s, ...a].includes(e.key))
                        if (
                            (e.preventDefault(),
                            s.includes(e.key) && (i = Math.max(0, i - 1)),
                            a.includes(e.key) && (i = Math.min(t.childElementCount - 1, i + 1)),
                            null != (r = n[i]))
                        ) {
                            r.setAttribute("tabIndex", "0"),
                                t.setAttribute("tabIndex", "-1"),
                                r.focus({ preventScroll: !0 });
                            let e = r.offsetLeft - t.clientWidth / 2 + r.offsetWidth / 2,
                                n = Math.max(0, Math.min(t.scrollWidth - t.clientWidth, e));
                            (y.current = n),
                                n !== t.scrollLeft &&
                                    ((C.current = !0),
                                    (v.current = !0),
                                    t.scrollTo({ left: n, behavior: D ? "auto" : "smooth" }),
                                    t.addEventListener(
                                        "scrollend",
                                        () => {
                                            (C.current = !1), (v.current = !1);
                                        },
                                        { once: !0 },
                                    )),
                                (O.current = i),
                                (R.current = i),
                                B();
                        } else t.setAttribute("tabIndex", "0"), F();
                },
                onScroll: (e) => {
                    C.current || ((y.current = e.target.scrollLeft), V());
                },
                children: L,
            }),
        ],
    });
};
