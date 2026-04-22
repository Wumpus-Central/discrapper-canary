n.d(t, { A: () => o });
var i = n(627968);
n(64700);
var s = n(477782),
    l = n(624479),
    r = n(723702),
    a = n(837921),
    c = n(985018);
function o(e, t) {
    return r.isPlatformEmbedded && e?.length !== 0
        ? (0, i.jsx)(s.Dr, {
              id: "copy",
              label: c.intl.string(c.t.OpuAlK),
              shortcut: (0, r.isMac)() ? "⌘C" : "Ctrl+C",
              leadingAccessory: { type: "icon", icon: l.T },
              action: () => {
                  a.Ay.copy(e), t?.focus();
              },
          })
        : null;
}
