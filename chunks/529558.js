n.d(t, { m: () => r });
let r = (0, n(818083).B)({
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
});
