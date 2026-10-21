a.d(e, { A: () => h });
var l = a(477900);
a(582128);
var t = a(503698),
    s = a.n(t),
    n = a(323384),
    c = a(661531),
    r = a(627363),
    u = a(486020),
    d = a(470613);
let o = {
    header: { pixels: 20, className: d.wx },
    card: { pixels: 40, className: d.Nr },
    list: { pixels: 44, className: d.p_ },
};
function h(i) {
    let { project: e, size: a, className: t } = i,
        { pixels: h, className: p } = o[a],
        { url: m, glyphSize: x } = (function (i, e) {
            let a = i.preview_application_id ?? i.application_id,
                { data: l } = (0, r.YY)(a);
            return {
                url: l?.icon != null ? u.Ay.getApplicationIconURL({ id: a, icon: l.icon, size: e }) : void 0,
                glyphSize: Math.round(0.6 * e),
                radius: e / 4,
            };
        })(e, h);
    return null == m
        ? (0, l.jsx)("div", {
              className: s()(d.Gt, d.qf, p, t),
              "aria-hidden": !0,
              children: (0, l.jsx)(n.k, {
                  size: "custom",
                  width: x,
                  height: x,
                  color: c.A.colors.INTERACTIVE_ICON_DEFAULT,
              }),
          })
        : (0, l.jsx)("img", { alt: "", src: m, className: s()(d.Gt, d.Sl, p, t) });
}
