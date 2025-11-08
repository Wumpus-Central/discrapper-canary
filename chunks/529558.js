n.d(t, {
    NJ: () => o,
    Th: () => s,
    m8: () => a,
});
var r = n(818083),
    i = n(427164);
let a = (0, r.B)({
        kind: "user",
        id: "2023-08_secure_frames_encryption",
        label: "Allowing testing DAVE protocol for voice/video",
        defaultConfig: {
            protocolVersionFloor: 1,
            canSupportDaveProtocol: !1,
        },
        treatments: [
            {
                id: 11,
                label: "Can support DAVE protocol version 1 and above",
                config: {
                    protocolVersionFloor: 1,
                    canSupportDaveProtocol: !0,
                },
            },
        ],
    }),
    o = (0, r.B)({
        kind: "user",
        id: "2025-06_dave_for_browser",
        label: "Allowing testing DAVE protocol for browser",
        defaultConfig: {
            loadWasmModule: !1,
            useWasmModule: !1,
            preload: !1,
        },
        treatments: [
            {
                id: 1,
                label: "Load only",
                config: {
                    loadWasmModule: !0,
                    useWasmModule: !1,
                    preload: !1,
                },
            },
            {
                id: 2,
                label: "Enable",
                config: {
                    loadWasmModule: !0,
                    useWasmModule: !0,
                    preload: !1,
                },
            },
            {
                id: 3,
                label: "Preload",
                config: {
                    loadWasmModule: !0,
                    useWasmModule: !0,
                    preload: !0,
                },
            },
        ],
    }),
    s = (0, i.le)({
        kind: "user",
        name: "2025-11-dave-opt-in",
        defaultConfig: { allowOptIn: !1 },
        variations: { 1: { allowOptIn: !0 } },
    });
