n.d(
    t,
    {},
    {
        Xw: function (e) {
            return { id: e.id, name: e.name, iconUrl: e.icon_url };
        },
        y1: function (e) {
            return {
                id: e.id,
                name: e.name,
                icon: e.icon,
                memberCount: e.approximate_member_count,
                presenceCount: e.approximate_presence_count,
            };
        },
    },
);
