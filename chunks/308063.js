n.d(t, { Z: () => o });
var i = n(392711),
    l = n.n(i),
    r = n(544891),
    T = n(570140),
    I = n(981631);
let E = ['Spidey Bot', 'Captain Hook'],
    o = {
        fetchForGuild(e) {
            T.Z.dispatch({
                type: 'WEBHOOKS_FETCHING',
                guildId: e
            }),
                r.tn
                    .get({
                        url: I.ANM.GUILD_WEBHOOKS(e),
                        oldFormErrors: !0,
                        rejectWithError: !1
                    })
                    .then((t) => {
                        let { body: n } = t;
                        return T.Z.dispatch({
                            type: 'WEBHOOKS_UPDATE',
                            guildId: e,
                            webhooks: n
                        });
                    })
                    .catch((t) => {
                        let { body: n } = t;
                        T.Z.dispatch({
                            type: 'WEBHOOKS_UPDATE',
                            guildId: e,
                            error: n.message
                        });
                    });
        },
        fetchForChannel(e, t) {
            T.Z.dispatch({
                type: 'WEBHOOKS_FETCHING',
                guildId: e,
                channelId: t
            }),
                r.tn
                    .get({
                        url: I.ANM.CHANNEL_WEBHOOKS(t),
                        oldFormErrors: !0,
                        rejectWithError: !0
                    })
                    .then((n) => {
                        let { body: i } = n;
                        return T.Z.dispatch({
                            type: 'WEBHOOKS_UPDATE',
                            guildId: e,
                            channelId: t,
                            webhooks: i
                        });
                    })
                    .catch((t) => {
                        let { body: n } = t;
                        T.Z.dispatch({
                            type: 'WEBHOOKS_UPDATE',
                            guildId: e,
                            error: n.message
                        });
                    });
        },
        create: (e, t, n) => (
            null == n && (n = E[l().random(0, E.length - 1)]),
            r.tn
                .post({
                    url: I.ANM.CHANNEL_WEBHOOKS(t),
                    body: { name: n },
                    oldFormErrors: !0,
                    rejectWithError: !1
                })
                .then((t) => {
                    let { body: n } = t;
                    return (
                        T.Z.dispatch({
                            type: 'WEBHOOK_CREATE',
                            guildId: e,
                            webhook: n
                        }),
                        n
                    );
                })
        ),
        delete: (e, t) =>
            r.tn
                .del({
                    url: I.ANM.WEBHOOK(t),
                    oldFormErrors: !0,
                    rejectWithError: !1
                })
                .then(() => {
                    T.Z.dispatch({
                        type: 'WEBHOOK_DELETE',
                        guildId: e,
                        webhookId: t
                    });
                }),
        update: (e, t, n) =>
            r.tn
                .patch({
                    url: I.ANM.WEBHOOK(t),
                    body: n,
                    oldFormErrors: !0,
                    rejectWithError: !1
                })
                .then((t) => {
                    let { body: n } = t;
                    return (
                        T.Z.dispatch({
                            type: 'WEBHOOK_UPDATE',
                            guildId: e,
                            webhook: n
                        }),
                        n
                    );
                })
    };
