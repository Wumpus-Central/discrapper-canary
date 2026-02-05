"use strict";
n.d(t, { A: () => g });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(735438),
    l = n(311907),
    u = n(732955),
    c = n(770178),
    d = n(775602),
    _ = n(985018),
    f = n(289752);
let p = 200,
    h = (e) => `var(--space-${e})`,
    m = (e) => null != e && "object" == typeof e && e.$$typeof === Symbol.for("react.portal"),
    g = (e) => {
        let { children: t, gap: n = 8, edgeFade: a = "xl", hideActionsWhenDisabled: g = !0 } = e,
            E = i.useRef(0),
            A = i.useRef(0),
            I = i.useRef(0),
            T = i.useRef(!1),
            y = i.useRef(null),
            S = (0, l.bG)([d.A], () => d.A.keyboardModeEnabled),
            v = i.useMemo(
                () =>
                    i.Children.map(t, (e) => (!i.isValidElement(e) || m(e) ? e : i.cloneElement(e, { tabIndex: -1 }))),
                [t],
            ),
            [C, b] = i.useState(!1),
            [N, R] = i.useState(!1),
            [O, D] = i.useState(!0),
            L = () => {
                b(A.current > E.current);
            },
            w = i.useCallback(() => {
                let e = k.current;
                null == e ||
                    (y.current = Math.floor((I.current + e.clientWidth / 2) / (e.scrollWidth / e.childElementCount)));
            }, []),
            x = i.useCallback(() => {
                let e = k.current;
                null != e && (R(I.current > 0), D(I.current + e.clientWidth < e.scrollWidth), w());
            }, [w]),
            P = i.useCallback(() => {
                let e = k.current;
                if (null == e) return;
                let t = y.current;
                Array.from(e.children).forEach((e, n) => {
                    Array.from(e.children).forEach((e) => {
                        let r = e;
                        S && n !== t ? r.setAttribute("inert", "true") : r.removeAttribute("inert");
                    });
                });
            }, [S]),
            M = (0, c.w)((e) => {
                let { contentRect: t } = e;
                (E.current = t.width), null != k.current && (I.current = k.current?.scrollLeft), L(), x(), P();
            }),
            k = i.useRef(null);
        i.useEffect(() => {
            let e = k.current;
            if (null == e) return;
            let t = new ResizeObserver(() => {
                (A.current = e.scrollWidth), L(), x();
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
                e.addEventListener("scrollend", x),
                () => {
                    t.disconnect(), n.disconnect(), e.removeEventListener("scrollend", x);
                }
            );
        }, [x]);
        let U = i.useMemo(
                () =>
                    (0, o.throttle)(() => {
                        let e = k.current;
                        if (null == e) return;
                        let { scrollLeft: t } = e,
                            n = Math.max(0, t - E.current);
                        (I.current = n),
                            (T.current = !0),
                            e.scrollTo({ left: n, behavior: "smooth" }),
                            e.addEventListener("scrollend", () => (T.current = !1), { once: !0 }),
                            x();
                    }, p),
                [E, x],
            ),
            G = i.useMemo(
                () =>
                    (0, o.throttle)(() => {
                        let e = k.current;
                        if (null == e) return;
                        let { scrollLeft: t } = e,
                            n = t + E.current;
                        (I.current = n),
                            (T.current = !0),
                            e.scrollTo({ left: n, behavior: "smooth" }),
                            e.addEventListener("scrollend", () => (T.current = !1), { once: !0 }),
                            x();
                    }, p),
                [E, x],
            ),
            V = i.useCallback(() => {
                let e = k.current;
                if (null == e) return !1;
                for (let t of e.children) if (t.contains(document.activeElement)) return !0;
                return !1;
            }, []),
            F = i.useCallback(() => {
                setTimeout(() => {
                    if (!V()) {
                        let e = k.current;
                        if (null != e) {
                            for (let t of (e.setAttribute("tabIndex", "0"), e.children))
                                t.setAttribute("tabIndex", "-1");
                            P();
                        }
                    }
                }, 10);
            }, [V, P]);
        i.useEffect(() => {
            P();
        }, [S, P]);
        let B = { "--custom-edge-fade-width": h(a) };
        return (0, r.jsxs)("div", {
            ref: M,
            style: B,
            className: f.kL,
            children: [
                C &&
                    (0, r.jsxs)("div", {
                        className: f.o1,
                        children: [
                            (0, r.jsx)("div", {
                                className: s()(f.x6, { [f.r9]: !N && g }),
                                children: (0, r.jsx)(u.K0, {
                                    icon: u.Zge,
                                    variant: "overlay-secondary",
                                    onClick: U,
                                    disabled: !N,
                                    "aria-label": _.intl.string(_.t.FQx1Ru),
                                    "aria-hidden": !N && g,
                                }),
                            }),
                            (0, r.jsx)("div", {
                                className: s()(f.x6, { [f.r9]: !O && g }),
                                children: (0, r.jsx)(u.K0, {
                                    icon: u.KS6,
                                    variant: "overlay-secondary",
                                    onClick: G,
                                    disabled: !O,
                                    "aria-label": _.intl.string(_.t.H4hwjn),
                                    "aria-hidden": !O && g,
                                }),
                            }),
                        ],
                    }),
                (0, r.jsx)(u.BJc, {
                    direction: "horizontal",
                    gap: n,
                    ref: k,
                    className: s()(f.Y_, { [f.jL]: N, [f.w6]: O, [f.XG]: N && O }),
                    tabIndex: 0,
                    onFocus: (e) => {
                        let t = k.current;
                        if (null != t) {
                            if ((e.preventDefault(), -1 !== t.tabIndex)) {
                                let e = t.children[y?.current ?? 0];
                                null != e && (e.focus(), e.setAttribute("tabIndex", "0"), (y.current = 0), P());
                            }
                            t.setAttribute("tabIndex", "-1");
                        }
                    },
                    onBlur: (e) => {
                        e.preventDefault(), F();
                    },
                    onKeyDown: (e) => {
                        let t = k.current;
                        if (null == t) return;
                        let n = t.children,
                            r = y.current ?? 0,
                            i = n[r];
                        null != i && i.setAttribute("tabIndex", "-1");
                        let a = ["ArrowLeft"],
                            s = ["ArrowRight"];
                        [...a, ...s].includes(e.key) &&
                            (e.preventDefault(),
                            a.includes(e.key) && (r = Math.max(0, r - 1)),
                            s.includes(e.key) && (r = Math.min(t.childElementCount - 1, r + 1)),
                            null != (i = n[r])
                                ? (i.setAttribute("tabIndex", "0"),
                                  t.setAttribute("tabIndex", "-1"),
                                  i.focus(),
                                  (y.current = r),
                                  P())
                                : (t.setAttribute("tabIndex", "0"), w()));
                    },
                    onScroll: (e) => {
                        T.current || ((I.current = e.target.scrollLeft), x());
                    },
                    children: v,
                }),
            ],
        });
    };
