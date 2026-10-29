n.d(l, { A: () => p });
var e = n(477900);
n(582128);
var i = n(503698),
    a = n.n(i),
    u = n(323384),
    r = n(661531),
    s = n(627363),
    o = n(486020),
    d = n(470613);
let c = {
    header: { pixels: 20, className: d.wx },
    sidebar: { pixels: 32, className: d.pz },
    card: { pixels: 40, className: d.Nr },
    list: { pixels: 44, className: d.p_ },
    dialog: { pixels: 48, className: d.r3 },
};
function p(t) {
    let { project: l, size: n, className: i } = t,
        { pixels: p, className: h } = c[n],
        { url: f, glyphSize: g } = (function (t, l) {
            let n = t.preview_application_id ?? t.application_id,
                { data: e } = (0, s.YY)(n);
            return {
                url: e?.icon != null ? o.Ay.getApplicationIconURL({ id: n, icon: e.icon, size: l }) : void 0,
                ...{ glyphSize: Math.round(0.6 * l), radius: l / 4 },
            };
        })(l, p);
    return null == f
        ? (0, e.jsx)("div", {
              className: a()(d.Gt, d.qf, h, i),
              "aria-hidden": !0,
              children: (0, e.jsx)(u.k, {
                  size: "custom",
                  width: g,
                  height: g,
                  color: r.A.colors.INTERACTIVE_ICON_DEFAULT,
              }),
          })
        : (0, e.jsx)("img", { alt: "", src: f, className: a()(d.Gt, d.Sl, h, i) });
}
