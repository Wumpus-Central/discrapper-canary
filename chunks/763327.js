n.d(t, {
    A: () => m,
}),
    n(896048);
var l = n(627968),
    r = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(397927),
    o = n(552736),
    u = n(68545),
    c = n(218093),
    d = n(985018),
    p = n(150211);

function m(e) {
    var t, n, i, m;
    let { defaultCategory: f, onCategoryChange: g, className: j } = e,
        [y, h] = r.useState(f),
        [v, b] = r.useState(null),
        O = (0, o.A)(),
        x = r.useMemo(
            () => [
                {
                    name: d.intl.string(d.t["6Zuivx"]),
                    value: u.Sm.Trick,
                    key: "Trick",
                    icon: (0, l.jsx)(a.VPb, {
                        size: "sm",
                        color: "currentColor",
                    }),
                    onMouseEnter: () => b(u.Sm.Trick),
                    onMouseLeave: () => b(null),
                },
                {
                    name: d.intl.string(d.t["2UeOlY"]),
                    value: u.Sm.Treat,
                    key: "Treat",
                    icon: (0, l.jsx)(a.pZW, {
                        size: "sm",
                        color: "currentColor",
                    }),
                    onMouseEnter: () => b(u.Sm.Treat),
                    onMouseLeave: () => b(null),
                },
            ],
            [],
        ),
        P = r.useCallback(
            (e) => {
                h(e.value), g(e.value);
            },
            [g],
        ),
        S =
            null == O || null == (n = O.segmentedControlAnimations) || null == (t = n.trick)
                ? void 0
                : t.getAnimationData,
        E =
            null == O || null == (m = O.segmentedControlAnimations) || null == (i = m.treat)
                ? void 0
                : i.getAnimationData;
    return (0, l.jsxs)("div", {
        className: s()(p.kL, j),
        children: [
            (0, l.jsx)(c.R, {
                options: x,
                value: y,
                onChange: P,
            }),
            v === u.Sm.Trick &&
                null != S &&
                (0, l.jsx)("div", {
                    className: s()(p.Do, p.yf),
                    children: (0, l.jsx)(a.akl, {
                        shouldAnimate: !0,
                        loop: !0,
                        autoplay: !0,
                        className: p.I3,
                        importData: S,
                        renderer: a.akl.Renderers.SVG,
                        versionKey: +(v === u.Sm.Trick),
                    }),
                }),
            v === u.Sm.Treat &&
                null != E &&
                (0, l.jsx)("div", {
                    className: s()(p.Do, p.vu),
                    children: (0, l.jsx)(a.akl, {
                        shouldAnimate: !0,
                        loop: !0,
                        autoplay: !0,
                        className: p.I3,
                        importData: E,
                        renderer: a.akl.Renderers.SVG,
                        versionKey: +(v === u.Sm.Treat),
                    }),
                }),
        ],
    });
}
