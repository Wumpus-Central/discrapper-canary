n.d(t, { Z: () => h }), n(953529), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(392711),
    l = n(159691),
    c = n(393903),
    u = n(388032),
    d = n(968413);
let f = 200,
    _ = (e) => "var(--space-".concat(e, ")"),
    p = (e) => null != e && "object" == typeof e && e.$$typeof === Symbol.for("react.portal"),
    h = (e) => {
        let { children: t, gap: n = 8, edgeFade: a = "xl" } = e,
            h = i.useRef(0),
            m = i.useRef(0),
            g = i.useRef(0),
            E = i.useRef(!1),
            b = i.useRef(null),
            y = i.useMemo(
                () =>
                    i.Children.map(t, (e) => (!i.isValidElement(e) || p(e) ? e : i.cloneElement(e, { tabIndex: -1 }))),
                [t],
            ),
            [O, v] = i.useState(!1),
            [I, T] = i.useState(!1),
            [S, A] = i.useState(!0),
            C = () => {
                v(m.current > h.current);
            },
            N = i.useCallback(() => {
                let e = D.current;
                null != e &&
                    (b.current = Math.floor((g.current + e.clientWidth / 2) / (e.scrollWidth / e.childElementCount)));
            }, []),
            R = i.useCallback(() => {
                let e = D.current;
                null != e && (T(g.current > 0), A(g.current + e.clientWidth < e.scrollWidth), N());
            }, [N]),
            P = (0, c.y)((e) => {
                let { contentRect: t } = e;
                if (((h.current = t.width), null != D.current)) {
                    var n;
                    g.current = null == (n = D.current) ? void 0 : n.scrollLeft;
                }
                C(), R();
            }),
            D = i.useRef(null);
        i.useEffect(() => {
            let e = D.current;
            if (null == e) return;
            let t = new ResizeObserver(() => {
                (m.current = e.scrollWidth), C(), R();
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
                e.addEventListener("scrollend", R),
                () => {
                    t.disconnect(), n.disconnect(), e.removeEventListener("scrollend", R);
                }
            );
        }, [R]);
        let w = i.useMemo(
                () =>
                    (0, s.throttle)(() => {
                        let e = D.current;
                        if (null == e) return;
                        let { scrollLeft: t } = e,
                            n = Math.max(0, t - h.current);
                        (g.current = n),
                            (E.current = !0),
                            e.scrollTo({
                                left: n,
                                behavior: "smooth",
                            }),
                            e.addEventListener("scrollend", () => (E.current = !1), { once: !0 }),
                            R();
                    }, f),
                [h, R],
            ),
            L = i.useMemo(
                () =>
                    (0, s.throttle)(() => {
                        let e = D.current;
                        if (null == e) return;
                        let { scrollLeft: t } = e,
                            n = t + h.current;
                        (g.current = n),
                            (E.current = !0),
                            e.scrollTo({
                                left: n,
                                behavior: "smooth",
                            }),
                            e.addEventListener("scrollend", () => (E.current = !1), { once: !0 }),
                            R();
                    }, f),
                [h, R],
            ),
            x = i.useCallback(() => {
                let e = D.current;
                if (null == e) return !1;
                for (let t of e.children) {
                    let e = t;
                    if (document.activeElement === e) return !0;
                }
                return !1;
            }, []),
            M = () => {
                setTimeout(() => {
                    if (!x()) {
                        let e = D.current;
                        if (null != e)
                            for (let t of (e.setAttribute("tabIndex", "0"), e.children))
                                t.setAttribute("tabIndex", "-1");
                    }
                }, 10);
            },
            j = { "--custom-edge-fade-width": _(a) };
        return (0, r.jsxs)("div", {
            ref: P,
            style: j,
            className: o()(d.container, {
                [d.scrollLeft]: I,
                [d.scrollRight]: S,
                [d.scrollBoth]: I && S,
            }),
            children: [
                O &&
                    (0, r.jsxs)("div", {
                        className: d.actions,
                        children: [
                            (0, r.jsx)(l.hU, {
                                icon: l.j9r,
                                variant: "overlay-secondary",
                                onClick: w,
                                disabled: !I,
                                "aria-label": u.intl.string(u.t.FQx1Ru),
                            }),
                            (0, r.jsx)(l.hU, {
                                icon: l.d4D,
                                variant: "overlay-secondary",
                                onClick: L,
                                disabled: !S,
                                "aria-label": u.intl.string(u.t.H4hwjn),
                            }),
                        ],
                    }),
                (0, r.jsx)(l.Kqy, {
                    direction: "horizontal",
                    gap: n,
                    ref: D,
                    className: d.children,
                    tabIndex: 0,
                    onFocus: (e) => {
                        let t = D.current;
                        if (null != t) {
                            if ((e.preventDefault(), -1 !== t.tabIndex)) {
                                var n;
                                let e = t.children[null != (n = null == b ? void 0 : b.current) ? n : 0];
                                null != e && (e.focus(), e.setAttribute("tabIndex", "0"));
                            }
                            t.setAttribute("tabIndex", "-1");
                        }
                    },
                    onBlur: (e) => {
                        e.preventDefault(), M();
                    },
                    onKeyDown: (e) => {
                        var t;
                        let n = D.current;
                        if (null == n) return;
                        let r = n.children,
                            i = null != (t = b.current) ? t : 0,
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
                                  (b.current = i))
                                : (n.setAttribute("tabIndex", "0"), N()));
                    },
                    onScroll: (e) => {
                        E.current || ((g.current = e.target.scrollLeft), R());
                    },
                    children: y,
                }),
            ],
        });
    };
