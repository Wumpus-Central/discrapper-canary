n.d(t, { Q: () => h });
var r = n(951288);
n(647438);
var i = n(442837),
    a = n(481060),
    o = n(594190),
    s = n(174609),
    l = n(865066),
    c = n(313789),
    u = n(518596),
    d = n(809357),
    f = n(44359),
    _ = n(981631),
    p = n(388032);
function h(e, t, n, i) {
    return (0, r.jsx)(m, {
        keybind: e,
        message: t,
        messageWithoutKeybind: n,
        highlightAdminWarningIfElevated: i,
    });
}
function m(e) {
    let { keybind: t, message: n, messageWithoutKeybind: h, highlightAdminWarningIfElevated: m = !1 } = e,
        g = (0, d.o)(),
        E = (0, i.e7)([o.ZP], () => {
            let e = o.ZP.getVisibleGame();
            return null != e && e.elevated && o.ZP.canShowAdminWarning;
        }),
        b = (0, l.hi)();
    return E
        ? (0, r.jsx)(a.Text, {
              variant: "text-xxs/semibold",
              color: m ? "text-feedback-warning" : "text-muted",
              children: b
                  ? p.intl.format(p.t.MVS9pa, {
                        onSettingsClick: (e) => {
                            e.stopPropagation(),
                                (0, s.Z)(void 0, !0),
                                (0, u.openUserSettings)(c.n.OVERLAY_PANEL, { section: _.oAB.OVERLAY });
                        },
                    })
                  : p.intl.string(p.t.PIeSHB),
          })
        : g
          ? (0, r.jsx)(r.Fragment, {
                children: p.intl.format(n, {
                    keybind: t,
                    keybindHook: (e) => (0, r.jsx)(f.Z, { keybind: t }, t.join("+")),
                }),
            })
          : h;
}
