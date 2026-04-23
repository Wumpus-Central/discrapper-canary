"use strict";
n.d(t, { l: () => m });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    l = n.n(a),
    s = n(408278),
    o = n(834040),
    c = n(292666),
    d = n(307301),
    u = n(985018),
    _ = n(81184);
function p(e) {
    return "" === e || "-" === e;
}
let m = (e) => {
    let { value: t, onChange: n, className: a, minValue: m, maxValue: h } = e,
        [f, b] = r.useState(t),
        g = p(f) || (null != m && f <= m),
        A = p(f) || (null != h && f >= h),
        E = (e) => {
            n(p(e) ? (m ?? 0) : e), b(e);
        };
    return (0, i.jsxs)("div", {
        className: l()(_.o, a),
        children: [
            (0, i.jsx)(s.K, {
                variant: "icon-only",
                size: "sm",
                icon: o.Q,
                onClick: (e) => {
                    e.stopPropagation(), g || E(f - 1);
                },
                "aria-label": u.intl.string(u.t["k+ohJm"]),
                disabled: g,
            }),
            (0, i.jsx)("div", {
                className: _.U,
                children: (0, i.jsx)(c.k, {
                    value: `${f}`,
                    onChange: (e) => {
                        if (p(e)) return E(e);
                        let t = parseInt(e);
                        if (!isNaN(t)) return null != h && t >= h ? E(h) : null != m && t <= m ? E(m) : E(t);
                    },
                }),
            }),
            (0, i.jsx)(s.K, {
                size: "sm",
                variant: "icon-only",
                icon: d.j,
                onClick: (e) => {
                    e.stopPropagation(), A || E(f + 1);
                },
                "aria-label": u.intl.string(u.t.w8Sc4B),
                disabled: A,
            }),
        ],
    });
};
