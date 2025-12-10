n.d(t, { Z: () => m }), n(953529), n(388685);
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
    p = (e) => "var(--space-".concat(e, ")"),
    _ = (e) => null != e && "object" == typeof e && e.$$typeof === Symbol.for("react.portal"),
    m = (e) => {
        let { children: t, gap: n = 8, edgeFade: a = "xl", hideActionsWhenDisabled: m = !0 } = e,
            h = i.useRef(0),
            g = i.useRef(0),
            E = i.useRef(0),
            b = i.useRef(!1),
            y = i.useRef(null),
            O = i.useMemo(
                () =>
                    i.Children.map(t, (e) => (!i.isValidElement(e) || _(e) ? e : i.cloneElement(e, { tabIndex: -1 }))),
                [t],
            ),
            [v, S] = i.useState(!1),
            [I, T] = i.useState(!1),
            [C, A] = i.useState(!0),
            N = () => {
                S(g.current > h.current);
            },
            P = i.useCallback(() => {
                let e = w.current;
                null != e &&
                    (y.current = Math.floor((E.current + e.clientWidth / 2) / (e.scrollWidth / e.childElementCount)));
            }, []),
            R = i.useCallback(() => {
                let e = w.current;
                null != e && (T(E.current > 0), A(E.current + e.clientWidth < e.scrollWidth), P());
            }, [P]),
            D = (0, c.y)((e) => {
                let { contentRect: t } = e;
                if (((h.current = t.width), null != w.current)) {
                    var n;
                    E.current = null == (n = w.current) ? void 0 : n.scrollLeft;
                }
                N(), R();
            }),
            w = i.useRef(null);
        i.useEffect(() => {
            let e = w.current;
            if (null == e) return;
            let t = new ResizeObserver(() => {
                (g.current = e.scrollWidth), N(), R();
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
        let x = i.useMemo(
                () =>
                    (0, s.throttle)(() => {
                        let e = w.current;
                        if (null == e) return;
                        let { scrollLeft: t } = e,
                            n = Math.max(0, t - h.current);
                        (E.current = n),
                            (b.current = !0),
                            e.scrollTo({
                                left: n,
                                behavior: "smooth",
                            }),
                            e.addEventListener("scrollend", () => (b.current = !1), { once: !0 }),
                            R();
                    }, f),
                [h, R],
            ),
            L = i.useMemo(
                () =>
                    (0, s.throttle)(() => {
                        let e = w.current;
                        if (null == e) return;
                        let { scrollLeft: t } = e,
                            n = t + h.current;
                        (E.current = n),
                            (b.current = !0),
                            e.scrollTo({
                                left: n,
                                behavior: "smooth",
                            }),
                            e.addEventListener("scrollend", () => (b.current = !1), { once: !0 }),
                            R();
                    }, f),
                [h, R],
            ),
            j = i.useCallback(() => {
                let e = w.current;
                if (null == e) return !1;
                for (let t of e.children) {
                    let e = t;
                    if (document.activeElement === e) return !0;
                }
                return !1;
            }, []),
            M = () => {
                setTimeout(() => {
                    if (!j()) {
                        let e = w.current;
                        if (null != e)
                            for (let t of (e.setAttribute("tabIndex", "0"), e.children))
                                t.setAttribute("tabIndex", "-1");
                    }
                }, 10);
            },
            k = { "--custom-edge-fade-width": p(a) };
        return (0, r.jsxs)("div", {
            ref: D,
            style: k,
            className: d.container,
            children: [
                v &&
                    (0, r.jsxs)("div", {
                        className: d.actions,
                        children: [
                            (0, r.jsx)("div", {
                                className: o()(d.button, { [d.disabled]: !I && m }),
                                children: (0, r.jsx)(l.hU, {
                                    icon: l.j9r,
                                    variant: "overlay-secondary",
                                    onClick: x,
                                    disabled: !I,
                                    "aria-label": u.intl.string(u.t.FQx1Ru),
                                    "aria-hidden": !I && m,
                                }),
                            }),
                            (0, r.jsx)("div", {
                                className: o()(d.button, { [d.disabled]: !C && m }),
                                children: (0, r.jsx)(l.hU, {
                                    icon: l.d4D,
                                    variant: "overlay-secondary",
                                    onClick: L,
                                    disabled: !C,
                                    "aria-label": u.intl.string(u.t.H4hwjn),
                                    "aria-hidden": !C && m,
                                }),
                            }),
                        ],
                    }),
                (0, r.jsx)(l.Kqy, {
                    direction: "horizontal",
                    gap: n,
                    ref: w,
                    className: o()(d.children, {
                        [d.scrollLeft]: I,
                        [d.scrollRight]: C,
                        [d.scrollBoth]: I && C,
                    }),
                    tabIndex: 0,
                    onFocus: (e) => {
                        let t = w.current;
                        if (null != t) {
                            if ((e.preventDefault(), -1 !== t.tabIndex)) {
                                var n;
                                let e = t.children[null != (n = null == y ? void 0 : y.current) ? n : 0];
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
                        let n = w.current;
                        if (null == n) return;
                        let r = n.children,
                            i = null != (t = y.current) ? t : 0,
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
                                  (y.current = i))
                                : (n.setAttribute("tabIndex", "0"), P()));
                    },
                    onScroll: (e) => {
                        b.current || ((E.current = e.target.scrollLeft), R());
                    },
                    children: O,
                }),
            ],
        });
    };
