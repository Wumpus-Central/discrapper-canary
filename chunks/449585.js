"use strict";
n.d(t, { Bx: () => o, is: () => c, rI: () => u, w2: () => d });
var i = n(627968);
n(64700);
var r = n(314116),
    a = n(192308),
    s = n(243277),
    l = n(375708);
function o(e) {
    return {
        [s.AH.BLOCK_MESSAGE]: (e, t) =>
            new Promise((e) => {
                (0, a.openModalLazy)(async () => {
                    let { default: r } = await Promise.all([n.e("79877"), n.e("8891"), n.e("35023")]).then(
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
        [s.AH.FLAG_TO_CHANNEL]: (t, r) =>
            new Promise((l) => {
                (0, a.openModalLazy)(async () => {
                    let { default: a } = await Promise.all([
                            n.e("20930"),
                            n.e("27779"),
                            n.e("93907"),
                            n.e("65341"),
                        ]).then(n.bind(n, 158956)),
                        o = t.actions.find((e) => e.type === s.AH.FLAG_TO_CHANNEL);
                    return (n) =>
                        (0, i.jsx)(a, {
                            action: r,
                            isEdit: null != o,
                            triggerType: t.triggerType,
                            guildId: e,
                            onEditChannel: (e) => {
                                (r.metadata.channelId = e), t.exemptChannels.add(e), l(r), n.onClose();
                            },
                            ...n,
                            onClose: () => (l(null), n.onClose()),
                        });
                });
            }),
        [s.AH.USER_COMMUNICATION_DISABLED]: (e, t) =>
            new Promise((r) => {
                (0, a.openModalLazy)(async () => {
                    let { default: a } = await Promise.all([
                            n.e("20930"),
                            n.e("27779"),
                            n.e("93907"),
                            n.e("21932"),
                        ]).then(n.bind(n, 16039)),
                        l = e.actions.find((e) => e.type === s.AH.USER_COMMUNICATION_DISABLED);
                    return (n) =>
                        (0, i.jsx)(a, {
                            action: t,
                            isEdit: null != l,
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
function d(e, t, r, s) {
    (0, a.openModalLazy)(async () => {
        let { default: a } = await n.e("15112").then(n.bind(n, 794267));
        return (n) =>
            (0, i.jsx)(a, { ...n, automodDecision: { messageId: e, messageContent: t, decisionId: r, channel: s } });
    });
}
function c(e, t) {
    (0, a.openModalLazy)(async () => {
        let { default: r } = await Promise.all([
            n.e("81576"),
            n.e("79877"),
            n.e("30758"),
            n.e("40258"),
            n.e("8891"),
            n.e("73669"),
            n.e("11802"),
            n.e("7133"),
        ]).then(n.bind(n, 580812));
        return (n) => (0, i.jsx)(r, { ...n, messageId: e, guildId: t });
    });
}
function u(e) {
    (0, r.A)({
        title: l.intl.string(l.t.wLGrjB),
        subtitle: l.intl.string(l.t.arYQ2X),
        confirmText: l.intl.string(l.t["cY+Oob"]),
        onConfirm: e,
    });
}
