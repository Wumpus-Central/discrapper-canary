n.d(t, { XO: () => i, dL: () => l });
var r = n(243277);
function l(e) {
    let t = i();
    return Array.from(e.defaultActionTypes).map((e) => t[e]);
}
function i() {
    return {
        [r.AH.BLOCK_MESSAGE]: { type: r.AH.BLOCK_MESSAGE, metadata: { customMessage: void 0 } },
        [r.AH.FLAG_TO_CHANNEL]: { type: r.AH.FLAG_TO_CHANNEL, metadata: { channelId: void 0 } },
        [r.AH.USER_COMMUNICATION_DISABLED]: {
            type: r.AH.USER_COMMUNICATION_DISABLED,
            metadata: { durationSeconds: 60 },
        },
        [r.AH.QUARANTINE_USER]: { type: r.AH.QUARANTINE_USER, metadata: {} },
    };
}
