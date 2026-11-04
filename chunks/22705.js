i.d(
    n,
    {},
    {
        A: function (e) {
            return null != e ? { id: e.id, name: e.name ?? "" } : null;
        },
    },
);
