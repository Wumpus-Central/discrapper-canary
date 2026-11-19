var l = e(855986),
    r = e(627363),
    i = e(260498);
e.d(
    n,
    {},
    {
        Ay: function (t) {
            let n = (0, l.bG)([i.Ay], () => i.Ay.getProject(t)?.preview_application_id, [t]),
                { data: e } = (0, r.YY)(n);
            return { iconURL: e?.getIconURL(160) ?? null, description: e?.description ?? "" };
        },
        En: ["png", "jpg", "jpeg", "gif", "webp"],
        Q0: 2097152,
    },
);
