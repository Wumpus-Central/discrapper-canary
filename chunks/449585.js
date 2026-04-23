n.d(t, { Bx: () => d, is: () => s, rI: () => c, w2: () => u });
var l = n(627968);
n(64700);
var i = n(314116),
    r = n(192308),
    a = n(243277),
    o = n(985018);
function d(e) {
    return {
        [a.AH.BLOCK_MESSAGE]: (e, t) =>
            new Promise((e) => {
                (0, r.openModalLazy)(async () => {
                    let { default: i } = await n.e("35023").then(n.bind(n, 148210));
                    return (n) =>
                        (0, l.jsx)(i, {
                            initialCustomMessage: t.metadata.customMessage ?? "",
                            onSubmit: (l) => {
                                (t.metadata.customMessage = l), e(t), n.onClose();
                            },
                            ...n,
                            onClose: () => (e(null), n.onClose()),
                        });
                });
            }),
        [a.AH.FLAG_TO_CHANNEL]: (t, i) =>
            new Promise((o) => {
                (0, r.openModalLazy)(async () => {
                    let { default: r } = await n.e("65341").then(n.bind(n, 158956)),
                        d = t.actions.find((e) => e.type === a.AH.FLAG_TO_CHANNEL);
                    return (n) =>
                        (0, l.jsx)(r, {
                            action: i,
                            isEdit: null != d,
                            triggerType: t.triggerType,
                            guildId: e,
                            onEditChannel: (e) => {
                                (i.metadata.channelId = e), t.exemptChannels.add(e), o(i), n.onClose();
                            },
                            ...n,
                            onClose: () => (o(null), n.onClose()),
                        });
                });
            }),
        [a.AH.USER_COMMUNICATION_DISABLED]: (e, t) =>
            new Promise((i) => {
                (0, r.openModalLazy)(async () => {
                    let { default: r } = await n.e("21932").then(n.bind(n, 16039)),
                        o = e.actions.find((e) => e.type === a.AH.USER_COMMUNICATION_DISABLED);
                    return (n) =>
                        (0, l.jsx)(r, {
                            action: t,
                            isEdit: null != o,
                            triggerType: e.triggerType,
                            onUpdateDuration: (e) => {
                                null != e && (t.metadata.durationSeconds = e), i(t), n.onClose();
                            },
                            ...n,
                            onClose: () => (i(null), n.onClose()),
                        });
                });
            }),
    };
}
function u(e, t, i, a) {
    (0, r.openModalLazy)(async () => {
        let { default: r } = await n.e("15112").then(n.bind(n, 794267));
        return (n) =>
            (0, l.jsx)(r, { ...n, automodDecision: { messageId: e, messageContent: t, decisionId: i, channel: a } });
    });
}
function s(e, t) {
    (0, r.openModalLazy)(async () => {
        let { default: i } = await n.e("7133").then(n.bind(n, 580812));
        return (n) => (0, l.jsx)(i, { ...n, messageId: e, guildId: t });
    });
}
function c(e) {
    (0, i.A)({
        title: o.intl.string(o.t.wLGrjB),
        subtitle: o.intl.string(o.t.arYQ2X),
        confirmText: o.intl.string(o.t["cY+Oob"]),
        onConfirm: e,
    });
}
