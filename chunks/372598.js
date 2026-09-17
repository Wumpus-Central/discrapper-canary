n.d(t, { XO: () => A, b_: () => E, dL: () => a, zR: () => l });
var r = n(403362),
    u = n(53594),
    i = n(243277);
function a(e) {
    let t = A();
    return Array.from(e.defaultActionTypes).map((e) => t[e]);
}
function l(e) {
    return (0, u.J6)(e.triggerType)
        .map((t) =>
            e.actions.find((e) => {
                let { type: n } = e;
                return n === t;
            }),
        )
        .filter(r.Vq);
}
function E(e, t, n) {
    let r = e.actions.filter((e) => e.type !== t);
    return { ...e, actions: null != n ? [...r, n] : r };
}
function A() {
    return {
        [i.AH.BLOCK_MESSAGE]: { type: i.AH.BLOCK_MESSAGE, metadata: { customMessage: void 0 } },
        [i.AH.FLAG_TO_CHANNEL]: { type: i.AH.FLAG_TO_CHANNEL, metadata: { channelId: void 0 } },
        [i.AH.USER_COMMUNICATION_DISABLED]: {
            type: i.AH.USER_COMMUNICATION_DISABLED,
            metadata: { durationSeconds: 60 },
        },
        [i.AH.QUARANTINE_USER]: { type: i.AH.QUARANTINE_USER, metadata: {} },
    };
}
