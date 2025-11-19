n.d(t, { Z: () => f }), n(953529), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(392711),
    o = n(159691),
    s = n(393903),
    l = n(388032),
    c = n(704158);
let u = 200,
    d = (e) => null != e && "object" == typeof e && e.$$typeof === Symbol.for("react.portal"),
    f = (e) => {
        let { children: t, gap: n = 12 } = e,
            f = i.useRef(0),
            _ = i.useRef(0),
            p = i.useRef(0),
            h = i.useRef(!1),
            m = i.useRef(null),
            g = i.useMemo(
                () =>
                    i.Children.map(t, (e) => (!i.isValidElement(e) || d(e) ? e : i.cloneElement(e, { tabIndex: -1 }))),
                [t],
            ),
            [E, b] = i.useState(!1),
            [y, O] = i.useState(!1),
            [v, I] = i.useState(!0),
            T = () => {
                b(_.current > f.current);
            },
            S = i.useCallback(() => {
                let e = N.current;
                null != e &&
                    (m.current = Math.floor((p.current + e.clientWidth / 2) / (e.scrollWidth / e.childElementCount)));
            }, []),
            A = i.useCallback(() => {
                let e = N.current;
                null != e && (O(p.current > 0), I(p.current + e.clientWidth < e.scrollWidth), S());
            }, [S]),
            C = (0, s.y)((e) => {
                let { contentRect: t } = e;
                if (((f.current = t.width), null != N.current)) {
                    var n;
                    p.current = null == (n = N.current) ? void 0 : n.scrollLeft;
                }
                T(), A();
            }),
            N = i.useRef(null);
        i.useEffect(() => {
            let e = N.current;
            if (null == e) return;
            let t = new ResizeObserver(() => {
                (_.current = e.scrollWidth), T(), A();
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
                e.addEventListener("scrollend", A),
                () => {
                    t.disconnect(), n.disconnect(), e.removeEventListener("scrollend", A);
                }
            );
        }, [A]);
        let R = i.useMemo(
                () =>
                    (0, a.throttle)(() => {
                        let e = N.current;
                        if (null == e) return;
                        let { scrollLeft: t } = e,
                            n = Math.max(0, t - f.current);
                        (p.current = n),
                            (h.current = !0),
                            e.scrollTo({
                                left: n,
                                behavior: "smooth",
                            }),
                            e.addEventListener("scrollend", () => (h.current = !1), { once: !0 }),
                            A();
                    }, u),
                [f, A],
            ),
            P = i.useMemo(
                () =>
                    (0, a.throttle)(() => {
                        let e = N.current;
                        if (null == e) return;
                        let { scrollLeft: t } = e,
                            n = t + f.current;
                        (p.current = n),
                            (h.current = !0),
                            e.scrollTo({
                                left: n,
                                behavior: "smooth",
                            }),
                            e.addEventListener("scrollend", () => (h.current = !1), { once: !0 }),
                            A();
                    }, u),
                [f, A],
            ),
            D = i.useCallback(() => {
                let e = N.current;
                if (null == e) return !1;
                for (let t of e.children) {
                    let e = t;
                    if (document.activeElement === e) return !0;
                }
                return !1;
            }, []),
            w = () => {
                setTimeout(() => {
                    if (!D()) {
                        let e = N.current;
                        if (null != e)
                            for (let t of (e.setAttribute("tabIndex", "0"), e.children))
                                t.setAttribute("tabIndex", "-1");
                    }
                }, 10);
            };
        return (0, r.jsxs)("div", {
            ref: C,
            className: c.container,
            children: [
                E &&
                    (0, r.jsxs)("div", {
                        className: c.actions,
                        children: [
                            (0, r.jsx)(o.hU, {
                                icon: o.j9r,
                                variant: "overlay-secondary",
                                onClick: R,
                                disabled: !y,
                                "aria-label": l.intl.string(l.t.FQx1Ru),
                            }),
                            (0, r.jsx)(o.hU, {
                                icon: o.d4D,
                                variant: "overlay-secondary",
                                onClick: P,
                                disabled: !v,
                                "aria-label": l.intl.string(l.t.H4hwjn),
                            }),
                        ],
                    }),
                (0, r.jsx)("div", {
                    ref: N,
                    className: c.children,
                    style: { gap: n },
                    tabIndex: 0,
                    onFocus: (e) => {
                        let t = N.current;
                        if (null != t) {
                            if ((e.preventDefault(), -1 !== t.tabIndex)) {
                                var n;
                                let e = t.children[null != (n = null == m ? void 0 : m.current) ? n : 0];
                                null != e && (e.focus(), e.setAttribute("tabIndex", "0"));
                            }
                            t.setAttribute("tabIndex", "-1");
                        }
                    },
                    onBlur: (e) => {
                        e.preventDefault(), w();
                    },
                    onKeyDown: (e) => {
                        var t;
                        let n = N.current;
                        if (null == n) return;
                        let r = n.children,
                            i = null != (t = m.current) ? t : 0,
                            a = r[i];
                        null != a && a.setAttribute("tabIndex", "-1");
                        let o = ["ArrowLeft"],
                            s = ["ArrowRight"];
                        [...o, ...s].includes(e.key) &&
                            (e.preventDefault(),
                            o.includes(e.key) && (i = Math.max(0, i - 1)),
                            s.includes(e.key) && (i = Math.min(n.childElementCount - 1, i + 1)),
                            null != (a = r[i])
                                ? (a.setAttribute("tabIndex", "0"),
                                  n.setAttribute("tabIndex", "-1"),
                                  a.focus(),
                                  (m.current = i))
                                : (n.setAttribute("tabIndex", "0"), S()));
                    },
                    onScroll: (e) => {
                        h.current || ((p.current = e.target.scrollLeft), A());
                    },
                    children: g,
                }),
            ],
        });
    };
