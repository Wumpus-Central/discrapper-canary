n.d(t, { A: () => s, w: () => a });
var i = n(627363),
    r = n(486020);
function a(e) {
    return { glyphSize: Math.round(0.6 * e), radius: e / 4 };
}
function s(e, t) {
    let n = e.preview_application_id ?? e.application_id,
        { data: s } = (0, i.YY)(n);
    return { url: s?.icon != null ? r.Ay.getApplicationIconURL({ id: n, icon: s.icon, size: t }) : void 0, ...a(t) };
}
