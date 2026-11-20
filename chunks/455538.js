var t = e(477900),
    c = e(582128),
    a = e(165862),
    l = e(477782),
    o = e(173936),
    s = e(442433),
    r = e(253932),
    d = e(957565),
    u = e(792996);
e.d(
    i,
    {},
    {
        default: function (n) {
            let { imageUrl: i, onSelect: e } = n,
                p = r.Q_.useSetting(),
                k = c.useCallback(() => {
                    (0, d.C)(i);
                }, [i]);
            return d.p5 && p
                ? (0, t.jsx)(a.W, {
                      "data-menu-migrated": !0,
                      navId: "role-icon-context",
                      onClose: s.Z_,
                      onSelect: e,
                      "aria-label": u.intl.string(u.t.Zow2V5),
                      children: (0, t.jsx)(l.rX, {
                          children: (0, t.jsx)(l.Dr, {
                              id: "copy-image-link",
                              label: u.intl.string(u.t["8xHmxo"]),
                              action: k,
                              icon: o.LinkIcon,
                              leadingAccessory: { type: "icon", icon: o.LinkIcon },
                          }),
                      }),
                  })
                : null;
        },
    },
);
