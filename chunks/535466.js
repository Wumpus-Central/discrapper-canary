var e = i(855986),
    l = i(627363),
    u = i(260498);
i.d(
    t,
    {},
    {
        Ay: function (n) {
            let t = (0, e.bG)([u.Ay], () => u.Ay.getProject(n)?.preview_application_id, [n]),
                { data: i } = (0, l.YY)(t);
            return { iconURL: i?.getIconURL(160) ?? null, description: i?.description ?? "" };
        },
        En: ["png", "jpg", "jpeg", "gif", "webp"],
        Q0: 2097152,
    },
);
