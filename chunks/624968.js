n.d(t, { Z: () => d }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(392711),
    o = n(159691),
    s = n(393903),
    l = n(388032),
    c = n(704158);
let u = 200,
    d = (e) => {
        let { children: t, gap: n = 12 } = e,
            d = i.useRef(0),
            f = i.useRef(0),
            _ = i.useRef(0),
            p = i.useRef(!1),
            [h, m] = i.useState(!1),
            [g, E] = i.useState(!1),
            [b, y] = i.useState(!0),
            O = () => {
                m(f.current > d.current);
            },
            v = () => {
                let e = T.current;
                null != e && (E(_.current > 0), y(_.current + e.clientWidth < e.scrollWidth));
            },
            I = (0, s.y)((e) => {
                let { contentRect: t } = e;
                if (((d.current = t.width), null != T.current)) {
                    var n;
                    _.current = null == (n = T.current) ? void 0 : n.scrollLeft;
                }
                O(), v();
            }),
            T = i.useRef(null);
        i.useEffect(() => {
            let e = T.current;
            if (null == e) return;
            let t = new ResizeObserver(() => {
                (f.current = e.scrollWidth), O(), v();
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
                e.addEventListener("scrollend", v),
                () => {
                    t.disconnect(), n.disconnect(), e.removeEventListener("scrollend", v);
                }
            );
        }, []);
        let S = i.useMemo(
                () =>
                    (0, a.throttle)(() => {
                        let e = T.current;
                        if (null == e) return;
                        let { scrollLeft: t } = e,
                            n = Math.max(0, t - d.current);
                        (_.current = n),
                            (p.current = !0),
                            e.scrollTo({
                                left: n,
                                behavior: "smooth",
                            }),
                            e.addEventListener("scrollend", () => (p.current = !1), { once: !0 }),
                            v();
                    }, u),
                [d],
            ),
            A = i.useMemo(
                () =>
                    (0, a.throttle)(() => {
                        let e = T.current;
                        if (null == e) return;
                        let { scrollLeft: t } = e,
                            n = t + d.current;
                        (_.current = n),
                            (p.current = !0),
                            e.scrollTo({
                                left: n,
                                behavior: "smooth",
                            }),
                            e.addEventListener("scrollend", () => (p.current = !1), { once: !0 }),
                            v();
                    }, u),
                [d],
            );
        return (0, r.jsxs)("div", {
            ref: I,
            className: c.container,
            children: [
                (0, r.jsx)("div", {
                    ref: T,
                    className: c.children,
                    style: { gap: n },
                    onScroll: (e) => {
                        p.current || ((_.current = e.target.scrollLeft), v());
                    },
                    children: t,
                }),
                h &&
                    (0, r.jsxs)("div", {
                        className: c.actions,
                        children: [
                            (0, r.jsx)(o.hU, {
                                icon: o.j9r,
                                variant: "overlay-secondary",
                                onClick: S,
                                disabled: !g,
                                "aria-label": l.intl.string(l.t.FQx1Ru),
                            }),
                            (0, r.jsx)(o.hU, {
                                icon: o.d4D,
                                variant: "overlay-secondary",
                                onClick: A,
                                disabled: !b,
                                "aria-label": l.intl.string(l.t.H4hwjn),
                            }),
                        ],
                    }),
            ],
        });
    };
