t.d(n, { Z: () => r });
var l = t(951288);
t(647438);
var i = t(526746),
    a = t(562715),
    o = t(290511);
function r(e) {
    let { connection: n } = e;
    return n.connection_type === o.zz.APPLICATION
        ? (0, l.jsx)(i.Z, { connection: n })
        : n.connection_type === o.zz.PROVIDER_CONNECTED_ACCOUNT
          ? (0, l.jsx)(a.Z, { connection: n })
          : null;
}
