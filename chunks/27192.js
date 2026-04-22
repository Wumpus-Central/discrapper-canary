"use strict";
n.d(t, { DO: () => A, Kj: () => T, Lc: () => S, Or: () => m, zI: () => g });
var r,
    i,
    s = n(627968),
    a = n(64700),
    o = n(503698),
    l = n.n(o),
    u = n(284009),
    d = n.n(u),
    c = n(317097),
    _ = n(827734),
    f = n(187322),
    E = n(820081),
    h = n(818348),
    p = n(693491),
    m = (((r = m || {}).DEFAULT = "default"), (r.INVERTED = "inverted"), (r.GHOST = "ghost"), (r.ROW = "row"), r),
    g = (((i = g || {}).TOP = "top"), (i.CENTER = "center"), i);
let A = { BOX: p.aP, ROUND: p.LI, SMALL_BOX: p.tk },
    I = { top: p.t8, center: p.Hu },
    T = (e) => {
        let {
                disabled: t = !1,
                readOnly: n = !1,
                displayOnly: r = !1,
                value: i = !1,
                size: o = 24,
                type: u = "default",
                align: d = "center",
                onChange: c = h.tE,
                onClick: _,
                className: E,
                innerClassName: m,
                children: g,
                reverse: T = !1,
                shape: y = A.BOX,
                checkboxColor: N,
            } = e,
            O = a.useCallback(
                (e) => {
                    c?.(e, e.currentTarget.checked);
                },
                [c],
            ),
            R =
                null != g
                    ? (0, s.jsx)("div", {
                          className: l()(p.Pf, t ? p.fR : p.ru, T ? p.dT : p.a5),
                          style: { lineHeight: `${o}px` },
                          children: g,
                      })
                    : null,
            v = t ? p.pR : n ? p.bB : p.qw;
        return (0, s.jsxs)(r ? "span" : "label", {
            "data-toggleable-component": "checkbox",
            className: l()(t ? p.Tc : p.TQ, I[d], E, { [p.nM]: "row" === u, [p.KD]: i }),
            children: [
                T ? R : null,
                !r &&
                    (0, s.jsx)(f.vN, {
                        children: (0, s.jsx)("input", {
                            className: l()(m, v),
                            type: "checkbox",
                            onClick: _,
                            onChange: t || n ? h.tE : O,
                            checked: i,
                            style: { width: o, height: o },
                        }),
                    }),
                (0, s.jsx)(S, { value: i, size: o, shape: y, checkboxColor: N, disabled: t }),
                T ? null : R,
            ],
        });
    };
function S(e) {
    let { indicatorClassName: t, value: n, size: r, shape: i, checkboxColor: o, disabled: u } = e,
        f = (function (e) {
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
                            d()((0, c.qt)(r), `Checkbox: ${r} is not a valid hex color`),
                                (i.borderColor = (0, c.xp)(r, 0.15)),
                                (i.backgroundColor = (0, c.xp)(r, 0.15));
                        break;
                    case "row":
                    case "inverted":
                        (i.backgroundColor = r), (i.borderColor = r);
                }
            return i;
        })(e),
        h = a.useMemo(() => (n ? _.A.colors.WHITE.css : _.A.unsafe_rawColors.TRANSPARENT.css), [n]);
    return (0, s.jsx)("div", {
        className: l()(p.kv, i, t, { [p.KD]: n, [p.Ab]: u }),
        style: { width: r, height: r, borderColor: o, ...f },
        children: (0, s.jsx)(E.B, { size: "sm", color: h, "aria-hidden": !0 }),
    });
}
