t.d(e, {
    default: () => p,
});
var i = t(627968),
    l = t(64700),
    o = t(397927),
    a = t(442433),
    c = t(486503),
    s = t(253932),
    r = t(957565),
    u = t(985018);

function p(n) {
    let { imageUrl: e, onSelect: t } = n,
        p = s.Q_.useSetting(),
        { tidaWebformEnabled: d } = c.A.useExperiment(
            {
                location: "RoleIconContextMenu",
            },
            {
                autoTrackExposure: !1,
            },
        ),
        x = l.useCallback(() => {
            (0, r.C)(e);
        }, [e]);
    return r.p5 && p && d
        ? (0, i.jsx)(o.W1t, {
              "data-menu-all-icons": !0,
              navId: "role-icon-context",
              onClose: a.Z_,
              onSelect: t,
              "aria-label": u.intl.string(u.t.Zow2V5),
              children: (0, i.jsx)(o.rXV, {
                  children: (0, i.jsx)(o.Drp, {
                      id: "copy-image-link",
                      label: u.intl.string(u.t["8xHmxo"]),
                      action: x,
                      icon: o.qYV,
                  }),
              }),
          })
        : null;
}
