e.d(a, { A: () => d });
var n = e(477900);
e(582128);
var i = e(503698),
    r = e.n(i),
    l = e(323384),
    o = e(661531),
    u = e(627363),
    s = e(486020),
    c = e(470613);
let h = {
    header: { pixels: 20, className: c.wx },
    card: { pixels: 40, className: c.Nr },
    list: { pixels: 44, className: c.p_ },
};
function d(t) {
    let { project: a, size: e, className: i } = t,
        { pixels: d, className: m } = h[e],
        { url: f, glyphSize: p } = (function (t, a) {
            let e = t.preview_application_id ?? t.application_id,
                { data: n } = (0, u.YY)(e);
            return {
                url: n?.icon != null ? s.Ay.getApplicationIconURL({ id: e, icon: n.icon, size: a }) : void 0,
                glyphSize: Math.round(0.6 * a),
                radius: a / 4,
            };
        })(a, d);
    return null == f
        ? (0, n.jsx)("div", {
              className: r()(c.Gt, c.qf, m, i),
              "aria-hidden": !0,
              children: (0, n.jsx)(l.k, {
                  size: "custom",
                  width: p,
                  height: p,
                  color: o.A.colors.INTERACTIVE_ICON_DEFAULT,
              }),
          })
        : (0, n.jsx)("img", { alt: "", src: f, className: r()(c.Gt, c.Sl, m, i) });
}
