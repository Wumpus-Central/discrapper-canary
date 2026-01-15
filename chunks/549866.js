e.d(t, { default: () => d });
var i = e(54381),
    o = e(473749),
    l = e(481060),
    c = e(239091),
    a = e(796762),
    s = e(695346),
    r = e(572004),
    u = e(388032);
function d(n) {
    let { imageUrl: t, onSelect: e } = n,
        d = s.Sb.useSetting(),
        { tidaWebformEnabled: p } = a.Z.useExperiment({ location: "RoleIconContextMenu" }, { autoTrackExposure: !1 }),
        x = o.useCallback(() => {
            (0, r.JG)(t);
        }, [t]);
    return r.wS && d && p
        ? (0, i.jsx)(l.v2r, {
              navId: "role-icon-context",
              onClose: c.Zy,
              onSelect: e,
              "aria-label": u.intl.string(u.t.Zow2V5),
              children: (0, i.jsx)(l.kSQ, {
                  children: (0, i.jsx)(l.sNh, {
                      id: "copy-image-link",
                      label: u.intl.string(u.t["8xHmxo"]),
                      action: x,
                      icon: l.xPt,
                  }),
              }),
          })
        : null;
}
