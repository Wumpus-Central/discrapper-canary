"use strict";
n.d(t, { A: () => _ });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(319060),
    o = n(397927),
    d = n(201275),
    c = n(342298),
    u = n(657048),
    m = n(240248),
    g = n(985018),
    x = n(802652);
let h = (0, m.xI)(a.A.ROLE_ICON_UPLOADER_ICON_SIZE);
function _(e) {
    let { role: t, "aria-label": n = g.intl.string(g.t["MsUY/S"]), className: l, onClick: a, disabled: m = !1 } = e,
        _ = s.useRef(null),
        A = s.useMemo(() => (0, d.ox)(t, h), [t]),
        p =
            null != A
                ? (0, i.jsx)(u.A, { enableTooltip: !1, className: x.Kk, ...A })
                : (0, i.jsx)(o.XGR, { size: "md", color: "currentColor", className: x.Kk });
    return (0, i.jsx)(o.vN3, {
        ringTarget: _,
        children: (0, i.jsxs)(o.DUT, {
            "aria-label": n,
            className: r()(x.kL, l, { [x.r9]: m }),
            onClick: m ? void 0 : a,
            "aria-disabled": m,
            children: [
                (0, i.jsx)("div", { ref: _, className: x.VH, children: p }),
                null != A ? (0, i.jsx)(c.L, { className: x.Sl }) : null,
            ],
        }),
    });
}
