n.d(t, { Ay: () => s, En: () => u, Q0: () => r });
var l = n(17928),
    i = n(627363),
    a = n(260498);
let r = 2097152,
    u = ["png", "jpg", "jpeg", "gif", "webp"];
function s(e) {
    let t = (0, l.bG)([a.Ay], () => a.Ay.getProject(e)?.preview_application_id, [e]),
        { data: n } = (0, i.YY)(t);
    return { iconURL: n?.getIconURL(160) ?? null, description: n?.description ?? "" };
}
