n.d(t, {
    DO: () => b,
    Kj: () => O,
    Lc: () => v,
    Or: () => g,
    zI: () => E,
}),
    n(264879);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(284009),
    l = n.n(o),
    c = n(317097),
    u = n(827734),
    d = n(426333),
    f = n(934551),
    p = n(818348),
    _ = n(127650);
function h(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function m(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                h(e, t, n[t]);
            });
    }
    return e;
}
var g = (function (e) {
        return (e.DEFAULT = "default"), (e.INVERTED = "inverted"), (e.GHOST = "ghost"), (e.ROW = "row"), e;
    })(g || {}),
    E = (function (e) {
        return (e.TOP = "top"), (e.CENTER = "center"), e;
    })(E || {});
let b = {
        BOX: _.aP,
        ROUND: _.LI,
        SMALL_BOX: _.tk,
    },
    y = {
        top: _.t8,
        center: _.Hu,
    },
    O = (e) => {
        let {
                disabled: t = !1,
                readOnly: n = !1,
                displayOnly: a = !1,
                value: o = !1,
                size: l = 24,
                type: c = "default",
                align: u = "center",
                onChange: f = p.tE,
                onClick: h,
                className: m,
                innerClassName: g,
                children: E,
                reverse: O = !1,
                shape: A = b.BOX,
                checkboxColor: S,
            } = e,
            I = i.useCallback(
                (e) => {
                    null == f || f(e, e.currentTarget.checked);
                },
                [f],
            ),
            T =
                null != E
                    ? (0, r.jsx)("div", {
                          className: s()(_.Pf, t ? _.fR : _.ru, O ? _.dT : _.a5),
                          style: { lineHeight: "".concat(l, "px") },
                          children: E,
                      })
                    : null,
            C = a ? "span" : "label",
            N = t ? _.pR : n ? _.bB : _.qw;
        return (0, r.jsxs)(C, {
            "data-toggleable-component": "checkbox",
            className: s()(t ? _.Tc : _.TQ, y[u], m, {
                [_.nM]: "row" === c,
                [_.KD]: o,
            }),
            children: [
                O ? T : null,
                !a &&
                    (0, r.jsx)(d.vN, {
                        children: (0, r.jsx)("input", {
                            className: s()(g, N),
                            type: "checkbox",
                            onClick: h,
                            onChange: t || n ? p.tE : I,
                            checked: o,
                            style: {
                                width: l,
                                height: l,
                            },
                        }),
                    }),
                (0, r.jsx)(v, {
                    value: o,
                    size: l,
                    shape: A,
                    checkboxColor: S,
                    disabled: t,
                }),
                O ? null : T,
            ],
        });
    };
function A(e) {
    var t;
    let { value: n, type: r, color: i } = e,
        a = null != (t = e.style) ? t : {};
    if (!1 === n) return a;
    if (((a = m({}, a)), null != i))
        switch (r) {
            case "default":
                a.borderColor = i;
                break;
            case "ghost":
                if (i.startsWith("var(--")) {
                    let e = "".concat(i.slice(0, -1), "-hsl)");
                    (a.borderColor = "rgba(".concat(e, ", 0.15)")), (a.backgroundColor = "rgba(".concat(e, ", 0.15)"));
                } else
                    l()((0, c.qt)(i), "Checkbox: ".concat(i, " is not a valid hex color")),
                        (a.borderColor = (0, c.xp)(i, 0.15)),
                        (a.backgroundColor = (0, c.xp)(i, 0.15));
                break;
            case "row":
            case "inverted":
                (a.backgroundColor = i), (a.borderColor = i);
        }
    return a;
}
function v(e) {
    let { indicatorClassName: t, value: n, size: a, shape: o, checkboxColor: l, disabled: c } = e,
        d = A(e),
        p = i.useMemo(() => (n ? u.A.colors.WHITE.css : u.A.unsafe_rawColors.TRANSPARENT.css), [n]);
    return (0, r.jsx)("div", {
        className: s()(_.kv, o, t, {
            [_.KD]: n,
            [_.Ab]: c,
        }),
        style: m(
            {
                width: a,
                height: a,
                borderColor: l,
            },
            d,
        ),
        children: (0, r.jsx)(f.CheckmarkSmallBoldIcon, {
            size: "sm",
            color: p,
            "aria-hidden": !0,
        }),
    });
}
