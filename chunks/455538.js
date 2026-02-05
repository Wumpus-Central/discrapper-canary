t.d(n, { default: () => d });
var i = t(627968),
    o = t(64700),
    a = t(397927),
    c = t(442433),
    l = t(486503),
    r = t(253932),
    s = t(957565),
    u = t(985018);
function d(e) {
    let { imageUrl: n, onSelect: t } = e,
        d = r.Q_.useSetting(),
        { tidaWebformEnabled: p } = l.A.useExperiment({ location: "RoleIconContextMenu" }, { autoTrackExposure: !1 }),
        x = o.useCallback(() => {
            (0, s.C)(n);
        }, [n]);
    return s.p5 && d && p
        ? (0, i.jsx)(a.W1t, {
              "data-menu-migrated": !0,
              navId: "role-icon-context",
              onClose: c.Z_,
              onSelect: t,
              "aria-label": u.intl.string(u.t.Zow2V5),
              children: (0, i.jsx)(a.rXV, {
                  children: (0, i.jsx)(a.Drp, {
                      id: "copy-image-link",
                      label: u.intl.string(u.t["8xHmxo"]),
                      action: x,
                      icon: a.qYV,
                      leadingAccessory: { type: "icon", icon: a.qYV },
                  }),
              }),
          })
        : null;
}
