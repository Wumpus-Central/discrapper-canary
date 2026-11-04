var t = e(477900);
e(582128);
var c = e(477782),
    r = e(624479),
    o = e(723702),
    a = e(253400),
    s = e(792996);
e.d(
    i,
    {},
    {
        A: function (n, i) {
            return o.isPlatformEmbedded && n?.length !== 0
                ? (0, t.jsx)(c.Dr, {
                      id: "copy",
                      label: s.intl.string(s.t.OpuAlK),
                      shortcut: (0, o.cX)() ? "\u2318C" : "Ctrl+C",
                      leadingAccessory: { type: "icon", icon: r.CopyIcon },
                      action: () => {
                          (a.Ay.copy(n), i?.focus());
                      },
                  })
                : null;
        },
    },
);
