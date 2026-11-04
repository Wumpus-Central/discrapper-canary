let i = /[^a-zA-Z0-9-_.]/g;
n.d(
    t,
    {},
    {
        A: function (e) {
            return e.trim().replaceAll(" ", "_").replaceAll(i, "");
        },
    },
);
