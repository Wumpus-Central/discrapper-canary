"use strict";
l.d(t, { e: () => I });
var n = l(627968),
    a = l(64700),
    s = l(310784),
    i = l.n(s),
    r = l(503698),
    o = l.n(r),
    c = l(156828),
    u = l(317097),
    d = l(714385),
    h = l(990078),
    m = l(408278),
    _ = l(821609),
    g = l(289873),
    f = l(939249),
    x = l(834040),
    E = l(499373),
    T = l(971745),
    p = l(467135),
    A = l(230835),
    v = l(738419),
    C = l(693227),
    S = l(985018),
    M = l(253499);
let b = (0, c.Fe)({
    createPromise: () => Promise.all([l.e("47950"), l.e("86537")]).then(l.bind(l, 33136)),
    webpackId: 33136,
    name: "CustomThemeColorPickerControlV2",
    renderLoader: function () {
        return (0, n.jsx)("div", { className: M.wG, children: (0, n.jsx)(g.y, {}) });
    },
});
function j(e) {
    let { colors: t, selectedIndex: l, onColorSelect: s } = e,
        [i, r] = a.useMemo(() => {
            let e = t.map((e, l) => (t.length < 1 ? 0 : (l / (t.length - 1)) * 80 + 10)),
                l = t.map((t, l) => `${t} ${e[l]}%`).join(", ");
            return [e, { background: `linear-gradient(to right, ${l})` }];
        }, [t]);
    return (0, n.jsx)("div", {
        className: M.wS,
        style: r,
        children: t.map((e, t) => {
            let r = i[t],
                c = t === l;
            return (0, n.jsxs)(
                a.Fragment,
                {
                    children: [
                        (0, n.jsx)(f.D, {
                            className: o()(M.pX, { [M.wH]: c }),
                            style: { left: `${r}%`, backgroundColor: e },
                            onClick: () => s(t),
                            children: (0, n.jsx)("div", { className: M.Px }),
                        }),
                        c && (0, n.jsx)("div", { className: M.gQ, style: { left: `${r}%` } }),
                    ],
                },
                t,
            );
        }),
    });
}
function N(e) {
    let { color: t } = e,
        l = a.useMemo(() => ({ backgroundColor: (0, u.qt)(t) ? t : "#000000" }), [t]);
    return (0, n.jsx)("div", { className: M.ld, style: l, "aria-label": "Color preview" });
}
function I(e) {
    let { value: t, onChange: l, className: s, colors: r, setColors: c } = e,
        g = (0, T.A)(),
        [f, I] = a.useState(0),
        [O, k] = a.useState(t);
    a.useEffect(() => {
        if (r.length > 0 && f < r.length) {
            let e = r[f];
            (0, u.qt)(e) && (k(e), l(e));
        }
        f >= r.length && I(0);
    }, [f, r, l]);
    let w = (e) => {
            let t,
                n = (t = e.trim()).startsWith("#") ? t : t.length > 0 ? `#${t}` : t;
            if ((k(n), (0, u.qt)(n) && ((0, v.CE)(), l(n), r.length > 0))) {
                let e = [...r];
                (e[f] = n), c(e);
            }
        },
        R = a.useCallback((e) => {
            k(e.hex);
        }, []),
        y = async () => {
            if (null != g)
                try {
                    let { sRGBHex: e } = await g.open();
                    (0, v.AL)(), w(e);
                } catch {}
        },
        H = r.length > 1;
    return (0, n.jsxs)("div", {
        className: o()(M.kL, s),
        children: [
            H &&
                (0, n.jsx)(j, {
                    colors: r,
                    selectedIndex: f,
                    onColorSelect: (e) => {
                        I(e), (0, v.mx)();
                    },
                }),
            (0, n.jsx)(b, {
                onChange: R,
                onChangeComplete: (e) => {
                    if (((0, v.VE)(), l(e.hex), r.length > 0)) {
                        let t = [...r];
                        (t[f] = e.hex), c(t);
                    }
                },
                color: O,
            }),
            (0, n.jsxs)("div", {
                className: M.Xr,
                children: [
                    (0, n.jsx)(N, { color: O }),
                    (0, n.jsx)("input", {
                        className: M.Im,
                        value: O.toUpperCase(),
                        onChange: (e) => w(e.target.value),
                        maxLength: 7,
                        placeholder: p.OT,
                        type: "text",
                    }),
                    (0, n.jsxs)("div", {
                        className: M.hE,
                        children: [
                            null != g &&
                                (0, n.jsx)(h.m, {
                                    text: S.intl.string(C.default["NCFz+N"]),
                                    children: (0, n.jsx)(m.K, {
                                        variant: "icon-only",
                                        size: "sm",
                                        onClick: y,
                                        icon: d.d,
                                        "aria-label": S.intl.string(C.default["NCFz+N"]),
                                    }),
                                }),
                            H &&
                                (0, n.jsx)(h.m, {
                                    text: S.intl.string(S.t.N86XcP),
                                    children: (0, n.jsx)(m.K, {
                                        variant: "icon-only",
                                        size: "sm",
                                        onClick: () =>
                                            ((e) => {
                                                if (r.length > 1) {
                                                    (0, v.f1)();
                                                    let t = r.filter((t, l) => l !== e);
                                                    c(t), f >= t.length ? I(t.length - 1) : f > e && I(f - 1);
                                                }
                                            })(f),
                                        icon: x.Q,
                                        "aria-label": S.intl.string(S.t.N86XcP),
                                    }),
                                }),
                        ],
                    }),
                ],
            }),
            r.length < 5 &&
                (0, n.jsx)(_.$, {
                    variant: "secondary",
                    size: "md",
                    onClick: () => {
                        if (5 === r.length) return;
                        0 === r.length && (0, A.eq)(), (0, v.HU)();
                        let e = r.length > 0 ? r[r.length - 1] : O,
                            t =
                                r.length > 0
                                    ? (function (e) {
                                          if (!(0, u.qt)(e)) return e;
                                          let t = i()(e);
                                          return t.set("hsl.h", (t.get("hsl.h") + 15) % 360).hex();
                                      })(e)
                                    : e,
                            l = [...r, t];
                        c(l), I(l.length - 1);
                    },
                    icon: E.T,
                    text: S.intl.string(C.default.JUQcdT),
                    fullWidth: !0,
                }),
        ],
    });
}
