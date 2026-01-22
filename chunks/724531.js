n.d(t, {
    A: () => o,
});
var l = n(627968);
n(64700);
var r = n(118633),
    i = n(739836),
    a = n(539916);

function o(e) {
    let { connection: t, guildId: n, location: o } = e;
    return t.connection_type === a.wZ.APPLICATION
        ? (0, l.jsx)(r.A, {
              connection: t,
              guildId: n,
              location: o,
          })
        : t.connection_type === a.wZ.PROVIDER_CONNECTED_ACCOUNT
          ? (0, l.jsx)(i.A, {
                connection: t,
                guildId: n,
                location: o,
            })
          : null;
}
