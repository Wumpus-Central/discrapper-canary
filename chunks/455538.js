var t = e(477900),
    c = e(582128),
    l = e(165862),
    a = e(477782),
    o = e(173936),
    s = e(442433),
    r = e(207560),
    d = e(253932),
    u = e(957565),
    p = e(792996);
e.d(
    i,
    {},
    {
        default: function (n) {
            let { imageUrl: i, onSelect: e } = n,
                k = d.Q_.useSetting(),
                h = (0, r.lF)(),
                g = c.useCallback(() => {
                    (0, u.C)(i);
                }, [i]);
            return u.p5 && k && h
                ? (0, t.jsx)(l.W, {
                      "data-menu-migrated": !0,
                      navId: "role-icon-context",
                      onClose: s.Z_,
                      onSelect: e,
                      "aria-label": p.intl.string(p.t.Zow2V5),
                      children: (0, t.jsx)(a.rX, {
                          children: (0, t.jsx)(a.Dr, {
                              id: "copy-image-link",
                              label: p.intl.string(p.t["8xHmxo"]),
                              action: g,
                              icon: o.LinkIcon,
                              leadingAccessory: { type: "icon", icon: o.LinkIcon },
                          }),
                      }),
                  })
                : null;
        },
    },
);
