n.d(t, { Q: () => d });
var r = n(951288);
n(647438);
var i = n(442837),
    a = n(481060),
    o = n(594190),
    s = n(865066),
    l = n(809357),
    c = n(44359),
    u = n(388032);
function d(e, t, n, i) {
    return (0, r.jsx)(f, {
        keybind: e,
        message: t,
        messageWithoutKeybind: n,
        highlightAdminWarningIfElevated: i,
    });
}
function f(e) {
    let { keybind: t, message: n, messageWithoutKeybind: d, highlightAdminWarningIfElevated: f = !1 } = e,
        _ = (0, l.o)(),
        p = (0, i.e7)([o.ZP], () => {
            let e = o.ZP.getVisibleGame();
            return null != e && e.elevated && o.ZP.canShowAdminWarning;
        }),
        h = (0, s.hi)();
    return p
        ? (0, r.jsx)(a.Text, {
              variant: "text-xxs/semibold",
              color: f ? "text-feedback-warning" : "text-muted",
              children: h ? u.intl.string(u.t.rqNDQk) : u.intl.string(u.t.PIeSHB),
          })
        : _
          ? (0, r.jsx)(r.Fragment, {
                children: u.intl.format(n, {
                    keybind: t,
                    keybindHook: (e) => (0, r.jsx)(c.Z, { keybind: t }, t.join("+")),
                }),
            })
          : d;
}
