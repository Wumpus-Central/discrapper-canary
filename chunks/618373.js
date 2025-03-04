n.d(t, { Q: () => a });
var i = n(200651);
n(192379);
var r = n(809357),
    o = n(44359),
    l = n(388032);
function a(e, t, n) {
    return (0, i.jsx)(s, {
        keybind: e,
        message: t,
        messageWithoutKeybind: n
    });
}
function s(e) {
    let { keybind: t, message: n, messageWithoutKeybind: a } = e;
    return (0, r.o)()
        ? l.NW.format(n, {
              keybind: t,
              keybindHook: (e) => (0, i.jsx)(o.Z, { keybind: t }, t.join('+'))
          })
        : a;
}
