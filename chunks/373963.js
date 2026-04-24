n.d(t, { A: () => c });
var i = n(627968);
n(64700);
var l = n(477782),
    s = n(624479),
    r = n(723702),
    a = n(19575),
    o = n(985018);
function c(e, t) {
    return r.isPlatformEmbedded && e?.length !== 0
        ? (0, i.jsx)(l.Dr, {
              id: "copy",
              label: o.intl.string(o.t.OpuAlK),
              shortcut: (0, r.isMac)() ? "⌘C" : "Ctrl+C",
              leadingAccessory: { type: "icon", icon: s.T },
              action: () => {
                  a.Ay.copy(e), t?.focus();
              },
          })
        : null;
}
