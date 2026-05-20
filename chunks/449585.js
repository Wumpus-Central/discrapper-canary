"use strict";
n.d(t, { Bx: () => l, is: () => c, rI: () => d, w2: () => u });
var i = n(627968);
n(64700);
var r = n(314116),
    s = n(192308),
    a = n(243277),
    o = n(375708);
function l(e) {
    return {
        [a.AH.BLOCK_MESSAGE]: (e, t) =>
            new Promise((e) => {
                (0, s.openModalLazy)(async () => {
                    let { default: r } = await Promise.all([n.e("8802"), n.e("8891"), n.e("35023")]).then(
                        n.bind(n, 148210),
                    );
                    return (n) =>
                        (0, i.jsx)(r, {
                            initialCustomMessage: t.metadata.customMessage ?? "",
                            onSubmit: (i) => {
                                (t.metadata.customMessage = i), e(t), n.onClose();
                            },
                            ...n,
                            onClose: () => (e(null), n.onClose()),
                        });
                });
            }),
        [a.AH.FLAG_TO_CHANNEL]: (t, r) =>
            new Promise((o) => {
                (0, s.openModalLazy)(async () => {
                    let { default: s } = await Promise.all([
                            n.e("20930"),
                            n.e("27779"),
                            n.e("93907"),
                            n.e("65341"),
                        ]).then(n.bind(n, 158956)),
                        l = t.actions.find((e) => e.type === a.AH.FLAG_TO_CHANNEL);
                    return (n) =>
                        (0, i.jsx)(s, {
                            action: r,
                            isEdit: null != l,
                            triggerType: t.triggerType,
                            guildId: e,
                            onEditChannel: (e) => {
                                (r.metadata.channelId = e), t.exemptChannels.add(e), o(r), n.onClose();
                            },
                            ...n,
                            onClose: () => (o(null), n.onClose()),
                        });
                });
            }),
        [a.AH.USER_COMMUNICATION_DISABLED]: (e, t) =>
            new Promise((r) => {
                (0, s.openModalLazy)(async () => {
                    let { default: s } = await Promise.all([
                            n.e("20930"),
                            n.e("27779"),
                            n.e("93907"),
                            n.e("21932"),
                        ]).then(n.bind(n, 16039)),
                        o = e.actions.find((e) => e.type === a.AH.USER_COMMUNICATION_DISABLED);
                    return (n) =>
                        (0, i.jsx)(s, {
                            action: t,
                            isEdit: null != o,
                            triggerType: e.triggerType,
                            onUpdateDuration: (e) => {
                                null != e && (t.metadata.durationSeconds = e), r(t), n.onClose();
                            },
                            ...n,
                            onClose: () => (r(null), n.onClose()),
                        });
                });
            }),
    };
}
function u(e, t, r, a) {
    (0, s.openModalLazy)(async () => {
        let { default: s } = await n.e("15112").then(n.bind(n, 794267));
        return (n) =>
            (0, i.jsx)(s, { ...n, automodDecision: { messageId: e, messageContent: t, decisionId: r, channel: a } });
    });
}
function c(e, t) {
    (0, s.openModalLazy)(async () => {
        let { default: r } = await Promise.all([
            n.e("73589"),
            n.e("8802"),
            n.e("65606"),
            n.e("40258"),
            n.e("8891"),
            n.e("73669"),
            n.e("11802"),
            n.e("7133"),
        ]).then(n.bind(n, 580812));
        return (n) => (0, i.jsx)(r, { ...n, messageId: e, guildId: t });
    });
}
function d(e) {
    (0, r.A)({
        title: o.intl.string(o.t.wLGrjB),
        subtitle: o.intl.string(o.t.arYQ2X),
        confirmText: o.intl.string(o.t["cY+Oob"]),
        onConfirm: e,
    });
}
