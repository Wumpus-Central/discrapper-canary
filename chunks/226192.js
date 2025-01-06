n.d(e, {
    UV: function () {
        return c;
    },
    _s: function () {
        return a;
    },
    kW: function () {
        return s;
    },
    km: function () {
        return u;
    }
});
var i = n(200651);
n(192379);
var r = n(481060),
    l = n(273504),
    o = n(388032);
function u(t) {
    return {
        [l.jj.BLOCK_MESSAGE]: (t, e) =>
            new Promise((t) => {
                (0, r.openModalLazy)(async () => {
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
        [l.jj.FLAG_TO_CHANNEL]: (e, o) =>
            new Promise((u) => {
                (0, r.openModalLazy)(async () => {
                    let { default: r } = await n.e('74543').then(n.bind(n, 643611)),
                        a = e.actions.find((t) => t.type === l.jj.FLAG_TO_CHANNEL);
                    return (n) =>
                        (0, i.jsx)(r, {
                            action: o,
                            isEdit: null != a,
                            triggerType: e.triggerType,
                            guildId: t,
                            onEditChannel: (t) => {
                                (o.metadata.channelId = t), e.exemptChannels.add(t), u(o), n.onClose();
                            },
                            ...n,
                            onClose: () => (u(null), n.onClose())
                        });
                });
            }),
        [l.jj.USER_COMMUNICATION_DISABLED]: (t, e) =>
            new Promise((o) => {
                (0, r.openModalLazy)(async () => {
                    let { default: r } = await n.e('78273').then(n.bind(n, 41767)),
                        u = t.actions.find((t) => t.type === l.jj.USER_COMMUNICATION_DISABLED);
                    return (n) =>
                        (0, i.jsx)(r, {
                            action: e,
                            isEdit: null != u,
                            triggerType: t.triggerType,
                            onUpdateDuration: (t) => {
                                null != t && (e.metadata.durationSeconds = t), o(e), n.onClose();
                            },
                            ...n,
                            onClose: () => (o(null), n.onClose())
                        });
                });
            })
    };
}
function a(t, e, l, o) {
    (0, r.openModalLazy)(async () => {
        let { default: r } = await n.e('37483').then(n.bind(n, 241046));
        return (n) =>
            (0, i.jsx)(r, {
                ...n,
                automodDecision: {
                    messageId: t,
                    messageContent: e,
                    decisionId: l,
                    channel: o
                }
            });
    });
}
function s(t, e) {
    (0, r.openModalLazy)(async () => {
        let { default: r } = await n.e('28382').then(n.bind(n, 537623));
        return (n) =>
            (0, i.jsx)(r, {
                ...n,
                messageId: t,
                guildId: e
            });
    });
}
function c(t) {
    (0, r.openModal)((e) =>
        (0, i.jsx)(r.ConfirmModal, {
            header: o.intl.string(o.t.wLGrjI),
            confirmText: o.intl.string(o.t['cY+Ooa']),
            onConfirm: t,
            cancelText: o.intl.string(o.t['ETE/oK']),
            ...e,
            children: (0, i.jsx)(r.Text, {
                variant: 'text-md/normal',
                children: o.intl.string(o.t.arYQ2d)
            })
        })
    );
}
