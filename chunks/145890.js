i.d(
    n,
    {},
    {
        A: function (t) {
            let { applicationId: n, gameOrganizationId: i } = t;
            return `game-organization-invite:${n}:${i}`;
        },
        e: function (t) {
            let { applicationId: n, id: i } = t;
            return { applicationId: n, gameOrganizationId: i };
        },
    },
);
