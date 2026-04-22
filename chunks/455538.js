t.d(n, { default: () => p });
var i = t(627968),
    a = t(64700),
    l = t(861672),
    o = t(477782),
    d = t(173936),
    r = t(442433),
    c = t(486503),
    s = t(253932),
    u = t(957565),
    b = t(985018);
function p(e) {
    let { imageUrl: n, onSelect: t } = e,
        p = s.Q_.useSetting(),
        { tidaWebformEnabled: m } = c.A.useExperiment({ location: "RoleIconContextMenu" }, { autoTrackExposure: !1 }),
        f = a.useCallback(() => {
            (0, u.C)(n);
        }, [n]);
    return u.p5 && p && m
        ? (0, i.jsx)(l.W, {
              "data-menu-migrated": !0,
              navId: "role-icon-context",
              onClose: r.Z_,
              onSelect: t,
              "aria-label": b.intl.string(b.t.Zow2V5),
              children: (0, i.jsx)(o.rX, {
                  children: (0, i.jsx)(o.Dr, {
                      id: "copy-image-link",
                      label: b.intl.string(b.t["8xHmxo"]),
                      action: f,
                      icon: d.q,
                      leadingAccessory: { type: "icon", icon: d.q },
                  }),
              }),
          })
        : null;
}
