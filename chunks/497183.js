a.d(n, { A: () => d });
var e = a(477900);
a(582128);
var r = a(503698),
    i = a.n(r),
    l = a(323384),
    o = a(661531),
    u = a(627363),
    s = a(486020),
    c = a(470613);
let f = {
    header: { pixels: 20, className: c.wx },
    card: { pixels: 40, className: c.Nr },
    list: { pixels: 44, className: c.p_ },
    dialog: { pixels: 48, className: c.r3 },
};
function d(t) {
    let { project: n, size: a, className: r } = t,
        { pixels: d, className: h } = f[a],
        { url: m, glyphSize: p } = (function (t, n) {
            let a = t.preview_application_id ?? t.application_id,
                { data: e } = (0, u.YY)(a);
            return {
                url: e?.icon != null ? s.Ay.getApplicationIconURL({ id: a, icon: e.icon, size: n }) : void 0,
                ...{ glyphSize: Math.round(0.6 * n), radius: n / 4 },
            };
        })(n, d);
    return null == m
        ? (0, e.jsx)("div", {
              className: i()(c.Gt, c.qf, h, r),
              "aria-hidden": !0,
              children: (0, e.jsx)(l.k, {
                  size: "custom",
                  width: p,
                  height: p,
                  color: o.A.colors.INTERACTIVE_ICON_DEFAULT,
              }),
          })
        : (0, e.jsx)("img", { alt: "", src: m, className: i()(c.Gt, c.Sl, h, r) });
}
