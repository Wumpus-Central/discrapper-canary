n.d(t, { Z: () => c });
var r = n(392711),
    i = n.n(r),
    a = n(544891),
    o = n(570140),
    s = n(981631);
let l = ['Spidey Bot', 'Captain Hook'],
    c = {
        fetchForGuild(e) {
            o.Z.dispatch({
                type: 'WEBHOOKS_FETCHING',
                guildId: e
            }),
                a.tn
                    .get({
                        url: s.ANM.GUILD_WEBHOOKS(e),
                        oldFormErrors: !0,
                        rejectWithError: !1
                    })
                    .then((t) => {
                        let { body: n } = t;
                        return o.Z.dispatch({
                            type: 'WEBHOOKS_UPDATE',
                            guildId: e,
                            webhooks: n
                        });
                    })
                    .catch((t) => {
                        let { body: n } = t;
                        o.Z.dispatch({
                            type: 'WEBHOOKS_UPDATE',
                            guildId: e,
                            error: n.message
                        });
                    });
        },
        fetchForChannel(e, t) {
            o.Z.dispatch({
                type: 'WEBHOOKS_FETCHING',
                guildId: e,
                channelId: t
            }),
                a.tn
                    .get({
                        url: s.ANM.CHANNEL_WEBHOOKS(t),
                        oldFormErrors: !0,
                        rejectWithError: !0
                    })
                    .then((n) => {
                        let { body: r } = n;
                        return o.Z.dispatch({
                            type: 'WEBHOOKS_UPDATE',
                            guildId: e,
                            channelId: t,
                            webhooks: r
                        });
                    })
                    .catch((t) => {
                        let { body: n } = t;
                        o.Z.dispatch({
                            type: 'WEBHOOKS_UPDATE',
                            guildId: e,
                            error: n.message
                        });
                    });
        },
        create: (e, t, n) => (
            null == n && (n = l[i().random(0, l.length - 1)]),
            a.tn
                .post({
                    url: s.ANM.CHANNEL_WEBHOOKS(t),
                    body: { name: n },
                    oldFormErrors: !0,
                    rejectWithError: !1
                })
                .then((t) => {
                    let { body: n } = t;
                    return (
                        o.Z.dispatch({
                            type: 'WEBHOOK_CREATE',
                            guildId: e,
                            webhook: n
                        }),
                        n
                    );
                })
        ),
        delete: (e, t) =>
            a.tn
                .del({
                    url: s.ANM.WEBHOOK(t),
                    oldFormErrors: !0,
                    rejectWithError: !1
                })
                .then(() => {
                    o.Z.dispatch({
                        type: 'WEBHOOK_DELETE',
                        guildId: e,
                        webhookId: t
                    });
                }),
        update: (e, t, n) =>
            a.tn
                .patch({
                    url: s.ANM.WEBHOOK(t),
                    body: n,
                    oldFormErrors: !0,
                    rejectWithError: !1
                })
                .then((t) => {
                    let { body: n } = t;
                    return (
                        o.Z.dispatch({
                            type: 'WEBHOOK_UPDATE',
                            guildId: e,
                            webhook: n
                        }),
                        n
                    );
                })
    };
