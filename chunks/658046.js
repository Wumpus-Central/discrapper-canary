n.d(t, {
    H: () => s,
});
var r = n(250105),
    i = n(128319);
let a = (0, r.Ay)({
    kind: "user",
    name: "2025-11-global-frame-pool-lock",
    defaultConfig: {
        enabled: !1,
    },
    variations: {
        1: {
            enabled: !0,
        },
    },
});

function s(e) {
    let { location: t, disable: n = !1 } = e,
        { isInHoldout: r } = i.p.getCurrentConfig(
            {
                location: t,
            },
            {
                disable: n,
                autoTrackExposure: !0,
            },
        );
    return r || n
        ? a.definition.defaultConfig
        : a.getConfig({
              location: t,
          });
}
