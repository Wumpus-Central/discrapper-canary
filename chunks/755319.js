i.d(t, { default: () => d });
var e = i(627968),
    a = i(64700),
    l = i(397927),
    o = i(442433),
    s = i(486503),
    r = i(253932),
    c = i(957565),
    u = i(985018);
function d(n) {
    let { splashUrl: t, onSelect: i } = n,
        d = r.Q_.useSetting(),
        { tidaWebformEnabled: p } = s.A.useExperiment(
            { location: "GuildOnboardingSplashContextMenu" },
            { autoTrackExposure: !1 },
        ),
        h = a.useCallback(() => {
            (0, c.C)(t);
        }, [t]);
    return c.p5 && d && p
        ? (0, e.jsx)(l.W1t, {
              navId: "guild-onboarding-splash-context",
              onClose: o.Z_,
              onSelect: i,
              "aria-label": u.intl.string(u.t.Zow2V5),
              children: (0, e.jsx)(l.rXV, {
                  children: (0, e.jsx)(l.Drp, {
                      id: "copy-image-link",
                      label: u.intl.string(u.t["8xHmxo"]),
                      action: h,
                      icon: l.qYV,
                  }),
              }),
          })
        : null;
}
