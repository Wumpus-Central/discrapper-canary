n.d(t, {
    F: () => c,
});
var r = n(945810),
    i = n(128319);
let a = {
        useAGC2: !0,
        enableAnalog: !1,
        enableDigital: !0,
        headroom_db: 5,
        max_gain_db: 50,
        initial_gain_db: 15,
        max_gain_change_db_per_second: 6,
        max_output_noise_level_dbfs: -50,
        fixed_gain_db: 0,
    },
    s = (0, r.mj)({
        kind: "user",
        name: "2025-09-agc2-v2",
        defaultConfig: {
            noiseCancellationDuringProcessing: !1,
            noiseCancellationConfig: {
                useAGC2: !1,
            },
        },
        variations: {
            1: {
                noiseCancellationDuringProcessing: !0,
                noiseCancellationConfig: {
                    useAGC2: !1,
                },
            },
            2: {
                noiseCancellationDuringProcessing: !0,
                noiseCancellationConfig: a,
                vadKrispActivationThreshold: 0.5,
            },
            3: {
                noiseCancellationDuringProcessing: !0,
                noiseCancellationConfig: a,
                vadKrispActivationThreshold: 0.7,
            },
            4: {
                noiseCancellationDuringProcessing: !0,
                noiseCancellationConfig: a,
                vadKrispActivationThreshold: 0.8,
            },
            5: {
                noiseCancellationDuringProcessing: !0,
                noiseCancellationConfig: a,
                vadKrispActivationThreshold: 0.9,
            },
            6: {
                noiseCancellationDuringProcessing: !0,
                noiseCancellationConfig: a,
                vadKrispActivationThreshold: 0.95,
            },
        },
    }),
    o = (0, r.mj)({
        kind: "user",
        name: "2025-12-agc2-v2--mirror",
        defaultConfig: {
            noiseCancellationDuringProcessing: !1,
            noiseCancellationConfig: {
                useAGC2: !1,
            },
        },
        variations: {
            1: {
                noiseCancellationDuringProcessing: !0,
                noiseCancellationConfig: {
                    useAGC2: !1,
                },
            },
            2: {
                noiseCancellationDuringProcessing: !0,
                noiseCancellationConfig: a,
                vadKrispActivationThreshold: 0.5,
            },
            3: {
                noiseCancellationDuringProcessing: !0,
                noiseCancellationConfig: a,
                vadKrispActivationThreshold: 0.7,
            },
            4: {
                noiseCancellationDuringProcessing: !0,
                noiseCancellationConfig: a,
                vadKrispActivationThreshold: 0.8,
            },
            5: {
                noiseCancellationDuringProcessing: !0,
                noiseCancellationConfig: a,
                vadKrispActivationThreshold: 0.9,
            },
            6: {
                noiseCancellationDuringProcessing: !0,
                noiseCancellationConfig: a,
                vadKrispActivationThreshold: 0.95,
            },
        },
    }),
    l = (0, r.mj)({
        kind: "user",
        name: "2025-12-agc2-v2--shadow",
        defaultConfig: {
            noiseCancellationDuringProcessing: !1,
            noiseCancellationConfig: {
                useAGC2: !1,
            },
        },
        variations: {
            1: {
                noiseCancellationDuringProcessing: !0,
                noiseCancellationConfig: {
                    useAGC2: !1,
                },
            },
            2: {
                noiseCancellationDuringProcessing: !0,
                noiseCancellationConfig: a,
                vadKrispActivationThreshold: 0.5,
            },
            3: {
                noiseCancellationDuringProcessing: !0,
                noiseCancellationConfig: a,
                vadKrispActivationThreshold: 0.7,
            },
            4: {
                noiseCancellationDuringProcessing: !0,
                noiseCancellationConfig: a,
                vadKrispActivationThreshold: 0.8,
            },
            5: {
                noiseCancellationDuringProcessing: !0,
                noiseCancellationConfig: a,
                vadKrispActivationThreshold: 0.9,
            },
            6: {
                noiseCancellationDuringProcessing: !0,
                noiseCancellationConfig: a,
                vadKrispActivationThreshold: 0.95,
            },
        },
    });

function c(e) {
    let { location: t, disable: n = !1 } = e;
    u({
        location: t,
        disable: n,
    });
    let { isInHoldout: r } = i.p.getCurrentConfig(
        {
            location: t,
        },
        {
            disable: n,
            autoTrackExposure: !0,
        },
    );
    return r || n
        ? s.definition.defaultConfig
        : s.getConfig({
              location: t,
          });
}

function u(e) {
    let { location: t, disable: n = !1 } = e,
        { isInHoldout: r } = i.A.getCurrentConfig(
            {
                location: t,
            },
            {
                disable: n,
                autoTrackExposure: !0,
            },
        );
    l.getConfig({
        location: t,
    }),
        r ||
            n ||
            o.getConfig({
                location: t,
            });
}
