var e = l(855986),
    r = l(627363),
    u = l(260498);
l.d(
    n,
    {},
    {
        Ay: function (t) {
            let n = (0, e.bG)([u.Ay], () => u.Ay.getProject(t)?.preview_application_id, [t]),
                { data: l } = (0, r.YY)(n);
            return { iconURL: l?.getIconURL(160) ?? null, description: l?.description ?? "" };
        },
        En: ["png", "jpg", "jpeg", "gif", "webp"],
        Q0: 2097152,
    },
);
