var r = n(477900);
n(582128);
var a = n(314116),
    i = n(192308),
    o = n(890634),
    l = n(792996);
n.d(
    t,
    {},
    {
        Bx: function (e) {
            return {
                [o.AH.BLOCK_MESSAGE]: (e, t) =>
                    new Promise((e) => {
                        (0, i.mM)(async () => {
                            let { default: a } = await Promise.all([n.e(142753), n.e(268582), n.e(135023)]).then(
                                n.bind(n, 148210),
                            );
                            return (n) =>
                                (0, r.jsx)(a, {
                                    initialCustomMessage: t.metadata.customMessage ?? "",
                                    onSubmit: (r) => {
                                        ((t.metadata.customMessage = r), e(t), n.onClose());
                                    },
                                    ...n,
                                    onClose: () => (e(null), n.onClose()),
                                });
                        });
                    }),
                [o.AH.FLAG_TO_CHANNEL]: (t, a) =>
                    new Promise((l) => {
                        (0, i.mM)(async () => {
                            let { default: i } = await Promise.all([
                                    n.e(163069),
                                    n.e(727779),
                                    n.e(93907),
                                    n.e(965341),
                                ]).then(n.bind(n, 158956)),
                                d = t.actions.find((e) => e.type === o.AH.FLAG_TO_CHANNEL);
                            return (n) =>
                                (0, r.jsx)(i, {
                                    action: a,
                                    isEdit: null != d,
                                    triggerType: t.triggerType,
                                    guildId: e,
                                    onEditChannel: (e) => {
                                        ((a.metadata.channelId = e), t.exemptChannels.add(e), l(a), n.onClose());
                                    },
                                    ...n,
                                    onClose: () => (l(null), n.onClose()),
                                });
                        });
                    }),
                [o.AH.USER_COMMUNICATION_DISABLED]: (e, t) =>
                    new Promise((a) => {
                        (0, i.mM)(async () => {
                            let { default: i } = await Promise.all([
                                    n.e(163069),
                                    n.e(727779),
                                    n.e(93907),
                                    n.e(821932),
                                ]).then(n.bind(n, 16039)),
                                l = e.actions.find((e) => e.type === o.AH.USER_COMMUNICATION_DISABLED);
                            return (n) =>
                                (0, r.jsx)(i, {
                                    action: t,
                                    isEdit: null != l,
                                    triggerType: e.triggerType,
                                    onUpdateDuration: (e) => {
                                        (null != e && (t.metadata.durationSeconds = e), a(t), n.onClose());
                                    },
                                    ...n,
                                    onClose: () => (a(null), n.onClose()),
                                });
                        });
                    }),
            };
        },
        is: function (e, t) {
            (0, i.mM)(async () => {
                let { default: a } = await Promise.all([
                    n.e(231541),
                    n.e(142753),
                    n.e(513221),
                    n.e(268582),
                    n.e(940258),
                    n.e(710727),
                    n.e(911802),
                    n.e(307133),
                ]).then(n.bind(n, 580812));
                return (n) => (0, r.jsx)(a, { ...n, messageId: e, guildId: t });
            });
        },
        rI: function (e) {
            (0, a.A)({
                title: l.intl.string(l.t.wLGrjB),
                subtitle: l.intl.string(l.t.arYQ2X),
                confirmText: l.intl.string(l.t["cY+Oob"]),
                onConfirm: e,
            });
        },
        w2: function (e, t, a, o) {
            (0, i.mM)(async () => {
                let { default: i } = await n.e(115112).then(n.bind(n, 794267));
                return (n) =>
                    (0, r.jsx)(i, {
                        ...n,
                        automodDecision: { messageId: e, messageContent: t, decisionId: a, channel: o },
                    });
            });
        },
    },
);
