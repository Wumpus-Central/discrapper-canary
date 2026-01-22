n.d(t, {
    default: () => d,
});
var i = n(627968),
    a = n(64700),
    l = n(397927),
    o = n(442433),
    s = n(486503),
    c = n(253932),
    r = n(957565),
    u = n(985018);

function d(e) {
    let { imageUrl: t, onSelect: n } = e,
        d = c.Q_.useSetting(),
        { tidaWebformEnabled: p } = s.A.useExperiment(
            {
                location: "GuildEventImageContextMenu",
            },
            {
                autoTrackExposure: !1,
            },
        ),
        x = a.useCallback(() => {
            (0, r.C)(t);
        }, [t]);
    return r.p5 && d && p
        ? (0, i.jsx)(l.W1t, {
              navId: "guild-event-image-context",
              onClose: o.Z_,
              onSelect: n,
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
