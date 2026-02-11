"use strict";
n.d(t, { e: () => L });
var r = n(627968),
    i = n(64700),
    a = n(310784),
    s = n.n(a),
    o = n(503698),
    l = n.n(o),
    u = n(156828),
    c = n(317097),
    d = n(714385),
    _ = n(990078),
    f = n(732955),
    h = n(397927),
    p = n(971745),
    g = n(467135),
    E = n(230835),
    A = n(738419),
    I = n(674547),
    T = n(985018),
    y = n(87788);
function S() {
    return (0, r.jsx)("div", { className: y.wG, children: (0, r.jsx)(h.y$y, {}) });
}
let v = (0, u.Fe)({
        createPromise: () => Promise.all([n.e("47950"), n.e("86537")]).then(n.bind(n, 33136)),
        webpackId: 33136,
        name: "CustomThemeColorPickerControlV2",
        renderLoader: S,
    }),
    C = 5,
    b = "#000000";
function N(e, t) {
    return e.length < 1 ? 0 : (t / (e.length - 1)) * 80 + 10;
}
function R(e) {
    let { colors: t, selectedIndex: n, onColorSelect: a } = e,
        [s, o] = i.useMemo(() => {
            let e = t.map((e, n) => N(t, n)),
                n = t.map((t, n) => `${t} ${e[n]}%`).join(", ");
            return [e, { background: `linear-gradient(to right, ${n})` }];
        }, [t]);
    return (0, r.jsx)("div", {
        className: y.wS,
        style: o,
        children: t.map((e, t) => {
            let o = s[t],
                u = t === n;
            return (0, r.jsxs)(
                i.Fragment,
                {
                    children: [
                        (0, r.jsx)(h.DUT, {
                            className: l()(y.pX, { [y.wH]: u }),
                            style: { left: `${o}%`, backgroundColor: e },
                            onClick: () => a(t),
                            children: (0, r.jsx)("div", { className: y.Px }),
                        }),
                        u && (0, r.jsx)("div", { className: y.gQ, style: { left: `${o}%` } }),
                    ],
                },
                t,
            );
        }),
    });
}
function O(e) {
    let { color: t } = e,
        n = i.useMemo(() => ({ backgroundColor: (0, c.qt)(t) ? t : b }), [t]);
    return (0, r.jsx)("div", { className: y.ld, style: n, "aria-label": "Color preview" });
}
function D(e) {
    if (!(0, c.qt)(e)) return e;
    let t = s()(e);
    return t.set("hsl.h", (t.get("hsl.h") + 15) % 360).hex();
}
function L(e) {
    let { value: t, onChange: n, className: a, colors: s, setColors: o } = e,
        u = (0, p.A)(),
        [S, b] = i.useState(0),
        [N, L] = i.useState(t);
    i.useEffect(() => {
        if (s.length > 0 && S < s.length) {
            let e = s[S];
            (0, c.qt)(e) && (L(e), n(e));
        }
        S >= s.length && b(0);
    }, [S, s, n]);
    let w = (e) => {
            let t = e.trim();
            return t.startsWith("#") ? t : t.length > 0 ? `#${t}` : t;
        },
        x = (e) => {
            let t = w(e);
            if ((L(t), (0, c.qt)(t) && ((0, A.CE)(), n(t), s.length > 0))) {
                let e = [...s];
                (e[S] = t), o(e);
            }
        },
        P = i.useCallback((e) => {
            L(e.hex);
        }, []),
        M = (e) => {
            if (((0, A.VE)(), n(e.hex), s.length > 0)) {
                let t = [...s];
                (t[S] = e.hex), o(t);
            }
        },
        k = async () => {
            if (null != u)
                try {
                    let { sRGBHex: e } = await u.open();
                    (0, A.AL)(), x(e);
                } catch {}
        },
        U = () => {
            if (s.length === C) return;
            0 === s.length && (0, E.eq)(), (0, A.HU)();
            let e = s.length > 0 ? s[s.length - 1] : N,
                t = s.length > 0 ? D(e) : e,
                n = [...s, t];
            o(n), b(n.length - 1);
        },
        G = (e) => {
            if (s.length > 1) {
                (0, A.f1)();
                let t = s.filter((t, n) => n !== e);
                o(t), S >= t.length ? b(t.length - 1) : S > e && b(S - 1);
            }
        },
        F = (e) => {
            b(e), (0, A.mx)();
        },
        V = s.length > 1;
    return (0, r.jsxs)("div", {
        className: l()(y.kL, a),
        children: [
            V && (0, r.jsx)(R, { colors: s, selectedIndex: S, onColorSelect: F }),
            (0, r.jsx)(v, { onChange: P, onChangeComplete: M, color: N }),
            (0, r.jsxs)("div", {
                className: y.Xr,
                children: [
                    (0, r.jsx)(O, { color: N }),
                    (0, r.jsx)("input", {
                        className: y.Im,
                        value: N.toUpperCase(),
                        onChange: (e) => x(e.target.value),
                        maxLength: 7,
                        placeholder: g.OT,
                        type: "text",
                    }),
                    (0, r.jsxs)("div", {
                        className: y.hE,
                        children: [
                            null != u &&
                                (0, r.jsx)(_.m, {
                                    text: T.intl.string(I.default["NCFz+N"]),
                                    children: (0, r.jsx)(f.K0, {
                                        variant: "icon-only",
                                        size: "sm",
                                        onClick: k,
                                        icon: d.d,
                                        "aria-label": T.intl.string(I.default["NCFz+N"]),
                                    }),
                                }),
                            V &&
                                (0, r.jsx)(_.m, {
                                    text: T.intl.string(T.t.N86XcP),
                                    children: (0, r.jsx)(f.K0, {
                                        variant: "icon-only",
                                        size: "sm",
                                        onClick: () => G(S),
                                        icon: h.QGg,
                                        "aria-label": T.intl.string(T.t.N86XcP),
                                    }),
                                }),
                        ],
                    }),
                ],
            }),
            s.length < C &&
                (0, r.jsx)(f.$nd, {
                    variant: "secondary",
                    size: "md",
                    onClick: U,
                    icon: h.TIR,
                    text: T.intl.string(I.default.JUQcdT),
                    fullWidth: !0,
                }),
        ],
    });
}
