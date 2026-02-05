n.d(t, { XO: () => l, dL: () => i });
var r = n(411335);
function i(e) {
    let t = l();
    return Array.from(e.defaultActionTypes).map((e) => t[e]);
}
function l() {
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
