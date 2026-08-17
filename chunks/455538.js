i.d(e, { default: () => k });
var t = i(477900),
    o = i(582128),
    c = i(980707),
    a = i(477782),
    l = i(173936),
    r = i(442433),
    s = i(486503),
    u = i(885386),
    d = i(957565),
    p = i(375708);
function k(n) {
    let { imageUrl: e, onSelect: i } = n,
        k = u.Q_.useSetting(),
        { tidaWebformEnabled: x } = s.A.useExperiment({ location: "RoleIconContextMenu" }, { autoTrackExposure: !1 }),
        h = o.useCallback(() => {
            (0, d.C)(e);
        }, [e]);
    return d.p5 && k && x
        ? (0, t.jsx)(c.W, {
              "data-menu-migrated": !0,
              navId: "role-icon-context",
              onClose: r.Z_,
              onSelect: i,
              "aria-label": p.intl.string(p.t.Zow2V5),
              children: (0, t.jsx)(a.rX, {
                  children: (0, t.jsx)(a.Dr, {
                      id: "copy-image-link",
                      label: p.intl.string(p.t["8xHmxo"]),
                      action: h,
                      icon: l.LinkIcon,
                      leadingAccessory: { type: "icon", icon: l.LinkIcon },
                  }),
              }),
          })
        : null;
}
