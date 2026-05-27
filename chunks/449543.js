"use strict";
n.d(t, { A: () => g });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(17928),
    l = n(408278),
    u = n(548411),
    c = n(554830),
    d = n(331322),
    _ = n(770178),
    f = n(59520),
    h = n(775602),
    p = n(152858),
    E = n(375708),
    m = n(652046);
let g = (e) => {
    let {
            children: t,
            gap: n = 24,
            edgeFade: s = "xl",
            hideActionsWhenDisabled: g = !0,
            className: A,
            iconButtonSize: I,
            scrollBehavior: T = p.Uf.PAGE,
            "aria-label": S,
        } = e,
        N = r.useId(),
        y = r.useRef(0),
        C = r.useRef(0),
        v = r.useRef(0),
        O = r.useRef(!1),
        R = r.useRef(!1),
        b = r.useRef(null),
        D = r.useRef(null),
        L = (0, o.bG)([h.A], () => h.A.keyboardModeEnabled),
        w = (0, o.bG)([h.A], () => h.A.useReducedMotion),
        M = r.useMemo(
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
        [P, x] = r.useState(!1),
        [U, k] = r.useState(!1),
        [G, F] = r.useState(!0),
        V = () => {
            x(C.current > y.current);
        },
        B = r.useCallback(() => {
            let e;
            if (R.current) return null;
            let t = W.current;
            if (null == t || 0 === t.childElementCount) return null;
            let n = v.current,
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
            return (b.current = e), e;
        }, []),
        H = r.useCallback(() => {
            let e = W.current;
            null != e && (k(v.current > 0), F(v.current + e.clientWidth < e.scrollWidth), B());
        }, [B]),
        j = r.useCallback(() => {
            let e = W.current;
            if (null == e) return;
            let t = b.current;
            Array.from(e.children).forEach((e, n) => {
                Array.from(e.children).forEach((e) => {
                    L && n !== t ? e.setAttribute("inert", "true") : e.removeAttribute("inert");
                });
            });
        }, [L]),
        Y = (0, _.w)((e) => {
            let { contentRect: t } = e;
            (y.current = t.width), null != W.current && (v.current = W.current?.scrollLeft), V(), H(), j();
        }),
        W = r.useRef(null);
    r.useEffect(() => {
        let e = W.current;
        if (null == e) return;
        let t = new ResizeObserver(() => {
            (C.current = e.scrollWidth), e.scrollLeft !== v.current && (e.scrollLeft = v.current), V(), H();
        });
        Array.from(e.children).forEach((e) => {
            t.observe(e);
        });
        let n = new MutationObserver(() => {
            t.disconnect(),
                Array.from(e.children).forEach((e) => {
                    t.observe(e);
                }),
                null != D.current && D.current >= e.childElementCount && (D.current = null);
        });
        n.observe(e, { childList: !0 });
        let i = () => {
            T === p.Uf.ITEM && (v.current = e.scrollLeft), H();
        };
        return (
            e.addEventListener("scrollend", i),
            () => {
                t.disconnect(), n.disconnect(), e.removeEventListener("scrollend", i);
            }
        );
    }, [H, T]);
    let K = r.useCallback(
            (e) => {
                let t = W.current;
                if (null == t) return;
                let n = w ? "auto" : "smooth",
                    i = Math.max(0, t.scrollWidth - t.clientWidth);
                if (T === p.Uf.ITEM && null != t.firstElementChild) {
                    let r = b.current ?? B() ?? 0,
                        s = Math.max(0, Math.min(t.childElementCount - 1, r + ("right" === e ? 1 : -1))),
                        a = t.children[s];
                    if (null != a) {
                        let e = Math.max(0, Math.min(i, a.offsetLeft));
                        (v.current = e),
                            (O.current = !0),
                            t.addEventListener(
                                "scrollend",
                                () => {
                                    (O.current = !1), (b.current = s), (D.current = s);
                                },
                                { once: !0 },
                            ),
                            t.scrollTo({ left: e, behavior: n }),
                            H(),
                            (b.current = s),
                            (D.current = s);
                    }
                    return;
                }
                let r = "right" === e ? y.current : -y.current,
                    s = Math.max(0, Math.min(i, v.current + r));
                (v.current = s),
                    (O.current = !0),
                    t.addEventListener("scrollend", () => (O.current = !1), { once: !0 }),
                    t.scrollTo({ left: s, behavior: n }),
                    H();
                let a = B();
                null != a && (D.current = a);
            },
            [T, w, H, B],
        ),
        z = r.useCallback(() => K("left"), [K]),
        $ = r.useCallback(() => K("right"), [K]),
        q = (0, f.I)(z, 200, [z]),
        X = (0, f.I)($, 200, [$]),
        Z = r.useCallback(() => {
            let e = W.current;
            if (null == e) return !1;
            for (let t of e.children) if (t.contains(document.activeElement)) return !0;
            return !1;
        }, []),
        Q = r.useCallback(() => {
            setTimeout(() => {
                if (!Z()) {
                    let e = W.current;
                    if (null != e) {
                        for (let t of (e.setAttribute("tabIndex", "0"), e.children)) t.setAttribute("tabIndex", "-1");
                        j();
                    }
                }
            }, 10);
        }, [Z, j]);
    r.useEffect(() => {
        j();
    }, [L, j]);
    let J = { "--custom-edge-fade-width": `var(--space-${s})` };
    return (0, i.jsxs)("div", {
        ref: Y,
        role: null != S ? "region" : void 0,
        "aria-label": S,
        style: J,
        className: a()(m.kL, A),
        children: [
            P &&
                (0, i.jsxs)("div", {
                    className: m.o1,
                    role: "group",
                    children: [
                        (0, i.jsx)("div", {
                            className: a()(m.x6, { [m.r9]: !U && g }),
                            children: (0, i.jsx)(l.K, {
                                icon: u.Z,
                                size: I,
                                variant: "overlay-secondary",
                                onClick: q,
                                disabled: !U,
                                "aria-label": E.intl.string(E.t.FQx1Ru),
                                "aria-hidden": !U && g,
                                "aria-controls": N,
                            }),
                        }),
                        (0, i.jsx)("div", {
                            className: a()(m.x6, { [m.r9]: !G && g }),
                            children: (0, i.jsx)(l.K, {
                                icon: c.K,
                                size: I,
                                variant: "overlay-secondary",
                                onClick: X,
                                disabled: !G,
                                "aria-label": E.intl.string(E.t.H4hwjn),
                                "aria-hidden": !G && g,
                                "aria-controls": N,
                            }),
                        }),
                    ],
                }),
            (0, i.jsx)(d.B, {
                direction: "horizontal",
                gap: n,
                id: N,
                "aria-label": S,
                ref: W,
                className: a()(m.Y_, { [m.jL]: U, [m.w6]: G, [m.XG]: U && G, [m.DY]: L }),
                tabIndex: 0,
                onFocus: (e) => {
                    let t = W.current;
                    if (null != t) {
                        if (
                            (e.preventDefault(),
                            (null == b.current || b.current >= t.childElementCount) && B(),
                            -1 !== t.tabIndex)
                        ) {
                            let e = D.current,
                                n = (null != e && e < t.childElementCount ? e : null) ?? 0,
                                i = t.children[n];
                            null != i && (i.focus(), i.setAttribute("tabIndex", "0"), (b.current = n), j());
                        }
                        t.setAttribute("tabIndex", "-1");
                    }
                },
                onBlur: (e) => {
                    e.preventDefault(), Q();
                },
                onKeyDown: (e) => {
                    let t = W.current;
                    if (null == t) return;
                    let n = t.children,
                        i = b.current ?? 0,
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
                            (v.current = n),
                                n !== t.scrollLeft &&
                                    ((O.current = !0),
                                    (R.current = !0),
                                    t.addEventListener(
                                        "scrollend",
                                        () => {
                                            (O.current = !1), (R.current = !1);
                                        },
                                        { once: !0 },
                                    ),
                                    t.scrollTo({ left: n, behavior: w ? "auto" : "smooth" })),
                                (b.current = i),
                                (D.current = i),
                                j();
                        } else t.setAttribute("tabIndex", "0"), B();
                },
                onScroll: (e) => {
                    O.current || ((v.current = e.target.scrollLeft), H());
                },
                children: M,
            }),
        ],
    });
};
