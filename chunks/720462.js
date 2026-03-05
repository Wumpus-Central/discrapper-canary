"use strict";
n.d(t, { A: () => h });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    r = n.n(a),
    s = n(735438),
    c = n(311907),
    o = n(732955),
    d = n(770178),
    u = n(775602),
    m = n(985018),
    x = n(289752);
let h = (e) => {
    let {
            children: t,
            gap: n = 8,
            edgeFade: a = "xl",
            hideActionsWhenDisabled: h = !0,
            className: f,
            "aria-label": g,
        } = e,
        _ = l.useId(),
        p = l.useRef(0),
        v = l.useRef(0),
        I = l.useRef(0),
        j = l.useRef(!1),
        A = l.useRef(!1),
        E = l.useRef(null),
        b = (0, c.bG)([u.A], () => u.A.keyboardModeEnabled),
        N = (0, c.bG)([u.A], () => u.A.useReducedMotion),
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
        [S, T] = l.useState(!1),
        [L, k] = l.useState(!1),
        [G, y] = l.useState(!0),
        R = () => {
            T(v.current > p.current);
        },
        M = l.useCallback(() => {
            if (A.current) return;
            let e = D.current;
            if (null == e) return;
            let t = Math.floor((I.current + e.clientWidth / 2) / (e.scrollWidth / e.childElementCount));
            E.current = Math.max(0, Math.min(e.childElementCount - 1, t));
        }, []),
        w = l.useCallback(() => {
            let e = D.current;
            null != e && (k(I.current > 0), y(I.current + e.clientWidth < e.scrollWidth), M());
        }, [M]),
        O = l.useCallback(() => {
            let e = D.current;
            if (null == e) return;
            let t = E.current;
            Array.from(e.children).forEach((e, n) => {
                Array.from(e.children).forEach((e) => {
                    b && n !== t ? e.setAttribute("inert", "true") : e.removeAttribute("inert");
                });
            });
        }, [b]),
        P = (0, d.w)((e) => {
            let { contentRect: t } = e;
            (p.current = t.width), null != D.current && (I.current = D.current?.scrollLeft), R(), w(), O();
        }),
        D = l.useRef(null);
    l.useEffect(() => {
        let e = D.current;
        if (null == e) return;
        let t = new ResizeObserver(() => {
            (v.current = e.scrollWidth), e.scrollLeft !== I.current && (e.scrollLeft = I.current), R(), w();
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
            e.addEventListener("scrollend", w),
            () => {
                t.disconnect(), n.disconnect(), e.removeEventListener("scrollend", w);
            }
        );
    }, [w]);
    let V = l.useMemo(
            () =>
                (0, s.throttle)(() => {
                    let e = D.current;
                    if (null == e) return;
                    let { scrollLeft: t } = e,
                        n = Math.max(0, t - p.current);
                    (I.current = n),
                        (j.current = !0),
                        e.scrollTo({ left: n, behavior: N ? "auto" : "smooth" }),
                        e.addEventListener("scrollend", () => (j.current = !1), { once: !0 }),
                        w();
                }, 200),
            [p, w, N],
        ),
        W = l.useMemo(
            () =>
                (0, s.throttle)(() => {
                    let e = D.current;
                    if (null == e) return;
                    let { scrollLeft: t } = e,
                        n = t + p.current;
                    (I.current = n),
                        (j.current = !0),
                        e.scrollTo({ left: n, behavior: N ? "auto" : "smooth" }),
                        e.addEventListener("scrollend", () => (j.current = !1), { once: !0 }),
                        w();
                }, 200),
            [p, w, N],
        ),
        Y = l.useCallback(() => {
            let e = D.current;
            if (null == e) return !1;
            for (let t of e.children) if (t.contains(document.activeElement)) return !0;
            return !1;
        }, []),
        U = l.useCallback(() => {
            setTimeout(() => {
                if (!Y()) {
                    let e = D.current;
                    if (null != e) {
                        for (let t of (e.setAttribute("tabIndex", "0"), e.children)) t.setAttribute("tabIndex", "-1");
                        O();
                    }
                }
            }, 10);
        }, [Y, O]);
    l.useEffect(() => {
        O();
    }, [b, O]);
    let B = { "--custom-edge-fade-width": `var(--space-${a})` };
    return (0, i.jsxs)("div", {
        ref: P,
        role: null != g ? "region" : void 0,
        "aria-label": g,
        style: B,
        className: r()(x.kL, f),
        children: [
            S &&
                (0, i.jsxs)("div", {
                    className: x.o1,
                    role: "group",
                    children: [
                        (0, i.jsx)("div", {
                            className: r()(x.x6, { [x.r9]: !L && h }),
                            children: (0, i.jsx)(o.K0, {
                                icon: o.Zge,
                                variant: "overlay-secondary",
                                onClick: V,
                                disabled: !L,
                                "aria-label": m.intl.string(m.t.FQx1Ru),
                                "aria-hidden": !L && h,
                                "aria-controls": _,
                            }),
                        }),
                        (0, i.jsx)("div", {
                            className: r()(x.x6, { [x.r9]: !G && h }),
                            children: (0, i.jsx)(o.K0, {
                                icon: o.KS6,
                                variant: "overlay-secondary",
                                onClick: W,
                                disabled: !G,
                                "aria-label": m.intl.string(m.t.H4hwjn),
                                "aria-hidden": !G && h,
                                "aria-controls": _,
                            }),
                        }),
                    ],
                }),
            (0, i.jsx)(o.BJc, {
                direction: "horizontal",
                gap: n,
                id: _,
                "aria-label": g,
                ref: D,
                className: r()(x.Y_, { [x.jL]: L, [x.w6]: G, [x.XG]: L && G, [x.DY]: b }),
                tabIndex: 0,
                onFocus: (e) => {
                    let t = D.current;
                    if (null != t) {
                        if ((e.preventDefault(), M(), -1 !== t.tabIndex)) {
                            let e = E?.current ?? 0,
                                n = t.children[e];
                            null != n && (n.focus(), n.setAttribute("tabIndex", "0"), (E.current = e), O());
                        }
                        t.setAttribute("tabIndex", "-1");
                    }
                },
                onBlur: (e) => {
                    e.preventDefault(), U();
                },
                onKeyDown: (e) => {
                    let t = D.current;
                    if (null == t) return;
                    let n = t.children,
                        i = E.current ?? 0,
                        l = n[i];
                    null != l && l.setAttribute("tabIndex", "-1");
                    let a = ["ArrowLeft"],
                        r = ["ArrowRight"];
                    if ([...a, ...r].includes(e.key))
                        if (
                            (e.preventDefault(),
                            a.includes(e.key) && (i = Math.max(0, i - 1)),
                            r.includes(e.key) && (i = Math.min(t.childElementCount - 1, i + 1)),
                            null != (l = n[i]))
                        ) {
                            l.setAttribute("tabIndex", "0"),
                                t.setAttribute("tabIndex", "-1"),
                                l.focus({ preventScroll: !0 });
                            let e = l.offsetLeft - t.clientWidth / 2 + l.offsetWidth / 2,
                                n = Math.max(0, Math.min(t.scrollWidth - t.clientWidth, e));
                            (I.current = n),
                                n !== t.scrollLeft &&
                                    ((j.current = !0),
                                    (A.current = !0),
                                    t.scrollTo({ left: n, behavior: N ? "auto" : "smooth" }),
                                    t.addEventListener(
                                        "scrollend",
                                        () => {
                                            (j.current = !1), (A.current = !1);
                                        },
                                        { once: !0 },
                                    )),
                                (E.current = i),
                                O();
                        } else t.setAttribute("tabIndex", "0"), M();
                },
                onScroll: (e) => {
                    j.current || ((I.current = e.target.scrollLeft), w());
                },
                children: C,
            }),
        ],
    });
};
