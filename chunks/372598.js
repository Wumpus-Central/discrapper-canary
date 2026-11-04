var r = n(403362),
    i = n(850216),
    u = n(890634);
function a() {
    return {
        [u.AH.BLOCK_MESSAGE]: { type: u.AH.BLOCK_MESSAGE, metadata: { customMessage: void 0 } },
        [u.AH.FLAG_TO_CHANNEL]: { type: u.AH.FLAG_TO_CHANNEL, metadata: { channelId: void 0 } },
        [u.AH.USER_COMMUNICATION_DISABLED]: {
            type: u.AH.USER_COMMUNICATION_DISABLED,
            metadata: { durationSeconds: 60 },
        },
        [u.AH.QUARANTINE_USER]: { type: u.AH.QUARANTINE_USER, metadata: {} },
    };
}
n.d(
    t,
    {},
    {
        XO: a,
        b_: function (e, t, n) {
            let r = e.actions.filter((e) => e.type !== t);
            return { ...e, actions: null != n ? [...r, n] : r };
        },
        dL: function (e) {
            let t = a();
            return Array.from(e.defaultActionTypes).map((e) => t[e]);
        },
        zR: function (e) {
            return (0, i.J6)(e.triggerType)
                .map((t) =>
                    e.actions.find((e) => {
                        let { type: n } = e;
                        return n === t;
                    }),
                )
                .filter(r.Vq);
        },
    },
);
