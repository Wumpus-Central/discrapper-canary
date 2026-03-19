"use strict";
n.d(t, { A: () => f });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    l = n.n(a),
    s = n(735438),
    o = n(311907),
    c = n(732955),
    u = n(770178),
    d = n(775602),
    h = n(985018),
    _ = n(970206);
let f = (e) => {
    let {
            children: t,
            gap: n = 24,
            edgeFade: a = "xl",
            hideActionsWhenDisabled: f = !0,
            className: m,
            "aria-label": p,
        } = e,
        b = i.useId(),
        y = i.useRef(0),
        g = i.useRef(0),
        v = i.useRef(0),
        x = i.useRef(!1),
        E = i.useRef(!1),
        S = i.useRef(null),
        A = (0, o.bG)([d.A], () => d.A.keyboardModeEnabled),
        N = (0, o.bG)([d.A], () => d.A.useReducedMotion),
        C = i.useMemo(
            () =>
                i.Children.map(t, (e) =>
                    i.isValidElement(e)
                        ? null != e && "object" == typeof e && e.$$typeof === Symbol.for("react.portal")
                            ? e
                            : i.cloneElement(e, { tabIndex: -1 })
                        : e,
                ),
            [t],
        ),
        [j, I] = i.useState(!1),
        [T, R] = i.useState(!1),
        [k, w] = i.useState(!0),
        L = () => {
            I(g.current > y.current);
        },
        D = i.useCallback(() => {
            if (E.current) return;
            let e = U.current;
            if (null == e) return;
            let t = Math.floor((v.current + e.clientWidth / 2) / (e.scrollWidth / e.childElementCount));
            S.current = Math.max(0, Math.min(e.childElementCount - 1, t));
        }, []),
        O = i.useCallback(() => {
            let e = U.current;
            null != e && (R(v.current > 0), w(v.current + e.clientWidth < e.scrollWidth), D());
        }, [D]),
        M = i.useCallback(() => {
            let e = U.current;
            if (null == e) return;
            let t = S.current;
            Array.from(e.children).forEach((e, n) => {
                Array.from(e.children).forEach((e) => {
                    A && n !== t ? e.setAttribute("inert", "true") : e.removeAttribute("inert");
                });
            });
        }, [A]),
        P = (0, u.w)((e) => {
            let { contentRect: t } = e;
            (y.current = t.width), null != U.current && (v.current = U.current?.scrollLeft), L(), O(), M();
        }),
        U = i.useRef(null);
    i.useEffect(() => {
        let e = U.current;
        if (null == e) return;
        let t = new ResizeObserver(() => {
            (g.current = e.scrollWidth), e.scrollLeft !== v.current && (e.scrollLeft = v.current), L(), O();
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
            e.addEventListener("scrollend", O),
            () => {
                t.disconnect(), n.disconnect(), e.removeEventListener("scrollend", O);
            }
        );
    }, [O]);
    let B = i.useMemo(
            () =>
                (0, s.throttle)(() => {
                    let e = U.current;
                    if (null == e) return;
                    let { scrollLeft: t } = e,
                        n = Math.max(0, t - y.current);
                    (v.current = n),
                        (x.current = !0),
                        e.scrollTo({ left: n, behavior: N ? "auto" : "smooth" }),
                        e.addEventListener("scrollend", () => (x.current = !1), { once: !0 }),
                        O();
                }, 200),
            [y, O, N],
        ),
        G = i.useMemo(
            () =>
                (0, s.throttle)(() => {
                    let e = U.current;
                    if (null == e) return;
                    let { scrollLeft: t } = e,
                        n = t + y.current;
                    (v.current = n),
                        (x.current = !0),
                        e.scrollTo({ left: n, behavior: N ? "auto" : "smooth" }),
                        e.addEventListener("scrollend", () => (x.current = !1), { once: !0 }),
                        O();
                }, 200),
            [y, O, N],
        ),
        F = i.useCallback(() => {
            let e = U.current;
            if (null == e) return !1;
            for (let t of e.children) if (t.contains(document.activeElement)) return !0;
            return !1;
        }, []),
        K = i.useCallback(() => {
            setTimeout(() => {
                if (!F()) {
                    let e = U.current;
                    if (null != e) {
                        for (let t of (e.setAttribute("tabIndex", "0"), e.children)) t.setAttribute("tabIndex", "-1");
                        M();
                    }
                }
            }, 10);
        }, [F, M]);
    i.useEffect(() => {
        M();
    }, [A, M]);
    let z = { "--custom-edge-fade-width": `var(--space-${a})` };
    return (0, r.jsxs)("div", {
        ref: P,
        role: null != p ? "region" : void 0,
        "aria-label": p,
        style: z,
        className: l()(_.kL, m),
        children: [
            j &&
                (0, r.jsxs)("div", {
                    className: _.o1,
                    role: "group",
                    children: [
                        (0, r.jsx)("div", {
                            className: l()(_.x6, { [_.r9]: !T && f }),
                            children: (0, r.jsx)(c.K0, {
                                icon: c.Zge,
                                variant: "overlay-secondary",
                                onClick: B,
                                disabled: !T,
                                "aria-label": h.intl.string(h.t.FQx1Ru),
                                "aria-hidden": !T && f,
                                "aria-controls": b,
                            }),
                        }),
                        (0, r.jsx)("div", {
                            className: l()(_.x6, { [_.r9]: !k && f }),
                            children: (0, r.jsx)(c.K0, {
                                icon: c.KS6,
                                variant: "overlay-secondary",
                                onClick: G,
                                disabled: !k,
                                "aria-label": h.intl.string(h.t.H4hwjn),
                                "aria-hidden": !k && f,
                                "aria-controls": b,
                            }),
                        }),
                    ],
                }),
            (0, r.jsx)(c.BJc, {
                direction: "horizontal",
                gap: n,
                id: b,
                "aria-label": p,
                ref: U,
                className: l()(_.Y_, { [_.jL]: T, [_.w6]: k, [_.XG]: T && k, [_.DY]: A }),
                tabIndex: 0,
                onFocus: (e) => {
                    let t = U.current;
                    if (null != t) {
                        if ((e.preventDefault(), D(), -1 !== t.tabIndex)) {
                            let e = S?.current ?? 0,
                                n = t.children[e];
                            null != n && (n.focus(), n.setAttribute("tabIndex", "0"), (S.current = e), M());
                        }
                        t.setAttribute("tabIndex", "-1");
                    }
                },
                onBlur: (e) => {
                    e.preventDefault(), K();
                },
                onKeyDown: (e) => {
                    let t = U.current;
                    if (null == t) return;
                    let n = t.children,
                        r = S.current ?? 0,
                        i = n[r];
                    null != i && i.setAttribute("tabIndex", "-1");
                    let a = ["ArrowLeft"],
                        l = ["ArrowRight"];
                    if ([...a, ...l].includes(e.key))
                        if (
                            (e.preventDefault(),
                            a.includes(e.key) && (r = Math.max(0, r - 1)),
                            l.includes(e.key) && (r = Math.min(t.childElementCount - 1, r + 1)),
                            null != (i = n[r]))
                        ) {
                            i.setAttribute("tabIndex", "0"),
                                t.setAttribute("tabIndex", "-1"),
                                i.focus({ preventScroll: !0 });
                            let e = i.offsetLeft - t.clientWidth / 2 + i.offsetWidth / 2,
                                n = Math.max(0, Math.min(t.scrollWidth - t.clientWidth, e));
                            (v.current = n),
                                n !== t.scrollLeft &&
                                    ((x.current = !0),
                                    (E.current = !0),
                                    t.scrollTo({ left: n, behavior: N ? "auto" : "smooth" }),
                                    t.addEventListener(
                                        "scrollend",
                                        () => {
                                            (x.current = !1), (E.current = !1);
                                        },
                                        { once: !0 },
                                    )),
                                (S.current = r),
                                M();
                        } else t.setAttribute("tabIndex", "0"), D();
                },
                onScroll: (e) => {
                    x.current || ((v.current = e.target.scrollLeft), O());
                },
                children: C,
            }),
        ],
    });
};
