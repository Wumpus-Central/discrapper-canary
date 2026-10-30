a.d(n, { A: () => r });
var e = a(627363),
    i = a(486020);
function r(t, n) {
    let a = t.preview_application_id ?? t.application_id,
        { data: r } = (0, e.YY)(a);
    return {
        url: r?.icon != null ? i.Ay.getApplicationIconURL({ id: a, icon: r.icon, size: n }) : void 0,
        ...{ glyphSize: Math.round(0.6 * n), radius: n / 4 },
    };
}
