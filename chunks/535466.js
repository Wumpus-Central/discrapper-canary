n.d(t, { Ay: () => s, En: () => u, Q0: () => a });
var l = n(17928),
    i = n(627363),
    r = n(260498);
let a = 2097152,
    u = ["png", "jpg", "jpeg", "gif", "webp"];
function s(e) {
    let t = (0, l.bG)([r.Ay], () => r.Ay.getProject(e)?.preview_application_id, [e]),
        { data: n } = (0, i.YY)(t);
    return { iconURL: n?.getIconURL(160) ?? null, description: n?.description ?? "" };
}
