n.d(t, { Bx: () => d, is: () => _, rI: () => E, w2: () => s });
var a = n(627968);
n(64700);
var r = n(314116),
    i = n(192308),
    o = n(243277),
    l = n(375708);
function d(e) {
    return {
        [o.AH.BLOCK_MESSAGE]: (e, t) =>
            new Promise((e) => {
                (0, i.openModalLazy)(async () => {
                    let { default: r } = await Promise.all([n.e("26705"), n.e("8891"), n.e("35023")]).then(
                        n.bind(n, 148210),
                    );
                    return (n) =>
                        (0, a.jsx)(r, {
                            initialCustomMessage: t.metadata.customMessage ?? "",
                            onSubmit: (a) => {
                                (t.metadata.customMessage = a), e(t), n.onClose();
                            },
                            ...n,
                            onClose: () => (e(null), n.onClose()),
                        });
                });
            }),
        [o.AH.FLAG_TO_CHANNEL]: (t, r) =>
            new Promise((l) => {
                (0, i.openModalLazy)(async () => {
                    let { default: i } = await Promise.all([
                            n.e("20930"),
                            n.e("27779"),
                            n.e("93907"),
                            n.e("65341"),
                        ]).then(n.bind(n, 158956)),
                        d = t.actions.find((e) => e.type === o.AH.FLAG_TO_CHANNEL);
                    return (n) =>
                        (0, a.jsx)(i, {
                            action: r,
                            isEdit: null != d,
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
        [o.AH.USER_COMMUNICATION_DISABLED]: (e, t) =>
            new Promise((r) => {
                (0, i.openModalLazy)(async () => {
                    let { default: i } = await Promise.all([
                            n.e("20930"),
                            n.e("27779"),
                            n.e("93907"),
                            n.e("21932"),
                        ]).then(n.bind(n, 16039)),
                        l = e.actions.find((e) => e.type === o.AH.USER_COMMUNICATION_DISABLED);
                    return (n) =>
                        (0, a.jsx)(i, {
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
function s(e, t, r, o) {
    (0, i.openModalLazy)(async () => {
        let { default: i } = await n.e("15112").then(n.bind(n, 794267));
        return (n) =>
            (0, a.jsx)(i, { ...n, automodDecision: { messageId: e, messageContent: t, decisionId: r, channel: o } });
    });
}
function _(e, t) {
    (0, i.openModalLazy)(async () => {
        let { default: r } = await Promise.all([
            n.e("72273"),
            n.e("26705"),
            n.e("65606"),
            n.e("40258"),
            n.e("8891"),
            n.e("73669"),
            n.e("11802"),
            n.e("7133"),
        ]).then(n.bind(n, 580812));
        return (n) => (0, a.jsx)(r, { ...n, messageId: e, guildId: t });
    });
}
function E(e) {
    (0, r.A)({
        title: l.intl.string(l.t.wLGrjB),
        subtitle: l.intl.string(l.t.arYQ2X),
        confirmText: l.intl.string(l.t["cY+Oob"]),
        onConfirm: e,
    });
}
