t.d(n, { A: () => o });
var l = t(627968);
t(64700);
var i = t(118633),
    a = t(739836),
    r = t(539916);
function o(e) {
    let { connection: n, guildId: t, location: o } = e;
    return n.connection_type === r.wZ.APPLICATION
        ? (0, l.jsx)(i.A, { connection: n, guildId: t, location: o })
        : n.connection_type === r.wZ.PROVIDER_CONNECTED_ACCOUNT
          ? (0, l.jsx)(a.A, { connection: n, guildId: t, location: o })
          : null;
}
