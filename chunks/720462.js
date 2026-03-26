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
    _ = n(721473);
let f = (e) => {
    let {
            children: t,
            gap: n = 24,
            edgeFade: a = "xl",
            hideActionsWhenDisabled: f = !0,
            className: m,
            iconButtonSize: p,
            "aria-label": b,
        } = e,
        y = i.useId(),
        v = i.useRef(0),
        g = i.useRef(0),
        x = i.useRef(0),
        E = i.useRef(!1),
        A = i.useRef(!1),
        S = i.useRef(null),
        N = (0, o.bG)([d.A], () => d.A.keyboardModeEnabled),
        C = (0, o.bG)([d.A], () => d.A.useReducedMotion),
        j = i.useMemo(
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
        [I, T] = i.useState(!1),
        [R, k] = i.useState(!1),
        [w, L] = i.useState(!0),
        D = () => {
            T(g.current > v.current);
        },
        O = i.useCallback(() => {
            if (A.current) return;
            let e = B.current;
            if (null == e) return;
            let t = Math.floor((x.current + e.clientWidth / 2) / (e.scrollWidth / e.childElementCount));
            S.current = Math.max(0, Math.min(e.childElementCount - 1, t));
        }, []),
        M = i.useCallback(() => {
            let e = B.current;
            null != e && (k(x.current > 0), L(x.current + e.clientWidth < e.scrollWidth), O());
        }, [O]),
        U = i.useCallback(() => {
            let e = B.current;
            if (null == e) return;
            let t = S.current;
            Array.from(e.children).forEach((e, n) => {
                Array.from(e.children).forEach((e) => {
                    N && n !== t ? e.setAttribute("inert", "true") : e.removeAttribute("inert");
                });
            });
        }, [N]),
        P = (0, u.w)((e) => {
            let { contentRect: t } = e;
            (v.current = t.width), null != B.current && (x.current = B.current?.scrollLeft), D(), M(), U();
        }),
        B = i.useRef(null);
    i.useEffect(() => {
        let e = B.current;
        if (null == e) return;
        let t = new ResizeObserver(() => {
            (g.current = e.scrollWidth), e.scrollLeft !== x.current && (e.scrollLeft = x.current), D(), M();
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
    let F = i.useMemo(
            () =>
                (0, s.throttle)(() => {
                    let e = B.current;
                    if (null == e) return;
                    let { scrollLeft: t } = e,
                        n = Math.max(0, t - v.current);
                    (x.current = n),
                        (E.current = !0),
                        e.scrollTo({ left: n, behavior: C ? "auto" : "smooth" }),
                        e.addEventListener("scrollend", () => (E.current = !1), { once: !0 }),
                        M();
                }, 200),
            [v, M, C],
        ),
        G = i.useMemo(
            () =>
                (0, s.throttle)(() => {
                    let e = B.current;
                    if (null == e) return;
                    let { scrollLeft: t } = e,
                        n = t + v.current;
                    (x.current = n),
                        (E.current = !0),
                        e.scrollTo({ left: n, behavior: C ? "auto" : "smooth" }),
                        e.addEventListener("scrollend", () => (E.current = !1), { once: !0 }),
                        M();
                }, 200),
            [v, M, C],
        ),
        K = i.useCallback(() => {
            let e = B.current;
            if (null == e) return !1;
            for (let t of e.children) if (t.contains(document.activeElement)) return !0;
            return !1;
        }, []),
        z = i.useCallback(() => {
            setTimeout(() => {
                if (!K()) {
                    let e = B.current;
                    if (null != e) {
                        for (let t of (e.setAttribute("tabIndex", "0"), e.children)) t.setAttribute("tabIndex", "-1");
                        U();
                    }
                }
            }, 10);
        }, [K, U]);
    i.useEffect(() => {
        U();
    }, [N, U]);
    let W = { "--custom-edge-fade-width": `var(--space-${a})` };
    return (0, r.jsxs)("div", {
        ref: P,
        role: null != b ? "region" : void 0,
        "aria-label": b,
        style: W,
        className: l()(_.kL, m),
        children: [
            I &&
                (0, r.jsxs)("div", {
                    className: _.o1,
                    role: "group",
                    children: [
                        (0, r.jsx)("div", {
                            className: l()(_.x6, { [_.r9]: !R && f }),
                            children: (0, r.jsx)(c.K0, {
                                icon: c.Zge,
                                size: p,
                                variant: "overlay-secondary",
                                onClick: F,
                                disabled: !R,
                                "aria-label": h.intl.string(h.t.FQx1Ru),
                                "aria-hidden": !R && f,
                                "aria-controls": y,
                            }),
                        }),
                        (0, r.jsx)("div", {
                            className: l()(_.x6, { [_.r9]: !w && f }),
                            children: (0, r.jsx)(c.K0, {
                                icon: c.KS6,
                                size: p,
                                variant: "overlay-secondary",
                                onClick: G,
                                disabled: !w,
                                "aria-label": h.intl.string(h.t.H4hwjn),
                                "aria-hidden": !w && f,
                                "aria-controls": y,
                            }),
                        }),
                    ],
                }),
            (0, r.jsx)(c.BJc, {
                direction: "horizontal",
                gap: n,
                id: y,
                "aria-label": b,
                ref: B,
                className: l()(_.Y_, { [_.jL]: R, [_.w6]: w, [_.XG]: R && w, [_.DY]: N }),
                tabIndex: 0,
                onFocus: (e) => {
                    let t = B.current;
                    if (null != t) {
                        if ((e.preventDefault(), O(), -1 !== t.tabIndex)) {
                            let e = S?.current ?? 0,
                                n = t.children[e];
                            null != n && (n.focus(), n.setAttribute("tabIndex", "0"), (S.current = e), U());
                        }
                        t.setAttribute("tabIndex", "-1");
                    }
                },
                onBlur: (e) => {
                    e.preventDefault(), z();
                },
                onKeyDown: (e) => {
                    let t = B.current;
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
                            (x.current = n),
                                n !== t.scrollLeft &&
                                    ((E.current = !0),
                                    (A.current = !0),
                                    t.scrollTo({ left: n, behavior: C ? "auto" : "smooth" }),
                                    t.addEventListener(
                                        "scrollend",
                                        () => {
                                            (E.current = !1), (A.current = !1);
                                        },
                                        { once: !0 },
                                    )),
                                (S.current = r),
                                U();
                        } else t.setAttribute("tabIndex", "0"), O();
                },
                onScroll: (e) => {
                    E.current || ((x.current = e.target.scrollLeft), M());
                },
                children: j,
            }),
        ],
    });
};
