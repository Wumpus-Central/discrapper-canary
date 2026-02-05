i.d(e, { default: () => u });
var t = i(627968),
    a = i(64700),
    l = i(397927),
    o = i(442433),
    s = i(486503),
    c = i(253932),
    r = i(957565),
    d = i(985018);
function u(n) {
    let { splashUrl: e, onSelect: i } = n,
        u = c.Q_.useSetting(),
        { tidaWebformEnabled: p } = s.A.useExperiment(
            { location: "GuildOnboardingSplashContextMenu" },
            { autoTrackExposure: !1 },
        ),
        g = a.useCallback(() => {
            (0, r.C)(e);
        }, [e]);
    return r.p5 && u && p
        ? (0, t.jsx)(l.W1t, {
              "data-menu-migrated": !0,
              navId: "guild-onboarding-splash-context",
              onClose: o.Z_,
              onSelect: i,
              "aria-label": d.intl.string(d.t.Zow2V5),
              children: (0, t.jsx)(l.rXV, {
                  children: (0, t.jsx)(l.Drp, {
                      id: "copy-image-link",
                      label: d.intl.string(d.t["8xHmxo"]),
                      action: g,
                      icon: l.qYV,
                      leadingAccessory: { type: "icon", icon: l.qYV },
                  }),
              }),
          })
        : null;
}
