n.d(t, { Z: () => d });
var r = n(951288);
n(647438);
var i = n(481060),
    a = n(846027),
    o = n(240872),
    s = n(503856),
    l = n(388032);
function c(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function u(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                c(e, t, n[t]);
            });
    }
    return e;
}
function d(e, t, c) {
    return t && (0, s.p)()
        ? void (0, i.ZDy)(async () => {
              let { default: e } = await n.e("41281").then(n.bind(n, 669732));
              return (t) => (0, r.jsx)(e, u({}, t));
          })
        : t
          ? void o.Z.show({
                title: l.intl.string(l.t.FJSZVF),
                body: l.intl.string(l.t.etJjgY),
            })
          : e
            ? void o.Z.show({
                  title: l.intl.string(l.t["+JQCa2"]),
                  body: l.intl.string(l.t.hsNm7e),
              })
            : void a.Z.toggleSelfMute({ location: c });
}
