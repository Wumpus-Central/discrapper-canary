n.d(t, { Z: () => a });
var l = n(951288);
n(647438);
var r = n(526746),
    i = n(562715),
    o = n(290511);
function a(e) {
    let { connection: t, guildId: n, location: a } = e;
    return t.connection_type === o.zz.APPLICATION
        ? (0, l.jsx)(r.Z, {
              connection: t,
              guildId: n,
              location: a,
          })
        : t.connection_type === o.zz.PROVIDER_CONNECTED_ACCOUNT
          ? (0, l.jsx)(i.Z, {
                connection: t,
                guildId: n,
                location: a,
            })
          : null;
}
