n.d(t, {
    N: () => o,
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
    o = (0, r.B)({
        kind: 'guild',
        id: '2024-08_secure_frames_encryption_guilds_v2',
        label: 'Allowing testing DAVE protocol for voice/video (Guilds)',
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
    });
