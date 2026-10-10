n.d(t, { A: () => m });
var l = n(477900);
n(582128);
var a = n(503698),
    r = n.n(a),
    i = n(323384),
    s = n(661531),
    u = n(627363),
    d = n(486020),
    o = n(470613);
let c = {
    header: { pixels: 20, className: o.wx },
    card: { pixels: 40, className: o.Nr },
    list: { pixels: 44, className: o.p_ },
};
function m(e) {
    let { project: t, size: n, className: a } = e,
        { pixels: m, className: f } = c[n],
        { url: h, glyphSize: g } = (function (e, t) {
            let n = e.preview_application_id ?? e.application_id,
                { data: l } = (0, u.YY)(n);
            return {
                url: l?.icon != null ? d.Ay.getApplicationIconURL({ id: n, icon: l.icon, size: t }) : void 0,
                glyphSize: Math.round(0.6 * t),
                radius: t / 4,
            };
        })(t, m);
    return null == h
        ? (0, l.jsx)("div", {
              className: r()(o.Gt, o.qf, f, a),
              "aria-hidden": !0,
              children: (0, l.jsx)(i.k, {
                  size: "custom",
                  width: g,
                  height: g,
                  color: s.A.colors.INTERACTIVE_ICON_DEFAULT,
              }),
          })
        : (0, l.jsx)("img", { alt: "", src: h, className: r()(o.Gt, o.Sl, f, a) });
}
