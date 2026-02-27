"use strict";
n.d(t, { e: () => D });
var r = n(627968),
    i = n(64700),
    s = n(310784),
    a = n.n(s),
    o = n(503698),
    l = n.n(o),
    u = n(156828),
    c = n(317097),
    d = n(714385),
    _ = n(990078),
    f = n(732955),
    p = n(397927),
    h = n(971745),
    m = n(467135),
    E = n(230835),
    g = n(738419),
    A = n(520650),
    I = n(985018),
    T = n(217590);
function S() {
    return (0, r.jsx)("div", { className: T.wG, children: (0, r.jsx)(p.y$y, {}) });
}
let y = (0, u.Fe)({
        createPromise: () => Promise.all([n.e("47950"), n.e("86537")]).then(n.bind(n, 33136)),
        webpackId: 33136,
        name: "CustomThemeColorPickerControlV2",
        renderLoader: S,
    }),
    v = 5,
    N = "#000000";
function C(e, t) {
    return e.length < 1 ? 0 : (t / (e.length - 1)) * 80 + 10;
}
function b(e) {
    let { colors: t, selectedIndex: n, onColorSelect: s } = e,
        [a, o] = i.useMemo(() => {
            let e = t.map((e, n) => C(t, n)),
                n = t.map((t, n) => `${t} ${e[n]}%`).join(", ");
            return [e, { background: `linear-gradient(to right, ${n})` }];
        }, [t]);
    return (0, r.jsx)("div", {
        className: T.wS,
        style: o,
        children: t.map((e, t) => {
            let o = a[t],
                u = t === n;
            return (0, r.jsxs)(
                i.Fragment,
                {
                    children: [
                        (0, r.jsx)(p.DUT, {
                            className: l()(T.pX, { [T.wH]: u }),
                            style: { left: `${o}%`, backgroundColor: e },
                            onClick: () => s(t),
                            children: (0, r.jsx)("div", { className: T.Px }),
                        }),
                        u && (0, r.jsx)("div", { className: T.gQ, style: { left: `${o}%` } }),
                    ],
                },
                t,
            );
        }),
    });
}
function R(e) {
    let { color: t } = e,
        n = i.useMemo(() => ({ backgroundColor: (0, c.qt)(t) ? t : N }), [t]);
    return (0, r.jsx)("div", { className: T.ld, style: n, "aria-label": "Color preview" });
}
function O(e) {
    if (!(0, c.qt)(e)) return e;
    let t = a()(e);
    return t.set("hsl.h", (t.get("hsl.h") + 15) % 360).hex();
}
function D(e) {
    let { value: t, onChange: n, className: s, colors: a, setColors: o } = e,
        u = (0, h.A)(),
        [S, N] = i.useState(0),
        [C, D] = i.useState(t);
    i.useEffect(() => {
        if (a.length > 0 && S < a.length) {
            let e = a[S];
            (0, c.qt)(e) && (D(e), n(e));
        }
        S >= a.length && N(0);
    }, [S, a, n]);
    let L = (e) => {
            let t = e.trim();
            return t.startsWith("#") ? t : t.length > 0 ? `#${t}` : t;
        },
        w = (e) => {
            let t = L(e);
            if ((D(t), (0, c.qt)(t) && ((0, g.CE)(), n(t), a.length > 0))) {
                let e = [...a];
                (e[S] = t), o(e);
            }
        },
        x = i.useCallback((e) => {
            D(e.hex);
        }, []),
        M = (e) => {
            if (((0, g.VE)(), n(e.hex), a.length > 0)) {
                let t = [...a];
                (t[S] = e.hex), o(t);
            }
        },
        P = async () => {
            if (null != u)
                try {
                    let { sRGBHex: e } = await u.open();
                    (0, g.AL)(), w(e);
                } catch {}
        },
        k = () => {
            if (a.length === v) return;
            0 === a.length && (0, E.eq)(), (0, g.HU)();
            let e = a.length > 0 ? a[a.length - 1] : C,
                t = a.length > 0 ? O(e) : e,
                n = [...a, t];
            o(n), N(n.length - 1);
        },
        U = (e) => {
            if (a.length > 1) {
                (0, g.f1)();
                let t = a.filter((t, n) => n !== e);
                o(t), S >= t.length ? N(t.length - 1) : S > e && N(S - 1);
            }
        },
        G = (e) => {
            N(e), (0, g.mx)();
        },
        F = a.length > 1;
    return (0, r.jsxs)("div", {
        className: l()(T.kL, s),
        children: [
            F && (0, r.jsx)(b, { colors: a, selectedIndex: S, onColorSelect: G }),
            (0, r.jsx)(y, { onChange: x, onChangeComplete: M, color: C }),
            (0, r.jsxs)("div", {
                className: T.Xr,
                children: [
                    (0, r.jsx)(R, { color: C }),
                    (0, r.jsx)("input", {
                        className: T.Im,
                        value: C.toUpperCase(),
                        onChange: (e) => w(e.target.value),
                        maxLength: 7,
                        placeholder: m.OT,
                        type: "text",
                    }),
                    (0, r.jsxs)("div", {
                        className: T.hE,
                        children: [
                            null != u &&
                                (0, r.jsx)(_.m, {
                                    text: I.intl.string(A.default["NCFz+N"]),
                                    children: (0, r.jsx)(f.K0, {
                                        variant: "icon-only",
                                        size: "sm",
                                        onClick: P,
                                        icon: d.d,
                                        "aria-label": I.intl.string(A.default["NCFz+N"]),
                                    }),
                                }),
                            F &&
                                (0, r.jsx)(_.m, {
                                    text: I.intl.string(I.t.N86XcP),
                                    children: (0, r.jsx)(f.K0, {
                                        variant: "icon-only",
                                        size: "sm",
                                        onClick: () => U(S),
                                        icon: p.QGg,
                                        "aria-label": I.intl.string(I.t.N86XcP),
                                    }),
                                }),
                        ],
                    }),
                ],
            }),
            a.length < v &&
                (0, r.jsx)(f.$nd, {
                    variant: "secondary",
                    size: "md",
                    onClick: k,
                    icon: p.TIR,
                    text: I.intl.string(A.default.JUQcdT),
                    fullWidth: !0,
                }),
        ],
    });
}
