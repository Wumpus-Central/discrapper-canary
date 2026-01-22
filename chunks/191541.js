n.d(t, {
    W: () => a,
    f: () => i,
});
let r = (0, n(945810).mj)({
        name: "2025-12-stage-pawtect",
        kind: "user",
        defaultConfig: {
            enabled: !1,
        },
        variations: {
            1: {
                enabled: !0,
            },
        },
    }),
    i = (e) =>
        r.useConfig({
            location: e,
        }).enabled;

function a(e) {
    return r.getConfig({
        location: e,
    }).enabled;
}
