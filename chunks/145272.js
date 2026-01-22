n.d(t, {
    e: () => w,
}),
    n(896048),
    n(733351);
var r = n(627968),
    i = n(64700),
    a = n(310784),
    s = n.n(a),
    o = n(503698),
    l = n.n(o),
    c = n(156828),
    u = n(317097),
    d = n(714385),
    f = n(990078),
    p = n(732955),
    _ = n(397927),
    h = n(971745),
    m = n(467135),
    g = n(230835),
    E = n(738419),
    b = n(520650),
    y = n(985018),
    O = n(217590);

function A() {
    return (0, r.jsx)("div", {
        className: O.wG,
        children: (0, r.jsx)(_.y$y, {}),
    });
}
let v = (0, c.Fe)({
        createPromise: () => Promise.all([n.e("47950"), n.e("86537")]).then(n.bind(n, 33136)),
        webpackId: 33136,
        name: "CustomThemeColorPickerControlV2",
        renderLoader: A,
    }),
    S = 5,
    I = "#000000";

function T(e, t) {
    return e.length < 1 ? 0 : (t / (e.length - 1)) * 80 + 10;
}

function C(e) {
    let { colors: t, selectedIndex: n, onColorSelect: a } = e,
        [s, o] = i.useMemo(() => {
            let e = t.map((e, n) => T(t, n)),
                n = t.map((t, n) => "".concat(t, " ").concat(e[n], "%")).join(", ");
            return [
                e,
                {
                    background: "linear-gradient(to right, ".concat(n, ")"),
                },
            ];
        }, [t]);
    return (0, r.jsx)("div", {
        className: O.wS,
        style: o,
        children: t.map((e, t) => {
            let o = s[t],
                c = t === n;
            return (0, r.jsxs)(
                i.Fragment,
                {
                    children: [
                        (0, r.jsx)(_.DUT, {
                            className: l()(O.pX, {
                                [O.wH]: c,
                            }),
                            style: {
                                left: "".concat(o, "%"),
                                backgroundColor: e,
                            },
                            onClick: () => a(t),
                            children: (0, r.jsx)("div", {
                                className: O.Px,
                            }),
                        }),
                        c &&
                            (0, r.jsx)("div", {
                                className: O.gQ,
                                style: {
                                    left: "".concat(o, "%"),
                                },
                            }),
                    ],
                },
                t,
            );
        }),
    });
}

function N(e) {
    let { color: t } = e,
        n = i.useMemo(
            () => ({
                backgroundColor: (0, u.qt)(t) ? t : I,
            }),
            [t],
        );
    return (0, r.jsx)("div", {
        className: O.ld,
        style: n,
        "aria-label": "Color preview",
    });
}

function R(e) {
    if (!(0, u.qt)(e)) return e;
    let t = s()(e);
    return t.set("hsl.h", (t.get("hsl.h") + 15) % 360).hex();
}

function w(e) {
    let { value: t, onChange: n, className: a, colors: s, setColors: o } = e,
        c = (0, h.A)(),
        [A, I] = i.useState(0),
        [T, w] = i.useState(t);
    i.useEffect(() => {
        if (s.length > 0 && A < s.length) {
            let e = s[A];
            (0, u.qt)(e) && (w(e), n(e));
        }
        A >= s.length && I(0);
    }, [A, s, n]);
    let P = (e) => {
            let t = e.trim();
            return t.startsWith("#") ? t : t.length > 0 ? "#".concat(t) : t;
        },
        D = (e) => {
            let t = P(e);
            if ((w(t), (0, u.qt)(t) && ((0, E.CE)(), n(t), s.length > 0))) {
                let e = [...s];
                (e[A] = t), o(e);
            }
        },
        x = i.useCallback((e) => {
            w(e.hex);
        }, []),
        L = (e) => {
            if (((0, E.VE)(), n(e.hex), s.length > 0)) {
                let t = [...s];
                (t[A] = e.hex), o(t);
            }
        },
        j = async () => {
            if (null != c)
                try {
                    let { sRGBHex: e } = await c.open();
                    (0, E.AL)(), D(e);
                } catch (e) {}
        },
        M = () => {
            if (s.length === S) return;
            0 === s.length && (0, g.eq)(), (0, E.HU)();
            let e = s.length > 0 ? s[s.length - 1] : T,
                t = s.length > 0 ? R(e) : e,
                n = [...s, t];
            o(n), I(n.length - 1);
        },
        k = (e) => {
            if (s.length > 1) {
                (0, E.f1)();
                let t = s.filter((t, n) => n !== e);
                o(t), A >= t.length ? I(t.length - 1) : A > e && I(A - 1);
            }
        },
        U = (e) => {
            I(e), (0, E.mx)();
        },
        G = s.length > 1;
    return (0, r.jsxs)("div", {
        className: l()(O.kL, a),
        children: [
            G &&
                (0, r.jsx)(C, {
                    colors: s,
                    selectedIndex: A,
                    onColorSelect: U,
                }),
            (0, r.jsx)(v, {
                onChange: x,
                onChangeComplete: L,
                color: T,
            }),
            (0, r.jsxs)("div", {
                className: O.Xr,
                children: [
                    (0, r.jsx)(N, {
                        color: T,
                    }),
                    (0, r.jsx)("input", {
                        className: O.Im,
                        value: T.toUpperCase(),
                        onChange: (e) => D(e.target.value),
                        maxLength: 7,
                        placeholder: m.OT,
                        type: "text",
                    }),
                    (0, r.jsxs)("div", {
                        className: O.hE,
                        children: [
                            null != c &&
                                (0, r.jsx)(f.m, {
                                    text: y.intl.string(b.default["NCFz+N"]),
                                    children: (0, r.jsx)(p.K0, {
                                        variant: "icon-only",
                                        size: "sm",
                                        onClick: j,
                                        icon: d.d,
                                        "aria-label": y.intl.string(b.default["NCFz+N"]),
                                    }),
                                }),
                            G &&
                                (0, r.jsx)(f.m, {
                                    text: y.intl.string(y.t.N86XcP),
                                    children: (0, r.jsx)(p.K0, {
                                        variant: "icon-only",
                                        size: "sm",
                                        onClick: () => k(A),
                                        icon: _.QGg,
                                        "aria-label": y.intl.string(y.t.N86XcP),
                                    }),
                                }),
                        ],
                    }),
                ],
            }),
            s.length < S &&
                (0, r.jsx)(p.$nd, {
                    variant: "secondary",
                    size: "md",
                    onClick: M,
                    icon: _.TIR,
                    text: y.intl.string(b.default.JUQcdT),
                    fullWidth: !0,
                }),
        ],
    });
}
