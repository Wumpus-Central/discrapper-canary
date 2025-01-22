e.d(n, {
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
        return o;
    }
});
var i = e(200651);
e(192379);
var r = e(481060),
    l = e(273504),
    u = e(388032);
function o(t) {
    return {
        [l.jj.BLOCK_MESSAGE]: (t, n) =>
            new Promise((t) => {
                (0, r.openModalLazy)(async () => {
                    let { default: r } = await e.e('94005').then(e.bind(e, 144462));
                    return (e) => {
                        var l;
                        return (0, i.jsx)(r, {
                            initialCustomMessage: null !== (l = n.metadata.customMessage) && void 0 !== l ? l : '',
                            onSubmit: (i) => {
                                (n.metadata.customMessage = i), t(n), e.onClose();
                            },
                            ...e,
                            onClose: () => (t(null), e.onClose())
                        });
                    };
                });
            }),
        [l.jj.FLAG_TO_CHANNEL]: (n, u) =>
            new Promise((o) => {
                (0, r.openModalLazy)(async () => {
                    let { default: r } = await e.e('74543').then(e.bind(e, 643611)),
                        a = n.actions.find((t) => t.type === l.jj.FLAG_TO_CHANNEL);
                    return (e) =>
                        (0, i.jsx)(r, {
                            action: u,
                            isEdit: null != a,
                            triggerType: n.triggerType,
                            guildId: t,
                            onEditChannel: (t) => {
                                (u.metadata.channelId = t), n.exemptChannels.add(t), o(u), e.onClose();
                            },
                            ...e,
                            onClose: () => (o(null), e.onClose())
                        });
                });
            }),
        [l.jj.USER_COMMUNICATION_DISABLED]: (t, n) =>
            new Promise((u) => {
                (0, r.openModalLazy)(async () => {
                    let { default: r } = await e.e('78273').then(e.bind(e, 41767)),
                        o = t.actions.find((t) => t.type === l.jj.USER_COMMUNICATION_DISABLED);
                    return (e) =>
                        (0, i.jsx)(r, {
                            action: n,
                            isEdit: null != o,
                            triggerType: t.triggerType,
                            onUpdateDuration: (t) => {
                                null != t && (n.metadata.durationSeconds = t), u(n), e.onClose();
                            },
                            ...e,
                            onClose: () => (u(null), e.onClose())
                        });
                });
            })
    };
}
function a(t, n, l, u) {
    (0, r.openModalLazy)(async () => {
        let { default: r } = await e.e('37483').then(e.bind(e, 241046));
        return (e) =>
            (0, i.jsx)(r, {
                ...e,
                automodDecision: {
                    messageId: t,
                    messageContent: n,
                    decisionId: l,
                    channel: u
                }
            });
    });
}
function s(t, n) {
    (0, r.openModalLazy)(async () => {
        let { default: r } = await e.e('28382').then(e.bind(e, 537623));
        return (e) =>
            (0, i.jsx)(r, {
                ...e,
                messageId: t,
                guildId: n
            });
    });
}
function c(t) {
    (0, r.openModal)((n) =>
        (0, i.jsx)(r.ConfirmModal, {
            header: u.intl.string(u.t.wLGrjI),
            confirmText: u.intl.string(u.t['cY+Ooa']),
            onConfirm: t,
            cancelText: u.intl.string(u.t['ETE/oK']),
            ...n,
            children: (0, i.jsx)(r.Text, {
                variant: 'text-md/normal',
                children: u.intl.string(u.t.arYQ2d)
            })
        })
    );
}
