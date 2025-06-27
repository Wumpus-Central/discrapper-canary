n.d(t, {
    N: () => a,
    m: () => i
});
var r = n(818083);
let i = (0, r.B)({
        kind: 'user',
        id: '2023-08_secure_frames_encryption',
        label: 'Allowing testing DAVE protocol for voice/video',
        defaultConfig: {
            protocolVersionFloor: 0,
            canSupportDaveProtocol: !1
        },
        treatments: [
            {
                id: 11,
                label: 'Can support DAVE protocol version 1 and above',
                config: {
                    protocolVersionFloor: 1,
                    canSupportDaveProtocol: !0
                }
            }
        ]
    }),
    a = (0, r.B)({
        kind: 'user',
        id: '2025-06_dave_for_browser',
        label: 'Allowing testing DAVE protocol for browser',
        defaultConfig: {
            loadWasmModule: !1,
            useWasmModule: !1
        },
        treatments: [
            {
                id: 1,
                label: 'Load only',
                config: {
                    loadWasmModule: !0,
                    useWasmModule: !1
                }
            },
            {
                id: 2,
                label: 'Enable',
                config: {
                    loadWasmModule: !0,
                    useWasmModule: !0
                }
            }
        ]
    });
