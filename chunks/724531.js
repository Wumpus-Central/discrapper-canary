n.d(t, { A: () => o });
var l = n(627968);
n(64700);
var i = n(118633),
    a = n(739836),
    r = n(539916);
function o(e) {
    let { connection: t, guildId: n, location: o } = e;
    return t.connection_type === r.wZ.APPLICATION
        ? (0, l.jsx)(i.A, { connection: t, guildId: n, location: o })
        : t.connection_type === r.wZ.PROVIDER_CONNECTED_ACCOUNT
          ? (0, l.jsx)(a.A, { connection: t, guildId: n, location: o })
          : null;
}
