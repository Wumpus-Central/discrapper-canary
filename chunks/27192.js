"use strict";
n.d(t, { DO: () => g, Kj: () => A, Lc: () => T, Or: () => h, zI: () => m });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(284009),
    l = n.n(o),
    u = n(317097),
    c = n(827734),
    d = n(426333),
    _ = n(934551),
    f = n(818348),
    p = n(127650),
    h = (function (e) {
        return (e.DEFAULT = "default"), (e.INVERTED = "inverted"), (e.GHOST = "ghost"), (e.ROW = "row"), e;
    })(h || {}),
    m = (function (e) {
        return (e.TOP = "top"), (e.CENTER = "center"), e;
    })(m || {});
let g = { BOX: p.aP, ROUND: p.LI, SMALL_BOX: p.tk },
    E = { top: p.t8, center: p.Hu },
    A = (e) => {
        let {
                disabled: t = !1,
                readOnly: n = !1,
                displayOnly: a = !1,
                value: o = !1,
                size: l = 24,
                type: u = "default",
                align: c = "center",
                onChange: _ = f.tE,
                onClick: h,
                className: m,
                innerClassName: A,
                children: I,
                reverse: y = !1,
                shape: S = g.BOX,
                checkboxColor: v,
            } = e,
            C = i.useCallback(
                (e) => {
                    _?.(e, e.currentTarget.checked);
                },
                [_],
            ),
            b =
                null != I
                    ? (0, r.jsx)("div", {
                          className: s()(p.Pf, t ? p.fR : p.ru, y ? p.dT : p.a5),
                          style: { lineHeight: `${l}px` },
                          children: I,
                      })
                    : null,
            N = a ? "span" : "label",
            R = t ? p.pR : n ? p.bB : p.qw;
        return (0, r.jsxs)(N, {
            "data-toggleable-component": "checkbox",
            className: s()(t ? p.Tc : p.TQ, E[c], m, { [p.nM]: "row" === u, [p.KD]: o }),
            children: [
                y ? b : null,
                !a &&
                    (0, r.jsx)(d.vN, {
                        children: (0, r.jsx)("input", {
                            className: s()(A, R),
                            type: "checkbox",
                            onClick: h,
                            onChange: t || n ? f.tE : C,
                            checked: o,
                            style: { width: l, height: l },
                        }),
                    }),
                (0, r.jsx)(T, { value: o, size: l, shape: S, checkboxColor: v, disabled: t }),
                y ? null : b,
            ],
        });
    };
function I(e) {
    let { value: t, type: n, color: r } = e,
        i = e.style ?? {};
    if (!1 === t) return i;
    if (((i = { ...i }), null != r))
        switch (n) {
            case "default":
                i.borderColor = r;
                break;
            case "ghost":
                if (r.startsWith("var(--")) {
                    let e = `${r.slice(0, -1)}-hsl)`;
                    (i.borderColor = `rgba(${e}, 0.15)`), (i.backgroundColor = `rgba(${e}, 0.15)`);
                } else
                    l()((0, u.qt)(r), `Checkbox: ${r} is not a valid hex color`),
                        (i.borderColor = (0, u.xp)(r, 0.15)),
                        (i.backgroundColor = (0, u.xp)(r, 0.15));
                break;
            case "row":
            case "inverted":
                (i.backgroundColor = r), (i.borderColor = r);
        }
    return i;
}
function T(e) {
    let { indicatorClassName: t, value: n, size: a, shape: o, checkboxColor: l, disabled: u } = e,
        d = I(e),
        f = i.useMemo(() => (n ? c.A.colors.WHITE.css : c.A.unsafe_rawColors.TRANSPARENT.css), [n]);
    return (0, r.jsx)("div", {
        className: s()(p.kv, o, t, { [p.KD]: n, [p.Ab]: u }),
        style: { width: a, height: a, borderColor: l, ...d },
        children: (0, r.jsx)(_.CheckmarkSmallBoldIcon, { size: "sm", color: f, "aria-hidden": !0 }),
    });
}
