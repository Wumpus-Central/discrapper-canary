n.d(t, { A: () => m });
var l = n(477900);
n(582128);
var a = n(503698),
    i = n.n(a),
    r = n(323384),
    s = n(661531),
    u = n(627363),
    d = n(486020),
    o = n(204596);
let c = { md: { pixels: 40, className: o.md }, lg: { pixels: 44, className: o.lg } };
function m(e) {
    let { project: t, size: n, className: a, placeholderClassName: m } = e,
        f = t.preview_application_id ?? t.application_id,
        { data: h } = (0, u.YY)(f),
        { pixels: x, className: p } = c[n];
    return h?.icon == null
        ? (0, l.jsx)("div", {
              className: i()(o.Gt, o.qf, p, a, m),
              "aria-hidden": !0,
              children: (0, l.jsx)(r.k, { size: "custom", width: 20, height: 20, color: s.A.colors.ICON_MUTED }),
          })
        : (0, l.jsx)("img", {
              alt: "",
              src: d.Ay.getApplicationIconURL({ id: f, icon: h.icon, size: x }),
              className: i()(o.Gt, o.Sl, p, a),
          });
}
