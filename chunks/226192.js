n.d(e, {
    UV: () => d,
    _s: () => s,
    kW: () => o,
    km: () => u
});
var i = n(200651);
n(192379);
var r = n(481060),
    l = n(273504),
    a = n(388032);
function u(t) {
    return {
        [l.jj.BLOCK_MESSAGE]: (t, e) =>
            new Promise((t) => {
                (0, r.ZDy)(async () => {
                    let { default: r } = await n.e('94005').then(n.bind(n, 144462));
                    return (n) => {
                        var l;
                        return (0, i.jsx)(r, {
                            initialCustomMessage: null !== (l = e.metadata.customMessage) && void 0 !== l ? l : '',
                            onSubmit: (i) => {
                                (e.metadata.customMessage = i), t(e), n.onClose();
                            },
                            ...n,
                            onClose: () => (t(null), n.onClose())
                        });
                    };
                });
            }),
        [l.jj.FLAG_TO_CHANNEL]: (e, a) =>
            new Promise((u) => {
                (0, r.ZDy)(async () => {
                    let { default: r } = await n.e('74543').then(n.bind(n, 643611)),
                        s = e.actions.find((t) => t.type === l.jj.FLAG_TO_CHANNEL);
                    return (n) =>
                        (0, i.jsx)(r, {
                            action: a,
                            isEdit: null != s,
                            triggerType: e.triggerType,
                            guildId: t,
                            onEditChannel: (t) => {
                                (a.metadata.channelId = t), e.exemptChannels.add(t), u(a), n.onClose();
                            },
                            ...n,
                            onClose: () => (u(null), n.onClose())
                        });
                });
            }),
        [l.jj.USER_COMMUNICATION_DISABLED]: (t, e) =>
            new Promise((a) => {
                (0, r.ZDy)(async () => {
                    let { default: r } = await n.e('78273').then(n.bind(n, 41767)),
                        u = t.actions.find((t) => t.type === l.jj.USER_COMMUNICATION_DISABLED);
                    return (n) =>
                        (0, i.jsx)(r, {
                            action: e,
                            isEdit: null != u,
                            triggerType: t.triggerType,
                            onUpdateDuration: (t) => {
                                null != t && (e.metadata.durationSeconds = t), a(e), n.onClose();
                            },
                            ...n,
                            onClose: () => (a(null), n.onClose())
                        });
                });
            })
    };
}
function s(t, e, l, a) {
    (0, r.ZDy)(async () => {
        let { default: r } = await n.e('37483').then(n.bind(n, 241046));
        return (n) =>
            (0, i.jsx)(r, {
                ...n,
                automodDecision: {
                    messageId: t,
                    messageContent: e,
                    decisionId: l,
                    channel: a
                }
            });
    });
}
function o(t, e) {
    (0, r.ZDy)(async () => {
        let { default: r } = await n.e('28382').then(n.bind(n, 537623));
        return (n) =>
            (0, i.jsx)(r, {
                ...n,
                messageId: t,
                guildId: e
            });
    });
}
function d(t) {
    (0, r.h7j)((e) =>
        (0, i.jsx)(r.ConfirmModal, {
            header: a.intl.string(a.t.wLGrjI),
            confirmText: a.intl.string(a.t['cY+Ooa']),
            onConfirm: t,
            cancelText: a.intl.string(a.t['ETE/oK']),
            ...e,
            children: (0, i.jsx)(r.Text, {
                variant: 'text-md/normal',
                children: a.intl.string(a.t.arYQ2d)
            })
        })
    );
}
