"use strict";
n.d(t, { A: () => _ });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    l = n.n(a),
    s = n(284009),
    o = n.n(s),
    u = n(380278),
    c = n(942381),
    d = n(837381),
    h = n(397927),
    f = n(775602),
    m = n(253932),
    g = n(894858),
    v = n(272053),
    p = n(890690),
    y = n(652099);
function x(e) {
    let { category: t, onClick: n, active: i } = e,
        { useTitle: a, useSubnavLabel: s, key: u } = t,
        c = a?.(),
        f = s?.() ?? c;
    return (
        o()(null != f, "[SettingsSubnavigationCategory] Category must have a title"),
        (0, r.jsx)(d.tG, {
            id: u,
            children: (e) =>
                (0, r.jsx)(h.DUT, { onClick: n, className: l()(y.AS, { [y.vu]: i }), ...e, children: f }, u),
        })
    );
}
function _(e) {
    let { categories: t } = e,
        [n, a] = i.useState(() => {
            let e = g.A.getField("currentCategoryKey"),
                n = t.find((t) => t.key === e);
            return n?.key ?? t[0].key;
        });
    i.useEffect(
        () =>
            g.A.subscribe(
                (e) => {
                    let { currentCategoryKey: t } = e;
                    return t;
                },
                (e) => {
                    let n = t.find((t) => t.key === e);
                    null != n && a(n.key);
                },
                { equalityFn: c.x },
            ),
        [t],
    );
    let l = i.useMemo(
            () =>
                Math.max(
                    t.findIndex((e) => e.key === n),
                    0,
                ),
            [t, n],
        ),
        {
            thumbRef: s,
            trackRef: o,
            thumbAnchorRef: d,
            springs: _,
        } = (function (e) {
            let t = m.Xi.useSetting(),
                n = i.useRef(null),
                r = i.useRef(null),
                a = i.useRef(null),
                l = i.useRef(!0),
                s = i.useRef(t),
                [o, u] = (0, h.zhh)(() => ({ y: 0, height: 0, config: { mass: 0.1, friction: 20, tension: 300 } }));
            return (
                i.useLayoutEffect(() => {
                    let e = s.current !== t,
                        i = () => {
                            if (null == n.current || null == r.current || null == a.current) return;
                            let [i, c] = [n.current.getBoundingClientRect(), a.current.getBoundingClientRect()],
                                d = i.width / 2,
                                h = (c.y - i.y) / d,
                                m = c.height / d;
                            l.current || e || f.A.useReducedMotion
                                ? (o.y.set(h), o.height.set(m))
                                : u({ y: h, height: m }),
                                (l.current = !1),
                                (s.current = t);
                        },
                        c = null;
                    return (
                        e
                            ? (c = requestAnimationFrame(() => {
                                  (c = null), i();
                              }))
                            : i(),
                        () => {
                            null != c && cancelAnimationFrame(c);
                        }
                    );
                }, [e, u, o.y, o.height, t]),
                { thumbRef: r, trackRef: n, thumbAnchorRef: a, springs: o }
            );
        })(l);
    return (
        (0, p.u)(t),
        (0, r.jsxs)("div", {
            className: y.o8,
            role: "list",
            style: { "--custom-nav-count": t.length, "--custom-nav-index": l, "--custom-nav-width": "2px" },
            children: [
                (0, r.jsx)("div", {
                    className: y.u4,
                    "aria-hidden": "true",
                    ref: o,
                    children: (0, r.jsx)(u.animated.div, { className: y.FF, style: _, ref: s }),
                }),
                (0, r.jsx)("div", { className: y.gu, "aria-hidden": "true", ref: d }),
                t.map((e) =>
                    (0, r.jsx)(
                        x,
                        {
                            onClick: () => {
                                var t;
                                return (t = e.key), void v.A.navigate(t, { showNavigationMobile: !1 });
                            },
                            active: e.key === n,
                            category: e,
                        },
                        e.key,
                    ),
                ),
            ],
        })
    );
}
