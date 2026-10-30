n.d(l, { A: () => h });
var e = n(477900);
n(582128);
var i = n(503698),
    a = n.n(i),
    u = n(323384),
    r = n(105840),
    s = n(627363),
    o = n(486020),
    d = n(470613);
function c(t) {
    let { project: l, glyphSize: n, className: i } = t,
        { character: a, backgroundColor: s, foregroundColor: o } = (0, r.A)(l.application_id, l.name);
    return (0, e.jsx)("div", {
        className: i,
        style: { backgroundColor: s, color: o },
        "aria-hidden": !0,
        children: a ?? (0, e.jsx)(u.k, { size: "custom", width: n, height: n, color: "currentColor" }),
    });
}
let p = {
    header: { pixels: 20, className: d.wx },
    sidebar: { pixels: 32, className: d.pz },
    card: { pixels: 40, className: d.Nr },
    list: { pixels: 44, className: d.p_ },
    dialog: { pixels: 48, className: d.r3 },
};
function h(t) {
    let { project: l, size: n, className: i } = t,
        { pixels: u, className: r } = p[n],
        { url: h, glyphSize: f } = (function (t, l) {
            let n = t.preview_application_id ?? t.application_id,
                { data: e } = (0, s.YY)(n);
            return {
                url: e?.icon != null ? o.Ay.getApplicationIconURL({ id: n, icon: e.icon, size: l }) : void 0,
                ...{ glyphSize: Math.round(0.6 * l), radius: l / 4 },
            };
        })(l, u);
    return null == h
        ? (0, e.jsx)(c, { project: l, glyphSize: f, className: a()(d.Gt, d.qf, r, i) })
        : (0, e.jsx)("img", { alt: "", src: h, className: a()(d.Gt, d.Sl, r, i) });
}
