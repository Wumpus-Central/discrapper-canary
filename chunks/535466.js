e.d(t, { Ay: () => a, En: () => r, Q0: () => u });
var i = e(17928),
    l = e(627363),
    c = e(260498);
let u = 2097152,
    r = ["png", "jpg", "jpeg", "gif", "webp"];
function a(n) {
    let t = (0, i.bG)([c.Ay], () => c.Ay.getProject(n)?.preview_application_id, [n]),
        { data: e } = (0, l.YY)(t);
    return { iconURL: e?.getIconURL(160) ?? null, description: e?.description ?? "" };
}
