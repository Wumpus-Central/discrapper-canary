i.d(t, { default: () => d });
var e = i(54381),
    a = i(473749),
    l = i(481060),
    o = i(239091),
    s = i(796762),
    c = i(695346),
    r = i(572004),
    u = i(388032);
function d(n) {
    let { splashUrl: t, onSelect: i } = n,
        d = c.Sb.useSetting(),
        { tidaWebformEnabled: p } = s.Z.useExperiment(
            { location: "GuildOnboardingSplashContextMenu" },
            { autoTrackExposure: !1 },
        ),
        h = a.useCallback(() => {
            (0, r.JG)(t);
        }, [t]);
    return r.wS && d && p
        ? (0, e.jsx)(l.v2r, {
              navId: "guild-onboarding-splash-context",
              onClose: o.Zy,
              onSelect: i,
              "aria-label": u.intl.string(u.t.Zow2V5),
              children: (0, e.jsx)(l.kSQ, {
                  children: (0, e.jsx)(l.sNh, {
                      id: "copy-image-link",
                      label: u.intl.string(u.t["8xHmxo"]),
                      action: h,
                      icon: l.xPt,
                  }),
              }),
          })
        : null;
}
