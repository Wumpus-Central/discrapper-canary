t.d(n, {
    default: () => p,
});
var i = t(627968),
    o = t(64700),
    l = t(397927),
    a = t(442433),
    c = t(486503),
    r = t(253932),
    s = t(957565),
    u = t(985018);

function p(e) {
    let { imageUrl: n, onSelect: t } = e,
        p = r.Q_.useSetting(),
        { tidaWebformEnabled: d } = c.A.useExperiment(
            {
                location: "RoleIconContextMenu",
            },
            {
                autoTrackExposure: !1,
            },
        ),
        x = o.useCallback(() => {
            (0, s.C)(n);
        }, [n]);
    return s.p5 && p && d
        ? (0, i.jsx)(l.W1t, {
              navId: "role-icon-context",
              onClose: a.Z_,
              onSelect: t,
              "aria-label": u.intl.string(u.t.Zow2V5),
              children: (0, i.jsx)(l.rXV, {
                  children: (0, i.jsx)(l.Drp, {
                      id: "copy-image-link",
                      label: u.intl.string(u.t["8xHmxo"]),
                      action: x,
                      icon: l.qYV,
                  }),
              }),
          })
        : null;
}
