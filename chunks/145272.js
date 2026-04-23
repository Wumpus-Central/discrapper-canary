l.d(t, { e: () => I });
var a = l(627968),
    n = l(64700),
    s = l(310784),
    r = l.n(s),
    i = l(503698),
    o = l.n(i),
    c = l(156828),
    d = l(317097),
    u = l(714385),
    h = l(990078),
    m = l(408278),
    _ = l(821609),
    x = l(289873),
    g = l(939249),
    E = l(834040),
    f = l(499373),
    T = l(971745),
    A = l(467135),
    p = l(230835),
    C = l(738419),
    v = l(693227),
    S = l(985018),
    M = l(253499);
let N = (0, c.Fe)({
    createPromise: () => Promise.all([l.e("47950"), l.e("86537")]).then(l.bind(l, 33136)),
    webpackId: 33136,
    name: "CustomThemeColorPickerControlV2",
    renderLoader: function () {
        return (0, a.jsx)("div", { className: M.wG, children: (0, a.jsx)(x.y, {}) });
    },
});
function j(e) {
    let { colors: t, selectedIndex: l, onColorSelect: s } = e,
        [r, i] = n.useMemo(() => {
            let e = t.map((e, l) => (t.length < 1 ? 0 : (l / (t.length - 1)) * 80 + 10)),
                l = t.map((t, l) => `${t} ${e[l]}%`).join(", ");
            return [e, { background: `linear-gradient(to right, ${l})` }];
        }, [t]);
    return (0, a.jsx)("div", {
        className: M.wS,
        style: i,
        children: t.map((e, t) => {
            let i = r[t],
                c = t === l;
            return (0, a.jsxs)(
                n.Fragment,
                {
                    children: [
                        (0, a.jsx)(g.D, {
                            className: o()(M.pX, { [M.wH]: c }),
                            style: { left: `${i}%`, backgroundColor: e },
                            onClick: () => s(t),
                            children: (0, a.jsx)("div", { className: M.Px }),
                        }),
                        c && (0, a.jsx)("div", { className: M.gQ, style: { left: `${i}%` } }),
                    ],
                },
                t,
            );
        }),
    });
}
function O(e) {
    let { color: t } = e,
        l = n.useMemo(() => ({ backgroundColor: (0, d.qt)(t) ? t : "#000000" }), [t]);
    return (0, a.jsx)("div", { className: M.ld, style: l, "aria-label": "Color preview" });
}
function I(e) {
    let { value: t, onChange: l, className: s, colors: i, setColors: c } = e,
        x = (0, T.A)(),
        [g, I] = n.useState(0),
        [w, b] = n.useState(t);
    n.useEffect(() => {
        if (i.length > 0 && g < i.length) {
            let e = i[g];
            (0, d.qt)(e) && (b(e), l(e));
        }
        g >= i.length && I(0);
    }, [g, i, l]);
    let R = (e) => {
            let t,
                a = (t = e.trim()).startsWith("#") ? t : t.length > 0 ? `#${t}` : t;
            if ((b(a), (0, d.qt)(a) && ((0, C.CE)(), l(a), i.length > 0))) {
                let e = [...i];
                (e[g] = a), c(e);
            }
        },
        k = n.useCallback((e) => {
            b(e.hex);
        }, []),
        H = async () => {
            if (null != x)
                try {
                    let { sRGBHex: e } = await x.open();
                    (0, C.AL)(), R(e);
                } catch {}
        },
        y = i.length > 1;
    return (0, a.jsxs)("div", {
        className: o()(M.kL, s),
        children: [
            y &&
                (0, a.jsx)(j, {
                    colors: i,
                    selectedIndex: g,
                    onColorSelect: (e) => {
                        I(e), (0, C.mx)();
                    },
                }),
            (0, a.jsx)(N, {
                onChange: k,
                onChangeComplete: (e) => {
                    if (((0, C.VE)(), l(e.hex), i.length > 0)) {
                        let t = [...i];
                        (t[g] = e.hex), c(t);
                    }
                },
                color: w,
            }),
            (0, a.jsxs)("div", {
                className: M.Xr,
                children: [
                    (0, a.jsx)(O, { color: w }),
                    (0, a.jsx)("input", {
                        className: M.Im,
                        value: w.toUpperCase(),
                        onChange: (e) => R(e.target.value),
                        maxLength: 7,
                        placeholder: A.OT,
                        type: "text",
                    }),
                    (0, a.jsxs)("div", {
                        className: M.hE,
                        children: [
                            null != x &&
                                (0, a.jsx)(h.m, {
                                    text: S.intl.string(v.default["NCFz+N"]),
                                    children: (0, a.jsx)(m.K, {
                                        variant: "icon-only",
                                        size: "sm",
                                        onClick: H,
                                        icon: u.d,
                                        "aria-label": S.intl.string(v.default["NCFz+N"]),
                                    }),
                                }),
                            y &&
                                (0, a.jsx)(h.m, {
                                    text: S.intl.string(S.t.N86XcP),
                                    children: (0, a.jsx)(m.K, {
                                        variant: "icon-only",
                                        size: "sm",
                                        onClick: () =>
                                            ((e) => {
                                                if (i.length > 1) {
                                                    (0, C.f1)();
                                                    let t = i.filter((t, l) => l !== e);
                                                    c(t), g >= t.length ? I(t.length - 1) : g > e && I(g - 1);
                                                }
                                            })(g),
                                        icon: E.Q,
                                        "aria-label": S.intl.string(S.t.N86XcP),
                                    }),
                                }),
                        ],
                    }),
                ],
            }),
            i.length < 5 &&
                (0, a.jsx)(_.$, {
                    variant: "secondary",
                    size: "md",
                    onClick: () => {
                        if (5 === i.length) return;
                        0 === i.length && (0, p.eq)(), (0, C.HU)();
                        let e = i.length > 0 ? i[i.length - 1] : w,
                            t =
                                i.length > 0
                                    ? (function (e) {
                                          if (!(0, d.qt)(e)) return e;
                                          let t = r()(e);
                                          return t.set("hsl.h", (t.get("hsl.h") + 15) % 360).hex();
                                      })(e)
                                    : e,
                            l = [...i, t];
                        c(l), I(l.length - 1);
                    },
                    icon: f.T,
                    text: S.intl.string(v.default.JUQcdT),
                    fullWidth: !0,
                }),
        ],
    });
}
