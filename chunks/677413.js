let i = "@silent",
    r = RegExp(`^${i}(\\s|$)`);
n.d(
    t,
    {},
    {
        Ay: function (e) {
            return null == e ? [!1, ""] : null == e.match(r) ? [!1, e] : [!0, e.substring(i.length).trim()];
        },
        U1: r,
        f5: i,
    },
);
