n.d(t, { Bx: () => o, is: () => c, rI: () => _, w2: () => E });
var i = n(627968);
n(64700);
var l = n(314116),
    r = n(397927),
    s = n(411335),
    a = n(985018);
function o(e) {
    return {
        [s.AH.BLOCK_MESSAGE]: (e, t) =>
            new Promise((e) => {
                (0, r.mMO)(async () => {
                    let { default: l } = await n.e("35023").then(n.bind(n, 148210));
                    return (n) =>
                        (0, i.jsx)(l, {
                            initialCustomMessage: t.metadata.customMessage ?? "",
                            onSubmit: (i) => {
                                (t.metadata.customMessage = i), e(t), n.onClose();
                            },
                            ...n,
                            onClose: () => (e(null), n.onClose()),
                        });
                });
            }),
        [s.AH.FLAG_TO_CHANNEL]: (t, l) =>
            new Promise((a) => {
                (0, r.mMO)(async () => {
                    let { default: r } = await n.e("65341").then(n.bind(n, 158956)),
                        o = t.actions.find((e) => e.type === s.AH.FLAG_TO_CHANNEL);
                    return (n) =>
                        (0, i.jsx)(r, {
                            action: l,
                            isEdit: null != o,
                            triggerType: t.triggerType,
                            guildId: e,
                            onEditChannel: (e) => {
                                (l.metadata.channelId = e), t.exemptChannels.add(e), a(l), n.onClose();
                            },
                            ...n,
                            onClose: () => (a(null), n.onClose()),
                        });
                });
            }),
        [s.AH.USER_COMMUNICATION_DISABLED]: (e, t) =>
            new Promise((l) => {
                (0, r.mMO)(async () => {
                    let { default: r } = await n.e("21932").then(n.bind(n, 16039)),
                        a = e.actions.find((e) => e.type === s.AH.USER_COMMUNICATION_DISABLED);
                    return (n) =>
                        (0, i.jsx)(r, {
                            action: t,
                            isEdit: null != a,
                            triggerType: e.triggerType,
                            onUpdateDuration: (e) => {
                                null != e && (t.metadata.durationSeconds = e), l(t), n.onClose();
                            },
                            ...n,
                            onClose: () => (l(null), n.onClose()),
                        });
                });
            }),
    };
}
function E(e, t, l, s) {
    (0, r.mMO)(async () => {
        let { default: r } = await n.e("15112").then(n.bind(n, 794267));
        return (n) =>
            (0, i.jsx)(r, { ...n, automodDecision: { messageId: e, messageContent: t, decisionId: l, channel: s } });
    });
}
function c(e, t) {
    (0, r.mMO)(async () => {
        let { default: l } = await n.e("7133").then(n.bind(n, 580812));
        return (n) => (0, i.jsx)(l, { ...n, messageId: e, guildId: t });
    });
}
function _(e) {
    (0, l.A)({
        title: a.intl.string(a.t.wLGrjB),
        subtitle: a.intl.string(a.t.arYQ2X),
        confirmText: a.intl.string(a.t["cY+Oob"]),
        onConfirm: e,
    });
}
