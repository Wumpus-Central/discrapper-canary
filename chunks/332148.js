var i = t(544891),
    l = t(570140),
    r = t(346479),
    a = t(624453),
    o = t(668781),
    s = t(981631),
    u = t(388032);
let d = {
    async pinMessage(e, n) {
        let { id: t, name: l } = e;
        await r.Z.unarchiveThreadIfNecessary(e.id),
            i.tn
                .put({
                    url: s.ANM.PIN(t, n),
                    oldFormErrors: !0,
                    rejectWithError: !0
                })
                .catch(() => {
                    let n;
                    (n = e.isPrivate()
                        ? u.intl.formatToPlainString(u.t.Q89oQU, { maxPins: s.tG9 })
                        : u.intl.formatToPlainString(u.t.NnO1S0, {
                              maxPins: s.tG9,
                              channelName: l
                          })),
                        o.Z.show({
                            title: u.intl.string(u.t.HI88Q0),
                            body: n,
                            confirmText: u.intl.string(u.t.BddRzc)
                        });
                });
    },
    async unpinMessage(e, n) {
        await r.Z.unarchiveThreadIfNecessary(e.id),
            i.tn
                .del({
                    url: s.ANM.PIN(e.id, n),
                    oldFormErrors: !0,
                    rejectWithError: !0
                })
                .catch(() =>
                    o.Z.show({
                        title: u.intl.string(u.t.xFjBys),
                        body: u.intl.string(u.t['0R/Toa']),
                        confirmText: u.intl.string(u.t['7NqTJi']),
                        cancelText: u.intl.string(u.t['ETE/oK']),
                        onConfirm: d.unpinMessage.bind(d, e, n)
                    })
                );
    },
    ackPins(e) {
        l.Z.dispatch({
            type: 'CHANNEL_PINS_ACK',
            channelId: e
        });
    },
    fetchPins(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            t = a.Z.getPinnedMessages(e);
        if (!!n || null == t || (!t.loaded && !t.loading))
            l.Z.dispatch({
                type: 'LOAD_PINNED_MESSAGES',
                channelId: e
            }),
                i.tn
                    .get({
                        url: s.ANM.PINS(e),
                        retries: 2,
                        oldFormErrors: !0,
                        rejectWithError: !0
                    })
                    .then(
                        (n) => {
                            l.Z.dispatch({
                                type: 'LOAD_PINNED_MESSAGES_SUCCESS',
                                messages: n.body,
                                channelId: e
                            });
                        },
                        () => {
                            l.Z.dispatch({
                                type: 'LOAD_PINNED_MESSAGES_FAILURE',
                                channelId: e
                            });
                        }
                    );
    }
};
n.Z = d;
