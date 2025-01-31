n.d(t, { d: () => a });
var i = n(149765);
function r(e) {
    return e.map((e) => ({
        ...e,
        permissions: i.vB(e.permissions)
    }));
}
function a(e) {
    return null == e.guilds
        ? e
        : {
              ...e,
              guilds: r(e.guilds)
          };
}
