r.d(n, {
    d: function () {
        return o;
    }
});
var i = r(149765);
function a(e) {
    return e.map((e) => ({
        ...e,
        permissions: i.vB(e.permissions)
    }));
}
function o(e) {
    return null == e.guilds
        ? e
        : {
              ...e,
              guilds: a(e.guilds)
          };
}
