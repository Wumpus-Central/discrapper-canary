e.d(i, { A: () => l });
var t = e(627968);
e(64700);
var c = e(477782),
    r = e(624479),
    a = e(723702),
    o = e(19575),
    s = e(375708);
function l(n, i) {
    return a.isPlatformEmbedded && n?.length !== 0
        ? (0, t.jsx)(c.Dr, {
              id: "copy",
              label: s.intl.string(s.t.OpuAlK),
              shortcut: (0, a.isMac)() ? "\u2318C" : "Ctrl+C",
              leadingAccessory: { type: "icon", icon: r.T },
              action: () => {
                  o.Ay.copy(n), i?.focus();
              },
          })
        : null;
}
