var t = e(477900);
e(582128);
var c = e(477782),
    o = e(624479),
    r = e(723702),
    a = e(253400),
    s = e(792996);
e.d(
    i,
    {},
    {
        A: function (n, i) {
            return r.isPlatformEmbedded && n?.length !== 0
                ? (0, t.jsx)(c.Dr, {
                      id: "copy",
                      label: s.intl.string(s.t.OpuAlK),
                      shortcut: (0, r.cX)() ? "\u2318C" : "Ctrl+C",
                      leadingAccessory: { type: "icon", icon: o.CopyIcon },
                      action: () => {
                          (a.Ay.copy(n), i?.focus());
                      },
                  })
                : null;
        },
    },
);
