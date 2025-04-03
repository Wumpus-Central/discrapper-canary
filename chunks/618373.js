n.d(t, { Q: () => u });
var i = n(200651);
n(192379);
var r = n(442837),
    o = n(481060),
    l = n(594190),
    a = n(809357),
    s = n(44359),
    c = n(388032);
function u(e, t, n, r) {
    return (0, i.jsx)(d, {
        keybind: e,
        message: t,
        messageWithoutKeybind: n,
        highlightAdminWarningIfElevated: r
    });
}
function d(e) {
    let { keybind: t, message: n, messageWithoutKeybind: u, highlightAdminWarningIfElevated: d = !1 } = e,
        p = (0, a.o)();
    return (0, r.e7)([l.ZP], () => {
        let e = l.ZP.getVisibleGame();
        return null != e && e.elevated && l.ZP.canShowAdminWarning;
    })
        ? (0, i.jsx)(o.Text, {
              variant: 'text-xxs/semibold',
              color: d ? 'text-warning' : 'text-muted',
              children: c.NW.string(c.t.PIeSHB)
          })
        : p
          ? (0, i.jsx)(i.Fragment, {
                children: c.NW.format(n, {
                    keybind: t,
                    keybindHook: (e) => (0, i.jsx)(s.Z, { keybind: t }, t.join('+'))
                })
            })
          : u;
}
