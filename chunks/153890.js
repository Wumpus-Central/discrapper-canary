n.d(t, { default: () => d });
var i = n(54381),
    a = n(473749),
    l = n(481060),
    o = n(239091),
    s = n(796762),
    c = n(695346),
    u = n(572004),
    r = n(388032);
function d(e) {
    let { imageUrl: t, onSelect: n } = e,
        d = c.Sb.useSetting(),
        { tidaWebformEnabled: p } = s.Z.useExperiment(
            { location: "GuildEventImageContextMenu" },
            { autoTrackExposure: !1 },
        ),
        x = a.useCallback(() => {
            (0, u.JG)(t);
        }, [t]);
    return u.wS && d && p
        ? (0, i.jsx)(l.v2r, {
              navId: "guild-event-image-context",
              onClose: o.Zy,
              onSelect: n,
              "aria-label": r.intl.string(r.t.Zow2V5),
              children: (0, i.jsx)(l.kSQ, {
                  children: (0, i.jsx)(l.sNh, {
                      id: "copy-image-link",
                      label: r.intl.string(r.t["8xHmxo"]),
                      action: x,
                      icon: l.xPt,
                  }),
              }),
          })
        : null;
}
