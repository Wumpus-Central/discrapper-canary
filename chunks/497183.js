n.d(t, { A: () => f });
var l = n(477900);
n(582128);
var a = n(503698),
    i = n.n(a),
    r = n(323384),
    s = n(661531),
    o = n(627363),
    d = n(486020),
    u = n(470613);
let c = {
    header: { pixels: 20, className: u.wx },
    card: { pixels: 40, className: u.Nr },
    list: { pixels: 44, className: u.p_ },
};
function f(e) {
    let { project: t, size: n, className: a } = e,
        { pixels: f, className: m } = c[n],
        { url: h, glyphSize: g } = (function (e, t) {
            let n = e.preview_application_id ?? e.application_id,
                { data: l } = (0, o.YY)(n);
            return {
                url: l?.icon != null ? d.Ay.getApplicationIconURL({ id: n, icon: l.icon, size: t }) : void 0,
                glyphSize: Math.round(0.6 * t),
                radius: t / 4,
            };
        })(t, f);
    return null == h
        ? (0, l.jsx)("div", {
              className: i()(u.Gt, u.qf, m, a),
              "aria-hidden": !0,
              children: (0, l.jsx)(r.k, {
                  size: "custom",
                  width: g,
                  height: g,
                  color: s.A.colors.INTERACTIVE_ICON_DEFAULT,
              }),
          })
        : (0, l.jsx)("img", { alt: "", src: h, className: i()(u.Gt, u.Sl, m, a) });
}
