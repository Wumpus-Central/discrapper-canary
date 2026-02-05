"use strict";
n.d(t, { e: () => D });
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
    p = n(397927),
    h = n(971745),
    m = n(467135),
    g = n(230835),
    E = n(738419),
    A = n(520650),
    I = n(985018),
    T = n(217590);
function y() {
    return (0, r.jsx)("div", { className: T.wG, children: (0, r.jsx)(p.y$y, {}) });
}
let S = (0, u.Fe)({
        createPromise: () => Promise.all([n.e("47950"), n.e("86537")]).then(n.bind(n, 33136)),
        webpackId: 33136,
        name: "CustomThemeColorPickerControlV2",
        renderLoader: y,
    }),
    v = 5,
    C = "#000000";
function b(e, t) {
    return e.length < 1 ? 0 : (t / (e.length - 1)) * 80 + 10;
}
function N(e) {
    let { colors: t, selectedIndex: n, onColorSelect: a } = e,
        [s, o] = i.useMemo(() => {
            let e = t.map((e, n) => b(t, n)),
                n = t.map((t, n) => `${t} ${e[n]}%`).join(", ");
            return [e, { background: `linear-gradient(to right, ${n})` }];
        }, [t]);
    return (0, r.jsx)("div", {
        className: T.wS,
        style: o,
        children: t.map((e, t) => {
            let o = s[t],
                u = t === n;
            return (0, r.jsxs)(
                i.Fragment,
                {
                    children: [
                        (0, r.jsx)(p.DUT, {
                            className: l()(T.pX, { [T.wH]: u }),
                            style: { left: `${o}%`, backgroundColor: e },
                            onClick: () => a(t),
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
        n = i.useMemo(() => ({ backgroundColor: (0, c.qt)(t) ? t : C }), [t]);
    return (0, r.jsx)("div", { className: T.ld, style: n, "aria-label": "Color preview" });
}
function O(e) {
    if (!(0, c.qt)(e)) return e;
    let t = s()(e);
    return t.set("hsl.h", (t.get("hsl.h") + 15) % 360).hex();
}
function D(e) {
    let { value: t, onChange: n, className: a, colors: s, setColors: o } = e,
        u = (0, h.A)(),
        [y, C] = i.useState(0),
        [b, D] = i.useState(t);
    i.useEffect(() => {
        if (s.length > 0 && y < s.length) {
            let e = s[y];
            (0, c.qt)(e) && (D(e), n(e));
        }
        y >= s.length && C(0);
    }, [y, s, n]);
    let L = (e) => {
            let t = e.trim();
            return t.startsWith("#") ? t : t.length > 0 ? `#${t}` : t;
        },
        w = (e) => {
            let t = L(e);
            if ((D(t), (0, c.qt)(t) && ((0, E.CE)(), n(t), s.length > 0))) {
                let e = [...s];
                (e[y] = t), o(e);
            }
        },
        x = i.useCallback((e) => {
            D(e.hex);
        }, []),
        P = (e) => {
            if (((0, E.VE)(), n(e.hex), s.length > 0)) {
                let t = [...s];
                (t[y] = e.hex), o(t);
            }
        },
        M = async () => {
            if (null != u)
                try {
                    let { sRGBHex: e } = await u.open();
                    (0, E.AL)(), w(e);
                } catch {}
        },
        k = () => {
            if (s.length === v) return;
            0 === s.length && (0, g.eq)(), (0, E.HU)();
            let e = s.length > 0 ? s[s.length - 1] : b,
                t = s.length > 0 ? O(e) : e,
                n = [...s, t];
            o(n), C(n.length - 1);
        },
        U = (e) => {
            if (s.length > 1) {
                (0, E.f1)();
                let t = s.filter((t, n) => n !== e);
                o(t), y >= t.length ? C(t.length - 1) : y > e && C(y - 1);
            }
        },
        G = (e) => {
            C(e), (0, E.mx)();
        },
        V = s.length > 1;
    return (0, r.jsxs)("div", {
        className: l()(T.kL, a),
        children: [
            V && (0, r.jsx)(N, { colors: s, selectedIndex: y, onColorSelect: G }),
            (0, r.jsx)(S, { onChange: x, onChangeComplete: P, color: b }),
            (0, r.jsxs)("div", {
                className: T.Xr,
                children: [
                    (0, r.jsx)(R, { color: b }),
                    (0, r.jsx)("input", {
                        className: T.Im,
                        value: b.toUpperCase(),
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
                                        onClick: M,
                                        icon: d.d,
                                        "aria-label": I.intl.string(A.default["NCFz+N"]),
                                    }),
                                }),
                            V &&
                                (0, r.jsx)(_.m, {
                                    text: I.intl.string(I.t.N86XcP),
                                    children: (0, r.jsx)(f.K0, {
                                        variant: "icon-only",
                                        size: "sm",
                                        onClick: () => U(y),
                                        icon: p.QGg,
                                        "aria-label": I.intl.string(I.t.N86XcP),
                                    }),
                                }),
                        ],
                    }),
                ],
            }),
            s.length < v &&
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
